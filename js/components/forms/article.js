import React from "react";
import {getArticleTypes, createArticle, updateArticle} from '../../requests';
import { Button, Input, Row, Col, Label, Form, FormGroup } from 'reactstrap';
import Editor from "./Editor";
import {arrToObj} from "../helpers";
import { ArticleSchema } from './schemas';
import { SingleDatePicker } from 'react-dates';
import moment from "moment";

class Article extends React.Component {
    state = {
        articleTypes: {},
        loading: false,
        publishedDate: null,
        body: '',
    };

    render() {
        const { article } = this.props;
        const { articleTypes } = this.state;

        let tt = Object.values(articleTypes);

        let UI = tt ?  <Input name='articleTypeId' id="articleTypeId" type="select">
            {tt.map((item) => <option selected={ article && article.articleTypeId === item.articleId} value={item.articleId}>{item.articleTypeName}</option>)}
        </Input> : null;


        return (
            <div className="">
                <Form onSubmit={this.submit}>
                    <Row>
                        <Col className={"col-xs-24 col-lg-16"}>
                            <div className={"p-4"}>
                                <FormGroup>
                                    <Label for="articleTypeId">
                                        Category
                                    </Label>
                                    { UI }
                                </FormGroup>
                                <FormGroup>
                                    <Label for="subject">
                                        Subject
                                    </Label>
                                    <Input name='subject' id="subject" defaultValue={ article ? article.subject : "" }/>
                                </FormGroup><FormGroup>
                                <Label for="body">
                                    Body
                                </Label>
                                <Editor name='body' defaultValue={ article ? article.body : "" } onChange={this.handleChange} />
                                </FormGroup><FormGroup>
                                    <Label for="summary">
                                        Summary
                                    </Label>
                                    <Input name='summary' type="textarea" id="summary" defaultValue={ article ? article.summary : "" }/>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col className={"col-xs-24 col-lg-8 bg-light"}>
                            <div className={"p-4"}>
                            <FormGroup>
                                <Label for="date">
                                    Publish Date
                                </Label>
                                <div>
                                <SingleDatePicker
                                    daySize={39}
                                    date={this.state.publishedDate}
                                    onDateChange={date => this.setState({ publishedDate: date })}
                                    focused={this.state.focused}
                                    isDayBlocked={() => false}
                                    onFocusChange={({ focused }) => this.setState({ focused })}
                                    id="publishedDate"
                                    numberOfMonths={1}
                                    disabled={false}
                                    initialDate={'null'}
                                    isDayHighlighted={ () => false}
                                    autoFocus
                                    // enableOutsideDays={true}
                                    isOutsideRange={() => false}


                                    // initialVisibleMonth={() => moment().subtract(2, "M")}
                                />
                                </div>
                            </FormGroup>
                                {/*<FormGroup>*/}
                                {/*    <Label for="featured">*/}
                                {/*        Featured?*/}
                                {/*    </Label>*/}
                                {/*    <div>*/}
                                {/*        <input type={'checkbox'} name={'featured'} id={'featured'} />*/}
                                {/*    </div>*/}
                                {/*</FormGroup>*/}
                            <FormGroup>
                                <Label for="file">
                                    Featured Image
                                </Label>
                                <Input name='file' type="file" id="file" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pictureUrl">
                                    Picture URL
                                </Label>
                                <Input name='pictureUrl' readonly type="text" id="pictureUrl" value={article ? article.pictureUrl : ""}/>
                            </FormGroup>
                            <button type="submit" className="btn btn-primary" disabled={this.state.loading}>
                                { this.state.loading ? 'Loading...' : this.props.article ? "Update" : "Create" }
                            </button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }

    componentDidMount() {
        const { article } = this.props;
        getArticleTypes().then(articles => {
            this.setState((state) => ({
                articleTypes: arrToObj(articles, 'articleId')
            }));
        });
        article ? this.setState((prevState) => {
           return {
               ...prevState,
               ...article,
               publishedDate: moment(article.publishedDate),
               body: article.body
           }
        }) : this.setState({
            publishedDate: moment()
        });
    }

    handleChange = (newContent) => {
        this.setState({
            body: newContent
        })
    };

    addArticle = payload => {

        this.setState({
            loading: true
        });
        createArticle(payload, 'file').then((res) => {
            this.props.onNewArticle(res);
            this.setState({
                loading: false
            });
        });
    };

    handleArticleUpdate = payload => {
        updateArticle(payload, 'file').then((res) => {
            this.props.onUpdateArticle(res);
        });
    };

    submit = e => {
        e.preventDefault();
        let {publishedDate, createdDate, body} = this.state;
        // alert(JSON.stringify(this.state));
        // return;

        let updateKey = this.props.updateKey;
        let formData = new FormData(e.target);

        updateKey ? formData.append('id', updateKey) : null;
        let payload = {};
        for (let entry of formData) {
            if(entry[0] === 'file' && entry[1].name === ''){
                continue;
            }
            payload[entry[0]] = entry[1]
        }
        payload.publishedDate = publishedDate;
        createdDate ? payload.createdDate = createdDate : payload.createdDate = new Date();
        payload.body = body;

        // alert(JSON.stringify(payload));

        updateKey
            ? this.handleArticleUpdate(payload)
            : this.addArticle(payload);
    };
}



export default Article;

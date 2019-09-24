import React from 'react';
import { getTwitterTimeline } from "../requests";
import moment from "moment";

export default class SocialBucket extends React.Component {

    render() {
        const { list } = this.state;
        return list ? list.map((elem, i) => {
            const date = elem && elem.created_at || Date.now();
            return elem ? <div className="excerpt" key={i}>
                <span className="d-block mb-2">
                    {/*{moment(date).format("Do MMMM YYYY")}*/}
                    {elem.created_at}
                    <a href={"https://twitter.com/" + elem.user.screen_name + '/status/' + elem.id_str } target="_blank" className="p-1">
                        <span className="social twitter duo">Twitter</span>
                    </a>
                </span>
                <p className="">
                    { elem.text }
                </p>
            </div> : null
        }) : null;
    }

    state = {
        list: null
    };
    componentDidMount() {
        getTwitterTimeline(6).then((data) => {
            this.setState({
                list: data
            })
        });
    }
}

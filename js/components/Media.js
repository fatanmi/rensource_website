import React from 'react';
import {api} from "../requests/routes";
import moment from "moment";

export default class NewsPage extends React.Component {
    render() {
        const {videos} = this.state;
        let rowHeight = this.state.rowHeight ? this.state.rowHeight : 400;
        let colSize = this.state.colSize ? this.state.colSize : 'col-lg-8';

        let videosList = videos ? videos.map( (vid, i) => {
            return <div className={colSize} key={i}>
                <video
                    id={vid.id}
                    className="vid video-js"
                    controls
                    preload="auto"
                    poster={vid.poster}
                    data-setup='{}'
                    // style={{height: rowHeight + 'px'}}
                    style={{height: 'auto'}}
                >
                    <source src={vid.src} type="video/mp4" />
                    <p className="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">
                            supports HTML5 video
                        </a>
                    </p>
                </video>
            </div>
        }) : null;

        return <React.Fragment>
            <div className="row justify-content-between" style={{height: rowHeight + 'px'}}>
                { videosList }
            </div>
        </React.Fragment>
    }

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            loading: false
        };
    }

    componentDidMount() {
        let arr = document.getElementById('videos');
        let dd = JSON.parse(arr.dataset['src']);
        let rh = arr.dataset['rowHeight'];
        let cs = arr.dataset['colSize'];
        this.setState({
            videos: dd,
            rowHeight: rh,
            colSize: cs,
        })
    }
}

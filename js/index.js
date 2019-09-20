import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from 'react-dom';
import "bootstrap/js/src/util";
import "bootstrap/js/src/tab";
import "bootstrap/js/src/modal";
import "bootstrap/js/src/dropdown";
import "bootstrap/js/src/tooltip";
import "bootstrap/js/src/carousel";
import "bootstrap/js/src/collapse";
import $ from "jquery";
import "./app/forms";
import "./app/toastr";
import "./app/owl";
import "./app/video";
import "./app/alerts";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {
    ArticlesBucket,
    RssFeedBucket,
    SocialBucket,
    Article,
    NewsPage, ManageArticle, ManageArticleType, ManageRSS } from './components';


let d = document;

let news_bucket = d.getElementById("listing");
let social_bucket = d.getElementById("socialListing");
let rssfeed_bucket = d.getElementById("rssfeeds");
let article = d.getElementById("article");
let news = d.getElementById("newspage");
let managerss = d.getElementById("managerss");
let managearticle = d.getElementById("managearticle");
let managearticletype = d.getElementById("managearticletype");

if(rssfeed_bucket){
    ReactDOM.render(<RssFeedBucket />, rssfeed_bucket)
}
if(news_bucket){
    ReactDOM.render(<ArticlesBucket />, news_bucket)
}
if(social_bucket){
    ReactDOM.render(<SocialBucket />, social_bucket)
}
if(news){
    ReactDOM.render(<NewsPage />, news)
}
if(article){
    ReactDOM.render(<Article />, article)
}

if(managearticle){
    ReactDOM.render(<ManageArticle />, managearticle)
}

if(managearticletype){
    ReactDOM.render(<ManageArticleType />, managearticletype)
}

if(managerss){
    ReactDOM.render(<ManageRSS />, managerss)
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    function initScrollbar(){
            try {
                const ps = new PerfectScrollbar("#news", {
                    scrollingThreshold: 0
                });
                const ps2 = new PerfectScrollbar("#social", {
                    scrollingThreshold: 0
                });
                const ps3 = new PerfectScrollbar("#press", {
                    scrollingThreshold: 0
                });
            } catch (e) {
                console.log(e);
            }
    }

    let trigger = document.querySelector('a[href*="#what-we-do-section"]');
    let howItWorks = document.querySelector('#howItWorks');
    let services = document.querySelector('#services');

    trigger && trigger.addEventListener('click', scrollToPos);
    howItWorks && howItWorks.addEventListener('click', handleScroll);
    services && services.addEventListener('click', handleScroll);

    function handleScroll(e){
        try{
            e.preventDefault();
            let id = $(this).data('target');
            let elem = document.getElementById(id);
            let domRect = elem.getBoundingClientRect();
            let n = domRect.top;
            window.scrollTo({top: n,left: 0,behavior: 'smooth'})
        } catch (e) {
            console.log(e);
        }

    }

    function scrollToPos(e){
        // e.preventDefault();
        try {
            let id = $(this).data('target');
            let elem = document.getElementById(id);
            let domRect = elem.getBoundingClientRect();
            let n = domRect.top;
            var start = null;
            function render(timestamp){
                if (!start) start = timestamp;
                let progress = timestamp - start;
                window.scrollTo(null, progress);
                //stopping condition
                if (progress < n) {
                    window.requestAnimationFrame(render);
                }
            }
            window.requestAnimationFrame(render);
        } catch (e) {
            console.log(e);
        }

    }


    window.onscroll = function (e) {
        let tt = document.querySelector("#toTop");
        if(isTall()){
            $(tt).addClass('show');
        } else {
            $(tt).removeClass('show');
        }
        function isTall() {
            let scrollDistance = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
            return scrollDistance > document.documentElement.clientHeight;
        }
    };

    initScrollbar();

});



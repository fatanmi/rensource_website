import axios from "axios";
import {toast} from "react-toastify";


const token = "AAAAAAAAAAAAAAAAAAAAAJoCwwAAAAAAJJ0%2BvUEySDOOb947k4klmuQgWW0%3DSN6auAIJFgdZGPZWsu8c74F5sPWjAJdJdf04SJrmVNdJpjs4Lp";
let tt = `Bearer ${token}`;

const twitterInstance = axios.create({
    baseURL: 'https://api.twitter.com/1.1',
    headers: {
        'Authorization': tt,
        'responseType': 'json',
        'Cache-Control': 'no-cache',
        'Content-Type': 'aplication/json'
    }
});

function handleSuccessResponse(response) {
    const { message } = response;
    // console.log(response);
    toast.success(message);
    return response.data.data;
}

function handleFailureResponse(err) {
    if (err.response) {
        const { message } = err.response.data;
        toast.error(message);
    } else if (err.request) {
        toast.error("Server appears to be down");
    } else {
        console.log("err", err);
    }
}

export const getTwitterTimeline = (size) => {
    return twitterInstance.get('/statuses/user_timeline.json',
        {params: {
            screen_name: 'rensourceenergy',
            count: size
        }
    })
        .then(handleSuccessResponse)
        .catch(handleFailureResponse);
};

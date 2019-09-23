import axios from "axios";
import {toast} from "react-toastify";


const token = "AAAAAAAAAAAAAAAAAAAAAJoCwwAAAAAAJJ0%2BvUEySDOOb947k4klmuQgWW0%3DSN6auAIJFgdZGPZWsu8c74F5sPWjAJdJdf04SJrmVNdJpjs4Lp";
let tt = `Bearer ${token}`;

const twitterInstance = axios.create({
    baseURL: 'https://xser.2switches.com'
});

function handleSuccessResponse(response) {
    console.log(response);
    return response.data.body;
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
    return twitterInstance.get('/home').then(handleSuccessResponse)
        .catch(handleFailureResponse);
};

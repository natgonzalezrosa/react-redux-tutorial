import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";

// ACTION CREATOR
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
};

// our new action creator
export function getData() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: DATA_LOADED, payload: json });
        });
    };
}
import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, state, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const RerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state}addPost = {addPost}/>
    </BrowserRouter>
        , document.getElementById('root')
);
}
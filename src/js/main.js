import React from "react";
import ReactDOM from "react-dom";
import {StyleRoot} from 'radium';

import { Provider } from "react-redux"
import store from "./store.js"

import MyComponent from "./Components/MyComponent";

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <StyleRoot style={{fontFamily: 'Source Sans Pro'}}>
            <MyComponent/>
        </StyleRoot>
    </Provider>
    , app);
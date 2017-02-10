/**
 * Created by nzayatz14 on 8/15/16.
 */

import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducers/MyReducer.js";
import createLogger from "redux-logger";

const middleware = applyMiddleware(createLogger(
    {
        collapsed: (getState, action) => true,
        //diff: true,
    }
));
export default createStore(reducer, middleware);

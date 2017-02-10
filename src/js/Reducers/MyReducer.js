/**
 * Created by nzayatz14 on 11/28/16.
 */

import { TEXT_FIELD_TEXT_CHANGED } from '../Utilities/ActionConstants.js'


/**
 * Function called to update the state of the Top NavBar when an action occurs
 *
 * @param state: the current state of the app
 * @param action: the action that just took place
 * @returns {*}: the updated state of the app
 */
export default function reducer(state={
    labelText: ""
}, action) {

    switch (action.type) {

        case TEXT_FIELD_TEXT_CHANGED: {
            return {...state, labelText: action.payload};
        }
    }

    return state;
}
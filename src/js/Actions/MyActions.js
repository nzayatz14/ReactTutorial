

import { TEXT_FIELD_TEXT_CHANGED } from '../Utilities/ActionConstants';


/**
 * Function called to update the users input text
 *
 * @param newText: the new text the user put in
 * @returns {{type, payload: *}} an action to be handled by the reducer
 */
export function updateText(newText) {

    return {
        type: TEXT_FIELD_TEXT_CHANGED,
        payload: newText
    }
}
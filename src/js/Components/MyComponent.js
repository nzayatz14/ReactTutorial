/**
 * Created by nzayatz14 on 2/9/17.
 */

import React from "react";
import Radium from 'radium';
import { connect } from "react-redux";

import { updateText } from '../Actions/MyActions.js';


@connect((store) => {
    return {
        labelText: store.labelText
    };
})
@Radium
export default class MyComponent extends React.Component {


    /**
     * Constructor function for this class
     *
     * @param void:
     * @returns: void
     */
    constructor() {
        super();

    }


    /**
     * Render function for this class
     *
     * @param void:
     * @returns: void
     */
    render() {

        const { labelText } = this.props;

        //Check to see if this is the admin
        var adminComponent = null;
        if (labelText == "Admin") {
            adminComponent = (
                <div style={{height: 500, width: 500, background: "#ffff00"}}></div>
            );
        }

        return (
            <div style={[{width: "100%", height: "100%"}]}>

                <h1>{"React Demo :)"}</h1><br/>
                <label>{"Hello " + labelText + "!"}</label><br/>

                <input type="text" onChange={(event) => {
                    this.props.dispatch(updateText(event.target.value))
                }} /><br/>

                {adminComponent}
            </div>
        );
    }
};
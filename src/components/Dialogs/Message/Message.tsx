import classes from "./../Dialogs.module.css";
import React from "react";
import {MessageTypeProps} from "../../../App";





export const Message = (props: MessageTypeProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
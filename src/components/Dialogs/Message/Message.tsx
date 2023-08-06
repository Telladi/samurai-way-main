import classes from "./../Dialogs.module.css";
import React, {FC} from "react";
import {MessageType} from "../../../redux/state";





export const Message: React.FC <MessageType> = ({message, id}) => {
    return (
        <div className={classes.message}>{message}</div>
    )
}
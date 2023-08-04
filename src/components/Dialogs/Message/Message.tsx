import classes from "./../Dialogs.module.css";
import React from "react";
import state from "../../../redux/state";







export const Message = () => {
    return (
        <div className={classes.message}>{state.dialogsPage.messages}</div>
    )
}
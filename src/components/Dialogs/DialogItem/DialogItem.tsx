import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../redux/state";

export type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {

    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/"} >{props.name}</NavLink>
        </div>
    )
}
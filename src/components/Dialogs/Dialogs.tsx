import React from "react";
import classes from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogsPropsType, MessageTypeProps} from "../../App";
import {message} from "antd";


export type DialogPropsType = {
    dialogs: DialogsPropsType[]
    messages: MessageTypeProps[]
}


export const Dialogs = (props: DialogPropsType) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs}>
                {props.dialogs}
                </div>
            </div>
            )
        }

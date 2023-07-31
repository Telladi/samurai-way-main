import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number;
    name: string
}
export type DialogsPropsType = {
    message: DialogItemPropsType
}
type MessageTypeProps = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageTypeProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Viktor'},
    ]

    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "hi"},
        {id: 3, message: "hi"},
        {id: 4, message: "hi"},
        {id: 5, message: "hi"},
    ]


    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages
        .map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={classes.mesages}>
                {messagesElements}
            </div>

        </div>
    )

}





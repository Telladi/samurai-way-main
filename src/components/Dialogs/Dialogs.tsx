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


export const Dialogs = (props: DialogsPropsType) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Viktor'},
    ]

    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "hi"},
        {id: 3, message: "hi"},
        {id: 4, message: "hi"},
        {id: 5, message: "hi"},
        {id: 6, message: "hi"},
    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    ];


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}




            </div>
            <div className={classes.mesages}>
          {/*      <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>*/}
            </div>

        </div>
    )

}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageTypeProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


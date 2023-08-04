import React from "react";
import classes from "./Dialogs.module.css"
import {Message} from "./Message/Message";

import {DialogItem} from "./DialogItem/DialogItem";
import state from "../../redux/state";
;




export const Dialogs= () => {

    let messagesData = state.dialogsPage.messages
    let dialogsData = state.dialogsPage.dialogs

    let dialogs = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messages = messagesData.map(message => <Message message={} id={message.id}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs}>
                {dialogs}
            </div>
            <div>
                {messages}
            </div>
        </div>
    )
}

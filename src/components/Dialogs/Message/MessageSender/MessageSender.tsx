import React, {ChangeEvent} from 'react';
import {newMessageAC, updateMessageAC} from "../../../../redux/dialogsReducer";
import {DialogsPageType, StoreType, UnionType} from "../../../../redux/state";
import s from './MessageSender.module.css'

export type MessageSenderPropsType = {
    newMessageText: string
    getNewMessage: ()=> void
    updateNewMessageText: (text: string) => void
}


export const MessageSender = (props: MessageSenderPropsType) => {



    const newMessageHandler = () => {
      props.getNewMessage()
    }

    const updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => (
        props.updateNewMessageText(e.currentTarget.value)
    )




    return (
        <div className={s.sendForm}>
           <textarea  className={s.textarea} placeholder={'Type your new message'}
                value={props.newMessageText}
                onChange={updateNewMessageHandler}/>
           <button className={s.button} onClick={newMessageHandler}>Send</button>
        </div>
    );
};


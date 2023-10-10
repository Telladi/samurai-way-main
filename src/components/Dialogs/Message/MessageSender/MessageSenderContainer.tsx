import React, {ChangeEvent} from 'react';
import {newMessageAC, updateMessageAC} from "../../../../redux/dialogsReducer";
import {DialogsPageType, StoreType, UnionType} from "../../../../redux/state";
import s from './MessageSender.module.css'
import {MessageSender, MessageSenderPropsType} from "./MessageSender";
import {AppRootStateType} from "../../../../redux/store";

export type MessageSenderContainerPropsType = {
    store: any
}


export const MessageSenderContainer = (props: MessageSenderContainerPropsType) => {

  const newMessageText = props.store.getState().dialogsPage.newMessageText


    const newMessageHandler = () => props.store.dispatch(newMessageAC())

    const updateNewMessageHandler = (text: string) => {
        props.store.dispatch(updateMessageAC(text))
     }


    return (
        <MessageSender newMessageText={newMessageText}
                       getNewMessage={newMessageHandler}
                        updateNewMessageText={newMessageHandler}
        />
    );
};


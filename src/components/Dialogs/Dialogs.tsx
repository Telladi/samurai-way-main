import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state";


export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


export const Dialogs = (props: DialogsType) => {



    const onChangeHandler = () => {

    }
    const onClickHandler = () => {

    }

    let dialogsData = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesData = props.messages.map(message => <Message message={message.message} id={message.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <ul>
                    {dialogsData}
                </ul>
            </div>
            <div>
                <ul>
                    {messagesData}
                </ul>
            </div>
            <textarea onChange={onChangeHandler}></textarea>
            <Button title={"send message"} onClickCallback={onClickHandler}/>
        </div>
    )
}

type ButtonPropsType = {
    title: string
    onClickCallback: ()=>void
    disables?: boolean
}

const Button: React.FC <ButtonPropsType> = (props: ButtonPropsType) => {
    const {title, onClickCallback} = props

    const onClickHandler = () => {
        onClickCallback()
    }

    return (
        <button disabled={false} onClick={onClickHandler}>{title}</button>
    )
}
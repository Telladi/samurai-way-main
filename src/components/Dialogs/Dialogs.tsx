import React, {ChangeEvent, useState} from "react";
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
        setValue(value)
        setValue('')
    }

    let dialogsData = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesData = props.messages.map(message => <Message message={message.message} id={message.id}/>)
    let [value, setValue] = useState<string>('')
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
            <Button title={"send message"} onClickCallback={onClickHandler}/>
            <TextArea value={value} onChangeCallBack={setValue}/>
        </div>
    )
}

type ButtonPropsType = {
    title: string
    onClickCallback: () => void
    disables?: boolean
}

const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
    const {title, onClickCallback} = props

    const onClickHandler = () => {
        onClickCallback()
    }

    return (
        <button disabled={false} onClick={onClickHandler}>{title}</button>
    )
}

export type TextAreaPropsType = {
    value: string
    onChangeCallBack: (text: string) => void
}

export const TextArea: React.FC<TextAreaPropsType> = (props: TextAreaPropsType) => {
    const {value, onChangeCallBack} = props
    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeCallBack(e.currentTarget.value)
    }
    return (
        <textarea value={value} onChange={onChangeTextArea}></textarea>
    )
}

export type AddInputFormPropsType = {
    title: string
    onClickCallback: (text: string) => void

}


export const AddInputForm = (props: AddInputFormPropsType) => {

    const {title, onClickCallback} = props
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string>('')
    const onClickHandler = () => {
        if(text.length === 0){
            setError('field must be empty')
        }else{
        onClickCallback(text)
        setText('')}
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <div>
            <input value={text} onChange={onChangeHandler}></input>
            <button onClick={onClickHandler}>{title}</button>
            {error && <div>{error}</div>}
        </div>
    )
}

import React, {ChangeEvent, FC} from "react";
import s from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionType, AddNewMessage, updateMessage} from "../../redux/state";

export type DialogsPagePropsType = {
    messagesPage: DialogsArrayType
    dispatch: (action:ActionType) => void
}


export type DialogsArrayType = {
    dialogsData: Array<dialogsData>
    messagesData: Array<messagesData>
    newMessageText: string
}

export type dialogsData = {
    id: number
    name: string
}
export type messagesData = {
    id: number
    message: string

}




export const Dialogs: React.FC<DialogsPagePropsType> = (props) => {


    let friendsElems =
        props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElems =
        props.messagesPage.messagesData.map(m => <MessageItem message={m.message}/>)

    const refTextAreaMessage = React.createRef<HTMLTextAreaElement>();




    const sendNewMessage = () => {
        // props.addMessageTextCallBack()
        props.dispatch(AddNewMessage())
    }

    let updateNewMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateMessageText(e.currentTarget.value)
        props.dispatch(updateMessage(e.currentTarget.value))
    }


    return (
        <div>
            <div className={s.containerBlock}>

                <div className={s.friendsListBlock}>
                    {friendsElems}
                </div>

                <div className={s.messageAndTexBlock}>
                    <div>
                        {messageElems}
                    </div>
                    <div className={s.newMessageBlock}>
                        <textarea className={s.textArea} value={props.messagesPage.newMessageText} placeholder='Write New Message'
                                  onChange={updateNewMessage}/>
                        <button className={s.sendButton} onClick={sendNewMessage}> Add Message</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

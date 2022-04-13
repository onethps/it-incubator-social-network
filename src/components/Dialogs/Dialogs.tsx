import React from "react";
import s from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPropsContainerType} from "./DialogsPageContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TexArea} from "../../common/FormValid/FormValid";
import {maxLength, requeredFiled} from "../../validators/validators";


export type dialogsData = {
    id: number
    name: string
}

export const Dialogs: React.FC<DialogPropsContainerType> = (props) => {

    let friendsElems = props.messagesPage.dialogsData.map((d:dialogsData,i) => <DialogItem key={i} name={d.name} id={d.id}/>)

    let messageElems = props.messagesPage.messagesData.map((m,i) => <MessageItem key={i} message={m.message}/>)


    const onSubmit = (formData:FormDataType) => {

        props.addMessageTextCallAction(formData.DialogMessageArea)

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
                        <DialogReduxForm  onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>

        </div>

    )
}

type FormDataType = {
    DialogMessageArea:string
}

const maxLength20 = maxLength(20)

const DialogForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                validate={[requeredFiled, maxLength20]}
                className={s.textArea} name={'DialogMessageArea'} component={TexArea}/>
        </div>
        <div>
            <button>Add Message</button>
        </div>

    </form>
}

const DialogReduxForm = reduxForm<FormDataType>({form:'dialog'})(DialogForm)
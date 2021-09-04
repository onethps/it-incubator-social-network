import React from "react";
import s from '../dialogs.module.css'


export type MessageType = {
    message: string
}

export const MessageItem: React.FC<MessageType> = (props) => {

    return <div>
        <div className={s.message}>{props.message}</div>
    </div>
}

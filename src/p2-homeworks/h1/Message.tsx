import React from 'react'
import s from './Message.module.css'
import {Avatar} from "./tests/Avatar";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (

        <div className={s.messageCss}>
            <Avatar avatar={props.avatar} />
            {/*<img src={props.avatar}/>*/}



            <div className={s.messageCssBlock}>
                <strong> {props.name} </strong>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>


            </div>

        </div>
    )
}

export default Message

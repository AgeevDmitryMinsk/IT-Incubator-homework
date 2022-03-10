// rsc
import React from 'react'
import Message from "./Message";
import photoDimich from "../../dimich_fasebook.jpg"

const messageData = {
    avatar: "https://phonoteka.org/uploads/posts/2021-05/1622021938_9-phonoteka_org-p-pop-arti-krasivo-11.jpg",
    name: "Marilyn Monroe",
    message: `Прекрасного воскресного дня! Have a beautiful Sunday afternoon! Ich wünsche Ihnen einen schönen Sonntagnachmittag`,
    time: new Date().toLocaleTimeString(),
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <hr/>
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

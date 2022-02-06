// rsc
import React from 'react'
import Message from "./Message";
import photoDimich from "../../dimich_fasebook.jpg"

const messageData = {
    avatar: "https://scontent.fmsq2-1.fna.fbcdn.net/v/t1.18169-9/10451136_627830624018135_2043333501645767488_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fxH7v3V-IbEAX98L-3G&_nc_ht=scontent.fmsq2-1.fna&oh=00_AT9y3cqTQfjkJDXy-AkLrEpoS_5BQY-amBq4r_mdTvFzrQ&oe=62231D9F",
    name: "Dimich",
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

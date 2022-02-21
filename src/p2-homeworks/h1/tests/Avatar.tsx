// rsc

import React from 'react';


type AvatarPropsType = {
    avatar: string
}

export const Avatar = (props: AvatarPropsType) => {
    return (
        <div>
            <img src={props.avatar} alt={`avatar`}/>
        </div>
    );
};



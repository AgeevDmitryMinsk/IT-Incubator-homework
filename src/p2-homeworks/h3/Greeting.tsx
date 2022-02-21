import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: UserType[]
    onKeyPressHandleInput: (event: React.KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, onKeyPressHandleInput} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : `` // need to fix with (?:)
    const errorClass = s.text_error
    const submitButton = s.submit_button
    //let errorBoolen = name ? false : true

    return (
        <>
            Please, enter a new user name here below:
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       onBlur={setNameCallback} //подсветит ошибку, если перешел на поле инпут, ничего не ввел и уходишь с поля инпута
                       className={inputClass}
                       onKeyPress={onKeyPressHandleInput}/>
                <button disabled={!name} onClick={addUser} className={submitButton}>add</button>
                <span>Total number of users: {totalUsers}</span>
                <div className={errorClass}>{error}</div>
                <div> {users.map((el, index) => {
                    return <div key={index}>
                        {index + 1}). {el.name}
                    </div>
                })}
                </div>
            </div>
        </>
    )
}

export default Greeting

import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {log} from "util";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    //console.log(`name=`, name )
    //console.log(`error=`, error )



    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        //console.log(e.currentTarget.value)
        let newName = e.currentTarget.value
        let newTrimmedName = newName.trim() //Метод trim() удаляет пробельные символы с начала и конца строки, НО НЕ ДАЕТ ВОЗМОЖНОСТЬ ВВЕСТИ ИМЯ ИЗ ДВУХ СЛОВ setName(newTrimmedName)
        //console.log(`newName=`, newName)
        //console.log(`newTrimmedName=`, newTrimmedName)
        //setName(e.currentTarget.value.trim) // need to fix
        if (newName) {
            //Метод trim() удаляет пробельные символы с начала и конца строки, НО НЕ ДАЕТ ВОЗМОЖНОСТЬ ВВЕСТИ ИМЯ ИЗ ДВУХ СЛОВ setName(newTrimmedName)
            // ПОЭТОМУ setName(newName):
            setName(newName)
            setError(``)
        } else {
            setName(``)
            setError(`Please, enter the text!!! `) //Error messsage1
        }

    }

    const addUser = () => {

        // добавил trim() чтобы в массив имен залетало имя ли несколько имен через пробел, но обрезая при этом крайние пробелы
        if (name.trim()) {
            console.log(`Hello, ${name}  !`) // need to fix
            addUserCallback(name)
            setName(``)
        } else {
            console.log(`You press Enter, You cannot send an empty message!`)
            setError(`You cannot send an empty message!!!`) //Error messsage1
        }


        //alert(`Hello, ${name}  !`) // need to fix

    }

    function onKeyPressHandleInput(event: React.KeyboardEvent<HTMLInputElement>) {
        // console.log(event.charCode) код клавиши Enter event.charCode = 13
        // if (event.charCode === 13) {
        if (event.key === "Enter"){
            console.log(`нажат Enter`)
            addUser()
        }
    }

    const totalUsers = users.length // need to fix
    //console.log(totalUsers)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            onKeyPressHandleInput={onKeyPressHandleInput}
        />
    )
}

export default GreetingContainer

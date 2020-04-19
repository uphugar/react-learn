import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and am {props.age} old!</p>
            <p>My hobbies are {props.children}</p>
            <input type='text' onChange={props.nameChanged} defaultValue={props.name}/>
        </div>
    )
}

export default person;
import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and am {props.age} old!</p>
            <p>My hobbies are {props.children}</p>
        </div>
    )
}

export default person;
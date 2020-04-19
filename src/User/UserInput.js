import React from 'react'

const UserInput = (props) =>{
    return (
        <div><input type='text' onChange={props.usernameHandler} defaultValue={props.username}></input></div>
    )
}
export default UserInput;

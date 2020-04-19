import React from 'react'
import './User.css'

const UserOutput =(props)=>{
    return (
        <div className='UserOutput'>
            <p>Name - {props.name}</p>
            <p>UserName - {props.username}</p>
            <p>email - {props.email}</p>
        </div>
    )
}
export default UserOutput;

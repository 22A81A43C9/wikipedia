import React from 'react'
import './Card.css'

function Card(props) {
    const {
        id , name,gender,email,status
    } = props;
  return (
    <div className='card'>
        <p> id: {id}</p>
        <p> name: {name}</p>
        <p> gender: {gender}</p>
        <p> email: {email}</p>
        <p> status: {status}</p>
      
    </div>
  )
}

export default Card

import React from 'react'

import './UserCard.scss'

export default function UserCard({ teamMember }) {
    return (
        <div className='userCard'>
            <h1>{teamMember.name}</h1>
            <h3>{teamMember.email}</h3>
            <p>{teamMember.role}</p>
        </div>
    )
}
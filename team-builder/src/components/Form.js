import React, { useState } from 'react'

import UserCard  from './UserCard'

import './Form.scss'

export default function Form() {
    const [teamList, setTeamList] = useState([])
    const [user, setUser] = useState({})
  
    function handleSubmit(event) {
      event.preventDefault();
      setTeamList([...teamList, {...user, id: `${user.name}`}])
      console.log('Form submitted, Team List: ', teamList, user)
    }
  
    function handleChange(event) {
      setUser({...user, [event.target.name]: event.target.value})
    //   console.log(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input placeholder='Name' name='name' onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input placeholder='Email' name='email' type='email' onChange={handleChange}/>
                </label>
                <label>
                    Role:
                    <input placeholder='Input' name='role' onChange={handleChange}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
            <div className='cardList'>
            {
                teamList.map(teamMember => {
                    return (
                        <UserCard teamMember={teamMember} teamList={teamList}/>
                    )
                })
            }
            </div>
            </div>
    )
}
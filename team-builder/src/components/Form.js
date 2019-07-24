import React, { useState, useEffect } from 'react'

import UserCard  from './UserCard'

import './Form.scss'
import { Input, Button } from 'semantic-ui-react'

export default function Form({ memberToEdit, setMemberToEdit, isEditing, setIsEditing }) {
    const [teamList, setTeamList] = useState([{name: 'asd1', email: 'asd@asd', role: 'asd', id: 'asd@asd'},{name: 'asd2', email: 'asd@asd', role: 'asd', id: 'asd@asd'},{name: 'asd3', email: 'asd@asd', role: 'asd', id: 'asd@asd'}])
    const [user, setUser] = useState({})
    console.log(isEditing)
  
    function handleSubmit(event) {
      event.preventDefault();
      if(isEditing) {
          console.log('Is Editing')
      }
      else {
        setTeamList([...teamList, {...user, id: `${user.email}`}])
        console.log('Form submitted, Team List: ', teamList)
      }
    }
  
    function handleChange(event) {
      setUser({...user, [event.target.name]: event.target.value})
    //   console.log(event.target.value)
    }

    useEffect(() => {
            setMemberToEdit(memberToEdit)
            
            console.log('Use Effect change', memberToEdit)
    }, [memberToEdit])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <Input placeholder='Name' name='name' onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <Input placeholder='Email' name='email' type='email' onChange={handleChange}/>
                </label>
                <label>
                    Role:
                    <Input placeholder='Input' name='role' onChange={handleChange}/>
                </label>
                <Button type='submit'>Submit</Button>
            </form>
            <div className='cardList'>
            {
                teamList.map(teamMember => {
                    return (
                        <UserCard
                        teamMember={teamMember}
                        setMemberToEdit={setMemberToEdit}
                        />
                    )
                })
            }
            </div>
            </div>
    )
}
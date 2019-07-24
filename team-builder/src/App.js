import React, {useState} from 'react';
import './App.scss';

import Form from './components/Form'

function App() {
  const [memberToEdit, setMemberToEdit] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="App">
        <h1>Team Builder</h1>
        <Form
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        />
    </div>
  );
}

export default App;

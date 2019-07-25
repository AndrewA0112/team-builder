import React, { useState } from 'react';

import { Route, Link } from 'react-router-dom';

import './App.scss';

import Form from './components/Form'
import UserCard from './components/UserCard'

function App() {
  const [people, setPeople] = useState([
    { id: 0, name: "Andrew", email: "test@test", role: "Student" },
    { id: 1, name: "Brock", email: "dont@know", role: "TL" },
  ]);

  const addPerson = person => {
    setPeople([...people, { ...person, id: Date.now() }]);
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];
    const personIndex = peopleCopy.findIndex(person => person.id === editedPerson.id);
    peopleCopy[personIndex] = editedPerson;
    setPeople(peopleCopy);
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
      <Route path="/add"
        render={props => <Form {...props}
          submitPerson={addPerson}
          buttonText="Add Person"
        />} />
      <Route exact path="/"
        render={props => people.map(person => <UserCard teamMember={person} />)} />
      <Route path="/edit/:id"
        render={props => {
          const person = people.find(person => person.id.toString() === props.match.params.id);
          return <Form {...props}
            initialPerson={person}
            submitPerson={editPerson}
            buttonText="Edit Person"
          />;
        }} />
    </div>
  );
}

export default App;

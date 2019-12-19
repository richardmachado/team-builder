import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data'
import MembersList from './components/MembersList'
import Form from './components/Form'
import logo from "./logo.svg";

function App() {

  const [members, setMembers] = useState([])

  useEffect(()=>{
    setMembers(data)
  }, [])

  const addTeamMate = mate=>{
      const newMate = setMembers([...members, mate ])
  }

  return (
    <div className="App">
      <img src ={logo} alt="construction"/>
      <h1>Team members</h1>
      
      <Form addTeamMate={addTeamMate}/>
      <div className = "mainWrapper">
      {members.map(member=>{
        return <MembersList key={member.id} info={member} />
      })}
    </div>
    </div>
  );
}

export default App;
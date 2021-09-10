import React, { useEffect, useState } from 'react'
import Title from './components/Title/title'
import Message from './components/message'
import Form from './components/InsertNew/form'
import Results from './components/results' 
import phoneservice from './components/phoneservice'
import Greeting from './components/greeting'
import Summary from './components/summary'
import Absentees from './components/absentees'
import ParadeState from './components/paradestate'

//App component
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newStatus, setnewStatus ] = useState('')
  const [ newGroup, setnewGroup ] = useState('')
  const [ newexcuse, setnewExcuse ] = useState('')
  const [ newMessage, setNewMessage ] = useState(null)

  useEffect(() =>{
    phoneservice
      .getAll()
      .then(allPersons=>{
        setPersons(allPersons)
      })
  },[])
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleStatusChange = (event) => {
    console.log(event.target.value)
    setnewStatus(event.target.value)
  }

  const handleGroupChange = (event) => {
    console.log(event.target.value)
    setnewGroup(event.target.value)
  }
  
  const handleExcuseChange = (event) => {
    console.log(event.target.value)
    setnewExcuse(event.target.value)
  }

  //Adds new element to persons array
  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName.trim().toUpperCase(),
      status: newStatus.toLowerCase(),
      group: newGroup.toUpperCase(),
      excuse: newexcuse.trim
    }

    const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
      )
    
    console.log(nameCheck)

    if (!newName.trim() || !newStatus.trim() || !newGroup.trim()) {
      alert("Name/status/Group must be filled")
    } else if (nameCheck.length>0) {
      if (window.confirm(`${newName} is already added to phonebook. Would you like to update the status?`)) {
        return (
          phoneservice
            .update(nameCheck[0].id, newPerson)
            .then(updatedList=> {setPersons(persons.map(person=>
                person.id !== nameCheck[0].id
                  ? person
                  : updatedList))
          setNewMessage(`${newName} has been updated`)
          setTimeout(()=>setNewMessage(null),5000)
        })
            .catch(error=> {
              setNewMessage(`${newName} has been already been removed from the server`)
              setTimeout(()=>setNewMessage(null),5000)
            })
        )}
      } else {
        phoneservice
          .addNew(newPerson)
          .then(updatedList => {
              setPersons(persons.concat(updatedList))
              setNewMessage(`${newName} has been added`)
              setTimeout(()=>setNewMessage(null),5000)
            })
          .catch(error=> {
            setNewMessage(`${newName} has been already been added to the server`)
            setTimeout(()=>setNewMessage(null),5000)
          })
        }
        setnewStatus('')
        setNewName('')
      }

  return (
    <div>
      <Title/>
      <Message message={newMessage}/>
      <Form addName={addName}
            newName={newName}
            handleNameChange={handleNameChange}
            newStatus={newStatus}
            handleStatusChange={handleStatusChange}
            newGroup = {newGroup} 
            handleGroupChange = {handleGroupChange}
            newexcuse ={newexcuse}
            handleExcuseChange = {handleExcuseChange}/>
      <h2>List of Personnel</h2>
      <Results setPersons={setPersons} persons={persons} />
      <h2>Parade State</h2>
      <Greeting />
      <Summary persons={persons} />
      <Absentees setPersons={setPersons} persons={persons} />
      <ParadeState setPersons={setPersons} persons={persons} />

      </div>
  )
}

export default App 
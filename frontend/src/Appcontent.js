import React, { useEffect, useState } from 'react'
import Message from './components/message'
import Form from './components/insertnew/form'
import Personnellist from './components/personnellist/personnelList'
import Settings from './components/settings' 
import phoneservice from './services/phoneservice'
import Greeting from './components/title/greeting'
import Summary from './components/summary/summary'
import ParadeState from './components/paradestate'

//App component
const Appcontent = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newStatus, setnewStatus ] = useState('')
  const [ newReason, setnewReason ] = useState('')

  const [ newGroup, setnewGroup ] = useState('')
  const [ newexcuse, setnewExcuse ] = useState('')
  const [ newRole, setnewRole ] = useState('')
  
  
  const [newcdo, setnewcdo] = useState('')
  const [newcds, setnewcds] = useState('')
  const [newcos, setnewcos] = useState('')
  const [newas, setnewas] = useState('')
  const [newauthor, setnewauthor] = useState('')



  const [ newMessage, setNewMessage ] = useState(null)

  useEffect(() =>{
    phoneservice
      .getAll()
      .then(allPersons=>{
        setPersons(allPersons)
      })
  },[])

  const handlecdochange = (event) => {
      console.log(`CDO: ${event.target.value}`)
      setnewcdo((event.target.value))
    }

  const handlecdschange = (event) => {
      console.log(`CDS: ${event.target.value}`)
      setnewcds(event.target.value)
    }

  const handlecoschange = (event) => {
      console.log(`COS: ${event.target.value}`)
      setnewcos(event.target.value)
    }

    const handleaschange = (event) => {
      console.log(`Armskote: ${event.target.value}`)
      setnewas(event.target.value)
    }

    const handleauthorchange = (event) => {
      console.log(`Done by: ${event.target.value}`)
      setnewauthor(event.target.value)
    }

  //Adds new element to persons array
  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName.trim().toUpperCase(),
      status: newStatus.toLowerCase(),
      reason: (newReason) ? newReason : 'nil',
      group: newGroup.toUpperCase(),
      excuse: (newexcuse) ? newexcuse.trim : 'nil',
      role: newRole
    }

    const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
      )
    
    console.log(nameCheck)

    if (!newName.trim() || !newStatus.trim() || !newGroup.trim() || !newRole.trim()) {
      alert("All fields (besides medical excuses) must be filled")
    } else if (nameCheck.length>0) {
      if (window.confirm(`${newName.toUpperCase()} is already added to phonebook. Would you like to update the status?`)) {
        return (
          phoneservice
            .update(nameCheck[0].id, newPerson)
            .then(updatedList=> {setPersons(persons.map(person=>
                person.id !== nameCheck[0].id
                  ? person
                  : updatedList))
          setNewMessage(`${newName.toUpperCase()} has been updated`)
          setTimeout(()=>setNewMessage(null),5000)
        })
            .catch(error=> {
              setNewMessage(`${newName.toUpperCase()} has been already been removed from the server`)
              setTimeout(()=>setNewMessage(null),5000)
            })
        )}
      } else {
        phoneservice
          .addNew(newPerson)
          .then(updatedList => {
              setPersons(persons.concat(updatedList))
              setNewMessage(`${newName.toUpperCase()} has been added`)
              setTimeout(()=>setNewMessage(null),5000)
            })
          .catch(error=> {
            setNewMessage(`${newName.toUpperCase()} has already been added to the server`)
            setTimeout(()=>setNewMessage(null),5000)
          })
        }
        setnewStatus('')
        setNewName('')
      }

  return (
    <div>
      <h2>Parade State Application (For Internal Use Only)</h2>
      <Message message={newMessage}/>
      <Form addName={addName}
            newName={newName}
            setNewName={setNewName}
            newStatus={newStatus}
            setnewStatus={setnewStatus}
            newGroup = {newGroup} 
            setnewGroup = {setnewGroup}
            newexcuse ={newexcuse}
            setnewExcuse = {setnewExcuse}
            newRole ={newRole}
            setnewRole = {setnewRole}
            setnewReason={setnewReason}/>
      <Personnellist setPersons={setPersons} persons={persons}/>
      <h2>Settings</h2>
      <Settings newcdo={newcdo}
                handlecdochange={handlecdochange}
                newcds={newcds}
                handlecdschange={handlecdschange}
                newcos={newcos}
                handlecoschange={handlecoschange}
                newas={newas}
                handleaschange={handleaschange}
                newauthor = {newauthor}
                handleauthorchange ={handleauthorchange}/>
      <h2>Parade State</h2>
      <Greeting />
      <Summary persons={persons}
               newcdo={newcdo}
               newcds={newcds}
               newcos={newcos}
               newas={newas}
               newauthor = {newauthor}
               handleauthorchange ={handleauthorchange}
               />
      <ParadeState setPersons={setPersons}
                  persons={persons}
                  newauthor={newauthor} />

      </div>
  )
}

export default Appcontent 
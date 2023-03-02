import { useState, useEffect } from 'react'
import Header from './components/Header'
import TableElement from './components/Table'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [users, setUsers] = useState([])

  const newUser = (user) => {
    let opciones = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        'fname': user.fname,
        'lname': user.lname,
        'username': user.username,
        'email': user.email,
        'avatar': user.avatar
      })
    }
    fetch(`https://www.melivecode.com/api/users/create`, opciones)
      .then(response => response.json())
      .then(data => setUsers([...users, data.user]))
  }

  const updateUser = (user) => {
    let opciones = {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        'fname': user.fname,
        'lname': user.lname,
        'username': user.username,
        'email': user.email,
        'avatar': user.avatar
      })
    }
    fetch(`https://www.melivecode.com/api/users/update`, opciones)
      .then(response => response.json())
      .then(data => 
        setUsers(users.find(user => user.id === data.user.id) = data.user)
        ) //TODO terminar de implementar
  }



  function chargeUsers(){
    fetch(`https://www.melivecode.com/api/users`)
    .then(response => response.json())
    .then(data => setUsers(data))
  }

  useEffect(() => {
    chargeUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<TableElement 
            usersArray= {users}
            />} />
          <Route path="/create" element={<UserCreate
            newUser={newUser}
          />} />
          <Route path="/edit/:id" element={<UserEdit
            
          />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App

import { useState } from 'react'
import Header from './components/Header'
import TableElement from './components/Table'
import UserCreate from './components/UserCreate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import usersArray from './assets/UsersArrayV1'


function App() {

  const [users, setUsers] = useState(usersArray)

  const newUser = (user) => {
    let ultimo = usersArray[usersArray.length - 1];
    user.id = ultimo.id + 1;
    setUsers([...users, user]);
    console.log(users)
  }

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
        </Routes>
      </Router>

    </div>
  )
}

export default App

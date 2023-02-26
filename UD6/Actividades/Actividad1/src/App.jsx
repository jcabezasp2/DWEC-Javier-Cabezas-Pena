import { useState } from 'react'
import Header from './components/Header'
import TableElement from './components/Table'
import UserCreate from './components/UserCreate'


function App() {

  return (
    <div className="App">
      <Header />
      <TableElement />
      <UserCreate />
    </div>
  )
}

export default App

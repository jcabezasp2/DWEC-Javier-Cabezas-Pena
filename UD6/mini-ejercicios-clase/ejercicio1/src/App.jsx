import { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import ListgroupElement from './Listgroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <h1>Fases de la luna</h1>
      <ListgroupElement />
    </div>
  )
}

export default App

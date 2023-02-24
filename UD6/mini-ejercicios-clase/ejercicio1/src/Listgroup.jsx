import { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WiMoonAltFull, WiMoonAltWaningCrescent2, WiMoonAltNew, WiMoonAltWaxingCrescent4} from 'react-icons/wi';

function ListgroupElement() {

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
      <ListGroup>
        <ListGroup.Item><WiMoonAltFull/>Luna llena</ListGroup.Item>
        <ListGroup.Item><WiMoonAltWaningCrescent2/>Menguante</ListGroup.Item>
        <ListGroup.Item><WiMoonAltNew/>Nueva</ListGroup.Item>
        <ListGroup.Item><WiMoonAltWaxingCrescent4/>Creciente</ListGroup.Item>
    </ListGroup>
    </Card>
    </div>
  )
}

export default ListgroupElement


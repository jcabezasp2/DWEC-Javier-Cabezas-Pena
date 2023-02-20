import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {Contexto} from '../App';
import Card from './Card';

function Info() {

    const {datos, eraseData} = useContext(Contexto);
    let fechaActual = new Date();

    return (
        <>
            {datos.filter(a => a.dateValue.getDate() > fechaActual.getDate() - 7).map((data) => {
                return (
                <Card data={data} key={data.id}/>
                    )
            })}
        </>
    );
  }
  
  export default Info;
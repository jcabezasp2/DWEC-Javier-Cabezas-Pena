import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {Contexto} from '../App';

function Info() {

    const {datos, eraseData} = useContext(Contexto);
    let fechaActual = new Date();
    return (
        <div className=' col two'>
            {datos.filter(a => a.dateValue.getDate() > fechaActual.getDate() - 7).map((data) => {
                return (
                <div className='card' key={data.id}>
                    <div className='card-content'>
                        <span className='card-title' data-test="imc">IMC: {data.Imc}</span>
                    </div>
                    <div className='card-data'>
                        <span data-test="weight">Peso: {data.weightValue} Kg</span>
                        <span data-test="height">Altura: {data.heightValue} cm</span>
                        <span data-test="date">Fecha: {data.dateValue.getDate()+ '/' + data.dateValue.getMonth() + '/' + data.dateValue.getFullYear()}</span>
                    </div>
                    <button className='delete-btn' onClick={()=>{eraseData(data.id)}}>X</button>
                </div>)
            })}
        </div>
    );
  }
  
  export default Info;
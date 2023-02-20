import { useState, useContext } from 'react';
import {Contexto} from '../App';

function Card(props) {

    const data = props.data;
    const {eraseData} = useContext(Contexto);

    return (
            <div className='col two'>
                <div className='card' key={data.id}>
                    <div className='card-content'>
                        <span className='card-title' data-test="imc">IMC: {data.Imc}</span>
                    </div>
                    <div className='card-data'>
                        <span data-test="weight">Peso: {data.weightValue} Kg</span>
                        <span data-test="height">Altura: {data.heightValue} cm</span>
                        {<span data-test="date">Fecha: {data.dateValue.getDate()+ '/' + data.dateValue.getMonth() + '/' + data.dateValue.getFullYear()}</span>}
                    </div>
                    <button className='delete-btn' onClick={()=>{eraseData(data.id)}}>X</button>
                </div>
                </div>)
  }
  
  export default Card;
import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Contexto } from '../App';

function IMCForm(props) {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const { addData, datos } = useContext(Contexto);
    return (
        <form>
            <div className='row'>
                <div className='col two'>
                    <label htmlFor="weight">Peso (en Kg)</label>
                    <input type='number' key="weight" onInput={(event) => { setWeight(event.target.value) }} />
                </div>

                <div className='col two'>
                    <label htmlFor="height">Altura (en cm)</label>
                    <input type='number' key="height" onInput={(event) => { setHeight(event.target.value) }} />
                </div>
            </div>
            <div className='center'>
                {weight > 0 && height > 0 ?
                    <button type='button' className='calculate-btn' onClick={() => { addData({ weightValue: weight, heightValue: height }) }}>Calcular IMC</button>
                    :
                    <button disabled type='button' className='calculate-btn'>Calcular IMC</button>}
            </div>
        </form>
    );
}

export default IMCForm;
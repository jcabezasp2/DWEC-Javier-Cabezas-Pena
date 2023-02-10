import { useContext } from 'react';
import {ChatContexto} from './App';

function Hijo2() {

    const {mensaje, componente, anadirMensaje} = useContext(ChatContexto);
    return (
        <div>
        <h2>Hijo 2</h2>
        <p>{componente + " " + mensaje}</p>
        <textarea name="" cols="30" rows="10" onBlur={(event)=>{ anadirMensaje(event, 'Hijo 1 dice: '); event.target.value = '' }}></textarea>
        </div>
    );
  }
  
  export default Hijo2;
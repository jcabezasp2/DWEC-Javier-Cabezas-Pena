
import { useContext } from 'react';
import ChatContexto from './App';

function Hijo() {

    const contexto = useContext(ChatContexto);
    console.log(contexto)
    return (
        <div>
        <h2>Hijo 1</h2>
        <textarea name="" cols="30" rows="10" onBlur={(event)=>{}}></textarea>
        </div>
    );
  }
  
  export default Hijo;
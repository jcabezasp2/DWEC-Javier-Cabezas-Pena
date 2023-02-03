import { useState } from 'react'
import './contador.css'

function Contador() {

  const [contador, setContador] = useState(0);
  
  return (
  <div className='app'>
      <h1 style={{color: contador < 0? 'red': contador > 0? 'green' : 'black'}}>{contador}</h1>
      <div className='contenedor-botones'>
        <button type="button" onClick={()=>setContador(contador - 1)}>-</button>
        <button type="button" onClick={()=>setContador(contador + 1)}>+</button>
      </div>
      
  </div>
  );
}

export default Contador
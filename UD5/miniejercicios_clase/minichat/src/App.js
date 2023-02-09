import Hijo from './Hijo'
import { useState } from 'react';

function App() {

  const [mensajes, setMensajes] = useState('');

  function anadirMensaje (mensaje) {
    if(mensaje.length < 13){
      setMensajes(mensaje);
    }
  }

  const contenedor = {
    width: 'fit-content',
    margin: 'auto',
  }

  const padre= {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  }

  const hijos = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  
  }

  return (
    <div style={contenedor}>
      <div style={padre}>
      <h1>Mini-chat</h1>
        <p>{mensajes}</p>
        <textarea id="" cols="30" rows="10" onBlur={(event)=>{setMensajes('Padre dice: ' +  event.target.value); event.target.value = ''}}></textarea>
      </div>
        <div style={hijos}>
        <Hijo 
        texto= {anadirMensaje}
        dueno = 'Hijo 1'
        ultimoMensaje = {mensajes}
        />
        <Hijo 
        texto= {anadirMensaje}
        dueno = 'Hijo 2'
        ultimoMensaje = {mensajes}
        />
        </div>
    </div>

  );
}

export default App;

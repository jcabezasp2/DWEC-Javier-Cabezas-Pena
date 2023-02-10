import Hijo from './Hijo'
import { useState, createContext } from 'react';

export const ChatContexto = createContext();


function App() {

  const [mensajes, setMensajes] = useState('');

  function anadirMensaje (mensaje) {
    setMensajes(mensaje);
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
    <ChatContexto.Provider value={{
      mensajes: mensajes,
      anadirMensaje:anadirMensaje
    }}>

    <div style={contenedor}>
      <div style={padre}>
      <h1>Mini-chat</h1>
        {<p>{mensajes}</p>}
        <textarea id="" cols="30" rows="10" onBlur={(event)=>{setMensajes('Padre dice: ' +  event.target.value); event.target.value = ''}}></textarea>
      </div>
        <div >
          <Hijo />
        </div>
    </div>
    </ChatContexto.Provider>
  );
}

export default App;

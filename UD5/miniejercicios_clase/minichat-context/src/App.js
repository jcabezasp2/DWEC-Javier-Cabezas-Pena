import Hijo from './Hijo'
import Hijo2 from './Hijo2'
import { useState, createContext } from 'react';

export const ChatContexto = createContext();


function App() {

  const [mensaje, setMensaje] = useState('');
  const [componente, setComponente] = useState('');

  function anadirMensaje(event, componente) {
    if(event.target.value !== ''){
      const {value} = event.target;
      setMensaje(value);
      setComponente(componente);
    }
  }

  const contenedor = {
    width: 'fit-content',
    margin: 'auto',
  }

  const padre = {
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
      mensaje: mensaje,
      anadirMensaje: anadirMensaje,
      componente: componente
    }}>

      <div style={contenedor}>
        <div style={padre}>
          <h1>Mini-chat</h1>
          {<p>{componente + " " + mensaje}</p>}
          <textarea id="" cols="30" rows="10" onBlur={(event) => { anadirMensaje(event, 'Padre dice: '); event.target.value = '' }}></textarea>
        </div>
        <div style={hijos}>
          <Hijo />
          <Hijo2 />
        </div>
      </div>
    </ChatContexto.Provider>
  );
}

export default App;

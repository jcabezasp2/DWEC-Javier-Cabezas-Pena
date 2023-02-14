import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import IMCFORM from './components/IMCForm'
import './assets/App.css'
import './assets/index.css'

export const Contexto = createContext();

function App() {

  const [datos, setDatos] = useState([]);

  const addData = (data) => {
    setDatos([...datos, data]);
  };

  return (

    <Contexto.Provider value={{
      addData: addData,
    }}>

    <div className="container">
      <div className="row">
        <h1>Calculadora del indice de masa corporal</h1>
      </div>
      <div className="row">
        <IMCFORM />
      </div>
      <div className="row">
        <h4>Datos de 7 dias</h4>
      </div>
      <div className="row data-container">
      </div>
      <div className="row">
        <button>Deshacer</button>
      </div>
    </div>
    </Contexto.Provider>
  )
}

export default App

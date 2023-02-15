import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import IMCFORM from './components/IMCForm'
import Info from './components/Info'
import Grafica from './components/Grafica'
import './assets/App.css'
import './assets/index.css'

export const Contexto = createContext();

function App() {

  const [datos, setDatos] = useState([]);

  function eraseData(id){
    setDatos(datos.filter((dato) => dato.id !== id));
  }

  const addData = (data) => {
    data.dateValue = new Date();
    data.id = uuidv4();
    data.Imc = (data.weightValue / Math.pow(data.heightValue / 100, 2)).toFixed(2);
    setDatos([...datos, data]);
  };

  return (

    <Contexto.Provider value={{
      addData: addData,
      eraseData: eraseData,
      datos: datos
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
        <Info />
      </div>
      <div className="row">
        <button>Deshacer</button>
      </div>
      <div className="row">
        <Grafica />
      </div>
    </div>
    </Contexto.Provider>
  )
}

export default App

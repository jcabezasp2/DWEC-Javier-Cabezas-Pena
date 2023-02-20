import { useState, createContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import IMCFORM from './components/IMCForm'
import Info from './components/Info'
import Grafica from './components/Grafica'
import {storeData, getData} from './assets/localStorage.js'
import './assets/App.css'
import './assets/index.css'

export const Contexto = createContext();

window.addEventListener('beforeunload', (event) => {
  storeData('datos', []);
});

function App() {

  const [datos, setDatos] = useState([]);
  const [deshacer, setDeshacer] = useState(false);

  useEffect(() => {
    if(!deshacer){
      if(localStorage.getItem('datos') === null ){
        storeData('datos', [[], datos])
       }else{
        let estados = getData('datos')
        estados.push(datos)
        storeData('datos', estados)
      }
    }
    setDeshacer(false);
  }, [datos]);

  function eraseData(id){
    setDatos(datos.filter((dato) => dato.id !== id));
  }

  const addData = (data) => {
    data.dateValue = new Date();
    data.id = uuidv4();
    data.Imc = (data.weightValue / Math.pow(data.heightValue / 100, 2)).toFixed(2);
    setDatos([...datos, data]);
    }

  const changeState = () => {

    let estados = getData('datos');
    if(estados.length > 1){
      setDeshacer(true);
      estados.pop();
      let nuevoEstado = estados[estados.length - 1];

        if(nuevoEstado.length > 0){
          nuevoEstado.map((data) => {
            data.dateValue = new Date(data.dateValue);
          });
        }

        setDatos(nuevoEstado);
        storeData('datos', estados);

    }

  }

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
        <button className='calculate-btn' onClick={() => {changeState()
        }}>Deshacer</button>
      </div>
      <div className="row">
        <Grafica 
        etiquetas = {datos}
        />
      </div>
    </div>
    </Contexto.Provider>
  )
}

export default App

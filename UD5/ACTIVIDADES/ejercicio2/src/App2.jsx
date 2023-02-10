import { useState } from 'react'
import './assets/buscador.css'

let listado = ['Manzana', 'Kiwi', 'Melocoton', 'Mango', 'Piña', 'Uvas'];

function App2() {

  const [buscado, setBuscado] = useState('');

  return (
    <div className='app'>
    <div>
      <label htmlFor="buscar">Buscar:</label>
      <input type="text" name="buscar" id="buscar" onChange={(event)=>setBuscado(event.target.value)} />
    </div>
    <Lista
    buscar = {buscado}
    />
    </div>
  )
}

function Lista(props){

return(
  <>
  {listado.map((elemento, index) => {
   return  elemento.toLowerCase().startsWith(props.buscar.toLowerCase())? <li key={index}>{elemento}</li> : null;
  })}
  </>
)
}

export default App2

import { useState } from 'react'
import './assets/contadorOvejas.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3 className='title'>Contador de ovejas</h3>
    <div className="wrapper">
      <h4 className='counter'>{count}</h4>
      <button className='button' type="button" onClick={()=>setCount(count + 1)}>Contar :)</button>
      <ul className='image__list'>
      <SheepList
      cantidad = {count}
      />   
      </ul>
    </div>
    </>
  )
}

function SheepList(props){

return(
<>{
  [...Array(props.cantidad)].map((algo, index) => {
    return <img className='sheep__img' src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png" alt="oveja" key={index} />
  })
}

</>
)
}

export default App

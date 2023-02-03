import { useState } from 'react'
import './assets/mimimi.css'

function App() {
  const [texto, setTexto] = useState('')

  return (
    <div className='wrapper__mimimi'>
    <textarea name="texto" id="texto" cols="30" rows="10" onChange={(event)=>setTexto(event.target.value)}></textarea>
    <Translator
    texto = {texto}
    />
    </div>
  )
}

function Translator(props){

return(
<p className= 'translator__parragraph'>{

    props.texto.replace(/[aeiou]/gi, 'i')

}

</p>
)
}

export default App

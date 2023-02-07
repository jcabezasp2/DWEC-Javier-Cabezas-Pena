import AccordionItem from "./AccordionItem";
import {textos} from "./../assets/data"


function Header() {
    return (
      <ul className="accordion">

        {textos.map((texto, index) => {
            return(
            <AccordionItem
              key={'item'+ index}
              pregunta={texto.pregunta}
              respuesta={texto.respuesta}
            />
        )})}
      </ul>
    );
  }
  
  export default Header;
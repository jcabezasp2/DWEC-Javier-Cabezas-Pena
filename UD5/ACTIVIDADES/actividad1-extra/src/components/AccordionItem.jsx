import { useState } from 'react';

function Header(props) {

  const [show, setShow] = useState(false);

    return (
      <li className={'accordion_item' + (show? ' active': '')}>
        <button type='button' className="button" onClick={()=>{setShow(!show)}}>
          {props.pregunta}
          <span className='control'>{show? '\u2500': '+'}</span>
        </button>
        <div className={show? 'answer answer_wrapper.open': 'answer_wrapper'}>
          {props.respuesta}
        </div>
      </li>
    );
  }
  
  export default Header;
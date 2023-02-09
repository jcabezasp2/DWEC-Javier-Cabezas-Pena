import PropTypes from 'prop-types';

function Hijo(props) {
    return (
        <div>
        <h2>{props.dueno}</h2>
        <p>{props.ultimoMensaje}</p>
        <textarea name="" cols="30" rows="10" onBlur={(event)=>{props.texto(props.dueno + ' dice: ' +  event.target.value); event.target.value = ''}}></textarea>
        </div>
    );
  }

Hijo.propTypes = {
    texto : PropTypes.func.isRequired,
    dueno : PropTypes.string,
    ultimoMensaje : PropTypes.string
};
  
  export default Hijo;
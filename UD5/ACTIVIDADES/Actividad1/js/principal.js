const pregunta = document.querySelector('#question'); 
const opciones = document.querySelectorAll('input[name="answer"]');
const boton = document.querySelector('#submit');
const toasts = document.querySelector('#toasts');
let contador;
let contadorAciertos;

const messages = ['Debes seleccionar una respuesta'];
const types = ['error', 'success', 'info'];





let pregunta1 = {
    question: '¿Qué lenguaje se ejecuta en un navegador web?', answers: [
            'Java',
            'C',
            'Python',
            'JavaScript'
    ],
        correct: 'd'
}

let pregunta2 = {
    question: '¿De que color era el caballo blanco de Santiago?', answers: [
            'Blanco',
            'Gris',
            'Verde',
            'Azul'
    ],
        correct: 'a'
}

let pregunta3 = {
    question: '¿Quien escribio el Quijote?', answers: [
            'Cervantes',
            'Garcia Lorca',
            'Lope de Vega',
            'Es anonimo'
    ],
        correct: 'a'
}

let pregunta4 = {
    question: '¿Quien escribio Dune?', answers: [
            'Lope de vega',
            'Garcia Lorca',
            'Frank Herbert',
            'Es anonimo'
    ],
        correct: 'c'
}

let preguntas = [pregunta1, pregunta2, pregunta3, pregunta4];

window.onload = () => {
    quizStart();

    boton.addEventListener('click', () => {
        let respuesta = document.querySelector('input[name="answer"]:checked');

        if(respuesta) {
            console.log(respuesta.value)
            respuesta.value === preguntas[contador].correct? contadorAciertos++ : '';
            contador++;
            if(contador < preguntas.length) {
                showQuestion();
            }else{
                pregunta.textContent = `Has acertado ${contadorAciertos}/${preguntas.length}`;
                document.querySelector('ul').style.display = 'none';
                boton.textContent = 'Reload';
                boton.addEventListener('click', () => {
                    quizStart();
                    boton.textContent = 'Enviar';
                    document.querySelector('ul').style.display = 'block';
                    boton.removeEventListener();
                }, {once: true});
            }

        }else{
            createNotification(messages[0], types[0]);
        }

        respuesta.checked = false;
    })
}

function quizStart() {
    contador = 0;
    contadorAciertos = 0;
    showQuestion();

}

function showQuestion() {

    pregunta.textContent = preguntas[contador].question;

    let letras = ['a', 'b', 'c', 'd'];

    opciones.forEach((opcion, i )=> {

        opcion.value = letras[i];
        document.querySelector(`#${opcion.id}_text`).textContent = preguntas[contador].answers[i];
    });
}

function createNotification(message, type){
        let toast = document.createElement('div');
            toast.textContent = message;
            toast.setAttribute('class',`${type} toast`);
            toasts.appendChild(toast);
            setTimeout(() => {
                toasts.removeChild(toast);
            }, 1800)
}
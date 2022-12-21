
let animales = [ "cerdo", 'gato', 'perro', 'vaca', 'zorro', 'burro', 'rana', 'leon'];

window.addEventListener('load', init);


function init() {
    let contenedor = document.createElement('div');
    contenedor.id = 'animales';

    document.body.appendChild(contenedor);

    for (let i = 0; i < animales.length; i++) {

        let animal = document.createElement('div');
        animal.id = animales[i];
        animal.style.backgroundImage = `url(./images/${animales[i]}.png)`;
        animal.className = 'animal';
        contenedor.appendChild(animal);
    }


    let audio =  document.createElement('audio');
    audio.id = 'audio';
    audio.preload = 'auto';

    let source = document.createElement('source');
    source.id = 'source';
    source.type = 'audio/mpeg';

    audio.appendChild(source);
    contenedor.appendChild(audio);

    let divs = document.querySelectorAll('.animal');

    divs.forEach(animal => {
        animal.addEventListener('click', rota );
        animal.addEventListener('click', sonido );
    });

}


function rota(e) {

    let efectos = ['rota', 'grande', 'pequenio', 'baja', 'def']

    let efecto = efectos[Math.floor(Math.random() * efectos.length)];

   this.classList.add(efecto);

   setTimeout(() => {
       this.classList.remove(efecto);
    }, 3000);
}


function sonido(e) {

    let sonido = this.id;
    let etiqueta = document.querySelector('#source');
    etiqueta.setAttribute('src', 'sounds/' + sonido + '.wav');
    document.querySelector('#audio').load();
    document.querySelector('#audio').play();

}
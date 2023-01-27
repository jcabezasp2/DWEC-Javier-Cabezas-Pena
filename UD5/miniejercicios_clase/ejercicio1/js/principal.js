const libro1 = {
    Nombre: "El señor de los anillos",
    Color: "Verde",
    Autor: "J.R.R. Tolkien",
    NºPaginas: 1000,
    Editorial: "Minotauro",
    Forrado: false,
    UrlCover: "https://m.media-amazon.com/images/I/416Z73lN4VL._SX198_BO1,204,203,200_QL40_ML2_.jpg",
    Comprar: function(){
        return `Libro de aventuyas y fantasía del autor ${this.Autor} comprado`      
    },
    toString: function(){
        return `Nombre: ${this.Nombre}, Color: ${this.Color}, Autor: ${this.Autor}, NºPaginas: ${this.NºPaginas}, Editorial: ${this.Editorial}, Forrado: ${this.Forrado}, UrlCover: ${this.UrlCover}`
    }
}


const libro2 = {
    Nombre: "Dune",
    Color: "Azul",
    Autor: "Frank Herbert",
    NºPaginas: 100,
    Editorial: "Edasa",
    Forrado: true,
    UrlCover: "https://m.media-amazon.com/images/I/41TCYOZgv4L._SY346_.jpg",
    Comprar: function(){
        return `Libro de aventuyas y fantasía del autor ${this.Autor} comprado`
        
    },
    toString: function(){
        return `Nombre: ${this.Nombre}, Color: ${this.Color}, Autor: ${this.Autor}, NºPaginas: ${this.NºPaginas}, Editorial: ${this.Editorial}, Forrado: ${this.Forrado}, UrlCover: ${this.UrlCover}`
    }
}

const libro3 = {
    Nombre: "Ordenes ejecutivas",
    Color: "Blanco",
    Autor: "Tom Clancy",
    NºPaginas: 1200,
    Editorial: "Planeta",
    Forrado: true,
    UrlCover: "https://m.media-amazon.com/images/I/719881QZN5L._SX306_BO1,204,203,200_.gif",
    Comprar: function(){
        return `Libro de aventuyas y fantasía del autor ${this.Autor} comprado`;
        
    },
    toString: function(){
        return `Nombre: ${this.Nombre}, Color: ${this.Color}, Autor: ${this.Autor}, NºPaginas: ${this.NºPaginas}, Editorial: ${this.Editorial}, Forrado: ${this.Forrado}, UrlCover: ${this.UrlCover}`
    }


}

const libro4 = {
    Nombre: "Aleacion de ley",
    Color: "Blanco",
    Autor: "Brandon Sanderson",
    NºPaginas: 600,
    Editorial: "Planeta",
    Forrado: true,
    UrlCover: "https://m.media-amazon.com/images/I/41ikEiBVnqL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
    Comprar: function(){
        return `Libro de aventuyas y fantasía del autor ${this.Autor} comprado`;      
    },
    toString: function(){
        return `Nombre: ${this.Nombre}, Color: ${this.Color}, Autor: ${this.Autor}, NºPaginas: ${this.NºPaginas}, Editorial: ${this.Editorial}, Forrado: ${this.Forrado}, UrlCover: ${this.UrlCover}`
    }
}

let biblioteca = [libro1, libro2, libro3, libro4];

const checkpage = (libro) => {
    const paginas = libro.NºPaginas; 
    return paginas > 150;
}

const checkpage2 = ({NºPaginas}) => {
    return NºPaginas > 150;
}

const checkLibro = (biblioteca, libro) => {
    return biblioteca.find(l => l.Nombre === libro.Nombre)? true : false;
}


libro1.Comprar //=

console.log(libro4.Comprar())

checkLibro(biblioteca, libro4); //=

checkpage2(libro2); //=

const librosLargos = biblioteca.filter(checkpage2);
librosLargos //=

const checkAutor = (autor, biblioteca) => {return biblioteca.find(l => l.Autor === autor)}

checkAutor("J.R.R. Tolkien", biblioteca) //=

const forraLibro = (biblioteca) => {biblioteca.map(l => l.Forrado = true)};

forraLibro(biblioteca);
biblioteca[0].Forrado //=

const prestarLibro = (biblio, titulo) => {
    biblioteca = biblio.filter(l => l.Nombre != titulo)
}

prestarLibro(biblioteca, "El señor de los anillos");
biblioteca //=

const devolverLibro = (biblioteca, libro) => {
    biblioteca.push(libro);
};

window.addEventListener('load', init);

function  init() {
    console.log("Hola");
    let body = document.querySelector('body');
    let section = document.createElement('section');
    let titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode('Biblioteca de libros'));
    body.appendChild(section);
    section.appendChild(titulo);
    let libros = document.createElement('div');
    section.appendChild(libros);
    libros.setAttribute('id', 'libros');

    biblioteca.map(l => {
        let libro = document.createElement('div');
        libro.setAttribute('class', 'libro');
        let imagen = document.createElement('img');
        imagen.setAttribute('src', l.UrlCover);
        libro.appendChild(imagen);
        let nombre = document.createElement('p');
        nombre.appendChild(document.createTextNode(l.Nombre));
        libro.appendChild(nombre);
        libros.appendChild(libro);
    })
}
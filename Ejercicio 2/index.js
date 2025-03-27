//todo: 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divEmpty = document.createElement('div'); //div vacio
document.body.appendChild(divEmpty); //lo añadimos al final del body

/////////////////////////////

//todo: 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv = document.createElement('div');
newDiv.innerHTML = `
  <p> Insertando dinamicamente un parrafo dentro de un div </p>
`;
document.body.appendChild(newDiv);

/////////////////////////////

//todo: 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement('div');
for (let i = 0; i <= 6; i++) {
  const parrafo = document.createElement('p'); //creo parrafo vacio
  parrafo.textContent = `parrafo ${i}`; // añado texto para verificar
  div3.appendChild(parrafo); //añado el parrafo al div
}
document.body.appendChild(div3); //añado el div al documento

/////////////////////////////

//todo: 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafo4 = document.createElement('p');
parrafo4.textContent = 'Soy dinámico!';
document.body.appendChild(parrafo4);

/////////////////////////////

//todo: 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const subtitulo2 = document.querySelector('.fn-insert-here');
subtitulo2.textContent = 'Wubba Lubba dub dub';

/////////////////////////////

//todo: 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul'); //creamos el ul
//con un bucle for recorremos el array y vamos creando li para asignarse cada elemento del array, y añádirlos al ul conforme se vayan creando
apps.forEach((app) => {
  const li = document.createElement('li'); //en cada iteracion se crea un li
  li.textContent = app; //asignamos el texto del array
  ul.appendChild(li); //añadimos al ul
});

document.body.appendChild(ul); //añadimos el ul al dom

/////////////////////////////

//todo: 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementos7 = document.querySelectorAll('.fn-remove-me');
for (let element of elementos7) {
  element.remove();
}

//?const borrarElements7 = document.querySelectorAll('.fn-remove-me').remove()
//esto no funciona porque querySelectorAll devuelve una coleccion de nodos y .remove() solo funciona en nodos individuales/

/////////////////////////////

//todo: 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que NO solo puedes insertar elementos con .appendChild.

const parrafo8 = document.createElement('p');
parrafo8.textContent = 'Voy en medio de dos divs!';

const divs8 = document.querySelectorAll('body > div'); //devuelve una NodeList
const nodoPadre = divs8[0].parentNode; //nos da el nodo padre del div en la posicion 0 del NodeList
nodoPadre.insertBefore(parrafo8, divs8[1]); // Insertamos el párrafo antes del segundo div

/////////////////////////////

//todo: 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divs9 = document.querySelectorAll('div.fn-insert-here'); //devuelve nodeList

divs9.forEach((div) => {
  const parrafo9 = document.createElement('p');
  parrafo9.textContent = 'Voy dentro (pero solo de los divs)!';
  div.appendChild(parrafo9);
});

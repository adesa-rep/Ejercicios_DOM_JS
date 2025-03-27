//todo: 1.1 Usa querySelector para mostrar por consola el botón con la clase **.showme**
const button = document.querySelector('.showme');
console.log(button);

//todo: 1.2 Usa querySelector para mostrar por consola el h1 con el id **# pillado**
const titulo = document.querySelector('#pillado');
console.log(titulo);

//todo: 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll('p');
console.log(parrafos);

//verificando que accedemos correctamente a los elementos
for (let p of parrafos) {
  texto = p.innerText;
  console.log(texto);
}

//todo: 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase **.pokemon**
const pokemons = document.querySelectorAll('.pokemon'); //devuelve una coleccion de nodos
console.log(pokemons);

//verificando que accedemos correctamente a los elementos
for (let pokemon of pokemons) {
  console.log(pokemon.innerText);
}

//todo: 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo **data-function="testMe".**
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes);
for (let personaje of personajes) {
  console.log(personaje.textContent);
}

//todo: 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo **data-function="testMe".**
//usando la constante personajes ya creada en el paso anterior:
console.log(personajes[2]);
console.log('el personaje es: ', personajes[2].textContent);

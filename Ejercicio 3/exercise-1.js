//? 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

//por cada elemento del arry, creamos un li, le asignamos como texto el elemento del array y lo añadimos al ul
countries1.forEach((country) => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});

document.body.appendChild(ul);
////////////////////////////////////////////////

//? 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

//puede hacerse de esta forma:
document.querySelector('.fn-remove-me').remove();

//pero la correcta  seria:
const elementToRemove = document.querySelector('.fn-remove-me'); // Selecciona el primer elemento con la clase
if (elementToRemove) {
  elementToRemove.remove(); // Lo elimina del DOM
}
// de esta forma se verifica primero que el elemento exista para evitar errores de consola, ya que si no existe seria null y estariamos intentando ejecutar un remove sobre ese null

////////////////////////////////////////////////

//? 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div3 = document.querySelector('[data-function="printHere"]');
const carsList = document.createElement('ul');
cars.forEach((item) => {
  const car = document.createElement('li');
  car.textContent = item;
  carsList.appendChild(car);
});

div3.appendChild(carsList);
////////////////////////////////////////////////

//? 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries4 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

//usamos un bucle para generar en el documento 5 divs, cada uno con un titulo y una imagen. Entonces por cada elemento del array se crea un div, un titulo y una imagen y luego el titulo y la imagen se agregan al div y ese div se agrega al documento.

const crearDivs = (array) => {
  countries4.forEach((country) => {
    const div = document.createElement('div');
    div.classList.add('divs-creados-dinamicamente');
    const h4 = document.createElement('h4');
    h4.textContent = country.title; // Asignamos el título al h4

    const img = document.createElement('img'); // Creamos una imagen
    img.src = country.imgUrl; // Asignamos la URL de la imagen
    img.alt = country.title; // Agregamos un texto alternativo

    // div.appendChild(h4); // Añadimos el título al div
    //div.appendChild(img); // Añadimos la imagen al div
    div.append(h4, img);
    document.body.appendChild(div); // Agregamos el div al body
  });
};

crearDivs(countries4);

////////////////////////////////////////////////

//? 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = 'Borrar ultimo elemento';
document.body.appendChild(btnDeleteLast);

btnDeleteLast.addEventListener('click', () => {
  const listDivs = document.querySelectorAll('div.divs-creados-dinamicamente');
  console.log(`antes de borrar hay ${listDivs.length} elementos`);
  listDivs[listDivs.length - 1].remove();
  //para que recalcule el length tenemos que traernos de nuevo el nodo tras haberlo modificado
  console.log(
    `despues de borrar hay ${
      document.querySelectorAll('div.divs-creados-dinamicamente').length
    } elementos`
  );
});

////////////////////////////////////////////////

//? 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const listDivs = document.querySelectorAll('div.divs-creados-dinamicamente');
listDivs.forEach((div) => {
  btnDelete = document.createElement('button');
  btnDelete.textContent = 'Borrar div';
  div.insertAdjacentElement('beforeend', btnDelete); //insertamos el boton dentro del div pero justo despues del ultimo elemento. De esta forma, cuando se borra el div, tambien se borra el boton

  btnDelete.addEventListener('click', () => {
    // btnDelete.style.display = 'none';
    div.remove();
  });
});

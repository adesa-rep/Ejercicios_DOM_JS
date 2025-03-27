//? 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btnToClick = document.createElement('button');
btnToClick.textContent = 'Haz click!';
btnToClick.addEventListener('click', (event) => {
  console.log(event);
});
document.body.appendChild(btnToClick);

////////////////////////////////

//? 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
  console.log(event.target.value); // Imprimir el valor del input cuando obtiene el foco
  console.log(event.target); // Esto mostrará el input que recibió el foco en la consola
  focusInput.classList.toggle('focus');
});

////////////////////////////////

//? 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector('.value');

//se activa cada vez que se escribe o se borra algo en el input
inputValue.addEventListener('input', (event) => {
  console.log(event.target.value);
});

/////////
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.classList.add('noFocus');
  if (input.classList.contains('value')) {
    input.addEventListener('click', (event) => {
      input.classList.toggle('value');
    });
  }
});

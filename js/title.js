const spnText = document.querySelector('h1');
const txt = "Kamień Papier Nożyce";

// Parametry
let indexText = 0;
const time = 150;

// Implementacja
const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);

const jugadorCartas = document.querySelector("#jugador-cartas");
const computadoraCartas = document.querySelector("#computadora-cartas");
const pedirCarta = document.querySelector("#pedir-carta");
const arrayNum = [];
let num = 0;

pedirCarta.addEventListener("click", () => {
  dibujarCartas();
  console.log((num = num + 1));
  arrayNum.push(num);
});

function getRandomInt() {
  return Math.floor(Math.random() * (10 - 2)) + 2;
}

function dibujarCartas() {
  console.log(arrayNum);
  if (arrayNum.length <= 2) {
    let htmlTemplate = `
        <img src="cartas/${getRandomInt()}D.png" />
    `;
    jugadorCartas.appendChild = htmlTemplate;
    jugadorCartas.innerHTML += htmlTemplate;
  }
}

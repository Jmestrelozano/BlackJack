const jugadorCartas = document.querySelector("#jugador-cartas");
const computadoraCartas = document.querySelector("#computadora-cartas");
const pedirCarta = document.querySelector("#pedir-carta");
const reiniciarJuego = document.querySelector("#reiniciar-juego");

const mazoBarajas = [
  "2C",
  "2D",
  "2H",
  "2S",
  "3C",
  "3D",
  "3H",
  "3S",
  "4C",
  "4D",
  "4H",
  "4S",
  "5C",
  "5D",
  "5H",
  "5S",
  "6C",
  "6D",
  "6H",
  "6S",
  "7C",
  "7D",
  "7H",
  "7S",
  "8C",
  "8D",
  "8H",
  "8S",
  "9C",
  "9D",
  "9H",
  "9S",
  "10C",
  "10D",
  "10H",
  "10S",
  "AC",
  "AD",
  "AH",
  "AS",
  "JC",
  "JD",
  "JH",
  "JS",
  "KC",
  "KD",
  "KH",
  "KS",
  "QC",
  "QD",
  "QH",
  "QS",
];

let sumaTotalCartas = 0;
let bool = true;

pedirCarta.addEventListener("click", () => {
  getRandomInt();
});

reiniciarJuego.addEventListener("click", () => {});

function getRandomInt() {
  let barajaAleatoria;

  mazoBarajas.forEach((baraja, index, array) => {
    let ramdon = Math.floor(Math.random() * index);
    return (barajaAleatoria = array[ramdon]);
  });

  let resutado = barajaAleatoria;

  let totalSuma = sumarCartas(resutado);
  dibujarCartas(totalSuma, resutado);
  return resutado;
}

function sumarCartas(numRamdon) {
  let numeroBaraja = numRamdon.split("");
  let firstPosBaraja = Number(numeroBaraja[0]);
  let valorAlmacenado;

  if (Number.isNaN(firstPosBaraja) === true) {
    valorAlmacenado = numeroBaraja.join("");
  } else {
    if (numeroBaraja.length >= 3) {
      valorAlmacenado = Number(numeroBaraja[0] + numeroBaraja[1]);
    } else {
      valorAlmacenado = firstPosBaraja;
    }
  }

  if (typeof valorAlmacenado !== "string") {
    sumaTotalCartas = sumaTotalCartas + valorAlmacenado;
  } else {
    let letters = valorAlmacenado.split("");
    if (letters[0] === "A") {
      sumaTotalCartas = sumaTotalCartas + 1;
    } else if (letters[0] === "J") {
      sumaTotalCartas = sumaTotalCartas + 11;
    } else if (letters[0] === "Q") {
      sumaTotalCartas = sumaTotalCartas + 12;
    } else {
      sumaTotalCartas = sumaTotalCartas + 13;
    }
  }

  return sumaTotalCartas;
}

function dibujarCartas(totalSuma, resultadoCartas) {
  console.log(totalSuma);
  if (sumaTotalCartas <= 21) {
    let htmlTemplate = `
        <img src="cartas/${resultadoCartas}.png" />
    `;
    jugadorCartas.appendChild = htmlTemplate;
    jugadorCartas.innerHTML += htmlTemplate;
    console.log("ganastes");
    bool = false;
  } else {
    if (bool === false) {
      let htmlTemplate = `
      <img src="cartas/${resultadoCartas}.png" />
  `;
      jugadorCartas.appendChild = htmlTemplate;
      jugadorCartas.innerHTML += htmlTemplate;
      console.log("perdistes");
      bool = true;
    }
  }
}

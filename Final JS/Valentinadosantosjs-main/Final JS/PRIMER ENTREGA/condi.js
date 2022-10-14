let nombreyapellido = prompt("ingresar nombre y apellido");
let pregunta = prompt("ingrese su pregunta");
if (nombreyapellido != "" && pregunta != "") {
  alert(
    "Nombre y apellido:" +
      " " +
      nombreyapellido +
      " " +
      ",la pregunta es" +
      " " +
      pregunta
  );
} else {
  alert("No ingreso nombre y apellido o pregunta");
}

let comprar = prompt("¿Que desea comprar? Carteras, camperas o zapatos");
{
  switch (comprar) {
    case "carteras":
      alert("comprar carteras");
      break;
    case "camperas":
      alert("comprar camperas");
      break;
    case "zapatos":
      alert("comprar zapatos");
      break;
    default:
      alert("ingreso un valor erroneo");
      break;
  }
}

function productos() {
  let boton1 = document.getElementById("uno").value;
  let num1 = parseInt(boton1);
  let carteras, camperas, zapatos;
  let opc = prompt("Por favor diganos que quiere comprar");
  {
    switch (opc) {
      case "1":
        carteras = num1;
        alert(" el costo de la campera es 15000");
        break;

      case "2":
        camperas = num1;
        alert("el costo de la campera es 12500");
        break;

      case "3":
        zapatos = num1;
        alert("el costo de los zapatos es 10000");
        break;
      default:
        alert("escoge uno de los articulos por favor");
    }
  }

  alert(suma);
}

/*let cartera1 = parseInt(prompt("15000"));
let cartera2 = parseInt(prompt("12500"));
let campera1 = parseInt(prompt("40000"));
let campera2 = parseInt(prompt("22000"));
let zapato1 = parseInt(prompt("10000"));
let zapato2 = parseInt(prompt("7500"));

function compras(cartera1, cartera2, campera1, campera2, zapato1, zapato2) {
  let resultado;
  resultado = cartera1 + cartera2 + campera1 + campera2 + zapato1 + zapato2;
}
*/

class Cartera {
  constructor(tamaño, material, precio, color) {
    this.tamaño = tamaño;
    this.material = material;
    this.precio = parseFloat(precio);
    this.color = color;
    this.disponible = true;
  }
}
let cartera1 = new Cartera("chico", "cuero", "15000", "rojo");
let cartera2 = new Cartera("chico", "cuerina", "12000", "rosa");
let cartera3 = new Cartera("mediana", "plush", "20000", "azul");
let cartera4 = new Cartera("grande", "algodon", "25000", "verde");

let Cartera = [cartera1, cartera2, cartera3, cartera4];
let seleccion = Cartera.find((cartera) => cartera.color == verde);
let seleccion = Cartera.find((cartera) => cartera.color == azul);
let seleccion = Cartera.find((cartera) => cartera.color == rosa);
let seleccion = Cartera.find((cartera) => cartera.color == rojo);
let seleccion = Cartera.find((cartera) => cartera.material == cuero);
let seleccion = Cartera.find((cartera) => cartera.material == cuerina);
let seleccion = Cartera.find((cartera) => cartera.material == algodon);
let seleccion = Cartera.find((cartera) => cartera.material == plush);
let seleccion = Cartera.find((cartera) => cartera.tamaño == chico);
let seleccion = Cartera.find((cartera) => cartera.tamaño == mediana);
let seleccion = Cartera.find((cartera) => cartera.tamaño == grande);
let filtrados = Cartera.filter((cartera) => cartera.precio <= 20000);
let filtrados = Cartera.filter((cartera) => cartera.precio <= 10000);
let filtrados = Cartera.filter((cartera) => cartera.precio >= 20000);

console.log(filtrados);

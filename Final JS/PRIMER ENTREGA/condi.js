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
while (comprar != "") {
  switch (comprar) {
    case carteras:
      alert("comprar carteras");
      break;
    case camperas:
      alert("comprar camperas");
      break;
    case zapatos:
      alert("comprar zapatos");
      break;
    default:
      alert("ingreso un valor erroneo");
  }
}
{
  comprar = prompt("ingresar carteras,camperas o zapatos");
}

let cartera1 = parseInt(prompt("15000"));
let cartera2 = parseInt(prompt("12500"));
let campera1 = parseInt(prompt("40000"));
let campera2 = parseInt(prompt("22000"));
let zapato1 = parseInt(prompt("10000"));
let zapato2 = parseInt(prompt("7500"));

function compras(cartera1, cartera2, campera1, campera2, zapato1, zapato2) {
  let resultado;
  resultado = cartera1 + cartera2 + campera1 + campera2 + zapato1 + zapato2;
}

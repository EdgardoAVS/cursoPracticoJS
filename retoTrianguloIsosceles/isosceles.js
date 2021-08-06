//Funcion altura triangulo isosceles

function alturaTriangulo(lado1, lado2, base) {
  if(lado1 === lado2) {
    return Math.sqrt((lado1*lado1)-((base/2)*(base/2)));
  }else {
    alert ("No es un triangulo isosceles");
  }
}

function calcularAlturaTriangulo() {
  const inputLadoA = document.getElementById("inputLadoA");
  const ladoA = Number(inputLadoA.value);
  const inputLadoB = document.getElementById("inputLadoB");
  const ladoB = Number(inputLadoB.value);
  const inputBase = document.getElementById("inputBase");
  const base = Number(inputBase.value);

  const alturaTrianguloIsosceles = alturaTriangulo(ladoA, ladoB, base);
  alert("La altura del triangulo es: " + alturaTrianguloIsosceles);
}

//Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriángulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriángulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return (lado1 + lado2 + base);
}
// console.log("El perimetro del triángulo es de: " + perimetroTriángulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2; 
}
// console.log("El area del triángulo es de: " + areaTriángulo + "cm^2");
console.groupEnd();

//Codigo circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diámetro de circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
// console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Triángulo
function calcularPerimetroTriangulo() {
  const inputLadoA = document.getElementById("inputLadoA");
  const ladoA = Number(inputLadoA.value);
  const inputLadoB = document.getElementById("inputLadoB");
  const ladoB = Number(inputLadoB.value);
  const inputBase = document.getElementById("inputBase");
  const base = Number(inputBase.value);

  const perimetro = perimetroTriangulo(ladoA, ladoB, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputBase");
  const base = Number(inputBase.value);
  const inputAltura = document.getElementById("inputAltura");
  const altura = Number(inputAltura.value);

  const area = areaTriangulo(base, altura);
  alert(area);
}

//Círculo
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const radio = Number(inputRadio.value);

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const radio = Number(inputRadio.value);

  const area = areaCirculo(radio);
  alert(area);
}
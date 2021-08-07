// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}


// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function calcularPrecio(precio, descuento) {
  const inputPrice = document.getElementById("inputPrice");
  const price = Number(inputPrice.value);

  const inputDiscount = document.getElementById("inputDiscount");
  const discount = Number(inputDiscount.value);

  const precioConDescuento = calcularPrecioConDescuento(price, discount);

  const result = document.getElementById("result");
  result.innerText = "El precio con descuento es: " + precioConDescuento;
}
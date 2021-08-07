const coupons = [
  {
    name: "MENOS10",
    discount: 10,
  },
  {
    name: "MENOS20",
    discount: 20,
  },
  {
    name: "MENOS30",
    discount: 30,
  },
];

function calcularPrecioConDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function buttonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const price = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function(coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if(!userCoupon) {
    const result = document.getElementById("result");
    result.innerText = "El cupón " + couponValue + " no es valido.";
  }else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(price, descuento);

    const resultP = document.getElementById("ResultP");
    result.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}
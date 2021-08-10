function calcularMediaArmonica(lista) {
  
  const tiempo = lista.map(function(elemento) {
    const division = 1 / elemento;
    return division;
  });
  
  const suma = tiempo.reduce(function(sum, number) {
    const resultSum = sum + number;
    return resultSum;
  })
  return lista.length / suma;
}
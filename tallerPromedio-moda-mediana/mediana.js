const Lista1 = [
  100,
  200,
  300,
  400,
  50000,
];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// const mitadLista1 = parseInt(Lista1.length / 2);

function esPar(numero) {
  if(numero % 2 === 0) {
    return true;
  }else {
    return false;
  }
}

let mediana;

if(esPar(Lista1.length)) {
  const elemento1 = Lista1[mitadLista1 - 1];
  const elemento2 = Lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

  mediana = promedioElemento1y2;

}else {
  mediana = Lista1[mitadLista1];
}

//Funcion Ordenar Lista
function ordenarLista (lista) {
  const ordenada = lista.sort(function(a, b) {
    return a - b;
  });
  return ordenada;
  }

function calcularMediana(lista) {
  const listaOrdenada = ordenarLista(lista);

  const mitadLista = parseInt(listaOrdenada.length / 2);

  let mediana;

  if(esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  }else {
    mediana = listaOrdenada[mitadLista];
  }
  return mediana;
}

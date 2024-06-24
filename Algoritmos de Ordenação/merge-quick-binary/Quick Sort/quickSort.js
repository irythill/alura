const listaLivros = require('./listaLivros');

function quickSort(listaLivros, left, right) {
  if (listaLivros.length > 1) {
    let varTemp = particiona(listaLivros, left, right);
  }
  return listaLivros;
}

function particiona(listaLivros, left, right) {
  let pivo = listaLivros[Math.floor((left + right) / 2)];
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));

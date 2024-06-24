const { edGalho, edFolha } = require('./arrays'); // Importando as listas do arquivo array.js

function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posAtualListaUm = 0; // Variável de controle da posição (índice) na Lista 1
  let posAtualListaDois = 0; // Variável de controle da posição (índice) na Lista 1
  let atual = 0; // Variável que maneja em que posição a listaFinal está

  while (posAtualListaUm < lista1.length && posAtualListaDois < lista2.length) {
    let prodAtualListaUm = lista1[posAtualListaUm];
    let prodAtualListaDois = lista2[posAtualListaDois];

    if (prodAtualListaUm.preco < prodAtualListaDois.preco) {
      // Se o preço do produto da Lista 1 for menor que o preço do produto da Lista 2
      listaFinal[atual] = prodAtualListaUm;
      posAtualListaUm++;
    } else {
      // Se o preço do produto da Lista 2 for menor que o preço do produto da Lista 1
      listaFinal[atual] = prodAtualListaDois;
      posAtualListaDois++;
    }
    atual++;
  }

  while (posAtualListaUm < lista1.length) {
    listaFinal[atual] = lista1[posAtualListaUm];
    posAtualListaUm++;
    atual++;
  }

  while (posAtualListaDois < lista2.length) {
    listaFinal[atual] = lista2[posAtualListaDois];
    posAtualListaDois++;
    atual++;
  }
  return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));

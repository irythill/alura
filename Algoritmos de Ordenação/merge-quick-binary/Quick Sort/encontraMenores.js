const listaLivros = require('./listaLivros');

// Pivô é o objeto Java, pois é a partir do preço dele que estamos fazendo a ordenação dos preços que são menores que 30;

function encontraMenores(pivo, listaLivros) {
  let menores = 0;

  for (let i = 0; i < listaLivros.length; i++) {
    let actualProduct = listaLivros[i];

    if (actualProduct.preco < pivo.preco) {
      menores++;
    }
  }

  changeIndex(listaLivros, listaLivros.indexOf(pivo), menores);

  return listaLivros;
}

function changeIndex(listaLivros, from, to) {
  const elem1 = listaLivros[from];
  const elem2 = listaLivros[to];

  listaLivros[to] = elem1;
  listaLivros[from] = elem2;
}

// console.log(encontraMenores(listaLivros[2], listaLivros)); Ao final, teremos Java no lugar de Rust e vice-versa

function divideNoPivo(listaLivros) {
  let pivo = listaLivros[Math.floor(listaLivros.length / 2)]; // Novamente, estamos dividindo nosso array no meio para termos um pivô;

  encontraMenores(listaLivros, pivo);

  let valoresMenores = 0;

  for (let analysis = 0; analysis < listaLivros.length; analysis++) {
    let actual = listaLivros[analysis];

    if (actual.preco <= pivo.preco && actual !== pivo) {
      changeIndex(listaLivros, analysis, valoresMenores);
      valoresMenores++;
    }
  }

  return listaLivros;
}

console.log(divideNoPivo(listaLivros));

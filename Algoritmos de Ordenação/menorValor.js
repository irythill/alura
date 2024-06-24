const livros = require('./listaLivros');

// Encontrando o menor valor com uma função chamada menorValor
/* Esse algoritmo executa entre n operações até 2n pois ele irá
executar o for quantas vezes for preciso, e se a condição do if
for atingida, também irá executar em seguida. 
*/

function menorValor(produtos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < produtos.length; atual++) {
    if (produtos[atual].preco < produtos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;

/* Encontrando o livro mais caro

let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco > livros[maisCaro].preco) {
    maisCaro = atual;
  }
}

console.log(
  `O livro mais caro custa ${livros[maisCaro].preco} reais e o título é ${livros[maisCaro].titulo}!`
);
*/

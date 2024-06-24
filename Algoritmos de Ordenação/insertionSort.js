const troca = require('./troca');
const livros = require('./listaLivros');

function insertionSort(lista) {
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;
    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise);
      analise--;
    }
  }
  console.log(lista);
}

insertionSort(livros);

/* Veja que estamos passando como parâmetro da função troca() o array que vamos trabalhar (lista, o mesmo parâmetro que passamos como parâmetro da função externa, insertionSort()) e a variável analise. Dessa forma, a cada laço de repetição feito com o for, de 0 ao fim do array, o valor da variável analise também será atualizado, e este novo valor é passado como parâmetro da função troca() também a cada laço.

Agora você pode fazer o mesmo processo para o código do algoritmo selectionSort que criamos anteriormente, e substituir o código pela chamada da função troca(). */

const listaLivros = require('./listaLivros');

// Precisamos dividir a lista em dois até sobrar pequenas partes
function mergeSort(array) {
  if (array.length > 1) {
    const half = Math.floor(array.length / 2); // Arrendondamos o número para um inteiro pois se trata de um índice

    const firstPart = mergeSort(array.slice(0, half)); // Slice divide o array. Em firstPart, dividimos o array do início até o meio. OBS: Usamos a recursão com mergeSort para o array continuar se dividindo.

    const secondPart = mergeSort(array.slice(half, array.length)); // Em secondPart, dividimos o array do meio até o final

    array = sorting(firstPart, secondPart); // Atualizamos o array com uma função de ordenação que será criada logo abaixo!
  }

  return array;
}

function sorting(firstPart, secondPart) {
  let positionFirstPart = 0;
  let positionSecondPart = 0;
  const result = [];

  while (
    positionFirstPart < firstPart.length &&
    positionSecondPart < secondPart.length
  ) {
    let actualProductFirstPart = firstPart[positionFirstPart]; // Armazenar o resultado do array firstPart na posição positionFirstPart;
    let actualProductSecondPart = secondPart[positionSecondPart]; // Armazenar o resultado do array secondPart na posição positionSecondPart;

    if (actualProductFirstPart.preco < actualProductSecondPart.preco) {
      // Aqui estamos comparando o preço dos objetos através das listas que fizemos a divisão anteriormente
      result.push(actualProductFirstPart); // O método push 'empurra' o parâmetro pro último índice do array, ou seja, o final do array
      positionFirstPart++; // Aqui atualiza o valor da posição, do índice
    } else {
      result.push(actualProductSecondPart);
      positionSecondPart++;
    }
  }

  return result.concat(
    positionFirstPart < firstPart.length
      ? firstPart.slice(positionFirstPart)
      : secondPart.slice(positionSecondPart)
  );
  /* Com esse ternário, iremos verificar se existe algum item do array sobrando;
    Se positionFirstPart for menor que o comprimento do array firstPart, quer dizer que há algo sobrando. Então concatenamos o resultado com essa fatia que sobrou;
    Se for false, o firstPart terminou. Então concatenamos o resultado com o que sobrou de secondPart.
  */
}

console.log(mergeSort(listaLivros));

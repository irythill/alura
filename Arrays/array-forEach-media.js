/* calcular a média das seguintes notas utilizando o forEach(), este sendo um método
10, 6.5, 8, 7.5 */

const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0

// callback
notas.forEach(nota => {
  somaNotas += nota // nota retornará o valor do elemento da lista notas, e somará cada elemento até completar a lista
})

let mediaNotas = somaNotas / notas.length
console.log(mediaNotas)

// para cada nota da lista de notas, ocorre a soma das notas (0 + 10 e sucessivamente)
/* callbacks são funções que chamam outras funções
notas.forEach(function(nota){
  somaNotas += nota
}) */

const frutas = ['Laranja', 'Uva', 'Morango', 'Melão', 'Abacate']
frutas.forEach(fruta => {
  if (fruta === 'Abacate' || fruta === 'Melão') {
    return console.log(`Eca! ${fruta} é muito ruim.`)
  } else {
    return console.log(`${fruta} é top demais`)
  }
})

// exemplo com matrizes

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j] / notasGerais[i].length
  }
}

/* No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta. */

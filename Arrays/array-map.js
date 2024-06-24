/* um aluno recebeu um ponto extra nas suas notas
adicione o ponto extra nas seguintes notas:
10, 9, 8, 7, 6 */

const notas = [10, 9, 8, 7, 6]
const novasNotas = notas.map(nota => {
  if (nota < 10) {
    return ++nota //
  } else {
    return nota
  }
})
console.log(novasNotas)

const km = [1, 2, 3, 4, 5]
const m = km.map(mt => {
  return mt * 1000
})
console.log(m)

// operador ternário

const notasBimestre = [1, 2, 3, 4, 5]
const notasFinais = notasBimestre.map(
  notinha => (notinha == 10 ? notinha : ++notinha) // se notinha == 10, retornar a nota normal, caso contrário 1 + notinha
)
console.log(notasFinais)

/* map()
usamos quando é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores, ex: conversão de temperaturas etc
percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros,
para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. 
diferente do forEach(), o map() nos retorna uma nova array */

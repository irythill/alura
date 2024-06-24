/* método reduce() - reduzir o array para um único valor
calcular a média geral das 3 salas de aula
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5] */

// 1º - criar as arrays

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

// 2º calcular as médias, para evitar repetição nós usaremos uma function normal

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0) // usaremos uma const para guardar o valor retornado
  return somaDasNotas / notasDaSala.length
}
console.log(`Média da sala JS: ${mediaSala(salaJS)}`)
console.log(`Média da sala JS: ${mediaSala(salaJava)}`)
console.log(`Média da sala JS: ${mediaSala(salaPython)}`)

/* reduce() necessita de dois parâmetros, usamos o ACUMULADOR e o segundo é o ATUAL
'atual + acum,0' usamos zero como número neutro pois estamos fazendo uma soma na array - seria a mesma coisa que fazer let acum = 0
por fim, pegamos a soma das notas e dividimos pelo tamanho da array para termos a média */

// calculando a média das notas do primeiro exemplo (arrays.js)

const notas = [10, 6.5, 8, 7.5]
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length // você pode definir o nome dos parâmetros do jeito que quiser, acum + atual poderia ser a + b
console.log(media)

// para melhor visualização

const soma = numeros.reduce(function (acum, atual) {
  return atual + acum
}, 0)

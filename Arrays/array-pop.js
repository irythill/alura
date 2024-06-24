// tirando elementos de uma lista

const notas = [10, 7, 8, 5, 10]
notas.pop() // o método .pop() tira o ÚLTIMO elemento de uma lista, ele NÃO aceita parâmetros
let medias = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média do aluno foi de ${medias}`)

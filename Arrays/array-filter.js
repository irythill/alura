/* método filter()
Depois de calcular a média dos alunos, mostrar quem está REPROVADO
'Ana', 'Marcos', 'Maria', 'Mauro'
7, 4.5, 8, 7.5 */

const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((aluno, i) => notas[i] < 5) // i = índice de cada item do array notas
console.log(`Parabéns ${reprovados}, você ficará mais um ano na escola!`)

/* o método filter() retornou o nome do aluno que tirou nota menor que 5
seu objetivo é esse: filtrar :) 
o filter() é um método booleano */

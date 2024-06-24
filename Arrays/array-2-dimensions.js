/* criar uma lista com os seguintes alunos:
'João', 'Juliana', 'Caio', 'Ana'.
criar uma lista com as seguintes médias:
10, 8, 7.5, 9.
criar uma lista com 2 dimensões, com o nome e
as médias */

const listaDeAlunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 8, 7.5, 9]

let listaNotasEAlunos = [listaDeAlunos, mediasDosAlunos] // basicamente, uma lista com listas dentro
console.log(
  `${listaNotasEAlunos[0][0]}, sua média é ${listaNotasEAlunos[1][0]}`
)
/* o primeiro [0] se refere à listaDeAlunos, o segundo [0] se refere ao primeiro elemento dentro da listaDeAlunos
o terceiro [0] se refere às mediasDosAlunos, o quarto [0] se refere ao primeiro elemento dentro da mediasDosAlunos */

const nome = ['Henrique', 'Luciana', 'Eliane', 'Vera', 'Mariana', 'Emma']
const sobrenome = ['Elis', 'Beatriz', 'Souza', 'Alves', 'Aurora', 'Raimunda']

let nomeSobrenome = [nome, sobrenome]
console.log(`${nomeSobrenome[0][2]}, seu sobrenome é ${nomeSobrenome[1][1]}`)

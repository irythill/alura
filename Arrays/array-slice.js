/* dividir os alunos da sala em duas listas com a mesma quantidade de alunos
João, Juliana, Ana, Caio, Lara, Marjorie, Guilherme, Aline, Fabiana, André
Carlos, Paulo, Bia, Vivian, Isabela, Vinícius, Renan, Renata, Daisy, Camilo 
São 20 nomes, 10 para cada lista */

const nomes = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'André',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camilo'
]
const sala1 = nomes.slice(0, nomes.length / 2) // o método .slice() dividiu a lista por dois, conforme especificado nos parâmetros
const sala2 = nomes.slice(nomes.length / 2)
console.log(
  `Os alunos da Sala 1 são: ${sala1}. Os alunos da Sala 2 são: ${sala2}`
)

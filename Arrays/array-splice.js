/* atualizando uma array 
Ana e Caio saíram da escola
Rodrigo entrou na escola */

const listaChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']
let novaLista = listaChamada.splice(1, 2, 'Rodrigo')

/* o método .splice() nos permite remover elementos e também adicionar, no caso 
removeremos a partir do índice 1 (Ana) até o 2 (Caio), e logo em seguida 
adicionaremos 'Rodrigo' no lugar. */

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1, 0, '🐠')
animaisDoAquario.splice(3, 2, '🐟')

console.log(animaisDoAquario)

/* No aquário, o golfinho e o tubarão não estão presentes por conta do código 
animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir 
da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram 
nas posições definidas pelo splice. */

const outraListaDeChamada = [
  'Henrique', // 0
  'Mariana', // 1
  'Emma', // 2
  'Luciana', // 3
  'Andrei', // 4
  'Eliane', // 5
  'Vera' //6
]
let outraNovaLista = outraListaDeChamada.splice(5, 2, 'Yuri') // irá remover dois elementos da lista, a partir da posição 5
console.log(outraListaDeChamada)

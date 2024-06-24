/* O Switch é uma estrutura condicional = estrutura de controle de fluxo;
Avalia uma expressão, não obrigatoriamente uma expressão lógica, aceitando
expressões aritméticas;
Procura a melhor cláusula (caso) que atende ao resultado;
As cláusulas são chamadas de "cases" */

let velocity = 80

switch (velocity * 2) {
  case 100:
    console.log('Sua velocidade é 100km/s')
    break
  case 160:
    console.log('Sua velocidade é 160km/s')
    break
  default:
    // chamado quando NENHUM case é identificado.
    console.log('Velocidade não identificada.')
}

// exemplo com uma variável texto

let spaceship = 'Millenium'

switch (spaceship) {
  case 'Golias':
    console.log('Nave mais fodástica')
    break
  case 'Raptor':
    console.log('Nave mais fodásticamente foda')
    break
  case 'Enterprise':
    console.log('Nave da Frota Estelar')
    break
  default:
    console.log('Nave comum.')
}

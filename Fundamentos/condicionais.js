// Blocos de códigos que são executados baseado no resultado de uma expressão lógica
// Conhecido como CONTROLE DE FLUXO

let velocity = 90

// if = se // else = se não

if (velocity < 100) {
  console.log('Velocidade suave.')
} else {
  console.log('Fudeu')
}
// se a velocity se manter abaixo de 100 = Velocidade suave.
// se a velocity AUMENTAR = Fudeu
// else NÃO PODE existir sem o if
// podemos usar IF dentro de IF, mas não é recomendado

if (velocity < 100) {
  console.log('Velocidade suave')
} else {
  if (velocity <= 100) {
    console.log('Dá uma freiadinha pow')
  } else {
    console.log('Fudeu')
  }
  // forma enxuta do mesmo código acima
  if (velocity < 100) {
    console.log('Velocidade suave')
  } else if (velocity <= 100) {
    console.log('Diminui pow')
  } else {
    console.log('Meu Deus')
  }
}

// operador ternário (IF DE UMA LINHA) ? e :
velocity > 100
  ? console.log('Velocidade maior que 100')
  : console.log('Velocidade menor que 100')
// SE FOR VERDADEIRO                                         SE FOR FALSO
// recomendado usar apenas quando a expressão de verificação e os blocos de código são pequenos

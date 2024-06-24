// arrow function

const arrowFunction = funcao => `Meu nome é ${nome}`
const soma = (numero1, numero2) => numero1 + numero2 // necessita parênteses quando há mais de um parâmetro

// não necessitamos usar return em arrow function quando o código tiver UMA LINHA de instrução

const somarNumeros = (num3, num4) => {
  if (num3 || num4 >= 10) {
    return 'Somente números de 1 até 9'
  } else {
    return num3 + num4
  }
}

/* arrow function é um jeito mais rápido e curto de escrever uma função
ela possui vantagens quando começamos a mexer com objetos */

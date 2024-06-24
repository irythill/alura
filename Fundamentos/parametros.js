// usando parâmetros nas funções, num1 e num2 são parâmetros

function soma(num1, num2) {
  return num1 + num2
}
console.log(soma(3, 5))

// a ordem dos parâmetros importam

/* function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`
}
console.log(nomeIdade(24, Henrique)) retornará "meu nome é 24 e minha idade é Henrique" */

// chamando uma função dentro de outra função

function outraSoma(num3, num4) {
  return num3 + num4
}

function multiplicar(num3, num4) {
  return num3 * num4
}
console.log(multiplicar(outraSoma(4, 5), outraSoma(3, 3)))

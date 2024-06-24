// string to number

let numeroUm = Number(prompt('Digite um número de 1 a 10.')) // podemos usar Number.parseInt ou Number.parseFloat
let numeroDois = Number(prompt('Digite outro número de 1 a 10.'))

let soma = numeroUm + numeroDois

alert(`A soma de ${numeroUm} e ${numeroDois} será de ${soma}`)

// number to string

alert('A soma dos números será ' + String(soma)) // podemos usar também toString()

// template string ~> $nome{}

let nome = 'Henrique'
let idade = 21
let faculdade = 'Análise e Desenvolvimento de Sistemas'

let sentenca = alert(`${nome} tem ${idade} e está cursando ${faculdade}`)

/* outros tipos de tratamento
var.length = quantos caracteres tem a variável
var.toUpperCase() = transforma a variável em letras maiúsculas
var.toLowerCase() = transforma a variável em letras minúsculas */

let nomeDois = prompt('Por favor, digite o seu nome.')
let alertaNome = alert(
  `Olá ${nome}, o seu nome tem ${
    nome.length
  } letras. Em maiúsculas ele fica como ${nome.toUpperCase()} e em minúsculas ele fica como ${nome.toLowerCase()}.`
)

/* transformando números para duas casas decimais
var.toFixed(casaDecimal) */

let salario = 1545.5
let duasDecimais = salario.toFixed(2) // 1545.5 ~> 1545.50

/* para mudar ponto para vírgula ou qualquer outro caractere
var.replace() */

let duasDecimaisDois = salario.toFixed(2).replace('.', ',') // 1545.5 ~> 1545,50

/* localizando uma string para um idioma e definindo monetariedade
var.toLocaleString("idioma", {style: "currency", currency: "BRL"}) */

let duasDecimaisTres = salario.toLocaleString('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

parseInt() // converte string para um inteiro
parseFloat() // converte para um decimal

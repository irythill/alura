/* consultar um objeto utilizando uma lista de chaves
relativas as informações de clientes geradas pelo
sistema e printar o resultado na tela */

// 1º - ter o objeto
const cliente = {
  nome: 'Henrique',
  idade: 24,
  cpf: '03701159025',
  email: 'h.sp97@hotmail.com'
}

// 2º - criar uma array das chaves desse objeto
const informacoes = ['nome', 'idade', 'cpf', 'email']

// 3º - acessar o que queremos através do console
console.log(cliente[informacoes[0]]) // acessaremos no objeto CLIENTE, o array INFORMACOES no INDICE 0, retornando o nome

// acessando TODAS as informações, usaremos o forEach

informacoes.forEach(info => console.log(cliente[info]))

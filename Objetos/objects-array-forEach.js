/* acessar a lista de números de telefones das
pessoas cadastradas no sistema e imprimi-lá, verificando
se há mais de um número em algum cadastro */

const cliente = {
  nome: 'Henrique',
  idade: 24,
  cpf: '03701159025',
  email: 'h.sp97@hotmail.com',
  fones: ['55 51 9 98942097', '55 51 9 98395240']
}

// acessando a lista de telefones

cliente.fones.forEach(fone => console.log(fone)) // usamos o método de array forEach para acessar a lista de telefones dentro de um objeto

/* quando usamos notação de ponto para acessar uma chave de um 
objeto, temos acesso ao valor dessa chave - que nesse caso era 
um array
exemplo adicionando um telefone dentro da array: */

cliente.fones.push('55 51 1 2345678')
console.log(cliente) // fones: [ '55 51 9 98942097', '55 51 9 98395240', '55 51 1 2345678' ]

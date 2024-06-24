/* adicionar dependentes para um dos clientes
cadastrados, com nome, idade e parentesco */

const cliente = {
  nome: 'Henrique',
  idade: 24,
  cpf: '03701159025',
  email: 'h.sp97@hotmail.com'
}

// usaremos a notação de ponto novamente

cliente.dependentes = {
  nome: 'Luciana',
  parentesco: 'Mãe',
  idade: 50
}

// console.log(cliente)

// para alterar o valor do objeto 'cliente'

cliente.dependentes.nome = 'Luciana Beatriz'

console.log(cliente)

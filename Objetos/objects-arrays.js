/* para adicionar mais de um dependente, transformaremos o objeto 
'dependentes' em um ARRAY adicionando colchetes [] isso nos permite 
usarmos métodos de array */

const cliente = {
  nome: 'Henrique',
  idade: 24,
  cpf: '03701159025',
  email: 'h.sp97@hotmail.com',
  dependentes: [
    {
      nome: 'Luciana',
      parentesco: 'Mãe',
      idade: 50
    }
  ]
}

// usaremos o método push()

cliente.dependentes.push({
  nome: 'Mariana',
  parentesco: 'Namorada',
  idade: 22
})

console.log(cliente)

// acessar dependentes, entrando no array e trazer o nome da última dependente, usaremos o método filter()

const ultimoDependente = cliente.dependentes.filter(dp => dp.idade === 22)
console.log(ultimoDependente)

/* para um dado mais específico, como o nome do ultimoDependente
o índice é 0 pois é o único que temos dentro do ultimoDependente */

console.log(ultimoDependente[0].nome) // Mariana

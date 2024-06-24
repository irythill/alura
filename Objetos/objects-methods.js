/* percorrer um objeto, verificar se existe a chave dependentes
e caso exista, enviar uma mensagem de oferta de seguro */

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
    },
    {
      nome: 'Eliane',
      parentesco: 'Tia',
      idade: 48
    }
  ],
  saldo: 200, // adicionaremos um saldo
  depositar: function (valor) {
    this.saldo += valor
  },
  sacar: function (saque) {
    this.saldo -= saque
  },
  transferir: function (ted) {
    this.saldo -= ted * 2
  },
  consultar: function (consulta) {
    this.saldo = consulta
  }
}

// usaremos o método de objeto Object.keys() e método de arrays includes()

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj) // pedimos para extrair uma lista de chaves do objeto
  if (propsClientes.includes('dependentes')) {
    // método includes() é um metodo de array, ele retorna um valor booleano para a função
    console.log(`Oferta de seguro para ${obj.nome}`)
  }
}
oferecerSeguro(cliente)

// também existe o método de objeto Object.values() que retorna uma lista com os valores de um objeto
console.log(Object.values(cliente))

// o método de objeto Object.entries() retorna uma lista de chaves e valores, sendo i = 0 a chave e i = 1 o valor
console.log(Object.entries(cliente))

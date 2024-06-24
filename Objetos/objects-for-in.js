/* percorrer um objeto e extrair informações básicas
do cliente em um formato mais legível e de forma automatizada 
para fornecer a outros departamentos do banco */

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

// para percorrer o objeto, usaremos o método for...in, sendo esse um método para objetos

let relatorio = ''

for (let info in cliente) {
  // para 'info' dentro de 'cliente', sendo info uma variável que criamos
  if (
    typeof cliente[info] === 'object' || // se o tipo da info do cliente for um objeto OU for uma função, ele continua
    typeof cliente[info] === 'function'
  ) {
    continue
  } else {
    relatorio += ` ${info}: ${cliente[info]}` // caso contrário, ele retorna um relatório, sendo esse a info (chave do objeto) e cliente[info] o valor da chave do objeto
  }
}
console.log(relatorio)

/* adicionar uma propriedade que permita 'ações', para
que os clientes que estão cadastrados consigam fazer
operações bancárias */

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
    // utilizamos funções para dar comportamentos aos objetos
    this.saldo += valor // esse saldo + valor do depósito que passaremos abaixo
  },
  sacar: function (saque) {
    this.saldo -= saque // esse saldo - valor do saque que passaremos abaixo
  },
  transferir: function (ted) {
    this.saldo -= ted * 2
  }
}

cliente.sacar(100)
console.log(cliente.saldo)

/* IMPORTANTE
Dentro de uma arrow function, this é definido à partir das funções onde foram definidas (se uma arrow function é criada em um escopo global, 
o this fará referência a esse escopo global. Portanto, nesse caso, o this fará referência ao objeto global, já que não possui o this pré-definido.
Ao contrário das funções regulares, as arrow functions não possuem um this próprio, apenas as funções regulares e o escopo global possuem o seu próprio this. 

// Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
const objPersonagem = {
  nome: 'Gandalf',
  classe: 'mago',
  nivel: '20'
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = 'Gandalf, o Cinzento'

console.log(objPersonagem.nome) // Gandalf
console.log(objPersonagem2.nome) // Gandalf, o Cinzento

/* O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via 
parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser 
trabalhada de forma independente. */

/* adicionar informações em um objeto
adicione a informação telefone junto
com o seu valor - 51998942097 */

const cliente = {
  nome: 'Henrique',
  idade: 24,
  cpf: '03701159025',
  email: 'h.sp97@hotmail.com'
}

cliente.fone = `51998942097` // adicionando a chave 'fone' dentro do objeto 'cliente'
console.log(cliente)

// se você colocar outro valor para a chave fone, o js irá substituir o valor antigo pelo valor novo

const pessoa = {
  nome: 'Bruce Banner',
  dataNascimento: '25/01/1980',
  carteiraIdentidade: '997776-X',
  email: 'profbanner@email.com',
  telefone: '+552877776666',
  cidade: 'Cachoeiro de Itapemirim',
  estado: 'ES'
}

// adicionaremos o seguro social e cpf do Batman

pessoa.cpf = '5346626522-65'
pessoa.seguroSocial = '854321985-9'

console.log(pessoa) // nesse momento teremos o objeto com as novas chaves

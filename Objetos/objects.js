/* os temidos objetos
- são estruturas de dados que nos permitem guardar informações
- útil para guardar informações do MESMO TIPO
- possível fazer abstrações do mundo real
diferente de arrays, nós usamos {} para fazer um objeto
exemplo: */

const cliente = {
  nome: 'Henrique',
  idade: 24,
  cpf: '03701159025',
  email: 'h.sp97@hotmail.com'
}

/* desafio: acessar um objeto com info de um cliente e
exibir essas informações através do console */

const outroCliente = {
  nome: 'Luciana',
  idade: 50,
  cpf: '70782113087',
  email: 'lucianabeatriz72@gmail.com'
}

console.log(
  `Meu nome é ${outroCliente.nome} e tenho ${outroCliente.idade} anos de idade. Meu CPF é ${outroCliente.cpf} e meu e-mail é ${outroCliente.email}`
) // dessa forma você pode acessar as infos do objeto

// podemos acessar as chaves dentro do objeto e também modificar elas, exemplo: exibir apenas os três primeiros caracteres do CPF
console.log(outroCliente.cpf.substring(0, 3)) // 707

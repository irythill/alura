const colecionador = {
  nome: 'João do Gibi',
  idade: 41,
  tipocolecao: ['quadrinhos'],
  contato: 'joao@email.com',
  adicionarTipo: function (propriedade, tipo) {
    // adicionamos uma função para adicionar tipos de quadrinhos na lista de tipocolecao do objeto
    this[propriedade].push(tipo)
  }
}

for (i = 0; i < 10; i++) {
  colecionador.adicionarTipo('tipocolecao', 'HQ' + i)
}

/* Usando uma estrutura for conseguimos manipular a propriedade tipocolecao do objeto 
colecionador, por meio da função adicionarTipo(). Usamos a notação de colchetes junto à palavra 
reservada this, que faz referência ao próprio objeto. Desse modo, fazemos uso do objeto como um 
array associativo. */

// para curiosidade:

console.log(colecionador) // exibe o valor da propriedade nome
console.log(colecionador['idade']) // exibe o valor da propridade idade

/* Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. 
No segundo exemplo, acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. 
No JavaScript, objetos são classificados também como um array associativo (map ou dicionário). */

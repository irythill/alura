const objPersonagem = {
  nome: 'Gandalf',
  classe: 'mago',
  nivel: '20',
  aliado: {
    nome: 'Saruman',
    classe: 'mago'
  },
  status: 'desaparecido'
}

delete objPersonagem.aliado
console.log(objPersonagem.aliado) // irá retornar undefined pois removemos com o delete a sua chave

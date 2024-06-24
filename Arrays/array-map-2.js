/* alterando strings com map(): padronizar nomes
padronize a seguinte lista para conter apenas letras maiúsculas:
'ana julia', 'Caio vinicius', 'BIA silva' */

let nomes = ['ana julia', 'Caio vinicius', 'BIA silva']
const novosNomes = nomes.map(nome => {
  return nome.toUpperCase() // NÃO ESQUECER: quando dentro de um bloco de código, utilizar o return
})
console.log(novosNomes) // 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA'

// toUpperCase() é um método que transforma uma string para caracteres maiúsculos

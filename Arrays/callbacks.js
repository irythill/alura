// revisão de callbacks

const nomes = ['Ana', 'Juliana', 'Leo', 'Paula']
nomes.forEach(imprimindoNome)

function imprimindoNome(imprimeNome) {
  return console.log(imprimeNome)
}

// ou com arrow function

const nomes2 = ['Ana', 'Juliana', 'Leo', 'Paula']
nomes2.forEach(nome => {
  console.log(nome)
})

// ordem de parâmetros forEach(function, índice)

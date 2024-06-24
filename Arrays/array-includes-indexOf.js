/* criar uma função que recebe como argumento o nome do aluno;
verifique se o aluno está presente na lista e retorne a média
final que se encontra no mesmo índice;
caso o nome do aluno não esteja na lista, retorne uma mensagem
indicando que o aluno não foi encontrado;
usaremos os métodos .includes() e indexOf() */

const listaDeAlunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 8, 7.5, 9]

let listaNotasEAlunos = [listaDeAlunos, mediasDosAlunos]

const exibeNomeNota = nomeDoAluno => {
  if (listaNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaNotasEAlunos[0].indexOf(nomeDoAluno)
    return (
      listaNotasEAlunos[0][indice] +
      ', sua média é ' +
      listaNotasEAlunos[1][indice]
    )
  } else {
    return 'Aluno não está cadastrado'
  }
}
console.log(exibeNomeNota('Henrique')) // função sendo executada junto com seu parâmetro

/* includes() retorna um booleano
indexOf() retorna um número */

const nomes = ['Gustavo', 'Marcos', 'Higor', 'Rui']
const adjetivos = ['charmoso', 'bonitinho', 'jkkkk', '?????']
let nomesAdj = [nomes, adjetivos]

const adjetivometro = certezometro => {
  if (nomesAdj[0].includes(certezometro)) {
    let hM = nomesAdj[0].indexOf(certezometro)
    return nomesAdj[0][hM] + ', você é ' + nomesAdj[1][hM]
  } else {
    return 'Esse é O GOSTOSÃO'
  }
}
console.log(adjetivometro('Henrique'))

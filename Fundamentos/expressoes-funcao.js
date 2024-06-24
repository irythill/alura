// forma clássica de escrever funções

function minhaFuncao(parametro1, parametros2) {
  // bloco de código
}

// expressão de função, quando usamos uma função dentro de uma const

const somar = function (numero1, numero2) {
  return numero1 + numero2
}
console.log(somar(1, 1))

/*

let valor = 5

let conversao = function byte() {
  return valor.toFixed(2) * 1
}

console.log('O valor convertido será ' + valor.toFixed(2) + ' B.') */

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i]
}

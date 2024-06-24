/* utilizadas para repetir um bloco de código
podendo ser por um determinado número de vezes
ou até uma condição ser atendida
- while
- for
- do-while */

/* estrutura "while", ele executará o código até a expressão avaliada ser FALSA
while(expressao) {
  código a ser executado
} */

let velocidade = 50
let aceleracao = 5

while (velocidade <= 100) {
  console.log('Estamos a ' + velocidade + 'km/s')
  velocidade += aceleracao // essa expressão também pode ser escrita como "velocidade = velocidade + aceleracao"
}
// esse código será executado até atingir 100km/s, pois 105km/s NÃO é igual nem MENOR que 100km/s

let constelacao = 'Andromeda'
let posicao = 0
let constelacaoLength = constelacao.length

while (posicao < constelacaoLength) {
  if (constelacao[posicao] == 'a' || constelacao[posicao] == 'A') {
    console.log(posicao)
  }
  pos += 1
}
// esse código irá imprimir O e 8, pois a letra maiúscula "A" se encontra na posição 0 e a letra minúscula "A" se encontra na posição 8

/* estrutura "for"
é possível adicionar a variável
que utilizaremos para controlar
os loops, possui o seguinte formato:
for(<variavel>; <expressão>; <ação de controle>;) {
  <bloco de código>
} */

let naveEspacial = 'Helmet'
let novoNomeNave = ''

for (let i = 0; i < naveEspacial.length; i++) {}

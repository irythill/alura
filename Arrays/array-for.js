/* laços de repetição utilizando o for */

const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i])
}

/* 1º - criamos uma variável dentro do for: let i = 0
2º - fazemos uma comparação: i < numeros.length, aqui é onde ocorre o loop, enquanto o valor de i (que é 0) for menor que numeros.length, ele retornará os elementos da lista numeros
3º - i++ aumenta em 1 a variável i 
4º - no console.log(i, numeros[i]), primeiro ele retorna o valor da variável 'i', o segundo valor é correspondente ao elemento da const numeros 
5º - por último, ele checa a última condição do for, o valor de i é somado com um e assim vai até terminar a lista numeros */

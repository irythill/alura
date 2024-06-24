concat() // junta dois arrays, colocando o array passado como argumento, logo depois do primeiro.
filter() // retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós;

// ambos os métodos acima necessitam um novo array para que possa ser mostrado o resultado

shift() // retira o primeiro elemento do array;
unshift() // funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos;
find() // retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número;
findIndex() // similar ao find(), retorna o índice ao invés do elementos, podendo ser usado em outra parte do código;
indexOf() // localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array, se não existir nenhuma ocorrência do valor, retorna -1;
lastIndexOf() // funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente;
forEach() // executa uma função em cada elemento do array de forma individual;
reduce() // utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor;
reduceRight() // funciona igual o reduce() porém começa do final do array e segue até o início;
reverse() // inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante;
slice() // copia uma parte do array para outro array;
sort() // organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando;
splice() // consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

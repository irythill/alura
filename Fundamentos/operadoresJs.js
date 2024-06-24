/* operadores aritméticos
+ ~> soma
- ~> subtração
* ~> multiplicação
/ ~> divisão
% ~> resto da divisão inteira
** ~> potência */
let soma = 5 + 2
let subtracao = 5 - 2
let multiplicacao = 5 * 2
let divisao = 5 / 2
let restoDivisao = 5 % 2
let potencia = 5 ** 2

/* ordem de precedência dos operadores
()
**
* / % 
+ - */
let outraSoma = 5 + 3
let outroRestoDivisao = outraSoma % 5
let multiplicPotencia = 5 * outroRestoDivisao ** 2
let subtracDivisao = 10 - outraSoma / 2
let multiplicDivisao = (6 * 2) / subtracDivisao
let mistureba = (outroRestoDivisao % multiplicDivisao) + 4 / multiplicDivisao
console.log(outraSoma)

// auto atribuições
let n = 3
n = n + 4 // 7
n = n - 5 // 2
n = n * 4 // 8
n = n / 2 // 4
n = n ** 2 // 16
n = n % 5 // 1

// forma simplificada das auto atribuições, o operador vem sempre antes da atribuição (=)
let m = 3
m += 4
m -= 5
m *= 4
m /= 2
m **= 2
m %= 5

// operador de incremento
let xis = 5
xis = x + 1 // x ++ = soma 5 + 1
xis = x - 1 // x -- = subtrai 5 - 1

/* operadores relacionais
> maior que
< menor que
>= maior ou igual que
<= menor ou igual que
== é igual a (compara o valor, não o tipo)
=== é igual a (compara o valor e o tipo)
!= não igual a / diferente */
5 > 2 // true
7 < 4 // false
8 >= 8 // true
9 <= // false
  5 ==
  '5' // true
5 === '5' // false
5 === 5 // true
4 != 4 // false
4 !== 3 // true

/* operadores lógicos
! negação (não)
&& conjunção (e)
|| disjunção (ou) 
sua ordem de execução é NÃO, E e OU */
let a = 5
let b = 8
a > b && b % 2 == 0 // primeiro os aritméticos, depois os relacionais e depois os lógicos, resultado é FALSE

/* operador ternário
?: 
composto de três fases: teste ? true : false 
exemplo: média >= 7.0 ? "Aprovado" : "Reprovado */
let media = 5.5

media => (7.0 ? 'Aprovado' : 'Reprovado') // reprovado kjkj

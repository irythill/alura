let spaceship = 'Millenium'
let velocity = 80

console.log(spaceship == velocity) // retorna FALSE pois os valores são diferentes (string / number)
console.log(velocity == '80') // retorna TRUE pois velocity é 80, "==" ignora o tipo
console.log(spaceship === '80') // retorna FALSE pois o tipo velocity é diferente do tipo 80
// === compara o valor e também o tipo

console.log(velocity != 80) // != significa DIFERENTE, neste caso retorna FALSE pois a variável velocity tem o valor number 80
// !== é a mesma lógica que antes, compara o valor e o tipo

console.log(velocity > 70) // retorna TRUE pois velocity é maior que 70
console.log(velocity < 70) // retorna FALSE pois 70 é menor que a velocity (80)

// também temos >= MAIOR OU IGUAL e <= MENOR OU IGUAL
console.log(velocity <= 130) // retorna TRUE pois velocity (80) é menor que 130
console.log(spaceship <= 'Helmet') // retorna FALSE pois Millenium vem depois de Helmet, ordem alfabética
// todos esses comparadores podem ser usados com strings

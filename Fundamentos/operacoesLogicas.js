// pesquisar LÓGICA e MATEMÁTICA DISCRETA

let spaceship = 'Elemental'
let velocity = 20

// && = e/and
console.log(spaceship.length == 9 && velocity > 15) // RETORNA TRUE
// V + V = verdadeiro: Elemental possui 9 caracteres e velocity 20 é maior que 15

console.log(velocity > 10 && velocity < 19) // RETORNA FALSE
// V + F = falso: velocity é maior que 10 porém não é menor que 19
// F + V = falso
// F + F = falso

// || = ou/or
console.log((spaceship.length = 9 || velocity > 15)) // RETORNA TRUE
// V ou V = verdadeiro

console.log(velocity > 10 || velocity < 19) // RETORNA TRUE
// V ou F = verdadeiro, ele considera verdadeiro quando há pelo menos uma afirmação verdadeira

console.log(velocity < 17 || spaceship == 'Elemental')
// F ou V = verdadeiro
// F ou F = falso

// ! = não/no, ele inverte as proposições, o que é F vira V e o que é V vira F

console.log(!(velocity > 19)) // RETORNA FALSE
// NÃO V = F

console.log(!(spaceship == 'Golias')) // RETORNA TRUE
// NÃO F = V

const salaDeJava = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJavaScript = ['Juliana', 'Caio', 'Henrique']

let salasUnidas = salaDeJava.concat(salaDeJavaScript) // salaDeJava + salaDeJavaScript
console.log(salasUnidas)

/* concat() é um método útil quando não se deseja alterar o array original, e sim 
fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() 
para inserir novos elementos ou fazer alterações no array original. */

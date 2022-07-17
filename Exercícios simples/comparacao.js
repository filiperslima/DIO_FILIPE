function compararNumeros(a,b) {
     let comparacao = a===b ? "são iguais" : "não são iguai"
     let soma = a+b>10 && a+b<20 && a+b !=10 && a+b!=20 ? "maior que 10 e menor que 20" :"menor que 10 e menor que 20"
     console.log('Os números ' + a + " e " + b + ' '+comparacao +'. a soma é ' + (a+b) +', que é ' + soma  )
}
compararNumeros(3,7)


let nome = 'João'
let sobrenome = 'Felipe'
return concatenar
/*
O que aprendi nesta aula:
1 - Podemos encerrar do bloco de código caso surja um erro de condição definida por nós com o throw, no lugar de return:
exp - function arrayNumeros(array, numero){ if (!array || !numero) throw new ReferenceError("Envie os parâmetros") }
2 - Podemos acessar alguns atributos do erro com o .name para visualizar o nome, o .message para visualizar a mensagem do erro e o .stack para visualizar a linha.
3- O erro é um objeto e ele possui alguns parâmetros (message, fileName, lineNumber), mas dois deles não são de uso padrão (fileName, lineNumber).
4 - Posso usar a função construtora (new) para criar os erros e depois
 */

function arrayNumeros(array, numero){
  
    
try {
    if (!array || !numero) throw new ReferenceError("Envie os parâmetros") //Aqui eu crio sempre um novo erro. Nesse caso eu crio uma condição e se atender essa condição,  o erro será criado.
   
    if (typeof array !== 'object') throw new TypeError("Array precisa ser do tipo objecto")
   
    if (typeof numero == 'NaN') throw new TypeError("O número precisa ser do tipo Number") 
   
    if (array.length !== numero) throw new RangeError("Tamanho Inválido")

    return array
}
catch(e) {
    if(e instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError!")
        // throw e; //ou dou um console.log/throw no e.name, ou e.message ou até mesmo e.stack
        console.log(e.message)
    }
    else if (e instanceof TypeError) {
        console.log("Este erro é um TypeError!")
        //throw e;
        console.log(e.message)
    }
    else if (e instanceof RangeError) {
        console.log("Este erro é um RangeError!")
        throw e
        //console.log(e.message)
    }
    else {
        console.log("Tipo de erro não esperado")
        

    }
}

}
arrayNumeros([2,2],2)
const NovoErro = new Error();

NovoErro.name = "Novo Erro";
NovoErro.message = "Este erro nunca ocorreu"
console.log(NovoErro)
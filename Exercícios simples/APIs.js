/*
Assincronissidade - 
Algo que não ocorre ou não se efetiva ao mesmo tempo

O JS roda de maneira síncrona de maneira padrão. 

Nesse sentido temos o Client com uma tarefa, em seguida o client fica em espera e passa a ser a vez do server, depois este para e volta a ser a vez do cliente.

No Assíncrono o client e o server poderão funcionar ao mesmo tempo.


Promises - 
Objeto de processamento assíncrono. Seu valor inicialmente é desconhecido e ela pode ser resolvida ou rejeitada.

3 estados:
Pendente - promise(resolve, rejected)
Completada - (.then(onfulfillment))
Rejeitada - (.then(onRejection) .(catch(onRejection)))

Manipulações de Promises -

Podemos usar o await nomePromise .then para encadear as chamadas.

Async/await -

Funções assíncronas precisaam dessas duas palavras.
Await para o código e diz "Espera a promise ser resolvida". Se não usar o await ele vê a promise, mas independetemente se foi ou não resolvida, ele segue direto.
Assim, o await é quando a gente precisa parar o código enquato a promise é resolvida.


*/

//exp de uma promise
const myPromise = new Promise((resolve,rejected)=> { window.setTimeout(() => { resolve(console.log('Resolvida!'));}, 2000);
});  // eu declarei uma promise com parâmetros resolvida ou rejeitada e depois de 2 segundos esla será resolvida. 

//manipulando promises. Pego o resultado anterior com o away
await myPromise
    .then((result)=> result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message))
// Dessa forma eu to dizendo que, depois que a promise for resolvida lá em cima, ela espera.
// Aí pega o resultado da promise e concatena com o primeiro .then.
// Depois pega esse resultado conjunto e passa pelo segundo .then;
// se der erro, captura o erro e retorna a mensagem de erro.

/*
APIs
Forma de intermediar os resultados do back-end com o que é apresentado no front-end
O acesso se dá por meio de URLs

As APIs retornam dados em formato .json e precisamos tratá-los quando os recebermos.

Método FETCH
fetch (url, options)
    .then(response => response.json())
    .then(json => console.log(json))
Esse método retorna uma promise e precisamos usar um await quando formos utilizar o fetch.
Precisamos sempre tratar esses dados ao receber ou ao enviar.


*/

//fetch() sintaxe
fetch('https://endereco-api.com/', { //aqui são as options, podemos tratar os dados aqui
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))




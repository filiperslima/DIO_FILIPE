/**
 * DOM - O Que é: Document Objetct Model
 * É um padrão de como acessar e modificar os elementos HTML de uma página.
 * DOM vs BOM
 * DOM é um documento do BOM.
 * O BOM é tudo que está dentro do objeto Window. É o Browser objetct model. Dentro dele temos o Document, o History, o Location, o Screen e o Navigator.
 * 
 *      Estrutura HTML
 *  tag - elemento
 *  id - um identificador único definido por usuário
 *  class - identificador que pode ser repetido definido por usuário.
 * 
 *    Métodos
 *  Preciso selecionar o elemento da página para usar os métodos.
 *  exp: getElementeByTagName('h2') --> seleciona todos os h1 e retorna um array... Posso usar o ByClassName ou ById.
 *  Temos um querySelectAll('li .opcao') --> Aqui selecionamos todos li que possuem a classe opcao. Posso fazer isso das mais variadas formas. Combinando as buscas.
 * 
 *  document.createElement('tag') - Crio um novo elemento html
 *  document.removeChild('element') - Remove um elemento do elemento pai (tipo, uma div possui uma lista dentro dela. Posso removê-la)
 *  document.appendeChild('element') - Adiciono um elemento no elemento pai (posso adicionar dentro de uma div, os elementos que desejo.)
 *  document.replaceChild(new, old) - Substituo o elemento.
 * 
 *      Manipulando Estilos.
 *  Elemento.classList - O classList representa a lista de classes do elemento
 *  classList.add('nome') - Adiciona uma classe ao elemento. Se ele já estiver com uma, ficará com duas (class="novo-estilo nome"... novo estilo é uma, nome é outra.).
 *  classList.remove('nome') - Remove a classe informada do elemento.
 *  classList.toggle('nome') - Adiciona uma classe como o nome informado caso ela não exista e se existir, irá deletá-la. Meio que desliga e liga classe.
 * 
 *  Acessando o elemento e adicionando o CSS:
 *      document.getElementById('id-name').style.color = "blue";
 *  o style.color = "" adiciona um estilo de cor ao elemento captado.
 * 
 *      Eventos - Tipos
 *  Eventos de mouse -> mouseover e mouseout
 *  Eventos de click -> click e dbclick
 *  Eventos de atualização -> change e load
 * 
 *  Para adicionar, utiliza o  addEventeListener("tipo", função);
 *  exp: botao = document.getElementByTagName('button');
 *  botao.addEventListener("click", outraFuncao). --> NA HORA DE DECLARA A FUNÇÃO, NÃO USAR () OU O SISTEMA JÁ VAI RODAR A FUNÇÃO AUTOMATICAMENTE
 *      
 *  Posso fazer isso dentro do HTML. Exp: Uso no elemento o onclick = "funcao()" e na tag script, informo o que "funcao()" é e faz.
 */



/**É um Superconjunto de JS.
 * Com ele, possuímos todas as funções do JS e mais algumas coisas.
 * Permite o uso de classes, atribuição de tipos para as variáveis, etc.
 * Por exemplo, a função soma no JS pode ser escrita assim.
 * 
 * function soma(a,b) {
 *  return a+b
 * }
 * 
 * No typescript podemos decidir qual tipo de variável deverá ser escrita dentro da função, dessa forma.
 * 
 * 
 * function soma(a: number, b: number) {
 *  return a+b
 * }
 *  Assim, só poderá ser escrito números dentro desta função.
 * 
 * 
 * Possuímos também as INTERFACES
 * São contratos para implementar as classes. Ou seja, eu declaro que o objeto Animal deverá ter o nome do tipo string, o tipo de duas únicas formas possíveis, etc.
 * Exp:
 * interface IAnimal {
 *  nome: string;
 *  tipo: 'terrestre' | 'aquático';
 * }
 * 
 * const animal: IAnimal = {
 * nome: "elefante"
 * tipo: 'terrestre' (ctrl+barra e ele já indica as duas opções. Só pode ser essas duas, não pode incluir outra coisa.)
 * 
 * }
 *  Posso extender a interface, ou seja, adicionar mais um contrato ao contrato anterior. Exp:
 * interface IFelino extends IAnimal {
 *  visaoNoturna: boolean
 * }
 * Assim, o IAnimal poderá usar o visaoNoturna: boolean para declarar uma classe.
 * 
 * Podemos, também, delegar funções que as classes deverão ter.
 *  interface IAnimal {
 *  nome: string;
 *  tipo: 'terrestre' | 'aquático';
 *  executarRugido(alturaEmDecibeis: number): void; -->Declarei um método que o objeto deve ter, dentro dele declarei um parâmetro que ele deve receber e seu tipo 
 * }
 * 
 * 
 * TYPE 
 * 
 * Com o Type, eu posso dizer que determinado objeto é possui os tipos de um objeto e/ou outro objeto.
 * 
 * Por exemplo:
 *  type IDomestico = IFelino | IAnimal - > Assim, ao declarar uma constante com o IDomestico dentro, terei que informar os atributos de IFelino ou IAnimal.
 * 
 * 
 * 
 * TRATANDO A TAG INPUT
 * Inicia-se da mesma forma que no JS, mas posso ja informar que tipo elemento eu to pegando. Exp:
 * const input = document.getElementByTag('input') as HTMLInputElement; --> aí eu to informando ao TS que o elemento pegado é um input.
 * 
 * Assim, chamo o input.value sem nenhum problema. Se eu não botar o as HTMLInputElement, dá erro.
 * 
 * 
 *      GENERIC TYPES
 *  Se eu não declarar o tipo de variável, o TS irá atribuir o 'tipo' any, ou seja, qualquer tipo. Contudo, posso adicionar um tipo genérico.
 *  Para isso, basta eu adicionar qualquer nome (geralmente um T) e assim, no lugar de any, o TS vai trazer indicar que tipo de dado foi inserido.
 * 
 *      CARACTER ? - > OPCIONAL.
 *      PRIVATE -> INDICA QUE O ATRIBUTO DO OBJETO SERÁ PRIVADO, OU SEJA, NÃO PODERÁ SER ACESSADO
 *      READONLY - > INDICA QUE O ATRIBUTO SERÁ APENAS PARA LEITURA 
 * 
 */
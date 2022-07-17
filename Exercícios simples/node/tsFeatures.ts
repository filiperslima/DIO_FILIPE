/**
 * enum -> cria uma lista "enumerada". P.exp:
 * enum Profissao {
 *  Professora,
 *  Atriz,
 *  Desenvolvedora
 *  JogadoraDeFutebol}
 *  Dessa forma, crio um types que contem um úmero limitado de valores fixos. Acesso eles através do nome Profissao.Professora
 * 
 * Posso definir os tipos de dados que deverão entrar e sair numa função.
 *  function exemplo( parametroA: number, parametroB: number): number {
 * }
 *      CASO EU QUEIRA INFORMAR QUE ELA NÃO DEVOLVERÁ NADA, INDICO UM void FORA DELA.
 *  function exemplo( parametroA: number, parametroB: number): number {
 * }
 *
 *      Incluindo CallBack para TRATAMENTO DOS DADOS
 *  function somarValoresNumericosETratar(numer1: number, numero2: number, callback(numero:number) => number -- aqui eu trago um callback com seu tipo de entrara e saída):number {
 *  let resultador = numero1 + numero 2;
 *  return callback(resultado) -> dessa forma, posso tratar o dado aqui, sem nenhum problema. Contudo, apenas o retornei. Uso em casos específicos.
 * 
 *  Diferença entre ANY e UNKNOWN
 *  --> O Any será sempre qualquer valor ao mesmo tempo, podendo ser utilizado para atribuir seu valor em outras variáveis.
 *      O Unknown será qualquer valor por vez e se eu precisar atribuir seu valor a outra variável, terei que checar se o unkown recebe um valor do mesmo tipo
 *   assim temos:
 *      let unknownValor: unknown;
 *      unknownValor = 3;
 *      unknownValor = 'opa'
 *      unknownValor = true;
 *      let stringTeste2: string = 'agora vai';
 *      stringTeste2 = unknownValor; --> apesar do unknownValor ter um valor string, ele não poderá ser usado para atribuir seu valor ao stringTeste2
 *      pois também possui os tipos booleano e number. Assim, terei que checar com um if e só então o stringTeste2 poderá receber seu valor
 *      
 *      if (typeof unknownValor === 'string') {
 *          stringTeste2 === unknownValor; --> o valor 'opa' é uma string e passou na verificação do if, então stringTeste2 poderá receber seu valor.
 *  o unknown é uma boa prática por conta disso.
 * }
 * 
 *  TIPO NEVER
 *  CÓDIGO NUNCA FINALIZADO, PAROU ABRUPTAMENTE. PODE SER UTILIZADO NO LOOP INFINITO, É RARO.
 * 
 *  function jogaErro(erro: string, codigo: number): never {
 *      throw {error: erro, code: codigo}; 
 * }
 * jogaErro('deu erro', 500) --> como vai jogar (throw) um erro, o código será parado abruptamente e seu tipo será never (e void, ou seja, não retorna nada)
 * 
 * 
 */
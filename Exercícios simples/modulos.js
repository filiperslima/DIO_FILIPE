/**Módulos
 * O que são:
 * São arquivos no JS, mas com capacidade de exportar e importar informações de outros arquivos do mesmo tipo.
 * Vantagens: 
 * 1 - organização do código
 * 2 - compartilhar variáveis de escopos diferentes
 * 3 - explicita as dependêndias dos arquivos.
 * Como exportar:
 * 2 modos:
 * Named exports - Exporta mais de um arquivo e indivudalmente. Exp: expor function nomeDaFunção(){} 
 * ou posso usar export { nomeDaFunção1, nomeDaFunção2, nomeDaFunção3 } para exportar mais de uma
 * 
 * Default exports -  Só pode ter um por arquivo e será o retorno padrão do arquivo. Exp: nomeDaFunção(){} export default nomeDaFunção.
 * 
 * Importar - 
 * 2 modos:
 * Named Exports:
 * import {função, variavel, classe} from './arquivo.js'
 * 
 * Default Exports:
 * import nomeDaFunção from './arquivo.js'
 * 
 * Posso trocar o nome do import:
 * import {arquivo as Apelido} from './arquivos.js'
 * Apelido.method(); --> aqui já uso o arquivo importado com o nome escolhido.
 * 
 * Posso usar o * para importar tudo. Exp: import * as TODOS from './arquivos.js'.... uso como o apelido todos --> TODOS.methodA() ou acesso o TODOS.variavel...
 * 
 * 
 * Usado no HTML
 * 
 * <script type="module" src="./main.js"> </script> --> Aqui eu devo inserir o tipo "module" e sua origem, para exportar o módulo.
 * A extensão do módulo pode ser .js ou .mjs --> Ambas são encorajadas.
 * 
 */
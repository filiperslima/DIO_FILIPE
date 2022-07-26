/** course-list.componente.html
 * 
 * 
 * Aqui ele criou o elemento que será utilizado e atribuiu os dados de course-list.componente.ts através da interpolação twoWay {{}} 
 * Na tabela, ele deu a classe table table-striped, pois ele puxa um estilo pré-definido do bootstrap "tabela zebra/listrada".
 * Sem essa classe, não viria a tabela bonitinha.
 * já no segundo tr (table-row), ele adicionou o elemento *ngFor="let variável of courses", indicando um loop, no qual pegarei
 * cada elemento/index de courses, definido em course-list.componente.ts e botarei numa variável e utilizarei depois cada elemento em cada
 * coluna da tabela.
 *  
 * 
 * course-list.componente.ts
 * Aqui ele importou o Course from ./courses, indicou o "@component" html correspondente ao templateUrl que será meio que nossa saída de dados
 * Em seguida, exportou uma classe chamada CourseListComponent implementando o método OnInit. Usamos ele aliado ao ngOnInit, este por sinal é...
 * ngOnInit() é um “ponto de partida” melhor - é onde / quando as combinações de componentes são resolvidas.
 * 
 * Antesd do ngOnIniti, eu defino que o parametro courses será uma array, mas que recebe as propriedades de Course, definida e exportada em courses.ts
 * 
 * 
 * courses.ts
 * Exporto uma classe com diversos parâmtros e seu respectivo tipo, bem como valor (se não incluir valor, fica dando erro a não ser que desative um negócio aí.)
 *
 * 
 * Pipes - Altera a forma que será mostrada alguma propriedade em nosso template
 */



import { Component, OnInit } from "@angular/core"; //Indico que essa classe será um componente. Só escrever component que o VS já sugere sua criação.
import { CourseService } from "./course.services";
import {Course} from './courses';

@Component({ 
    templateUrl: './course-list.component.html' 
})

export class CourseListComponent implements OnInit {  
    
    filteredCourses: Course[] = []

    _courses: Course[] = [];
    
    _filterBy: string = '';

    constructor(private courseService: CourseService) {} // Ou seja, o Angular vai carregar o CourseService, que está elegível para Injeção de dependência, e percebe que o constutor está com o mesmo tipo do objeto elegível, ele pega o objeto e injeta no construtor. 
    ngOnInit(): void {
      this._courses = this.courseService.retrieveAll(); // indico que vou chamar retrieveAll todos.

    }
    set filter (value: any) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)    }
    
    get filter() {
        return this._filterBy;

}
}
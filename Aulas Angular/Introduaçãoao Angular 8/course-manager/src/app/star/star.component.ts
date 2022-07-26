import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html'
})

export class StarComponent implements OnChanges {
    @Input() //Usamos isso quando uma variável recebe o valor de outro componente.
    rating!: number;

    starWidth: number= 0;    

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating*94/5
    }

}
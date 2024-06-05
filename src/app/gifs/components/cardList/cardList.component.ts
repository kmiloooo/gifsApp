import { Component, Input} from '@angular/core';
import { Gif } from '../../interface/gifs.interface'; 

@Component({
    selector: 'app-gifs-cardList',
    templateUrl: './cardList.component.html'
})

export class CardListComponent  {
    constructor() { }

@Input()
public gifs:Gif[]=[]; 

 
}
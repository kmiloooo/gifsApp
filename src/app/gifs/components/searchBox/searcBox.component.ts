import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-gifs-searchBox',
    templateUrl: './searchBox.component.html'
})

export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public tagInput!:ElementRef<HTMLInputElement>;
    
    constructor() { }

   
    searchTag(){
    const newTag=this.tagInput.nativeElement.value;
    console.log(newTag);
    }

}
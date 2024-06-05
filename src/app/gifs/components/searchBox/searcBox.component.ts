import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'app-gifs-searchBox',
    templateUrl: './searchBox.component.html'
})

export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public tagInput!:ElementRef<HTMLInputElement>;
    
    constructor(private gifsService:GifsService) { }

   
    searchTag(){
    const newTag=this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
    }

}
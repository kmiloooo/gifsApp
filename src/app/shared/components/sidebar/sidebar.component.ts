import { Component, HOST_TAG_NAME } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-gifs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
constructor(private gifsService:GifsService){}

get tags(){
  return this.gifsService.tagsHistory;
}

searchTag(tag:string){
  this.gifsService.searchTag(tag);
}
}

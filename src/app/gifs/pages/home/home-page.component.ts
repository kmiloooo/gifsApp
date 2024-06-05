import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'app-gifs-homePage',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
constructor(private gifsService:GifsService){}
get gifs(): Gif[]{
  return this.gifsService.gifList;
}
}

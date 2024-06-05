import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({providedIn: 'root'})
export class GifsService {
private apiKeyGifts:string='mo0cMfz4L2Rec054uWcqUjGlo36QEgmO';
private urlGifs:string='https://api.giphy.com/v1/gifs';

  private _tagsHistory:string[]=[];


  constructor(private http:HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
    }

  private organizeHistory(tag:string){
    tag=tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag!==tag);

    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory=this._tagsHistory.splice(0,10);
    
  }
  
  searchTag(tag:string):void{
    if(tag.length===0)return 
    this.organizeHistory(tag);

    const params=new HttpParams()
      .set('api_key',this.apiKeyGifts)
      .set('limit',10)
      .set('q',tag)
    

    this.http.get(`${this.urlGifs}/search`,{params}).subscribe(resp=>{
      console.log(resp);
    })
  }
}

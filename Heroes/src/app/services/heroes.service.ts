import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private _httpClient:HttpClient) { }

  getHeroes():Observable<Object>{
    return this._httpClient.get(URL);
  }

  getHeroe(id:number):Observable<Object>{
    return this._httpClient.get(URL + '/' + id);
  }

  addHero(newHero):Observable<Object>{
    return this._httpClient.post(URL, newHero, {
      headers: new HttpHeaders({'Content-Type':  'application/json'}),
    })
  }
  
  updateHero(hero, id){
    return this._httpClient.put(URL+ '/' + id, hero, {
      headers: new HttpHeaders({'Content-Type':  'application/json'}),
    }) 
  }

  deleteHero(id:number){
    return this._httpClient.delete(URL+ '/' + id, {
      headers: new HttpHeaders({'Content-Type':  'application/json'}),
    })
  }
}

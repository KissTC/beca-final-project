import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemons(){
    return this.http.get('server/api/v1/pokemon');
  }

  getOnePokemon(id:number){
    return this.http.get('server/api/v1/pokemon/' + id);
  }

  registerNewPokemon(pokemon){
    let body = JSON.stringify(pokemon);
    return this.http.post('server/api/v1/pokemon', body, httpOptions);
  }

}

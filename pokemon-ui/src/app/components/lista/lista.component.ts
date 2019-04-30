import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public poke;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons().subscribe(
      data => {this.poke = data},
      err => console.error(err),
      () => console.log('Pokemon loaded')
    );
  }


}

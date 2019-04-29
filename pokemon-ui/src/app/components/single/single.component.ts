import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  public singlePoke;

  constructor(private pokemonService: PokemonService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getOnePokemon(this.route.snapshot.params.id);
  }

  getOnePokemon(id:number){
    this.pokemonService.getOnePokemon(id).subscribe(
      data => {
        this.singlePoke = data;
      },
      err => console.error(err),
      () => console.log("Solo 1 Pokemon")
      
    );
  }

}

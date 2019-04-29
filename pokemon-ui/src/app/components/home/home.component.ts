import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokeForm: FormGroup;
  validMessage: string = "";

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokeForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      grupoHuevo: new FormControl('', Validators.required)    
    });
  }

  submitRegistration(){
    if (this.pokeForm.valid) {
      this.validMessage = "El nuevo Pokemon ha sido registrado en la Pokedex";
      this.pokemonService.registerNewPokemon(this.pokeForm.value).subscribe(
        data => {
          this.pokeForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Completa todos los campos";
    }
  }


}

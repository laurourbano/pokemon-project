import { Component } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [ './pokemon-list.component.scss' ]
})
export class PokemonListComponent {
  
  constructor(public pokemonService: PokemonService){
  }
}

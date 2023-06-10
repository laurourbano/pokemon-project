import { Component } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [ './pokemon-list.component.scss' ]
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [
    {
      number: 1,
      name: 'Bulbasaur',
      url: '',
      types: [ 'Grass', 'Poison' ],
    },
    {
      number: 2,
      name: 'Ivysaur',
      url: '',
      types: [ 'Grass', 'Poison' ],
    },
    {
      number: 3,
      name: 'Venusaur',
      url: '',
      types: [ 'Grass', 'Poison' ],
    },
    {
      number: 4,
      name: 'Charmander',
      url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      types: [ 'Fire' ],
    },
  ];


}

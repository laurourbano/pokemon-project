import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [ './pokemon-list.component.scss' ]
})
export class PokemonListComponent {

  paginatedPokemonCards: Pokemon[] = this.pokemonService.pokemons
  totalItems: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [ 5, 10, 25, 49 ];
  pokemonCards: Pokemon[] = this.pokemonService.pokemons;

  constructor(public pokemonService: PokemonService) {
  }
  ngOnInit() {
    this.getPokemonData();
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedPokemonCards = this.pokemonCards.slice(startIndex, endIndex);
  }

  getPokemonData() {
    this.pokemonService.carregarPokemons().then((data) => {
      this.pokemonCards = data;
      this.totalItems = this.pokemonCards.length;
      this.paginatedPokemonCards = this.pokemonCards.slice(0, this.pageSize);
    });

  }

}

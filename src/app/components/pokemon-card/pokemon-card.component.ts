import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [ './pokemon-card.component.scss' ]
})
export class PokemonCardComponent {

  @Input() pokemon: Pokemon = {} as Pokemon;
  imgUrl: string = 'no pokemons';

  constructor(public pokemonService: PokemonService) {
  }

  ngOnInit(){
    this.atualizarImagemPokemon();
  }
// atualizar imagem do pokemon para a imagem do pokemon selecionado
  async atualizarImagemPokemon() {
    const requisicao = await this.pokemonService
      .getPokemon(this.pokemon.url).toPromise();

    this.imgUrl = requisicao.sprites.front_default;
  }
}

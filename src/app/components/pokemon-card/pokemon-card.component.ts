import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [ './pokemon-card.component.scss' ]
})
export class PokemonCardComponent {

  event: Event = new Event('');

  @Input() pokemon: Pokemon = {} as Pokemon;

  pegarImagemPokemon() {
    const numeroFormatadado = this.pokemon.number.toString().padStart(3, '0');

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ numeroFormatadado }.png`;
  }
}

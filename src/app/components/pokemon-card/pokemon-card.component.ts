import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [ './pokemon-card.component.scss' ]
})
export class PokemonCardComponent {
  
  @Input() pokemon: any = {};
  @Input() number: number = 0;

  constructor(public pokemonService: PokemonService) {
    
  }

  pegarImagemPokemon() {
    const numeroFormatadado = this.number.toString().padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ numeroFormatadado }.png`;
  }
}
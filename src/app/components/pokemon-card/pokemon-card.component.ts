import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [ './pokemon-card.component.scss' ]
})
export class PokemonCardComponent {

  event: Event = new Event('');

  @Input()
  pokemons!: Pokemon[];

  onAction(event: Event) {
    return
  }

}

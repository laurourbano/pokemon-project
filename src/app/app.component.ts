import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'pokemon-project';

  constructor(private http: HttpClient, private pokemonService: PokemonService) {
    // TODO document why this constructor is empty
  }

  ngOnInit(): void {
    /* */
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/pokemon?limit=156';
  pokemons = []

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>(this.url)
      .toPromise();

    this.pokemons = requisicao.results;
    console.log(this.pokemons);
  }

}

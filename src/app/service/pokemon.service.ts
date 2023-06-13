import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon?limit=196';
  pokemons: Pokemon[] = []


  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  // Método que é chamado quando o usuário muda de página
  async carregarPokemons(): Promise<any> {
    const requisicao = await this.httpClient
      .get<any>(this.url).pipe().toPromise();
    this.pokemons = requisicao.results;
    return this.pokemons;
  }
  getPokemon(url: string) {
  return this.httpClient.get<any>(url);
}
}

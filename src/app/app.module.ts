import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { PokemonService } from './service/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TarjetaPeliculaComponent } from './components/tarjeta-pelicula/tarjeta-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    TarjetaPeliculaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

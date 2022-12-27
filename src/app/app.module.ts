import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

//Componentes.
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TarjetaPeliculaComponent } from './components/tarjeta-pelicula/tarjeta-pelicula.component';
import { ImagenDefaulPipe } from './pipes/imagen-defaul.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    TarjetaPeliculaComponent,
    ImagenDefaulPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

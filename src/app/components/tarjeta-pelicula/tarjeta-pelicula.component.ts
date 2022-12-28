import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.css']
})
export class TarjetaPeliculaComponent {

  peliculas$: Observable<Movie[]>;


  constructor(_peliculaService: PeliculaService) {
    //TODO:  optenemos la respuesta de la api para mostrar en el html.
    this.peliculas$ = _peliculaService.SharingObservable;
  }


}

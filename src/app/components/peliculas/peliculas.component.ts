import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from 'src/app/interfaces/Peliculas.interfaces';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
 

  constructor(
    private _peliculaService: PeliculaService) {




  }

  ngOnInit(): void {

    this._peliculaService.PeliculasData('messi').subscribe();

  }


}







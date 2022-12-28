import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';


@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.css']
})
export class TarjetaPeliculaComponent implements OnInit {
  
 // peliculas: Pelicula = { Title:  '', Year: '', imdbID: '', Type: '',    Poster: '',};

 peliculas: any;


  constructor(private _peliculaService: PeliculaService) { }


  ngOnInit(): void {

  
    setTimeout(() => {

      this._peliculaService.SharingObservable.subscribe(data=>{
        this.peliculas =  data;
      })
     
    }, 1000)

  }

}

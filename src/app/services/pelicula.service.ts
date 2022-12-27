import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable} from 'rxjs';
import { Pelicula } from '../interfaces/Peliculas.interfaces';





@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  URL: string = 'https://www.omdbapi.com/?apikey=38202479';

  private peliculas: BehaviorSubject<Pelicula> = new BehaviorSubject<Pelicula>({ Title:  '',
    Year:   '',
    imdbID: '',
    Type:   '',
    Poster: '', });



  constructor(private http: HttpClient) { 


  }


  PeliculasData(pelicula: string): Observable<any> {

    return this.http.get<any>(this.URL + '&s=' + pelicula).pipe(
      map(data => {
        const { Search } = data;
        this.peliculas.next(Search);        
      }),

    )

  }



  get SharingObservable(): Observable<Pelicula>{
    return this.peliculas.asObservable();
  }


  // set SharingObservableData(data: any){
  //   this.sharingObservablePrivate.next(data);
  // }


}

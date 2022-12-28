import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable} from 'rxjs';
import { Movie } from '../interfaces/movies';
import { ApiResponse } from '../interfaces/apiResponse';






@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  URL: string = 'https://www.omdbapi.com/?apikey=';
  API_KEY: string = '38202479';

  private peliculas: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);



  constructor(private http: HttpClient) { 


  }

//TODO: Funcion para realizar la peticion de la api.
  PeliculasData(pelicula: string): Observable<Movie[]> {

    return this.http.get<ApiResponse>(`${this.URL}${this.API_KEY}&s=${pelicula}`).pipe(
      map( data => {
        if(data.Search !== undefined){
          //TODO: Se captura datos de la api en el BehaviorSubject. 
          this.peliculas.next(data.Search); 
          return data.Search;
        }else{
          return [];
        }
       
      })
    );


  }


//TODO: Funcion para optener los datos guardados en el BehaviorSubject.
  get SharingObservable(): Observable<Movie[]>{
     return this.peliculas.asObservable();
   }


}

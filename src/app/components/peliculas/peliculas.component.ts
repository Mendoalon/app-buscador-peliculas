import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { PeliculaService } from '../../services/pelicula.service';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  sinresultado: boolean = false;
  miFormulario: FormGroup;

  constructor(
    private _peliculaService: PeliculaService) {

    this.miFormulario = new FormGroup({
      titulo: new FormControl('')
    })
  }

  ngOnInit(): void {

    //TODO: Se captura el dato del input.
    this.miFormulario.get('titulo')?.valueChanges.pipe(
      debounceTime(500)).subscribe(
        titulo => {
              //TODO: Se valida el dato del input.
          if (titulo !== '' && titulo.length > 3) {
            this._peliculaService.PeliculasData(titulo).subscribe(res => {
               //TODO: Se valida la respuesta de la api
              (res.length > 0) ? this.sinresultado = false : this.sinresultado = true;

            })
          }
        }
      )

  }




}















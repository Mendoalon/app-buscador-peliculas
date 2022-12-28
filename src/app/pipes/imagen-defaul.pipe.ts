import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenDefaul'
})
export class ImagenDefaulPipe implements PipeTransform {

  //TODO: Pipe para colocar imagen por defecto si la api no muestra imagen.
  transform(imagen: string): any {

    return (imagen !== 'N/A') ? imagen : 'assets/imagenDefaul.png';
 }

}

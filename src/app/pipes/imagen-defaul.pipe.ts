import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenDefaul'
})
export class ImagenDefaulPipe implements PipeTransform {

  transform(imagen: string): any {

    return (imagen !== 'N/A') ? imagen : 'assets/imagenDefaul.png';
 }

}

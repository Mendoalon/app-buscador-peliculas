import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenDefaul'
})
export class ImagenDefaulPipe implements PipeTransform {

  transform(imagen: string): any {
    if(imagen === 'N/A'){     
      return 'assets/search.svg';
    }

    if(imagen.length > 0 ){      
      return imagen
    }else{
      return 'assert/search.svg';
    }
  }

}

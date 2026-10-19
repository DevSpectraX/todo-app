import { Component, inject } from '@angular/core';
import { Photo } from '../../core/interface/photo.interface';
import { PHOTOS } from '../../core/config/constants/photos.constants';
import { PhotoCard } from './photo-card/photo-card';
import { UnsplashService } from '../../core/services/unsplash.service';

@Component({
  imports: [PhotoCard],
  selector: 'app-mansory',
  styleUrl: './mansory.css',
  templateUrl: './mansory.html',
})
export class Mansory {
  private readonly unsplash = inject(UnsplashService);
  protected readonly columns: Photo[][] = [
    PHOTOS.filter((_, index) => index % 3 === 0),
    PHOTOS.filter((_, index) => index % 3 === 1),
    PHOTOS.filter((_, index) => index % 3 === 2),
  ];

  constructor() {
    this.logRandomPhoto();
  }

  private logRandomPhoto(): void {
    this.unsplash.getRandomPhoto().subscribe({
      next: (photo) => console.log(photo),
      error: (error) => this.logError(error),
    });
  }

  private logError(error: any) {
    console.log(error);
  }
}

//Implementar https://unsplash.com/documentation#list-photos en una pantalla nueva de tipo masonry donde
//las imagenes serán las que lleguen de la llamada http teniendo en cuenta que la llamada puede venir paginada
//Cada card del masonry debe tener un height que cambie cada vez que recarge la pagina

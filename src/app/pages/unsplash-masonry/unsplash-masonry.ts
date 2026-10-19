import { Component, inject } from '@angular/core';
import { RandomUnsplashService } from '../../core/services/random-unsplash.service';
import { map, Observable } from 'rxjs';
import { UnsplashPhotoInterface } from '../../core/interface/unplash-photo.interface';
import { AsyncPipe } from '@angular/common';
import { UnsplashPhoto } from './component/unsplash-photo/unsplash-photo';

@Component({
  imports: [AsyncPipe, UnsplashPhoto],
  selector: 'app-unsplash-masonry',
  styleUrl: './unsplash-masonry.css',
  templateUrl: './unsplash-masonry.html',
})
export class UnsplashMasonry {
  protected readonly unsplash = inject(RandomUnsplashService);
  protected readonly unsplashColumns$: Observable<UnsplashPhotoInterface[][]> =
    //Necesito un pipe para poder trabajar con un Observable
    this.unsplash
      .getListRandomPhotos()
      .pipe(
        map((photos) => [
          photos.filter((_, index) => index % 3 === 0),
          photos.filter((_, index) => index % 3 === 1),
          photos.filter((_, index) => index % 3 === 2),
        ]),
      );
}

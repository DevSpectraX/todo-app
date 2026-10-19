import { inject, Injectable } from '@angular/core';
import { MasonryState } from './unsplash-masonry.state';
import { RandomUnsplashService } from '../../../core/services/random-unsplash.service';
import { map, Observable } from 'rxjs';
import { PhotoCard } from '../../mansory/photo-card/photo-card';

@Injectable()
export class UnsplashMasonryViewModel {
  readonly viewState = new MasonryState();
  protected readonly unsplash = inject(RandomUnsplashService);

  init(): void {
    this.viewState.isLoading.set(true);
    setTimeout(() => {
      this.getRandomPhotos();
    }, 5000);
  }

  getRandomPhotos(): void {
    this.unsplash
      .getListRandomPhotos()
      .pipe(
        map((photos) => [
          photos.filter((_, index) => index % 3 === 0),
          photos.filter((_, index) => index % 3 === 1),
          photos.filter((_, index) => index % 3 === 2),
        ]),
      )
      .subscribe({
        next: (photos) => {
          this.viewState.photo.set(photos);
          this.viewState.isLoading.set(false);
        },
        error: (error) => {
          this.viewState.error.set(error.message);
          this.viewState.isLoading.set(false);
        },
      });
  }
}

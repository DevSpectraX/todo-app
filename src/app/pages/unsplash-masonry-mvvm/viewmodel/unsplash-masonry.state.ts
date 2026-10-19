import { signal } from '@angular/core';
import { UnsplashPhotoInterface } from '../../../core/interface/unplash-photo.interface';

export class MasonryState {
  readonly photo = signal<UnsplashPhotoInterface[][]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
}

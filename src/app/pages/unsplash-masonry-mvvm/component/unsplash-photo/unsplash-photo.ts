import { Component, input } from '@angular/core';
import { UnsplashPhotoInterface } from '../../../../core/interface/unplash-photo.interface';

@Component({
  imports: [],
  selector: 'app-unsplash-photo-mvvm',
  styleUrl: './unsplash-photo.css',
  templateUrl: './unsplash-photo.html',
})
export class UnsplashPhotoMvvm {
  readonly photo = input.required<UnsplashPhotoInterface>();
}

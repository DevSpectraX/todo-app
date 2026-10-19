import { Component, input } from '@angular/core';
import { UnsplashPhotoInterface } from '../../../../core/interface/unplash-photo.interface';

@Component({
  imports: [],
  selector: 'app-unsplash-photo',
  styleUrl: './unsplash-photo.css',
  templateUrl: './unsplash-photo.html',
})
export class UnsplashPhoto {
  readonly photo = input.required<UnsplashPhotoInterface>();
}

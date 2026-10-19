import { Component, input } from '@angular/core';
import { UnsplashPhotoInterface } from '../../../../core/interface/unplash-photo.interface';

@Component({
  imports: [],
  selector: 'app-unsplash-photo-mvc',
  styleUrl: './unsplash-photo-mvc.css',
  templateUrl: './unsplash-photo-mvc.html',
})
export class UnsplashPhotoMvc {
    readonly photo = input.required<UnsplashPhotoInterface>();

}

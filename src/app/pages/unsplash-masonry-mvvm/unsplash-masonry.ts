//Esto es el view

import { Component, inject, OnInit } from '@angular/core';
import { RandomUnsplashService } from '../../core/services/random-unsplash.service';
import { map, Observable } from 'rxjs';
import { UnsplashPhotoInterface } from '../../core/interface/unplash-photo.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UnsplashPhotoMvvm } from './component/unsplash-photo/unsplash-photo';
import { UnsplashMasonryViewModel } from './viewmodel/unsplash-masonry.viewmodel';

@Component({
  imports: [UnsplashPhotoMvvm],
  providers: [UnsplashMasonryViewModel],
  selector: 'app-unsplash-masonry',
  styleUrl: './unsplash-masonry.css',
  templateUrl: './unsplash-masonry.html',
})
export class UnsplashMasonryMvvm implements OnInit {
  protected readonly vm = inject(UnsplashMasonryViewModel);

  ngOnInit(): void {
    this.vm.init();
  }
}

/* GET /photos/:id */

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { UnsplashPhotoInterface } from '../interface/unplash-photo.interface';
import { ACCESS_KEY, API_URL } from '../config/constants/unplash.constant';
import { createUniqueUnsplashID } from '../utils/id-unsplash.utils';

@Injectable({ providedIn: 'root' })
export class RandomUnsplashService {
  private readonly http = inject(HttpClient);

  getListRandomPhotos(): Observable<UnsplashPhotoInterface[]> {
    const count = createUniqueUnsplashID();

    let photosUnsplashList = this.http.get<UnsplashPhotoInterface[]>(
      `${API_URL}/photos/random?count=${count}`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      },
    );
    return photosUnsplashList;
  }
}

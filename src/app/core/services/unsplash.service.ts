import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnsplashPhotoInterface } from '../interface/unplash-photo.interface';
import { HttpClient } from '@angular/common/http';
import { API_URL, ACCESS_KEY } from '../config/constants/unplash.constant';

@Injectable({ providedIn: 'root' })
export class UnsplashService {
  private readonly http = inject(HttpClient);

  getRandomPhoto(): Observable<UnsplashPhotoInterface> {
    return this.http.get<UnsplashPhotoInterface>(`${API_URL}/photos/random`, {
      headers: { Authorization: `{Client-ID ${ACCESS_KEY}` },
    });
  }
}

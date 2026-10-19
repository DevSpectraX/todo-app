import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { PhotoModel } from './photo.model';
import { UnsplashPhotoInterface } from '../../core/interface/unplash-photo.interface';
import { map } from 'rxjs';
import { RandomUnsplashService } from '../../core/services/random-unsplash.service';
import { UnsplashPhotoMvc } from './component/unsplash-photo-mvc/unsplash-photo-mvc';
import { set } from 'idb-keyval';

@Component({
  imports: [UnsplashPhotoMvc],
  selector: 'app-unsplash-mvc',
  styleUrl: './unsplash-mvc.css',
  templateUrl: './unsplash-mvc.html',
  //Cambiar el tipo de estrategia y avisar solo cuando cambie
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnsplashMvcController implements OnInit {
  private readonly unsplashService = inject(RandomUnsplashService);
  private readonly changeDetector = inject(ChangeDetectorRef);

  //El modelo solo lo puede usar el controller
  private readonly unsplashModel = new PhotoModel();
  private readonly button = viewChild.required<ElementRef<HTMLButtonElement>>('button');

  protected photos: UnsplashPhotoInterface[][] = [];
  protected isLoading: boolean = true;
  protected error: string | null = null;

  ngOnInit(): void {
    this.loadPhotos();
    this.button().nativeElement.addEventListener('click', () => {
      this.removePhoto();
    });
  }

  private loadPhotos(): void {
    this.unsplashService
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
          this.unsplashModel.setPhotos(photos);
          this.photos = this.unsplashModel.getPhotos();
          this.isLoading = false;
          this.render();
        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  private render(): void {
    //Obliga a la UI cuando tiene que renderizarse
    this.changeDetector.markForCheck();
  }

  protected removePhoto() {
    this.unsplashModel.removePhoto();
    this.photos = this.unsplashModel.getPhotos();
    setTimeout(() => {
      this.render();

    }, 3000)
  }
}

import { Component, input } from '@angular/core';
import { Photo } from '../../../core/interface/photo.interface';

@Component({
  imports: [],
  selector: 'app-photo-card',
  styleUrl: './photo-card.css',
  templateUrl: './photo-card.html',
})
export class PhotoCard {
  readonly photo = input.required<Photo>()
}

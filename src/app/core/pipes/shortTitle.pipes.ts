import { Pipe, PipeTransform } from '@angular/core';
import { max } from '@angular/forms/signals';

@Pipe({ name: 'shortedTitle'})
export class ShortedTitle implements PipeTransform {
  transform(title: string, maxCharacter: number = 20, shortedTitle: string = '...'): string {
    if (title.length >= maxCharacter) {
      return title.substring(0, maxCharacter) + shortedTitle;
    } else {
      return title;
    }
  }
}

// Un pipe tranforma y da formato a los datos directamente en el HTML

import {Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'pluralize'})

export class PluralizePipe implements PipeTransform {
    transform(count: number, singular: string, plural: string) {
        return `Tienes ${count} ${count === 1 ? singular : plural}`;
    }
}
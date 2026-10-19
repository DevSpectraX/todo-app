import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({ selector: '[appSecureDelete]' })
export class SecureDeleteDirective {
  // Creamos una variable privada host que tendrá la referencia al elemento HTML del DOM donde se aplica la directiva.
  // Inyectar la referencia al elemento HTML sobre el que se aplica la directiva
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  // Crear un Observable que escucha el evento 'click' del elemento nativo
  constructor() {
    fromEvent(this.host.nativeElement, 'click').subscribe((event) => {
      this.onClick(event);
    });
  }

  private onClick(event: Event) {
    const deleteConfirmed = window.confirm('¿Esta seguro que desea eliminar esta tarea?');
    if (!deleteConfirmed) {
      /* Añadido stopImmediatePropagation para cortar
    el flujo del evento para que no llegue al padre en caso de cancelar
    */

      event.stopImmediatePropagation();
      return;
    }
  }
}


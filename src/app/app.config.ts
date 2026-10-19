import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { StorageSource } from './core/services/storage/source/storage.source';
import { LocalStorageImp } from './core/services/storage/localStorage.imp';
import { IndexedDBImp } from './core/services/storage/indexedDB.imp';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {provide: StorageSource, useClass: IndexedDBImp},
    //Activar Http
    provideHttpClient(),
  ]
};

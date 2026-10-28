import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Form } from './pages/form/form';
import { Summary } from './pages/summary/summary';
import { FlexLab } from './pages/flex-lab/flex-lab';
import { Mansory } from './pages/mansory/mansory';
import { UnsplashMasonry } from './pages/unsplash-masonry/unsplash-masonry';
import { UnsplashMasonryMvvm } from './pages/unsplash-masonry-mvvm/unsplash-masonry';
import { Dummyjson } from './pages/dummyjson/dummyjson';
import { DummyjsonMvvm } from './pages/dummyjson-mvvm/dummyjson-mvvm';
import { UnsplashMvcController } from './pages/unsplash-mvc/unsplash-mvc.controller';
import { provideProductsDi } from './data/di/products.di';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'new-task', component: Form },
  { path: 'edit-task/:id', component: Form },
  { path: 'summary', component: Summary },
  { path: 'flex', component: FlexLab },
  { path: 'masonry', component: Mansory },
  { path: 'unsplash', component: UnsplashMasonry },
  { path: 'unsplash-mvvm', component: UnsplashMasonryMvvm },
  { path: 'dummyjson', component: Dummyjson },
  { path: 'dummyjson-mvvm', component: DummyjsonMvvm, providers: [provideProductsDi()]},
  { path: 'unsplash-mvc', component: UnsplashMvcController }
];

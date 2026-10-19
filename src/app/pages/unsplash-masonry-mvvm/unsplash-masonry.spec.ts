import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnsplashMasonry } from './unsplash-masonry';

describe('UnsplashMasonry', () => {
  let component: UnsplashMasonry;
  let fixture: ComponentFixture<UnsplashMasonry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsplashMasonry],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsplashMasonry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

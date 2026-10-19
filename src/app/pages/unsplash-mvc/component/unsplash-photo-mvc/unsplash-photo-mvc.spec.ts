import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnsplashPhotoMvc } from './unsplash-photo-mvc';

describe('UnsplashPhotoMvc', () => {
  let component: UnsplashPhotoMvc;
  let fixture: ComponentFixture<UnsplashPhotoMvc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsplashPhotoMvc],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsplashPhotoMvc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnsplashPhoto } from './unsplash-photo';

describe('UnsplashPhoto', () => {
  let component: UnsplashPhoto;
  let fixture: ComponentFixture<UnsplashPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsplashPhoto],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsplashPhoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

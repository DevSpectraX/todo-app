import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnsplashMvc } from './unsplash-mvc';

describe('UnsplashMvc', () => {
  let component: UnsplashMvc;
  let fixture: ComponentFixture<UnsplashMvc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsplashMvc],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsplashMvc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

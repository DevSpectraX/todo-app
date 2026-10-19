import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyjsonMvvm } from './dummyjson-mvvm';

describe('DummyjsonMvvm', () => {
  let component: DummyjsonMvvm;
  let fixture: ComponentFixture<DummyjsonMvvm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyjsonMvvm],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyjsonMvvm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

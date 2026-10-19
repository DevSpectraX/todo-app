import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dummyjson } from './dummyjson';

describe('Dummyjson', () => {
  let component: Dummyjson;
  let fixture: ComponentFixture<Dummyjson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dummyjson],
    }).compileComponents();

    fixture = TestBed.createComponent(Dummyjson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

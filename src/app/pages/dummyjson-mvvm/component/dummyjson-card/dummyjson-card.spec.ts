import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyjsonCard } from './dummyjson-card';

describe('DummyjsonCard', () => {
  let component: DummyjsonCard;
  let fixture: ComponentFixture<DummyjsonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyjsonCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyjsonCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

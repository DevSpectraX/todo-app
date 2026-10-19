import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mansory } from './mansory';

describe('Mansory', () => {
  let component: Mansory;
  let fixture: ComponentFixture<Mansory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mansory],
    }).compileComponents();

    fixture = TestBed.createComponent(Mansory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

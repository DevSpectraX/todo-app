import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexDemo } from './flex-demo';

describe('FlexDemo', () => {
  let component: FlexDemo;
  let fixture: ComponentFixture<FlexDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

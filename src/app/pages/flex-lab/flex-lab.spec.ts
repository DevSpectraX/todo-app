import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLab } from './flex-lab';

describe('FlexLab', () => {
  let component: FlexLab;
  let fixture: ComponentFixture<FlexLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexLab],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

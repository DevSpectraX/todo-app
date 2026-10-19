import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoneTasks } from './done-tasks';

describe('DoneTasks', () => {
  let component: DoneTasks;
  let fixture: ComponentFixture<DoneTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(DoneTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerContainer } from './timer-container';

describe('TimerContainer', () => {
  let component: TimerContainer;
  let fixture: ComponentFixture<TimerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

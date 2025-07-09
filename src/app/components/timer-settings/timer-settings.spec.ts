import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSettings } from './timer-settings';

describe('TimerSettings', () => {
  let component: TimerSettings;
  let fixture: ComponentFixture<TimerSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

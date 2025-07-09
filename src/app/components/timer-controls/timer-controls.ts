import { Component, inject } from '@angular/core';
import { Timer } from '../../services/timer';

@Component({
  selector: 'app-timer-controls',
  imports: [],
  templateUrl: './timer-controls.html',
  styleUrl: './timer-controls.css',
})
export class TimerControls {
  private timerService = inject(Timer);

  isRunning = this.timerService.isRunning;

  toggle() {
    if (this.timerService.isRunning()) {
      this.timerService.pause();
    } else {
      this.timerService.start();
    }
  }

  reset() {
    this.timerService.reset();
  }
}

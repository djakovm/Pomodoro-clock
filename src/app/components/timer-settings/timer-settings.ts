import { Component, inject } from '@angular/core';
import { Timer } from '../../services/timer';

@Component({
  selector: 'app-timer-settings',
  imports: [],
  templateUrl: './timer-settings.html',
  styleUrl: './timer-settings.css'
})
export class TimerSettings {
  private timer = inject(Timer);

  isRunning = this.timer.isRunning;

  sessionMinutes = this.timer.sessionMinutes;
  breakMinutes = this.timer.breakMinutes;

  increaseSession() {
    this.timer.updateSession(this.sessionMinutes() + 1);
  }

  decreaseSession() {
    this.timer.updateSession(this.sessionMinutes() - 1);
  }

  increaseBreak() {
    this.timer.updateBreak(this.breakMinutes() + 1);
  }

  decreaseBreak() {
    this.timer.updateBreak(this.breakMinutes() - 1);
  }
}

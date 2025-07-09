import { Component, inject } from '@angular/core';
import { Timer } from '../../services/timer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer-display',
  imports: [CommonModule],
  templateUrl: './timer-display.html',
  styleUrl: './timer-display.css',
})
export class TimerDisplay {
  timerService = inject(Timer);

  mode = this.timerService.mode;
  timeLeft = this.timerService.timeLeft;

  minutes = () => {
    const minutes = Math.floor(this.timeLeft() / 60);
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  seconds = () => {
    const seconds = this.timeLeft() % 60;
    return seconds < 10 ? `0${seconds}` : seconds;
  };
}

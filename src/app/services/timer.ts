import { Injectable, effect, signal } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Timer {
  sessionMinutes = signal(25);
  breakMinutes = signal(5);

  timeLeft = signal(this.sessionMinutes() * 60);

  isRunning = signal(false);

  mode = signal<'session' | 'break'>('session');

  private intervalId: number | undefined;

  private audio = new Audio('assets/sounds/alert.mp3');



  start() {
    if (this.isRunning()) return;

    this.isRunning.set(true);
    this.intervalId = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update((time) => time - 1);
      } else {
        this.switchMode();
      }
    }, 1000);
  }

  pause() {
    this.isRunning.set(false);
    clearInterval(this.intervalId);
  }

  reset() {
    this.pause();
    this.mode.set('session');
    this.resetTime();
  }

  private switchMode() {
    const newMode = this.mode() === 'session' ? 'break' : 'session';
    this.mode.set(newMode);
    this.resetTime();

    this.audio.volume = 0.5;
    this.audio.currentTime = 0;
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }

  private resetTime() {
    const duration =
      this.mode() === 'session' ? this.sessionMinutes() : this.breakMinutes();
    this.timeLeft.set(duration * 60);
  }

  updateSession(minutes: number) {
    if (minutes < 1 || minutes > 60) return;

    this.sessionMinutes.set(minutes);
    if (this.mode() === 'session' && !this.isRunning()) {
      this.resetTime();
    }
  }

  updateBreak(minutes: number) {
    if (minutes < 1 || minutes > 60) return;
    this.breakMinutes.set(minutes);
    if (this.mode() === 'break' && !this.isRunning()) {
      this.resetTime();
    }
  }
}

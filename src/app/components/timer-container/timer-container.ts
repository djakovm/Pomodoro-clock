import { Component } from '@angular/core';
import { TimerSettings } from "../timer-settings/timer-settings";
import { TimerDisplay } from "../timer-display/timer-display";
import { TimerControls } from "../timer-controls/timer-controls";

@Component({
  selector: 'app-timer-container',
  imports: [TimerSettings, TimerDisplay, TimerControls],
  templateUrl: './timer-container.html',
  styleUrl: './timer-container.css'
})
export class TimerContainer {

}

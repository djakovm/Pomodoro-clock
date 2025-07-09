import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerContainer } from "./components/timer-container/timer-container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimerContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '25-5';
}

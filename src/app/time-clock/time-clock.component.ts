import { Component } from '@angular/core';

@Component({
  selector: 'app-time-clock',
  templateUrl: './time-clock.component.html',
  styleUrls: ['./time-clock.component.sass']
})
export class TimeClockComponent {
  clockedIn = false;

  constructor() {
    const storedValue = localStorage.getItem('clockedIn');
    if (storedValue) {
      this.clockedIn = JSON.parse(storedValue);
    }
  }

  clockInOut() {
    this.clockedIn = !this.clockedIn;
    localStorage.setItem('clockedIn', JSON.stringify(this.clockedIn));
  }
}

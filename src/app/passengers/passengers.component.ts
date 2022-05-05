import {Component, OnInit} from '@angular/core';
import {passengerData} from "../shared/data/passengers";
import {Passenger} from "../shared/interfaces";

@Component({
  selector: 'app-passengers',
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <button (click)="toggleShow()">{{buttonLabel}}</button>
      <div *ngIf="show">
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span class="status"
                  [ngClass]="{
                  'checked-in':passenger.checkedIn,
                  'checked-out':!passenger.checkedIn
                  }"></span>
            {{ i + 1 }} : {{passenger.fullName}}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent {

  buttonLabel: string = "Toggle Show Passengers";
  show: boolean;
  passengers: Passenger[];

  constructor() {
    this.passengers = passengerData;
    this.show = true;
  }

  toggleShow(): void {
    this.show = !this.show;
  }

}

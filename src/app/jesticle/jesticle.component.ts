import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jesticle',
  template: `
    <h2>{{ testTitle }}</h2>
    <button
      (click)="testNum = inc(testNum)"
      [value]="testNum"
    >{{testLabel}}: {{testNum}}</button>
    <label>Number: {{testNum}}</label>
  `,
  styleUrls: ['./jesticle.component.scss']
})
export class JesticleComponent {

  testLabel: string = "Increment Number";
  testTitle: string;
  testNum: number;

  constructor() {
    this.testTitle = "Test Jest Component";
    this.testNum = 1;
  }

  inc(i: number): number {
    return i + 1;
  }

}

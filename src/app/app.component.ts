import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <app-passengers></app-passengers>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ultimate Angular Tutorial';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mixed-widget10',
  templateUrl: './mixed-widget10.component.html',
})
export class MixedWidget10Component {
  @Input() cssClass: '';
  constructor() { }
}

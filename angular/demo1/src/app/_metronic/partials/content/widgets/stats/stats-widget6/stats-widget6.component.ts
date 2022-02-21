import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget6',
  templateUrl: './stats-widget6.component.html',
})
export class StatsWidget6Component {
  @Input() progress = '';
  @Input() color = '';
  @Input() description = '';
  @Input() title = '';

  constructor() {}
}

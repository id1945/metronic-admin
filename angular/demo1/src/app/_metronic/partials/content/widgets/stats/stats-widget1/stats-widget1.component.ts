import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget1',
  templateUrl: './stats-widget1.component.html',
})
export class StatsWidget1Component {
  @Input() title = '';
  @Input() time = '';
  @Input() description = '';

  constructor() {}
}

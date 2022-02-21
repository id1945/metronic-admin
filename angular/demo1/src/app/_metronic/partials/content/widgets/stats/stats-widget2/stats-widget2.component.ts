import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget2',
  templateUrl: './stats-widget2.component.html',
})
export class StatsWidget2Component {
  @Input() title = '';
  @Input() time = '';
  @Input() description = '';
  @Input() avatar = '';

  constructor() {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiles-widget10',
  templateUrl: './tiles-widget10.component.html',
})
export class TilesWidget10Component {
  @Input() cssClass = '';
  @Input() widgetHeight = '130px';

  constructor() { }
}

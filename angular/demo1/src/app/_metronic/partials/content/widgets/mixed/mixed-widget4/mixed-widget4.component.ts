import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mixed-widget4',
  templateUrl: './mixed-widget4.component.html',
})
export class MixedWidget4Component {
  @Input() color: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() progress: string = '';
  constructor() {}
}

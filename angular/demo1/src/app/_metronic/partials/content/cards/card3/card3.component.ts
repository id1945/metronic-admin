import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
})
export class Card3Component {
  @Input() color: string = '';
  @Input() avatar: string = '';
  @Input() online: boolean = false;
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() avgEarnings: string = '';
  @Input() totalEarnings: string = '';
  @HostBinding('class') class = 'card';

  constructor() {}
}

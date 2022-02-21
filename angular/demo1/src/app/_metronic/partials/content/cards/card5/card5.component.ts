import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
})
export class Card5Component {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() status: 'up' | 'down' = 'up';
  @Input() statusValue: number;
  @Input() statusDesc: string = '';
  @Input() progress: number = 100;
  @Input() progressType: string = '';
  @HostBinding('class') class = 'card h-100';

  constructor() {}
}

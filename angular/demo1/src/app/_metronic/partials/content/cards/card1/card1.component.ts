import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
})
export class Card1Component implements OnInit {
  @HostBinding('class') class = 'card';
  @Input() color: string = '';
  @Input() avatar: string = '';
  @Input() online: boolean = false;
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() avgEarnings: string = '';
  @Input() totalEarnings: string = '';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
})
export class NoticeComponent implements OnInit {
  // Public properties
  @Input() classes: string;
  @Input() icon: string;
  @Input() svg: string;

  constructor() {}

  ngOnInit(): void {}
}

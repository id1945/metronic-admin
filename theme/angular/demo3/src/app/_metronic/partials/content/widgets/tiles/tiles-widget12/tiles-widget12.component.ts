import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles-widget12',
  templateUrl: './tiles-widget12.component.html',
})
export class TilesWidget12Component implements OnInit {
  @Input() cssClass = '';
  @Input() widgetHeight = '150px';
  @Input() iconColor = 'success';
  svgCSSClass;

  constructor() { }

  ngOnInit() {
    this.svgCSSClass = `svg-icon--${this.iconColor}`;
  }
}

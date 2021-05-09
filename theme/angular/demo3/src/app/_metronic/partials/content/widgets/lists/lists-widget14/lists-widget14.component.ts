import { isQuote } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-widget14',
  templateUrl: './lists-widget14.component.html',
})
export class ListsWidget14Component implements OnInit {
  @Input() cssClass;
  @Input() rowNumber;
  constructor() { }

  ngOnInit(): void {
    if (!this.rowNumber) {
      this.rowNumber = 5;
    }
  }
}

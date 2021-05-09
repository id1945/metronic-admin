import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter } from '@angular/core';
import { SortDirection } from '../../models/sort.model';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit, OnChanges {
  @Input() column: string;
  @Input() activeColumn: string;
  @Input() activeDirection: SortDirection;
  @Output() sort: EventEmitter<string> = new EventEmitter<string>();
  isActive = false;

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    const parent = this.el.nativeElement.parentElement;
    if (!parent) {
      return;
    }

    // Load css classes
    parent.classList.add('sortable');
    parent.classList.remove('sortable-active');
    if (this.column === this.activeColumn) {
      parent.classList.add('sortable-active');
    }

    // load icons
    this.isActive = this.column === this.activeColumn;
  }

  ngOnInit(): void {
    const parent = this.el.nativeElement.parentElement as Element;
    if (!parent) {
      return;
    }

    parent.addEventListener('click', () => {
      this.sort.emit(this.column);
    });
  }
}

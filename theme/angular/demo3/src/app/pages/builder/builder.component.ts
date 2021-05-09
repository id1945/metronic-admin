import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from '../../_metronic/core/';
import KTLayoutExamples from '../../../assets/js/layout/extended/examples';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit, AfterViewInit {
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  activeTabId = 1;
  constructor(private layout: LayoutService, private el: ElementRef) {}

  ngOnInit(): void {
    this.model = this.layout.getConfig();
  }

  setActiveTab(tabId: number) {
    this.activeTabId = tabId;
  }

  getActiveTabCSSClass(tabId: number) {
    if (tabId !== this.activeTabId) {
      return '';
    }

    return 'active';
  }

  resetPreview(): void {
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.layout.setConfig(this.model);
    location.reload();
  }

  ngAfterViewInit() {
    // init code preview examples
    // see /src/assets/js/layout/extended/examples.js
    const elements = this.el.nativeElement.querySelectorAll('.example');
    KTLayoutExamples.init(elements);
  }
}

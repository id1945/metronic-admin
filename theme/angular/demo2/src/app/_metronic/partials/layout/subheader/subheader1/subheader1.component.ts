import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../../../../core';
import { SubheaderService } from '../_services/subheader.service';
import { BreadcrumbItemModel } from '../_models/breadcrumb-item.model';

@Component({
  selector: 'app-subheader1',
  templateUrl: './subheader1.component.html',
})
export class Subheader1Component implements OnInit {
  subheaderCSSClasses = '';
  subheaderContainerCSSClasses = '';
  subheaderMobileToggle = false;
  subheaderDisplayDesc = false;
  subheaderDisplayDaterangepicker = false;
  title$: Observable<string>;
  breadcrumbs$: Observable<BreadcrumbItemModel[]>;
  breadcrumbs: BreadcrumbItemModel[] = [];
  description$: Observable<string>;
  @Input() title: string;

  constructor(
    private layout: LayoutService,
    private subheader: SubheaderService,
    private cdr: ChangeDetectorRef
  ) {
    this.title$ = this.subheader.titleSubject.asObservable();
  }

  ngOnInit() {
    this.title$ = this.subheader.titleSubject.asObservable();
    this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
    this.description$ = this.subheader.descriptionSubject.asObservable();
    this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
    this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses(
      'subheader_container'
    );
    this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
    this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
    this.subheaderDisplayDaterangepicker = this.layout.getProp(
      'subheader.displayDaterangepicker'
    );
    this.breadcrumbs$.subscribe((res) => {
      this.breadcrumbs = res;
      this.cdr.detectChanges();
    });
  }
}

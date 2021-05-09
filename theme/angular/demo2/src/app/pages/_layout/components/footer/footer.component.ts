import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LayoutService } from '../../../../_metronic/core';
import KTLayoutFooter from '../../../../../assets/js/layout/base/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  footerContainerCSSClasses: string;
  currentYear: string;
  footerLayout: string;

  constructor(private layout: LayoutService) {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear().toString();
  }

  ngOnInit(): void {
    this.footerContainerCSSClasses = this.layout.getStringCSSClasses(
      'footer_container'
    );
    this.footerLayout = this.layout.getProp('footer.layout');
  }

  ngAfterViewInit() {
    // Init Footer
    KTLayoutFooter.init('kt_footer');
  }
}

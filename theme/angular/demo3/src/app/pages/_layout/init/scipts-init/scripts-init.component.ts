import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { KTUtil } from '../../../../../assets/js/components/util';
import KTLayoutAsideToggle from '../../../../../assets/js/layout/base/aside-toggle';
import KTLayoutStickyCard from '../../../../../assets/js/layout/base/sticky-card';
import KTLayoutStretchedCard from '../../../../../assets/js/layout/base/stretched-card';
import { LayoutService } from '../../../../_metronic/core';
import KTLayoutAside from '../../../../../assets/js/layout/base/aside';
import KTLayoutAsideMenu from '../../../../../assets/js/layout/base/aside-menu';

@Component({
  selector: 'app-scripts-init',
  templateUrl: './scripts-init.component.html',
})
export class ScriptsInitComponent implements OnInit, AfterViewInit, OnDestroy {
  asideSelfMinimizeToggle = false;
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(private layout: LayoutService, private router: Router) { }

  ngOnInit(): void {
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
    // this.routingChanges();
  }

  ngAfterViewInit() {
    KTUtil.ready(() => {
      // Init Aside
      KTLayoutAside.init('kt_aside');
      // Init Aside Menu
      KTLayoutAsideMenu.init('kt_aside_menu');

      if (this.asideSelfMinimizeToggle) {
        // Init Aside Menu Toggle
        KTLayoutAsideToggle.init('kt_aside_toggle');
      }

      // Init Sticky Card
      KTLayoutStickyCard.init('kt_page_sticky_card');
      // Init Stretched Card
      KTLayoutStretchedCard.init('kt_page_stretched_card');
    });
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        const btnQuickUserClose = document.getElementById('kt_quick_user_close');
        if (btnQuickUserClose) {
          btnQuickUserClose.click();
        }
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  StickyComponent,
  ScrollTopComponent,
  MenuComponent,
  ToggleComponent,
  DrawerComponent,
} from '../../../../kt/components';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
})
export class LayoutScrollTopComponent implements OnInit, OnDestroy {
  @HostBinding('class') class = 'kt_scrolltop';
  @HostBinding('id') id = 'scrolltop';
  @HostBinding('attr.data-kt-scrolltop') dataKtScrolltop = 'true';

  private unsubscribe: Subscription[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routingChanges();
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.pluginsReinitialization();
        this.updateHeaderSticky();
        setTimeout(() => {
          this.scrollTop();
        }, 0);
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  updateHeaderSticky() {
    const stickyHeader = document.body.querySelectorAll(
      `[data-kt-sticky-name="header"]`
    );
    if (stickyHeader && stickyHeader.length > 0) {
      const sticky = StickyComponent.getInstance(
        stickyHeader[0] as HTMLElement
      );
      if (sticky) {
        sticky.update();
      }
    }
  }

  scrollTop() {
    ScrollTopComponent.goTop();
  }

  pluginsReinitialization() {
    setTimeout(() => {
      // ScrollTopComponent.reinitialization()
      MenuComponent.reinitialization();
      StickyComponent.reInitialization();
      setTimeout(() => {
        ToggleComponent.reinitialization();
        DrawerComponent.reinitialization();
        // ScrollComponent.reinitialization()
      }, 70);
    }, 140);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

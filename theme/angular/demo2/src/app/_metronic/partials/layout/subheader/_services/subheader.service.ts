import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BreadcrumbItemModel } from '../_models/breadcrumb-item.model';
import { LayoutService } from '../../../../core';
import { SubheaderModel } from '../_models/subheader.model';

// kt_header_menu
// kt_aside_menu
@Injectable({
  providedIn: 'root',
})
export class SubheaderService implements OnDestroy {
  titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Dashboard'
  );
  descriptionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  breadCrumbsSubject: BehaviorSubject<
    BreadcrumbItemModel[]
  > = new BehaviorSubject<BreadcrumbItemModel[]>([]);
  subheaderVersionSubject: BehaviorSubject<string> = new BehaviorSubject<
    string
  >('v1'); // [1-6]
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(private layout: LayoutService) {
    this.setDefaultSubheader();
  }

  setDefaultSubheader() {
    this.setSubheaderVersion(this.layout.getProp('subheader.layoutVersion'));
  }

  setBreadcrumbs(breadcrumbs: BreadcrumbItemModel[] = []) {
    this.breadCrumbsSubject.next(breadcrumbs);
  }

  setTitle(title: string = '') {
    this.titleSubject.next(title);
  }

  setDescription(description: string) {
    this.descriptionSubject.next(description);
  }

  private setSubheaderVersion(version: string = 'v1') {
    this.subheaderVersionSubject.next(version);
  }

  // use this method in SubheaderWrapper
  updateAfterRouteChanges(pathName) {
    const aside = this.getBreadcrumbsAndTitle('kt_aside_menu', pathName);
    const header = this.getBreadcrumbsAndTitle('kt_header_menu', pathName);
    const breadcrumbs =
      aside && aside.breadcrumbs.length > 0
        ? aside.breadcrumbs
        : header.breadcrumbs;

    this.setBreadcrumbs(breadcrumbs);

    this.setTitle(
      aside && aside.title && aside.title.length > 0
        ? aside.title
        : header.title
    );
  }

  private getLinksFromMenu(menu): HTMLAnchorElement[] {
    const parentLiElements = Array.from(
      menu.getElementsByClassName('menu-item-open') || []
    ) as HTMLElement[];
    const childLiElements = Array.from(
      menu.getElementsByClassName('menu-item-active') || []
    ) as HTMLElement[];
    const result: HTMLAnchorElement[] = [];
    parentLiElements.forEach((el) => {
      const links = Array.from(
        el.getElementsByClassName('menu-link') || []
      ) as HTMLAnchorElement[];
      if (links && links.length > 0) {
        const aLink = links[0];
        if (
          aLink.href &&
          aLink.href.length &&
          aLink.href.length > 0 &&
          aLink.innerHTML !== '/'
        ) {
          result.push(aLink);
        }
      }
    });

    childLiElements.forEach((el) => {
      const links = Array.from(
        el.getElementsByClassName('menu-link') || []
      ) as HTMLAnchorElement[];
      if (links && links.length > 0) {
        const aLink = links[0];
        if (
          aLink.href &&
          aLink.href.length &&
          aLink.href.length > 0 &&
          aLink.innerHTML !== '/'
        ) {
          result.push(aLink);
        }
      }
    });
    return result;
  }

  private getBreadcrumbsAndTitle(menuId, pathName): SubheaderModel {
    const result = new SubheaderModel();
    const menu = document.getElementById(menuId);
    if (!menu) {
      return result;
    }

    const activeLinksArray = this.getLinksFromMenu(menu);

    const activeLinks = activeLinksArray.filter((el) => el.tagName === 'A');
    if (!activeLinks) {
      return result;
    }

    activeLinks.forEach((link) => {
      const titleSpans = link.getElementsByClassName('menu-text');
      if (titleSpans) {
        const titleSpan = Array.from(titleSpans).find(
          (t) => t.innerHTML && t.innerHTML.trim().length > 0
        );
        if (titleSpan) {
          result.breadcrumbs.push({
            title: titleSpan.innerHTML,
            linkPath: link.pathname,
            linkText: titleSpan.innerHTML,
          });
        }
      }
    });
    result.title = this.getTitle(result.breadcrumbs, pathName);
    return result;
  }

  private parseUrlAndReturnPathname(href): string {
    const url = document.createElement('a');
    url.href =
      'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';

    return url.pathname;
  }

  private getTitle(breadCrumbs, pathname) {
    if (!breadCrumbs || !pathname) {
      return '';
    }

    const length = breadCrumbs.length;
    if (!length) {
      return '';
    }

    return breadCrumbs[length - 1].title;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

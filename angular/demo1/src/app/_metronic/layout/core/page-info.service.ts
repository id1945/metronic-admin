import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PageLink {
  title: string;
  path: string;
  isActive: boolean;
  isSeparator?: boolean;
}

export class PageInfo {
  breadcrumbs: Array<PageLink> = [];
  title: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  public title: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Dashboard'
  );
  public description: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public breadcrumbs: BehaviorSubject<Array<PageLink>> = new BehaviorSubject<
    Array<PageLink>
  >([]);

  constructor() {}

  public setTitle(_title: string) {
    this.title.next(_title);
  }

  public updateTitle(_title: string) {
    setTimeout(() => {
      this.setTitle(_title);
    }, 1);
  }

  public setDescription(_title: string) {
    this.description.next(_title);
  }

  public updateDescription(_description: string) {
    setTimeout(() => {
      this.setDescription(_description);
    }, 1);
  }

  public setBreadcrumbs(_bs: Array<PageLink>) {
    this.breadcrumbs.next(_bs);
  }

  public updateBreadcrumbs(_bs: Array<PageLink>) {
    setTimeout(() => {
      this.setBreadcrumbs(_bs);
    }, 20);
  }

  public calculateTitle() {
    const asideTitle = this.calculateTitleInMenu('asideMenu');
    const headerTitle = this.calculateTitleInMenu('#kt_header_menu');
    const title = asideTitle || headerTitle || '';
    this.setTitle(title);
  }

  public calculateTitleInMenu(menuId: string): string | undefined {
    const menu = document.getElementById(menuId);
    if (!menu) {
      return;
    }

    const allActiveMenuLinks = Array.from<HTMLLinkElement>(
      menu.querySelectorAll('a.menu-link')
    ).filter((link) => link.classList.contains('active'));

    if (!allActiveMenuLinks || allActiveMenuLinks.length === 0) {
      return;
    }

    const titleSpan = allActiveMenuLinks[0].querySelector(
      'span.menu-title'
    ) as HTMLSpanElement | null;
    if (!titleSpan) {
      return;
    }

    return titleSpan.innerText;
  }

  public calculateBreadcrumbs() {
    const asideBc = this.calculateBreadcrumbsInMenu('asideMenu');
    const headerBc = this.calculateBreadcrumbsInMenu('#kt_header_menu');
    const bc = asideBc && asideBc.length > 0 ? asideBc : headerBc;
    if (!bc) {
      this.setBreadcrumbs([]);
      return;
    }
    this.setBreadcrumbs(bc);
  }

  public calculateBreadcrumbsInMenu(
    menuId: string
  ): Array<PageLink> | undefined {
    const result: Array<PageLink> = [];
    const menu = document.getElementById(menuId);
    if (!menu) {
      return;
    }

    const allActiveParents = Array.from<HTMLDivElement>(
      menu.querySelectorAll('div.menu-item')
    ).filter((link) => link.classList.contains('here'));

    if (!allActiveParents || allActiveParents.length === 0) {
      return;
    }

    allActiveParents.forEach((parent) => {
      const titleSpan = parent.querySelector(
        'span.menu-title'
      ) as HTMLSpanElement | null;
      if (!titleSpan) {
        return;
      }

      const title = titleSpan.innerText;
      const path = titleSpan.getAttribute('data-link');
      if (!path) {
        return;
      }

      result.push({
        title,
        path,
        isSeparator: false,
        isActive: false,
      });
      // add separator
      result.push({
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
      });
    });

    return result;
  }
}

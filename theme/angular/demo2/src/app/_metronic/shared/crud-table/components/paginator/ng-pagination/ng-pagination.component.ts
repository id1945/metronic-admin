// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts
import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { NgPaginationConfig } from './ng-pagination.config';

function getValueInRange(value: number, max: number, min = 0): number {
  return Math.max(Math.min(value, max), min);
}

function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

/**
 * A context for the
 * * `NgPaginationFirst`
 * * `NgPaginationPrevious`
 * * `NgPaginationNext`
 * * `NgPaginationLast`
 * * `NgPaginationEllipsis`
 *
 * link templates in case you want to override one.
 *
 * @since 4.1.0
 */
export interface NgPaginationLinkContext {
  /**
   * The currently selected page number
   */
  currentPage: number;

  /**
   * If `true`, the current link is disabled
   */
  disabled: boolean;
}

/**
 * A context for the `NgPaginationNumber` link template in case you want to override one.
 *
 * Extends `NgPaginationLinkContext`.
 *
 * @since 4.1.0
 */
export interface NgPaginationNumberContext extends NgPaginationLinkContext {
  /**
   * The page number, displayed by the current page link.
   */
  $implicit: number;
}

/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngPaginationEllipsis]' })
export class NgPaginationEllipsis {
  constructor(public templateRef: TemplateRef<NgPaginationLinkContext>) { }
}

/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngPaginationFirst]' })
export class NgPaginationFirst {
  constructor(public templateRef: TemplateRef<NgPaginationLinkContext>) { }
}

/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngPaginationLast]' })
export class NgPaginationLast {
  constructor(public templateRef: TemplateRef<NgPaginationLinkContext>) { }
}

/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngPaginationNext]' })
export class NgPaginationNext {
  constructor(public templateRef: TemplateRef<NgPaginationLinkContext>) { }
}

/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngPaginationNumber]' })
export class NgPaginationNumber {
  constructor(public templateRef: TemplateRef<NgPaginationNumberContext>) { }
}

/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngPaginationPrevious]' })
export class NgPaginationPrevious {
  constructor(public templateRef: TemplateRef<NgPaginationLinkContext>) { }
}

/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
@Component({
  selector: 'ng-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'role': 'navigation' },
  templateUrl: './ng-pagination.component.html',

})
export class NgPagination implements OnChanges {
  pageCount = 0;
  pages: number[] = [];

  @ContentChild(NgPaginationEllipsis, { static: false }) tplEllipsis: NgPaginationEllipsis;
  @ContentChild(NgPaginationFirst, { static: false }) tplFirst: NgPaginationFirst;
  @ContentChild(NgPaginationLast, { static: false }) tplLast: NgPaginationLast;
  @ContentChild(NgPaginationNext, { static: false }) tplNext: NgPaginationNext;
  @ContentChild(NgPaginationNumber, { static: false }) tplNumber: NgPaginationNumber;
  @ContentChild(NgPaginationPrevious, { static: false }) tplPrevious: NgPaginationPrevious;

  /**
   * If `true`, pagination links will be disabled.
   */
  @Input() disabled: boolean;

  /**
   * If `true`, the "First" and "Last" page links are shown.
   */
  @Input() boundaryLinks: boolean;

  /**
   * If `true`, the "Next" and "Previous" page links are shown.
   */
  @Input() directionLinks: boolean;

  /**
   * If `true`, the ellipsis symbols and first/last page numbers will be shown when `maxSize` > number of pages.
   */
  @Input() ellipses: boolean;

  /**
   * Whether to rotate pages when `maxSize` > number of pages.
   *
   * The current page always stays in the middle if `true`.
   */
  @Input() rotate: boolean;

  /**
   *  The number of items in your paginated collection.
   *
   *  Note, that this is not the number of pages. Page numbers are calculated dynamically based on
   *  `collectionSize` and `pageSize`. Ex. if you have 100 items in your collection and displaying 20 items per page,
   *  you'll end up with 5 pages.
   */
  @Input() collectionSize: number;

  /**
   *  The maximum number of pages to display.
   */
  @Input() maxSize: number;

  /**
   *  The current page.
   *
   *  Page numbers start with `1`.
   */
  @Input() page = 1;

  /**
   *  The number of items per page.
   */
  @Input() pageSize: number;

  /**
   *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
   *
   *  Event payload is the number of the newly selected page.
   *
   *  Page numbers start with `1`.
   */
  @Output() pageChange = new EventEmitter<number>(true);

  /**
   * The pagination display size.
   *
   * Bootstrap currently supports small and large sizes.
   */
  @Input() size: 'sm' | 'lg';

  constructor(config: NgPaginationConfig) {
    this.disabled = config.disabled;
    this.boundaryLinks = config.boundaryLinks;
    this.directionLinks = config.directionLinks;
    this.ellipses = config.ellipses;
    this.maxSize = config.maxSize;
    this.pageSize = config.pageSize;
    this.rotate = config.rotate;
    this.size = config.size;
  }

  hasPrevious(): boolean { return this.page > 1; }

  hasNext(): boolean { return this.page < this.pageCount; }

  nextDisabled(): boolean { return !this.hasNext() || this.disabled; }

  previousDisabled(): boolean { return !this.hasPrevious() || this.disabled; }

  selectPage(pageNumber: number): void { this._updatePages(pageNumber); }

  ngOnChanges(changes: SimpleChanges): void { this._updatePages(this.page); }

  isEllipsis(pageNumber): boolean { return pageNumber === -1; }

  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  private _applyEllipses(start: number, end: number) {
    if (this.ellipses) {
      if (start > 0) {
        // The first page will always be included. If the displayed range
        // starts after the third page, then add ellipsis. But if the range
        // starts on the third page, then add the second page instead of
        // an ellipsis, because the ellipsis would only hide a single page.
        if (start > 2) {
          this.pages.unshift(-1);
        } else if (start === 2) {
          this.pages.unshift(2);
        }
        this.pages.unshift(1);
      }
      if (end < this.pageCount) {
        // The last page will always be included. If the displayed range
        // ends before the third-last page, then add ellipsis. But if the range
        // ends on third-last page, then add the second-last page instead of
        // an ellipsis, because the ellipsis would only hide a single page.
        if (end < (this.pageCount - 2)) {
          this.pages.push(-1);
        } else if (end === (this.pageCount - 2)) {
          this.pages.push(this.pageCount - 1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }

  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  private _applyRotation(): [number, number] {
    let start = 0;
    let end = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

    if (this.page <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = this.pageCount - this.maxSize;
    } else {
      // rotate
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }

    return [start, end];
  }

  /**
   * Paginates page numbers based on maxSize items per page.
   */
  private _applyPagination(): [number, number] {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start = page * this.maxSize;
    let end = start + this.maxSize;

    return [start, end];
  }

  private _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);

    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }

  private _updatePages(newPage: number) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }

    // fill-in model needed to render pages
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }

    // set page within 1..max range
    this._setPageInRange(newPage);

    // apply maxSize if necessary
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;

      // either paginating or rotating page numbers
      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }

      this.pages = this.pages.slice(start, end);

      // adding ellipses
      this._applyEllipses(start, end);
    }
  }
}

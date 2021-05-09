import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const carousel = {
  beforeCodeTitle: 'Carousel',
  htmlCode: `
<ngb-carousel *ngIf="images">
  <ng-template ngbSlide>
    <img [src]="images[0]" alt="Random first slide">
    <div class="carousel-caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[1]" alt="Random second slide">
    <div class="carousel-caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[2]" alt="Random third slide">
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
  </ng-template>
</ngb-carousel>
`,
  tsCode: `
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';\n
@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic implements OnInit {
    images: Array<string>;\n
    constructor(private _http: HttpClient) {}\n
    ngOnInit() {
        this._http.get('https://picsum.photos/list')
            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
            .subscribe(images => this.images = images);
    }\n
    private _randomImageUrls(images: Array<{id: number}>): Array<string> {
        return [1, 2, 3].map(() => {
            const randomId = images[Math.floor(Math.random() * images.length)].id;
            return \`https://picsum.photos/900/500?image=\${randomId}\`;
        });
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const navigationArrowsAndIndicatorsCarousel = {
  beforeCodeTitle: 'Navigation arrows and indicators',
  htmlCode: `
<ngb-carousel *ngIf="images" [showNavigationArrows]="showNavigationArrows" [showNavigationIndicators]="showNavigationIndicators">
  <ng-template ngbSlide *ngFor="let image of images">
    <img [src]="image" alt="Random slide" />
    <div class="carousel-caption">
      <h3>No mouse navigation</h3>
      <p>This carousel hides navigation arrows and indicators.</p>
    </div>
  </ng-template>
</ngb-carousel>
<hr />
<div class="btn-group" role="group" aria-label="Carousel toggle controls">
  <button type="button" (click)="showNavigationArrows = !showNavigationArrows"
    class="btn btn-outline-dark btn-sm">Toggle navigation arrows</button>
  <button type="button" (click)="showNavigationIndicators = !showNavigationIndicators"
    class="btn btn-outline-dark btn-sm">Toggle navigation indicators</button>
  </div>
`,
  tsCode: `
import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngbd-carousel-navigation',
  templateUrl: './carousel-navigation.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselNavigation implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images: Array<string>;\n

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }\n

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }\n

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return \`https://picsum.photos/900/500?image=\${randomId}\`;
    });
  }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const globalConfigurationOfCarousels = {
  beforeCodeTitle: 'Global configuration of carousels',
  htmlCode: `
<ngb-carousel *ngIf="images">
  <ng-template ngbSlide>
    <img [src]="images[0]" alt="Random first slide">
    <div class="carousel-caption">
      <h3>10 seconds between slides...</h3>
      <p>This carousel uses customized default values.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[1]"  alt="Random second slide">
    <div class="carousel-caption">
      <h3>No keyboard...</h3>
      <p>This carousel uses customized default values.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <img [src]="images[2]" alt="Random third slide">
    <div class="carousel-caption">
      <h3>And no wrap after last slide.</h3>
      <p>This carousel uses customized default values.</p>
    </div>
  </ng-template>
</ngb-carousel>
`,
  tsCode: `
import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';\n
@Component({
    selector: 'ngbd-carousel-config',
    templateUrl: './carousel-config.html',
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig implements OnInit {
    images: Array<string>;\n
    constructor(config: NgbCarouselConfig, private _http: HttpClient) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }\n
    ngOnInit() {
        this._http.get('https://picsum.photos/list')
            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
            .subscribe(images => this.images = images);
    }\n
    private _randomImageUrls(images: Array<{id: number}>): Array<string> {
        return [1, 2, 3].map(() => {
            const randomId = images[Math.floor(Math.random() * images.length)].id;
            return \`https://picsum.photos/900/500?image=\${randomId}\`;
        });
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-ng-carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
  exampleCarousel: any;
  exampleGlobalConfigurationOfCarousels: any;
  exampleNavigationArrowsAndIndicatorsCarousel: any;
  images: Array<string>;
  secondImages: Array<string>;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  thirdImages: Array<string>;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;

    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.exampleCarousel = carousel;
    this.exampleGlobalConfigurationOfCarousels = globalConfigurationOfCarousels;
    this.exampleNavigationArrowsAndIndicatorsCarousel = navigationArrowsAndIndicatorsCarousel;

    this._http
      .get('https://picsum.photos/list')
      .pipe(
        map((images: Array<{ id: number }>) => this._randomImageUrls(images))
      )
      .subscribe((images) => (this.images = images));

    this._http
      .get('https://picsum.photos/list')
      .pipe(
        map((images: Array<{ id: number }>) => this._randomImageUrls(images))
      )
      .subscribe((images) => (this.secondImages = images));

    this._http
      .get('https://picsum.photos/list')
      .pipe(
        map((images: Array<{ id: number }>) => this._randomImageUrls(images))
      )
      .subscribe((images) => (this.thirdImages = images));
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}

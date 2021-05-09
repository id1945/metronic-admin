import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-cart-offcanvas',
  templateUrl: './cart-offcanvas.component.html',
  styleUrls: ['./cart-offcanvas.component.scss'],
})
export class CartOffcanvasComponent implements OnInit {
  extrasCartOffcanvasDirectionCSSClass = 'offcanvas-right';
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.extrasCartOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp(
      'extras.cart.offcanvas.direction'
    )}`;
  }
}

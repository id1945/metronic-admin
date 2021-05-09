import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToBuilder() {
    this.router.navigate(['/builder']);
  }
}

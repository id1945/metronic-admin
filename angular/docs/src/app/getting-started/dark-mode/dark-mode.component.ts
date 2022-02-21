import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {
  code1 = `/* You can add global styles to this file, and also import other style files */
//@import "./assets/sass/style";

// Replace above style with this SCSS file to enable dark mode styles
@import "./assets/sass/style.dark";
`;

  constructor() { }

  ngOnInit(): void {
  }

}

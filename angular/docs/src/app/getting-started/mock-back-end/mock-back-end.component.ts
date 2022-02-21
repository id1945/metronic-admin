import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-back-end',
  templateUrl: './mock-back-end.component.html',
  styleUrls: ['./mock-back-end.component.scss'],
})
export class MockBackEndComponent implements OnInit {
  code1 = `export const environment = {
  production: false,
  isMockEnabled: true // You have to set 'true', when your real back-end is done
};`;
  code2 = `// export { AuthHTTPService } from './auth-fake-http.service';`;
  code3 = `export { AuthHTTPService } from './auth-http.service';`;
  constructor() {}

  ngOnInit(): void {}
}

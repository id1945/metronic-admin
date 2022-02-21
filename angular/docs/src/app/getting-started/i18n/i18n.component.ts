import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss'],
})
export class I18nComponent implements OnInit {
  code1 = `{"HOME": {
    "HELLO": "hello {{value}}"
  }
}`;

  code2 = `<div [translate]="'HOME.HELLO'" [translateParams]="{value: 'world'}"></div>`;
  code3 = `import { TranslateService } from '@ngx-translate/core';
  // Other code
  constructor(private translate: TranslateService) { }
  // Other code
  const _title: string = this.translate.instant('HOME.HELLO', "World");`;

  constructor() {}

  ngOnInit(): void {}
}

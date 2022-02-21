import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TranslationService} from './modules/i18n';
// language list
import {locale as enLang} from './modules/i18n/vocabs/en';
import {locale as chLang} from './modules/i18n/vocabs/ch';
import {locale as esLang} from './modules/i18n/vocabs/es';
import {locale as jpLang} from './modules/i18n/vocabs/jp';
import {locale as deLang} from './modules/i18n/vocabs/de';
import {locale as frLang} from './modules/i18n/vocabs/fr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {
    // register translations
    this.translationService.loadTranslations(
      enLang,
      chLang,
      esLang,
      jpLang,
      deLang,
      frLang
    );
  }

  ngOnInit() {}
}

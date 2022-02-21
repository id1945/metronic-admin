/* eslint-disable jsx-a11y/anchor-has-content */
import React, {FC} from 'react'
import {CodeBlock} from '../../_metronic/partials'

const Internationalization: FC = () => {
  return (
    <>
      <h1 className='anchor fw-bolder mb-5' id='deployment'>
        <a href='#i18n'></a>Internationalization (i18n)
      </h1>
      <div className='pt-5'>
        <h5 id='overview'>Overview</h5>
        <p>
          We're using <code>react-intl</code> for internationalization, check official
          <a
            href='https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md'
            target='_blank'
            rel='noopener noreferrer'
          >
            documentation
          </a>{' '}
          and
          <a
            href='https://github.com/formatjs/react-intl/tree/master/examples'
            target='_blank'
            rel='noopener noreferrer'
          >
            examples
          </a>
          .
        </p>
        <h5 id='how-to-add-a-new-language'>How to add a new language</h5>
        <p>
          <strong>
            Note: if there are no locale data for your new language in
            <code>react-intl/locale-data</code> you will have to manually add locale data
          </strong>
        </p>
        <h6>This is example how to add Turkish language:</h6>

        <ol className='pt-4'>
          <li>
            <p>
              Update <code>src/_metronic/partials/layout/header-menus/Languages.tsx</code>
            </p>
            <CodeBlock language='tsx' code={code1} />
          </li>
          <li>
            <p>
              Add <code>src/_metronic/i18n/messages/tr.json</code>
            </p>
            <CodeBlock language='json' code={code2} />
          </li>
          <li>
            <p>
              <p>
                Register messages and locale data in{' '}
                <code>src/_metronic/i18n/I18nProvider.tsx</code>
              </p>
            </p>
            <CodeBlock language='tsx' code={code3} />
          </li>
        </ol>

        <h5 id='how-to-use'>How to use</h5>
        <p>
          The translator understands flat JSON object as defined in
          <code>src/_metronic/i18n/messages/en.json</code>. This means that you can have a
          translation that looks like this:
        </p>
        <ol className='pt-4'>
          <li>
            <p>
              Add translation to <code>src/_metronic/i18n/messages/en.json</code>:
            </p>
            <CodeBlock language='json' code={code4} />
          </li>
          <li>
            <p>Format it with component:</p>
            <CodeBlock language='tsx' code={code5} />
          </li>
          <li>
            <p>Or with hook:</p>
            <CodeBlock language='tsx' code={code6} />
          </li>
        </ol>
      </div>
    </>
  )
}

const code1 = `const languages = [
{
    lang: "en",
    name: "English",
    flag: toAbsoluteUrl("/media/flags/united-states.svg")
},
+ {
    +   lang: "tr",
    +   name: "Turkish",
    +   flag: toAbsoluteUrl("/media/flags/turkey.svg")
+ },
{`

const code2 = `+ {
    +    "TRANSLATOR.SELECT": "Dilinizi seçin",
    +    "MENU.NEW": "yeni",
    +    "MENU.ACTIONS": "Eylemler",
    +    "MENU.CREATE_POST": "Yeni Gönderi Oluştur",`

const code3 = `import * as ja from "react-intl/locale-data/ja";
import * as zh from "react-intl/locale-data/zh";
+ import "@formatjs/intl-relativetimeformat/locale-data/tr";

import deMessages from "./messages/de.json";
import enMessages from "./messages/en.json";
import esMessages from "./messages/es.json";
import frMessages from "./messages/fr.json";
import jaMessages from "./messages/ja.json";
import zhMessages from "./messages/zh.json";
+ import trMessages from "./messages/tr.json";
                
const allMessages = {
  de: deMessages,
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages,
  zh: zhMessages
+ tr: trMessages
};`

const code4 = `{"HOME.HELLO": "Hello, {name}!"}`

const code5 = `import { FormattedMessage } from "react-intl";
                
export default function Hello({ name }) {
 return ;
}`

const code6 = `import { useIntl } from "react-intl";
                
export default function Hello({ name }) {
 const intl = useIntl();             
 return <h3>{intl.formatMessage({ id: "HOME.HELLO" }, { name })}</h3>
}`

export {Internationalization}

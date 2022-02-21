/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function DarkMode() {
  return (
    <>
      <h1 className='anchor fw-bolder mb-5' id='quick_setup'>
        <a href='#quick_setup'></a>
        Quick Setup
      </h1>

      <div className='pt-4'>
        Metronic supports full <b>Dark Mode</b> that you can easily setup following the below
        instructions.
      </div>

      <ol className='pt-4'>
        <li>
          In file <code>demo1/src/index.tsx</code> replace main scss file to dark mode.
          <CodeBlock language='scss' code={styleCode} />
        </li>
        <li>
          In file <code>demo1/public/index.html</code> add dark-mode class name to the{' '}
          <code>&lt;body&gt;</code> tag.
          <CodeBlock language='markdown' code={htmlCode} />
        </li>
      </ol>
    </>
  )
}

const styleCode = `- import './_metronic/assets/sass/style.scss'
+ import './_metronic/assets/sass/style.dark.scss'`

const htmlCode = `<body class="dark-mode ...">
<!-- HTML content -->
</body>`

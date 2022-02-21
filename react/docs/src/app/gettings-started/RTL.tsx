/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function RTL() {
  return (
    <div className='pt-5'>
      <h1 className='anchor fw-bolder mb-5' id='rtl'>
        <a href='#rtl'></a>
        Right-to-Left (RTL)
      </h1>

      <div className='pt-4'>
        The RTL does not enabled by default and also the RTL CSS files does not included. You can
        use the prepared webpack bundler to convert the existing SCSS files into RTL CSS files. You
        can find the
        <code>webpack.config.js</code> in each of the RTL demo folder.
      </div>

      <ol className='pt-4'>
        <li className='pt-5'>
          Go to <code>[metronic]/[react]/[demo]/</code> folder.
          <CodeBlock language='bash' code='cd theme/react/demo1'></CodeBlock>
        </li>
        <li>
          Run command to install React dependencies and extra webpack plugins for RTL generate.
          <CodeBlock language='bash' code='npm install'></CodeBlock>
        </li>
        <li>
          Run npm script command to execute webpack with RTL.
          <CodeBlock language='bash' code='npm run rtl'></CodeBlock>
        </li>
        <li className='pb-5'>
          You will get the bundle CSS with for RTL version inside
          <code>[metronic]/[react]/[demo]/src/_metronic/assets/css/style.rtl.css</code>
          folder. To enabled, this RTL CSS need to be included in the React.
        </li>
        <li className='py-5'>
          Open the <code>index.tsx</code> file from
          <code>[metronic]/[react]/[demo]/src/index.tsx</code>. Import RTL CSS
          <code>style.rtl.css</code> file. Change
          <code>import './_metronic/assets/sass/style.scss'</code> to RTL CSS
          <code>import './_metronic/assets/css/style.rtl.css'</code>
        </li>
        <li className='pt-5'>
          Open the React index.html file from
          <code>[metronic]/[react]/[demo]/public/index.html</code>. Add the RTL attributes to the
          body tag.
          <CodeBlock
            language='bash'
            code={`<body direction="rtl" dir="rtl" style="direction: rtl">`}
          ></CodeBlock>
        </li>
        <li>
          Run the React as usual using <code>yarn start</code> command.
        </li>
      </ol>
    </div>
  )
}

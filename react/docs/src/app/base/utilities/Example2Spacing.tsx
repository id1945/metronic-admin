/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example2Spacing() {
  const {REACT_APP_THEME_NAME, REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='spacing'>
        <a href='#spacing'></a>Spacing
      </h1>
      <div className='py-5'>
        <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; extends{' '}
        <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/spacing/`} className='fw-bold'>
          Bootstrap Spacing Classes
        </a>
        &nbsp; to provide additonal spacing options by overidding the default spacing SASS variable
        as shown below:
      </div>

      <CodeBlock language='scss' code={code} />
    </div>
  )
}

const code = `$spacers: (
  0: 0,
  1: ($spacer * .25),
  2: ($spacer * .5),
  3: ($spacer * .75),
  4: ($spacer * 1),
  5: ($spacer * 1.25),
  6: ($spacer * 1.5),
  7: ($spacer * 1.75),
  8: ($spacer * 2),
  9: ($spacer * 2.25),
  10: ($spacer * 2.5),
  11: ($spacer * 2.75),
  12: ($spacer * 3),
  13: ($spacer * 3.25),
  14: ($spacer * 3.5),
  15: ($spacer * 3.75),
  16: ($spacer * 4),
  17: ($spacer * 4.25),
  18: ($spacer * 4.5),
  19: ($spacer * 4.75),
  20: ($spacer * 5)
);`

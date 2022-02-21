/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example3FontSize() {
  const {REACT_APP_THEME_NAME, REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='font-size'>
        <a href='#font-size'></a>Font Sizes
      </h1>
      <div className='py-5'>
        <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; extends{' '}
        <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/text/#font-size`} className='fw-bold'>
          Bootstrap Font Size Classes
        </a>
        &nbsp; to provide additonal sizing options by overidding the default font size SASS variable
        as shown below:
      </div>
      <CodeBlock language='scss' code={code} />
    </div>
  )
}

const code = `$font-sizes: (
  1: $h1-font-size,   // 22.75px
  2: $h2-font-size,   // 19.50px
  3: $h3-font-size,   // 17.55px
  4: $h4-font-size,   // 16.25px
  5: $h5-font-size,   // 14.95px
  6: $h6-font-size,   // 13.95px

  7: $font-size-base * 0.95,  // 12.35px
  8: $font-size-base * 0.85,  // 11.05px
  9: $font-size-base * 0.75,  // 9.75px
  10: $font-size-base * 0.5,  // 6.50px

  base: $font-size-base, // 13px
  fluid: 100%, // 100%

  2x: $font-size-base * 2,        // 26px
  2qx: $font-size-base * 2.25,    // 29.25px
  2hx: $font-size-base * 2.5,     // 32.5px
  2tx: $font-size-base * 2.75,    // 35.75px

  3x: $font-size-base * 3,        // 39px
  3qx: $font-size-base * 3.25,    // 42.25px
  3hx: $font-size-base * 3.5,     // 45.5px
  3tx: $font-size-base * 3.75,    // 48.75px

  4x: $font-size-base * 4,        // 52px
  4qx: $font-size-base * 4.25,    // 55.25px
  4hx: $font-size-base * 4.5,     // 58.5px
  4tx: $font-size-base * 4.75,    // 61.75px

  5x: $font-size-base * 5,        // 65px
  5qx: $font-size-base * 5.25,    // 68.25px
  5hx: $font-size-base * 5.5,     // 71.5px
  5tx: $font-size-base * 5.75     // 74.75px
) !default;`

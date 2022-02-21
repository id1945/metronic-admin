/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../../_metronic/partials'

export function Example12SocialButtons() {
  return (
    <div className='pb-10'>
      <h1 className='anchor fw-bolder mb-5' id='social-buttons'>
        <a href='#buttons'></a>Social Buttons
      </h1>
      <div className='py-5'>
        Use
        <code>.btn-{'{social}'}</code>and
        <code>.btn-light-{'{social}'}</code>classes with
        <a href='https://fontawesome.com' className='fw-bold' target='_blank'>
          Font Awesome
        </a>
        &nbsp; or
        <a href='https://icons.getbootstrap.com' className='fw-bold' target='_blank'>
          Bootstrap Icons
        </a>
        &nbsp; social icons for supporting buttons with social brand logos and colors.
      </div>

      <div className='py-5'>
        Where
        <code>social</code>is one the below options defined with
        <code>$social-colors</code>custom variable in
        <code>src/sass/_variables.scss</code>.
        <ul className='py-3'>
          <li className='py-2'>
            <code>facebook</code>
          </li>
          <li className='py-2'>
            <code>google</code>
          </li>
          <li className='py-2'>
            <code>twitter</code>
          </li>
          <li className='py-2'>
            <code>instagram</code>
          </li>
          <li className='py-2'>
            <code>youtube</code>
          </li>
          <li className='py-2'>
            <code>linkedin</code>
          </li>
        </ul>
        Other social colors can be added by referring to
        <a href='https://brandcolors.net/' className='fw-bold'>
          brandcolors.net
        </a>
        .
      </div>
      <div className='py-5'>
        <div className='rounded border p-10'>
          <a href='#' className='btn btn-icon btn-facebook me-5'>
            <i className='fab fa-facebook-f fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-google me-5'>
            <i className='fab fa-google fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-twitter me-5'>
            <i className='fab fa-twitter fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-instagram me-5'>
            <i className='fab fa-instagram fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-youtube me-5'>
            <i className='fab fa-youtube fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-linkedin me-5'>
            <i className='fab fa-linkedin fs-4'></i>
          </a>
          <div className='separator my-10'></div>
          <a href='#' className='btn btn-icon btn-light-facebook me-5'>
            <i className='fab fa-facebook-f fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-light-google me-5'>
            <i className='fab fa-google fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-light-twitter me-5'>
            <i className='fab fa-twitter fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-light-instagram me-5'>
            <i className='fab fa-instagram fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-light-youtube me-5'>
            <i className='fab fa-youtube fs-4'></i>
          </a>
          <a href='#' className='btn btn-icon btn-light-linkedin me-5'>
            <i className='fab fa-linkedin fs-4'></i>
          </a>
        </div>
      </div>
      <CodeBlock language='markup' code={code} />
    </div>
  )
}

const code = `<a href="#" className="btn btn-icon btn-facebook me-5 "><i className="fab fa-facebook-f fs-4"></i></a>
<a href="#" className="btn btn-icon btn-google me-5 "><i className="fab fa-google fs-4"></i></a>
<a href="#" className="btn btn-icon btn-twitter me-5 "><i className="fab fa-twitter fs-4"></i></a>
<a href="#" className="btn btn-icon btn-instagram me-5 "><i className="fab fa-instagram fs-4"></i></a>
<a href="#" className="btn btn-icon btn-youtube me-5 "><i className="fab fa-youtube fs-4"></i></a>
<a href="#" className="btn btn-icon btn-linkedin me-5 "><i className="fab fa-linkedin fs-4"></i></a>

<a href="#" className="btn btn-icon btn-light-facebook me-5 "><i className="fab fa-facebook-f fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-google me-5 "><i className="fab fa-google fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-twitter me-5 "><i className="fab fa-twitter fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-instagram me-5 "><i className="fab fa-instagram fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-youtube me-5 "><i className="fab fa-youtube fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-linkedin me-5 "><i className="fab fa-linkedin fs-4"></i></a>`

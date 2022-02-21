/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../helpers'

const Footer: FC = () => (
  <div className='py-4 d-flex flex-lg-column py-6' id='kt_footer'>
    <div className='container d-flex flex-column flex-md-row align-items-center justify-content-between'>
      <div className='text-dark order-2 order-md-1'>
        <span className='text-muted fw-bold me-1'>{new Date().getFullYear()} &copy;</span>
        <a
          href={process.env.REACT_APP_PREVIEW_URL}
          target='_blank'
          className='text-gray-800 text-hover-primary'
        >
          Keenthemes
        </a>
      </div>
      <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1 align-items-center mb-3 mb-md-0'>
        <li className='menu-item'>
          <a
            href='https://www.youtube.com/c/KeenThemesTuts/videos'
            target='_blank'
            className='menu-link px-3'
          >
            <img
              alt='Keenthemes Youtube'
              src={toAbsoluteUrl('/media/svg/social-logos/youtube.svg')}
              className='h-20px'
            />
          </a>
        </li>

        <li className='menu-item'>
          <a href='https://github.com/KeenthemesHub' target='_blank' className='menu-link px-3'>
            <img
              alt='Keenthemes Github'
              src={toAbsoluteUrl('/media/svg/social-logos/github.svg')}
              className='h-20px'
            />
          </a>
        </li>

        <li className='menu-item'>
          <a href='https://twitter.com/keenthemes' target='_blank' className='menu-link px-3'>
            <img
              alt='Keenthemes Twitter'
              src={toAbsoluteUrl('/media/svg/social-logos/twitter.svg')}
              className='h-20px'
            />
          </a>
        </li>

        <li className='menu-item'>
          <a href='https://www.instagram.com/keenthemes' target='_blank' className='menu-link px-3'>
            <img
              alt='Keenthemes Instagram'
              src={toAbsoluteUrl('/media/svg/social-logos/instagram.svg')}
              className='h-20px'
            />
          </a>
        </li>

        <li className='menu-item'>
          <a href='https://www.facebook.com/keenthemes' target='_blank' className='menu-link px-3'>
            <img
              alt='Keenthemes Facebook'
              src={toAbsoluteUrl('/media/svg/social-logos/facebook.svg')}
              className='h-20px'
            />
          </a>
        </li>

        <li className='menu-item'>
          <a href='https://dribbble.com/keenthemes' target='_blank' className='menu-link px-3'>
            <img
              alt='Keenthemes Dribbble'
              src={toAbsoluteUrl('/media/svg/social-logos/dribbble.svg')}
              className='h-20px'
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
)
export {Footer}

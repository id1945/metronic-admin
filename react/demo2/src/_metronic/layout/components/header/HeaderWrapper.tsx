/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MenuComponent} from '../../../assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {pathname} = useLocation()
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [pathname])

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      data-kt-sticky='true'
      data-kt-sticky-name='header'
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      {...attributes.headerMenu}
    >
      <div className={clsx(classes.headerContainer.join(' '), 'd-flex align-items-center')}>
        {/* begin::Aside mobile toggle */}
        {aside.display && (
          <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
            <div
              className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
              id='kt_aside_mobile_toggle'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-2x mt-1' />
            </div>
          </div>
        )}
        {/* end::Aside mobile toggle */}

        <div
          className='d-flex topbar align-items-center d-lg-none ms-n2 me-3'
          title='Show aside menu'
        >
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-2x' />
          </div>
        </div>

        <div className='header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0'>
          <Link to='/'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo-4.png')}
              className='logo-default h-25px'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo-5.png')}
              className='logo-sticky h-25px'
            />
          </Link>
        </div>

        {/* begin::Wrapper */}
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          {/* begin::Navbar */}
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          {header.left === 'page-title' && (
            <div className='d-flex align-items-center' id='kt_header_nav'>
              <DefaultTitle />
            </div>
          )}

          <div className='d-flex align-items-stretch flex-shrink-0'>
            <Topbar />
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  )
}

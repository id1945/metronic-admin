import clsx from 'clsx'
import React from 'react'
import {useLocation} from 'react-router-dom'
import {AsideMenuItem} from './AsideMenuItem'
import {checkIsActive} from '../../../helpers'

export function AsideMenuDocs() {
  const {pathname} = useLocation()

  return (
    <>
      <div className='menu-item'>
        <h4 className='menu-content text-muted mb-0 fs-7 text-uppercase'>Getting started</h4>
      </div>
      <AsideMenuItem to='/docs/quick-start' title='Quick Start' />
      <AsideMenuItem to='/docs/overview' title='Overview' />
      <AsideMenuItem to='/docs/deployment' title='Deployment' />
      <AsideMenuItem to='/docs/i18n' title='Internationalization (i18n)' />
      <AsideMenuItem to='/docs/mock-backend' title='Mock Back-end' />
      <AsideMenuItem to='/docs/create-a-page' title='Create a page' />
      <AsideMenuItem to='/docs/rtl' title='RTL Version' />
      {/* <AsideMenuItem to="/docs/skeleton" title="Skeleton" /> */}
      {/* <AsideMenuItem to='/builder' title='Layout Builder' /> */}
      <AsideMenuItem to='/docs/dark-mode' title='Dark Mode' />
      <AsideMenuItem to='/docs/updates' title='Updates' />
      <AsideMenuItem to='/docs/changelog' title='Changelog' />
      <AsideMenuItem to='/docs/references' title='References' />

      <>
        <div className='menu-item mt-10'>
          <h4 className='menu-content text-muted mb-0 fs-6 fw-bold text-uppercase'>Base</h4>
        </div>
        <AsideMenuItem to='/docs/utilities' title='Utilities' />

        <div
          data-kt-menu-trigger='click'
          className={clsx('menu-item', {
            'hover show': checkIsActive(pathname, '/docs/helpers'),
          })}
        >
          <span className='menu-link py-2'>
            <span className='menu-title'>Helpers</span>
            <span className='menu-arrow'></span>
          </span>
          <div className='menu-sub menu-sub-accordion'>
            <div className='menu-item'>
              <AsideMenuItem to='/docs/helpers/flex-layout' title='Flex Layout' hasBullet={true} />
            </div>
            <div className='menu-item'>
              <AsideMenuItem to='/docs/helpers/text' title='Text' hasBullet={true} />
            </div>
            <div className='menu-item'>
              <AsideMenuItem to='/docs/helpers/background' title='Background' hasBullet={true} />
            </div>
            <div className='menu-item'>
              <AsideMenuItem to='/docs/helpers/borders' title='Borders' hasBullet={true} />
            </div>
            <div className='menu-item'>
              <AsideMenuItem to='/docs/helpers/opacity' title='Opacity' hasBullet={true} />
            </div>
          </div>
        </div>

        <AsideMenuItem to='/docs/forms' title='Forms' />
        <AsideMenuItem to='/docs/buttons' title='Buttons' />
        <AsideMenuItem to='/docs/accordion' title='Accordion' />
        <AsideMenuItem to='/docs/alerts' title='Alerts' />
        <AsideMenuItem to='/docs/badges' title='Budges' />
        <AsideMenuItem to='/docs/breadcrumb' title='Breadcrumb' />
        <AsideMenuItem to='/docs/bullets' title='Bullets' />
        <AsideMenuItem to='/docs/cards' title='Cards' />
        <AsideMenuItem to='/docs/carousel' title='Carousel' />
        <AsideMenuItem to='/docs/indicator' title='Indicator' />
        <AsideMenuItem to='/docs/modal' title='Modal' />
        <AsideMenuItem to='/docs/overlay' title='Overlay' />
        <AsideMenuItem to='/docs/pagination' title='Pagination' />
        <AsideMenuItem to='/docs/pulse' title='Pulse' />
        <AsideMenuItem to='/docs/rating' title='Rating' />
        <AsideMenuItem to='/docs/ribbon' title='Ribbon' />
        <AsideMenuItem to='/docs/rotate' title='Rotate' />
        <AsideMenuItem to='/docs/separator' title='Separator' />
        <AsideMenuItem to='/docs/symbol' title='Symbol' />
        <AsideMenuItem to='/docs/tables' title='Tables' />
        <AsideMenuItem to='/docs/tabs' title='Tabs' />
      </>

      <>
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Icons</span>
          </div>
        </div>
        <AsideMenuItem to='/docs/icons/duotune' title='Duotune' />
        <AsideMenuItem to='/docs/icons/bootstrap' title='Bootstrap Icons' />
        <AsideMenuItem to='/docs/icons/fontawesome' title='Font Awesome' />
        <AsideMenuItem to='/docs/icons/lineawesome' title='Line Awesome' />
      </>
    </>
  )
}

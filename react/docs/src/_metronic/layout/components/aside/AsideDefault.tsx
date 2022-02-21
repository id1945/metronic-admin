/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../helpers'
import {AsideMenu} from './AsideMenu'

const AsideDefault: FC = () => {
  return (
    <div
      id='kt_docs_aside'
      className='docs-aside'
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_docs_aside_toggle'
    >
      {/* begin::Brand */}
      <div className='docs-aside-logo flex-column-auto h-75px' id='kt_docs_aside_logo'>
        {/* begin::Logo */}
        <Link to='/'>
          <img alt='Logo' className='h-25px logo' src={toAbsoluteUrl('/media/logos/logo-1.svg')} />
        </Link>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div className='docs-aside-menu flex-column-fluid'>
        <AsideMenu />
      </div>
      {/* end::Aside menu */}
    </div>
  )
}

export {AsideDefault}

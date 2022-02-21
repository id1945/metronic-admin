/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import clsx from 'clsx'
import {useLayout} from '../../core'
import {KTSVG} from '../../../helpers'
import {AsideMenu} from './AsideMenu'

const AsideDefault: FC = () => {
  const {config, classes} = useLayout()
  const {aside} = config

  return (
    <div
      id='kt_aside'
      className={clsx('aside card', classes.aside.join(' '), {'d-none': !aside.display})}
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_mobile_toggle'
    >
      {/* begin::Aside menu */}
      <div className='aside-menu flex-column-fluid'>
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
      {/* end::Aside menu */}

      {/* begin::Footer */}
      <div className='aside-footer flex-column-auto pt-5 pb-7 px-5' id='kt_aside_footer'>
        <a
          target='_blank'
          className='btn btn-custom btn-primary w-100'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL}
          data-bs-toggle='tooltip'
          data-bs-trigger='hover'
          data-bs-dismiss-='click'
          title='Check out the complete documentation with over 100 components'
        >
          <span className='btn-label'>Docs & Components</span>
          <span className='btn-icon svg-icon-2'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' />
          </span>
        </a>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {AsideDefault}

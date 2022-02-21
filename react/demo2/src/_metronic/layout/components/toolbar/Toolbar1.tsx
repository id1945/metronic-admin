/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {FC, useEffect} from 'react'
import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'
import {MenuComponent} from '../../../assets/ts/components'
import {useLocation} from 'react-router-dom'

const Toolbar1: FC = () => {
  const {classes} = useLayout()
  const {pathname} = useLocation()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [pathname])

  return (
    <div className='toolbar py-5 py-lg-15' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />

        {/* begin::Actions */}
        <div className='d-flex align-items-center py-1'>
          {/* begin::Wrapper */}
          <div className='me-4'>
            {/* begin::Menu */}
            <a
              href='#'
              className='btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG
                path='/media/icons/duotune/general/gen031.svg'
                className='svg-icon-5 svg-icon-gray-500 me-1'
              />
              Filter
            </a>

            {/* end::Menu */}
          </div>
          {/* end::Wrapper */}

          {/* begin::Button */}

          <a
            href='#'
            className='btn btn-bg-white btn-active-color-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            Create
          </a>
          {/* end::Button */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Toolbar1}

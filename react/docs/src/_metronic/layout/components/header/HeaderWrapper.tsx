/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MenuComponent} from '../../../assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {DefaultTitle} from './page-title/DefaultTitle'

const HeaderWrapper: FC = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [pathname])

  return (
    <div id='kt_docs_header' className='docs-header align-items-stretch mb-2 mb-lg-10'>
      <div className='container'>
        <div className='d-flex align-items-stretch justify-content-between py-3 h-75px'>
          <div
            className='d-flex align-items-center d-lg-none me-3d-flex align-items-center d-lg-none me-3'
            title='Show aside menu'
          >
            <div
              className='btn btn-icon btn-flex btn-active-color-primary'
              id='kt_docs_aside_toggle'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-2x mt-1' />
            </div>
          </div>

          <div className='d-flex d-lg-none align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15'>
            <Link to='/'>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/logos/logo-2.svg')}
                className="h-25px logo'"
              />
            </Link>
          </div>

          <div className='d-flex align-items-center justify-content-between flex-lg-grow-1'>
            <div className='d-flex align-items-center' id='kt_docs_header_title'>
              <DefaultTitle />
            </div>
            <div className='d-flex align-items-center'>
              <a
                className='btn btn-bg-white btn-color-gray-700 btn-active-primary fw-bolder me-4'
                href={process.env.REACT_APP_PREVIEW_URL}
                target='_blank'
              >
                Preview
              </a>

              <a
                className='btn btn-primary fw-bolder'
                href={process.env.REACT_APP_PURCHASE_URL}
                target='_blank'
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
        <div className='border-gray-300 border-bottom border-bottom-dashed'></div>
      </div>
    </div>
  )
}

export {HeaderWrapper}

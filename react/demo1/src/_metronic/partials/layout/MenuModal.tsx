/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {Link, useLocation} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

const MenuModal: React.FC<Props> = ({show, handleClose, children}) => {
  const location = useLocation()
  const isFirstRef = useRef(true)
  useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false
    } else {
      handleClose()
    }
  }, [location])

  return (
    <Modal
      className='bg-white'
      id='kt_mega_menu_modal'
      aria-hidden='true'
      tabIndex='-1'
      dialogClassName='modal-fullscreen'
      contentClassName='shadow-none'
      show={show}
    >
      <div className='container-xxl'>
        <div className='modal-header d-flex align-items-center justify-content-between border-0'>
          <div className='d-flex align-items-center'>
            {/* begin::Logo */}
            <Link to='/'>
              <img
                alt='logo'
                className='h-30px'
                src={toAbsoluteUrl('/media/logos/logo-default.svg')}
              />
            </Link>
            {/* end::Logo */}
          </div>

          {/* begin::Close */}
          <div className='btn btn-icon btn-sm btn-light-primary ms-2' onClick={handleClose}>
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
          </div>
          {/* end::Close */}
        </div>
        <div className='modal-body'>
          {/* begin::Row */}
          <div className='row py-10 g-5'>
            {/* begin::Column */}
            <div className='col-lg-6 pe-lg-25'>{children}</div>
            {/* end::Column */}

            {/* begin::Column */}
            <div className='col-lg-6'>
              <h3 className='fw-bolder mb-8'>Quick Links</h3>

              {/* begin::Row */}
              <div className='row g-5'>
                <div className='col-sm-4'>
                  <a
                    href='#'
                    className='card card-custom bg-light-success hoverable min-h-125px shadow-none mb-5'
                  >
                    <div className='card-body d-flex flex-column flex-center'>
                      <h3 className='fs-3 mb-2 text-dark fw-bolder'>Security</h3>
                      <p className='mb-0 text-gray-600'>$2.99/month</p>
                    </div>
                  </a>
                </div>
                <div className='col-sm-4'>
                  <a
                    href='#'
                    className='card card-custom bg-light-danger hoverable min-h-125px shadow-none mb-5'
                  >
                    <div className='card-body d-flex flex-column flex-center text-center'>
                      <h3 className='fs-3 mb-2 text-dark fw-bolder'>Demo</h3>
                      <p className='mb-0 text-gray-600'>Free Version</p>
                    </div>
                  </a>
                </div>
                <div className='col-sm-4'>
                  <a
                    href='#'
                    className='card card-custom bg-light-warning hoverable min-h-125px shadow-none mb-5'
                  >
                    <div className='card-body d-flex flex-column flex-center text-center'>
                      <h3 className='fs-3 mb-2 text-dark text-hover-primary fw-bolder'>Try Now</h3>
                      <p className='mb-0 text-gray-600'>Pro Version</p>
                    </div>
                  </a>
                </div>
              </div>
              {/* end::Row */}

              {/* begin::Row */}
              <div className='row g-5'>
                <div className='col-sm-8'>
                  <a
                    href='#'
                    className='card card-custom bg-light-primary hoverable min-h-125px shadow-none mb-5'
                  >
                    <div className='card-body d-flex flex-column flex-center text-center'>
                      <h3 className='fs-3 mb-2 text-dark fw-bolder'>Payment Methods</h3>
                      <p className='mb-0 text-gray-600'>
                        Credit Cards/Debit Cards, Paypal,
                        <br /> Transferwise & Others
                      </p>
                    </div>
                  </a>

                  {/* begin::Row */}
                  <div className='row g-5'>
                    <div className='col-sm-6'>
                      <a className='card card-custom bg-light-warning hoverable shadow-none min-h-125px mb-5'>
                        <div className='card-body d-flex flex-column flex-center text-center'>
                          <h3 className='fs-3 mb-2 text-dark fw-bolder'>Support</h3>
                          <p className='mb-0 text-gray-600'>6 Month Free</p>
                        </div>
                      </a>
                    </div>
                    <div className='col-sm-6'>
                      <a
                        href='#'
                        className='card card-custom bg-light-success hoverable shadow-none min-h-125px mb-5'
                      >
                        <div className='card-body d-flex flex-column flex-center text-center'>
                          <h3 className='fs-3 mb-2 text-dark fw-bolder'>Installation</h3>
                          <p className='mb-0 text-gray-600'>$0.99 Per Machine</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* end::Row */}
                </div>
                <div className='col-sm-4'>
                  <a
                    href='#'
                    className='card card-custom card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px'
                  >
                    <div className='card-body d-flex flex-column p-0'>
                      <div className='d-flex flex-column flex-center text-center px-5 pt-10'>
                        <h3 className='fs-3 mb-2 text-dark fw-bolder'>Quick Start</h3>
                        <p className='mb-0 text-gray-600'>Single Click Import</p>
                      </div>
                      <div
                        className='flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom'
                        style={{
                          backgroundImage: `url('${toAbsoluteUrl(
                            '/media/illustrations/terms-1.png'
                          )}')`,
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
              {/* end::Row */}
            </div>
            {/* end::Column */}
          </div>
          {/* end::Row */}
        </div>
      </div>
    </Modal>
  )
}

export {MenuModal}

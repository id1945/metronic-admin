/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Dropdown1, ChatInner} from '../../../../../_metronic/partials'

const Private: FC = () => {
  return (
    <div className='d-flex flex-column flex-lg-row'>
      <div className='flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0'>
        <div className='card card-flush'>
          <div className='card-header pt-7' id='kt_chat_contacts_header'>
            <form className='w-100 position-relative' autoComplete='off'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
              />

              <input
                type='text'
                className='form-control form-control-solid px-15'
                name='search'
                placeholder='Search by username or email...'
              />
            </form>
          </div>

          <div className='card-body pt-5' id='kt_chat_contacts_body'>
            <div
              className='scroll-y me-n5 pe-5 h-200px h-lg-auto'
              data-kt-scroll='true'
              data-kt-scroll-activate='{default: false, lg: true}'
              data-kt-scroll-max-height='auto'
              data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header'
              data-kt-scroll-wrappers='#kt_content, #kt_chat_contacts_body'
              data-kt-scroll-offset='0px'
            >
              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>
                      M
                    </span>
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Melody Macy
                    </a>
                    <div className='fw-bold text-gray-400'>melody@altbox.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>5 hrs</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <img alt='Pic' src={toAbsoluteUrl('/media/avatars/150-2.jpg')} />
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Max Smith
                    </a>
                    <div className='fw-bold text-gray-400'>max@kt.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>20 hrs</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <img alt='Pic' src={toAbsoluteUrl('/media/avatars/150-4.jpg')} />
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Sean Bean
                    </a>
                    <div className='fw-bold text-gray-400'>sean@dellito.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>20 hrs</span>
                  <span className='badge badge-sm badge-circle badge-light-success'>6</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <img alt='Pic' src={toAbsoluteUrl('/media/avatars/150-15.jpg')} />
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Brian Cox
                    </a>
                    <div className='fw-bold text-gray-400'>brian@exchange.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>20 hrs</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <span className='symbol-label bg-light-warning text-warning fs-6 fw-bolder'>
                      M
                    </span>
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Mikaela Collins
                    </a>
                    <div className='fw-bold text-gray-400'>mikaela@pexcom.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>1 day</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <img alt='Pic' src={toAbsoluteUrl('/media/avatars/150-8.jpg')} />
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Francis Mitcham
                    </a>
                    <div className='fw-bold text-gray-400'>f.mitcham@kpmg.com.au</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>5 hrs</span>
                  <span className='badge badge-sm badge-circle badge-light-success'>6</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>
                      O
                    </span>
                    <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2'></div>
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Olivia Wild
                    </a>
                    <div className='fw-bold text-gray-400'>olivia@corpmail.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>1 week</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <span className='symbol-label bg-light-primary text-primary fs-6 fw-bolder'>
                      N
                    </span>
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Neil Owen
                    </a>
                    <div className='fw-bold text-gray-400'>owen.neil@gmail.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>20 hrs</span>
                  <span className='badge badge-sm badge-circle badge-light-success'>6</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <img alt='Pic' src={toAbsoluteUrl('/media/avatars/150-6.jpg')} />
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Dan Wilson
                    </a>
                    <div className='fw-bold text-gray-400'>dam@consilting.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>2 weeks</span>
                  <span className='badge badge-sm badge-circle badge-light-warning'>9</span>
                </div>
              </div>

              <div className='separator separator-dashed d-none'></div>

              <div className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px symbol-circle'>
                    <span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>
                      E
                    </span>
                    <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2'></div>
                  </div>

                  <div className='ms-5'>
                    <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                      Emma Bold
                    </a>
                    <div className='fw-bold text-gray-400'>emma@intenso.com</div>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-end ms-2'>
                  <span className='text-muted fs-7 mb-1'>1 day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card' id='kt_chat_messenger'>
          <div className='card-header' id='kt_chat_messenger_header'>
            <div className='card-title'>
              <div className='symbol-group symbol-hover'></div>
              <div className='d-flex justify-content-center flex-column me-3'>
                <a
                  href='#'
                  className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'
                >
                  Brian Cox
                </a>

                <div className='mb-0 lh-1'>
                  <span className='badge badge-success badge-circle w-10px h-10px me-1'></span>
                  <span className='fs-7 fw-bold text-gray-400'>Active</span>
                </div>
              </div>
            </div>

            <div className='card-toolbar'>
              <div className='me-n3'>
                <button
                  className='btn btn-sm btn-icon btn-active-light-primary'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                >
                  <i className='bi bi-three-dots fs-2'></i>
                </button>
                <Dropdown1 />
              </div>
            </div>
          </div>
          <ChatInner />
        </div>
      </div>
    </div>
  )
}

export {Private}

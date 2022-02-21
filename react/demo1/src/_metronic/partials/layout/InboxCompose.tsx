/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useRef} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {KTSVG} from '../../helpers'

export type Props = {
  show: boolean
  handleClose: () => void
}

const InboxCompose: React.FC<Props> = ({show, handleClose}) => {
  const composeToRef = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const [composeCC, setComposeCC] = useState('')
  const [composeBCC, setComposeBCC] = useState('')
  const [subject, setSubject] = useState('')

  return (
    <Modal
      className='modal-sticky modal-sticky-lg modal-sticky-bottom-right'
      id='kt_inbox_compose'
      role='dialog'
      data-backdrop='false'
      aria-hidden='true'
      tabIndex='-1'
      show={show}
      animation={false}
    >
      <div className='modal-content'>
        {/* begin::Form */}
        <form ref={formRef} id='kt_inbox_compose_form' onSubmit={() => console.log('submit')}>
          {/*begin::Header*/}
          <div className='d-flex align-items-center justify-content-between py-5 ps-8 pe-5 border-bottom'>
            <h5 className='fw-bold m-0'>Compose</h5>
            <div className='d-flex ms-2'>
              {/*begin::Close*/}
              <div
                className='btn btn-icon btn-sm btn-light-primary ms-2'
                data-bs-dismiss='modal'
                onClick={handleClose}
              >
                <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
              </div>
              {/*end::Close*/}
            </div>
          </div>
          {/*end::Header*/}

          {/*begin::Body*/}
          <div className='d-block'>
            {/*begin::To*/}
            <div className='d-flex align-items-center border-bottom inbox-to px-8 min-h-45px'>
              <div className='text-gray-600 w-75px'>To:</div>
              <div className='d-flex align-items-center flex-grow-1'>
                <input
                  type='text'
                  className='form-control border-0'
                  name='compose_to'
                  ref={composeToRef}
                />
              </div>
              <div className='ms-2'>
                <span
                  className='text-muted fw-bold cursor-pointer text-hover-primary me-2'
                  data-inbox='cc-show'
                >
                  Cc
                </span>
                <span
                  className='text-muted fw-bold cursor-pointer text-hover-primary'
                  data-inbox='bcc-show'
                >
                  Bcc
                </span>
              </div>
            </div>
            {/*end::To*/}

            {/*begin::CC*/}
            <div className='d-none align-items-center border-bottom inbox-to-cc ps-8 pe-5 min-h-45px'>
              <div className='text-gray-600 w-75px'>Cc:</div>
              <div className='flex-grow-1'>
                <input
                  type='text'
                  className='form-control border-0'
                  name='compose_cc'
                  value={composeCC}
                  onChange={(e) => setComposeCC(e.target.value)}
                />
              </div>
              <span className='btn btn-active-light-primary btn-sm btn-icon' data-inbox='cc-hide'>
                <i className='la la-close '></i>
              </span>
            </div>
            {/*end::CC*/}

            {/*begin::BCC*/}
            <div className='d-none align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-45px'>
              <div className='text-gray-600 w-75px'>Bcc:</div>
              <div className='flex-grow-1'>
                <input
                  type='text'
                  className='form-control border-0'
                  name='compose_bcc'
                  value={composeBCC}
                  onChange={(e) => setComposeBCC(e.target.value)}
                />
              </div>
              <span className='btn btn-active-light-primary btn-sm btn-icon' data-inbox='bcc-hide'>
                <i className='la la-close '></i>
              </span>
            </div>
            {/*end::BCC*/}

            {/*begin::Subject*/}
            <div className='border-bottom'>
              <input
                className='form-control border-0 px-8 min-h-45px'
                name='compose_subject'
                placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            {/*end::Subject*/}

            {/*begin::Message*/}
            <div id='kt_inbox_compose_editor' className='border-0 h-125px h-lg-250px'></div>
            {/*end::Message*/}

            {/*begin::Attachments*/}
            <div className='dropzone dropzone-multi px-8 py-4' id='kt_inbox_compose_attachments'>
              <div className='dropzone-items'>
                <div className='dropzone-item' style={{display: 'none'}}>
                  <div className='dropzone-file'>
                    <div className='dropzone-filename' title='some_image_file_name.jpg'>
                      <span data-dz-name>some_image_file_name.jpg</span>{' '}
                      <strong>
                        (<span data-dz-size>340kb</span>)
                      </strong>
                    </div>
                    <div className='dropzone-error' data-dz-errormessage></div>
                  </div>
                  <div className='dropzone-progress'>
                    <div className='progress'>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={0}
                        data-dz-uploadprogress
                      ></div>
                    </div>
                  </div>
                  <div className='dropzone-toolbar'>
                    <span className='dropzone-delete' data-dz-remove>
                      {/*begin::Close*/}
                      <span
                        className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                        data-bs-dismiss='modal'
                      >
                        <KTSVG
                          className='svg-icon-1'
                          path='/media/icons/duotune/arrows/arr061.svg'
                        />
                      </span>
                      {/*end::Close*/}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*end::Attachments*/}
          </div>
          {/*end::Body*/}

          {/*begin::Footer*/}
          <div className='d-flex align-items-center justify-content-between py-5 ps-8 pe-5 border-top'>
            {/*begin::Actions*/}
            <div className='d-flex align-items-center me-3'>
              {/*begin::Send*/}
              <button className='btn btn-primary me-4 px-6'>Send</button>
              {/*end::Send*/}

              {/*begin::Other*/}
              <a
                href='#'
                className='btn btn-icon btn-active-light-primary me-2'
                id='kt_inbox_compose_attachments_select'
              >
                <KTSVG className='svg-icon-1' path='/media/icons/duotune/files/fil022.svg' />
              </a>
              <a href='#' className='btn btn-icon btn-active-light-primary'>
                <KTSVG className='svg-icon-1' path='/media/icons/duotune/general/gen018.svg' />
              </a>
              {/*end::Other*/}
            </div>
            {/*end::Actions*/}

            {/*begin::Toolbar*/}
            <div className='d-flex align-items-center'>
              <button
                className='btn btn-icon btn-active-light-primary me-2'
                data-bs-toggle='tooltip'
                title='More actions'
              >
                <KTSVG className='svg-icon-1' path='/media/icons/duotune/coding/cod001.svg' />
              </button>
            </div>
            {/*end::Toolbar*/}
          </div>
          {/*end::Footer*/}
        </form>
        {/*end::Form*/}
      </div>
    </Modal>
  )
}

export {InboxCompose}

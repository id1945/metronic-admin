/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../helpers'

const Item6: FC = () => {
  return (
    <div className='timeline-item'>
      <div className='timeline-line w-40px'></div>

      <div className='timeline-icon symbol symbol-circle symbol-40px'>
        <div className='symbol-label bg-light'>
          <KTSVG
            path='/media/icons/duotune/communication/com010.svg'
            className='svg-icon-2 svg-icon-gray-500'
          />
        </div>
      </div>

      <div className='timeline-content mb-10 mt-n1'>
        <div className='pe-3 mb-5'>
          <div className='fs-5 fw-bold mb-2'>
            New case{' '}
            <a href='#' className='text-primary fw-bolder me-1'>
              #67890
            </a>
            is assigned to you in Multi-platform Database Design project
          </div>

          <div className='overflow-auto pb-5'>
            <div className='d-flex align-items-center mt-1 fs-6'>
              <div className='text-muted me-2 fs-7'>Added at 4:23 PM by</div>

              <a href='#' className='text-primary fw-bolder me-1'>
                Alice Tan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Item6}

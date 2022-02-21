/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../helpers'

const Item8: FC = () => {
  return (
    <div className='timeline-item'>
      <div className='timeline-line w-40px'></div>

      <div className='timeline-icon symbol symbol-circle symbol-40px'>
        <div className='symbol-label bg-light'>
          <KTSVG
            path='/media/icons/duotune/ecommerce/ecm002.svg'
            className='svg-icon-2 svg-icon-gray-500'
          />
        </div>
      </div>

      <div className='timeline-content mt-n1'>
        <div className='pe-3 mb-5'>
          <div className='fs-5 fw-bold mb-2'>
            New order{' '}
            <a href='#' className='text-primary fw-bolder me-1'>
              #67890
            </a>
            is placed for Workshow Planning & Budget Estimation
          </div>

          <div className='d-flex align-items-center mt-1 fs-6'>
            <div className='text-muted me-2 fs-7'>Placed at 4:23 PM by</div>

            <a href='#' className='text-primary fw-bolder me-1'>
              Jimmy Bold
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Item8}

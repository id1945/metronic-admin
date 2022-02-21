/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const Item7: FC = () => {
  return (
    <div className='timeline-item'>
      <div className='timeline-line w-40px'></div>

      <div className='timeline-icon symbol symbol-circle symbol-40px'>
        <div className='symbol-label bg-light'>
          <KTSVG
            path='/media/icons/duotune/art/art005.svg'
            className='svg-icon-2 svg-icon-gray-500'
          />
        </div>
      </div>

      <div className='timeline-content mb-10 mt-n1'>
        <div className='pe-3 mb-5'>
          <div className='fs-5 fw-bold mb-2'>You have received a new order:</div>

          <div className='d-flex align-items-center mt-1 fs-6'>
            <div className='text-muted me-2 fs-7'>Placed at 5:05 AM by</div>

            <div
              className='symbol symbol-circle symbol-25px'
              data-bs-toggle='tooltip'
              data-bs-boundary='window'
              data-bs-placement='top'
              title='Robert Rich'
            >
              <img src={toAbsoluteUrl('/media/avatars/150-14.jpg')} alt='img' />
            </div>
          </div>
        </div>

        <div className='overflow-auto pb-5'>
          <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
            <KTSVG
              path='/media/icons/duotune/coding/cod004.svg'
              className='svg-icon-2tx svg-icon-primary me-4'
            />
            <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
              <div className='mb-3 mb-md-0 fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>Database Backup Process Completed!</h4>
                <div className='fs-6 text-gray-600 pe-7'>
                  Login into Metronic Admin Dashboard to make sure the data integrity is OK
                </div>
              </div>
              <a href='#' className='btn btn-primary px-6 align-self-center text-nowrap'>
                Proceed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Item7}

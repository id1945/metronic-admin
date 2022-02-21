/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  color?: string
  avatar?: string
  online?: boolean
  name: string
  job: string
  avgEarnings: string
  totalEarnings: string
}

const Card1: FC<Props> = ({
  color = '',
  avatar = '',
  online = false,
  name,
  job,
  avgEarnings,
  totalEarnings,
}) => {
  return (
    <div className='card'>
      <div className='card-body d-flex flex-center flex-column p-9'>
        <div className='mb-5'>
          <div className='symbol symbol-75px symbol-circle'>
            {color ? (
              <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                {name.charAt(0)}
              </span>
            ) : (
              <img alt='Pic' src={toAbsoluteUrl(avatar)} />
            )}
            {online && (
              <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
            )}
          </div>
        </div>

        <a href='#' className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>
          {name}
        </a>

        <div className='fw-bold text-gray-400 mb-6'>{job}</div>

        <div className='d-flex flex-center flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700'>{avgEarnings}</div>
            <div className='fw-bold text-gray-400'>Avg. Earnings</div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700'>{totalEarnings}</div>
            <div className='fw-bold text-gray-400'>Total Sales</div>
          </div>
        </div>

        <button className='btn btn-sm btn-light-primary fw-bolder' id='kt_drawer_chat_toggle'>
          Send Message
        </button>
      </div>
    </div>
  )
}

export {Card1}

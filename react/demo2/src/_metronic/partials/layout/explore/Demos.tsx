import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

const Demos: FC = () => {
  const demos = [
    {
      name: 'demo1',
      available: true,
    },
    {
      name: 'demo2',
      available: true,
    },
    {
      name: 'demo3',
    },
    {
      name: 'demo4',
    },
    {
      name: 'demo5',
    },
    {
      name: 'demo6',
    },
    {
      name: 'demo7',
    },
    {
      name: 'demo8',
    },
    {
      name: 'demo9',
    },
    {
      name: 'demo10',
    },
    {
      name: 'demo11',
    },
    {
      name: 'demo12',
    },
    {
      name: 'demo13',
    },
  ]

  return (
    <div className='mb-0'>
      <h3 className='fw-bolder text-center mb-6'>{process.env.REACT_APP_THEME_NAME} Demos</h3>

      <div className='row g-5'>
        {demos.map((item, index) => (
          <div className='col-6'>
            <div
              className={`overlay overflow-hidden position-relative ${
                process.env.REACT_APP_THEME_DEMO === item.name
                  ? 'border border-4 border-success'
                  : 'border border-4 border-gray-200'
              } rounded`}
            >
              <div className='overlay-wrapper'>
                <img
                  src={toAbsoluteUrl(`/media/demos/${item.name}.png`)}
                  alt='demo'
                  className={`w-100 ${!item.available && 'opacity-75'}`}
                />
              </div>

              <div className='overlay-layer bg-dark bg-opacity-10'>
                {item.available && (
                  <a
                    href={`${process.env.REACT_APP_PREVIEW_REACT_URL}/${item.name}`}
                    className='btn btn-sm btn-success shadow'
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </a>
                )}
                {!item.available && (
                  <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>
                    Coming soon
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export {Demos}

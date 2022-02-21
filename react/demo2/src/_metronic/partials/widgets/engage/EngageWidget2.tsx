/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'

type Props = {
  className: string
  imagePath?: string
  innerPadding?: string
  color?: string
}

const EngageWidget2: React.FC<Props> = ({
  className,
  imagePath = '',
  innerPadding = '',
  color = 'primary',
}) => {
  return (
    <div className={`card overflow-hidden ${className}`}>
      <div className={`card-body p-0 d-flex card-rounded bg-light-${color}`}>
        <div className='py-18 px-12'>
          <h3 className='fs-2x'>
            <a href='#' className='text-dark text-hover-primary fw-bolder'>
              Nike Sneakers
            </a>
          </h3>
          <div className={clsx('fs-3', `text-${color}`)}>Get Amazing Nike Sneakers</div>
        </div>
        {imagePath && (
          <div
            className='d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-cover'
            style={{
              transform: 'translateX(10%) rotate(-26deg)',
              backgroundImage: `url('${imagePath}')`,
            }}
          ></div>
        )}
      </div>
    </div>
  )
}

export {EngageWidget2}

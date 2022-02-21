/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  imagePath?: string
  innerPadding?: string
  color?: string
}

const EngageWidget3: React.FC<Props> = ({
  className,
  imagePath = '',
  innerPadding = '',
  color = 'primary',
}) => {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Card Body */}
      <div
        className={`card-body d-flex p-12 flex-column flex-md-row flex-lg-column flex-xxl-row bg-${color}`}
      >
        {/*begin::Image*/}
        <div
          className='bgi-no-repeat bgi-position-center bgi-size-cover h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-650px mx-auto'
          style={{
            backgroundImage: `url('${toAbsoluteUrl('/media/products/12.png')}'`,
          }}
        ></div>
        {/*end::Image*/}

        {/*begin::Card*/}
        <div className='card shadow-none w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto'>
          {/*begin::Card Body*/}
          <div className='card-body bg-light px-12 py-10'>
            <h3 className='fw-bolder fs-1 mb-1'>
              <a href='#' className='text-gray-800'>
                Nike True Balance
              </a>
            </h3>
            <div className='text-primary fs-3 mb-9'>$ 399.99</div>
            <div className='fs-7 mb-8'>
              Outlines keep you honest. They stop you from indulging in poorly ought out metaphorsy
              about driving and keep you focused one the overall structure of your post
            </div>
            {/*begin::Info*/}
            <table className='table table-borderless align-middle fw-bold'>
              <tbody>
                <tr>
                  <td className='text-gray-600 ps-0'>Shoes Brand</td>
                  <td className='text-dark pe-0'>Nike</td>
                </tr>
                <tr>
                  <td className='text-gray-600 ps-0'>SKU</td>
                  <td className='text-dark pe-0'>NF3535</td>
                </tr>
                <tr>
                  <td className='text-gray-600 ps-0'>Color</td>
                  <td className='text-dark pe-0'>White</td>
                </tr>
                <tr>
                  <td className='text-gray-600 ps-0'>Collection</td>
                  <td className='text-dark pe-0'>2020 Spring</td>
                </tr>
                <tr>
                  <td className='text-gray-600 ps-0'>In Stock</td>
                  <td className='text-dark pe-0'>280</td>
                </tr>
              </tbody>
            </table>
            {/*end::Info*/}
          </div>
          {/*end::Card Body*/}
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Card Body*/}
    </div>
  )
}

export {EngageWidget3}

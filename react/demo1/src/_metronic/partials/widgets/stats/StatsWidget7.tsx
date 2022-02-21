/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
  innerPadding?: string
}

const StatsWidget7: React.FC<Props> = ({className, innerPadding = ''}) => {
  const [category, setCategory] = useState('1')
  const [option, setOption] = useState('1')
  const [fleet, setFleet] = useState('1')
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body ${innerPadding}`}>
        {/* begin::Title */}
        <div className='mb-10'>
          <h3 className='fw-bold text-dark mb-5 fs-1'>What A Pretty Form</h3>
          <span className='fw-bold fs-4 text-muted'>
            This information will help us tailor your experience.
          </span>
        </div>
        {/* end::Title */}

        {/* begin::Section */}
        <div className='mb-10'>
          <h3 className='fw-bold fs-3 text-dark mb-5'>Select A Category</h3>

          {/* begin::Row */}
          <div className='row' data-kt-control='toggle-buttons'>
            <input
              type='radio'
              className='btn-check'
              name='form-options'
              checked={category === '1'}
              value='1'
              id='kt_form_options_1'
              onChange={(e) => setCategory(e.target.value)}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ${
                category === '1' ? 'active' : ''
              }`}
              htmlFor='kt_form_options_1'
            >
              <KTSVG path='/media/icons/duotune/general/gen002.svg' className='svg-icon-2x me-1' />
              <span className='text-gray-800 fw-bold'>Movie Creator</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-options'
              value='2'
              id='kt_form_options_2'
              checked={category === '2'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ${
                category === '2' ? 'active' : ''
              }`}
              htmlFor='kt_form_options_2'
            >
              <KTSVG
                path='/media/icons/duotune/electronics/elc007.svg'
                className='svg-icon-2x me-1'
              />
              <span className='text-gray-800 fw-bold'>Networking</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-options'
              value='3'
              id='kt_form_options_3'
              checked={category === '3'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ${
                category === '3' ? 'active' : ''
              }`}
              htmlFor='kt_form_options_3'
            >
              <KTSVG
                path='/media/icons/duotune/ecommerce/ecm002.svg'
                className='svg-icon-2x me-1'
              />
              <span className='text-gray-800 fw-bold'>eCommerce</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-options'
              value='4'
              id='kt_form_options_4'
              checked={category === '4'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ${
                category === '4' ? 'active' : ''
              }`}
              htmlFor='kt_form_options_4'
            >
              <KTSVG path='/media/icons/duotune/general/gen032.svg' className='svg-icon-2x me-1' />
              <span className='text-gray-800 fw-bold'>Data Analysis</span>
            </label>
          </div>
          {/* end::Row */}
        </div>
        {/* end::Section */}

        {/* begin::Form Group */}
        <div className='mb-10'>
          <div className='d-flex justify-content-between mb-5'>
            <label className='fw-bold fs-3 text-dark'>Select An Option</label>
            <span className='fw-bold fs-6 text-muted'>Optional</span>
          </div>

          <select
            className='form-select form-select-lg form-select-solid fw-bold fs-6 text-gray-600 h-60px'
            data-control='select2'
            data-placeholder='Choose one'
            data-hide-search='true'
            onChange={(e) => setOption(e.target.value)}
            value={option}
            defaultValue='1'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        {/* end::Form Group */}

        {/* begin::Section */}
        <div className='mb-10'>
          <h3 className='fw-bold fs-3 text-dark  mb-5'>How Big Is Your Fleet?</h3>

          {/* begin::Row */}
          <div className='row' data-kt-control='toggle-buttons'>
            <input
              type='radio'
              className='btn-check'
              name='form-fleet'
              value='1'
              id='kt_form_fleet_1'
              onChange={(e) => setFleet(e.target.value)}
              checked={fleet === '1'}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ${
                fleet === '1' ? 'active' : ''
              }`}
              htmlFor='kt_form_fleet_1'
            >
              <span className='text-gray-800 fw-bold'>1-10</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-fleet'
              value='2'
              id='kt_form_fleet_2'
              onChange={(e) => setFleet(e.target.value)}
              checked={fleet === '2'}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ${
                fleet === '2' ? 'active' : ''
              }`}
              htmlFor='kt_form_fleet_2'
            >
              <span className='text-gray-800 fw-bold'>10-50</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-fleet'
              value='3'
              id='kt_form_fleet_3'
              onChange={(e) => setFleet(e.target.value)}
              checked={fleet === '3'}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ${
                fleet === '3' ? 'active' : ''
              }`}
              htmlFor='kt_form_fleet_3'
            >
              <span className='text-gray-800 fw-bold'>50-100</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-fleet'
              value='4'
              id='kt_form_fleet_4'
              onChange={(e) => setFleet(e.target.value)}
              checked={fleet === '4'}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ${
                fleet === '4' ? 'active' : ''
              }`}
              htmlFor='kt_form_fleet_4'
            >
              <span className='text-gray-800 fw-bold'>100-500</span>
            </label>

            <input
              type='radio'
              className='btn-check'
              name='form-fleet'
              value='5'
              id='kt_form_fleet_5'
              onChange={(e) => setFleet(e.target.value)}
              checked={fleet === '5'}
            />
            <label
              className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px ${
                fleet === '5' ? 'active' : ''
              }`}
              htmlFor='kt_form_fleet_5'
            >
              <span className='text-gray-800 fw-bold'>500+</span>
            </label>
          </div>
          {/* end::Row */}
        </div>
        {/* end::Section */}

        <div className='mb-10'>
          <a href='#' className='btn btn-primary px-11 py-4 fw-bolder fs-3'>
            Create Fleet
          </a>
        </div>
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {StatsWidget7}

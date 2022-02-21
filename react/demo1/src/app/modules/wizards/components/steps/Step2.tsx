import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Account Info</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='d-flex align-items-center form-label mb-3'>
          Specify Team Size
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide your team size to help us setup your billing'
          ></i>
        </label>

        <div className='row mb-2' data-kt-buttons='true'>
          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='1-1'
              id='kt_account_team_size_select_1'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_1'
            >
              <span className='fw-bolder fs-3'>1-1</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='2-10'
              id='kt_account_team_size_select_2'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_2'
            >
              <span className='fw-bolder fs-3'>2-10</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='10-50'
              id='kt_account_team_size_select_3'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_3'
            >
              <span className='fw-bolder fs-3'>10-50</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='50+'
              id='kt_account_team_size_select_4'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_4'
            >
              <span className='fw-bolder fs-3'>50+</span>
            </label>
          </div>
        </div>

        <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='form-label mb-3'>Team Account Name</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='accountName'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>

      <div className='mb-0 fv-row'>
        <label className='d-flex align-items-center form-label mb-5'>
          Select Account Plan
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Monthly billing will be based on your account plan'
          ></i>
        </label>

        <div className='mb-0'>
          <label className='d-flex flex-stack mb-5 cursor-pointer'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/finance/fin001.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Company Account
                </span>
                <span className='fs-6 fw-bold text-gray-400'>
                  Use images to enhance your post flow
                </span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='radio' name='accountPlan' value='1' />
            </span>
          </label>

          <label className='d-flex flex-stack mb-5 cursor-pointer'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/graphs/gra006.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Developer Account
                </span>
                <span className='fs-6 fw-bold text-gray-400'>Use images to your post time</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='radio' name='accountPlan' value='2' />
            </span>
          </label>

          <label className='d-flex flex-stack mb-0 cursor-pointer'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/graphs/gra008.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Testing Account
                </span>
                <span className='fs-6 fw-bold text-gray-400'>
                  Use images to enhance time travel rivers
                </span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='radio' name='accountPlan' value='3' />
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export {Step2}

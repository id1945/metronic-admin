/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {IDeactivateAccount, deactivateAccount} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const deactivateAccountSchema = Yup.object().shape({
  confirm: Yup.boolean().oneOf([true], 'Please check the box to deactivate your account'),
})

const DeactivateAccount: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const formik = useFormik<IDeactivateAccount>({
    initialValues: {
      ...deactivateAccount,
    },
    validationSchema: deactivateAccountSchema,
    onSubmit: () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      alert('Account has been successfully deleted!')
    },
  })

  return (
    <div className='card'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_deactivate'
        aria-expanded='true'
        aria-controls='kt_account_deactivate'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Deactivate Account</h3>
        </div>
      </div>

      <div id='kt_account_deactivate' className='collapse show'>
        <form onSubmit={formik.handleSubmit} id='kt_account_deactivate_form' className='form'>
          <div className='card-body border-top p-9'>
            <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6'>
              <KTSVG
                path='/media/icons/duotune/general/gen044.svg'
                className='svg-icon-2tx svg-icon-warning me-4'
              />

              <div className='d-flex flex-stack flex-grow-1'>
                <div className='fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>You Are Deactivating Your Account</h4>
                  <div className='fs-6 text-gray-600'>
                    For extra security, this requires you to confirm your email or phone number when
                    you reset yousignr password.
                    <br />
                    <a className='fw-bolder' href='#'>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='form-check form-check-solid fv-row'>
              <input
                className='form-check-input'
                type='checkbox'
                {...formik.getFieldProps('confirm')}
              />
              <label className='form-check-label fw-bold ps-2 fs-6' htmlFor='deactivate'>
                I confirm my account deactivation
              </label>
            </div>
            {formik.touched.confirm && formik.errors.confirm && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>{formik.errors.confirm}</div>
              </div>
            )}
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              id='kt_account_deactivate_account_submit'
              type='submit'
              className='btn btn-danger fw-bold'
            >
              {!loading && 'Deactivate Account'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {DeactivateAccount}

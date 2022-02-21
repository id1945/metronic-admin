/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IConnectedAccounts, connectedAccounts} from '../SettingsModel'

const ConnectedAccounts: React.FC = () => {
  const [data, setData] = useState<IConnectedAccounts>(connectedAccounts)

  const updateData = (fieldsToUpdate: Partial<IConnectedAccounts>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)

  const click = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_connected_accounts'
        aria-expanded='true'
        aria-controls='kt_account_connected_accounts'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Connected Accounts</h3>
        </div>
      </div>

      <div id='kt_account_connected_accounts' className='collapse show'>
        <div className='card-body border-top p-9'>
          <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6'>
            <KTSVG
              path='/media/icons/duotune/art/art006.svg'
              className='svg-icon-2tx svg-icon-primary me-4'
            />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <div className='fs-6 text-gray-600'>
                  Two-factor authentication adds an extra layer of security to your account. To log
                  in, in you'll need to provide a 4 digit amazing code.
                  <a href='#' className='fw-bolder'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='py-2'>
            <div className='d-flex flex-stack'>
              <div className='d-flex'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                  className='w-30px me-6'
                  alt=''
                />

                <div className='d-flex flex-column'>
                  <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Google
                  </a>
                  <div className='fs-6 fw-bold text-gray-400'>Plan properly your workflow</div>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <div className='form-check form-check-solid form-switch'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='googleswitch'
                    checked={data.google}
                    onChange={() =>
                      updateData({
                        google: !data.google,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='googleswitch'></label>
                </div>
              </div>
            </div>

            <div className='separator separator-dashed my-5'></div>

            <div className='d-flex flex-stack'>
              <div className='d-flex'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/github.svg')}
                  className='w-30px me-6'
                  alt=''
                />

                <div className='d-flex flex-column'>
                  <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Github
                  </a>
                  <div className='fs-6 fw-bold text-gray-400'>Keep eye on on your Repositories</div>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <div className='form-check form-check-solid form-switch'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='githubswitch'
                    checked={data.github}
                    onChange={() =>
                      updateData({
                        github: !data.github,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='githubswitch'></label>
                </div>
              </div>
            </div>

            <div className='separator separator-dashed my-5'></div>

            <div className='d-flex flex-stack'>
              <div className='d-flex'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/slack-icon.svg')}
                  className='w-30px me-6'
                  alt=''
                />

                <div className='d-flex flex-column'>
                  <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Slack
                  </a>
                  <div className='fs-6 fw-bold text-gray-400'>Integrate Projects Discussions</div>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <div className='form-check form-check-solid form-switch'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    checked={data.stack}
                    onChange={() =>
                      updateData({
                        stack: !data.stack,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='slackswitch'></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='card-footer d-flex justify-content-end py-6 px-9'>
          <button className='btn btn-white btn-active-light-primary me-2'>Discard</button>
          <button onClick={click} className='btn btn-primary'>
            {!loading && 'Save Changes'}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export {ConnectedAccounts}

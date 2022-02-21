import React, {useState} from 'react'
import {defaultSettings, ISettings} from './SettingsModel'

export function Settings() {
  const [data, setData] = useState<ISettings>(defaultSettings)
  const updateData = (fieldsToUpdate: Partial<ISettings>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  return (
    <div className='card'>
      {/* begin::Form*/}
      <form className='form d-flex flex-center'>
        <div className='card-body mw-800px py-20'>
          <div className='row'>
            <label className='col-xl-3'></label>
            <div className='col-lg-9 col-xl-6'>
              <h5 className='fw-bold mb-6'>Setup Email Notification:</h5>
            </div>
          </div>

          <div className='mb-5 row align-items-center mb-2'>
            <label className='col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end'>
              Email Notifications
            </label>
            <div className='col-lg-9 col-xl-6 d-flex align-items-center'>
              <div className='form-check form-check-custom form-check-solid form-switch'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={data.setupEmailNotifications.emailNotifications}
                  onChange={() =>
                    updateData({
                      setupEmailNotifications: {
                        ...data.setupEmailNotifications,
                        emailNotifications: !data.setupEmailNotifications.emailNotifications,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className='mb-5 row align-items-center'>
            <label className='col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end'>
              Send Copy To Personal Email
            </label>
            <div className='col-lg-9 col-xl-6'>
              <div className='form-check form-check-custom form-check-solid form-switch'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={data.setupEmailNotifications.sendCopyToPersonalEmail}
                  onChange={() =>
                    updateData({
                      setupEmailNotifications: {
                        ...data.setupEmailNotifications,
                        sendCopyToPersonalEmail:
                          !data.setupEmailNotifications.sendCopyToPersonalEmail,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className='separator my-10'></div>

          <div className='row'>
            <label className='col-xl-3'></label>
            <div className='col-lg-9 col-xl-6'>
              <h5 className='fw-bold mb-6'>Activity Related Emails:</h5>
            </div>
          </div>

          <div className='mb-8 row'>
            <label className='col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end'>
              When To Email
            </label>
            <div className='col-lg-9 col-xl-6'>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_1'
                  checked={data.activityRelatedEmail.whenToEmail.youHaveNewNotifications}
                  onChange={() =>
                    updateData({
                      activityRelatedEmail: {
                        ...data.activityRelatedEmail,
                        whenToEmail: {
                          ...data.activityRelatedEmail.whenToEmail,
                          youHaveNewNotifications:
                            !data.activityRelatedEmail.whenToEmail.youHaveNewNotifications,
                        },
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_1'>
                  You have new notifications
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_2'
                  checked={data.activityRelatedEmail.whenToEmail.youAreADirectMessage}
                  onChange={() =>
                    updateData({
                      activityRelatedEmail: {
                        ...data.activityRelatedEmail,
                        whenToEmail: {
                          ...data.activityRelatedEmail.whenToEmail,
                          youAreADirectMessage:
                            !data.activityRelatedEmail.whenToEmail.youAreADirectMessage,
                        },
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_2'>
                  You're sent a direct message
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_3'
                  checked={data.activityRelatedEmail.whenToEmail.someoneAddsYouAsAConnection}
                  onChange={() =>
                    updateData({
                      activityRelatedEmail: {
                        ...data.activityRelatedEmail,
                        whenToEmail: {
                          ...data.activityRelatedEmail.whenToEmail,
                          someoneAddsYouAsAConnection:
                            !data.activityRelatedEmail.whenToEmail.someoneAddsYouAsAConnection,
                        },
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_3'>
                  Someone adds you as a connection
                </label>
              </div>
            </div>
          </div>

          <div className='mb-8 row'>
            <label className='col-xl-3 col-lg-3 col-form-label fw-bold text-start  text-lg-end'>
              When To Escalate Emails
            </label>
            <div className='col-lg-9 col-xl-6'>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_4'
                  checked={data.activityRelatedEmail.whenToEscalateEmails.uponNewOrder}
                  onChange={() =>
                    updateData({
                      activityRelatedEmail: {
                        ...data.activityRelatedEmail,
                        whenToEscalateEmails: {
                          ...data.activityRelatedEmail.whenToEscalateEmails,
                          uponNewOrder:
                            !data.activityRelatedEmail.whenToEscalateEmails.uponNewOrder,
                        },
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_4'>
                  Upon new order
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_5'
                  checked={data.activityRelatedEmail.whenToEscalateEmails.newMembershipApproval}
                  onChange={() =>
                    updateData({
                      activityRelatedEmail: {
                        ...data.activityRelatedEmail,
                        whenToEscalateEmails: {
                          ...data.activityRelatedEmail.whenToEscalateEmails,
                          newMembershipApproval:
                            !data.activityRelatedEmail.whenToEscalateEmails.newMembershipApproval,
                        },
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_5'>
                  New membership approval
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_6'
                  checked={data.activityRelatedEmail.whenToEscalateEmails.memberRegistration}
                  onChange={() =>
                    updateData({
                      activityRelatedEmail: {
                        ...data.activityRelatedEmail,
                        whenToEscalateEmails: {
                          ...data.activityRelatedEmail.whenToEscalateEmails,
                          memberRegistration:
                            !data.activityRelatedEmail.whenToEscalateEmails.memberRegistration,
                        },
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_6'>
                  Member registration
                </label>
              </div>
            </div>
          </div>

          <div className='separator my-10'></div>

          <div className='row'>
            <label className='col-xl-3'></label>
            <div className='col-lg-9 col-xl-6'>
              <h5 className='fw-bold mb-6'>Updates From Keenthemes:</h5>
            </div>
          </div>

          <div className='mb-8 row'>
            <label className='col-xl-3 col-lg-3 col-form-label fw-bold text-start  text-lg-end'>
              Email You With
            </label>
            <div className='col-lg-9 col-xl-6'>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_7'
                  checked={data.updatesFromKeenthemes.newsAboutKTProducts}
                  onChange={() =>
                    updateData({
                      updatesFromKeenthemes: {
                        ...data.updatesFromKeenthemes,
                        newsAboutKTProducts: !data.updatesFromKeenthemes.newsAboutKTProducts,
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_7'>
                  News about Keenthemes products and feature updates
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_8'
                  checked={data.updatesFromKeenthemes.tipsOnGettingMore}
                  onChange={() =>
                    updateData({
                      updatesFromKeenthemes: {
                        ...data.updatesFromKeenthemes,
                        tipsOnGettingMore: !data.updatesFromKeenthemes.tipsOnGettingMore,
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_8'>
                  Tips on getting more out of Keen
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_9'
                  checked={data.updatesFromKeenthemes.thingsYouMissed}
                  onChange={() =>
                    updateData({
                      updatesFromKeenthemes: {
                        ...data.updatesFromKeenthemes,
                        tipsOnGettingMore: !data.updatesFromKeenthemes.thingsYouMissed,
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_9'>
                  Things you missed since you last logged into Keen
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='kt_checkbox_10'
                  checked={data.updatesFromKeenthemes.newsAboutKTPartners}
                  onChange={() =>
                    updateData({
                      updatesFromKeenthemes: {
                        ...data.updatesFromKeenthemes,
                        newsAboutKTPartners: !data.updatesFromKeenthemes.newsAboutKTPartners,
                      },
                    })
                  }
                />
                <label className='form-check-label fw-bold text-gray-600' htmlFor='kt_checkbox_10'>
                  News about Keenthemes on partner products and other services
                </label>
              </div>
            </div>
          </div>

          {/* begin::Form Group*/}
          <div className='mb-8 row pt-10'>
            <label className='col-lg-3 col-form-label'></label>
            <div className='col-lg-9'>
              <button type='reset' className='btn btn-primary fw-bolder px-6 py-3 me-3'>
                Save Changes
              </button>
              <button
                type='reset'
                className='btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3'
              >
                Cancel
              </button>
            </div>
          </div>
          {/* end::Form Group*/}
        </div>
      </form>
      {/* end::Form*/}
    </div>
  )
}

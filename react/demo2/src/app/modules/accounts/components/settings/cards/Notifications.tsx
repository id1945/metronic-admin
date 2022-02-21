import React, {useState} from 'react'
import {INotifications, notifications} from '../SettingsModel'

const Notifications: React.FC = () => {
  const [data, setData] = useState<INotifications>(notifications)

  const updateData = (fieldsToUpdate: Partial<INotifications>) => {
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
        data-bs-target='#kt_account_notifications'
        aria-expanded='true'
        aria-controls='kt_account_notifications'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Notifications</h3>
        </div>
      </div>

      <div id='kt_account_notifications' className='collapse show'>
        <form className='form'>
          <div className='card-body border-top px-9 pt-3 pb-4'>
            <div className='table-responsive'>
              <table className='table table-row-dashed border-gray-300 align-middle gy-6'>
                <tbody className='fs-6 fw-bold'>
                  <tr>
                    <td className='min-w-250px fs-4 fw-bolder'>Notifications</td>
                    <td className='w-125px'>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='kt_settings_notification_email'
                          defaultChecked={data.notifications.email}
                          onChange={() =>
                            updateData({
                              notifications: {
                                phone: data.notifications.phone,
                                email: !data.notifications.email,
                              },
                            })
                          }
                        />
                        <label
                          className='form-check-label ps-2'
                          htmlFor='kt_settings_notification_email'
                        >
                          Email
                        </label>
                      </div>
                    </td>
                    <td className='w-125px'>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='kt_settings_notification_phone'
                          defaultChecked={data.notifications.phone}
                          onChange={() =>
                            updateData({
                              notifications: {
                                phone: !data.notifications.phone,
                                email: data.notifications.email,
                              },
                            })
                          }
                        />
                        <label
                          className='form-check-label ps-2'
                          htmlFor='kt_settings_notification_phone'
                        >
                          Phone
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Billing Updates</td>
                    <td>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          id='billing1'
                          defaultChecked={data.billingUpdates.email}
                          onChange={() =>
                            updateData({
                              billingUpdates: {
                                phone: data.billingUpdates.phone,
                                email: !data.billingUpdates.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='billing1'></label>
                      </div>
                    </td>
                    <td>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='billing2'
                          defaultChecked={data.billingUpdates.phone}
                          onChange={() =>
                            updateData({
                              billingUpdates: {
                                phone: !data.billingUpdates.phone,
                                email: data.billingUpdates.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='billing2'></label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>New Team Members</td>
                    <td>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='team1'
                          defaultChecked={data.newTeamMembers.email}
                          onChange={() =>
                            updateData({
                              newTeamMembers: {
                                phone: data.newTeamMembers.phone,
                                email: !data.newTeamMembers.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='team1'></label>
                      </div>
                    </td>
                    <td>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='team2'
                          defaultChecked={data.newTeamMembers.phone}
                          onChange={() =>
                            updateData({
                              newTeamMembers: {
                                phone: !data.newTeamMembers.phone,
                                email: data.newTeamMembers.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='team2'></label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Completed Projects</td>
                    <td>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='project1'
                          defaultChecked={data.completeProjects.email}
                          onChange={() =>
                            updateData({
                              completeProjects: {
                                phone: data.completeProjects.phone,
                                email: !data.completeProjects.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='project1'></label>
                      </div>
                    </td>
                    <td>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='project2'
                          defaultChecked={data.completeProjects.phone}
                          onChange={() =>
                            updateData({
                              completeProjects: {
                                phone: !data.completeProjects.phone,
                                email: data.completeProjects.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='project2'></label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className='border-bottom-0'>Newsletters</td>
                    <td className='border-bottom-0'>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='newsletter1'
                          defaultChecked={data.newsletters.email}
                          onChange={() =>
                            updateData({
                              newsletters: {
                                phone: data.newsletters.phone,
                                email: !data.newsletters.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='newsletter1'></label>
                      </div>
                    </td>
                    <td className='border-bottom-0'>
                      <div className='form-check form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='newsletter2'
                          defaultChecked={data.newsletters.phone}
                          onChange={() =>
                            updateData({
                              newsletters: {
                                phone: !data.newsletters.phone,
                                email: data.newsletters.email,
                              },
                            })
                          }
                        />
                        <label className='form-check-label ps-2' htmlFor='newsletter2'></label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button className='btn btn-white btn-active-light-primary me-2'>Discard</button>
            <button type='button' onClick={click} className='btn btn-primary'>
              {!loading && 'Save Changes'}
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

export {Notifications}

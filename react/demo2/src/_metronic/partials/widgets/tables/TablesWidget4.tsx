/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget4: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>New Members</span>
          <span className='text-muted mt-1 fw-bold fs-7'>More than 400 new members</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_4_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_4_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_4_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_4_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/avatars/150-11.jpg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>Movie Creator</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/avatars/150-4.jpg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/avatars/150-5.jpg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Lebron Wayde
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>ReactJS Developer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/avatars/150-9.jpg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>Art Director</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_4_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/043-boy-18.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>Art Director</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>Movie Creator</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_4_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/047-girl-25.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Lebron Wayde
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>ReactJS Developer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-bold d-block fs-7'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-bold d-block fs-7'>Rating</span>
                      <div className='rating'>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2 checked'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-icon btn-light-twitter btn-sm me-3'>
                        <i className='bi bi-twitter fs-4'></i>
                      </a>
                      <a href='#' className='btn btn-icon btn-light-facebook btn-sm'>
                        <i className='bi bi-facebook fs-4'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget4}

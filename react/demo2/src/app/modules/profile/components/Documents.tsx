/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {Card4} from '../../../../_metronic/partials/content/cards/Card4'

export function Documents() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Documents
          <span className='fs-6 text-gray-400 fw-bold ms-1'>100+ resources</span>
        </h3>

        <div className='d-flex my-2'>
          <div className='d-flex align-items-center position-relative me-4'>
            <KTSVG
              path='/media/icons/duotune/general/gen021.svg'
              className='svg-icon-3 position-absolute ms-3'
            />
            <input
              type='text'
              id='kt_filter_search'
              className='form-control form-control-white form-control-sm w-150px ps-9'
              placeholder='Search'
            />
          </div>

          <a href='#' className='btn btn-primary btn-sm'>
            File Manager
          </a>
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/folder-document.svg'
            title='Finance'
            description='7 files'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/folder-document.svg'
            title='Customers'
            description='3 files'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/folder-document.svg'
            title='CRM Project'
            description='25 files'
          />
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/pdf.svg' title='Project Reqs..' description='3 days ago' />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/doc.svg' title='CRM App Docs..' description='3 days ago' />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/css.svg'
            title='User CRUD Styles'
            description='4 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/ai.svg' title='Metronic Logo' description='5 days ago' />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/sql.svg' title='Orders backup' description='1 week ago' />
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/xml.svg'
            title='UTAIR CRM API Co..'
            description='2 week ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/tif.svg'
            title='Tower Hill App..'
            description='3 week ago'
          />
        </div>
      </div>
    </>
  )
}

import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {usePageData} from '../../../core/PageData'

const DefaultTitle: FC = () => {
  const {pageTitle, pageBreadcrumbs} = usePageData()
  return (
    <div
      data-kt-swapper='true'
      data-kt-swapper-mode='prepend'
      data-kt-swapper-parent="{default: '#kt_docs_content_container', 'lg': '#kt_docs_header_title'}"
      className='docs-page-title d-flex flex-column flex-lg-row align-items-lg-center py-5 mb-lg-0'
    >
      {/* begin::Title */}
      {/* {pageTitle && ( */}
      <h1 className='d-flex align-items-center text-dark my-1 fs-4'>
        Documentation
        <Link
          to='/docs/getting-started'
          className='badge badge-success bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2'
        >
          {process.env.REACT_APP_VERSION}
        </Link>
      </h1>
      {/* )} */}
      {/* end::Title */}

      {pageBreadcrumbs && pageBreadcrumbs.length > 0 && (
        <>
          <span className='d-none d-lg-block bullet h-20px w-1px bg-secondary mx-4'></span>

          <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-6 my-1'>
            {Array.from(pageBreadcrumbs).map((item, index) => (
              <li className='breadcrumb-item text-gray-60' key={`bc${index}`}>
                {!item.isSeparator ? (
                  <span className='text-gray-600'>{item.title}</span>
                ) : (
                  <span className='bullet bg-gray-200 w-5px h-2px'></span>
                )}
              </li>
            ))}
            <li className='breadcrumb-item text-dark'>{pageTitle}</li>
          </ul>
        </>
      )}
    </div>
  )
}

export {DefaultTitle}

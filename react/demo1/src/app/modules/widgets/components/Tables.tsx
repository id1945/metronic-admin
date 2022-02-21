import React, {FC} from 'react'
import {
  TablesWidget1,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
  TablesWidget5,
  TablesWidget6,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
  TablesWidget10,
  TablesWidget11,
  TablesWidget12,
  TablesWidget13,
} from '../../../../_metronic/partials/widgets'

const Tables: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget1 className='card-xl-stretch mb-xl-8'></TablesWidget1>
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget3 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget4 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget5 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget6 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget7 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget8 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      <TablesWidget9 className='mb-5 mb-xl-8' />

      <TablesWidget10 className='mb-5 mb-xl-8' />

      <TablesWidget11 className='mb-5 mb-xl-8' />

      <TablesWidget12 className='mb-5 mb-xl-8' />

      <TablesWidget13 className='mb-5 mb-xl-8' />
    </>
  )
}

export {Tables}

import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../helpers'
import {Item1} from '../../content/activity/Item1'
import {Item2} from '../../content/activity/Item2'
import {Item3} from '../../content/activity/Item3'
import {Item4} from '../../content/activity/Item4'
import {Item5} from '../../content/activity/Item5'
import {Item6} from '../../content/activity/Item6'
import {Item7} from '../../content/activity/Item7'
import {Item8} from '../../content/activity/Item8'

const ActivityDrawer: FC = () => (
  <div
    id='kt_activities'
    className='bg-white'
    data-kt-drawer='true'
    data-kt-drawer-name='activities'
    data-kt-drawer-activate='true'
    data-kt-drawer-overlay='true'
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction='end'
    data-kt-drawer-toggle='#kt_activities_toggle'
    data-kt-drawer-close='#kt_activities_close'
  >
    <div className='card shadow-none rounded-0'>
      <div className='card-header' id='kt_activities_header'>
        <h3 className='card-title fw-bolder text-dark'>Activity Logs</h3>

        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
            id='kt_activities_close'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </button>
        </div>
      </div>
      <div className='card-body position-relative' id='kt_activities_body'>
        <div
          id='kt_activities_scroll'
          className='position-relative scroll-y me-n5 pe-5'
          data-kt-scroll='true'
          data-kt-scroll-height='auto'
          data-kt-scroll-wrappers='#kt_activities_body'
          data-kt-scroll-dependencies='#kt_activities_header, #kt_activities_footer'
          data-kt-scroll-offset='5px'
        >
          <div className='timeline'>
            <Item1 />
            <Item2 />
            <Item3 />
            <Item4 />
            <Item5 />
            <Item6 />
            <Item7 />
            <Item8 />
          </div>
        </div>
      </div>
      <div className='card-footer py-5 text-center' id='kt_activities_footer'>
        <Link to='/crafted/pages/profile' className='btn btn-bg-white text-primary'>
          View All Activities
          <KTSVG
            path='/media/icons/duotune/arrows/arr064.svg'
            className='svg-icon-3 svg-icon-primary'
          />
        </Link>
      </div>
    </div>
  </div>
)

export {ActivityDrawer}

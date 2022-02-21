import React, {useRef, useEffect} from 'react'
import {useLocation} from 'react-router'
import {AsideMenuDocs} from './AsideMenuDocs'
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ToggleComponent,
} from '../../../assets/ts/components'

const AsideMenu: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const {pathname} = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
      DrawerComponent.reinitialization()
      ToggleComponent.reinitialization()
      ScrollComponent.reinitialization()
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div
      ref={scrollRef}
      className='hover-scroll-overlay-y mt-5 mb-5 mt-lg-0 mb-lg-5 pe-lg-n2 me-lg-2'
      id='kt_docs_aside_menu_wrapper'
      data-kt-scroll='true'
      data-kt-scroll-activate='{default: false, lg: true}'
      data-kt-scroll-height='auto'
      data-kt-scroll-dependencies='#kt_docs_aside_logo'
      data-kt-scroll-wrappers='#kt_docs_aside_menu'
      data-kt-scroll-offset='10px'
    >
      <div
        id='#kt_docs_aside_menu'
        data-kt-menu='true'
        className='menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'
      >
        <AsideMenuDocs />
      </div>
    </div>
  )
}

export {AsideMenu}

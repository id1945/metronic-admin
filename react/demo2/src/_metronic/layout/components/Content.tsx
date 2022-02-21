import React, {useEffect} from 'react'
import {useLocation} from 'react-router'
import clsx from 'clsx'
import {DrawerComponent} from '../../assets/ts/components'

const Content: React.FC = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div id='kt_content_container' className={clsx('content flex-row-fluid')}>
      {children}
    </div>
  )
}

export {Content}

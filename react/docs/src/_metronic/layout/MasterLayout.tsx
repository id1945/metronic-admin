import React from 'react'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {MasterInit} from './MasterInit'
import {PageDataProvider} from './core'
import {ExploreMain} from '../partials'

const MasterLayout: React.FC = ({children}) => {
  return (
    <PageDataProvider>
      <div className='docs-page d-flex flex-row flex-column-fluid'>
        <AsideDefault />
        <div className='docs-wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />

          <div id='kt_docs_content' className='docs-content d-flex flex-column flex-column-fluid'>
            <Content>{children}</Content>
          </div>
          <Footer />
        </div>
      </div>
      <ScrollTop />
      <ExploreMain />
      <MasterInit />
    </PageDataProvider>
  )
}

export {MasterLayout}

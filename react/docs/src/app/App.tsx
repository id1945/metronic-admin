import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {LayoutProvider} from '../_metronic/layout/core'
import {DocsPage} from './DocsPage'
import {MasterLayout} from '../_metronic/layout/MasterLayout'

type Props = {
  basename: string
}

const App: React.FC<Props> = ({basename}) => {
  return (
    <BrowserRouter basename={basename}>
      <LayoutProvider>
        <MasterLayout>
          <DocsPage />
        </MasterLayout>
      </LayoutProvider>
    </BrowserRouter>
  )
}

export {App}

import React, {FC, Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../_metronic/partials'
import {DocsPage} from './DocsPage'

const Routes: FC = () => {
  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/docs' component={DocsPage} />
        <Redirect exact from='/' to='/docs' />
        <Redirect to='error' />
      </Switch>
    </Suspense>
  )
}

export {Routes}

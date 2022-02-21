import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'
import {AccountHeader} from './AccountHeader'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/crafted/account/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AccountPage: React.FC = () => {
  return (
    <>
      <AccountHeader />
      <Switch>
        <Route path='/crafted/account/overview'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
          <Overview />
        </Route>
        <Route path='/crafted/account/settings'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
          <Settings />
        </Route>

        <Redirect from='/crafted/account' exact={true} to='/crafted/account/overview' />
        <Redirect to='/crafted/account/overview' />
      </Switch>
    </>
  )
}

export default AccountPage

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import {FC} from 'react'
import {CodeBlock} from '../../_metronic/partials'

const CreatePage: FC = () => (
  <>
    <h1 className='anchor fw-bolder mb-2' id='how-to'>
      <a href='#how-to'></a>How to create a custom page
    </h1>
    <div className='pt-5'>
      <span>
        Here is the example on how to create your own page and add it to the left side menu and
        breadcrumbs.
      </span>
      <ol className='pt-5'>
        <li>
          <span>
            Create page component <code>src/app/pages/MyPage.tsx</code>.
          </span>
          <CodeBlock code={codeComponent} language='tsx' />
        </li>
        <li>
          <span>
            Update <code>Update src/app/routing/PrivateRoutes.tsx</code>.
          </span>
          <CodeBlock code={routingCode} language='tsx' />
        </li>
        <li>
          <span>
            Add menu item to <b>Header Menu</b>{' '}
            <code>src/_metronic/layout/components/header/MenuInner.tsx</code>.
          </span>
          <CodeBlock code={headerMenu} language='tsx' />
        </li>
        <li>
          <span>
            Add menu item to <b>Aside Menu</b>{' '}
            <code>src/_metronic/layout/components/aside/AsideMenuMain.tsx</code>.
          </span>
          <CodeBlock code={asideMenu} language='tsx' />
        </li>
      </ol>
    </div>
  </>
)

const codeComponent = `import React from "react";
                  
export function MyPage() {
    return <h1>Hello!</h1>
}`

const routingCode = `
import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
+ import {MyPage} from "../pages/MyPage";

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        +<Route path="/my-page" component={MyPage} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}`

const headerMenu = `+<MenuItem title='My Page' to='/my-page' />`

const asideMenu = `+<AsideMenuItem to="/my-page" title="My Page" />`

export {CreatePage}

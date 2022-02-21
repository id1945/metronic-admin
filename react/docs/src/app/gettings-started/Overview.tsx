/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export function Overview() {
  const {REACT_APP_THEME_NAME} = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          React makes it painless to create interactive UIs. Design simple views for each state in
          your application, and React will efficiently update and render just the right components
          when your data changes. Declarative views make your code more predictable and easier to
          debug.
        </div>
        <div className='py-5'>
          Build encapsulated components that manage their own state, then compose them to make
          complex UIs. Since component logic is written in TypeScript instead of templates, you can
          easily pass rich data through your app and keep state out of the DOM.
        </div>
      </div>
      <div className='pt-0'>
        <h1 className='anchor fw-bolder mb-5' id='files-structure'>
          <a href='#files-structure'></a>Files Structure
        </h1>
        <div className='py-5'>
          <table className='table table-hover table-rounded table-striped border gy-7 gs-7'>
            <thead>
              <tr>
                <th>Path</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  /<strong>build</strong>
                </td>
                <td>
                  The built output. Run command <code>yarn build</code> to build it.
                </td>
              </tr>
              <tr>
                <td>
                  /<strong>node_modules</strong>
                </td>
                <td>
                  The <code>package.json</code> file in the app root defines what libraries will be
                  installed into <code>node_modules/</code> when you run <code>yarn install</code>.
                </td>
              </tr>
              <tr>
                <td>
                  /<strong>public</strong>
                </td>
                <td>
                  Folder contains the index.html file so you can tweak it, Change
                  <code>&lt;title&gt;</code>, insert additional
                  <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> tags. For more details
                  check{' '}
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://facebook.github.io/create-react-app/docs/using-the-public-folder#docsNav'
                  >
                    official documentation
                  </a>
                  . Also in '/public/media' folder you able to find all images/icons/SVGs and
                  <code>Splash Screen</code> styles.
                </td>
              </tr>
              <tr>
                <td>
                  /<strong>src</strong>
                </td>
                <td>
                  Your app lives in the src folder. All React components, styles and anything else
                  your app needs go here.
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  /src/<strong>_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  /src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/<strong>assets</strong>
                </td>
                <td>
                  Contains the {REACT_APP_THEME_NAME} common parts: ts(Layout ts helpers),
                  plugins(icons plugins), sass(common style structure).
                </td>
              </tr>
              <tr>
                <td>
                  /src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/<strong>helpers</strong>
                </td>
                <td>Contains shared utils which are used by all application modules.</td>
              </tr>
              <tr>
                <td>
                  /src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/<strong>partials</strong>
                </td>
                <td>Contains shared components which are used by all application modules.</td>
              </tr>
              {/* <tr>
                <td>
                  /src/_{REACT_APP_THEME_NAME.toLocaleLowerCase()}/<strong>i18n</strong>
                </td>
                <td>
                  Contains{" "}
                  <a
                    href="https://github.com/formatjs/react-intl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code>react-intl</code>
                  </a>{" "}
                  implementations.
                </td>
              </tr> */}
              <tr>
                <td colSpan={2}>
                  /src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/<strong>layout</strong>
                </td>
              </tr>
              <tr>
                <td>
                  /src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/layout/
                  <strong>core</strong>
                </td>
                <td>
                  Contains Layout core logic which is based on React.Context. Also includes layout
                  configuration file(DefaultThemeConfig.ts).
                </td>
              </tr>
              <tr>
                <td>
                  /src/_{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/layout/
                  <strong>components</strong>
                </td>
                <td>Contains Layout components(Layout, Header, Aside, Footer...).</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  /src/<strong>app</strong>
                </td>
              </tr>
              <tr>
                <td>
                  /src/app/<strong>modules</strong>
                </td>
                <td>
                  Contains application{' '}
                  <a
                    href='https://en.reactjs.org/docs/code-splitting.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    lazy
                  </a>{' '}
                  modules (Authorization, Docs, User profile, Errors examples...)
                </td>
              </tr>
              <tr>
                <td>
                  /src/app/<strong>pages</strong>
                </td>
                <td>Contains application pages (Dashboard pages, Layout Builder page...)</td>
              </tr>
              <tr>
                <td>
                  /src/app/<strong>App.tsx</strong>
                </td>
                <td>
                  is the application entry point. Also contain main Routing. Application routing is
                  based on{' '}
                  <a
                    href='https://reacttraining.com/react-router/web'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    React Routing.
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  /src/app/routing/<strong>PublicRoutes.tsx</strong>
                </td>
                <td>Public routes entry point. (Pages are available for unauthorized users)</td>
              </tr>
              <tr>
                <td>
                  /src/app/routing/<strong>PrivateRoutes.tsx</strong>
                </td>
                <td>Private routes entry point. (Pages are unavailable for unauthorized users)</td>
              </tr>
              <tr>
                <td>
                  /src/app/<strong>setup</strong>
                </td>
                <td>
                  Contains redux setup(rootReducer, store), axios setup and{' '}
                  <a
                    href='https://github.com/ctimmerm/axios-mock-adapter'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    mock adapter
                  </a>{' '}
                  setup.
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  /src/<strong>index.tsx</strong>
                </td>
                <td>The TypeScript entry point.</td>
              </tr>
              <tr>
                <td>
                  _{REACT_APP_THEME_NAME?.toLocaleLowerCase()}/assets/scss/
                  <strong>style.scss</strong>
                </td>
                <td>Styles entry point.</td>
              </tr>
              <tr>
                <td>package.json</td>
                <td>
                  A package.json file contains meta data about app or module. Most importantly, it
                  includes the list of dependencies to install from npm when running npm install.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

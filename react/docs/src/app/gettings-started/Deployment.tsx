/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

const {REACT_APP_THEME_NAME, REACT_APP_DEMO_NUMBER} = process.env

export function Deployment() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='deployment'>
          <a href='#deployment'></a>Deployment
        </h1>
        <div className='py-5'>
          <span>
            As the example of application URL: <code>https://example.com/my/app</code>
          </span>
          <ol className='pt-4'>
            <li>
              <span>
                Setup <b>baseURL</b> via <code>homepage</code> entry in <code>package.json</code>.
              </span>
              <CodeBlock language='json' code={baseUrlCode} />
            </li>
            <li>
              <span>Run build..</span>
              <CodeBlock language='bash' code='yarn build' />
            </li>
          </ol>
        </div>
      </div>
      <div className='pt-1'>
        <h1 className='anchor fw-bolder mb-5' id='serve-production-mode'>
          <a href='#serve-production-mode'></a>Serve production mode
        </h1>
        <div className='py-5'>
          <span>
            As the example of application URL: <code>http://localhost:5000</code>.
          </span>
          <ol className='pt-4'>
            <li>
              <span>
                Setup <b>baseURL</b> via <code>homepage</code> entry in <code>package.json</code>.
              </span>
              <CodeBlock language='json' code={baseUrlCode} />
            </li>
            <li>
              <span>Run build..</span>
              <CodeBlock language='bash' code='yarn build' />
            </li>
            <li>
              <span>
                For environments using <code>Node</code>, the easiest way to handle this would be to
                install <code>serve</code> and let it handle the rest::
              </span>
              <CodeBlock code='yarn global add serve' language='bash' /> or{' '}
              <CodeBlock code='npm i serve -g' language='bash' />
              <span>Start runner:</span>
              <CodeBlock code='serve -s build -l 5000' language='bash' />
            </li>
            <li>
              <span>
                Open <code>http://localhost:5000</code> URL in your browser.
              </span>
            </li>
          </ol>
        </div>
        <div className='py-5'>
          Host react application on Apache server setup:{' '}
          <a
            href='https://gist.github.com/ywwwtseng/63c36ccb58a25a09f7096bbb602ac1de'
            target='_blank'
            rel='noopener noreferrer'
          >
            CRA Apache setup
          </a>
        </div>
        <div className='py-5'>
          <span>
            Our {REACT_APP_THEME_NAME} React application is based on <b>Create React App</b>. For
            more detailed information of the CRA, visit the official Create React App{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://create-react-app.dev/docs/deployment'
            >
              documentation website
            </a>
            .
          </span>
        </div>
      </div>
    </>
  )
}

const baseUrlCode = `
- "homepage": "/${REACT_APP_THEME_NAME}/react/${REACT_APP_DEMO_NUMBER}",
+ "homepage": "/my/app",
`

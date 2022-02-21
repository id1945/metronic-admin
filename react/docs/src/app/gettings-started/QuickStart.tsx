/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'
import {KTSVG} from '../../_metronic/helpers'

export function QuickStart() {
  const {REACT_APP_THEME_NAME, REACT_APP_PORT} = process.env
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>React Quick Start
        </h1>
        <div className='py-5'>
          <ol>
            <li>
              <h4>Install dependencies:</h4>
              <CodeBlock language='bash' code='yarn install' /> or
              <CodeBlock language='bash' code='npm install' />
            </li>
            <li>
              <h4>Run dev server:</h4>
              <CodeBlock language='bash' code='yarn start' /> or
              <CodeBlock language='bash' code='npm start' />
            </li>
            <li>
              <h4>
                Open the link:{' '}
                <a href={`http://localhost:${REACT_APP_PORT}/`} target='_blank'>
                  http://localhost:{REACT_APP_PORT}/
                </a>
              </h4>
            </li>
          </ol>
        </div>
        <div className='py-5'>
          Our {REACT_APP_THEME_NAME} React application is based on <b>Create React App</b>. For more
          detailed information of the CRA, visit the official Create React App{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://create-react-app.dev/docs/getting-started'
          >
            documentation website
          </a>
          .
        </div>
      </div>
      <div className='d-flex align-items-center rounded py-5 px-5 bg-light-danger'>
        <KTSVG
          path='/media/icons/duotune/general/gen044.svg'
          className='svg-icon-3x svg-icon-danger me-5'
        />
        <div className='text-gray-700 fw-bold fs-6'>
          Warning: Use <b>LTS</b> version of <b>NodeJS</b>.
        </div>
      </div>
    </>
  )
}

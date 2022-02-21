/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function MockBackend() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-2' id='mock-backend'>
          <a href='#mock-backend'></a>Mock Back-end
        </h1>
        <div className='py-5'>
          <span>
            We use <code>axios-mock-adapter</code> for demo purpose, it intercepts{' '}
            <code>axios</code> requests and redirects to mocked handlers.
          </span>
        </div>
        <div className='py-5'>
          <span>
            For more info on the library:{' '}
            <a href='https://github.com/ctimmerm/axios-mock-adapter' target='_blank'>
              https://github.com/ctimmerm/axios-mock-adapter
            </a>
            .
          </span>
        </div>
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-2' id='how-to-switch'>
          <a href='#how-to-switch'></a>How switching to the Real REST API
        </h1>
        <div className='py-5'>
          <span>
            Remove mock initialization in <code>src/index.tsx</code>:
          </span>
        </div>
        <CodeBlock code={code} language='tsx' />
      </div>
    </>
  )
}

const code = `/**
* Website public url.
*
* @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
*/
const { PUBLIC_URL } = process.env;
-/**
- * Mock API, use return "mock" variable to add new mocks.
- *
- * @see https://github.com/ctimmerm/axios-mock-adapter
- */
-/* const mock = */_redux.mockAxios(axios);

/**
* Inject Start interceptors for axios.`

import {FC} from 'react'

const Error500: FC = () => {
  return (
    <>
      <h1 className='fw-bolder fs-4x text-gray-700 mb-10'>System Error</h1>

      <div className='fw-bold fs-3 text-gray-400 mb-15'>
        Something went wrong! <br /> Please try again later.
      </div>
    </>
  )
}

export {Error500}

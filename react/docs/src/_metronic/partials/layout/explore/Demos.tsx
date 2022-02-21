import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

const Demos: FC = () => (
  <div className='mb-0'>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo1</h3>
      <div className='overlay overflow-hidden border border-4 border-primary p-2 rounded'>
        <div className='overlay-wrapper rounded'>
          <img src={toAbsoluteUrl('/media/demos/demo1.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <a
            href={`${process.env.REACT_APP_PREVIEW_REACT_URL}/demo1`}
            className='btn btn-primary shadow'
          >
            Preview
          </a>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo2</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo2.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo3</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo3.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo4</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo4.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo5</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo5.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo6</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo6.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo7</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo7.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo8</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo8.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo9</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img src={toAbsoluteUrl('/media/demos/demo9.png')} alt='demo' className='w-100 rounded' />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo10</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img
            src={toAbsoluteUrl('/media/demos/demo10.png')}
            alt='demo'
            className='w-100 rounded'
          />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo11</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img
            src={toAbsoluteUrl('/media/demos/demo11.png')}
            alt='demo'
            className='w-100 rounded'
          />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo12</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img
            src={toAbsoluteUrl('/media/demos/demo12.png')}
            alt='demo'
            className='w-100 rounded'
          />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo13</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img
            src={toAbsoluteUrl('/media/demos/demo13.png')}
            alt='demo'
            className='w-100 rounded'
          />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo14</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img
            src={toAbsoluteUrl('/media/demos/demo14.png')}
            alt='demo'
            className='w-100 rounded'
          />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
    <div className='mb-7'>
      <h3 className='fw-bold text-center mb-3'>Demo15</h3>
      <div className='overlay overflow-hidden border border-4 p-2 rounded'>
        <div className='overlay-wrapper'>
          <img
            src={toAbsoluteUrl('/media/demos/demo15.png')}
            alt='demo'
            className='w-100 rounded'
          />
        </div>
        <div className='overlay-layer bg-dark bg-opacity-10'>
          <div className='badge badge-white px-6 py-4 fw-bold fs-base shadow'>Coming soon</div>
        </div>
      </div>
    </div>
  </div>
)

export {Demos}

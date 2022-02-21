/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React, {useState} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {KTSVG, toAbsoluteUrl} from '../../_metronic/helpers'
import {CodeBlock} from '../../_metronic/partials'
import {DuotuneIconList} from './DuotuneModels'
import {DItem} from './IconModels'

export function DuotuneIcons() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [icon, setIcon] = useState<DItem | undefined>()
  const [isSvg, setIsSvg] = useState<boolean>(false)
  const {REACT_APP_THEME_NAME} = process.env
  const closeItem = () => {
    setIcon(undefined)
    setIsSvg(false)
    setIsVisible(false)
  }
  const setItem = (item: DItem, isSvg: boolean) => {
    setIcon(item)
    setIsSvg(isSvg)
    setIsVisible(true)
  }

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          Use over 1000 high quality vector duotune SVG icons as image or inline SVG element in
          combination with any <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; elements.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='image-usage'>
          <a href='#image-usage'></a>Image Usage
        </h1>
        <div className='py-5'>
          Use svg icons as image with <code>&lt;img&gt;</code>tag as shown below:
        </div>
        <div className='py-5'>
          <div className='rounded border d-flex flex-wrap p-10'>
            <img
              src={toAbsoluteUrl('/media/icons/duotune/abstract/abs001.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/arrows/arr001.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/communication/com003.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/coding/cod001.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/communication/com001.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/files/fil005.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/coding/cod001.svg')}
              className='h-40px me-10'
            />
            <img
              src={toAbsoluteUrl('/media/icons/duotune/files/fil001.svg')}
              className='h-40px me-10'
            />
            <img src={toAbsoluteUrl('/media/icons/duotune/graphs/gra004.svg')} className='h-40px' />
          </div>
        </div>
        <CodeBlock code={code} language='tsx' />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='inline-usage'>
          <a href='#inline-usage'></a>Inline Usage
        </h1>
        <div className='py-5'>
          Use svg icons as inline svg element in order to customize the icon size and color via CSS:
        </div>
        <div className='py-5'>
          <div className='rounded border d-flex flex-wrap p-10'>
            <KTSVG
              path='/media/icons/duotune/abstract/abs001.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/arrows/arr001.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/communication/com003.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/coding/cod001.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/communication/com001.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/files/fil005.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/coding/cod001.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/files/fil001.svg'
              className='svg-icon svg-icon-3x me-10'
            />
            <KTSVG
              path='/media/icons/duotune/graphs/gra004.svg'
              className='svg-icon svg-icon-3x me-10'
            />
          </div>
        </div>
        <CodeBlock language='tsx' code={code2} />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-3' id='icon-colors'>
          <a href='#icon-colors'></a>Icon Colors
        </h1>
        <div className='py-5'>
          The inline icons can be colored using
          <code>.svg-icon-{`{color}`}</code>class that defined with
          <code>$theme-text-colors</code>variable in
          <code>sass/_variables.scss</code>:
        </div>

        <div className='py-5'>
          <div className='rounded border d-flex flex-wrap p-10'>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon bg-dark svg-icon-3x svg-icon-white me-10'
              />
              <div className='fw-bold py-2'>white</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-primary me-10'
              />
              <div className='fw-bold py-2'>primary</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-secondary me-10'
              />
              <div className='fw-bold py-2'>secondary</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-light me-10'
              />
              <div className='fw-bold py-2'>light</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-success me-10'
              />
              <div className='fw-bold py-2'>success</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-info me-10'
              />
              <div className='fw-bold py-2'>info</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-warning me-10'
              />
              <div className='fw-bold py-2'>warning</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-danger me-10'
              />
              <div className='fw-bold py-2'>danger</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-dark me-10'
              />
              <div className='fw-bold py-2'>dark</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-muted me-10'
              />
              <div className='fw-bold py-2'>muted</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-100 me-10'
              />
              <div className='fw-bold py-2'>gray-100</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-200 me-10'
              />
              <div className='fw-bold py-2'>gray-200</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-300 me-10'
              />
              <div className='fw-bold py-2'>gray-300</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-400 me-10'
              />
              <div className='fw-bold py-2'>gray-400</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-500 me-10'
              />
              <div className='fw-bold py-2'>gray-500</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-600 me-10'
              />
              <div className='fw-bold py-2'>gray-600</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-700 me-10'
              />
              <div className='fw-bold py-2'>gray-700</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-800 me-10'
              />

              <div className='fw-bold py-2'>gray-800</div>
            </div>
            <div className='d-flex flex-column flex-center w-150px me-10 mb-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen006.svg'
                className='svg-icon svg-icon-3x svg-icon-gray-900 me-10'
              />
              <div className='fw-bold py-2'>gray-900</div>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='tsx' />
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='listing'>
          <a href='#listing'></a>Icons Listing
        </h1>
        <div className='py-10'>
          {DuotuneIconList.map((list, index) => (
            <div key={`k${index}`}>
              <h3 className='fw-bold text-dark mb-7'>{list.name}</h3>
              <div className='rounded border p-10 mb-20'>
                {splittedBy3(list.items).map((tripit, i) => {
                  return (
                    <div key={`r${index}-${i}`} className='row'>
                      {tripit.map((icon, j) => (
                        <div
                          className='col-md-6 col-lg-4 d-flex align-items-stretch'
                          key={`ri${index}-${i}-${j}`}
                        >
                          <div className='d-flex flex-grow-1 bg-hover-light py-6 px-6 rounded overlay'>
                            <div className='d-flex flex-grow-1 align-items-center overlay-wrapper'>
                              <div className='mr-4 flex-shrink-0 text-lef w-40px'>
                                <KTSVG
                                  path={icon.path}
                                  className='svg-icon svg-icon-muted svg-icon-2hx'
                                />
                              </div>
                              <div className='text-muted'>{icon.name}</div>
                            </div>
                            <div className='overlay-layer overlay bg-gray-500 bg-opacity-25 rounded d-flex svg-icon'>
                              <a
                                className='btn btn-primary fw-bold py-2 px-4 fs-7 me-3'
                                onClick={() => setItem(icon, false)}
                              >
                                Use as Img
                              </a>
                              <a
                                className='btn btn-primary fw-bold py-2 fs-7 px-4'
                                onClick={() => setItem(icon, true)}
                              >
                                Or inline SVG
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <IconModal isVisible={isVisible} icon={icon} isSvg={isSvg} onHide={() => closeItem()} />
    </>
  )
}

const splittedBy3 = (list: Array<DItem>): Array<Array<DItem>> => {
  const result: Array<Array<DItem>> = []
  let buffer: Array<DItem> = []
  list.forEach((el, index) => {
    if (index % 3 === 0) {
      if (index !== 0) {
        result.push(buffer)
      }
      buffer = []
    }

    buffer.push(el)
  })
  return result
}

const code = `<img
  src={toAbsoluteUrl('/media/icons/duotune/abstract/abs001.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/arrows/arr001.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/communication/com003.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/coding/cod001.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/communication/com001.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/files/fil005.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/coding/cod001.svg')}
  className='h-40px me-10'
/>
<img
  src={toAbsoluteUrl('/media/icons/duotune/files/fil001.svg')}
  className='h-40px me-10'
/>
<img src={toAbsoluteUrl('/media/icons/duotune/graphs/gra004.svg')} className='h-40px' />`

const code2 = `<KTSVG
  path='/media/icons/duotune/abstract/abs001.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/arrows/arr001.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/communication/com003.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/coding/cod001.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/communication/com001.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/files/fil005.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/coding/cod001.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/files/fil001.svg'
  className='svg-icon svg-icon-3x me-10'
/>
<KTSVG
  path='/media/icons/duotune/graphs/gra004.svg'
  className='svg-icon svg-icon-3x me-10'
/>`

const code3 = `<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon bg-dark svg-icon-3x svg-icon-white"
  />
  <div className="fw-bold py-2">white</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-primary"
  />
  <div className="fw-bold py-2">primary</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-secondary"
  />
  <div className="fw-bold py-2">secondary</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-light"
  />
  <div className="fw-bold py-2">light</div>
</div>
  <div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-success"
  />
  <div className="fw-bold py-2">success</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-info"
  />
  <div className="fw-bold py-2">info</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-warning"
  />
  <div className="fw-bold py-2">warning</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-danger"
  />
  <div className="fw-bold py-2">danger</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-dark"
  />
  <div className="fw-bold py-2">dark</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-muted"
  />
  <div className="fw-bold py-2">muted</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-100"
  />
  <div className="fw-bold py-2">gray-100</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-200"
  />
  <div className="fw-bold py-2">gray-200</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-300"
  />
  <div className="fw-bold py-2">gray-300</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-400"
  />
  <div className="fw-bold py-2">gray-400</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-500"
  />
  <div className="fw-bold py-2">gray-500</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-600"
  />
  <div className="fw-bold py-2">gray-600</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-700"
  />
  <div className="fw-bold py-2">gray-700</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-800"
  />

  <div className="fw-bold py-2">gray-800</div>
</div>
<div className="d-flex flex-column flex-center w-150px me-10 mb-5">
  <KTSVG
    path="/media/icons/duotune/general/gen006.svg"
    className="svg-icon svg-icon-3x svg-icon-gray-900"
  />
  <div className="fw-bold py-2">gray-900</div>
</div>`

type Props = {
  isVisible: boolean
  icon?: DItem
  onHide: () => void
  isSvg: boolean
}

const IconModal: React.FC<Props> = ({isVisible, icon, onHide, isSvg = true}) => {
  return (
    <Modal show={isVisible} onHide={onHide} dialogClassName='modal-dialog-centered'>
      <div className='modal-content'>
        <div className='modal-header py-5'>
          <h5 className='modal-title m-0'>{icon?.name}</h5>
          <div
            className='btn btn-active-color-primary ms-2 px-0'
            data-bs-dismiss='modal'
            aria-label='Close'
            onClick={onHide}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon svg-icon-1' />
          </div>
        </div>
        <div className='modal-body py-2'>
          <pre className='bg-light bg-opacity-75 rounded p-5'>
            {isSvg &&
              icon &&
              `<KTSVG path="${icon.path}" className="svg-icon-muted svg-icon-2hx" />`}
            {!isSvg && icon && `<img src={toAbsoluteUrl("${icon.path}")} />`}
          </pre>
        </div>
        <div className='modal-footer py-5'>
          <button type='button' className='btn btn-light' onClick={onHide}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

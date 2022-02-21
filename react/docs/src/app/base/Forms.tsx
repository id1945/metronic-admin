/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {Link} from 'react-router-dom'
import {CodeBlock} from '../../_metronic/partials'

export function Forms() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
    REACT_APP_SASS_VARIABLES_PATH,
  } = process.env

  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/forms/overview/`} className='fw-bold'>
            Bootstrap Forms
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options for the form
          elements in
          <code>{REACT_APP_SASS_PATH}/forms/</code>.
        </div>
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom-form-control'>
          <a href='#custom-form-control'></a>Custom Form Control
        </h1>
        <div className='py-5'>
          Use <code>.form-control-solid</code>class with
          <code>.form-control</code>to set solid background style for a form control:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <label className='form-label'>Default input</label>
              <input type='text' className='form-control' placeholder='name@example.com' />
            </div>
            <div className='mb-10'>
              <label className='form-label'>Solid background style</label>
              <input
                type='text'
                className='form-control form-control-solid'
                placeholder='name@example.com'
              />
            </div>
            <div className='mb-10'>
              <label className='form-label'>White background style</label>
              <input
                type='text'
                className='form-control form-control-white'
                placeholder='name@example.com'
              />
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom-form-control'>
          <a href='#custom-form-control'></a>Flush Form Control
        </h1>
        <div className='py-5'>
          Use
          <code>.form-control-flush</code>class with
          <code>.form-control</code>to remove the default background-color, borders, and rounded
          corners of a form input.
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Example
              </label>
              <input
                type='email'
                className='form-control form-control-flush'
                placeholder='Example input'
              />
            </div>
          </div>
          <CodeBlock language='markup' code={code2} />
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom-form-control'>
          <a href='#form-labels'></a>Form Labels
        </h1>
        <div className='py-5'>
          Use <code>.required</code> class with <code>.form-label</code> or any custom element to
          indicate input's mandatory status:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Example
              </label>
              <input
                type='email'
                className='form-control form-control-solid'
                placeholder='Example input'
              />
            </div>
          </div>
          <CodeBlock language='markup' code={code3} />
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom-form-select'>
          <a href='#custom-form-select'></a>Custom Form Select
        </h1>
        <div className='py-5'>
          Use
          <code>.form-select-solid</code>class with
          <code>.form-select</code>to set solid background style for a form select:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Default select
              </label>
              <select className='form-select' aria-label='Select example'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
            <div className='mb-10'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Solid background style
              </label>
              <select className='form-select form-select-solid' aria-label='Select example'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
            <div className='mb-10'>
              <label htmlFor='exampleFormControlTextarea1' className='form-label'>
                White background style
              </label>
              <select className='form-select form-select-white' aria-label='Select example'>
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code4} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom-checkbox-and-radio'>
          <a href='#custom-checkbox-and-radio'></a>Custom Checkbox &amp; Radio
        </h1>
        <div className='py-5'>
          Use
          <code>.form-check-custom</code>and
          <code>.form-check-solid</code>class with
          <code>.form-check</code>to set custom layout with solid background style for a form check:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Default checkbox
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckChecked'
                  checked={true}
                  onChange={() => {}}
                />
                <label className='form-check-label' htmlFor='flexCheckChecked'>
                  Checked checkbox
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  disabled={true}
                  id='flexCheckDisabled'
                />
                <label className='form-check-label' htmlFor='flexCheckDisabled'>
                  Disabled checkbox
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid'>
                <input className='form-check-input' type='radio' value='' id='flexRadioDefault' />
                <label className='form-check-label' htmlFor='flexRadioDefault'>
                  Default radio
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='radio'
                  value=''
                  id='flexRadioChecked'
                  checked={true}
                  onChange={() => {}}
                />
                <label className='form-check-label' htmlFor='flexRadioChecked'>
                  Checked radio
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='radio'
                  value=''
                  disabled={true}
                  id='flexRadioDisabled'
                />
                <label className='form-check-label' htmlFor='flexRadioDisabled'>
                  Disabled radio
                </label>
              </div>
            </div>
            <CodeBlock language='markup' code={code5} />
          </div>
        </div>

        <div className='pt-10 pb-5'>
          Use
          <code>.form-check-{`{sm, lg}`}</code>fixed size classes for checkbox and radio to change
          their sizes:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid form-check-lg'>
                <input className='form-check-input' type='checkbox' value='' id='flexCheckboxLg' />
                <label className='form-check-label' htmlFor='flexCheckboxLg'>
                  Large checkbox
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid form-check-lg'>
                <input className='form-check-input' type='radio' value='' id='flexCheckboxSm' />
                <label className='form-check-label' htmlFor='flexCheckboxSm'>
                  Large radio
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid form-check-sm'>
                <input className='form-check-input' type='checkbox' value='' id='flexRadioLg' />
                <label className='form-check-label' htmlFor='flexRadioLg'>
                  Small checkbox
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-check-custom form-check-solid form-check-sm'>
                <input className='form-check-input' type='radio' value='' id='flexRadioSm' />
                <label className='form-check-label' htmlFor='flexRadioSm'>
                  Small radio
                </label>
              </div>
            </div>
            <CodeBlock language='markup' code={code6} />
          </div>
        </div>

        <div className='pt-15 pb-5'>
          Use{' '}
          <Link className='fw-bold' to='/docs/utilities#width-and-height' target='_blank'>
            Custom Size Classes
          </Link>
          &nbsp; for checkbox and radio to set custom sizes:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10 d-flex'>
              <div className='form-check form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-30px w-30px'
                  type='checkbox'
                  value=''
                  id='flexCheckbox30'
                />
                <label className='form-check-label' htmlFor='flexCheckbox30'>
                  40px
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-40px w-40px'
                  type='checkbox'
                  value=''
                  id='flexCheckbox40'
                />
                <label className='form-check-label' htmlFor='flexCheckbox40'>
                  40px
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-50px w-50px'
                  type='checkbox'
                  value=''
                  id='flexCheckbox50'
                />
                <label className='form-check-label' htmlFor='flexCheckbox50'>
                  50px
                </label>
              </div>
            </div>
            <div className='mb-10 d-flex'>
              <div className='form-check form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-30px w-30px'
                  type='radio'
                  value=''
                  id='flexRadio30'
                />
                <label className='form-check-label' htmlFor='flexRadio30'>
                  40px
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-40px w-40px'
                  type='radio'
                  value=''
                  id='flexRadio40'
                />
                <label className='form-check-label' htmlFor='flexRadio40'>
                  40px
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-50px w-50px'
                  type='radio'
                  value=''
                  id='flexRadio50'
                />
                <label className='form-check-label' htmlFor='flexRadio50'>
                  50px
                </label>
              </div>
            </div>
            <CodeBlock language='markup' code={code7} />
          </div>
        </div>
      </div>
      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='custom-switch'>
          <a href='#custom-switch'></a>Custom Switch
        </h1>
        <div className='py-5'>
          Use
          <code>.form-check-custom</code>and
          <code>.form-check-solid</code>class with
          <code>.form-switch</code>to set custom layout with solid background style for a form
          switch:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10'>
              <div className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexSwitchDefault'
                />
                <label className='form-check-label' htmlFor='flexSwitchDefault'>
                  Default switch
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexSwitchChecked'
                  checked={true}
                  onChange={() => {}}
                />
                <label className='form-check-label' htmlFor='flexSwitchChecked'>
                  Checked switch
                </label>
              </div>
            </div>
            <div className='mb-10'>
              <div className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexSwitchDisabled'
                  disabled={true}
                  checked={true}
                  onChange={() => {}}
                />
                <label className='form-check-label' htmlFor='flexSwitchDisabled'>
                  Disabled switch
                </label>
              </div>
            </div>
            <CodeBlock language='markup' code={code8} />
          </div>
        </div>

        <div className='pt-15 pb-5'>
          Use{' '}
          <Link className='fw-bold' to='/docs/utilities#width-and-height' target='_blank'>
            Custom Size Classes
          </Link>
          &nbsp; for switches to set custom sizes:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='mb-10 d-flex'>
              <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-20px w-30px'
                  type='checkbox'
                  value=''
                  id='flexSwitch20x30'
                />
                <label className='form-check-label' htmlFor='flexSwitch20x30'>
                  20px x 30px
                </label>
              </div>
              <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-30px w-50px'
                  type='checkbox'
                  value=''
                  id='flexSwitch30x50'
                />
                <label className='form-check-label' htmlFor='flexSwitch30x50'>
                  30px X 50px
                </label>
              </div>
              <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                <input
                  className='form-check-input h-40px w-60px'
                  type='checkbox'
                  value=''
                  id='flexSwitch40x60'
                />
                <label className='form-check-label' htmlFor='flexSwitch40x60'>
                  40px X 60px
                </label>
              </div>
            </div>
            <CodeBlock language='markup' code={code9} />
          </div>
        </div>
      </div>
    </>
  )
}

const code = `<div className="mb-10">
  <label className="form-label">Default input</label>
  <input
    type="text"
    className="form-control"
    placeholder="name@example.com"
  />
  </div>
  <div className="mb-10">
  <label className="form-label">Solid background style</label>
  <input
    type="text"
    className="form-control form-control-solid"
    placeholder="name@example.com"
  />
  </div>
  <div className="mb-10">
  <label className="form-label">White background style</label>
  <input
    type="text"
    className="form-control form-control-white"
    placeholder="name@example.com"
  />
</div>
`

const code2 = `<input type="email" className="form-control form-control-flush" placeholder="Example input"/>`

const code3 = `<div class="mb-10">
    <label for="exampleFormControlInput1" class="required form-label">Example</label>
    <input type="email" class="form-control form-control-solid" placeholder="Example input"/>
</div>`

const code4 = `<select className="form-select" aria-label="Select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select className="form-select form-select-solid" aria-label="Select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select className="form-select form-select-white" aria-label="Select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`

const code5 = `<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="checked" />
      <label className="form-check-label" for="flexCheckChecked">
          Checked checkbox
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value="" disabled id="flexCheckDisabled" />
      <label className="form-check-label" for="flexCheckDisabled">
          Disabled checkbox
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="radio" value="" id="flexRadioDefault"/>
      <label className="form-check-label" for="flexRadioDefault">
          Default radio
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="radio" value="" id="flexRadioChecked" checked="checked" />
      <label className="form-check-label" for="flexRadioChecked">
          Checked radio
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="radio" value="" disabled id="flexRadioDisabled"/>
      <label className="form-check-label" for="flexRadioDisabled">
          Disabled radio
      </label>
  </div>
</div>`

const code6 = `<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid form-check-lg">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckboxLg"/>
      <label className="form-check-label" for="flexCheckboxLg">
          Large checkbox
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid form-check-lg">
      <input className="form-check-input" type="radio" value="" id="flexCheckboxSm"  />
      <label className="form-check-label" for="flexCheckboxSm">
          Large radio
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid form-check-sm">
      <input className="form-check-input" type="checkbox" value="" id="flexRadioLg"/>
      <label className="form-check-label" for="flexRadioLg">
          Small checkbox
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-check-custom form-check-solid form-check-sm">
      <input className="form-check-input" type="radio" value="" id="flexRadioSm"  />
      <label className="form-check-label" for="flexRadioSm">
          Small radio
      </label>
  </div>
</div>`

const code7 = `<div className="mb-10 d-flex">
  <div className="form-check form-check-custom form-check-solid me-10">
      <input className="form-check-input h-30px w-30px" type="checkbox" value="" id="flexCheckbox30"/>
      <label className="form-check-label" for="flexCheckbox30">
          40px
      </label>
  </div>

  <div className="form-check form-check-custom form-check-solid me-10">
      <input className="form-check-input h-40px w-40px" type="checkbox" value="" id="flexCheckbox40"/>
      <label className="form-check-label" for="flexCheckbox40">
          40px
      </label>
  </div>

  <div className="form-check form-check-custom form-check-solid me-10">
      <input className="form-check-input h-50px w-50px" type="checkbox" value="" id="flexCheckbox50"/>
      <label className="form-check-label" for="flexCheckbox50">
          50px
      </label>
  </div>
</div>

<div className="mb-10 d-flex">
  <div className="form-check form-check-custom form-check-solid me-10">
      <input className="form-check-input h-30px w-30px" type="radio" value="" id="flexRadio30"/>
      <label className="form-check-label" for="flexRadio30">
          40px
      </label>
  </div>

  <div className="form-check form-check-custom form-check-solid me-10">
      <input className="form-check-input h-40px w-40px" type="radio" value="" id="flexRadio40"/>
      <label className="form-check-label" for="flexRadio40">
          40px
      </label>
  </div>

  <div className="form-check form-check-custom form-check-solid me-10">
      <input className="form-check-input h-50px w-50px" type="radio" value="" id="flexRadio50"/>
      <label className="form-check-label" for="flexRadio50">
          50px
      </label>
  </div>
</div>`

const code8 = `<div className="mb-10">
  <div className="form-check form-switch form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault"/>
      <label className="form-check-label" for="flexSwitchDefault">
          Default switch
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-switch form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value="" id="flexSwitchChecked" checked="checked" />
      <label className="form-check-label" for="flexSwitchChecked">
          Checked switch
      </label>
  </div>
</div>

<div className="mb-10">
  <div className="form-check form-switch form-check-custom form-check-solid">
      <input className="form-check-input" type="checkbox" value="" id="flexSwitchDisabled" disabled checked="checked" />
      <label className="form-check-label" for="flexSwitchDisabled">
          Disabled switch
      </label>
  </div>
</div>`

const code9 = `<div className="form-check form-switch form-check-custom form-check-solid me-10">
  <input className="form-check-input h-20px w-30px" type="checkbox" value="" id="flexSwitch20x30"/>
  <label className="form-check-label" for="flexSwitch20x30">
      20px x 30px
  </label>
</div>

<div className="form-check form-switch form-check-custom form-check-solid me-10">
  <input className="form-check-input h-30px w-50px" type="checkbox" value="" id="flexSwitch30x50"/>
  <label className="form-check-label" for="flexSwitch30x50">
      30px X 50px
  </label>
</div>

<div className="form-check form-switch form-check-custom form-check-solid me-10">
  <input className="form-check-input h-40px w-60px" type="checkbox" value="" id="flexSwitch40x60"/>
  <label className="form-check-label" for="flexSwitch40x60">
      40px X 60px
  </label>
</div>`

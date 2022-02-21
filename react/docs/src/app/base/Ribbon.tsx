/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Ribbon() {
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>

        <div className='py-5'>
          Ribbon is a custom micro element that can be used on a card element for additional flair.
        </div>
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>

        <div className='py-5'>
          Use the <code>.ribbon</code> class within the <code>.card-header</code> element of a{' '}
          <code>.card</code> component. Then add the ribbon content within the{' '}
          <code>.card-header</code>. This example uses a simple ribbon on a card component.
        </div>

        <div className='py-5'>
          <div className='card card-bordered'>
            <div className='card-header ribbon'>
              <div className='card-title'>Ribbon Example</div>
              <div className='ribbon-label bg-primary'>Ribbon</div>
            </div>
            <div className='card-body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#rounded-corners'></a>Rounded Corners
        </h1>

        <div className='py-5'>
          Add <code>.ribbon-[direction]</code> to add rounded corners on the specified ribbon edge.
          The direction options are <code>start</code>, <code>end</code>, <code>topand</code>{' '}
          bottom.
        </div>

        <div className='py-5'>
          Please note that the ribbon may overlap your card title, so align your titles accordingly.
        </div>

        <div className='py-5'>
          <div className='row row-cols-1 row-cols-lg-3 g-9'>
            <div className='col'>
              <div className='card card-bordered'>
                <div className='card-header ribbon ribbon-end'>
                  <div className='ribbon-label bg-primary'>Ribbon</div>
                  <div className='card-title'>Ribbon Example</div>
                </div>

                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-bordered'>
                <div className='card-header ribbon ribbon-top'>
                  <div className='ribbon-label bg-primary'>Ribbon</div>
                  <div className='card-title'>Ribbon Example</div>
                </div>

                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-bordered'>
                <div className='card-header justify-content-end ribbon ribbon-start'>
                  <div className='ribbon-label bg-primary'>Ribbon</div>
                  <div className='card-title'>Ribbon Example</div>
                </div>

                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#vertical-ribbons'></a>Vertical Ribbons
        </h1>

        <div className='py-5'>
          Add <code>.ribbon-vertical</code> together with <code>.ribbon-top</code> to add a vertical
          ribbon.
        </div>

        <div className='py-5'>
          <div className='row row-cols-1 row-cols-lg-2 g-9'>
            <div className='col'>
              <div className='card card-bordered'>
                <div className='card-header ribbon ribbon-top ribbon-vertical'>
                  <div className='ribbon-label bg-danger'>OK!</div>
                  <div className='card-title'>Ribbon Example</div>
                </div>
                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card borcard-borderedder'>
                <div className='card-header ribbon ribbon-top ribbon-vertical'>
                  <div className='ribbon-label bg-success'>
                    <i className='bi bi-heart-fill fs-2 text-white'></i>
                  </div>
                  <div className='card-title'>Ribbon Example</div>
                </div>
                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#clip-ribbons'></a>Clip Ribbons
        </h1>

        <div className='py-5'>
          Add <code>.ribbon-clip</code> and <code>.ribbon-inner</code> to add a clip style ribbon
          edge.
        </div>

        <div className='py-5'>
          <div className='row row-cols-1 row-cols-lg-2 g-9'>
            <div className='col'>
              <div className='card card-bordered'>
                <div className='card-header ribbon ribbon-end ribbon-clip'>
                  <div className='ribbon-label'>
                    Ribbon
                    <span className='ribbon-inner bg-info'></span>
                  </div>
                  <div className='card-title'>Ribbon Example</div>
                </div>
                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-bordered'>
                <div className='card-header justify-content-end ribbon ribbon-start ribbon-clip'>
                  <div className='ribbon-label'>
                    Ribbon
                    <span className='ribbon-inner bg-success'></span>
                  </div>
                  <div className='card-title'>Ribbon Example</div>
                </div>
                <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>
    </>
  )
}

const code = `<div className='rounded border p-10'>
  <div className="card card-bordered">
    <div className="card-header ribbon">
      <div className="card-title">Ribbon Example</div>
      <div className="ribbon-label bg-primary">Ribbon</div>
    </div>
    <div className="card-body">
      ...
    </div>
  </div>
</div>`

const code2 = `<div className="card card-bordered">
  <div className="card-header ribbon ribbon-end">
    <div className="ribbon-label bg-primary">Ribbon</div>
    <div className="card-title">Ribbon Example</div>
  </div>

  <div className="card-body">
    ...
  </div>
</div>

<div className="card card-bordered">
  <div className="card-header ribbon ribbon-top">
    <div className="ribbon-label bg-primary">Ribbon</div>
    <div className="card-title">Ribbon Example</div>
  </div>

  <div className="card-body">
    ...
  </div>
</div>

<div className="card card-bordered">
  <div className="card-header justify-content-end ribbon ribbon-start">
    <div className="ribbon-label bg-primary">Ribbon</div>
    <div className="card-title">Ribbon Example</div>
  </div>

  <div className="card-body">
    ...
  </div>
</div>`

const code3 = `<div className="card card-bordered">
  <div className="card-header ribbon ribbon-top ribbon-vertical">
    <div className="ribbon-label bg-danger">
      OK!
    </div>
    <div className="card-title">Ribbon Example</div>
  </div>
  <div className="card-body">
    ...
  </div>
</div>

<div className="card borcard-borderedder">
  <div className="card-header ribbon ribbon-top ribbon-vertical">
    <div className="ribbon-label bg-success">
      <i className="bi bi-heart-fill fs-2 text-white"></i>
    </div>
    <div className="card-title">Ribbon Example</div>
  </div>
  <div className="card-body">
    ...
  </div>
</div>`

const code4 = `<div className="card card-bordered">
  <div className="card-header ribbon ribbon-end ribbon-clip">
    <div className="ribbon-label">
      Ribbon
      <span className="ribbon-inner bg-info"></span>
    </div>
    <div className="card-title">Ribbon Example</div>
  </div>
  <div className="card-body">
    ...
  </div>
</div>

<div className="card card-bordered">
  <div className="card-header justify-content-end ribbon ribbon-start ribbon-clip">
    <div className="ribbon-label">
      Ribbon
      <span className="ribbon-inner bg-success"></span>
    </div>
    <div className="card-title">Ribbon Example</div>
  </div>
  <div className="card-body">
    ...
  </div>
</div>`

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'
import {KTSVG} from '../../_metronic/helpers'

export function Accordion() {
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
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/accordion/`} className='fw-bold'>
            Bootstrap Accordion
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_accordion.scss</code>.
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic'>
          <a href='#basic'></a>Basic Example
        </h1>

        <div className='py-5'>
          Click the accordions below to expand/collapse the accordion content.
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='accordion' id='kt_accordion_1'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='kt_accordion_1_header_1'>
                  <button
                    className='accordion-button fs-4 fw-bold collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#kt_accordion_1_body_1'
                    aria-expanded='false'
                    aria-controls='kt_accordion_1_body_1'
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id='kt_accordion_1_body_1'
                  className='accordion-collapse collapse'
                  aria-labelledby='kt_accordion_1_header_1'
                  data-bs-parent='#kt_accordion_1'
                >
                  <div className='accordion-body'>
                    <strong>This is the first item's accordion body.</strong>It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='kt_accordion_1_header_2'>
                  <button
                    className='accordion-button fs-4 fw-bold collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#kt_accordion_1_body_2'
                    aria-expanded='false'
                    aria-controls='kt_accordion_1_body_2'
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id='kt_accordion_1_body_2'
                  className='accordion-collapse collapse'
                  aria-labelledby='kt_accordion_1_header_2'
                  data-bs-parent='#kt_accordion_1'
                >
                  <div className='accordion-body'>
                    <strong>This is the second item's accordion body.</strong>It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='kt_accordion_1_header_3'>
                  <button
                    className='accordion-button fs-4 fw-bold collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#kt_accordion_1_body_3'
                    aria-expanded='false'
                    aria-controls='kt_accordion_1_body_3'
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id='kt_accordion_1_body_3'
                  className='accordion-collapse collapse'
                  aria-labelledby='kt_accordion_1_header_3'
                  data-bs-parent='#kt_accordion_1'
                >
                  <div className='accordion-body'>
                    <strong>This is the third item's accordion body.</strong>It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='animated-icon'>
          <a href='#animated-icon'></a>Animated Icon
        </h1>

        <div className='py-5'>
          Add
          <code>.accordion-icon-toggle</code>class to add toggle based animated icon in header:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='accordion accordion-icon-toggle' id='kt_accordion_2'>
              <div className='mb-5'>
                <div
                  className='accordion-header py-3 d-flex'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_accordion_2_item_1'
                >
                  <span className='accordion-icon'>
                    <KTSVG
                      className='svg-icon svg-icon-4'
                      path='/media/icons/duotune/arrows/arr064.svg'
                    />
                  </span>
                  <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>Accordion Item #1</h3>
                </div>
                <div
                  id='kt_accordion_2_item_1'
                  className='fs-6 collapse show ps-10'
                  data-bs-parent='#kt_accordion_2'
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
              <div className='mb-5'>
                <div
                  className='accordion-header py-3 d-flex collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_accordion_2_item_2'
                >
                  <span className='accordion-icon'>
                    <KTSVG
                      className='svg-icon svg-icon-4'
                      path='/media/icons/duotune/arrows/arr064.svg'
                    />
                  </span>
                  <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>Accordion Item #2</h3>
                </div>
                <div
                  id='kt_accordion_2_item_2'
                  className='collapse fs-6 ps-10'
                  data-bs-parent='#kt_accordion_2'
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
              <div className='mb-5'>
                <div
                  className='accordion-header py-3 d-flex collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_accordion_2_item_3'
                >
                  <span className='accordion-icon'>
                    <KTSVG
                      className='svg-icon svg-icon-4'
                      path='/media/icons/duotune/arrows/arr064.svg'
                    />
                  </span>
                  <h3 className='fs-4 text-gray-800 fw-bold mb-0 ms-4'>Accordion Item #3</h3>
                </div>
                <div
                  id='kt_accordion_2_item_3'
                  className='collapse fs-6 ps-10'
                  data-bs-parent='#kt_accordion_2'
                >
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
    </>
  )
}

const code = `<div className="accordion" id="kt_accordion_1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="kt_accordion_1_header_1">
      <button
        className="accordion-button fs-4 fw-bold collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_accordion_1_body_1"
        aria-expanded="false"
        aria-controls="kt_accordion_1_body_1"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="kt_accordion_1_body_1"
      className="accordion-collapse collapse"
      aria-labelledby="kt_accordion_1_header_1"
      data-bs-parent="#kt_accordion_1"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong>It
        is hidden by default, until the collapse plugin adds the
        appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any
        of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go
        within the
        <code>.accordion-body</code>, though the transition does
        limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="kt_accordion_1_header_2">
      <button
        className="accordion-button fs-4 fw-bold collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_accordion_1_body_2"
        aria-expanded="false"
        aria-controls="kt_accordion_1_body_2"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="kt_accordion_1_body_2"
      className="accordion-collapse collapse"
      aria-labelledby="kt_accordion_1_header_2"
      data-bs-parent="#kt_accordion_1"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong>It
        is hidden by default, until the collapse plugin adds the
        appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any
        of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go
        within the
        <code>.accordion-body</code>, though the transition does
        limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="kt_accordion_1_header_3">
      <button
        className="accordion-button fs-4 fw-bold collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_accordion_1_body_3"
        aria-expanded="false"
        aria-controls="kt_accordion_1_body_3"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="kt_accordion_1_body_3"
      className="accordion-collapse collapse"
      aria-labelledby="kt_accordion_1_header_3"
      data-bs-parent="#kt_accordion_1"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong>It
        is hidden by default, until the collapse plugin adds the
        appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any
        of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go
        within the
        <code>.accordion-body</code>, though the transition does
        limit overflow.
      </div>
    </div>
  </div>
</div>`

const code2 = `<div className="accordion accordion-icon-toggle" id="kt_accordion_2">
  <div className="mb-5">
    <div
      className="accordion-header py-3 d-flex"
      data-bs-toggle="collapse"
      data-bs-target="#kt_accordion_2_item_1"
    >
      <span className="accordion-icon">
        <KTSVG
          className="svg-icon svg-icon-4"
          path="/media/icons/duotune/arrows/arr064.svg"
        />
      </span>
      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
        Accordion Item #1
      </h3>
    </div>
    <div
      id="kt_accordion_2_item_1"
      className="fs-6 collapse show ps-10"
      data-bs-parent="#kt_accordion_2"
    >
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
  </div>
  <div className="mb-5">
    <div
      className="accordion-header py-3 d-flex collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#kt_accordion_2_item_2"
    >
      <span className="accordion-icon">
        <KTSVG
          className="svg-icon svg-icon-4"
          path="/media/icons/duotune/arrows/arr064.svg"
        />
      </span>
      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
        Accordion Item #2
      </h3>
    </div>
    <div
      id="kt_accordion_2_item_2"
      className="collapse fs-6 ps-10"
      data-bs-parent="#kt_accordion_2"
    >
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
  </div>
  <div className="mb-5">
    <div
      className="accordion-header py-3 d-flex collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#kt_accordion_2_item_3"
    >
      <span className="accordion-icon">
        <KTSVG
          className="svg-icon svg-icon-4"
          path="/media/icons/duotune/arrows/arr064.svg"
        />
      </span>
      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
        Accordion Item #3
      </h3>
    </div>
    <div
      id="kt_accordion_2_item_3"
      className="collapse fs-6 ps-10"
      data-bs-parent="#kt_accordion_2"
    >
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
  </div>
</div>`

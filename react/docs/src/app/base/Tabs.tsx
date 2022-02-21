/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Tabs() {
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
          <a
            href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/navs-tabs/#tabs`}
            className='fw-bold'
          >
            Bootstrap Tabs
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/_nav.scss</code>.
        </div>
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='line-tabs'>
          <a href='#line-tabs'></a>Line Tabs
        </h1>
        <div className='py-5'>
          To use a custom Line Tabs style just add
          <code>.nav-line-tabs</code>class as shown below:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
              <li className='nav-item'>
                <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_1'>
                  Link 1
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_2'>
                  Link 2
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
                  Link 3
                </a>
              </li>
            </ul>
            <div className='tab-content' id='myTabContent'>
              <div className='tab-pane fade active show' id='kt_tab_pane_1' role='tabpanel'>
                Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat
                qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam
                sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure
                incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do
                nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
              </div>
              <div className='tab-pane fade' id='kt_tab_pane_2' role='tabpanel'>
                Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim
                reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud
                ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat
                sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris
                nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat
                dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum
                officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
              </div>
              <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
                Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor
                esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem
                esse mollit dolore anim cupidatat. eserunt officia id Lorem nostrud aute id commodo
                elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum
                excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim.
                Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum
                labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet.
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='line-tabs-2x'>
          <a href='#line-tabs-2x'></a>Line Tabs 2x
        </h1>

        <div className='py-5'>
          Add
          <code>.nav-line-tabs-2x</code>class to us a line tab with 2px border width:
        </div>

        <div className='py-5'>
          <div className='rounded border p-10'>
            <ul className='nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6'>
              <li className='nav-item'>
                <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_4'>
                  Link 1
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_5'>
                  Link 2
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_6'>
                  Link 3
                </a>
              </li>
            </ul>
            <div className='tab-content' id='myTabContent'>
              <div className='tab-pane fade show active' id='kt_tab_pane_4' role='tabpanel'>
                Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat
                qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam
                sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure
                incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do
                nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
              </div>
              <div className='tab-pane fade' id='kt_tab_pane_5' role='tabpanel'>
                Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim
                reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud
                ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat
                sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris
                nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat
                dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum
                officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
              </div>
              <div className='tab-pane fade' id='kt_tab_pane_6' role='tabpanel'>
                Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor
                esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem
                esse mollit dolore anim cupidatat. eserunt officia id Lorem nostrud aute id commodo
                elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum
                excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim.
                Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum
                labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet.
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div className='pt-10'>
        <h1 className='anchor fw-bolder mb-5' id='card-tabs'>
          <a href='#card-tabs'></a>Card Tabs
        </h1>
        <div className='py-5'>
          Add
          <code>.nav-stretch</code>class to use line tabs in card header:
        </div>
        <div className='py-5'>
          <div className='rounded border p-10'>
            <div className='card card-custom shadow'>
              <div className='card-header card-header-stretch'>
                <h3 className='card-title'>Title</h3>
                <div className='card-toolbar'>
                  <ul className='nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0'>
                    <li className='nav-item'>
                      <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_7'>
                        Link 1
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_8'>
                        Link 2
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_9'>
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='card-body'>
                <div className='tab-content' id='myTabContent'>
                  <div className='tab-pane fade show active' id='kt_tab_pane_7' role='tabpanel'>
                    Et et consectetur ipsum labore excepteur est proident excepteur ad velit
                    occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim
                    pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua
                    ullamco irure incididunt irure non esse consectetur nostrud minim non minim
                    occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor
                    dolor ipsum in qui sit.
                  </div>
                  <div className='tab-pane fade' id='kt_tab_pane_8' role='tabpanel'>
                    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim
                    reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum.
                    Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse
                    dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip
                    ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit
                    magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo
                    nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo
                    ea sit eu.
                  </div>
                  <div className='tab-pane fade' id='kt_tab_pane_9' role='tabpanel'>
                    Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor
                    esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui
                    Lorem esse mollit dolore anim cupidatat. eserunt officia id Lorem nostrud aute
                    id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud
                    tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore
                    cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum
                    laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud
                    labore eiusmod et amet.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>
    </>
  )
}

const code = `   <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
  <li className="nav-item">
    <a
      className="nav-link active"
      data-bs-toggle="tab"
      href="#kt_tab_pane_1"
    >
      Link 1
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_2"
    >
      Link 2
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_3"
    >
      Link 3
    </a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div
    className="tab-pane fade active show"
    id="kt_tab_pane_1"
    role="tabpanel"
  >
    Et et consectetur ipsum labore excepteur est proident excepteur
    ad velit occaecat qui minim occaecat veniam. Fugiat veniam
    incididunt anim aliqua enim pariatur veniam sunt est aute sit
    dolor anim. Velit non irure adipisicing aliqua ullamco irure
    incididunt irure non esse consectetur nostrud minim non minim
    occaecat. Amet duis do nisi duis veniam non est eiusmod tempor
    incididunt tempor dolor ipsum in qui sit.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
    irure officia enim reprehenderit. Magna duis labore cillum sint
    adipisicing exercitation ipsum. Nostrud ut anim non exercitation
    velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint
    velit ullamco magna consequat voluptate minim amet aliquip ipsum
    aute laboris nisi. Labore labore veniam irure irure ipsum
    pariatur mollit magna in cupidatat dolore magna irure esse
    tempor ad mollit. Dolore commodo nulla minim amet ipsum officia
    consectetur amet ullamco voluptate nisi commodo ea sit eu.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
    Sint sit mollit irure quis est nostrud cillum consequat Lorem
    esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
    Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
    cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
    eiusmod enim irure amet eiusmod qui reprehenderit nostrud
    tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
    irure in labore cillum elit enim. Consequat aliquip incididunt
    ipsum et minim laborum laborum laborum et cillum labore.
    Deserunt adipisicing cillum id nulla minim nostrud labore
    eiusmod et amet.
  </div>
</div>
`

const code2 = `<ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
  <li className="nav-item">
    <a
      className="nav-link active"
      data-bs-toggle="tab"
      href="#kt_tab_pane_4"
    >
      Link 1
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_5"
    >
      Link 2
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_6"
    >
      Link 3
    </a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div
    className="tab-pane fade show active"
    id="kt_tab_pane_4"
    role="tabpanel"
  >
    Et et consectetur ipsum labore excepteur est proident excepteur
    ad velit occaecat qui minim occaecat veniam. Fugiat veniam
    incididunt anim aliqua enim pariatur veniam sunt est aute sit
    dolor anim. Velit non irure adipisicing aliqua ullamco irure
    incididunt irure non esse consectetur nostrud minim non minim
    occaecat. Amet duis do nisi duis veniam non est eiusmod tempor
    incididunt tempor dolor ipsum in qui sit.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
    irure officia enim reprehenderit. Magna duis labore cillum sint
    adipisicing exercitation ipsum. Nostrud ut anim non exercitation
    velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint
    velit ullamco magna consequat voluptate minim amet aliquip ipsum
    aute laboris nisi. Labore labore veniam irure irure ipsum
    pariatur mollit magna in cupidatat dolore magna irure esse
    tempor ad mollit. Dolore commodo nulla minim amet ipsum officia
    consectetur amet ullamco voluptate nisi commodo ea sit eu.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
    Sint sit mollit irure quis est nostrud cillum consequat Lorem
    esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
    Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
    cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
    eiusmod enim irure amet eiusmod qui reprehenderit nostrud
    tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
    irure in labore cillum elit enim. Consequat aliquip incididunt
    ipsum et minim laborum laborum laborum et cillum labore.
    Deserunt adipisicing cillum id nulla minim nostrud labore
    eiusmod et amet.
  </div>
</div>
`

const code3 = `
<div className="card card-custom shadow">
  <div className="card-header card-header-stretch">
    <h3 className="card-title">Title</h3>
    <div className="card-toolbar">
      <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_tab_pane_7"
          >
            Link 1
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_tab_pane_8"
          >
            Link 2
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_tab_pane_9"
          >
            Link 3
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="card-body">
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="kt_tab_pane_7"
        role="tabpanel"
      >
        Et et consectetur ipsum labore excepteur est proident
        excepteur ad velit occaecat qui minim occaecat veniam.
        Fugiat veniam incididunt anim aliqua enim pariatur veniam
        sunt est aute sit dolor anim. Velit non irure adipisicing
        aliqua ullamco irure incididunt irure non esse consectetur
        nostrud minim non minim occaecat. Amet duis do nisi duis
        veniam non est eiusmod tempor incididunt tempor dolor ipsum
        in qui sit.
      </div>
      <div
        className="tab-pane fade"
        id="kt_tab_pane_8"
        role="tabpanel"
      >
        Nulla est ullamco ut irure incididunt nulla Lorem Lorem
        minim irure officia enim reprehenderit. Magna duis labore
        cillum sint adipisicing exercitation ipsum. Nostrud ut anim
        non exercitation velit laboris fugiat cupidatat. Commodo
        esse dolore fugiat sint velit ullamco magna consequat
        voluptate minim amet aliquip ipsum aute laboris nisi. Labore
        labore veniam irure irure ipsum pariatur mollit magna in
        cupidatat dolore magna irure esse tempor ad mollit. Dolore
        commodo nulla minim amet ipsum officia consectetur amet
        ullamco voluptate nisi commodo ea sit eu.
      </div>
      <div
        className="tab-pane fade"
        id="kt_tab_pane_9"
        role="tabpanel"
      >
        Sint sit mollit irure quis est nostrud cillum consequat
        Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo
        veniam Lorem aliquip laborum occaecat qui Lorem esse mollit
        dolore anim cupidatat. eserunt officia id Lorem nostrud aute
        id commodo elit eiusmod enim irure amet eiusmod qui
        reprehenderit nostrud tempor. Fugiat ipsum excepteur in
        aliqua non et quis aliquip ad irure in labore cillum elit
        enim. Consequat aliquip incididunt ipsum et minim laborum
        laborum laborum et cillum labore. Deserunt adipisicing
        cillum id nulla minim nostrud labore eiusmod et amet.
      </div>
    </div>
  </div>
</div>
`

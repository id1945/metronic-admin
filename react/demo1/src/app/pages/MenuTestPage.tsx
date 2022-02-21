/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import SVG from 'react-inlinesvg'
import {toAbsoluteUrl} from '../../_metronic/helpers'

const MenuTestPage: FC = () => {
  return (
    <div className='row'>
      <div className='card card-custom'>
        <div className='card-body p-9'>
          <div className='d-flex align-items-stretch mb-20'>
            <div
              className='header-menu align-items-stretch'
              data-kt-drawer='true'
              data-kt-drawer-name='header-menu'
              data-kt-drawer-activate='{default: true, lg: false}'
              data-kt-drawer-overlay='true'
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction='start'
              data-kt-drawer-toggle='#kt_header_menu_toggle'
            >
              <div
                className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
                id='#kt_header_menu'
                data-kt-menu='true'
              >
                <div className='menu-item me-lg-2'>
                  <a
                    className='menu-link active py-3'
                    href='/keenthemes/products/themes/start/html/demo1/dist/?page=index'
                  >
                    <span className='menu-title'>Dashboard</span>
                  </a>
                </div>
                <div
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-start'
                  className='menu-item me-lg-2'
                >
                  <span className='menu-link py-3'>
                    <span className='menu-title'>Pages</span>
                    <span className='menu-arrow d-lg-none'></span>
                  </span>
                  <div
                    className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-100 w-lg-225px'
                    style={{margin: '0px'}}
                  >
                    <div
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='right-start'
                      className='menu-item'
                    >
                      <span className='menu-link py-3'>
                        <span className='menu-icon'>
                          <span className='svg-icon'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Profile</span>
                        <span className='menu-arrow'></span>
                      </span>
                      <div
                        className='menu-sub menu-sub-accordion menu-sub-lg-dropdown menu-active-bg py-4 w-100 w-lg-225px'
                        style={{margin: '0px'}}
                      >
                        <div className='menu-item'>
                          <span className='menu-link py-3'>
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Overview</span>
                          </span>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/projects'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Projects</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/campaigns'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Campaigns</span>
                          </a>
                        </div>
                        <div
                          data-kt-menu-trigger='click'
                          data-kt-menu-placement='right-start'
                          className='menu-item'
                        >
                          <span className='menu-link py-3'>
                            <span className='menu-icon'>
                              <span className='svg-icon'>
                                <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                              </span>
                            </span>
                            <span className='menu-title'>Profile -</span>
                            <span className='menu-arrow'></span>
                          </span>
                          <div className='menu-sub menu-sub-accordion menu-sub-lg-dropdown menu-active-bg py-4 w-100 w-lg-225px'>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/overview'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Overview</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/projects'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Projects</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/campaigns'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Campaigns</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/documents'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Documents</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/followers'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Followers</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/activity'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Activity</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/dashboard'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Dashboard</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/documents'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Documents</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/followers'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Followers</span>
                          </a>
                        </div>
                        <div
                          data-kt-menu-trigger='hover'
                          data-kt-menu-placement='right-start'
                          className='menu-item'
                        >
                          <span className='menu-link py-3'>
                            <span className='menu-icon'>
                              <span className='svg-icon'>
                                <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                              </span>
                            </span>
                            <span className='menu-title'>Profile -</span>
                            <span className='menu-arrow'></span>
                          </span>
                          <div className='menu-sub menu-sub-accordion menu-sub-lg-dropdown menu-active-bg py-4 w-100 w-lg-225px'>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/overview'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Overview</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/projects'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Projects</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/campaigns'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Campaigns</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/documents'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Documents</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/followers'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Followers</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/activity'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Activity</span>
                              </a>
                            </div>
                            <div className='menu-item'>
                              <a
                                className='menu-link py-3'
                                href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/dashboard'
                              >
                                <span className='menu-bullet'>
                                  <span className='bullet bullet-dot'></span>
                                </span>
                                <span className='menu-title'>Dashboard</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/activity'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Activity</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/dashboard'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Dashboard</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='right-start'
                      className='menu-item'
                    >
                      <span className='menu-link py-3'>
                        <span className='menu-icon'>
                          <span className='svg-icon'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Projects</span>
                        <span className='menu-arrow'></span>
                      </span>
                      <div className='menu-sub menu-sub-accordion menu-sub-lg-dropdown py-4 w-100 w-lg-225px'>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/overview'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Overview</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/lists'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Lists</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/activity'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Activity</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/files'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Files</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/users'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Users</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/targets'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Targets</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger='click' className='menu-item'>
                      <span className='menu-link py-3'>
                        <span className='menu-icon'>
                          <span className='svg-icon'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Wizards</span>
                        <span className='menu-arrow'></span>
                      </span>
                      <div className='menu-sub menu-sub-accordion'>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/wizards/wizard-vertical'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Wizard Vertical</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/wizards/wizard-horizontal'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Wizard Horizontal</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger='click' className='menu-item'>
                      <span className='menu-link py-3'>
                        <span className='menu-icon'>
                          <span className='svg-icon'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Search</span>
                        <span className='menu-arrow'></span>
                      </span>
                      <div className='menu-sub menu-sub-accordion'>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/search/search-horizontal'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Search Horizontal</span>
                          </a>
                        </div>
                        <div className='menu-item'>
                          <a
                            className='menu-link py-3'
                            href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/search/search-vertical'
                          >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot'></span>
                            </span>
                            <span className='menu-title'>Search Vertical</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-start'
                  className='menu-item me-lg-2'
                >
                  <span className='menu-link py-3'>
                    <span className='menu-title'>Resources</span>
                    <span className='menu-arrow d-lg-none'></span>
                  </span>
                  <div
                    className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-100 w-lg-225px'
                    style={{margin: '0px'}}
                  >
                    <div className='menu-item'>
                      <a
                        className='menu-link py-3'
                        href='/keenthemes/products/themes/start/html/demo1/dist/?page=documentation/getting-started'
                      >
                        <span className='menu-icon'>
                          <span className='svg-icon svg-icon-1'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Documentation</span>
                      </a>
                    </div>
                    <div className='menu-item'>
                      <a
                        className='menu-link py-3'
                        href='/keenthemes/products/themes/start/html/demo1/dist/?page=layout-builder'
                      >
                        <span className='menu-icon'>
                          <span className='svg-icon svg-icon-1'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Layout Builder</span>
                      </a>
                    </div>
                    <div className='menu-item'>
                      <a
                        className='menu-link py-3'
                        href='/keenthemes/products/themes/start/html/demo1/dist/?page=documentation/getting-started/changelog'
                      >
                        <span className='menu-icon'>
                          <span className='svg-icon svg-icon-1'>
                            <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                          </span>
                        </span>
                        <span className='menu-title'>Changelog</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-start'
                  className='menu-item me-lg-2'
                >
                  <span className='menu-link py-3'>
                    <span className='menu-title'>Mega Menu</span>
                    <span className='menu-arrow d-lg-none'></span>
                  </span>
                  <div
                    className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5'
                    style={{margin: '0px'}}
                  >
                    <div className='row' data-kt-menu-dismiss='true'>
                      <div className='col-lg-4 border-left-lg-1'>
                        <div className='menu-inline menu-column menu-active-bg'>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='menu-inline menu-column menu-active-bg'>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                          <div className='menu-item'>
                            <a href='#' className='menu-link'>
                              <span className='menu-bullet'>
                                <span className='bullet bullet-dot'></span>
                              </span>
                              <span className='menu-title'>Example link</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-20 w-200px'>
            <div
              className='d-flex align-items-center ms-1 ms-lg-3'
              data-kt-menu-target='#kt_header_search_menu'
              data-kt-menu-trigger='click'
              data-kt-menu-permanent='true'
              data-kt-menu-placement='bottom-start'
            >
              <div className='btn btn-icon btn-active-light-primary w-30px h-30px w-lg-40px h-lg-40px'>
                <span className='svg-icon svg-icon-2 svg-icon-lg-1'>
                  <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                </span>
              </div>
            </div>
            <div
              className='menu menu-sub menu-sub-dropdown w-250px w-lg-300px px-7 py-5'
              data-kt-menu='true'
              id='kt_header_search_menu'
              style={{margin: '0px'}}
            >
              <div
                id='kt_header_search'
                data-kt-search-keypress='true'
                data-kt-search-min-length='3'
                data-kt-search-enter='enter'
                data-kt-search-mode='inline'
                data-kt-search-input-focus='true'
                data-kt-search-trigger='#kt_header_search_trigger'
                data-kt-search-input='#kt_header_search_input'
                data-kt-search-spinner='#kt_header_search_spinner'
                data-kt-search-clear='#kt_header_search_clear'
                data-kt-search-results='#kt_header_search_results'
                data-kt-search-suggestions='#kt_header_search_suggestions'
                data-kt-search-empty='#kt_header_search_empty'
              >
                <div className='position-relative'>
                  <span className='svg-icon svg-icon-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0'>
                    <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                  </span>
                  <input
                    type='text'
                    className='form-control form-control-flush ps-10'
                    name='search'
                    value=''
                    placeholder='Search...'
                    id='kt_header_search_input'
                    onChange={() => {}}
                  />
                  <span
                    className='position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1'
                    id='kt_header_search_spinner'
                  >
                    <span className='spinner-border h-15px w-15px align-middle text-gray-400'></span>
                  </span>
                  <span
                    className='btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none'
                    id='kt_header_search_clear'
                  >
                    <span className='svg-icon svg-icon-1 me-0'>
                      <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                    </span>
                  </span>
                </div>
                <div id='kt_header_search_results' className='d-none'></div>

                <div id='kt_header_search_suggestions'>Suggestions</div>
                <div id='kt_header_search_empty' className='d-none'>
                  Sorry, no results found
                </div>
              </div>
            </div>
          </div>
          <div className='w-250px bg-light rounded py-5'>
            <div
              className='menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'
              id='#kt_aside_menu'
              data-kt-menu='true'
            >
              <div className='menu-item'>
                <a
                  className='menu-link active'
                  href='/keenthemes/products/themes/start/html/demo1/dist/?page=index'
                >
                  <span className='menu-icon'>
                    <span className='svg-icon svg-icon-1'>
                      <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                    </span>
                  </span>
                  <span className='menu-title'>Dashboard</span>
                </a>
              </div>
              <div className='menu-item pt-5'>
                <div className='menu-content'>
                  <span className='menu-section text-muted text-uppercase fs-8'>Custom</span>
                </div>
              </div>
              <div data-kt-menu-trigger='click' className='menu-item'>
                <span className='menu-link'>
                  <span className='menu-icon'>
                    <span className='svg-icon svg-icon-1'>
                      <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                    </span>
                  </span>
                  <span className='menu-title'>Pages</span>
                  <span className='menu-arrow'></span>
                </span>
                <div className='menu-sub menu-sub-accordion menu-active-bg'>
                  <div
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='right-start'
                    data-kt-menu-overflow='true'
                    className='menu-item'
                  >
                    <span className='menu-link'>
                      <span className='menu-bullet'>
                        <span className='bullet bullet-dot'></span>
                      </span>
                      <span className='menu-title'>Profile</span>
                      <span className='menu-arrow'></span>
                    </span>
                    <div className='menu-sub menu-sub-dropdown w-200px menu-active-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/overview'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Overview</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/projects'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Projects</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/campaigns'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Campaigns</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/documents'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Documents</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/followers'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Followers</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/activity'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Activity</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/profile/dashboard'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Dashboard</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger='click' className='menu-item'>
                    <span className='menu-link'>
                      <span className='menu-bullet'>
                        <span className='bullet bullet-dot'></span>
                      </span>
                      <span className='menu-title'>Projects</span>
                      <span className='menu-arrow'></span>
                    </span>
                    <div className='menu-sub menu-sub-accordion menu-active-bg'>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/overview'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Overview</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/lists'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Lists</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/activity'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Activity</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/files'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Files</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/users'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Users</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/projects/targets'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Targets</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger='click' className='menu-item'>
                    <span className='menu-link'>
                      <span className='menu-bullet'>
                        <span className='bullet bullet-dot'></span>
                      </span>
                      <span className='menu-title'>Wizards</span>
                      <span className='menu-arrow'></span>
                    </span>
                    <div className='menu-sub menu-sub-accordion menu-active-bg'>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/wizards/wizard-vertical'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Wizard Vertical</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/wizards/wizard-horizontal'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Wizard Horizontal</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-kt-menu-trigger='click' className='menu-item'>
                    <span className='menu-link'>
                      <span className='menu-bullet'>
                        <span className='bullet bullet-dot'></span>
                      </span>
                      <span className='menu-title'>Search</span>
                      <span className='menu-arrow'></span>
                    </span>
                    <div className='menu-sub menu-sub-accordion menu-active-bg'>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/search/search-horizontal'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Search Horizontal</span>
                        </a>
                      </div>
                      <div className='menu-item'>
                        <a
                          className='menu-link'
                          href='/keenthemes/products/themes/start/html/demo1/dist/?page=pages/search/search-vertical'
                        >
                          <span className='menu-bullet'>
                            <span className='bullet bullet-dot'></span>
                          </span>
                          <span className='menu-title'>Search Vertical</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='menu-item'>
                <div className='menu-content'>
                  <div className='separator mx-1 my-4 opacity-10'></div>
                </div>
              </div>
              <div className='menu-item'>
                <a
                  className='menu-link'
                  href='/keenthemes/products/themes/start/html/demo1/dist/?page=documentation/getting-started'
                >
                  <span className='menu-icon'>
                    <span className='svg-icon svg-icon-1'>
                      <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                    </span>
                  </span>
                  <span className='menu-title'>Documentation</span>
                </a>
              </div>
              <div className='menu-item'>
                <a
                  className='menu-link'
                  href='/keenthemes/products/themes/start/html/demo1/dist/?page=layout-builder'
                >
                  <span className='menu-icon'>
                    <span className='svg-icon svg-icon-1'>
                      <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                    </span>{' '}
                  </span>
                  <span className='menu-title'>Layout Builder</span>
                </a>
              </div>
              <div className='menu-item'>
                <a
                  className='menu-link'
                  href='/keenthemes/products/themes/start/html/demo1/dist/?page=documentation/getting-started/changelog'
                >
                  <span className='menu-icon'>
                    <span className='svg-icon svg-icon-1'>
                      <SVG src={toAbsoluteUrl('/media/logos/logo-compact.svg')} />
                    </span>
                  </span>
                  <span className='menu-title'>Changelog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {MenuTestPage}

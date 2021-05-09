<template>
  <!-- begin:: Aside -->
  <div class="aside aside-left d-flex aside-fixed" id="kt_aside" ref="kt_aside">
    <!--begin::Primary-->
    <div
      class="aside-primary d-flex flex-column align-items-center flex-row-auto"
    >
      <!--begin::Brand-->
      <KTBrand></KTBrand>
      <!--end::Brand-->
      <!--begin::Nav Wrapper-->
      <div
        class="aside-nav d-flex flex-column align-items-center flex-column-fluid py-5 scroll scroll-pull ps"
        style="height: 528px; overflow: hidden;"
      >
        <!--begin::Nav-->
        <ul class="nav flex-column" role="tablist">
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            v-b-tooltip.hover.right="'Latest Projects'"
          >
            <a
              href="#"
              class="nav-link btn btn-icon btn-clean btn-lg"
              data-toggle="tab"
              v-on:click="setActiveTab"
              data-tab="0"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            v-b-tooltip.hover.right="'Metronic Features'"
          >
            <a
              href="#"
              class="nav-link btn btn-icon btn-clean btn-lg"
              data-toggle="tab"
              v-on:click="setActiveTab"
              data-tab="1"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Communication/Group.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            v-b-tooltip.hover.right="'Latest Reports'"
          >
            <a
              href="#"
              class="nav-link btn btn-icon btn-clean btn-lg"
              data-toggle="tab"
              v-on:click="setActiveTab"
              data-tab="2"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            v-b-tooltip.hover.right="'Project Management'"
          >
            <a
              href="#"
              class="nav-link btn btn-icon btn-clean btn-lg"
              role="tab"
              v-on:click="setActiveTab"
              data-tab="3"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/General/Shield-check.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            v-b-tooltip.hover.right="'User Management'"
          >
            <a
              href="#"
              class="nav-link btn btn-icon btn-clean btn-lg active"
              role="tab"
              v-on:click="setActiveTab"
              data-tab="4"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Home/Library.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            v-b-tooltip.hover.right="'Finance &amp; Accounting'"
          >
            <a
              href="#"
              class="nav-link btn btn-icon btn-clean btn-lg"
              role="tab"
              v-on:click="setActiveTab"
              data-tab="5"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Files/File-plus.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </li>
          <!--end::Item-->
        </ul>
        <!--end::Nav-->
      </div>
      <!--end::Nav Wrapper-->
      <!--begin::Footer-->
      <div
        class="aside-footer d-flex flex-column align-items-center flex-column-auto py-4 py-lg-10"
      >
        <!--begin::Aside Toggle-->
        <span
          class="aside-toggle btn btn-icon btn-primary btn-hover-primary shadow-sm"
          id="kt_aside_toggle"
          ref="kt_aside_toggle"
          data-placement="right"
          data-container="body"
          data-boundary="window"
          v-b-tooltip.hover.right="'Toggle Aside'"
        >
          <i class="ki ki-bold-arrow-back icon-sm"></i>
        </span>
        <!--end::Aside Toggle-->
        <!--begin::Quick Actions-->
        <KTQuickActions></KTQuickActions>
        <!--end::Quick Actions-->
        <!--begin::Quick Panel-->
        <KTQuickPanel></KTQuickPanel>
        <!--end::Quick Panel-->
        <!--begin::User-->
        <KTQuickUser></KTQuickUser>
        <!--end::User-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Primary-->
    <!--begin::Secondary-->
    <div class="aside-secondary d-flex flex-row-fluid">
      <!--begin::Workspace-->
      <div
        class="aside-workspace scroll scroll-push my-2 ps"
        style="height: 824px; overflow: hidden;"
      >
        <!--begin::Tab Content-->
        <b-tabs class="hide-tabs" v-model="tabIndex">
          <!--begin::Tab Pane-->
          <b-tab active class="p-3 px-lg-7 py-lg-5">
            <!--begin::Form-->
            <form class="p-2 p-lg-3">
              <div class="d-flex">
                <div class="input-icon h-40px">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid h-40px"
                    placeholder="Search..."
                    id="generalSearch"
                  />
                  <span>
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/General/Search.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                </div>
                <div class="dropdown" v-b-tooltip.hover.right="'Quick actions'">
                  <a
                    href="#"
                    class="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-right"
                    style=""
                  >
                    <!--begin::Navigation-->
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-primary label-inline font-weight-bold"
                            >
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-danger label-rounded font-weight-bold"
                              >5</span
                            >
                          </span>
                        </a>
                      </li>
                    </ul>
                    <!--end::Navigation-->
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
            <h3 class="p-2 p-lg-3 my-1 my-lg-3">
              Projects
            </h3>
            <!--begin::List-->
            <div class="list list-hover">
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Bravio Application
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By James
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/010-vimeo.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Quick Reports
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Ana
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/014-kickstarter.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      CRM Reporting Tool
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Adam
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/009-hot-air-balloon.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      DB Management
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By CRA Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/008-infography.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Cloud Service
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By iC Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/007-disqus.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Disqus Project
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By PV Inc.
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0"
                      >Plurk Meeting</span
                    >
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                      >By Plurk Team.</a
                    >
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
            </div>
            <!--end::List-->
          </b-tab>
          <!--end::Tab Pane-->
          <!--begin::Tab Pane-->
          <b-tab>
            <!--begin::Aside Menu-->
            <div
              class="aside-menu-wrapper flex-column-fluid px-10 py-5"
              id="kt_aside_menu_wrapper"
            >
              <!--begin::Menu Container-->
              <div
                ref="kt_aside_menu"
                id="kt_aside_menu"
                class="aside-menu min-h-lg-800px"
                data-menu-vertical="1"
                data-menu-scroll="1"
                v-bind:class="asideMenuClass"
              >
                <!-- example static menu here -->
                <perfect-scrollbar
                  class="aside-menu scroll"
                  style="max-height: 90vh; position: relative;"
                >
                  <KTMenu></KTMenu>
                </perfect-scrollbar>
              </div>
              <!--end::Menu Container-->
            </div>
            <!--end::Aside Menu-->
          </b-tab>
          <!--end::Tab Pane-->
          <!--begin::Tab Pane-->
          <b-tab active class="p-3 px-lg-7 py-lg-5">
            <!--begin::Form-->
            <form class="p-2 p-lg-3">
              <div class="d-flex">
                <div class="input-icon h-40px">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid h-40px"
                    placeholder="Search..."
                  />
                  <span>
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/General/Search.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                </div>
                <div class="dropdown" v-b-tooltip.hover.right="'Quick actions'">
                  <a
                    href="#"
                    class="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-right"
                    style=""
                  >
                    <!--begin::Navigation-->
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-primary label-inline font-weight-bold"
                            >
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-danger label-rounded font-weight-bold"
                              >5</span
                            >
                          </span>
                        </a>
                      </li>
                    </ul>
                    <!--end::Navigation-->
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
            <h3 class="p-2 p-lg-3 my-1 my-lg-3">
              Projects
            </h3>
            <!--begin::List-->
            <div class="list list-hover">
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Bravio Application
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By James
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/010-vimeo.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Quick Reports
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Ana
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/014-kickstarter.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      CRM Reporting Tool
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Adam
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/009-hot-air-balloon.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      DB Management
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By CRA Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/008-infography.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Cloud Service
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By iC Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/007-disqus.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Disqus Project
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By PV Inc.
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0"
                      >Plurk Meeting</span
                    >
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                      >By Plurk Team.</a
                    >
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
            </div>
            <!--end::List-->
          </b-tab>
          <!--end::Tab Pane-->
          <!--begin::Tab Pane-->
          <b-tab active class="p-3 px-lg-7 py-lg-5">
            <!--begin::Form-->
            <form class="p-2 p-lg-3">
              <div class="d-flex">
                <div class="input-icon h-40px">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid h-40px"
                    placeholder="Search..."
                  />
                  <span>
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/General/Search.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                </div>
                <div class="dropdown" v-b-tooltip.hover.right="'Quick actions'">
                  <a
                    href="#"
                    class="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-right"
                    style=""
                  >
                    <!--begin::Navigation-->
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-primary label-inline font-weight-bold"
                            >
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-danger label-rounded font-weight-bold"
                              >5</span
                            >
                          </span>
                        </a>
                      </li>
                    </ul>
                    <!--end::Navigation-->
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
            <h3 class="p-2 p-lg-3 my-1 my-lg-3">
              Projects
            </h3>
            <!--begin::List-->
            <div class="list list-hover">
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Bravio Application
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By James
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/010-vimeo.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Quick Reports
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Ana
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/014-kickstarter.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      CRM Reporting Tool
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Adam
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/009-hot-air-balloon.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      DB Management
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By CRA Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/008-infography.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Cloud Service
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By iC Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/007-disqus.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Disqus Project
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By PV Inc.
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0"
                      >Plurk Meeting</span
                    >
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                      >By Plurk Team.</a
                    >
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
            </div>
            <!--end::List-->
          </b-tab>
          <!--end::Tab Pane-->
          <!--begin::Tab Pane-->
          <b-tab active class="p-3 px-lg-7 py-lg-5">
            <!--begin::Form-->
            <form class="p-2 p-lg-3">
              <div class="d-flex">
                <div class="input-icon h-40px">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid h-40px"
                    placeholder="Search..."
                  />
                  <span>
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/General/Search.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                </div>
                <div class="dropdown" v-b-tooltip.hover.right="'Quick actions'">
                  <a
                    href="#"
                    class="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-right"
                    style=""
                  >
                    <!--begin::Navigation-->
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-primary label-inline font-weight-bold"
                            >
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-danger label-rounded font-weight-bold"
                              >5</span
                            >
                          </span>
                        </a>
                      </li>
                    </ul>
                    <!--end::Navigation-->
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
            <h3 class="p-2 p-lg-3 my-1 my-lg-3">
              Projects
            </h3>
            <!--begin::List-->
            <div class="list list-hover">
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Bravio Application
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By James
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/010-vimeo.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Quick Reports
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Ana
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/014-kickstarter.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      CRM Reporting Tool
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Adam
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/009-hot-air-balloon.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      DB Management
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By CRA Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/008-infography.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Cloud Service
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By iC Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/007-disqus.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Disqus Project
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By PV Inc.
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0"
                      >Plurk Meeting</span
                    >
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                      >By Plurk Team.</a
                    >
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
            </div>
            <!--end::List-->
          </b-tab>
          <!--end::Tab Pane-->
          <!--begin::Tab Pane-->
          <b-tab active class="p-3 px-lg-7 py-lg-5">
            <!--begin::Form-->
            <form class="p-2 p-lg-3">
              <div class="d-flex">
                <div class="input-icon h-40px">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid h-40px"
                    placeholder="Search..."
                  />
                  <span>
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/General/Search.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                </div>
                <div class="dropdown" v-b-tooltip.hover.right="'Quick actions'">
                  <a
                    href="#"
                    class="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon-->
                      <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-right"
                    style=""
                  >
                    <!--begin::Navigation-->
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-primary label-inline font-weight-bold"
                            >
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span
                              class="label label-light-danger label-rounded font-weight-bold"
                              >5</span
                            >
                          </span>
                        </a>
                      </li>
                    </ul>
                    <!--end::Navigation-->
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
            <h3 class="p-2 p-lg-3 my-1 my-lg-3">
              Projects
            </h3>
            <!--begin::List-->
            <div class="list list-hover">
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Bravio Application
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By James
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/010-vimeo.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Quick Reports
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Ana
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/014-kickstarter.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      CRM Reporting Tool
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By Adam
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/009-hot-air-balloon.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      DB Management
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By CRA Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/008-infography.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Cloud Service
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By iC Team
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/007-disqus.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0">
                      Disqus Project
                    </span>
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                    >
                      By PV Inc.
                    </a>
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div class="list-item hoverable p-2 p-lg-3 mb-2">
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-40 symbol-light mr-4">
                    <span class="symbol-label bg-hover-white">
                      <inline-svg
                        src="media/svg/misc/006-plurk.svg"
                        class="h-50 align-self-center"
                      />
                    </span>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Text-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <span class="text-dark-75 font-size-h6 mb-0"
                      >Plurk Meeting</span
                    >
                    <a
                      href="#"
                      class="text-muted text-hover-primary font-weight-bold"
                      >By Plurk Team.</a
                    >
                  </div>
                  <!--begin::End-->
                </div>
              </div>
              <!--end::Item-->
            </div>
            <!--end::List-->
          </b-tab>
          <!--end::Tab Pane-->
        </b-tabs>
        <!--end::Tab Content-->
        <!--end::Workspace-->
      </div>
      <!--end::Secondary-->
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import { mapGetters } from "vuex";
import KTLayoutAside from "@/assets/js/layout/base/aside.js";
import KTLayoutAsideMenu from "@/assets/js/layout/base/aside-menu.js";
import KTLayoutAsideToggle from "@/assets/js/layout/base/aside-toggle.js";
import KTBrand from "@/view/layout/brand/Brand.vue";
import KTMenu from "@/view/layout/aside/Menu.vue";
import KTQuickActions from "@/view/layout/extras/offcanvas/QuickActions.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";

export default {
  name: "KTAside",
  data() {
    return {
      insideTm: 0,
      outsideTm: 0,
      tabIndex: 0
    };
  },
  components: {
    KTBrand,
    KTMenu,
    KTQuickActions,
    KTQuickUser,
    KTQuickPanel
  },
  mounted() {
    this.$nextTick(() => {
      const asideRef = this.$refs["kt_aside"];

      // Init Aside
      KTLayoutAside.init(asideRef);

      asideRef.querySelectorAll("a[class='menu-link']").forEach(item => {
        item.addEventListener("click", () => {
          KTLayoutAside.getOffcanvas().hide();
        });
      });

      // Init Aside Menu
      KTLayoutAsideMenu.init(this.$refs["kt_aside_menu"]);

      // Init Aside Toggle
      KTLayoutAsideToggle.init(this.$refs["kt_aside_toggle"]);
    });
  },
  methods: {
    setActiveTab(event) {
      let target = event.target;
      if (!event.target.classList.contains("nav-link")) {
        target = event.target.closest(".nav-link");
      }

      const tab = target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-tab"));

      // set current active tab
      target.classList.add("active");
    }
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get extra classes for menu based on the options
     */
    asideMenuClass() {
      const classes = this.getClasses("aside_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>

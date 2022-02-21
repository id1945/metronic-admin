<template>
  <!--begin::Modal - Create account-->
  <div
    class="modal fade"
    id="kt_modal_create_account"
    ref="createAccountModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Title-->
          <h2>Create Account</h2>
          <!--end::Title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <!--begin::Stepper-->
          <div
            ref="createAccountRef"
            class="stepper stepper-links d-flex flex-column"
            id="kt_create_account_stepper"
          >
            <!--begin::Nav-->
            <div class="stepper-nav py-5">
              <!--begin::Step 1-->
              <div class="stepper-item current" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Account Type</h3>
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Account Info</h3>
              </div>
              <!--end::Step 2-->

              <!--begin::Step 3-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Business Details</h3>
              </div>
              <!--end::Step 3-->

              <!--begin::Step 4-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Billing Details</h3>
              </div>
              <!--end::Step 4-->

              <!--begin::Step 5-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Completed</h3>
              </div>
              <!--end::Step 5-->
            </div>
            <!--end::Nav-->

            <!--begin::Form-->
            <form
              class="mx-auto mw-600px w-100 py-10"
              novalidate="novalidate"
              id="kt_create_account_form"
              @submit="handleStep"
            >
              <!--begin::Step 1-->
              <div class="current" data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h2 class="fw-bolder d-flex align-items-center text-dark">
                      Choose Account Type
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Billing is issued based on your selected account type"
                      ></i>
                    </h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="fv-row">
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-lg-6">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="accountType"
                          value="personal"
                          checked="checked"
                          id="kt_create_account_form_account_type_personal"
                          v-model="formData.accountType"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            p-7
                            d-flex
                            align-items-center
                            mb-10
                          "
                          for="kt_create_account_form_account_type_personal"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/communication/com005.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span class="text-dark fw-bolder d-block fs-4 mb-2">
                              Personal Account
                            </span>
                            <span class="text-gray-400 fw-bold fs-6"
                              >If you need more info, please check it out</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <!--begin::Col-->
                      <div class="col-lg-6">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="accountType"
                          value="corporate"
                          id="kt_create_account_form_account_type_corporate"
                          v-model="formData.accountType"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            p-7
                            d-flex
                            align-items-center
                          "
                          for="kt_create_account_form_account_type_corporate"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/finance/fin006.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span class="text-dark fw-bolder d-block fs-4 mb-2"
                              >Corporate Account</span
                            >
                            <span class="text-gray-400 fw-bold fs-6"
                              >Create corporate account to mane users</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Row-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Account Info</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="mb-10 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center form-label mb-3">
                      Specify Team Size
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Provide your team size to help us setup your billing"
                      ></i>
                    </label>
                    <!--end::Label-->

                    <!--begin::Row-->
                    <div class="row mb-2" data-kt-buttons="true">
                      <!--begin::Col-->
                      <div class="col">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          checked="checked"
                          name="teamSize"
                          value="1-1"
                          id="kt_one_one_select"
                          v-model="formData.teamSize"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            w-100
                            p-4
                          "
                          for="kt_one_one_select"
                        >
                          <span class="fw-bolder fs-3">1-1</span>
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <!--begin::Col-->
                      <div class="col">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="teamSize"
                          value="2-10"
                          id="kt_two_ten_select"
                          v-model="formData.teamSize"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            w-100
                            p-4
                          "
                          for="kt_two_ten_select"
                        >
                          <span class="fw-bolder fs-3">2-10</span>
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <!--begin::Col-->
                      <div class="col">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="teamSize"
                          value="10-50"
                          id="kt_ten_fifty_select"
                          v-model="formData.teamSize"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            w-100
                            p-4
                          "
                          for="kt_ten_fifty_select"
                        >
                          <span class="fw-bolder fs-3">10-50</span>
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <!--begin::Col-->
                      <div class="col">
                        <!--begin::Option-->
                        <input
                          type="radio"
                          class="btn-check"
                          name="teamSize"
                          value="50+"
                          id="kt_fifty_select"
                          v-model="formData.teamSize"
                        />
                        <label
                          class="
                            btn
                            btn-outline
                            btn-outline-dashed
                            btn-outline-default
                            w-100
                            p-4
                          "
                          for="kt_fifty_select"
                        >
                          <span class="fw-bolder fs-3">50+</span>
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Row-->

                    <!--begin::Hint-->
                    <div class="form-text">
                      Customers will see this shortened version of your
                      statement descriptor
                    </div>
                    <!--end::Hint-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="mb-10 fv-row">
                    <!--begin::Label-->
                    <label class="form-label mb-3">Team Account Name</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      type="text"
                      class="form-control form-control-lg form-control-solid"
                      name="teamAccountName"
                      placeholder=""
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="teamAccountName"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="mb-0 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center form-label mb-5">
                      Select Account Plan
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Monthly billing will be based on your account plan"
                      ></i>
                    </label>
                    <!--end::Label-->

                    <!--begin::Options-->
                    <div class="mb-0">
                      <!--begin:Option-->
                      <label class="d-flex flex-stack mb-5 cursor-pointer">
                        <!--begin:Label-->
                        <span class="d-flex align-items-center me-2">
                          <!--begin::Icon-->
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label">
                              <span
                                class="svg-icon svg-icon-1 svg-icon-gray-600"
                              >
                                <inline-svg
                                  src="media/icons/duotune/finance/fin001.svg"
                                />
                              </span>
                            </span>
                          </span>
                          <!--end::Icon-->

                          <!--begin::Description-->
                          <span class="d-flex flex-column">
                            <span
                              class="
                                fw-bolder
                                text-gray-800 text-hover-primary
                                fs-5
                              "
                              >Company Account</span
                            >
                            <span class="fs-6 fw-bold text-gray-400"
                              >Use images to enhance your post flow</span
                            >
                          </span>
                          <!--end:Description-->
                        </span>
                        <!--end:Label-->

                        <!--begin:Input-->
                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="accountPlan"
                            value="1"
                            v-model="formData.accountPlan"
                          />
                        </span>
                        <!--end:Input-->
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label class="d-flex flex-stack mb-5 cursor-pointer">
                        <!--begin:Label-->
                        <span class="d-flex align-items-center me-2">
                          <!--begin::Icon-->
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label">
                              <span
                                class="svg-icon svg-icon-1 svg-icon-gray-600"
                              >
                                <inline-svg
                                  src="media/icons/duotune/graphs/gra006.svg"
                                />
                              </span>
                            </span>
                          </span>
                          <!--end::Icon-->

                          <!--begin::Description-->
                          <span class="d-flex flex-column">
                            <span
                              class="
                                fw-bolder
                                text-gray-800 text-hover-primary
                                fs-5
                              "
                              >Developer Account</span
                            >
                            <span class="fs-6 fw-bold text-gray-400"
                              >Use images to your post time</span
                            >
                          </span>
                          <!--end:Description-->
                        </span>
                        <!--end:Label-->

                        <!--begin:Input-->
                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            checked
                            name="accountPlan"
                            value="2"
                            v-model="formData.accountPlan"
                          />
                        </span>
                        <!--end:Input-->
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label class="d-flex flex-stack mb-0 cursor-pointer">
                        <!--begin:Label-->
                        <span class="d-flex align-items-center me-2">
                          <!--begin::Icon-->
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label">
                              <span
                                class="svg-icon svg-icon-1 svg-icon-gray-600"
                              >
                                <inline-svg
                                  src="media/icons/duotune/graphs/gra008.svg"
                                />
                              </span>
                            </span>
                          </span>
                          <!--end::Icon-->

                          <!--begin::Description-->
                          <span class="d-flex flex-column">
                            <span
                              class="
                                fw-bolder
                                text-gray-800 text-hover-primary
                                fs-5
                              "
                              >Testing Account</span
                            >
                            <span class="fs-6 fw-bold text-gray-400"
                              >Use images to enhance time travel rivers</span
                            >
                          </span>
                          <!--end:Description-->
                        </span>
                        <!--end:Label-->

                        <!--begin:Input-->
                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="accountPlan"
                            value="3"
                            v-model="formData.accountPlan"
                          />
                        </span>
                        <!--end:Input-->
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Options-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 2-->

              <!--begin::Step 3-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-12">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Business Details</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label required">Business Name</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="businessName"
                      class="form-control form-control-lg form-control-solid"
                      value="Keenthemes Inc."
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="businessName"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center form-label">
                      <span class="required">Shortened Descriptor</span>

                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-content="
                    <div class='p-4 rounded bg-light'>
                        <div class='d-flex flex-stack text-muted mb-4'>
                            <i class='fas fa-university fs-3 me-3'></i>

                            <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div>
                        </div>

                        <div class='d-flex flex-stack fw-bold text-gray-600'>
                            <div>Amount</div>
                            <div>Transaction</div>
                        </div>

                        <div class='separator separator-dashed my-2'></div>

                        <div class='d-flex flex-stack text-dark fw-bolder mb-2'>
                            <div>USD345.00</div>
                            <div>KEENTHEMES*</div>
                        </div>

                        <div class='d-flex flex-stack text-muted mb-2'>
                            <div>USD75.00</div>
                            <div>Hosting fee</div>
                        </div>

                        <div class='d-flex flex-stack text-muted'>
                            <div>USD3,950.00</div>
                            <div>Payrol</div>
                        </div>
                    </div>
                "
                      >
                      </i>
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="shortenedDescriptor"
                      class="form-control form-control-lg form-control-solid"
                      value="KEENTHEMES"
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="shortenedDescriptor"
                    />
                    <!--end::Input-->

                    <!--begin::Hint-->
                    <div class="form-text">
                      Customers will see this shortened version of your
                      statement descriptor
                    </div>
                    <!--end::Hint-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label required">Corporation Type</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="corporationType"
                      class="form-select form-select-lg form-select-solid"
                      as="select"
                    >
                      <option></option>
                      <option label="Corporation" value="1">Corporation</option>
                      <option label="Sole Proprietorship" value="2">
                        Sole Proprietorship
                      </option>
                      <option label="Non-profit" value="3">Non-profit</option>
                      <option label="Limited Liability" value="4">
                        Limited Liability
                      </option>
                      <option label="General Partnership" value="5">
                        General Partnership
                      </option>
                    </Field>
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="corporationType"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--end::Label-->
                    <label class="form-label">Business Description</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      type="text"
                      name="businessDescription"
                      class="form-control form-control-lg form-control-solid"
                      rows="3"
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="businessDescription"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-0">
                    <!--begin::Label-->
                    <label class="fs-6 fw-bold form-label required"
                      >Contact Email</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="contactEmail"
                      class="form-control form-control-lg form-control-solid"
                      value="corp@support.com"
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="contactEmail"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 3-->

              <!--begin::Step 4-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Billing Details</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="text-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label
                      class="
                        d-flex
                        align-items-center
                        fs-6
                        fw-bold
                        form-label
                        mb-2
                      "
                    >
                      <span class="required">Name On Card</span>
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a card holder's name"
                      ></i>
                    </label>
                    <!--end::Label-->

                    <Field
                      type="text"
                      class="form-control form-control-solid"
                      placeholder=""
                      name="nameOnCard"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="nameOnCard" />
                      </div>
                    </div>
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-6 fw-bold form-label mb-2"
                      >Card Number</label
                    >
                    <!--end::Label-->

                    <!--begin::Input wrapper-->
                    <div class="position-relative">
                      <!--begin::Input-->
                      <Field
                        type="text"
                        class="form-control form-control-solid"
                        placeholder="Enter card number"
                        name="cardNumber"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="cardNumber" />
                        </div>
                      </div>
                      <!--end::Input-->

                      <!--begin::Card logos-->
                      <div
                        class="
                          position-absolute
                          translate-middle-y
                          top-50
                          end-0
                          me-5
                        "
                      >
                        <img
                          src="media/svg/card-logos/visa.svg"
                          alt=""
                          class="h-25px"
                        />
                        <img
                          src="media/svg/card-logos/mastercard.svg"
                          alt=""
                          class="h-25px"
                        />
                        <img
                          src="media/svg/card-logos/american-express.svg"
                          alt=""
                          class="h-25px"
                        />
                      </div>
                      <!--end::Card logos-->
                    </div>
                    <!--end::Input wrapper-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row mb-10">
                    <!--begin::Col-->
                    <div class="col-md-8 fv-row">
                      <!--begin::Label-->
                      <label class="required fs-6 fw-bold form-label mb-2"
                        >Expiration Date</label
                      >
                      <!--end::Label-->

                      <!--begin::Row-->
                      <div class="row fv-row">
                        <!--begin::Col-->
                        <div class="col-6">
                          <Field
                            name="expirationMonth"
                            class="form-select form-select-solid"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Month"
                            as="select"
                          >
                            <option></option>
                            <template v-for="i in 12" :key="i">
                              <option :label="i" :value="i">{{ i }}</option>
                            </template>
                          </Field>
                          <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                              <ErrorMessage name="expirationMonth" />
                            </div>
                          </div>
                        </div>
                        <!--end::Col-->

                        <!--begin::Col-->
                        <div class="col-6">
                          <Field
                            name="expirationYear"
                            class="form-select form-select-solid"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Year"
                            as="select"
                          >
                            <option></option>
                            <template v-for="i in 10" :key="i">
                              <option
                                :label="new Date().getFullYear() + i"
                                :value="new Date().getFullYear() + i"
                              >
                                {{ new Date().getFullYear() + i }}
                              </option>
                            </template>
                          </Field>
                          <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                              <ErrorMessage name="expirationYear" />
                            </div>
                          </div>
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Row-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-4 fv-row">
                      <!--begin::Label-->
                      <label
                        class="
                          d-flex
                          align-items-center
                          fs-6
                          fw-bold
                          form-label
                          mb-2
                        "
                      >
                        <span class="required">CVV</span>
                        <i
                          class="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Enter a card CVV code"
                        ></i>
                      </label>
                      <!--end::Label-->

                      <!--begin::Input wrapper-->
                      <div class="position-relative">
                        <!--begin::Input-->
                        <Field
                          type="text"
                          class="form-control form-control-solid"
                          minlength="3"
                          maxlength="4"
                          placeholder="CVV"
                          name="cvv"
                        />
                        <!--end::Input-->

                        <!--begin::CVV icon-->
                        <div
                          class="
                            position-absolute
                            translate-middle-y
                            top-50
                            end-0
                            me-3
                          "
                        >
                          <span class="svg-icon svg-icon-2hx">
                            <inline-svg
                              src="media/icons/duotune/finance/fin002.svg"
                            />
                          </span>
                        </div>
                        <!--end::CVV icon-->
                      </div>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="cvv" />
                        </div>
                      </div>
                      <!--end::Input wrapper-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-stack">
                    <!--begin::Label-->
                    <div class="me-5">
                      <label class="fs-6 fw-bold form-label"
                        >Save Card for further billing?</label
                      >
                      <div class="fs-7 fw-bold text-gray-400">
                        If you need more info, please check budget planning
                      </div>
                    </div>
                    <!--end::Label-->

                    <!--begin::Switch-->
                    <label
                      class="
                        form-check
                        form-switch
                        form-check-custom
                        form-check-solid
                      "
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                        checked="checked"
                      />
                      <span class="form-check-label fw-bold text-gray-400">
                        Save Card
                      </span>
                    </label>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 4-->

              <!--begin::Step 5-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-8 pb-lg-10">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Your Are Done!</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please
                      <router-link to="/sign-in" class="link-primary fw-bolder"
                        >Sign In</router-link
                      >.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Body-->
                  <div class="mb-0">
                    <!--begin::Text-->
                    <div class="fs-6 text-gray-600 mb-5">
                      Writing headlines for blog posts is as much an art as it
                      is a science and probably warrants its own post, but for
                      all advise is with what works for your great & amazing
                      audience.
                    </div>
                    <!--end::Text-->

                    <!--begin::Alert-->
                    <div
                      class="
                        notice
                        d-flex
                        bg-light-warning
                        rounded
                        border-warning border border-dashed
                        p-6
                      "
                    >
                      <!--begin::Icon-->
                      <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                        <inline-svg
                          src="media/icons/duotune/general/gen044.svg"
                        />
                      </span>
                      <!--end::Icon-->
                      <!--begin::Wrapper-->
                      <div class="d-flex flex-stack flex-grow-1">
                        <!--begin::Content-->
                        <div class="fw-bold">
                          <h4 class="text-gray-800 fw-bolder">
                            We need your attention!
                          </h4>
                          <div class="fs-6 text-gray-600">
                            To start using great tools, please, please
                            <a href="#" class="fw-bolder"
                              >Create Team Platform</a
                            >
                          </div>
                        </div>
                        <!--end::Content-->
                      </div>
                      <!--end::Wrapper-->
                    </div>
                    <!--end::Alert-->
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 5-->

              <!--begin::Actions-->
              <div class="d-flex flex-stack pt-15">
                <!--begin::Wrapper-->
                <div class="me-2">
                  <button
                    type="button"
                    class="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                    @click="previousStep()"
                  >
                    <span class="svg-icon svg-icon-3 me-1">
                      <inline-svg src="media/icons/duotune/arrows/arr063.svg" />
                    </span>
                    Back
                  </button>
                </div>
                <!--end::Wrapper-->

                <!--begin::Wrapper-->
                <div>
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary"
                    v-if="currentStepIndex === totalSteps - 1"
                    @click="formSubmit()"
                  >
                    <span class="indicator-label">
                      Submit
                      <span class="svg-icon svg-icon-3 ms-2 me-0">
                        <inline-svg src="icons/duotune/arrows/arr064.svg" />
                      </span>
                    </span>
                    <span class="indicator-progress">
                      Please wait...
                      <span
                        class="
                          spinner-border spinner-border-sm
                          align-middle
                          ms-2
                        "
                      ></span>
                    </span>
                  </button>

                  <button type="submit" class="btn btn-lg btn-primary" v-else>
                    Continue
                    <span class="svg-icon svg-icon-3 ms-1 me-0">
                      <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                    </span>
                  </button>
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Actions-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Stepper-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create project-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useForm } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

interface Step1 {
  accountType: string;
}

interface Step2 {
  teamSize: string;
  teamAccountName: string;
  accountPlan: string;
}

interface Step3 {
  businessName: string;
  shortenedDescriptor: string;
  corporationType: string;
  businessDescription: string;
  contactEmail: string;
}

interface Step4 {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

interface KTCreateApp extends Step1, Step2, Step3, Step4 {}

export default defineComponent({
  name: "create-account-modal",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createAccountRef = ref<HTMLElement | null>(null);
    const createAccountModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);

    const formData = ref<KTCreateApp>({
      accountType: "personal",
      teamSize: "1-1",
      teamAccountName: "",
      accountPlan: "1",
      businessName: "Keenthemes Inc.",
      shortenedDescriptor: "KEENTHEMES",
      corporationType: "1",
      businessDescription: "",
      contactEmail: "corp@support.com",
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      expirationMonth: "1",
      expirationYear: "2022",
      cvv: "123",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createAccountRef.value as HTMLElement
      );
    });

    const createAppSchema = [
      Yup.object({}),
      Yup.object({
        teamAccountName: Yup.string().required().label("Team account name"),
      }),
      Yup.object({
        businessName: Yup.string().required().label("Business name"),
        shortenedDescriptor: Yup.string()
          .required()
          .label("Shortened descriptor"),
        corporationType: Yup.string().required().label("Corporation type"),
        businessDescription: Yup.string()
          .required()
          .label("Business description"),
        contactEmail: Yup.string().required().label("Contact email"),
      }),
      Yup.object({
        nameOnCard: Yup.string().required().label("Name"),
        cardNumber: Yup.string().required().label("Card number"),
        expirationMonth: Yup.string().required().label("Month"),
        expirationYear: Yup.string().required().label("Year"),
        cvv: Yup.string().required().label("CVV"),
      }),
    ];

    // extracts the individual step schema
    const currentSchema = computed(() => {
      return createAppSchema[currentStepIndex.value];
    });

    const totalSteps = computed(() => {
      if (!_stepperObj.value) {
        return;
      }

      return _stepperObj.value.totatStepsNumber;
    });

    const { resetForm, handleSubmit } = useForm<Step1 | Step2 | Step3 | Step4>({
      validationSchema: currentSchema,
    });

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };

    const handleStep = handleSubmit((values) => {
      for (const item in values) {
        // eslint-disable-next-line no-prototype-builtins
        if (values.hasOwnProperty(item)) {
          if (values[item]) {
            formData.value[item] = values[item];
          }
        }
      }

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });

    const formSubmit = () => {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      }).then(() => {
        hideModal(createAccountModalRef.value);
      });
    };

    resetForm({
      values: {
        ...formData.value,
      },
    });

    return {
      createAccountRef,
      totalSteps,
      previousStep,
      handleStep,
      formSubmit,
      currentStepIndex,
      formData,
      createAccountModalRef,
    };
  },
});
</script>

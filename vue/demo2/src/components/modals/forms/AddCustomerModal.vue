<template>
  <div
    class="modal fade"
    id="kt_modal_add_customer"
    ref="addCustomerModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_customer_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Add a Customer</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_customer_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_customer_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_customer_header"
              data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold mb-2">Name</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name">
                  <el-input
                    v-model="formData.name"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Email</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.email" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-15">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">Description</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="description">
                  <el-input v-model="formData.description" type="text" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Billing toggle-->
              <div
                class="fw-bolder fs-3 rotate collapsible mb-7"
                data-bs-toggle="collapse"
                href="#kt_modal_add_customer_billing_info"
                role="button"
                aria-expanded="false"
                aria-controls="kt_customer_view_details"
              >
                Shipping Information
                <span class="ms-2 rotate-180">
                  <span class="svg-icon svg-icon-3">
                    <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                  </span>
                </span>
              </div>
              <!--end::Billing toggle-->

              <!--begin::Billing form-->
              <div
                id="kt_modal_add_customer_billing_info"
                class="collapse show"
              >
                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2"
                    >Address Line 1</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="addressLine">
                    <el-input v-model="formData.addressLine" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2">Address Line 2</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-input v-model="formData.addressLine2" />
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">Town</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="town">
                    <el-input v-model="formData.town" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row g-9 mb-7">
                  <!--begin::Col-->
                  <div class="col-md-6 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-6 fw-bold mb-2"
                      >State / Province</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item prop="state">
                      <el-input v-model="formData.state" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Col-->

                  <!--begin::Col-->
                  <div class="col-md-6 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-6 fw-bold mb-2">Post Code</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item prop="postCode">
                      <el-input v-model="formData.postCode" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Country</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Country of origination"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select v-model="formData.country">
                    <el-option value="">Select a Country...</el-option>
                    <el-option value="AF">Afghanistan</el-option>
                    <el-option value="AX">Aland Islands</el-option>
                    <el-option value="AL">Albania</el-option>
                    <el-option value="DZ">Algeria</el-option>
                    <el-option value="AS">American Samoa</el-option>
                    <el-option value="AD">Andorra</el-option>
                    <el-option value="AO">Angola</el-option>
                    <el-option value="AI">Anguilla</el-option>
                    <el-option value="AQ">Antarctica</el-option>
                    <el-option value="AG">Antigua and Barbuda</el-option>
                    <el-option value="AR">Argentina</el-option>
                    <el-option value="AM">Armenia</el-option>
                    <el-option value="AW">Aruba</el-option>
                    <el-option value="AU">Australia</el-option>
                    <el-option value="AT">Austria</el-option>
                    <el-option value="AZ">Azerbaijan</el-option>
                    <el-option value="BS">Bahamas</el-option>
                    <el-option value="BH">Bahrain</el-option>
                    <el-option value="BD">Bangladesh</el-option>
                    <el-option value="BB">Barbados</el-option>
                    <el-option value="BY">Belarus</el-option>
                    <el-option value="BE">Belgium</el-option>
                    <el-option value="BZ">Belize</el-option>
                    <el-option value="BJ">Benin</el-option>
                    <el-option value="BM">Bermuda</el-option>
                    <el-option value="BT">Bhutan</el-option>
                    <el-option value="BO"
                      >Bolivia, Plurinational State of</el-option
                    >
                    <el-option value="BQ"
                      >Bonaire, Sint Eustatius and Saba</el-option
                    >
                    <el-option value="BA">Bosnia and Herzegovina</el-option>
                    <el-option value="BW">Botswana</el-option>
                    <el-option value="BV">Bouvet Island</el-option>
                    <el-option value="BR">Brazil</el-option>
                    <el-option value="IO"
                      >British Indian Ocean Territory</el-option
                    >
                    <el-option value="BN">Brunei Darussalam</el-option>
                    <el-option value="BG">Bulgaria</el-option>
                    <el-option value="BF">Burkina Faso</el-option>
                    <el-option value="BI">Burundi</el-option>
                    <el-option value="KH">Cambodia</el-option>
                    <el-option value="CM">Cameroon</el-option>
                    <el-option value="CA">Canada</el-option>
                    <el-option value="CV">Cape Verde</el-option>
                    <el-option value="KY">Cayman Islands</el-option>
                    <el-option value="CF">Central African Republic</el-option>
                    <el-option value="TD">Chad</el-option>
                    <el-option value="CL">Chile</el-option>
                    <el-option value="CN">China</el-option>
                    <el-option value="CX">Christmas Island</el-option>
                    <el-option value="CC">Cocos (Keeling) Islands</el-option>
                    <el-option value="CO">Colombia</el-option>
                    <el-option value="KM">Comoros</el-option>
                    <el-option value="CG">Congo</el-option>
                    <el-option value="CD">
                      Congo, the Democratic Republic of the
                    </el-option>
                    <el-option value="CK">Cook Islands</el-option>
                    <el-option value="CR">Costa Rica</el-option>
                    <el-option value="CI">Côte d'Ivoire</el-option>
                    <el-option value="HR">Croatia</el-option>
                    <el-option value="CU">Cuba</el-option>
                    <el-option value="CW">Curaçao</el-option>
                    <el-option value="CY">Cyprus</el-option>
                    <el-option value="CZ">Czech Republic</el-option>
                    <el-option value="DK">Denmark</el-option>
                    <el-option value="DJ">Djibouti</el-option>
                    <el-option value="DM">Dominica</el-option>
                    <el-option value="DO">Dominican Republic</el-option>
                    <el-option value="EC">Ecuador</el-option>
                    <el-option value="EG">Egypt</el-option>
                    <el-option value="SV">El Salvador</el-option>
                    <el-option value="GQ">Equatorial Guinea</el-option>
                    <el-option value="ER">Eritrea</el-option>
                    <el-option value="EE">Estonia</el-option>
                    <el-option value="ET">Ethiopia</el-option>
                    <el-option value="FK"
                      >Falkland Islands (Malvinas)</el-option
                    >
                    <el-option value="FO">Faroe Islands</el-option>
                    <el-option value="FJ">Fiji</el-option>
                    <el-option value="FI">Finland</el-option>
                    <el-option value="FR">France</el-option>
                    <el-option value="GF">French Guiana</el-option>
                    <el-option value="PF">French Polynesia</el-option>
                    <el-option value="TF"
                      >French Southern Territories</el-option
                    >
                    <el-option value="GA">Gabon</el-option>
                    <el-option value="GM">Gambia</el-option>
                    <el-option value="GE">Georgia</el-option>
                    <el-option value="DE">Germany</el-option>
                    <el-option value="GH">Ghana</el-option>
                    <el-option value="GI">Gibraltar</el-option>
                    <el-option value="GR">Greece</el-option>
                    <el-option value="GL">Greenland</el-option>
                    <el-option value="GD">Grenada</el-option>
                    <el-option value="GP">Guadeloupe</el-option>
                    <el-option value="GU">Guam</el-option>
                    <el-option value="GT">Guatemala</el-option>
                    <el-option value="GG">Guernsey</el-option>
                    <el-option value="GN">Guinea</el-option>
                    <el-option value="GW">Guinea-Bissau</el-option>
                    <el-option value="GY">Guyana</el-option>
                    <el-option value="HT">Haiti</el-option>
                    <el-option value="HM">
                      Heard Island and McDonald Islands
                    </el-option>
                    <el-option value="VA"
                      >Holy See (Vatican City State)</el-option
                    >
                    <el-option value="HN">Honduras</el-option>
                    <el-option value="HK">Hong Kong</el-option>
                    <el-option value="HU">Hungary</el-option>
                    <el-option value="IS">Iceland</el-option>
                    <el-option value="IN">India</el-option>
                    <el-option value="ID">Indonesia</el-option>
                    <el-option value="IR">Iran, Islamic Republic of</el-option>
                    <el-option value="IQ">Iraq</el-option>
                    <el-option value="IE">Ireland</el-option>
                    <el-option value="IM">Isle of Man</el-option>
                    <el-option value="IL">Israel</el-option>
                    <el-option value="IT">Italy</el-option>
                    <el-option value="JM">Jamaica</el-option>
                    <el-option value="JP">Japan</el-option>
                    <el-option value="JE">Jersey</el-option>
                    <el-option value="JO">Jordan</el-option>
                    <el-option value="KZ">Kazakhstan</el-option>
                    <el-option value="KE">Kenya</el-option>
                    <el-option value="KI">Kiribati</el-option>
                    <el-option value="KP">
                      Korea, Democratic People's Republic of
                    </el-option>
                    <el-option value="KW">Kuwait</el-option>
                    <el-option value="KG">Kyrgyzstan</el-option>
                    <el-option value="LA"
                      >Lao People's Democratic Republic</el-option
                    >
                    <el-option value="LV">Latvia</el-option>
                    <el-option value="LB">Lebanon</el-option>
                    <el-option value="LS">Lesotho</el-option>
                    <el-option value="LR">Liberia</el-option>
                    <el-option value="LY">Libya</el-option>
                    <el-option value="LI">Liechtenstein</el-option>
                    <el-option value="LT">Lithuania</el-option>
                    <el-option value="LU">Luxembourg</el-option>
                    <el-option value="MO">Macao</el-option>
                    <el-option value="MK">
                      Macedonia, the former Yugoslav Republic of
                    </el-option>
                    <el-option value="MG">Madagascar</el-option>
                    <el-option value="MW">Malawi</el-option>
                    <el-option value="MY">Malaysia</el-option>
                    <el-option value="MV">Maldives</el-option>
                    <el-option value="ML">Mali</el-option>
                    <el-option value="MT">Malta</el-option>
                    <el-option value="MH">Marshall Islands</el-option>
                    <el-option value="MQ">Martinique</el-option>
                    <el-option value="MR">Mauritania</el-option>
                    <el-option value="MU">Mauritius</el-option>
                    <el-option value="YT">Mayotte</el-option>
                    <el-option value="MX">Mexico</el-option>
                    <el-option value="FM"
                      >Micronesia, Federated States of</el-option
                    >
                    <el-option value="MD">Moldova, Republic of</el-option>
                    <el-option value="MC">Monaco</el-option>
                    <el-option value="MN">Mongolia</el-option>
                    <el-option value="ME">Montenegro</el-option>
                    <el-option value="MS">Montserrat</el-option>
                    <el-option value="MA">Morocco</el-option>
                    <el-option value="MZ">Mozambique</el-option>
                    <el-option value="MM">Myanmar</el-option>
                    <el-option value="NA">Namibia</el-option>
                    <el-option value="NR">Nauru</el-option>
                    <el-option value="NP">Nepal</el-option>
                    <el-option value="NL">Netherlands</el-option>
                    <el-option value="NC">New Caledonia</el-option>
                    <el-option value="NZ">New Zealand</el-option>
                    <el-option value="NI">Nicaragua</el-option>
                    <el-option value="NE">Niger</el-option>
                    <el-option value="NG">Nigeria</el-option>
                    <el-option value="NU">Niue</el-option>
                    <el-option value="NF">Norfolk Island</el-option>
                    <el-option value="MP">Northern Mariana Islands</el-option>
                    <el-option value="NO">Norway</el-option>
                    <el-option value="OM">Oman</el-option>
                    <el-option value="PK">Pakistan</el-option>
                    <el-option value="PW">Palau</el-option>
                    <el-option value="PS"
                      >Palestinian Territory, Occupied</el-option
                    >
                    <el-option value="PA">Panama</el-option>
                    <el-option value="PG">Papua New Guinea</el-option>
                    <el-option value="PY">Paraguay</el-option>
                    <el-option value="PE">Peru</el-option>
                    <el-option value="PH">Philippines</el-option>
                    <el-option value="PN">Pitcairn</el-option>
                    <el-option value="PL">Poland</el-option>
                    <el-option value="PT">Portugal</el-option>
                    <el-option value="PR">Puerto Rico</el-option>
                    <el-option value="QA">Qatar</el-option>
                    <el-option value="RE">Réunion</el-option>
                    <el-option value="RO">Romania</el-option>
                    <el-option value="RU">Russian Federation</el-option>
                    <el-option value="RW">Rwanda</el-option>
                    <el-option value="BL">Saint Barthélemy</el-option>
                    <el-option value="SH">
                      Saint Helena, Ascension and Tristan da Cunha
                    </el-option>
                    <el-option value="KN">Saint Kitts and Nevis</el-option>
                    <el-option value="LC">Saint Lucia</el-option>
                    <el-option value="MF">Saint Martin (French part)</el-option>
                    <el-option value="PM">Saint Pierre and Miquelon</el-option>
                    <el-option value="VC"
                      >Saint Vincent and the Grenadines</el-option
                    >
                    <el-option value="WS">Samoa</el-option>
                    <el-option value="SM">San Marino</el-option>
                    <el-option value="ST">Sao Tome and Principe</el-option>
                    <el-option value="SA">Saudi Arabia</el-option>
                    <el-option value="SN">Senegal</el-option>
                    <el-option value="RS">Serbia</el-option>
                    <el-option value="SC">Seychelles</el-option>
                    <el-option value="SL">Sierra Leone</el-option>
                    <el-option value="SG">Singapore</el-option>
                    <el-option value="SX">Sint Maarten (Dutch part)</el-option>
                    <el-option value="SK">Slovakia</el-option>
                    <el-option value="SI">Slovenia</el-option>
                    <el-option value="SB">Solomon Islands</el-option>
                    <el-option value="SO">Somalia</el-option>
                    <el-option value="ZA">South Africa</el-option>
                    <el-option value="GS">
                      South Georgia and the South Sandwich Islands
                    </el-option>
                    <el-option value="KR">South Korea</el-option>
                    <el-option value="SS">South Sudan</el-option>
                    <el-option value="ES">Spain</el-option>
                    <el-option value="LK">Sri Lanka</el-option>
                    <el-option value="SD">Sudan</el-option>
                    <el-option value="SR">Suriname</el-option>
                    <el-option value="SJ">Svalbard and Jan Mayen</el-option>
                    <el-option value="SZ">Swaziland</el-option>
                    <el-option value="SE">Sweden</el-option>
                    <el-option value="CH">Switzerland</el-option>
                    <el-option value="SY">Syrian Arab Republic</el-option>
                    <el-option value="TW">Taiwan, Province of China</el-option>
                    <el-option value="TJ">Tajikistan</el-option>
                    <el-option value="TZ"
                      >Tanzania, United Republic of</el-option
                    >
                    <el-option value="TH">Thailand</el-option>
                    <el-option value="TL">Timor-Leste</el-option>
                    <el-option value="TG">Togo</el-option>
                    <el-option value="TK">Tokelau</el-option>
                    <el-option value="TO">Tonga</el-option>
                    <el-option value="TT">Trinidad and Tobago</el-option>
                    <el-option value="TN">Tunisia</el-option>
                    <el-option value="TR">Turkey</el-option>
                    <el-option value="TM">Turkmenistan</el-option>
                    <el-option value="TC">Turks and Caicos Islands</el-option>
                    <el-option value="TV">Tuvalu</el-option>
                    <el-option value="UG">Uganda</el-option>
                    <el-option value="UA">Ukraine</el-option>
                    <el-option value="AE">United Arab Emirates</el-option>
                    <el-option value="GB">United Kingdom</el-option>
                    <el-option value="US">United States</el-option>
                    <el-option value="UY">Uruguay</el-option>
                    <el-option value="UZ">Uzbekistan</el-option>
                    <el-option value="VU">Vanuatu</el-option>
                    <el-option value="VE">
                      Venezuela, Bolivarian Republic of
                    </el-option>
                    <el-option value="VN">Vietnam</el-option>
                    <el-option value="VI">Virgin Islands</el-option>
                    <el-option value="WF">Wallis and Futuna</el-option>
                    <el-option value="EH">Western Sahara</el-option>
                    <el-option value="YE">Yemen</el-option>
                    <el-option value="ZM">Zambia</el-option>
                    <el-option value="ZW">Zimbabwe</el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Wrapper-->
                  <div class="d-flex flex-stack">
                    <!--begin::Label-->
                    <div class="me-5">
                      <!--begin::Label-->
                      <label class="fs-6 fw-bold"
                        >Use as a billing adderess?</label
                      >
                      <!--end::Label-->

                      <!--begin::Input-->
                      <div class="fs-7 fw-bold text-muted">
                        If you need more info, please check budget planning
                      </div>
                      <!--end::Input-->
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
                      <!--begin::Input-->
                      <input
                        class="form-check-input"
                        name="billing"
                        type="checkbox"
                        value="1"
                        id="kt_modal_add_customer_billing"
                        checked="checked"
                      />
                      <!--end::Input-->

                      <!--begin::Label-->
                      <span
                        class="form-check-label fw-bold text-muted"
                        for="kt_modal_add_customer_billing"
                      >
                        Yes
                      </span>
                      <!--end::Label-->
                    </label>
                    <!--end::Switch-->
                  </div>
                  <!--begin::Wrapper-->
                </div>
                <!--end::Input group-->
              </div>
              <!--end::Billing form-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_add_customer_cancel"
              class="btn btn-light me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref({
      name: "Sean Bean",
      email: "sean@dellito.com",
      description: "",
      addressLine: "101, Collins Street",
      addressLine2: "",
      town: "Melbourne",
      state: "Victoria",
      postCode: "3000",
      country: "US",
    });

    const rules = ref({
      name: [
        {
          required: true,
          message: "Customer name is required",
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: "Customer email is required",
          trigger: "change",
        },
      ],
      addressLine: [
        {
          required: true,
          message: "Address 1 is required",
          trigger: "change",
        },
      ],
      town: [
        {
          required: true,
          message: "Town is required",
          trigger: "change",
        },
      ],
      state: [
        {
          required: true,
          message: "State is required",
          trigger: "change",
        },
      ],
      postCode: [
        {
          required: true,
          message: "Post code is required",
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              hideModal(addCustomerModalRef.value);
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addCustomerModalRef,
    };
  },
});
</script>

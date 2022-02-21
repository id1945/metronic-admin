<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profile Details</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <Form
        id="kt_account_profile_details_form"
        class="form"
        novalidate="novalidate"
        @submit="saveChanges1()"
        :validation-schema="profileDetailsValidator"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Image input-->
              <div
                class="image-input image-input-outline"
                data-kt-image-input="true"
                style="background-image: url(media/avatars/blank.png)"
              >
                <!--begin::Preview existing avatar-->
                <div
                  class="image-input-wrapper w-125px h-125px"
                  :style="`background-image: url(${profileDetails.avatar})`"
                ></div>
                <!--end::Preview existing avatar-->

                <!--begin::Label-->
                <label
                  class="
                    btn btn-icon btn-circle btn-active-color-primary
                    w-25px
                    h-25px
                    bg-white
                    shadow
                  "
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="Change avatar"
                >
                  <i class="bi bi-pencil-fill fs-7"></i>

                  <!--begin::Inputs-->
                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="avatar_remove" />
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->

                <!--begin::Remove-->
                <span
                  class="
                    btn btn-icon btn-circle btn-active-color-primary
                    w-25px
                    h-25px
                    bg-white
                    shadow
                  "
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  @click="removeImage()"
                  title="Remove avatar"
                >
                  <i class="bi bi-x fs-2"></i>
                </span>
                <!--end::Remove-->
              </div>
              <!--end::Image input-->

              <!--begin::Hint-->
              <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
              <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Full Name</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <Field
                    type="text"
                    name="fname"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="First name"
                    v-model="profileDetails.name"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="fname" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <Field
                    type="text"
                    name="lname"
                    class="form-control form-control-lg form-control-solid"
                    placeholder="Last name"
                    v-model="profileDetails.surname"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="lname" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Company</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="company"
                class="form-control form-control-lg form-control-solid"
                placeholder="Company name"
                v-model="profileDetails.company"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="company" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              <span class="required">Contact Phone</span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="tel"
                name="phone"
                class="form-control form-control-lg form-control-solid"
                placeholder="Phone number"
                v-model="profileDetails.contactPhone"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6"
              >Company Site</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="website"
                class="form-control form-control-lg form-control-solid"
                placeholder="Company website"
                v-model="profileDetails.companySite"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="website" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              <span class="required">Country</span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Country of origination"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                as="select"
                name="country"
                class="form-select form-select-solid form-select-lg fw-bold"
                v-model="profileDetails.country"
              >
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia, Plurinational State of</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, the Democratic Republic of the
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option ue="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, the former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="KR">South Korea</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Vietnam</option>
                <option value="VI">Virgin Islands</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="country" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Language</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <!--begin::Input-->
              <Field
                as="select"
                name="language"
                class="form-select form-select-solid form-select-lg"
                v-model="profileDetails.language"
              >
                <option value="id">Bahasa Indonesia - Indonesian</option>
                <option value="msa">Bahasa Melayu - Malay</option>
                <option value="ca">Català - Catalan</option>
                <option value="cs">Čeština - Czech</option>
                <option value="da">Dansk - Danish</option>
                <option value="de">Deutsch - German</option>
                <option value="en">English</option>
                <option value="en-gb">English UK - British English</option>
                <option value="es">Español - Spanish</option>
                <option value="fil">Filipino</option>
                <option value="fr">Français - French</option>
                <option value="ga">Gaeilge - Irish (beta)</option>
                <option value="gl">Galego - Galician (beta)</option>
                <option value="hr">Hrvatski - Croatian</option>
                <option value="it">Italiano - Italian</option>
                <option value="hu">Magyar - Hungarian</option>
                <option value="nl">Nederlands - Dutch</option>
                <option value="no">Norsk - Norwegian</option>
                <option value="pl">Polski - Polish</option>
                <option value="pt">Português - Portuguese</option>
                <option value="ro">Română - Romanian</option>
                <option value="sk">Slovenčina - Slovak</option>
                <option value="fi">Suomi - Finnish</option>
                <option value="sv">Svenska - Swedish</option>
                <option value="vi">Tiếng Việt - Vietnamese</option>
                <option value="tr">Türkçe - Turkish</option>
                <option value="el">Ελληνικά - Greek</option>
                <option value="bg">Български език - Bulgarian</option>
                <option value="ru">Русский - Russian</option>
                <option value="sr">Српски - Serbian</option>
                <option value="uk">Українська мова - Ukrainian</option>
                <option value="he">עִבְרִית - Hebrew</option>
                <option value="ur">اردو - Urdu (beta)</option>
                <option value="ar">العربية - Arabic</option>
                <option value="fa">فارسی - Persian</option>
                <option value="mr">मराठी - Marathi</option>
                <option value="hi">हिन्दी - Hindi</option>
                <option value="bn">বাংলা - Bangla</option>
                <option value="gu">ગુજરાતી - Gujarati</option>
                <option value="ta">தமிழ் - Tamil</option>
                <option value="kn">ಕನ್ನಡ - Kannada</option>
                <option value="th">ภาษาไทย - Thai</option>
                <option value="ko">한국어 - Korean</option>
                <option value="ja">日本語 - Japanese</option>
                <option value="zh-cn">简体中文 - Simplified Chinese</option>
                <option value="zh-tw">繁體中文 - Traditional Chinese</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="language" />
                </div>
              </div>
              <!--end::Input-->

              <!--begin::Hint-->
              <div class="form-text">
                Please select a preferred language, including date, time, and
                number formatting.
              </div>
              <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Time Zone</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                as="select"
                name="timezone"
                class="form-select form-select-solid form-select-lg"
                v-model="profileDetails.timezone"
              >
                <option
                  data-bs-offset="-39600"
                  value="International Date Line West"
                >
                  (GMT-11:00) International Date Line West
                </option>
                <option data-bs-offset="-39600" value="Midway Island">
                  (GMT-11:00) Midway Island
                </option>
                <option data-bs-offset="-39600" value="Samoa">
                  (GMT-11:00) Samoa
                </option>
                <option data-bs-offset="-36000" value="Hawaii">
                  (GMT-10:00) Hawaii
                </option>
                <option data-bs-offset="-28800" value="Alaska">
                  (GMT-08:00) Alaska
                </option>
                <option
                  data-bs-offset="-25200"
                  value="Pacific Time (US &amp; Canada)"
                >
                  (GMT-07:00) Pacific Time (US &amp; Canada)
                </option>
                <option data-bs-offset="-25200" value="Tijuana">
                  (GMT-07:00) Tijuana
                </option>
                <option data-bs-offset="-25200" value="Arizona">
                  (GMT-07:00) Arizona
                </option>
                <option
                  data-bs-offset="-21600"
                  value="Mountain Time (US &amp; Canada)"
                >
                  (GMT-06:00) Mountain Time (US &amp; Canada)
                </option>
                <option data-bs-offset="-21600" value="Chihuahua">
                  (GMT-06:00) Chihuahua
                </option>
                <option data-bs-offset="-21600" value="Mazatlan">
                  (GMT-06:00) Mazatlan
                </option>
                <option data-bs-offset="-21600" value="Saskatchewan">
                  (GMT-06:00) Saskatchewan
                </option>
                <option data-bs-offset="-21600" value="Central America">
                  (GMT-06:00) Central America
                </option>
                <option
                  data-bs-offset="-18000"
                  value="Central Time (US &amp; Canada)"
                >
                  (GMT-05:00) Central Time (US &amp; Canada)
                </option>
                <option data-bs-offset="-18000" value="Guadalajara">
                  (GMT-05:00) Guadalajara
                </option>
                <option data-bs-offset="-18000" value="Mexico City">
                  (GMT-05:00) Mexico City
                </option>
                <option data-bs-offset="-18000" value="Monterrey">
                  (GMT-05:00) Monterrey
                </option>
                <option data-bs-offset="-18000" value="Bogota">
                  (GMT-05:00) Bogota
                </option>
                <option data-bs-offset="-18000" value="Lima">
                  (GMT-05:00) Lima
                </option>
                <option data-bs-offset="-18000" value="Quito">
                  (GMT-05:00) Quito
                </option>
                <option
                  data-bs-offset="-14400"
                  value="Eastern Time (US &amp; Canada)"
                >
                  (GMT-04:00) Eastern Time (US &amp; Canada)
                </option>
                <option data-bs-offset="-14400" value="Indiana (East)">
                  (GMT-04:00) Indiana (East)
                </option>
                <option data-bs-offset="-14400" value="Caracas">
                  (GMT-04:00) Caracas
                </option>
                <option data-bs-offset="-14400" value="La Paz">
                  (GMT-04:00) La Paz
                </option>
                <option data-bs-offset="-14400" value="Georgetown">
                  (GMT-04:00) Georgetown
                </option>
                <option data-bs-offset="-10800" value="Atlantic Time (Canada)">
                  (GMT-03:00) Atlantic Time (Canada)
                </option>
                <option data-bs-offset="-10800" value="Santiago">
                  (GMT-03:00) Santiago
                </option>
                <option data-bs-offset="-10800" value="Brasilia">
                  (GMT-03:00) Brasilia
                </option>
                <option data-bs-offset="-10800" value="Buenos Aires">
                  (GMT-03:00) Buenos Aires
                </option>
                <option data-bs-offset="-9000" value="Newfoundland">
                  (GMT-02:30) Newfoundland
                </option>
                <option data-bs-offset="-7200" value="Greenland">
                  (GMT-02:00) Greenland
                </option>
                <option data-bs-offset="-7200" value="Mid-Atlantic">
                  (GMT-02:00) Mid-Atlantic
                </option>
                <option data-bs-offset="-3600" value="Cape Verde Is.">
                  (GMT-01:00) Cape Verde Is.
                </option>
                <option data-bs-offset="0" value="Azores">(GMT) Azores</option>
                <option data-bs-offset="0" value="Monrovia">
                  (GMT) Monrovia
                </option>
                <option data-bs-offset="0" value="UTC">(GMT) UTC</option>
                <option data-bs-offset="3600" value="Dublin">
                  (GMT+01:00) Dublin
                </option>
                <option data-bs-offset="3600" value="Edinburgh">
                  (GMT+01:00) Edinburgh
                </option>
                <option data-bs-offset="3600" value="Lisbon">
                  (GMT+01:00) Lisbon
                </option>
                <option data-bs-offset="3600" value="London">
                  (GMT+01:00) London
                </option>
                <option data-bs-offset="3600" value="Casablanca">
                  (GMT+01:00) Casablanca
                </option>
                <option data-bs-offset="3600" value="West Central Africa">
                  (GMT+01:00) West Central Africa
                </option>
                <option data-bs-offset="7200" value="Belgrade">
                  (GMT+02:00) Belgrade
                </option>
                <option data-bs-offset="7200" value="Bratislava">
                  (GMT+02:00) Bratislava
                </option>
                <option data-bs-offset="7200" value="Budapest">
                  (GMT+02:00) Budapest
                </option>
                <option data-bs-offset="7200" value="Ljubljana">
                  (GMT+02:00) Ljubljana
                </option>
                <option data-bs-offset="7200" value="Prague">
                  (GMT+02:00) Prague
                </option>
                <option data-bs-offset="7200" value="Sarajevo">
                  (GMT+02:00) Sarajevo
                </option>
                <option data-bs-offset="7200" value="Skopje">
                  (GMT+02:00) Skopje
                </option>
                <option data-bs-offset="7200" value="Warsaw">
                  (GMT+02:00) Warsaw
                </option>
                <option data-bs-offset="7200" value="Zagreb">
                  (GMT+02:00) Zagreb
                </option>
                <option data-bs-offset="7200" value="Brussels">
                  (GMT+02:00) Brussels
                </option>
                <option data-bs-offset="7200" value="Copenhagen">
                  (GMT+02:00) Copenhagen
                </option>
                <option data-bs-offset="7200" value="Madrid">
                  (GMT+02:00) Madrid
                </option>
                <option data-bs-offset="7200" value="Paris">
                  (GMT+02:00) Paris
                </option>
                <option data-bs-offset="7200" value="Amsterdam">
                  (GMT+02:00) Amsterdam
                </option>
                <option data-bs-offset="7200" value="Berlin">
                  (GMT+02:00) Berlin
                </option>
                <option data-bs-offset="7200" value="Bern">
                  (GMT+02:00) Bern
                </option>
                <option data-bs-offset="7200" value="Rome">
                  (GMT+02:00) Rome
                </option>
                <option data-bs-offset="7200" value="Stockholm">
                  (GMT+02:00) Stockholm
                </option>
                <option data-bs-offset="7200" value="Vienna">
                  (GMT+02:00) Vienna
                </option>
                <option data-bs-offset="7200" value="Cairo">
                  (GMT+02:00) Cairo
                </option>
                <option data-bs-offset="7200" value="Harare">
                  (GMT+02:00) Harare
                </option>
                <option data-bs-offset="7200" value="Pretoria">
                  (GMT+02:00) Pretoria
                </option>
                <option data-bs-offset="10800" value="Bucharest">
                  (GMT+03:00) Bucharest
                </option>
                <option data-bs-offset="10800" value="Helsinki">
                  (GMT+03:00) Helsinki
                </option>
                <option data-bs-offset="10800" value="Kiev">
                  (GMT+03:00) Kiev
                </option>
                <option data-bs-offset="10800" value="Kyiv">
                  (GMT+03:00) Kyiv
                </option>
                <option data-bs-offset="10800" value="Riga">
                  (GMT+03:00) Riga
                </option>
                <option data-bs-offset="10800" value="Sofia">
                  (GMT+03:00) Sofia
                </option>
                <option data-bs-offset="10800" value="Tallinn">
                  (GMT+03:00) Tallinn
                </option>
                <option data-bs-offset="10800" value="Vilnius">
                  (GMT+03:00) Vilnius
                </option>
                <option data-bs-offset="10800" value="Athens">
                  (GMT+03:00) Athens
                </option>
                <option data-bs-offset="10800" value="Istanbul">
                  (GMT+03:00) Istanbul
                </option>
                <option data-bs-offset="10800" value="Minsk">
                  (GMT+03:00) Minsk
                </option>
                <option data-bs-offset="10800" value="Jerusalem">
                  (GMT+03:00) Jerusalem
                </option>
                <option data-bs-offset="10800" value="Moscow">
                  (GMT+03:00) Moscow
                </option>
                <option data-bs-offset="10800" value="St. Petersburg">
                  (GMT+03:00) St. Petersburg
                </option>
                <option data-bs-offset="10800" value="Volgograd">
                  (GMT+03:00) Volgograd
                </option>
                <option data-bs-offset="10800" value="Kuwait">
                  (GMT+03:00) Kuwait
                </option>
                <option data-bs-offset="10800" value="Riyadh">
                  (GMT+03:00) Riyadh
                </option>
                <option data-bs-offset="10800" value="Nairobi">
                  (GMT+03:00) Nairobi
                </option>
                <option data-bs-offset="10800" value="Baghdad">
                  (GMT+03:00) Baghdad
                </option>
                <option data-bs-offset="14400" value="Abu Dhabi">
                  (GMT+04:00) Abu Dhabi
                </option>
                <option data-bs-offset="14400" value="Muscat">
                  (GMT+04:00) Muscat
                </option>
                <option data-bs-offset="14400" value="Baku">
                  (GMT+04:00) Baku
                </option>
                <option data-bs-offset="14400" value="Tbilisi">
                  (GMT+04:00) Tbilisi
                </option>
                <option data-bs-offset="14400" value="Yerevan">
                  (GMT+04:00) Yerevan
                </option>
                <option data-bs-offset="16200" value="Tehran">
                  (GMT+04:30) Tehran
                </option>
                <option data-bs-offset="16200" value="Kabul">
                  (GMT+04:30) Kabul
                </option>
                <option data-bs-offset="18000" value="Ekaterinburg">
                  (GMT+05:00) Ekaterinburg
                </option>
                <option data-bs-offset="18000" value="Islamabad">
                  (GMT+05:00) Islamabad
                </option>
                <option data-bs-offset="18000" value="Karachi">
                  (GMT+05:00) Karachi
                </option>
                <option data-bs-offset="18000" value="Tashkent">
                  (GMT+05:00) Tashkent
                </option>
                <option data-bs-offset="19800" value="Chennai">
                  (GMT+05:30) Chennai
                </option>
                <option data-bs-offset="19800" value="Kolkata">
                  (GMT+05:30) Kolkata
                </option>
                <option data-bs-offset="19800" value="Mumbai">
                  (GMT+05:30) Mumbai
                </option>
                <option data-bs-offset="19800" value="New Delhi">
                  (GMT+05:30) New Delhi
                </option>
                <option data-bs-offset="19800" value="Sri Jayawardenepura">
                  (GMT+05:30) Sri Jayawardenepura
                </option>
                <option data-bs-offset="20700" value="Kathmandu">
                  (GMT+05:45) Kathmandu
                </option>
                <option data-bs-offset="21600" value="Astana">
                  (GMT+06:00) Astana
                </option>
                <option data-bs-offset="21600" value="Dhaka">
                  (GMT+06:00) Dhaka
                </option>
                <option data-bs-offset="21600" value="Almaty">
                  (GMT+06:00) Almaty
                </option>
                <option data-bs-offset="21600" value="Urumqi">
                  (GMT+06:00) Urumqi
                </option>
                <option data-bs-offset="23400" value="Rangoon">
                  (GMT+06:30) Rangoon
                </option>
                <option data-bs-offset="25200" value="Novosibirsk">
                  (GMT+07:00) Novosibirsk
                </option>
                <option data-bs-offset="25200" value="Bangkok">
                  (GMT+07:00) Bangkok
                </option>
                <option data-bs-offset="25200" value="Hanoi">
                  (GMT+07:00) Hanoi
                </option>
                <option data-bs-offset="25200" value="Jakarta">
                  (GMT+07:00) Jakarta
                </option>
                <option data-bs-offset="25200" value="Krasnoyarsk">
                  (GMT+07:00) Krasnoyarsk
                </option>
                <option data-bs-offset="28800" value="Beijing">
                  (GMT+08:00) Beijing
                </option>
                <option data-bs-offset="28800" value="Chongqing">
                  (GMT+08:00) Chongqing
                </option>
                <option data-bs-offset="28800" value="Hong Kong">
                  (GMT+08:00) Hong Kong
                </option>
                <option data-bs-offset="28800" value="Kuala Lumpur">
                  (GMT+08:00) Kuala Lumpur
                </option>
                <option data-bs-offset="28800" value="Singapore">
                  (GMT+08:00) Singapore
                </option>
                <option data-bs-offset="28800" value="Taipei">
                  (GMT+08:00) Taipei
                </option>
                <option data-bs-offset="28800" value="Perth">
                  (GMT+08:00) Perth
                </option>
                <option data-bs-offset="28800" value="Irkutsk">
                  (GMT+08:00) Irkutsk
                </option>
                <option data-bs-offset="28800" value="Ulaan Bataar">
                  (GMT+08:00) Ulaan Bataar
                </option>
                <option data-bs-offset="32400" value="Seoul">
                  (GMT+09:00) Seoul
                </option>
                <option data-bs-offset="32400" value="Osaka">
                  (GMT+09:00) Osaka
                </option>
                <option data-bs-offset="32400" value="Sapporo">
                  (GMT+09:00) Sapporo
                </option>
                <option data-bs-offset="32400" value="Tokyo">
                  (GMT+09:00) Tokyo
                </option>
                <option data-bs-offset="32400" value="Yakutsk">
                  (GMT+09:00) Yakutsk
                </option>
                <option data-bs-offset="34200" value="Darwin">
                  (GMT+09:30) Darwin
                </option>
                <option data-bs-offset="34200" value="Adelaide">
                  (GMT+09:30) Adelaide
                </option>
                <option data-bs-offset="36000" value="Canberra">
                  (GMT+10:00) Canberra
                </option>
                <option data-bs-offset="36000" value="Melbourne">
                  (GMT+10:00) Melbourne
                </option>
                <option data-bs-offset="36000" value="Sydney">
                  (GMT+10:00) Sydney
                </option>
                <option data-bs-offset="36000" value="Brisbane">
                  (GMT+10:00) Brisbane
                </option>
                <option data-bs-offset="36000" value="Hobart">
                  (GMT+10:00) Hobart
                </option>
                <option data-bs-offset="36000" value="Vladivostok">
                  (GMT+10:00) Vladivostok
                </option>
                <option data-bs-offset="36000" value="Guam">
                  (GMT+10:00) Guam
                </option>
                <option data-bs-offset="36000" value="Port Moresby">
                  (GMT+10:00) Port Moresby
                </option>
                <option data-bs-offset="36000" value="Solomon Is.">
                  (GMT+10:00) Solomon Is.
                </option>
                <option data-bs-offset="39600" value="Magadan">
                  (GMT+11:00) Magadan
                </option>
                <option data-bs-offset="39600" value="New Caledonia">
                  (GMT+11:00) New Caledonia
                </option>
                <option data-bs-offset="43200" value="Fiji">
                  (GMT+12:00) Fiji
                </option>
                <option data-bs-offset="43200" value="Kamchatka">
                  (GMT+12:00) Kamchatka
                </option>
                <option data-bs-offset="43200" value="Marshall Is.">
                  (GMT+12:00) Marshall Is.
                </option>
                <option data-bs-offset="43200" value="Auckland">
                  (GMT+12:00) Auckland
                </option>
                <option data-bs-offset="43200" value="Wellington">
                  (GMT+12:00) Wellington
                </option>
                <option data-bs-offset="46800" value="Nuku'alofa">
                  (GMT+13:00) Nuku'alofa
                </option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="timezone" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Currency</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                as="select"
                name="currency"
                class="form-select form-select-solid form-select-lg"
                v-model="profileDetails.currency"
              >
                <option data-kt-flag="flags/united-states.svg" value="USD">
                  <b>USD</b>&#160;-&#160;USA dollar
                </option>
                <option data-kt-flag="flags/united-kingdom.svg" value="GBP">
                  <b>GBP</b>&#160;-&#160;British pound
                </option>
                <option data-kt-flag="flags/australia.svg" value="AUD">
                  <b>AUD</b>&#160;-&#160;Australian dollar
                </option>
                <option data-kt-flag="flags/japan.svg" value="JPY">
                  <b>JPY</b>&#160;-&#160;Japanese yen
                </option>
                <option data-kt-flag="flags/sweden.svg" value="SEK">
                  <b>SEK</b>&#160;-&#160;Swedish krona
                </option>
                <option data-kt-flag="flags/canada.svg" value="CAD">
                  <b>CAD</b>&#160;-&#160;Canadian dollar
                </option>
                <option data-kt-flag="flags/switzerland.svg" value="CHF">
                  <b>CHF</b>&#160;-&#160;Swiss franc
                </option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="currency" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6"
              >Communication</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <!--begin::Options-->
              <div class="d-flex align-items-center mt-3">
                <!--begin::Option-->
                <label
                  class="form-check form-check-inline form-check-solid me-5"
                >
                  <input
                    class="form-check-input"
                    name="communication[]"
                    type="checkbox"
                  />
                  <span class="fw-bold ps-2 fs-6"> Email </span>
                </label>
                <!--end::Option-->

                <!--begin::Option-->
                <label class="form-check form-check-inline form-check-solid">
                  <input
                    class="form-check-input"
                    name="communication[]"
                    type="checkbox"
                  />
                  <span class="fw-bold ps-2 fs-6"> Phone </span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Options-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-0">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6"
              >Allow Marketing</label
            >
            <!--begin::Label-->

            <!--begin::Label-->
            <div class="col-lg-8 d-flex align-items-center">
              <div class="form-check form-check-solid form-switch fv-row">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="allowmarketing"
                />
                <label class="form-check-label" for="allowmarketing"></label>
              </div>
            </div>
            <!--begin::Label-->
          </div>
          <!--end::Input group-->
        </div>
        <!--end::Card body-->

        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="reset"
            class="btn btn-white btn-active-light-primary me-2"
          >
            Discard
          </button>

          <button
            type="submit"
            id="kt_account_profile_details_submit"
            ref="submitButton1"
            class="btn btn-primary"
          >
            <span class="indicator-label"> Save Changes </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Actions-->
      </Form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->

  <!--begin::Sign-in Method-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_signin_method"
    >
      <div class="card-title m-0">
        <h3 class="fw-boldest m-0">Sign-in Method</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_signin_method" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <!--begin::Email Address-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div id="kt_signin_email" :class="{ 'd-none': emailFormDisplay }">
            <div class="fs-4 fw-boldest mb-1">Email Address</div>
            <div class="fs-6 fw-bold text-gray-600">support@keenthemes.com</div>
          </div>

          <div
            id="kt_signin_email_edit"
            :class="{ 'd-none': !emailFormDisplay }"
            class="flex-row-fluid"
          >
            <!--begin::Form-->
            <Form
              id="kt_signin_change_email"
              class="form"
              novalidate="novalidate"
              @submit="updateEmail()"
              :validation-schema="changeEmail"
            >
              <div class="row mb-6">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <div class="fv-row mb-0">
                    <label
                      for="emailaddress"
                      class="form-label fs-6 fw-bolder mb-3"
                      >Enter New Email Address</label
                    >
                    <Field
                      type="email"
                      class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                      id="emailaddress"
                      placeholder="Email Address"
                      name="emailaddress"
                      value="support@keenthemes.com"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="emailaddress" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="fv-row mb-0">
                    <label
                      for="confirmemailpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >Confirm Password</label
                    >
                    <Field
                      type="password"
                      class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                      name="confirmemailpassword"
                      id="confirmemailpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmemailpassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                  id="kt_signin_submit"
                  type="submit"
                  ref="updateEmailButton"
                  class="btn btn-primary me-2 px-6"
                >
                  <span class="indicator-label"> Update Email </span>
                  <span class="indicator-progress">
                    Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                  id="kt_signin_cancel"
                  type="button"
                  class="btn btn-color-gray-400 btn-active-light-primary px-6"
                  @click="emailFormDisplay = !emailFormDisplay"
                >
                  Cancel
                </button>
              </div>
            </Form>
            <!--end::Form-->
          </div>
          <div
            id="kt_signin_email_button"
            :class="{ 'd-none': emailFormDisplay }"
            class="ms-auto"
          >
            <button
              class="btn btn-light fw-boldest px-6"
              @click="emailFormDisplay = !emailFormDisplay"
            >
              Change Email
            </button>
          </div>
        </div>
        <!--end::Email Address-->

        <!--begin::Password-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div
            id="kt_signin_password"
            :class="{ 'd-none': passwordFormDisplay }"
          >
            <div class="fs-4 fw-boldest mb-1">Password</div>
            <div class="fs-6 fw-bold text-gray-600">************</div>
          </div>
          <div
            id="kt_signin_password_edit"
            class="flex-row-fluid"
            :class="{ 'd-none': !passwordFormDisplay }"
          >
            <div class="fs-6 fw-bold text-gray-600 mb-4">
              Password must be at least 8 character and contain symbols
            </div>

            <!--begin::Form-->
            <Form
              id="kt_signin_change_password"
              class="form"
              novalidate="novalidate"
              @submit="updatePassword()"
              :validation-schema="changePassword"
            >
              <div class="row mb-6">
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="currentpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >Current Password</label
                    >
                    <Field
                      type="password"
                      class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                      name="currentpassword"
                      id="currentpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="currentpassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="newpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >New Password</label
                    >
                    <Field
                      type="password"
                      class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                      name="newpassword"
                      id="newpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="newpassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="confirmpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >Confirm New Password</label
                    >
                    <Field
                      type="password"
                      class="
                        form-control form-control-lg form-control-solid
                        fw-bold
                        fs-6
                      "
                      name="confirmpassword"
                      id="confirmpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmpassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                  id="kt_password_submit"
                  type="submit"
                  ref="updatePasswordButton"
                  class="btn btn-primary me-2 px-6"
                >
                  <span class="indicator-label"> Update Password </span>
                  <span class="indicator-progress">
                    Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                  id="kt_password_cancel"
                  type="button"
                  @click="passwordFormDisplay = !passwordFormDisplay"
                  class="btn btn-color-gray-400 btn-active-light-primary px-6"
                >
                  Cancel
                </button>
              </div>
            </Form>
            <!--end::Form-->
          </div>
          <div
            id="kt_signin_password_button"
            class="ms-auto"
            :class="{ 'd-none': passwordFormDisplay }"
          >
            <button
              @click="passwordFormDisplay = !passwordFormDisplay"
              class="btn btn-light fw-boldest"
            >
              Reset Password
            </button>
          </div>
        </div>
        <!--end::Password-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Sign-in Method-->

  <!--begin::Connected Accounts-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_connected_accounts"
      aria-expanded="true"
      aria-controls="kt_account_connected_accounts"
    >
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Connected Accounts</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_connected_accounts" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <div
          class="
            notice
            d-flex
            bg-light-primary
            rounded
            border-primary border border-dashed
            mb-9
            p-6
          "
        >
          <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
            <inline-svg src="media/icons/duotune/art/art006.svg" />
          </span>

          <!--begin::Wrapper-->
          <div class="d-flex flex-stack flex-grow-1">
            <!--begin::Content-->
            <div class="fw-bold">
              <div class="fs-6 text-gray-600">
                Two-factor authentication adds an extra layer of security to
                your account. To log in, in you'll need to provide a 4 digit
                amazing code. <a href="#" class="fw-bolder">Learn More</a>
              </div>
            </div>
            <!--end::Content-->
          </div>
          <!--end::Wrapper-->
        </div>

        <!--begin::Items-->
        <div class="py-2">
          <!--begin::Item-->
          <div class="d-flex flex-stack">
            <div class="d-flex">
              <img
                src="media/svg/brand-logos/google-icon.svg"
                class="w-30px me-6"
                alt=""
              />

              <div class="d-flex flex-column">
                <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder"
                  >Google</a
                >
                <div class="fs-6 fw-bold text-gray-400">
                  Plan properly your workflow
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check form-check-solid form-switch">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="googleswitch"
                  checked
                />
                <label class="form-check-label" for="googleswitch"></label>
              </div>
            </div>
          </div>
          <!--end::Item-->

          <div class="separator separator-dashed my-5"></div>

          <!--begin::Item-->
          <div class="d-flex flex-stack">
            <div class="d-flex">
              <img
                src="media/svg/brand-logos/github.svg"
                class="w-30px me-6"
                alt=""
              />

              <div class="d-flex flex-column">
                <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder"
                  >Github</a
                >
                <div class="fs-6 fw-bold text-gray-400">
                  Keep eye on on your Repositories
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check form-check-solid form-switch">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="githubswitch"
                  checked
                />
                <label class="form-check-label" for="githubswitch"></label>
              </div>
            </div>
          </div>
          <!--end::Item-->

          <div class="separator separator-dashed my-5"></div>

          <!--begin::Item-->
          <div class="d-flex flex-stack">
            <div class="d-flex">
              <img
                src="media/svg/brand-logos/slack-icon.svg"
                class="w-30px me-6"
                alt=""
              />

              <div class="d-flex flex-column">
                <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder"
                  >Slack</a
                >
                <div class="fs-6 fw-bold text-gray-400">
                  Integrate Projects Discussions
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check form-check-solid form-switch">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="slackswitch"
                />
                <label class="form-check-label" for="slackswitch"></label>
              </div>
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--end::Items-->
      </div>
      <!--end::Card body-->

      <!--begin::Card footer-->
      <div class="card-footer d-flex justify-content-end py-6 px-9">
        <button class="btn btn-white btn-active-light-primary me-2">
          Discard
        </button>
        <button
          ref="submitButton2"
          class="btn btn-primary"
          @click="saveChanges2()"
        >
          <span class="indicator-label"> Save Changes </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Connected Accounts-->

  <!--begin::Notifications-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_email_preferences"
      aria-expanded="true"
      aria-controls="kt_account_email_preferences"
    >
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Email Preferences</h3>
      </div>
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_email_preferences" class="collapse show">
      <!--begin::Form-->
      <form class="form" @submit.prevent="saveChanges3()">
        <!--begin::Card body-->
        <div class="card-body border-top px-9 py-9">
          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Successful Payments</span>
              <span class="text-muted fs-6"
                >Receive a notification for every successful payment.</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->

          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              checked
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Payouts</span>
              <span class="text-muted fs-6"
                >Receive a notification for every initiated payout.</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->

          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Fee Collection</span>
              <span class="text-muted fs-6"
                >Receive a notification each time you collect a fee from
                sales</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->

          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              checked
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Customer Payment Dispute</span>
              <span class="text-muted fs-6"
                >Receive a notification if a payment is disputed by a customer
                and for dispute purposes.</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->

          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Refund Alerts</span>
              <span class="text-muted fs-6"
                >Receive a notification if a payment is stated as risk by the
                Finance Department.</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->

          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              checked
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Invoice Payments</span>
              <span class="text-muted fs-6"
                >Receive a notification if a customer sends an incorrect amount
                to pay their invoice.</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->

          <!--begin::Option-->
          <label
            class="
              form-check form-check-custom form-check-solid
              align-items-start
            "
          >
            <!--begin::Input-->
            <input
              class="form-check-input me-3"
              type="checkbox"
              name="email-preferences1"
              value="1"
            />
            <!--end::Input-->

            <!--begin::Label-->
            <span class="form-check-label d-flex flex-column align-items-start">
              <span class="fw-bolder fs-5 mb-0">Webhook API Endpoints</span>
              <span class="text-muted fs-6"
                >Receive notifications for consistently failing webhook API
                endpoints.</span
              >
            </span>
            <!--end::Label-->
          </label>
          <!--end::Option-->
          <!--begin::Option-->
          <div class="separator separator-dashed my-6"></div>
          <!--end::Option-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button class="btn btn-white btn-active-light-primary me-2">
            Discard
          </button>
          <button
            ref="submitButton3"
            type="submit"
            class="btn btn-primary px-6"
          >
            <span class="indicator-label"> Save Changes </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Card footer-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Notifications-->

  <!--begin::Notifications-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_notifications"
      aria-expanded="true"
      aria-controls="kt_account_notifications"
    >
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Notifications</h3>
      </div>
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_notifications" class="collapse show">
      <!--begin::Form-->
      <form class="form" @submit.prevent="saveChanges4()">
        <!--begin::Card body-->
        <div class="card-body border-top px-9 pt-3 pb-4">
          <!--begin::Table-->
          <div class="table-responsive">
            <table
              class="table table-row-dashed border-gray-300 align-middle gy-6"
            >
              <tbody class="fs-6 fw-bold">
                <!--begin::Table row-->
                <tr>
                  <td class="min-w-250px fs-4 fw-bolder">Notifications</td>
                  <td class="w-125px">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="kt_settings_notification_email"
                        checked
                        data-kt-check="true"
                        data-kt-check-target="[data-kt-settings-notification=email]"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="kt_settings_notification_email"
                      >
                        Email
                      </label>
                    </div>
                  </td>
                  <td class="w-125px">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="kt_settings_notification_phone"
                        checked
                        data-kt-check="true"
                        data-kt-check-target="[data-kt-settings-notification=phone]"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="kt_settings_notification_phone"
                      >
                        Phone
                      </label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td>Billing Updates</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                        id="billing1"
                        checked
                        data-kt-settings-notification="email"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="billing1"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="billing2"
                        checked
                        data-kt-settings-notification="phone"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="billing2"
                      ></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td>New Team Members</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="team1"
                        checked
                        data-kt-settings-notification="email"
                      />
                      <label class="form-check-label ps-2" for="team1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="team2"
                        data-kt-settings-notification="phone"
                      />
                      <label class="form-check-label ps-2" for="team2"></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td>Completed Projects</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="project1"
                        data-kt-settings-notification="email"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="project1"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="project2"
                        checked
                        data-kt-settings-notification="phone"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="project2"
                      ></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td class="border-bottom-0">Newsletters</td>
                  <td class="border-bottom-0">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter1"
                        data-kt-settings-notification="email"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="newsletter1"
                      ></label>
                    </div>
                  </td>
                  <td class="border-bottom-0">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter2"
                        data-kt-settings-notification="phone"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="newsletter2"
                      ></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button class="btn btn-white btn-active-light-primary me-2">
            Discard
          </button>
          <button
            ref="submitButton4"
            type="submit"
            class="btn btn-primary px-6"
          >
            <span class="indicator-label"> Save Changes </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Card footer-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Notifications-->

  <!--begin::Deactivate Account-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_deactivate"
      aria-expanded="true"
      aria-controls="kt_account_deactivate"
    >
      <div class="card-title m-0">
        <h3 class="fw-boldest m-0">Deactivate Account</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_deactivate" class="collapse show">
      <!--begin::Form-->
      <form
        id="kt_account_deactivate_form"
        class="form"
        @submit.prevent="deactivateAccount()"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <div
            class="
              notice
              d-flex
              bg-light-warning
              rounded
              border-warning border border-dashed
              mb-9
              p-6
            "
          >
            <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
              <inline-svg src="media/icons/duotune/general/gen044.svg" />
            </span>
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-bold">
                <h4 class="text-gray-800 fw-bolder">
                  You Are Deactivating Your Account
                </h4>

                <div class="fs-6 text-gray-600">
                  For extra security, this requires you to confirm your email or
                  phone number when you reset yousignr password. <br /><a
                    class="fw-bolder"
                    href="#"
                    >Learn more</a
                  >
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>

          <!--begin::Form input row-->
          <div class="form-check form-check-solid fv-row">
            <input
              name="deactivate"
              class="form-check-input"
              type="checkbox"
              value=""
              id="deactivate"
            />
            <label class="form-check-label fw-bold ps-2 fs-6" for="deactivate"
              >Confirm Account Deactivation</label
            >
          </div>
          <!--end::Form input row-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            id="kt_account_deactivate_account_submit"
            ref="submitButton5"
            type="submit"
            class="btn btn-danger fw-bold"
          >
            <span class="indicator-label"> Deactivate Account </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Card footer-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Deactivate Account-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

interface ProfileDetails {
  avatar: string;
  name: string;
  surname: string;
  company: string;
  contactPhone: string;
  companySite: string;
  country: string;
  language: string;
  timezone: string;
  currency: string;
  communications: {
    email: boolean;
    phone: boolean;
  };
  allowMarketing: boolean;
}

export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const submitButton1 = ref<HTMLElement | null>(null);
    const submitButton2 = ref<HTMLElement | null>(null);
    const submitButton3 = ref<HTMLElement | null>(null);
    const submitButton4 = ref<HTMLElement | null>(null);
    const submitButton5 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);

    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);

    const profileDetailsValidator = Yup.object().shape({
      fname: Yup.string().required().label("First name"),
      lname: Yup.string().required().label("Last name"),
      company: Yup.string().required().label("Company"),
      phone: Yup.string().required().label("Contact phone"),
      website: Yup.string().label("Webside"),
      country: Yup.string().required().label("Country"),
      language: Yup.string().required().label("Language"),
      timezone: Yup.string().required().label("Timezone"),
      currency: Yup.string().required().label("Currency"),
    });

    const changeEmail = Yup.object().shape({
      emailaddress: Yup.string().required().email().label("Email"),
      confirmemailpassword: Yup.string().required().label("Password"),
    });

    const changePassword = Yup.object().shape({
      currentpassword: Yup.string().required().label("Current password"),
      newpassword: Yup.string().min(4).required().label("Password"),
      confirmpassword: Yup.string()
        .min(4)
        .required()
        .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
        .label("Password Confirmation"),
    });

    const profileDetails = ref<ProfileDetails>({
      avatar: "media/avatars/150-2.jpg",
      name: "Max",
      surname: "Smith",
      company: "Keenthemes",
      contactPhone: "044 3276 454 935",
      companySite: "keenthemes.com",
      country: "MY",
      language: "msa",
      timezone: "Kuala Lumpur",
      currency: "USD",
      communications: {
        email: false,
        phone: false,
      },
      allowMarketing: false,
    });

    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton1.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges2 = () => {
      if (submitButton2.value) {
        // Activate indicator
        submitButton2.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton2.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges3 = () => {
      if (submitButton3.value) {
        // Activate indicator
        submitButton3.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton3.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges4 = () => {
      if (submitButton4.value) {
        // Activate indicator
        submitButton4.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton4.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const deactivateAccount = () => {
      if (submitButton5.value) {
        // Activate indicator
        submitButton5.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton5.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Email is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            emailFormDisplay.value = false;
          });
        }, 2000);
      }
    };

    const updateEmail = () => {
      console.log(updateEmailButton.value);

      if (updateEmailButton.value) {
        // Activate indicator
        updateEmailButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updateEmailButton.value?.removeAttribute("data-kt-indicator");

          emailFormDisplay.value = false;
        }, 2000);
      }
    };

    const updatePassword = () => {
      if (updatePasswordButton.value) {
        // Activate indicator
        updatePasswordButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updatePasswordButton.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Password is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            passwordFormDisplay.value = false;
          });
        }, 2000);
      }
    };

    const removeImage = () => {
      profileDetails.value.avatar = "media/avatars/blank.png";
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Settings", ["Account"]);
    });

    return {
      submitButton1,
      submitButton2,
      submitButton3,
      submitButton4,
      submitButton5,
      saveChanges1,
      saveChanges2,
      saveChanges3,
      saveChanges4,
      deactivateAccount,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      removeImage,
      profileDetailsValidator,
      changeEmail,
      changePassword,
      updateEmailButton,
      updatePasswordButton,
      updateEmail,
      updatePassword,
    };
  },
});
</script>

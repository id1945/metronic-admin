import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const ProfileDetails: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Profile Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lName')}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lName}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company</label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Company name'
                  {...formik.getFieldProps('company')}
                />
                {formik.touched.company && formik.errors.company && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.company}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Contact Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...formik.getFieldProps('contactPhone')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Company Site</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Company website'
                  {...formik.getFieldProps('companySite')}
                />
                {formik.touched.companySite && formik.errors.companySite && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.companySite}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Country</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('country')}
                >
                  <option value=''>Select a Country...</option>
                  <option value='AF'>Afghanistan</option>
                  <option value='AX'>Aland Islands</option>
                  <option value='AL'>Albania</option>
                  <option value='DZ'>Algeria</option>
                  <option value='AS'>American Samoa</option>
                  <option value='AD'>Andorra</option>
                  <option value='AO'>Angola</option>
                  <option value='AI'>Anguilla</option>
                  <option value='AQ'>Antarctica</option>
                  <option value='AG'>Antigua and Barbuda</option>
                  <option value='AR'>Argentina</option>
                  <option value='AM'>Armenia</option>
                  <option value='AW'>Aruba</option>
                  <option value='AU'>Australia</option>
                  <option value='AT'>Austria</option>
                  <option value='AZ'>Azerbaijan</option>
                  <option value='BS'>Bahamas</option>
                  <option value='BH'>Bahrain</option>
                  <option value='BD'>Bangladesh</option>
                  <option value='BB'>Barbados</option>
                  <option value='BY'>Belarus</option>
                  <option value='BE'>Belgium</option>
                  <option value='BZ'>Belize</option>
                  <option value='BJ'>Benin</option>
                  <option value='BM'>Bermuda</option>
                  <option value='BT'>Bhutan</option>
                  <option value='BO'>Bolivia, Plurinational State of</option>
                  <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                  <option value='BA'>Bosnia and Herzegovina</option>
                  <option value='BW'>Botswana</option>
                  <option value='BV'>Bouvet Island</option>
                  <option value='BR'>Brazil</option>
                  <option value='IO'>British Indian Ocean Territory</option>
                  <option value='BN'>Brunei Darussalam</option>
                  <option value='BG'>Bulgaria</option>
                  <option value='BF'>Burkina Faso</option>
                  <option value='BI'>Burundi</option>
                  <option value='KH'>Cambodia</option>
                  <option value='CM'>Cameroon</option>
                  <option value='CA'>Canada</option>
                  <option value='CV'>Cape Verde</option>
                  <option value='KY'>Cayman Islands</option>
                  <option value='CF'>Central African Republic</option>
                  <option value='TD'>Chad</option>
                  <option value='CL'>Chile</option>
                  <option value='CN'>China</option>
                  <option value='CX'>Christmas Island</option>
                  <option value='CC'>Cocos (Keeling) Islands</option>
                  <option value='CO'>Colombia</option>
                  <option value='KM'>Comoros</option>
                  <option value='CG'>Congo</option>
                  <option value='CD'>Congo, the Democratic Republic of the</option>
                  <option value='CK'>Cook Islands</option>
                  <option value='CR'>Costa Rica</option>
                  <option value='CI'>Côte d'Ivoire</option>
                  <option value='HR'>Croatia</option>
                  <option value='CU'>Cuba</option>
                  <option value='CW'>Curaçao</option>
                  <option value='CY'>Cyprus</option>
                  <option value='CZ'>Czech Republic</option>
                  <option value='DK'>Denmark</option>
                  <option value='DJ'>Djibouti</option>
                  <option value='DM'>Dominica</option>
                  <option value='DO'>Dominican Republic</option>
                  <option value='EC'>Ecuador</option>
                  <option value='EG'>Egypt</option>
                  <option value='SV'>El Salvador</option>
                  <option value='GQ'>Equatorial Guinea</option>
                  <option value='ER'>Eritrea</option>
                  <option value='EE'>Estonia</option>
                  <option value='ET'>Ethiopia</option>
                  <option value='FK'>Falkland Islands (Malvinas)</option>
                  <option value='FO'>Faroe Islands</option>
                  <option value='FJ'>Fiji</option>
                  <option value='FI'>Finland</option>
                  <option value='FR'>France</option>
                  <option value='GF'>French Guiana</option>
                  <option value='PF'>French Polynesia</option>
                  <option value='TF'>French Southern Territories</option>
                  <option value='GA'>Gabon</option>
                  <option value='GM'>Gambia</option>
                  <option value='GE'>Georgia</option>
                  <option value='DE'>Germany</option>
                  <option value='GH'>Ghana</option>
                  <option value='GI'>Gibraltar</option>
                  <option value='GR'>Greece</option>
                  <option value='GL'>Greenland</option>
                  <option value='GD'>Grenada</option>
                  <option value='GP'>Guadeloupe</option>
                  <option value='GU'>Guam</option>
                  <option value='GT'>Guatemala</option>
                  <option value='GG'>Guernsey</option>
                  <option value='GN'>Guinea</option>
                  <option value='GW'>Guinea-Bissau</option>
                  <option value='GY'>Guyana</option>
                  <option value='HT'>Haiti</option>
                  <option value='HM'>Heard Island and McDonald Islands</option>
                  <option value='VA'>Holy See (Vatican City State)</option>
                  <option value='HN'>Honduras</option>
                  <option value='HK'>Hong Kong</option>
                  <option value='HU'>Hungary</option>
                  <option value='IS'>Iceland</option>
                  <option value='IN'>India</option>
                  <option value='ID'>Indonesia</option>
                  <option value='IR'>Iran, Islamic Republic of</option>
                  <option value='IQ'>Iraq</option>
                  <option value='IE'>Ireland</option>
                  <option value='IM'>Isle of Man</option>
                  <option value='IL'>Israel</option>
                  <option value='IT'>Italy</option>
                  <option value='JM'>Jamaica</option>
                  <option value='JP'>Japan</option>
                  <option value='JE'>Jersey</option>
                  <option value='JO'>Jordan</option>
                  <option value='KZ'>Kazakhstan</option>
                  <option value='KE'>Kenya</option>
                  <option value='KI'>Kiribati</option>
                  <option value='KP'>Korea, Democratic People's Republic of</option>
                  <option value='KW'>Kuwait</option>
                  <option value='KG'>Kyrgyzstan</option>
                  <option value='LA'>Lao People's Democratic Republic</option>
                  <option value='LV'>Latvia</option>
                  <option value='LB'>Lebanon</option>
                  <option value='LS'>Lesotho</option>
                  <option value='LR'>Liberia</option>
                  <option value='LY'>Libya</option>
                  <option value='LI'>Liechtenstein</option>
                  <option value='LT'>Lithuania</option>
                  <option value='LU'>Luxembourg</option>
                  <option value='MO'>Macao</option>
                  <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                  <option value='MG'>Madagascar</option>
                  <option value='MW'>Malawi</option>
                  <option value='MY'>Malaysia</option>
                  <option value='MV'>Maldives</option>
                  <option value='ML'>Mali</option>
                  <option value='MT'>Malta</option>
                  <option value='MH'>Marshall Islands</option>
                  <option value='MQ'>Martinique</option>
                  <option value='MR'>Mauritania</option>
                  <option value='MU'>Mauritius</option>
                  <option value='YT'>Mayotte</option>
                  <option value='MX'>Mexico</option>
                  <option value='FM'>Micronesia, Federated States of</option>
                  <option value='MD'>Moldova, Republic of</option>
                  <option value='MC'>Monaco</option>
                  <option value='MN'>Mongolia</option>
                  <option value='ME'>Montenegro</option>
                  <option value='MS'>Montserrat</option>
                  <option value='MA'>Morocco</option>
                  <option value='MZ'>Mozambique</option>
                  <option value='MM'>Myanmar</option>
                  <option value='NA'>Namibia</option>
                  <option value='NR'>Nauru</option>
                  <option value='NP'>Nepal</option>
                  <option value='NL'>Netherlands</option>
                  <option value='NC'>New Caledonia</option>
                  <option value='NZ'>New Zealand</option>
                  <option value='NI'>Nicaragua</option>
                  <option value='NE'>Niger</option>
                  <option value='NG'>Nigeria</option>
                  <option value='NU'>Niue</option>
                  <option value='NF'>Norfolk Island</option>
                  <option value='MP'>Northern Mariana Islands</option>
                  <option value='NO'>Norway</option>
                  <option value='OM'>Oman</option>
                  <option value='PK'>Pakistan</option>
                  <option value='PW'>Palau</option>
                  <option value='PS'>Palestinian Territory, Occupied</option>
                  <option value='PA'>Panama</option>
                  <option value='PG'>Papua New Guinea</option>
                  <option value='PY'>Paraguay</option>
                  <option value='PE'>Peru</option>
                  <option value='PH'>Philippines</option>
                  <option value='PN'>Pitcairn</option>
                  <option value='PL'>Poland</option>
                  <option value='PT'>Portugal</option>
                  <option value='PR'>Puerto Rico</option>
                  <option value='QA'>Qatar</option>
                  <option value='RE'>Réunion</option>
                  <option value='RO'>Romania</option>
                  <option value='RU'>Russian Federation</option>
                  <option value='RW'>Rwanda</option>
                  <option value='BL'>Saint Barthélemy</option>
                  <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value='KN'>Saint Kitts and Nevis</option>
                  <option value='LC'>Saint Lucia</option>
                  <option value='MF'>Saint Martin (French part)</option>
                  <option value='PM'>Saint Pierre and Miquelon</option>
                  <option value='VC'>Saint Vincent and the Grenadines</option>
                  <option value='WS'>Samoa</option>
                  <option value='SM'>San Marino</option>
                  <option value='ST'>Sao Tome and Principe</option>
                  <option value='SA'>Saudi Arabia</option>
                  <option value='SN'>Senegal</option>
                  <option value='RS'>Serbia</option>
                  <option value='SC'>Seychelles</option>
                  <option value='SL'>Sierra Leone</option>
                  <option value='SG'>Singapore</option>
                  <option value='SX'>Sint Maarten (Dutch part)</option>
                  <option value='SK'>Slovakia</option>
                  <option value='SI'>Slovenia</option>
                  <option value='SB'>Solomon Islands</option>
                  <option value='SO'>Somalia</option>
                  <option value='ZA'>South Africa</option>
                  <option value='GS'>South Georgia and the South Sandwich Islands</option>
                  <option value='KR'>South Korea</option>
                  <option value='SS'>South Sudan</option>
                  <option value='ES'>Spain</option>
                  <option value='LK'>Sri Lanka</option>
                  <option value='SD'>Sudan</option>
                  <option value='SR'>Suriname</option>
                  <option value='SJ'>Svalbard and Jan Mayen</option>
                  <option value='SZ'>Swaziland</option>
                  <option value='SE'>Sweden</option>
                  <option value='CH'>Switzerland</option>
                  <option value='SY'>Syrian Arab Republic</option>
                  <option value='TW'>Taiwan, Province of China</option>
                  <option value='TJ'>Tajikistan</option>
                  <option value='TZ'>Tanzania, United Republic of</option>
                  <option value='TH'>Thailand</option>
                  <option value='TL'>Timor-Leste</option>
                  <option value='TG'>Togo</option>
                  <option value='TK'>Tokelau</option>
                  <option value='TO'>Tonga</option>
                  <option value='TT'>Trinidad and Tobago</option>
                  <option value='TN'>Tunisia</option>
                  <option value='TR'>Turkey</option>
                  <option value='TM'>Turkmenistan</option>
                  <option value='TC'>Turks and Caicos Islands</option>
                  <option value='TV'>Tuvalu</option>
                  <option value='UG'>Uganda</option>
                  <option value='UA'>Ukraine</option>
                  <option value='AE'>United Arab Emirates</option>
                  <option value='GB'>United Kingdom</option>
                  <option value='US'>United States</option>
                  <option value='UY'>Uruguay</option>
                  <option value='UZ'>Uzbekistan</option>
                  <option value='VU'>Vanuatu</option>
                  <option value='VE'>Venezuela, Bolivarian Republic of</option>
                  <option value='VN'>Vietnam</option>
                  <option value='VI'>Virgin Islands</option>
                  <option value='WF'>Wallis and Futuna</option>
                  <option value='EH'>Western Sahara</option>
                  <option value='YE'>Yemen</option>
                  <option value='ZM'>Zambia</option>
                  <option value='ZW'>Zimbabwe</option>
                </select>
                {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Language</label>
              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('language')}
                >
                  <option value=''>Select a Language...</option>
                  <option value='id'>Bahasa Indonesia - Indonesian</option>
                  <option value='msa'>Bahasa Melayu - Malay</option>
                  <option value='ca'>Català - Catalan</option>
                  <option value='cs'>Čeština - Czech</option>
                  <option value='da'>Dansk - Danish</option>
                  <option value='de'>Deutsch - German</option>
                  <option value='en'>English</option>
                  <option value='en-gb'>English UK - British English</option>
                  <option value='es'>Español - Spanish</option>
                  <option value='fil'>Filipino</option>
                  <option value='fr'>Français - French</option>
                  <option value='ga'>Gaeilge - Irish (beta)</option>
                  <option value='gl'>Galego - Galician (beta)</option>
                  <option value='hr'>Hrvatski - Croatian</option>
                  <option value='it'>Italiano - Italian</option>
                  <option value='hu'>Magyar - Hungarian</option>
                  <option value='nl'>Nederlands - Dutch</option>
                  <option value='no'>Norsk - Norwegian</option>
                  <option value='pl'>Polski - Polish</option>
                  <option value='pt'>Português - Portuguese</option>
                  <option value='ro'>Română - Romanian</option>
                  <option value='sk'>Slovenčina - Slovak</option>
                  <option value='fi'>Suomi - Finnish</option>
                  <option value='sv'>Svenska - Swedish</option>
                  <option value='vi'>Tiếng Việt - Vietnamese</option>
                  <option value='tr'>Türkçe - Turkish</option>
                  <option value='el'>Ελληνικά - Greek</option>
                  <option value='bg'>Български език - Bulgarian</option>
                  <option value='ru'>Русский - Russian</option>
                  <option value='sr'>Српски - Serbian</option>
                  <option value='uk'>Українська мова - Ukrainian</option>
                  <option value='he'>עִבְרִית - Hebrew</option>
                  <option value='ur'>اردو - Urdu (beta)</option>
                  <option value='ar'>العربية - Arabic</option>
                  <option value='fa'>فارسی - Persian</option>
                  <option value='mr'>मराठी - Marathi</option>
                  <option value='hi'>हिन्दी - Hindi</option>
                  <option value='bn'>বাংলা - Bangla</option>
                  <option value='gu'>ગુજરાતી - Gujarati</option>
                  <option value='ta'>தமிழ் - Tamil</option>
                  <option value='kn'>ಕನ್ನಡ - Kannada</option>
                  <option value='th'>ภาษาไทย - Thai</option>
                  <option value='ko'>한국어 - Korean</option>
                  <option value='ja'>日本語 - Japanese</option>
                  <option value='zh-cn'>简体中文 - Simplified Chinese</option>
                  <option value='zh-tw'>繁體中文 - Traditional Chinese</option>
                </select>
                {formik.touched.language && formik.errors.language && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.language}</div>
                  </div>
                )}

                <div className='form-text'>
                  Please select a preferred language, including date, time, and number formatting.
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Time Zone</label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('timeZone')}
                >
                  <option value=''>Select a Timezone..</option>
                  <option value='International Date Line West'>
                    (GMT-11:00) International Date Line West
                  </option>
                  <option value='Midway Island'>(GMT-11:00) Midway Island</option>
                  <option value='Samoa'>(GMT-11:00) Samoa</option>
                  <option value='Hawaii'>(GMT-10:00) Hawaii</option>
                  <option value='Alaska'>(GMT-08:00) Alaska</option>
                  <option value='Pacific Time (US &amp; Canada)'>
                    (GMT-07:00) Pacific Time (US &amp; Canada)
                  </option>
                  <option value='Tijuana'>(GMT-07:00) Tijuana</option>
                  <option value='Arizona'>(GMT-07:00) Arizona</option>
                  <option value='Mountain Time (US &amp; Canada)'>
                    (GMT-06:00) Mountain Time (US &amp; Canada)
                  </option>
                  <option value='Chihuahua'>(GMT-06:00) Chihuahua</option>
                  <option value='Mazatlan'>(GMT-06:00) Mazatlan</option>
                  <option value='Saskatchewan'>(GMT-06:00) Saskatchewan</option>
                  <option value='Central America'>(GMT-06:00) Central America</option>
                  <option value='Central Time (US &amp; Canada)'>
                    (GMT-05:00) Central Time (US &amp; Canada)
                  </option>
                  <option value='Guadalajara'>(GMT-05:00) Guadalajara</option>
                  <option value='Mexico City'>(GMT-05:00) Mexico City</option>
                  <option value='Monterrey'>(GMT-05:00) Monterrey</option>
                  <option value='Bogota'>(GMT-05:00) Bogota</option>
                  <option value='Lima'>(GMT-05:00) Lima</option>
                  <option value='Quito'>(GMT-05:00) Quito</option>
                  <option value='Eastern Time (US &amp; Canada)'>
                    (GMT-04:00) Eastern Time (US &amp; Canada)
                  </option>
                  <option value='Indiana (East)'>(GMT-04:00) Indiana (East)</option>
                  <option value='Caracas'>(GMT-04:00) Caracas</option>
                  <option value='La Paz'>(GMT-04:00) La Paz</option>
                  <option value='Georgetown'>(GMT-04:00) Georgetown</option>
                  <option value='Atlantic Time (Canada)'>(GMT-03:00) Atlantic Time (Canada)</option>
                  <option value='Santiago'>(GMT-03:00) Santiago</option>
                  <option value='Brasilia'>(GMT-03:00) Brasilia</option>
                  <option value='Buenos Aires'>(GMT-03:00) Buenos Aires</option>
                  <option value='Newfoundland'>(GMT-02:30) Newfoundland</option>
                  <option value='Greenland'>(GMT-02:00) Greenland</option>
                  <option value='Mid-Atlantic'>(GMT-02:00) Mid-Atlantic</option>
                  <option value='Cape Verde Is.'>(GMT-01:00) Cape Verde Is.</option>
                  <option value='Azores'>(GMT) Azores</option>
                  <option value='Monrovia'>(GMT) Monrovia</option>
                  <option value='UTC'>(GMT) UTC</option>
                  <option value='Dublin'>(GMT+01:00) Dublin</option>
                  <option value='Edinburgh'>(GMT+01:00) Edinburgh</option>
                  <option value='Lisbon'>(GMT+01:00) Lisbon</option>
                  <option value='London'>(GMT+01:00) London</option>
                  <option value='Casablanca'>(GMT+01:00) Casablanca</option>
                  <option value='West Central Africa'>(GMT+01:00) West Central Africa</option>
                  <option value='Belgrade'>(GMT+02:00) Belgrade</option>
                  <option value='Bratislava'>(GMT+02:00) Bratislava</option>
                  <option value='Budapest'>(GMT+02:00) Budapest</option>
                  <option value='Ljubljana'>(GMT+02:00) Ljubljana</option>
                  <option value='Prague'>(GMT+02:00) Prague</option>
                  <option value='Sarajevo'>(GMT+02:00) Sarajevo</option>
                  <option value='Skopje'>(GMT+02:00) Skopje</option>
                  <option value='Warsaw'>(GMT+02:00) Warsaw</option>
                  <option value='Zagreb'>(GMT+02:00) Zagreb</option>
                  <option value='Brussels'>(GMT+02:00) Brussels</option>
                  <option value='Copenhagen'>(GMT+02:00) Copenhagen</option>
                  <option value='Madrid'>(GMT+02:00) Madrid</option>
                  <option value='Paris'>(GMT+02:00) Paris</option>
                  <option value='Amsterdam'>(GMT+02:00) Amsterdam</option>
                  <option value='Berlin'>(GMT+02:00) Berlin</option>
                  <option value='Bern'>(GMT+02:00) Bern</option>
                  <option value='Rome'>(GMT+02:00) Rome</option>
                  <option value='Stockholm'>(GMT+02:00) Stockholm</option>
                  <option value='Vienna'>(GMT+02:00) Vienna</option>
                  <option value='Cairo'>(GMT+02:00) Cairo</option>
                  <option value='Harare'>(GMT+02:00) Harare</option>
                  <option value='Pretoria'>(GMT+02:00) Pretoria</option>
                  <option value='Bucharest'>(GMT+03:00) Bucharest</option>
                  <option value='Helsinki'>(GMT+03:00) Helsinki</option>
                  <option value='Kiev'>(GMT+03:00) Kiev</option>
                  <option value='Kyiv'>(GMT+03:00) Kyiv</option>
                  <option value='Riga'>(GMT+03:00) Riga</option>
                  <option value='Sofia'>(GMT+03:00) Sofia</option>
                  <option value='Tallinn'>(GMT+03:00) Tallinn</option>
                  <option value='Vilnius'>(GMT+03:00) Vilnius</option>
                  <option value='Athens'>(GMT+03:00) Athens</option>
                  <option value='Istanbul'>(GMT+03:00) Istanbul</option>
                  <option value='Minsk'>(GMT+03:00) Minsk</option>
                  <option value='Jerusalem'>(GMT+03:00) Jerusalem</option>
                  <option value='Moscow'>(GMT+03:00) Moscow</option>
                  <option value='St. Petersburg'>(GMT+03:00) St. Petersburg</option>
                  <option value='Volgograd'>(GMT+03:00) Volgograd</option>
                  <option value='Kuwait'>(GMT+03:00) Kuwait</option>
                  <option value='Riyadh'>(GMT+03:00) Riyadh</option>
                  <option value='Nairobi'>(GMT+03:00) Nairobi</option>
                  <option value='Baghdad'>(GMT+03:00) Baghdad</option>
                  <option value='Abu Dhabi'>(GMT+04:00) Abu Dhabi</option>
                  <option value='Muscat'>(GMT+04:00) Muscat</option>
                  <option value='Baku'>(GMT+04:00) Baku</option>
                  <option value='Tbilisi'>(GMT+04:00) Tbilisi</option>
                  <option value='Yerevan'>(GMT+04:00) Yerevan</option>
                  <option value='Tehran'>(GMT+04:30) Tehran</option>
                  <option value='Kabul'>(GMT+04:30) Kabul</option>
                  <option value='Ekaterinburg'>(GMT+05:00) Ekaterinburg</option>
                  <option value='Islamabad'>(GMT+05:00) Islamabad</option>
                  <option value='Karachi'>(GMT+05:00) Karachi</option>
                  <option value='Tashkent'>(GMT+05:00) Tashkent</option>
                  <option value='Chennai'>(GMT+05:30) Chennai</option>
                  <option value='Kolkata'>(GMT+05:30) Kolkata</option>
                  <option value='Mumbai'>(GMT+05:30) Mumbai</option>
                  <option value='New Delhi'>(GMT+05:30) New Delhi</option>
                  <option value='Sri Jayawardenepura'>(GMT+05:30) Sri Jayawardenepura</option>
                  <option value='Kathmandu'>(GMT+05:45) Kathmandu</option>
                  <option value='Astana'>(GMT+06:00) Astana</option>
                  <option value='Dhaka'>(GMT+06:00) Dhaka</option>
                  <option value='Almaty'>(GMT+06:00) Almaty</option>
                  <option value='Urumqi'>(GMT+06:00) Urumqi</option>
                  <option value='Rangoon'>(GMT+06:30) Rangoon</option>
                  <option value='Novosibirsk'>(GMT+07:00) Novosibirsk</option>
                  <option value='Bangkok'>(GMT+07:00) Bangkok</option>
                  <option value='Hanoi'>(GMT+07:00) Hanoi</option>
                  <option value='Jakarta'>(GMT+07:00) Jakarta</option>
                  <option value='Krasnoyarsk'>(GMT+07:00) Krasnoyarsk</option>
                  <option value='Beijing'>(GMT+08:00) Beijing</option>
                  <option value='Chongqing'>(GMT+08:00) Chongqing</option>
                  <option value='Hong Kong'>(GMT+08:00) Hong Kong</option>
                  <option value='Kuala Lumpur'>(GMT+08:00) Kuala Lumpur</option>
                  <option value='Singapore'>(GMT+08:00) Singapore</option>
                  <option value='Taipei'>(GMT+08:00) Taipei</option>
                  <option value='Perth'>(GMT+08:00) Perth</option>
                  <option value='Irkutsk'>(GMT+08:00) Irkutsk</option>
                  <option value='Ulaan Bataar'>(GMT+08:00) Ulaan Bataar</option>
                  <option value='Seoul'>(GMT+09:00) Seoul</option>
                  <option value='Osaka'>(GMT+09:00) Osaka</option>
                  <option value='Sapporo'>(GMT+09:00) Sapporo</option>
                  <option value='Tokyo'>(GMT+09:00) Tokyo</option>
                  <option value='Yakutsk'>(GMT+09:00) Yakutsk</option>
                  <option value='Darwin'>(GMT+09:30) Darwin</option>
                  <option value='Adelaide'>(GMT+09:30) Adelaide</option>
                  <option value='Canberra'>(GMT+10:00) Canberra</option>
                  <option value='Melbourne'>(GMT+10:00) Melbourne</option>
                  <option value='Sydney'>(GMT+10:00) Sydney</option>
                  <option value='Brisbane'>(GMT+10:00) Brisbane</option>
                  <option value='Hobart'>(GMT+10:00) Hobart</option>
                  <option value='Vladivostok'>(GMT+10:00) Vladivostok</option>
                  <option value='Guam'>(GMT+10:00) Guam</option>
                  <option value='Port Moresby'>(GMT+10:00) Port Moresby</option>
                  <option value='Solomon Is.'>(GMT+10:00) Solomon Is.</option>
                  <option value='Magadan'>(GMT+11:00) Magadan</option>
                  <option value='New Caledonia'>(GMT+11:00) New Caledonia</option>
                  <option value='Fiji'>(GMT+12:00) Fiji</option>
                  <option value='Kamchatka'>(GMT+12:00) Kamchatka</option>
                  <option value='Marshall Is.'>(GMT+12:00) Marshall Is.</option>
                  <option value='Auckland'>(GMT+12:00) Auckland</option>
                  <option value='Wellington'>(GMT+12:00) Wellington</option>
                  <option value="Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
                </select>
                {formik.touched.timeZone && formik.errors.timeZone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.timeZone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Currency</label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('currency')}
                >
                  <option value=''>Select a currency..</option>
                  <option value='USD'>USD - USA dollar</option>
                  <option value='GBP'>GBP - British pound</option>
                  <option value='AUD'>AUD - Australian dollar</option>
                  <option value='JPY'>JPY - Japanese yen</option>
                  <option value='SEK'>SEK - Swedish krona</option>
                  <option value='CAD'>CAD - Canadian dollar</option>
                  <option value='CHF'>CHF - Swiss franc</option>
                </select>
                {formik.touched.currency && formik.errors.currency && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.currency}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Communication</label>

              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Email</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Phone</span>
                  </label>
                </div>
              </div>
            </div>

            <div className='row mb-0'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Allow Marketing</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='allowmarketing'
                    defaultChecked={data.allowMarketing}
                    onChange={() => {
                      updateData({allowMarketing: !data.allowMarketing})
                    }}
                  />
                  <label className='form-check-label'></label>
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {ProfileDetails}

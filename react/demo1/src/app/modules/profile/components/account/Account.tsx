/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {defaultAccount, IAccount} from './AccountModel'

export function Account() {
  const [data, setData] = useState<IAccount>(defaultAccount)
  //const [hasError, setHasError] = useState(false);

  const updateData = (fieldsToUpdate: Partial<IAccount>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  return (
    <div className='card'>
      {/* begin::Form */}
      <form className='form d-flex flex-center'>
        <div className='card-body mw-800px py-20'>
          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Username</label>
            <div className='col-lg-9'>
              <div className='spinner spinner-sm spinner-primary spinner-right'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  value={data.username}
                  onChange={(e) => updateData({username: e.target.value})}
                />
              </div>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Email Address</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <span className='input-group-text pe-0'>
                  <i className='la la-at fs-4'></i>
                </span>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Email'
                  value={data.email}
                  onChange={(e) => updateData({email: e.target.value})}
                />
              </div>
              <div className='form-text'>
                Email will not be publicly displayed.{' '}
                <a href='#' className='fw-bold'>
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Language</label>
            <div className='col-lg-9'>
              <select
                className='form-select form-select-lg form-select-solid'
                data-control='select2'
                data-placeholder='Select Language...'
                value={data.language}
                onChange={(e) => updateData({language: e.target.value})}
                defaultValue={data.language}
              >
                <option value='id'>Bahasa Indonesia - Indonesian</option>
                <option value='msa'>Bahasa Melayu - Malay</option>
                <option value='ca'>Català - Catalan</option>
                <option value='cs'>Čeština - Czech</option>
                <option value='da'>Dansk - Danish</option>
                <option value='de'>Deutsch - German</option>
                <option value='en'>English</option>
                <option value='en-gb'>English UK - British English</option>
                <option value='es'>Español - Spanish</option>
                <option value='eu'>Euskara - Basque (beta)</option>
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
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Time Zone</label>
            <div className='col-lg-9'>
              <select
                className='form-select form-select-lg form-select-solid'
                data-control='select2'
                data-placeholder='Select Timezone...'
                value={data.timeZone}
                defaultValue={data.timeZone}
                onChange={(e) => updateData({timeZone: e.target.value})}
              >
                <option data-offset='-39600' value='International Date Line West'>
                  (GMT-11:00) International Date Line West
                </option>
                <option data-offset='-39600' value='Midway Island'>
                  (GMT-11:00) Midway Island
                </option>
                <option data-offset='-39600' value='Samoa'>
                  (GMT-11:00) Samoa
                </option>
                <option data-offset='-36000' value='Hawaii'>
                  (GMT-10:00) Hawaii
                </option>
                <option data-offset='-28800' value='Alaska'>
                  (GMT-08:00) Alaska
                </option>
                <option data-offset='-25200' value='Pacific Time (US &amp; Canada)'>
                  (GMT-07:00) Pacific Time (US &amp; Canada)
                </option>
                <option data-offset='-25200' value='Tijuana'>
                  (GMT-07:00) Tijuana
                </option>
                <option data-offset='-25200' value='Arizona'>
                  (GMT-07:00) Arizona
                </option>
                <option data-offset='-21600' value='Mountain Time (US &amp; Canada)'>
                  (GMT-06:00) Mountain Time (US &amp; Canada)
                </option>
                <option data-offset='-21600' value='Chihuahua'>
                  (GMT-06:00) Chihuahua
                </option>
                <option data-offset='-21600' value='Mazatlan'>
                  (GMT-06:00) Mazatlan
                </option>
                <option data-offset='-21600' value='Saskatchewan'>
                  (GMT-06:00) Saskatchewan
                </option>
                <option data-offset='-21600' value='Central America'>
                  (GMT-06:00) Central America
                </option>
                <option data-offset='-18000' value='Central Time (US &amp; Canada)'>
                  (GMT-05:00) Central Time (US &amp; Canada)
                </option>
                <option data-offset='-18000' value='Guadalajara'>
                  (GMT-05:00) Guadalajara
                </option>
                <option data-offset='-18000' value='Mexico City'>
                  (GMT-05:00) Mexico City
                </option>
                <option data-offset='-18000' value='Monterrey'>
                  (GMT-05:00) Monterrey
                </option>
                <option data-offset='-18000' value='Bogota'>
                  (GMT-05:00) Bogota
                </option>
                <option data-offset='-18000' value='Lima'>
                  (GMT-05:00) Lima
                </option>
                <option data-offset='-18000' value='Quito'>
                  (GMT-05:00) Quito
                </option>
                <option data-offset='-14400' value='Eastern Time (US &amp; Canada)'>
                  (GMT-04:00) Eastern Time (US &amp; Canada)
                </option>
                <option data-offset='-14400' value='Indiana (East)'>
                  (GMT-04:00) Indiana (East)
                </option>
                <option data-offset='-14400' value='Caracas'>
                  (GMT-04:00) Caracas
                </option>
                <option data-offset='-14400' value='La Paz'>
                  (GMT-04:00) La Paz
                </option>
                <option data-offset='-14400' value='Georgetown'>
                  (GMT-04:00) Georgetown
                </option>
                <option data-offset='-10800' value='Atlantic Time (Canada)'>
                  (GMT-03:00) Atlantic Time (Canada)
                </option>
                <option data-offset='-10800' value='Santiago'>
                  (GMT-03:00) Santiago
                </option>
                <option data-offset='-10800' value='Brasilia'>
                  (GMT-03:00) Brasilia
                </option>
                <option data-offset='-10800' value='Buenos Aires'>
                  (GMT-03:00) Buenos Aires
                </option>
                <option data-offset='-9000' value='Newfoundland'>
                  (GMT-02:30) Newfoundland
                </option>
                <option data-offset='-7200' value='Greenland'>
                  (GMT-02:00) Greenland
                </option>
                <option data-offset='-7200' value='Mid-Atlantic'>
                  (GMT-02:00) Mid-Atlantic
                </option>
                <option data-offset='-3600' value='Cape Verde Is.'>
                  (GMT-01:00) Cape Verde Is.
                </option>
                <option data-offset='0' value='Azores'>
                  (GMT) Azores
                </option>
                <option data-offset='0' value='Monrovia'>
                  (GMT) Monrovia
                </option>
                <option data-offset='0' value='UTC'>
                  (GMT) UTC
                </option>
                <option data-offset='3600' value='Dublin'>
                  (GMT+01:00) Dublin
                </option>
                <option data-offset='3600' value='Edinburgh'>
                  (GMT+01:00) Edinburgh
                </option>
                <option data-offset='3600' value='Lisbon'>
                  (GMT+01:00) Lisbon
                </option>
                <option data-offset='3600' value='London'>
                  (GMT+01:00) London
                </option>
                <option data-offset='3600' value='Casablanca'>
                  (GMT+01:00) Casablanca
                </option>
                <option data-offset='3600' value='West Central Africa'>
                  (GMT+01:00) West Central Africa
                </option>
                <option data-offset='7200' value='Belgrade'>
                  (GMT+02:00) Belgrade
                </option>
                <option data-offset='7200' value='Bratislava'>
                  (GMT+02:00) Bratislava
                </option>
                <option data-offset='7200' value='Budapest'>
                  (GMT+02:00) Budapest
                </option>
                <option data-offset='7200' value='Ljubljana'>
                  (GMT+02:00) Ljubljana
                </option>
                <option data-offset='7200' value='Prague'>
                  (GMT+02:00) Prague
                </option>
                <option data-offset='7200' value='Sarajevo'>
                  (GMT+02:00) Sarajevo
                </option>
                <option data-offset='7200' value='Skopje'>
                  (GMT+02:00) Skopje
                </option>
                <option data-offset='7200' value='Warsaw'>
                  (GMT+02:00) Warsaw
                </option>
                <option data-offset='7200' value='Zagreb'>
                  (GMT+02:00) Zagreb
                </option>
                <option data-offset='7200' value='Brussels'>
                  (GMT+02:00) Brussels
                </option>
                <option data-offset='7200' value='Copenhagen'>
                  (GMT+02:00) Copenhagen
                </option>
                <option data-offset='7200' value='Madrid'>
                  (GMT+02:00) Madrid
                </option>
                <option data-offset='7200' value='Paris'>
                  (GMT+02:00) Paris
                </option>
                <option data-offset='7200' value='Amsterdam'>
                  (GMT+02:00) Amsterdam
                </option>
                <option data-offset='7200' value='Berlin'>
                  (GMT+02:00) Berlin
                </option>
                <option data-offset='7200' value='Bern'>
                  (GMT+02:00) Bern
                </option>
                <option data-offset='7200' value='Rome'>
                  (GMT+02:00) Rome
                </option>
                <option data-offset='7200' value='duotone'>
                  (GMT+02:00) duotone
                </option>
                <option data-offset='7200' value='Vienna'>
                  (GMT+02:00) Vienna
                </option>
                <option data-offset='7200' value='Cairo'>
                  (GMT+02:00) Cairo
                </option>
                <option data-offset='7200' value='Harare'>
                  (GMT+02:00) Harare
                </option>
                <option data-offset='7200' value='Pretoria'>
                  (GMT+02:00) Pretoria
                </option>
                <option data-offset='10800' value='Bucharest'>
                  (GMT+03:00) Bucharest
                </option>
                <option data-offset='10800' value='Helsinki'>
                  (GMT+03:00) Helsinki
                </option>
                <option data-offset='10800' value='Kiev'>
                  (GMT+03:00) Kiev
                </option>
                <option data-offset='10800' value='Kyiv'>
                  (GMT+03:00) Kyiv
                </option>
                <option data-offset='10800' value='Riga'>
                  (GMT+03:00) Riga
                </option>
                <option data-offset='10800' value='Sofia'>
                  (GMT+03:00) Sofia
                </option>
                <option data-offset='10800' value='Tallinn'>
                  (GMT+03:00) Tallinn
                </option>
                <option data-offset='10800' value='Vilnius'>
                  (GMT+03:00) Vilnius
                </option>
                <option data-offset='10800' value='Athens'>
                  (GMT+03:00) Athens
                </option>
                <option data-offset='10800' value='Istanbul'>
                  (GMT+03:00) Istanbul
                </option>
                <option data-offset='10800' value='Minsk'>
                  (GMT+03:00) Minsk
                </option>
                <option data-offset='10800' value='Jerusalem'>
                  (GMT+03:00) Jerusalem
                </option>
                <option data-offset='10800' value='Moscow'>
                  (GMT+03:00) Moscow
                </option>
                <option data-offset='10800' value='St. Petersburg'>
                  (GMT+03:00) St. Petersburg
                </option>
                <option data-offset='10800' value='Volgograd'>
                  (GMT+03:00) Volgograd
                </option>
                <option data-offset='10800' value='Kuwait'>
                  (GMT+03:00) Kuwait
                </option>
                <option data-offset='10800' value='Riyadh'>
                  (GMT+03:00) Riyadh
                </option>
                <option data-offset='10800' value='Nairobi'>
                  (GMT+03:00) Nairobi
                </option>
                <option data-offset='10800' value='Baghdad'>
                  (GMT+03:00) Baghdad
                </option>
                <option data-offset='14400' value='Abu Dhabi'>
                  (GMT+04:00) Abu Dhabi
                </option>
                <option data-offset='14400' value='Muscat'>
                  (GMT+04:00) Muscat
                </option>
                <option data-offset='14400' value='Baku'>
                  (GMT+04:00) Baku
                </option>
                <option data-offset='14400' value='Tbilisi'>
                  (GMT+04:00) Tbilisi
                </option>
                <option data-offset='14400' value='Yerevan'>
                  (GMT+04:00) Yerevan
                </option>
                <option data-offset='16200' value='Tehran'>
                  (GMT+04:30) Tehran
                </option>
                <option data-offset='16200' value='Kabul'>
                  (GMT+04:30) Kabul
                </option>
                <option data-offset='18000' value='Ekaterinburg'>
                  (GMT+05:00) Ekaterinburg
                </option>
                <option data-offset='18000' value='Islamabad'>
                  (GMT+05:00) Islamabad
                </option>
                <option data-offset='18000' value='Karachi'>
                  (GMT+05:00) Karachi
                </option>
                <option data-offset='18000' value='Tashkent'>
                  (GMT+05:00) Tashkent
                </option>
                <option data-offset='19800' value='Chennai'>
                  (GMT+05:30) Chennai
                </option>
                <option data-offset='19800' value='Kolkata'>
                  (GMT+05:30) Kolkata
                </option>
                <option data-offset='19800' value='Mumbai'>
                  (GMT+05:30) Mumbai
                </option>
                <option data-offset='19800' value='New Delhi'>
                  (GMT+05:30) New Delhi
                </option>
                <option data-offset='19800' value='Sri Jayawardenepura'>
                  (GMT+05:30) Sri Jayawardenepura
                </option>
                <option data-offset='20700' value='Kathmandu'>
                  (GMT+05:45) Kathmandu
                </option>
                <option data-offset='21600' value='Astana'>
                  (GMT+06:00) Astana
                </option>
                <option data-offset='21600' value='Dhaka'>
                  (GMT+06:00) Dhaka
                </option>
                <option data-offset='21600' value='Almaty'>
                  (GMT+06:00) Almaty
                </option>
                <option data-offset='21600' value='Urumqi'>
                  (GMT+06:00) Urumqi
                </option>
                <option data-offset='23400' value='Rangoon'>
                  (GMT+06:30) Rangoon
                </option>
                <option data-offset='25200' value='Novosibirsk'>
                  (GMT+07:00) Novosibirsk
                </option>
                <option data-offset='25200' value='Bangkok'>
                  (GMT+07:00) Bangkok
                </option>
                <option data-offset='25200' value='Hanoi'>
                  (GMT+07:00) Hanoi
                </option>
                <option data-offset='25200' value='Jakarta'>
                  (GMT+07:00) Jakarta
                </option>
                <option data-offset='25200' value='Krasnoyarsk'>
                  (GMT+07:00) Krasnoyarsk
                </option>
                <option data-offset='28800' value='Beijing'>
                  (GMT+08:00) Beijing
                </option>
                <option data-offset='28800' value='Chongqing'>
                  (GMT+08:00) Chongqing
                </option>
                <option data-offset='28800' value='Hong Kong'>
                  (GMT+08:00) Hong Kong
                </option>
                <option data-offset='28800' value='Kuala Lumpur'>
                  (GMT+08:00) Kuala Lumpur
                </option>
                <option data-offset='28800' value='Singapore'>
                  (GMT+08:00) Singapore
                </option>
                <option data-offset='28800' value='Taipei'>
                  (GMT+08:00) Taipei
                </option>
                <option data-offset='28800' value='Perth'>
                  (GMT+08:00) Perth
                </option>
                <option data-offset='28800' value='Irkutsk'>
                  (GMT+08:00) Irkutsk
                </option>
                <option data-offset='28800' value='Ulaan Bataar'>
                  (GMT+08:00) Ulaan Bataar
                </option>
                <option data-offset='32400' value='Seoul'>
                  (GMT+09:00) Seoul
                </option>
                <option data-offset='32400' value='Osaka'>
                  (GMT+09:00) Osaka
                </option>
                <option data-offset='32400' value='Sapporo'>
                  (GMT+09:00) Sapporo
                </option>
                <option data-offset='32400' value='Tokyo'>
                  (GMT+09:00) Tokyo
                </option>
                <option data-offset='32400' value='Yakutsk'>
                  (GMT+09:00) Yakutsk
                </option>
                <option data-offset='34200' value='Darwin'>
                  (GMT+09:30) Darwin
                </option>
                <option data-offset='34200' value='Adelaide'>
                  (GMT+09:30) Adelaide
                </option>
                <option data-offset='36000' value='Canberra'>
                  (GMT+10:00) Canberra
                </option>
                <option data-offset='36000' value='Melbourne'>
                  (GMT+10:00) Melbourne
                </option>
                <option data-offset='36000' value='Sydney'>
                  (GMT+10:00) Sydney
                </option>
                <option data-offset='36000' value='Brisbane'>
                  (GMT+10:00) Brisbane
                </option>
                <option data-offset='36000' value='Hobart'>
                  (GMT+10:00) Hobart
                </option>
                <option data-offset='36000' value='Vladivostok'>
                  (GMT+10:00) Vladivostok
                </option>
                <option data-offset='36000' value='Guam'>
                  (GMT+10:00) Guam
                </option>
                <option data-offset='36000' value='Port Moresby'>
                  (GMT+10:00) Port Moresby
                </option>
                <option data-offset='36000' value='Solomon Is.'>
                  (GMT+10:00) Solomon Is.
                </option>
                <option data-offset='39600' value='Magadan'>
                  (GMT+11:00) Magadan
                </option>
                <option data-offset='39600' value='New Caledonia'>
                  (GMT+11:00) New Caledonia
                </option>
                <option data-offset='43200' value='Fiji'>
                  (GMT+12:00) Fiji
                </option>
                <option data-offset='43200' value='Kamchatka'>
                  (GMT+12:00) Kamchatka
                </option>
                <option data-offset='43200' value='Marshall Is.'>
                  (GMT+12:00) Marshall Is.
                </option>
                <option data-offset='43200' value='Auckland'>
                  (GMT+12:00) Auckland
                </option>
                <option data-offset='43200' value='Wellington'>
                  (GMT+12:00) Wellington
                </option>
                <option data-offset='46800' value="Nuku'alofa">
                  (GMT+13:00) Nuku'alofa
                </option>
              </select>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row align-items-center mb-3'>
            <label className='col-lg-3 col-form-label'>Communication</label>
            <div className='col-lg-9'>
              <div className='d-flex align-items-center'>
                <div className='form-check form-check-custom form-check-solid me-5'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox1'
                    checked={data.communications.email}
                    onChange={() =>
                      updateData({
                        communications: {
                          ...data.communications,
                          email: !data.communications.email,
                        },
                      })
                    }
                  />
                  <label className='form-check-label fw-bold' htmlFor='inlineCheckbox1'>
                    Email
                  </label>
                </div>
                <div className='form-check form-check-custom form-check-solid me-5'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox2'
                    checked={data.communications.sms}
                    onChange={() =>
                      updateData({
                        communications: {
                          ...data.communications,
                          sms: !data.communications.sms,
                        },
                      })
                    }
                  />
                  <label className='form-check-label fw-bold' htmlFor='inlineCheckbox2'>
                    SMS
                  </label>
                </div>
                <div className='form-check form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    checked={data.communications.phone}
                    onChange={() =>
                      updateData({
                        communications: {
                          ...data.communications,
                          phone: !data.communications.phone,
                        },
                      })
                    }
                  />
                  <label className='form-check-label fw-bold' htmlFor='inlineCheckbox3'>
                    Phone
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* begin::Form row */}

          <div className='separator separator-dashed my-10'></div>

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Login verification</label>
            <div className='col-lg-9'>
              <button type='button' className='btn btn-light-primary fw-bold btn-sm'>
                Setup login verification
              </button>
              <div className='form-text'>
                After you log in, you will be asked for additional information to confirm your
                identity and protect your account from being compromised.
                <a href='#' className='fw-bold'>
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-13'>
            <label className='col-lg-3 col-form-label'>Password reset verification</label>
            <div className='col-lg-9'>
              <div className='form-check form-check-custom form-check-solid me-5'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='customCheck5'
                  checked={data.requireInfo}
                  onChange={() => updateData({requireInfo: !data.requireInfo})}
                />
                <label className='form-check-label fw-bold' htmlFor='customCheck5'>
                  Require personal information to reset your password.
                </label>
              </div>

              <div className='form-text py-2'>
                For extra security, this requires you to confirm your email or phone number when you
                reset your password.
                <a href='#' className='fw-boldk'>
                  Learn more
                </a>
                .
              </div>

              <button type='button' className='btn btn-light-danger fw-bold btn-sm'>
                Deactivate your account ?
              </button>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row'>
            <label className='col-lg-3 col-form-label'></label>
            <div className='col-lg-9'>
              <button type='reset' className='btn btn-primary fw-bolder px-6 py-3 me-3'>
                Save Changes
              </button>
              <button
                type='reset'
                className='btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3'
              >
                Cancel
              </button>
            </div>
          </div>
          {/* end::Form row */}
        </div>
      </form>
      {/* end::Form */}
    </div>
  )
}

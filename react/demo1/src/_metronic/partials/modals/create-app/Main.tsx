/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Formik, Form, FormikValues, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {StepperComponent} from '../../../assets/ts/components'

interface ICreateAccount {
  appName: string
  category: string
  framework: string
  dbName: string
  dbType: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

const inits: ICreateAccount = {
  appName: '',
  category: '1',
  framework: '1',
  dbName: '',
  dbType: '1',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

const createAppSchema = [
  Yup.object({
    appName: Yup.string().required().label('App name'),
    category: Yup.string().required().label('Category'),
  }),
  Yup.object({
    framework: Yup.string().required().label('Framework'),
  }),
  Yup.object({
    dbName: Yup.string().required().label('Database name'),
    dbType: Yup.string().required().label('Database engine'),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label('Name'),
    cardNumber: Yup.string().required().label('Card Number'),
    cardExpiryMonth: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
]

const Main: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAppSchema[0])
  const [initValues] = useState<ICreateAccount>(inits)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='modal fade' id='kt_modal_create_app' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-900px'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2>Create App</h2>

            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body py-lg-10 px-lg-10'>
            <div
              ref={stepperRef}
              className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
              id='kt_modal_create_app_stepper'
            >
              <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
                <div className='stepper-nav ps-lg-10'>
                  <div className='stepper-item current' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Details</h3>

                      <div className='stepper-desc'>Name your App</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Frameworks</h3>

                      <div className='stepper-desc'>Define your app framework</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>3</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Database</h3>

                      <div className='stepper-desc'>Select the app database type</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>4</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Billing</h3>

                      <div className='stepper-desc'>Provide payment details</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>5</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Release</h3>

                      <div className='stepper-desc'>Review and Submit</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-row-fluid py-lg-5 px-lg-15'>
                <Formik
                  validationSchema={currentSchema}
                  initialValues={initValues}
                  onSubmit={submitStep}
                >
                  {() => (
                    <Form className='form' noValidate id='kt_modal_create_app_form'>
                      <div className='current' data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>App Name</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your unique app name'
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='appName'
                              placeholder=''
                            />
                            <div className='fv-plugins-message-container invalid-feedback'>
                              <ErrorMessage name='appName' />
                            </div>
                          </div>

                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Category</span>

                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Select your app category'
                              ></i>
                            </label>

                            <div className='fv-row'>
                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-primary'>
                                      <KTSVG
                                        path='/media/icons/duotune/maps/map004.svg'
                                        className='svg-icon-1 svg-icon-primary'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Quick Online Courses</span>

                                    <span className='fs-7 text-muted'>
                                      Creating a clear text structure is just one SEO
                                    </span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='category'
                                    value='1'
                                  />
                                </span>
                              </label>

                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-danger  '>
                                      <KTSVG
                                        path='/media/icons/duotune/general/gen024.svg'
                                        className='svg-icon-1 svg-icon-danger'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Face to Face Discussions</span>

                                    <span className='fs-7 text-muted'>
                                      Creating a clear text structure is just one aspect
                                    </span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='category'
                                    value='2'
                                  />
                                </span>
                              </label>

                              <label className='d-flex flex-stack cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-success'>
                                      <KTSVG
                                        path='/media/icons/duotune/general/gen013.svg'
                                        className='svg-icon-1 svg-icon-success'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Full Intro Training</span>

                                    <span className='fs-7 text-muted'>
                                      Creating a clear text structure copywriting
                                    </span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='category'
                                    value='3'
                                  />
                                </span>
                              </label>
                            </div>

                            <div className='fv-plugins-message-container invalid-feedback'>
                              <ErrorMessage name='category' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Select Framework</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your apps framework'
                              ></i>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-warning'>
                                    <i className='fab fa-html5 text-warning fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>HTML5</span>

                                  <span className='fs-7 text-muted'>Base Web Projec</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='framework'
                                  value='1'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-success'>
                                    <i className='fab fa-react text-success fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>ReactJS</span>
                                  <span className='fs-7 text-muted'>
                                    Robust and flexible app framework
                                  </span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='framework'
                                  value='2'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-danger'>
                                    <i className='fab fa-angular text-danger fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Angular</span>
                                  <span className='fs-7 text-muted'>Powerful data mangement</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='framework'
                                  value='3'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-primary'>
                                    <i className='fab fa-vuejs text-primary fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Vue</span>
                                  <span className='fs-7 text-muted'>
                                    Lightweight and responsive framework
                                  </span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='framework'
                                  value='4'
                                />
                              </span>
                            </label>
                          </div>
                          <div className='fv-plugins-message-container invalid-feedback'>
                            <ErrorMessage name='framework' />
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='fv-row mb-10'>
                            <label className='required fs-5 fw-bold mb-2'>Database Name</label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='dbName'
                              placeholder=''
                            />
                            <div className='fv-plugins-message-container invalid-feedback'>
                              <ErrorMessage name='dbName' />
                            </div>
                          </div>

                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Select Database Engine</span>

                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Select your app database engine'
                              ></i>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-success'>
                                    <i className='fas fa-database text-success fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>MySQL</span>

                                  <span className='fs-7 text-muted'>Basic MySQL database</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='dbType'
                                  value='1'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-danger'>
                                    <i className='fab fa-google text-danger fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Firebase</span>

                                  <span className='fs-7 text-muted'>
                                    Google based app data management
                                  </span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='dbType'
                                  value='2'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-warning'>
                                    <i className='fab fa-amazon text-warning fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>DynamoDB</span>

                                  <span className='fs-7 text-muted'>
                                    Amazon Fast NoSQL Database
                                  </span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='dbType'
                                  value='3'
                                />
                              </span>
                            </label>
                          </div>

                          <div className='fv-plugins-message-container invalid-feedback'>
                            <ErrorMessage name='dbType' />
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='pb-10 pb-lg-15'>
                            <h2 className='fw-bolder text-dark'>Billing Details</h2>

                            <div className='text-gray-400 fw-bold fs-6'>
                              If you need more info, please check out
                              <a href='#' className='text-primary fw-bolder'>
                                Help Page
                              </a>
                              .
                            </div>
                          </div>
                          <div className='d-flex flex-column mb-7 fv-row'>
                            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                              <span className='required'>Name On Card</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title="Specify a card holder's name"
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='nameOnCard'
                            />
                            <div className='fv-plugins-message-container invalid-feedback'>
                              <ErrorMessage name='nameOnCard' />
                            </div>
                          </div>
                          <div className='d-flex flex-column mb-7 fv-row'>
                            <label className='required fs-6 fw-bold form-label mb-2'>
                              Card Number
                            </label>

                            <div className='position-relative'>
                              <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder='Enter card number'
                                name='cardNumber'
                              />
                              <div className='fv-plugins-message-container invalid-feedback'>
                                <ErrorMessage name='cardNumber' />
                              </div>

                              <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
                                <img
                                  src={toAbsoluteUrl('/media/svg/card-logos/visa.svg')}
                                  alt=''
                                  className='h-25px'
                                />
                                <img
                                  src={toAbsoluteUrl('/media/svg/card-logos/mastercard.svg')}
                                  alt=''
                                  className='h-25px'
                                />
                                <img
                                  src={toAbsoluteUrl('/media/svg/card-logos/american-express.svg')}
                                  alt=''
                                  className='h-25px'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='row mb-10'>
                            <div className='col-md-8 fv-row'>
                              <label className='required fs-6 fw-bold form-label mb-2'>
                                Expiration Date
                              </label>

                              <div className='row fv-row'>
                                <div className='col-6'>
                                  <Field
                                    as='select'
                                    name='cardExpiryMonth'
                                    className='form-select form-select-solid'
                                  >
                                    <option></option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                  </Field>
                                  <div className='fv-plugins-message-container invalid-feedback'>
                                    <ErrorMessage name='cardExpiryMonth' />
                                  </div>
                                </div>

                                <div className='col-6'>
                                  <Field
                                    as='select'
                                    name='cardExpiryYear'
                                    className='form-select form-select-solid'
                                  >
                                    <option></option>
                                    <option value='2021'>2021</option>
                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024'>2024</option>
                                    <option value='2025'>2025</option>
                                    <option value='2026'>2026</option>
                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029'>2029</option>
                                    <option value='2030'>2030</option>
                                    <option value='2031'>2031</option>
                                  </Field>
                                  <div className='fv-plugins-message-container invalid-feedback'>
                                    <ErrorMessage name='cardExpiryYear' />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-md-4 fv-row'>
                              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                <span className='required'>CVV</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Enter a card CVV code'
                                ></i>
                              </label>

                              <div className='position-relative'>
                                <Field
                                  type='text'
                                  className='form-control form-control-solid'
                                  placeholder='CVV'
                                  name='cardCvv'
                                />
                                <div className='fv-plugins-message-container invalid-feedback'>
                                  <ErrorMessage name='cardCvv' />
                                </div>

                                <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
                                  <KTSVG
                                    path='/media/icons/duotune/finance/fin002.svg'
                                    className='svg-icon-2hx'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex flex-stack'>
                            <div className='me-5'>
                              <label className='fs-6 fw-bold form-label'>
                                Save Card for further billing?
                              </label>
                              <div className='fs-7 fw-bold text-gray-400'>
                                If you need more info, please check budget planning
                              </div>
                            </div>

                            <label className='form-check form-switch form-check-custom form-check-solid'>
                              <Field className='form-check-input' type='checkbox' />
                              <span className='form-check-label fw-bold text-gray-400'>
                                Save Card
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100 text-center'>
                          <h1 className='fw-bolder text-dark mb-3'>Release!</h1>

                          <div className='text-muted fw-bold fs-3'>
                            Submit your app to kickstart your project.
                          </div>

                          <div className='text-center px-4 py-15'>
                            <img
                              src={toAbsoluteUrl('/media/illustrations/sketchy-1/9.png')}
                              alt=''
                              className='w-100 mh-300px'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='d-flex flex-stack pt-10'>
                        <div className='me-2'>
                          <button
                            onClick={prevStep}
                            type='button'
                            className='btn btn-lg btn-light-primary me-3'
                            data-kt-stepper-action='previous'
                          >
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr063.svg'
                              className='svg-icon-4 me-1'
                            />
                            Back
                          </button>
                        </div>

                        <div>
                          <button type='submit' className='btn btn-lg btn-primary me-3'>
                            <span className='indicator-label'>
                              {stepper.current?.currentStepIndex !==
                                stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                              {stepper.current?.currentStepIndex ===
                                stepper.current?.totatStepsNumber! - 1 && 'Submit'}
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr064.svg'
                                className='svg-icon-3 ms-2 me-0'
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Main}

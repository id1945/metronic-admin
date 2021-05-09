/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import * as auth from "../Auth";

function AccountInformation(props) {
  // Fields
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  useEffect(() => {}, [user]);

  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    const updatedUser = Object.assign(user, {
      username: values.username,
      email: values.email,
      language: values.language,
      timeZone: values.timeZone,
      communication: {
        email: values.communicationEmail,
        sms: values.communicationSMS,
        phone: values.communicationPhone,
      },
    });
    // user for update preparation
    dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
      // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    username: user.username,
    email: user.email,
    language: user.language,
    timeZone: user.timeZone,
    communicationEmail: user.communication.email,
    communicationSMS: user.communication.sms,
    communicationPhone: user.communication.phone,
  };
  const Schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
    language: Yup.string(),
    timeZone: Yup.string(),
    communicationEmail: Yup.bool(),
    communicationSMS: Yup.bool(),
    communicationPhone: Yup.bool(),
  });
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <form className="card card-custom" onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Account Information
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Change your account settings
          </span>
        </div>
        <div className="card-toolbar">
          <button
            type="submit"
            className="btn btn-success mr-2"
            disabled={
              formik.isSubmitting || (formik.touched && !formik.isValid)
            }
          >
            Save Changes
            {formik.isSubmitting}
          </button>
          <Link
            to="/user-profile/profile-overview"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        <div className="card-body">
          {/* begin::Heading */}
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">Account:</h5>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">Username</label>
            <div className="col-lg-9 col-xl-6">
              <div>
                <input
                  type="text"
                  className={`form-control form-control-lg form-control-solid ${getInputClasses(
                    "username"
                  )}`}
                  name="username"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="invalid-feedback">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              Email Address
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="input-group input-group-lg input-group-solid">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-at"></i>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className={`form-control form-control-lg form-control-solid ${getInputClasses(
                    "email"
                  )}`}
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>
              <span className="form-text text-muted">
                Email will not be publicly displayed.{` `}
                <a href="#" className="font-weight-bold">
                  Learn more
                </a>
                .
              </span>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">Language</label>
            <div className="col-lg-9 col-xl-6">
              <select
                className="form-control form-control-lg form-control-solid"
                name="language"
                {...formik.getFieldProps("language")}
              >
                <option>Select Language...</option>
                <option value="id">Bahasa Indonesia - Indonesian</option>
                <option value="msa">Bahasa Melayu - Malay</option>
                <option value="ca">Català - Catalan</option>
                <option value="cs">Čeština - Czech</option>
                <option value="da">Dansk - Danish</option>
                <option value="de">Deutsch - German</option>
                <option value="en">English</option>
                <option value="en-gb">English UK - British English</option>
                <option value="es">Español - Spanish</option>
                <option value="eu">Euskara - Basque (beta)</option>
                <option value="fil">Filipino</option>
                <option value="fr">Français - French</option>
                <option value="pt">Português - Portuguese</option>
                <option value="ro">Română - Romanian</option>
                <option value="ru">Русский - Russian</option>
                <option value="sr">Српски - Serbian</option>
                <option value="uk">Українська мова - Ukrainian</option>
              </select>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              Time Zone
            </label>
            <div className="col-lg-9 col-xl-6">
              <select
                className="form-control form-control-lg form-control-solid"
                name="timeZone"
                {...formik.getFieldProps("timeZone")}
              >
                <option value="International Date Line West">
                  (GMT-11:00) International Date Line West
                </option>
                <option value="Midway Island">(GMT-11:00) Midway Island</option>

                <option value="Central America">
                  (GMT-06:00) Central America
                </option>
                <option value="Central Time (US &amp; Canada)">
                  (GMT-05:00) Central Time (US &amp; Canada)
                </option>
                <option value="Eastern Time (US &amp; Canada)">
                  (GMT-04:00) Eastern Time (US &amp; Canada)
                </option>
                <option value="Indiana (East)">
                  (GMT-04:00) Indiana (East)
                </option>

                <option value="Georgetown">(GMT-04:00) Georgetown</option>

                <option value="Buenos Aires">(GMT-03:00) Buenos Aires</option>
                <option value="Newfoundland">(GMT-02:30) Newfoundland</option>
                <option value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
                <option value="Cape Verde Is.">
                  (GMT-01:00) Cape Verde Is.
                </option>
                <option value="UTC">(GMT) UTC</option>
                <option value="Dublin">(GMT+01:00) Dublin</option>
                <option value="Edinburgh">(GMT+01:00) Edinburgh</option>
                <option value="London">(GMT+01:00) London</option>
                <option value="Prague">(GMT+02:00) Prague</option>
                <option value="Helsinki">(GMT+03:00) Helsinki</option>
                <option value="Abu Dhabi">(GMT+04:00) Abu Dhabi</option>
                <option value="Tehran">(GMT+04:30) Tehran</option>
                <option value="Islamabad">(GMT+05:00) Islamabad</option>
                <option value="Karachi">(GMT+05:00) Karachi</option>
                <option value="Tashkent">(GMT+05:00) Tashkent</option>
                <option value="Kathmandu">(GMT+05:45) Kathmandu</option>
                <option value="Astana">(GMT+06:00) Astana</option>
              </select>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row align-items-center">
            <label className="col-xl-3 col-lg-3 col-form-label">
              Communication
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="checkbox-inline">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="communicationEmail"
                    checked={formik.values.communicationEmail}
                    onChange={formik.handleChange}
                  />
                  <span></span>Email
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="communicationSMS"
                    checked={formik.values.communicationSMS}
                    {...formik.getFieldProps("communicationSMS")}
                    onChange={formik.handleChange}
                  />
                  <span></span>SMS
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="communicationPhone"
                    checked={formik.values.communicationPhone}
                    {...formik.getFieldProps("communicationPhone")}
                    onChange={formik.handleChange}
                  />
                  <span></span>Phone
                </label>
              </div>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="separator separator-dashed my-5"></div>
          {/* begin::Form Group */}
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">Security:</h5>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              Login verification
            </label>
            <div className="col-lg-9 col-xl-6">
              <button
                type="button"
                className="btn btn-light-primary font-weight-bold btn-sm"
              >
                Setup login verification
              </button>
              <p className="form-text text-muted pt-2">
                After you log in, you will be asked for additional information
                to confirm your identity and protect your account from being
                compromised. {` `}
                <a href="#" className="font-weight-bold">
                  Learn more
                </a>
                .
              </p>
            </div>
          </div>
          {/* begin::Form Group */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              Password reset verification
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="checkbox-inline">
                <label className="checkbox m-0">
                  <input type="checkbox" />
                  <span></span>Require personal information to reset your
                  password.
                </label>
              </div>
              <p className="form-text text-muted py-2">
                For extra security, this requires you to confirm your email or
                phone number when you reset your password.
                <a href="#" className="font-weight-boldk">
                  Learn more
                </a>
                .
              </p>
              <button
                type="button"
                className="btn btn-light-danger font-weight-bold btn-sm"
              >
                Deactivate your account ?
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}
export default connect(null, auth.actions)(AccountInformation);

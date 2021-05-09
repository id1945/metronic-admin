import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import * as auth from "../Auth";

function EmailSettings(props) {
  // Fields
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  useEffect(() => {}, [user]);
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    const updatedUser = Object.assign(user, {
      emailSettings: {
        emailNotification: values.emailNotification,
        sendCopyToPersonalEmail: values.sendCopyToPersonalEmail,
        activityRelatesEmail: {
          youHaveNewNotifications: values.youHaveNewNotifications,
          youAreSentADirectMessage: values.youAreSentADirectMessage,
          someoneAddsYouAsAsAConnection: values.someoneAddsYouAsAsAConnection,
          uponNewOrder: values.uponNewOrder,
          newMembershipApproval: values.newMembershipApproval,
          memberRegistration: values.memberRegistration,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates:
            values.newsAboutKeenthemesProductsAndFeatureUpdates,
          tipsOnGettingMoreOutOfKeen: values.tipsOnGettingMoreOutOfKeen,
          thingsYouMissedSindeYouLastLoggedIntoKeen:
            values.thingsYouMissedSindeYouLastLoggedIntoKeen,
          newsAboutMetronicOnPartnerProductsAndOtherServices:
            values.newsAboutMetronicOnPartnerProductsAndOtherServices,
          tipsOnMetronicBusinessProducts: values.tipsOnMetronicBusinessProducts,
        },
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
    emailNotification: user.emailSettings.emailNotification,
    sendCopyToPersonalEmail: user.emailSettings.sendCopyToPersonalEmail,
    youHaveNewNotifications:
      user.emailSettings.activityRelatesEmail.youHaveNewNotifications,
    youAreSentADirectMessage:
      user.emailSettings.activityRelatesEmail.youAreSentADirectMessage,
    someoneAddsYouAsAsAConnection:
      user.emailSettings.activityRelatesEmail.someoneAddsYouAsAsAConnection,
    uponNewOrder: user.emailSettings.activityRelatesEmail.uponNewOrder,
    newMembershipApproval:
      user.emailSettings.activityRelatesEmail.newMembershipApproval,
    memberRegistration:
      user.emailSettings.activityRelatesEmail.memberRegistration,
    newsAboutKeenthemesProductsAndFeatureUpdates:
      user.emailSettings.updatesFromKeenthemes
        .newsAboutKeenthemesProductsAndFeatureUpdates,
    tipsOnGettingMoreOutOfKeen:
      user.emailSettings.updatesFromKeenthemes.tipsOnGettingMoreOutOfKeen,
    thingsYouMissedSindeYouLastLoggedIntoKeen:
      user.emailSettings.updatesFromKeenthemes
        .thingsYouMissedSindeYouLastLoggedIntoKeen,
    newsAboutMetronicOnPartnerProductsAndOtherServices:
      user.emailSettings.updatesFromKeenthemes
        .newsAboutMetronicOnPartnerProductsAndOtherServices,
    tipsOnMetronicBusinessProducts:
      user.emailSettings.updatesFromKeenthemes.tipsOnMetronicBusinessProducts,
  };
  const Schema = Yup.object().shape({
    emailNotification: Yup.bool(),
    sendCopyToPersonalEmail: Yup.bool(),
    youHaveNewNotifications: Yup.bool(),
    youAreSentADirectMessage: Yup.bool(),
    someoneAddsYouAsAsAConnection: Yup.bool(),
    uponNewOrder: Yup.bool(),
    newMembershipApproval: Yup.bool(),
    memberRegistration: Yup.bool(),
    newsAboutKeenthemesProductsAndFeatureUpdates: Yup.bool(),
    tipsOnGettingMoreOutOfKeen: Yup.bool(),
    thingsYouMissedSindeYouLastLoggedIntoKeen: Yup.bool(),
    newsAboutMetronicOnPartnerProductsAndOtherServices: Yup.bool(),
    tipsOnMetronicBusinessProducts: Yup.bool(),
  });
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
            Email Settings
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Change your email settings
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
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">
                Setup Email Notification:
              </h5>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right">
              Email Notification
            </label>
            <div className="col-lg-9 col-xl-6">
              <span className="switch switch-sm">
                <label>
                  <input
                    type="checkbox"
                    name="emailNotification"
                    checked={formik.values.emailNotification}
                    onChange={formik.handleChange}
                  />
                  <span></span>
                </label>
              </span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right">
              Send Copy To Personal Email
            </label>
            <div className="col-lg-9 col-xl-6">
              <span className="switch switch-sm">
                <label>
                  <input
                    type="checkbox"
                    name="sendCopyToPersonalEmail"
                    checked={formik.values.sendCopyToPersonalEmail}
                    onChange={formik.handleChange}
                  />
                  <span></span>
                </label>
              </span>
            </div>
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">
                Activity Related Emails:
              </h5>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right">
              When To Email
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="checkbox-list">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="youHaveNewNotifications"
                    checked={formik.values.youHaveNewNotifications}
                    onChange={formik.handleChange}
                  />
                  <span></span>You have new notifications
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="youAreSentADirectMessage"
                    checked={formik.values.youAreSentADirectMessage}
                    onChange={formik.handleChange}
                  />
                  <span></span>You're sent a direct message
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="someoneAddsYouAsAsAConnection"
                    checked={formik.values.someoneAddsYouAsAsAConnection}
                    onChange={formik.handleChange}
                  />
                  <span></span>Someone adds you as a connection
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right">
              When To Escalate Emails
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="checkbox-list">
                <label className="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    name="uponNewOrder"
                    checked={formik.values.uponNewOrder}
                    onChange={formik.handleChange}
                  />
                  <span></span>Upon new order
                </label>
                <label className="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    name="newMembershipApproval"
                    checked={formik.values.newMembershipApproval}
                    onChange={formik.handleChange}
                  />
                  <span></span>New membership approval
                </label>
                <label className="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    name="memberRegistration"
                    checked={formik.values.memberRegistration}
                    onChange={formik.handleChange}
                  />
                  <span></span>Member registration
                </label>
              </div>
            </div>
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">
                Updates From Keenthemes:
              </h5>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right">
              Email You With
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="checkbox-list">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="newsAboutKeenthemesProductsAndFeatureUpdates"
                    checked={
                      formik.values.newsAboutKeenthemesProductsAndFeatureUpdates
                    }
                    onChange={formik.handleChange}
                  />
                  <span></span>News about Keenthemes products and feature
                  updates
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="tipsOnGettingMoreOutOfKeen"
                    checked={formik.values.tipsOnGettingMoreOutOfKeen}
                    onChange={formik.handleChange}
                  />
                  <span></span>Tips on getting more out of Keen
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="thingsYouMissedSindeYouLastLoggedIntoKeen"
                    checked={
                      formik.values.thingsYouMissedSindeYouLastLoggedIntoKeen
                    }
                    onChange={formik.handleChange}
                  />
                  <span></span>Things you missed since you last logged into Keen
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="newsAboutMetronicOnPartnerProductsAndOtherServices"
                    checked={
                      formik.values
                        .newsAboutMetronicOnPartnerProductsAndOtherServices
                    }
                    onChange={formik.handleChange}
                  />
                  <span></span>News about Metronic on partner products and other
                  services
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="tipsOnMetronicBusinessProducts"
                    checked={formik.values.tipsOnMetronicBusinessProducts}
                    onChange={formik.handleChange}
                  />
                  <span></span>Tips on Metronic business products
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(EmailSettings);

<template>
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">Email Settings</h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Change your email settings</span
        >
      </div>
      <div class="card-toolbar">
        <button type="reset" class="btn btn-success mr-2">Save Changes</button>
        <button type="reset" class="btn btn-secondary">Cancel</button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form">
      <div class="card-body">
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Setup Email Notification:</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Email Notification</label
          >
          <div class="col-lg-9 col-xl-6">
            <span class="switch switch-sm">
              <label>
                <input
                  type="checkbox"
                  checked="checked"
                  name="email_notification_1"
                />
                <span></span>
              </label>
            </span>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Send Copy To Personal Email</label
          >
          <div class="col-lg-9 col-xl-6">
            <span class="switch switch-sm">
              <label>
                <input type="checkbox" name="email_notification_2" />
                <span></span>
              </label>
            </span>
          </div>
        </div>
        <div class="separator separator-dashed my-10"></div>
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Activity Related Emails:</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >When To Email</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="checkbox-list">
              <label class="checkbox">
                <input type="checkbox" />
                <span></span> You have new notifications.
              </label>
              <label class="checkbox">
                <input type="checkbox" />
                <span></span> You're sent a direct message
              </label>
              <label class="checkbox">
                <input type="checkbox" checked="checked" />
                <span></span> Someone adds you as a connection
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >When To Escalate Emails</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="checkbox-list">
              <label class="checkbox checkbox-primary">
                <input type="checkbox" />
                <span></span> Upon new order.
              </label>
              <label class="checkbox checkbox-primary">
                <input type="checkbox" />
                <span></span> New membership approval
              </label>
              <label class="checkbox checkbox-primary">
                <input type="checkbox" checked="checked" />
                <span></span> Member registration
              </label>
            </div>
          </div>
        </div>
        <div class="separator separator-dashed my-10"></div>
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Updates From Keenthemes:</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Email You With</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="checkbox-list">
              <label class="checkbox">
                <input type="checkbox" />
                <span></span> News about Keenthemes products and feature updates
              </label>
              <label class="checkbox">
                <input type="checkbox" />
                <span></span> Tips on getting more out of Keen
              </label>
              <label class="checkbox">
                <input type="checkbox" checked="checked" />
                <span></span> Things you missed since you last logged into Keen
              </label>
              <label class="checkbox">
                <input type="checkbox" checked="checked" />
                <span></span> News about Metronic on partner products and other
                services
              </label>
              <label class="checkbox">
                <input type="checkbox" checked="checked" />
                <span></span> Tips on Metronic business products
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
export default {
  name: "EmailSettings"
};
</script>

<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">Change Password</h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Change your account password</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="submit"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          Save Changes
        </button>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form" id="kt_password_change_form">
      <div class="card-body">
        <!--begin::Alert-->
        <div
          class="alert alert-custom alert-light-danger fade show mb-10"
          role="alert"
        >
          <div class="alert-icon">
            <span class="svg-icon svg-icon-3x svg-icon-danger">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24" />
                  <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                  <rect
                    fill="#000000"
                    x="11"
                    y="10"
                    width="2"
                    height="7"
                    rx="1"
                  />
                  <rect
                    fill="#000000"
                    x="11"
                    y="7"
                    width="2"
                    height="2"
                    rx="1"
                  />
                </g>
              </svg>
              <!--end::Svg Icon-->
            </span>
          </div>
          <div class="alert-text font-weight-bold">
            Configure user passwords to expire periodically. Users will need
            warning that their passwords are going to expire, <br />or they
            might inadvertently get locked out of the system!
          </div>
          <div class="alert-close">
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="ki ki-close"></i>
              </span>
            </button>
          </div>
        </div>
        <!--end::Alert-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-alert"
            >Current Password</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              type="password"
              class="form-control form-control-lg form-control-solid mb-2"
              value=""
              placeholder="Current password"
              name="current_password"
              ref="current_password"
            />
            <a href="#" class="text-sm font-weight-bold">Forgot password ?</a>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-alert"
            >New Password</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              type="password"
              class="form-control form-control-lg form-control-solid"
              value=""
              placeholder="New password"
              name="new_password"
              ref="new_password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-alert"
            >Verify Password</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              type="password"
              class="form-control form-control-lg form-control-solid"
              value=""
              placeholder="Verify password"
              name="verify_password"
              ref="verify_password"
            />
          </div>
        </div>
      </div>
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_PASSWORD } from "@/core/services/store/auth.module";
import KTUtil from "@/assets/js/components/util";

import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import Swal from "sweetalert2";

export default {
  name: "ChangePassword",
  data() {
    return {
      password: "",
      status: "",
      valid: true
    };
  },
  mounted() {
    const password_change_form = KTUtil.getById("kt_password_change_form");
    var curr_password = this.currentUser.password;

    this.fv = formValidation(password_change_form, {
      fields: {
        current_password: {
          validators: {
            notEmpty: {
              message: "Current password is required"
            },
            identical: {
              compare: function() {
                return curr_password;
              },
              message: "Wrong password"
            }
          }
        },
        new_password: {
          validators: {
            notEmpty: {
              message: "New password is required"
            }
          }
        },
        verify_password: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function() {
                return password_change_form.querySelector(
                  '[name="new_password"]'
                ).value;
              },
              message: "The password and its confirm are not the same"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        bootstrap: new Bootstrap(),
        submitButton: new SubmitButton()
      }
    });
  },
  methods: {
    save() {
      this.fv.validate();

      this.fv.on("core.form.valid", () => {
        var password = this.$refs.new_password.value;
        const submitButton = this.$refs["kt_save_changes"];

        // set spinner to submit button
        submitButton.classList.add("spinner", "spinner-light", "spinner-right");

        // dummy delay
        setTimeout(() => {
          // send update request
          this.$store
            .dispatch(UPDATE_PASSWORD, { password })
            // go to which page after successfully update
            .then(() => this.$router.push({ name: "dashboard" }));

          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        }, 2000);
      });

      this.fv.on("core.form.invalid", () => {
        Swal.fire({
          title: "",
          text: "Please, provide correct data!",
          icon: "error",
          confirmButtonClass: "btn btn-secondary"
        });
      });
    },
    cancel() {
      this.fv.resetForm();
      this.$refs.current_password.value = "";
      this.$refs.new_password.value = "";
      this.$refs.verify_password.value = "";
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>

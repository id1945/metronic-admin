<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Account Information
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Change your account settings</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="reset"
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
    <form class="form">
      <div class="card-body">
        <!--begin::Heading-->
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Account:</h5>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label">Username</label>
          <div class="col-lg-9 col-xl-6">
            <div class="spinner spinner-sm spinner-success spinner-right">
              <input
                class="form-control form-control-lg form-control-solid"
                type="text"
                ref="username"
                :value="currentUserAccountInfo.username"
              />
            </div>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label">Email Address</label>
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-at"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg form-control-solid"
                ref="email"
                :value="currentUserAccountInfo.email"
                placeholder="Email"
              />
            </div>
            <span class="form-text text-muted"
              >Email will not be publicly displayed.
              <a href="#" class="kt-link">Learn more</a>.</span
            >
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label">Language</label>
          <div class="col-lg-9 col-xl-6">
            <select
              class="form-control form-control-lg form-control-solid"
              ref="language"
            >
              <template v-for="(item, i) in languages">
                <option
                  v-bind:key="i"
                  :value="item"
                  :selected="
                    currentUserAccountInfo.language == item ? true : false
                  "
                  >{{ item }}</option
                >
              </template>
            </select>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label">Time Zone</label>
          <div class="col-lg-9 col-xl-6">
            <select
              class="form-control form-control-lg form-control-solid"
              ref="time_zone"
            >
              <template v-for="(item, i) in time_zones">
                <option
                  v-bind:key="i"
                  :value="item"
                  :selected="
                    currentUserAccountInfo.time_zone == item ? true : false
                  "
                  >{{ item }}</option
                >
              </template>
            </select>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row align-items-center">
          <label class="col-xl-3 col-lg-3 col-form-label">Communication</label>
          <div class="col-lg-9 col-xl-6">
            <div class="checkbox-inline">
              <label class="checkbox">
                <input
                  type="checkbox"
                  ref="email_com"
                  :checked="currentUserAccountInfo.communication.email"
                /><span></span> Email</label
              >
              <label class="checkbox">
                <input
                  type="checkbox"
                  ref="sms_com"
                  :checked="currentUserAccountInfo.communication.sms"
                /><span></span> SMS</label
              >
              <label class="checkbox">
                <input
                  type="checkbox"
                  ref="phone_com"
                  :checked="currentUserAccountInfo.communication.phone"
                /><span></span> Phone</label
              >
            </div>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="separator separator-dashed my-5"></div>
        <!--begin::Form Group-->
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Security:</h5>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label"
            >Login verification</label
          >
          <div class="col-lg-9 col-xl-6">
            <button
              type="button"
              class="btn btn-light-primary font-weight-bold btn-sm"
            >
              Setup login verification
            </button>
            <p class="form-text text-muted pt-2">
              After you log in, you will be asked for additional information to
              confirm your identity and protect your account from being
              compromised. <a href="#" class="font-weight-bold">Learn more</a>.
            </p>
          </div>
        </div>
        <!--begin::Form Group-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label"
            >Password reset verification</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="checkbox-single">
              <label class="checkbox m-0">
                <input
                  type="checkbox"
                  ref="verification"
                  :checked="currentUserAccountInfo.verification"
                /><span></span> Require personal information to reset your
                password.</label
              >
            </div>
            <p class="form-text text-muted py-2">
              For extra security, this requires you to confirm your email or
              phone number when you reset your password.
              <a href="#" class="font-weight-boldk">Learn more</a>.
            </p>
            <button
              type="button"
              class="btn btn-light-danger font-weight-bold btn-sm"
            >
              Deactivate your account ?
            </button>
          </div>
        </div>
      </div>
    </form>
    <!--end::Form-->
  </div>
  <!--end::Card-->
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_ACCOUNT_INFO } from "@/core/services/store/profile.module";

export default {
  name: "AccountInformation",
  data() {
    return {
      time_zones: [
        "(GMT-11:00) International Date Line West",
        "(GMT-11:00) Midway Island",
        "(GMT-11:00) Samoa",
        "(GMT-10:00) Hawaii",
        "(GMT-08:00) Alaska",
        "(GMT-07:00) Pacific Time (US & Canada)",
        "(GMT-07:00) Tijuana",
        "(GMT-07:00) Arizona",
        "(GMT-06:00) Mountain Time (US & Canada)",
        "(GMT-06:00) Chihuahua",
        "(GMT-06:00) Mazatlan",
        "(GMT-06:00) Saskatchewan",
        "(GMT-06:00) Central America",
        "(GMT-05:00) Central Time (US & Canada)",
        "(GMT-05:00) Guadalajara",
        "(GMT-05:00) Mexico City",
        "(GMT-05:00) Monterrey",
        "(GMT-05:00) Bogota",
        "(GMT-05:00) Lima",
        "(GMT-05:00) Quito",
        "(GMT-04:00) Eastern Time (US & Canada)",
        "(GMT-04:00) Indiana (East)",
        "(GMT-04:00) Caracas",
        "(GMT-04:00) La Paz",
        "(GMT-04:00) Georgetown",
        "(GMT-03:00) Atlantic Time (Canada)",
        "(GMT-03:00) Santiago",
        "(GMT-03:00) Brasilia",
        "(GMT-03:00) Buenos Aires",
        "(GMT-02:30) Newfoundland",
        "(GMT-02:00) Greenland",
        "(GMT-02:00) Mid-Atlantic",
        "(GMT-01:00) Cape Verde Is.",
        "(GMT) Azores",
        "(GMT) Monrovia",
        "(GMT) UTC",
        "(GMT+01:00) Dublin",
        "(GMT+01:00) Edinburgh",
        "(GMT+01:00) Lisbon",
        "(GMT+01:00) London",
        "(GMT+01:00) Casablanca",
        "(GMT+01:00) West Central Africa",
        "(GMT+02:00) Belgrade",
        "(GMT+02:00) Bratislava",
        "(GMT+02:00) Budapest",
        "(GMT+02:00) Ljubljana",
        "(GMT+02:00) Prague",
        "(GMT+02:00) Sarajevo",
        "(GMT+02:00) Skopje",
        "(GMT+02:00) Warsaw",
        "(GMT+02:00) Zagreb",
        "(GMT+02:00) Brussels",
        "(GMT+02:00) Copenhagen",
        "(GMT+02:00) Madrid",
        "(GMT+02:00) Paris",
        "(GMT+02:00) Amsterdam",
        "(GMT+02:00) Berlin",
        "(GMT+02:00) Bern",
        "(GMT+02:00) Rome",
        "(GMT+02:00) Stockholm",
        "(GMT+02:00) Vienna",
        "(GMT+02:00) Cairo",
        "(GMT+02:00) Harare",
        "(GMT+02:00) Pretoria",
        "(GMT+03:00) Bucharest",
        "(GMT+03:00) Helsinki",
        "(GMT+03:00) Kiev",
        "(GMT+03:00) Kyiv",
        "(GMT+03:00) Riga",
        "(GMT+03:00) Sofia",
        "(GMT+03:00) Tallinn",
        "(GMT+03:00) Vilnius",
        "(GMT+03:00) Athens",
        "(GMT+03:00) Istanbul",
        "(GMT+03:00) Minsk",
        "(GMT+03:00) Jerusalem",
        "(GMT+03:00) Moscow",
        "(GMT+03:00) St. Petersburg",
        "(GMT+03:00) Volgograd",
        "(GMT+03:00) Kuwait",
        "(GMT+03:00) Riyadh",
        "(GMT+03:00) Nairobi",
        "(GMT+03:00) Baghdad",
        "(GMT+04:00) Abu Dhabi",
        "(GMT+04:00) Muscat",
        "(GMT+04:00) Baku",
        "(GMT+04:00) Tbilisi",
        "(GMT+04:00) Yerevan",
        "(GMT+04:30) Tehran",
        "(GMT+04:30) Kabul",
        "(GMT+05:00) Ekaterinburg",
        "(GMT+05:00) Islamabad",
        "(GMT+05:00) Karachi",
        "(GMT+05:00) Tashkent",
        "(GMT+05:30) Chennai",
        "(GMT+05:30) Kolkata",
        "(GMT+05:30) Mumbai",
        "(GMT+05:30) New Delhi",
        "(GMT+05:30) Sri Jayawardenepura",
        "(GMT+05:45) Kathmandu",
        "(GMT+06:00) Astana",
        "(GMT+06:00) Dhaka",
        "(GMT+06:00) Almaty",
        "(GMT+06:00) Urumqi",
        "(GMT+06:30) Rangoon",
        "(GMT+07:00) Novosibirsk",
        "(GMT+07:00) Bangkok",
        "(GMT+07:00) Hanoi",
        "(GMT+07:00) Jakarta",
        "(GMT+07:00) Krasnoyarsk",
        "(GMT+08:00) Beijing",
        "(GMT+08:00) Chongqing",
        "(GMT+08:00) Hong Kong",
        "(GMT+08:00) Kuala Lumpur",
        "(GMT+08:00) Singapore",
        "(GMT+08:00) Taipei",
        "(GMT+08:00) Perth",
        "(GMT+08:00) Irkutsk",
        "(GMT+08:00) Ulaan Bataar",
        "(GMT+09:00) Seoul",
        "(GMT+09:00) Osaka",
        "(GMT+09:00) Sapporo",
        "(GMT+09:00) Tokyo",
        "(GMT+09:00) Yakutsk",
        "(GMT+09:30) Darwin",
        "(GMT+09:30) Adelaide",
        "(GMT+10:00) Canberra",
        "(GMT+10:00) Melbourne",
        "(GMT+10:00) Sydney",
        "(GMT+10:00) Brisbane",
        "(GMT+10:00) Hobart",
        "(GMT+10:00) Vladivostok",
        "(GMT+10:00) Guam",
        "(GMT+10:00) Port Moresby",
        "(GMT+10:00) Solomon Is.",
        "(GMT+11:00) Magadan",
        "(GMT+11:00) New Caledonia",
        "(GMT+12:00) Fiji",
        "(GMT+12:00) Kamchatka",
        "(GMT+12:00) Marshall Is.",
        "(GMT+12:00) Auckland",
        "(GMT+12:00) Wellington",
        "(GMT+13:00) Nuku'alofa"
      ],
      languages: [
        "Bahasa Indonesia - Indonesian",
        "Bahasa Melayu - Malay",
        "Català - Catalan",
        "Čeština - Czech",
        "Dansk - Danish",
        "Deutsch - German",
        "English",
        "English UK - British English",
        "Español - Spanish",
        "Euskara - Basque (beta)",
        "Filipino",
        "Français - French",
        "Gaeilge - Irish (beta)",
        "Galego - Galician (beta)",
        "Hrvatski - Croatian",
        "Italiano - Italian",
        "Magyar - Hungarian",
        "Nederlands - Dutch",
        "Norsk - Norwegian",
        "Polski - Polish",
        "Português - Portuguese",
        "Română - Romanian",
        "Slovenčina - Slovak",
        "Suomi - Finnish",
        "Svenska - Swedish",
        "Tiếng Việt - Vietnamese",
        "Türkçe - Turkish",
        "Ελληνικά - Greek",
        "Български език - Bulgarian",
        "Русский - Russian",
        "Српски - Serbian",
        "Українська мова - Ukrainian",
        "עִבְרִית - Hebrew",
        "اردو - Urdu (beta)",
        "العربية - Arabic",
        "فارسی - Persian",
        "मराठी - Marathi",
        "हिन्दी - Hindi",
        "বাংলা - Bangla",
        "ગુજરાતી - Gujarati",
        "தமிழ் - Tamil",
        "ಕನ್ನಡ - Kannada",
        "ภาษาไทย - Thai",
        "한국어 - Korean",
        "日本語 - Japanese",
        "简体中文 - Simplified Chinese",
        "繁體中文 - Traditional Chinese"
      ]
    };
  },
  methods: {
    save() {
      var username = this.$refs.username.value;
      var email = this.$refs.email.value;
      var language = this.$refs.language.value;
      var time_zone = this.$refs.time_zone.value;
      var communication = {
        email: this.$refs.email_com.checked,
        sms: this.$refs.sms_com.checked,
        phone: this.$refs.phone_com.checked
      };
      var verification = this.$refs.verification.checked;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_ACCOUNT_INFO, {
          username,
          email,
          language,
          time_zone,
          communication,
          verification
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    cancel() {
      this.$refs.username.value = this.currentUserAccountInfo.username;
      this.$refs.email.value = this.currentUserAccountInfo.email;
      this.$refs.language.value = this.currentUserAccountInfo.language;
      this.$refs.time_zone.value = this.currentUserAccountInfo.time_zone;
      this.$refs.email_com.checked = this.currentUserAccountInfo.communication.email;
      this.$refs.sms_com.checked = this.currentUserAccountInfo.communication.sms;
      this.$refs.phone_com.checked = this.currentUserAccountInfo.communication.phone;
      this.$refs.verification.checked = this.currentUserAccountInfo.verification;
    }
  },
  computed: {
    ...mapGetters(["currentUserAccountInfo"])
  }
};
</script>

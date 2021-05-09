// action types
export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";

// import ApiService from "@/core/services/api.service";

export const TEST = "TEST";

const state = {
  user_personal_info: {
    photo: "media/users/300_21.jpg",
    name: "James",
    surname: "Jones",
    company_name: "Fifestudios",
    job: "Application Developer",
    email: "matt@fifestudios.com",
    phone: "44(76)34254578",
    company_site: "fifestudios"
  },
  user_account_info: {
    username: "nick84",
    email: "nick.watson@loop.com",
    language: "English",
    time_zone: "(GMT-11:00) Midway Island",
    communication: {
      email: true,
      sms: true,
      phone: false
    },
    verification: true
  }
};

const getters = {
  currentUserPersonalInfo(state) {
    return state.user_personal_info;
  },

  currentUserAccountInfo(state) {
    return state.user_account_info;
  },

  currentUserPhoto(state) {
    return state.user_personal_info.photo;
  }
};

const actions = {
  [UPDATE_PERSONAL_INFO](context, payload) {
    context.commit(SET_PERSONAL_INFO, payload);
  },
  [UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(SET_ACCOUNT_INFO, payload);
  }
};

const mutations = {
  [SET_PERSONAL_INFO](state, user_personal_info) {
    state.user_personal_info = user_personal_info;
  },
  [SET_ACCOUNT_INFO](state, user_account_info) {
    state.user_account_info = user_account_info;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

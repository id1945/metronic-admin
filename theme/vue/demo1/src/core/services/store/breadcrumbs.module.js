// action types
export const APPEND_BREADCRUM = "appendBreadcrumb";

// mutation types
export const SET_BREADCRUMB = "setBreadcrumb";
export const ADD_BREADCRUMB = "addBreadcrumb";

export default {
  state: {
    breadcrumbs: []
  },
  getters: {
    /**
     * Get list of breadcrumbs for current page
     * @param state
     * @returns {*}
     */
    breadcrumbs(state) {
      return state.breadcrumbs;
    },

    /**
     * Get the page title
     * @param state
     * @returns {*}
     */
    pageTitle(state) {
      let last = state.breadcrumbs[state.breadcrumbs.length - 1];
      if (last && last.title) {
        return last.title;
      }
    }
  },
  actions: {
    /**
     * Set the breadcrumbs list
     * @param state
     * @param payload
     */
    [SET_BREADCRUMB](state, payload) {
      state.commit(SET_BREADCRUMB, payload);
    },

    /**
     * Add breadcrumb
     * @param state
     * @param payload
     */
    [ADD_BREADCRUMB](state, payload) {
      if (typeof payload === "object") {
        payload.forEach(item => state.commit(APPEND_BREADCRUM, item));
      } else {
        state.commit(APPEND_BREADCRUM, payload);
      }
    }
  },
  mutations: {
    [APPEND_BREADCRUM](state, payload) {
      state.breadcrumbs = [...state.breadcrumbs, payload];
    },
    [SET_BREADCRUMB](state, payload) {
      state.breadcrumbs = payload;
    }
  }
};

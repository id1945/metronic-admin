// action types
export const ADD_BODY_CLASSNAME = "addBodyClassName";
export const REMOVE_BODY_CLASSNAME = "removeBodyClassName";
export const ADD_CLASSNAME = "addClassName";
// mutation types
export const SET_CLASSNAME_BY_POSITION = "setClassNameByPosition";

export default {
  state: {
    classes: {}
  },
  getters: {
    getClasses: state => position => {
      if (typeof position !== "undefined") {
        return state.classes[position];
      }
      return state.classes;
    }
  },
  actions: {
    [ADD_BODY_CLASSNAME](context, className) {
      document.body.classList.add(className);
    },
    [REMOVE_BODY_CLASSNAME](context, className) {
      document.body.classList.remove(className);
    },
    [ADD_CLASSNAME](context, payload) {
      context.commit(SET_CLASSNAME_BY_POSITION, payload);
    }
  },
  mutations: {
    [SET_CLASSNAME_BY_POSITION](state, payload) {
      const { position, className } = payload;
      if (!state.classes[position]) {
        state.classes[position] = [];
      }
      state.classes[position].push(className);
    }
  }
};

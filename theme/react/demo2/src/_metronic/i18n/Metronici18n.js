import React, {createContext} from "react";
import {useMemo} from "react";
import {useContext} from "react";

const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || "i18nConfig";
const initialState = {
    selectedLang: "en"
  };

function getConfig() {
  const ls = localStorage.getItem(I18N_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch (er) {
      console.error(er);
    }
  }
  return initialState;
}

// Side effect
export function setLanguage(lang) {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }));
  window.location.reload();
}

const I18nContext = createContext();

export function useLang() {
  return useContext(I18nContext).selectedLang;
}

export function withI18n(Component) {
  class WithI18n extends React.Component {
    static displayName = `WithI18n(${Component.displayName || Component.name})`;

    static contextType = I18nContext;

    render() {
      return <Component {...this.props} menu={this.context} />;
    }
  }

  return WithI18n;
}

export const I18nConsumer = I18nContext.Consumer;

export function MetronicI18nProvider({ children }) {
  const lang = useMemo(getConfig, []);

  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>;
}

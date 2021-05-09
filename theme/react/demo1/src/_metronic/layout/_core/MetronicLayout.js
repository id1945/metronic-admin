import React, { createContext, useContext, useMemo } from "react";
import { getInitLayoutConfig } from "./LayoutConfig";
import { HtmlClassService } from "./HTMLClassService";

const LAYOUT_CONFIG_KEY =
  process.env.REACT_APP_LAYOUT_CONFIG_KEY || "LayoutConfig";

function getConfig() {
  const ls = localStorage.getItem(LAYOUT_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch (er) {
      console.error(er);
    }
  }
  return getInitLayoutConfig();
}

// Side effect
export function setLayoutConfig(config) {
  localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config));
  window.location.reload();
}

const HtmlClassServiceContext = createContext();

/**
 *
 *
 * @export
 * @returns Layout context from 'localStorage'
 */
export function useHtmlClassService() {
  return useContext(HtmlClassServiceContext);
}

export function withHtmlClassService(Component) {
  class WithHtmlClassService extends React.Component {
    static displayName = `WithHtmlClassService(${Component.displayName ||
      Component.name})`;

    static contextType = HtmlClassServiceContext;

    render() {
      return <Component {...this.props} htmlClassService={this.context} />;
    }
  }

  return WithHtmlClassService;
}

export const HtmlClassServiceConsumer = HtmlClassServiceContext.Consumer;

export function MetronicLayoutProvider({ children }) {
  const lc = useMemo(getConfig, []);
  const hcs = useMemo(() => {
    const service = new HtmlClassService();

    service.setConfig(lc);

    return service;
  }, [lc]);

  return (
    <HtmlClassServiceContext.Provider value={hcs}>
      {children}
    </HtmlClassServiceContext.Provider>
  );
}

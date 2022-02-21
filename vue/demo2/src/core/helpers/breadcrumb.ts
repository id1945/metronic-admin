import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";

/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
export const setCurrentPageBreadcrumbs = (
  pageTitle: string,
  breadcrumbs: Array<string>
): void => {
  store.dispatch(Actions.SET_BREADCRUMB_ACTION, {
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs,
  });
};

/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
export const setCurrentPageTitle = (title: string): void => {
  store.dispatch(Actions.SET_BREADCRUMB_ACTION, {
    title: title,
  });
};

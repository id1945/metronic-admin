import { cleanTask } from "./gulp/clean.js";
import {
  localHostTask,
  reloadTask,
  watchTask,
  watchSCSSTask,
  watchJSTask,
} from "./gulp/watch.js";
import {
  rtlTask,
  buildBundleTask,
  compileTask,
  buildTask,
} from "./gulp/compile.js";

// Clean tasks:
export { cleanTask as clean };

// Watch tasks:
export { localHostTask as localhost };
export { reloadTask as reload };
export { watchTask as watch };
export { watchSCSSTask as watchSCSS };
export { watchJSTask as watchJS };

// Main tasks:
export { rtlTask as rtl };
export { buildBundleTask as buildBundle };
export { buildTask as build };
export { compileTask as compile };

// Entry point:
export default compileTask;

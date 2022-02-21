import { configure } from "vee-validate";

export function initVeeValidate() {
  // Updating default vee-validate configuration
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  });
}

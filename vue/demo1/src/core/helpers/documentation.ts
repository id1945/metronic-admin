import { computed } from "vue";
import store from "@/store/index";
import ClipboardJS from "clipboard";
/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Return name of the theme
 * @returns {string}
 */
export const themeName = computed(() => {
  return store.getters.layoutConfig("themeName");
});

/**
 * Return version of the theme
 * @returns {string}
 */
export const version = computed(() => {
  return store.getters.layoutConfig("themeVersion");
});

/**
 * Return demo name
 * @returns {string}
 */
export const demo = computed(() => {
  return store.getters.layoutConfig("demo");
});

//code copy button initialization
export const useCopyClipboard = () => {
  const _init = (element) => {
    let elements = element;

    if (typeof elements === "undefined") {
      elements = document.querySelectorAll(".highlight");
    }

    if (elements && elements.length > 0) {
      for (let i = 0; i < elements.length; ++i) {
        const highlight = elements[i];
        const copy = highlight.querySelector(".highlight-copy");

        if (copy) {
          const clipboard = new ClipboardJS(copy, {
            target: (trigger): any => {
              const highlight = trigger.closest(".highlight");

              if (highlight) {
                let el: Element | null =
                  highlight.querySelector(".tab-pane.active");

                if (el == null) {
                  el = highlight.querySelector(".highlight-code");
                }

                return el as Element;
              }

              return highlight;
            },
          });

          clipboard.on("success", (e) => {
            const caption = e.trigger.innerHTML;

            e.trigger.innerHTML = "copied";
            e.clearSelection();

            setTimeout(function () {
              e.trigger.innerHTML = caption;
            }, 2000);
          });
        }
      }
    }
  };

  return {
    init: (element?) => {
      _init(element);
    },
  };
};

<template>
  <div>
    <!--begin::Notice-->
    <b-alert
      show
      variant="light"
      class="alert alert-custom alert-white alert-shadow fade show gutter-b"
    >
      <div class="alert-icon">
        <span class="svg-icon svg-icon-lg">
          <inline-svg src="media/svg/icons/Tools/Compass.svg" />
        </span>
      </div>
      <div class="alert-text">
        <b>vue-treeselect</b> provides multi-select component with nested
        options support for Vue.js
        <a
          class="font-weight-bold"
          href="https://vue-treeselect.js.org/#basic-features"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>
    <!--end::Notice-->

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Basic Features'">
          <template v-slot:preview>
            <KTTreeSelect1></KTTreeSelect1>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'More Features'">
          <template v-slot:preview>
            <KTTreeSelect2></KTTreeSelect2>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Delayed Loading'">
          <template v-slot:preview>
            <KTTreeSelect3></KTTreeSelect3>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Async Searching'">
          <template v-slot:preview>
            <KTTreeSelect4></KTTreeSelect4>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Flat Mode & Sort Values'">
          <template v-slot:preview>
            <KTTreeSelect5></KTTreeSelect5>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Prevent Value Combining'">
          <template v-slot:preview>
            <KTTreeSelect6></KTTreeSelect6>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
          <template v-slot:js>
            {{ code6.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Disable Branch Nodes'">
          <template v-slot:preview>
            <KTTreeSelect7></KTTreeSelect7>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
          <template v-slot:js>
            {{ code7.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Flatten Search Results'">
          <template v-slot:preview>
            <KTTreeSelect8></KTTreeSelect8>
          </template>
          <template v-slot:html>
            {{ code8.html }}
          </template>
          <template v-slot:js>
            {{ code8.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Disable Item Selection'">
          <template v-slot:preview>
            <KTTreeSelect9></KTTreeSelect9>
          </template>
          <template v-slot:html>
            {{ code9.html }}
          </template>
          <template v-slot:js>
            {{ code9.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Nested Search'">
          <template v-slot:preview>
            <KTTreeSelect10></KTTreeSelect10>
          </template>
          <template v-slot:html>
            {{ code10.html }}
          </template>
          <template v-slot:js>
            {{ code10.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Customize Key Names'">
          <template v-slot:preview>
            <KTTreeSelect11></KTTreeSelect11>
          </template>
          <template v-slot:html>
            {{ code11.html }}
          </template>
          <template v-slot:js>
            {{ code11.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Customize Option Label'">
          <template v-slot:preview>
            <KTTreeSelect12></KTTreeSelect12>
          </template>
          <template v-slot:html>
            {{ code12.html }}
          </template>
          <template v-slot:js>
            {{ code12.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Customize Value Label'">
          <template v-slot:preview>
            <KTTreeSelect13></KTTreeSelect13>
          </template>
          <template v-slot:html>
            {{ code13.html }}
          </template>
          <template v-slot:js>
            {{ code13.js }}
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import KTTreeSelect1 from "@/view/pages/plugins/treeselect/Treeselect1";
import KTTreeSelect2 from "@/view/pages/plugins/treeselect/Treeselect2";
import KTTreeSelect3 from "@/view/pages/plugins/treeselect/Treeselect3";
import KTTreeSelect4 from "@/view/pages/plugins/treeselect/Treeselect4";
import KTTreeSelect5 from "@/view/pages/plugins/treeselect/Treeselect5";
import KTTreeSelect6 from "@/view/pages/plugins/treeselect/Treeselect6";
import KTTreeSelect7 from "@/view/pages/plugins/treeselect/Treeselect7";
import KTTreeSelect8 from "@/view/pages/plugins/treeselect/Treeselect8";
import KTTreeSelect9 from "@/view/pages/plugins/treeselect/Treeselect9";
import KTTreeSelect10 from "@/view/pages/plugins/treeselect/Treeselect10";
import KTTreeSelect11 from "@/view/pages/plugins/treeselect/Treeselect11";
import KTTreeSelect12 from "@/view/pages/plugins/treeselect/Treeselect12";
import KTTreeSelect13 from "@/view/pages/plugins/treeselect/Treeselect13";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      code1: {
        html: `
            <div>
              <treeselect
                      :multiple="true"
                      :options="options"
                      placeholder="Select your favourite(s)..."
                      v-model="value"
              />
              <div class="mt-5 ml-1">
                  Selected: <strong>{{ value }}</strong>
              </div>
            </div>
          `,
        js: `
            import '@riophae/vue-treeselect/dist/vue-treeselect.css'

            export default {
                name: "treeselect-1",
                components:{
                },
                data: () => ({
                    value: [],
                    options: [ {
                        id: 'fruits',
                        label: 'Fruits',
                        children: [ {
                            id: 'apple',
                            label: 'Apple 🍎',
                            isNew: true,
                        }, {
                            id: 'grapes',
                            label: 'Grapes 🍇',
                        }, {
                            id: 'pear',
                            label: 'Pear 🍐',
                        }, {
                            id: 'strawberry',
                            label: 'Strawberry 🍓',
                        }, {
                            id: 'watermelon',
                            label: 'Watermelon 🍉',
                        } ],
                    }, {
                        id: 'vegetables',
                        label: 'Vegetables',
                        children: [ {
                            id: 'corn',
                            label: 'Corn 🌽',
                        }, {
                            id: 'carrot',
                            label: 'Carrot 🥕',
                        }, {
                            id: 'eggplant',
                            label: 'Eggplant 🍆',
                        }, {
                            id: 'tomato',
                            label: 'Tomato 🍅',
                        } ],
                    } ],
                })
            }
          `
      },

      code2: {
        html: `
            <div :dir="rtl ? 'rtl' : 'ltr'">
            <div>
                <treeselect
                        name="demo"
                        :multiple="multiple"
                        :clearable="clearable"
                        :searchable="searchable"
                        :disabled="disabled"
                        :open-on-click="openOnClick"
                        :open-on-focus="openOnFocus"
                        :clear-on-select="clearOnSelect"
                        :close-on-select="closeOnSelect"
                        :always-open="alwaysOpen"
                        :append-to-body="appendToBody"
                        :options="options"
                        :limit="3"
                        :max-height="200"
                        v-model="value"
                />
                <div class="mt-5">
                    Selected: <strong>{{ value }}</strong>
                </div>
            </div>
            <div class="mt-5">
                <div>
                    <b-form-checkbox class="custom-control-inline" v-model="multiple">Multi-select</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="clearable">Clearable</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="searchable">Searchable</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="disabled">Disabled</b-form-checkbox>
                </div>
                <div>
                    <b-form-checkbox class="custom-control-inline" v-model="openOnClick">Open on click</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="openOnFocus">Open on focus</b-form-checkbox>
                </div>
                <div>
                    <b-form-checkbox class="custom-control-inline" v-model="clearOnSelect">Clear on select</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="closeOnSelect">Close on select</b-form-checkbox>
                </div>
                <div>
                    <b-form-checkbox class="custom-control-inline" v-model="alwaysOpen">Always open</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="appendToBody">Append to body</b-form-checkbox>
                    <b-form-checkbox class="custom-control-inline" v-model="rtl">RTL mode</b-form-checkbox>
                </div>
            </div>
            </div>
          `,
        js: `
            export default {
              data: () => ({
                  multiple: true,
                  clearable: true,
                  searchable: true,
                  disabled: false,
                  openOnClick: true,
                  openOnFocus: false,
                  clearOnSelect: true,
                  closeOnSelect: false,
                  alwaysOpen: false,
                  appendToBody: false,
                  rtl: false,
                  value: [],
                  options: [ {
                      id: 'fruits',
                      label: 'Fruits',
                      children: [ {
                          id: 'apple',
                          label: 'Apple 🍎',
                          isNew: true,
                      }, {
                          id: 'grapes',
                          label: 'Grapes 🍇',
                      }, {
                          id: 'pear',
                          label: 'Pear 🍐',
                      }, {
                          id: 'strawberry',
                          label: 'Strawberry 🍓',
                      }, {
                          id: 'watermelon',
                          label: 'Watermelon 🍉',
                      } ],
                  }, {
                      id: 'vegetables',
                      label: 'Vegetables',
                      children: [ {
                          id: 'corn',
                          label: 'Corn 🌽',
                      }, {
                          id: 'carrot',
                          label: 'Carrot 🥕',
                      }, {
                          id: 'eggplant',
                          label: 'Eggplant 🍆',
                      }, {
                          id: 'tomato',
                          label: 'Tomato 🍅',
                      } ],
                  } ],
              }),

              watch: {
                  multiple(newValue) {
                      if (newValue) {
                          this.value = this.value ? [ this.value ] : []
                      } else {
                          this.value = this.value[0]
                      }
                  },
              },
            }
          `
      },

      code3: {
        html: `
            <treeselect
              :multiple="true"
              :options="options"
              :load-options="loadOptions"
              placeholder="Try expanding any folder option..."
              v-model="value"
            />
          `,
        js: `
            import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'
            import '@riophae/vue-treeselect/dist/vue-treeselect.css'

            // We just use \`setTimeout()\` here to simulate an async operation
            // instead of requesting a real API server for demo purpose.
            const simulateAsyncOperation = fn => {
                setTimeout(fn, 2000)
            }

            export default {
                data: () => ({
                    value: null,
                    options: [ {
                        id: 'success',
                        label: 'With children',
                        // Declare an unloaded branch node.
                        children: null,
                    }, {
                        id: 'no-children',
                        label: 'With no children',
                        children: null,
                    }, {
                        id: 'failure',
                        label: 'Demonstrates error handling',
                        children: null,
                    } ],
                }),

                methods: {
                    loadOptions({ action, parentNode, callback }) {
                        // Typically, do the AJAX stuff here.
                        // Once the server has responded,
                        // assign children options to the parent node & call the callback.

                        if (action === LOAD_CHILDREN_OPTIONS) {
                            switch (parentNode.id) {
                                case 'success': {
                                    simulateAsyncOperation(() => {
                                        parentNode.children = [ {
                                            id: 'child',
                                            label: 'Child option',
                                        } ]
                                        callback()
                                    })
                                    break
                                }
                                case 'no-children': {
                                    simulateAsyncOperation(() => {
                                        parentNode.children = []
                                        callback()
                                    })
                                    break
                                }
                                case 'failure': {
                                    simulateAsyncOperation(() => {
                                        callback(new Error('Failed to load options: network error.'))
                                    })
                                    break
                                }
                                default: /* empty */
                            }
                        }
                    },
                },
            }
          `
      },

      code4: {
        html: `
            <treeselect
              :multiple="true"
              :async="true"
              :load-options="loadOptions"
            />
          `,
        js: `
            import { ASYNC_SEARCH } from '@riophae/vue-treeselect'

            const simulateAsyncOperation = fn => {
                setTimeout(fn, 2000)
            }

            export default {
                methods: {
                    loadOptions({ action, searchQuery, callback }) {
                        if (action === ASYNC_SEARCH) {
                            simulateAsyncOperation(() => {
                                const options = [ 1, 2, 3, 4, 5 ].map(i => ({
                                    id: \`\${searchQuery}-\${i}\`,
                                    label: \`\${searchQuery}-\${i}\`,
                                }))
                                callback(null, options)
                            })
                        }
                    },
                },
            }
          `
      },

      code5: {
        html: `
            <div>
                <treeselect
                        :multiple="true"
                        :options="options"
                        :flat="true"
                        :sort-value-by="sortValueBy"
                        :default-expand-level="1"
                        placeholder="Try selecting some options."
                        v-model="value"
                />
                <div class="mt-5">
                    Selected: <strong>{{ value }}</strong>
                </div>
                <p class="mt-5">Sort value by:</p>
                <p class="options">
                    <b-form-radio class="custom-control-inline" value="ORDER_SELECTED" v-model="sortValueBy">Order selected</b-form-radio>
                    <b-form-radio class="custom-control-inline" value="LEVEL" v-model="sortValueBy">Level</b-form-radio>
                    <b-form-radio class="custom-control-inline" value="INDEX" v-model="sortValueBy">Index</b-form-radio>
                </p>
            </div>
          `,
        js: `
            export default {
                data() {
                    return {
                        value: [],
                        options: [ {
                            id: 'fruits',
                            label: 'Fruits',
                            children: [ {
                                id: 'apple',
                                label: 'Apple 🍎',
                                isNew: true,
                            }, {
                                id: 'grapes',
                                label: 'Grapes 🍇',
                            }, {
                                id: 'pear',
                                label: 'Pear 🍐',
                            }, {
                                id: 'strawberry',
                                label: 'Strawberry 🍓',
                            }, {
                                id: 'watermelon',
                                label: 'Watermelon 🍉',
                            } ],
                        }, {
                            id: 'vegetables',
                            label: 'Vegetables',
                            children: [ {
                                id: 'corn',
                                label: 'Corn 🌽',
                            }, {
                                id: 'carrot',
                                label: 'Carrot 🥕',
                            }, {
                                id: 'eggplant',
                                label: 'Eggplant 🍆',
                            }, {
                                id: 'tomato',
                                label: 'Tomato 🍅',
                            } ],
                        } ],
                        sortValueBy: 'ORDER_SELECTED',
                    }
                },
            }
          `
      },

      code6: {
        html: `
            <div>
              <treeselect
                      :multiple="true"
                      :options="options"
                      :value-consists-of="valueConsistsOf"
                      v-model="value"
              />
              <div class="mt-5">
                  Selected: <strong>{{ value }}</strong>
              </div>
              <p class="mt-5">Value consists of:</p>
              <p class="options">
                  <b-form-radio class="custom-control-inline" value="ALL" v-model="valueConsistsOf">All</b-form-radio>
                  <b-form-radio class="custom-control-inline" value="BRANCH_PRIORITY" v-model="valueConsistsOf">Branch priority</b-form-radio>
                  <b-form-radio class="custom-control-inline" value="LEAF_PRIORITY" v-model="valueConsistsOf">Leaf priority</b-form-radio>
                  <b-form-radio class="custom-control-inline" value="ALL_WITH_INDETERMINATE" v-model="valueConsistsOf">All with indeterminate</b-form-radio>
              </p>
          </div>
          `,
        js: `
            export default {
                data: () => ({
                    value: [ 'team-i' ],
                    valueConsistsOf: 'BRANCH_PRIORITY',
                    options: [ {
                        id: 'company',
                        label: 'Company 🏢',
                        children: [ {
                            id: 'team-i',
                            label: 'Team I 👥',
                            children: [ {
                                id: 'person-a',
                                label: 'Person A 👱',
                            }, {
                                id: 'person-b',
                                label: 'Person B 🧔',
                            } ],
                        }, {
                            id: 'team-ii',
                            label: 'Team II 👥',
                            children: [ {
                                id: 'person-c',
                                label: 'Person C 👳',
                            }, {
                                id: 'person-d',
                                label: 'Person D 👧',
                            } ],
                        }, {
                            id: 'person-e',
                            label: 'Person E 👩',
                        } ],
                    } ],
                }),
            }
          `
      },

      code7: {
        html: `
            <treeselect
              :options="options"
              :disable-branch-nodes="true"
              :show-count="true"
              placeholder="Select..."
            />
          `,
        js: `
            export default {
                data: () => ({
                    options: [ {
                        id: 'fruits',
                        label: 'Fruits',
                        children: [ {
                            id: 'apple',
                            label: 'Apple 🍎',
                            isNew: true,
                        }, {
                            id: 'grapes',
                            label: 'Grapes 🍇',
                        }, {
                            id: 'pear',
                            label: 'Pear 🍐',
                        }, {
                            id: 'strawberry',
                            label: 'Strawberry 🍓',
                        }, {
                            id: 'watermelon',
                            label: 'Watermelon 🍉',
                        } ],
                    }, {
                        id: 'vegetables',
                        label: 'Vegetables',
                        children: [ {
                            id: 'corn',
                            label: 'Corn 🌽',
                        }, {
                            id: 'carrot',
                            label: 'Carrot 🥕',
                        }, {
                            id: 'eggplant',
                            label: 'Eggplant 🍆',
                        }, {
                            id: 'tomato',
                            label: 'Tomato 🍅',
                        } ],
                    } ],
                }),
            }
          `
      },

      code8: {
        html: `
            <treeselect
              :options="options"
              :multiple="true"
              :flatten-search-results="true"
              placeholder="Select..."
            />
          `,
        js: `
            export default {
                data: () => ({
                    options: [ {
                        id: 'fruits',
                        label: 'Fruits',
                        children: [ {
                            id: 'apple',
                            label: 'Apple 🍎',
                            isNew: true,
                        }, {
                            id: 'grapes',
                            label: 'Grapes 🍇',
                        }, {
                            id: 'pear',
                            label: 'Pear 🍐',
                        }, {
                            id: 'strawberry',
                            label: 'Strawberry 🍓',
                        }, {
                            id: 'watermelon',
                            label: 'Watermelon 🍉',
                        } ],
                    }, {
                        id: 'vegetables',
                        label: 'Vegetables',
                        children: [ {
                            id: 'corn',
                            label: 'Corn 🌽',
                        }, {
                            id: 'carrot',
                            label: 'Carrot 🥕',
                        }, {
                            id: 'eggplant',
                            label: 'Eggplant 🍆',
                        }, {
                            id: 'tomato',
                            label: 'Tomato 🍅',
                        } ],
                    } ],
                }),
            }
          `
      },

      code9: {
        html: `
            <treeselect
              :multiple="true"
              :options="options"
              :value="value"
            />
          `,
        js: `
            export default {
                data: () => ({
                    options: [ {
                        id: 'folder',
                        label: 'Normal Folder',
                        children: [ {
                            id: 'disabled-checked',
                            label: 'Checked',
                            isDisabled: true,
                        }, {
                            id: 'disabled-unchecked',
                            label: 'Unchecked',
                            isDisabled: true,
                        }, {
                            id: 'item-1',
                            label: 'Item',
                        } ],
                    }, {
                        id: 'disabled-folder',
                        label: 'Disabled Folder',
                        isDisabled: true,
                        children: [ {
                            id: 'item-2',
                            label: 'Item',
                        }, {
                            id: 'item-3',
                            label: 'Item',
                        } ],
                    } ],
                    value: [ 'disabled-checked' ],
                }),
            }
          `
      },

      code10: {
        html: `
            <treeselect
              :multiple="true"
              :options="options"
              :disable-branch-nodes="true"
              v-model="value"
              search-nested
            />
          `,
        js: `
            export default {
                data: () => ({
                    value: [],
                    options: [ {
                        id: 'm',
                        label: 'McDonalds',
                        children: [ {
                            id: 'm-fries',
                            label: 'French Fries',
                        }, {
                            id: 'm-cheeseburger',
                            label: 'Cheeseburger',
                        }, {
                            id: 'm-white-cheedar-burger',
                            label: 'White Cheddar Burger',
                        }, {
                            id: 'm-southwest-buttermilk-crispy-chicken-salad',
                            label: 'Southwest Buttermilk Crispy Chicken Salad',
                        }, {
                            id: 'm-cola',
                            label: 'Coca-Cola®',
                        }, {
                            id: 'm-chocolate-shake',
                            label: 'Chocolate Shake',
                        } ],
                    }, {
                        id: 'kfc',
                        label: 'KFC',
                        children: [ {
                            id: 'kfc-fries',
                            label: 'French Fries',
                        }, {
                            id: 'kfc-chicken-litties-sandwiches',
                            label: 'Chicken Litties Sandwiches',
                        }, {
                            id: 'kfc-grilled-chicken',
                            label: 'Grilled Chicken',
                        }, {
                            id: 'kfc-cola',
                            label: 'Pepsi® Cola',
                        } ],
                    }, {
                        id: 'bk',
                        label: 'Burger King',
                        children: [ {
                            id: 'bk-chicken-fries',
                            label: 'Chicken Fries',
                        }, {
                            id: 'bk-chicken-nuggets',
                            label: 'Chicken Nuggets',
                        }, {
                            id: 'bk-garden-side-salad',
                            label: 'Garden Side Salad',
                        }, {
                            id: 'bk-cheeseburger',
                            label: 'Cheeseburger',
                        }, {
                            id: 'bk-bacon-king-jr-sandwich',
                            label: 'BACON KING™ Jr. Sandwich',
                        }, {
                            id: 'bk-cola',
                            label: 'Coca-Cola®',
                        }, {
                            id: 'bk-oreo-chocolate-shake',
                            label: 'OREO® Chocolate Shake',
                        } ],
                    } ],
                }),
            }
          `
      },

      code11: {
        html: `
            <treeselect
              :options="options"
              :value="value"
              :normalizer="normalizer"
            />
          `,
        js: `
            export default {
              data: () => ({
                  value: null,
                  options: [ {
                      key: 'a',
                      name: 'a',
                      subOptions: [ {
                          key: 'aa',
                          name: 'aa',
                      } ],
                  } ],
                  normalizer(node) {
                      return {
                          id: node.key,
                          label: node.name,
                          children: node.subOptions,
                      }
                  },
              }),
          }
          `
      },

      code12: {
        html: `
            <treeselect
              :options="options"
              :value="value"
              :searchable="false"
              :show-count="true"
              :default-expand-level="1"
            >
                <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
                    {{ node.isBranch ? 'Branch' : 'Leaf' }}: {{ node.label }}
                    <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
                </label>
            </treeselect>
          `,
        js: `
            export default {
                data: () => ({
                    value: null,
                    options: [ {
                        id: 'fruits',
                        label: 'Fruits',
                        children: [ {
                            id: 'apple',
                            label: 'Apple 🍎',
                            isNew: true,
                        }, {
                            id: 'grapes',
                            label: 'Grapes 🍇',
                        }, {
                            id: 'pear',
                            label: 'Pear 🍐',
                        }, {
                            id: 'strawberry',
                            label: 'Strawberry 🍓',
                        }, {
                            id: 'watermelon',
                            label: 'Watermelon 🍉',
                        } ],
                    }, {
                        id: 'vegetables',
                        label: 'Vegetables',
                        children: [ {
                            id: 'corn',
                            label: 'Corn 🌽',
                        }, {
                            id: 'carrot',
                            label: 'Carrot 🥕',
                        }, {
                            id: 'eggplant',
                            label: 'Eggplant 🍆',
                        }, {
                            id: 'tomato',
                            label: 'Tomato 🍅',
                        } ],
                    } ],
                }),
            }
          `
      },

      code13: {
        html: `
            <div>
              <treeselect :options="options" :value="value" :multiple="multiple">
                  <div slot="value-label" slot-scope="{ node }">{{ node.raw.customLabel }}</div>
              </treeselect>
              <p class="mt-5">
                  <b-form-checkbox class="custom-control-inline" v-model="multiple">Multi-select</b-form-checkbox>
              </p>
          </div>
          `,
        js: `
            export default {
                data: () => ({
                    multiple: true,
                    value: null,
                    options: [ 1, 2, 3 ].map(i => ({
                        id: i,
                        label: \`Label \${i}\`,
                        customLabel: \`Custom Label \${i}\`,
                    })),
                }),
            }
          `
      }
    };
  },
  components: {
    KTCodePreview,
    KTTreeSelect1,
    KTTreeSelect2,
    KTTreeSelect3,
    KTTreeSelect4,
    KTTreeSelect5,
    KTTreeSelect6,
    KTTreeSelect7,
    KTTreeSelect8,
    KTTreeSelect9,
    KTTreeSelect10,
    KTTreeSelect11,
    KTTreeSelect12,
    KTTreeSelect13
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Alert" }
    ]);
  },
  methods: {
    countDownChanged1(dismissCountDown) {
      this.code1.dismissCountDown = dismissCountDown;
    },
    countDownChanged2(dismissCountDown) {
      this.code2.dismissCountDown = dismissCountDown;
    },
    showAlert1() {
      this.code1.dismissCountDown = this.code1.dismissSecs;
    },
    showAlert2() {
      this.code2.dismissCountDown = this.code2.dismissSecs;
    }
  }
};
</script>

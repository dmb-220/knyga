(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Companies.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Companies.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-vue-validator */ "./node_modules/simple-vue-validator/src/index.js");
/* harmony import */ var simple_vue_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ok: false,
      company: {
        id: '',
        company_name: '',
        company_code: '',
        pvm_code: ''
      },
      companies: [],
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'company_name',
        label: 'Įmonės pavadinimas',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'company_code',
        label: 'Įmonės kodas',
        sortable: false
      }, {
        key: 'pvm_code',
        label: 'PVM kodas',
        sortable: false
      }, {
        key: 'actions',
        label: 'Veiksmai'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, 25, 50, 100],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: []
    };
  },
  validators: {
    'company.company_name': function companyCompany_name(value) {
      return simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"].value(value).minLength(5, 'Per trumpas pavadinimas').required('Įrašykite įmonės pavadinimą'); //.regex('^[A-Za-z0-9 -]*$', 'Naudojami neleistini simboliai');
    },
    'company.company_code': function companyCompany_code(value) {
      return simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"].value(value).minLength(9, 'Per trumpas kodas').required('Įrašykite įmonės kodą').regex('^[0-9]*$', 'Naudojami neleistini simboliai');
    },
    'company.pvm_code': function companyPvm_code(value) {
      return simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"].value(value).minLength(11, 'Per trumpas PVM kodas').required('Įrašykite PVM kodą').regex('^[A-Za-z0-9]*$', 'Naudojami neleistini simboliai');
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.getCompanies();
  },
  methods: {
    edit_company: function edit_company(row) {
      this.$refs['edit_company'].show();
      this.company.company_name = row.company_name;
      this.company.company_code = row.company_code;
      this.company.pvm_code = row.pvm_code;
      this.company.id = row.id; //console.log(row.id);
    },
    delete_company: function delete_company(row) {
      var _this = this;

      axios["delete"]("/company/".concat(row.id, "/destroy"), {}).then(function (response) {
        //console.log(response.data.saskaitos);
        _this.$bvToast.toast("\u012Emon\u0117s duomenys i\u0161trinti s\u0117kmingai", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this.getCompanies();
      })["catch"](function (err) {
        console.log("DELETE:");
        console.log(err.message);
      });
    },
    getCompanies: function getCompanies() {
      var _this2 = this;

      //this.isLoading = true
      this.axios.get('/company').then(function (response) {
        //this.isLoading = false
        _this2.companies = response.data.company; //sukaiciuojam kiek irasu, puslapiavimui

        _this2.totalRows = _this2.companies.length;
        console.log(response.data.company);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    edit_post: function edit_post() {
      var _this3 = this;

      axios.patch("/company/".concat(this.company.id), {
        company_name: this.company.company_name,
        company_code: this.company.company_code,
        pvm_code: this.company.pvm_code
      }).then(function (response) {
        //console.log(response.data.saskaitos);
        _this3.$bvToast.toast("\u012Emon\u0117s duomenys atnaujinti s\u0117kmingai", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this3.getCompanies();
      })["catch"](function (err) {
        console.log("POST:");
        console.log(err.message);
      });
    },
    companies_post: function companies_post() {
      var _this4 = this;

      axios.post("/company/store", {
        company_name: this.company.company_name,
        company_code: this.company.company_code,
        pvm_code: this.company.pvm_code
      }).then(function (response) {
        console.log(response.data.status);

        _this4.getCompanies();
      })["catch"](function (err) {
        console.log("POST:");
        console.log(err.message);
      });
    },
    companyOk: function companyOk(bvModalEvt) {
      var _this5 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.$validate() //.then((success) => {
      .then(function (success) {
        if (success) {
          _this5.companies_post(); //alert('Validation succeeded!');


          _this5.$nextTick(function () {
            _this5.$bvModal.hide('create_company');
          });
        }
      });
    },
    companyEdit: function companyEdit(bvModalEvt) {
      var _this6 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.edit_post(); // Trigger submit handler

      this.$nextTick(function () {
        _this6.$refs['edit_company'].hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Companies.vue?vue&type=template&id=28170e4c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Companies.vue?vue&type=template&id=28170e4c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content-header" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body text-left" },
            [
              _c(
                "router-link",
                { staticClass: "btn btn-app", attrs: { tag: "a", to: "/" } },
                [
                  _c("i", { staticClass: "fa fa-arrow-left" }),
                  _vm._v(" Atgal\r\n                    ")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.create_company",
                      modifiers: { create_company: true }
                    }
                  ],
                  staticClass: "btn btn-app btn-warning",
                  attrs: { type: "button" }
                },
                [
                  _c("i", { staticClass: "far fa-plus-square" }),
                  _vm._v(" Nauja įmonė\r\n                        ")
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          staticClass: "mb-0",
                          attrs: {
                            label: "Rodyti:",
                            "label-cols-sm": "6",
                            "label-cols-md": "4",
                            "label-cols-lg": "3",
                            "label-align-sm": "right",
                            "label-size": "sm",
                            "label-for": "perPageSelect"
                          }
                        },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "perPageSelect",
                              size: "sm",
                              options: _vm.pageOptions
                            },
                            model: {
                              value: _vm.perPage,
                              callback: function($$v) {
                                _vm.perPage = $$v
                              },
                              expression: "perPage"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "my-1", attrs: { sm: "7", md: "6" } },
                    [
                      _c("b-pagination", {
                        staticClass: "my-0",
                        attrs: {
                          "total-rows": _vm.totalRows,
                          "per-page": _vm.perPage,
                          align: "fill",
                          size: "sm"
                        },
                        model: {
                          value: _vm.currentPage,
                          callback: function($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  "show-empty": "",
                  small: "",
                  stacked: "md",
                  items: _vm.companies,
                  fields: _vm.fields,
                  "current-page": _vm.currentPage,
                  "per-page": _vm.perPage,
                  "sort-by": _vm.sortBy,
                  "sort-desc": _vm.sortDesc,
                  "sort-direction": _vm.sortDirection
                },
                on: {
                  "update:sortBy": function($event) {
                    _vm.sortBy = $event
                  },
                  "update:sort-by": function($event) {
                    _vm.sortBy = $event
                  },
                  "update:sortDesc": function($event) {
                    _vm.sortDesc = $event
                  },
                  "update:sort-desc": function($event) {
                    _vm.sortDesc = $event
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(name)",
                    fn: function(row) {
                      return [
                        _vm._v(
                          "\r\n                    " +
                            _vm._s(row.value.first) +
                            " " +
                            _vm._s(row.value.last) +
                            "\r\n                "
                        )
                      ]
                    }
                  },
                  {
                    key: "cell(actions)",
                    fn: function(row) {
                      return [
                        _c(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "info" },
                            on: {
                              click: function($event) {
                                return _vm.edit_company(row.item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                    Redaguoti\r\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "danger", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.delete_company(row.item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                    Ištrinti\r\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "create_company",
            size: "lg",
            title: "Įmonių įkėlimas",
            "ok-title": "Išsaugoti",
            "cancel-title": "Uždaryti",
            "no-close-on-esc": "",
            "no-close-on-backdrop": ""
          },
          on: { ok: _vm.companyOk }
        },
        [
          _c("form", { staticClass: "form-horizontal" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                _vm._v("Pavadinimas:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.company.company_name,
                      expression: "company.company_name",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.validation.hasError(
                      "company.company_name"
                    )
                  },
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.company_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.company,
                        "company_name",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-danger" }, [
                  _vm._v(
                    _vm._s(_vm.validation.firstError("company.company_name"))
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                _vm._v("Įmonės kodas:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.company.company_code,
                      expression: "company.company_code",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.validation.hasError(
                      "company.company_code"
                    )
                  },
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.company_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.company,
                        "company_code",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-danger" }, [
                  _vm._v(
                    _vm._s(_vm.validation.firstError("company.company_code"))
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                _vm._v("PVM kodas:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.company.pvm_code,
                      expression: "company.pvm_code",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.validation.hasError("company.pvm_code")
                  },
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.pvm_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.company,
                        "pvm_code",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-danger" }, [
                  _vm._v(_vm._s(_vm.validation.firstError("company.pvm_code")))
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "edit_company",
          attrs: {
            size: "lg",
            title: "Įmonių redagavimas",
            "ok-title": "Išsaugoti",
            "cancel-title": "Uždaryti",
            "no-close-on-esc": "",
            "no-close-on-backdrop": ""
          },
          on: { ok: _vm.companyEdit }
        },
        [
          _c("form", { staticClass: "form-horizontal" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                _vm._v("Pavadinimas:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.company_name,
                      expression: "company.company_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.company_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "company_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                _vm._v("Įmonės kodas:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.company_code,
                      expression: "company.company_code"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.company_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "company_code", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                _vm._v("PVM kodas:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.company.pvm_code,
                      expression: "company.pvm_code"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.company.pvm_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.company, "pvm_code", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row mb-2" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Įmonės")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Valdymas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Įmonių sąrašas")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/views/Companies.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Companies.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Companies_vue_vue_type_template_id_28170e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Companies.vue?vue&type=template&id=28170e4c& */ "./resources/js/views/Companies.vue?vue&type=template&id=28170e4c&");
/* harmony import */ var _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Companies.vue?vue&type=script&lang=js& */ "./resources/js/views/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Companies_vue_vue_type_template_id_28170e4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Companies_vue_vue_type_template_id_28170e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Companies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Companies.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Companies.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Companies.vue?vue&type=template&id=28170e4c&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Companies.vue?vue&type=template&id=28170e4c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_28170e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=template&id=28170e4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Companies.vue?vue&type=template&id=28170e4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_28170e4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_28170e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Farmers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Farmers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-vue-validator */ "./node_modules/simple-vue-validator/src/index.js");
/* harmony import */ var simple_vue_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_vue_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
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
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  data: function data() {
    return {
      //rodyti ūkininkų sarasa
      farmers: [],
      //naujam ukininkui sukurti
      farmer: {
        id: '',
        name: '',
        subname: '',
        vic_lt: false,
        username: '',
        password: '',
        type: '',
        banda: '',
        data: false,
        email: '',
        phone: '',
        code: '',
        pvm: ''
      },
      //
      email: "",
      password: "",
      confirmation: "",
      subject: "",
      choices: []
    };
  },
  mounted: function mounted() {},
  created: function created() {
    this.getFermers();
  },
  validators: {
    /*'company.company_name': function(value) {
      return Validator.value(value)
      .minLength(5, 'Per trumpas pavadinimas')
      .required('Įrašykite įmonės pavadinimą');
      //.regex('^[A-Za-z0-9 -]*$', 'Naudojami neleistini simboliai');
    },
    'company.company_code': function(value) {
      return Validator.value(value)
      .minLength(9, 'Per trumpas kodas')
      .required('Įrašykite įmonės kodą')
      .regex('^[0-9]*$', 'Naudojami neleistini simboliai');
    },
    'company.pvm_code': function(value) {
      return Validator.value(value)
      .minLength(11, 'Per trumpas PVM kodas')
      .required('Įrašykite PVM kodą')
      .regex('^[A-Za-z0-9]*$', 'Naudojami neleistini simboliai');
    },*/
  },
  methods: {
    onSubmit: function onSubmit() {
      console.log("Form submitted yay!");
    },
    resetForm: function resetForm() {
      var _this = this;

      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(function () {
        _this.$refs.observer.reset();
      });
    },
    getFermers: function getFermers() {
      var _this2 = this;

      this.axios.get('/farmer').then(function (response) {
        _this2.farmers = response.data.farmers;
        console.log(response.data.farmers);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    farmerOk: function farmerOk(bvModalEvt) {
      var _this3 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.$validate() //.then((success) => {
      .then(function (success) {
        if (success) {
          //this.companies_post();
          _this3.$nextTick(function () {
            _this3.$bvModal.hide('create_farmer');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Farmers.vue?vue&type=template&id=316eccbe&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Farmers.vue?vue&type=template&id=316eccbe& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    { staticClass: "no" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c(
          "div",
          { staticClass: "container-fluid" },
          [
            _c("div", { staticClass: "card" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body text-center" },
                [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.create_farmer",
                          modifiers: { create_farmer: true }
                        }
                      ],
                      staticClass: "btn btn-app"
                    },
                    [
                      _c("i", { staticClass: "fas fa-file-invoice" }),
                      _vm._v(" Naujas ūkininkas\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-app",
                      attrs: { tag: "a", to: "/farmers_type" }
                    },
                    [
                      _c("i", { staticClass: "fas fa-th-list" }),
                      _vm._v(" Ūkio tipas\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-app",
                      attrs: { tag: "a", to: "/farmers_herd" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-address-card" }),
                      _vm._v(" Banda\n                    ")
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card card-solid" }, [
              _c("div", { staticClass: "card-body pb-0" }, [
                _c(
                  "div",
                  { staticClass: "row d-flex align-items-stretch" },
                  _vm._l(_vm.farmers, function(value, idx) {
                    return _c(
                      "div",
                      {
                        key: idx,
                        staticClass:
                          "col-12 col-sm-6 col-md-4  align-items-stretch"
                      },
                      [
                        _c("div", { staticClass: "card bg-light" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "card-header text-muted border-bottom-0"
                            },
                            [
                              _vm._v(
                                "\n                        Valdos numeris: " +
                                  _vm._s(value.valdos_nr) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body pt-0" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-7" }, [
                                _c("h2", { staticClass: "lead" }, [
                                  _c("b", [
                                    _vm._v(
                                      _vm._s(value.vardas) +
                                        " " +
                                        _vm._s(value.pavarde)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-muted text-sm" }, [
                                  _vm._v("Gyvulinkystė / Mėsiniai  ")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "ml-4 mb-0 fa-ul text-muted" },
                                  [
                                    _c("li", { staticClass: "small" }, [
                                      _vm._m(2, true),
                                      _vm._v(" " + _vm._s(value.adresas))
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "small" }, [
                                      _vm._m(3, true),
                                      _vm._v(" " + _vm._s(value.telefonas))
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "small" }, [
                                      _vm._m(4, true),
                                      _vm._v(" " + _vm._s(value.email))
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(5, true)
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(6, true)
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("ValidationObserver", {
              ref: "observer",
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var passes = ref.passes
                    return [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return passes(_vm.onSubmit)
                            },
                            reset: _vm.resetForm
                          }
                        },
                        [
                          _c("ValidationProvider", {
                            attrs: { rules: "required|email", name: "Email" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: "Email address:",
                                            "label-for": "exampleInput1",
                                            description:
                                              "We'll never share your email with anyone else."
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "email",
                                              state: errors[0]
                                                ? false
                                                : valid
                                                ? true
                                                : null,
                                              placeholder: "Enter email"
                                            },
                                            model: {
                                              value: _vm.email,
                                              callback: function($$v) {
                                                _vm.email = $$v
                                              },
                                              expression: "email"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: {
                              rules: "required",
                              name: "Password",
                              vid: "password"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: "Password:",
                                            description:
                                              "We'll never share your password with anyone else."
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "password",
                                              state: errors[0]
                                                ? false
                                                : valid
                                                ? true
                                                : null,
                                              placeholder: "Enter password"
                                            },
                                            model: {
                                              value: _vm.password,
                                              callback: function($$v) {
                                                _vm.password = $$v
                                              },
                                              expression: "password"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: {
                              rules: "required|confirmed:password",
                              name: "Password confirmation"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: "Confirm Password:",
                                            "label-for": "exampleInput1"
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "password",
                                              state: errors[0]
                                                ? false
                                                : valid
                                                ? true
                                                : null,
                                              placeholder: "Confirm Password"
                                            },
                                            model: {
                                              value: _vm.confirmation,
                                              callback: function($$v) {
                                                _vm.confirmation = $$v
                                              },
                                              expression: "confirmation"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { name: "Subject", rules: "required" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            id: "exampleInputGroup3",
                                            label: "Subject:",
                                            "label-for": "exampleInput3"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                id: "exampleInput3",
                                                state: errors[0]
                                                  ? false
                                                  : valid
                                                  ? true
                                                  : null
                                              },
                                              model: {
                                                value: _vm.subject,
                                                callback: function($$v) {
                                                  _vm.subject = $$v
                                                },
                                                expression: "subject"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                { attrs: { value: "" } },
                                                [_vm._v("None")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "S1" } },
                                                [_vm._v("Subject 1")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "S2" } },
                                                [_vm._v("Subject 2")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: {
                              name: "Drink",
                              rules: "required|length:2"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        { attrs: { id: "exampleGroup4" } },
                                        [
                                          _c(
                                            "b-form-checkbox-group",
                                            {
                                              attrs: {
                                                state: errors[0]
                                                  ? false
                                                  : valid
                                                  ? true
                                                  : null,
                                                id: "exampleChecks"
                                              },
                                              model: {
                                                value: _vm.choices,
                                                callback: function($$v) {
                                                  _vm.choices = $$v
                                                },
                                                expression: "choices"
                                              }
                                            },
                                            [
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "Coffee" } },
                                                [_vm._v("Coffe")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "Tea" } },
                                                [_vm._v("Tea")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "Soda" } },
                                                [_vm._v("Soda")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { type: "submit", variant: "primary" } },
                            [_vm._v("Submit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { type: "reset", variant: "danger" } },
                            [_vm._v("Reset")]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "create_farmer",
            size: "lg",
            title: "Naujas ūkininkas",
            "ok-title": "Išsaugoti",
            "cancel-title": "Uždaryti",
            "no-close-on-esc": "",
            "no-close-on-backdrop": ""
          },
          on: { ok: _vm.farmerOk }
        },
        [
          _c("ValidationObserver", {
            ref: "observer",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c("form", { staticClass: "form-horizontal" }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c("label", [_vm._v("Vardas:")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.farmer.name,
                                expression: "farmer.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.farmer.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.farmer,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c("label", [_vm._v("Pavardė:")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.farmer.subname,
                                expression: "farmer.subname"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.farmer.subname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.farmer,
                                  "subname",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "form-check" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.farmer.vic_lt,
                                expression: "farmer.vic_lt"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.farmer.vic_lt)
                                ? _vm._i(_vm.farmer.vic_lt, null) > -1
                                : _vm.farmer.vic_lt
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.farmer.vic_lt,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.farmer,
                                        "vic_lt",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.farmer,
                                        "vic_lt",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.farmer, "vic_lt", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { staticClass: "form-check-label" }, [
                            _vm._v(
                              "\n                AR TURITE PRIEIGĄ PRIE VIC.LT?\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v(
                              "Pažymėkitę varnelę, ir galėsite suvesti, VIC.LT prisijungimo duomenis. Jie reikalingi gauti duomanis apie laikomus galvijus ir / arba deklaruojamus plotus. "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.farmer.vic_lt,
                              expression: "farmer.vic_lt"
                            }
                          ],
                          staticClass: "form-row"
                        },
                        [
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", [_vm._v("Vartotojo vardas:")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.username,
                                  expression: "farmer.username"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.farmer.username },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.farmer,
                                    "username",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", [_vm._v("Slaptazodis:")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.password,
                                  expression: "farmer.password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.farmer.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.farmer,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Ūkio tipas:")]),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-check form-check-inline" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.type,
                                  expression: "farmer.type"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: { type: "radio", value: "1" },
                              domProps: {
                                checked: _vm._q(_vm.farmer.type, "1")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.farmer, "type", "1")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { staticClass: "form-check-label" }, [
                              _vm._v("GYVULININKYSTĖ")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-check form-check-inline" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.type,
                                  expression: "farmer.type"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: { type: "radio", value: "2" },
                              domProps: {
                                checked: _vm._q(_vm.farmer.type, "2")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.farmer, "type", "2")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { staticClass: "form-check-label" }, [
                              _vm._v("AUGALININKYSTĖ")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-check form-check-inline" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.type,
                                  expression: "farmer.type"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: { type: "radio", value: "3" },
                              domProps: {
                                checked: _vm._q(_vm.farmer.type, "3")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.farmer, "type", "3")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { staticClass: "form-check-label" }, [
                              _vm._v("ŽUVININKYSTĖ")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-check form-check-inline" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.type,
                                  expression: "farmer.type"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: { type: "radio", value: "4" },
                              domProps: {
                                checked: _vm._q(_vm.farmer.type, "4")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.farmer, "type", "4")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { staticClass: "form-check-label" }, [
                              _vm._v("MIŠKININKYSTĖ")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.farmer.type == 1
                        ? _c("div", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Galvijų banda:")]),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.farmer.banda,
                                        expression: "farmer.banda"
                                      }
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: { type: "radio", value: "1" },
                                    domProps: {
                                      checked: _vm._q(_vm.farmer.banda, "1")
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.farmer,
                                          "banda",
                                          "1"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label" },
                                    [_vm._v("MĖSINIAI")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.farmer.banda,
                                        expression: "farmer.banda"
                                      }
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: { type: "radio", value: "2" },
                                    domProps: {
                                      checked: _vm._q(_vm.farmer.banda, "2")
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.farmer,
                                          "banda",
                                          "2"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label" },
                                    [_vm._v("PIENINIAI")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.farmer.banda,
                                        expression: "farmer.banda"
                                      }
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: { type: "radio", value: "3" },
                                    domProps: {
                                      checked: _vm._q(_vm.farmer.banda, "3")
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.farmer,
                                          "banda",
                                          "3"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label" },
                                    [_vm._v("MIŠRŪS")]
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "form-check" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.farmer.data,
                                expression: "farmer.data"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.farmer.data)
                                ? _vm._i(_vm.farmer.data, null) > -1
                                : _vm.farmer.data
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.farmer.data,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.farmer,
                                        "data",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.farmer,
                                        "data",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.farmer, "data", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { staticClass: "form-check-label" }, [
                            _vm._v(
                              "\n                NORITE IŠKART SUVESTI PAPILDOMUS DUOMENIS?\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v(
                              'Pažymėkitę varnelę, ir galėsite suvesti, asmeninius ūkininko duomenis: asmens kodas, adresas, banko saskaita, el. paštas, telefonas. Galite dabar ir nepildyti, užpildysite veliau eidami "ŪKININKŲ SĄRAŠAS" ten pasirinkę ūkininką.'
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.farmer.data,
                              expression: "farmer.data"
                            }
                          ]
                        },
                        [
                          _c("ValidationProvider", {
                            attrs: { rules: "required|email", name: "Email" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: "El.paštas:",
                                            "label-for": "email"
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "email",
                                              state: errors[0]
                                                ? false
                                                : valid
                                                ? true
                                                : null,
                                              placeholder:
                                                "Įveskite el pašto adresą"
                                            },
                                            model: {
                                              value: _vm.farmer.email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.farmer,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "farmer.email"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: {
                              rules: {
                                required: true,
                                regex: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                              },
                              name: "Phone"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var valid = ref.valid
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: "Telefonas:",
                                            "label-for": "phone"
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "phone",
                                              state: errors[0]
                                                ? false
                                                : valid
                                                ? true
                                                : null,
                                              placeholder:
                                                "Įveskite telefono numerį",
                                              description:
                                                "Telefono numeris: +3706..."
                                            },
                                            model: {
                                              value: _vm.farmer.phone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.farmer,
                                                  "phone",
                                                  $$v
                                                )
                                              },
                                              expression: "farmer.phone"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-invalid-feedback",
                                            {
                                              attrs: { id: "inputLiveFeedback" }
                                            },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Asmens kodas:")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.code,
                                  expression: "farmer.code"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.farmer.code },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.farmer,
                                    "code",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("PVM kodas:")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.pvm,
                                  expression: "farmer.pvm"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.farmer.pvm },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.farmer,
                                    "pvm",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Adresas:")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.farmer.adress,
                                  expression: "farmer.adress"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { rows: "3", placeholder: "" },
                              domProps: { value: _vm.farmer.adress },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.farmer,
                                    "adress",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
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
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Ūkininkai")])
          ])
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
    return _c("span", { staticClass: "fa-li" }, [
      _c("i", { staticClass: "fas fa-building" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "fa-li" }, [
      _c("i", { staticClass: "fas fa-phone" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "fa-li" }, [
      _c("i", { staticClass: "fas fa-envelope-open-text" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-5 text-center" }, [
      _c("img", {
        staticClass: "img-circle img-fluid",
        attrs: {
          src:
            "https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("div", { staticClass: "text-right" }, [
        _c("a", { staticClass: "btn btn-sm bg-teal", attrs: { href: "#" } }, [
          _c("i", { staticClass: "fas fa-comments" })
        ]),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-sm btn-primary", attrs: { href: "#" } },
          [
            _c("i", { staticClass: "fas fa-user" }),
            _vm._v(" Profilis\n                            ")
          ]
        )
      ])
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

/***/ "./resources/js/views/Farmers.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Farmers.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Farmers_vue_vue_type_template_id_316eccbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Farmers.vue?vue&type=template&id=316eccbe& */ "./resources/js/views/Farmers.vue?vue&type=template&id=316eccbe&");
/* harmony import */ var _Farmers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farmers.vue?vue&type=script&lang=js& */ "./resources/js/views/Farmers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Farmers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Farmers_vue_vue_type_template_id_316eccbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Farmers_vue_vue_type_template_id_316eccbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Farmers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Farmers.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Farmers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Farmers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Farmers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Farmers.vue?vue&type=template&id=316eccbe&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Farmers.vue?vue&type=template&id=316eccbe& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmers_vue_vue_type_template_id_316eccbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Farmers.vue?vue&type=template&id=316eccbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Farmers.vue?vue&type=template&id=316eccbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmers_vue_vue_type_template_id_316eccbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmers_vue_vue_type_template_id_316eccbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
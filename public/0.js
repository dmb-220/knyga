(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Books.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      menesiai: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
      men: new Date().getMonth(),
      menuo: new Date().getMonth(),
      metai: new Date().getFullYear(),
      set_metai: 2020,
      invoice: {
        operation: '',
        money: '',
        company_id: '',
        invoice_data: '',
        invoice_number: '',
        operation_name: '',
        invoice_amount: '',
        invoice_unit: '',
        invoice_sum: '',
        invoice_pvm: ''
      },
      //ivesti, arba pasirinkti imonę is saraso
      //ivedus, nauj1 imone, ja irasyti i duomenu baze, ir priskirti jai ID
      imone: true,
      companies: [],
      invoices: []
    };
  },
  computed: {
    sortedData: function sortedData() {
      function compare(a, b) {
        if (a.data < b.data) return -1;
        if (a.data > b.data) return 1;
        return 0;
      }

      return this.invoices.sort(compare);
    }
  },
  mounted: function mounted() {
    this.menuo = this.men;
  },
  created: function created() {
    this.getImones();
    this.getSaskaitos();
  },
  methods: {
    pasirinkti_menesi: function pasirinkti_menesi(menesis) {
      //DAR TIKRINTI IR METUS NES UZ 2019 TURI LEISTI RINKTI VISUS MENESIUS
      if (this.metai == this.set_metai) {
        if (menesis <= this.men) {
          this.menuo = menesis;
          this.getSaskaitos();
          this.$bvToast.toast("".concat(this.menesiai[menesis], " pasirinktas"), {
            title: "Atlikta",
            variant: "info",
            solid: true
          });
        } else {
          this.$bvToast.toast("".concat(this.menesiai[menesis], " negalite rinktis!"), {
            title: "\u012Esp\u0117jimas",
            variant: "warning",
            solid: true
          });
        }
      } else {
        this.menuo = menesis;
        this.getSaskaitos();
        this.$bvToast.toast("".concat(this.menesiai[menesis], " pasirinktas"), {
          title: "Atlikta",
          variant: "info",
          solid: true
        });
      }
    },
    getImones: function getImones() {
      var _this = this;

      //this.isLoading = true
      this.axios.get('/company').then(function (response) {
        //this.isLoading = false
        _this.companies = response.data.company;
        console.log(response.data.company);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    getSaskaitos: function getSaskaitos() {
      var _this2 = this;

      this.axios.get("/invoice?month=".concat(this.menuo + 1)).then(function (response) {
        _this2.invoices = response.data.invoice;
      })["catch"](function (err) {
        _this2.$bvToast.toast("Klaida: ".concat(err.message), {
          title: "Klaida",
          variant: "danger",
          solid: true
        });
      });
    },
    saskaitos_post: function saskaitos_post() {
      var _this3 = this;

      axios.post("/invoice/store", {
        operacija: this.saskaitos.operacija,
        pinigai: this.saskaitos.pinigai,
        imones_pavadinimas: this.saskaitos.imones_pavadinimas,
        data: this.saskaitos.data,
        numeris: this.saskaitos.numeris,
        op_pavadinimas: this.saskaitos.op_pavadinimas,
        kiekis: this.saskaitos.kiekis,
        suma: this.saskaitos.suma,
        pvm: this.saskaitos.pvm
      }).then(function (response) {
        _this3.$bvToast.toast("Nauja s\u0105skaita \u012Fkelta", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this3.getSaskaitos();
      })["catch"](function (err) {
        console.log("POST:");
        console.log(err.message);
      });
    },

    /*imones_post(){
        axios
        .post(`/imones/store`, {
            pavadinimas: this.imones_sukurimas.imones_pavadinimas,
            kodas: this.imones_sukurimas.imones_kodas,
            pvm: this.imones_sukurimas.pvm_kodas
            })
        .then(response => {
            console.log(response.data.status)
            //this.getData()
        })
        .catch( err => {
        console.log("POST:");
        console.log(err.message);
        })
    },*/
    handleOk: function handleOk(bvModalEvt) {
      var _this4 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.saskaitos_post(); // Trigger submit handler

      this.$nextTick(function () {
        _this4.$bvModal.hide('saskaitu_ikelimas');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Books.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table > thead > tr > th {\r\n     vertical-align: middle;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Books.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Books.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=template&id=19aa37ca&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Books.vue?vue&type=template&id=19aa37ca& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-header" }, [
    _vm._m(0),
    _vm._v(" "),
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
                      rawName: "v-b-modal.saskaitu_ikelimas",
                      modifiers: { saskaitu_ikelimas: true }
                    }
                  ],
                  staticClass: "btn btn-app"
                },
                [
                  _c("i", { staticClass: "fas fa-file-invoice" }),
                  _vm._v(" Įkelti sąskaitą\n                    ")
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-app",
                  attrs: { tag: "a", to: "/invoice" }
                },
                [
                  _c("i", { staticClass: "fas fa-th-list" }),
                  _vm._v(" Sąskaitos\n                    ")
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-app",
                  attrs: { tag: "a", to: "/company" }
                },
                [
                  _c("i", { staticClass: "fa fa-address-card" }),
                  _vm._v(" Įmonės\n                    ")
                ]
              ),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7)
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            attrs: {
              id: "saskaitu_ikelimas",
              size: "lg",
              title: "Sąskaitų įkėlimas",
              "ok-title": "Išsaugoti",
              "cancel-title": "Uždaryti",
              "no-close-on-esc": "",
              "no-close-on-backdrop": ""
            },
            on: { ok: _vm.handleOk }
          },
          [
            _c(
              "form",
              {
                staticClass: "form-horizontal",
                on: {
                  submit: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm.handleSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Operacija:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("div", { staticClass: "form-check form-check-inline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.operation,
                            expression: "invoice.operation"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "radio", value: "1" },
                        domProps: {
                          checked: _vm._q(_vm.invoice.operation, "1")
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.invoice, "operation", "1")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-check-label" }, [
                        _vm._v("Pardavimai")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check form-check-inline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.operation,
                            expression: "invoice.operation"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "radio", value: "2" },
                        domProps: {
                          checked: _vm._q(_vm.invoice.operation, "2")
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.invoice, "operation", "2")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-check-label" }, [
                        _vm._v("Pirkimai")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Pinigai:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("div", { staticClass: "form-check form-check-inline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.money,
                            expression: "invoice.money"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "radio", value: "1" },
                        domProps: { checked: _vm._q(_vm.invoice.money, "1") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.invoice, "money", "1")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-check-label" }, [
                        _vm._v("Kasa")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check form-check-inline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.money,
                            expression: "invoice.money"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "radio", value: "2" },
                        domProps: { checked: _vm._q(_vm.invoice.money, "2") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.invoice, "money", "2")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-check-label" }, [
                        _vm._v("Bankas")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check form-check-inline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoice.money,
                            expression: "invoice.money"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "radio", value: "3" },
                        domProps: { checked: _vm._q(_vm.invoice.money, "3") },
                        on: {
                          change: function($event) {
                            return _vm.$set(_vm.invoice, "money", "3")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-check-label" }, [
                        _vm._v("Skola")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Imonė:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c(
                      "div",
                      { staticClass: "input-group" },
                      [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.imone,
                                  expression: "imone"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.imone)
                                  ? _vm._i(_vm.imone, null) > -1
                                  : _vm.imone
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.imone,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 && (_vm.imone = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.imone = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.imone = $$c
                                  }
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.imone
                          ? _c("b-form-select", {
                              attrs: {
                                options: _vm.companies,
                                "value-field": "id",
                                "text-field": "imones_pavadinimas"
                              },
                              model: {
                                value: _vm.invoice.company_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.invoice, "company_name", $$v)
                                },
                                expression: "invoice.company_name"
                              }
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.invoice.company_names,
                                  expression: "invoice.company_names"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.invoice.company_names },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.invoice,
                                    "company_names",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Data:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_data,
                          expression: "invoice.invoice_data"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date" },
                      domProps: { value: _vm.invoice.invoice_data },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_data",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Sąskaitos numeris:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_number,
                          expression: "invoice.invoice_number"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.invoice.invoice_number },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_number",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Op. pavadinimas:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.operation_name,
                          expression: "invoice.operation_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.invoice.operation_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "operation_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Kiekis, mat. vnt:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_amount,
                          expression: "invoice.invoice_amount"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.invoice.invoice_amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_amount",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Suma:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_sum,
                          expression: "invoice.invoice_sum"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.invoice.invoice_sum },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_sum",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("PVM:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoice.invoice_pvm,
                          expression: "invoice.invoice_pvm"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.invoice.invoice_pvm },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.invoice,
                            "invoice_pvm",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(8),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-group" },
            _vm._l(_vm.menesiai, function(idx, key) {
              return _c(
                "button",
                {
                  key: key,
                  staticClass: "btn",
                  class: _vm.menuo == key ? "btn-info" : "btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.pasirinkti_menesi(key)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(idx) +
                      "\n                    "
                  )
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "card-body text-center" }, [
            _c("table", { staticClass: "table table-sm" }, [
              _vm._m(9),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._m(10),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _vm._l(_vm.sortedData, function(idx, key) {
                    return _c("tr", { key: key }, [
                      _c("td", [_vm._v(_vm._s(key + 1))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(idx.invoice_data.split("-")[2]))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(idx.invoice_number))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(idx.operation_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(idx.invoice_amount))]),
                      _vm._v(" "),
                      idx.operation == 2
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_sum))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.operation == 2
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_pvm))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.operation == 1
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_sum))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.operation == 1
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_pvm))])
                        : _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      idx.money == 1 && idx.opertion == 1
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_sum))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.money == 1 && idx.operation == 2
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_sum))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.money == 2 && idx.operation == 1
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_sum))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.money == 2 && idx.operation == 2
                        ? _c("td", [_vm._v(_vm._s(idx.invoice_sum))])
                        : _c("td"),
                      _vm._v(" "),
                      idx.money == 3 && idx.operation == 1
                        ? _c("td", { staticClass: "bg-danger" }, [
                            _vm._v(_vm._s(idx.invoice_sum))
                          ])
                        : idx.money == 2 && idx.operation == 1
                        ? _c("td", { staticClass: "bg-success" }, [
                            _vm._v(_vm._s(idx.invoice_sum))
                          ])
                        : _c("td"),
                      _vm._v(" "),
                      idx.money == 3 && idx.operation == 2
                        ? _c("td", { staticClass: "bg-danger" }, [
                            _vm._v(_vm._s(idx.invoice_sum))
                          ])
                        : idx.money == 2 && idx.operation == 2
                        ? _c("td", { staticClass: "bg-success" }, [
                            _vm._v(_vm._s(idx.invoice_sum))
                          ])
                        : _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(idx.company.company_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(idx.company.company_code))])
                    ])
                  }),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _vm._m(13)
                ],
                2
              )
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row mb-2" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Žalia knyga")])
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
    return _c("a", { staticClass: "btn btn-app" }, [
      _c("i", { staticClass: "fas fa-piggy-bank" }),
      _vm._v(" Bankas\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn btn-app" }, [
      _c("i", { staticClass: "fas fa-cash-register" }),
      _vm._v(" Kasa\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn btn-app" }, [
      _c("i", { staticClass: "fas fa-hand-holding-usd" }),
      _vm._v(" Skolos\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn btn-app" }, [
      _c("i", { staticClass: "fas fa-tractor" }),
      _vm._v("Ūkininkas\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn btn-app" }, [
      _c("i", { staticClass: "fas fa-clipboard-check" }),
      _vm._v(" Veiklos ataskaita\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn btn-app" }, [
      _c("i", { staticClass: "fas fa-tools" }),
      _vm._v("Nustatymai\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("PINIGŲ, PIRKIMO IR PARDAVIMO OPERACIJOS")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Eil. nr.")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Diena")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Dokumento nr.")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Op. pavadinimas")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Kiekis")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Pirkimas")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Pardavimas")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "4" } }, [_vm._v("Pinigai")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "3" } }, [_vm._v("Skolos")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Įmonės pavadinimas")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "3" } }, [_vm._v("Įmonės kodas")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Suma ")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("PVM")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Suma")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("PVM")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Kasa")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Bankas")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Ūkininkui")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Ūkininko")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Atsiskaitymo data")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", [_vm._v("Pajamos")]),
        _vm._v(" "),
        _c("th", [_vm._v("Išlaidos")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pajamos")]),
        _vm._v(" "),
        _c("th", [_vm._v("Išlaidos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td"),
      _vm._v(" "),
      _c("td", [_vm._v("1")]),
      _vm._v(" "),
      _c("td", [_vm._v("2")]),
      _vm._v(" "),
      _c("td", [_vm._v("3")]),
      _vm._v(" "),
      _c("td", [_vm._v("4")]),
      _vm._v(" "),
      _c("td", [_vm._v("5")]),
      _vm._v(" "),
      _c("td", [_vm._v("6")]),
      _vm._v(" "),
      _c("td", [_vm._v("7")]),
      _vm._v(" "),
      _c("td", [_vm._v("8")]),
      _vm._v(" "),
      _c("td", [_vm._v("9")]),
      _vm._v(" "),
      _c("td", [_vm._v("10")]),
      _vm._v(" "),
      _c("td", [_vm._v("11")]),
      _vm._v(" "),
      _c("td", [_vm._v("12")]),
      _vm._v(" "),
      _c("td", [_vm._v("13")]),
      _vm._v(" "),
      _c("td", [_vm._v("14")]),
      _vm._v(" "),
      _c("td", [_vm._v("15")]),
      _vm._v(" "),
      _c("td", [_vm._v("16")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-yellow" }, [
      _c("td", { attrs: { colspan: "4" } }, [_vm._v("Pradinis likutis")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("462,86")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("12,61")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("0.00")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-teal" }, [
      _c("td", { staticClass: "bg-white border-0", attrs: { colspan: "2" } }),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("Iš viso per mėnesį")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("462,86")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("12,61")]),
      _vm._v(" "),
      _c("td", [_vm._v("1522,37")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-yellow" }, [
      _c("td", { staticClass: "bg-white border-0", attrs: { colspan: "2" } }),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "2" } }, [
        _vm._v("Likutis mėnesio pabaigoje")
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("462,86")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("12,61")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("0.00")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")]),
      _vm._v(" "),
      _c("td", [_vm._v("x")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Books.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Books.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Books_vue_vue_type_template_id_19aa37ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=19aa37ca& */ "./resources/js/views/Books.vue?vue&type=template&id=19aa37ca&");
/* harmony import */ var _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js& */ "./resources/js/views/Books.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Books.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Books.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Books_vue_vue_type_template_id_19aa37ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Books_vue_vue_type_template_id_19aa37ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Books.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Books.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Books.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Books.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Books.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Books.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Books.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Books.vue?vue&type=template&id=19aa37ca&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Books.vue?vue&type=template&id=19aa37ca& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_19aa37ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Books.vue?vue&type=template&id=19aa37ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Books.vue?vue&type=template&id=19aa37ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_19aa37ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_19aa37ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
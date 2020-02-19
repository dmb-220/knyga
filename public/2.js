(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Invoices.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
      imone: true,
      companies: [],
      invoices: [],
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'operation',
        label: 'Operacija',
        sortable: true,
        formatter: function formatter(value, key, item) {
          if (value == 1) {
            return "Pardavimas";
          }

          if (value == 2) {
            return "Pirkimas";
          }
        }
      }, {
        key: 'money',
        label: 'Pinigai',
        sortable: true,
        formatter: function formatter(value, key, item) {
          if (value == 1) {
            return "Kasa";
          }

          if (value == 2) {
            return "Bankas";
          }

          if (value == 3) {
            return "Skola";
          }
        }
      }, {
        key: 'companies.company_name',
        label: 'Įmonės pavadinimas',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'invoice_data',
        label: 'Data',
        sortable: true
      }, {
        key: 'invoice_number',
        label: 'Sąskaitos numeris',
        sortable: false
      }, {
        key: 'operation_name',
        label: 'Operacijos pavadinimas',
        sortable: true
      }, {
        key: 'invoice_amount',
        label: 'Kiekis',
        sortable: false
      }, {
        key: 'invoice_unit',
        label: 'Mat. vnt.',
        sortable: false
      }, {
        key: 'invoice_sum',
        label: 'Suma',
        sortable: false
      }, {
        key: 'invoice_pvm',
        label: 'PVM',
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
  mounted: function mounted() {},
  created: function created() {
    this.getInvoices();
    this.getCompanies();
  },
  methods: {
    edit_invoice: function edit_invoice(row) {
      this.$refs['edit_invoice'].show();
      this.invoice.operation = row.operation;
      this.invoice.money = row.money;
      this.invoice.company_id = row.company_id;
      this.invoice.invoice_number = row.invoice_number;
      this.invoice.invoice_data = row.invoice_data;
      this.invoice.operation_name = row.operation_name;
      this.invoice.invoice_amount = row.invoice_amount;
      this.invoice.invoice_unit = row.invoice_unit;
      this.invoice.invoice_sum = row.invoice_sum;
      this.invoice.invoice_pvm = row.invoice_pvm;
      this.invoice.id = row.id; //console.log(row.id);
    },
    delete_invoice: function delete_invoice(row) {
      var _this = this;

      axios["delete"]("/invoice/".concat(row.id, "/destroy"), {}).then(function (response) {
        //console.log(response.data.saskaitos);
        _this.$bvToast.toast("S\u0105skaitos duomenys i\u0161trinti s\u0117kmingai", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this.getInvoices();
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
        _this2.companies = response.data.company; //console.log(response.data.imones);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    getInvoices: function getInvoices() {
      var _this3 = this;

      //this.isLoading = true
      this.axios.get('/invoice').then(function (response) {
        //this.isLoading = false
        _this3.invoices = response.data.invoice; //sukaiciuojam kiek irasu, puslapiavimui

        _this3.totalRows = _this3.invoices.length; //console.log(response.data.saskaitos);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    edit_post: function edit_post() {
      var _this4 = this;

      axios.patch("/invoice/".concat(this.invoice.id), {
        operation: this.invoice.operation,
        money: this.invoice.money,
        company_id: this.invoice.company_id,
        invoice_data: this.invoice.invoice_data,
        invoice_number: this.invoice.invoice_number,
        operation_name: this.invoice.operation_name,
        invoice_amount: this.invoice.invoice_amount,
        invoice_unit: this.invoice.invoice_unit,
        invoice_sum: this.invoice.invoice_sum,
        invoice_pvm: this.invoice.invoice_pvm
      }).then(function (response) {
        //console.log(response.data.saskaitos);
        _this4.$bvToast.toast("S\u0105skaitos duomenys atnaujinti s\u0117kmingai", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this4.getInvoices();
      })["catch"](function (err) {
        console.log("POST:");
        console.log(err.message);
      });
    },
    handleOk: function handleOk(bvModalEvt) {
      var _this5 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.edit_post(); // Trigger submit handler

      this.$nextTick(function () {
        _this5.$refs['edit_invoice'].hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405& ***!
  \******************************************************************************************************************************************************************************************************/
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
                  items: _vm.invoices,
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
                                return _vm.edit_invoice(row.item)
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
                                return _vm.delete_invoice(row.item)
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
          ref: "edit_invoice",
          attrs: {
            size: "lg",
            title: "Sąskaitos redagavimas",
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
                      domProps: { checked: _vm._q(_vm.invoice.operation, "1") },
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
                      domProps: { checked: _vm._q(_vm.invoice.operation, "2") },
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
                              "text-field": "company_name"
                            },
                            model: {
                              value: _vm.invoice.company_id,
                              callback: function($$v) {
                                _vm.$set(_vm.invoice, "company_id", $$v)
                              },
                              expression: "invoice.company_id"
                            }
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.invoice.company_id,
                                expression: "invoice.company_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.invoice.company_id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.invoice,
                                  "company_id",
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
          _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Sąskaitos")])
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("Sąskaitų sąrašas")])
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
      // register for functioal component in vue file
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

/***/ "./resources/js/views/Invoices.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Invoices.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoices.vue?vue&type=template&id=13fa4405& */ "./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&");
/* harmony import */ var _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoices.vue?vue&type=script&lang=js& */ "./resources/js/views/Invoices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Invoices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Invoices.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Invoices.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=template&id=13fa4405& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
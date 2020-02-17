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
      saskaitos: {
        id: '',
        operacija: '',
        pinigai: '',
        imones_pavadinimas: '',
        data: '',
        numeris: '',
        op_pavadinimas: '',
        kiekis: '',
        suma: '',
        pvm: ''
      },
      imone: true,
      imones: [],
      saskaita: [],
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'operacija',
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
        key: 'pinigai',
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
        key: 'imones.imones_pavadinimas',
        label: 'Įmonės pavadinimas',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'data',
        label: 'Data',
        sortable: true
      }, {
        key: 'numeris',
        label: 'Sąskaitos numeris',
        sortable: false
      }, {
        key: 'op_pavadinimas',
        label: 'Operacijos pavadinimas',
        sortable: true
      }, {
        key: 'kiekis',
        label: 'Kiekis',
        sortable: false
      }, {
        key: 'suma',
        label: 'Suma',
        sortable: false
      }, {
        key: 'pvm',
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
    this.getSaskaitos();
    this.getImones();
  },
  methods: {
    edit_invoice: function edit_invoice(row) {
      this.$refs['edit_invoice'].show();
      this.saskaitos.operacija = row.operacija;
      this.saskaitos.pinigai = row.pinigai;
      this.saskaitos.imones_pavadinimas = row.imones_id;
      this.saskaitos.numeris = row.numeris;
      this.saskaitos.data = row.data;
      this.saskaitos.op_pavadinimas = row.op_pavadinimas;
      this.saskaitos.kiekis = row.kiekis;
      this.saskaitos.suma = row.suma;
      this.saskaitos.pvm = row.pvm;
      this.saskaitos.id = row.id; //console.log(row.id);
    },
    delete_invoice: function delete_invoice(row) {
      var _this = this;

      axios["delete"]("/saskaitos/".concat(row.id, "/destroy"), {}).then(function (response) {
        //console.log(response.data.saskaitos);
        _this.$bvToast.toast("S\u0105skaitos duomenys i\u0161trinti s\u0117kmingai", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this.getSaskaitos();
      })["catch"](function (err) {
        console.log("DELETE:");
        console.log(err.message);
      });
    },
    getImones: function getImones() {
      var _this2 = this;

      //this.isLoading = true
      this.axios.get('/imones').then(function (response) {
        //this.isLoading = false
        _this2.imones = response.data.imones; //console.log(response.data.imones);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    getSaskaitos: function getSaskaitos() {
      var _this3 = this;

      //this.isLoading = true
      this.axios.get('/saskaitos').then(function (response) {
        //this.isLoading = false
        _this3.saskaita = response.data.saskaitos; //sukaiciuojam kiek irasu, puslapiavimui

        _this3.totalRows = _this3.saskaitos.length; //console.log(response.data.saskaitos);
      })["catch"](function (err) {
        console.log("GET:");
        console.log(err.message);
      });
    },
    edit_post: function edit_post() {
      var _this4 = this;

      axios.patch("/saskaitos/".concat(this.saskaitos.id, "/update"), {
        operacija: this.saskaitos.operacija,
        pinigai: this.saskaitos.pinigai,
        imones_id: this.saskaitos.imones_pavadinimas,
        data: this.saskaitos.data,
        numeris: this.saskaitos.numeris,
        op_pavadinimas: this.saskaitos.op_pavadinimas,
        kiekis: this.saskaitos.kiekis,
        suma: this.saskaitos.suma,
        pvm: this.saskaitos.pvm
      }).then(function (response) {
        //console.log(response.data.saskaitos);
        _this4.$bvToast.toast("S\u0105skaitos duomenys atnaujinti s\u0117kmingai", {
          title: "Atlikta",
          variant: "info",
          solid: true
        });

        _this4.getSaskaitos();
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
                  _vm._v(" Atgal\n                    ")
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
                  items: _vm.saskaita,
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
                          "\n                    " +
                            _vm._s(row.value.first) +
                            " " +
                            _vm._s(row.value.last) +
                            "\n                "
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
                              "\n                    Redaguoti\n                    "
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
                              "\n                    Ištrinti\n                    "
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
                          value: _vm.saskaitos.operacija,
                          expression: "saskaitos.operacija"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "radio", value: "1" },
                      domProps: {
                        checked: _vm._q(_vm.saskaitos.operacija, "1")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.saskaitos, "operacija", "1")
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
                          value: _vm.saskaitos.operacija,
                          expression: "saskaitos.operacija"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "radio", value: "2" },
                      domProps: {
                        checked: _vm._q(_vm.saskaitos.operacija, "2")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.saskaitos, "operacija", "2")
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
                          value: _vm.saskaitos.pinigai,
                          expression: "saskaitos.pinigai"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "radio", value: "1" },
                      domProps: { checked: _vm._q(_vm.saskaitos.pinigai, "1") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.saskaitos, "pinigai", "1")
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
                          value: _vm.saskaitos.pinigai,
                          expression: "saskaitos.pinigai"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "radio", value: "2" },
                      domProps: { checked: _vm._q(_vm.saskaitos.pinigai, "2") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.saskaitos, "pinigai", "2")
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
                          value: _vm.saskaitos.pinigai,
                          expression: "saskaitos.pinigai"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "radio", value: "3" },
                      domProps: { checked: _vm._q(_vm.saskaitos.pinigai, "3") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.saskaitos, "pinigai", "3")
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
                              options: _vm.imones,
                              "value-field": "id",
                              "text-field": "imones_pavadinimas"
                            },
                            model: {
                              value: _vm.saskaitos.imones_pavadinimas,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.saskaitos,
                                  "imones_pavadinimas",
                                  $$v
                                )
                              },
                              expression: "saskaitos.imones_pavadinimas"
                            }
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.saskaitos.imones_pavadinimas,
                                expression: "saskaitos.imones_pavadinimas"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: {
                              value: _vm.saskaitos.imones_pavadinimas
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.saskaitos,
                                  "imones_pavadinimas",
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
                        value: _vm.saskaitos.data,
                        expression: "saskaitos.data"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date" },
                    domProps: { value: _vm.saskaitos.data },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.saskaitos, "data", $event.target.value)
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
                        value: _vm.saskaitos.numeris,
                        expression: "saskaitos.numeris"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.saskaitos.numeris },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.saskaitos, "numeris", $event.target.value)
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
                        value: _vm.saskaitos.op_pavadinimas,
                        expression: "saskaitos.op_pavadinimas"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.saskaitos.op_pavadinimas },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.saskaitos,
                          "op_pavadinimas",
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
                        value: _vm.saskaitos.kiekis,
                        expression: "saskaitos.kiekis"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.saskaitos.kiekis },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.saskaitos, "kiekis", $event.target.value)
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
                        value: _vm.saskaitos.suma,
                        expression: "saskaitos.suma"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.saskaitos.suma },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.saskaitos, "suma", $event.target.value)
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
                        value: _vm.saskaitos.pvm,
                        expression: "saskaitos.pvm"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.saskaitos.pvm },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.saskaitos, "pvm", $event.target.value)
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
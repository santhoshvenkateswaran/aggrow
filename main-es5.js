function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 37,
      vars: 0,
      consts: [[1, "container", "px-0", "pb-3"], [1, "row", "px-0"], [1, "col-12", "jumbotron", "mx-0", "mt-0", "shadow-sm"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-5", "text-justify", "mr-0", "mr-md-5"], [1, "list-unstyled", "pl-4"], ["aria-hidden", "true", 1, "mr-3", "fa", "fa-tint"], ["aria-hidden", "true", 1, "mr-3", "fa", "fa-thermometer-three-quarters"], ["aria-hidden", "true", 1, "mr-3", "fa", "fa-fire"], [1, "col-12", "col-md-5", "text-justify"], [1, "col-12", "col-md-7", "mt-5", "mx-auto"], [1, "jumbotron", "m-0", "text-justify"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What we do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How do we predict crops?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This application is a user-friendly recommendation system for predicting the perfect crop according to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rainfall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "in your desired land.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This application uses a supervised Machine Learning Ensemble Model comprising of 3 algorithms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Support Vector Classifier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Decision Tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Gradient Boosting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " This is an end-to-end app with an aesthetically simple UI in which the user enters the values for the conditions (Rainfall, temperature & pH) and the three top-most suitable crops are displayed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: #1fa67a !important;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #1b926c !important;\n}\n.container[_ngcontent-%COMP%] {\n  font-size: 18px;\n  min-height: calc(100vh - 56px);\n  height: 100%;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 0;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1fa67a;\n  font-size: 4rem;\n}\n.jumbotron[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1fa67a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2Fzc2V0cy90aGVtZS5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG9DQUFBO0FDSEo7QURJSTtFQUNJLG9DQUFBO0FDRlI7QUNIQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QURNSjtBQ0hBO0VBU0ksa0JBQUE7RUFDQSxnQkFBQTtBREZKO0FDUEk7RUFDSSxjRlZJO0VFV0osZUFBQTtBRFNSO0FDUEk7RUFDSSxlQUFBO0VBQ0EsY0ZmSTtBQ3dCWiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZV9ncmVlbjogIzFmYTY3YTtcbiRhbm90aGVyX2dyZWVuOiAjMWI5MjZjO1xuXG5cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTY3YSAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5MjZjICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZmE2N2EgIWltcG9ydGFudDtcbn1cbi5idG4tc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjkyNmMgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uanVtYm90cm9uIGgxIHtcbiAgY29sb3I6ICMxZmE2N2E7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5qdW1ib3Ryb24gcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxZmE2N2E7XG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3RoZW1lLnNjc3MnO1xuXG4uY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogJHRoZV9ncmVlbjtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogJHRoZV9ncmVlbjtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./graphs/graphs.component */
    "./src/app/graphs/graphs.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'insights',
      component: _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_3__["GraphsComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'contact-us',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: 'team',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'major-project';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container", "bg-light"], [1, "mt-auto"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 1);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _home_home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home/home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./graphs/graphs.component */
    "./src/app/graphs/graphs.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_home_home_service__WEBPACK_IMPORTED_MODULE_0__["CropService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_15__["InMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_16__["InMemoryDataService"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_11__["GraphsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_15__["InMemoryWebApiModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_11__["GraphsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_15__["InMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_16__["InMemoryDataService"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"]],
          providers: [_home_home_service__WEBPACK_IMPORTED_MODULE_0__["CropService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(formBuilder) {
        _classCallCheck(this, ContactComponent);

        this.formBuilder = formBuilder;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formData) {
          document.location.href = 'mailto:santhoshs1998@gmail.com?subject=AGGROW%20-%20regarding&body=' + formData.message + '%0A%0A%0AName:' + formData.name + '%0A%0AEmail:' + formData.email + '%0AMobile:' + formData.phone;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 28,
      vars: 2,
      consts: [[1, "container", "px-0", "pb-3"], [1, "row", "px-0"], [1, "col-12", "jumbotron", "mx-0", "mt-0", "shadow-sm"], [1, "col-8", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", "Your name", 1, "form-control"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", "Your email", 1, "form-control"], ["for", "phone"], ["type", "number", "formControlName", "phone", "placeholder", "Your contact number", 1, "form-control"], [1, "form-group"], ["for", "reason"], ["formControlName", "message", "rows", "5", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Let's Talk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We're here, ready to answer anything for you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onSubmit(ctx.contactForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "What was it about our website that made you want to contact us?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: #1fa67a !important;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #1b926c !important;\n}\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 56px);\n  height: 100%;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 0;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1fa67a;\n  font-size: 4rem;\n}\n.jumbotron[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1fa67a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2Fzc2V0cy90aGVtZS5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudGhvc2gvRGVza3RvcC91bnRpdGxlZCBmb2xkZXIvYWdncm93L3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0NBQUE7QUNISjtBRElJO0VBQ0ksb0NBQUE7QUNGUjtBQ0hBO0VBRUksOEJBQUE7RUFDQSxZQUFBO0FES0o7QUNGQTtFQVNJLGtCQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ05JO0VBQ0ksY0ZWSTtFRVdKLGVBQUE7QURRUjtBQ05JO0VBQ0ksZUFBQTtFQUNBLGNGZkk7QUN1QloiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlX2dyZWVuOiAjMWZhNjdhO1xuJGFub3RoZXJfZ3JlZW46ICMxYjkyNmM7XG5cblxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhNjdhICFpbXBvcnRhbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjkyNmMgIWltcG9ydGFudDtcbiAgICB9XG59IiwiLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTY3YSAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOTI2YyAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uanVtYm90cm9uIGgxIHtcbiAgY29sb3I6ICMxZmE2N2E7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5qdW1ib3Ryb24gcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxZmE2N2E7XG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3RoZW1lLnNjc3MnO1xuXG4uY29udGFpbmVyIHtcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogJHRoZV9ncmVlbjtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogJHRoZV9ncmVlbjtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container", "p-0"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "text-light", "d-flex", "flex-column-reverse", "flex-md-row", "justify-content-between", "align-items-center"], ["routerLink", "/home", 1, "mr-0", "mr-md-5", "my-0"], [1, "social-media"], ["type", "button", "title", "+91 8056209054", "href", "tel:8056209054", 1, "btn", "btn-light", "mr-3"], [1, "fa", "fa-phone"], ["type", "button", "href", "mailto:santhoshs1998@gmail.com?subject=AGGROW%20reg", 1, "btn", "btn-light", "mr-3"], [1, "fa", "fa-envelope"], ["type", "button", "href", "https://github.com/santhoshvenkateswaran/aggrow", 1, "btn", "btn-light"], [1, "fa", "fa-github"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA9 2020 AGGROW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  color: #1fa67a;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBuYXYge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIC5idG4tbGlnaHQge1xuICAgICAgICAgICAgY29sb3I6ICMxZmE2N2E7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lciBuYXYge1xuICBoZWlnaHQ6IDgwcHg7XG59XG4uY29udGFpbmVyIG5hdiAuYnRuLWxpZ2h0IHtcbiAgY29sb3I6ICMxZmE2N2E7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphs/graphs.component.ts":
  /*!********************************************!*\
    !*** ./src/app/graphs/graphs.component.ts ***!
    \********************************************/

  /*! exports provided: GraphsComponent */

  /***/
  function srcAppGraphsGraphsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphsComponent", function () {
      return GraphsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _graphs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./graphs.model */
    "./src/app/graphs/graphs.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");

    function GraphsComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function GraphsComponent_div_20_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var crop_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", crop_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r7.name);
      }
    }

    function GraphsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraphsComponent_div_20_ng_container_2_Template, 6, 2, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cropInfo);
      }
    }

    function GraphsComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r2.Highcharts)("options", ctx_r2.chartOptions);
      }
    }

    function GraphsComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r3.Highcharts)("options", ctx_r3.chartOptions);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "table-success": a0,
        "table-danger": a1
      };
    };

    var _c1 = function _c1(a0, a1, a2) {
      return {
        "table-primary": a0,
        "table-info": a1,
        "table-warning": a2
      };
    };

    function GraphsComponent_div_23_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, item_r9[0], !item_r9[0]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, item_r9[1], !item_r9[1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, item_r9[2], !item_r9[2]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, item_r9[3], !item_r9[3]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9[3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, item_r9[4], !item_r9[4]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9[4]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](27, _c1, item_r9[5] >= 0.94, item_r9[5] < 0.94 && item_r9[5] >= 0.845, item_r9[5] < 0.845));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9[5], "");
      }
    }

    function GraphsComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SVM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Decision Tree");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logistic Regression");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Naive Bayes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gradient Boosting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Accuracy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GraphsComponent_div_23_ng_container_17_Template, 14, 31, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tableInfo);
      }
    }

    function GraphsComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This table shows the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "algorithms implemented");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " in each iteration of the analysis and the corresponding accuracies. The highest accuracy is of the proposed model \u2013\u2013 an ensemble of Support Vector Machine, Decision Tree & Gradient Boosting with equal weights.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "active btn-success": a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "active  btn-success": a0
      };
    };

    var Boost = __webpack_require__(
    /*! highcharts/modules/boost */
    "./node_modules/highcharts/modules/boost.js");

    var noData = __webpack_require__(
    /*! highcharts/modules/no-data-to-display */
    "./node_modules/highcharts/modules/no-data-to-display.js");

    var More = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");

    var exportMap = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");

    var highstock = __webpack_require__(
    /*! highcharts/modules/stock */
    "./node_modules/highcharts/modules/stock.js");

    var fullScreen = __webpack_require__(
    /*! highcharts/modules/full-screen */
    "./node_modules/highcharts/modules/full-screen.js");

    Boost(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    noData(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    More(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    noData(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    exportMap(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    highstock(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    fullScreen(highcharts__WEBPACK_IMPORTED_MODULE_1__);

    var GraphsComponent = /*#__PURE__*/function () {
      function GraphsComponent() {
        _classCallCheck(this, GraphsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {};
        this.crops = ['Arecanut', 'Bajra', 'Banana', 'Cashewnut', 'Castor', 'Chillies', 'Coconut', 'Coriander', 'Cotton', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong', 'Onion', 'Ragi', 'Rice', 'Sesamum', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Tapioca', 'Turmeric', 'Urad'];
        this.cropCount = [];
        this.algorithms = [];
        this.accuracies = [];
        this.cropInfo = [];
        this.tableInfo = [];
        this.highCharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {};
        this.algorithms = ['Logistic Regression', 'Naive Bayes', 'Decision Tree', 'SVM', 'Gradient Boosting', 'Our Proposed Algortihm'];
        this.cropCount = [146, 411, 433, 325, 307, 392, 203, 269, 504, 216, 543, 368, 402, 425, 486, 380, 477, 496, 350, 168, 438, 313, 385, 357, 508]; // this.accuracies = [0.781, 0.788, 0.819, 0.873, 0.914, 0.936, 0.945];

        this.accuracies = [68.19, 73.83, 87.35, 90.10, 92.62, 95.49];
        this.cropInfo = [{
          name: "Arecanut",
          img: "assets/IMG/Arecanut.jpg"
        }, {
          name: "Bajra",
          img: "assets/IMG/Bajra.jpg"
        }, {
          name: "Banana",
          img: "assets/IMG/Banana.jpeg"
        }, {
          name: "Cashewnut",
          img: "assets/IMG/Cashewnut.jpg"
        }, {
          name: "Castor seed",
          img: "assets/IMG/Castor.jpeg"
        }, {
          name: "Chillies",
          img: "assets/IMG/Chillies.jpg"
        }, {
          name: "Coconut",
          img: "assets/IMG/Coconut.jpg"
        }, {
          name: "Coriander",
          img: "assets/IMG/Coriander.jpg"
        }, {
          name: "Cotton",
          img: "assets/IMG/Cotton.jpg"
        }, {
          name: "Gram",
          img: "assets/IMG/Gram.jpg"
        }, {
          name: "Groundnut",
          img: "assets/IMG/Groundnut.jpg"
        }, {
          name: "Horse-gram",
          img: "assets/IMG/Horse.jpg"
        }, {
          name: "Jowar",
          img: "assets/IMG/Jowar.jpg"
        }, {
          name: "Maize",
          img: "assets/IMG/Maize.jpg"
        }, {
          name: "Moong",
          img: "assets/IMG/Moong.jpg"
        }, {
          name: "Onion",
          img: "assets/IMG/Onion.png"
        }, {
          name: "Ragi",
          img: "assets/IMG/Ragi.jpg"
        }, {
          name: "Rice",
          img: "assets/IMG/Rice.jpeg"
        }, {
          name: "Sesamum",
          img: "assets/IMG/Sesamum.jpg"
        }, {
          name: "Sugarcane",
          img: "assets/IMG/Sugarcane.jpeg"
        }, {
          name: "Sunflower",
          img: "assets/IMG/Sunflower.png"
        }, {
          name: "Sweet potato",
          img: "assets/IMG/Sweet.jpg"
        }, {
          name: "Tapioca",
          img: "assets/IMG/Tapioca.jpg"
        }, {
          name: "Turmeric",
          img: "assets/IMG/Turmeric.jpg"
        }, {
          name: "Urad",
          img: "assets/IMG/Urad.jpg"
        }];
        this.tableInfo = [[1, 1, 0, 0, 1, 0.9549], [1, 0, 1, 0, 1, 0.9490], [0, 0, 0, 0, 1, 0.9479], [1, 0, 0, 1, 1, 0.9452], [1, 0, 0, 0, 0, 0.9436], [1, 0, 0, 0, 1, 0.9430], [1, 1, 1, 0, 1, 0.9404], [1, 1, 0, 1, 1, 0.9242], [1, 1, 1, 1, 1, 0.9183], [0, 1, 0, 0, 1, 0.9146], [1, 1, 0, 0, 0, 0.9146], [1, 1, 0, 1, 0, 0.9070], [1, 1, 1, 0, 0, 0.9054], [0, 1, 0, 1, 1, 0.8984], [0, 1, 1, 0, 1, 0.8974], [1, 0, 1, 1, 1, 0.8753], [0, 1, 0, 0, 0, 0.8538], [0, 0, 1, 0, 1, 0.8495], [1, 1, 1, 1, 0, 0.8490], [0, 1, 1, 1, 1, 0.8474], [1, 0, 1, 0, 0, 0.8426], [0, 0, 0, 1, 1, 0.8361], [1, 0, 0, 1, 0, 0.8334], [0, 0, 1, 1, 1, 0.8291], [1, 0, 1, 1, 0, 0.8270], [0, 1, 0, 1, 0, 0.8200], [0, 1, 1, 0, 0, 0.8092], [0, 1, 1, 1, 0, 0.7985], [0, 0, 1, 1, 0, 0.7781], [0, 0, 0, 1, 0, 0.7743], [0, 0, 1, 0, 0, 0.7738]];
      }

      _createClass(GraphsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isSet = false;
          this.setData('crop-list');
        }
      }, {
        key: "setData",
        value: function setData(chartName) {
          var _this = this;

          if (chartName == 'crop-list') {
            this.isSet = false;
            this.curChart = 'crop-list';
            setTimeout(function () {
              _this.isSet = true;
            }, 400);
          } else if (chartName == 'crop-distribution') {
            this.curChart = 'crop-distribution';
            this.isSet = false;
            this.chartOptions = JSON.parse(JSON.stringify(_graphs_model__WEBPACK_IMPORTED_MODULE_2__["CHART_DATA"]));
            this.chartOptions['colors'] = ['#1fa67a'];
            this.chartOptions['title'].text = 'Crop Distribution';
            this.chartOptions['tooltip'].pointFormat = '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {point.percentage:.0f}<br/>', this.chartOptions['xAxis'].categories = this.crops;
            this.chartOptions['xAxis'].title.text = 'Crop Variety';
            this.chartOptions['yAxis'].title.text = 'Number of Records';
            this.chartOptions['series'][0].name = 'Count';
            this.chartOptions['series'][0].data = this.cropCount;
            this.isSet = true;
          } else if (chartName == 'algorithm-analysis') {
            this.curChart = 'algorithm-analysis';
            this.isSet = false;
            this.chartOptions = JSON.parse(JSON.stringify(_graphs_model__WEBPACK_IMPORTED_MODULE_2__["CHART_DATA"]));
            this.chartOptions['colors'] = ['#3498DB'];
            this.chartOptions['title'].text = 'Algorithms Analysis';
            this.chartOptions['xAxis'].categories = this.algorithms;
            this.chartOptions['xAxis'].title.text = 'Algorithm';
            this.chartOptions['yAxis'].title.text = 'Accuracy';
            this.chartOptions['yAxis'].max = 100;
            this.chartOptions['tooltip'].pointFormat = '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {point.percentage:.0f}%<br/>', this.chartOptions['series'][0].name = 'Accuracy';
            this.chartOptions['series'][0].data = this.accuracies;
            this.isSet = true;
          } else if (chartName == 'algorithm-ensemble') {
            this.isSet = false;
            this.curChart = 'algorithm-ensemble';
            setTimeout(function () {
              _this.isSet = true;
            }, 400);
          }
        }
      }]);

      return GraphsComponent;
    }();

    GraphsComponent.ɵfac = function GraphsComponent_Factory(t) {
      return new (t || GraphsComponent)();
    };

    GraphsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraphsComponent,
      selectors: [["app-graphs"]],
      decls: 25,
      vars: 18,
      consts: [[1, "container", "py-5"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-4"], ["aria-hidden", "true", 1, "fa", "fa-line-chart", "mr-2"], [1, "nav", "nav-pills", "nav-fill"], [1, "nav-item", "mx-2"], [1, "nav-link", "rounded-pill", 3, "ngClass", "click"], [4, "ngIf"], ["class", "chart crop-cards", 4, "ngIf"], ["class", "chart shadow-sm table-responsive", 4, "ngIf"], ["class", "chart chart-table table-responsive", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row", "col-12", "mx-0", "px-4", "d-flex", "justify-content-center", "spinner"], [1, "fa", "fa-spinner", "fa-pulse", "fa-3x", "fa-fw"], [1, "sr-only"], [1, "chart", "crop-cards"], [1, "row", "col-12", "m-0", "d-flex", "justify-content-between"], [4, "ngFor", "ngForOf"], [1, "card", "shadow-sm", "col-12", "col-sm-5", "col-md-3", "col-lg-2", "p-0", "mx-1", "my-3"], ["alt", "crop-img", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text", "text-center"], [1, "chart", "shadow-sm", "table-responsive"], [2, "min-width", "800px", "width", "100%", "height", "500px", "display", "block", 3, "Highcharts", "options"], [1, "chart", "chart-table", "table-responsive"], [1, "table", "table-bordered", "table-dark", "m-0"], [1, "text-dark"], ["scope", "col", 1, "table-dark"], [3, "ngClass"], [1, "mt-3"], [1, "text-success"]],
      template: function GraphsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Insights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphsComponent_Template_a_click_8_listener() {
            return ctx.setData("crop-list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "List of Crops");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphsComponent_Template_a_click_11_listener() {
            return ctx.setData("crop-distribution");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Crop Distribution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphsComponent_Template_a_click_14_listener() {
            return ctx.setData("algorithm-analysis");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Algorithms Analysis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphsComponent_Template_a_click_17_listener() {
            return ctx.setData("algorithm-ensemble");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ensemble Weight Comparison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GraphsComponent_ng_container_19_Template, 5, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GraphsComponent_div_20_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GraphsComponent_div_21_Template, 2, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GraphsComponent_div_22_Template, 2, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GraphsComponent_div_23_Template, 18, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GraphsComponent_div_24_Template, 6, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.curChart == "crop-list"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.curChart == "crop-distribution"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, ctx.curChart == "algorithm-analysis"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.curChart == "algorithm-ensemble"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSet && ctx.curChart == "crop-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSet && ctx.curChart == "crop-distribution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSet && ctx.curChart == "algorithm-analysis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSet && ctx.curChart == "algorithm-ensemble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSet && ctx.curChart == "algorithm-ensemble");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_4__["HighchartsChartComponent"]],
      styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: #1fa67a !important;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #1b926c !important;\n}\n.container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .chart-table[_ngcontent-%COMP%] {\n  max-height: 514px;\n}\n.container[_ngcontent-%COMP%]   .crop-cards[_ngcontent-%COMP%] {\n  max-height: 698px;\n  overflow: scroll;\n}\n.container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-top: 300px;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2Fzc2V0cy90aGVtZS5zY3NzIiwic3JjL2FwcC9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhbnRob3NoL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL2FnZ3Jvdy9zcmMvYXBwL2dyYXBocy9ncmFwaHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxvQ0FBQTtBQ0hKO0FESUk7RUFDSSxvQ0FBQTtBQ0ZSO0FDQUk7RUFDSSxlQUFBO0FER1I7QUNBSTtFQUNJLGlCQUFBO0FERVI7QUNDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QURDUjtBQ0VJO0VBQ0ksaUJBQUE7QURBUjtBQ0lBO0VBQ0ksVUFBQTtBRERKIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGhzL2dyYXBocy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVfZ3JlZW46ICMxZmE2N2E7XG4kYW5vdGhlcl9ncmVlbjogIzFiOTI2YztcblxuXG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmE2N2EgIWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOTI2YyAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIuYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhNjdhICFpbXBvcnRhbnQ7XG59XG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5MjZjICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5jaGFydC10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDUxNHB4O1xufVxuLmNvbnRhaW5lciAuY3JvcC1jYXJkcyB7XG4gIG1heC1oZWlnaHQ6IDY5OHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmNvbnRhaW5lciAuc3Bpbm5lciB7XG4gIG1hcmdpbi10b3A6IDMwMHB4O1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMTclO1xufSIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aGVtZS5zY3NzJztcblxuLmNvbnRhaW5lciB7XG4gICAgLy8gbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuY2hhcnQtdGFibGUge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MTRweDtcbiAgICB9XG5cbiAgICAuY3JvcC1jYXJkcyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDY5OHB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgIC5zcGlubmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAwcHg7XG4gICAgfVxufVxuXG50ZCwgdGgge1xuICAgIHdpZHRoOiAxNyU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-graphs',
          templateUrl: './graphs.component.html',
          styleUrls: ['./graphs.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphs/graphs.model.ts":
  /*!****************************************!*\
    !*** ./src/app/graphs/graphs.model.ts ***!
    \****************************************/

  /*! exports provided: CHART_DATA */

  /***/
  function srcAppGraphsGraphsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHART_DATA", function () {
      return CHART_DATA;
    });

    var FONT_FAMILY = 'Roboto, sans-serif';
    var CHARTS_BORDER_COLOR = '#CFDDE6';
    var CHART_DATA = {
      chart: {
        type: 'column',
        backgroundColor: 'white',
        borderColor: CHARTS_BORDER_COLOR,
        borderWidth: 1,
        hover: {
          enabled: false
        },
        style: {
          fontFamily: FONT_FAMILY
        }
      },
      tooltip: {
        backgroundColor: 'white',
        useHTML: true,
        borderRadius: 5,
        borderWidth: 0,
        style: {
          color: '#53565A',
          fontSize: '14px',
          lineHeight: '16px'
        }
      },
      colors: [],
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: [],
        crosshair: true,
        title: {
          text: ''
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      series: [{
        name: '',
        data: []
      }],
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true
          }
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 26,
      vars: 0,
      consts: [[1, "navbar", "shadow-sm", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], [1, "container"], ["routerLink", "/home", 1, "navbar-brand", "mr-5"], ["aria-hidden", "true", 1, "fa", "fa-pagelines", "mr-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "home", 1, "nav-link"], ["routerLink", "insights", 1, "nav-link"], ["routerLink", "about", 1, "nav-link"], ["routerLink", "contact-us", 1, "nav-link"], [1, "navbar-nav", "ml-auto"], ["routerLink", "team", 1, "nav-link"], ["aria-hidden", "true", 1, "fa", "fa-smile-o", "mr-2"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AGGROW ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Insights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Meet the team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".navbar-brand[_ngcontent-%COMP%] {\n  color: #1fa67a;\n}\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #1b926c;\n}\n.nav-item[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FIUTtBQ0VaO0FERUk7RUFDSSxjQUFBO0FDQVI7QURJQTtFQUNJLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlX2dyZWVuOiAjMWZhNjdhO1xuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJHRoZV9ncmVlbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMxYjkyNmM7XG4gICAgfVxufVxuXG4ubmF2LWl0ZW0sIC5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogIzFmYTY3YTtcbn1cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICBjb2xvcjogIzFiOTI2Yztcbn1cblxuLm5hdi1pdGVtLCAubmF2LWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _home_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.model */
    "./src/app/home/home.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HomeComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg.rainfall);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg.temperature);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg.ph);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg.api);
      }
    }

    function HomeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enter the conditions to get recommendation.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Prediction Successful.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function HomeComponent_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Rainfall");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function HomeComponent_ng_container_11_Template_input_focus_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.onFocus("rainfall");
        })("ngModelChange", function HomeComponent_ng_container_11_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.rainfall = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "mm");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Temperature");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function HomeComponent_ng_container_11_Template_input_focus_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.onFocus("temperature");
        })("ngModelChange", function HomeComponent_ng_container_11_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.temperature = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u2103");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Soil pH");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function HomeComponent_ng_container_11_Template_input_focus_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.onFocus("ph");
        })("ngModelChange", function HomeComponent_ng_container_11_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.ph = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "pH");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_11_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.onPredict();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Predict");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ng_container_11_Template_button_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.onReset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r3.errorMsg.rainfall))("ngModel", ctx_r3.rainfall);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r3.errorMsg.temperature))("ngModel", ctx_r3.temperature);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r3.errorMsg.ph))("ngModel", ctx_r3.ph);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.isError);
      }
    }

    function HomeComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function HomeComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crop Predictions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r5.images[ctx_r5.crops.crop1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("1. ", ctx_r5.crops.crop1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r5.images[ctx_r5.crops.crop2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("2. ", ctx_r5.crops.crop2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r5.images[ctx_r5.crops.crop3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("3. ", ctx_r5.crops.crop3, "");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      // cropList = [
      //   'Urad', 'Turmeric', 'Tapioca', 'Sweet potato', 'Sunflower', 'Sugarcane', 'Sesamum', 'Rice', 'Ragi', 'Onion',
      //   'Moong(Green Gram)', 'Maize', 'Jowar', 'Horse-gram', 'Groundnut', 'Gram', 'Cotton', 'Coriander', 'Coconut',
      //   'Chillies', 'Castor', 'Cashewnut', 'Banana', 'Bajra', 'Arecanut',
      // ];
      function HomeComponent(http, cropService) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.cropService = cropService;
        this.images = _home_model__WEBPACK_IMPORTED_MODULE_0__["IMAGES"];
        this.rainfall = null;
        this.temperature = null;
        this.ph = null;
        this.errorMsg = {
          rainfall: '',
          temperature: '',
          ph: '',
          api: ''
        };
        this.isError = false;
      } // pathTrainAPI = 'http://127.0.0.1:5000/api/train';
      // pathPredictAPI = 'http://127.0.0.1:5000/api/predict';


      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.isLoading = true;
          this.isFetched = true;
          this.cropService.get('train').subscribe(function (data) {
            // console.log(data);
            _this2.isLoading = false;
            _this2.isError = false;
            _this2.errorMsg.temperature = '';
          }, function (error) {
            console.log(error);
            _this2.isError = true;
            _this2.errorMsg.temperature = 'API Failure. Please try again.';
          });
        }
      }, {
        key: "onFocus",
        value: function onFocus(field) {
          if (this.isError) {
            this[field] = null;
            this.errorMsg[field] = '';
            this.isSet = false;

            if (this.errorMsg.rainfall === '' && this.errorMsg.temperature === '' && this.errorMsg.ph === '') {
              this.isError = false;
            }
          }
        }
      }, {
        key: "validateInput",
        value: function validateInput() {
          // Validating Rainfall
          if (this.rainfall === null) {
            this.errorMsg.rainfall = 'Please enter input for Rainfall to predict.';
          } else if (this.rainfall < 200 || this.rainfall > 2000) {
            this.errorMsg.rainfall = 'Input for Rainfall is out of range. Enter a valid input.';
          } else {
            this.errorMsg.rainfall = '';
          } // Validating temperature


          if (this.temperature === null) {
            this.errorMsg.temperature = 'Please enter input for Temperature to predict.';
          } else if (this.temperature < 10 || this.temperature > 40 || this.temperature === null) {
            this.errorMsg.temperature = 'Input for Temperature is out of range. Enter a valid input.';
          } else {
            this.errorMsg.temperature = '';
          } // Validating pH


          if (this.ph === null) {
            this.errorMsg.ph = 'Please enter input for pH to predict.';
          } else if (this.ph < 5 || this.ph > 7.5 || this.ph === null) {
            this.errorMsg.ph = 'Input for pH is out of range. Enter a valid input.';
          } else {
            this.errorMsg.ph = '';
          }

          this.isError = !(this.errorMsg.rainfall === '' && this.errorMsg.temperature === '' && this.errorMsg.ph === '');
          return !this.isError;
        }
      }, {
        key: "onPredict",
        value: function onPredict() {
          var _this3 = this;

          if (this.validateInput()) {
            this.cropService.post('predict', {
              rainfall: this.rainfall,
              temperature: this.temperature,
              pH: this.ph
            }).subscribe(function (data) {
              _this3.isFetched = false;
              _this3.crops = data;
              setTimeout(function () {
                _this3.isFetched = true;
              }, 700);
              _this3.isSet = true;
            }, function (error) {
              _this3.isError = true;
              _this3.errorMsg.api = 'API Failure. Please try again.';
              console.log(error);
            });
          } else {
            this.crops = {};
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.rainfall = null;
          this.temperature = null;
          this.ph = null;
          this.isSet = false;
          this.isError = false;
          this.errorMsg = {
            rainfall: '',
            temperature: '',
            ph: '',
            api: ''
          };
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_3__["CropService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 14,
      vars: 6,
      consts: [[1, "container", "px-0", "pb-5"], [1, "row", "px-0"], [1, "col-12", "jumbotron", "mx-0", "mt-0", "shadow-sm"], ["aria-hidden", "true", 1, "fa", "fa-pagelines", "mr-2"], ["class", "row mb-5 px-4", "role", "alert", 4, "ngIf"], ["class", "row mb-5 px-4", 4, "ngIf"], ["class", "row mb-5 px-4", 4, "ngIfShadow-sm", "ngIf"], [4, "ngIf"], ["class", "row mt-5 px-4", 4, "ngIf"], ["role", "alert", 1, "row", "mb-5", "px-4"], [1, "col-11", "col-md-6", "alert", "alert-danger", "mx-auto", "mt-3", "shadow-sm"], [1, "row", "mb-5", "px-4"], ["role", "alert", 1, "col-md-6", "text-center", "alert", "alert-info", "mx-auto", "mt-3", "shadow-sm"], [1, "m-0"], ["role", "alert", 1, "col-md-6", "text-center", "alert", "alert-success", "mx-auto", "mt-3"], [1, "row", "col-12", "m-0", "px-4", "d-flex", "justify-content-center"], [1, "form-group", "col-sm-12", "col-md-8", "col-lg-3"], ["for", "rainfall"], [1, "input-group", "mb-2", "mr-sm-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["aria-hidden", "true", 1, "ml-1", "fa", "fa-tint"], ["type", "number", "id", "rainfall", "placeholder", "Enter rainfall", 1, "form-control", 3, "ngClass", "ngModel", "focus", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", "bg-white"], [1, "form-group", "col-md-8", "col-lg-3"], ["for", "temperature"], ["aria-hidden", "true", 1, "ml-1", "fa", "fa-thermometer-three-quarters"], ["type", "number", "id", "temperature", "placeholder", "Enter temperature", 1, "form-control", 3, "ngClass", "ngModel", "focus", "ngModelChange"], ["for", "ph"], ["aria-hidden", "true", 1, "ml-1", "fa", "fa-adjust"], ["type", "number", "id", "ph", "placeholder", "Enter soil pH", 1, "border-alert", "form-control", 3, "ngClass", "ngModel", "focus", "ngModelChange"], [1, "form-row", "d-flex", "justify-content-center", "align-items-center", "px-4", "mb-5"], ["type", "submit", 1, "btn", "btn-success", "col-4", "col-md-2", "mr-4", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-success", "col-4", "col-md-2", 3, "click"], [1, "fa", "fa-spinner", "fa-pulse", "fa-3x", "fa-fw"], [1, "sr-only"], [1, "row", "mt-5", "px-4"], [1, "col-12", "text-center"], [1, "row", "col-12", "mx-auto", "d-flex", "justify-content-center"], [1, "card", "col-12", "col-sm-8", "col-md-3", "mx-auto", "p-0", "mb-4", "mb-md-0", "shadow-sm"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], [1, "card", "col-12", "col-sm-8", "col-md-3", "mx-auto", "p-0", "shadow-sm"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "AGGROW");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "A Recommendation System for Crop Prediction");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 10, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_ng_container_11_Template, 43, 13, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_ng_container_12_Template, 5, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 19, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSet && !ctx.isError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFetched && ctx.isSet && !ctx.isError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.isLoading || !ctx.isFetched) && !ctx.isError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFetched && ctx.isSet && !ctx.isError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: #1fa67a !important;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #1b926c !important;\n}\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 56px);\n  height: 100%;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 0;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1fa67a;\n  font-size: 4rem;\n}\n.jumbotron[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2Fzc2V0cy90aGVtZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudGhvc2gvRGVza3RvcC91bnRpdGxlZCBmb2xkZXIvYWdncm93L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0NBQUE7QUNISjtBRElJO0VBQ0ksb0NBQUE7QUNGUjtBQ0hBO0VBRUksOEJBQUE7RUFDQSxZQUFBO0FES0o7QUNGSTtFQUNJLGlCQUFBO0FES1I7QUNEQTtFQVNJLGtCQUFBO0VBQ0EsZ0JBQUE7QURKSjtBQ0xJO0VBQ0ksY0ZmSTtFRWdCSixlQUFBO0FET1I7QUNMSTtFQUNJLGVBQUE7QURPUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVfZ3JlZW46ICMxZmE2N2E7XG4kYW5vdGhlcl9ncmVlbjogIzFiOTI2YztcblxuXG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmE2N2EgIWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOTI2YyAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIuYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhNjdhICFpbXBvcnRhbnQ7XG59XG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5MjZjICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5qdW1ib3Ryb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uanVtYm90cm9uIGgxIHtcbiAgY29sb3I6ICMxZmE2N2E7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5qdW1ib3Ryb24gaDYge1xuICBmb250LXNpemU6IDFyZW07XG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3RoZW1lLnNjc3MnO1xuXG4uY29udGFpbmVyIHtcbiAgICAvLyBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQge1xuICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIH1cbn1cblxuLmp1bWJvdHJvbiB7XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogJHRoZV9ncmVlbjtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgLy8gY29sb3I6ICRhbm90aGVyX2dyZWVuO1xuICAgIH1cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _home_service__WEBPACK_IMPORTED_MODULE_3__["CropService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.model.ts":
  /*!************************************!*\
    !*** ./src/app/home/home.model.ts ***!
    \************************************/

  /*! exports provided: CROP_PREDICTION, MODEL_RUN, IMAGES */

  /***/
  function srcAppHomeHomeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CROP_PREDICTION", function () {
      return CROP_PREDICTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MODEL_RUN", function () {
      return MODEL_RUN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMAGES", function () {
      return IMAGES;
    });

    var CROP_PREDICTION = {
      crop1: 'Maize',
      cropw: 'Sunflower',
      crop3: 'Ragi'
    };
    var MODEL_RUN = {
      success: 'SUCCESS'
    };
    var IMAGES = {
      'Urad': 'assets/IMG/Urad.jpg',
      'Turmeric': 'assets/IMG/Turmeric.jpg',
      'Tapioca': 'assets/IMG/Tapioca.jpg',
      'Sweet potato': 'assets/IMG/Sweet.jpg',
      'Sunflower': 'assets/IMG/Sunflower.png',
      'Sugarcane': 'assets/IMG/Sugarcane.jpeg',
      'Sesamum': 'assets/IMG/Sesamum.jpg',
      'Rice': 'assets/IMG/Rice.jpeg',
      'Ragi': 'assets/IMG/Ragi.jpg',
      'Onion': 'assets/IMG/Onion.png',
      'Moong(Green Gram)': 'assets/IMG/Moong.jpg',
      'Maize': 'assets/IMG/Maize.jpg',
      'Jowar': 'assets/IMG/Jowar.jpg',
      'Horse-gram': 'assets/IMG/Horse.jpg',
      'Groundnut': 'assets/IMG/Groundnut.jpg',
      'Gram': 'assets/IMG/Gram.jpg',
      'Cotton': 'assets/IMG/Cotton.jpg',
      'Coriander': 'assets/IMG/Coriander.jpg',
      'Coconut': 'assets/IMG/Coconut.jpg',
      'Chillies': 'assets/IMG/Chillies.jpg',
      'Castor seed': 'assets/IMG/Castor.jpeg',
      'Cashewnut': 'assets/IMG/Cashewnut.jpg',
      'Banana': 'assets/IMG/Banana.jpeg',
      'Bajra': 'assets/IMG/Bajra.jpg',
      'Arecanut': 'assets/IMG/Arecanut.jpg'
    };
    /***/
  },

  /***/
  "./src/app/home/home.service.ts":
  /*!**************************************!*\
    !*** ./src/app/home/home.service.ts ***!
    \**************************************/

  /*! exports provided: CropService */

  /***/
  function srcAppHomeHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropService", function () {
      return CropService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CropService = /*#__PURE__*/function () {
      function CropService(http) {
        _classCallCheck(this, CropService);

        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseURL;
      }

      _createClass(CropService, [{
        key: "get",
        value: function get(endPoint) {
          return this.http.get(this.baseURL + endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (responseData) {
            return JSON.parse(JSON.stringify(responseData));
          }));
        }
      }, {
        key: "post",
        value: function post(endPoint, input) {
          return this.http.get(this.baseURL + endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (responseData) {
            return JSON.parse(JSON.stringify(responseData));
          }));
        }
      }]);

      return CropService;
    }();

    CropService.ɵfac = function CropService_Factory(t) {
      return new (t || CropService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CropService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CropService,
      factory: CropService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CropService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var cropPredictions = {
            crop1: 'Maize',
            crop2: 'Sunflower',
            crop3: 'Ragi'
          };
          var modelRun = {
            result: 'SUCCESS'
          };
          return {
            predict: cropPredictions,
            train: modelRun
          };
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
      return new (t || InMemoryDataService)();
    };

    InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InMemoryDataService,
      factory: InMemoryDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 47,
      vars: 0,
      consts: [[1, "container", "px-0", "pb-3"], [1, "row", "px-0"], [1, "col-12", "jumbotron", "mx-0", "mt-0", "shadow-sm"], [1, "row", "d-flex"], [1, "row", "col-12", "col-lg-11", "cards-team", "d-flex", "mx-auto", "justify-content-between", "align-items-center"], [1, "person", "col-12", "col-md-6", "d-flex", "flex-column", "align-items-center", "p-3"], [1, "touch", "d-flex", "align-items-center"], ["role", "button", "target", "_blank", "href", "http://www.linkedin.com/in/santhoshvenkateswaran/", 1, "btn", "btn-dark", "mr-3"], [1, "fa", "fa-linkedin"], ["src", "assets/team/Santhosh.jpg", "alt", "Santhosh-img", "href", "mailto:santhoshs1998@gmail.com?subject=AGGROW%20reg", 1, "rounded-circle", "mb-3", "shadow"], ["role", "button", "href", "mailto:santhoshs1998@gmail.com?subject=AGGROW%20reg", 1, "btn", "btn-dark", "ml-3"], [1, "fa", "fa-envelope"], [1, "text-center"], ["role", "button", "target", "_blank", "href", "https://www.linkedin.com/in/sandhiyaa-b-y-15636a154/", 1, "btn", "btn-dark", "mr-3"], ["src", "assets/team/Sandhya.jpg", "alt", "Sandhya-img", "href", "mailto:sandhiyaabalu@gmail.com?subject=AGGROW%20reg", 1, "rounded-circle", "mb-3", "shadow"], ["role", "button", "href", "mailto:sandhiyaabalu@gmail.com?subject=AGGROW%20reg", 1, "btn", "btn-dark", "ml-3"], [1, "col-12", "col-lg-9", "text-center", "mt-5", "mx-auto"], [1, "jumbotron", "m-0", "text-justify", "py-3", "px-5"], [1, "text-dark", "m-0", "p-0"], [1, "col-12", "col-lg-9", "cards-team", "my-5", "mx-auto"], [1, "person", "col-12", "col-lg-10", "d-flex", "flex-column", "flex-lg-row", "justify-content-center", "align-items-center", "mt-5", "mx-auto", "p-3"], [1, "text-right"], ["src", "assets/team/Anupama.jpg", 1, "rounded-circle", "mx-auto", "mx-lg-3", "my-3", "my-lg-auto"], [1, "text-center", "text-lg-left"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Who We Are");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Together, we engineer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Santhosh Venkateswaran S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "B. Tech Software, SRM IST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sandhiyaa B Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "B. Tech Software, SRM IST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " We are two software engineering undergrads, from SRM IST KTR, making this project that would directly be useful to the society. Considering the agricultural situation in our country, more focus and innovation is imperative for this industry. This needs to be done with quality knowledge and resources. This project was one such initiative, as we had the time, guidance and resources to make a system that would be of technological assistance to the biggest economical sector of this country.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Our Guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Anupama C G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Assistant Professor, SRM IST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: #1fa67a !important;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #1b926c !important;\n}\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 56px);\n  height: 100%;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 0;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1fa67a;\n  font-size: 4rem;\n}\n.jumbotron[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1fa67a;\n}\n.cards-team[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n}\n.touch[_ngcontent-%COMP%]   .btn-dark[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.touch[_ngcontent-%COMP%]:hover   .btn-dark[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.5s ease-in-out;\n}\n.touch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaC9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9hZ2dyb3cvc3JjL2Fzc2V0cy90aGVtZS5zY3NzIiwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudGhvc2gvRGVza3RvcC91bnRpdGxlZCBmb2xkZXIvYWdncm93L3NyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0NBQUE7QUNISjtBRElJO0VBQ0ksb0NBQUE7QUNGUjtBQ0hBO0VBRUksOEJBQUE7RUFDQSxZQUFBO0FES0o7QUNGQTtFQVNJLGtCQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ05JO0VBQ0ksY0ZWSTtFRVdKLGVBQUE7QURRUjtBQ05JO0VBQ0ksZUFBQTtFQUNBLGNGZkk7QUN1Qlo7QUNESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FESVI7QUNDSTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FEQ1I7QUNHUTtFQUVJLFVBQUE7RUFDQSxnQ0FBQTtBREZaO0FDS0k7RUFDSSxlQUFBO0FESFIiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlX2dyZWVuOiAjMWZhNjdhO1xuJGFub3RoZXJfZ3JlZW46ICMxYjkyNmM7XG5cblxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhNjdhICFpbXBvcnRhbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjkyNmMgIWltcG9ydGFudDtcbiAgICB9XG59IiwiLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmYTY3YSAhaW1wb3J0YW50O1xufVxuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOTI2YyAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uanVtYm90cm9uIGgxIHtcbiAgY29sb3I6ICMxZmE2N2E7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5qdW1ib3Ryb24gcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxZmE2N2E7XG59XG5cbi5jYXJkcy10ZWFtIGltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnRvdWNoIC5idG4tZGFyayB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udG91Y2g6aG92ZXIgLmJ0bi1kYXJrIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udG91Y2ggaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aGVtZS5zY3NzJztcblxuLmNvbnRhaW5lciB7XG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICR0aGVfZ3JlZW47XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICR0aGVfZ3JlZW47XG4gICAgfVxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uY2FyZHMtdGVhbSB7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cblxuLnRvdWNoIHtcbiAgICAuYnRuLWRhcmsge1xuICAgICAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcblxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmJ0bi1kYXJrIHtcbiAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseURL: 'api/',
      useMockServer: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/santhosh/Desktop/untitled folder/aggrow/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!*************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/moment/locale sync ^\.\/.*$ ***!
    \*************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "../../node_modules/moment/locale/af.js",
      "./af.js": "../../node_modules/moment/locale/af.js",
      "./ar": "../../node_modules/moment/locale/ar.js",
      "./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
      "./ar.js": "../../node_modules/moment/locale/ar.js",
      "./az": "../../node_modules/moment/locale/az.js",
      "./az.js": "../../node_modules/moment/locale/az.js",
      "./be": "../../node_modules/moment/locale/be.js",
      "./be.js": "../../node_modules/moment/locale/be.js",
      "./bg": "../../node_modules/moment/locale/bg.js",
      "./bg.js": "../../node_modules/moment/locale/bg.js",
      "./bm": "../../node_modules/moment/locale/bm.js",
      "./bm.js": "../../node_modules/moment/locale/bm.js",
      "./bn": "../../node_modules/moment/locale/bn.js",
      "./bn.js": "../../node_modules/moment/locale/bn.js",
      "./bo": "../../node_modules/moment/locale/bo.js",
      "./bo.js": "../../node_modules/moment/locale/bo.js",
      "./br": "../../node_modules/moment/locale/br.js",
      "./br.js": "../../node_modules/moment/locale/br.js",
      "./bs": "../../node_modules/moment/locale/bs.js",
      "./bs.js": "../../node_modules/moment/locale/bs.js",
      "./ca": "../../node_modules/moment/locale/ca.js",
      "./ca.js": "../../node_modules/moment/locale/ca.js",
      "./cs": "../../node_modules/moment/locale/cs.js",
      "./cs.js": "../../node_modules/moment/locale/cs.js",
      "./cv": "../../node_modules/moment/locale/cv.js",
      "./cv.js": "../../node_modules/moment/locale/cv.js",
      "./cy": "../../node_modules/moment/locale/cy.js",
      "./cy.js": "../../node_modules/moment/locale/cy.js",
      "./da": "../../node_modules/moment/locale/da.js",
      "./da.js": "../../node_modules/moment/locale/da.js",
      "./de": "../../node_modules/moment/locale/de.js",
      "./de-at": "../../node_modules/moment/locale/de-at.js",
      "./de-at.js": "../../node_modules/moment/locale/de-at.js",
      "./de-ch": "../../node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
      "./de.js": "../../node_modules/moment/locale/de.js",
      "./dv": "../../node_modules/moment/locale/dv.js",
      "./dv.js": "../../node_modules/moment/locale/dv.js",
      "./el": "../../node_modules/moment/locale/el.js",
      "./el.js": "../../node_modules/moment/locale/el.js",
      "./en-au": "../../node_modules/moment/locale/en-au.js",
      "./en-au.js": "../../node_modules/moment/locale/en-au.js",
      "./en-ca": "../../node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
      "./en-gb": "../../node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
      "./en-ie": "../../node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
      "./en-il": "../../node_modules/moment/locale/en-il.js",
      "./en-il.js": "../../node_modules/moment/locale/en-il.js",
      "./en-nz": "../../node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
      "./eo": "../../node_modules/moment/locale/eo.js",
      "./eo.js": "../../node_modules/moment/locale/eo.js",
      "./es": "../../node_modules/moment/locale/es.js",
      "./es-do": "../../node_modules/moment/locale/es-do.js",
      "./es-do.js": "../../node_modules/moment/locale/es-do.js",
      "./es-us": "../../node_modules/moment/locale/es-us.js",
      "./es-us.js": "../../node_modules/moment/locale/es-us.js",
      "./es.js": "../../node_modules/moment/locale/es.js",
      "./et": "../../node_modules/moment/locale/et.js",
      "./et.js": "../../node_modules/moment/locale/et.js",
      "./eu": "../../node_modules/moment/locale/eu.js",
      "./eu.js": "../../node_modules/moment/locale/eu.js",
      "./fa": "../../node_modules/moment/locale/fa.js",
      "./fa.js": "../../node_modules/moment/locale/fa.js",
      "./fi": "../../node_modules/moment/locale/fi.js",
      "./fi.js": "../../node_modules/moment/locale/fi.js",
      "./fo": "../../node_modules/moment/locale/fo.js",
      "./fo.js": "../../node_modules/moment/locale/fo.js",
      "./fr": "../../node_modules/moment/locale/fr.js",
      "./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
      "./fr.js": "../../node_modules/moment/locale/fr.js",
      "./fy": "../../node_modules/moment/locale/fy.js",
      "./fy.js": "../../node_modules/moment/locale/fy.js",
      "./gd": "../../node_modules/moment/locale/gd.js",
      "./gd.js": "../../node_modules/moment/locale/gd.js",
      "./gl": "../../node_modules/moment/locale/gl.js",
      "./gl.js": "../../node_modules/moment/locale/gl.js",
      "./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
      "./gu": "../../node_modules/moment/locale/gu.js",
      "./gu.js": "../../node_modules/moment/locale/gu.js",
      "./he": "../../node_modules/moment/locale/he.js",
      "./he.js": "../../node_modules/moment/locale/he.js",
      "./hi": "../../node_modules/moment/locale/hi.js",
      "./hi.js": "../../node_modules/moment/locale/hi.js",
      "./hr": "../../node_modules/moment/locale/hr.js",
      "./hr.js": "../../node_modules/moment/locale/hr.js",
      "./hu": "../../node_modules/moment/locale/hu.js",
      "./hu.js": "../../node_modules/moment/locale/hu.js",
      "./hy-am": "../../node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
      "./id": "../../node_modules/moment/locale/id.js",
      "./id.js": "../../node_modules/moment/locale/id.js",
      "./is": "../../node_modules/moment/locale/is.js",
      "./is.js": "../../node_modules/moment/locale/is.js",
      "./it": "../../node_modules/moment/locale/it.js",
      "./it.js": "../../node_modules/moment/locale/it.js",
      "./ja": "../../node_modules/moment/locale/ja.js",
      "./ja.js": "../../node_modules/moment/locale/ja.js",
      "./jv": "../../node_modules/moment/locale/jv.js",
      "./jv.js": "../../node_modules/moment/locale/jv.js",
      "./ka": "../../node_modules/moment/locale/ka.js",
      "./ka.js": "../../node_modules/moment/locale/ka.js",
      "./kk": "../../node_modules/moment/locale/kk.js",
      "./kk.js": "../../node_modules/moment/locale/kk.js",
      "./km": "../../node_modules/moment/locale/km.js",
      "./km.js": "../../node_modules/moment/locale/km.js",
      "./kn": "../../node_modules/moment/locale/kn.js",
      "./kn.js": "../../node_modules/moment/locale/kn.js",
      "./ko": "../../node_modules/moment/locale/ko.js",
      "./ko.js": "../../node_modules/moment/locale/ko.js",
      "./ky": "../../node_modules/moment/locale/ky.js",
      "./ky.js": "../../node_modules/moment/locale/ky.js",
      "./lb": "../../node_modules/moment/locale/lb.js",
      "./lb.js": "../../node_modules/moment/locale/lb.js",
      "./lo": "../../node_modules/moment/locale/lo.js",
      "./lo.js": "../../node_modules/moment/locale/lo.js",
      "./lt": "../../node_modules/moment/locale/lt.js",
      "./lt.js": "../../node_modules/moment/locale/lt.js",
      "./lv": "../../node_modules/moment/locale/lv.js",
      "./lv.js": "../../node_modules/moment/locale/lv.js",
      "./me": "../../node_modules/moment/locale/me.js",
      "./me.js": "../../node_modules/moment/locale/me.js",
      "./mi": "../../node_modules/moment/locale/mi.js",
      "./mi.js": "../../node_modules/moment/locale/mi.js",
      "./mk": "../../node_modules/moment/locale/mk.js",
      "./mk.js": "../../node_modules/moment/locale/mk.js",
      "./ml": "../../node_modules/moment/locale/ml.js",
      "./ml.js": "../../node_modules/moment/locale/ml.js",
      "./mn": "../../node_modules/moment/locale/mn.js",
      "./mn.js": "../../node_modules/moment/locale/mn.js",
      "./mr": "../../node_modules/moment/locale/mr.js",
      "./mr.js": "../../node_modules/moment/locale/mr.js",
      "./ms": "../../node_modules/moment/locale/ms.js",
      "./ms-my": "../../node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
      "./ms.js": "../../node_modules/moment/locale/ms.js",
      "./mt": "../../node_modules/moment/locale/mt.js",
      "./mt.js": "../../node_modules/moment/locale/mt.js",
      "./my": "../../node_modules/moment/locale/my.js",
      "./my.js": "../../node_modules/moment/locale/my.js",
      "./nb": "../../node_modules/moment/locale/nb.js",
      "./nb.js": "../../node_modules/moment/locale/nb.js",
      "./ne": "../../node_modules/moment/locale/ne.js",
      "./ne.js": "../../node_modules/moment/locale/ne.js",
      "./nl": "../../node_modules/moment/locale/nl.js",
      "./nl-be": "../../node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
      "./nl.js": "../../node_modules/moment/locale/nl.js",
      "./nn": "../../node_modules/moment/locale/nn.js",
      "./nn.js": "../../node_modules/moment/locale/nn.js",
      "./pa-in": "../../node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
      "./pl": "../../node_modules/moment/locale/pl.js",
      "./pl.js": "../../node_modules/moment/locale/pl.js",
      "./pt": "../../node_modules/moment/locale/pt.js",
      "./pt-br": "../../node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
      "./pt.js": "../../node_modules/moment/locale/pt.js",
      "./ro": "../../node_modules/moment/locale/ro.js",
      "./ro.js": "../../node_modules/moment/locale/ro.js",
      "./ru": "../../node_modules/moment/locale/ru.js",
      "./ru.js": "../../node_modules/moment/locale/ru.js",
      "./sd": "../../node_modules/moment/locale/sd.js",
      "./sd.js": "../../node_modules/moment/locale/sd.js",
      "./se": "../../node_modules/moment/locale/se.js",
      "./se.js": "../../node_modules/moment/locale/se.js",
      "./si": "../../node_modules/moment/locale/si.js",
      "./si.js": "../../node_modules/moment/locale/si.js",
      "./sk": "../../node_modules/moment/locale/sk.js",
      "./sk.js": "../../node_modules/moment/locale/sk.js",
      "./sl": "../../node_modules/moment/locale/sl.js",
      "./sl.js": "../../node_modules/moment/locale/sl.js",
      "./sq": "../../node_modules/moment/locale/sq.js",
      "./sq.js": "../../node_modules/moment/locale/sq.js",
      "./sr": "../../node_modules/moment/locale/sr.js",
      "./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "../../node_modules/moment/locale/sr.js",
      "./ss": "../../node_modules/moment/locale/ss.js",
      "./ss.js": "../../node_modules/moment/locale/ss.js",
      "./sv": "../../node_modules/moment/locale/sv.js",
      "./sv.js": "../../node_modules/moment/locale/sv.js",
      "./sw": "../../node_modules/moment/locale/sw.js",
      "./sw.js": "../../node_modules/moment/locale/sw.js",
      "./ta": "../../node_modules/moment/locale/ta.js",
      "./ta.js": "../../node_modules/moment/locale/ta.js",
      "./te": "../../node_modules/moment/locale/te.js",
      "./te.js": "../../node_modules/moment/locale/te.js",
      "./tet": "../../node_modules/moment/locale/tet.js",
      "./tet.js": "../../node_modules/moment/locale/tet.js",
      "./tg": "../../node_modules/moment/locale/tg.js",
      "./tg.js": "../../node_modules/moment/locale/tg.js",
      "./th": "../../node_modules/moment/locale/th.js",
      "./th.js": "../../node_modules/moment/locale/th.js",
      "./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
      "./tlh": "../../node_modules/moment/locale/tlh.js",
      "./tlh.js": "../../node_modules/moment/locale/tlh.js",
      "./tr": "../../node_modules/moment/locale/tr.js",
      "./tr.js": "../../node_modules/moment/locale/tr.js",
      "./tzl": "../../node_modules/moment/locale/tzl.js",
      "./tzl.js": "../../node_modules/moment/locale/tzl.js",
      "./tzm": "../../node_modules/moment/locale/tzm.js",
      "./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "../../node_modules/moment/locale/tzm.js",
      "./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
      "./uk": "../../node_modules/moment/locale/uk.js",
      "./uk.js": "../../node_modules/moment/locale/uk.js",
      "./ur": "../../node_modules/moment/locale/ur.js",
      "./ur.js": "../../node_modules/moment/locale/ur.js",
      "./uz": "../../node_modules/moment/locale/uz.js",
      "./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
      "./uz.js": "../../node_modules/moment/locale/uz.js",
      "./vi": "../../node_modules/moment/locale/vi.js",
      "./vi.js": "../../node_modules/moment/locale/vi.js",
      "./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
      "./yo": "../../node_modules/moment/locale/yo.js",
      "./yo.js": "../../node_modules/moment/locale/yo.js",
      "./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/app.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/app.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"mat-elevation-z8\" style=\"position: relative; z-index: 2;\">\n  <mat-toolbar-row\n      fxLayout=\"row wrap\"\n      fxLayoutAlign=\"space-between center\"\n      style=\"height: auto !important; min-height: 80px;\"\n  >\n    <div style=\"width: 330px; display: flex; align-items: center;\">\n        <div class=\"triangle\">\n            <span matTooltipClass=\"tooltip-beta-red\" matTooltip=\"Este es un producto BETA configurado con propósitos de prueba.\n            Algunas características pueden no funcionar correctamente.\"> <strong> BETA </strong> </span>\n        </div>\n        <a mat-button [routerLink]=\"['/']\" style=\"    min-width: fit-content; display: flex; align-items: center;\">\n            <img src=\"/assets/icons/mes.svg\" alt=\"MES\" style=\"height: 50px; margin-right: 6px;\">\n            Sceiba - Registro de Revistas Científicas del MES\n        </a>\n    </div>\n\n    <div\n        class=\"center-elements\"\n        appearance=\"legacy\"\n        aria-label=\"Menu de Inicio\"\n        fxLayout=\"row wrap\"\n        fxLayoutAlign=\"center\"\n        fxLayoutGap=\"15px\"\n    >\n\n      <button mat-icon-button [matMenuTriggerFor]=\"menuApps\" matTooltip=\"Aplicaciones\">\n        <mat-icon>apps</mat-icon>\n      </button>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"menuHelp\" matTooltip=\"Ayuda\">\n          <mat-icon class=\"mat-18\">help</mat-icon>\n      </button>\n\n      <button mat-icon-button *ngIf=\"userProfile\" [matMenuTriggerFor]=\"menuUser\" matTooltip=\"{{ userProfile.user.email }}\">\n        <mat-icon class=\"mat-18\">person_pin</mat-icon>\n      </button>\n\n      <toco-authentication [oauthInfo]=\"oauthInfo\" [isButtonLogin]=\"'true'\" [isButtonLoginIcon]=\"'true'\"\n        [isButtonLoginText]=\"'Autenticarse'\" *ngIf=\"!userProfile\">\n      </toco-authentication>\n\n    </div>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n\n\n<mat-toolbar\n  class=\"mat-elevation-z6\"\n  color=\"primary\"\n  style=\"position: relative\"\n>\n  <!-- <mat-toolbar-row\n    fxLayout=\"row wrap\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"space-between center\"\n    style=\"height: auto !important; min-height: 56px\"\n  >\n    <a class=\"color-white\" [routerLink]=\"['/']\" style=\"white-space: normal\">\n      <img src=\"assets/images/logo_mes.png\" alt=\"MES\" width=\"140\">\n      Registro de Revistas Científicas del MES\n    </a>\n    <div\n      appearance=\"legacy\"\n      aria-label=\"Menu de Inicio\"\n      fxLayout=\"row wrap\"\n      fxLayoutGap=\"15px\"\n    >\n      <button\n        mat-icon-button\n        [matMenuTriggerFor]=\"menuNetwork\"\n        matTooltip=\"Redes Sociales\"\n      >\n        <mat-icon>share</mat-icon>\n      </button>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"menuHelp\" matTooltip=\"Ayuda\">\n        <mat-icon>help</mat-icon>\n      </button>\n\n      <toco-notification-button\n        *ngIf=\"userProfile\"\n        [color]=\"'primary'\"\n        [buttonType]=\"'mat-icon-button'\"\n      ></toco-notification-button>\n\n      <toco-authentication\n        [oauthInfo]=\"oauthInfo\"\n        [isButtonLogin]=\"'true'\"\n        [isButtonLoginIcon]=\"'true'\"\n        [isButtonLoginText]=\"'Autenticarse'\"\n        *ngIf=\"!userProfile\"\n      >\n      </toco-authentication>\n\n      <button\n        mat-icon-button\n        *ngIf=\"userProfile\"\n        [matMenuTriggerFor]=\"menu\"\n        matTooltip=\"{{ user }}\"\n      >\n        <mat-icon>person_pin</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row> -->\n\n  <mat-toolbar-row\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"center\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"center center\"\n    style=\"height: auto !important; min-height: 56px\"\n  >\n    <a mat-button [routerLink]=\"['/']\" value=\"Inicio\">Inicio</a>\n    <!-- <a mat-button [routerLink]=\"['/about']\" value=\"Acerca de\">Acerca de</a> -->\n    <a mat-button [routerLink]=\"['/directory']\" value=\"Catálogo\">Directorio</a>\n    <a mat-button [routerLink]=\"['/']\" value=\"Reportes y estadísticas\"\n      >Reportes y estadísticas</a\n    >\n    <a\n      mat-button\n      *ngIf=\"userProfile\"\n      [routerLink]=\"['/sources/new/journal']\"\n      value=\"Incluye tu revista\"\n      >Incluye tu revista</a\n    >\n    <!-- <toco-authentication\n      [oauthInfo]=\"oauthInfo\"\n      [isButtonLogin]=\"'true'\"\n      [isButtonLoginIcon]=\"'true'\"\n      [isButtonLoginText]=\"'Autenticarse'\"\n      *ngIf=\"!userProfile\"\n    >\n    </toco-authentication> -->\n\n    <a *ngIf=\"userProfile\" mat-button [routerLink]=\"['/sources']\"> Mis Registros </a>\n    <!-- <a *ngIf=\"userProfile\" mat-button [routerLink]=\"['/sources','permissions']\"> Permisos </a> -->\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-menu #menuUser=\"matMenu\">\n  <a mat-menu-item [routerLink]=\"['/userprofile']\">\n    <mat-icon>account_circle</mat-icon>\n    Mi Cuenta\n  </a>\n  <button mat-menu-item (click)=\"logoff()\">\n    <mat-icon>lock</mat-icon>\n    Salir\n  </button>\n</mat-menu>\n\n<mat-menu #menuNetwork=\"matMenu\">\n  <a mat-menu-item href=\"https://www.facebook.com/CubaMES/\" target=\"_blank\">\n    <!-- <mat-icon>info</mat-icon> -->\n    Facebook\n  </a>\n  <a mat-menu-item href=\"https://twitter.com/CubaMES\" target=\"_blank\">\n    <!-- <mat-icon>question_answer</mat-icon> -->\n    Twitter\n  </a>\n</mat-menu>\n\n<mat-menu #menuHelp=\"matMenu\">\n  <!-- <a mat-menu-item [routerLink]=\"['/help']\">\n      <mat-icon>help_outline</mat-icon>\n      Ayuda\n  </a> -->\n  <a mat-menu-item [routerLink]=\"['/faq']\">\n    <mat-icon>question_answer</mat-icon>\n    FAQs\n  </a>\n  <a mat-menu-item [routerLink]=\"['/about']\">\n    <mat-icon>info</mat-icon>\n    Acerca de\n  </a>\n  <a mat-menu-item [routerLink]=\"['/contact']\">\n    <mat-icon>contacts</mat-icon>\n    Contactos\n  </a>\n</mat-menu>\n\n\n<mat-menu #menuApps=\"matMenu\">\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around center\">\n    <a href=\"https://sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Sceiba\">\n      <img class=\"app-featured\" src=\"/assets/icons/sceiba.svg\" alt=\"Sceiba\" style=\"width: 55px; height: 55px;\">\n    </a>\n    <mat-divider class=\"w-90\"></mat-divider>\n\n    <a href=\"https://catalogo.sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Catálogo\">\n      <img src=\"/assets/icons/catalog.svg\" alt=\"Catálogo\" style=\"width: 55px; height: 55px;\">\n    </a>\n    <a href=\"https://orgs.sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Organizaciones\">\n      <img src=\"/assets/icons/organizacion.svg\" alt=\"Organizaciones\" style=\"width: 55px; height: 55px;\">\n    </a>\n    <a href=\"https://vocs.sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Vocabularios\">\n      <img src=\"/assets/icons/vocabs.svg\" alt=\"Vocabularios\" style=\"width: 55px; height: 55px;\">\n    </a>\n    <mat-divider class=\"w-90\"></mat-divider>\n    <a href=\"https://sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Registro de Revistas Científicas del MES\">\n      <img class=\"app-featured\" src=\"/assets/icons/mes.svg\" alt=\"Registro de Revistas Científicas del MES\"\n        style=\"width: 55px; height: 55px;\">\n    </a>\n  </div>\n</mat-menu>\n\n\n<toco-progress [loading]=\"loading\"> </toco-progress>\n\n<router-outlet></router-outlet>\n\n<div [ngStyle]=\"{ 'margin-top': '2em' }\">\n  <toco-footer\n    [sites]=\"footerSites\"\n    [information]=\"footerInformation\"\n  ></toco-footer>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/catalog/catalog.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/catalog/catalog.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppCatalogCatalogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div infiniteScroll [infiniteScrollDistance]=\"0\" [infiniteScrollUpDistance]=\"0.5\" [infiniteScrollThrottle]=\"10\" (scrolled)=\"onScrollDown()\"\n  (scrolledUp)=\"onScrollUp()\"> -->\n\n<!-- <toco-page-header [info]=\"['Catálogo de Revistas Científicas Cubanas']\">\n    </toco-page-header> -->\n\n<mat-toolbar>\n  <mat-toolbar-row fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n    <h1>Directorio</h1>\n\n    <div fxLayoutAlign=\"end center\" fxLayout=\"row\">\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>view_quilt</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"changeLayoutPosition(0)\">\n          <mat-icon>arrow_forward</mat-icon>\n          <span>{{ layoutPosition[0].name }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLayoutPosition(1)\">\n          <mat-icon>arrow_back</mat-icon>\n          <span>{{ layoutPosition[1].name }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLayoutPosition(2)\">\n          <mat-icon>arrow_upward</mat-icon>\n          <span>{{ layoutPosition[2].name }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLayoutPosition(3)\">\n          <mat-icon>arrow_downward</mat-icon>\n          <span>{{ layoutPosition[3].name }}</span>\n        </button>\n      </mat-menu>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<toco-progress\n  [loading]=\"!topMainOrganization\"\n  [position]=\"'absolute'\"\n></toco-progress>\n\n<div\n  fxLayout=\"{{ currentlayout.layout }}\"\n  fxLayout.xs=\"column nowrap\"\n  fxLayoutAlign=\"{{ currentlayout.aling }}\"\n  *ngIf=\"topMainOrganization\"\n>\n  <catalog-search-filters\n    fxLayout=\"row wrap\"\n    fxLayout.xs=\"column wrap\"\n    fxLayoutAlign=\"start center\"\n    fxLayoutAlign.xs=\"center center\"\n    fxLayoutGap=\"1em\"\n    [params]=\"filtersParams\"\n    (paramsChange)=\"filtersChange($event)\"\n    [topMainOrganization]=\"topMainOrganization\"\n  >\n  </catalog-search-filters>\n  <!-- fxFlex=\"{{ currentlayout.width }}\" -->\n\n  <div class=\"mat-elevation-z8 width-90 margin1em\">\n    <toco-progress\n      [loading]=\"isLoading()\"\n      [position]=\"'absolute'\"\n    ></toco-progress>\n    <table\n      *ngIf=\"!isEmpty()\"\n      mat-table\n      [dataSource]=\"dataSource\"\n      multiTemplateDataRows\n    >\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Titulo</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.data.title }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"rnps\">\n        <th mat-header-cell *matHeaderCellDef>RNPS</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.data.rnps.p }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"p-issn\">\n        <th mat-header-cell *matHeaderCellDef>P-ISSN</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.data.issn.p }}</td>\n      </ng-container>\n      <!-- <ng-container matColumnDef=\"url\">\n        <th mat-header-cell *matHeaderCellDef>URL</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.data.url }}</td>\n      </ng-container> -->\n\n      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n      <ng-container matColumnDef=\"expandedDetail\">\n        <td\n          mat-cell\n          *matCellDef=\"let element\"\n          [attr.colspan]=\"columnsToDisplay.length\"\n        >\n          <div\n            class=\"example-element-detail\"\n            [@detailExpand]=\"\n              element == expandedElement ? 'expanded' : 'collapsed'\n            \"\n          >\n            <div\n              class=\"example-element-description e2e-inner-html-bound\"\n              [innerHTML]=\"element.data.description\"\n            ></div>\n            <!-- <div><mat-label>{{ element.data.url }}</mat-label></div> -->\n\n            <div\n              class=\"example-element-description\"\n              fxLayout=\"row\"\n              fxLayoutAlign=\"center end\"\n            >\n              <!-- <button\n                mat-stroked-button\n                color=\"primary\"\n                (click)=\"viewJournal(element.id)\"\n              >\n                Ver\n              </button> -->\n              <a\n                mat-stroked-button\n                color=\"primary\"\n                [routerLink]=\"['/directory', element.id]\"\n                style=\"white-space: normal\"\n                >Ir</a\n              >\n            </div>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let element; columns: columnsToDisplay\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = element\"\n      ></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let row; columns: ['expandedDetail']\"\n        class=\"example-detail-row\"\n      ></tr>\n    </table>\n\n    <h1 *ngIf=\"isEmpty()\">No hay Información para Mostrar</h1>\n\n    <mat-paginator\n      [length]=\"length\"\n      [pageSize]=\"pageSize\"\n      [pageIndex]=\"pageIndex\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"pageChange($event)\"\n    >\n    </mat-paginator>\n  </div>\n</div>\n\n<!--\n      </mat-drawer-content>\n\n    </mat-drawer-container> -->\n\n<!-- </div> -->\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/catalog/filters/filters.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/catalog/filters/filters.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppCatalogFiltersFiltersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"formGroup\">\n  <container-panel [content]=\"filterPanel\"> </container-panel>\n\n  <!-- <form [formGroup]=\"formGroup\">\n    <toco-form-container\n      [panelsContent]=\"panels\"\n      [useAccordion]=\"true\"\n      fxLayout=\"row\"\n      [deleteValuesAfterAction]=\"false\"\n      [formGroup]=\"formGroup\"\n    ></toco-form-container>\n  </form> -->\n</ng-container>\n\n<toco-progress [loading]=\"!formGroup\" [position]=\"'absolute'\"></toco-progress>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/home/home.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/home/home.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress\n  [loading]=\"!stats && !error\"\n  [position]=\"'absolute'\"\n></toco-progress>\n<ng-container *ngIf=\"error\">\n  <h1>ERROR</h1>\n</ng-container>\n\n<ng-container *ngIf=\"stats\">\n  <div class=\"m-1\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <mat-card class=\"w-60\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n      <img\n        fxFlex=\"2 1 calc(80% - 100px)\"\n        height=\"250\"\n        matCardImage\n        style=\"margin-bottom: -16px; object-fit: cover\"\n        src=\"assets/images/photo-of-people-having-meeting.jpg\"\n      />\n\n      <mat-card-content fxLayout=\"column\" style=\"padding: 2em\">\n        <h2>{{ stats.sources_count }} Revistas</h2>\n        <h2>{{ records }} Artículos</h2>\n        <h2 *ngIf=\"stats.org.metadata.relationships\">\n          {{ stats.org.metadata.relationships.length }} Instituciones\n        </h2>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <section\n    fxLayout=\"row wrap\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"2em\"\n    style=\"padding: 1em\"\n  >\n  <mat-card class=\"w-card\">\n    <mat-card-title-group>\n      <mat-card-title>Tipo de Revistas</mat-card-title>\n      <!-- <mat-card-subtitle>Subtitle</mat-card-subtitle> -->\n      <!-- <img matCardImage src=\"Side image\"> -->\n    </mat-card-title-group>\n    <!-- <img matCardImage src=\"Card wide image source\"> -->\n    <mat-card-content>\n      <mat-nav-list dense>\n        <p *ngFor=\"let item of stats.source_types\">\n          <a\n            mat-list-item\n            *ngIf=\"!item.source_count || item.source_count == 0\"\n            [routerLink]=\"['/directory']\"\n            [queryParams]=\"{ source_type: item.source_type }\"\n          >\n            {{ item.label }}\n          </a>\n          <a\n            mat-list-item\n            *ngIf=\"item.source_count > 0\"\n            [routerLink]=\"['/directory']\"\n            [queryParams]=\"{ source_type: item.source_type }\"\n          >\n            {{ item.label }} - {{ item.source_count }}\n          </a>\n        </p>\n        <!-- <a mat-list-item [routerLink]=\"['/directory']\" [queryParams]=\"{source_type: 'POPULARIZATION'}\">Revistas Dibulgación Científicas</a>\n        <a mat-list-item [routerLink]=\"['/directory']\" [queryParams]=\"{source_type: 'JOURNAL'}\">Revistas Científicas</a> -->\n      </mat-nav-list>\n    </mat-card-content>\n  </mat-card>\n    <mat-card class=\"w-card\" [ngStyle]=\"{ 'min-height': '160px' }\">\n      <mat-card-title-group>\n        <mat-card-title>Últimos Ingresos</mat-card-title>\n      </mat-card-title-group>\n      <mat-card-content>\n        <mat-nav-list dense>\n          <a\n            mat-list-item\n            *ngFor=\"let source of stats.last_sources\"\n            (click)=\"viewJournal(source.id)\"\n          >\n            {{ source.name }}\n          </a>\n          <!-- <a mat-list-item href=\"\">Revista Cubana de Ciencia de la Información</a>\n        <a mat-list-item href=\"\">Revista 16 de Abril</a> -->\n        </mat-nav-list>\n      </mat-card-content>\n    </mat-card>\n  </section>\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/editor/editor.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/editor/editor.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesEditorEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-form-field>\n  <input matInput (keyup)=\"editorApplyFilter($event.target.value)\" placeholder=\"Buscar nombre\">\n</mat-form-field>\n<table mat-table matSort [dataSource]=\"editorDataSource\" [ngStyle]=\"{'width.%': '100'}\">\n  <!-- Position Column -->\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Nombre</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"source_status\">\n    <th mat-header-cell *matHeaderCellDef>Estado</th>\n    <ng-container></ng-container>\n\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-label *ngIf=\"element.source_status=='APPROVED'\">Público</mat-label>\n      <mat-label *ngIf=\"element.source_status!='APPROVED'\">En Revisión</mat-label>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef>Acciones</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-icon-button [routerLink]=\"[element.id, 'view']\" aria-label=\"Editar\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <!-- <button mat-icon-button [routerLink]=\"[element.id, 'edit']\" aria-label=\"Editar detalles de la Revista\">\n        <mat-icon>edit</mat-icon>\n      </button> -->\n\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n\n<mat-paginator\n  #editorPaginator\n  [pageSizeOptions]=\"[5, 10, 20]\"\n  showFirstLastButtons\n  [length]=\"editorLength\"\n></mat-paginator>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/manager/manager.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/manager/manager.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesManagerManagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field>\n  <input\n    matInput\n    (keyup)=\"managerApplyFilter($event.target.value)\"\n    placeholder=\"Buscar nombre\"\n  />\n</mat-form-field>\n<table\n  mat-table\n  matSort\n  [dataSource]=\"managerDataSource\"\n  [ngStyle]=\"{ 'width.%': '100' }\"\n>\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Nombre</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"source_status\">\n    <th mat-header-cell *matHeaderCellDef>Estado</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-label *ngIf=\"element.source_status == 'APPROVED'\">Público</mat-label>\n      <mat-label *ngIf=\"element.source_status != 'APPROVED'\"\n        >En Revisión</mat-label\n      >\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef>Acciones</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <a\n        mat-icon-button\n        [routerLink]=\"[element.id, 'view']\"\n        aria-label=\"Editar\"\n        matTooltip=\"Editar\"\n      >\n        <mat-icon>edit</mat-icon>\n      </a>\n      <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(element)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n\n<mat-paginator\n  #managerPaginator\n  [pageSizeOptions]=\"[5, 10, 20]\"\n  showFirstLastButtons\n  [length]=\"managerLength\"\n></mat-paginator>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/mysources.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/mysources.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesMysourcesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-elevation-z8 width-90 margin1em\">\n  <toco-progress [loading]=\"loading\" [position]=\"'absolute'\"></toco-progress>\n\n  <mat-toolbar>\n    <mat-toolbar-row fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n      <h1>Mis Registros</h1>\n\n      <!-- <button\n        mat-icon-button\n        aria-label=\"Reset\"\n        *ngIf=\"!isStartProcess\"\n        matTooltip=\"Comenzar de nuevo\"\n        (click)=\"resetEdit()\"\n      >\n        <mat-icon>cached</mat-icon>\n      </button> -->\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <!-- *ngIf=\"asEditor && asEditor.length > 0\" -->\n\n\n<mat-tab-group>\n  <mat-tab label=\"Editor\" *ngIf=\"asEditor && asEditor.length > 0\">\n    <div class=\"mat-elevation-z8\">\n      <catalog-mysources-editor [asEditor]=\"asEditor\"></catalog-mysources-editor>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Gestor\" *ngIf=\"asManager && asManager.length > 0\">\n    <div class=\"mat-elevation-z8\">\n      <catalog-mysources-manager [asManager]=\"asManager\"></catalog-mysources-manager>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Términos\" *ngIf=\"isAdmin\">\n    <div class=\"mat-elevation-z8\">\n      <catalog-mysources-terms-admin></catalog-mysources-terms-admin>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Términos\" *ngIf=\"!isAdmin && terms && terms.length > 0\">\n    <div class=\"mat-elevation-z8\">\n      <catalog-mysources-terms [terms]=\"terms\"></catalog-mysources-terms>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Organizaciones\" *ngIf=\"organizations && organizations.length > 0\">\n    <div class=\"mat-elevation-z8\">\n      <catalog-mysources-organizations [organizations]=\"organizations\"></catalog-mysources-organizations>\n    </div>\n  </mat-tab>\n\n</mat-tab-group>\n\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/organizations/organizations.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/organizations/organizations.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesOrganizationsOrganizationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-org-tree-viewer\n  [organizations]=\"organizations\"\n  [orgRelationshipType]=\"'child'\"\n  [iconAction]=\"'vpn_key'\"\n  [labelAction]=\"'Permisos'\"\n  (action)=\"openPermission($event)\"\n>\n\n</toco-org-tree-viewer>\n\n<!-- <mat-tree\n  [dataSource]=\"dataSource\"\n  [treeControl]=\"treeControl\"\n>\n  <mat-tree-node\n    *matTreeNodeDef=\"let node\"\n    matTreeNodePadding\n  >\n    <button mat-icon-button disabled></button>\n    {{ node.item.metadata.name }}\n    <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(node.item)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n  </mat-tree-node>\n  <mat-tree-node\n    *matTreeNodeDef=\"let node; when: hasChild\"\n    matTreeNodePadding\n  >\n    <button\n      mat-icon-button\n      [attr.aria-label]=\"'toggle ' + node.filename\"\n      matTreeNodeToggle\n    >\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\n      </mat-icon>\n    </button>\n    {{ node.item.metadata.name }}\n    <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(node.item)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n    <mat-progress-bar\n      *ngIf=\"node.isLoading\"\n      mode=\"indeterminate\"\n      class=\"example-tree-progress-bar\"\n    ></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree> -->\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.html":
  /*!***************************************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.html ***!
    \***************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesPermissionOrganizationPermissionOrganizationPermissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card aria-label=\"Asignando permisos a un usuario sobre una organización\">\n  <mat-card-header>\n    <mat-card-title>{{ org.name }}</mat-card-title>\n    <mat-card-subtitle>{{ org.id }}</mat-card-subtitle>\n    <mat-card-subtitle>Permisos gestión sobre las fuentes clasificadas por esta organización</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of managers\">\n        {{ item.email }}\n        <button\n          mat-icon-button\n          aria-label=\"Eliminar\"\n          matTooltip=\"Eliminar\"\n          (click)=\"denyManager(item)\"\n        >\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n  <mat-card-actions>\n    <catalog-user-search (selectedUser)=\"selectedUser($event)\"></catalog-user-search>\n    <mat-chip *ngIf=\"user\">{{ user.email }}</mat-chip>\n\n    <button\n      *ngIf=\"user\"\n      mat-raised-button\n      color=\"warn\"\n      (click)=\"grantManager()\"\n    >\n      Conceder Permiso\n    </button>\n  </mat-card-actions>\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/source-permission/source-permission.component.html":
  /*!***************************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/source-permission/source-permission.component.html ***!
    \***************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesPermissionSourcePermissionSourcePermissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card aria-label=\"Asignando permisos a un usuario sobre una fuente\">\n  <mat-card-header>\n    <mat-card-title>{{ source.name }}</mat-card-title>\n    <mat-card-subtitle>{{ source.id }}</mat-card-subtitle>\n    <mat-card-subtitle>Permisos de edición y gestión</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header> Gestores </mat-expansion-panel-header>\n        <mat-list>\n          <mat-list-item *ngFor=\"let item of managers\">\n            {{ item.email }}\n            <button\n              mat-icon-button\n              aria-label=\"Eliminar\"\n              matTooltip=\"Eliminar\"\n              (click)=\"denyManager(item)\"\n            >\n              <mat-icon>delete</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header> Editores </mat-expansion-panel-header>\n        <mat-list>\n          <mat-list-item *ngFor=\"let item of editors\">\n            {{ item.email }}\n            <button\n              mat-icon-button\n              aria-label=\"Eliminar\"\n              matTooltip=\"Eliminar\"\n              (click)=\"denyEditor(item)\"\n            >\n              <mat-icon>delete</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-card-content>\n  <mat-card-actions>\n    <catalog-user-search (selectedUser)=\"selectedUser($event)\"></catalog-user-search>\n    <mat-chip *ngIf=\"user\">{{ user.email }}</mat-chip>\n\n    <button\n      *ngIf=\"user\"\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"grantEditor()\"\n    >\n      Permiso Edicion\n    </button>\n    <button\n      *ngIf=\"user\"\n      mat-raised-button\n      color=\"warn\"\n      (click)=\"grantManager()\"\n    >\n      Permiso Gestion\n    </button>\n  </mat-card-actions>\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/term-permission/term-permission.component.html":
  /*!***********************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/term-permission/term-permission.component.html ***!
    \***********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesPermissionTermPermissionTermPermissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card aria-label=\"Asignando permisos a un usuario sobre un término\">\n  <mat-card-header>\n    <mat-card-title>{{ term.description }}</mat-card-title>\n    <mat-card-subtitle>{{ term.uuid }}</mat-card-subtitle>\n    <mat-card-subtitle>Permisos gestión sobre las fuentes clasificadas por este término</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of managers\">\n        {{ item.email }}\n        <button\n          mat-icon-button\n          aria-label=\"Eliminar\"\n          matTooltip=\"Eliminar\"\n          (click)=\"denyManager(item)\"\n        >\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n  <mat-card-actions>\n    <catalog-user-search (selectedUser)=\"selectedUser($event)\"></catalog-user-search>\n    <mat-chip *ngIf=\"user\">{{ user.email }}</mat-chip>\n\n    <button\n      *ngIf=\"user\"\n      mat-raised-button\n      color=\"warn\"\n      (click)=\"grantManager()\"\n    >\n      Conceder Permiso\n    </button>\n  </mat-card-actions>\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/terms-admin/terms-admin.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/terms-admin/terms-admin.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesTermsAdminTermsAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-select\n  placeholder=\"Vocabularios\"\n  (selectionChange)=\"onVocabularyChange()\"\n  name=\"vocabularies\"\n  [(value)]=\"currentVocab\"\n>\n  <mat-option *ngFor=\"let item of vocabularies\" [value]=\"item.identifier\">\n    {{ item.human_name }}\n  </mat-option>\n</mat-select>\n\n<mat-tree\n  [dataSource]=\"dataSource\"\n  [treeControl]=\"treeControl\"\n  class=\"scrolleable\"\n>\n  <mat-tree-node\n    class=\"hover\"\n    *matTreeNodeDef=\"let node\"\n    matTreeNodeToggle\n    matTreeNodePadding\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\"\n    [ngStyle]=\"{ 'white-space': 'normal !important' }\"\n  >\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <button mat-icon-button disabled></button>\n      <mat-label>{{ node.name }}</mat-label>\n      <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(node)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n      <!-- <mat-checkbox\n        class=\"checklist-leaf-node\"\n        [checked]=\"checklistSelection.isSelected(node)\"\n        (change)=\"leafItemSelectionToggle(node)\"\n        matTooltip=\"{{ node.name }}\"\n        [ngStyle]=\"{ 'white-space': 'normal !important' }\"\n      >\n          {{ node.name }}\n      </mat-checkbox> -->\n    </div>\n  </mat-tree-node>\n\n  <mat-tree-node\n    class=\"hover\"\n    *matTreeNodeDef=\"let node; when: hasChild\"\n    matTreeNodePadding\n    [ngStyle]=\"{ 'white-space': 'normal !important' }\"\n  >\n    <button\n      mat-icon-button\n      matTreeNodeToggle\n      [attr.aria-label]=\"'toggle ' + node.name\"\n    >\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\n      </mat-icon>\n    </button>\n    <div class=\"item-width\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <mat-label>{{ node.name }}</mat-label>\n      <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(node)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n    </div>\n  </mat-tree-node>\n</mat-tree>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/terms/terms.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/terms/terms.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppMysourcesTermsTermsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tree\n  [dataSource]=\"dataSource\"\n  [treeControl]=\"treeControl\"\n  class=\"scrolleable\"\n>\n  <mat-tree-node\n    class=\"hover\"\n    *matTreeNodeDef=\"let node\"\n    matTreeNodeToggle\n    matTreeNodePadding\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\"\n    [ngStyle]=\"{ 'white-space': 'normal !important' }\"\n  >\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <button mat-icon-button disabled></button>\n      <mat-label>{{ node.name }}</mat-label>\n      <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(node)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n      <!-- <mat-checkbox\n        class=\"checklist-leaf-node\"\n        [checked]=\"checklistSelection.isSelected(node)\"\n        (change)=\"leafItemSelectionToggle(node)\"\n        matTooltip=\"{{ node.name }}\"\n        [ngStyle]=\"{ 'white-space': 'normal !important' }\"\n      >\n          {{ node.name }}\n      </mat-checkbox> -->\n    </div>\n  </mat-tree-node>\n\n  <mat-tree-node\n    class=\"hover\"\n    *matTreeNodeDef=\"let node; when: hasChild\"\n    matTreeNodePadding\n    [ngStyle]=\"{ 'white-space': 'normal !important' }\"\n  >\n    <button\n      mat-icon-button\n      matTreeNodeToggle\n      [attr.aria-label]=\"'toggle ' + node.name\"\n    >\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\n      </mat-icon>\n    </button>\n    <div class=\"item-width\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <mat-label>{{ node.name }}</mat-label>\n      <button\n        mat-icon-button\n        aria-label=\"Permisos\"\n        matTooltip=\"Permisos\"\n        (click)=\"openPermission(node)\"\n      >\n        <mat-icon>vpn_key</mat-icon>\n      </button>\n    </div>\n  </mat-tree-node>\n</mat-tree>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/journal-edit/journal-edit.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/journal-edit/journal-edit.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceEditJournalEditJournalEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress [loading]=\"loading\"> </toco-progress>\n\n\n<mat-card [ngStyle]=\"{ margin: '1em' }\">\n  <mat-card-header\n    *ngIf=\"showEditHeader\"\n    fxLayout=\"column wrap\"\n    fxLayoutAlign=\"start center\"\n  >\n    <div\n      fxLayout=\"row wrap\"\n      fxLayoutAlign=\"space-between center\"\n      [ngStyle]=\"{ width: '100%' }\"\n    >\n      <h2>\n        {{ pageTitle }}\n      </h2>\n      <button mat-stroked-button color=\"warn\" (click)=\"cancelStepper()\">\n        Cancelar\n      </button>\n    </div>\n    <mat-card-subtitle>{{ description }}</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n    <mat-horizontal-stepper labelPosition=\"end\" [linear]=\"true\" #stepper>\n      <mat-step *ngIf=\"identifiersPanel\" [stepControl]=\"identifiersFormGroup\">\n        <ng-template matStepLabel>Identificadores</ng-template>\n        <container-panel\n            [content]=\"identifiersPanel\"\n          >\n          </container-panel>\n        <!-- <form [formGroup]=\"identifiersFormGroup\">\n\n          <toco-form-container\n            #informationPanelContainer\n            [panelsContent]=\"identifiersPanel\"\n            [useAccordion]=\"false\"\n            fxLayout=\"row\"\n            [formGroup]=\"identifiersFormGroup\"\n            [deleteValuesAfterAction]=\"false\"\n          >\n          </toco-form-container>\n        </form> -->\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\">\n          <button mat-stroked-button color=\"primary\" matStepperNext>\n            Siguiente\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step *ngIf=\"informationPanel\" [stepControl]=\"informationFormGroup\">\n        <ng-template matStepLabel>Datos</ng-template>\n        <container-panel\n            [content]=\"informationPanel\"\n          >\n          </container-panel>\n          <!-- <form [formGroup]=\"informationFormGroup\">\n\n          <toco-form-container\n            #informationPanelContainer\n            [panelsContent]=\"informationPanel\"\n            [useAccordion]=\"false\"\n            fxLayout=\"row\"\n            [formGroup]=\"informationFormGroup\"\n            [deleteValuesAfterAction]=\"false\"\n          >\n          </toco-form-container>\n        </form> -->\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n          <button mat-stroked-button color=\"accent\" matStepperPrevious>\n            Atrás\n          </button>\n          <button mat-stroked-button color=\"primary\" matStepperNext>\n            Siguiente\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step\n      *ngIf=\"organizationFormGroup\"\n      [stepControl]=\"organizationFormGroup\"\n    >\n      <ng-template matStepLabel>Organizaciones</ng-template>\n      <h2>Organizaciones</h2>\n      <catalog-source-edit-organizations\n          [topMainOrganization]=\"topMainOrganization\"\n          [sourceData]=\"journalData\"\n        >\n        </catalog-source-edit-organizations>\n      <!-- <form [formGroup]=\"organizationFormGroup\">\n\n      </form> -->\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n        <button mat-stroked-button color=\"accent\" matStepperPrevious>\n          Atrás\n        </button>\n        <button mat-stroked-button color=\"primary\" matStepperNext>\n          Siguiente\n        </button>\n      </div>\n    </mat-step>\n\n\n      <mat-step *ngIf=\"indexesFormGroup\" [stepControl]=\"indexesFormGroup\">\n        <ng-template matStepLabel>Indizaciones</ng-template>\n        <h2>Indizaciones</h2>\n        <catalog-source-edit-indexes [sourceData]=\"journalData\"> </catalog-source-edit-indexes>\n\n        <div\n          *ngIf=\"showFinalStep\"\n          fxLayout=\"row wrap\"\n          fxLayoutAlign=\"space-between center\"\n        >\n          <button mat-stroked-button color=\"accent\" matStepperPrevious>\n            Atrás\n          </button>\n          <button\n            mat-stroked-button\n            color=\"primary\"\n            matStepperNext\n            (click)=\"indexerStepper()\"\n          >\n            Siguiente\n          </button>\n        </div>\n        <div\n          *ngIf=\"!showFinalStep\"\n          fxLayout=\"row wrap\"\n          fxLayoutAlign=\"space-between center\"\n        >\n          <button mat-stroked-button color=\"accent\" matStepperPrevious>\n            Atrás\n          </button>\n\n          <button mat-stroked-button color=\"primary\" (click)=\"finishStepper()\">\n            Aceptar\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step *ngIf=\"showFinalStep\">\n        <ng-template matStepLabel>Fin</ng-template>\n        <h3>Ha completado el formulario</h3>\n        <h4>\n          Antes de aceptar puede revisar nuevamente los valores que ha\n          introducido.\n        </h4>\n        <!-- <catalog-journal-view-info [journal]=\"journal\"></catalog-journal-view-info> -->\n        <container-panel\n            [content]=\"finalPanel\"\n          >\n          </container-panel>\n        <!-- <form [formGroup]=\"finalFormGroup\">\n\n          <toco-form-container\n            #indexPanelContainer\n            [panelsContent]=\"finalPanel\"\n            [useAccordion]=\"false\"\n            fxLayout=\"row\"\n            [formGroup]=\"finalFormGroup\"\n            [deleteValuesAfterAction]=\"false\"\n            [ngStyle]=\"{ width: '100%' }\"\n          >\n          </toco-form-container>\n        </form> -->\n\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n          <button mat-stroked-button color=\"accent\" matStepperPrevious>\n            Atrás\n          </button>\n\n          <button mat-stroked-button color=\"primary\" (click)=\"finishStepper()\">\n            Aceptar\n          </button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-edit.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-edit.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceEditSourceEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress [loading]=\"saving\"> </toco-progress>\n\n<ng-container *ngIf=\"source && sourceVersion\" [ngSwitch]=\"source.source_type\">\n  <mat-toolbar\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"space-between center\"\n    [ngStyle]=\"{\n      width: '100%',\n      height: 'auto',\n      padding: '16px',\n      'min-height': '56px'\n    }\"\n  >\n    <span [ngStyle]=\"{'white-space': 'normal'}\">\n      <ng-container *ngIf=\"sourceVersion.isNew; else elseTemplate\">\n        Nueva Fuente\n      </ng-container>\n      <ng-template #elseTemplate> Editando: {{ source.name }} </ng-template>\n    </span>\n    <button mat-stroked-button color=\"warn\" (click)=\"editCanceled()\">\n      Cancelar\n    </button>\n  </mat-toolbar>\n\n  <catalog-source-edit-journal\n    *ngSwitchCase=\"sourceType.JOURNAL.value\"\n    [journalVersion]=\"sourceVersion\"\n    [topMainOrganization]=\"topMainOrganization\"\n    (journalEditDone)=\"sourceEditDone($event)\"\n    [showEditHeader]=\"false\"\n  >\n  </catalog-source-edit-journal>\n\n  <p *ngSwitchDefault>\n    {{ sourceType.JOURNAL.value }}\n    {{ source.source_type }}\n  </p>\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-indexes/source-indexes.component.html":
  /*!************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-indexes/source-indexes.component.html ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceEditSourceIndexesSourceIndexesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar\n  *ngIf=\"loading\"\n  mode=\"indeterminate\"\n></mat-progress-bar>\n\n<mat-accordion *ngIf=\"!loading\">\n  <mat-expansion-panel\n    *ngFor=\"let clasification of selectedDatabases; let classIndex = index\"\n  >\n    <mat-expansion-panel-header>\n      {{ clasification.dbclass.description }} ({{clasification.dblist.length}})\n    </mat-expansion-panel-header>\n    <mat-action-row *ngIf=\"editable\">\n      <button\n          mat-icon-button\n          aria-label=\"Adicionar\"\n          matTooltip=\"Adicionar\"\n          (click)=\"addIndexAction(classIndex)\"\n        >\n          <mat-icon>add</mat-icon>\n        </button>\n    </mat-action-row>\n    <mat-card *ngFor=\"let db of clasification.dblist; let dbIndex = index\">\n      <mat-card-header>\n        <mat-card-title><mat-label>{{ db.description }}</mat-label></mat-card-title>\n        <mat-card-subtitle>\n          <mat-label style=\"font-weight: bold;\">URL: </mat-label>\n          {{ db.data[\"url\"] }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n          <mat-label style=\"font-weight: bold;\">Cobertura: </mat-label>\n          <mat-label>\n            {{ db.data[\"initial_cover\"] }} - {{ db.data[\"end_cover\"] }}\n          </mat-label>\n      </mat-card-content>\n      <mat-card-actions *ngIf=\"editable\">\n        <button\n          mat-icon-button\n          aria-label=\"Editar\"\n          matTooltip=\"Editar\"\n          (click)=\"editIndexAction(classIndex, db)\"\n        >\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          aria-label=\"Eliminar\"\n          matTooltip=\"Eliminar\"\n          (click)=\"deleteIndexAction(classIndex, db)\"\n        >\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-expansion-panel>\n</mat-accordion>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-organizations/source-organizations.component.html":
  /*!************************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-organizations/source-organizations.component.html ***!
    \************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceEditSourceOrganizationsSourceOrganizationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n  <mat-toolbar\n    *ngIf=\"editable\"\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"space-between center\"\n    fxLayoutGap=\"20px\"\n  >\n    <span>Adicionar</span>\n    <div\n      fxLayout=\"row wrap\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"20px\"\n    >\n    <button *ngIf=\"topMainOrganization\" mat-raised-button (click)=\"addOrg(true, true)\">\n      Organización Principal\n    </button>\n      <button mat-raised-button (click)=\"addOrg(true)\">\n        Organizaciones Cubanas\n      </button>\n      <button mat-raised-button (click)=\"addOrg(false)\">\n        Otras\n      </button>\n    </div>\n  </mat-toolbar>\n\n\n  <mat-accordion>\n    <mat-expansion-panel\n      *ngFor=\"let org of sourceData.organizations; let index = index\"\n      [expanded]=\"false\"\n    >\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{ roles[org.role].label }}\n        </mat-panel-title>\n        <mat-panel-description>\n          {{ org.name }}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-action-row *ngIf=\"editable\">\n        <button\n          mat-stroked-button\n          [disabled]=\"org.length === 1\"\n          (click)=\"setAsMain(org)\"\n          *ngIf=\"!topMainOrganization\"\n        >\n          Establecer como Principal\n        </button>\n        <button\n          mat-stroked-button\n          [disabled]=\"org.length === 1\"\n          (click)=\"removeInst(index)\"\n        >\n          Eliminar\n        </button>\n      </mat-action-row>\n      <toco-org-view [org]=\"org\" [showContent]=\"false\"></toco-org-view>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-inclusion/source-inclusion.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-inclusion/source-inclusion.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceInclusionSourceInclusionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress [loading]=\"loading\"> </toco-progress>\n\n<mat-toolbar>\n  <mat-toolbar-row fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n    <h1>Inclusión de Revista</h1>\n\n    <button\n      mat-icon-button\n      aria-label=\"Reset\"\n      *ngIf=\"!isStartProcess\"\n      matTooltip=\"Comenzar de nuevo\"\n      (click)=\"resetEdit()\"\n    >\n      <mat-icon>cached</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n<container-panel-action *ngIf=\"isStartProcess\" [content]=\"findPanel\">\n\n</container-panel-action>\n<!-- <toco-form-container\n\n  [panelsContent]=\"findPanel\"\n  [useAccordion]=\"false\"\n  [formGroup]=\"findFormGroup\"\n  [action]=\"searchJournalAction\"\n  [actionLabel]=\"'Buscar'\"\n  [deleteValuesAfterAction]=\"true\"\n></toco-form-container> -->\n<ng-container *ngIf=\"source && versionToEdit\" [ngSwitch]=\"source.source_type\">\n  <catalog-source-edit-journal\n  *ngSwitchCase=\"sourceType.JOURNAL.value\"\n  [journalVersion]=\"versionToEdit\"\n  (journalEditDone)=\"finishInclusion()\"\n  [showEditHeader]=\"false\"\n  [description]=\"'Complete y compruebe todos los datos solicitados.'\"\n  [topMainOrganization]=\"topMainOrganization\"\n>\n</catalog-source-edit-journal>\n\n<p *ngSwitchDefault>\n  {{ sourceType.JOURNAL.value }}\n  {{ source.source_type }}\n</p>\n\n</ng-container>\n\n\n<!-- <div *ngIf=\"!isStartProcess\">\n  <mat-horizontal-stepper labelPosition=\"bottom\" [linear]=\"true\" #stepper>\n    <ng-template matStepperIcon=\"journal\">\n      <mat-icon>notes</mat-icon>\n    </ng-template>\n    <ng-template matStepperIcon=\"person\">\n      <mat-icon>person</mat-icon>\n    </ng-template>\n    <ng-template matStepperIcon=\"end\">\n      <mat-icon>done</mat-icon>\n    </ng-template>\n    <mat-step label=\"Revista\" state=\"journal\" completed=\"false\" #journalStep>\n      <catalog-source-edit-journal\n        [journalVersion]=\"versionToEdit\"\n        (journalEditDone)=\"journalStep.completed = true; stepper.next()\"\n        [showEditHeader]=\"false\"\n        [description]=\"'Complete y compruebe todos los datos solicitados.'\"\n      >\n      </catalog-source-edit-journal>\n    </mat-step>\n    <mat-step label=\"Persona\" state=\"person\" [stepControl]=\"personFormGroup\">\n      <h2>\n        aqui se solicita información sobre la relacion que tiene la persona con\n        la revista\n      </h2>\n      <p>\n        para acceder a este formulario se necesita autenticarse con sceiba, por\n        tanto, los datos sobre la persona ya los tenemos capturados y se deben\n        mostrar aqui,\n      </p>\n\n      <h3>Si la revista ya ha sido incluida por otra persona</h3>\n      <p>se muestra aqui la información sobre esa persona</p>\n      <form [formGroup]=\"personFormGroup\">\n        <toco-form-container\n          [panelsContent]=\"personPanel\"\n          [useAccordion]=\"false\"\n          [formGroup]=\"personFormGroup\"\n        >\n        </toco-form-container>\n\n        <div>\n          <button mat-stroked-button color=\"accent\" matStepperPrevious>\n            Atrás\n          </button>\n          <button mat-stroked-button color=\"primary\" matStepperNext>\n            Siguiente\n          </button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step label=\"Finalizar\" state=\"end\">\n      <h2>\n        Acuerdo legal\n      </h2>\n      <p>\n        texto del acuerdo legal\n      </p>\n\n      <h3>Subtitulo</h3>\n      <p>algo mas...</p>\n      <form [formGroup]=\"personFormGroup\">\n        <toco-form-container\n          [panelsContent]=\"agreementPanel\"\n          [useAccordion]=\"false\"\n          [formGroup]=\"agreementFormGroup\"\n        >\n        </toco-form-container>\n\n        <div>\n          <button mat-raised-button color=\"primary\" (click)=\"finishInclusion()\">\n            FINALIZAR Inclusión y ENVIAR Información\n          </button>\n        </div>\n      </form>\n    </mat-step>\n  </mat-horizontal-stepper>\n</div> -->\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/info/journal-view-info.component.html":
  /*!******************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/info/journal-view-info.component.html ***!
    \******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewJournalViewInfoJournalViewInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Journal Information -->\n\n<toco-progress [loading]=\"loading\"> </toco-progress>\n\n<mat-card *ngIf=\"journalVersion && journalData\">\n  <mat-card-header *ngIf=\"showVersionLabel\">\n    <!-- <img mat-card-avatar *ngIf=\"journal.data.logo; else logotemplate\" [style.background-size]=\"'cover'\" src=\"journal.data.logo\">\n        <ng-template #logotemplate>\n            <img mat-card-avatar [src]=\"defaultLogo\" alt=\"\">\n        </ng-template> -->\n\n    <mat-card-title> </mat-card-title>\n\n    <mat-card-subtitle> Revisión actual </mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-divider  *ngIf=\"showVersionLabel\" [inset]=\"true\" style=\"margin-bottom: 1em\"></mat-divider>\n\n  <mat-card-content>\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Título'\"\n        [value]=\"journalData.title\"\n      ></catalog-journal-view-info-field>\n    </p>\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Subtítulo'\"\n        [value]=\"journalData.subtitle\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Nombre Abreviado'\"\n        [value]=\"journalData.shortname\"\n      ></catalog-journal-view-info-field>\n    </p>\n    <p>\n      <catalog-journal-view-info-field *ngIf=\"journalData.source_type\"\n        [label]=\"'Tipo'\"\n        [value]=\"tipos[journalData.source_type].label\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <mat-label style=\"font-weight: bold\">ISSN: </mat-label>\n    <div style=\"margin-left: 0.8em\">\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Impreso'\"\n          [value]=\"getIdentifier(IdentifierSchemas.issn_p)\"\n        ></catalog-journal-view-info-field>\n      </p>\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Electrónico'\"\n          [value]=\"getIdentifier(IdentifierSchemas.issn_e)\"\n        ></catalog-journal-view-info-field>\n      </p>\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'De enlace'\"\n          [value]=\"getIdentifier(IdentifierSchemas.issn_l)\"\n        ></catalog-journal-view-info-field>\n      </p>\n    </div>\n    <mat-label style=\"font-weight: bold\">RNPS: </mat-label>\n    <div style=\"margin-left: 0.8em\">\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Impreso'\"\n          [value]=\"getIdentifier(IdentifierSchemas.prnps)\"\n        ></catalog-journal-view-info-field>\n      </p>\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Electrónico'\"\n          [value]=\"getIdentifier(IdentifierSchemas.ernps)\"\n        ></catalog-journal-view-info-field>\n      </p>\n    </div>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'URL'\"\n        [value]=\"getIdentifier(IdentifierSchemas.url)\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'OAIURL'\"\n        [value]=\"getIdentifier(IdentifierSchemas.oaiurl)\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field *ngIf=\"journalData.source_system\"\n        [label]=\"'Sistema'\"\n        [value]=\"sistemas[journalData.source_system].label\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Email'\"\n        [value]=\"journalData.email\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Seriadas Cubanas'\"\n        [value]=\"journalData.seriadas_cubanas\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Propósito'\"\n        [value]=\"journalData.purpose\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Año de Inicio'\"\n        [value]=\"journalData.start_year | date\"\n      ></catalog-journal-view-info-field>\n      <!-- <mat-label style=\"font-weight: bold;\"> Año de Inicio: </mat-label>\n      <mat-label *ngIf=\"journalData.start_year\">\n        {{ journalData.start_year | date }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!journalData.start_year\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      > -->\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Año de Fin'\"\n        [value]=\"journalData.end_year | date\"\n      ></catalog-journal-view-info-field>\n    </p>\n\n    <p>\n      <catalog-journal-view-info-field\n        [label]=\"'Frecuencia de Publicación'\"\n        [value]=\"journalData.frequency\"\n      ></catalog-journal-view-info-field>\n    </p>\n    <mat-label style=\"font-weight: bold\"> Descripción:</mat-label>\n    <mat-label *ngIf=\"!journalData.description\" class=\"text-muted text-through\"\n      >Vacío</mat-label\n    >\n    <div\n      *ngIf=\"journalData.description\"\n      class=\"e2e-inner-html-bound text-align-justify\"\n      [innerHTML]=\"journalData.description\"\n    ></div>\n\n    <mat-label style=\"font-weight: bold\">Redes Sociales:</mat-label>\n    <div style=\"margin-left: 0.8em\">\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Facebook'\"\n          [value]=\"journalData.socialNetworks.facebook\"\n        ></catalog-journal-view-info-field>\n      </p>\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Twitter'\"\n          [value]=\"journalData.socialNetworks.twitter\"\n        ></catalog-journal-view-info-field>\n      </p>\n      <p>\n        <catalog-journal-view-info-field\n          [label]=\"'Linkedin'\"\n          [value]=\"journalData.socialNetworks.linkedin\"\n        ></catalog-journal-view-info-field>\n      </p>\n    </div>\n\n    <!-- show terms -->\n\n    <mat-divider\n      [inset]=\"true\"\n      style=\"margin-bottom: 1em; margin-top: 1em\"\n    ></mat-divider>\n\n    <!-- <catalog-journal-view-version-term\n      title=\"Grupo:\"\n      [terms]=\"groupTerms\"\n      [vocab_id]=\"vocabularies.INDEXES_CLASIFICATION\"\n    ></catalog-journal-view-version-term>\n\n    <catalog-journal-view-version-term\n      title=\"Provincia:\"\n      [terms]=\"provinceTerms\"\n      [vocab_id]=\"vocabularies.CUBAN_PROVINCES\"\n    ></catalog-journal-view-version-term> -->\n\n    <catalog-journal-view-version-term\n      title=\"Licencia:\"\n      [terms]=\"licenceTerms\"\n      [vocab_id]=\"vocabularies.LICENCES\"\n    ></catalog-journal-view-version-term>\n\n    <catalog-journal-view-version-term\n      title=\"Materias:\"\n      [terms]=\"subjectTerms\"\n      [vocab_id]=\"vocabularies.SUBJECTS\"\n    ></catalog-journal-view-version-term>\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke\">\n      <mat-card-header>\n        <mat-card-title>Organizaciones:</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <catalog-source-edit-organizations\n          [sourceData]=\"journalData\"\n          [editable]=\"false\"\n          [ngStyle]=\"{ margin: '1em' }\"\n        >\n        </catalog-source-edit-organizations>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke\">\n      <mat-card-header>\n        <mat-card-title> Indizaciones:</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <catalog-source-edit-indexes\n          [sourceData]=\"journalData\"\n          [editable]=\"false\"\n          [ngStyle]=\"{ margin: '1em' }\"\n        >\n        </catalog-source-edit-indexes>\n        <!-- <mat-accordion>\n          <ng-container *ngFor=\"let termSource of dataBaseTerms\">\n            <mat-expansion-panel\n              *ngIf=\"termSource.term.vocabulary == vocabularies.INDEXES\"\n              (opened)=\"panelOpenState = true\"\n              (closed)=\"panelOpenState = false\"\n            >\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  {{ termSource.term.description }}\n                </mat-panel-title>\n                <mat-panel-description> </mat-panel-description>\n              </mat-expansion-panel-header>\n              <p *ngIf=\"termSource.data\">\n                <strong>URL: </strong> {{ termSource.data.url }}\n              </p>\n              <p *ngIf=\"termSource.data && termSource.data['initial_cover']\">\n                <strong>Cobertura inicio: </strong>\n                {{ termSource.data[\"initial_cover\"] }}\n              </p>\n              <p *ngIf=\"termSource.data && termSource.data['end_cover']\">\n                <strong>Cobertura hasta: </strong>\n                {{ termSource.data[\"end_cover\"] }}\n              </p>\n            </mat-expansion-panel>\n          </ng-container>\n        </mat-accordion> -->\n      </mat-card-content>\n    </mat-card>\n  </mat-card-content>\n\n  <mat-divider [inset]=\"true\"></mat-divider>\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/journal-view.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/journal-view.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewJournalViewJournalViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  *ngIf=\"editingJournal != undefined\"\n  fxLayout=\"row wrap\"\n  style=\"margin: 1em\"\n>\n  <!-- navigate buttons -->\n  <mat-toolbar\n  style=\"  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\"\n  >\n    <mat-toolbar-row fxLayoutGap=\"1em\" fxLayoutAlign=\"end center\">\n      <!-- <mat-slide-toggle\n        (change)=\"editVersion = !editVersion\"\n        color=\"primary\"\n        matTooltip=\"Vista Edicion\"\n    >\n    </mat-slide-toggle>\n\n      <mat-slide-toggle\n        *ngIf=\"!editVersion\"\n        (change)=\"showVersions = !showVersions\"\n        color=\"accent\"\n        matTooltip=\"Ver Revisiones\"\n      >\n      </mat-slide-toggle> -->\n\n      <button\n        *ngIf=\"!editVersion\"\n        mat-icon-button\n        aria-label=\"Editar la Revisión actual\"\n        matTooltip=\"Editar la Revisión actual\"\n        (click)=\"editVersion = !editVersion\"\n      >\n        <mat-icon>edit</mat-icon>\n      </button>\n\n      <button\n        *ngIf=\"editVersion\"\n        mat-icon-button\n        aria-label=\"Vista Revisiones\"\n        matTooltip=\"Vista Revisiones\"\n        (click)=\"editVersion = !editVersion\"\n      >\n        <mat-icon>visibility</mat-icon>\n      </button>\n\n      <button\n        *ngIf=\"!editVersion && !showVersions\"\n        mat-icon-button\n        aria-label=\"Ver Revisiones\"\n        matTooltip=\"Ver Revisiones\"\n        (click)=\"showVersions = !showVersions\"\n      >\n        <mat-icon>history</mat-icon>\n      </button>\n\n      <button\n        *ngIf=\"!editVersion && showVersions\"\n        mat-icon-button\n        aria-label=\"Ocultar Revisiones\"\n        matTooltip=\"Ocultar Revisiones\"\n        (click)=\"showVersions = !showVersions\"\n      >\n        <mat-icon>history</mat-icon>\n      </button>\n\n      <div *ngIf=\"!editVersion && showVersions\">\n        <button\n          mat-icon-button\n          aria-label=\"Previous version\"\n          [disabled]=\"isDisabledNavigatePrevious\"\n          matTooltip=\"Revisión Anterior\"\n          (click)=\"previousVersion()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          aria-label=\"Next version\"\n          [disabled]=\"isDisabledNavigateNext\"\n          matTooltip=\"Revisión Siguiente\"\n          (click)=\"nextVersion()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <ng-container *ngIf=\"versions != undefined\">\n    <catalog-source-edit-journal\n      *ngIf=\"editVersion\"\n      [journalVersion]=\"editingJournal\"\n      (journalEditDone)=\"sourceEditDone($event)\"\n      [showEditHeader]=\"false\"\n      [showFinalStep]=\"false\"\n      [topMainOrganization]=\"topMainOrganization\"\n    >\n    </catalog-source-edit-journal>\n    <catalog-journal-view-info\n      *ngIf=\"!editVersion && !showVersions\"\n      [journalVersion]=\"editingJournal\"\n      fxFlex=\"1 2 calc(15em + 20px)\"\n      style=\"margin: 0.5em\"\n    >\n    </catalog-journal-view-info>\n    <ng-container *ngIf=\"!editVersion && showVersions\">\n      <catalog-journal-view-info\n        #journalViewInfo\n        [journalVersion]=\"editingJournal\"\n        fxFlex=\"1 2 calc(15em + 20px)\"\n        style=\"margin: 0.5em\"\n      >\n      </catalog-journal-view-info>\n\n      <catalog-journal-view-version\n        #versionsPanel\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"selectedJournal\"\n        (editingJournalChange)=\"\n          journalViewInfo.editingJournalChange(editingJournal)\n        \"\n        fxFlex=\"1 2 calc(15em + 20px)\"\n        style=\"margin: 0.5em\"\n      ></catalog-journal-view-version>\n    </ng-container>\n  </ng-container>\n\n  <mat-card *ngIf=\"versions == undefined\" style=\"margin: 1em\">\n    <mat-card-content>\n      <h1>Este componente necesita las revisiones de la revista.</h1>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n<mat-card *ngIf=\"editingJournal == undefined\" style=\"margin: 1em\">\n  <mat-card-content>\n    <h1>No se encontró la información solicitada</h1>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version-field/journal-view-version-field.component.html":
  /*!************************************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version-field/journal-view-version-field.component.html ***!
    \************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewJournalViewVersionFieldJournalViewVersionFieldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <button\n    mat-icon-button\n    aria-label=\"Next version\"\n    matTooltip=\"Remplazar\"\n    (click)=\"replace(type)\"\n  >\n    <mat-icon color=\"warn\">layers</mat-icon>\n  </button>\n\n  <!-- <button mat-icon-button aria-label=\"Next version\" matTooltip=\"Mezclar\" (click)=\"concat(type)\">\n        <mat-icon color=\"warn\">merge_type</mat-icon>\n    </button> -->\n\n  <ng-container [ngSwitch]=\"type\">\n    <ng-container *ngSwitchCase=\"journalDataType.title\">\n      <mat-label style=\"font-weight: bold\">Título:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.title\">\n        {{ currentJournal.data.title }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.title\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.subtitle\">\n      <mat-label style=\"font-weight: bold\">Subtítulo:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.subtitle\">\n        {{ currentJournal.data.subtitle }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.subtitle\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.shortname\">\n      <mat-label style=\"font-weight: bold\">Nombre Abreviado:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.shortname\">\n        {{ currentJournal.data.shortname }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.shortname\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.issnP\">\n      <catalog-journal-view-info-field\n        [label]=\"'Impreso'\"\n        [value]=\"\n          currentJournal.data.getIdentifierValue(IdentifierSchemas.issn_p)\n        \"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.issnE\">\n      <catalog-journal-view-info-field\n        [label]=\"'Electrónico'\"\n        [value]=\"\n          currentJournal.data.getIdentifierValue(IdentifierSchemas.issn_e)\n        \"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.issnL\">\n      <catalog-journal-view-info-field\n        [label]=\"'De enlace'\"\n        [value]=\"\n          currentJournal.data.getIdentifierValue(IdentifierSchemas.issn_l)\n        \"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.rnpsP\">\n      <catalog-journal-view-info-field\n        [label]=\"'Impreso'\"\n        [value]=\"\n          currentJournal.data.getIdentifierValue(IdentifierSchemas.prnps)\n        \"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.rnpsE\">\n      <catalog-journal-view-info-field\n        [label]=\"'Electrónico'\"\n        [value]=\"\n          currentJournal.data.getIdentifierValue(IdentifierSchemas.ernps)\n        \"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.url\">\n      <catalog-journal-view-info-field\n        [label]=\"'URL'\"\n        [value]=\"currentJournal.data.getIdentifierValue(IdentifierSchemas.url)\"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.oaiurl\">\n      <catalog-journal-view-info-field\n        [label]=\"'OAIURL'\"\n        [value]=\"\n          currentJournal.data.getIdentifierValue(IdentifierSchemas.oaiurl)\n        \"\n      ></catalog-journal-view-info-field>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.email\">\n      <mat-label style=\"font-weight: bold\">Email:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.email\">\n        {{ currentJournal.data.email }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.email\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.purpose\">\n      <mat-label style=\"font-weight: bold\">Propósito:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.purpose\">\n        {{ currentJournal.data.purpose }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.purpose\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.start_year\">\n      <mat-label style=\"font-weight: bold\">Año de Inicio:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.start_year\">\n        {{ currentJournal.data.start_year | date }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.start_year\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.end_year\">\n      <mat-label style=\"font-weight: bold\">Año de Fin:</mat-label>\n      <mat-label *ngIf=\"currentJournal.data.end_year\">\n        {{ currentJournal.data.end_year | date }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.end_year\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.frequency\">\n      <mat-label style=\"font-weight: bold\"\n        >Frecuencia de Publicación:</mat-label\n      >\n      <mat-label *ngIf=\"currentJournal.data.frequency\">\n        {{ currentJournal.data.frequency }}\n      </mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.frequency\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.seriadas_cubanas\">\n      <mat-label style=\"font-weight: bold\">Seriadas Cubanas:</mat-label>\n      <a\n        href=\"{{ currentJournal.data.seriadas_cubanas }}\"\n        target=\"_blanck\"\n        *ngIf=\"currentJournal.data.seriadas_cubanas\"\n      >\n        {{ currentJournal.data.seriadas_cubanas }}\n      </a>\n      <mat-label\n        *ngIf=\"!currentJournal.data.seriadas_cubanas\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.facebook\">\n      <mat-label style=\"font-weight: bold\">Facebook:</mat-label>\n      <a\n        href=\"{{ currentJournal.data.socialNetworks.facebook }}\"\n        target=\"_blanck\"\n        *ngIf=\"currentJournal.data.socialNetworks.facebook\"\n      >\n        {{ currentJournal.data.socialNetworks.facebook }}\n      </a>\n      <mat-label\n        *ngIf=\"!currentJournal.data.socialNetworks.facebook\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.twitter\">\n      <mat-label style=\"font-weight: bold\">Twitter:</mat-label>\n      <a\n        href=\"{{ currentJournal.data.socialNetworks.twitter }}\"\n        target=\"_blanck\"\n        *ngIf=\"currentJournal.data.socialNetworks.twitter\"\n      >\n        {{ currentJournal.data.socialNetworks.twitter }}\n      </a>\n      <mat-label\n        *ngIf=\"!currentJournal.data.socialNetworks.twitter\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.linkedin\">\n      <mat-label style=\"font-weight: bold\">Linkedin:</mat-label>\n      <a\n        href=\"{{ currentJournal.data.socialNetworks.linkedin }}\"\n        target=\"_blanck\"\n        *ngIf=\"currentJournal.data.socialNetworks.linkedin\"\n      >\n        {{ currentJournal.data.socialNetworks.linkedin }}\n      </a>\n      <mat-label\n        *ngIf=\"!currentJournal.data.socialNetworks.linkedin\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"journalDataType.description\">\n      <mat-label style=\"font-weight: bold\">Descripción:</mat-label>\n      <mat-label\n        *ngIf=\"!currentJournal.data.description\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n    </ng-container>\n  </ng-container>\n\n  <!-- <mat-icon class=\"mat-18\" color=\"accent\" *ngIf=\"currentJournal.data.data && currentJournal.data.subtitle !== '' && currentJournal.data.subtitle !== currentcurrentJournal.data.subtitle\" matTooltip=\"Tiene cambios\">notifications</mat-icon> -->\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version-term/journal-view-version-term.component.html":
  /*!**********************************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version-term/journal-view-version-term.component.html ***!
    \**********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewJournalViewVersionTermJournalViewVersionTermComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-card style=\"margin: 1em; background-color: whitesmoke;\">\n\n    <mat-card-header>\n        <mat-card-title>\n            {{ title }}\n        </mat-card-title>\n        <mat-label *ngIf=\"terms.length == 0\" class=\"text-muted text-through\">Vacío</mat-label>\n    </mat-card-header>\n\n    <mat-card-content>\n\n        <mat-chip-list class=\"mat-chip-list-stacked\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <ng-container *ngFor=\"let termSource of terms\">\n\n                <mat-chip>\n                    {{ termSource.description }}\n                </mat-chip>\n\n            </ng-container>\n\n        </mat-chip-list>\n    </mat-card-content>\n\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version/journal-view-version.component.html":
  /*!************************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version/journal-view-version.component.html ***!
    \************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewJournalViewVersionJournalViewVersionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress [loading]=\"loading\"> </toco-progress>\n\n<mat-card *ngIf=\"currentJournal.data\">\n  <mat-card-header>\n    <!-- <img mat-card-avatar *ngIf=\"currentJournal.data.logo; else logotemplate\" [style.background-size]=\"'cover'\" src=\"currentJournal.data.logo\">\n            <ng-template #logotemplate>\n                <img mat-card-avatar [src]=\"defaultLogo\" alt=\"\">\n            </ng-template> -->\n\n    <mat-card-title>\n      <div fxLAyout=\"row\" fxLayoutAlign=\"space-between start\">\n        <mat-icon\n          class=\"mat-18 notification-position\"\n          color=\"accent\"\n          *ngIf=\"currentJournal.is_current\"\n          matTooltip=\"{{ currentJournal.comment }}\"\n          >star</mat-icon\n        >\n        <mat-icon\n          class=\"mat-18 notification-position\"\n          color=\"accent\"\n          *ngIf=\"!currentJournal.reviewed\"\n          matTooltip=\"{{ currentJournal.comment }}\"\n          >adjust</mat-icon\n        >\n      </div>\n    </mat-card-title>\n\n    <mat-card-subtitle>\n      <mat-label> {{ currentJournal.created_at | date }}. </mat-label>\n      <mat-label>\n        {{ currentJournal.userprofile.identify() }}\n      </mat-label>\n    </mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-divider [inset]=\"true\" style=\"margin-bottom: 1em\"></mat-divider>\n\n  <mat-card-content>\n    <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.title\"\n    ></catalog-journal-view-version-field>\n\n    <!-- subtitle -->\n    <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.subtitle\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.shortname\"\n    ></catalog-journal-view-version-field>\n\n    <mat-label style=\"font-weight: bold\">ISSN: </mat-label>\n    <div style=\"margin-left: 0.8em\">\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.issnP\"\n      ></catalog-journal-view-version-field>\n\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.issnE\"\n      ></catalog-journal-view-version-field>\n\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.issnL\"\n      ></catalog-journal-view-version-field>\n    </div>\n    <mat-label style=\"font-weight: bold\">RNPS: </mat-label>\n    <div style=\"margin-left: 0.8em\">\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.rnpsP\"\n      ></catalog-journal-view-version-field>\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.rnpsE\"\n      ></catalog-journal-view-version-field>\n    </div>\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.url\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.oaiurl\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.email\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.seriadas_cubanas\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.purpose\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.start_year\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.end_year\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.frequency\"\n    ></catalog-journal-view-version-field>\n\n    <catalog-journal-view-version-field\n    (editingJournalChange)=\"fieldEditingJournalChange()\"\n      [editingJournal]=\"editingJournal\"\n      [currentJournal]=\"currentJournal\"\n      [type]=\"journalDataType.description\"\n    ></catalog-journal-view-version-field>\n\n    <div\n      *ngIf=\"currentJournal.data.description\"\n      class=\"e2e-inner-html-bound text-align-justify\"\n      [innerHTML]=\"currentJournal.data.description\"\n    ></div>\n\n    <mat-label style=\"font-weight: bold\">Redes Sociales:</mat-label>\n    <div style=\"margin-left: 0.8em\">\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.facebook\"\n      ></catalog-journal-view-version-field>\n\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.twitter\"\n      ></catalog-journal-view-version-field>\n\n      <catalog-journal-view-version-field\n      (editingJournalChange)=\"fieldEditingJournalChange()\"\n        [editingJournal]=\"editingJournal\"\n        [currentJournal]=\"currentJournal\"\n        [type]=\"journalDataType.linkedin\"\n      ></catalog-journal-view-version-field>\n    </div>\n\n    <!-- show terms -->\n    <mat-divider\n      [inset]=\"true\"\n      style=\"margin-bottom: 1em; margin-top: 1em\"\n    ></mat-divider>\n\n    <!-- <p>\n      <mat-label style=\"font-weight: bold;\"> Institución: </mat-label>\n      <mat-label\n        *ngIf=\"currentInstitutionTerms.length == 0\"\n        class=\"text-muted text-through\"\n        >Vacío</mat-label\n      >\n      <ng-container *ngFor=\"let termSource of currentInstitutionTerms\">\n        <mat-label style=\"padding-left: 1em;\">\n          {{ termSource.description }}\n        </mat-label>\n      </ng-container>\n    </p> -->\n    <!-- <mat-card style=\"margin: 1em; background-color: whitesmoke;\">\n      <mat-card-header>\n        <mat-card-title> Grupo: </mat-card-title>\n        <mat-label\n          *ngIf=\"currentGroupTerms.length == 0\"\n          class=\"text-muted text-through\"\n          >Vacío</mat-label\n        >\n      </mat-card-header>\n      <mat-card-content>\n        <mat-chip-list>\n          <ng-container *ngFor=\"let termSource of currentGroupTerms\">\n            <mat-chip>\n              <button\n                mat-icon-button\n                color=\"accent\"\n                matTooltip=\"Agregar\"\n                (click)=\"concat(journalDataType.term, termSource)\"\n              >\n                <mat-icon class=\"mat-18\">merge_type</mat-icon>\n              </button>\n              {{ termSource.description }}\n            </mat-chip>\n          </ng-container>\n        </mat-chip-list>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke;\">\n      <mat-card-header>\n        <mat-card-title> Provincia: </mat-card-title>\n        <mat-label\n          *ngIf=\"currentProvinceTerms.length == 0\"\n          class=\"text-muted text-through\"\n          >Vacío</mat-label\n        >\n      </mat-card-header>\n      <mat-card-content>\n        <mat-chip-list>\n          <ng-container *ngFor=\"let termSource of currentProvinceTerms\">\n            <mat-chip>\n              <button\n                mat-icon-button\n                color=\"accent\"\n                matTooltip=\"Agregar\"\n                (click)=\"concat(journalDataType.term, termSource)\"\n              >\n                <mat-icon class=\"mat-18\">merge_type</mat-icon>\n              </button>\n              {{ termSource.description }}\n            </mat-chip>\n          </ng-container>\n        </mat-chip-list>\n      </mat-card-content>\n    </mat-card> -->\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke\">\n      <mat-card-header>\n        <mat-card-title> Licencia: </mat-card-title>\n        <mat-label\n          *ngIf=\"currentLicenceTerms.length == 0\"\n          class=\"text-muted text-through\"\n          >Vacío</mat-label\n        >\n      </mat-card-header>\n      <mat-card-content>\n        <mat-chip-list>\n          <ng-container *ngFor=\"let termSource of currentLicenceTerms\">\n            <mat-chip>\n              <button\n                mat-icon-button\n                color=\"accent\"\n                matTooltip=\"Agregar\"\n                (click)=\"concat(journalDataType.term, termSource)\"\n              >\n                <mat-icon class=\"mat-18\">merge_type</mat-icon>\n              </button>\n              {{ termSource.description }}\n            </mat-chip>\n          </ng-container>\n        </mat-chip-list>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke\">\n      <mat-card-header>\n        <mat-card-title>\n          <button\n            mat-icon-button\n            color=\"accent\"\n            matTooltip=\"Reemplazar\"\n            (click)=\"replaceSubjects()\"\n          >\n            <mat-icon class=\"mat-18\">merge_type</mat-icon>\n          </button>\n\n          Materias:\n        </mat-card-title>\n        <mat-label\n          *ngIf=\"currentSubjectTerms.length == 0\"\n          class=\"text-muted text-through\"\n          >Vacío</mat-label\n        >\n      </mat-card-header>\n      <mat-card-content>\n        <mat-chip-list>\n          <ng-container *ngFor=\"let termSource of currentSubjectTerms\">\n            <mat-chip>\n              <!-- <button\n                mat-icon-button\n                color=\"accent\"\n                matTooltip=\"Agregar\"\n                (click)=\"concat(journalDataType.term, termSource)\"\n              >\n                <mat-icon class=\"mat-18\">merge_type</mat-icon>\n              </button> -->\n              {{ termSource.description }}\n            </mat-chip>\n          </ng-container>\n        </mat-chip-list>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke\">\n      <mat-card-header>\n        <mat-card-title>\n          <button\n            mat-icon-button\n            color=\"accent\"\n            matTooltip=\"Reemplazar\"\n            (click)=\"replaceOrganizations()\"\n          >\n            <mat-icon class=\"mat-18\">merge_type</mat-icon>\n          </button>\n          Organizaciones:\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <catalog-source-edit-organizations\n          [sourceData]=\"currentJournal.data\"\n          [editable]=\"false\"\n          [ngStyle]=\"{ margin: '1em' }\"\n        >\n        </catalog-source-edit-organizations>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card style=\"margin: 1em; background-color: whitesmoke\">\n      <mat-card-header>\n        <mat-card-title>\n          <button\n            mat-icon-button\n            color=\"accent\"\n            matTooltip=\"Reemplazar\"\n            (click)=\"replaceIndexes()\"\n          >\n            <mat-icon class=\"mat-18\">merge_type</mat-icon>\n          </button>\n\n          Indizaciones:\n        </mat-card-title>\n        <!-- <mat-label\n          *ngIf=\"currentDataBaseTerms.length == 0\"\n          class=\"text-muted text-through\"\n          >Vacío</mat-label\n        > -->\n      </mat-card-header>\n      <mat-card-content>\n        <catalog-source-edit-indexes\n          [sourceData]=\"currentJournal.data\"\n          [editable]=\"false\"\n          [ngStyle]=\"{ margin: '1em' }\"\n        >\n        </catalog-source-edit-indexes>\n        <!-- <mat-accordion>\n          <ng-container *ngFor=\"let termSource of currentDataBaseTerms\">\n            <mat-expansion-panel\n              (opened)=\"panelOpenState = true\"\n              (closed)=\"panelOpenState = false\"\n            >\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  <button\n                    mat-icon-button\n                    color=\"accent\"\n                    matTooltip=\"Agregar\"\n                    (click)=\"concat(journalDataType.term, termSource)\"\n                  >\n                    <mat-icon class=\"mat-18\">merge_type</mat-icon>\n                  </button>\n                  {{ termSource.description }}\n                </mat-panel-title>\n                <mat-panel-description> </mat-panel-description>\n              </mat-expansion-panel-header>\n              <p *ngIf=\"termSource.data\">\n                <strong>URL: </strong> {{ termSource.data.url }}\n              </p>\n              <p *ngIf=\"termSource.data && termSource.data['initial_cover']\">\n                <strong>Cobertura inicio: </strong>\n                {{ termSource.data[\"initial_cover\"] }}\n              </p>\n              <p *ngIf=\"termSource.data && termSource.data['end_cover']\">\n                <strong>Cobertura hasta: </strong>\n                {{ termSource.data[\"end_cover\"] }}\n              </p>\n            </mat-expansion-panel>\n          </ng-container>\n        </mat-accordion> -->\n      </mat-card-content>\n    </mat-card>\n  </mat-card-content>\n\n  <mat-divider [inset]=\"true\"></mat-divider>\n\n  <!-- <mat-card-actions\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"space-between center\"\n    fxLayoutGap=\"10px\"\n    style=\"padding: 1em\"\n  >\n    <mat-checkbox\n                [(ngModel)]=\"currentJournalChecked\"\n                (change)=\"markAsViewed()\"\n            >\n                Marcar como Visto\n            </mat-checkbox>\n\n    <div fxLayoutGap=\"10px\">\n      <button mat-stroked-button color=\"primary\" (click)=\"replace()\">\n        Sustituir todos los campos\n      </button>\n      <!-- <button mat-raised-button color=\"accent\">Descartar</button>\n    </div>\n  </mat-card-actions> -->\n</mat-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/source-view-read/source-view-read.component.html":
  /*!****************************************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/source-view-read/source-view-read.component.html ***!
    \****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewSourceViewReadSourceViewReadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress [loading]=\"saving\"> </toco-progress>\n\n<!-- <div *ngIf=\"source\" fxLayout=\"row\" fxLayoutGap=\"1em\">\n</div> -->\n\n<!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" [ngStyle]=\"{'width': '100%'}\">\n    <h2>\n      {{ pageTitle }}\n    </h2>\n    <button\n      *ngIf=\"showEditHeader\"\n      mat-stroked-button\n      color=\"warn\"\n      (click)=\"cancelStepper()\"\n    >\n      Cancelar\n    </button>\n</div> -->\n\n<ng-container *ngIf=\"source\" [ngSwitch]=\"source.data.source_type\">\n\n  <mat-toolbar>\n    <mat-toolbar-row fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n      <h1>{{ source.data.name }}</h1>\n\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n\n  <ng-container *ngIf=\"source\">\n  <catalog-journal-view-info\n    #view\n    *ngSwitchCase=\"sourceType.JOURNAL.value\"\n    [journalVersion]=\"source\"\n    [showVersionLabel]=\"false\"\n  >\n  </catalog-journal-view-info>\n\n  <p #view *ngSwitchDefault>\n    {{ sourceType.JOURNAL.value }}\n    {{ source.data.source_type }}\n  </p>\n  </ng-container>\n\n\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/source-view.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/source-view.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppSourceViewSourceViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress [loading]=\"loading\"> </toco-progress>\n\n<!-- <div *ngIf=\"source\" fxLayout=\"row\" fxLayoutGap=\"1em\">\n</div> -->\n\n<!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" [ngStyle]=\"{'width': '100%'}\">\n    <h2>\n      {{ pageTitle }}\n    </h2>\n    <button\n      *ngIf=\"showEditHeader\"\n      mat-stroked-button\n      color=\"warn\"\n      (click)=\"cancelStepper()\"\n    >\n      Cancelar\n    </button>\n</div> -->\n\n<mat-card *ngIf=\"error\">\n  <mat-card-header>\n    <mat-card-title>ERROR</mat-card-title>\n  </mat-card-header>\n</mat-card>\n\n\n<ng-container *ngIf=\"!loading && !error && editingVersion\" [ngSwitch]=\"editingVersion.data.source_type\">\n  <mat-toolbar\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"space-between center\"\n    [ngStyle]=\"{ width: '100%', 'height': 'auto', 'padding': '16px', 'min-height': '56px'}\"\n  >\n    <span [ngStyle]=\"{'white-space': 'normal'}\">\n      {{ editingVersion.data.name }}\n    </span>\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\n      <button mat-stroked-button color=\"primary\" (click)=\"desapprove()\" *ngIf=\"can_publish() && is_approved()\">\n        Despublicar\n      </button>\n      <button mat-stroked-button color=\"primary\" (click)=\"publishEditingVersion()\" *ngIf=\"can_publish()\">\n        Publicar la revisión actual\n      </button>\n      <!-- <button mat-stroked-button color=\"warn\" (click)=\"editVersion()\">\n        Editar\n      </button> -->\n\n      <button mat-stroked-button color=\"warn\" (click)=\"saveEditingVersion()\">\n        Guardar la revisión actual\n      </button>\n    </div>\n  </mat-toolbar>\n\n  <ng-container *ngIf=\"editingVersion && versions && topMainOrganization\">\n  <catalog-journal-view\n    #view\n    *ngSwitchCase=\"sourceType.JOURNAL.value\"\n    [editingJournal]=\"editingVersion\"\n    [versions]=\"versions\"\n    [topMainOrganization]=\"topMainOrganization\"\n  >\n  </catalog-journal-view>\n\n  <p #view *ngSwitchDefault>\n    {{ sourceType.JOURNAL.value }}\n    {{ editingVersion.data.source_type }}\n  </p>\n  </ng-container>\n\n\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/static-pages/static-pages.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/static-pages/static-pages.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppStaticPagesStaticPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div markdown [src]=\"src\" style=\"margin: 2em;\"></div>\n\n<!-- <div>{{src}}</div> -->\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/user-profile/user-profile.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/user-profile/user-profile.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <!-- <mat-toolbar-row> Perfil </mat-toolbar-row> -->\n    <mat-toolbar-row> Mi Cuenta </mat-toolbar-row>\n    <mat-toolbar-row></mat-toolbar-row>\n</mat-toolbar>\n<div\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"space-around start\"\n    style=\"margin: -4em 2em 2em;\"\n>\n\n    <mat-card style=\"min-width: 15em; width: 50%; margin: .5em;\">\n        <mat-card-header fxLayout=\"row nowrap\" fxLayout.xs=\"column\" [ngStyle.xs]=\"{'justify-content': 'center', 'align-items': 'center'}\">\n            <img matCardAvatar *ngIf=\"user.avatar != ''\"\n                [ngStyle]=\"{ 'width.px': 130, 'height.px': 130 }\"\n                [ngStyle.xs]=\"{ 'width.px': 180, 'height.px': 180 }\"\n                [src]=\"avatar()\"\n            >\n            <img matCardAvatar *ngIf=\"user.avatar == ''\"\n                [ngStyle]=\"{ 'width.px': 130, 'height.px': 130 }\"\n                [ngStyle.xs]=\"{ 'width.px': 180, 'height.px': 180 }\"\n                src=\"/assets/images/userprofile.png\"\n            >\n            \n            <mat-card-title *ngIf=\"user && user.full_name\">\n                {{user.full_name}}\n            </mat-card-title>\n            \n            <mat-card-subtitle\n                *ngIf=\"user && user.email\"\n                style=\"color: rgba(0, 0, 0, 0.85);\"\n            >\n                {{user.email}}\n            </mat-card-subtitle>\n            <mat-card-subtitle\n                *ngIf=\"user && user.institution\"\n                style=\"color: rgba(0, 0, 0, 0.85);\"\n            >\n                Institucion: {{user.institution}}\n            </mat-card-subtitle>\n            \n        </mat-card-header>\n        <mat-card-content style=\"margin-top: 1em;\">\n            <p *ngIf=\"user && user.biography\">{{ user.biography }}</p>\n        </mat-card-content>\n        <mat-card-actions>\n            <a mat-raised-button color=\"accent\" href=\"{{ changePassword }}\" target=\"_blank\">Cambiar contraseña</a>\n        </mat-card-actions>\n\n    </mat-card>\n    \n    <!-- <mat-card\n        style=\"min-width: 15em; width: 32%; margin: .5em;\"\n    >\n        <mat-card-content>\n            aqui va informaicon adicional del usuario como sus roles en el sistema y demas...\n        </mat-card-content>\n    </mat-card> -->\n\n</div>\n\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/user-search/user-search.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!../catalog/src/app/user-search/user-search.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsCatalogSrcAppUserSearchUserSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field [ngStyle]=\"{'width': '100%'}\" appearance=\"outline\">\n    <mat-label>Usuario a quién se le otorgarán los permisos</mat-label>\n    <input matInput placeholder=\"Correo Electrónico del Usuario\"\n    matTooltip=\"Escriba al menos las tres letras iniciales\"\n    aria-label=\"Buscar usuario\" [matAutocomplete]=\"auto\"\n        [formControl]=\"userCtrl\">\n\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n\n        <mat-option *ngFor=\"let user of filteredUser\" [value]=\"user\">\n            <span title=\"{{user.email}}\">{{user.email}}</span>\n        </mat-option>\n\n    </mat-autocomplete>\n    <mat-hint></mat-hint>\n</mat-form-field>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!*************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"mat-elevation-z8\" style=\"position: relative; z-index: 2;\">\n    <mat-toolbar-row\n        fxLayout=\"row wrap\"\n        fxLayoutAlign=\"space-between center\"\n        style=\"height: auto !important; min-height: 80px;\"\n    >\n      <div style=\"width: 330px; display: flex; align-items: center;\">\n          <div class=\"triangle\">\n              <span matTooltipClass=\"tooltip-beta-red\" matTooltip=\"Este es un producto BETA configurado con propósitos de prueba.\n              Algunas características pueden no funcionar correctamente.\"> <strong> BETA </strong> </span>\n          </div>\n          <a mat-button [routerLink]=\"['/']\" style=\"    min-width: fit-content; display: flex; align-items: center;\">\n              <img src=\"/assets/icons/mes.svg\" alt=\"MES\" style=\"height: 50px; margin-right: 6px;\">\n              Sceiba - Registro de Revistas Científicas del MES\n          </a>\n      </div>\n  \n      <div\n          class=\"center-elements\"\n          appearance=\"legacy\"\n          aria-label=\"Menu de Inicio\"\n          fxLayout=\"row wrap\"\n          fxLayoutAlign=\"center\"\n          fxLayoutGap=\"15px\"\n      >\n  \n        <button mat-icon-button [matMenuTriggerFor]=\"menuApps\" matTooltip=\"Aplicaciones\">\n          <mat-icon>apps</mat-icon>\n        </button>\n  \n        <button mat-icon-button [matMenuTriggerFor]=\"menuHelp\" matTooltip=\"Ayuda\">\n            <mat-icon class=\"mat-18\">help</mat-icon>\n        </button>\n  \n        <button mat-icon-button *ngIf=\"userProfile\" [matMenuTriggerFor]=\"menuUser\" matTooltip=\"{{ userProfile.user.email }}\">\n          <mat-icon class=\"mat-18\">person_pin</mat-icon>\n        </button>\n  \n        <toco-authentication [oauthInfo]=\"oauthInfo\" [isButtonLogin]=\"'true'\" [isButtonLoginIcon]=\"'true'\"\n          [isButtonLoginText]=\"'Autenticarse'\" *ngIf=\"!userProfile\">\n        </toco-authentication>\n  \n      </div>\n  \n    </mat-toolbar-row>\n  </mat-toolbar>\n  \n  \n  <mat-toolbar\n    class=\"mat-elevation-z6\"\n    color=\"primary\"\n    style=\"position: relative\"\n  >\n    <!-- <mat-toolbar-row\n      fxLayout=\"row wrap\"\n      fxLayout.xs=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      style=\"height: auto !important; min-height: 56px\"\n    >\n      <a class=\"color-white\" [routerLink]=\"['/']\" style=\"white-space: normal\">\n        <img src=\"assets/images/logo_mes.png\" alt=\"MES\" width=\"140\">\n        Registro de Revistas Científicas del MES\n      </a>\n      <div\n        appearance=\"legacy\"\n        aria-label=\"Menu de Inicio\"\n        fxLayout=\"row wrap\"\n        fxLayoutGap=\"15px\"\n      >\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"menuNetwork\"\n          matTooltip=\"Redes Sociales\"\n        >\n          <mat-icon>share</mat-icon>\n        </button>\n  \n        <button mat-icon-button [matMenuTriggerFor]=\"menuHelp\" matTooltip=\"Ayuda\">\n          <mat-icon>help</mat-icon>\n        </button>\n  \n        <toco-notification-button\n          *ngIf=\"userProfile\"\n          [color]=\"'primary'\"\n          [buttonType]=\"'mat-icon-button'\"\n        ></toco-notification-button>\n  \n        <toco-authentication\n          [oauthInfo]=\"oauthInfo\"\n          [isButtonLogin]=\"'true'\"\n          [isButtonLoginIcon]=\"'true'\"\n          [isButtonLoginText]=\"'Autenticarse'\"\n          *ngIf=\"!userProfile\"\n        >\n        </toco-authentication>\n  \n        <button\n          mat-icon-button\n          *ngIf=\"userProfile\"\n          [matMenuTriggerFor]=\"menu\"\n          matTooltip=\"{{ user }}\"\n        >\n          <mat-icon>person_pin</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row> -->\n  \n    <mat-toolbar-row\n      fxLayout=\"row wrap\"\n      fxLayoutAlign=\"center\"\n      fxLayout.xs=\"column\"\n      fxLayoutAlign=\"center center\"\n      style=\"height: auto !important; min-height: 56px\"\n    >\n      <a mat-button [routerLink]=\"['/']\" value=\"Inicio\">Inicio</a>\n      <!-- <a mat-button [routerLink]=\"['/about']\" value=\"Acerca de\">Acerca de</a> -->\n      <a mat-button [routerLink]=\"['/directory']\" value=\"Catálogo\">Directorio</a>\n      <a mat-button [routerLink]=\"['/']\" value=\"Reportes y estadísticas\"\n        >Reportes y estadísticas</a\n      >\n      <a\n        mat-button\n        *ngIf=\"userProfile\"\n        [routerLink]=\"['/sources/new/journal']\"\n        value=\"Incluye tu revista\"\n        >Incluye tu revista</a\n      >\n      <!-- <toco-authentication\n        [oauthInfo]=\"oauthInfo\"\n        [isButtonLogin]=\"'true'\"\n        [isButtonLoginIcon]=\"'true'\"\n        [isButtonLoginText]=\"'Autenticarse'\"\n        *ngIf=\"!userProfile\"\n      >\n      </toco-authentication> -->\n  \n      <a *ngIf=\"userProfile\" mat-button [routerLink]=\"['/sources']\"> Mis Registros </a>\n      <!-- <a *ngIf=\"userProfile\" mat-button [routerLink]=\"['/sources','permissions']\"> Permisos </a> -->\n    </mat-toolbar-row>\n  </mat-toolbar>\n  \n  <mat-menu #menuUser=\"matMenu\">\n    <a mat-menu-item [routerLink]=\"['/userprofile']\">\n      <mat-icon>account_circle</mat-icon>\n      Mi Cuenta\n    </a>\n    <button mat-menu-item (click)=\"logoff()\">\n      <mat-icon>lock</mat-icon>\n      Salir\n    </button>\n  </mat-menu>\n  \n  <mat-menu #menuNetwork=\"matMenu\">\n    <a mat-menu-item href=\"https://www.facebook.com/CubaMES/\" target=\"_blank\">\n      <!-- <mat-icon>info</mat-icon> -->\n      Facebook\n    </a>\n    <a mat-menu-item href=\"https://twitter.com/CubaMES\" target=\"_blank\">\n      <!-- <mat-icon>question_answer</mat-icon> -->\n      Twitter\n    </a>\n  </mat-menu>\n  \n  <mat-menu #menuHelp=\"matMenu\">\n    <!-- <a mat-menu-item [routerLink]=\"['/help']\">\n        <mat-icon>help_outline</mat-icon>\n        Ayuda\n    </a> -->\n    <a mat-menu-item [routerLink]=\"['/faq']\">\n      <mat-icon>question_answer</mat-icon>\n      FAQs\n    </a>\n    <a mat-menu-item [routerLink]=\"['/about']\">\n      <mat-icon>info</mat-icon>\n      Acerca de\n    </a>\n    <a mat-menu-item [routerLink]=\"['/contact']\">\n      <mat-icon>contacts</mat-icon>\n      Contactos\n    </a>\n  </mat-menu>\n  \n  \n  <mat-menu #menuApps=\"matMenu\">\n  \n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around center\">\n      <a href=\"https://sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Sceiba\">\n        <img class=\"app-featured\" src=\"/assets/icons/sceiba.svg\" alt=\"Sceiba\" style=\"width: 55px; height: 55px;\">\n      </a>\n      <mat-divider class=\"w-90\"></mat-divider>\n  \n      <a href=\"https://catalogo.sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Catálogo\">\n        <img src=\"/assets/icons/catalog.svg\" alt=\"Catálogo\" style=\"width: 55px; height: 55px;\">\n      </a>\n      <a href=\"https://orgs.sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Organizaciones\">\n        <img src=\"/assets/icons/organizacion.svg\" alt=\"Organizaciones\" style=\"width: 55px; height: 55px;\">\n      </a>\n      <a href=\"https://vocs.sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Vocabularios\">\n        <img src=\"/assets/icons/vocabs.svg\" alt=\"Vocabularios\" style=\"width: 55px; height: 55px;\">\n      </a>\n      <mat-divider class=\"w-90\"></mat-divider>\n      <a href=\"https://sceiba.cu\" target=\"__blanck\" class=\"apps\" matTooltip=\"Registro de Revistas Científicas del MES\">\n        <img class=\"app-featured\" src=\"/assets/icons/mes.svg\" alt=\"Registro de Revistas Científicas del MES\"\n          style=\"width: 55px; height: 55px;\">\n      </a>\n    </div>\n  </mat-menu>\n  \n  \n  <toco-progress [loading]=\"loading\"> </toco-progress>\n  \n  <router-outlet></router-outlet>\n  \n  <div [ngStyle]=\"{ 'margin-top': '2em' }\">\n    <toco-footer\n      [sites]=\"footerSites\"\n      [information]=\"footerInformation\"\n    ></toco-footer>\n  </div>\n  ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toco-progress\n  [loading]=\"!stats && !error\"\n  [position]=\"'absolute'\"\n></toco-progress>\n<ng-container *ngIf=\"error\">\n  <h1>ERROR</h1>\n</ng-container>\n\n<ng-container *ngIf=\"stats\">\n  <div class=\"m-1\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <mat-card class=\"w-60\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n      <img\n        fxFlex=\"2 1 calc(80% - 100px)\"\n        height=\"250\"\n        matCardImage\n        style=\"margin-bottom: -16px; object-fit: cover\"\n        src=\"assets/images/photo-of-people-having-meeting.jpg\"\n      />\n\n      <mat-card-content fxLayout=\"column\" style=\"padding: 2em\">\n        <h2>{{ stats.sources_count }} Revistas</h2>\n        <h2>{{ records }} Artículos</h2>\n        <h2 *ngIf=\"stats.org.metadata.relationships\">\n          {{ stats.org.metadata.relationships.length }} Instituciones\n        </h2>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <section\n    fxLayout=\"row wrap\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"2em\"\n    style=\"padding: 1em\"\n  >\n  <mat-card class=\"w-card\">\n    <mat-card-title-group>\n      <mat-card-title>Tipo de Revistas</mat-card-title>\n      <!-- <mat-card-subtitle>Subtitle</mat-card-subtitle> -->\n      <!-- <img matCardImage src=\"Side image\"> -->\n    </mat-card-title-group>\n    <!-- <img matCardImage src=\"Card wide image source\"> -->\n    <mat-card-content>\n      <mat-nav-list dense>\n        <p *ngFor=\"let item of stats.source_types\">\n          <a\n            mat-list-item\n            *ngIf=\"!item.source_count || item.source_count == 0\"\n            [routerLink]=\"['/directory']\"\n            [queryParams]=\"{ source_type: item.source_type }\"\n          >\n            {{ item.label }}\n          </a>\n          <a\n            mat-list-item\n            *ngIf=\"item.source_count > 0\"\n            [routerLink]=\"['/directory']\"\n            [queryParams]=\"{ source_type: item.source_type }\"\n          >\n            {{ item.label }} - {{ item.source_count }}\n          </a>\n        </p>\n        <!-- <a mat-list-item [routerLink]=\"['/directory']\" [queryParams]=\"{source_type: 'POPULARIZATION'}\">Revistas Dibulgación Científicas</a>\n        <a mat-list-item [routerLink]=\"['/directory']\" [queryParams]=\"{source_type: 'JOURNAL'}\">Revistas Científicas</a> -->\n      </mat-nav-list>\n    </mat-card-content>\n  </mat-card>\n    <mat-card class=\"w-card\" [ngStyle]=\"{ 'min-height': '160px' }\">\n      <mat-card-title-group>\n        <mat-card-title>Últimos Ingresos</mat-card-title>\n      </mat-card-title-group>\n      <mat-card-content>\n        <mat-nav-list dense>\n          <a\n            mat-list-item\n            *ngFor=\"let source of stats.last_sources\"\n            (click)=\"viewJournal(source.id)\"\n          >\n            {{ source.name }}\n          </a>\n          <!-- <a mat-list-item href=\"\">Revista Cubana de Ciencia de la Información</a>\n        <a mat-list-item href=\"\">Revista 16 de Abril</a> -->\n        </mat-nav-list>\n      </mat-card-content>\n    </mat-card>\n  </section>\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!****************************************************************************************!*\
    !*** /home/malayo/www/tocororo/toco-web-ui/catalog-ng/node_modules/tslib/tslib.es6.js ***!
    \****************************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "../catalog/src/app/app-routing.module.ts":
  /*!************************************************!*\
    !*** ../catalog/src/app/app-routing.module.ts ***!
    \************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function catalogSrcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./catalog/catalog.component */
    "../catalog/src/app/catalog/catalog.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "../catalog/src/app/home/home.component.ts");
    /* harmony import */


    var _mysources_mysources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mysources/mysources.component */
    "../catalog/src/app/mysources/mysources.component.ts");
    /* harmony import */


    var _source_edit_source_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./source-edit/source-edit.component */
    "../catalog/src/app/source-edit/source-edit.component.ts");
    /* harmony import */


    var _source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./source-inclusion/source-inclusion.component */
    "../catalog/src/app/source-inclusion/source-inclusion.component.ts");
    /* harmony import */


    var _source_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./source-resolver */
    "../catalog/src/app/source-resolver.ts");
    /* harmony import */


    var _source_view_source_view_read_source_view_read_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./source-view/source-view-read/source-view-read.component */
    "../catalog/src/app/source-view/source-view-read/source-view-read.component.ts");
    /* harmony import */


    var _source_view_source_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./source-view/source-view.component */
    "../catalog/src/app/source-view/source-view.component.ts");
    /* harmony import */


    var _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./static-pages/static-pages.component */
    "../catalog/src/app/static-pages/static-pages.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "../catalog/src/app/user-profile/user-profile.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: "directory",
      children: [{
        path: ":uuid",
        component: _source_view_source_view_read_source_view_read_component__WEBPACK_IMPORTED_MODULE_10__["SourceViewReadComponent"],
        resolve: {
          record: _source_resolver__WEBPACK_IMPORTED_MODULE_9__["SourceResolver"]
        }
      }, {
        path: "",
        component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]
      }]
    }, {
      path: "faq",
      component: _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_12__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/faq.md",
        title: "FAQ"
      }
    }, {
      path: "about",
      component: _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_12__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/about.md",
        title: "Sobre Nosotros"
      }
    }, {
      path: "help",
      component: _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_12__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/help.md",
        title: "Ayuda"
      }
    }, {
      path: "contact",
      component: _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_12__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/contact.md",
        title: "Contacto"
      }
    }, {
      path: "userprofile",
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"],
      canActivate: [toco_lib__WEBPACK_IMPORTED_MODULE_3__["OauthAuthenticationService"]]
    }, {
      path: "sources",
      // loadChildren: () => import('@toco/tools/journal').then(mod => mod.JournalModule),
      children: [{
        path: "new",
        children: [{
          path: "journal",
          component: _source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_8__["SourceInclusionComponent"]
        }]
      }, {
        path: ":uuid/view",
        component: _source_view_source_view_component__WEBPACK_IMPORTED_MODULE_11__["SourceViewComponent"],
        resolve: {
          source: _source_resolver__WEBPACK_IMPORTED_MODULE_9__["SourceResolverAuth"]
        }
      }, {
        path: ":uuid/edit",
        component: _source_edit_source_edit_component__WEBPACK_IMPORTED_MODULE_7__["SourceEditComponent"],
        resolve: {
          source: _source_resolver__WEBPACK_IMPORTED_MODULE_9__["SourceResolverAuth"]
        }
      }, // {
      //     path: 'permissions',
      //     component: GrantPermissionsComponent,
      // },
      {
        path: "",
        component: _mysources_mysources_component__WEBPACK_IMPORTED_MODULE_6__["MySourcesComponent"]
      }],
      canActivate: [toco_lib__WEBPACK_IMPORTED_MODULE_3__["OauthAuthenticationService"]]
    }, {
      path: "notifications",
      component: toco_lib__WEBPACK_IMPORTED_MODULE_3__["NotificationListComponent"],
      canActivate: [toco_lib__WEBPACK_IMPORTED_MODULE_3__["OauthAuthenticationService"]]
    }, {
      path: "**",
      redirectTo: ""
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_source_resolver__WEBPACK_IMPORTED_MODULE_9__["SourceResolver"], _source_resolver__WEBPACK_IMPORTED_MODULE_9__["SourceResolverAuth"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "../catalog/src/app/app.component.scss":
  /*!*********************************************!*\
    !*** ../catalog/src/app/app.component.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-toolbar-sticky {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.color-white {\n  color: white !important;\n  -webkit-text-emphasis: white;\n          text-emphasis: white;\n  text-decoration: none !important;\n}\n\n.mat-toolbar-single-row {\n  height: auto !important;\n  min-height: 64px;\n}\n\n.w-90 {\n  width: 90%;\n}\n\n.apps {\n  margin: 0.5em;\n}\n\n.apps img {\n  width: 90px;\n}\n\n.MES {\n  width: 190px !important;\n}\n\n.triangle {\n  position: relative;\n  width: 0;\n  height: 0;\n  border-top: 0px solid transparent;\n  border-left: 80px solid #dd2c00;\n  border-bottom: 80px solid transparent;\n  margin-left: -16px;\n}\n\n.triangle span {\n  position: absolute;\n  right: 23px;\n  top: 11px;\n  color: white;\n  transform: rotate(-45deg);\n}\n\n.center-elements {\n  width: auto;\n}\n\n@media screen and (max-width: 490px) {\n  .center-elements {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2F0YWxvZy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURDRTtFQUNJLFdBQUE7QUNDTjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFFQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBR0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0ksV0FBQTtFQ0VKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvY2F0YWxvZy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubWF0LXRvb2xiYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLmNvbG9yLXdoaXRle1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1lbXBoYXNpczogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA2NHB4O1xufVxuLnctOTB7XG4gIHdpZHRoOiA5MCU7XG59XG4uYXBwc3tcbiAgbWFyZ2luOiAuNWVtO1xuICBpbWd7XG4gICAgICB3aWR0aDogOTBweDtcbiAgfVxufVxuLk1FU3tcbiAgd2lkdGg6IDE5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAvLyBlbCB2YWxvciBzaWd1aWVudGUgc2UgZGVmaW5lIGVuIGVsIGBzdHlsZWAgZ2xvYmFsIHBhcmEgdXRpbGl6YXIgbG9zIGNvbG9yZXMgY29tbyB2YXJpYWJsZVxuICBib3JkZXItbGVmdDogODBweCBzb2xpZCAjZGQyYzAwO1xuICBib3JkZXItYm90dG9tOiA4MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG4udHJpYW5nbGUgc3BhbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjNweDtcbiAgdG9wOiAxMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5jZW50ZXItZWxlbWVudHMge1xuICB3aWR0aDogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gIC5jZW50ZXItZWxlbWVudHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi5tYXQtdG9vbGJhci1zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtZW1waGFzaXM6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNjRweDtcbn1cblxuLnctOTAge1xuICB3aWR0aDogOTAlO1xufVxuXG4uYXBwcyB7XG4gIG1hcmdpbjogMC41ZW07XG59XG4uYXBwcyBpbWcge1xuICB3aWR0aDogOTBweDtcbn1cblxuLk1FUyB7XG4gIHdpZHRoOiAxOTBweCAhaW1wb3J0YW50O1xufVxuXG4udHJpYW5nbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgI2RkMmMwMDtcbiAgYm9yZGVyLWJvdHRvbTogODBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuXG4udHJpYW5nbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIzcHg7XG4gIHRvcDogMTFweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uY2VudGVyLWVsZW1lbnRzIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gIC5jZW50ZXItZWxlbWVudHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "../catalog/src/app/app.component.ts":
  /*!*******************************************!*\
    !*** ../catalog/src/app/app.component.ts ***!
    \*******************************************/

  /*! exports provided: AppComponent */

  /***/
  function catalogSrcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(environment, oauthStorage, oauthService, authenticateService, router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.environment = environment;
        this.oauthStorage = oauthStorage;
        this.oauthService = oauthService;
        this.authenticateService = authenticateService;
        this.router = router;
        this.oauthInfo = {
          serverHost: this.environment.sceibaHost,
          loginUrl: this.environment.sceibaHost + 'oauth/authorize',
          tokenEndpoint: this.environment.sceibaHost + 'oauth/token',
          userInfoEndpoint: this.environment.sceibaApi + 'me',
          appHost: this.environment.appHost,
          appName: this.environment.appName,
          oauthRedirectUri: this.environment.oauthRedirectUri,
          oauthClientId: this.environment.oauthClientId,
          oauthScope: this.environment.oauthScope
        };
        this.title = 'Catálogo';
        this.loading = false;
        this.authenticateSuscription = null;
        this.isOnline = true; //navigator.onLine;

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this.loading = true;
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            _this.loading = false;
          }
        }, function (error) {}, function () {});
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var request = JSON.parse(this.oauthStorage.getItem('user'));

          if (request) {
            this.userProfile = request.data.userprofile;
          }

          console.log(this.userProfile);
          this.authenticateSuscription = this.authenticateService.authenticationSubjectObservable.subscribe(function (request) {
            if (request != null) {
              _this2.userProfile = request.data.userprofile; // if (this.oauthStorage.getItem('access_token')) {
              //   this.user = this.oauthStorage.getItem('email');
              // }
            } else {
              _this2.logoff();
            }
          }, function (error) {
            _this2.userProfile = null;
          }, function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.authenticateSuscription) {
            this.authenticateSuscription.unsubscribe();
          }
        }
      }, {
        key: "logoff",
        value: function logoff() {
          this.oauthService.logOut();
          this.oauthStorage.removeItem("user");
          this.userProfile = undefined;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["Environment"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthStorage"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["OauthAuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "../catalog/src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "../catalog/src/app/app.module.ts":
  /*!****************************************!*\
    !*** ../catalog/src/app/app.module.ts ***!
    \****************************************/

  /*! exports provided: CatalogAppModule */

  /***/
  function catalogSrcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogAppModule", function () {
      return CatalogAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-markdown */
    "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "../catalog/src/environments/environment.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "../catalog/src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "../catalog/src/app/app.component.ts");
    /* harmony import */


    var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./catalog/catalog.component */
    "../catalog/src/app/catalog/catalog.component.ts");
    /* harmony import */


    var _catalog_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./catalog/filters/filters.component */
    "../catalog/src/app/catalog/filters/filters.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "../catalog/src/app/home/home.component.ts");
    /* harmony import */


    var _mysources_editor_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./mysources/editor/editor.component */
    "../catalog/src/app/mysources/editor/editor.component.ts");
    /* harmony import */


    var _mysources_manager_manager_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./mysources/manager/manager.component */
    "../catalog/src/app/mysources/manager/manager.component.ts");
    /* harmony import */


    var _mysources_mysources_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./mysources/mysources.component */
    "../catalog/src/app/mysources/mysources.component.ts");
    /* harmony import */


    var _mysources_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./mysources/organizations/organizations.component */
    "../catalog/src/app/mysources/organizations/organizations.component.ts");
    /* harmony import */


    var _mysources_permission_organization_permission_organization_permission_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./mysources/permission/organization-permission/organization-permission.component */
    "../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.ts");
    /* harmony import */


    var _mysources_permission_source_permission_source_permission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./mysources/permission/source-permission/source-permission.component */
    "../catalog/src/app/mysources/permission/source-permission/source-permission.component.ts");
    /* harmony import */


    var _mysources_permission_term_permission_term_permission_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./mysources/permission/term-permission/term-permission.component */
    "../catalog/src/app/mysources/permission/term-permission/term-permission.component.ts");
    /* harmony import */


    var _mysources_terms_admin_terms_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./mysources/terms-admin/terms-admin.component */
    "../catalog/src/app/mysources/terms-admin/terms-admin.component.ts");
    /* harmony import */


    var _mysources_terms_terms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./mysources/terms/terms.component */
    "../catalog/src/app/mysources/terms/terms.component.ts");
    /* harmony import */


    var _source_edit_journal_edit_journal_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./source-edit/journal-edit/journal-edit.component */
    "../catalog/src/app/source-edit/journal-edit/journal-edit.component.ts");
    /* harmony import */


    var _source_edit_source_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./source-edit/source-edit.component */
    "../catalog/src/app/source-edit/source-edit.component.ts");
    /* harmony import */


    var _source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./source-edit/source-indexes/source-indexes.component */
    "../catalog/src/app/source-edit/source-indexes/source-indexes.component.ts");
    /* harmony import */


    var _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./source-edit/source-organizations/source-organizations.component */
    "../catalog/src/app/source-edit/source-organizations/source-organizations.component.ts");
    /* harmony import */


    var _source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./source-inclusion/source-inclusion.component */
    "../catalog/src/app/source-inclusion/source-inclusion.component.ts");
    /* harmony import */


    var _source_view_journal_view_info_journal_view_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./source-view/journal-view/info/journal-view-info.component */
    "../catalog/src/app/source-view/journal-view/info/journal-view-info.component.ts");
    /* harmony import */


    var _source_view_journal_view_journal_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./source-view/journal-view/journal-view.component */
    "../catalog/src/app/source-view/journal-view/journal-view.component.ts");
    /* harmony import */


    var _source_view_journal_view_version_field_journal_view_version_field_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./source-view/journal-view/version-field/journal-view-version-field.component */
    "../catalog/src/app/source-view/journal-view/version-field/journal-view-version-field.component.ts");
    /* harmony import */


    var _source_view_journal_view_version_term_journal_view_version_term_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./source-view/journal-view/version-term/journal-view-version-term.component */
    "../catalog/src/app/source-view/journal-view/version-term/journal-view-version-term.component.ts");
    /* harmony import */


    var _source_view_journal_view_version_journal_view_version_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./source-view/journal-view/version/journal-view-version.component */
    "../catalog/src/app/source-view/journal-view/version/journal-view-version.component.ts");
    /* harmony import */


    var _source_view_source_view_read_source_view_read_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./source-view/source-view-read/source-view-read.component */
    "../catalog/src/app/source-view/source-view-read/source-view-read.component.ts");
    /* harmony import */


    var _source_view_source_view_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./source-view/source-view.component */
    "../catalog/src/app/source-view/source-view.component.ts");
    /* harmony import */


    var _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./static-pages/static-pages.component */
    "../catalog/src/app/static-pages/static-pages.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "../catalog/src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./user-search/user-search.component */
    "../catalog/src/app/user-search/user-search.component.ts"); // import { BrowserModule } from '@angular/platform-browser';


    var CatalogAppModule = function CatalogAppModule() {
      _classCallCheck(this, CatalogAppModule);
    };

    CatalogAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["CatalogComponent"], _catalog_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__["FiltersComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _mysources_mysources_component__WEBPACK_IMPORTED_MODULE_16__["MySourcesComponent"], _mysources_editor_editor_component__WEBPACK_IMPORTED_MODULE_14__["MySourcesEditorComponent"], _mysources_manager_manager_component__WEBPACK_IMPORTED_MODULE_15__["MySourcesManagerComponent"], _mysources_manager_manager_component__WEBPACK_IMPORTED_MODULE_15__["MySourcesManagerPermissionDialog"], _mysources_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_17__["MySourcesOrganizationsComponent"], _mysources_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_17__["MySourcesOrganizationsPermissionDialog"], _mysources_terms_admin_terms_admin_component__WEBPACK_IMPORTED_MODULE_21__["MySourcesTermsAdminComponent"], _mysources_terms_terms_component__WEBPACK_IMPORTED_MODULE_22__["MySourcesTermsComponent"], _mysources_terms_terms_component__WEBPACK_IMPORTED_MODULE_22__["MySourcesTermsPermissionDialog"], _mysources_permission_source_permission_source_permission_component__WEBPACK_IMPORTED_MODULE_19__["MySourcesSourcePermissionComponent"], _mysources_permission_organization_permission_organization_permission_component__WEBPACK_IMPORTED_MODULE_18__["MySourcesOrganizationPermissionComponent"], _mysources_permission_term_permission_term_permission_component__WEBPACK_IMPORTED_MODULE_20__["MySourcesTermPermissionComponent"], _source_edit_source_edit_component__WEBPACK_IMPORTED_MODULE_24__["SourceEditComponent"], _source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_25__["SourceEditIndexesComponent"], _source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_25__["SourceEditAddIndexComponent"], _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_26__["SourceEditOrganizationsComponent"], _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_26__["SourceEditOrganizationSelectTopDialog"], _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_26__["SourceEditOrganizationSelectDialog"], _source_edit_journal_edit_journal_edit_component__WEBPACK_IMPORTED_MODULE_23__["SourceEditJournalComponent"], _source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_27__["SourceInclusionComponent"], _source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_27__["SourceInclusionAcceptComponent"], _source_view_source_view_component__WEBPACK_IMPORTED_MODULE_34__["SourceViewComponent"], _source_view_source_view_component__WEBPACK_IMPORTED_MODULE_34__["SourceViewSaveDialog"], _source_view_source_view_read_source_view_read_component__WEBPACK_IMPORTED_MODULE_33__["SourceViewReadComponent"], _source_view_journal_view_info_journal_view_info_component__WEBPACK_IMPORTED_MODULE_28__["SourceJournalViewInfoFieldComponent"], _source_view_journal_view_journal_view_component__WEBPACK_IMPORTED_MODULE_29__["SourceJournalViewComponent"], _source_view_journal_view_version_term_journal_view_version_term_component__WEBPACK_IMPORTED_MODULE_31__["SourceJournalViewVersionTermComponent"], _source_view_journal_view_version_field_journal_view_version_field_component__WEBPACK_IMPORTED_MODULE_30__["SourceJournalViewVersionFieldComponent"], _source_view_journal_view_version_journal_view_version_component__WEBPACK_IMPORTED_MODULE_32__["SourceJournalViewVersionComponent"], _source_view_journal_view_info_journal_view_info_component__WEBPACK_IMPORTED_MODULE_28__["SourceJournalViewInfoComponent"], _static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_35__["StaticPagesComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_36__["UserProfileComponent"], _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_37__["UserSearchComponent"], _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["DialogCatalogJournalInfoDialog"]],
      entryComponents: [_mysources_manager_manager_component__WEBPACK_IMPORTED_MODULE_15__["MySourcesManagerPermissionDialog"], _mysources_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_17__["MySourcesOrganizationsPermissionDialog"], _mysources_terms_terms_component__WEBPACK_IMPORTED_MODULE_22__["MySourcesTermsPermissionDialog"], _source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_25__["SourceEditAddIndexComponent"], _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_26__["SourceEditOrganizationSelectTopDialog"], _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_26__["SourceEditOrganizationSelectDialog"], _source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_27__["SourceInclusionAcceptComponent"], _source_view_source_view_component__WEBPACK_IMPORTED_MODULE_34__["SourceViewSaveDialog"], _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["DialogCatalogJournalInfoDialog"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], // BrowserModule,
      _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["NotificationModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["TocoFormsModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["OrganizationsModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["AuthenticationModule"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], // TaxonomyModule,
      _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      })],
      providers: [toco_lib__WEBPACK_IMPORTED_MODULE_7__["SourceService"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["SourceServiceNoAuth"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["TaxonomyService"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["OrganizationServiceNoAuth"], toco_lib__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTOR_PROVIDERS"], // REQUEST_CACHE_DIFFERENT_TIME_WITH_MAP_PROVIDER,
      // { provide: HTTP_INTERCEPTORS, useClass: OauthAuthenticationService, multi: true },
      {
        provide: toco_lib__WEBPACK_IMPORTED_MODULE_7__["Environment"],
        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], CatalogAppModule);
    /***/
  },

  /***/
  "../catalog/src/app/catalog/catalog.component.scss":
  /*!*********************************************************!*\
    !*** ../catalog/src/app/catalog/catalog.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppCatalogCatalogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".width-card {\n  width: 30%;\n  min-width: 240px;\n  margin-left: 24px;\n  margin-top: 24px;\n}\n\n.card-float-left {\n  float: left;\n}\n\n.center-spinner {\n  width: 90.5%;\n  min-width: 240px;\n  margin-left: 24px;\n  margin-right: 24px;\n  margin-top: 24px;\n}\n\n.back-grey {\n  background: rgba(0, 0, 0, 0.01);\n  margin: 1.5em 1em;\n  padding: 1em;\n  min-width: 18em;\n}\n\n.width-90 {\n  width: 90%;\n  position: relative;\n}\n\n.width-93 {\n  width: 93.5%;\n}\n\ntable {\n  width: 90%;\n}\n\n.margin1em {\n  margin: 1em;\n}\n\n.menu-pull-right {\n  flex: 1 1 auto;\n}\n\ntable.mat-table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n.height-auto {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2F0YWxvZy9zcmMvYXBwL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLFNBQUE7QUNTSjs7QUROQTtFQUNJLG1CQUFBO0FDU0o7O0FETkE7RUFDSSxtQkFBQTtBQ1NKOztBRE5BO0VBQ0ksc0JBQUE7QUNTSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ1NKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNTSjs7QUROQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDU0o7O0FETkE7RUFDSSxhQUFBO0FDU0o7O0FETkE7RUFDSSxZQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKIiwiZmlsZSI6InByb2plY3RzL2NhdGFsb2cvc3JjL2FwcC9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkdGgtY2FyZHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcblxufVxuXG4uY2FyZC1mbG9hdC1sZWZ0e1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNlbnRlci1zcGlubmVyIHtcbiAgICB3aWR0aDogOTAuNSU7XG4gICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5iYWNrLWdyZXl7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDEpO1xuICAgIG1hcmdpbjogMS41ZW0gMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtaW4td2lkdGg6IDE4ZW07XG59XG4ud2lkdGgtOTB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2lkdGgtOTN7XG4gICAgd2lkdGg6IDkzLjUlO1xufVxudGFibGUge1xuICAgIHdpZHRoOiA5MCU7XG59XG4ubWFyZ2luMWVte1xuICAgIG1hcmdpbjogMWVtO1xufVxuLm1lbnUtcHVsbC1yaWdodHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbnRhYmxlLm1hdC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuLmhlaWdodC1hdXRve1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSIsIi53aWR0aC1jYXJkIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5jYXJkLWZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNlbnRlci1zcGlubmVyIHtcbiAgd2lkdGg6IDkwLjUlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uYmFjay1ncmV5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAxKTtcbiAgbWFyZ2luOiAxLjVlbSAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWluLXdpZHRoOiAxOGVtO1xufVxuXG4ud2lkdGgtOTAge1xuICB3aWR0aDogOTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53aWR0aC05MyB7XG4gIHdpZHRoOiA5My41JTtcbn1cblxudGFibGUge1xuICB3aWR0aDogOTAlO1xufVxuXG4ubWFyZ2luMWVtIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5tZW51LXB1bGwtcmlnaHQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxudGFibGUubWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5oZWlnaHQtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/catalog/catalog.component.ts":
  /*!*******************************************************!*\
    !*** ../catalog/src/app/catalog/catalog.component.ts ***!
    \*******************************************************/

  /*! exports provided: CatalogComponent, DialogCatalogJournalInfoDialog */

  /***/
  function catalogSrcAppCatalogCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () {
      return CatalogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogCatalogJournalInfoDialog", function () {
      return DialogCatalogJournalInfoDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _filters_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./filters/filters.component */
    "../catalog/src/app/catalog/filters/filters.component.ts");

    var CatalogComponent = /*#__PURE__*/function () {
      function CatalogComponent(sourceServiceNoAuth, metadata, environment, _snackBar, dialog, activatedRoute, orgService, router) {
        _classCallCheck(this, CatalogComponent);

        this.sourceServiceNoAuth = sourceServiceNoAuth;
        this.metadata = metadata;
        this.environment = environment;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.orgService = orgService;
        this.router = router; // journalList: Journal[] = [];

        this.loading = true;
        this.hasErrors = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.columnsToDisplay = ["title", "rnps", "p-issn"]; //, "url"];

        this.length = 0;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 15, 20];
        this.layoutPosition = [{
          name: "Derecha",
          layout: "row-reverse",
          aling: "center baseline",
          width: "22"
        }, {
          name: "Izquierda",
          layout: "row",
          aling: "center baseline",
          width: "22"
        }, {
          name: "Arriba",
          layout: "column",
          aling: "center center",
          width: "90"
        }, {
          name: "Abajo",
          layout: "column-reverse",
          aling: "center center",
          width: "90"
        }];
        this.currentlayout = this.layoutPosition[1];
        this.topOrganizationPID = null;
        this.topMainOrganization = null;
      } // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
      // @ViewChild(FiltersComponent, { static: true }) filters: FiltersComponent;


      _createClass(CatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.environment.topOrganizationPID) {
            this.topOrganizationPID = this.environment.topOrganizationPID;

            if (localStorage.getItem('topMainOrganization') && localStorage.getItem('topMainOrganization') != '') {
              var response = JSON.parse(localStorage.getItem('topMainOrganization'));
              this.topMainOrganization = response; // new Organization();
              // this.topMainOrganization.deepcopy(response.metadata);

              this.init();
            } else {
              this.orgService.getOrganizationByPID(this.topOrganizationPID).subscribe(function (response) {
                // console.log(response)
                _this3.topMainOrganization = response; // new Organization();
                // this.topMainOrganization.deepcopy(response.metadata);

                localStorage.setItem('topMainOrganization', JSON.stringify(response));

                _this3.init();
              }, function (error) {
                console.log("error");
              }, function () {});
            }
          } // TODO: si no hay un top level organization entonces hay que usar otro tipo de control para las organizaciones...

        }
      }, {
        key: "init",
        value: function init() {
          var _this4 = this;

          this.metadata.setTitleDescription("Catálogo de Revistas Científicas", ""); // this.paginator.firstPage();
          // this.paginator.pageSize = 5;

          this.searchParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          this.activatedRoute.queryParamMap.subscribe({
            next: function next(params) {
              _this4.filtersParams = params; // this.searchParams = this.searchParams.set('size', this.pageSize.toString(10));
              // this.searchParams = this.searchParams.set('page', this.pageIndex.toString(10));

              if (params.has("size")) {
                // this.pageSize = Number.parseInt(params.get("size"), 10);
                _this4.searchParams = _this4.searchParams.set("size", params.get("size"));
              } else {
                _this4.searchParams = _this4.searchParams.set("size", _this4.pageSize.toString(10));
              }

              if (params.has("page")) {
                // this.pageIndex = Number.parseInt(params.get("page"), 10);
                _this4.searchParams = _this4.searchParams.set("page", params.get("page"));
              } else {
                _this4.searchParams = _this4.searchParams.set("page", (_this4.pageIndex + 1).toString(10));
              } // if (params.has(CatalogFilterKeys.source_status)) {
              //   this.searchParams = this.searchParams.set(
              //     CatalogFilterKeys.source_status,
              //     params.get(CatalogFilterKeys.source_status)
              //   );
              // }


              if (params.has(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].source_type)) {
                _this4.searchParams = _this4.searchParams.set(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].source_type, params.get(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].source_type));
              } // TODO: this is not nice, but..


              var query = "";

              if (_this4.topMainOrganization) {
                query = "(organizations.id:" + _this4.topMainOrganization.id + ")";
              }

              if (params.has(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].institutions)) {
                query = _this4.queryAddAndOp(query);
                query = query.concat("(organizations.id:");
                params.get(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].institutions).split(",").forEach(function (uuid, index, array) {
                  query = query.concat(uuid);

                  if (index < array.length - 1) {
                    query = query.concat(" OR ");
                  }
                });
                query = query.concat(")");
              }

              if (params.has(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].subjects)) {
                query = _this4.queryAddAndOp(query);
                query = query.concat("(classifications.id:");
                params.get(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].subjects).split(",").forEach(function (uuid, index, array) {
                  query = query.concat(uuid);

                  if (index < array.length - 1) {
                    query = query.concat(" OR ");
                  }
                });
                query = query.concat(")");
              }

              if (params.has(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].grupo_mes)) {
                query = _this4.queryAddAndOp(query);
                query = query.concat("(classifications.id:");
                params.get(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].grupo_mes).split(",").forEach(function (uuid, index, array) {
                  query = query.concat(uuid);

                  if (index < array.length - 1) {
                    query = query.concat(" OR ");
                  }
                });
                query = query.concat(")");
              }

              if (params.has(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].indexes)) {
                query = _this4.queryAddAndOp(query);
                query = query.concat("(classifications.id:");
                params.get(_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["CatalogFilterKeys"].indexes).split(",").forEach(function (uuid, index, array) {
                  query = query.concat(uuid);

                  if (index < array.length - 1) {
                    query = query.concat(" OR ");
                  }
                });
                query = query.concat(")");
              }

              _this4.searchParams = _this4.searchParams.set("q", query);
              console.log(_this4.searchParams);

              _this4.fetchJournalData();

              console.log('catalog comonent', params, _this4.filtersParams);
            },
            error: function error(e) {},
            complete: function complete() {}
          });
        }
      }, {
        key: "queryAddAndOp",
        value: function queryAddAndOp(query) {
          if (query != "") {
            return query + " AND ";
          }

          return query;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log("change");
        }
      }, {
        key: "filtersChange",
        value: function filtersChange(values) {
          this.filtersParams = Object(_angular_router__WEBPACK_IMPORTED_MODULE_6__["convertToParamMap"])(values); // console.log(this.filtersParams);

          console.log(values);
          console.log(this.router.url);
          values["page"] = this.pageIndex + 1;
          values["size"] = this.pageSize;
          var navigationExtras = {
            relativeTo: this.activatedRoute,
            queryParams: values,
            queryParamsHandling: "",
            replaceUrl: true
          };
          this.router.navigate(["."], navigationExtras); // this.paginator.firstPage();
        }
      }, {
        key: "pageChange",
        value: function pageChange(event) {
          this.pageSize = event.pageSize;
          this.pageIndex = event.pageIndex;
          var navigationExtras = {
            relativeTo: this.activatedRoute,
            queryParams: {
              page: event.pageIndex + 1,
              size: event.pageSize
            },
            queryParamsHandling: "merge"
          };
          this.router.navigate(["."], navigationExtras);
        }
      }, {
        key: "fetchJournalData",
        value: function fetchJournalData() {
          var _this5 = this;

          this.loading = true;
          this.sourceServiceNoAuth.getSources(this.searchParams).subscribe(function (values) {
            _this5.length = values.hits.total;
            var arr = new Array();
            values.hits.hits.forEach(function (item) {
              console.log(item);
              var j = new toco_lib__WEBPACK_IMPORTED_MODULE_7__["Journal"]();
              j.deepcopy(item.metadata);
              j.uuid = item.metadata["source_uuid"];
              j.data.deepcopy(item.metadata);
              console.log(j);
              arr.push(j);
            });
            _this5.dataSource.data = arr;
            console.log(values);
          }, function (err) {
            console.log("error: " + err + ".");
          }, function () {
            console.log("complete");
            _this5.loading = false;
          });
        }
      }, {
        key: "onScrollUp",
        value: function onScrollUp() {// console.log("scrolled up!!");
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          if (this.dataSource.data.length === 0 && this.hasErrors) {
            //this.loading = false;
            return true;
          }

          return false;
        }
      }, {
        key: "isLoading",
        value: function isLoading() {
          return this.loading;
        }
      }, {
        key: "openme",
        value: function openme() {
          var a = navigator.userAgent.match(/Android/i);
          var b = navigator.userAgent.match(/BlackBerry/i);
          var apple = navigator.userAgent.match(/iPhone|iPad|iPod/i);
          var o = navigator.userAgent.match(/Opera Mini/i);
          var i = navigator.userAgent.match(/IEMobile/i);

          if (a != null || b != null || apple != null || o != null || i != null) {
            return false;
          }

          return true;
        }
      }, {
        key: "changeLayoutPosition",
        value: function changeLayoutPosition(index) {
          this.currentlayout = this.layoutPosition[index];
        }
      }, {
        key: "viewJournal",
        value: function viewJournal(uuid) {
          var _this6 = this;

          this.sourceServiceNoAuth.getSourceByUUID(uuid).subscribe(function (response) {
            console.log(response);

            if (response) {
              var journalVersion = new toco_lib__WEBPACK_IMPORTED_MODULE_7__["JournalVersion"]();
              journalVersion.data.deepcopy(response.metadata);
              journalVersion.id = uuid;

              var dialogRef = _this6.dialog.open(DialogCatalogJournalInfoDialog, {
                data: {
                  journalVersion: journalVersion
                }
              });

              dialogRef.afterClosed();
            } else {
              var m = new toco_lib__WEBPACK_IMPORTED_MODULE_7__["MessageHandler"](_this6._snackBar);
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_7__["StatusCode"].serverError, "No fue posible encontrar la Revista");
            }
          }, function (error) {
            console.log("error");
          }, function () {});
        }
      }]);

      return CatalogComponent;
    }();

    CatalogComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_7__["SourceServiceNoAuth"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_7__["MetadataService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_7__["Environment"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_7__["OrganizationServiceNoAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "catalog-search",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./catalog.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/catalog/catalog.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("detailExpand", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: "0px",
        minHeight: "0",
        display: "none"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: "*"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./catalog.component.scss */
      "../catalog/src/app/catalog/catalog.component.scss"))["default"]]
    })], CatalogComponent);

    var DialogCatalogJournalInfoDialog = /*#__PURE__*/function () {
      function DialogCatalogJournalInfoDialog(dialogRef, data) {
        _classCallCheck(this, DialogCatalogJournalInfoDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogCatalogJournalInfoDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogCatalogJournalInfoDialog;
    }();

    DialogCatalogJournalInfoDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogCatalogJournalInfoDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "dialog-catalog-journal-info",
      template: "\n    <mat-dialog-content class=\"height-auto\">\n      <catalog-journal-view-info\n        [journalVersion]=\"data.journalVersion\"\n        [showVersionLabel]=\"false\"\n      >\n      </catalog-journal-view-info>\n    </mat-dialog-content>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], DialogCatalogJournalInfoDialog);
    /***/
  },

  /***/
  "../catalog/src/app/catalog/filters/filters.component.scss":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/catalog/filters/filters.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppCatalogFiltersFiltersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvY2F0YWxvZy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/catalog/filters/filters.component.ts":
  /*!***************************************************************!*\
    !*** ../catalog/src/app/catalog/filters/filters.component.ts ***!
    \***************************************************************/

  /*! exports provided: CatalogFilterKeys, FiltersComponent */

  /***/
  function catalogSrcAppCatalogFiltersFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogFilterKeys", function () {
      return CatalogFilterKeys;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
      return FiltersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var CatalogFilterKeys = {
      source_type: "source_type",
      institutions: "organizations",
      subjects: "subjects",
      grupo_mes: "grupo_mes",
      indexes: "indexes"
    };

    var FiltersComponent = /*#__PURE__*/function () {
      function FiltersComponent(_formBuilder) {
        _classCallCheck(this, FiltersComponent);

        this._formBuilder = _formBuilder;
        this.topMainOrganization = null;
        this.paramsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterPanel = null;
        this.institutionTree = [];
        this.topOrganizationPID = "";
        this.filters = new Map();
      }

      _createClass(FiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initPanels(); // if (this.envService.extraArgs && this.envService.extraArgs["topOrganizationPID"]) {
          //   this.topOrganizationPID = this.envService.extraArgs["topOrganizationPID"];
          //   this.orgService.getOrganizationByPID(this.topOrganizationPID).subscribe(
          //     (response) => {
          //       this.topMainOrganization = new Organization();
          //       this.topMainOrganization.deepcopy(response.metadata);
          //       this.initPanels()
          //     },
          //     (error) => {
          //       console.log("error");
          //     },
          //     () => {}
          //   );
          // }
          // // TODO: si no hay un top level organization entonces hay que usar otro tipo de control para las organizaciones...
        }
      }, {
        key: "initFilters",
        value: function initFilters() {
          if (this.params.has(CatalogFilterKeys.grupo_mes)) {
            this.filters.set(CatalogFilterKeys.grupo_mes, this.params.get(CatalogFilterKeys.grupo_mes));
          }

          if (this.params.has(CatalogFilterKeys.institutions)) {
            console.log("AQUI HAY ALGO COJONE !!!!! ", this.params.get(CatalogFilterKeys.institutions));
            this.filters.set(CatalogFilterKeys.institutions, this.params.get(CatalogFilterKeys.institutions));
            console.log("CLARO QWUE HAY!!!!!!  ", this.filters.get(CatalogFilterKeys.institutions));
          }

          if (this.params.has(CatalogFilterKeys.indexes)) {
            this.filters.set(CatalogFilterKeys.indexes, this.params.get(CatalogFilterKeys.indexes));
          }

          if (this.params.has(CatalogFilterKeys.subjects)) {
            this.filters.set(CatalogFilterKeys.subjects, this.params.get(CatalogFilterKeys.subjects));
          }

          if (this.params.has(CatalogFilterKeys.source_type)) {
            this.filters.set(CatalogFilterKeys.source_type, this.params.get(CatalogFilterKeys.source_type));
          }

          console.log('init filters....', this.params, this.filters); // this.filters.set(CatalogFilterKeys.subjects,
          //   this.params.has(CatalogFilterKeys.subjects) ?
          //     this.params.get(CatalogFilterKeys.subjects)
          //     : ""
          // );
        }
      }, {
        key: "initPanels",
        value: function initPanels() {
          var _this7 = this;

          this.formGroup = this._formBuilder.group({});
          this.initFilters();
          this.formGroup.valueChanges.subscribe(function (values) {
            // this.institutionSelection = values[CatalogFilterKeys.institutions];
            // this.changeTreeFilter();
            console.log('emit values...', values);

            _this7.changeTermMultipleFilter(values, CatalogFilterKeys.institutions, 'value');

            _this7.changeTermMultipleFilter(values, CatalogFilterKeys.subjects);

            _this7.changeTermMultipleFilter(values, CatalogFilterKeys.grupo_mes);

            _this7.changeTermMultipleFilter(values, CatalogFilterKeys.indexes);

            if (values[CatalogFilterKeys.source_type] && values[CatalogFilterKeys.source_type].length > 0) {
              _this7.filters.set(CatalogFilterKeys.source_type, values[CatalogFilterKeys.source_type]);
            } else {
              _this7.filters.set(CatalogFilterKeys.source_type, '');
            }

            console.log('filters...', _this7.filters); // if (
            //   values[CatalogFilterKeys.source_status] &&
            //   values[CatalogFilterKeys.source_status] != ""
            // ) {
            //   this.filters.set(CatalogFilterKeys.source_status,
            //     values[CatalogFilterKeys.source_status]);
            // }
            // this.params = convertToParamMap(this.filters);

            console.log('values again...', values); // console.log(this.filters);

            var res = {};

            _this7.filters.forEach(function (value, key) {
              console.log(value, key);

              if (value != "") {
                res[key] = value;
              }
            }); // console.log(this.filters.keys());
            // for (const key in this.filters.keys()) {
            //   console.log(key)
            //   console.log(this.filters[key]);
            //   if (this.filters.get(key) != "") {
            //     res.set(key, this.filters.get(key));
            //   }
            // }


            console.log('emit res...', res);

            _this7.paramsChange.emit(res);
          }, function (err) {
            console.log("error: " + err + ".");
          }, function () {
            console.log("complete");
          });
          this.filterPanel = {
            name: 'filterPanel',
            label: 'Filtros',
            description: '',
            iconName: 'filter',
            controlType: toco_lib__WEBPACK_IMPORTED_MODULE_3__["ContainerPanelComponent"],
            formSection: this.formGroup,
            formSectionContent: [{
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"].getFormControlByDefault(),
              name: 'source_type',
              label: 'Tipo de Revista',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["FormFieldType"].select_expr,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"],
              required: false,
              width: "100%",
              value: this.filters.has(CatalogFilterKeys.source_type) ? this.filters.get(CatalogFilterKeys.source_type) : [],
              extraContent: {
                multiple: false,
                getOptions: function getOptions() {
                  var opts = [{
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"].JOURNAL.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"].JOURNAL.value
                  }, {
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"].STUDENT.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"].STUDENT.value
                  }, {
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"].POPULARIZATION.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"].POPULARIZATION.value
                  }];
                  return opts;
                }
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"].getFormControlByDefault(),
              name: CatalogFilterKeys.institutions,
              label: "Instituciones",
              type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["FormFieldType"].select_filter,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SelectFilterComponent"],
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_3__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_3__["HintPosition"].start, ''),
              required: false,
              width: "100%",
              extraContent: {
                multiple: true,
                selectedTermsIds: this.filters.has(CatalogFilterKeys.institutions) ? this.filters.get(CatalogFilterKeys.institutions).split(",") : [],
                // observable: this.searchService.getOrganizationById(this.topOrganizationPID),
                getOptions: function getOptions() {
                  var opts = [];
                  console.log(_this7.topMainOrganization.metadata.relationships);

                  _this7.topMainOrganization.metadata.relationships.forEach(function (child) {
                    opts.push({
                      value: child.id,
                      label: child.label
                    });
                  });

                  console.log(opts);
                  return opts;
                },
                selectionChange: function selectionChange(selection) {
                  console.log(selection);
                }
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"].getFormControlByDefault(),
              name: CatalogFilterKeys.subjects,
              label: "Materias",
              type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["FormFieldType"].vocabulary,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabularyComponent"],
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_3__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_3__["HintPosition"].start, ''),
              required: false,
              width: "100%",
              extraContent: {
                multiple: true,
                selectedTermsIds: this.filters.has(CatalogFilterKeys.subjects) ? this.filters.get(CatalogFilterKeys.subjects).split(",") : [],
                vocab: toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].SUBJECTS,
                level: 0
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"].getFormControlByDefault(),
              name: CatalogFilterKeys.indexes,
              label: "Indizaciones",
              type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["FormFieldType"].vocabulary,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabularyComponent"],
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_3__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_3__["HintPosition"].start, ''),
              required: false,
              width: "100%",
              extraContent: {
                multiple: true,
                selectedTermsIds: this.filters.has(CatalogFilterKeys.indexes) ? this.filters.get(CatalogFilterKeys.indexes).split(",") : [],
                vocab: toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].INDEXES,
                level: 0
              }
            }]
          };
        } // private initInstitutionTreeVocab(nodes: TermNode[]) {
        //   const opts: SelectOptionNode[] = [];
        //   nodes.forEach(node => {
        //     opts.push({
        //       element: {
        //         value: node.term.uuid,
        //         label: node.term.identifier
        //       },
        //       children: this.initInstitutionTreeVocab(node.children)
        //     });
        //   });
        //   return opts;
        // }
        // private initInstitutionTree(node: any) {
        //   if (node && node.children) {
        //     const opts: SelectOptionNode[] = [];
        //     node.children.forEach((node: any) => {
        //       opts.push({
        //         element: {
        //           value: node.uuid,
        //           label: node.name + " (" + node.count + ")"
        //         },
        //         children: this.initInstitutionTree(node)
        //       });
        //     });
        //     return opts;
        //   }
        //   return null;
        // }
        // private changeTreeFilter() {
        //   if (this.institutionTree && this.institutionSelection) {
        //     const selection = this.findFlatInInstTree(this.institutionTree);
        //     let val = "";
        //     selection.forEach(element => {
        //       val = val.concat(element.element.value, ",");
        //     });
        //     // val = val.concat(this.topOrganizationPID)
        //     val = val.slice(0, val.length - 1);
        //     // if (val != ''){
        //     // this.filters[CatalogFilterKeys.institutions] = val;
        //     this.filters.set(CatalogFilterKeys.institutions, val);
        //     // }
        //     // else if (this.topOrganizationPID != ''){
        //     //   this.filters[CatalogFilterKeys.institutions] = this.topOrganizationPID;
        //     // }
        //   }
        // }
        // private findFlatInInstTree(children: SelectOptionNode[]) {
        //   let result: FlatTreeNode[] = [];
        //   children.forEach(node => {
        //     const to_add = this.institutionSelection.find(
        //       f => f.element.value == node.element.value
        //     );
        //     if (to_add != undefined) {
        //       result.push(to_add);
        //     } else {
        //       result = result.concat(this.findFlatInInstTree(node.children));
        //     }
        //   });
        //   return result;
        // }

      }, {
        key: "changeTermMultipleFilter",
        value: function changeTermMultipleFilter(values, key) {
          var valuekey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';

          if (values[key]) {
            var val = "";
            values[key].forEach(function (element) {
              console.log(element);
              val = val.concat(element[valuekey], ",");
            });
            val = val.slice(0, val.length - 1); // if (val != '') {

            this.filters.set(key, val); // this.filters[key] = val;
            // }
          }
        }
      }]);

      return FiltersComponent;
    }();

    FiltersComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FiltersComponent.prototype, "params", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FiltersComponent.prototype, "topMainOrganization", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FiltersComponent.prototype, "paramsChange", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-search-filters",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filters.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/catalog/filters/filters.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filters.component.scss */
      "../catalog/src/app/catalog/filters/filters.component.scss"))["default"]]
    })], FiltersComponent); // (relations.uuid:4dbd2cda-6e42-4858-a999-1fa6ec210657 OR relations.uuid:eeab373f-f904-4f1e-ad91-b36e0e04fa3b)AND(relations.uuid:2f528a11-45d0-4ded-b4f4-98b791c0014e)
    // OR(relations.inst.uuid=a1234ORrelations.inst.uuid:23)

    /***/
  },

  /***/
  "../catalog/src/app/home/home.component.scss":
  /*!***************************************************!*\
    !*** ../catalog/src/app/home/home.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".w-card, .w-60 {\n  min-width: 15em !important;\n  width: auto;\n}\n\n.m-1 {\n  margin: 1em;\n}\n\n.w-60 {\n  width: 60%;\n}\n\n.mat-image-in-card {\n  width: 100% !important;\n  min-width: 15em;\n  max-width: 30em;\n  height: auto;\n  max-height: 15em;\n}\n\n.mat-card-with-img {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2F0YWxvZy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBRERBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0kseUhBQUE7QUNJSiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctY2FyZCwgLnctNjB7XG4gICAgbWluLXdpZHRoOiAxNWVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG59XG4ubS0xe1xuICAgIG1hcmdpbjogMWVtO1xufVxuLnctNjB7XG4gICAgd2lkdGg6IDYwJTtcbn1cbi5tYXQtaW1hZ2UtaW4tY2FyZHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTVlbTtcbiAgICBtYXgtd2lkdGg6IDMwZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1ZW07XG59XG5cbi5tYXQtY2FyZC13aXRoLWltZ3tcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuIiwiLnctY2FyZCwgLnctNjAge1xuICBtaW4td2lkdGg6IDE1ZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5tLTEge1xuICBtYXJnaW46IDFlbTtcbn1cblxuLnctNjAge1xuICB3aWR0aDogNjAlO1xufVxuXG4ubWF0LWltYWdlLWluLWNhcmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDE1ZW07XG4gIG1heC13aWR0aDogMzBlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNWVtO1xufVxuXG4ubWF0LWNhcmQtd2l0aC1pbWcge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/home/home.component.ts":
  /*!*************************************************!*\
    !*** ../catalog/src/app/home/home.component.ts ***!
    \*************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function catalogSrcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! projects/catalog/src/app/catalog/catalog.component */
    "../catalog/src/app/catalog/catalog.component.ts");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(environment, sourceService, oauthStorage, sourceServiceNoAuth, orgService, _snackBar, dialog) {
        _classCallCheck(this, HomeComponent);

        this.environment = environment;
        this.sourceService = sourceService;
        this.oauthStorage = oauthStorage;
        this.sourceServiceNoAuth = sourceServiceNoAuth;
        this.orgService = orgService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.topMainOrganization = null;
        this.stats = null;
        this.error = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (this.environment.topOrganizationPID) {
            this.topOrganizationPID = this.environment.topOrganizationPID;

            if (localStorage.getItem('topMainOrganization') && localStorage.getItem('topMainOrganization') != '') {
              var response = JSON.parse(localStorage.getItem('topMainOrganization'));
              this.topMainOrganization = response; // new Organization();
              // this.topMainOrganization.deepcopy(response.metadata);

              this.init();
            } else {
              this.orgService.getOrganizationByPID(this.topOrganizationPID).subscribe(function (response) {
                // console.log(response)
                _this8.topMainOrganization = response; // new Organization();
                // this.topMainOrganization.deepcopy(response.metadata);

                localStorage.setItem('topMainOrganization', JSON.stringify(response));

                _this8.init();
              }, function (error) {
                console.log("error");
                _this8.error = true;
              }, function () {});
            }
          }

          this.institutionsCount = 0;
          this.records = 0;
          this.sourcesCount = 0;
          this.lastSources = new Array(); // this.catalogService.getSourcesOrgAggregation(this.topOrganizationPID).subscribe(
          //     response => {
          //         if (response && response.data && response.data.home_statics) {
          //           console.log(response)
          //             // this.institutionsCount = response.data.home_statics.institutions_count;
          //             // this.records = response.data.home_statics.records;
          //             // this.sourcesCount = response.data.home_statics.soources_count;
          //             // response.data.home_statics.last_sources.forEach( (j: Journal) => {
          //             //     let jl = new Journal();
          //             //     jl.deepcopy(j);
          //             //     this.lastSources.push( jl );
          //             // });
          //         }
          //         console.log(response);
          //       },
          //       (error: any) => {},
          //       () => {}
          // );
        }
      }, {
        key: "init",
        value: function init() {
          var _this9 = this;

          this.sourceServiceNoAuth.getSourcesStats(this.topMainOrganization.id).subscribe(function (response) {
            if (response && response.status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].SUCCESS) {
              _this9.stats = response.data.aggr;
              var types = [];

              _this9.stats.source_types.forEach(function (element) {
                if (element.source_type == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].JOURNAL.value) {
                  element['label'] = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].JOURNAL.label;
                  types.push(element);
                }

                if (element.source_type == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].STUDENT.value) {
                  element['label'] = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].STUDENT.label;
                  types.push(element);
                }

                if (element.source_type == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].POPULARIZATION.value) {
                  element['label'] = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].POPULARIZATION.label;
                  types.push(element);
                }
              });

              _this9.stats.source_types = types;
              console.log(_this9.stats);
            }
          }, function (err) {
            console.log("error: " + err + ".");
            _this9.error = true;
          }, function () {
            console.log("complete");
          });
        }
      }, {
        key: "viewJournal",
        value: function viewJournal(uuid) {
          var _this10 = this;

          this.sourceServiceNoAuth.getSourceByUUID(uuid).subscribe(function (response) {
            console.log(response);

            if (response.metadata) {
              var journalVersion = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["JournalVersion"]();
              journalVersion.data.deepcopy(response.metadata);
              journalVersion.source_uuid = response.id;

              var dialogRef = _this10.dialog.open(projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["DialogCatalogJournalInfoDialog"], {
                data: {
                  journalVersion: journalVersion,
                  journalUUID: uuid
                }
              });

              dialogRef.afterClosed();
            } else {
              var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](_this10._snackBar);
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].serverError, "No fue posible encontrar la Revista");
            }
          }, function (error) {
            console.log("error");
            error = true;
          }, function () {});
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["Environment"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceService"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthStorage"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceServiceNoAuth"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["OrganizationServiceNoAuth"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "../catalog/src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/editor/editor.component.scss":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/mysources/editor/editor.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesEditorEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/editor/editor.component.ts":
  /*!***************************************************************!*\
    !*** ../catalog/src/app/mysources/editor/editor.component.ts ***!
    \***************************************************************/

  /*! exports provided: MySourcesEditorComponent */

  /***/
  function catalogSrcAppMysourcesEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesEditorComponent", function () {
      return MySourcesEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var MySourcesEditorComponent = /*#__PURE__*/function () {
      function MySourcesEditorComponent() {
        _classCallCheck(this, MySourcesEditorComponent);

        this.displayedColumns = ["name", "source_status", "actions"];
        this.editorDataSource = null;
        this.editorLength = 0;
        this.loading = true;
      }

      _createClass(MySourcesEditorComponent, [{
        key: "init",
        value: function init() {
          this.editorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.asEditor);
          this.editorLength = this.asEditor.length;
          this.editorDataSource.paginator = this.editorPaginator;
          this.editorDataSource.sort = this.editorSort;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
      }, {
        key: "editorApplyFilter",
        value: function editorApplyFilter(filterValue) {
          this.editorDataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return MySourcesEditorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("editorPaginator", {
      read: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],
      "static": true
    })], MySourcesEditorComponent.prototype, "editorPaginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("editorSort", {
      read: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"],
      "static": true
    })], MySourcesEditorComponent.prototype, "editorSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MySourcesEditorComponent.prototype, "asEditor", void 0);
    MySourcesEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-mysources-editor",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editor.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/editor/editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editor.component.scss */
      "../catalog/src/app/mysources/editor/editor.component.scss"))["default"]]
    })], MySourcesEditorComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/manager/manager.component.scss":
  /*!*******************************************************************!*\
    !*** ../catalog/src/app/mysources/manager/manager.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesManagerManagerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/manager/manager.component.ts":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/mysources/manager/manager.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MySourcesManagerComponent, MySourcesManagerPermissionDialog */

  /***/
  function catalogSrcAppMysourcesManagerManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesManagerComponent", function () {
      return MySourcesManagerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesManagerPermissionDialog", function () {
      return MySourcesManagerPermissionDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var MySourcesManagerComponent = /*#__PURE__*/function () {
      function MySourcesManagerComponent(dialog) {
        _classCallCheck(this, MySourcesManagerComponent);

        this.dialog = dialog;
        this.displayedColumns = ["name", "source_status", "actions"];
        this.managerDataSource = null;
        this.managerLength = 0;
        this.loading = true;
      }

      _createClass(MySourcesManagerComponent, [{
        key: "init",
        value: function init() {
          this.managerDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.asManager);
          this.managerLength = this.asManager.length;
          this.managerDataSource.paginator = this.managerPaginator;
          this.managerDataSource.sort = this.managerSort;
          console.log(this.managerPaginator, this.managerDataSource);
          this.loading = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
      }, {
        key: "managerApplyFilter",
        value: function managerApplyFilter(filterValue) {
          this.managerDataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "openPermission",
        value: function openPermission(source) {
          this.dialog.open(MySourcesManagerPermissionDialog, {
            width: "80%",
            data: {
              source: source
            }
          });
        }
      }]);

      return MySourcesManagerComponent;
    }();

    MySourcesManagerComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("managerPaginator", {
      read: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],
      "static": true
    })], MySourcesManagerComponent.prototype, "managerPaginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("managerSort", {
      read: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"],
      "static": true
    })], MySourcesManagerComponent.prototype, "managerSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MySourcesManagerComponent.prototype, "asManager", void 0);
    MySourcesManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-mysources-manager",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manager.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/manager/manager.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manager.component.scss */
      "../catalog/src/app/mysources/manager/manager.component.scss"))["default"]]
    })], MySourcesManagerComponent);

    var MySourcesManagerPermissionDialog = /*#__PURE__*/function () {
      function MySourcesManagerPermissionDialog(dialogRef, data) {
        _classCallCheck(this, MySourcesManagerPermissionDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(MySourcesManagerPermissionDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.source = this.data.source;
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {}
      }]);

      return MySourcesManagerPermissionDialog;
    }();

    MySourcesManagerPermissionDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MySourcesManagerPermissionDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-mysources-manager-permissions",
      template: "<mat-dialog-content class=\"height-auto\">\n  <catalog-source-permission [source]=\"source\"></catalog-source-permission>\n  </mat-dialog-content>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MySourcesManagerPermissionDialog);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/mysources.component.scss":
  /*!*************************************************************!*\
    !*** ../catalog/src/app/mysources/mysources.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesMysourcesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL215c291cmNlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/mysources.component.ts":
  /*!***********************************************************!*\
    !*** ../catalog/src/app/mysources/mysources.component.ts ***!
    \***********************************************************/

  /*! exports provided: MySourcesComponent */

  /***/
  function catalogSrcAppMysourcesMysourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesComponent", function () {
      return MySourcesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var MySourcesComponent = /*#__PURE__*/function () {
      function MySourcesComponent(sourceService, oauthStorage, environment, orgService) {
        _classCallCheck(this, MySourcesComponent);

        this.sourceService = sourceService;
        this.oauthStorage = oauthStorage;
        this.environment = environment;
        this.orgService = orgService;
        this.isAdmin = false;
        this.terms = new Array();
        this.loading = true;
      }

      _createClass(MySourcesComponent, [{
        key: "init",
        value: function init(response) {
          var _this11 = this;

          this.asEditor = response.data.sources.editor;
          this.asManager = response.data.sources.manager;
          this.isAdmin = response.data.sources.admin;
          this.terms = response.data.sources.terms;
          this.organizations = response.data.sources.organizations;

          if (this.isAdmin) {
            // TODO: use cache!!!
            if (this.environment.topOrganizationPID) {
              if (localStorage.getItem('topMainOrganization') && localStorage.getItem('topMainOrganization') != '') {
                var _response = JSON.parse(localStorage.getItem('topMainOrganization'));

                this.organizations = [_response];
              } else {
                this.orgService.getOrganizationByPID(this.environment.topOrganizationPID).subscribe(function (response) {
                  _this11.organizations = [response];
                }, function (error) {}, function () {});
              }
            }
          }

          this.loading = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.sourceService.getMySourcesAllRoles().subscribe(function (response) {
            console.log(response);
            localStorage.setItem('mysources', JSON.stringify(response));
            _this12.loading = false;

            _this12.init(response);
          }, function (err) {
            console.log("error: " + err + ".");
          }, function () {
            console.log("complete");
          }); // if (localStorage.getItem('mysources') && localStorage.getItem('mysources') != '' ) {
          //   const response = JSON.parse(localStorage.getItem('mysources'));
          //   this.init(response);
          // } else {
          //   this.sourceService.getMySourcesAllRoles().subscribe(
          //     (response) => {
          //       console.log(response);
          //       localStorage.setItem('mysources', JSON.stringify(response));
          //       this.loading = false;
          //       this.init(response)
          //     },
          //     (err: any) => {
          //       console.log("error: " + err + ".");
          //     },
          //     () => {
          //       console.log("complete");
          //     }
          //   );
          // }
        }
      }]);

      return MySourcesComponent;
    }();

    MySourcesComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceService"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthStorage"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["Environment"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationServiceNoAuth"]
      }];
    };

    MySourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-mysources",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mysources.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/mysources.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mysources.component.scss */
      "../catalog/src/app/mysources/mysources.component.scss"))["default"]]
    })], MySourcesComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/organizations/organizations.component.scss":
  /*!*******************************************************************************!*\
    !*** ../catalog/src/app/mysources/organizations/organizations.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesOrganizationsOrganizationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/organizations/organizations.component.ts":
  /*!*****************************************************************************!*\
    !*** ../catalog/src/app/mysources/organizations/organizations.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DynamicFlatNode, DynamicDataSource, MySourcesOrganizationsComponent, MySourcesOrganizationsPermissionDialog */

  /***/
  function catalogSrcAppMysourcesOrganizationsOrganizationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function () {
      return DynamicFlatNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function () {
      return DynamicDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesOrganizationsComponent", function () {
      return MySourcesOrganizationsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesOrganizationsPermissionDialog", function () {
      return MySourcesOrganizationsPermissionDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /** Flat node with expandable and level information */


    var DynamicFlatNode = function DynamicFlatNode(item) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var expandable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, DynamicFlatNode);

      this.item = item;
      this.level = level;
      this.expandable = expandable;
      this.isLoading = isLoading;
    };

    var DynamicDataSource = /*#__PURE__*/function () {
      function DynamicDataSource(_treeControl, orgService) {
        _classCallCheck(this, DynamicDataSource);

        this._treeControl = _treeControl;
        this.orgService = orgService;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
      }

      _createClass(DynamicDataSource, [{
        key: "connect",
        value: function connect(collectionViewer) {
          var _this13 = this;

          this._treeControl.expansionModel.onChange.subscribe(function (change) {
            if (change.added || change.removed) {
              _this13.handleTreeControl(change);
            }
          });

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return _this13.data;
          }));
        }
        /** Handle expand/collapse behaviors */

      }, {
        key: "handleTreeControl",
        value: function handleTreeControl(change) {
          var _this14 = this;

          if (change.added) {
            change.added.forEach(function (node) {
              return _this14.toggleNode(node, true);
            });
          }

          if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) {
              return _this14.toggleNode(node, false);
            });
          }
        }
        /**
         * Toggle the node, remove from display list
         */

      }, {
        key: "toggleNode",
        value: function toggleNode(node, expand) {
          var _this15 = this;

          node.isLoading = true;
          var index = this.data.indexOf(node);

          if (node.item.metadata.relationships.length <= 0 || index < 0) {
            // If no children, or cannot find the node, no op
            return;
          }

          if (expand) {
            this.orgService.getOrganizationRelationships(node.item.metadata.id, toco_lib__WEBPACK_IMPORTED_MODULE_6__["OrganizationRelationships"].CHILD.value).subscribe(function (response) {
              var _this15$data;

              var nodes = response.map(function (org) {
                return new DynamicFlatNode(org, node.level + 1, org.metadata.relationships.length > 0);
              });

              (_this15$data = _this15.data).splice.apply(_this15$data, [index + 1, 0].concat(_toConsumableArray(nodes)));

              _this15.dataChange.next(_this15.data);

              node.isLoading = false;
            }, function (error) {}, function () {});
          } else {
            var count = 0;

            for (var i = index + 1; i < this.data.length && this.data[i].level > node.level; i++) {
              count++;
            }

            this.data.splice(index + 1, count);
            this.dataChange.next(this.data);
            node.isLoading = false;
          }
        }
      }, {
        key: "data",
        get: function get() {
          return this.dataChange.value;
        },
        set: function set(value) {
          this._treeControl.dataNodes = value;
          this.dataChange.next(value);
        }
      }]);

      return DynamicDataSource;
    }();

    DynamicDataSource.ctorParameters = function () {
      return [{
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_6__["OrganizationServiceNoAuth"]
      }];
    };

    DynamicDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], DynamicDataSource);

    var MySourcesOrganizationsComponent = /*#__PURE__*/function () {
      function MySourcesOrganizationsComponent(orgService, dialog) {
        _classCallCheck(this, MySourcesOrganizationsComponent);

        this.orgService = orgService;
        this.dialog = dialog;
        this.organizations = new Array();
        this.error = false;

        this.getLevel = function (node) {
          return node.level;
        };

        this.isExpandable = function (node) {
          return node.expandable;
        };

        this.hasChild = function (_, _nodeData) {
          return _nodeData.expandable;
        }; // this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
        // this.dataSource = new DynamicDataSource(this.treeControl, orgService);

      }

      _createClass(MySourcesOrganizationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.dataSource.data = this.organizations.map(
          //   org =>
          //     new DynamicFlatNode(org, 1, org.metadata.relationships.length > 0)
          // );
        }
      }, {
        key: "openPermission",
        value: function openPermission(org) {
          console.log(org);
          this.dialog.open(MySourcesOrganizationsPermissionDialog, {
            width: "80%",
            data: {
              org: org.item.metadata
            }
          });
        }
      }]);

      return MySourcesOrganizationsComponent;
    }();

    MySourcesOrganizationsComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_6__["OrganizationServiceNoAuth"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], MySourcesOrganizationsComponent.prototype, "organizations", void 0);
    MySourcesOrganizationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'catalog-mysources-organizations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./organizations.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/organizations/organizations.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./organizations.component.scss */
      "../catalog/src/app/mysources/organizations/organizations.component.scss"))["default"]]
    })], MySourcesOrganizationsComponent);

    var MySourcesOrganizationsPermissionDialog = /*#__PURE__*/function () {
      function MySourcesOrganizationsPermissionDialog(dialogRef, data) {
        _classCallCheck(this, MySourcesOrganizationsPermissionDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(MySourcesOrganizationsPermissionDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.org = this.data.org;
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {}
      }]);

      return MySourcesOrganizationsPermissionDialog;
    }();

    MySourcesOrganizationsPermissionDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MySourcesOrganizationsPermissionDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "catalog-mysources-organizations-permissions",
      template: "<mat-dialog-content class=\"height-auto\">\n  <catalog-organization-permission [org]=\"org\"></catalog-organization-permission>\n  </mat-dialog-content>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], MySourcesOrganizationsPermissionDialog);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesPermissionOrganizationPermissionOrganizationPermissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL3Blcm1pc3Npb24vb3JnYW5pemF0aW9uLXBlcm1pc3Npb24vb3JnYW5pemF0aW9uLXBlcm1pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.ts":
  /*!************************************************************************************************************!*\
    !*** ../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: MySourcesOrganizationPermissionComponent */

  /***/
  function catalogSrcAppMysourcesPermissionOrganizationPermissionOrganizationPermissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesOrganizationPermissionComponent", function () {
      return MySourcesOrganizationPermissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var MySourcesOrganizationPermissionComponent = /*#__PURE__*/function () {
      function MySourcesOrganizationPermissionComponent(sourceService) {
        _classCallCheck(this, MySourcesOrganizationPermissionComponent);

        this.sourceService = sourceService;
        this.managers = new Array();
        this.user = null;
      }

      _createClass(MySourcesOrganizationPermissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          console.log(this.org);
          this.sourceService.permissionGetOrganizationManagers(this.org.id).subscribe(function (response) {
            _this16.managers = response.data.permission.users;
          }, function (err) {}, function () {});
        }
      }, {
        key: "selectedUser",
        value: function selectedUser(user) {
          this.user = user;
        }
      }, {
        key: "grantManager",
        value: function grantManager() {
          var _this17 = this;

          this.sourceService.permissionSetOrganizationManager(this.org.id, this.user.id, true).subscribe(function (response) {
            _this17.ngOnInit();
          }, function (err) {}, function () {});
          this.user = null;
        }
      }, {
        key: "denyManager",
        value: function denyManager(user) {
          var _this18 = this;

          this.sourceService.permissionSetOrganizationManager(this.org.id, user.id, false).subscribe(function (response) {
            _this18.ngOnInit();
          }, function (err) {}, function () {});
        }
      }]);

      return MySourcesOrganizationPermissionComponent;
    }();

    MySourcesOrganizationPermissionComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_2__["SourceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MySourcesOrganizationPermissionComponent.prototype, "org", void 0);
    MySourcesOrganizationPermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-organization-permission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./organization-permission.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./organization-permission.component.scss */
      "../catalog/src/app/mysources/permission/organization-permission/organization-permission.component.scss"))["default"]]
    })], MySourcesOrganizationPermissionComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/permission/source-permission/source-permission.component.scss":
  /*!**************************************************************************************************!*\
    !*** ../catalog/src/app/mysources/permission/source-permission/source-permission.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesPermissionSourcePermissionSourcePermissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL3Blcm1pc3Npb24vc291cmNlLXBlcm1pc3Npb24vc291cmNlLXBlcm1pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/permission/source-permission/source-permission.component.ts":
  /*!************************************************************************************************!*\
    !*** ../catalog/src/app/mysources/permission/source-permission/source-permission.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: MySourcesSourcePermissionComponent */

  /***/
  function catalogSrcAppMysourcesPermissionSourcePermissionSourcePermissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesSourcePermissionComponent", function () {
      return MySourcesSourcePermissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var MySourcesSourcePermissionComponent = /*#__PURE__*/function () {
      function MySourcesSourcePermissionComponent(sourceService) {
        _classCallCheck(this, MySourcesSourcePermissionComponent);

        this.sourceService = sourceService;
        this.editors = new Array();
        this.managers = new Array();
        this.user = null;
      }

      _createClass(MySourcesSourcePermissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.sourceService.permissionGetSourceEditors(this.source.id).subscribe(function (response) {
            console.log(response);
            _this19.editors = response.data.permission.users;
          }, function (err) {
            console.log('error: ' + err + '.');
          }, function () {
            console.log('complete');
          });
          this.sourceService.permissionGetSourceManagers(this.source.id).subscribe(function (response) {
            console.log(response);
            _this19.managers = response.data.permission.users;
          }, function (err) {
            console.log('error: ' + err + '.');
          }, function () {
            console.log('complete');
          });
        }
      }, {
        key: "selectedUser",
        value: function selectedUser(user) {
          console.log(user);
          this.user = user;
        }
      }, {
        key: "grantEditor",
        value: function grantEditor() {
          var _this20 = this;

          this.sourceService.permissionSetSourceEditor(this.source.id, this.user.id, true).subscribe(function (response) {
            console.log(response);

            _this20.ngOnInit();
          }, function (err) {}, function () {});
          this.user = null;
        }
      }, {
        key: "grantManager",
        value: function grantManager() {
          var _this21 = this;

          console.log('save');
          this.sourceService.permissionSetSourceManager(this.source.id, this.user.id, true).subscribe(function (response) {
            console.log(response);

            _this21.ngOnInit();
          }, function (err) {}, function () {});
          this.user = null;
        }
      }, {
        key: "denyManager",
        value: function denyManager(user) {
          var _this22 = this;

          this.sourceService.permissionSetSourceManager(this.source.id, user.id, false).subscribe(function (response) {
            console.log(response);

            _this22.ngOnInit();
          }, function (err) {}, function () {});
        }
      }, {
        key: "denyEditor",
        value: function denyEditor(user) {
          var _this23 = this;

          this.sourceService.permissionSetSourceEditor(this.source.id, user.id, false).subscribe(function (response) {
            console.log(response);

            _this23.ngOnInit();
          }, function (err) {}, function () {});
        }
      }]);

      return MySourcesSourcePermissionComponent;
    }();

    MySourcesSourcePermissionComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_2__["SourceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MySourcesSourcePermissionComponent.prototype, "source", void 0);
    MySourcesSourcePermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-source-permission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-permission.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/source-permission/source-permission.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-permission.component.scss */
      "../catalog/src/app/mysources/permission/source-permission/source-permission.component.scss"))["default"]]
    })], MySourcesSourcePermissionComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/permission/term-permission/term-permission.component.scss":
  /*!**********************************************************************************************!*\
    !*** ../catalog/src/app/mysources/permission/term-permission/term-permission.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesPermissionTermPermissionTermPermissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL3Blcm1pc3Npb24vdGVybS1wZXJtaXNzaW9uL3Rlcm0tcGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/permission/term-permission/term-permission.component.ts":
  /*!********************************************************************************************!*\
    !*** ../catalog/src/app/mysources/permission/term-permission/term-permission.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: MySourcesTermPermissionComponent */

  /***/
  function catalogSrcAppMysourcesPermissionTermPermissionTermPermissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesTermPermissionComponent", function () {
      return MySourcesTermPermissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var MySourcesTermPermissionComponent = /*#__PURE__*/function () {
      function MySourcesTermPermissionComponent(sourceService) {
        _classCallCheck(this, MySourcesTermPermissionComponent);

        this.sourceService = sourceService;
        this.managers = new Array();
        this.user = null;
      }

      _createClass(MySourcesTermPermissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          console.log(this.term);
          this.sourceService.permissionGetTermManagers(this.term.uuid).subscribe(function (response) {
            _this24.managers = response.data.permission.users;
          }, function (err) {}, function () {});
        }
      }, {
        key: "selectedUser",
        value: function selectedUser(user) {
          this.user = user;
        }
      }, {
        key: "grantManager",
        value: function grantManager() {
          var _this25 = this;

          this.sourceService.permissionSetTermManager(this.term.uuid, this.user.id, true).subscribe(function (response) {
            _this25.ngOnInit();
          }, function (err) {}, function () {});
          this.user = null;
        }
      }, {
        key: "denyManager",
        value: function denyManager(user) {
          var _this26 = this;

          this.sourceService.permissionSetTermManager(this.term.uuid, user.id, false).subscribe(function (response) {
            _this26.ngOnInit();
          }, function (err) {}, function () {});
        }
      }]);

      return MySourcesTermPermissionComponent;
    }();

    MySourcesTermPermissionComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_2__["SourceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MySourcesTermPermissionComponent.prototype, "term", void 0);
    MySourcesTermPermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-term-permission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./term-permission.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/permission/term-permission/term-permission.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./term-permission.component.scss */
      "../catalog/src/app/mysources/permission/term-permission/term-permission.component.scss"))["default"]]
    })], MySourcesTermPermissionComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/terms-admin/terms-admin.component.scss":
  /*!***************************************************************************!*\
    !*** ../catalog/src/app/mysources/terms-admin/terms-admin.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesTermsAdminTermsAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scrolleable {\n  max-height: 20em;\n  min-width: 15em;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL3Rlcm1zLWFkbWluL3Rlcm1zLWFkbWluLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2F0YWxvZy9zcmMvYXBwL215c291cmNlcy90ZXJtcy1hZG1pbi90ZXJtcy1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL3Rlcm1zLWFkbWluL3Rlcm1zLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGVhYmxle1xuICAgIG1heC1oZWlnaHQ6IDIwZW07XG4gICAgbWluLXdpZHRoOiAxNWVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuIiwiLnNjcm9sbGVhYmxlIHtcbiAgbWF4LWhlaWdodDogMjBlbTtcbiAgbWluLXdpZHRoOiAxNWVtO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/terms-admin/terms-admin.component.ts":
  /*!*************************************************************************!*\
    !*** ../catalog/src/app/mysources/terms-admin/terms-admin.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MySourcesTermsAdminComponent */

  /***/
  function catalogSrcAppMysourcesTermsAdminTermsAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesTermsAdminComponent", function () {
      return MySourcesTermsAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../terms/terms.component */
    "../catalog/src/app/mysources/terms/terms.component.ts");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var MySourcesTermsAdminComponent = /*#__PURE__*/function () {
      function MySourcesTermsAdminComponent(taxonomyService, dialog) {
        _classCallCheck(this, MySourcesTermsAdminComponent);

        this.taxonomyService = taxonomyService;
        this.dialog = dialog;
        this.currentVocab = '';
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
      }

      _createClass(MySourcesTermsAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.taxonomyService.getVocabularies().subscribe( // next
          function (response) {
            console.log(response);
            _this27.vocabularies = response.data.vocabularies;
          }, // error
          function (error) {
            console.log(error);
          }, // complete
          function () {});
        }
      }, {
        key: "onVocabularyChange",
        value: function onVocabularyChange() {
          var _this28 = this;

          this.taxonomyService.getTermsTreeByVocab(this.currentVocab).subscribe( // next
          function (response) {
            console.log(response);
            _this28.dataSource.data = response.data.tree.term_node;
            _this28.data = response.data.tree.term_node; // this.vocabularies = response.data.vocabularies;
          }, // error
          function (error) {
            console.log(error);
          }, // complete
          function () {});
        }
      }, {
        key: "remove_component",
        value: function remove_component() {}
      }, {
        key: "onChange",
        value: function onChange() {
          console.log("ttree change");
        }
        /** Transform the data to something the tree can read. */

      }, {
        key: "transformer",
        value: function transformer(node, level) {
          return {
            name: node.term.description,
            term: node.term,
            level: level,
            expandable: node.children.length > 0
          };
        }
        /** Get the level of the node */

      }, {
        key: "getLevel",
        value: function getLevel(node) {
          return node.level;
        }
        /** Get whether the node is expanded or not. */

      }, {
        key: "isExpandable",
        value: function isExpandable(node) {
          return node.expandable;
        }
        /** Get whether the node has children or not. */

      }, {
        key: "hasChild",
        value: function hasChild(index, node) {
          return node.expandable;
        }
        /** Get the children for the node. */

      }, {
        key: "getChildren",
        value: function getChildren(node) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(node.children);
        }
        /* Get the parent node of a node */

      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = this.getLevel(node);

          if (currentLevel < 1) {
            return null;
          }

          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

          for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];

            if (this.getLevel(currentNode) < currentLevel) {
              return currentNode;
            }
          }

          return null;
        }
      }, {
        key: "openPermission",
        value: function openPermission(node) {
          this.dialog.open(_terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["MySourcesTermsPermissionDialog"], {
            width: "80%",
            data: {
              term: node.term
            }
          });
        }
      }]);

      return MySourcesTermsAdminComponent;
    }();

    MySourcesTermsAdminComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["TaxonomyService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    MySourcesTermsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-mysources-terms-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms-admin.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/terms-admin/terms-admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms-admin.component.scss */
      "../catalog/src/app/mysources/terms-admin/terms-admin.component.scss"))["default"]]
    })], MySourcesTermsAdminComponent);
    /***/
  },

  /***/
  "../catalog/src/app/mysources/terms/terms.component.scss":
  /*!***************************************************************!*\
    !*** ../catalog/src/app/mysources/terms/terms.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppMysourcesTermsTermsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvbXlzb3VyY2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "../catalog/src/app/mysources/terms/terms.component.ts":
  /*!*************************************************************!*\
    !*** ../catalog/src/app/mysources/terms/terms.component.ts ***!
    \*************************************************************/

  /*! exports provided: MySourcesTermsComponent, MySourcesTermsPermissionDialog */

  /***/
  function catalogSrcAppMysourcesTermsTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesTermsComponent", function () {
      return MySourcesTermsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MySourcesTermsPermissionDialog", function () {
      return MySourcesTermsPermissionDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var MySourcesTermsComponent = /*#__PURE__*/function () {
      function MySourcesTermsComponent(taxonomyService, dialog) {
        _classCallCheck(this, MySourcesTermsComponent);

        this.taxonomyService = taxonomyService;
        this.dialog = dialog;
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
      }

      _createClass(MySourcesTermsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.data = new Array();

          if (this.terms) {
            var _loop = function _loop(index) {
              var term = _this29.terms[index];

              _this29.taxonomyService.getTermByUUID(term.uuid, 10).subscribe( // next
              function (response) {
                console.log(index, _this29.data);

                _this29.data.push(response.data.term_node);

                if (index == _this29.terms.length - 1) {
                  _this29.dataSource.data = _this29.data;
                  console.log(_this29.data);
                }
              }, function (error) {}, function () {});
            };

            for (var index = 0; index < this.terms.length; index++) {
              _loop(index);
            }

            this.terms.forEach(function (term) {});
          }
        }
        /** Transform the data to something the tree can read. */

      }, {
        key: "transformer",
        value: function transformer(node, level) {
          return {
            name: node.term.description,
            term: node.term,
            level: level,
            expandable: node.children.length > 0
          };
        }
        /** Get the level of the node */

      }, {
        key: "getLevel",
        value: function getLevel(node) {
          return node.level;
        }
        /** Get whether the node is expanded or not. */

      }, {
        key: "isExpandable",
        value: function isExpandable(node) {
          return node.expandable;
        }
        /** Get whether the node has children or not. */

      }, {
        key: "hasChild",
        value: function hasChild(index, node) {
          return node.expandable;
        }
        /** Get the children for the node. */

      }, {
        key: "getChildren",
        value: function getChildren(node) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(node.children);
        }
        /* Get the parent node of a node */

      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = this.getLevel(node);

          if (currentLevel < 1) {
            return null;
          }

          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

          for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];

            if (this.getLevel(currentNode) < currentLevel) {
              return currentNode;
            }
          }

          return null;
        }
      }, {
        key: "openPermission",
        value: function openPermission(node) {
          this.dialog.open(MySourcesTermsPermissionDialog, {
            width: "80%",
            data: {
              term: node.term
            }
          });
        }
      }]);

      return MySourcesTermsComponent;
    }();

    MySourcesTermsComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["TaxonomyService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], MySourcesTermsComponent.prototype, "terms", void 0);
    MySourcesTermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'catalog-mysources-terms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/mysources/terms/terms.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms.component.scss */
      "../catalog/src/app/mysources/terms/terms.component.scss"))["default"]]
    })], MySourcesTermsComponent);

    var MySourcesTermsPermissionDialog = /*#__PURE__*/function () {
      function MySourcesTermsPermissionDialog(dialogRef, data) {
        _classCallCheck(this, MySourcesTermsPermissionDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(MySourcesTermsPermissionDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.term = this.data.term;
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {}
      }]);

      return MySourcesTermsPermissionDialog;
    }();

    MySourcesTermsPermissionDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MySourcesTermsPermissionDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "catalog-mysources-terms-permissions",
      template: "<mat-dialog-content class=\"height-auto\">\n  <catalog-term-permission [term]=\"term\"></catalog-term-permission>\n  </mat-dialog-content>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], MySourcesTermsPermissionDialog);
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/journal-edit/journal-edit.component.scss":
  /*!*******************************************************************************!*\
    !*** ../catalog/src/app/source-edit/journal-edit/journal-edit.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceEditJournalEditJournalEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLWVkaXQvam91cm5hbC1lZGl0L2pvdXJuYWwtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/journal-edit/journal-edit.component.ts":
  /*!*****************************************************************************!*\
    !*** ../catalog/src/app/source-edit/journal-edit/journal-edit.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SourceEditJournalComponent */

  /***/
  function catalogSrcAppSourceEditJournalEditJournalEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditJournalComponent", function () {
      return SourceEditJournalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceEditJournalComponent = /*#__PURE__*/function () {
      function SourceEditJournalComponent(metadata, snackBar, formBuilder) {
        _classCallCheck(this, SourceEditJournalComponent);

        this.metadata = metadata;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder; // TODO: Idea del componente:
        // trabajan internamente con un journal, si recibe null entonces es uno nuevo, si recibe un journal entonces es editar.
        // en ambos casos devuelve el journal editado, o sea el contenido, listo para hacer post en el backend.

        this.pageTitle = '';
        this.journalData = null;
        this.journalVersion = null;
        this.showEditHeader = false;
        this.description = '';
        this.topMainOrganization = null;
        this.showFinalStep = true; // journal identifiers variables for step 0

        this.identifiersPanel = null; // journal information variables for step 1

        this.informationPanel = null; // institutions: SourceClasification[] = [];
        // entityFormGroup: FormGroup;
        // indexes (databases), variables for step 3

        this.finalPanel = null; // TODO: Esto se puede hacer mejor, con un emiter alcanza

        this.journalEditDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = true;
      }

      _createClass(SourceEditJournalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.journalData = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["JournalData"]();
          this.journalData.deepcopy(this.journalVersion.data);
          this.pageTitle = this.journalData.isNew ? 'Nueva Revista' : 'Editando : ' + this.journalData.title;
          this.metadata.setTitleDescription(this.pageTitle, '');
          console.log('journal edit INIT');
          this.resetStepper();
          this.initStep2();
          this.initStep0Identifiers();
          this.initStep1();
          this.initStep3();
          this.initStepFinal();
          this.loading = false;
        }
      }, {
        key: "resetStepper",
        value: function resetStepper() {
          this.identifiersPanel = null;
          this.identifiersFormGroup = null;
          this.informationPanel = null;
          this.informationFormGroup = null;
          this.informationSocialFormGroup = null; // this.organization = null;
          // this.organizationPanel = null;
          // this.institution = null;
          // this.institutionPanel = null;
          // this.entity = null;
          // this.entityPanel = null;

          this.organizationFormGroup = null;
          this.indexesFormGroup = null;
        }
      }, {
        key: "initStep0Identifiers",
        value: function initStep0Identifiers() {
          this.identifiersFormGroup = this.formBuilder.group({});
          this.identifiersPanel = {
            name: 'identifiersPanel',
            label: 'Identificadores',
            controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["ContainerPanelComponent"],
            description: '',
            iconName: '',
            formSection: this.identifiersFormGroup,
            formSectionContent: [{
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'issn_l',
              label: 'ISSN de Enlace',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'XXXX-XXXX'),
              width: '30%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].issn_l) : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'issn_p',
              label: 'ISSN Impreso',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'XXXX-XXXX'),
              width: '30%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].issn_p) : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'issn_e',
              label: 'ISSN Electrónico',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'XXXX-XXXX'),
              width: '30%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].issn_e) : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputRnpsComponent"].getFormControlByDefault(),
              name: 'rnps_p',
              label: 'RNPS Impreso',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].rnps,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputRnpsComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'XXXX.'),
              width: '45%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].prnps) : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputRnpsComponent"].getFormControlByDefault(),
              name: 'rnps_e',
              label: 'RNPS Electrónico',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].rnps,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputRnpsComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'XXXX.'),
              width: '45%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].ernps) : ''
            }]
          };
        }
      }, {
        key: "initStep1",
        value: function initStep1() {
          this.informationFormGroup = this.formBuilder.group({// 'description': descriptionControl,
            // start_year: new FormControl(''),
            // end_year: new FormControl(''),
          }); // this.informationSocialFormGroup = this.formBuilder.group({});

          this.informationPanel = {
            name: 'informationPanel',
            label: 'Datos de la Revista',
            description: '',
            iconName: '',
            controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["ContainerPanelComponent"],
            formSection: this.informationFormGroup,
            formSectionContent: [{
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'title',
              label: 'Título',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: true,
              width: '100%',
              value: this.journalData ? this.journalData.title : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'subtitle',
              label: 'Subtítulo',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: false,
              width: '30%',
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, ''),
              value: this.journalData ? this.journalData.subtitle : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'shortname',
              label: 'Título abreviado',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: false,
              width: '30%',
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, ''),
              value: this.journalData ? this.journalData.shortname : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'source_type',
              label: 'Tipo de Revista',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].select_expr,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"],
              required: true,
              width: '30%',
              value: this.journalData ? this.journalData.source_type : '',
              extraContent: {
                multiple: false,
                getOptions: function getOptions() {
                  return [{
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"].JOURNAL.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"].JOURNAL.value
                  }, {
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"].STUDENT.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"].STUDENT.value
                  }, {
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"].POPULARIZATION.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"].POPULARIZATION.value
                  }];
                }
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'description',
              label: 'Descripción',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].textarea,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"],
              required: false,
              width: '100%',
              value: this.journalData ? this.journalData.description : ''
            }, // {
            //   name: 'purpose',
            //   label: 'Propósito',
            //   type: FormFieldType.textarea,
            //   required: true,
            //   width: '100%',
            //   value: this.journalVersion ? this.journalVersion.purpose : ''
            // },
            {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"].getFormControlByDefault(),
              name: 'url',
              label: 'URL',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].url,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"],
              required: true,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'Escriba una URL válida.'),
              width: '100%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].url) : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"].getFormControlByDefault(),
              name: 'oaiurl',
              label: 'OAI-PMH',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].url,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'Escriba una URL válida.'),
              width: '100%',
              value: this.journalData ? this.journalData.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].oaiurl) : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputEmailComponent"].getFormControlByDefault(),
              name: 'email',
              label: 'Correo Electrónico',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].email,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputEmailComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'Escriba un email válido.'),
              width: '45%',
              value: this.journalData ? this.journalData.email : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'source_system',
              label: 'Tipo de Sistema que soporta la revista',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].select_expr,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"],
              required: false,
              width: '45%',
              value: this.journalData ? this.journalData.source_system : '',
              extraContent: {
                multiple: false,
                getOptions: function getOptions() {
                  return [{
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceSystems"].OJS.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceSystems"].OJS.value
                  }, {
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceSystems"].CMS.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceSystems"].CMS.value
                  }, {
                    label: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceSystems"].OTHER.label,
                    value: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceSystems"].OTHER.value
                  }];
                }
              }
            }, // {
            //   name: 'seriadas_cubanas',
            //   label: 'URL en Seriadas Cubanas',
            //   type: FormFieldType.url,
            //   required: false,
            //   startHint: new HintValue(HintPosition.start, ''),
            //   width: '100%',
            //   value: this.journalVersion ? this.journalVersion.seriadas_cubanas : ''
            // },
            {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'licence',
              label: 'Licencia',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].vocabulary,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabularyComponent"],
              required: false,
              width: '45%',
              extraContent: {
                multiple: false,
                selectedTermsIds: this.journalData ? this.journalData.classifications.map(function (termSource) {
                  return termSource.id;
                }) : null,
                vocab: toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabulariesInmutableNames"].LICENCES,
                level: 0
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'subjects',
              label: 'Materia',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].vocabulary,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabularyComponent"],
              required: false,
              width: '45%',
              extraContent: {
                multiple: false,
                selectedTermsIds: this.journalData ? this.journalData.classifications.map(function (termSource) {
                  return termSource.id;
                }) : null,
                vocab: toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabulariesInmutableNames"].SUBJECTS,
                level: 0
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'start_year',
              label: 'Año de inicio',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].datepicker,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["DatepickerYearComponent"],
              required: false,
              width: '30%',
              value: this.journalData ? this.journalData.start_year : '',
              extraContent: {
                minYear: 1492,
                maxYear: new Date(Date.now())
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'end_year',
              label: 'Año final',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].datepicker,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["DatepickerYearComponent"],
              required: false,
              width: '30%',
              value: this.journalData ? this.journalData.end_year : '',
              extraContent: {
                minYear: 1492,
                maxYear: new Date(Date.now())
              }
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'frequency',
              label: 'Frecuencia',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, ''),
              width: '30%',
              value: this.journalData ? this.journalData.frequency : ''
            }, // {
            //   // TODO: el top level de unesco de materias....
            //   name: 'cover',
            //   label: 'Cobertura Temática',
            //   type: FormFieldType.select_expr,
            //   required: true,
            //   width: '45%',
            //   extraContent: {
            //     multiple: false,
            //     observable: this.taxonomyService.getTermsTreeByVocab(
            //       VocabulariesInmutableNames.SUBJECTS,
            //       0
            //     ),
            //     getOptions: (response: any) => {
            //       const opts: SelectOption[] = [];
            //       response.data.tree.term_node.forEach((node: TermNode) => {
            //         opts.push({
            //           value: node.term,
            //           label: node.term.description,
            //         });
            //       });
            //       return opts;
            //     },
            //     selectionChange: (term) => {
            //       this.journalCover = new SourceClasification();
            //       this.journalCover.description = term.description;
            //       this.journalCover.id = term.uuid;
            //       this.journalCover.vocabulary = term.vocabulary_id;
            //     },
            //   },
            // },
            {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"].getFormControlByDefault(),
              name: 'facebook',
              label: 'Facebook',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].url,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"],
              required: false,
              width: '30%',
              value: this.journalData ? this.journalData.socialNetworks.facebook : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"].getFormControlByDefault(),
              name: 'twitter',
              label: 'Twitter',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].url,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"],
              required: false,
              width: '30%',
              value: this.journalData ? this.journalData.socialNetworks.twitter : ''
            }, {
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"].getFormControlByDefault(),
              name: 'linkedin',
              label: 'LinkedIN',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].url,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"],
              required: false,
              width: '30%',
              value: this.journalData ? this.journalData.socialNetworks.linkedin : ''
            }]
          }; // {
          //   title: 'Redes Sociales',
          //   description: '',
          //   iconName: '',
          //   formSection: this.informationFormGroup,
          //   formSectionContent: [
          //     {
          //       name: 'facebook',
          //       label: 'Facebook',
          //       type: FormFieldType.url,
          //       required: false,
          //       width: '33%',
          //       value: this.journalData
          //         ? this.journalData.socialNetworks.facebook
          //         : '',
          //     },
          //     {
          //       name: 'twitter',
          //       label: 'Twitter',
          //       type: FormFieldType.url,
          //       required: false,
          //       width: '33%',
          //       value: this.journalData
          //         ? this.journalData.socialNetworks.twitter
          //         : '',
          //     },
          //     {
          //       name: 'linkedin',
          //       label: 'LinkedIN',
          //       type: FormFieldType.url,
          //       required: false,
          //       width: '33%',
          //       value: this.journalData
          //         ? this.journalData.socialNetworks.linkedin
          //         : '',
          //     },
          //   ],
          // },
        }
      }, {
        key: "initStep2",
        value: function initStep2() {
          this.organizationFormGroup = this.formBuilder.group({
            institutions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "initStep3",
        value: function initStep3() {
          this.indexesFormGroup = this.formBuilder.group({});
        }
      }, {
        key: "indexerStepper",
        value: function indexerStepper() {// console.log(this.journalData);
          // this.indexes = this.journalData.classifications.filter(
          //   (value) => value.vocabulary == VocabulariesInmutableNames.INDEXES
          // );
          // console.log(this.indexes);
        }
      }, {
        key: "initStepFinal",
        value: function initStepFinal() {
          this.finalFormGroup = this.formBuilder.group({});
          this.finalPanel = {
            name: 'finalPanel',
            label: '',
            description: '',
            iconName: '',
            formSection: this.finalFormGroup,
            controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["ContainerPanelComponent"],
            formSectionContent: [{
              formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
              name: 'comment',
              label: 'Puede agregar aquí un comentario.',
              type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].textarea,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"],
              required: false,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, ''),
              width: '100%',
              minWidth: '100%',
              value: this.journalData ? this.journalData._save_info.comment : ''
            }]
          };
        }
      }, {
        key: "fillJournalFields",
        value: function fillJournalFields() {
          var _this30 = this;

          // this.journalVersion.source_type = this.informationFormGroup.value['source_type'];
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].issn_p, this.identifiersFormGroup.value.issn_p);
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].issn_e, this.identifiersFormGroup.value.issn_e);
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].issn_l, this.identifiersFormGroup.value.issn_l);
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].prnps, this.identifiersFormGroup.value.rnps_p);
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].ernps, this.identifiersFormGroup.value.rnps_e); // this.journalVersion.issn.deepcopy(
          //   this.identifiersFormGroup.value
          // );
          // this.journalVersion.rnps.deepcopy(
          //   this.identifiersFormGroup.value
          // );

          console.log(this.informationFormGroup);
          this.journalData.deepcopy(this.informationFormGroup.value);
          this.journalData.socialNetworks.deepcopy(this.informationFormGroup.value);
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].url, this.informationFormGroup.value.url);
          this.journalData.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_4__["IdentifierSchemas"].oaiurl, this.informationFormGroup.value.oaiurl);
          this.journalData.source_type = this.informationFormGroup.value['source_type'];
          var indexes = this.journalData.classifications.filter(function (value) {
            return value.vocabulary == toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabulariesInmutableNames"].INDEXES;
          });
          this.journalData.classifications = [];

          if (this.informationFormGroup.value['licence']) {
            this.informationFormGroup.value['licence'].forEach(function (term) {
              var ts = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceClasification"]();
              ts.description = term.description;
              ts.id = term.uuid;
              ts.vocabulary = term.vocabulary_id;

              _this30.journalData.classifications.push(ts);
            });
          } // this.informationFormGroup.value['cover'].forEach((term) => {
          //   const ts = new SourceClasification();
          //   ts.description = term.description;
          //   ts.id = term.uuid;
          //   ts.vocabulary = term.vocabulary_id;
          //   this.journalData.classifications.push(ts);
          // });


          if (this.informationFormGroup.value['subjects']) {
            this.informationFormGroup.value['subjects'].forEach(function (term) {
              var ts = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceClasification"]();
              ts.description = term.description;
              ts.id = term.uuid;
              ts.vocabulary = term.vocabulary_id;

              _this30.journalData.classifications.push(ts);
            });
          }

          console.log(indexes);
          this.journalData.classifications = this.journalData.classifications.concat(indexes); // this.journalData.organizations = this.source.data.organizations;
          // this.organizationFormGroup.value[
          //   'institutions'
          // ].forEach((panel: JournalInstitutionsPanel) => {
          //   const ts = new SourceClasification();
          //   ts.deepcopy(panel.inst);
          //   ts.term_id = panel.inst.term.id;
          //   ts.source_id = this.journalVersion.source_id;
          //   this.journalVersion.classifications.push(ts);
          // }
          // );
          // this.institutions.forEach(inst => {
          //   this.journalVersion.classifications.push(inst);
          // });
          // console.log(this.indexesPanel);
          // this.indexesPanel.forEach(panel => {
          //   const ts = new SourceClasification();
          //   const term: Term = panel.value;
          //   ts.description = term.description;
          //   ts.id = term.uuid;
          //   ts.vocabulary = term.vocabulary_id;
          //   ts.data['url'] = this.indexesFormGroup.value['url_' + ts.id];
          //   ts.data['initial_cover'] = this.indexesFormGroup.value[
          //     'initial_cover_' + ts.id
          //   ];
          //   ts.data['end_cover'] = this.indexesFormGroup.value[
          //     'end_cover_' + ts.id
          //   ];
          //   this.journalData.classifications.push(ts);
          // });

          this.journalData._save_info.comment = this.finalFormGroup.value['comment'];
          this.journalVersion.comment = this.finalFormGroup.value['comment'];
          this.journalVersion.data.deepcopy(this.journalData);
          console.log(this.identifiersFormGroup);
          console.log(this.informationFormGroup);
          console.log(this.organizationFormGroup);
          console.log(this.indexesFormGroup);
          console.log('QQQQQQQQQQQQQQQQQQQQQQQQ');
          console.log(this.journalData);
        }
      }, {
        key: "finishStepper",
        value: function finishStepper() {
          console.log(this.journalData); // console.log(this.journalVersion, this)

          this.fillJournalFields();
          console.log(this.journalData);
          this.journalEditDone.emit(this.journalVersion);
        }
      }, {
        key: "cancelStepper",
        value: function cancelStepper() {
          this.editCanceled.emit(true);
        }
      }]);

      return SourceEditJournalComponent;
    }();

    SourceEditJournalComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["MetadataService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditJournalComponent.prototype, "journalVersion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditJournalComponent.prototype, "showEditHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditJournalComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditJournalComponent.prototype, "topMainOrganization", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditJournalComponent.prototype, "showFinalStep", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceEditJournalComponent.prototype, "journalEditDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceEditJournalComponent.prototype, "editCanceled", void 0);
    SourceEditJournalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-source-edit-journal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./journal-edit.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/journal-edit/journal-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./journal-edit.component.scss */
      "../catalog/src/app/source-edit/journal-edit/journal-edit.component.scss"))["default"]]
    })], SourceEditJournalComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/source-edit.component.scss":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/source-edit/source-edit.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceEditSourceEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLWVkaXQvc291cmNlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/source-edit.component.ts":
  /*!***************************************************************!*\
    !*** ../catalog/src/app/source-edit/source-edit.component.ts ***!
    \***************************************************************/

  /*! exports provided: SourceEditComponent */

  /***/
  function catalogSrcAppSourceEditSourceEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditComponent", function () {
      return SourceEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var SourceEditComponent = /*#__PURE__*/function () {
      function SourceEditComponent(route, _router, _snackBar, sourceService, environment) {
        _classCallCheck(this, SourceEditComponent);

        this.route = route;
        this._router = _router;
        this._snackBar = _snackBar;
        this.sourceService = sourceService;
        this.environment = environment;
        this.topOrganizationPID = null;
        this.topMainOrganization = null;
        this.sourceType = toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"];
        this.saving = false;
        this.allows = '';

        if (environment.topOrganizationPID) {
          this.topOrganizationPID = environment.topOrganizationPID;
        }
      }

      _createClass(SourceEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          console.log("EDIT SOURCE");
          this.saving = true;
          this.route.data.subscribe(function (response) {
            // this.loading = false;
            console.log(response);

            try {
              var src = response.source.data.source.record.metadata;
              _this31.allows = response.source.data.source.allows;

              switch (src.source_type) {
                case _this31.sourceType.JOURNAL.value:
                  _this31.source = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["JournalData"]();

                  _this31.source.deepcopy(src);

                  _this31.sourceVersion = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["JournalVersion"]();
                  _this31.sourceVersion.source_uuid = _this31.source.id;

                  _this31.sourceVersion.data.deepcopy(_this31.source);

                  _this31.saving = false;
                  break;

                default:
                  _this31.source = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceData"]();

                  _this31.source.deepcopy(src);

              }
            } catch (error) {
              var m = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["MessageHandler"](_this31._snackBar);
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].serverError, response.message);
            }
          });
        }
      }, {
        key: "sourceEditDone",
        value: function sourceEditDone(edited) {
          var _this32 = this;

          this.saving = true;
          console.log('AAaAAAAAAAAAAAAAAAAAA');
          console.log(edited);
          console.log(this.sourceVersion);
          console.log('AAaAAAAAAAAAAAAAAAAAA');
          this.saving = false;
          this.sourceService.editSource(this.sourceVersion, this.source.id).subscribe(function (values) {
            console.log(values);

            _this32._router.navigate(['sources', _this32.source.id, 'view']);

            _this32.saving = false;
          }, function (err) {
            console.log('error: ' + err + '.');
          }, function () {
            console.log('complete');
          }); // this.saving = true;
          // let toReplace = -1;
          // for (let index = 0; index < this.version.data.term_sources.length; index++) {
          //   const element = this.version.data.term_sources[index];
          //   if (element.term.vocabulary_id == VocabulariesInmutableNames.INTITUTION
          //     && element.term.isNew) {
          //     toReplace = index;
          //   }
          // }
          // this.taxonomyService.newTerm(this.version.data.term_sources[toReplace].term)
          //   .subscribe(
          //     (response) => {
          //       console.log(response);
          //       let newTerm = new Term();
          //       newTerm.deepcopy(response.data.term);
          //       this.version.data.term_sources[toReplace].term_id = newTerm.id;
          //       this.sourceService.editSource(this.version, this.source.uuid)
          //         .subscribe(
          //           (values) => {
          //             console.log(values);
          //             this._router.navigate(['sources', this.source.uuid, 'view']);
          //             this.saving = false;
          //           },
          //           (err: any) => {
          //             console.log('error: ' + err + '.');
          //           },
          //           () => {
          //             console.log('complete');
          //           }
          //         );
          //     },
          //     (err: any) => {
          //       console.log('error: ' + err + '.');
          //     },
          //     () => {
          //       console.log('complete');
          //     }
          //   );
        } // createNewTerms() {
        //   this.version.data.term_sources.forEach((ts: TermSource, index) => {
        //     if (ts.term.isNew &&
        //         (ts.term.vocabulary_id === VocabulariesInmutableNames.INTITUTION
        //         || ts.term.vocabulary_id === VocabulariesInmutableNames.EXTRA_INSTITUTIONS)) {
        //           this.postNewTerm(index);
        //           return;
        //     }
        //   });
        // }
        // private postNewTerm(index) {
        //   this.taxonomyService.newTerm(this.version.data.term_sources[index].term)
        //     .subscribe(
        //       (response) => {
        //         console.log(response);
        //         let newTerm = new Term();
        //         newTerm.deepcopy(response.data.term);
        //         this.version.data.term_sources[index].term_id = newTerm.id;
        //         this.version.data.term_sources[index].term = newTerm;
        //         this.createNewTerms();
        //       },
        //       (err: any) => {
        //         console.log('error: ' + err + '.');
        //       },
        //       () => {
        //         console.log('complete');
        //       }
        //     );
        // }

      }, {
        key: "editCanceled",
        value: function editCanceled() {
          this._router.navigate(['sources', this.source.id, 'view']);
        }
      }]);

      return SourceEditComponent;
    }();

    SourceEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["Environment"]
      }];
    };

    SourceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-source-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-edit.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-edit.component.scss */
      "../catalog/src/app/source-edit/source-edit.component.scss"))["default"]]
    })], SourceEditComponent); // {
    //   name: 'source_type',
    //   label: 'Tipo de Revista',
    //   type: FormFieldType.select_expr,
    //   required: true,
    //   width: '45%',
    //   value: this.journalVersion ? this.journalVersion.source_type : '',
    //   extraContent: {
    //     getOptions: () => {
    //       console.log(this.journalVersion.source_type);
    //       console.log(SourceTypes[this.journalVersion.source_type]);
    //       const opts: SelectOption[] = [
    //         {
    //           value: SourceTypes.JOURNAL.value,
    //           label: SourceTypes.JOURNAL.label,
    //         },
    //         {
    //           value: SourceTypes.STUDENT.value,
    //           label: SourceTypes.STUDENT.label,
    //         },
    //         {
    //           value: SourceTypes.POPULARIZATION.value,
    //           label: SourceTypes.POPULARIZATION.label,
    //         },
    //       ];
    //       return opts;
    //     }
    //   }
    // },

    /***/
  },

  /***/
  "../catalog/src/app/source-edit/source-indexes/source-indexes.component.scss":
  /*!***********************************************************************************!*\
    !*** ../catalog/src/app/source-edit/source-indexes/source-indexes.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceEditSourceIndexesSourceIndexesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLWVkaXQvc291cmNlLWluZGV4ZXMvc291cmNlLWluZGV4ZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/source-indexes/source-indexes.component.ts":
  /*!*********************************************************************************!*\
    !*** ../catalog/src/app/source-edit/source-indexes/source-indexes.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SourceEditIndexesComponent, SourceEditAddIndexComponent */

  /***/
  function catalogSrcAppSourceEditSourceIndexesSourceIndexesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditIndexesComponent", function () {
      return SourceEditIndexesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditAddIndexComponent", function () {
      return SourceEditAddIndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceEditIndexesComponent = /*#__PURE__*/function () {
      function SourceEditIndexesComponent(dialog, service) {
        _classCallCheck(this, SourceEditIndexesComponent);

        this.dialog = dialog;
        this.service = service;
        this.editable = true;
        /*
          el arbol entero de los indexes
          el primer nivel se considera que es una clasificacion del index, por ejemplo
              {
                "children": {...}
                "term": {
                  "clasified_ids": [],
                  "class_ids": [],
                  "data": null,
                  "description": "WoS / Scopus",
                  "id": 4355,
                  "name": "http://miar.ub.edu/databases/GRUPO/G",
                  "parent_id": null,
                  "uuid": "a4aae8a2-b65d-4313-b666-5ef4170fc549",
                  "vocabulary_id": "INDEXES"
                }
              }
          en el segundo nivel (children) estan los indices(bases de datos) que realmente clasifican a las fuentes
        */

        this.databases = null;
        /*
          cada elemento de este array tiene:
          dbclass, que es un termino del primer nivel de databases,
          dblist, son las clasificaciones de las fuentes con los correspondientes datos,
            los terminos correspondientes de los elementos de dblist son hijos de dbclass en databses
        */

        this.selectedDatabases = null;
        this.loading = true;
      }

      _createClass(SourceEditIndexesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.loading = true;
          console.log();

          if (localStorage.getItem('vocab_indexes') && localStorage.getItem('vocab_indexes') != '') {
            var response = JSON.parse(localStorage.getItem('vocab_indexes'));
            this.databases = response.data.tree.term_node;
            this.initIndexes();
          } else {
            this.service.getTermsTreeByVocab(toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabulariesInmutableNames"].INDEXES, 1).subscribe(function (response) {
              if (response.data.tree.term_node) {
                localStorage.setItem('vocab_indexes', JSON.stringify(response));
                _this33.databases = response.data.tree.term_node;

                _this33.initIndexes();
              }
            }, function (err) {
              console.log('ERROR: ' + err + '.');
            }, function () {});
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.loading = true;
          this.ngOnInit();
          this.loading = false;
        }
      }, {
        key: "initIndexes",
        value: function initIndexes() {
          this.loading = true;
          this.selectedDatabases = new Array(this.databases.length);

          this._setSelectedDatabses();

          this._setIndexesToSource();

          console.log('**** SourceEditIndexesComponent *** complete process initIndexes', this.sourceData, this.selectedDatabases);
          this.loading = false;
        }
        /**
         * divide los source.classifications que son de INDEXES
         * en el arreglo selectedDatabases, cuyos elementos tienen
         * dbclass, que es el primer nivel
         * dblist, que son los SourceClassification seleccionados e hijos de dbclass
         */

      }, {
        key: "_setSelectedDatabses",
        value: function _setSelectedDatabses() {
          var _this34 = this;

          var _loop2 = function _loop2(i) {
            _this34.selectedDatabases[i] = {
              dbclass: _this34.databases[i].term,
              dblist: _this34.sourceData.classifications.filter(function (value) {
                return value.vocabulary == toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabulariesInmutableNames"].INDEXES && _this34.databases[i].children.find(function (db) {
                  return db.term.uuid == value.id;
                }) != undefined;
              })
            };
          };

          for (var i = 0; i < this.databases.length; i++) {
            _loop2(i);
          }

          for (var _i = 0; _i < this.databases.length; _i++) {
            for (var k = 0; k < this.selectedDatabases[_i].dblist.length; k++) {
              var element = this.selectedDatabases[_i].dblist[k];

              if (!this.selectedDatabases[_i].dblist[k].data) {
                this.selectedDatabases[_i].dblist[k].data = {};
              }

              if (!this.selectedDatabases[_i].dblist[k].data['url']) {
                this.selectedDatabases[_i].dblist[k].data['url'] = '';
              }

              if (!this.selectedDatabases[_i].dblist[k].data['initial_cover']) {
                this.selectedDatabases[_i].dblist[k].data['initial_cover'] = '';
              }

              if (!this.selectedDatabases[_i].dblist[k].data['end_cover']) {
                this.selectedDatabases[_i].dblist[k].data['end_cover'] = '';
              }
            }
          }
        }
        /**
         * mantiene la lista sourceData.classification bien formada en relacion con lo que hay en selectedDatabases
         */

      }, {
        key: "_setIndexesToSource",
        value: function _setIndexesToSource() {
          // filtra las clasificaciones que no sean indexes
          this.sourceData.classifications = this.sourceData.classifications.filter(function (value) {
            return value.vocabulary != toco_lib__WEBPACK_IMPORTED_MODULE_4__["VocabulariesInmutableNames"].INDEXES;
          });

          for (var index = 0; index < this.selectedDatabases.length; index++) {
            var element = this.selectedDatabases[index]; // por cada elemento en selectedDatabases, si tiene algun elemento en dblist
            // entonces dbclass y dblist tambien son parte de sourceData.classifications

            if (element.dblist.length > 0) {
              var parent = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceClasification"]();
              parent.id = element.dbclass.uuid;
              parent.description = element.dbclass.description;
              parent.vocabulary = element.dbclass.vocabulary_id;
              this.sourceData.classifications.push(parent);
              this.sourceData.classifications = this.sourceData.classifications.concat(element.dblist);
            }
          }
        }
      }, {
        key: "addIndexAction",
        value: function addIndexAction(dbclassIndex) {
          var _this35 = this;

          var dbclass = this.selectedDatabases[dbclassIndex].dbclass;
          var options = this.databases[dbclassIndex].children.filter(function (value) {
            return _this35.selectedDatabases[dbclassIndex].dblist.find(function (db) {
              return db.id == value.term.uuid;
            }) == undefined;
          });

          if (options.length > 0) {
            this.dialog.open(SourceEditAddIndexComponent, {
              data: {
                dbclass: this.selectedDatabases[dbclassIndex].dbclass,
                options: options,
                editing: null,
                addIndex: function addIndex(result) {
                  _this35.dialog.closeAll();

                  _this35.selectedDatabases[dbclassIndex].dblist = _this35.selectedDatabases[dbclassIndex].dblist.filter(function (value) {
                    return value.id != result.id;
                  });

                  _this35.selectedDatabases[dbclassIndex].dblist.push(result);

                  _this35._setIndexesToSource();
                }
              }
            });
          }
        }
      }, {
        key: "editIndexAction",
        value: function editIndexAction(dbclassIndex, editing) {
          var _this36 = this;

          var dbclass = this.selectedDatabases[dbclassIndex].dbclass;

          if (editing) {
            // this.selectedDatabases[dbclassIndex].dblist = this.selectedDatabases[dbclassIndex].dblist.filter(
            //   value => value.id != editing.id
            // );
            var options = this.databases[dbclassIndex].children.filter(function (value) {
              return _this36.selectedDatabases[dbclassIndex].dblist.find(function (db) {
                return db.id == value.term.uuid;
              }) == undefined || value.term.uuid == editing.id;
            });

            if (options.length > 0 || editing) {
              this.dialog.open(SourceEditAddIndexComponent, {
                data: {
                  dbclass: this.selectedDatabases[dbclassIndex].dbclass,
                  options: options,
                  editing: editing,
                  addIndex: function addIndex(result) {
                    _this36.dialog.closeAll(); // console.log('----------------------------',this.selectedDatabases[dbclassIndex].dblist);


                    var newSelected = [];

                    _this36.selectedDatabases[dbclassIndex].dblist.forEach(function (element) {
                      if (element.id != result.id && element.id != editing.id) {
                        newSelected.push(element);
                      }
                    });

                    _this36.selectedDatabases[dbclassIndex].dblist = newSelected; // this.selectedDatabases[dbclassIndex].dblist = this.selectedDatabases[dbclassIndex].dblist.filter(
                    //   value => (value.id == result.id && value.id == editing.id));
                    // console.log('++++++++++++++++++++++',this.selectedDatabases[dbclassIndex].dblist);

                    _this36.selectedDatabases[dbclassIndex].dblist.push(result); // console.log('*********************',this.selectedDatabases[dbclassIndex].dblist);


                    _this36._setIndexesToSource();
                  }
                }
              });
            }
          }
        }
      }, {
        key: "deleteIndexAction",
        value: function deleteIndexAction(dbclassIndex, toDelete) {
          // console.log('DELETE', toDelete);
          this.selectedDatabases[dbclassIndex].dblist = this.selectedDatabases[dbclassIndex].dblist.filter(function (value) {
            return value.id != toDelete.id;
          });

          this._setIndexesToSource();
        }
      }]);

      return SourceEditIndexesComponent;
    }();

    SourceEditIndexesComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["TaxonomyService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditIndexesComponent.prototype, "sourceData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditIndexesComponent.prototype, "editable", void 0);
    SourceEditIndexesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-edit-indexes",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-indexes.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-indexes/source-indexes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-indexes.component.scss */
      "../catalog/src/app/source-edit/source-indexes/source-indexes.component.scss"))["default"]]
    })], SourceEditIndexesComponent);

    var SourceEditAddIndexComponent = /*#__PURE__*/function () {
      function SourceEditAddIndexComponent(service, _formBuilder, data) {
        _classCallCheck(this, SourceEditAddIndexComponent);

        // console.log(data);
        this.service = service;
        this._formBuilder = _formBuilder;
        this.data = data;
        this.indexPanel = null;
        this.editing = null;
        this.dbclass = data.dbclass;
        this.options = data.options;

        if (data.editing) {
          this.editing = data.editing;
        }

        this.addIndex = data.addIndex;
      }

      _createClass(SourceEditAddIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.indexFormGroup = this._formBuilder.group({});

          if (this.dbclass) {
            this.indexPanel = {
              label: this.editing ? 'Editar' : 'Adicionar',
              name: 'indexPanel',
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["ContainerPanelComponent"],
              description: '',
              iconName: '',
              formSection: this.indexFormGroup,
              formSectionContent: [{
                formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
                name: 'indexes',
                label: this.dbclass.description,
                type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].select_expr,
                controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"],
                required: true,
                width: '100%',
                value: this.editing ? this.editing.id : null,
                extraContent: {
                  multiple: false,
                  getOptions: function getOptions(response) {
                    var opts = [];

                    _this37.options.forEach(function (node) {
                      opts.push({
                        value: node.term.uuid,
                        label: node.term.description
                      });
                    });

                    return opts;
                  },
                  selectionChange: function selectionChange(value) {
                    console.log(value);
                  }
                }
              }, {
                formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"].getFormControlByDefault(),
                name: 'url',
                label: 'URL',
                type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].url,
                controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputUrlComponent"],
                required: false,
                startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, 'URL de la revista en el índice.'),
                width: '100%',
                value: this.editing ? [this.editing.data['url']] : ''
              }, {
                formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
                name: 'initial_cover',
                label: 'Cobertura inicio',
                type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
                controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
                required: false,
                startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, ''),
                width: '45%',
                value: this.editing ? [this.editing.data['initial_cover']] : ''
              }, {
                formControl: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"].getFormControlByDefault(),
                name: 'end_cover',
                label: 'Cobertura',
                type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["FormFieldType"].text,
                controlType: toco_lib__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"],
                required: false,
                startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_4__["HintPosition"].start, ''),
                width: '45%',
                value: this.editing ? [this.editing.data['end_cover']] : ''
              }],
              actionLabel: 'OK',
              action: {
                doit: function doit(data) {
                  if (_this37.indexFormGroup.valid) {
                    var result = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceClasification"](); // console.log(this.indexFormGroup);

                    if (_this37.indexFormGroup.controls['indexes'].value) {
                      var node = _this37.options.find(function (value) {
                        return value.term.uuid == _this37.indexFormGroup.controls['indexes'].value;
                      });

                      if (node) {
                        result.vocabulary = node.term.vocabulary_id;
                        result.description = node.term.description;
                        result.id = node.term.uuid;
                        result.data = {
                          url: _this37.indexFormGroup.controls['url'].value,
                          initial_cover: _this37.indexFormGroup.controls['initial_cover'].value,
                          end_cover: _this37.indexFormGroup.controls['end_cover'].value
                        };

                        _this37.addIndex(result);
                      }
                    }
                  }
                }
              }
            };
          }
        }
      }]);

      return SourceEditAddIndexComponent;
    }();

    SourceEditAddIndexComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["TaxonomyService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SourceEditAddIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-addindex",
      template: "\n  <container-panel-action\n  [content]=\"indexPanel\"\n>\n</container-panel-action>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-indexes.component.scss */
      "../catalog/src/app/source-edit/source-indexes/source-indexes.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], SourceEditAddIndexComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/source-organizations/source-organizations.component.scss":
  /*!***********************************************************************************************!*\
    !*** ../catalog/src/app/source-edit/source-organizations/source-organizations.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceEditSourceOrganizationsSourceOrganizationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLWVkaXQvc291cmNlLW9yZ2FuaXphdGlvbnMvc291cmNlLW9yZ2FuaXphdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/source-edit/source-organizations/source-organizations.component.ts":
  /*!*********************************************************************************************!*\
    !*** ../catalog/src/app/source-edit/source-organizations/source-organizations.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SourceEditOrganizationsComponent, SourceEditOrganizationSelectTopDialog, SourceEditOrganizationSelectDialog */

  /***/
  function catalogSrcAppSourceEditSourceOrganizationsSourceOrganizationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditOrganizationsComponent", function () {
      return SourceEditOrganizationsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditOrganizationSelectTopDialog", function () {
      return SourceEditOrganizationSelectTopDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceEditOrganizationSelectDialog", function () {
      return SourceEditOrganizationSelectDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceEditOrganizationsComponent = /*#__PURE__*/function () {
      function SourceEditOrganizationsComponent(dialog, orgService) {
        _classCallCheck(this, SourceEditOrganizationsComponent);

        this.dialog = dialog;
        this.orgService = orgService;
        this.editable = true;
        this.topMainOrganization = null;
        this.roles = toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"];
      }

      _createClass(SourceEditOrganizationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // solo las organizaciones con algun rol son validas
          this.sourceData.organizations = this.sourceData.organizations.filter(function (element) {
            return element && element.role;
          });
          console.log('**** SourceEditOrganizationsComponent *** complete process initIndexes', this.sourceData);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.ngOnInit();
        }
      }, {
        key: "addOrg",
        value: function addOrg() {
          var _this38 = this;

          var cuban = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var topMain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (topMain && this.topMainOrganization) {
            this.dialog.open(SourceEditOrganizationSelectTopDialog, {
              width: "500px",
              data: {
                topMainOrganization: this.topMainOrganization,
                selectOrg: function selectOrg(org, parents) {
                  _this38.addOrgToSource(org, toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].MAIN.value);

                  parents.forEach(function (element) {
                    _this38.addOrgToSource(element, toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].COLABORATOR.value);
                  });
                }
              }
            });
          } else {
            this.dialog.open(SourceEditOrganizationSelectDialog, {
              width: "500px",
              data: {
                filter: cuban ? {
                  type: "country",
                  value: "Cuba"
                } : null,
                canSelectRole: this.topMainOrganization == null,
                selectOrg: function selectOrg(org, role, parents) {
                  _this38.addOrgToSource(org, role);

                  parents.forEach(function (element) {
                    _this38.addOrgToSource(element, toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].COLABORATOR.value);
                  });
                }
              }
            });
          }
        }
      }, {
        key: "addOrgToSource",
        value: function addOrgToSource(org, role) {
          if (!this.sourceData.organizations.find(function (o) {
            return o.id == org.id;
          })) {
            var selected = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganization"]();
            selected.deepcopy(org);
            selected.role = role;
            this.sourceData.organizations.push(selected);

            if (toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].MAIN.value == role) {
              this.setAsMain(org);
            }
          }
        }
      }, {
        key: "setAsMain",
        value: function setAsMain(organization) {
          this.sourceData.organizations.forEach(function (element) {
            if (organization.id == element.id) {
              element.role = toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].MAIN.value;
            } else {
              element.role = toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].COLABORATOR.value;
            }
          });
        }
      }, {
        key: "removeInst",
        value: function removeInst(index) {
          var _this39 = this;

          var organization = this.sourceData.organizations[index];
          var m = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["MessageHandler"](null, this.dialog);
          var child = this.childToRemove(organization);

          if (child == null) {
            var parents = this.getOrgToDelete(organization);
            var toDelete = [];
            var msg = "";

            for (var i = 0; i < parents.length; i++) {
              var element = parents[i];
              toDelete.push(this.sourceData.organizations[element]);
              msg += this.sourceData.organizations[element].name + ", ";
            }

            toDelete.push(organization);
            console.log(toDelete);

            if (toDelete.length > 0) {
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OK, msg, toco_lib__WEBPACK_IMPORTED_MODULE_3__["HandlerComponent"].dialog, "Se eliminó también: ");
            }

            var orgs = [];

            var _loop3 = function _loop3(_i2) {
              if (!toDelete.find(function (o) {
                return o.id == _this39.sourceData.organizations[_i2].id;
              })) {
                orgs.push(_this39.sourceData.organizations[_i2]);
              }
            };

            for (var _i2 = 0; _i2 < this.sourceData.organizations.length; _i2++) {
              _loop3(_i2);
            }

            console.log(orgs);
            this.sourceData.organizations = orgs; // this.sourceData.organizations = this.sourceData.organizations.filter(
            //   (o) => o.id != organization.id
            // );
          } else {
            m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OK, child.name, toco_lib__WEBPACK_IMPORTED_MODULE_3__["HandlerComponent"].dialog, "Para eliminar este elemento debe eliminar:");
          }
        }
      }, {
        key: "childToRemove",
        value: function childToRemove(org) {
          // se puede eliminar si no tiene hijos en el sourceData.organizations
          var result = true;

          if (org.relationships) {
            for (var index = 0; index < org.relationships.length; index++) {
              var element = org.relationships[index];

              if (element.type == toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationRelationships"].CHILD.value) {
                var childIndex = this.getIndexByPid(element.identifiers[0].value);

                if (childIndex != null) {
                  return this.sourceData.organizations[childIndex];
                }
              }
            }

            return null;
          }
        } // removeInst(index) {
        //   let toDelete = []
        //   toDelete.push(index);
        //   toDelete.concat(this.getOrgToDelete(this.sourceData.organizations[index]));
        //   let orgs = [];
        //   for (let i = 0; i < this.sourceData.organizations.length; i++) {
        //     if(!toDelete.find((o) => o == i)){
        //       orgs.push(this.sourceData.organizations[i]);
        //     }
        //   }
        //   this.sourceData.organizations = orgs;
        // }

      }, {
        key: "getOrgToDelete",
        value: function getOrgToDelete(org) {
          var _this40 = this;

          var toDelete = [];

          if (org.relationships) {
            org.relationships.forEach(function (element) {
              if (element.type == toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationRelationships"].PARENT.value) {
                var parentIndex = _this40.getIndexByPid(element.identifiers[0].value);

                if (parentIndex) {
                  toDelete.push(parentIndex);
                  toDelete.concat(_this40.getOrgToDelete(_this40.sourceData.organizations[parentIndex]));
                }
              }
            });
          }

          return toDelete;
        }
      }, {
        key: "getIndexByPid",
        value: function getIndexByPid(pid) {
          for (var index = 0; index < this.sourceData.organizations.length; index++) {
            var element = this.sourceData.organizations[index];

            for (var pidindex = 0; pidindex < element.identifiers.length; pidindex++) {
              var identifier = element.identifiers[pidindex];
              console.log(identifier.value + "==" + pid);

              if (identifier.value == pid) {
                console.log(identifier.value + "==" + pid + "  iguales!!!");
                return index;
              }
            }
          }

          return null;
        }
      }]);

      return SourceEditOrganizationsComponent;
    }();

    SourceEditOrganizationsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationServiceNoAuth"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditOrganizationsComponent.prototype, "sourceData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditOrganizationsComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceEditOrganizationsComponent.prototype, "topMainOrganization", void 0);
    SourceEditOrganizationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-edit-organizations",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-organizations.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-edit/source-organizations/source-organizations.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-organizations.component.scss */
      "../catalog/src/app/source-edit/source-organizations/source-organizations.component.scss"))["default"]]
    })], SourceEditOrganizationsComponent);

    var SourceEditOrganizationSelectTopDialog = /*#__PURE__*/function () {
      function SourceEditOrganizationSelectTopDialog(dialogRef, data) {
        _classCallCheck(this, SourceEditOrganizationSelectTopDialog);

        this.dialogRef = dialogRef;
        this.data = data;
        this.topMainOrganization = null;
        this.toSelect = null;
        this.selected = -1;
        this.selectedOrg = null;
        this.parents = new Array();
      }

      _createClass(SourceEditOrganizationSelectTopDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.topMainOrganization = this.data.topMainOrganization;
          this.toSelect = new Array();
          this.topMainOrganization.metadata.relationships.forEach(function (element) {
            if (element.type == toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationRelationships"].CHILD.value) {
              _this41.toSelect.push(element);
            }
          });
          console.log(this.toSelect);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "selectOrg",
        value: function selectOrg(org) {
          this.selectedOrg = org.item;
          this.parents = new Array();
          this.addParents(org);
        }
      }, {
        key: "addParents",
        value: function addParents(org) {
          if (org.parent != null) {
            this.parents.push(org.parent.item.metadata);
            this.addParents(org.parent);
          } // child.relationships.forEach((p) => {
          //   if (p.type == OrganizationRelationships.PARENT.value) {
          //     if (p.identifiers.length > 0 && p.identifiers[0].value) {
          //       this.orgService
          //         .getOrganizationByPID(p.identifiers[0].value)
          //         .subscribe({
          //           next: (response) => {
          //             console.log(response);
          //             this.parents.push(response.metadata);
          //             this.addParents(response.metadata);
          //           },
          //         });
          //     }
          //   }
          // });

        }
      }, {
        key: "ok",
        value: function ok() {
          // let selected = new SourceOrganization()
          // selected.organization = org;
          // selected.role = SourceOrganizationRole.MAIN.value;
          if (this.selectedOrg) {
            this.data.selectOrg(this.selectedOrg.metadata, this.parents);
            this.dialogRef.close(); // console.log(this.toSelect[this.selected]);
            // this.orgService
            //   .getOrganizationByPID(this.toSelect[this.selected].identifiers[0].value)
            //   .subscribe({
            //     next: (response) => {
            //       this.data.selectOrg(response.metadata, [this.topMainOrganization]);
            //       this.dialogRef.close();
            //     },
            //   });
          }
        }
      }]);

      return SourceEditOrganizationSelectTopDialog;
    }();

    SourceEditOrganizationSelectTopDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SourceEditOrganizationSelectTopDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-organizations-select-top-main",
      template: "<mat-dialog-content class=\"height-auto\">\n\n  <ng-container *ngIf=\"selectedOrg\">\n  <mat-label>Principal: </mat-label>\n  <br />\n    <mat-label>{{ selectedOrg.metadata.name }}</mat-label>\n  <br />\n  </ng-container>\n\n  <ng-container *ngIf=\"parents.length > 0\">\n  <mat-label>Colaboradores: </mat-label>\n  <ng-container *ngFor=\"let item of parents\">\n    <br />\n    <mat-label>{{ item.name }}</mat-label>\n    <br />\n  </ng-container>\n  <br />\n  </ng-container>\n\n  <toco-org-tree-viewer\n  [organizations]=\"[topMainOrganization]\"\n  [orgRelationshipType]=\"'child'\"\n  [iconAction]=\"'done'\"\n  [labelAction]=\"'Seleccionar'\"\n  (action)=\"selectOrg($event)\"\n  [ngStyle]=\"{'height': '300px','overflow': 'auto'}\"\n>\n</toco-org-tree-viewer>\n    <button mat-raised-button (click)=\"ok()\">OK</button>\n  </mat-dialog-content>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SourceEditOrganizationSelectTopDialog);

    var SourceEditOrganizationSelectDialog = /*#__PURE__*/function () {
      function SourceEditOrganizationSelectDialog(dialogRef, data, orgService) {
        _classCallCheck(this, SourceEditOrganizationSelectDialog);

        this.dialogRef = dialogRef;
        this.data = data;
        this.orgService = orgService;
        this.roles = [{
          label: "Principal",
          value: "MAIN"
        }, {
          label: "Colaborador",
          value: "COLABORATOR"
        }];
        this.role = null;
        this.parents = new Array();
        this.placeholder = "Buscar una organización";
        this.canSelectRole = true;
      }

      _createClass(SourceEditOrganizationSelectDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
          this.canSelectRole = this.data.canSelectRole;

          if (this.data.filter) {
            this.placeholder = "Buscar una organización cubana";
          }
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "selectedOrg",
        value: function selectedOrg(org) {
          console.log(org);
          this.org = org;
          this.addParent(this.org);
        }
      }, {
        key: "addParent",
        value: function addParent(child) {
          var _this42 = this;

          child.relationships.forEach(function (p) {
            if (p.type == toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationRelationships"].PARENT.value) {
              if (p.identifiers.length > 0 && p.identifiers[0].value) {
                _this42.orgService.getOrganizationByPID(p.identifiers[0].value).subscribe({
                  next: function next(response) {
                    console.log(response);

                    _this42.parents.push(response.metadata);

                    _this42.addParent(response.metadata);
                  }
                });
              }
            }
          });
        }
      }, {
        key: "ok",
        value: function ok() {
          // let selected = new SourceOrganization()
          // selected.organization = org;
          // selected.role = SourceOrganizationRole.MAIN.value;
          if (this.canSelectRole) {
            if (this.role) {
              this.data.selectOrg(this.org, this.role, this.parents);
              this.dialogRef.close();
            }
          } else {
            this.data.selectOrg(this.org, toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceOrganizationRole"].COLABORATOR.value, this.parents);
            this.dialogRef.close();
          }
        }
      }]);

      return SourceEditOrganizationSelectDialog;
    }();

    SourceEditOrganizationSelectDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["OrganizationServiceNoAuth"]
      }];
    };

    SourceEditOrganizationSelectDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-organizations-select-dialog",
      template: "<mat-dialog-content class=\"height-auto\">\n    <toco-org-search\n      [orgFilter]=\"data.filter\"\n      (selectedOrg)=\"selectedOrg($event)\"\n      [placeholder]=\"placeholder\"\n    >\n    </toco-org-search>\n    <br />\n    <mat-label *ngIf=\"org\">{{ org.name }}</mat-label>\n    <br />\n    <mat-form-field *ngIf=\"canSelectRole\">\n      <mat-label>Rol</mat-label>\n      <mat-select [(value)]=\"role\" required>\n        <mat-option *ngFor=\"let item of roles\" value=\"{{ item.value }}\">{{\n          item.label\n        }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <br />\n\n    <ng-container *ngIf=\"parents.length > 0\">\n      <mat-label>Se a\xF1adir\xE1 tambi\xE9n: </mat-label>\n      <ng-container *ngFor=\"let item of parents\">\n        <br />\n        <mat-label>{{ item.name }}</mat-label>\n        <br />\n      </ng-container>\n      <br />\n    </ng-container>\n\n    <button mat-raised-button (click)=\"ok()\">OK</button>\n  </mat-dialog-content>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SourceEditOrganizationSelectDialog);
    /***/
  },

  /***/
  "../catalog/src/app/source-inclusion/source-inclusion.component.scss":
  /*!***************************************************************************!*\
    !*** ../catalog/src/app/source-inclusion/source-inclusion.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceInclusionSourceInclusionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLWluY2x1c2lvbi9zb3VyY2UtaW5jbHVzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "../catalog/src/app/source-inclusion/source-inclusion.component.ts":
  /*!*************************************************************************!*\
    !*** ../catalog/src/app/source-inclusion/source-inclusion.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SourceInclusionComponent, SourceInclusionAcceptComponent */

  /***/
  function catalogSrcAppSourceInclusionSourceInclusionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceInclusionComponent", function () {
      return SourceInclusionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceInclusionAcceptComponent", function () {
      return SourceInclusionAcceptComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceInclusionComponent = /*#__PURE__*/function () {
      function SourceInclusionComponent(sourceService, sourceServiceNoAuth, _formBuilder, dialog, _router, orgService, environment) {
        _classCallCheck(this, SourceInclusionComponent);

        this.sourceService = sourceService;
        this.sourceServiceNoAuth = sourceServiceNoAuth;
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this._router = _router;
        this.orgService = orgService;
        this.environment = environment;
        this.source = null;
        this.versionToEdit = null;
        this.topOrganizationPID = null;
        this.topMainOrganization = null;
        this.sourceType = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"];
        this.loading = false;
        this.isStartProcess = true;
      }

      _createClass(SourceInclusionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          if (localStorage.getItem('topMainOrganization') && localStorage.getItem('topMainOrganization') != '') {
            var response = JSON.parse(localStorage.getItem('topMainOrganization'));
            this.topMainOrganization = response;
          } else {
            if (this.environment.topOrganizationPID) {
              this.topOrganizationPID = this.environment.topOrganizationPID;
              this.orgService.getOrganizationByPID(this.topOrganizationPID).subscribe(function (response) {
                _this43.topMainOrganization = response; // new Organization();
                // this.topMainOrganization.deepcopy(response.metadata);
              }, function (error) {
                console.log("error");
              }, function () {});
            }
          }

          this.findFormGroup = this._formBuilder.group({});
          this.findPanel = {
            name: 'panel',
            controlType: toco_lib__WEBPACK_IMPORTED_MODULE_5__["ContainerPanelActionComponent"],
            label: "Introduzca el ISSN de la revista que desea incluir.",
            description: "",
            iconName: "",
            formSection: this.findFormGroup,
            formSectionContent: [{
              'formControl': toco_lib__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"].getFormControlByDefault(),
              name: "idenfifier",
              label: "Identificador",
              type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["FormFieldType"].text,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"],
              required: true,
              startHint: new toco_lib__WEBPACK_IMPORTED_MODULE_5__["HintValue"](toco_lib__WEBPACK_IMPORTED_MODULE_5__["HintPosition"].start, "(ISSN, RNPS, URL, Título)"),
              width: "100%"
            }],
            actionLabel: 'Buscar',
            action: {
              doit: function doit() {
                var identifier = _this43.findFormGroup.controls['idenfifier'].value;
                _this43.loading = true;
                var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](null, _this43.dialog);
                var title = "No hemos encontrado información";
                var content = "Debe completar todos los datos solicitados para incluir la revista.";

                _this43.sourceServiceNoAuth.getSourceByISSN(identifier).subscribe(function (response) {
                  if (response && response.metadata) {
                    _this43.source = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["Journal"]();
                    _this43.versionToEdit = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["JournalVersion"]();
                    console.log(response.metadata);

                    _this43.source.deepcopy(response.metadata);

                    _this43.versionToEdit.source_uuid = response.metadata.id;

                    _this43.versionToEdit.data.deepcopy(response.metadata);

                    title = "Tenemos información sobre la revista";
                    content = "Compruebe y complete todos los datos solicitados para incluir la revista.";
                    _this43.isStartProcess = false;
                    _this43.loading = false;
                    m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].OK, content, toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, title);
                  } else {
                    _this43.sourceServiceNoAuth.getSourceByPID(identifier).subscribe(function (response) {
                      if (response && response.metadata) {
                        var src = response.metadata;

                        switch (src.source_type) {
                          case _this43.sourceType.JOURNAL.value:
                            _this43.source = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["Journal"]();
                            _this43.versionToEdit = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["JournalVersion"]();
                            console.log(response.metadata);

                            _this43.source.deepcopy(response.metadata);

                            _this43.versionToEdit.source_uuid = response.metadata.id;

                            _this43.versionToEdit.data.deepcopy(response.metadata);

                            title = 'Tenemos información sobre la revista';
                            content = "Compruebe y complete todos los datos solicitados para incluir la revista.";
                            break;

                          default:
                            title = 'No soportado';
                            content = 'El identificador: ' + identifier + 'no pertenece a una revista. Este sistema no soporta esta funcionalidad.';
                            _this43.source = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["Source"]();

                            _this43.source.data.deepcopy(src);

                        }

                        _this43.isStartProcess = false;
                        _this43.loading = false;
                        m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].OK, content, toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, title);
                      } else {
                        _this43.source = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["Journal"]();
                        _this43.versionToEdit = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["JournalVersion"]();
                        _this43.source.isNew = true;
                        _this43.versionToEdit.isNew = true;
                        _this43.loading = false;
                        _this43.isStartProcess = false;
                        m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].OK, content, toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, title);
                      }
                    }, function (error) {}, function () {});
                  }
                }, function (error) {}, function () {});
              }
            }
          };
        }
      }, {
        key: "journalEditDone",
        value: function journalEditDone() {// this.isEditig = false;
          // this.isViewing = true;
          // console.log(this.versionToEdit)
          // this.journalStep.completed = true;
          // this.journalStep.hasError = false;
          // this.stepper.next();
        }
      }, {
        key: "resetEdit",
        value: function resetEdit() {
          this.source = null;
          this.isStartProcess = true;
        }
      }, {
        key: "finishInclusion",
        value: function finishInclusion() {
          var _this44 = this;

          var dialogRef;
          this.dialog.open(SourceInclusionAcceptComponent, {
            data: {
              accept: function accept(role) {
                _this44.dialog.closeAll();

                console.log(" KONIEC", role, _this44.versionToEdit);

                _this44.sourceService.newSource(_this44.versionToEdit, _this44.versionToEdit.source_uuid, role).subscribe(function (values) {
                  console.log(values);

                  _this44._router.navigate(['sources', _this44.versionToEdit.source_uuid, 'view']);
                }, function (err) {
                  console.log('error: ' + err + '.');
                }, function () {
                  console.log('complete');
                });
              }
            }
          });
        }
      }]);

      return SourceInclusionComponent;
    }();

    SourceInclusionComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceServiceNoAuth"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["OrganizationServiceNoAuth"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["Environment"]
      }];
    };

    SourceInclusionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-inclusion",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-inclusion.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-inclusion/source-inclusion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-inclusion.component.scss */
      "../catalog/src/app/source-inclusion/source-inclusion.component.scss"))["default"]]
    })], SourceInclusionComponent);

    var SourceInclusionAcceptComponent = /*#__PURE__*/function () {
      function SourceInclusionAcceptComponent(_formBuilder, data) {
        _classCallCheck(this, SourceInclusionAcceptComponent);

        this._formBuilder = _formBuilder;
        this.data = data;
        this.accept = data.accept;
      }

      _createClass(SourceInclusionAcceptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          this.agreementFormGroup = this._formBuilder.group({
            agree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
          });
          this.agreementPanel = {
            name: 'agreement',
            label: "Acuerdo Legal",
            description: "",
            iconName: "",
            formSection: this.agreementFormGroup,
            formSectionContent: [{
              name: "role",
              label: "Rol",
              type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["FormFieldType"].select_expr,
              controlType: toco_lib__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"],
              required: true,
              width: "100%",
              value: null,
              extraContent: {
                getOptions: function getOptions() {
                  var opts = [];
                  Object.keys(toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourcePersonRole"]).forEach(function (key) {
                    opts.push({
                      value: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourcePersonRole"][key].value,
                      label: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourcePersonRole"][key].label
                    });
                  });
                  return opts;
                }
              }
            }, {
              name: "agree",
              label: "Acepto",
              type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["FormFieldType"].checkbox,
              required: true,
              width: "100%",
              value: false
            }],
            action: {
              doit: function doit(data) {
                if (_this45.agreementFormGroup.status == 'VALID') {
                  _this45.accept(_this45.agreementFormGroup.value['role']);
                }
              }
            },
            actionLabel: 'Aceptar'
          };
        }
      }]);

      return SourceInclusionAcceptComponent;
    }();

    SourceInclusionAcceptComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SourceInclusionAcceptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-journal-addinstextra",
      template: "\n\n  <h2>\n  Acuerdo legal\n</h2>\n<p>\n  texto del acuerdo legal\n</p>\n\n<h3>Subtitulo</h3>\n<p>algo mas...</p>\n\n  <container-panel-action [content]=\"agreementPanel\">\n\n  <!--  <toco-form-container\n  [panelsContent]=\"agreementPanel\"\n  [useAccordion]=\"false\"\n  [formGroup]=\"agreementFormGroup\"\n  [action]=\"acceptAction\"\n  [actionLabel]=\"'Terminar'\"\n>\n</toco-form-container> -->\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], SourceInclusionAcceptComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-resolver.ts":
  /*!*********************************************!*\
    !*** ../catalog/src/app/source-resolver.ts ***!
    \*********************************************/

  /*! exports provided: SourceResolver, SourceResolverAuth */

  /***/
  function catalogSrcAppSourceResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceResolver", function () {
      return SourceResolver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceResolverAuth", function () {
      return SourceResolverAuth;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceResolver = /*#__PURE__*/function () {
      function SourceResolver(service, router) {
        _classCallCheck(this, SourceResolver);

        this.service = service;
        this.router = router;
      }

      _createClass(SourceResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this46 = this;

          console.log("RESOLVE SOURCE");
          var uuid = route.paramMap.get('uuid'); // return this.service.getSourceByUUIDWithVersions(uuid).pipe(

          return this.service.getSourceByUUID(uuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (source) {
            if (source) {
              return source;
            } else {
              _this46.router.navigate(['/']);
            }
          }));
        }
      }]);

      return SourceResolver;
    }();

    SourceResolver.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceServiceNoAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SourceResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SourceResolver);

    var SourceResolverAuth = /*#__PURE__*/function () {
      function SourceResolverAuth(service, router) {
        _classCallCheck(this, SourceResolverAuth);

        this.service = service;
        this.router = router;
      }

      _createClass(SourceResolverAuth, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this47 = this;

          console.log("RESOLVE SOURCE AUTH");
          var uuid = route.paramMap.get('uuid'); // return this.service.getSourceByUUIDWithVersions(uuid).pipe(

          return this.service.getSourceByUUID(uuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (node) {
            if (node) {
              return node;
            } else {
              _this47.router.navigate(['/sources']);
            }
          }));
        }
      }]);

      return SourceResolverAuth;
    }();

    SourceResolverAuth.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SourceResolverAuth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SourceResolverAuth);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/journal-view/info/journal-view-info.component.ts":
  /*!***************************************************************************************!*\
    !*** ../catalog/src/app/source-view/journal-view/info/journal-view-info.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: SourceJournalViewInfoComponent, SourceJournalViewInfoFieldComponent */

  /***/
  function catalogSrcAppSourceViewJournalViewInfoJournalViewInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceJournalViewInfoComponent", function () {
      return SourceJournalViewInfoComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceJournalViewInfoFieldComponent", function () {
      return SourceJournalViewInfoFieldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../source-edit/source-indexes/source-indexes.component */
    "../catalog/src/app/source-edit/source-indexes/source-indexes.component.ts");
    /* harmony import */


    var _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../source-edit/source-organizations/source-organizations.component */
    "../catalog/src/app/source-edit/source-organizations/source-organizations.component.ts");

    ;
    /**
     * This component share the same scss that `JournalViewComponent`.
     * His goal, shows a Journal
     */

    var SourceJournalViewInfoComponent = /*#__PURE__*/function () {
      function SourceJournalViewInfoComponent(_sourveService, _snackBar) {
        _classCallCheck(this, SourceJournalViewInfoComponent);

        this._sourveService = _sourveService;
        this._snackBar = _snackBar;
        this.showVersionLabel = true;
        this.tipos = toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceTypes"];
        this.sistemas = toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceSystems"];
        this.panelOpenState = false;
        this.IdentifierSchemas = toco_lib__WEBPACK_IMPORTED_MODULE_3__["IdentifierSchemas"];
        this.loading = true;
      }

      _createClass(SourceJournalViewInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadJournalData();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log("changes....");
          this.loadJournalData();
          this.loading = false;
        }
      }, {
        key: "loadJournalData",
        value: function loadJournalData() {
          var _this48 = this;

          if (this.journalData == undefined) this.journalData = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["JournalData"]();
          this.journalData.deepcopy(this.journalVersion.data);
          this.dataBaseTerms = new Array();
          this.groupTerms = new Array();
          this.institutionTerms = new Array();
          this.licenceTerms = new Array();
          this.provinceTerms = new Array();
          this.subjectTerms = new Array();
          this.vocabularies = toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"];

          if (this.journalData.classifications) {
            this.journalData.classifications.forEach(function (term) {
              switch (term.vocabulary.toString()) {
                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].CUBAN_INTITUTIONS:
                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].EXTRA_INSTITUTIONS:
                  _this48.institutionTerms.push(term);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].INDEXES:
                  _this48.dataBaseTerms.push(term);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].INDEXES_CLASIFICATION:
                  _this48.groupTerms.push(term);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].LICENCES:
                  _this48.licenceTerms.push(term);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].CUBAN_PROVINCES:
                  _this48.provinceTerms.push(term);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].SUBJECTS:
                  _this48.subjectTerms.push(term);

                  break;
              }
            });
          }
        }
      }, {
        key: "getIdentifier",
        value: function getIdentifier(idtype) {
          var r = this.journalData ? this.journalData.getIdentifierValue(idtype) : "";
          return r;
        }
      }, {
        key: "editingJournalChange",
        value: function editingJournalChange(newVersion) {
          console.log("*****llego....", newVersion, this.journalData);
          this.loadJournalData();
          this.orgs.ngOnInit();
          this.indexes.ngOnInit();
        }
      }]);

      return SourceJournalViewInfoComponent;
    }();

    SourceJournalViewInfoComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["SourceService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewInfoComponent.prototype, "journalVersion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewInfoComponent.prototype, "showVersionLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_5__["SourceEditOrganizationsComponent"], {
      "static": false
    })], SourceJournalViewInfoComponent.prototype, "orgs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_4__["SourceEditIndexesComponent"], {
      "static": false
    })], SourceJournalViewInfoComponent.prototype, "indexes", void 0);
    SourceJournalViewInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-journal-view-info",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./journal-view-info.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/info/journal-view-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../journal-view.component.scss */
      "../catalog/src/app/source-view/journal-view/journal-view.component.scss"))["default"]]
    })], SourceJournalViewInfoComponent);

    var SourceJournalViewInfoFieldComponent = function SourceJournalViewInfoFieldComponent() {
      _classCallCheck(this, SourceJournalViewInfoFieldComponent);

      this.emptyLabel = 'Vacío';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewInfoFieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewInfoFieldComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewInfoFieldComponent.prototype, "emptyLabel", void 0);
    SourceJournalViewInfoFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-journal-view-info-field",
      template: "\n    <mat-label style=\"font-weight: bold;\">{{label}}: </mat-label>\n    <mat-label *ngIf=\"value\">\n      {{ value }}\n    </mat-label>\n    <mat-label\n      *ngIf=\"!value\"\n      class=\"text-muted text-through\"\n      >{{emptyLabel}}\n    </mat-label\n    >",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../journal-view.component.scss */
      "../catalog/src/app/source-view/journal-view/journal-view.component.scss"))["default"]]
    })], SourceJournalViewInfoFieldComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/journal-view/journal-view.component.scss":
  /*!*******************************************************************************!*\
    !*** ../catalog/src/app/source-view/journal-view/journal-view.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceViewJournalViewJournalViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-muted {\n  color: rgba(0, 0, 0, 0.54);\n  padding-left: 0.2em;\n}\n\n.text-through {\n  text-decoration: line-through;\n}\n\n.notification-position {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\np {\n  padding-top: 0.8em;\n}\n\n.overlay {\n  opacity: 0.4;\n  background: #000;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLXZpZXcvam91cm5hbC12aWV3L2pvdXJuYWwtdmlldy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NhdGFsb2cvc3JjL2FwcC9zb3VyY2Utdmlldy9qb3VybmFsLXZpZXcvam91cm5hbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLXZpZXcvam91cm5hbC12aWV3L2pvdXJuYWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW11dGVke1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIHBhZGRpbmctbGVmdDogLjJlbTtcbn1cblxuLnRleHQtdGhyb3VnaHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLm5vdGlmaWNhdGlvbi1wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG5we1xuICAgIHBhZGRpbmctdG9wOiAuOGVtO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogICAgMC40OyBcbiAgICBiYWNrZ3JvdW5kOiAjMDAwOyBcbiAgICB3aWR0aDogICAgICAxMDAlO1xuICAgIGhlaWdodDogICAgIDEwMCU7IFxuICAgIHotaW5kZXg6ICAgIDEwO1xuICAgIHRvcDogICAgICAgIDA7IFxuICAgIGxlZnQ6ICAgICAgIDA7IFxuICAgIHBvc2l0aW9uOiAgIGZpeGVkOyBcbiAgfSIsIi50ZXh0LW11dGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIHBhZGRpbmctbGVmdDogMC4yZW07XG59XG5cbi50ZXh0LXRocm91Z2gge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLm5vdGlmaWNhdGlvbi1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxucCB7XG4gIHBhZGRpbmctdG9wOiAwLjhlbTtcbn1cblxuLm92ZXJsYXkge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "../catalog/src/app/source-view/journal-view/journal-view.component.ts":
  /*!*****************************************************************************!*\
    !*** ../catalog/src/app/source-view/journal-view/journal-view.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: JournalDataType, SourceJournalViewComponent */

  /***/
  function catalogSrcAppSourceViewJournalViewJournalViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JournalDataType", function () {
      return JournalDataType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceJournalViewComponent", function () {
      return SourceJournalViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _version_journal_view_version_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./version/journal-view-version.component */
    "../catalog/src/app/source-view/journal-view/version/journal-view-version.component.ts");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var JournalDataType;

    (function (JournalDataType) {
      /** is used by default, `Journal` have not that type of data. */
      JournalDataType[JournalDataType["default"] = 0] = "default";
      JournalDataType[JournalDataType["title"] = 1] = "title";
      JournalDataType[JournalDataType["subtitle"] = 2] = "subtitle";
      JournalDataType[JournalDataType["shortname"] = 3] = "shortname";
      JournalDataType[JournalDataType["issnP"] = 4] = "issnP";
      JournalDataType[JournalDataType["issnE"] = 5] = "issnE";
      JournalDataType[JournalDataType["issnL"] = 6] = "issnL";
      JournalDataType[JournalDataType["rnpsP"] = 7] = "rnpsP";
      JournalDataType[JournalDataType["rnpsE"] = 21] = "rnpsE";
      JournalDataType[JournalDataType["url"] = 8] = "url";
      JournalDataType[JournalDataType["email"] = 9] = "email";
      JournalDataType[JournalDataType["logo"] = 10] = "logo";
      JournalDataType[JournalDataType["purpose"] = 11] = "purpose";
      JournalDataType[JournalDataType["start_year"] = 12] = "start_year";
      JournalDataType[JournalDataType["end_year"] = 13] = "end_year";
      JournalDataType[JournalDataType["frequency"] = 14] = "frequency";
      JournalDataType[JournalDataType["seriadas_cubanas"] = 15] = "seriadas_cubanas";
      JournalDataType[JournalDataType["facebook"] = 16] = "facebook";
      JournalDataType[JournalDataType["twitter"] = 17] = "twitter";
      JournalDataType[JournalDataType["linkedin"] = 18] = "linkedin";
      JournalDataType[JournalDataType["description"] = 19] = "description";
      JournalDataType[JournalDataType["term"] = 20] = "term";
      JournalDataType[JournalDataType["oaiurl"] = 22] = "oaiurl";
    })(JournalDataType || (JournalDataType = {}));

    var SourceJournalViewComponent = /*#__PURE__*/function () {
      function SourceJournalViewComponent(metadata, environment, _snackBar, dialog) {
        _classCallCheck(this, SourceJournalViewComponent);

        this.metadata = metadata;
        this.environment = environment;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.topMainOrganization = null;
        /**************** auxiliary variables *******************/

        this.panelOpenState = false;
        this.defaultLogo = this.environment.sceibaHost + 'static/favicon.ico';
        /**
         * Inmutables data types of Journal
         */

        this.journalDataType = JournalDataType;
        /**
         * version.is_current = true
         */
        // public currentJournal: JournalVersion;

        this.showVersions = false;
        this.editVersion = false;
      }

      _createClass(SourceJournalViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isDisabledNavigatePrevious = true;
          this.isDisabledNavigateNext = false;
          this.vocabularies = toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"]; // guardar la cantidad total de versiones

          this.lengthVersion = this.versions.length; // guardar la posicion de la version donde este la actual

          this.selectedVersion = this.getSelectedJournalPosition();
          this.SelectJournalVersion();
          this.metadata.setTitleDescription('Revista Científica ' + this.editingJournal.data.title, this.editingJournal.data.description); // if (this.versions){
          //   this.versions.forEach((journalVersion: JournalVersion, index: number) => {
          //     // check if has versions to view and return that position
          //     if (journalVersion.is_current) {
          //         this.currentJournal = new JournalVersion();
          //         this.currentJournal.deepcopy(journalVersion);
          //     }
          //   });
          // }
        }
        /**
         * Changes the selected position to the next one if possible
         */

      }, {
        key: "nextVersion",
        value: function nextVersion() {
          if (this.selectedVersion < this.lengthVersion - 1) {
            this.isDisabledNavigateNext = false;
            this.isDisabledNavigatePrevious = false;
            this.selectedVersion++;
            this.SelectJournalVersion();
          } else {
            this.isDisabledNavigateNext = true;
            var m = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["MessageHandler"](this._snackBar);
            m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OK, 'No hay más versiones para mostrar');
          }

          if (this.selectedVersion == this.lengthVersion - 1) {
            this.isDisabledNavigateNext = true;
          }
        }
        /**
         * Changes the selected position to the before one if possible
         */

      }, {
        key: "previousVersion",
        value: function previousVersion() {
          if (this.selectedVersion > 0) {
            this.isDisabledNavigatePrevious = false;
            this.isDisabledNavigateNext = false;
            this.selectedVersion--;
            this.SelectJournalVersion();
          } else {
            this.isDisabledNavigatePrevious = true;
            var m = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["MessageHandler"](this._snackBar);
            m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OK, 'No hay más versiones para mostrar');
          }

          if (this.selectedVersion == 0) {
            this.isDisabledNavigatePrevious = true;
          }
        }
        /**
         * Selects the selected journal as a JournalVersion
         */

      }, {
        key: "SelectJournalVersion",
        value: function SelectJournalVersion() {
          if (this.versions.length >= 0 && this.selectedVersion >= 0 && this.selectedVersion < this.versions.length) {
            // load the selected journal
            this.selectedJournal = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["JournalVersion"]();
            this.selectedJournal.deepcopy(this.versions[this.selectedVersion]); // this.selectedJournal = version;

            console.log('this.selectedVersion', this.selectedVersion, this.selectedJournal); // if(this.versionComponent) {
            //   this.versionComponent.ngOnChanges();
            // }
            // load if was viewed
            // this.selectedJournalChecked = this.selectedJournal.reviewed;
          }
        }
        /**
         * Returns the position of the unseen version of the journal as JournalVersion
         */

      }, {
        key: "getSelectedJournalPosition",
        value: function getSelectedJournalPosition() {
          var count = 0;
          this.versions.forEach(function (journalVersion, index) {
            // check if has versions to view and return that position
            if (journalVersion.reviewed != null && journalVersion.reviewed) {
              count = index;
              return count;
            }
          });
          return count;
        }
      }, {
        key: "sourceEditDone",
        value: function sourceEditDone(version) {
          this.editVersion = false;
          console.log('AAaAAAAAAAAAAAAAAAAAA');
        }
      }, {
        key: "toogleShowVersions",
        value: function toogleShowVersions() {
          this.showVersions = !this.showVersions;
          this.editVersion = false;
        }
      }]);

      return SourceJournalViewComponent;
    }();

    SourceJournalViewComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["MetadataService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["Environment"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewComponent.prototype, "topMainOrganization", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewComponent.prototype, "editingJournal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewComponent.prototype, "versions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_version_journal_view_version_component__WEBPACK_IMPORTED_MODULE_4__["SourceJournalViewVersionComponent"], {
      "static": false
    })], SourceJournalViewComponent.prototype, "versionComponent", void 0);
    SourceJournalViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-journal-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./journal-view.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/journal-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./journal-view.component.scss */
      "../catalog/src/app/source-view/journal-view/journal-view.component.scss"))["default"]]
    })], SourceJournalViewComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/journal-view/version-field/journal-view-version-field.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ../catalog/src/app/source-view/journal-view/version-field/journal-view-version-field.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: SourceJournalViewVersionFieldComponent */

  /***/
  function catalogSrcAppSourceViewJournalViewVersionFieldJournalViewVersionFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceJournalViewVersionFieldComponent", function () {
      return SourceJournalViewVersionFieldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */

    /**
    * This component share the same scss that `JournalViewComponent`.
    * His goal, handle the actions and how show a specific data of a `JournalData`
    */


    var SourceJournalViewVersionFieldComponent = /*#__PURE__*/function () {
      function SourceJournalViewVersionFieldComponent() {
        _classCallCheck(this, SourceJournalViewVersionFieldComponent);

        this.editingJournalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.journalDataType = toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"];
        this.IdentifierSchemas = toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"];
      }

      _createClass(SourceJournalViewVersionFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.editingJournal.data == undefined) this.editingJournal.data = new toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalData"]();
          if (this.currentJournal.data == undefined) this.currentJournal.data = new toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalData"]();
          if (this.type == undefined) this.type = toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"]["default"];
        }
        /**
        * Replaces a `Journal` property by a equal property in `JournalData`.
        * @param type is a `JournalDataType` enum, that means, `type` has all properties of a `Journal` enumerated as identifyer.
        * @param concat is a `boolean`, by default in `false`. If his value is `true` means the fields will be concated and not replaced.
        * @NOTE The `terms` of a `Journal` can NOT replace because will be the same information and not have sense, only we can merge.
        */

      }, {
        key: "replace",
        value: function replace(type) {
          var concat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          switch (type) {
            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].description:
              concat ? this.editingJournal.data.description += ' ' + this.currentJournal.data.description : this.editingJournal.data.description = this.currentJournal.data.description;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].email:
              concat ? this.editingJournal.data.email += ' ' + this.currentJournal.data.email : this.editingJournal.data.email = this.currentJournal.data.email;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].end_year:
              concat ? this.editingJournal.data.end_year += ' ' + this.currentJournal.data.end_year : this.editingJournal.data.end_year = this.currentJournal.data.end_year;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].facebook:
              concat ? this.editingJournal.data.socialNetworks.facebook += ' ' + this.currentJournal.data.socialNetworks.facebook : this.editingJournal.data.socialNetworks.facebook = this.currentJournal.data.socialNetworks.facebook;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].frequency:
              concat ? this.editingJournal.data.frequency += ' ' + this.currentJournal.data.frequency : this.editingJournal.data.frequency = this.currentJournal.data.frequency;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].issnP:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_p, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_p) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_p)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_p, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_p));
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].issnE:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_e, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_e) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_e)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_e, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_e));
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].issnL:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_l, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_l) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_l)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_l, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].issn_l));
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].rnpsP:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].prnps, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].prnps) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].prnps)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].prnps, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].prnps));
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].rnpsE:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].ernps, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].ernps) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].ernps)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].ernps, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].ernps));
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].end_year:
              concat ? this.editingJournal.data.end_year += ' ' + this.currentJournal.data.end_year : this.editingJournal.data.end_year = this.currentJournal.data.end_year;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].linkedin:
              concat ? this.editingJournal.data.socialNetworks.linkedin += ' ' + this.currentJournal.data.socialNetworks.linkedin : this.editingJournal.data.socialNetworks.linkedin = this.currentJournal.data.socialNetworks.linkedin;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].logo:
              concat ? this.editingJournal.data.logo += ' ' + this.currentJournal.data.logo : this.editingJournal.data.logo = this.currentJournal.data.logo;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].purpose:
              concat ? this.editingJournal.data.purpose += ' ' + this.currentJournal.data.purpose : this.editingJournal.data.purpose = this.currentJournal.data.purpose;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].seriadas_cubanas:
              concat ? this.editingJournal.data.seriadas_cubanas += ' ' + this.currentJournal.data.seriadas_cubanas : this.editingJournal.data.seriadas_cubanas = this.currentJournal.data.seriadas_cubanas;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].shortname:
              concat ? this.editingJournal.data.shortname += ' ' + this.currentJournal.data.shortname : this.editingJournal.data.shortname = this.currentJournal.data.shortname;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].start_year:
              concat ? this.editingJournal.data.start_year += ' ' + this.currentJournal.data.start_year : this.editingJournal.data.start_year = this.currentJournal.data.start_year;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].subtitle:
              concat ? this.editingJournal.data.subtitle += ' ' + this.currentJournal.data.subtitle : this.editingJournal.data.subtitle = this.currentJournal.data.subtitle;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].title:
              concat ? this.editingJournal.data.title += ' ' + this.currentJournal.data.title : this.editingJournal.data.title = this.currentJournal.data.title;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].twitter:
              concat ? this.editingJournal.data.socialNetworks.twitter += ' ' + this.currentJournal.data.socialNetworks.twitter : this.editingJournal.data.socialNetworks.twitter = this.currentJournal.data.socialNetworks.twitter;
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].url:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].url, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].url) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].url)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].url, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].url));
              break;

            case toco_lib__WEBPACK_IMPORTED_MODULE_2__["JournalDataType"].oaiurl:
              concat ? this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].oaiurl, this.editingJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].oaiurl) + ' ' + this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].oaiurl)) : this.editingJournal.data.setIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].oaiurl, this.currentJournal.data.getIdentifierValue(toco_lib__WEBPACK_IMPORTED_MODULE_2__["IdentifierSchemas"].oaiurl));
              break;
          }

          this.editingJournalChange.emit(this.editingJournal);
        }
      }]);

      return SourceJournalViewVersionFieldComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionFieldComponent.prototype, "editingJournal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionFieldComponent.prototype, "currentJournal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionFieldComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceJournalViewVersionFieldComponent.prototype, "editingJournalChange", void 0);
    SourceJournalViewVersionFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-journal-view-version-field',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./journal-view-version-field.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version-field/journal-view-version-field.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../journal-view.component.scss */
      "../catalog/src/app/source-view/journal-view/journal-view.component.scss"))["default"]]
    })], SourceJournalViewVersionFieldComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/journal-view/version-term/journal-view-version-term.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ../catalog/src/app/source-view/journal-view/version-term/journal-view-version-term.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: SourceJournalViewVersionTermComponent */

  /***/
  function catalogSrcAppSourceViewJournalViewVersionTermJournalViewVersionTermComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceJournalViewVersionTermComponent", function () {
      return SourceJournalViewVersionTermComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /**
     * This component share the same scss that `JournalViewComponent`.
     * His goal is show a list of `terms`
     */


    var SourceJournalViewVersionTermComponent = /*#__PURE__*/function () {
      function SourceJournalViewVersionTermComponent() {
        _classCallCheck(this, SourceJournalViewVersionTermComponent);
      }

      _createClass(SourceJournalViewVersionTermComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.terms == undefined) this.terms = new Array(0);
          if (this.vocab_id == undefined) this.vocab_id = 0;
          if (this.title == undefined) this.title = '';
        }
      }]);

      return SourceJournalViewVersionTermComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionTermComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionTermComponent.prototype, "vocab_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionTermComponent.prototype, "terms", void 0);
    SourceJournalViewVersionTermComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-journal-view-version-term',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./journal-view-version-term.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version-term/journal-view-version-term.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../journal-view.component.scss */
      "../catalog/src/app/source-view/journal-view/journal-view.component.scss"))["default"]]
    })], SourceJournalViewVersionTermComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/journal-view/version/journal-view-version.component.ts":
  /*!*********************************************************************************************!*\
    !*** ../catalog/src/app/source-view/journal-view/version/journal-view-version.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SourceJournalViewVersionComponent */

  /***/
  function catalogSrcAppSourceViewJournalViewVersionJournalViewVersionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceJournalViewVersionComponent", function () {
      return SourceJournalViewVersionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../source-edit/source-indexes/source-indexes.component */
    "../catalog/src/app/source-edit/source-indexes/source-indexes.component.ts");
    /* harmony import */


    var _source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../source-edit/source-organizations/source-organizations.component */
    "../catalog/src/app/source-edit/source-organizations/source-organizations.component.ts");

    var SourceJournalViewVersionComponent = /*#__PURE__*/function () {
      function SourceJournalViewVersionComponent(_snackBar) {
        _classCallCheck(this, SourceJournalViewVersionComponent);

        this._snackBar = _snackBar;
        this.journalDataType = toco_lib__WEBPACK_IMPORTED_MODULE_3__["JournalDataType"];
        this.panelOpenState = false;
        this.currentJournalChecked = false;
        this.editingJournalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = true;
      }

      _createClass(SourceJournalViewVersionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.currentJournal == undefined) this.currentJournal = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["JournalVersion"]();
          this.loadJournalData();
          if (this.type == undefined) this.type = toco_lib__WEBPACK_IMPORTED_MODULE_3__["JournalDataType"]["default"];
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.loading = true;
          this.ngOnInit();
          console.log("***//// SourceJournalViewVersionComponent ****////***///", this.currentJournal); // if(this.orgs && this.indexes) {
          //   this.orgs.ngOnInit();
          //   this.indexes.ngOnInit();
          // }

          this.loading = false;
        }
      }, {
        key: "loadJournalData",
        value: function loadJournalData() {
          var _this49 = this;

          // if (this.currentJournalData == undefined)
          //   this.currentJournalData = new JournalData();
          // this.currentJournalData.deepcopy(this.currentJournal.data);
          this.currentDataBaseTerms = new Array();
          this.currentGroupTerms = new Array();
          this.currentInstitutionTerms = new Array();
          this.currentLicenceTerms = new Array();
          this.currentProvinceTerms = new Array();
          this.currentSubjectTerms = new Array();
          this.vocabularies = toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"];

          if (this.currentJournal.data.classifications) {
            this.currentJournal.data.classifications.forEach(function (termSource) {
              switch (termSource.vocabulary.toString()) {
                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].CUBAN_INTITUTIONS:
                  _this49.currentInstitutionTerms.push(termSource);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].INDEXES:
                  _this49.currentDataBaseTerms.push(termSource);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].INDEXES_CLASIFICATION:
                  _this49.currentGroupTerms.push(termSource);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].LICENCES:
                  _this49.currentLicenceTerms.push(termSource);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].CUBAN_PROVINCES:
                  _this49.currentProvinceTerms.push(termSource);

                  break;

                case toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].SUBJECTS:
                  _this49.currentSubjectTerms.push(termSource);

                  break;
              }
            });
          }
        }
        /**
         * Changes the field `reviewed` of a `Journal`, that means the user saw these version
         * and consider it not has more information.
         */

      }, {
        key: "markAsViewed",
        value: function markAsViewed() {
          if (this.currentJournalChecked) {
            this.currentJournal.data.reviewed = true; // TODO: hacer el request al backend de marcar la version como vista o

            var m = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["MessageHandler"](this._snackBar);
            m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OK, "Revisión marcada como vista!!!");
          }
        }
      }, {
        key: "fieldEditingJournalChange",
        value: function fieldEditingJournalChange() {
          this.editingJournalChange.emit(this.editingJournal);
        }
      }, {
        key: "replace",
        value: function replace() {
          this.editingJournal = this.currentJournal; // this.editingJournal.data.classifications = [];
          // this.editingJournal.data.classifications = this.currentJournal.data.classifications;

          this.editingJournalChange.emit(this.editingJournal); // // this.currentJournal.data.classifications.forEach((termSource: SourceClasification) => {
          // //     this.editingJournal.data.classifications.push(termSource);
          // // });

          console.log("editingJournal remplazado", this.editingJournal);
        }
        /**
         * Concats a `Journal` property by a equal property in `JournalData`.
         * @param type is a `JournalDataType` enum, that means, `type` has all properties of a `Journal` enumerated as identifyer.
         * @param termId is a `Term` identifyer, only needs if `type` is `JournalDataType.term`.
         * @NOTE this function call `replace(..., true)`
         */

      }, {
        key: "concat",
        value: function concat(type, termSource) {
          if (type == toco_lib__WEBPACK_IMPORTED_MODULE_3__["JournalDataType"].term) {
            var notFound = true;

            for (var index = 0; index < this.editingJournal.data.classifications.length; index++) {
              var element = this.editingJournal.data.classifications[index];

              if (element.id == termSource.id) {
                this.editingJournal.data.classifications[index].data = termSource.data;
                notFound = false;
              }
            }

            if (notFound) {
              this.editingJournal.data.classifications.push(termSource);
            }

            this.editingJournalChange.emit(this.editingJournal);
          }
        }
      }, {
        key: "replaceSubjects",
        value: function replaceSubjects() {
          this.replaceClassifications(toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].SUBJECTS);
        }
      }, {
        key: "replaceIndexes",
        value: function replaceIndexes() {
          this.replaceClassifications(toco_lib__WEBPACK_IMPORTED_MODULE_3__["VocabulariesInmutableNames"].INDEXES);
        }
      }, {
        key: "replaceClassifications",
        value: function replaceClassifications(vocab) {
          var found = false;
          var newts = [];
          this.editingJournal.data.classifications.forEach(function (ts) {
            if (ts.vocabulary != vocab) {
              newts.push(ts);
            }
          });
          this.currentJournal.data.classifications.forEach(function (ts) {
            if (ts.vocabulary == vocab) {
              newts.push(ts);
            }
          });
          this.editingJournal.data.classifications = newts;
          this.editingJournalChange.emit(this.editingJournal);
        }
      }, {
        key: "replaceOrganizations",
        value: function replaceOrganizations() {
          var found = false;
          var newts = [];
          this.currentJournal.data.organizations.forEach(function (ts) {
            newts.push(ts);
          });
          this.editingJournal.data.organizations = newts;
          this.editingJournalChange.emit(this.editingJournal);
        }
      }]);

      return SourceJournalViewVersionComponent;
    }();

    SourceJournalViewVersionComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionComponent.prototype, "currentJournal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceJournalViewVersionComponent.prototype, "editingJournal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceJournalViewVersionComponent.prototype, "editingJournalChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_5__["SourceEditOrganizationsComponent"], {
      "static": false
    })], SourceJournalViewVersionComponent.prototype, "orgs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_4__["SourceEditIndexesComponent"], {
      "static": false
    })], SourceJournalViewVersionComponent.prototype, "indexes", void 0);
    SourceJournalViewVersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-journal-view-version",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./journal-view-version.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/journal-view/version/journal-view-version.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../journal-view.component.scss */
      "../catalog/src/app/source-view/journal-view/journal-view.component.scss"))["default"]]
    })], SourceJournalViewVersionComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/source-view-read/source-view-read.component.scss":
  /*!***************************************************************************************!*\
    !*** ../catalog/src/app/source-view/source-view-read/source-view-read.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceViewSourceViewReadSourceViewReadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLXZpZXcvc291cmNlLXZpZXctcmVhZC9zb3VyY2Utdmlldy1yZWFkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "../catalog/src/app/source-view/source-view-read/source-view-read.component.ts":
  /*!*************************************************************************************!*\
    !*** ../catalog/src/app/source-view/source-view-read/source-view-read.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SourceViewReadComponent */

  /***/
  function catalogSrcAppSourceViewSourceViewReadSourceViewReadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceViewReadComponent", function () {
      return SourceViewReadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceViewReadComponent = /*#__PURE__*/function () {
      function SourceViewReadComponent(route, _router, _snackBar, dialog, _sourceService) {
        _classCallCheck(this, SourceViewReadComponent);

        this.route = route;
        this._router = _router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this._sourceService = _sourceService;
        this.sourceType = toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceTypes"];
        this.dialogCommentText = "";
        this.saving = false;
      }

      _createClass(SourceViewReadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          this.route.data.subscribe(function (response) {
            console.log("VIEW READ SOURCE");
            console.log(response);

            if (response.record && response.record.metadata) {
              var src = response.record.metadata;
              var data;

              switch (src.source_type) {
                case _this50.sourceType.JOURNAL.value:
                  data = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["JournalData"]();
                  data.deepcopy(src);
                  _this50.source = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["JournalVersion"]();
                  _this50.source.source_uuid = data.id;

                  _this50.source.data.deepcopy(data);

                  break;

                default:
                  data = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceData"]();
                  data.deepcopy(src);
                  _this50.source = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceVersion"]();
                  _this50.source.source_uuid = data.id;

                  _this50.source.data.deepcopy(data);

              }
            } else {
              var m = new toco_lib__WEBPACK_IMPORTED_MODULE_4__["MessageHandler"](_this50._snackBar);
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].serverError, response.toString());
            }
          }, function (err) {
            console.log("error: " + err + ".");
          }, function () {
            console.log("complete");
          });
        }
      }]);

      return SourceViewReadComponent;
    }();

    SourceViewReadComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["SourceService"]
      }];
    };

    SourceViewReadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-source-view-read',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-view-read.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/source-view-read/source-view-read.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-view-read.component.scss */
      "../catalog/src/app/source-view/source-view-read/source-view-read.component.scss"))["default"]]
    })], SourceViewReadComponent);
    /***/
  },

  /***/
  "../catalog/src/app/source-view/source-view.component.scss":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/source-view/source-view.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppSourceViewSourceViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc291cmNlLXZpZXcvc291cmNlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/source-view/source-view.component.ts":
  /*!***************************************************************!*\
    !*** ../catalog/src/app/source-view/source-view.component.ts ***!
    \***************************************************************/

  /*! exports provided: SourceViewComponent, SourceViewSaveDialog */

  /***/
  function catalogSrcAppSourceViewSourceViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceViewComponent", function () {
      return SourceViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceViewSaveDialog", function () {
      return SourceViewSaveDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var SourceViewComponent = /*#__PURE__*/function () {
      function SourceViewComponent(route, _router, _snackBar, dialog, _sourceService, orgService, environment) {
        _classCallCheck(this, SourceViewComponent);

        this.route = route;
        this._router = _router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this._sourceService = _sourceService;
        this.orgService = orgService;
        this.environment = environment;
        this.sourceType = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"];
        this.topOrganizationPID = null;
        this.topMainOrganization = null;
        this.dialogCommentText = "";
        this.loading = true;
        this.allows = "";
        this.error = false;
      }

      _createClass(SourceViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          if (localStorage.getItem('topMainOrganization') && localStorage.getItem('topMainOrganization') != '') {
            var response = JSON.parse(localStorage.getItem('topMainOrganization'));
            this.topMainOrganization = response;
          } else {
            if (this.environment.topOrganizationPID) {
              this.topOrganizationPID = this.environment.topOrganizationPID;
              this.orgService.getOrganizationByPID(this.topOrganizationPID).subscribe(function (response) {
                _this51.topMainOrganization = response; // this.topMainOrganization.deepcopy(response.metadata);
              }, function (error) {
                console.log("error");
              }, function () {});
            }
          }

          this.route.data.subscribe(function (response) {
            console.log("VIEW SOURCE");
            console.log(response);
            var src = response.source.data.source.record.metadata;
            _this51.allows = response.source.data.source.allows;

            try {
              _this51.init(src.id, src);
            } catch (error) {
              var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](_this51._snackBar);
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].serverError, response.toString());
            }
          }, function (err) {
            console.log("error: " + err + ".");
          }, function () {
            console.log("complete");
          });
        }
      }, {
        key: "_init_source_relations",
        value: function _init_source_relations(v) {
          var so = new Array();

          if (v.data.organizations) {
            v.data.organizations.forEach(function (element) {
              var o = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceOrganization"]();
              o.deepcopy(element);
              so.push(o);
            });
          }

          v.data.organizations = so;
          var sc = new Array();

          if (v.data.classifications) {
            v.data.classifications.forEach(function (element) {
              var o = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceClasification"]();
              o.deepcopy(element);
              sc.push(o);
            });
          }

          v.data.classifications = sc;
        }
      }, {
        key: "init",
        value: function init(id, src) {
          var _this52 = this;

          switch (src.source_type) {
            case this.sourceType.JOURNAL.value:
              this.editingVersion = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["JournalVersion"]();
              this.editingVersion.source_uuid = id;
              this.editingVersion.data.deepcopy(src);
              break;

            default:
              this.editingVersion = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceVersion"]();
              this.editingVersion.source_uuid = id;
              this.editingVersion.data.deepcopy(src);
          }

          this._init_source_relations(this.editingVersion);

          this._sourceService.getSourceVersions(this.editingVersion.source_uuid).subscribe(function (response) {
            console.log(response);

            if (response.status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].SUCCESS) {
              _this52.versions = response.data.versions;

              for (var index = 0; index < _this52.versions.length; index++) {
                _this52._init_source_relations(_this52.versions[index]);
              }

              _this52.loading = false;
            }
          }, function (error) {
            console.log("error");
          }, function () {}); // initialize Journal

        }
      }, {
        key: "saveEditingVersion",
        value: function saveEditingVersion() {
          var _this53 = this;

          var dialogRef = this.dialog.open(SourceViewSaveDialog, {
            data: {
              comment: this.dialogCommentText,
              accept: false,
              edit: true
            }
          });
          console.log(this.editingVersion);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
            console.log(dialogRef.getState());
            console.log(result);

            if (result && result.accept) {
              _this53.dialogCommentText = result.comment;
              _this53.editingVersion.comment = _this53.dialogCommentText;
              _this53.loading = true;

              _this53._sourceService.editSource(_this53.editingVersion, _this53.editingVersion.source_uuid).subscribe(function (res) {
                console.log(res);
                var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](null, _this53.dialog);

                if (res.status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].SUCCESS && res.data.source_version.data) {
                  m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].OK, "Guardada con la revisión < " + _this53.editingVersion.comment + ">", toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, "Éxito");
                  _this53.editingVersion = null;
                  _this53.versions = null;

                  _this53.init(res.data.source_version.source_uuid, res.data.source_version.data); // this._router.navigate(['sources', this.editingVersion.source_uuid, 'view']);

                } else {
                  m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].serverError, res.message, toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, "ERROR"); // m.showMessage(StatusCode.serverError, res.message);
                }
              }, function (error) {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }, function () {});
            }
          }, function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }, function () {});
        } // public editVersion(): void {
        //   this._router.navigate(["sources", this.editingVersion.source_uuid, "edit"]);
        // }

      }, {
        key: "publishEditingVersion",
        value: function publishEditingVersion() {
          var _this54 = this;

          var dialogRef = this.dialog.open(SourceViewSaveDialog, {
            data: {
              comment: this.dialogCommentText,
              accept: false,
              publish: true
            }
          });
          console.log(this.editingVersion);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
            console.log(dialogRef.getState());
            console.log(result);

            if (result && result.accept) {
              _this54.dialogCommentText = result.comment;
              _this54.editingVersion.comment = _this54.dialogCommentText;
              _this54.loading = true;
              console.log(_this54.editingVersion);

              _this54._sourceService.makeSourceAsApproved(_this54.editingVersion, _this54.editingVersion.source_uuid).subscribe(function (res) {
                console.log(res);
                _this54.loading = false;
                var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](null, _this54.dialog);

                if (res.status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].SUCCESS && res.data.source) {
                  m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].OK, 'La revisión actual de <' + _this54.editingVersion.data.title + "> ha sido publicada con éxito", toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, "Éxito"); // this.ngOnInit();

                  _this54._router.navigate(['directory', _this54.editingVersion.source_uuid]);
                } else {
                  m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].serverError, res.message, toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, "ERROR"); // m.showMessage(StatusCode.serverError, res.message);
                }
              }, function (error) {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }, function () {});
            }
          }, function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }, function () {});
        }
      }, {
        key: "desapprove",
        value: function desapprove() {
          var _this55 = this;

          var dialogRef = this.dialog.open(SourceViewSaveDialog, {
            data: {
              comment: this.dialogCommentText,
              accept: false,
              unpublish: true
            }
          });
          console.log(this.editingVersion);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
            console.log(dialogRef.getState());
            console.log(result);
            _this55.loading = true;

            if (result && result.accept) {
              _this55._sourceService.makeSourceAsUnApproved(_this55.editingVersion, _this55.editingVersion.source_uuid).subscribe(function (res) {
                console.log(res);
                var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](null, _this55.dialog);
                _this55.loading = false;

                if (res.status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].SUCCESS && res.data.source) {
                  m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].OK, _this55.editingVersion.data.title + ' ya no está pública.', toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, "Éxito");

                  _this55.ngOnInit();

                  _this55._router.navigate(['sources']);
                } else {
                  m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].serverError, res.message, toco_lib__WEBPACK_IMPORTED_MODULE_5__["HandlerComponent"].dialog, "ERROR"); // m.showMessage(StatusCode.serverError, res.message);
                }
              }, function (error) {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }, function () {});
            }
          }, function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }, function () {});
        }
      }, {
        key: "is_approved",
        value: function is_approved() {
          return this.editingVersion.data.source_status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceStatus"].APPROVED.value;
        }
      }, {
        key: "can_publish",
        value: function can_publish() {
          return this.allows == "publish";
        }
      }]);

      return SourceViewComponent;
    }();

    SourceViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["OrganizationServiceNoAuth"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["Environment"]
      }];
    };

    SourceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-source-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-view.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/source-view/source-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-view.component.scss */
      "../catalog/src/app/source-view/source-view.component.scss"))["default"]]
    })], SourceViewComponent);

    var SourceViewSaveDialog = /*#__PURE__*/function () {
      function SourceViewSaveDialog(dialogRef, data) {
        _classCallCheck(this, SourceViewSaveDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(SourceViewSaveDialog, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.data.accept = false;
          this.dialogRef.close();
        }
      }]);

      return SourceViewSaveDialog;
    }();

    SourceViewSaveDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SourceViewSaveDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "catalog-journal-view-save-dialog",
      template: "\n      <ng-container *ngIf=\"data.edit\">\n        <h1 mat-dialog-title>Guardar cambios</h1>\n        <div mat-dialog-content>\n          <mat-form-field>\n            <mat-label>Comentario sobre esta revisi\xF3n</mat-label>\n            <textarea matInput [(ngModel)]=\"data.comment\"> </textarea>\n          </mat-form-field>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"data.publish\">\n      <h1 mat-dialog-title>Guardar cambios y publicar</h1>\n      <div mat-dialog-content>\n        <mat-form-field>\n          <mat-label>Comentario sobre esta revisi\xF3n</mat-label>\n          <textarea matInput [(ngModel)]=\"data.comment\"> </textarea>\n        </mat-form-field>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"data.unpublish\">\n      <h1 mat-dialog-title>Este elemento no ser\xE1 m\xE1s p\xFAblico</h1>\n      <div mat-dialog-content>\n      </div>\n    </ng-container>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n      <button\n        mat-button\n        [mat-dialog-close]=\"data\"\n        cdkFocusInitial\n        (click)=\"data.accept = true\"\n      >\n        Guardar\n      </button>\n    </div>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SourceViewSaveDialog);
    /***/
  },

  /***/
  "../catalog/src/app/static-pages/static-pages.component.scss":
  /*!*******************************************************************!*\
    !*** ../catalog/src/app/static-pages/static-pages.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppStaticPagesStaticPagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvc3RhdGljLXBhZ2VzL3N0YXRpYy1wYWdlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/static-pages/static-pages.component.ts":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/static-pages/static-pages.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StaticPagesComponent */

  /***/
  function catalogSrcAppStaticPagesStaticPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticPagesComponent", function () {
      return StaticPagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var StaticPagesComponent = /*#__PURE__*/function () {
      function StaticPagesComponent(metadata, activatedRoute) {
        _classCallCheck(this, StaticPagesComponent);

        this.metadata = metadata;
        this.activatedRoute = activatedRoute;
      }

      _createClass(StaticPagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          if (this.src == undefined) this.src = '';
          if (this.title == undefined) this.title = '';
          this.metadata.setTitleDescription(this.title, '');
          this.activatedRoute.data.subscribe({
            next: function next(data) {
              if (data) {
                _this56.src = data['src'];
                _this56.title = data['title'];

                _this56.metadata.setTitleDescription(_this56.title, '');
              }
            },
            error: function error(e) {
              console.log(e);
            },
            complete: function complete() {}
          });
        }
      }]);

      return StaticPagesComponent;
    }();

    StaticPagesComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["MetadataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StaticPagesComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StaticPagesComponent.prototype, "title", void 0);
    StaticPagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-static-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./static-pages.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/static-pages/static-pages.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./static-pages.component.scss */
      "../catalog/src/app/static-pages/static-pages.component.scss"))["default"]]
    })], StaticPagesComponent);
    /***/
  },

  /***/
  "../catalog/src/app/user-profile/user-profile.component.scss":
  /*!*******************************************************************!*\
    !*** ../catalog/src/app/user-profile/user-profile.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppUserProfileUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "../catalog/src/app/user-profile/user-profile.component.ts":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/user-profile/user-profile.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function catalogSrcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    ;

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(userProfileService, environment, sanitizer) {
        _classCallCheck(this, UserProfileComponent);

        this.userProfileService = userProfileService;
        this.environment = environment;
        this.sanitizer = sanitizer;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this57 = this;

          this.changePassword = this.environment.sceibaHost + 'account/settings/password/';
          this.user = new toco_lib__WEBPACK_IMPORTED_MODULE_3__["UserProfile"]();
          this.userProfileService.getUserInfo().subscribe({
            next: function next(response) {
              console.log(response);

              if (response && response.data && response.data.userprofile) {
                _this57.user.deepcopy(response.data.userprofile);
              }
            },
            error: function error(err) {
              console.log(err);
            },
            complete: function complete() {}
          });
        }
      }, {
        key: "avatar",
        value: function avatar() {
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.user.avatar);
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["Environment"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/user-profile/user-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.scss */
      "../catalog/src/app/user-profile/user-profile.component.scss"))["default"]]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "../catalog/src/app/user-search/user-search.component.scss":
  /*!*****************************************************************!*\
    !*** ../catalog/src/app/user-search/user-search.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function catalogSrcAppUserSearchUserSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jYXRhbG9nL3NyYy9hcHAvdXNlci1zZWFyY2gvdXNlci1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../catalog/src/app/user-search/user-search.component.ts":
  /*!***************************************************************!*\
    !*** ../catalog/src/app/user-search/user-search.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserSearchComponent */

  /***/
  function catalogSrcAppUserSearchUserSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function () {
      return UserSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");

    var UserSearchComponent = /*#__PURE__*/function () {
      function UserSearchComponent(userService) {
        _classCallCheck(this, UserSearchComponent);

        this.userService = userService;
        this.userCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredUser = new Array(); // @Input()
        // userFilter: { type: string, value: string};

        this.selectedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UserSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          // if (this.userFilter != undefined) {
          //   this.params = this.params.set(this.userFilter.type, this.userFilter.value);
          // }
          this.userCtrl.valueChanges.subscribe({
            next: function next(userValueChanges) {
              // this condition check if the param is a `string` an if at least write 3 letters
              if (typeof userValueChanges === 'string' && userValueChanges.length >= 3) {
                // this.params = this.params.set('q', userValueChanges)
                _this58.userService.getUsers(10, 1, userValueChanges).subscribe({
                  next: function next(response) {
                    console.log(response.data.users);
                    _this58.filteredUser = response.data.users;
                  }
                });
              } else if (typeof userValueChanges === 'object') {
                //console.log("org selected: ", userValueChanges);
                _this58.selectedUser.emit(userValueChanges);
              }
            }
          });
        }
      }, {
        key: "displayFn",
        value: function displayFn(user) {
          return user ? user.email : undefined;
        }
      }]);

      return UserSearchComponent;
    }();

    UserSearchComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserSearchComponent.prototype, "selectedUser", void 0);
    UserSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalog-user-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-search.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../catalog/src/app/user-search/user-search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-search.component.scss */
      "../catalog/src/app/user-search/user-search.component.scss"))["default"]]
    })], UserSearchComponent);
    /***/
  },

  /***/
  "../catalog/src/environments/environment.ts":
  /*!**************************************************!*\
    !*** ../catalog/src/environments/environment.ts ***!
    \**************************************************/

  /*! exports provided: environment */

  /***/
  function catalogSrcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var EnvironmentImpl = function EnvironmentImpl() {
      _classCallCheck(this, EnvironmentImpl);

      this.production = false;
      this.sceibaHost = 'https://10.2.83.214:5000/';
      this.cuorHost = 'https://10.2.83.214:5001/';
      this.sceibaApi = 'https://10.2.83.214:5000/api/';
      this.cuorApi = 'https://10.2.83.214:5001/api/';
      this.appHost = 'https://127.0.0.1:4200';
      this.appName = 'Sceiba Catalogo';
      this.oauthRedirectUri = 'https://127.0.0.1:4200/';
      this.oauthClientId = 'PWjZsqMDI2RHZ5Hs0ZGli6Z5F5cF6xZ7t1AhiDUM';
      this.oauthScope = 'user:email';
      this.topOrganizationPID = 'orgaid.223';
      this.cachableUrls = [];
    };

    var environment = new EnvironmentImpl();
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var projects_catalog_src_app_source_view_source_view_read_source_view_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! projects/catalog/src/app/source-view/source-view-read/source-view-read.component */
    "../catalog/src/app/source-view/source-view-read/source-view-read.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! projects/catalog/src/app/source-resolver */
    "../catalog/src/app/source-resolver.ts");
    /* harmony import */


    var projects_catalog_src_app_static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! projects/catalog/src/app/static-pages/static-pages.component */
    "../catalog/src/app/static-pages/static-pages.component.ts");
    /* harmony import */


    var projects_catalog_src_app_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! projects/catalog/src/app/user-profile/user-profile.component */
    "../catalog/src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! projects/catalog/src/app/source-inclusion/source-inclusion.component */
    "../catalog/src/app/source-inclusion/source-inclusion.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_view_source_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! projects/catalog/src/app/source-view/source-view.component */
    "../catalog/src/app/source-view/source-view.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_edit_source_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! projects/catalog/src/app/source-edit/source-edit.component */
    "../catalog/src/app/source-edit/source-edit.component.ts");
    /* harmony import */


    var projects_catalog_src_app_mysources_mysources_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! projects/catalog/src/app/mysources/mysources.component */
    "../catalog/src/app/mysources/mysources.component.ts");
    /* harmony import */


    var projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! projects/catalog/src/app/catalog/catalog.component */
    "../catalog/src/app/catalog/catalog.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeRevistasmesComponent"]
    }, {
      path: "directory",
      children: [{
        path: ":uuid",
        component: projects_catalog_src_app_source_view_source_view_read_source_view_read_component__WEBPACK_IMPORTED_MODULE_4__["SourceViewReadComponent"],
        resolve: {
          record: projects_catalog_src_app_source_resolver__WEBPACK_IMPORTED_MODULE_5__["SourceResolver"]
        }
      }, {
        path: "",
        component: projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_12__["CatalogComponent"]
      }]
    }, {
      path: "faq",
      component: projects_catalog_src_app_static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_6__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/faq.md",
        title: "FAQ"
      }
    }, {
      path: "about",
      component: projects_catalog_src_app_static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_6__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/about.md",
        title: "Sobre Nosotros"
      }
    }, {
      path: "help",
      component: projects_catalog_src_app_static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_6__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/help.md",
        title: "Ayuda"
      }
    }, {
      path: "contact",
      component: projects_catalog_src_app_static_pages_static_pages_component__WEBPACK_IMPORTED_MODULE_6__["StaticPagesComponent"],
      data: {
        src: "assets/markdown/contact.md",
        title: "Contacto"
      }
    }, {
      path: "userprofile",
      component: projects_catalog_src_app_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
      canActivate: [toco_lib__WEBPACK_IMPORTED_MODULE_3__["OauthAuthenticationService"]]
    }, {
      path: "sources",
      // loadChildren: () => import('@toco/tools/journal').then(mod => mod.JournalModule),
      children: [{
        path: "new",
        children: [{
          path: "journal",
          component: projects_catalog_src_app_source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_8__["SourceInclusionComponent"]
        }]
      }, {
        path: ":uuid/view",
        component: projects_catalog_src_app_source_view_source_view_component__WEBPACK_IMPORTED_MODULE_9__["SourceViewComponent"],
        resolve: {
          source: projects_catalog_src_app_source_resolver__WEBPACK_IMPORTED_MODULE_5__["SourceResolverAuth"]
        }
      }, {
        path: ":uuid/edit",
        component: projects_catalog_src_app_source_edit_source_edit_component__WEBPACK_IMPORTED_MODULE_10__["SourceEditComponent"],
        resolve: {
          source: projects_catalog_src_app_source_resolver__WEBPACK_IMPORTED_MODULE_5__["SourceResolverAuth"]
        }
      }, // {
      //     path: 'permissions',
      //     component: GrantPermissionsComponent,
      // },
      {
        path: "",
        component: projects_catalog_src_app_mysources_mysources_component__WEBPACK_IMPORTED_MODULE_11__["MySourcesComponent"]
      }],
      canActivate: [toco_lib__WEBPACK_IMPORTED_MODULE_3__["OauthAuthenticationService"]]
    }, {
      path: "notifications",
      component: toco_lib__WEBPACK_IMPORTED_MODULE_3__["NotificationListComponent"],
      canActivate: [toco_lib__WEBPACK_IMPORTED_MODULE_3__["OauthAuthenticationService"]]
    }, {
      path: "**",
      redirectTo: ""
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [projects_catalog_src_app_source_resolver__WEBPACK_IMPORTED_MODULE_5__["SourceResolver"], projects_catalog_src_app_source_resolver__WEBPACK_IMPORTED_MODULE_5__["SourceResolverAuth"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-toolbar-sticky {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.color-white {\n  color: white !important;\n  -webkit-text-emphasis: white;\n          text-emphasis: white;\n  text-decoration: none !important;\n}\n\n.mat-toolbar-single-row {\n  height: auto !important;\n  min-height: 64px;\n}\n\n.w-90 {\n  width: 90%;\n}\n\n.apps {\n  margin: 0.5em;\n}\n\n.apps img {\n  width: 90px;\n}\n\n.MES {\n  width: 190px !important;\n}\n\n.triangle {\n  position: relative;\n  width: 0;\n  height: 0;\n  border-top: 0px solid transparent;\n  border-left: 80px solid #dd2c00;\n  border-bottom: 80px solid transparent;\n  margin-left: -16px;\n}\n\n.triangle span {\n  position: absolute;\n  right: 23px;\n  top: 11px;\n  color: white;\n  transform: rotate(-45deg);\n}\n\n.center-elements {\n  width: auto;\n}\n\n@media screen and (max-width: 490px) {\n  .center-elements {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9yZXZpc3Rhc21lcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3JldmlzdGFzbWVzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FDREo7O0FES0U7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxnQ0FBQTtBQ0ZKOztBREtFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElFO0VBQ0UsVUFBQTtBQ0RKOztBREdFO0VBQ0UsYUFBQTtBQ0FKOztBRENJO0VBQ0ksV0FBQTtBQ0NSOztBREVFO0VBQ0UsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUVBLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFHQSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBRENFO0VBQ0U7SUFDSSxXQUFBO0VDRU47QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9yZXZpc3Rhc21lcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubWF0LXRvb2xiYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgXG4gIC5jb2xvci13aGl0ZXtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWVtcGhhc2lzOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIH1cbiAgLnctOTB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuYXBwc3tcbiAgICBtYXJnaW46IC41ZW07XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gIH1cbiAgLk1FU3tcbiAgICB3aWR0aDogMTkwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRyaWFuZ2xlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvLyBlbCB2YWxvciBzaWd1aWVudGUgc2UgZGVmaW5lIGVuIGVsIGBzdHlsZWAgZ2xvYmFsIHBhcmEgdXRpbGl6YXIgbG9zIGNvbG9yZXMgY29tbyB2YXJpYWJsZVxuICAgIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkICNkZDJjMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogODBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIH1cbiAgLnRyaWFuZ2xlIHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyM3B4O1xuICAgIHRvcDogMTFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgXG4gIC5jZW50ZXItZWxlbWVudHMge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgLmNlbnRlci1lbGVtZW50cyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAiLCIubWF0LXRvb2xiYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jb2xvci13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWVtcGhhc2lzOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi53LTkwIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmFwcHMge1xuICBtYXJnaW46IDAuNWVtO1xufVxuLmFwcHMgaW1nIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5NRVMge1xuICB3aWR0aDogMTkwcHggIWltcG9ydGFudDtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkICNkZDJjMDA7XG4gIGJvcmRlci1ib3R0b206IDgwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cblxuLnRyaWFuZ2xlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyM3B4O1xuICB0b3A6IDExcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmNlbnRlci1lbGVtZW50cyB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xuICAuY2VudGVyLWVsZW1lbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var AppComponent = /*#__PURE__*/function () {
      // public footerImage: string
      function AppComponent(environment, oauthStorage, oauthService, authenticateService, router) {
        var _this59 = this;

        _classCallCheck(this, AppComponent);

        this.environment = environment;
        this.oauthStorage = oauthStorage;
        this.oauthService = oauthService;
        this.authenticateService = authenticateService;
        this.router = router;
        this.oauthInfo = {
          serverHost: this.environment.sceibaHost,
          loginUrl: this.environment.sceibaHost + 'oauth/authorize',
          tokenEndpoint: this.environment.sceibaHost + 'oauth/token',
          userInfoEndpoint: this.environment.sceibaApi + 'me',
          appHost: this.environment.appHost,
          appName: this.environment.appName,
          oauthRedirectUri: this.environment.oauthRedirectUri,
          oauthClientId: this.environment.oauthClientId,
          oauthScope: this.environment.oauthScope
        };
        this.title = 'Registro de Revistas Científicas del MES';
        this.loading = false;
        this.authenticateSuscription = null;
        this.isOnline = true; //navigator.onLine;

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this59.loading = true;
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            _this59.loading = false;
          }
        }, function (error) {}, function () {});
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this60 = this;

          var request = JSON.parse(this.oauthStorage.getItem('user'));

          if (request) {
            this.userProfile = request.data.userprofile;
          }

          console.log(this.userProfile);
          this.authenticateSuscription = this.authenticateService.authenticationSubjectObservable.subscribe(function (request) {
            if (request != null) {
              _this60.userProfile = request.data.userprofile; // if (this.oauthStorage.getItem('access_token')) {
              //   this.user = this.oauthStorage.getItem('email');
              // }
            } else {
              _this60.logoff();
            }
          }, function (error) {
            _this60.userProfile = null;
          }, function () {});
          this.footerInformation = Array();
          this.footerSites = Array();
          this.footerSites.push({
            name: "MES",
            url: "https://www.mes.gob.cu",
            useRouterLink: false
          }); // this.footerSites.push({ name: "Sceiba", url: "https://sceiba-lab.upr.edu.cu", useRouterLink: false});
          // this.footerSites.push({ name: "Dirección Nacional de Publicaciones Seriadas", url: "http://www.seriadascubanas.cult.cu/http://www.seriadascubanas.cult.cu/", useRouterLink:false});
          // this.footerSites.push({ name: "Red Ciencia", url: "http://www.redciencia.cu/", useRouterLink: false});
          // this.footerInformation.push({ name: "Términos de uso", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});
          // this.footerInformation.push({ name: "Privacidad", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});

          this.footerInformation.push({
            name: "Contacto",
            url: "/contact",
            useRouterLink: true
          });
          this.footerInformation.push({
            name: "FAQs",
            url: "/faq",
            useRouterLink: true
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.authenticateSuscription) {
            this.authenticateSuscription.unsubscribe();
          }
        }
      }, {
        key: "logoff",
        value: function logoff() {
          this.oauthService.logOut();
          this.oauthStorage.removeItem("user");
          this.userProfile = undefined;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["Environment"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthStorage"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_4__["OauthAuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'revistasmes-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: RevistasmesAppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevistasmesAppModule", function () {
      return RevistasmesAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var projects_catalog_src_app_mysources_manager_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! projects/catalog/src/app/mysources/manager/manager.component */
    "../catalog/src/app/mysources/manager/manager.component.ts");
    /* harmony import */


    var projects_catalog_src_app_mysources_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! projects/catalog/src/app/mysources/organizations/organizations.component */
    "../catalog/src/app/mysources/organizations/organizations.component.ts");
    /* harmony import */


    var projects_catalog_src_app_mysources_terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! projects/catalog/src/app/mysources/terms/terms.component */
    "../catalog/src/app/mysources/terms/terms.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! projects/catalog/src/app/source-edit/source-indexes/source-indexes.component */
    "../catalog/src/app/source-edit/source-indexes/source-indexes.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! projects/catalog/src/app/source-edit/source-organizations/source-organizations.component */
    "../catalog/src/app/source-edit/source-organizations/source-organizations.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! projects/catalog/src/app/source-inclusion/source-inclusion.component */
    "../catalog/src/app/source-inclusion/source-inclusion.component.ts");
    /* harmony import */


    var projects_catalog_src_app_source_view_source_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! projects/catalog/src/app/source-view/source-view.component */
    "../catalog/src/app/source-view/source-view.component.ts");
    /* harmony import */


    var projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! projects/catalog/src/app/catalog/catalog.component */
    "../catalog/src/app/catalog/catalog.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-markdown */
    "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var projects_catalog_src_app_app_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! projects/catalog/src/app/app.module */
    "../catalog/src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var RevistasmesAppModule = function RevistasmesAppModule() {
      _classCallCheck(this, RevistasmesAppModule);
    };

    RevistasmesAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeRevistasmesComponent"]],
      entryComponents: [projects_catalog_src_app_mysources_manager_manager_component__WEBPACK_IMPORTED_MODULE_4__["MySourcesManagerPermissionDialog"], projects_catalog_src_app_mysources_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_5__["MySourcesOrganizationsPermissionDialog"], projects_catalog_src_app_mysources_terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["MySourcesTermsPermissionDialog"], projects_catalog_src_app_source_edit_source_indexes_source_indexes_component__WEBPACK_IMPORTED_MODULE_7__["SourceEditAddIndexComponent"], projects_catalog_src_app_source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_8__["SourceEditOrganizationSelectTopDialog"], projects_catalog_src_app_source_edit_source_organizations_source_organizations_component__WEBPACK_IMPORTED_MODULE_8__["SourceEditOrganizationSelectDialog"], projects_catalog_src_app_source_inclusion_source_inclusion_component__WEBPACK_IMPORTED_MODULE_9__["SourceInclusionAcceptComponent"], projects_catalog_src_app_source_view_source_view_component__WEBPACK_IMPORTED_MODULE_10__["SourceViewSaveDialog"], projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["DialogCatalogJournalInfoDialog"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], // BrowserModule,
      _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["NotificationModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["TocoFormsModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["OrganizationsModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["CoreModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["AuthenticationModule"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"], // TaxonomyModule,
      _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_17__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]
      }), projects_catalog_src_app_app_module__WEBPACK_IMPORTED_MODULE_19__["CatalogAppModule"]],
      providers: [toco_lib__WEBPACK_IMPORTED_MODULE_15__["SourceService"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["SourceServiceNoAuth"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["UserProfileService"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["TaxonomyService"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["OrganizationServiceNoAuth"], toco_lib__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTOR_PROVIDERS"], // REQUEST_CACHE_DIFFERENT_TIME_WITH_MAP_PROVIDER,
      // { provide: HTTP_INTERCEPTORS, useClass: OauthAuthenticationService, multi: true },
      {
        provide: toco_lib__WEBPACK_IMPORTED_MODULE_15__["Environment"],
        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })], RevistasmesAppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".w-card, .w-60 {\n  min-width: 15em !important;\n  width: auto;\n}\n\n.m-1 {\n  margin: 1em;\n}\n\n.w-60 {\n  width: 60%;\n}\n\n.mat-image-in-card {\n  width: 100% !important;\n  min-width: 15em;\n  max-width: 30em;\n  height: auto;\n  max-height: 15em;\n}\n\n.mat-card-with-img {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGF5by93d3cvdG9jb3Jvcm8vdG9jby13ZWItdWkvY2F0YWxvZy1uZy9wcm9qZWN0cy9yZXZpc3Rhc21lcy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3JldmlzdGFzbWVzL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0FDR0o7O0FEREE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FEREE7RUFDSSx5SEFBQTtBQ0lKIiwiZmlsZSI6InByb2plY3RzL3JldmlzdGFzbWVzL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctY2FyZCwgLnctNjB7XG4gICAgbWluLXdpZHRoOiAxNWVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG59XG4ubS0xe1xuICAgIG1hcmdpbjogMWVtO1xufVxuLnctNjB7XG4gICAgd2lkdGg6IDYwJTtcbn1cbi5tYXQtaW1hZ2UtaW4tY2FyZHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTVlbTtcbiAgICBtYXgtd2lkdGg6IDMwZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1ZW07XG59XG5cbi5tYXQtY2FyZC13aXRoLWltZ3tcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuIiwiLnctY2FyZCwgLnctNjAge1xuICBtaW4td2lkdGg6IDE1ZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5tLTEge1xuICBtYXJnaW46IDFlbTtcbn1cblxuLnctNjAge1xuICB3aWR0aDogNjAlO1xufVxuXG4ubWF0LWltYWdlLWluLWNhcmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDE1ZW07XG4gIG1heC13aWR0aDogMzBlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNWVtO1xufVxuXG4ubWF0LWNhcmQtd2l0aC1pbWcge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeRevistasmesComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRevistasmesComponent", function () {
      return HomeRevistasmesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! projects/catalog/src/app/catalog/catalog.component */
    "../catalog/src/app/catalog/catalog.component.ts");
    /* harmony import */


    var toco_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! toco-lib */
    "../../node_modules/toco-lib/fesm2015/toco-lib.js");
    /*
     *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
     *   All rights reserved.
     */


    var HomeRevistasmesComponent = /*#__PURE__*/function () {
      function HomeRevistasmesComponent(environment, sourceService, oauthStorage, sourceServiceNoAuth, orgService, _snackBar, dialog) {
        _classCallCheck(this, HomeRevistasmesComponent);

        this.environment = environment;
        this.sourceService = sourceService;
        this.oauthStorage = oauthStorage;
        this.sourceServiceNoAuth = sourceServiceNoAuth;
        this.orgService = orgService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.topMainOrganization = null;
        this.stats = null;
        this.error = false;
      }

      _createClass(HomeRevistasmesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this61 = this;

          if (this.environment.topOrganizationPID) {
            this.topOrganizationPID = this.environment.topOrganizationPID;

            if (localStorage.getItem('topMainOrganization') && localStorage.getItem('topMainOrganization') != '') {
              var response = JSON.parse(localStorage.getItem('topMainOrganization'));
              this.topMainOrganization = response; // new Organization();
              // this.topMainOrganization.deepcopy(response.metadata);

              this.init();
            } else {
              this.orgService.getOrganizationByPID(this.topOrganizationPID).subscribe(function (response) {
                // console.log(response)
                _this61.topMainOrganization = response; // new Organization();
                // this.topMainOrganization.deepcopy(response.metadata);

                localStorage.setItem('topMainOrganization', JSON.stringify(response));

                _this61.init();
              }, function (error) {
                console.log("error");
                _this61.error = true;
              }, function () {});
            }
          }

          this.institutionsCount = 0;
          this.records = 0;
          this.sourcesCount = 0;
          this.lastSources = new Array(); // this.catalogService.getSourcesOrgAggregation(this.topOrganizationPID).subscribe(
          //     response => {
          //         if (response && response.data && response.data.home_statics) {
          //           console.log(response)
          //             // this.institutionsCount = response.data.home_statics.institutions_count;
          //             // this.records = response.data.home_statics.records;
          //             // this.sourcesCount = response.data.home_statics.soources_count;
          //             // response.data.home_statics.last_sources.forEach( (j: Journal) => {
          //             //     let jl = new Journal();
          //             //     jl.deepcopy(j);
          //             //     this.lastSources.push( jl );
          //             // });
          //         }
          //         console.log(response);
          //       },
          //       (error: any) => {},
          //       () => {}
          // );
        }
      }, {
        key: "init",
        value: function init() {
          var _this62 = this;

          this.sourceServiceNoAuth.getSourcesStats(this.topMainOrganization.id).subscribe(function (response) {
            if (response && response.status == toco_lib__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].SUCCESS) {
              _this62.stats = response.data.aggr;
              var types = [];

              _this62.stats.source_types.forEach(function (element) {
                if (element.source_type == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].JOURNAL.value) {
                  element['label'] = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].JOURNAL.label;
                  types.push(element);
                }

                if (element.source_type == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].STUDENT.value) {
                  element['label'] = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].STUDENT.label;
                  types.push(element);
                }

                if (element.source_type == toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].POPULARIZATION.value) {
                  element['label'] = toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceTypes"].POPULARIZATION.label;
                  types.push(element);
                }
              });

              _this62.stats.source_types = types;
              console.log(_this62.stats);
            }
          }, function (err) {
            console.log("error: " + err + ".");
            _this62.error = true;
          }, function () {
            console.log("complete");
          });
        }
      }, {
        key: "viewJournal",
        value: function viewJournal(uuid) {
          var _this63 = this;

          this.sourceServiceNoAuth.getSourceByUUID(uuid).subscribe(function (response) {
            console.log(response);

            if (response.metadata) {
              var journalVersion = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["JournalVersion"]();
              journalVersion.data.deepcopy(response.metadata);
              journalVersion.source_uuid = response.id;

              var dialogRef = _this63.dialog.open(projects_catalog_src_app_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["DialogCatalogJournalInfoDialog"], {
                data: {
                  journalVersion: journalVersion,
                  journalUUID: uuid
                }
              });

              dialogRef.afterClosed();
            } else {
              var m = new toco_lib__WEBPACK_IMPORTED_MODULE_5__["MessageHandler"](_this63._snackBar);
              m.showMessage(toco_lib__WEBPACK_IMPORTED_MODULE_5__["StatusCode"].serverError, "No fue posible encontrar la Revista");
            }
          }, function (error) {
            console.log("error");
            error = true;
          }, function () {});
        }
      }]);

      return HomeRevistasmesComponent;
    }();

    HomeRevistasmesComponent.ctorParameters = function () {
      return [{
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["Environment"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceService"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthStorage"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["SourceServiceNoAuth"]
      }, {
        type: toco_lib__WEBPACK_IMPORTED_MODULE_5__["OrganizationServiceNoAuth"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    HomeRevistasmesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'revistasmes-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeRevistasmesComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var EnvironmentImpl = function EnvironmentImpl() {
      _classCallCheck(this, EnvironmentImpl);

      this.production = false;
      this.sceibaHost = 'https://10.2.83.214:5000/';
      this.cuorHost = 'https://10.2.83.214:5001/';
      this.sceibaApi = 'https://10.2.83.214:5000/api/';
      this.cuorApi = 'https://10.2.83.214:5001/api/';
      this.appHost = 'https://127.0.0.1:4200';
      this.appName = 'Registro de Revistas Científicas del MES';
      this.oauthRedirectUri = 'https://127.0.0.1:4200/';
      this.oauthClientId = 'PWjZsqMDI2RHZ5Hs0ZGli6Z5F5cF6xZ7t1AhiDUM';
      this.oauthScope = 'user:email';
      this.topOrganizationPID = 'orgaid.223';
      this.cachableUrls = [];
    };

    var environment = new EnvironmentImpl();
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["RevistasmesAppModule"])["catch"](function (err) {
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
    /*! /home/malayo/www/tocororo/toco-web-ui/catalog-ng/projects/revistasmes/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
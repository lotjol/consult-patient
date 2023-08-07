"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/wiki/index.js";
  "./pages/notify/index.js";
  "./pages/my/index.js";
  "./pages/login/index.js";
  "./subpkg_consult/quickly/index.js";
  "./subpkg_consult/department/index.js";
  "./subpkg_consult/description/index.js";
  "./subpkg_consult/patient/index.js";
  "./subpkg_consult/payment/index.js";
  "./subpkg_consult/im/index.js";
  "./subpkg_consult/list/index.js";
  "./subpkg_consult/detail/index.js";
  "./subpkg_archive/list/index.js";
  "./subpkg_archive/add/index.js";
  "./subpkg_medicine/detail/index.js";
  "./subpkg_medicine/list/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lotjol/www/consult-patient/优医问诊/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

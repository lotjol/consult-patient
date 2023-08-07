"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  options: {
    styleIsolation: "shared"
  }
};
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_icons2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_icons + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: "mobile"
    })
  }, {
    b: common_vendor.p({
      size: "18",
      color: "#6F6F6F",
      type: "eye-slash"
    })
  }, {
    d: common_vendor.p({
      name: "password"
    }),
    e: common_vendor.sr("form", "76cf0667-0")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/login/components/password.vue"]]);
wx.createComponent(Component);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_countdown2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_scroll_page2)();
}
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_uni_icons + _easycom_uni_rate + _easycom_scroll_page)();
}
function _sfc_render(_ctx, _cache) {
  return common_vendor.e({
    b: common_vendor.p({
      size: "20",
      color: "#121826",
      type: "checkbox-filled"
    })
  }, {
    c: common_vendor.p({
      size: "16",
      color: "#848484",
      type: "right"
    }),
    d: common_vendor.p({
      size: 28,
      margin: "12",
      value: 0
    })
  }, {
    e: common_vendor.p({
      size: "40",
      color: "#979797",
      type: "image"
    })
  }, {
    f: common_vendor.p({
      ["background-color"]: "#f2f2f2"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-776eef57"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/im/index.vue"]]);
wx.createPage(MiniProgramPage);

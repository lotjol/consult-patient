"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "feed",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "plusempty",
          color: "#2CB5A5",
          size: "12"
        }),
        b: common_vendor.p({
          type: "plusempty",
          color: "#2CB5A5",
          size: "12"
        }),
        c: common_vendor.p({
          type: "plusempty",
          color: "#2CB5A5",
          size: "12"
        }),
        d: common_vendor.p({
          type: "plusempty",
          color: "#2CB5A5",
          size: "12"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/components/feed.vue"]]);
wx.createComponent(Component);

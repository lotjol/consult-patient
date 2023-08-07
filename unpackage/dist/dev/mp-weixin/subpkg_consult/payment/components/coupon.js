"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "coupon",
  setup(__props, { expose }) {
    const couponPopup = common_vendor.ref();
    function openCoupon() {
      couponPopup.value.open();
    }
    expose({ openCoupon });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "18",
          color: "#333",
          type: "closeempty"
        }),
        b: common_vendor.sr(couponPopup, "e75071a8-0", {
          "k": "couponPopup"
        }),
        c: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/payment/components/coupon.vue"]]);
wx.createComponent(Component);

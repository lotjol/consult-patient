"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2 + _easycom_scroll_page2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section + _easycom_scroll_page + customCoupon + customPayment)();
}
const customCoupon = () => "./components/coupon.js";
const customPayment = () => "./components/payment.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const couponRef = common_vendor.ref();
    const paymentRef = common_vendor.ref();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "极速问诊",
          note: "自动分配医生",
          thumb: "/static/uploads/doctor-avatar.jpg",
          ["thumb-size"]: "lg"
        }),
        b: common_vendor.o(($event) => couponRef.value.openCoupon()),
        c: common_vendor.p({
          title: "优惠券",
          ["show-arrow"]: true,
          clickable: true,
          ["right-text"]: "-¥10.00"
        }),
        d: common_vendor.p({
          title: "积分抵扣"
        }),
        e: common_vendor.p({
          title: "实付款"
        }),
        f: common_vendor.p({
          border: false
        }),
        g: common_vendor.p({
          ["title-font-size"]: "32rpx",
          ["title-color"]: "#121826",
          padding: "30rpx",
          title: "图文问诊 49元"
        }),
        h: common_vendor.p({
          title: "患者信息"
        }),
        i: common_vendor.p({
          border: true,
          title: "病情描述",
          note: "头痛,头晕,恶心"
        }),
        j: common_vendor.p({
          border: false
        }),
        k: common_vendor.p({
          ["title-font-size"]: "32rpx",
          ["title-color"]: "#121826",
          padding: "30rpx",
          title: "患者资料"
        }),
        l: common_vendor.o(($event) => paymentRef.value.openPayment()),
        m: common_vendor.sr(couponRef, "2a001fb6-11", {
          "k": "couponRef"
        }),
        n: common_vendor.sr(paymentRef, "2a001fb6-12", {
          "k": "paymentRef"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2a001fb6"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/payment/index.vue"]]);
wx.createPage(MiniProgramPage);

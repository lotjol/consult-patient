"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_notice_bar2 + _easycom_scroll_page2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_notice_bar + _easycom_scroll_page)();
}
function _sfc_render(_ctx, _cache) {
  return common_vendor.e({
    a: common_vendor.p({
      size: "16",
      color: "#FF7702",
      type: "location-filled"
    })
  }, {
    c: common_vendor.p({
      title: "药品金额",
      ["right-text"]: "¥50.00"
    }),
    d: common_vendor.p({
      title: "运费",
      ["right-text"]: "¥5.00"
    }),
    e: common_vendor.p({
      title: "优惠券",
      ["show-arrow"]: true,
      ["right-text"]: "-¥10.00"
    }),
    f: common_vendor.p({
      title: "实付款",
      ["right-text"]: "¥45.00"
    }),
    g: common_vendor.p({
      title: "订单编号",
      ["right-text"]: "202201127465"
    }),
    h: common_vendor.p({
      title: "创建时间",
      ["right-text"]: "2022-01-23 09:23:46"
    }),
    i: common_vendor.p({
      title: "支付方式",
      ["right-text"]: "微信支付"
    }),
    j: common_vendor.p({
      border: false
    }),
    k: common_vendor.p({
      text: "请在 00:14:59 内完成支付，超时订单将取消"
    })
  }, {
    l: common_vendor.p({
      size: "24",
      color: "#848484",
      type: "trash"
    })
  }, {
    m: common_vendor.p({
      ["background-color"]: "#f6f6f6"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e7013321"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_medicine/detail/index.vue"]]);
wx.createPage(MiniProgramPage);

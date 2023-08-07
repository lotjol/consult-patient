"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_custom_section2 = common_vendor.resolveComponent("custom-section");
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_custom_section2 + _easycom_uni_badge2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_scroll_page2)();
}
const _easycom_custom_section = () => "../../components/custom-section/custom-section.js";
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_custom_section + _easycom_uni_badge + _easycom_uni_list_item + _easycom_uni_list + _easycom_scroll_page)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      ["custom-style"]: {
        paddingBottom: "20rpx"
      },
      title: "问诊中"
    }),
    b: common_vendor.p({
      text: 0,
      offset: [3, 3],
      absolute: "rightTop"
    }),
    c: common_vendor.p({
      text: "2",
      offset: [3, 3],
      absolute: "rightTop"
    }),
    d: common_vendor.p({
      text: 0,
      offset: [3, 3],
      absolute: "rightTop"
    }),
    e: common_vendor.p({
      text: 0,
      offset: [3, 3],
      absolute: "rightTop"
    }),
    f: common_vendor.p({
      ["show-arrow"]: true,
      title: "药品订单"
    }),
    g: common_vendor.p({
      border: false,
      title: "我的问诊",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      to: "/subpkg_consult/list/index",
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-01"
      }
    }),
    h: common_vendor.p({
      border: false,
      title: "我的处方",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-02"
      }
    }),
    i: common_vendor.p({
      border: false,
      title: "家庭档案",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      to: "/subpkg_archive/list/index",
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-03"
      }
    }),
    j: common_vendor.p({
      border: false,
      title: "地址管理",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-04"
      }
    }),
    k: common_vendor.p({
      border: false,
      title: "我的评价",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-05"
      }
    }),
    l: common_vendor.p({
      border: false,
      title: "官方客服",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-06"
      }
    }),
    m: common_vendor.p({
      border: false,
      title: "设置",
      ["show-arrow"]: true,
      ["show-extra-icon"]: true,
      ["extra-icon"]: {
        customPrefix: "icon-symbol",
        type: "icon-symbol-tool-07"
      }
    }),
    n: common_vendor.p({
      border: false
    }),
    o: common_vendor.p({
      title: "快捷工具"
    }),
    p: common_vendor.p({
      ["background-color"]: "#F6F7F9"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f97bc692"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);

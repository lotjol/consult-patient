"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_icons2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_scroll_page2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const swipeOptions = common_vendor.ref([
      {
        text: "删除",
        style: {
          backgroundColor: "#dd524d"
        }
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "link",
          size: "28",
          color: "#16C2A3"
        }),
        b: common_vendor.p({
          ["right-options"]: swipeOptions.value
        }),
        c: common_vendor.p({
          ["right-options"]: swipeOptions.value
        })
      }, {
        d: common_vendor.p({
          color: "#16C2A3",
          size: "24",
          type: "plusempty"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2cba79cd"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_archive/list/index.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_tabs2 = common_vendor.resolveComponent("custom-tabs");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_custom_tabs2 + _easycom_uni_load_more2)();
}
const _easycom_custom_tabs = () => "../../components/custom-tabs/custom-tabs.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_custom_tabs + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const feedTabs = common_vendor.ref([
      { label: "全部", rendered: true },
      { label: "待支付", rendered: false },
      { label: "待发货", rendered: false },
      { label: "待收货", rendered: false },
      { label: "已完成", rendered: false }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: feedTabs.value
        }),
        b: common_vendor.p({
          status: "loading",
          color: "#C3C3C5",
          ["icon-size"]: "16",
          ["content-text"]: {
            contentdown: "上拉显示更多",
            contentrefresh: "数据正在加载中",
            contentnomore: "没有更多数据了"
          }
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-735e5d9f"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_medicine/list/index.vue"]]);
wx.createPage(MiniProgramPage);

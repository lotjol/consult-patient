"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_tabs2 = common_vendor.resolveComponent("custom-tabs");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_custom_tabs2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_more2)();
}
const _easycom_custom_tabs = () => "../../components/custom-tabs/custom-tabs.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_custom_tabs + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const feedTabs = common_vendor.ref([
      { label: "问医生", rendered: true },
      { label: "极速问诊", rendered: false },
      { label: "开药问诊", rendered: false }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: feedTabs.value
        }),
        b: common_vendor.p({
          border: false,
          title: "病情描述",
          ["right-text"]: "腹痛腹泻  胃部有些痉挛"
        }),
        c: common_vendor.p({
          border: false,
          title: "价格",
          ["right-text"]: "¥ 39.00"
        }),
        d: common_vendor.p({
          border: false,
          title: "创建时间",
          ["right-text"]: "2019-07-08  09:55:54"
        }),
        e: common_vendor.p({
          border: false
        }),
        f: common_vendor.p({
          border: false,
          title: "病情描述",
          ["right-text"]: "腹痛腹泻  胃部有些痉挛"
        }),
        g: common_vendor.p({
          border: false,
          title: "价格",
          ["right-text"]: "¥ 39.00"
        }),
        h: common_vendor.p({
          border: false,
          title: "创建时间",
          ["right-text"]: "2019-07-08  09:55:54"
        }),
        i: common_vendor.p({
          border: false
        }),
        j: common_vendor.p({
          border: false,
          title: "病情描述",
          ["right-text"]: "腹痛腹泻  胃部有些痉挛"
        }),
        k: common_vendor.p({
          border: false,
          title: "价格",
          ["right-text"]: "¥ 39.00"
        }),
        l: common_vendor.p({
          border: false,
          title: "创建时间",
          ["right-text"]: "2019-07-08  09:55:54"
        }),
        m: common_vendor.p({
          border: false
        }),
        n: common_vendor.p({
          border: false,
          title: "病情描述",
          ["right-text"]: "腹痛腹泻  胃部有些痉挛"
        }),
        o: common_vendor.p({
          border: false,
          title: "价格",
          ["right-text"]: "¥ 39.00"
        }),
        p: common_vendor.p({
          border: false,
          title: "创建时间",
          ["right-text"]: "2019-07-08  09:55:54"
        }),
        q: common_vendor.p({
          border: false
        }),
        r: common_vendor.p({
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c14d5a54"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/list/index.vue"]]);
wx.createPage(MiniProgramPage);

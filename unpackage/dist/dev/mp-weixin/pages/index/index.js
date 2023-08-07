"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_tabs2 = common_vendor.resolveComponent("custom-tabs");
  const _easycom_custom_sticky2 = common_vendor.resolveComponent("custom-sticky");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_custom_tabs2 + _easycom_custom_sticky2 + _easycom_scroll_page2)();
}
const _easycom_custom_tabs = () => "../../components/custom-tabs/custom-tabs.js";
const _easycom_custom_sticky = () => "../../components/custom-sticky/custom-sticky.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_custom_tabs + _easycom_custom_sticky + cpFocus + cpRecommend + cpFatLoss + cpDiet + _easycom_scroll_page)();
}
const cpFocus = () => "./components/focus.js";
const cpRecommend = () => "./components/recommend.js";
const cpFatLoss = () => "./components/fat-loss.js";
const cpDiet = () => "./components/diet.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const tabIndex = common_vendor.ref(0);
    const feedTabs = common_vendor.ref([
      { label: "关注", rendered: true },
      { label: "推荐", rendered: false },
      { label: "护肤品", rendered: false },
      { label: "减脂", rendered: false },
      { label: "饮食", rendered: false }
    ]);
    const navbarStyle = common_vendor.computed(() => {
      return {
        paddingTop: safeAreaInsets.top + "px"
      };
    });
    function onFeedTabChange({ index }) {
      tabIndex.value = index;
      feedTabs.value[index].rendered = true;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s(common_vendor.unref(navbarStyle)),
        b: common_vendor.o(onFeedTabChange),
        c: common_vendor.p({
          list: feedTabs.value
        }),
        d: common_vendor.p({
          ["offset-top"]: common_vendor.unref(safeAreaInsets).top + "px"
        }),
        e: feedTabs.value[0].rendered
      }, feedTabs.value[0].rendered ? {
        f: tabIndex.value === 0
      } : {}, {
        g: feedTabs.value[1].rendered
      }, feedTabs.value[1].rendered ? {
        h: tabIndex.value === 1
      } : {}, {
        i: feedTabs.value[2].rendered
      }, feedTabs.value[2].rendered ? {
        j: tabIndex.value === 2
      } : {}, {
        k: feedTabs.value[3].rendered
      }, feedTabs.value[3].rendered ? {
        l: tabIndex.value === 3
      } : {}, {
        m: -common_vendor.unref(safeAreaInsets).top + "px",
        n: -48 + common_vendor.unref(safeAreaInsets).top + "px"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

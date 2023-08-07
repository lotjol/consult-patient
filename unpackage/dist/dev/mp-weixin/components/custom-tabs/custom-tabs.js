"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "custom-tabs",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  emits: ["click"],
  setup(__props, { emit: customTabsEmit }) {
    const customTabsProps = __props;
    const tabBarRect = common_vendor.ref([]);
    const tabIndex = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      const query = common_vendor.index.createSelectorQuery().in(common_vendor.getCurrentInstance());
      query.selectAll(".custom-tabs, .tabs-bar-text").boundingClientRect(([parent, ...data]) => {
        tabBarRect.value = data.map(({ width, left }) => {
          return { left: left - parent.left, width };
        });
      }).exec();
    });
    const cursorPosition = common_vendor.computed(() => {
      if (tabBarRect.value.length === 0)
        return;
      const { width, left } = tabBarRect.value[tabIndex.value];
      return left + (width - 20) / 2;
    });
    function onTabChange(index, tab) {
      tabIndex.value = index;
      customTabsEmit("click", { index, ...tab });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(customTabsProps.list, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab.label),
            b: tab.label,
            c: common_vendor.o(($event) => onTabChange(index, tab), tab.label),
            d: tabIndex.value === index ? 1 : ""
          };
        }),
        b: common_vendor.unref(cursorPosition) + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80524daf"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/custom-tabs/custom-tabs.vue"]]);
wx.createComponent(Component);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "custom-sticky",
  props: {
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(__props) {
    const stickyProps = __props;
    const stickStyle = common_vendor.computed(() => {
      return {
        paddingTop: stickyProps.offsetTop,
        backgroundColor: stickyProps.backgroundColor
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(common_vendor.unref(stickStyle))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-25d0445b"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/custom-sticky/custom-sticky.vue"]]);
wx.createComponent(Component);

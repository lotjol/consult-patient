"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-section",
  props: {
    title: {
      type: String,
      default: ""
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const sectionProps = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(sectionProps.title),
        b: sectionProps.showArrow
      }, sectionProps.showArrow ? {
        c: common_vendor.p({
          color: "#c3c3c5",
          size: "16",
          type: "forward"
        })
      } : {}, {
        d: common_vendor.s(sectionProps.customStyle)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d0088301"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/custom-section/custom-section.vue"]]);
wx.createComponent(Component);

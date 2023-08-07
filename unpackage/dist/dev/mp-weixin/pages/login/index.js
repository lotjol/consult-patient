"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + common_vendor.unref(customPassword) + common_vendor.unref(customMobile))();
}
const customPassword = () => "./components/password.js";
const customMobile = () => "./components/mobile.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabMetas = common_vendor.reactive([
      {
        title: "密码登录",
        subTitle: "验证码登录"
      },
      {
        title: "验证码登录",
        subTitle: "密码登录"
      }
    ]);
    const tabMeta = common_vendor.computed(() => {
      return tabMetas[tabIndex.value];
    });
    function changeLoginType() {
      tabIndex.value = Math.abs(tabIndex.value - 1);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(tabMeta).title),
        b: common_vendor.t(common_vendor.unref(tabMeta).subTitle),
        c: common_vendor.o(changeLoginType),
        d: common_vendor.p({
          color: "#3c3e42",
          type: "forward"
        }),
        e: tabIndex.value === 0
      }, tabIndex.value === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);

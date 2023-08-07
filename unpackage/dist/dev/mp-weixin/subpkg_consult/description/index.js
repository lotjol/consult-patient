"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_icons2 + _easycom_uni_file_picker2 + _easycom_scroll_page2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_file_picker + _easycom_scroll_page)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "shop",
      color: "#6f6f6f"
    }),
    b: common_vendor.p({
      title: "上传病情相关图片 (仅医生可见)",
      limit: "8",
      ["image-styles"]: {
        width: "177rpx",
        height: "177rpx"
      },
      ["file-extname"]: "png,jpg,gif,webp"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-668e7de9"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/description/index.vue"]]);
wx.createPage(MiniProgramPage);

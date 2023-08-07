"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2 + _easycom_scroll_page2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_forms + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref([0]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["placeholder-style"]: "color: #C3C3C5; font-size: 32rpx",
          styles: {
            color: "#121826"
          },
          ["input-border"]: false,
          clearable: false,
          placeholder: "请填写真实姓名"
        }),
        b: common_vendor.p({
          label: "患者姓名",
          name: "name"
        }),
        c: common_vendor.p({
          ["placeholder-style"]: "color: #C3C3C5; font-size: 32rpx",
          styles: {
            color: "#121826"
          },
          ["input-border"]: false,
          clearable: false,
          placeholder: "请填写身份证号"
        }),
        d: common_vendor.p({
          label: "患者身份证号",
          name: "name"
        }),
        e: common_vendor.p({
          selectedColor: "#16C2A3",
          localdata: [{
            text: "男",
            value: 0
          }, {
            text: "女",
            value: 1
          }]
        }),
        f: common_vendor.p({
          label: "患者性别",
          name: "name"
        }),
        g: common_vendor.p({
          selectedColor: "#16C2A3",
          multiple: true,
          localdata: [{
            value: 0
          }]
        }),
        h: common_vendor.p({
          label: "默认就诊人",
          name: "name"
        }),
        i: common_vendor.sr("form", "a92e0f6c-1,a92e0f6c-0"),
        j: common_vendor.p({
          border: true,
          ["label-width"]: "220rpx"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a92e0f6c"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_archive/add/index.vue"]]);
wx.createPage(MiniProgramPage);

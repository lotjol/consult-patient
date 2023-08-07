"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_popup)();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "payment",
  setup(__props, { expose }) {
    const paymentPopup = common_vendor.ref();
    function openPayment() {
      paymentPopup.value.open();
    }
    async function onPopupClose() {
      const { confirm } = await common_vendor.index.showModal({
        title: "关闭支付",
        content: "取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？",
        cancelText: "仍要关闭",
        cancelColor: "#848484",
        confirmText: "继续支付",
        confirmColor: "#16C2A3"
      });
      if (!confirm)
        paymentPopup.value.close();
    }
    function jumpTo() {
      common_vendor.index.navigateTo({
        url: "/subpkg_consult/im/index"
      });
    }
    expose({ openPayment });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onPopupClose),
        b: common_vendor.p({
          size: "18",
          color: "#333",
          type: "closeempty"
        }),
        c: common_vendor.p({
          title: "微信支付",
          thumb: "/static/images/wechatpay-icon.png"
        }),
        d: common_vendor.p({
          title: "支付宝支付",
          thumb: "/static/images/alipay-icon.png"
        }),
        e: common_vendor.p({
          border: false
        }),
        f: common_vendor.o(jumpTo),
        g: common_vendor.sr(paymentPopup, "093f1cef-0", {
          "k": "paymentPopup"
        }),
        h: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-093f1cef"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/payment/components/payment.vue"]]);
wx.createComponent(Component);

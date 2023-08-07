"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "scroll-page",
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    upperThreshold: {
      type: [Number, String],
      default: 50
    },
    lowerThreshold: {
      type: [Number, String],
      default: 50
    },
    scrollTop: [Number, String],
    scrollLeft: [Number, String],
    scrollIntoView: String,
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    enableBackToTop: {
      type: Boolean,
      default: false
    },
    showScrollbar: {
      type: Boolean,
      default: false
    },
    refresherEnabled: {
      type: Boolean,
      default: false
    },
    refresherThreshold: {
      type: Number,
      default: 45
    },
    refresherDefaultStyle: {
      type: String,
      default: "black"
    },
    refresherBackground: {
      type: String,
      default: "#fff"
    },
    refresherTriggered: {
      type: Boolean,
      default: false
    },
    enableFlex: {
      type: Boolean,
      default: false
    },
    scrollAnchoring: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  emits: [
    "scrolltoupper",
    "scrolltolower",
    "scroll",
    "refresherpulling",
    "refresherrefresh",
    "refresherrestore",
    "refresherabort"
  ],
  setup(__props, { emit: scrollViewEmit }) {
    const scrollViewProps = __props;
    const { windowHeight, safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(windowHeight) - 1 + "px",
        b: scrollViewProps.backgroundColor,
        c: common_vendor.o(($event) => _ctx.$emit("refresherabort", $event)),
        d: common_vendor.o(($event) => _ctx.$emit("refresherrestore", $event)),
        e: common_vendor.o(($event) => _ctx.$emit("refresherrefresh", $event)),
        f: common_vendor.o(($event) => _ctx.$emit("refresherpulling", $event)),
        g: common_vendor.o(($event) => _ctx.$emit("scroll", $event)),
        h: common_vendor.o(($event) => _ctx.$emit("scrolltolower", $event)),
        i: common_vendor.o(($event) => _ctx.$emit("scrolltoupper", $event)),
        j: scrollViewProps.scrollX,
        k: scrollViewProps.scrollY,
        l: scrollViewProps.upperThreshold,
        m: scrollViewProps.lowerThreshold,
        n: scrollViewProps.scrollTop,
        o: scrollViewProps.scrollLeft,
        p: scrollViewProps.scrollIntoView,
        q: scrollViewProps.scrollWithAnimation,
        r: scrollViewProps.enableBackToTop,
        s: scrollViewProps.showScrollbar,
        t: scrollViewProps.refresherEnabled,
        v: scrollViewProps.refresherThreshold,
        w: scrollViewProps.refresherDefaultStyle,
        x: scrollViewProps.refresherBackground,
        y: scrollViewProps.refresherTriggered,
        z: scrollViewProps.enableFlex,
        A: scrollViewProps.scrollAnchoring
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eef314e4"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/scroll-page/scroll-page.vue"]]);
wx.createComponent(Component);

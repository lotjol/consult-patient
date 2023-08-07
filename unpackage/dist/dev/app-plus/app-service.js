if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$k = {
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
      const tabBarRect = vue.ref([]);
      const tabIndex = vue.ref(0);
      vue.onMounted(() => {
        const query = uni.createSelectorQuery().in(vue.getCurrentInstance());
        query.selectAll(".custom-tabs, .tabs-bar-text").boundingClientRect(([parent, ...data]) => {
          tabBarRect.value = data.map(({ width, left }) => {
            return { left: left - parent.left, width };
          });
        }).exec();
      });
      const cursorPosition = vue.computed(() => {
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "custom-tabs" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(customTabsProps.list, (tab, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: tab.label,
                onClick: ($event) => onTabChange(index, tab),
                class: vue.normalizeClass([{ active: tabIndex.value === index }, "custom-tabs-bar"])
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "tabs-bar-text" },
                  vue.toDisplayString(tab.label),
                  1
                  /* TEXT */
                )
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ left: vue.unref(cursorPosition) + "px" }),
              class: "custom-tabs-cursor"
            },
            null,
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-80524daf"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/custom-tabs/custom-tabs.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$j = {
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
      const stickStyle = vue.computed(() => {
        return {
          paddingTop: stickyProps.offsetTop,
          backgroundColor: stickyProps.backgroundColor
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            style: vue.normalizeStyle(vue.unref(stickStyle)),
            class: "custom-sticky"
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-25d0445b"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/custom-sticky/custom-sticky.vue"]]);
  const _sfc_main$i = {
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
      const { windowHeight, safeAreaInsets } = uni.getSystemInfoSync();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          style: vue.normalizeStyle({
            height: vue.unref(windowHeight) - 1 + "px",
            borderBottom: "1rpx solid #ededed",
            backgroundColor: scrollViewProps.backgroundColor
          }),
          onRefresherabort: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresherabort", $event)),
          onRefresherrestore: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("refresherrestore", $event)),
          onRefresherrefresh: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("refresherrefresh", $event)),
          onRefresherpulling: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("refresherpulling", $event)),
          onScroll: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("scroll", $event)),
          onScrolltolower: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("scrolltolower", $event)),
          onScrolltoupper: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("scrolltoupper", $event)),
          scrollX: scrollViewProps.scrollX,
          scrollY: scrollViewProps.scrollY,
          upperThreshold: scrollViewProps.upperThreshold,
          lowerThreshold: scrollViewProps.lowerThreshold,
          scrollTop: scrollViewProps.scrollTop,
          scrollLeft: scrollViewProps.scrollLeft,
          scrollIntoView: scrollViewProps.scrollIntoView,
          scrollWithAnimation: scrollViewProps.scrollWithAnimation,
          enableBackToTop: scrollViewProps.enableBackToTop,
          showScrollbar: scrollViewProps.showScrollbar,
          refresherEnabled: scrollViewProps.refresherEnabled,
          refresherThreshold: scrollViewProps.refresherThreshold,
          refresherDefaultStyle: scrollViewProps.refresherDefaultStyle,
          refresherBackground: scrollViewProps.refresherBackground,
          refresherTriggered: scrollViewProps.refresherTriggered,
          enableFlex: scrollViewProps.enableFlex,
          scrollAnchoring: scrollViewProps.scrollAnchoring,
          enhanced: true
        }, [
          vue.createElementVNode("view", { class: "scroll-page-content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 44, ["scrollX", "scrollY", "upperThreshold", "lowerThreshold", "scrollTop", "scrollLeft", "scrollIntoView", "scrollWithAnimation", "enableBackToTop", "showScrollbar", "refresherEnabled", "refresherThreshold", "refresherDefaultStyle", "refresherBackground", "refresherTriggered", "enableFlex", "scrollAnchoring"]);
      };
    }
  };
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-eef314e4"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/scroll-page/scroll-page.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$h = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$c], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$g = {
    __name: "feed",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "feed-list" }, [
          vue.createElementVNode("view", { class: "feed-list-item" }, [
            vue.createElementVNode("view", { class: "feed-meta" }, [
              vue.createElementVNode("image", {
                class: "doctor-avatar",
                src: "/static/uploads/doctor-avatar.jpg"
              }),
              vue.createElementVNode("view", { class: "doctor-info" }, [
                vue.createElementVNode("text", { class: "name" }, "王医生"),
                vue.createElementVNode("text", { class: "desc" }, "积水潭 皮肤科 主任医师")
              ]),
              vue.createElementVNode("button", {
                class: "doctor-button",
                plain: ""
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  color: "#2CB5A5",
                  size: "12"
                }),
                vue.createElementVNode("text", null, " 关注")
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-topic" }, " 炎热夏季如何防晒？ "),
            vue.createElementVNode("view", { class: "feed-relation" }, "# 儿童健康"),
            vue.createElementVNode("view", { class: "feed-content" }, [
              vue.createElementVNode("view", { class: "text" }, " 炎热的夏季，那大太阳无时不刻在考验着我们的肌肤，过强、过多的阳光中紫外线的 "),
              vue.createElementVNode("view", { class: "picture" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-1.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-2.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-3.jpeg"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-extra" }, [
              vue.createElementVNode("text", null, "12 收藏"),
              vue.createElementVNode("text", null, "120 评论")
            ])
          ]),
          vue.createElementVNode("view", { class: "feed-list-item" }, [
            vue.createElementVNode("view", { class: "feed-meta" }, [
              vue.createElementVNode("image", {
                class: "doctor-avatar",
                src: "/static/uploads/doctor-avatar.jpg"
              }),
              vue.createElementVNode("view", { class: "doctor-info" }, [
                vue.createElementVNode("text", { class: "name" }, "王医生"),
                vue.createElementVNode("text", { class: "desc" }, "积水潭 皮肤科 主任医师")
              ]),
              vue.createElementVNode("button", {
                class: "doctor-button",
                plain: ""
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  color: "#2CB5A5",
                  size: "12"
                }),
                vue.createElementVNode("text", null, " 关注")
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-topic" }, " 炎热夏季如何防晒？ "),
            vue.createElementVNode("view", { class: "feed-relation" }, "# 儿童健康"),
            vue.createElementVNode("view", { class: "feed-content" }, [
              vue.createElementVNode("view", { class: "text" }, " 炎热的夏季，那大太阳无时不刻在考验着我们的肌肤，过强、过多的阳光中紫外线的 "),
              vue.createElementVNode("view", { class: "picture" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-1.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-2.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-3.jpeg"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-extra" }, [
              vue.createElementVNode("text", null, "12 收藏"),
              vue.createElementVNode("text", null, "120 评论")
            ])
          ]),
          vue.createElementVNode("view", { class: "feed-list-item" }, [
            vue.createElementVNode("view", { class: "feed-meta" }, [
              vue.createElementVNode("image", {
                class: "doctor-avatar",
                src: "/static/uploads/doctor-avatar.jpg"
              }),
              vue.createElementVNode("view", { class: "doctor-info" }, [
                vue.createElementVNode("text", { class: "name" }, "王医生"),
                vue.createElementVNode("text", { class: "desc" }, "积水潭 皮肤科 主任医师")
              ]),
              vue.createElementVNode("button", {
                class: "doctor-button",
                plain: ""
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  color: "#2CB5A5",
                  size: "12"
                }),
                vue.createElementVNode("text", null, " 关注")
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-topic" }, " 炎热夏季如何防晒？ "),
            vue.createElementVNode("view", { class: "feed-relation" }, "# 儿童健康"),
            vue.createElementVNode("view", { class: "feed-content" }, [
              vue.createElementVNode("view", { class: "text" }, " 炎热的夏季，那大太阳无时不刻在考验着我们的肌肤，过强、过多的阳光中紫外线的 "),
              vue.createElementVNode("view", { class: "picture" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-1.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-2.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-3.jpeg"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-extra" }, [
              vue.createElementVNode("text", null, "12 收藏"),
              vue.createElementVNode("text", null, "120 评论")
            ])
          ]),
          vue.createElementVNode("view", { class: "feed-list-item" }, [
            vue.createElementVNode("view", { class: "feed-meta" }, [
              vue.createElementVNode("image", {
                class: "doctor-avatar",
                src: "/static/uploads/doctor-avatar.jpg"
              }),
              vue.createElementVNode("view", { class: "doctor-info" }, [
                vue.createElementVNode("text", { class: "name" }, "王医生"),
                vue.createElementVNode("text", { class: "desc" }, "积水潭 皮肤科 主任医师")
              ]),
              vue.createElementVNode("button", {
                class: "doctor-button",
                plain: ""
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  color: "#2CB5A5",
                  size: "12"
                }),
                vue.createElementVNode("text", null, " 关注")
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-topic" }, " 炎热夏季如何防晒？ "),
            vue.createElementVNode("view", { class: "feed-relation" }, "# 儿童健康"),
            vue.createElementVNode("view", { class: "feed-content" }, [
              vue.createElementVNode("view", { class: "text" }, " 炎热的夏季，那大太阳无时不刻在考验着我们的肌肤，过强、过多的阳光中紫外线的 "),
              vue.createElementVNode("view", { class: "picture" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-1.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-2.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  class: "uni-image",
                  src: "/static/uploads/feed-3.jpeg"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "feed-extra" }, [
              vue.createElementVNode("text", null, "12 收藏"),
              vue.createElementVNode("text", null, "120 评论")
            ])
          ])
        ]);
      };
    }
  };
  const cpFeed = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-07a78e43"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/components/feed.vue"]]);
  const _sfc_main$f = {
    __name: "focus",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(cpFeed);
      };
    }
  };
  const cpFocus = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/components/focus.vue"]]);
  const _sfc_main$e = {};
  function _sfc_render$b(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "feeds: 推荐");
  }
  const cpRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$b], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/components/recommend.vue"]]);
  const _sfc_main$d = {};
  function _sfc_render$a(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "feeds: 减脂dddd");
  }
  const cpFatLoss = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$a], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/components/fat-loss.vue"]]);
  const _sfc_main$c = {};
  function _sfc_render$9(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "feeds: 饮食ddddd");
  }
  const cpDiet = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/components/diet.vue"]]);
  const _sfc_main$b = {
    __name: "index",
    setup(__props) {
      const { safeAreaInsets } = uni.getSystemInfoSync();
      const tabIndex = vue.ref(0);
      const feedTabs = vue.ref([
        { label: "关注", rendered: true },
        { label: "推荐", rendered: false },
        { label: "护肤品", rendered: false },
        { label: "减脂", rendered: false },
        { label: "饮食", rendered: false }
      ]);
      const navbarStyle = vue.computed(() => {
        return {
          paddingTop: safeAreaInsets.top + "px"
        };
      });
      function onFeedTabChange({ index }) {
        tabIndex.value = index;
        feedTabs.value[index].rendered = true;
      }
      return (_ctx, _cache) => {
        const _component_custom_tabs = resolveEasycom(vue.resolveDynamicComponent("custom-tabs"), __easycom_0$3);
        const _component_custom_sticky = resolveEasycom(vue.resolveDynamicComponent("custom-sticky"), __easycom_1$3);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_1$2);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: "index-page",
                style: vue.normalizeStyle({ backgroundPositionY: -48 + vue.unref(safeAreaInsets).top + "px" })
              },
              [
                vue.createCommentVNode(" 页面导航 "),
                vue.createElementVNode(
                  "view",
                  {
                    style: vue.normalizeStyle(vue.unref(navbarStyle)),
                    class: "page-navbar"
                  },
                  "优医",
                  4
                  /* STYLE */
                ),
                vue.createCommentVNode(" 搜索栏 "),
                vue.createElementVNode("view", { class: "search-bar" }, [
                  vue.createElementVNode("input", {
                    "placeholder-class": "input-placeholder",
                    placeholder: "搜一搜: 疾病/症状/医生/健康知识",
                    class: "input",
                    type: "text"
                  })
                ]),
                vue.createCommentVNode(" 快速入口 "),
                vue.createElementVNode("view", { class: "quick-entry" }, [
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-entry-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-entry-icon",
                      src: "/static/images/quick-entry-1.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "问医生"),
                    vue.createElementVNode("text", { class: "small" }, "按科室查问医生")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-entry-item",
                    url: "../../subpkg_consult/quickly/quickly"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-entry-icon",
                      src: "/static/images/quick-entry-2.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "极速问诊"),
                    vue.createElementVNode("text", { class: "small" }, "20s医生极速回复")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-entry-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-entry-icon",
                      src: "/static/images/quick-entry-3.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "开药门诊"),
                    vue.createElementVNode("text", { class: "small" }, "线上买药更方便")
                  ])
                ]),
                vue.createCommentVNode(" 快速查看 "),
                vue.createElementVNode("view", { class: "quick-view" }, [
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-1.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "药品订单")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-2.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "健康档案")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-3.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "我的处方")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-4.png"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "疾病查询")
                  ])
                ]),
                vue.createCommentVNode(" 广告位 "),
                vue.createElementVNode("view", { class: "banner-placeholder" }, [
                  vue.createElementVNode("swiper", {
                    class: "uni-swiper",
                    "indicator-dots": "",
                    "indicator-color": "#ffffff99",
                    "indicator-active-color": "#fff",
                    circular: ""
                  }, [
                    vue.createElementVNode("swiper-item", null, [
                      vue.createElementVNode("navigator", {
                        "hover-class": "none",
                        class: "navigator",
                        url: " "
                      }, [
                        vue.createElementVNode("image", {
                          class: "banner-image",
                          src: "/static/images/banner-1.png"
                        })
                      ])
                    ]),
                    vue.createElementVNode("swiper-item", null, [
                      vue.createElementVNode("navigator", {
                        "hover-class": "none",
                        class: "navigator",
                        url: " "
                      }, [
                        vue.createElementVNode("image", {
                          class: "banner-image",
                          src: "/static/images/banner-1.png",
                          mode: "aspectFill"
                        })
                      ])
                    ])
                  ])
                ]),
                vue.createCommentVNode(" 数据流 "),
                vue.createElementVNode(
                  "view",
                  {
                    class: "doctor-feeds",
                    style: vue.normalizeStyle({ marginTop: -vue.unref(safeAreaInsets).top + "px" })
                  },
                  [
                    vue.createVNode(_component_custom_sticky, {
                      "offset-top": vue.unref(safeAreaInsets).top + "px"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_custom_tabs, {
                          onClick: onFeedTabChange,
                          list: feedTabs.value
                        }, null, 8, ["list"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["offset-top"]),
                    feedTabs.value[0].rendered ? vue.withDirectives((vue.openBlock(), vue.createBlock(
                      cpFocus,
                      { key: 0 },
                      null,
                      512
                      /* NEED_PATCH */
                    )), [
                      [vue.vShow, tabIndex.value === 0]
                    ]) : vue.createCommentVNode("v-if", true),
                    feedTabs.value[1].rendered ? vue.withDirectives((vue.openBlock(), vue.createBlock(
                      cpRecommend,
                      { key: 1 },
                      null,
                      512
                      /* NEED_PATCH */
                    )), [
                      [vue.vShow, tabIndex.value === 1]
                    ]) : vue.createCommentVNode("v-if", true),
                    feedTabs.value[2].rendered ? vue.withDirectives((vue.openBlock(), vue.createBlock(
                      cpFatLoss,
                      { key: 2 },
                      null,
                      512
                      /* NEED_PATCH */
                    )), [
                      [vue.vShow, tabIndex.value === 2]
                    ]) : vue.createCommentVNode("v-if", true),
                    feedTabs.value[3].rendered ? vue.withDirectives((vue.openBlock(), vue.createBlock(
                      cpDiet,
                      { key: 3 },
                      null,
                      512
                      /* NEED_PATCH */
                    )), [
                      [vue.vShow, tabIndex.value === 3]
                    ]) : vue.createCommentVNode("v-if", true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/index/index.vue"]]);
  const _sfc_main$a = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesWikiWiki = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/wiki/wiki.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesNotifyNotify = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/notify/notify.vue"]]);
  const _sfc_main$8 = {
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
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "custom-section",
            style: vue.normalizeStyle({ ...sectionProps.customStyle })
          },
          [
            vue.createElementVNode("view", { class: "custom-section-header" }, [
              vue.createElementVNode(
                "view",
                { class: "section-header-title" },
                vue.toDisplayString(sectionProps.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "section-header-right" }, [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true),
                sectionProps.showArrow ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  color: "#c3c3c5",
                  size: "16",
                  type: "forward"
                })) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d0088301"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/components/custom-section/custom-section.vue"]]);
  const _sfc_main$7 = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-c97cb896"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$6 = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
          style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
        },
        [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                vue.createElementVNode("image", {
                  src: $props.thumb,
                  class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  customPrefix: $props.extraIcon.customPrefix,
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["customPrefix", "color", "size", "type"])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], true),
          vue.renderSlot(_ctx.$slots, "body", {}, () => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  vue.toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true),
                $props.note ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  vue.toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ], true),
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  vue.toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText,
                  "custom-style": $props.badgeStyle
                }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
                $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
                }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-c7524739"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$5 = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-c2f1266a"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    const _component_custom_section = resolveEasycom(vue.resolveDynamicComponent("custom-section"), __easycom_0$1);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$1);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1);
    const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_1$2);
    return vue.openBlock(), vue.createBlock(_component_scroll_page, { "background-color": "#F6F7F9" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "my-page" }, [
          vue.createCommentVNode(" 用户资料（头像&昵称） "),
          vue.createElementVNode("view", { class: "user-profile" }, [
            vue.createElementVNode("image", {
              class: "user-avatar",
              src: "/static/uploads/doctor-avatar.jpg"
            }),
            vue.createElementVNode("view", { class: "user-info" }, [
              vue.createElementVNode("text", { class: "nickname" }, "用户907456"),
              vue.createElementVNode("text", { class: "icon-edit" }, "修改")
            ])
          ]),
          vue.createCommentVNode(" 用户数据 "),
          vue.createElementVNode("view", { class: "user-data" }, [
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: " "
            }, [
              vue.createElementVNode("text", { class: "data-number" }, "150"),
              vue.createElementVNode("text", { class: "data-label" }, "收藏")
            ]),
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: " "
            }, [
              vue.createElementVNode("text", { class: "data-number" }, "23"),
              vue.createElementVNode("text", { class: "data-label" }, "关注")
            ]),
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: " "
            }, [
              vue.createElementVNode("text", { class: "data-number" }, "230"),
              vue.createElementVNode("text", { class: "data-label" }, "积分")
            ]),
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: " "
            }, [
              vue.createElementVNode("text", { class: "data-number" }, "3"),
              vue.createElementVNode("text", { class: "data-label" }, "优惠券")
            ])
          ]),
          vue.createCommentVNode(" 问诊医生 "),
          vue.createVNode(_component_custom_section, {
            "custom-style": { paddingBottom: "20rpx" },
            title: "问诊中"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("swiper", {
                class: "uni-swiper",
                "indicator-active-color": "#2CB5A5",
                "indicator-color": "#EAF8F6",
                "indicator-dots": ""
              }, [
                vue.createElementVNode("swiper-item", null, [
                  vue.createElementVNode("view", { class: "doctor-brief" }, [
                    vue.createElementVNode("image", {
                      class: "doctor-avatar",
                      src: "/static/uploads/doctor-avatar.jpg"
                    }),
                    vue.createElementVNode("view", { class: "doctor-info" }, [
                      vue.createElementVNode("view", { class: "meta" }, [
                        vue.createElementVNode("text", { class: "name" }, "王医生"),
                        vue.createElementVNode("text", { class: "title" }, "内分泌科 | 主任医师")
                      ]),
                      vue.createElementVNode("view", { class: "meta" }, [
                        vue.createElementVNode("text", { class: "tag" }, "三甲"),
                        vue.createElementVNode("text", { class: "hospital" }, "积水潭医院")
                      ])
                    ]),
                    vue.createElementVNode("navigator", {
                      class: "doctor-contcat",
                      "hover-class": "none",
                      url: " "
                    }, " 进入咨询 ")
                  ])
                ]),
                vue.createElementVNode("swiper-item", null, [
                  vue.createElementVNode("view", { class: "doctor-brief" }, [
                    vue.createElementVNode("image", {
                      class: "doctor-avatar",
                      src: "/static/uploads/doctor-avatar.jpg"
                    }),
                    vue.createElementVNode("view", { class: "doctor-info" }, [
                      vue.createElementVNode("view", { class: "meta" }, [
                        vue.createElementVNode("text", { class: "name" }, "王医生"),
                        vue.createElementVNode("text", { class: "title" }, "内分泌科 | 主任医师")
                      ]),
                      vue.createElementVNode("view", { class: "meta" }, [
                        vue.createElementVNode("text", { class: "tag" }, "三甲"),
                        vue.createElementVNode("text", { class: "hospital" }, "积水潭医院")
                      ])
                    ]),
                    vue.createElementVNode("navigator", {
                      class: "doctor-contcat",
                      "hover-class": "none",
                      url: " "
                    }, " 进入咨询 ")
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createCommentVNode(" 药品订单 "),
          vue.createVNode(_component_custom_section, {
            "show-arrow": "",
            title: "药品订单"
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode("navigator", {
                "hover-class": "none",
                url: " "
              }, "全部订单")
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "drug-order" }, [
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createVNode(_component_uni_badge, {
                    text: 0,
                    offset: [3, 3],
                    absolute: "rightTop"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: "/static/images/order-status-1.png",
                        class: "status-icon"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createElementVNode("text", { class: "status-label" }, "待付款")
                ]),
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createVNode(_component_uni_badge, {
                    text: "2",
                    offset: [3, 3],
                    absolute: "rightTop"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: "/static/images/order-status-2.png",
                        class: "status-icon"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createElementVNode("text", { class: "status-label" }, "待付款")
                ]),
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createVNode(_component_uni_badge, {
                    text: 0,
                    offset: [3, 3],
                    absolute: "rightTop"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: "/static/images/order-status-3.png",
                        class: "status-icon"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createElementVNode("text", { class: "status-label" }, "待付款")
                ]),
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createVNode(_component_uni_badge, {
                    text: 0,
                    offset: [3, 3],
                    absolute: "rightTop"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: "/static/images/order-status-4.png",
                        class: "status-icon"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createElementVNode("text", { class: "status-label" }, "待付款")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createCommentVNode(" 快捷工具 "),
          vue.createVNode(_component_custom_section, { title: "快捷工具" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_list, { border: false }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "我的问诊",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-01"
                    }
                  }),
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "我的处方",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-02"
                    }
                  }),
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "家庭档案",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-03"
                    }
                  }),
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "地址管理",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-04"
                    }
                  }),
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "我的评价",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-05"
                    }
                  }),
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "官方客服",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-06"
                    }
                  }),
                  vue.createVNode(_component_uni_list_item, {
                    border: false,
                    title: "设置",
                    "show-arrow": "",
                    "show-extra-icon": "",
                    "extra-icon": {
                      customPrefix: "icon-symbol",
                      type: "icon-symbol-tool-07"
                    }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-2f1ef635"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/pages/my/my.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1);
    const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_1$2);
    return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "quickly-page" }, [
          vue.createElementVNode("image", {
            class: "quickly-banner",
            src: "/static/images/quickly-consult.png"
          }),
          vue.createElementVNode("view", { class: "quickly-tips" }, [
            vue.createElementVNode("text", { class: "highlight" }, "20s"),
            vue.createTextVNode(" 快速匹配专业医生 ")
          ]),
          vue.createVNode(_component_uni_list, {
            border: false,
            class: "consult-type"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_list_item, {
                title: "三甲图文问诊",
                note: "三甲主治及以上级别医生",
                "show-arrow": "",
                to: "/subpkg_consult/department/department",
                thumb: "/static/images/consult-type-1.png",
                "thumb-size": "lg"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_list, {
            border: false,
            class: "consult-type"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_list_item, {
                title: "普通图文问诊",
                note: "二甲主治及以上级别医生",
                "show-arrow": "",
                to: "/subpkg_consult/department/department",
                thumb: "/static/images/consult-type-2.png",
                "thumb-size": "lg"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const Subpkg_consultQuicklyQuickly = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-eca1323d"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/quickly/quickly.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "department-page" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        class: "department-primary"
      }, [
        vue.createElementVNode("view", { class: "department-item active" }, "内科"),
        vue.createElementVNode("view", { class: "department-item" }, "外科"),
        vue.createElementVNode("view", { class: "department-item" }, "妇产科学"),
        vue.createElementVNode("view", { class: "department-item" }, "儿科学"),
        vue.createElementVNode("view", { class: "department-item" }, "骨外科"),
        vue.createElementVNode("view", { class: "department-item" }, "眼科学"),
        vue.createElementVNode("view", { class: "department-item" }, "口腔科学"),
        vue.createElementVNode("view", { class: "department-item" }, "耳鼻喉科"),
        vue.createElementVNode("view", { class: "department-item" }, "肿瘤科"),
        vue.createElementVNode("view", { class: "department-item" }, "皮肤科"),
        vue.createElementVNode("view", { class: "department-item" }, "男科"),
        vue.createElementVNode("view", { class: "department-item" }, "烧伤科"),
        vue.createElementVNode("view", { class: "department-item" }, "传染病科"),
        vue.createElementVNode("view", { class: "department-item" }, "康复医学科"),
        vue.createElementVNode("view", { class: "department-item" }, "营养科"),
        vue.createElementVNode("view", { class: "department-item" }, "传染病科"),
        vue.createElementVNode("view", { class: "department-item" }, "康复医学科"),
        vue.createElementVNode("view", { class: "department-item" }, "营养科"),
        vue.createElementVNode("view", { class: "department-item" })
      ]),
      vue.createElementVNode("scroll-view", { class: "department-secondary" }, [
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 普通内科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 神经内科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 消化内科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 内分泌科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 免疫科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 血液科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 呼吸内科 "),
        vue.createElementVNode("navigator", {
          "hover-class": "none",
          url: "/subpkg_consult/brief/brief",
          class: "department-item"
        }, " 感染内科 ")
      ])
    ]);
  }
  const Subpkg_consultDepartmentDepartment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-ae648f3b"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/department/department.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_1$2);
    return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "brief-page" }, [
          vue.createCommentVNode(" 在线医生 "),
          vue.createElementVNode("view", { class: "doctor-online" }, [
            vue.createElementVNode("image", {
              src: "/static/uploads/doctor-avatar-2.png",
              class: "doctor-avatar"
            }),
            vue.createElementVNode("view", { class: "doctor-info" }, [
              vue.createElementVNode("view", { class: "name" }, "在线医生"),
              vue.createElementVNode("view", { class: "message" }, " 请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助 "),
              vue.createElementVNode("view", { class: "tips" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "shop",
                  color: "#6f6f6f"
                }),
                vue.createTextVNode(" 内容仅医生可见 ")
              ])
            ])
          ]),
          vue.createCommentVNode(" 患者信息 "),
          vue.createElementVNode("view", { class: "patient-info" }, [
            vue.createElementVNode("textarea", {
              class: "description",
              value: "",
              "placeholder-style": "font-size: 30rpx; color: #979797",
              placeholder: "请详细描述您的病情,病情描述不能为空"
            }),
            vue.createElementVNode("view", { class: "title" }, "本次患病多久了？"),
            vue.createElementVNode("view", { class: "tags" }, [
              vue.createElementVNode("text", { class: "tag active" }, "一周内"),
              vue.createElementVNode("text", { class: "tag" }, "一个月内"),
              vue.createElementVNode("text", { class: "tag" }, "半年内"),
              vue.createElementVNode("text", { class: "tag" }, "大于半年")
            ]),
            vue.createElementVNode("view", { class: "title" }, "此次病情是否去医院就诊过？"),
            vue.createElementVNode("view", { class: "tags" }, [
              vue.createElementVNode("text", { class: "tag" }, "就诊过"),
              vue.createElementVNode("text", { class: "tag" }, "没有就诊过")
            ])
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const Subpkg_consultBriefBrief = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-c9e27360"], ["__file", "/Users/lotjol/www/consult-patient/优医问诊/subpkg_consult/brief/brief.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/wiki/wiki", PagesWikiWiki);
  __definePage("pages/notify/notify", PagesNotifyNotify);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("subpkg_consult/quickly/quickly", Subpkg_consultQuicklyQuickly);
  __definePage("subpkg_consult/department/department", Subpkg_consultDepartmentDepartment);
  __definePage("subpkg_consult/brief/brief", Subpkg_consultBriefBrief);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/lotjol/www/consult-patient/优医问诊/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);

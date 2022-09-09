import { unref, ref, watch, customRef, getCurrentScope, onScopeDispose, computed, defineComponent, useSlots, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, toDisplayString, mergeProps, createBlock, withCtx, pushScopeId, popScopeId, reactive, createVNode, withDirectives, Fragment, renderList, createSlots, createTextVNode, vShow } from "vue";
var _a;
const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  watch(source, update, { flush: "sync" });
  const get = isFunction(fn) ? fn : fn.get;
  const set = isFunction(fn) ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get();
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set == null ? void 0 : set(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  let fallback;
  const listener = (event) => {
    window2.clearTimeout(fallback);
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true }),
    useEventListener(window2, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window2.setTimeout(() => listener(e), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useActiveElement(options = {}) {
  const { window: window2 = defaultWindow } = options;
  const activeElement = computedWithControl(() => null, () => window2 == null ? void 0 : window2.document.activeElement);
  if (window2) {
    useEventListener(window2, "blur", activeElement.trigger, true);
    useEventListener(window2, "focus", activeElement.trigger, true);
  }
  return activeElement;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useFocus(target, options = {}) {
  const { initialValue = false } = options;
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed({
    get() {
      return isDef(activeElement.value) && isDef(targetElement.value) && activeElement.value === targetElement.value;
    },
    set(value) {
      var _a2, _b;
      if (!value && focused.value)
        (_a2 = targetElement.value) == null ? void 0 : _a2.blur();
      if (value && !focused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  watch(targetElement, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const uniqueId = () => {
  return Date.now() + Math.random().toString(36).substring(2);
};
var YButton_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$6 = ["disabled"];
const _hoisted_2$4 = { class: "text" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "YButton",
  props: {
    iconPosition: {
      type: String,
      default: "left"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["focused", "unFocused"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const hasText = typeof slots.default !== "undefined";
    const hasIcon = typeof slots.icon !== "undefined";
    const target = ref();
    const { focused } = useFocus(target);
    watch(focused, (focused2) => {
      if (focused2) {
        emit("focused");
        return;
      }
      emit("unFocused");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "target",
        ref: target,
        class: normalizeClass(["button", { "flip-order": hasIcon && props.iconPosition === "right", "disabled": __props.disabled }]),
        disabled: __props.disabled
      }, [
        hasIcon ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["icon", { "has-text": hasText, "right": __props.iconPosition === "right" }])
        }, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ], 2)) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_2$4, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 10, _hoisted_1$6);
    };
  }
});
var YButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-21d7c035"]]);
var YButton$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": YButton
}, Symbol.toStringTag, { value: "Module" }));
var YInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-12ad744e"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "input-container" };
const _hoisted_2$3 = ["for"];
const _hoisted_3$3 = ["id", "value", "type", "placeholder", "aria-label"];
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { "i-tabler-backspace": "" }, null, -1));
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "YInput",
  props: {
    modelValue: String,
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String || null,
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    },
    label: {
      type: String || null,
      default: null
    },
    hint: {
      type: String || null,
      default: null
    },
    inputIcon: {
      type: String || null,
      default: null
    },
    canReset: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "reset"],
  setup(__props, { emit }) {
    const _base_input = ref();
    const { focused } = useFocus(_base_input);
    const inputId = uniqueId();
    const emitInputChange = () => {
      emit("update:modelValue", _base_input.value.value);
    };
    const resetInput = () => {
      emit("update:modelValue", "");
      emit("reset");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        __props.label !== null ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: unref(inputId),
          class: "label"
        }, toDisplayString(__props.label), 9, _hoisted_2$3)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["sub-input-container", {
            "is-error": __props.isError,
            "focused": unref(focused) && !__props.isError,
            "is-focused-error": __props.isError && unref(focused)
          }])
        }, [
          __props.inputIcon !== null ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["input-icon", __props.inputIcon])
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("input", mergeProps({ id: unref(inputId) }, _ctx.$attrs, {
            ref_key: "_base_input",
            ref: _base_input,
            value: __props.modelValue,
            type: __props.inputType,
            placeholder: __props.placeholder,
            "aria-label": __props.placeholder,
            class: "input",
            onInput: emitInputChange
          }), null, 16, _hoisted_3$3),
          __props.canReset ? (openBlock(), createBlock(YButton, {
            key: 1,
            class: "reset-button",
            disabled: typeof __props.modelValue !== "undefined" && __props.modelValue.length === 0,
            onClick: _cache[0] || (_cache[0] = ($event) => resetInput())
          }, {
            icon: withCtx(() => [
              _hoisted_4$3
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true)
        ], 2),
        __props.hint !== null ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["hint", { error: __props.isError }])
        }, toDisplayString(__props.hint), 3)) : createCommentVNode("", true)
      ]);
    };
  }
});
var YInput$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-12ad744e"]]);
var YInput$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": YInput$1
}, Symbol.toStringTag, { value: "Module" }));
var Yinput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-6689e82e"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "input-container" };
const _hoisted_2$2 = ["for"];
const _hoisted_3$2 = ["id", "value", "type", "placeholder", "aria-label"];
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("i", { "i-tabler-backspace": "" }, null, -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Yinput",
  props: {
    modelValue: String,
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String || null,
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    },
    label: {
      type: String || null,
      default: null
    },
    hint: {
      type: String || null,
      default: null
    },
    inputIcon: {
      type: String || null,
      default: null
    },
    canReset: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "reset"],
  setup(__props, { emit }) {
    const _base_input = ref();
    const { focused } = useFocus(_base_input);
    const inputId = uniqueId();
    const emitInputChange = () => {
      emit("update:modelValue", _base_input.value.value);
    };
    const resetInput = () => {
      emit("update:modelValue", "");
      emit("reset");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        __props.label !== null ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: unref(inputId),
          class: "label"
        }, toDisplayString(__props.label), 9, _hoisted_2$2)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["sub-input-container", {
            "is-error": __props.isError,
            "focused": unref(focused) && !__props.isError,
            "is-focused-error": __props.isError && unref(focused)
          }])
        }, [
          __props.inputIcon !== null ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["input-icon", __props.inputIcon])
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("input", mergeProps({ id: unref(inputId) }, _ctx.$attrs, {
            ref_key: "_base_input",
            ref: _base_input,
            value: __props.modelValue,
            type: __props.inputType,
            placeholder: __props.placeholder,
            "aria-label": __props.placeholder,
            class: "input",
            onInput: emitInputChange
          }), null, 16, _hoisted_3$2),
          __props.canReset ? (openBlock(), createBlock(YButton, {
            key: 1,
            class: "reset-button",
            disabled: typeof __props.modelValue !== "undefined" && __props.modelValue.length === 0,
            onClick: _cache[0] || (_cache[0] = ($event) => resetInput())
          }, {
            icon: withCtx(() => [
              _hoisted_4$2
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true)
        ], 2),
        __props.hint !== null ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["hint", { error: __props.isError }])
        }, toDisplayString(__props.hint), 3)) : createCommentVNode("", true)
      ]);
    };
  }
});
var YInput = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6689e82e"]]);
var YSelectOption_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = ["disabled"];
const _hoisted_2$1 = {
  key: 0,
  class: "icon"
};
const _hoisted_3$1 = { class: "text" };
const _hoisted_4$1 = {
  key: 1,
  "i-tabler-check": "",
  class: "selected-icon"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "YSelectOption",
  props: {
    modelValue: null,
    disabled: { type: Boolean, default: false },
    selected: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const slots = useSlots();
    const hasIcon = typeof slots.icon !== "undefined";
    const clicked = () => {
      if (__props.disabled === true) {
        return;
      }
      emit("click", __props.modelValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["select-option", { selected: __props.selected }]),
        disabled: __props.disabled,
        tabindex: "0",
        onClick: clicked
      }, [
        hasIcon ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        __props.selected ? (openBlock(), createElementBlock("i", _hoisted_4$1)) : createCommentVNode("", true)
      ], 10, _hoisted_1$3);
    };
  }
});
var YSelectOption = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-183647fd"]]);
function launder(arg) {
  return arg;
}
var YGroupSelectMenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "menu" };
const _hoisted_2 = { class: "search" };
const _hoisted_3 = { class: "menu-options" };
const _hoisted_4 = { class: "menu-options" };
const _hoisted_5 = { class: "search-placeholder" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("No results found for: ");
const _hoisted_7 = { class: "search-items-count" };
const _hoisted_8 = { class: "count-label" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "YGroupSelectMenu",
  props: {
    selectedItem: null,
    items: null
  },
  emits: ["selectOption"],
  setup(__props, { emit }) {
    const props = __props;
    const options = reactive(props.items);
    const searchValue = ref("");
    const isSearching = computed(() => searchValue.value.length > 0);
    const hasSubItems = (option) => {
      return typeof option.subItems !== "undefined" && option.subItems.length > 0;
    };
    const searchItems = ref({
      term: "",
      options: []
    });
    const findOptions = (options2, searchTerm) => {
      searchItems.value.options = [];
      searchItems.value.term = searchTerm;
      options2.forEach((option) => {
        const matchingItems = [];
        if (option.label.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          matchingItems.push(option);
        }
        if (hasSubItems(option)) {
          findOptions(launder(option).subItems, searchTerm);
        }
        searchItems.value.options.push(...matchingItems);
      });
    };
    watch(searchValue, () => findOptions(options, searchValue.value));
    const selectOption = (value) => {
      searchValue.value = "";
      emit("selectOption", value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", _hoisted_2, [
          createVNode(YInput, {
            modelValue: searchValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchValue.value = $event),
            "input-type": "text",
            "input-icon": "i-tabler-search",
            placeholder: "Search...",
            "can-reset": true
          }, null, 8, ["modelValue"])
        ]),
        withDirectives(createElementVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(options, (option, index2) => {
            var _a2;
            return openBlock(), createElementBlock(Fragment, null, [
              !hasSubItems(option) ? (openBlock(), createBlock(YSelectOption, {
                key: index2,
                modelValue: options[index2],
                "onUpdate:modelValue": ($event) => options[index2] = $event,
                selected: ((_a2 = __props.selectedItem) == null ? void 0 : _a2.value) === option.value,
                onClick: selectOption
              }, createSlots({
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(option.label), 1)
                ]),
                _: 2
              }, [
                option.icon ? {
                  name: "icon",
                  fn: withCtx(() => [
                    createElementVNode("i", {
                      class: normalizeClass(`${option.icon}`)
                    }, null, 2)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "onUpdate:modelValue", "selected"])) : createCommentVNode("", true)
            ], 64);
          }), 256))
        ], 512), [
          [vShow, !unref(isSearching)]
        ]),
        withDirectives(createElementVNode("div", _hoisted_4, [
          withDirectives(createElementVNode("div", _hoisted_5, [
            createElementVNode("p", null, [
              _hoisted_6,
              createElementVNode("strong", null, toDisplayString(searchValue.value), 1)
            ])
          ], 512), [
            [vShow, searchItems.value.options.length === 0]
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(searchItems.value.options, (option, index2) => {
            var _a2;
            return openBlock(), createElementBlock(Fragment, null, [
              !hasSubItems(option) ? (openBlock(), createBlock(YSelectOption, {
                key: index2,
                modelValue: searchItems.value.options[index2],
                "onUpdate:modelValue": ($event) => searchItems.value.options[index2] = $event,
                selected: ((_a2 = __props.selectedItem) == null ? void 0 : _a2.value) === option.value,
                onClick: selectOption
              }, createSlots({
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(option.label), 1)
                ]),
                _: 2
              }, [
                option.icon ? {
                  name: "icon",
                  fn: withCtx(() => [
                    createElementVNode("i", {
                      class: normalizeClass(`${option.icon}`)
                    }, null, 2)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "onUpdate:modelValue", "selected"])) : createCommentVNode("", true)
            ], 64);
          }), 256))
        ], 512), [
          [vShow, unref(isSearching)]
        ]),
        withDirectives(createElementVNode("div", _hoisted_7, [
          createElementVNode("p", _hoisted_8, " Items count: " + toDisplayString(searchItems.value.options.length), 1)
        ], 512), [
          [vShow, unref(isSearching)]
        ])
      ]);
    };
  }
});
var YGroupSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f7c70ae2"]]);
var YGroupSelectMenu$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": YGroupSelectMenu
}, Symbol.toStringTag, { value: "Module" }));
var YGroupSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7cebce8b"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", { "i-tabler-selector": "" }, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "YGroupSelect",
  props: {
    selectedItem: { default: null },
    items: { default: () => [] }
  },
  setup(__props) {
    const isMenuDisplayed = ref(false);
    const selectedOption = ref(__props.selectedItem);
    const optionToDisplay = computed(() => {
      if (selectedOption.value !== null) {
        return selectedOption.value;
      }
      return "Please select an option";
    });
    const toggleMenu = (state = !isMenuDisplayed.value) => {
      if (isMenuDisplayed.value === state) {
        return;
      }
      isMenuDisplayed.value = state;
    };
    const _group_select = ref();
    onClickOutside(_group_select, () => toggleMenu(false));
    const hello = (value) => {
      toggleMenu(false);
      selectedOption.value = value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "_group_select",
        ref: _group_select,
        class: "group-select"
      }, [
        createVNode(YButton, {
          ref: "select_trigger",
          "icon-position": "right",
          class: "select-trigger",
          onClick: _cache[0] || (_cache[0] = ($event) => toggleMenu())
        }, {
          icon: withCtx(() => [
            _hoisted_1$1
          ]),
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(launder)(unref(optionToDisplay)).label || unref(optionToDisplay)) + " ", 1)
          ]),
          _: 1
        }, 512),
        withDirectives(createVNode(YGroupSelectMenu, mergeProps({ selectedItem: selectedOption.value, items: __props.items }, { onSelectOption: hello }), null, 16), [
          [vShow, isMenuDisplayed.value]
        ])
      ], 512);
    };
  }
});
var YGroupSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7cebce8b"]]);
var YGroupSelect$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": YGroupSelect
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("span", null, "TODO: Implement me", -1);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    renderSlot(_ctx.$slots, "default")
  ]);
}
var YSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var YSelect$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": YSelect
}, Symbol.toStringTag, { value: "Module" }));
var components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  YInput: YInput$2,
  YButton: YButton$1,
  YGroupSelect: YGroupSelect$1,
  YGroupSelectMenu: YGroupSelectMenu$1,
  YSelect: YSelect$1
}, Symbol.toStringTag, { value: "Module" }));
var __uno = "";
var main = "";
const MAGIC_NUM = 100;
var MyConstants = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAGIC_NUM
}, Symbol.toStringTag, { value: "Module" }));
function add(a, b) {
  return a + b;
}
var MyUtil = {
  add
};
function install(app) {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
var index = { install };
export { MyConstants, MyUtil, YButton$1 as YButton, YGroupSelect$1 as YGroupSelect, YGroupSelectMenu$1 as YGroupSelectMenu, YInput$2 as YInput, YSelect$1 as YSelect, index as default };

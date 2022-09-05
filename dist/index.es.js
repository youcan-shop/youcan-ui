import { defineComponent, openBlock, createElementBlock, createTextVNode, toDisplayString, createElementVNode, ref } from "vue";
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("span", { "i-carbon:3d-curve-auto-colon": "" }, "test", -1);
const _hoisted_2 = /* @__PURE__ */ createElementVNode("span", {
  class: "icon-heart",
  style: { "color": "tomato" }
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ComponentA",
  props: {
    msg: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1$1,
        createTextVNode(" Hello " + toDisplayString(__props.msg) + "! ", 1),
        _hoisted_2
      ]);
    };
  }
});
var ComponentB_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "count" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentB",
  setup(__props) {
    const count = ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "counter",
        onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
      }, [
        createElementVNode("span", _hoisted_1, toDisplayString(count.value), 1)
      ]);
    };
  }
});
var ComponentB = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7252aee8"]]);
var components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: _sfc_main$1,
  ComponentB
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
export { _sfc_main$1 as ComponentA, ComponentB, MyConstants, MyUtil, index as default };

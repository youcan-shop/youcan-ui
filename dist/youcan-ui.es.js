import { defineComponent as r, openBlock as l, createElementBlock as a, createTextVNode as u, toDisplayString as p, createElementVNode as c, ref as i } from "vue";
const d = /* @__PURE__ */ c("span", { "i-carbon:3d-curve-auto-colon": "" }, "test", -1), m = /* @__PURE__ */ c("span", {
  class: "icon-heart",
  style: { color: "tomato" }
}, null, -1), f = /* @__PURE__ */ r({
  __name: "ComponentA",
  props: {
    msg: null
  },
  setup(o) {
    return (t, n) => (l(), a("div", null, [
      d,
      u(" Hello " + p(o.msg) + "! ", 1),
      m
    ]));
  }
}), v = { class: "count" }, y = /* @__PURE__ */ r({
  __name: "ComponentB",
  setup(o) {
    const t = i(0);
    return (n, e) => (l(), a("div", {
      class: "counter",
      onClick: e[0] || (e[0] = (s) => t.value++)
    }, [
      c("span", v, p(t.value), 1)
    ]));
  }
});
const C = (o, t) => {
  const n = o.__vccOpts || o;
  for (const [e, s] of t)
    n[e] = s;
  return n;
}, b = /* @__PURE__ */ C(y, [["__scopeId", "data-v-8864da7b"]]), _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: f,
  ComponentB: b
}, Symbol.toStringTag, { value: "Module" }));
const g = 100, B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAGIC_NUM: g
}, Symbol.toStringTag, { value: "Module" }));
function x(o, t) {
  return o + t;
}
const O = {
  add: x
};
function M(o) {
  for (const t in _)
    o.component(t, _[t]);
}
const S = { install: M };
export {
  f as ComponentA,
  b as ComponentB,
  B as MyConstants,
  O as MyUtil,
  S as default
};

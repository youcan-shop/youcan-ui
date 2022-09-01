import { defineComponent as s, openBlock as a, createElementBlock as c, createElementVNode as l, toDisplayString as u } from "vue";
const p = /* @__PURE__ */ s({
  __name: "test",
  props: {
    name: { type: null, required: !0 }
  },
  setup(e) {
    return (n, t) => (a(), c("div", null, [
      l("span", null, "Hello: " + u(e.name), 1)
    ]));
  }
}), _ = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, i = /* @__PURE__ */ _(p, [["__file", "/Users/ahmims/taas/dev/youcan-ui/src/test.vue"]]);
export {
  i as default
};

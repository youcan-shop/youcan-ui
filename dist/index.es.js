import { defineComponent as m, ref as b, computed as y } from "vue";
const C = /* @__PURE__ */ m({
  __name: "Input",
  props: {
    value: null,
    type: null,
    placeholder: null
  },
  emits: ["input", "focus", "blur"],
  setup(u, { emit: e }) {
    const s = u, o = b(s.value), a = y(() => s.type);
    return { __sfc: !0, props: s, emit: e, inputValue: o, inputType: a, onInput: (n) => {
      const t = n.target;
      o.value = t.value, e("input", o.value);
    }, onfocus: () => e("focus"), onblur: () => e("blur") };
  }
});
function g(u, e, s, o, a, i, l, _) {
  var n = typeof u == "function" ? u.options : u;
  e && (n.render = e, n.staticRenderFns = s, n._compiled = !0), o && (n.functional = !0), i && (n._scopeId = "data-v-" + i);
  var t;
  if (l ? (t = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), a && a.call(this, r), r && r._registeredComponents && r._registeredComponents.add(l);
  }, n._ssrRegister = t) : a && (t = _ ? function() {
    a.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), t)
    if (n.functional) {
      n._injectStyles = t;
      var v = n.render;
      n.render = function(h, f) {
        return t.call(f), v(h, f);
      };
    } else {
      var p = n.beforeCreate;
      n.beforeCreate = p ? [].concat(p, t) : [t];
    }
  return {
    exports: u,
    options: n
  };
}
var w = function() {
  var e = this, s = e._self._c, o = e._self._setupProxy;
  return s("input", e._b({ staticClass: "input", attrs: { type: o.inputType, placeholder: e.placeholder }, domProps: { value: o.inputValue }, on: { input: o.onInput, focus: o.onfocus, blur: o.onblur } }, "input", e.$attrs, !1));
}, T = [], $ = /* @__PURE__ */ g(
  C,
  w,
  T,
  !1,
  null,
  "51ef1d17",
  null,
  null
);
const I = $.exports, c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Input: I
}, Symbol.toStringTag, { value: "Module" }));
function d(u) {
  Object.keys(c).forEach((e) => {
    u.use(c[e]);
  });
}
typeof window < "u" && window.Vue && d(window.Vue);
const V = { install: d };
export {
  I as Input,
  V as default
};

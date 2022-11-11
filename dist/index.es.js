import { defineComponent as i, ref as u, computed as v, watchEffect as m, watch as C } from "vue";
const w = /* @__PURE__ */ i({
  __name: "Input",
  props: {
    value: null,
    type: null,
    placeholder: null
  },
  emits: ["input", "focus", "blur"],
  setup(n, { emit: e }) {
    const t = n, s = u(t.value), a = v(() => t.type);
    return { __sfc: !0, props: t, emit: e, inputValue: s, inputType: a, onInput: (l) => {
      const r = l.target;
      s.value = r.value, e("input", s.value);
    }, onfocus: () => e("focus"), onblur: () => e("blur") };
  }
});
function _(n, e, t, s, a, o, c, p) {
  var l = typeof n == "function" ? n.options : n;
  e && (l.render = e, l.staticRenderFns = t, l._compiled = !0), s && (l.functional = !0), o && (l._scopeId = "data-v-" + o);
  var r;
  if (c ? (r = function(d) {
    d = d || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__), a && a.call(this, d), d && d._registeredComponents && d._registeredComponents.add(c);
  }, l._ssrRegister = r) : a && (r = p ? function() {
    a.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), r)
    if (l.functional) {
      l._injectStyles = r;
      var f = l.render;
      l.render = function($, b) {
        return r.call(b), f($, b);
      };
    } else {
      var h = l.beforeCreate;
      l.beforeCreate = h ? [].concat(h, r) : [r];
    }
  return {
    exports: n,
    options: l
  };
}
var I = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("input", e._b({ staticClass: "input", attrs: { type: s.inputType, placeholder: e.placeholder }, domProps: { value: s.inputValue }, on: { input: s.onInput, focus: s.onfocus, blur: s.onblur } }, "input", e.$attrs, !1));
}, P = [], S = /* @__PURE__ */ _(
  w,
  I,
  P,
  !1,
  null,
  "51ef1d17",
  null,
  null
);
const y = S.exports, k = /* @__PURE__ */ i({
  __name: "TextInput",
  props: {
    value: null,
    placeholder: null
  },
  emits: ["input"],
  setup(n, { emit: e }) {
    const t = n, s = u(t.value);
    return { __sfc: !0, props: t, emit: e, inputValue: s, onInput: (o) => {
      const c = o.target;
      s.value = c.value, e("input", s.value);
    }, Input: y };
  }
});
var V = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t(s.Input, { staticClass: "input", attrs: { value: s.inputValue, type: "text", placeholder: e.placeholder }, on: { input: s.onInput } });
}, R = [], B = /* @__PURE__ */ _(
  k,
  V,
  R,
  !1,
  null,
  null,
  null,
  null
);
const F = B.exports, T = /* @__PURE__ */ i({
  __name: "StoreSlugInput",
  props: {
    value: {
      type: String,
      required: !0
    },
    slugSuffix: {
      type: String,
      default: ".youcan.shop"
    },
    placeholder: {
      type: String
    }
  },
  emits: ["input"],
  setup(n, { emit: e }) {
    const t = n, s = u(t.value), a = u(!1);
    return { __sfc: !0, props: t, emit: e, inputValue: s, isPopoverDiplayed: a, onInput: (l) => e("input", l), onfocus: () => a.value = !0, onblur: () => a.value = !1, Input: y };
  }
});
var N = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("div", { staticClass: "store-slug-input" }, [t("div", { staticClass: "input-container" }, [t("Transition", { attrs: { name: "fade" } }, [t("div", { directives: [{ name: "show", rawName: "v-show", value: s.isPopoverDiplayed, expression: "isPopoverDiplayed" }], staticClass: "popover" }, [t("div", { staticClass: "store-slug-box-content" }, [t("div", { staticClass: "box-description" }, [t("p", { staticClass: "store-slug-title" }, [e._v(" Store slug ")]), t("p", { staticClass: "store-slug-description" }, [e._v(" The slug you choose will be your store's domain name that your customers will see. ")]), t("div", { staticClass: "border-example" }, [t("i", { staticClass: "border-icon-example i-tabler-search" }), t("span", { staticClass: "input-border-example" }, [e._v("example.youcan.shop")])])]), t("div", { staticClass: "note" }, [t("div", [t("i", { staticClass: "icon-note i-tabler-alert-circle" })]), t("span", { staticClass: "note-description" }, [e._v(" You can always replace it with a custom domain name you purchased. ")])])])])]), t(s.Input, { staticClass: "input", attrs: { value: s.inputValue, type: "text", placeholder: e.placeholder }, on: { input: s.onInput, focus: s.onfocus, blur: s.onblur } }), t("span", { staticClass: "slug-suffix" }, [e._v(e._s(e.slugSuffix))])], 1)]);
}, H = [], A = /* @__PURE__ */ _(
  T,
  N,
  H,
  !1,
  null,
  "ded3a1df",
  null,
  null
);
const M = A.exports, O = /* @__PURE__ */ i({
  __name: "SelectButton",
  props: {
    value: null,
    placeholder: null
  },
  emits: ["click"],
  setup(n, { emit: e }) {
    const t = n, s = v(() => t.value);
    return { __sfc: !0, props: t, emit: e, selected: s };
  }
});
var D = function() {
  var a;
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("button", { staticClass: "dropdown-input", on: { click: function(o) {
    return s.emit("click");
  } } }, [t("div", { staticClass: "label-item" }, [t("i", { class: [(a = s.selected) == null ? void 0 : a.icon] }), t("span", [e._v(e._s(s.selected ? s.selected.label : e.placeholder))])]), t("i", { staticClass: "i-tabler:chevron-down icon" })]);
}, E = [], L = /* @__PURE__ */ _(
  O,
  D,
  E,
  !1,
  null,
  "c495dafa",
  null,
  null
);
const z = L.exports, U = /* @__PURE__ */ i({
  __name: "SelectMenu",
  props: {
    items: null,
    value: null
  },
  emits: ["input"],
  setup(n, { emit: e }) {
    const t = n, s = u(t.value);
    return m(() => {
      e("input", s.value);
    }), { __sfc: !0, props: t, emit: e, selected: s };
  }
});
var X = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("div", { staticClass: "dropdown-content" }, e._l(e.items, function(a, o) {
    return t("div", { key: o, staticClass: "dropdown-item", on: { click: function(c) {
      s.selected = a;
    } } }, [a.icon ? t("i", { class: a.icon }) : e._e(), a.image ? t("img", { attrs: { src: a.image } }) : e._e(), t("span", [e._v(e._s(a.label))])]);
  }), 0);
}, j = [], q = /* @__PURE__ */ _(
  U,
  X,
  j,
  !1,
  null,
  "5b448638",
  null,
  null
);
const W = q.exports, Y = /* @__PURE__ */ i({
  __name: "Select",
  props: {
    items: null
  },
  setup(n) {
    const e = n, t = u(), s = u(!1);
    return { __sfc: !0, props: e, selected: t, shown: s, SelectButton: z, SelectMenu: W };
  }
});
var G = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("div", { staticClass: "dropdown" }, [t(s.SelectButton, { attrs: { placeholder: "Please select an option" }, on: { click: function(a) {
    s.shown = !s.shown;
  } }, model: { value: s.selected, callback: function(a) {
    s.selected = a;
  }, expression: "selected" } }), t(s.SelectMenu, { directives: [{ name: "show", rawName: "v-show", value: s.shown, expression: "shown" }], attrs: { items: e.items }, model: { value: s.selected, callback: function(a) {
    s.selected = a;
  }, expression: "selected" } })], 1);
}, J = [], K = /* @__PURE__ */ _(
  Y,
  G,
  J,
  !1,
  null,
  "ddb37fa3",
  null,
  null
);
const Q = K.exports, Z = /* @__PURE__ */ i({
  __name: "PasswordInput",
  props: {
    value: null,
    placeholder: null,
    passwordHidden: { type: Boolean }
  },
  emits: ["input"],
  setup(n, { emit: e }) {
    const { value: t, passwordHidden: s = !0 } = n, a = u(), o = u(s), c = u(t);
    return { __sfc: !0, emit: e, baseInput: a, isPasswordHidden: o, inputValue: c, onInput: (l) => {
      e("input", l);
    }, Input: y };
  }
});
var ee = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("div", { staticClass: "password-input" }, [t("button", { on: { click: function(a) {
    s.isPasswordHidden = !s.isPasswordHidden;
  } } }, [t("i", { class: s.isPasswordHidden ? "i-tabler-eye" : "i-tabler-eye-off" })]), t(s.Input, { ref: "baseInput", staticClass: "input", attrs: { type: s.isPasswordHidden ? "password" : "text", placeholder: e.placeholder, value: s.inputValue }, on: { input: s.onInput } })], 1);
}, te = [], se = /* @__PURE__ */ _(
  Z,
  ee,
  te,
  !1,
  null,
  "73d0b220",
  null,
  null
);
const ne = se.exports;
const ae = {};
var le = function() {
  var e = this, t = e._self._c;
  return t("div", { staticClass: "note" }, [t("div", { staticClass: "icon" }, [e._t("icon")], 2), t("div", { staticClass: "content" }, [e._t("content")], 2)]);
}, oe = [], re = /* @__PURE__ */ _(
  ae,
  le,
  oe,
  !1,
  null,
  "cb9f4361",
  null,
  null
);
const ce = re.exports, ue = /* @__PURE__ */ i({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(n, { emit: e }) {
    const t = n, s = u(0), a = u(!1), o = v(() => ({
      strokeDashoffset: `${(100 - s.value) * 2.64}px`,
      transition: a.value ? "all 0.1s ease" : "none"
    }));
    return C(t, () => {
      s.value = 0, a.value = !0;
    }), m(() => {
      const c = t.duration, p = c / 100, l = 100 / (c / p);
      let r = 0;
      a.value = !0;
      const f = setInterval(() => {
        r += l, s.value = r, r >= 100 && (clearInterval(f), a.value = !1, e("complete"));
      }, p);
      return () => clearInterval(f);
    }), { __sfc: !0, props: t, emit: e, progress: s, isAnimationRunning: a, progressStyle: o };
  }
});
var _e = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("div", { staticClass: "loading" }, [t("svg", { staticClass: "loading-svg", attrs: { viewBox: "0 0 100 100" } }, [t("circle", { staticClass: "loading-circle", attrs: { cx: "50", cy: "50", r: "45" } }), t("circle", { staticClass: "loading-circle-progress", style: s.progressStyle, attrs: { cx: "50", cy: "50", r: "45" } })]), t("div", { staticClass: "loading-value" }, [e._v(" " + e._s(`${s.progress}%`) + " ")])]);
}, ie = [], pe = /* @__PURE__ */ _(
  ue,
  _e,
  ie,
  !1,
  null,
  "dbbecf04",
  null,
  null
);
const de = pe.exports, fe = /* @__PURE__ */ i({
  __name: "Checkbox",
  props: {
    value: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["input"],
  setup(n, { emit: e }) {
    const t = n, s = u(t.value);
    return m(() => {
      e("input", s.value);
    }), { __sfc: !0, props: t, emit: e, inputValue: s };
  }
});
var ve = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t("label", { staticClass: "checkbox-container" }, [t("input", { directives: [{ name: "model", rawName: "v-model", value: s.inputValue, expression: "inputValue" }], staticClass: "checkbox-input", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(s.inputValue) ? e._i(s.inputValue, null) > -1 : s.inputValue }, on: { change: function(a) {
    var o = s.inputValue, c = a.target, p = !!c.checked;
    if (Array.isArray(o)) {
      var l = null, r = e._i(o, l);
      c.checked ? r < 0 && (s.inputValue = o.concat([l])) : r > -1 && (s.inputValue = o.slice(0, r).concat(o.slice(r + 1)));
    } else
      s.inputValue = p;
  } } }), t("span", { staticClass: "checkmark" })]);
}, me = [], ye = /* @__PURE__ */ _(
  fe,
  ve,
  me,
  !1,
  null,
  "02d07ed5",
  null,
  null
);
const he = ye.exports, be = /* @__PURE__ */ i({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    return { __sfc: !0, props: n };
  }
});
var ge = function() {
  var e = this, t = e._self._c;
  return t("button", { ref: "target", staticClass: "button", class: { disabled: e.disabled }, attrs: { disabled: e.disabled } }, [t("span", { staticClass: "text" }, [e._t("default")], 2)]);
}, xe = [], $e = /* @__PURE__ */ _(
  be,
  ge,
  xe,
  !1,
  null,
  "4695437a",
  null,
  null
);
const Ce = $e.exports, we = /* @__PURE__ */ i({
  __name: "PrimaryButton",
  setup(n) {
    return { __sfc: !0, Button: Ce };
  }
});
var Ie = function() {
  var e = this, t = e._self._c, s = e._self._setupProxy;
  return t(s.Button, e._b({ ref: "target", staticClass: "primary" }, "Button", e.$attrs, !1), [e._t("default")], 2);
}, Pe = [], Se = /* @__PURE__ */ _(
  we,
  Ie,
  Pe,
  !1,
  null,
  "99aecff6",
  null,
  null
);
const ke = Se.exports, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: F,
  StoreSlugInput: M,
  Select: Q,
  PasswordInput: ne,
  Note: ce,
  Loading: de,
  Checkbox: he,
  PrimaryButton: ke
}, Symbol.toStringTag, { value: "Module" }));
function x(n) {
  Object.keys(g).forEach((e) => {
    n.component(e, g[e]);
  });
}
typeof window < "u" && window.Vue && x(window.Vue);
const Re = { install: x };
export {
  he as Checkbox,
  de as Loading,
  ce as Note,
  ne as PasswordInput,
  ke as PrimaryButton,
  Q as Select,
  M as StoreSlugInput,
  F as TextInput,
  Re as default
};

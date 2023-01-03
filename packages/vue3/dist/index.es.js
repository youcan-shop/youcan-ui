import { unref as m, ref as g, watch as V, customRef as Ee, getCurrentScope as ze, onScopeDispose as Pe, computed as S, defineComponent as $, openBlock as d, createElementBlock as _, createElementVNode as p, normalizeClass as E, toDisplayString as le, pushScopeId as W, popScopeId as G, Fragment as L, renderList as q, createCommentVNode as F, renderSlot as x, watchEffect as xe, createVNode as z, withDirectives as X, vShow as Oe, normalizeStyle as P, useSlots as ae, mergeProps as re, isRef as J, vModelCheckbox as Ve, createBlock as Q, withCtx as B, useAttrs as Se, onBeforeMount as ce, vModelText as ke, onUnmounted as Me, useCssVars as Y, onMounted as Z, withModifiers as ue, nextTick as te, onUpdated as Te } from "vue";
const ee = typeof window < "u", _e = (e) => typeof e < "u", pe = (e) => typeof e == "function", Re = (e) => typeof e == "string", Le = () => {
};
function Ae(e) {
  return typeof e == "function" ? e() : m(e);
}
function De(e) {
  return e;
}
function Ne(e, t) {
  let o, n, s;
  const a = g(!0), r = () => {
    a.value = !0, s();
  };
  V(e, r, { flush: "sync" });
  const l = pe(t) ? t : t.get, i = pe(t) ? void 0 : t.set, c = Ee((u, f) => (n = u, s = f, {
    get() {
      return a.value && (o = l(), a.value = !1), n(), o;
    },
    set(w) {
      i == null || i(w);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = r), c;
}
function He(e) {
  return ze() ? (Pe(e), !0) : !1;
}
function T(e) {
  var t;
  const o = Ae(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ie = ee ? window : void 0;
ee && window.document;
ee && window.navigator;
ee && window.location;
function R(...e) {
  let t, o, n, s;
  if (Re(e[0]) || Array.isArray(e[0]) ? ([o, n, s] = e, t = ie) : [t, o, n, s] = e, !t)
    return Le;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const a = [], r = () => {
    a.forEach((u) => u()), a.length = 0;
  }, l = (u, f, w) => (u.addEventListener(f, w, s), () => u.removeEventListener(f, w, s)), i = V(() => T(t), (u) => {
    r(), u && a.push(...o.flatMap((f) => n.map((w) => l(u, f, w))));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), r();
  };
  return He(c), c;
}
function Ue(e, t, o = {}) {
  const { window: n = ie, ignore: s = [], capture: a = !0, detectIframe: r = !1 } = o;
  if (!n)
    return;
  let l = !0, i;
  const c = (v) => s.some((h) => {
    if (typeof h == "string")
      return Array.from(n.document.querySelectorAll(h)).some((y) => y === v.target || v.composedPath().includes(y));
    {
      const y = T(h);
      return y && (v.target === y || v.composedPath().includes(y));
    }
  }), u = (v) => {
    n.clearTimeout(i);
    const h = T(e);
    if (!(!h || h === v.target || v.composedPath().includes(h))) {
      if (v.detail === 0 && (l = !c(v)), !l) {
        l = !0;
        return;
      }
      t(v);
    }
  }, f = [
    R(n, "click", u, { passive: !0, capture: a }),
    R(n, "pointerdown", (v) => {
      const h = T(e);
      h && (l = !v.composedPath().includes(h) && !c(v));
    }, { passive: !0 }),
    R(n, "pointerup", (v) => {
      if (v.button === 0) {
        const h = v.composedPath();
        v.composedPath = () => h, i = n.setTimeout(() => u(v), 50);
      }
    }, { passive: !0 }),
    r && R(n, "blur", (v) => {
      var h;
      const y = T(e);
      ((h = n.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(y != null && y.contains(n.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function je(e = {}) {
  const { window: t = ie } = e, o = Ne(() => null, () => t == null ? void 0 : t.document.activeElement);
  return t && (R(t, "blur", (n) => {
    n.relatedTarget !== null && o.trigger();
  }, !0), R(t, "focus", o.trigger, !0)), o;
}
const ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fe = "__vueuse_ssr_handlers__";
ve[fe] = ve[fe] || {};
function Ie(e, t = {}) {
  const { initialValue: o = !1 } = t, n = je(t), s = S(() => T(e)), a = S({
    get() {
      return _e(n.value) && _e(s.value) && n.value === s.value;
    },
    set(r) {
      var l, i;
      !r && a.value && ((l = s.value) == null || l.blur()), r && !a.value && ((i = s.value) == null || i.focus());
    }
  });
  return V(s, () => {
    a.value = o;
  }, { immediate: !0, flush: "post" }), { focused: a };
}
var me;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(me || (me = {}));
var qe = Object.defineProperty, he = Object.getOwnPropertySymbols, We = Object.prototype.hasOwnProperty, Ge = Object.prototype.propertyIsEnumerable, ge = (e, t, o) => t in e ? qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Qe = (e, t) => {
  for (var o in t || (t = {}))
    We.call(t, o) && ge(e, o, t[o]);
  if (he)
    for (var o of he(t))
      Ge.call(t, o) && ge(e, o, t[o]);
  return e;
};
const Ke = {
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
Qe({
  linear: De
}, Ke);
const Xe = (e) => (W("data-v-adc57234"), e = e(), G(), e), Je = { class: "label-item" }, Ye = /* @__PURE__ */ Xe(() => /* @__PURE__ */ p("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Ze = /* @__PURE__ */ $({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, n = S(() => o.item), s = g();
    return Ue(s, () => t("clickOutside")), (a, r) => {
      var l;
      return d(), _("button", {
        ref_key: "_dropdown_trigger",
        ref: s,
        class: "dropdown-input",
        onClick: r[0] || (r[0] = (i) => t("click"))
      }, [
        p("div", Je, [
          p("i", {
            class: E([(l = m(n)) == null ? void 0 : l.icon])
          }, null, 2),
          p("span", null, le(m(n) ? m(n).label : e.placeholder || "Please select an option"), 1)
        ]),
        Ye
      ], 512);
    };
  }
});
const b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, et = /* @__PURE__ */ b(Ze, [["__scopeId", "data-v-adc57234"]]), tt = { class: "dropdown-content" }, ot = ["onClick"], nt = ["src"], st = {
  key: 2,
  class: "icon i-tabler:check"
}, lt = {
  key: 1,
  class: "no-results"
}, at = /* @__PURE__ */ $({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = g(e.modelValue), s = (a) => {
      n.value = a, t("update:modelValue", n.value);
    };
    return (a, r) => (d(), _("div", tt, [
      e.items.length > 0 ? (d(!0), _(L, { key: 0 }, q(e.items, (l) => (d(), _("div", {
        key: l.label,
        class: "dropdown-item",
        onClick: (i) => s(l)
      }, [
        l.icon ? (d(), _("i", {
          key: 0,
          class: E(l.icon)
        }, null, 2)) : F("", !0),
        l.image ? (d(), _("img", {
          key: 1,
          src: l.image,
          class: "image"
        }, null, 8, nt)) : F("", !0),
        p("span", null, le(l.label), 1),
        l && n.value && l.value === n.value.value ? (d(), _("i", st)) : F("", !0)
      ], 8, ot))), 128)) : (d(), _("div", lt, [
        x(a.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const rt = /* @__PURE__ */ b(at, [["__scopeId", "data-v-2f74106b"]]), ct = { class: "dropdown" }, ut = /* @__PURE__ */ $({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: n, placeholder: s } = e, a = S(() => o), r = g(), l = g(!1), i = (c) => {
      c && (r.value = c, t("update:modelValue", r.value.value), l.value = !1);
    };
    return xe(() => r.value = n.find((c) => c.value === a.value)), (c, u) => (d(), _("div", ct, [
      z(et, {
        item: r.value,
        placeholder: e.placeholder,
        onClick: u[0] || (u[0] = (f) => l.value = !l.value),
        onClickOutside: u[1] || (u[1] = (f) => l.value = !1)
      }, null, 8, ["item", "placeholder"]),
      X(z(rt, {
        "model-value": r.value,
        items: e.items,
        "onUpdate:modelValue": i
      }, null, 8, ["model-value", "items"]), [
        [Oe, l.value]
      ])
    ]));
  }
});
const it = /* @__PURE__ */ b(ut, [["__scopeId", "data-v-a4109ef5"]]);
const dt = {}, _t = { class: "note" }, pt = { class: "icon" }, vt = { class: "content" };
function ft(e, t) {
  return d(), _("div", _t, [
    p("div", pt, [
      x(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    p("div", vt, [
      x(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const mt = /* @__PURE__ */ b(dt, [["render", ft], ["__scopeId", "data-v-5be167d4"]]), ht = (e) => (W("data-v-dbbecf04"), e = e(), G(), e), gt = { class: "loading" }, yt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, bt = /* @__PURE__ */ ht(() => /* @__PURE__ */ p("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), $t = { class: "loading-value" }, wt = /* @__PURE__ */ $({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const o = e, n = g(0), s = g(!1), a = S(() => ({
      strokeDashoffset: `${(100 - n.value) * 2.64}px`,
      transition: s.value ? "all 0.1s ease" : "none"
    }));
    return V(o, () => {
      n.value = 0, s.value = !0;
    }), xe(() => {
      const r = o.duration, l = r / 100, i = 100 / (r / l);
      let c = 0;
      s.value = !0;
      const u = setInterval(() => {
        c += i, n.value = c, c >= 100 && (clearInterval(u), s.value = !1, t("complete"));
      }, l);
      return () => clearInterval(u);
    }), (r, l) => (d(), _("div", gt, [
      (d(), _("svg", yt, [
        bt,
        p("circle", {
          class: "loading-circle-progress",
          style: P(m(a)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      p("div", $t, le(`${n.value}%`), 1)
    ]));
  }
});
const xt = /* @__PURE__ */ b(wt, [["__scopeId", "data-v-dbbecf04"]]);
function M(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function oe(e) {
  return function t(o) {
    return arguments.length === 0 || M(o) ? t : e.apply(this, arguments);
  };
}
function St(e) {
  return function t(o, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return M(o) ? t : oe(function(s) {
          return e(o, s);
        });
      default:
        return M(o) && M(n) ? t : M(o) ? oe(function(s) {
          return e(s, n);
        }) : M(n) ? oe(function(s) {
          return e(o, s);
        }) : e(o, n);
    }
  };
}
var kt = /* @__PURE__ */ St(function(t, o) {
  return o instanceof t || o != null && (o.constructor === t || t.name === "Object" && typeof o == "object");
});
const ye = kt, It = (e) => e;
function Ct(e) {
  return e;
}
const Bt = {
  __proto__: null,
  templatify: It,
  l: Ct
};
function Ft(e) {
  return e + Date.now().toString(36).substring(4) + Math.random().toString(36).substring(2);
}
function Et(e) {
  return function(t) {
    return t.reduce(
      (o, n, s, a) => (o[e(n, s, a) ? 0 : 1].push(n), o),
      [[], []]
    );
  };
}
const zt = {
  __proto__: null,
  uid: Ft,
  partition: Et
}, Pt = { ...Bt, ...zt }, se = "#000000", de = "#FFFFFF", Ot = "#CCD5DB", Ce = (e) => {
  const t = e * 2, o = document.createElement("canvas"), n = o.getContext("2d", { willReadFrequently: !0 });
  return o.width = t, o.height = t, n.fillStyle = de, n.fillRect(0, 0, t, t), n.fillStyle = Ot, n.fillRect(0, 0, e, e), n.fillRect(e, e, e, e), o;
}, be = (e, t, o, n, s, a = "left") => {
  const r = a === "left", l = e.createLinearGradient(
    0,
    0,
    r ? t : 0,
    r ? 0 : o
  );
  l.addColorStop(0.01, n), l.addColorStop(0.99, s), e.fillStyle = l, e.fillRect(0, 0, t, o);
}, Vt = (e, t, o, n, s) => {
  const a = e.createLinearGradient(
    0,
    0,
    t,
    0
  );
  a.addColorStop(0.01, n), a.addColorStop(0.99, s), e.fillStyle = a, e.fillRect(0, 0, t, o);
}, Mt = (e, t) => {
  const o = e.createLinearGradient(0, 0, t, 0);
  return o.addColorStop(0, "#FF0000"), o.addColorStop(0.17 * 1, "#FF00FF"), o.addColorStop(0.17 * 2, "#0000FF"), o.addColorStop(0.17 * 3, "#00FFFF"), o.addColorStop(0.17 * 4, "#00FF00"), o.addColorStop(0.17 * 5, "#FFFF00"), o.addColorStop(1, "#FF0000"), o;
}, A = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}, ne = (e) => parseInt(e, 16) || 0, Tt = ({ r: e, g: t, b: o }) => `#${A(e)}${A(t)}${A(o)}`.toUpperCase(), Rt = ({ r: e, g: t, b: o, a: n }) => {
  const s = (n * 255 | 256).toString(16).slice(1);
  return `#${A(e)}${A(t)}${A(o)}${s}`.toUpperCase();
}, Lt = (e) => (e = e.startsWith("#") ? e.slice(1) : e, {
  r: ne(e.slice(0, 2)),
  g: ne(e.slice(2, 4)),
  b: ne(e.slice(4, 6))
}), $e = (e) => {
  const t = (/rgba?\((.*?)\)/.exec(e) || ["", "0,0,0,1"])[1].split(",");
  return {
    r: Number(t[0]) || 0,
    g: Number(t[1]) || 0,
    b: Number(t[2]) || 0,
    a: Number(t[3] ?? 1)
  };
}, At = (e) => {
  const { r: t, g: o, b: n } = {
    r: e.r / 255,
    g: e.g / 255,
    b: e.b / 255
  }, s = Math.max(t, o, n), a = Math.min(t, o, n), r = s - a;
  let l = 0;
  s === a ? l = 0 : s === t ? o >= n ? l = 60 * (o - n) / r : l = 60 * (o - n) / r + 360 : s === o ? l = 60 * (n - t) / r + 120 : s === n && (l = 60 * (t - o) / r + 240), l = Math.floor(l);
  const i = parseFloat((s === 0 ? 0 : 1 - a / s).toFixed(2)), c = parseFloat(s.toFixed(2));
  return { h: l, s: i, v: c };
}, j = (e) => {
  let t = { r: 0, g: 0, b: 0, a: 1 };
  if (/#/.test(e))
    t = { ...Lt(e), a: 1 };
  else if (/rgb/.test(e))
    t = $e(e);
  else if (ye(String)(e))
    t = $e(`rgba(${e})`);
  else if (ye(Object)(e)) {
    const n = "a" in e ? e.a : 1;
    t = { ...e, a: n };
  }
  const o = At(t);
  return { ...t, ...o, a: t.a ?? 1 };
}, Dt = (e) => (W("data-v-f8b74f22"), e = e(), G(), e), Nt = ["for"], Ht = { class: "checkbox" }, Ut = ["id"], jt = /* @__PURE__ */ Dt(() => /* @__PURE__ */ p("span", { class: "checkmark" }, [
  /* @__PURE__ */ p("i", { "i-youcan-checkmark": "" })
], -1)), qt = {
  key: 0,
  class: "label"
}, Wt = /* @__PURE__ */ $({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = ae(), s = S({
      get: () => o.modelValue,
      set: (r) => t("update:modelValue", r)
    }), a = Pt.uid("checkbox");
    return (r, l) => (d(), _("label", { for: m(a) }, [
      p("div", Ht, [
        X(p("input", re(r.$attrs, {
          id: m(a),
          "onUpdate:modelValue": l[0] || (l[0] = (i) => J(s) ? s.value = i : null),
          tabindex: "0",
          type: "checkbox",
          class: "input"
        }), null, 16, Ut), [
          [Ve, m(s)]
        ]),
        jt
      ]),
      m(n).label ? (d(), _("div", qt, [
        x(r.$slots, "label", {}, void 0, !0)
      ])) : F("", !0)
    ], 8, Nt));
  }
});
const Gt = /* @__PURE__ */ b(Wt, [["__scopeId", "data-v-f8b74f22"]]), Qt = ["disabled"], Kt = {
  key: 0,
  class: "icon"
}, Xt = { class: "text" }, Jt = /* @__PURE__ */ $({
  __name: "_BaseButton",
  props: {
    size: null,
    disabled: { type: Boolean, default: !1 },
    iconPosition: { default: "left" },
    roundedFull: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = ae();
    return (o, n) => (d(), _("button", {
      ref: "button",
      class: E(["base-button", { "rounded-full": e.roundedFull, [`size-${e.size}`]: !0, [`icon-${e.iconPosition}`]: !0 }]),
      disabled: e.disabled
    }, [
      m(t).icon ? (d(), _("span", Kt, [
        x(o.$slots, "icon", {}, void 0, !0)
      ])) : F("", !0),
      p("span", Xt, [
        x(o.$slots, "default", {}, void 0, !0)
      ])
    ], 10, Qt));
  }
});
const K = /* @__PURE__ */ b(Jt, [["__scopeId", "data-v-a91f21bf"]]), Yt = /* @__PURE__ */ $({
  __name: "PrimaryButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), Q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: B(() => [
        x(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: B(() => [
        x(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const Zt = /* @__PURE__ */ b(Yt, [["__scopeId", "data-v-fd7bb83b"]]), eo = /* @__PURE__ */ $({
  __name: "SecondaryButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), Q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: B(() => [
        x(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: B(() => [
        x(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const to = /* @__PURE__ */ b(eo, [["__scopeId", "data-v-94c05954"]]), oo = /* @__PURE__ */ $({
  __name: "PrimaryDestructiveButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), Q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: B(() => [
        x(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: B(() => [
        x(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const no = /* @__PURE__ */ b(oo, [["__scopeId", "data-v-b9e987a7"]]), so = /* @__PURE__ */ $({
  __name: "SecondaryDestructiveButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), Q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: B(() => [
        x(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: B(() => [
        x(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const lo = /* @__PURE__ */ b(so, [["__scopeId", "data-v-0f26d79c"]]), ao = /* @__PURE__ */ $({
  __name: "TertiaryButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), Q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: B(() => [
        x(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: B(() => [
        x(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const ro = /* @__PURE__ */ b(ao, [["__scopeId", "data-v-5e0a8377"]]);
const co = {}, uo = { class: "prefix" };
function io(e, t) {
  return d(), _("div", uo, " Prefix ");
}
const _o = /* @__PURE__ */ b(co, [["render", io], ["__scopeId", "data-v-9b604abd"]]), po = {
  key: 0,
  class: "prefix"
}, vo = { class: "tail" }, fo = {
  key: 0,
  class: "icon"
}, mo = {
  key: 1,
  class: "suffix"
}, ho = /* @__PURE__ */ $({
  __name: "Input",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = g(), s = ae(), a = Se(), { focused: r } = Ie(n), l = S({
      get: () => o.modelValue,
      set: (i) => t("update:modelValue", i)
    });
    return ce(() => {
      if (!s.prefix)
        return;
      const i = s.prefix()[0].type;
      if (!(typeof i != "symbol" && [_o].find((c) => c === i)))
        throw new TypeError("Invalid prefix");
    }), (i, c) => (d(), _("div", {
      class: E([{ enabled: !m(a).disabled, focused: m(r), error: e.error }, "wrapper"])
    }, [
      m(s).prefix ? (d(), _("div", po, [
        x(i.$slots, "prefix", {}, void 0, !0)
      ])) : F("", !0),
      X(p("input", re({
        ref_key: "primitive",
        ref: n,
        "onUpdate:modelValue": c[0] || (c[0] = (u) => J(l) ? l.value = u : null),
        class: "input",
        type: "text"
      }, i.$attrs), null, 16), [
        [ke, m(l)]
      ]),
      p("div", vo, [
        m(s).icon ? (d(), _("div", fo, [
          x(i.$slots, "icon", {}, void 0, !0)
        ])) : F("", !0),
        m(s).suffix ? (d(), _("div", mo, [
          x(i.$slots, "suffix", {}, void 0, !0)
        ])) : F("", !0)
      ])
    ], 2));
  }
});
const Be = /* @__PURE__ */ b(ho, [["__scopeId", "data-v-cfaee079"]]), go = { class: "override" }, yo = /* @__PURE__ */ $({
  __name: "Override",
  props: {
    color: { default: "" }
  },
  emits: ["overridecolor"],
  setup(e, { emit: t }) {
    const o = e, n = S({
      get: () => o.color,
      set: (s) => t("overridecolor", s.startsWith("#") ? s : `#${s}`)
    });
    return (s, a) => (d(), _("div", go, [
      z(Be, {
        modelValue: m(n),
        "onUpdate:modelValue": a[0] || (a[0] = (r) => J(n) ? n.value = r : null),
        class: "value/"
      }, null, 8, ["modelValue"])
    ]));
  }
}), bo = {
  key: 0,
  class: "swatch-wrapper storage"
}, $o = { class: "swatches storage" }, wo = ["onClick"], xo = { class: "swatches" }, So = ["onClick"], ko = /* @__PURE__ */ $({
  __name: "Swatches",
  props: {
    color: { default: de },
    defaultSwatches: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const o = e, n = "youcan-theme-editor-colors", s = g(Ce(4).toDataURL()), a = g([]);
    localStorage && n && (a.value = JSON.parse(localStorage.getItem(n)) || []);
    const r = (i) => {
      if (!i)
        return;
      const c = a.value || [], u = c.indexOf(i);
      u >= 0 && c.splice(u, 1), c.length >= 7 && c.pop(), c.unshift(i), a.value = c || [], localStorage && n && localStorage.setItem(n, JSON.stringify(c));
    }, l = (i) => {
      t("setcolor", i);
    };
    return Me(() => r(o.color)), (i, c) => (d(), _(L, null, [
      a.value.length ? (d(), _("div", bo, [
        p("div", $o, [
          (d(!0), _(L, null, q(a.value, (u) => (d(), _("div", {
            key: u,
            class: "swatch",
            onClick: (f) => l(u)
          }, [
            p("div", {
              style: P({ background: `url(${s.value})` }),
              class: "alpha"
            }, null, 4),
            p("div", {
              style: P({ background: u }),
              class: "color"
            }, null, 4)
          ], 8, wo))), 128))
        ])
      ])) : F("", !0),
      p("div", xo, [
        (d(!0), _(L, null, q(e.defaultSwatches, (u) => (d(), _("div", {
          key: u,
          class: "swatch",
          onClick: (f) => l(u)
        }, [
          p("div", {
            style: P({ background: `url(${s.value})` }),
            class: "alpha"
          }, null, 4),
          p("div", {
            style: P({ background: u }),
            class: "color"
          }, null, 4)
        ], 8, So))), 128))
      ])
    ], 64));
  }
});
const Io = /* @__PURE__ */ b(ko, [["__scopeId", "data-v-8846510d"]]), Co = ["onMousedown"], Bo = /* @__PURE__ */ $({
  __name: "Saturation",
  props: {
    color: { default: se },
    hsv: null,
    size: { default: 152 }
  },
  emits: ["setsaturation"],
  setup(e, { expose: t, emit: o }) {
    const n = e;
    Y((u) => ({
      "8f5329ec": `${e.size}px`
    }));
    const s = g(), a = g(), r = g({}), l = () => {
      const u = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = n.size, a.value.height = n.size, u.fillStyle = n.color, u.fillRect(0, 0, n.size, n.size), be(u, n.size, n.size, de, "rgba(255, 255, 255, 0)"), be(u, n.size, n.size, "rgba(0, 0, 0, 0)", se, "right");
    }, i = () => {
      r.value = {
        left: `${n.hsv.s * n.size - 5}px`,
        top: `${(1 - n.hsv.v) * n.size - 5}px`
      };
    }, c = (u) => {
      const { top: f, left: w } = s.value.getBoundingClientRect(), v = u.target.getContext("2d", { willReadFrequently: !0 });
      function h(O) {
        let I = O.clientX - w, k = O.clientY - f;
        I < 0 && (I = 0), k < 0 && (k = 0), I > n.size && (I = n.size), k > n.size && (k = n.size), r.value = {
          left: `${I - 10}px`,
          top: `${k - 10}px`
        };
        const D = v.getImageData(Math.min(I, n.size - 1), Math.min(k, n.size - 1), 1, 1), [N, H, U] = D.data;
        o("setsaturation", { r: N, g: H, b: U });
      }
      h(u);
      const y = () => {
        document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", y);
      };
      document.addEventListener("mousemove", h), document.addEventListener("mouseup", y);
    };
    return Z(() => {
      l(), i();
    }), t({ renderColor: l, renderSlider: i }), (u, f) => (d(), _("div", {
      ref_key: "wrapper",
      ref: s,
      class: "saturation-wrapper",
      onMousedown: ue(c, ["prevent", "stop"])
    }, [
      p("canvas", {
        ref_key: "canvas",
        ref: a,
        class: "canvas"
      }, null, 512),
      p("i", {
        "i-youcan-pointer": "",
        style: P(r.value),
        class: "slider"
      }, null, 4)
    ], 40, Co));
  }
});
const Fo = /* @__PURE__ */ b(Bo, [["__scopeId", "data-v-9912972f"]]), Eo = ["onMousedown"], zo = /* @__PURE__ */ $({
  __name: "Hue",
  props: {
    hsv: null,
    width: { default: 15 },
    height: { default: 152 }
  },
  emits: ["sethue"],
  setup(e, { expose: t, emit: o }) {
    const { hsv: n, width: s, height: a } = e;
    Y((w) => ({
      da20afe6: `${s}px`,
      fe3c5554: `${a}px`
    }));
    const r = g(), l = g(), i = g({}), c = () => {
      const w = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = s, l.value.height = a;
      const v = Mt(w, s);
      w.fillStyle = v, w.fillRect(0, 0, s, a);
    }, u = () => {
      i.value = {
        left: `${(1 - n.h / 360) * s - 2}px`
      };
    }, f = (w) => {
      const { left: v } = r.value.getBoundingClientRect(), h = l.value.getContext("2d", { willReadFrequently: !0 });
      function y(I) {
        let k = I.clientX - v;
        k < 0 && (k = 0), k > s && (k = s), i.value = {
          left: `${k - 12}px`
        };
        const D = h.getImageData(Math.min(k, s - 1), 1, 1, 1), [N, H, U] = D.data;
        o("sethue", { r: N, g: H, b: U });
      }
      y(w);
      const O = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", O);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", O);
    };
    return Z(() => {
      c(), u();
    }), t({ renderColor: c, renderSlider: u }), (w, v) => (d(), _("div", {
      ref_key: "wrapper",
      ref: r,
      class: "hue-wrapper",
      onMousedown: ue(f, ["prevent", "stop"])
    }, [
      p("canvas", {
        ref_key: "canvas",
        ref: l,
        class: "canvas"
      }, null, 512),
      p("i", {
        "i-youcan-pointer": "",
        style: P(i.value),
        class: "slider"
      }, null, 4)
    ], 40, Eo));
  }
});
const Po = /* @__PURE__ */ b(zo, [["__scopeId", "data-v-c1489598"]]), Oo = ["onMousedown"], Vo = /* @__PURE__ */ $({
  __name: "Alpha",
  props: {
    color: { default: se },
    rgba: null,
    height: { default: 152 },
    width: { default: 15 }
  },
  emits: ["setalpha"],
  setup(e, { emit: t }) {
    const o = e;
    Y((u) => ({
      "726d72ca": `${e.width}px`,
      "6f87eef0": `${e.height}px`
    }));
    const n = 5, s = g(), a = g(), r = g({}), l = () => {
      const u = Ce(n), f = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = o.width, a.value.height = o.height, f.fillStyle = f.createPattern(u, "repeat"), f.fillRect(0, 0, o.width, o.height), Vt(f, o.width, o.height, "rgba(255, 255, 255, 0)", o.color);
    }, i = () => {
      r.value = {
        left: `${o.rgba.a * o.width - 12}px`
      };
    }, c = (u) => {
      const { left: f } = s.value.getBoundingClientRect();
      function w(h) {
        let y = h.clientX - f;
        y < 0 && (y = 0), y > o.width && (y = o.width), t("setalpha", parseFloat((y / o.width).toFixed(2)));
      }
      w(u);
      const v = () => {
        document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", v);
      };
      document.addEventListener("mousemove", w), document.addEventListener("mouseup", v);
    };
    return Z(() => {
      l(), i();
    }), V(() => o.color, () => l()), V(() => o.rgba, () => i()), (u, f) => (d(), _("div", {
      ref_key: "wrapper",
      ref: s,
      class: "alpha-wrapper",
      onMousedown: ue(c, ["prevent", "stop"])
    }, [
      p("canvas", {
        ref_key: "canvas",
        ref: a,
        class: "canvas"
      }, null, 512),
      p("i", {
        "i-youcan-pointer": "",
        style: P(r.value),
        class: "slider"
      }, null, 4)
    ], 40, Oo));
  }
});
const Mo = /* @__PURE__ */ b(Vo, [["__scopeId", "data-v-85346e4b"]]), Fe = (e) => (W("data-v-9c84931e"), e = e(), G(), e), To = { class: "color-picker" }, Ro = { class: "sliders" }, Lo = { class: "color-override" }, Ao = /* @__PURE__ */ Fe(() => /* @__PURE__ */ p("label", null, "HEX", -1)), Do = /* @__PURE__ */ Fe(() => /* @__PURE__ */ p("hr", null, null, -1)), No = { class: "swatches" }, Ho = /* @__PURE__ */ $({
  __name: "ColorPicker",
  props: {
    color: { default: "#000000" },
    defaults: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const { color: o, defaults: n } = e, s = g(), a = g(), r = g(""), l = g(""), i = g(""), c = g({ r: 0, g: 0, b: 0, a: 1, h: 0, s: 0, v: 0 }), u = S(() => ({ r: c.value.r, g: c.value.g, b: c.value.b, a: c.value.a })), f = S(() => ({ h: c.value.h, s: c.value.s, v: c.value.v })), w = S(() => Tt(u.value)), v = S(() => Rt(u.value)), h = S(() => `${c.value.r}, ${c.value.g}, ${c.value.b}, ${c.value.a}`), y = S(() => `rgb(${c.value.r}, ${c.value.g}, ${c.value.b})`), O = S(() => `rgba(${h.value})`), I = () => {
      r.value = w.value, i.value = h.value, l.value = v.value;
    };
    Z(() => {
      c.value = j(o), I();
    });
    const k = (C) => {
      c.value = j(C), I();
    }, D = (C) => {
      c.value = j(C), I(), te(() => {
        s.value.renderColor(), s.value.renderSlider();
      });
    }, N = (C) => {
      c.value.a = C, I();
    }, H = (C) => {
      c.value = j(C), r.value = C, i.value = h.value, te(() => {
        a.value.renderSlider(), s.value.renderColor(), s.value.renderSlider();
      });
    }, U = (C) => {
      c.value = j(C), I(), te(() => {
        a.value.renderSlider(), s.value.renderColor(), s.value.renderSlider();
      });
    };
    return V(
      u,
      () => t("setcolor", { rgba: u.value, hsv: f.value, hex: r.value, hexa: l.value })
    ), (C, pn) => (d(), _("div", To, [
      z(Fo, {
        ref_key: "saturationElement",
        ref: s,
        class: "color-saturation",
        color: m(y),
        hsv: m(f),
        size: 224,
        onSetsaturation: k
      }, null, 8, ["color", "hsv"]),
      p("div", Ro, [
        z(Po, {
          ref_key: "hueElement",
          ref: a,
          class: "color-hue",
          hsv: m(f),
          width: 224,
          height: 10,
          onSethue: D
        }, null, 8, ["hsv"]),
        z(Mo, {
          class: "color-alpha",
          color: m(y),
          rgba: m(u),
          width: 224,
          height: 10,
          onSetalpha: N
        }, null, 8, ["color", "rgba"])
      ]),
      p("div", Lo, [
        Ao,
        z(yo, {
          class: "hex-input",
          type: "#",
          color: l.value,
          onOverridecolor: H
        }, null, 8, ["color"])
      ]),
      Do,
      p("div", No, [
        z(Io, {
          color: m(O),
          "default-swatches": n,
          onSetcolor: U
        }, null, 8, ["color"])
      ])
    ]));
  }
});
const Uo = /* @__PURE__ */ b(Ho, [["__scopeId", "data-v-9c84931e"]]), jo = ["aria-checked"], qo = /* @__PURE__ */ $({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = S({
      get: () => o.modelValue,
      set: (s) => t("update:modelValue", s)
    });
    return (s, a) => (d(), _("button", {
      "aria-label": "toggle button",
      class: "toggle",
      role: "switch",
      type: "button",
      "aria-checked": m(n),
      onClick: a[0] || (a[0] = (r) => n.value = !m(n))
    }, null, 8, jo));
  }
});
const Wo = /* @__PURE__ */ b(qo, [["__scopeId", "data-v-edc61bd0"]]), Go = /* @__PURE__ */ $({
  __name: "TextArea",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = g(), s = Se(), { focused: a } = Ie(n), r = S({
      get: () => o.modelValue,
      set: (l) => {
        t("update:modelValue", l);
      }
    });
    return (l, i) => (d(), _("div", {
      class: E([{ enabled: !m(s).disabled, focused: m(a), error: e.error }, "wrapper"])
    }, [
      X(p("textarea", re({
        ref_key: "primitive",
        ref: n,
        "onUpdate:modelValue": i[0] || (i[0] = (c) => J(r) ? r.value = c : null),
        class: "textarea"
      }, l.$attrs), null, 16), [
        [ke, m(r)]
      ])
    ], 2));
  }
});
const Qo = /* @__PURE__ */ b(Go, [["__scopeId", "data-v-94a29861"]]), Ko = { class: "rating" }, Xo = /* @__PURE__ */ $({
  __name: "Rating",
  props: {
    ceil: { default: 5 },
    score: { default: 0 }
  },
  setup(e) {
    const t = e;
    return ce(() => {
      if (t.score > t.ceil)
        throw new Error(
          "The rating's ceil must be higher than or equal to the score."
        );
    }), (o, n) => (d(), _("div", Ko, [
      (d(!0), _(L, null, q(e.ceil, (s) => (d(), _("i", {
        key: s,
        "i-youcan-star": "",
        class: E(["star", { active: s <= e.score }])
      }, null, 2))), 128))
    ]));
  }
});
const Jo = /* @__PURE__ */ b(Xo, [["__scopeId", "data-v-8f882ea2"]]), Yo = { class: "rating" }, Zo = ["onMousedown"], en = /* @__PURE__ */ $({
  __name: "RatingInput",
  props: {
    ceil: { default: 5 },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = S({
      get: () => o.modelValue,
      set: (s) => t("update:modelValue", s)
    });
    return ce(() => {
      if (o.modelValue > o.ceil)
        throw new Error(
          "The rating's ceil must be higher than or equal to the score."
        );
    }), Te(() => {
      if (o.modelValue > o.ceil)
        throw new Error(
          "The rating's ceil must be higher than or equal to the score."
        );
    }), (s, a) => (d(), _("div", Yo, [
      (d(!0), _(L, null, q(e.ceil, (r) => (d(), _("i", {
        key: r,
        "i-youcan-star": "",
        class: E(["star", { active: r <= m(n) }]),
        onMousedown: () => n.value = r
      }, null, 42, Zo))), 128))
    ]));
  }
});
const tn = /* @__PURE__ */ b(en, [["__scopeId", "data-v-2c0e5700"]]), on = /* @__PURE__ */ $({
  __name: "Badge",
  props: {
    size: { default: 20 },
    state: { default: "neutral" }
  },
  setup(e) {
    return Y((t) => ({
      "3aab2696": `${e.size}px`
    })), (t, o) => (d(), _("span", {
      class: E(["badge", [`state-${e.state}`]])
    }, [
      x(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const nn = /* @__PURE__ */ b(on, [["__scopeId", "data-v-100a16f9"]]), sn = (e) => (W("data-v-f369e650"), e = e(), G(), e), ln = ["src", "alt"], an = {
  key: 1,
  class: "placeholder"
}, rn = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("i", { class: "i-youcan-camera icon" }, null, -1)), cn = [
  rn
], un = /* @__PURE__ */ $({
  __name: "Thumbnail",
  props: {
    size: { default: "small" },
    src: null,
    alt: null
  },
  setup(e) {
    return (t, o) => (d(), _("div", {
      class: E(["thumbnail", [`size-${e.size}`]])
    }, [
      e.src ? (d(), _("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        class: "image",
        loading: "lazy"
      }, null, 8, ln)) : (d(), _("div", an, cn))
    ], 2));
  }
});
const dn = /* @__PURE__ */ b(un, [["__scopeId", "data-v-f369e650"]]), we = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: it,
  Note: mt,
  Loading: xt,
  Checkbox: Gt,
  PrimaryButton: Zt,
  SecondaryButton: to,
  PrimaryDestructiveButton: no,
  SecondaryDestructiveButton: lo,
  TertiaryButton: ro,
  Input: Be,
  ColorPicker: Uo,
  Toggle: Wo,
  TextArea: Qo,
  Rating: Jo,
  RatingInput: tn,
  Badge: nn,
  Thumbnail: dn
}, Symbol.toStringTag, { value: "Module" }));
function _n(e) {
  for (const t in we)
    e.component(t, we[t]);
}
const fn = { install: _n };
export {
  nn as Badge,
  Gt as Checkbox,
  Uo as ColorPicker,
  it as Dropdown,
  Be as Input,
  xt as Loading,
  mt as Note,
  Zt as PrimaryButton,
  no as PrimaryDestructiveButton,
  Jo as Rating,
  tn as RatingInput,
  to as SecondaryButton,
  lo as SecondaryDestructiveButton,
  ro as TertiaryButton,
  Qo as TextArea,
  dn as Thumbnail,
  Wo as Toggle,
  fn as default
};

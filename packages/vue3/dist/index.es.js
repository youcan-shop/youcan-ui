import { unref as m, ref as g, watch as z, customRef as Pe, getCurrentScope as Oe, onScopeDispose as ze, computed as S, defineComponent as x, openBlock as d, createElementBlock as _, createElementVNode as p, normalizeClass as W, toDisplayString as se, pushScopeId as G, popScopeId as Q, Fragment as R, renderList as j, createCommentVNode as B, renderSlot as w, watchEffect as xe, createVNode as E, withDirectives as X, vShow as Me, normalizeStyle as P, useSlots as le, mergeProps as ae, isRef as J, vModelCheckbox as Ve, createBlock as q, withCtx as F, useAttrs as we, onBeforeMount as Se, vModelText as ke, onUnmounted as Le, useCssVars as re, onMounted as Y, withModifiers as ce, nextTick as ee } from "vue";
const Z = typeof window < "u", de = (e) => typeof e < "u", _e = (e) => typeof e == "function", Re = (e) => typeof e == "string", Te = () => {
};
function Ae(e) {
  return typeof e == "function" ? e() : m(e);
}
function De(e) {
  return e;
}
function Ne(e, t) {
  let o, n, s;
  const a = g(!0), c = () => {
    a.value = !0, s();
  };
  z(e, c, { flush: "sync" });
  const l = _e(t) ? t : t.get, u = _e(t) ? void 0 : t.set, r = Pe((i, f) => (n = i, s = f, {
    get() {
      return a.value && (o = l(), a.value = !1), n(), o;
    },
    set(b) {
      u == null || u(b);
    }
  }));
  return Object.isExtensible(r) && (r.trigger = c), r;
}
function He(e) {
  return Oe() ? (ze(e), !0) : !1;
}
function V(e) {
  var t;
  const o = Ae(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ie = Z ? window : void 0;
Z && window.document;
Z && window.navigator;
Z && window.location;
function L(...e) {
  let t, o, n, s;
  if (Re(e[0]) || Array.isArray(e[0]) ? ([o, n, s] = e, t = ie) : [t, o, n, s] = e, !t)
    return Te;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const a = [], c = () => {
    a.forEach((i) => i()), a.length = 0;
  }, l = (i, f, b) => (i.addEventListener(f, b, s), () => i.removeEventListener(f, b, s)), u = z(() => V(t), (i) => {
    c(), i && a.push(...o.flatMap((f) => n.map((b) => l(i, f, b))));
  }, { immediate: !0, flush: "post" }), r = () => {
    u(), c();
  };
  return He(r), r;
}
function Ue(e, t, o = {}) {
  const { window: n = ie, ignore: s = [], capture: a = !0, detectIframe: c = !1 } = o;
  if (!n)
    return;
  let l = !0, u;
  const r = (v) => s.some((h) => {
    if (typeof h == "string")
      return Array.from(n.document.querySelectorAll(h)).some((y) => y === v.target || v.composedPath().includes(y));
    {
      const y = V(h);
      return y && (v.target === y || v.composedPath().includes(y));
    }
  }), i = (v) => {
    n.clearTimeout(u);
    const h = V(e);
    if (!(!h || h === v.target || v.composedPath().includes(h))) {
      if (v.detail === 0 && (l = !r(v)), !l) {
        l = !0;
        return;
      }
      t(v);
    }
  }, f = [
    L(n, "click", i, { passive: !0, capture: a }),
    L(n, "pointerdown", (v) => {
      const h = V(e);
      h && (l = !v.composedPath().includes(h) && !r(v));
    }, { passive: !0 }),
    L(n, "pointerup", (v) => {
      if (v.button === 0) {
        const h = v.composedPath();
        v.composedPath = () => h, u = n.setTimeout(() => i(v), 50);
      }
    }, { passive: !0 }),
    c && L(n, "blur", (v) => {
      var h;
      const y = V(e);
      ((h = n.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(y != null && y.contains(n.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function je(e = {}) {
  const { window: t = ie } = e, o = Ne(() => null, () => t == null ? void 0 : t.document.activeElement);
  return t && (L(t, "blur", (n) => {
    n.relatedTarget !== null && o.trigger();
  }, !0), L(t, "focus", o.trigger, !0)), o;
}
const pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ve = "__vueuse_ssr_handlers__";
pe[ve] = pe[ve] || {};
function Ce(e, t = {}) {
  const { initialValue: o = !1 } = t, n = je(t), s = S(() => V(e)), a = S({
    get() {
      return de(n.value) && de(s.value) && n.value === s.value;
    },
    set(c) {
      var l, u;
      !c && a.value && ((l = s.value) == null || l.blur()), c && !a.value && ((u = s.value) == null || u.focus());
    }
  });
  return z(s, () => {
    a.value = o;
  }, { immediate: !0, flush: "post" }), { focused: a };
}
var fe;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(fe || (fe = {}));
var We = Object.defineProperty, me = Object.getOwnPropertySymbols, Ge = Object.prototype.hasOwnProperty, Qe = Object.prototype.propertyIsEnumerable, he = (e, t, o) => t in e ? We(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, qe = (e, t) => {
  for (var o in t || (t = {}))
    Ge.call(t, o) && he(e, o, t[o]);
  if (me)
    for (var o of me(t))
      Qe.call(t, o) && he(e, o, t[o]);
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
qe({
  linear: De
}, Ke);
const Xe = (e) => (G("data-v-adc57234"), e = e(), Q(), e), Je = { class: "label-item" }, Ye = /* @__PURE__ */ Xe(() => /* @__PURE__ */ p("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Ze = /* @__PURE__ */ x({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, n = S(() => o.item), s = g();
    return Ue(s, () => t("clickOutside")), (a, c) => {
      var l;
      return d(), _("button", {
        ref_key: "_dropdown_trigger",
        ref: s,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (u) => t("click"))
      }, [
        p("div", Je, [
          p("i", {
            class: W([(l = m(n)) == null ? void 0 : l.icon])
          }, null, 2),
          p("span", null, se(m(n) ? m(n).label : e.placeholder || "Please select an option"), 1)
        ]),
        Ye
      ], 512);
    };
  }
});
const $ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, et = /* @__PURE__ */ $(Ze, [["__scopeId", "data-v-adc57234"]]), tt = { class: "dropdown-content" }, ot = ["onClick"], nt = ["src"], st = {
  key: 2,
  class: "icon i-tabler:check"
}, lt = {
  key: 1,
  class: "no-results"
}, at = /* @__PURE__ */ x({
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
    return (a, c) => (d(), _("div", tt, [
      e.items.length > 0 ? (d(!0), _(R, { key: 0 }, j(e.items, (l) => (d(), _("div", {
        key: l.label,
        class: "dropdown-item",
        onClick: (u) => s(l)
      }, [
        l.icon ? (d(), _("i", {
          key: 0,
          class: W(l.icon)
        }, null, 2)) : B("", !0),
        l.image ? (d(), _("img", {
          key: 1,
          src: l.image,
          class: "image"
        }, null, 8, nt)) : B("", !0),
        p("span", null, se(l.label), 1),
        l && n.value && l.value === n.value.value ? (d(), _("i", st)) : B("", !0)
      ], 8, ot))), 128)) : (d(), _("div", lt, [
        w(a.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const rt = /* @__PURE__ */ $(at, [["__scopeId", "data-v-2f74106b"]]), ct = { class: "dropdown" }, it = /* @__PURE__ */ x({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: n, placeholder: s } = e, a = S(() => o), c = g(), l = g(!1), u = (r) => {
      r && (c.value = r, t("update:modelValue", c.value.value), l.value = !1);
    };
    return xe(() => c.value = n.find((r) => r.value === a.value)), (r, i) => (d(), _("div", ct, [
      E(et, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: i[0] || (i[0] = (f) => l.value = !l.value),
        onClickOutside: i[1] || (i[1] = (f) => l.value = !1)
      }, null, 8, ["item", "placeholder"]),
      X(E(rt, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": u
      }, null, 8, ["model-value", "items"]), [
        [Me, l.value]
      ])
    ]));
  }
});
const ut = /* @__PURE__ */ $(it, [["__scopeId", "data-v-a4109ef5"]]);
const dt = {}, _t = { class: "note" }, pt = { class: "icon" }, vt = { class: "content" };
function ft(e, t) {
  return d(), _("div", _t, [
    p("div", pt, [
      w(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    p("div", vt, [
      w(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const mt = /* @__PURE__ */ $(dt, [["render", ft], ["__scopeId", "data-v-5be167d4"]]), ht = (e) => (G("data-v-dbbecf04"), e = e(), Q(), e), gt = { class: "loading" }, yt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, bt = /* @__PURE__ */ ht(() => /* @__PURE__ */ p("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), $t = { class: "loading-value" }, xt = /* @__PURE__ */ x({
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
    return z(o, () => {
      n.value = 0, s.value = !0;
    }), xe(() => {
      const c = o.duration, l = c / 100, u = 100 / (c / l);
      let r = 0;
      s.value = !0;
      const i = setInterval(() => {
        r += u, n.value = r, r >= 100 && (clearInterval(i), s.value = !1, t("complete"));
      }, l);
      return () => clearInterval(i);
    }), (c, l) => (d(), _("div", gt, [
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
      p("div", $t, se(`${n.value}%`), 1)
    ]));
  }
});
const wt = /* @__PURE__ */ $(xt, [["__scopeId", "data-v-dbbecf04"]]);
function M(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function te(e) {
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
        return M(o) ? t : te(function(s) {
          return e(o, s);
        });
      default:
        return M(o) && M(n) ? t : M(o) ? te(function(s) {
          return e(s, n);
        }) : M(n) ? te(function(s) {
          return e(o, s);
        }) : e(o, n);
    }
  };
}
var kt = /* @__PURE__ */ St(function(t, o) {
  return o instanceof t || o != null && (o.constructor === t || t.name === "Object" && typeof o == "object");
});
const ge = kt, Ct = (e) => e;
function It(e) {
  return e;
}
const Ft = {
  __proto__: null,
  templatify: Ct,
  l: It
};
function Bt(e) {
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
const Pt = {
  __proto__: null,
  uid: Bt,
  partition: Et
}, Ot = { ...Ft, ...Pt }, ne = "#000000", ue = "#FFFFFF", zt = "#CCD5DB", Ie = (e) => {
  const t = e * 2, o = document.createElement("canvas"), n = o.getContext("2d", { willReadFrequently: !0 });
  return o.width = t, o.height = t, n.fillStyle = ue, n.fillRect(0, 0, t, t), n.fillStyle = zt, n.fillRect(0, 0, e, e), n.fillRect(e, e, e, e), o;
}, ye = (e, t, o, n, s, a = "left") => {
  const c = a === "left", l = e.createLinearGradient(
    0,
    0,
    c ? t : 0,
    c ? 0 : o
  );
  l.addColorStop(0.01, n), l.addColorStop(0.99, s), e.fillStyle = l, e.fillRect(0, 0, t, o);
}, Mt = (e, t, o, n, s) => {
  const a = e.createLinearGradient(
    0,
    0,
    t,
    0
  );
  a.addColorStop(0.01, n), a.addColorStop(0.99, s), e.fillStyle = a, e.fillRect(0, 0, t, o);
}, Vt = (e, t) => {
  const o = e.createLinearGradient(0, 0, t, 0);
  return o.addColorStop(0, "#FF0000"), o.addColorStop(0.17 * 1, "#FF00FF"), o.addColorStop(0.17 * 2, "#0000FF"), o.addColorStop(0.17 * 3, "#00FFFF"), o.addColorStop(0.17 * 4, "#00FF00"), o.addColorStop(0.17 * 5, "#FFFF00"), o.addColorStop(1, "#FF0000"), o;
}, T = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}, oe = (e) => parseInt(e, 16) || 0, Lt = ({ r: e, g: t, b: o }) => `#${T(e)}${T(t)}${T(o)}`.toUpperCase(), Rt = ({ r: e, g: t, b: o, a: n }) => {
  const s = (n * 255 | 256).toString(16).slice(1);
  return `#${T(e)}${T(t)}${T(o)}${s}`.toUpperCase();
}, Tt = (e) => (e = e.startsWith("#") ? e.slice(1) : e, {
  r: oe(e.slice(0, 2)),
  g: oe(e.slice(2, 4)),
  b: oe(e.slice(4, 6))
}), be = (e) => {
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
  }, s = Math.max(t, o, n), a = Math.min(t, o, n), c = s - a;
  let l = 0;
  s === a ? l = 0 : s === t ? o >= n ? l = 60 * (o - n) / c : l = 60 * (o - n) / c + 360 : s === o ? l = 60 * (n - t) / c + 120 : s === n && (l = 60 * (t - o) / c + 240), l = Math.floor(l);
  const u = parseFloat((s === 0 ? 0 : 1 - a / s).toFixed(2)), r = parseFloat(s.toFixed(2));
  return { h: l, s: u, v: r };
}, U = (e) => {
  let t = { r: 0, g: 0, b: 0, a: 1 };
  if (/#/.test(e))
    t = { ...Tt(e), a: 1 };
  else if (/rgb/.test(e))
    t = be(e);
  else if (ge(String)(e))
    t = be(`rgba(${e})`);
  else if (ge(Object)(e)) {
    const n = "a" in e ? e.a : 1;
    t = { ...e, a: n };
  }
  const o = At(t);
  return { ...t, ...o, a: t.a ?? 1 };
}, Dt = (e) => (G("data-v-f8b74f22"), e = e(), Q(), e), Nt = ["for"], Ht = { class: "checkbox" }, Ut = ["id"], jt = /* @__PURE__ */ Dt(() => /* @__PURE__ */ p("span", { class: "checkmark" }, [
  /* @__PURE__ */ p("i", { "i-youcan-checkmark": "" })
], -1)), Wt = {
  key: 0,
  class: "label"
}, Gt = /* @__PURE__ */ x({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = le(), s = S({
      get: () => o.modelValue,
      set: (c) => t("update:modelValue", c)
    }), a = Ot.uid("checkbox");
    return (c, l) => (d(), _("label", { for: m(a) }, [
      p("div", Ht, [
        X(p("input", ae(c.$attrs, {
          id: m(a),
          "onUpdate:modelValue": l[0] || (l[0] = (u) => J(s) ? s.value = u : null),
          tabindex: "0",
          type: "checkbox",
          class: "input"
        }), null, 16, Ut), [
          [Ve, m(s)]
        ]),
        jt
      ]),
      m(n).label ? (d(), _("div", Wt, [
        w(c.$slots, "label", {}, void 0, !0)
      ])) : B("", !0)
    ], 8, Nt));
  }
});
const Qt = /* @__PURE__ */ $(Gt, [["__scopeId", "data-v-f8b74f22"]]), qt = ["disabled"], Kt = {
  key: 0,
  class: "icon"
}, Xt = { class: "text" }, Jt = /* @__PURE__ */ x({
  __name: "_BaseButton",
  props: {
    size: null,
    disabled: { type: Boolean, default: !1 },
    iconPosition: { default: "left" },
    roundedFull: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = le();
    return (o, n) => (d(), _("button", {
      ref: "button",
      class: W(["base-button", { "rounded-full": e.roundedFull, [`size-${e.size}`]: !0, [`icon-${e.iconPosition}`]: !0 }]),
      disabled: e.disabled
    }, [
      m(t).icon ? (d(), _("span", Kt, [
        w(o.$slots, "icon", {}, void 0, !0)
      ])) : B("", !0),
      p("span", Xt, [
        w(o.$slots, "default", {}, void 0, !0)
      ])
    ], 10, qt));
  }
});
const K = /* @__PURE__ */ $(Jt, [["__scopeId", "data-v-a91f21bf"]]), Yt = /* @__PURE__ */ x({
  __name: "PrimaryButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: F(() => [
        w(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: F(() => [
        w(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const Zt = /* @__PURE__ */ $(Yt, [["__scopeId", "data-v-fd7bb83b"]]), eo = /* @__PURE__ */ x({
  __name: "SecondaryButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: F(() => [
        w(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: F(() => [
        w(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const to = /* @__PURE__ */ $(eo, [["__scopeId", "data-v-94c05954"]]), oo = /* @__PURE__ */ x({
  __name: "PrimaryDestructiveButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: F(() => [
        w(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: F(() => [
        w(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const no = /* @__PURE__ */ $(oo, [["__scopeId", "data-v-b9e987a7"]]), so = /* @__PURE__ */ x({
  __name: "SecondaryDestructiveButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: F(() => [
        w(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: F(() => [
        w(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const lo = /* @__PURE__ */ $(so, [["__scopeId", "data-v-0f26d79c"]]), ao = /* @__PURE__ */ x({
  __name: "TertiaryButton",
  props: {
    size: null,
    disabled: { type: Boolean },
    iconPosition: null,
    roundedFull: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (d(), q(K, {
      size: e.size,
      disabled: e.disabled,
      "icon-position": e.iconPosition,
      "rounded-full": e.roundedFull,
      class: "primary"
    }, {
      icon: F(() => [
        w(t.$slots, "icon", {}, void 0, !0)
      ]),
      default: F(() => [
        w(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "disabled", "icon-position", "rounded-full"]));
  }
});
const ro = /* @__PURE__ */ $(ao, [["__scopeId", "data-v-5e0a8377"]]);
const co = {}, io = { class: "prefix" };
function uo(e, t) {
  return d(), _("div", io, " Prefix ");
}
const _o = /* @__PURE__ */ $(co, [["render", uo], ["__scopeId", "data-v-9b604abd"]]), po = {
  key: 0,
  class: "prefix"
}, vo = { class: "tail" }, fo = {
  key: 0,
  class: "icon"
}, mo = {
  key: 1,
  class: "suffix"
}, ho = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = g(), s = le(), a = we(), { focused: c } = Ce(n), l = S({
      get: () => o.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return Se(() => {
      if (!s.prefix)
        return;
      const u = s.prefix()[0].type;
      if (!(typeof u != "symbol" && [_o].find((r) => r === u)))
        throw new TypeError("Invalid prefix");
    }), (u, r) => (d(), _("div", {
      class: W([{ enabled: !m(a).disabled, focused: m(c), error: e.error }, "wrapper"])
    }, [
      m(s).prefix ? (d(), _("div", po, [
        w(u.$slots, "prefix", {}, void 0, !0)
      ])) : B("", !0),
      X(p("input", ae({
        ref_key: "primitive",
        ref: n,
        "onUpdate:modelValue": r[0] || (r[0] = (i) => J(l) ? l.value = i : null),
        class: "input",
        type: "text"
      }, u.$attrs), null, 16), [
        [ke, m(l)]
      ]),
      p("div", vo, [
        m(s).icon ? (d(), _("div", fo, [
          w(u.$slots, "icon", {}, void 0, !0)
        ])) : B("", !0),
        m(s).suffix ? (d(), _("div", mo, [
          w(u.$slots, "suffix", {}, void 0, !0)
        ])) : B("", !0)
      ])
    ], 2));
  }
});
const Fe = /* @__PURE__ */ $(ho, [["__scopeId", "data-v-cfaee079"]]), go = { class: "override" }, yo = /* @__PURE__ */ x({
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
      E(Fe, {
        modelValue: m(n),
        "onUpdate:modelValue": a[0] || (a[0] = (c) => J(n) ? n.value = c : null),
        class: "value/"
      }, null, 8, ["modelValue"])
    ]));
  }
}), bo = {
  key: 0,
  class: "swatch-wrapper storage"
}, $o = { class: "swatches storage" }, xo = ["onClick"], wo = { class: "swatches" }, So = ["onClick"], ko = /* @__PURE__ */ x({
  __name: "Swatches",
  props: {
    color: { default: ue },
    defaultSwatches: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const o = e, n = "youcan-theme-editor-colors", s = g(Ie(4).toDataURL()), a = g([]);
    localStorage && n && (a.value = JSON.parse(localStorage.getItem(n)) || []);
    const c = (u) => {
      if (!u)
        return;
      const r = a.value || [], i = r.indexOf(u);
      i >= 0 && r.splice(i, 1), r.length >= 7 && r.pop(), r.unshift(u), a.value = r || [], localStorage && n && localStorage.setItem(n, JSON.stringify(r));
    }, l = (u) => {
      t("setcolor", u);
    };
    return Le(() => c(o.color)), (u, r) => (d(), _(R, null, [
      a.value.length ? (d(), _("div", bo, [
        p("div", $o, [
          (d(!0), _(R, null, j(a.value, (i) => (d(), _("div", {
            key: i,
            class: "swatch",
            onClick: (f) => l(i)
          }, [
            p("div", {
              style: P({ background: `url(${s.value})` }),
              class: "alpha"
            }, null, 4),
            p("div", {
              style: P({ background: i }),
              class: "color"
            }, null, 4)
          ], 8, xo))), 128))
        ])
      ])) : B("", !0),
      p("div", wo, [
        (d(!0), _(R, null, j(e.defaultSwatches, (i) => (d(), _("div", {
          key: i,
          class: "swatch",
          onClick: (f) => l(i)
        }, [
          p("div", {
            style: P({ background: `url(${s.value})` }),
            class: "alpha"
          }, null, 4),
          p("div", {
            style: P({ background: i }),
            class: "color"
          }, null, 4)
        ], 8, So))), 128))
      ])
    ], 64));
  }
});
const Co = /* @__PURE__ */ $(ko, [["__scopeId", "data-v-8846510d"]]), Io = ["onMousedown"], Fo = /* @__PURE__ */ x({
  __name: "Saturation",
  props: {
    color: { default: ne },
    hsv: null,
    size: { default: 152 }
  },
  emits: ["setsaturation"],
  setup(e, { expose: t, emit: o }) {
    const n = e;
    re((i) => ({
      "8f5329ec": `${e.size}px`
    }));
    const s = g(), a = g(), c = g({}), l = () => {
      const i = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = n.size, a.value.height = n.size, i.fillStyle = n.color, i.fillRect(0, 0, n.size, n.size), ye(i, n.size, n.size, ue, "rgba(255, 255, 255, 0)"), ye(i, n.size, n.size, "rgba(0, 0, 0, 0)", ne, "right");
    }, u = () => {
      c.value = {
        left: `${n.hsv.s * n.size - 5}px`,
        top: `${(1 - n.hsv.v) * n.size - 5}px`
      };
    }, r = (i) => {
      const { top: f, left: b } = s.value.getBoundingClientRect(), v = i.target.getContext("2d", { willReadFrequently: !0 });
      function h(O) {
        let C = O.clientX - b, k = O.clientY - f;
        C < 0 && (C = 0), k < 0 && (k = 0), C > n.size && (C = n.size), k > n.size && (k = n.size), c.value = {
          left: `${C - 10}px`,
          top: `${k - 10}px`
        };
        const A = v.getImageData(Math.min(C, n.size - 1), Math.min(k, n.size - 1), 1, 1), [D, N, H] = A.data;
        o("setsaturation", { r: D, g: N, b: H });
      }
      h(i);
      const y = () => {
        document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", y);
      };
      document.addEventListener("mousemove", h), document.addEventListener("mouseup", y);
    };
    return Y(() => {
      l(), u();
    }), t({ renderColor: l, renderSlider: u }), (i, f) => (d(), _("div", {
      ref_key: "wrapper",
      ref: s,
      class: "saturation-wrapper",
      onMousedown: ce(r, ["prevent", "stop"])
    }, [
      p("canvas", {
        ref_key: "canvas",
        ref: a,
        class: "canvas"
      }, null, 512),
      p("i", {
        "i-youcan-pointer": "",
        style: P(c.value),
        class: "slider"
      }, null, 4)
    ], 40, Io));
  }
});
const Bo = /* @__PURE__ */ $(Fo, [["__scopeId", "data-v-9912972f"]]), Eo = ["onMousedown"], Po = /* @__PURE__ */ x({
  __name: "Hue",
  props: {
    hsv: null,
    width: { default: 15 },
    height: { default: 152 }
  },
  emits: ["sethue"],
  setup(e, { expose: t, emit: o }) {
    const { hsv: n, width: s, height: a } = e;
    re((b) => ({
      da20afe6: `${s}px`,
      fe3c5554: `${a}px`
    }));
    const c = g(), l = g(), u = g({}), r = () => {
      const b = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = s, l.value.height = a;
      const v = Vt(b, s);
      b.fillStyle = v, b.fillRect(0, 0, s, a);
    }, i = () => {
      u.value = {
        left: `${(1 - n.h / 360) * s - 2}px`
      };
    }, f = (b) => {
      const { left: v } = c.value.getBoundingClientRect(), h = l.value.getContext("2d", { willReadFrequently: !0 });
      function y(C) {
        let k = C.clientX - v;
        k < 0 && (k = 0), k > s && (k = s), u.value = {
          left: `${k - 12}px`
        };
        const A = h.getImageData(Math.min(k, s - 1), 1, 1, 1), [D, N, H] = A.data;
        o("sethue", { r: D, g: N, b: H });
      }
      y(b);
      const O = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", O);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", O);
    };
    return Y(() => {
      r(), i();
    }), t({ renderColor: r, renderSlider: i }), (b, v) => (d(), _("div", {
      ref_key: "wrapper",
      ref: c,
      class: "hue-wrapper",
      onMousedown: ce(f, ["prevent", "stop"])
    }, [
      p("canvas", {
        ref_key: "canvas",
        ref: l,
        class: "canvas"
      }, null, 512),
      p("i", {
        "i-youcan-pointer": "",
        style: P(u.value),
        class: "slider"
      }, null, 4)
    ], 40, Eo));
  }
});
const Oo = /* @__PURE__ */ $(Po, [["__scopeId", "data-v-c1489598"]]), zo = ["onMousedown"], Mo = /* @__PURE__ */ x({
  __name: "Alpha",
  props: {
    color: { default: ne },
    rgba: null,
    height: { default: 152 },
    width: { default: 15 }
  },
  emits: ["setalpha"],
  setup(e, { emit: t }) {
    const o = e;
    re((i) => ({
      "726d72ca": `${e.width}px`,
      "6f87eef0": `${e.height}px`
    }));
    const n = 5, s = g(), a = g(), c = g({}), l = () => {
      const i = Ie(n), f = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = o.width, a.value.height = o.height, f.fillStyle = f.createPattern(i, "repeat"), f.fillRect(0, 0, o.width, o.height), Mt(f, o.width, o.height, "rgba(255, 255, 255, 0)", o.color);
    }, u = () => {
      c.value = {
        left: `${o.rgba.a * o.width - 12}px`
      };
    }, r = (i) => {
      const { left: f } = s.value.getBoundingClientRect();
      function b(h) {
        let y = h.clientX - f;
        y < 0 && (y = 0), y > o.width && (y = o.width), t("setalpha", parseFloat((y / o.width).toFixed(2)));
      }
      b(i);
      const v = () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", v);
      };
      document.addEventListener("mousemove", b), document.addEventListener("mouseup", v);
    };
    return Y(() => {
      l(), u();
    }), z(() => o.color, () => l()), z(() => o.rgba, () => u()), (i, f) => (d(), _("div", {
      ref_key: "wrapper",
      ref: s,
      class: "alpha-wrapper",
      onMousedown: ce(r, ["prevent", "stop"])
    }, [
      p("canvas", {
        ref_key: "canvas",
        ref: a,
        class: "canvas"
      }, null, 512),
      p("i", {
        "i-youcan-pointer": "",
        style: P(c.value),
        class: "slider"
      }, null, 4)
    ], 40, zo));
  }
});
const Vo = /* @__PURE__ */ $(Mo, [["__scopeId", "data-v-85346e4b"]]), Be = (e) => (G("data-v-9c84931e"), e = e(), Q(), e), Lo = { class: "color-picker" }, Ro = { class: "sliders" }, To = { class: "color-override" }, Ao = /* @__PURE__ */ Be(() => /* @__PURE__ */ p("label", null, "HEX", -1)), Do = /* @__PURE__ */ Be(() => /* @__PURE__ */ p("hr", null, null, -1)), No = { class: "swatches" }, Ho = /* @__PURE__ */ x({
  __name: "ColorPicker",
  props: {
    color: { default: "#000000" },
    defaults: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const { color: o, defaults: n } = e, s = g(), a = g(), c = g(""), l = g(""), u = g(""), r = g({ r: 0, g: 0, b: 0, a: 1, h: 0, s: 0, v: 0 }), i = S(() => ({ r: r.value.r, g: r.value.g, b: r.value.b, a: r.value.a })), f = S(() => ({ h: r.value.h, s: r.value.s, v: r.value.v })), b = S(() => Lt(i.value)), v = S(() => Rt(i.value)), h = S(() => `${r.value.r}, ${r.value.g}, ${r.value.b}, ${r.value.a}`), y = S(() => `rgb(${r.value.r}, ${r.value.g}, ${r.value.b})`), O = S(() => `rgba(${h.value})`), C = () => {
      c.value = b.value, u.value = h.value, l.value = v.value;
    };
    Y(() => {
      r.value = U(o), C();
    });
    const k = (I) => {
      r.value = U(I), C();
    }, A = (I) => {
      r.value = U(I), C(), ee(() => {
        s.value.renderColor(), s.value.renderSlider();
      });
    }, D = (I) => {
      r.value.a = I, C();
    }, N = (I) => {
      r.value = U(I), c.value = I, u.value = h.value, ee(() => {
        a.value.renderSlider(), s.value.renderColor(), s.value.renderSlider();
      });
    }, H = (I) => {
      r.value = U(I), C(), ee(() => {
        a.value.renderSlider(), s.value.renderColor(), s.value.renderSlider();
      });
    };
    return z(
      i,
      () => t("setcolor", { rgba: i.value, hsv: f.value, hex: c.value, hexa: l.value })
    ), (I, nn) => (d(), _("div", Lo, [
      E(Bo, {
        ref_key: "saturationElement",
        ref: s,
        class: "color-saturation",
        color: m(y),
        hsv: m(f),
        size: 224,
        onSetsaturation: k
      }, null, 8, ["color", "hsv"]),
      p("div", Ro, [
        E(Oo, {
          ref_key: "hueElement",
          ref: a,
          class: "color-hue",
          hsv: m(f),
          width: 224,
          height: 10,
          onSethue: A
        }, null, 8, ["hsv"]),
        E(Vo, {
          class: "color-alpha",
          color: m(y),
          rgba: m(i),
          width: 224,
          height: 10,
          onSetalpha: D
        }, null, 8, ["color", "rgba"])
      ]),
      p("div", To, [
        Ao,
        E(yo, {
          class: "hex-input",
          type: "#",
          color: l.value,
          onOverridecolor: N
        }, null, 8, ["color"])
      ]),
      Do,
      p("div", No, [
        E(Co, {
          color: m(O),
          "default-swatches": n,
          onSetcolor: H
        }, null, 8, ["color"])
      ])
    ]));
  }
});
const Uo = /* @__PURE__ */ $(Ho, [["__scopeId", "data-v-9c84931e"]]), jo = ["aria-checked"], Wo = /* @__PURE__ */ x({
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
      onClick: a[0] || (a[0] = (c) => n.value = !m(n))
    }, null, 8, jo));
  }
});
const Go = /* @__PURE__ */ $(Wo, [["__scopeId", "data-v-edc61bd0"]]), Qo = /* @__PURE__ */ x({
  __name: "TextArea",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = g(), s = we(), { focused: a } = Ce(n), c = S({
      get: () => o.modelValue,
      set: (l) => {
        t("update:modelValue", l);
      }
    });
    return (l, u) => (d(), _("div", {
      class: W([{ enabled: !m(s).disabled, focused: m(a), error: e.error }, "wrapper"])
    }, [
      X(p("textarea", ae({
        ref_key: "primitive",
        ref: n,
        "onUpdate:modelValue": u[0] || (u[0] = (r) => J(c) ? c.value = r : null),
        class: "textarea"
      }, l.$attrs), null, 16), [
        [ke, m(c)]
      ])
    ], 2));
  }
});
const qo = /* @__PURE__ */ $(Qo, [["__scopeId", "data-v-94a29861"]]), Ee = (e) => (G("data-v-b34f4c9b"), e = e(), Q(), e), Ko = { class: "rating" }, Xo = /* @__PURE__ */ Ee(() => /* @__PURE__ */ p("i", {
  "i-youcan-star": "",
  class: "star active"
}, null, -1)), Jo = [
  Xo
], Yo = /* @__PURE__ */ Ee(() => /* @__PURE__ */ p("i", {
  "i-youcan-star": "",
  class: "star inactive"
}, null, -1)), Zo = [
  Yo
], en = /* @__PURE__ */ x({
  __name: "Rating",
  props: {
    ceil: { default: 5 },
    score: { default: 0 }
  },
  setup(e) {
    const t = e;
    return Se(() => {
      if (t.score > t.ceil)
        throw new Error("The rating's ceil must be higher than or equal to the score.");
    }), (o, n) => (d(), _("div", Ko, [
      (d(!0), _(R, null, j(e.score, (s) => (d(), _("span", { key: s }, Jo))), 128)),
      (d(!0), _(R, null, j(e.ceil - e.score, (s) => (d(), _("span", {
        key: e.score + s
      }, Zo))), 128))
    ]));
  }
});
const tn = /* @__PURE__ */ $(en, [["__scopeId", "data-v-b34f4c9b"]]), $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: ut,
  Note: mt,
  Loading: wt,
  Checkbox: Qt,
  PrimaryButton: Zt,
  SecondaryButton: to,
  PrimaryDestructiveButton: no,
  SecondaryDestructiveButton: lo,
  TertiaryButton: ro,
  Input: Fe,
  ColorPicker: Uo,
  Toggle: Go,
  TextArea: qo,
  Rating: tn
}, Symbol.toStringTag, { value: "Module" }));
function on(e) {
  for (const t in $e)
    e.component(t, $e[t]);
}
const ln = { install: on };
export {
  Qt as Checkbox,
  Uo as ColorPicker,
  ut as Dropdown,
  Fe as Input,
  wt as Loading,
  mt as Note,
  Zt as PrimaryButton,
  no as PrimaryDestructiveButton,
  tn as Rating,
  to as SecondaryButton,
  lo as SecondaryDestructiveButton,
  ro as TertiaryButton,
  qo as TextArea,
  Go as Toggle,
  ln as default
};

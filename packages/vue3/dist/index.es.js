import { unref as b, ref as _, watch as M, customRef as Ee, getCurrentScope as Fe, onScopeDispose as Oe, computed as C, openBlock as f, createElementBlock as m, defineComponent as x, useSlots as Ie, useAttrs as Le, onBeforeMount as Pe, normalizeClass as B, renderSlot as k, createCommentVNode as L, withDirectives as z, createElementVNode as d, mergeProps as le, isRef as ae, vModelText as Me, createBlock as Q, createVNode as V, Transition as Be, withCtx as re, vShow as q, toDisplayString as W, pushScopeId as K, popScopeId as X, Fragment as G, renderList as se, watchEffect as J, normalizeStyle as O, vModelCheckbox as Re, onUnmounted as Te, useCssVars as ue, onMounted as Y, withModifiers as ce, nextTick as ee } from "vue";
const Z = typeof window < "u", ve = (e) => typeof e < "u", fe = (e) => typeof e == "function", Ae = (e) => typeof e == "string", Ue = () => {
};
function ze(e) {
  return typeof e == "function" ? e() : b(e);
}
function Ne(e) {
  return e;
}
function He(e, t) {
  let o, s, n;
  const l = _(!0), c = () => {
    l.value = !0, n();
  };
  M(e, c, { flush: "sync" });
  const a = fe(t) ? t : t.get, u = fe(t) ? void 0 : t.set, r = Ee((i, h) => (s = i, n = h, {
    get() {
      return l.value && (o = a(), l.value = !1), s(), o;
    },
    set(g) {
      u == null || u(g);
    }
  }));
  return Object.isExtensible(r) && (r.trigger = c), r;
}
function De(e) {
  return Fe() ? (Oe(e), !0) : !1;
}
function T(e) {
  var t;
  const o = ze(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ie = Z ? window : void 0;
Z && window.document;
Z && window.navigator;
Z && window.location;
function A(...e) {
  let t, o, s, n;
  if (Ae(e[0]) || Array.isArray(e[0]) ? ([o, s, n] = e, t = ie) : [t, o, s, n] = e, !t)
    return Ue;
  Array.isArray(o) || (o = [o]), Array.isArray(s) || (s = [s]);
  const l = [], c = () => {
    l.forEach((i) => i()), l.length = 0;
  }, a = (i, h, g) => (i.addEventListener(h, g, n), () => i.removeEventListener(h, g, n)), u = M(() => T(t), (i) => {
    c(), i && l.push(...o.flatMap((h) => s.map((g) => a(i, h, g))));
  }, { immediate: !0, flush: "post" }), r = () => {
    u(), c();
  };
  return De(r), r;
}
function de(e, t, o = {}) {
  const { window: s = ie, ignore: n = [], capture: l = !0, detectIframe: c = !1 } = o;
  if (!s)
    return;
  let a = !0, u;
  const r = (p) => n.some((v) => {
    if (typeof v == "string")
      return Array.from(s.document.querySelectorAll(v)).some((y) => y === p.target || p.composedPath().includes(y));
    {
      const y = T(v);
      return y && (p.target === y || p.composedPath().includes(y));
    }
  }), i = (p) => {
    s.clearTimeout(u);
    const v = T(e);
    if (!(!v || v === p.target || p.composedPath().includes(v))) {
      if (p.detail === 0 && (a = !r(p)), !a) {
        a = !0;
        return;
      }
      t(p);
    }
  }, h = [
    A(s, "click", i, { passive: !0, capture: l }),
    A(s, "pointerdown", (p) => {
      const v = T(e);
      v && (a = !p.composedPath().includes(v) && !r(p));
    }, { passive: !0 }),
    A(s, "pointerup", (p) => {
      if (p.button === 0) {
        const v = p.composedPath();
        p.composedPath = () => v, u = s.setTimeout(() => i(p), 50);
      }
    }, { passive: !0 }),
    c && A(s, "blur", (p) => {
      var v;
      const y = T(e);
      ((v = s.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(y != null && y.contains(s.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => h.forEach((p) => p());
}
function je(e = {}) {
  const { window: t = ie } = e, o = He(() => null, () => t == null ? void 0 : t.document.activeElement);
  return t && (A(t, "blur", (s) => {
    s.relatedTarget !== null && o.trigger();
  }, !0), A(t, "focus", o.trigger, !0)), o;
}
const me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, he = "__vueuse_ssr_handlers__";
me[he] = me[he] || {};
function We(e, t = {}) {
  const { initialValue: o = !1 } = t, s = je(t), n = C(() => T(e)), l = C({
    get() {
      return ve(s.value) && ve(n.value) && s.value === n.value;
    },
    set(c) {
      var a, u;
      !c && l.value && ((a = n.value) == null || a.blur()), c && !l.value && ((u = n.value) == null || u.focus());
    }
  });
  return M(n, () => {
    l.value = o;
  }, { immediate: !0, flush: "post" }), { focused: l };
}
var ge;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ge || (ge = {}));
var Ge = Object.defineProperty, ye = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, qe = Object.prototype.propertyIsEnumerable, be = (e, t, o) => t in e ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Ke = (e, t) => {
  for (var o in t || (t = {}))
    Qe.call(t, o) && be(e, o, t[o]);
  if (ye)
    for (var o of ye(t))
      qe.call(t, o) && be(e, o, t[o]);
  return e;
};
const Xe = {
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
Ke({
  linear: Ne
}, Xe);
const S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Je = {}, Ye = { class: "prefix" };
function Ze(e, t) {
  return f(), m("div", Ye, " Prefix ");
}
const et = /* @__PURE__ */ S(Je, [["render", Ze], ["__scopeId", "data-v-9b604abd"]]), tt = {
  key: 0,
  class: "prefix"
}, ot = { class: "tail" }, st = {
  key: 0,
  class: "icon"
}, nt = {
  key: 1,
  class: "suffix"
}, lt = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = _(), n = Ie(), l = Le(), { focused: c } = We(s), a = C({
      get: () => o.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return Pe(() => {
      if (!n.prefix)
        return;
      const u = n.prefix()[0].type;
      if (!(typeof u != "symbol" && [et].find((r) => r === u)))
        throw new TypeError("Invalid prefix");
    }), (u, r) => (f(), m("div", {
      class: B([{ enabled: !b(l).disabled, focused: b(c), error: e.error }, "wrapper"])
    }, [
      b(n).prefix ? (f(), m("div", tt, [
        k(u.$slots, "prefix", {}, void 0, !0)
      ])) : L("", !0),
      z(d("input", le({
        ref_key: "primitive",
        ref: s,
        "onUpdate:modelValue": r[0] || (r[0] = (i) => ae(a) ? a.value = i : null),
        class: "input",
        type: "text"
      }, u.$attrs), null, 16), [
        [Me, b(a)]
      ]),
      d("div", ot, [
        b(n).icon ? (f(), m("div", st, [
          k(u.$slots, "icon", {}, void 0, !0)
        ])) : L("", !0),
        b(n).suffix ? (f(), m("div", nt, [
          k(u.$slots, "suffix", {}, void 0, !0)
        ])) : L("", !0)
      ])
    ], 2));
  }
});
const N = /* @__PURE__ */ S(lt, [["__scopeId", "data-v-cfaee079"]]), Ce = /* @__PURE__ */ x({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = C(() => o.modelValue), n = (l) => {
      t("update:modelValue", l);
    };
    return (l, c) => (f(), Q(N, le({
      "model-value": b(s),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, l.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), at = { class: "store-slug-input" }, rt = { class: "input-container" }, ut = { class: "popover" }, ct = { class: "store-slug-box-content" }, it = { class: "box-description" }, dt = { class: "store-slug-title" }, pt = { class: "store-slug-description" }, _t = { class: "border-example" }, vt = { class: "border-icon-example" }, ft = { class: "input-border-example" }, mt = { class: "note" }, ht = { class: "icon-note" }, gt = { class: "note-description" }, yt = { class: "slug-suffix" }, bt = /* @__PURE__ */ x({
  __name: "StoreSlugInput",
  props: {
    modelValue: {
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
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = _(e.modelValue), n = _(!1), l = (u) => t("update:modelValue", u), c = () => n.value = !0, a = () => n.value = !1;
    return (u, r) => (f(), m("div", at, [
      d("div", rt, [
        V(Be, { name: "fade" }, {
          default: re(() => [
            z(d("div", ut, [
              d("div", ct, [
                d("div", it, [
                  d("div", dt, [
                    k(u.$slots, "title", {}, void 0, !0)
                  ]),
                  d("div", pt, [
                    k(u.$slots, "description", {}, void 0, !0)
                  ]),
                  d("div", _t, [
                    d("div", vt, [
                      k(u.$slots, "example", {}, void 0, !0)
                    ]),
                    d("div", ft, [
                      k(u.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                d("div", mt, [
                  d("div", ht, [
                    k(u.$slots, "icon", {}, void 0, !0)
                  ]),
                  d("span", gt, [
                    k(u.$slots, "note-desc", {}, void 0, !0)
                  ])
                ])
              ])
            ], 512), [
              [q, n.value]
            ])
          ]),
          _: 3
        }),
        V(N, {
          "model-value": s.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": l,
          onFocus: c,
          onBlur: a
        }, null, 8, ["model-value", "placeholder"]),
        d("span", yt, W(e.slugSuffix), 1)
      ])
    ]));
  }
});
const $t = /* @__PURE__ */ S(bt, [["__scopeId", "data-v-ad7dc538"]]), wt = (e) => (K("data-v-adc57234"), e = e(), X(), e), xt = { class: "label-item" }, St = /* @__PURE__ */ wt(() => /* @__PURE__ */ d("i", { class: "i-tabler:chevron-down icon" }, null, -1)), It = /* @__PURE__ */ x({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, s = C(() => o.item), n = _();
    return de(n, () => t("clickOutside")), (l, c) => {
      var a;
      return f(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (u) => t("click"))
      }, [
        d("div", xt, [
          d("i", {
            class: B([(a = b(s)) == null ? void 0 : a.icon])
          }, null, 2),
          d("span", null, W(b(s) ? b(s).label : e.placeholder || "Please select an option"), 1)
        ]),
        St
      ], 512);
    };
  }
});
const Ct = /* @__PURE__ */ S(It, [["__scopeId", "data-v-adc57234"]]), kt = { class: "dropdown-content" }, Vt = ["onClick"], Et = ["src"], Ft = {
  key: 2,
  class: "icon i-tabler:check"
}, Ot = {
  key: 1,
  class: "no-results"
}, Lt = /* @__PURE__ */ x({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = _(e.modelValue), n = (l) => {
      s.value = l, t("update:modelValue", s.value);
    };
    return (l, c) => (f(), m("div", kt, [
      e.items.length > 0 ? (f(!0), m(G, { key: 0 }, se(e.items, (a) => (f(), m("div", {
        key: a.label,
        class: "dropdown-item",
        onClick: (u) => n(a)
      }, [
        a.icon ? (f(), m("i", {
          key: 0,
          class: B(a.icon)
        }, null, 2)) : L("", !0),
        a.image ? (f(), m("img", {
          key: 1,
          src: a.image,
          class: "image"
        }, null, 8, Et)) : L("", !0),
        d("span", null, W(a.label), 1),
        a && s.value && a.value === s.value.value ? (f(), m("i", Ft)) : L("", !0)
      ], 8, Vt))), 128)) : (f(), m("div", Ot, [
        k(l.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const pe = /* @__PURE__ */ S(Lt, [["__scopeId", "data-v-2f74106b"]]), Pt = { class: "dropdown" }, Mt = /* @__PURE__ */ x({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: s, placeholder: n } = e, l = C(() => o), c = _(), a = _(!1), u = (r) => {
      r && (c.value = r, t("update:modelValue", c.value.value), a.value = !1);
    };
    return J(() => c.value = s.find((r) => r.value === l.value)), (r, i) => (f(), m("div", Pt, [
      V(Ct, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: i[0] || (i[0] = (h) => a.value = !a.value),
        onClickOutside: i[1] || (i[1] = (h) => a.value = !1)
      }, null, 8, ["item", "placeholder"]),
      z(V(pe, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": u
      }, null, 8, ["model-value", "items"]), [
        [q, a.value]
      ])
    ]));
  }
});
const Bt = /* @__PURE__ */ S(Mt, [["__scopeId", "data-v-a4109ef5"]]), Rt = { class: "password-input" }, Tt = /* @__PURE__ */ x({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean },
    id: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, passwordHidden: s = !0 } = e, n = _(), l = _(s), c = _(o), a = (u) => {
      c.value = u, t("update:modelValue", u);
    };
    return (u, r) => (f(), m("div", Rt, [
      d("button", {
        class: "password-icon",
        type: "button",
        onClick: r[0] || (r[0] = (i) => l.value = !l.value)
      }, [
        d("i", {
          class: B(l.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      V(N, {
        id: e.id,
        ref_key: "baseInput",
        ref: n,
        type: l.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": a
      }, null, 8, ["id", "type", "placeholder", "model-value"])
    ]));
  }
});
const At = /* @__PURE__ */ S(Tt, [["__scopeId", "data-v-e1b15513"]]);
const Ut = {}, zt = { class: "note" }, Nt = { class: "icon" }, Ht = { class: "content" };
function Dt(e, t) {
  return f(), m("div", zt, [
    d("div", Nt, [
      k(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    d("div", Ht, [
      k(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const jt = /* @__PURE__ */ S(Ut, [["render", Dt], ["__scopeId", "data-v-5be167d4"]]), Wt = (e) => (K("data-v-dbbecf04"), e = e(), X(), e), Gt = { class: "loading" }, Qt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, qt = /* @__PURE__ */ Wt(() => /* @__PURE__ */ d("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), Kt = { class: "loading-value" }, Xt = /* @__PURE__ */ x({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const o = e, s = _(0), n = _(!1), l = C(() => ({
      strokeDashoffset: `${(100 - s.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return M(o, () => {
      s.value = 0, n.value = !0;
    }), J(() => {
      const c = o.duration, a = c / 100, u = 100 / (c / a);
      let r = 0;
      n.value = !0;
      const i = setInterval(() => {
        r += u, s.value = r, r >= 100 && (clearInterval(i), n.value = !1, t("complete"));
      }, a);
      return () => clearInterval(i);
    }), (c, a) => (f(), m("div", Gt, [
      (f(), m("svg", Qt, [
        qt,
        d("circle", {
          class: "loading-circle-progress",
          style: O(b(l)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      d("div", Kt, W(`${s.value}%`), 1)
    ]));
  }
});
const Jt = /* @__PURE__ */ S(Xt, [["__scopeId", "data-v-dbbecf04"]]);
function R(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function te(e) {
  return function t(o) {
    return arguments.length === 0 || R(o) ? t : e.apply(this, arguments);
  };
}
function Yt(e) {
  return function t(o, s) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return R(o) ? t : te(function(n) {
          return e(o, n);
        });
      default:
        return R(o) && R(s) ? t : R(o) ? te(function(n) {
          return e(n, s);
        }) : R(s) ? te(function(n) {
          return e(o, n);
        }) : e(o, s);
    }
  };
}
var Zt = /* @__PURE__ */ Yt(function(t, o) {
  return o instanceof t || o != null && (o.constructor === t || t.name === "Object" && typeof o == "object");
});
const $e = Zt, eo = (e) => e;
function to(e) {
  return e;
}
const oo = {
  __proto__: null,
  templatify: eo,
  l: to
};
function so(e) {
  return e + Date.now().toString(36).substring(4) + Math.random().toString(36).substring(2);
}
const no = {
  __proto__: null,
  uid: so
}, lo = { ...oo, ...no }, ne = "#000000", _e = "#FFFFFF", ao = "#CCD5DB", ke = (e) => {
  const t = e * 2, o = document.createElement("canvas"), s = o.getContext("2d", { willReadFrequently: !0 });
  return o.width = t, o.height = t, s.fillStyle = _e, s.fillRect(0, 0, t, t), s.fillStyle = ao, s.fillRect(0, 0, e, e), s.fillRect(e, e, e, e), o;
}, we = (e, t, o, s, n, l = "left") => {
  const c = l === "left", a = e.createLinearGradient(
    0,
    0,
    c ? t : 0,
    c ? 0 : o
  );
  a.addColorStop(0.01, s), a.addColorStop(0.99, n), e.fillStyle = a, e.fillRect(0, 0, t, o);
}, ro = (e, t, o, s, n) => {
  const l = e.createLinearGradient(
    0,
    0,
    t,
    0
  );
  l.addColorStop(0.01, s), l.addColorStop(0.99, n), e.fillStyle = l, e.fillRect(0, 0, t, o);
}, uo = (e, t) => {
  const o = e.createLinearGradient(0, 0, t, 0);
  return o.addColorStop(0, "#FF0000"), o.addColorStop(0.17 * 1, "#FF00FF"), o.addColorStop(0.17 * 2, "#0000FF"), o.addColorStop(0.17 * 3, "#00FFFF"), o.addColorStop(0.17 * 4, "#00FF00"), o.addColorStop(0.17 * 5, "#FFFF00"), o.addColorStop(1, "#FF0000"), o;
}, U = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}, oe = (e) => parseInt(e, 16) || 0, co = ({ r: e, g: t, b: o }) => `#${U(e)}${U(t)}${U(o)}`.toUpperCase(), io = ({ r: e, g: t, b: o, a: s }) => {
  const n = (s * 255 | 256).toString(16).slice(1);
  return `#${U(e)}${U(t)}${U(o)}${n}`.toUpperCase();
}, po = (e) => (e = e.startsWith("#") ? e.slice(1) : e, {
  r: oe(e.slice(0, 2)),
  g: oe(e.slice(2, 4)),
  b: oe(e.slice(4, 6))
}), xe = (e) => {
  const t = (/rgba?\((.*?)\)/.exec(e) || ["", "0,0,0,1"])[1].split(",");
  return {
    r: Number(t[0]) || 0,
    g: Number(t[1]) || 0,
    b: Number(t[2]) || 0,
    a: Number(t[3] ?? 1)
  };
}, _o = (e) => {
  const { r: t, g: o, b: s } = {
    r: e.r / 255,
    g: e.g / 255,
    b: e.b / 255
  }, n = Math.max(t, o, s), l = Math.min(t, o, s), c = n - l;
  let a = 0;
  n === l ? a = 0 : n === t ? o >= s ? a = 60 * (o - s) / c : a = 60 * (o - s) / c + 360 : n === o ? a = 60 * (s - t) / c + 120 : n === s && (a = 60 * (t - o) / c + 240), a = Math.floor(a);
  const u = parseFloat((n === 0 ? 0 : 1 - l / n).toFixed(2)), r = parseFloat(n.toFixed(2));
  return { h: a, s: u, v: r };
}, j = (e) => {
  let t = { r: 0, g: 0, b: 0, a: 1 };
  if (/#/.test(e))
    t = { ...po(e), a: 1 };
  else if (/rgb/.test(e))
    t = xe(e);
  else if ($e(String)(e))
    t = xe(`rgba(${e})`);
  else if ($e(Object)(e)) {
    const s = "a" in e ? e.a : 1;
    t = { ...e, a: s };
  }
  const o = _o(t);
  return { ...t, ...o, a: t.a ?? 1 };
}, vo = (e) => (K("data-v-984337b3"), e = e(), X(), e), fo = ["for"], mo = { class: "checkbox" }, ho = ["id"], go = /* @__PURE__ */ vo(() => /* @__PURE__ */ d("span", { class: "checkmark" }, [
  /* @__PURE__ */ d("i", { "i-youcan-check": "" })
], -1)), yo = {
  key: 0,
  class: "label"
}, bo = /* @__PURE__ */ x({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = Ie(), n = C({
      get: () => o.modelValue,
      set: (c) => t("update:modelValue", c)
    }), l = lo.uid("checkbox");
    return (c, a) => (f(), m("label", { for: b(l) }, [
      d("div", mo, [
        z(d("input", {
          id: b(l),
          "onUpdate:modelValue": a[0] || (a[0] = (u) => ae(n) ? n.value = u : null),
          type: "checkbox",
          class: "input"
        }, null, 8, ho), [
          [Re, b(n)]
        ]),
        go
      ]),
      b(s).label ? (f(), m("div", yo, [
        k(c.$slots, "label", {}, void 0, !0)
      ])) : L("", !0)
    ], 8, fo));
  }
});
const $o = /* @__PURE__ */ S(bo, [["__scopeId", "data-v-984337b3"]]), wo = ["disabled"], xo = { class: "text" }, So = /* @__PURE__ */ x({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (f(), m("button", {
      ref: "target",
      class: B(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      d("span", xo, [
        k(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, wo));
  }
});
const Io = /* @__PURE__ */ S(So, [["__scopeId", "data-v-193bb3f6"]]), Co = /* @__PURE__ */ x({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (f(), Q(Io, le(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: re(() => [
        k(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const ko = /* @__PURE__ */ S(Co, [["__scopeId", "data-v-18934737"]]), Vo = { class: "dropdown" }, Eo = { class: "icon-container" }, Fo = /* @__PURE__ */ x({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o = "", items: s } = e, n = _(o), l = _(), c = _(!1), a = _(s), u = _(0), r = (p) => c.value = p, i = (p) => {
      p && (l.value = p, n.value = p.label, t("update:modelValue", l.value.value), r(!1));
    };
    J(() => {
      var p;
      l.value = s.find((v) => v.value === n.value || v.label === n.value), l.value ? n.value = (p = l.value) == null ? void 0 : p.label : n.value = "";
    });
    const h = (p) => {
      p = p.toLowerCase(), a.value = s.filter((v) => v.label.toLowerCase().includes(p) || v.value.toLowerCase().includes(p));
    }, g = _();
    return de(g, () => {
      u.value++, a.value = s, r(!1);
    }), (p, v) => (f(), m("div", Vo, [
      d("div", {
        ref_key: "_dropdown_trigger",
        ref: g,
        class: "input-container"
      }, [
        (f(), Q(Ce, {
          key: u.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": h,
          onFocus: v[0] || (v[0] = (y) => r(!0))
        }, null, 8, ["model-value", "placeholder"])),
        d("div", Eo, [
          d("i", {
            class: B(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: v[1] || (v[1] = (y) => r(!c.value))
          }, null, 2)
        ])
      ], 512),
      z(V(pe, {
        class: "items-menu",
        "model-value": l.value,
        items: a.value,
        "onUpdate:modelValue": i
      }, {
        no_result: re(() => [
          k(p.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [q, c.value]
      ])
    ]));
  }
});
const Oo = /* @__PURE__ */ S(Fo, [["__scopeId", "data-v-0d4f44d8"]]), Lo = { class: "dropdown" }, Po = { class: "text" }, Mo = { class: "input-container" }, Bo = /* @__PURE__ */ x({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: s, items: n, placeholder: l } = e, c = _(o), a = C(() => s), u = _(), r = _(!1), i = _(n), h = _(0), g = ($) => r.value = $, p = ($) => {
      $ && (u.value = $, c.value = "", t("update:dialCode", $.value), g(!1));
    };
    J(() => u.value = n.find(($) => $.value === a.value));
    const v = ($) => {
      $ = $.toLowerCase(), i.value = n.filter((w) => w.label.toLowerCase().includes($) || w.value.toLowerCase().includes($)), u.value && t("update:modelValue", $);
    }, y = _();
    return de(y, () => {
      i.value = n, c.value !== "" && h.value++, g(!1);
    }), ($, w) => {
      var I;
      return f(), m("div", Lo, [
        d("div", {
          ref_key: "_dropdown_trigger",
          ref: y,
          class: "handler"
        }, [
          d("div", {
            class: "trigger",
            onClick: w[0] || (w[0] = (P) => g(!r.value))
          }, [
            d("span", Po, W(((I = u.value) == null ? void 0 : I.value) || "unknown"), 1),
            d("i", {
              class: B(["icon", [r.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          d("div", Mo, [
            (f(), Q(N, {
              key: h.value,
              "model-value": c.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": v,
              onFocus: w[1] || (w[1] = (P) => {
                var F;
                return !((F = u.value) != null && F.value) && g(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        z(V(pe, {
          class: "items-menu",
          "model-value": u.value,
          items: e.items,
          "onUpdate:modelValue": p
        }, null, 8, ["model-value", "items"]), [
          [q, r.value]
        ])
      ]);
    };
  }
});
const Ro = /* @__PURE__ */ S(Bo, [["__scopeId", "data-v-037ace4c"]]), To = { class: "override" }, Ao = /* @__PURE__ */ x({
  __name: "Override",
  props: {
    color: { default: "" }
  },
  emits: ["overridecolor"],
  setup(e, { emit: t }) {
    const o = e, s = C({
      get: () => o.color,
      set: (n) => t("overridecolor", n.startsWith("#") ? n : `#${n}`)
    });
    return (n, l) => (f(), m("div", To, [
      V(N, {
        modelValue: b(s),
        "onUpdate:modelValue": l[0] || (l[0] = (c) => ae(s) ? s.value = c : null),
        class: "value/"
      }, null, 8, ["modelValue"])
    ]));
  }
}), Uo = {
  key: 0,
  class: "swatch-wrapper storage"
}, zo = { class: "swatches storage" }, No = ["onClick"], Ho = { class: "swatches" }, Do = ["onClick"], jo = /* @__PURE__ */ x({
  __name: "Swatches",
  props: {
    color: { default: _e },
    defaultSwatches: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const o = e, s = "youcan-theme-editor-colors", n = _(ke(4).toDataURL()), l = _([]);
    localStorage && s && (l.value = JSON.parse(localStorage.getItem(s)) || []);
    const c = (u) => {
      if (!u)
        return;
      const r = l.value || [], i = r.indexOf(u);
      i >= 0 && r.splice(i, 1), r.length >= 7 && r.pop(), r.unshift(u), l.value = r || [], localStorage && s && localStorage.setItem(s, JSON.stringify(r));
    }, a = (u) => {
      t("setcolor", u);
    };
    return Te(() => c(o.color)), (u, r) => (f(), m(G, null, [
      l.value.length ? (f(), m("div", Uo, [
        d("div", zo, [
          (f(!0), m(G, null, se(l.value, (i) => (f(), m("div", {
            key: i,
            class: "swatch",
            onClick: (h) => a(i)
          }, [
            d("div", {
              style: O({ background: `url(${n.value})` }),
              class: "alpha"
            }, null, 4),
            d("div", {
              style: O({ background: i }),
              class: "color"
            }, null, 4)
          ], 8, No))), 128))
        ])
      ])) : L("", !0),
      d("div", Ho, [
        (f(!0), m(G, null, se(e.defaultSwatches, (i) => (f(), m("div", {
          key: i,
          class: "swatch",
          onClick: (h) => a(i)
        }, [
          d("div", {
            style: O({ background: `url(${n.value})` }),
            class: "alpha"
          }, null, 4),
          d("div", {
            style: O({ background: i }),
            class: "color"
          }, null, 4)
        ], 8, Do))), 128))
      ])
    ], 64));
  }
});
const Wo = /* @__PURE__ */ S(jo, [["__scopeId", "data-v-8846510d"]]), Go = ["onMousedown"], Qo = /* @__PURE__ */ x({
  __name: "Saturation",
  props: {
    color: { default: ne },
    hsv: null,
    size: { default: 152 }
  },
  emits: ["setsaturation"],
  setup(e, { expose: t, emit: o }) {
    const s = e;
    ue((i) => ({
      "8f5329ec": `${e.size}px`
    }));
    const n = _(), l = _(), c = _({}), a = () => {
      const i = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = s.size, l.value.height = s.size, i.fillStyle = s.color, i.fillRect(0, 0, s.size, s.size), we(i, s.size, s.size, _e, "rgba(255, 255, 255, 0)"), we(i, s.size, s.size, "rgba(0, 0, 0, 0)", ne, "right");
    }, u = () => {
      c.value = {
        left: `${s.hsv.s * s.size - 5}px`,
        top: `${(1 - s.hsv.v) * s.size - 5}px`
      };
    }, r = (i) => {
      const { top: h, left: g } = n.value.getBoundingClientRect(), p = i.target.getContext("2d", { willReadFrequently: !0 });
      function v($) {
        let w = $.clientX - g, I = $.clientY - h;
        w < 0 && (w = 0), I < 0 && (I = 0), w > s.size && (w = s.size), I > s.size && (I = s.size), c.value = {
          left: `${w - 10}px`,
          top: `${I - 10}px`
        };
        const P = p.getImageData(Math.min(w, s.size - 1), Math.min(I, s.size - 1), 1, 1), [F, H, D] = P.data;
        o("setsaturation", { r: F, g: H, b: D });
      }
      v(i);
      const y = () => {
        document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y);
      };
      document.addEventListener("mousemove", v), document.addEventListener("mouseup", y);
    };
    return Y(() => {
      a(), u();
    }), t({ renderColor: a, renderSlider: u }), (i, h) => (f(), m("div", {
      ref_key: "wrapper",
      ref: n,
      class: "saturation-wrapper",
      onMousedown: ce(r, ["prevent", "stop"])
    }, [
      d("canvas", {
        ref_key: "canvas",
        ref: l,
        class: "canvas"
      }, null, 512),
      d("i", {
        "i-youcan-pointer": "",
        style: O(c.value),
        class: "slider"
      }, null, 4)
    ], 40, Go));
  }
});
const qo = /* @__PURE__ */ S(Qo, [["__scopeId", "data-v-9912972f"]]), Ko = ["onMousedown"], Xo = /* @__PURE__ */ x({
  __name: "Hue",
  props: {
    hsv: null,
    width: { default: 15 },
    height: { default: 152 }
  },
  emits: ["sethue"],
  setup(e, { expose: t, emit: o }) {
    const { hsv: s, width: n, height: l } = e;
    ue((g) => ({
      da20afe6: `${n}px`,
      fe3c5554: `${l}px`
    }));
    const c = _(), a = _(), u = _({}), r = () => {
      const g = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = n, a.value.height = l;
      const p = uo(g, n);
      g.fillStyle = p, g.fillRect(0, 0, n, l);
    }, i = () => {
      u.value = {
        left: `${(1 - s.h / 360) * n - 2}px`
      };
    }, h = (g) => {
      const { left: p } = c.value.getBoundingClientRect(), v = a.value.getContext("2d", { willReadFrequently: !0 });
      function y(w) {
        let I = w.clientX - p;
        I < 0 && (I = 0), I > n && (I = n), u.value = {
          left: `${I - 12}px`
        };
        const P = v.getImageData(Math.min(I, n - 1), 1, 1, 1), [F, H, D] = P.data;
        o("sethue", { r: F, g: H, b: D });
      }
      y(g);
      const $ = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", $);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", $);
    };
    return Y(() => {
      r(), i();
    }), t({ renderColor: r, renderSlider: i }), (g, p) => (f(), m("div", {
      ref_key: "wrapper",
      ref: c,
      class: "hue-wrapper",
      onMousedown: ce(h, ["prevent", "stop"])
    }, [
      d("canvas", {
        ref_key: "canvas",
        ref: a,
        class: "canvas"
      }, null, 512),
      d("i", {
        "i-youcan-pointer": "",
        style: O(u.value),
        class: "slider"
      }, null, 4)
    ], 40, Ko));
  }
});
const Jo = /* @__PURE__ */ S(Xo, [["__scopeId", "data-v-c1489598"]]), Yo = ["onMousedown"], Zo = /* @__PURE__ */ x({
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
    ue((i) => ({
      "726d72ca": `${e.width}px`,
      "6f87eef0": `${e.height}px`
    }));
    const s = 5, n = _(), l = _(), c = _({}), a = () => {
      const i = ke(s), h = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = o.width, l.value.height = o.height, h.fillStyle = h.createPattern(i, "repeat"), h.fillRect(0, 0, o.width, o.height), ro(h, o.width, o.height, "rgba(255, 255, 255, 0)", o.color);
    }, u = () => {
      c.value = {
        left: `${o.rgba.a * o.width - 12}px`
      };
    }, r = (i) => {
      const { left: h } = n.value.getBoundingClientRect();
      function g(v) {
        let y = v.clientX - h;
        y < 0 && (y = 0), y > o.width && (y = o.width), t("setalpha", parseFloat((y / o.width).toFixed(2)));
      }
      g(i);
      const p = () => {
        document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", p);
      };
      document.addEventListener("mousemove", g), document.addEventListener("mouseup", p);
    };
    return Y(() => {
      a(), u();
    }), M(() => o.color, () => a()), M(() => o.rgba, () => u()), (i, h) => (f(), m("div", {
      ref_key: "wrapper",
      ref: n,
      class: "alpha-wrapper",
      onMousedown: ce(r, ["prevent", "stop"])
    }, [
      d("canvas", {
        ref_key: "canvas",
        ref: l,
        class: "canvas"
      }, null, 512),
      d("i", {
        "i-youcan-pointer": "",
        style: O(c.value),
        class: "slider"
      }, null, 4)
    ], 40, Yo));
  }
});
const es = /* @__PURE__ */ S(Zo, [["__scopeId", "data-v-85346e4b"]]), Ve = (e) => (K("data-v-9c84931e"), e = e(), X(), e), ts = { class: "color-picker" }, os = { class: "sliders" }, ss = { class: "color-override" }, ns = /* @__PURE__ */ Ve(() => /* @__PURE__ */ d("label", null, "HEX", -1)), ls = /* @__PURE__ */ Ve(() => /* @__PURE__ */ d("hr", null, null, -1)), as = { class: "swatches" }, rs = /* @__PURE__ */ x({
  __name: "ColorPicker",
  props: {
    color: { default: "#000000" },
    defaults: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const { color: o, defaults: s } = e, n = _(), l = _(), c = _(""), a = _(""), u = _(""), r = _({ r: 0, g: 0, b: 0, a: 1, h: 0, s: 0, v: 0 }), i = C(() => ({ r: r.value.r, g: r.value.g, b: r.value.b, a: r.value.a })), h = C(() => ({ h: r.value.h, s: r.value.s, v: r.value.v })), g = C(() => co(i.value)), p = C(() => io(i.value)), v = C(() => `${r.value.r}, ${r.value.g}, ${r.value.b}, ${r.value.a}`), y = C(() => `rgb(${r.value.r}, ${r.value.g}, ${r.value.b})`), $ = C(() => `rgba(${v.value})`), w = () => {
      c.value = g.value, u.value = v.value, a.value = p.value;
    };
    Y(() => {
      r.value = j(o), w();
    });
    const I = (E) => {
      r.value = j(E), w();
    }, P = (E) => {
      r.value = j(E), w(), ee(() => {
        n.value.renderColor(), n.value.renderSlider();
      });
    }, F = (E) => {
      r.value.a = E, w();
    }, H = (E) => {
      r.value = j(E), c.value = E, u.value = v.value, ee(() => {
        l.value.renderSlider(), n.value.renderColor(), n.value.renderSlider();
      });
    }, D = (E) => {
      r.value = j(E), w(), ee(() => {
        l.value.renderSlider(), n.value.renderColor(), n.value.renderSlider();
      });
    };
    return M(
      i,
      () => t("setcolor", { rgba: i.value, hsv: h.value, hex: c.value, hexa: a.value })
    ), (E, is) => (f(), m("div", ts, [
      V(qo, {
        ref_key: "saturationElement",
        ref: n,
        class: "color-saturation",
        color: b(y),
        hsv: b(h),
        size: 224,
        onSetsaturation: I
      }, null, 8, ["color", "hsv"]),
      d("div", os, [
        V(Jo, {
          ref_key: "hueElement",
          ref: l,
          class: "color-hue",
          hsv: b(h),
          width: 224,
          height: 10,
          onSethue: P
        }, null, 8, ["hsv"]),
        V(es, {
          class: "color-alpha",
          color: b(y),
          rgba: b(i),
          width: 224,
          height: 10,
          onSetalpha: F
        }, null, 8, ["color", "rgba"])
      ]),
      d("div", ss, [
        ns,
        V(Ao, {
          class: "hex-input",
          type: "#",
          color: a.value,
          onOverridecolor: H
        }, null, 8, ["color"])
      ]),
      ls,
      d("div", as, [
        V(Wo, {
          color: b($),
          "default-swatches": s,
          onSetcolor: D
        }, null, 8, ["color"])
      ])
    ]));
  }
});
const us = /* @__PURE__ */ S(rs, [["__scopeId", "data-v-9c84931e"]]), Se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: Ce,
  StoreSlugInput: $t,
  Dropdown: Bt,
  PasswordInput: At,
  Note: jt,
  Loading: Jt,
  Checkbox: $o,
  PrimaryButton: ko,
  ComboBox: Oo,
  PhoneNumberInput: Ro,
  Input: N,
  ColorPicker: us
}, Symbol.toStringTag, { value: "Module" }));
function cs(e) {
  for (const t in Se)
    e.component(t, Se[t]);
}
const ps = { install: cs };
export {
  $o as Checkbox,
  us as ColorPicker,
  Oo as ComboBox,
  Bt as Dropdown,
  N as Input,
  Jt as Loading,
  jt as Note,
  At as PasswordInput,
  Ro as PhoneNumberInput,
  ko as PrimaryButton,
  $t as StoreSlugInput,
  Ce as TextInput,
  ps as default
};

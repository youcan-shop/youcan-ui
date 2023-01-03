import { unref as x, ref as f, watch as U, customRef as le, getCurrentScope as ae, onScopeDispose as ue, computed as V, openBlock as v, createElementBlock as m, defineComponent as w, useSlots as ce, useAttrs as re, onBeforeMount as de, normalizeClass as C, renderSlot as g, createCommentVNode as E, withDirectives as B, createElementVNode as i, mergeProps as F, isRef as ie, vModelText as pe, createBlock as A, createVNode as S, Transition as _e, withCtx as Q, vShow as D, toDisplayString as T, pushScopeId as R, popScopeId as j, Fragment as ve, renderList as fe, watchEffect as N, normalizeStyle as me, vModelCheckbox as he } from "vue";
const M = typeof window < "u", G = (e) => typeof e < "u", J = (e) => typeof e == "function", ye = (e) => typeof e == "string", ge = () => {
};
function be(e) {
  return typeof e == "function" ? e() : x(e);
}
function $e(e) {
  return e;
}
function Ie(e, t) {
  let s, o, n;
  const u = f(!0), c = () => {
    u.value = !0, n();
  };
  U(e, c, { flush: "sync" });
  const l = J(t) ? t : t.get, a = J(t) ? void 0 : t.set, d = le((p, h) => (o = p, n = h, {
    get() {
      return u.value && (s = l(), u.value = !1), o(), s;
    },
    set(y) {
      a == null || a(y);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = c), d;
}
function we(e) {
  return ae() ? (ue(e), !0) : !1;
}
function O(e) {
  var t;
  const s = be(e);
  return (t = s == null ? void 0 : s.$el) != null ? t : s;
}
const H = M ? window : void 0;
M && window.document;
M && window.navigator;
M && window.location;
function P(...e) {
  let t, s, o, n;
  if (ye(e[0]) || Array.isArray(e[0]) ? ([s, o, n] = e, t = H) : [t, s, o, n] = e, !t)
    return ge;
  Array.isArray(s) || (s = [s]), Array.isArray(o) || (o = [o]);
  const u = [], c = () => {
    u.forEach((p) => p()), u.length = 0;
  }, l = (p, h, y) => (p.addEventListener(h, y, n), () => p.removeEventListener(h, y, n)), a = U(() => O(t), (p) => {
    c(), p && u.push(...s.flatMap((h) => o.map((y) => l(p, h, y))));
  }, { immediate: !0, flush: "post" }), d = () => {
    a(), c();
  };
  return we(d), d;
}
function W(e, t, s = {}) {
  const { window: o = H, ignore: n = [], capture: u = !0, detectIframe: c = !1 } = s;
  if (!o)
    return;
  let l = !0, a;
  const d = (r) => n.some((_) => {
    if (typeof _ == "string")
      return Array.from(o.document.querySelectorAll(_)).some((b) => b === r.target || r.composedPath().includes(b));
    {
      const b = O(_);
      return b && (r.target === b || r.composedPath().includes(b));
    }
  }), p = (r) => {
    o.clearTimeout(a);
    const _ = O(e);
    if (!(!_ || _ === r.target || r.composedPath().includes(_))) {
      if (r.detail === 0 && (l = !d(r)), !l) {
        l = !0;
        return;
      }
      t(r);
    }
  }, h = [
    P(o, "click", p, { passive: !0, capture: u }),
    P(o, "pointerdown", (r) => {
      const _ = O(e);
      _ && (l = !r.composedPath().includes(_) && !d(r));
    }, { passive: !0 }),
    P(o, "pointerup", (r) => {
      if (r.button === 0) {
        const _ = r.composedPath();
        r.composedPath = () => _, a = o.setTimeout(() => p(r), 50);
      }
    }, { passive: !0 }),
    c && P(o, "blur", (r) => {
      var _;
      const b = O(e);
      ((_ = o.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(b != null && b.contains(o.document.activeElement)) && t(r);
    })
  ].filter(Boolean);
  return () => h.forEach((r) => r());
}
function xe(e = {}) {
  const { window: t = H } = e, s = Ie(() => null, () => t == null ? void 0 : t.document.activeElement);
  return t && (P(t, "blur", (o) => {
    o.relatedTarget !== null && s.trigger();
  }, !0), P(t, "focus", s.trigger, !0)), s;
}
const X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__";
X[Y] = X[Y] || {};
function Ve(e, t = {}) {
  const { initialValue: s = !1 } = t, o = xe(t), n = V(() => O(e)), u = V({
    get() {
      return G(o.value) && G(n.value) && o.value === n.value;
    },
    set(c) {
      var l, a;
      !c && u.value && ((l = n.value) == null || l.blur()), c && !u.value && ((a = n.value) == null || a.focus());
    }
  });
  return U(n, () => {
    u.value = s;
  }, { immediate: !0, flush: "post" }), { focused: u };
}
var Z;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Z || (Z = {}));
var ke = Object.defineProperty, ee = Object.getOwnPropertySymbols, Se = Object.prototype.hasOwnProperty, Ce = Object.prototype.propertyIsEnumerable, te = (e, t, s) => t in e ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, Oe = (e, t) => {
  for (var s in t || (t = {}))
    Se.call(t, s) && te(e, s, t[s]);
  if (ee)
    for (var s of ee(t))
      Ce.call(t, s) && te(e, s, t[s]);
  return e;
};
const Pe = {
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
Oe({
  linear: $e
}, Pe);
const I = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of t)
    s[o] = n;
  return s;
}, Ee = {}, Be = { class: "prefix" };
function Te(e, t) {
  return v(), m("div", Be, " Prefix ");
}
const Ne = /* @__PURE__ */ I(Ee, [["render", Te], ["__scopeId", "data-v-9b604abd"]]), Le = {
  key: 0,
  class: "prefix"
}, Ue = { class: "tail" }, Ae = {
  key: 0,
  class: "icon"
}, De = {
  key: 1,
  class: "suffix"
}, Me = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, o = f(), n = ce(), u = re(), { focused: c } = Ve(o), l = V({
      get: () => s.modelValue,
      set: (a) => t("update:modelValue", a)
    });
    return de(() => {
      if (!n.prefix)
        return;
      const a = n.prefix()[0].type;
      if (!(typeof a != "symbol" && [Ne].find((d) => d === a)))
        throw new TypeError("Invalid prefix");
    }), (a, d) => (v(), m("div", {
      class: C([{ enabled: !x(u).disabled, focused: x(c), error: e.error }, "wrapper"])
    }, [
      x(n).prefix ? (v(), m("div", Le, [
        g(a.$slots, "prefix", {}, void 0, !0)
      ])) : E("", !0),
      B(i("input", F({
        ref_key: "primitive",
        ref: o,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => ie(l) ? l.value = p : null),
        class: "input",
        type: "text"
      }, a.$attrs), null, 16), [
        [pe, x(l)]
      ]),
      i("div", Ue, [
        x(n).icon ? (v(), m("div", Ae, [
          g(a.$slots, "icon", {}, void 0, !0)
        ])) : E("", !0),
        x(n).suffix ? (v(), m("div", De, [
          g(a.$slots, "suffix", {}, void 0, !0)
        ])) : E("", !0)
      ])
    ], 2));
  }
});
const L = /* @__PURE__ */ I(Me, [["__scopeId", "data-v-cfaee079"]]), se = /* @__PURE__ */ w({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, o = V(() => s.modelValue), n = (u) => {
      t("update:modelValue", u);
    };
    return (u, c) => (v(), A(L, F({
      "model-value": x(o),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, u.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), Fe = { class: "store-slug-input" }, Qe = { class: "input-container" }, Re = { class: "popover" }, je = { class: "store-slug-box-content" }, He = { class: "box-description" }, We = { class: "store-slug-title" }, ze = { class: "store-slug-description" }, Ke = { class: "border-example" }, qe = { class: "border-icon-example" }, Ge = { class: "input-border-example" }, Je = { class: "note" }, Xe = { class: "icon-note" }, Ye = { class: "note-description" }, Ze = { class: "slug-suffix" }, et = /* @__PURE__ */ w({
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
    const o = f(e.modelValue), n = f(!1), u = (a) => t("update:modelValue", a), c = () => n.value = !0, l = () => n.value = !1;
    return (a, d) => (v(), m("div", Fe, [
      i("div", Qe, [
        S(_e, { name: "fade" }, {
          default: Q(() => [
            B(i("div", Re, [
              i("div", je, [
                i("div", He, [
                  i("div", We, [
                    g(a.$slots, "title", {}, void 0, !0)
                  ]),
                  i("div", ze, [
                    g(a.$slots, "description", {}, void 0, !0)
                  ]),
                  i("div", Ke, [
                    i("div", qe, [
                      g(a.$slots, "example", {}, void 0, !0)
                    ]),
                    i("div", Ge, [
                      g(a.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                i("div", Je, [
                  i("div", Xe, [
                    g(a.$slots, "icon", {}, void 0, !0)
                  ]),
                  i("span", Ye, [
                    g(a.$slots, "note-desc", {}, void 0, !0)
                  ])
                ])
              ])
            ], 512), [
              [D, n.value]
            ])
          ]),
          _: 3
        }),
        S(L, {
          "model-value": o.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": u,
          onFocus: c,
          onBlur: l
        }, null, 8, ["model-value", "placeholder"]),
        i("span", Ze, T(e.slugSuffix), 1)
      ])
    ]));
  }
});
const tt = /* @__PURE__ */ I(et, [["__scopeId", "data-v-ad7dc538"]]), ot = (e) => (R("data-v-adc57234"), e = e(), j(), e), st = { class: "label-item" }, nt = /* @__PURE__ */ ot(() => /* @__PURE__ */ i("i", { class: "i-tabler:chevron-down icon" }, null, -1)), lt = /* @__PURE__ */ w({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const s = e, o = V(() => s.item), n = f();
    return W(n, () => t("clickOutside")), (u, c) => {
      var l;
      return v(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (a) => t("click"))
      }, [
        i("div", st, [
          i("i", {
            class: C([(l = x(o)) == null ? void 0 : l.icon])
          }, null, 2),
          i("span", null, T(x(o) ? x(o).label : e.placeholder || "Please select an option"), 1)
        ]),
        nt
      ], 512);
    };
  }
});
const at = /* @__PURE__ */ I(lt, [["__scopeId", "data-v-adc57234"]]), ut = { class: "dropdown-content" }, ct = ["onClick"], rt = ["src"], dt = {
  key: 2,
  class: "icon i-tabler:check"
}, it = {
  key: 1,
  class: "no-results"
}, pt = /* @__PURE__ */ w({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = f(e.modelValue), n = (u) => {
      o.value = u, t("update:modelValue", o.value);
    };
    return (u, c) => (v(), m("div", ut, [
      e.items.length > 0 ? (v(!0), m(ve, { key: 0 }, fe(e.items, (l) => (v(), m("div", {
        key: l.label,
        class: "dropdown-item",
        onClick: (a) => n(l)
      }, [
        l.icon ? (v(), m("i", {
          key: 0,
          class: C(l.icon)
        }, null, 2)) : E("", !0),
        l.image ? (v(), m("img", {
          key: 1,
          src: l.image,
          class: "image"
        }, null, 8, rt)) : E("", !0),
        i("span", null, T(l.label), 1),
        l && o.value && l.value === o.value.value ? (v(), m("i", dt)) : E("", !0)
      ], 8, ct))), 128)) : (v(), m("div", it, [
        g(u.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const z = /* @__PURE__ */ I(pt, [["__scopeId", "data-v-2f74106b"]]), _t = { class: "dropdown" }, vt = /* @__PURE__ */ w({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: s, items: o, placeholder: n } = e, u = V(() => s), c = f(), l = f(!1), a = (d) => {
      d && (c.value = d, t("update:modelValue", c.value.value), l.value = !1);
    };
    return N(() => c.value = o.find((d) => d.value === u.value)), (d, p) => (v(), m("div", _t, [
      S(at, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: p[0] || (p[0] = (h) => l.value = !l.value),
        onClickOutside: p[1] || (p[1] = (h) => l.value = !1)
      }, null, 8, ["item", "placeholder"]),
      B(S(z, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": a
      }, null, 8, ["model-value", "items"]), [
        [D, l.value]
      ])
    ]));
  }
});
const ft = /* @__PURE__ */ I(vt, [["__scopeId", "data-v-a4109ef5"]]), mt = { class: "password-input" }, ht = /* @__PURE__ */ w({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean },
    id: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: s, passwordHidden: o = !0 } = e, n = f(), u = f(o), c = f(s), l = (a) => {
      c.value = a, t("update:modelValue", a);
    };
    return (a, d) => (v(), m("div", mt, [
      i("button", {
        class: "password-icon",
        type: "button",
        onClick: d[0] || (d[0] = (p) => u.value = !u.value)
      }, [
        i("i", {
          class: C(u.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      S(L, {
        id: e.id,
        ref_key: "baseInput",
        ref: n,
        type: u.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": l
      }, null, 8, ["id", "type", "placeholder", "model-value"])
    ]));
  }
});
const yt = /* @__PURE__ */ I(ht, [["__scopeId", "data-v-e1b15513"]]);
const gt = {}, bt = { class: "note" }, $t = { class: "icon" }, It = { class: "content" };
function wt(e, t) {
  return v(), m("div", bt, [
    i("div", $t, [
      g(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    i("div", It, [
      g(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const xt = /* @__PURE__ */ I(gt, [["render", wt], ["__scopeId", "data-v-5be167d4"]]), Vt = (e) => (R("data-v-dbbecf04"), e = e(), j(), e), kt = { class: "loading" }, St = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, Ct = /* @__PURE__ */ Vt(() => /* @__PURE__ */ i("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), Ot = { class: "loading-value" }, Pt = /* @__PURE__ */ w({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const s = e, o = f(0), n = f(!1), u = V(() => ({
      strokeDashoffset: `${(100 - o.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return U(s, () => {
      o.value = 0, n.value = !0;
    }), N(() => {
      const c = s.duration, l = c / 100, a = 100 / (c / l);
      let d = 0;
      n.value = !0;
      const p = setInterval(() => {
        d += a, o.value = d, d >= 100 && (clearInterval(p), n.value = !1, t("complete"));
      }, l);
      return () => clearInterval(p);
    }), (c, l) => (v(), m("div", kt, [
      (v(), m("svg", St, [
        Ct,
        i("circle", {
          class: "loading-circle-progress",
          style: me(x(u)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      i("div", Ot, T(`${o.value}%`), 1)
    ]));
  }
});
const Et = /* @__PURE__ */ I(Pt, [["__scopeId", "data-v-dbbecf04"]]), Bt = (e) => (R("data-v-539dca17"), e = e(), j(), e), Tt = { class: "checkbox-container" }, Nt = ["id"], Lt = /* @__PURE__ */ Bt(() => /* @__PURE__ */ i("span", { class: "checkmark" }, null, -1)), Ut = /* @__PURE__ */ w({
  __name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, o = f(s.id), n = f(s.modelValue);
    return N(() => {
      t("update:modelValue", n.value);
    }), (u, c) => (v(), m("label", Tt, [
      B(i("input", {
        id: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (l) => n.value = l),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, Nt), [
        [he, n.value]
      ]),
      Lt
    ]));
  }
});
const At = /* @__PURE__ */ I(Ut, [["__scopeId", "data-v-539dca17"]]), Dt = ["disabled"], Mt = { class: "text" }, Ft = /* @__PURE__ */ w({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, s) => (v(), m("button", {
      ref: "target",
      class: C(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      i("span", Mt, [
        g(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, Dt));
  }
});
const Qt = /* @__PURE__ */ I(Ft, [["__scopeId", "data-v-193bb3f6"]]), Rt = /* @__PURE__ */ w({
  __name: "PrimaryButton",
  setup(e) {
    return (t, s) => (v(), A(Qt, F(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: Q(() => [
        g(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const jt = /* @__PURE__ */ I(Rt, [["__scopeId", "data-v-18934737"]]), Ht = { class: "dropdown" }, Wt = { class: "icon-container" }, zt = /* @__PURE__ */ w({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: s = "", items: o } = e, n = f(s), u = f(), c = f(!1), l = f(o), a = f(0), d = (r) => c.value = r, p = (r) => {
      r && (u.value = r, n.value = r.label, t("update:modelValue", u.value.value), d(!1));
    };
    N(() => {
      var r;
      u.value = o.find((_) => _.value === n.value || _.label === n.value), u.value ? n.value = (r = u.value) == null ? void 0 : r.label : n.value = "";
    });
    const h = (r) => {
      r = r.toLowerCase(), l.value = o.filter((_) => _.label.toLowerCase().includes(r) || _.value.toLowerCase().includes(r));
    }, y = f();
    return W(y, () => {
      a.value++, l.value = o, d(!1);
    }), (r, _) => (v(), m("div", Ht, [
      i("div", {
        ref_key: "_dropdown_trigger",
        ref: y,
        class: "input-container"
      }, [
        (v(), A(se, {
          key: a.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": h,
          onFocus: _[0] || (_[0] = (b) => d(!0))
        }, null, 8, ["model-value", "placeholder"])),
        i("div", Wt, [
          i("i", {
            class: C(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: _[1] || (_[1] = (b) => d(!c.value))
          }, null, 2)
        ])
      ], 512),
      B(S(z, {
        class: "items-menu",
        "model-value": u.value,
        items: l.value,
        "onUpdate:modelValue": p
      }, {
        no_result: Q(() => [
          g(r.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [D, c.value]
      ])
    ]));
  }
});
const Kt = /* @__PURE__ */ I(zt, [["__scopeId", "data-v-0d4f44d8"]]), qt = { class: "dropdown" }, Gt = { class: "text" }, Jt = { class: "input-container" }, Xt = /* @__PURE__ */ w({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: s, dialCode: o, items: n, placeholder: u } = e, c = f(s), l = V(() => o), a = f(), d = f(!1), p = f(n), h = f(0), y = ($) => d.value = $, r = ($) => {
      $ && (a.value = $, c.value = "", t("update:dialCode", $.value), y(!1));
    };
    N(() => a.value = n.find(($) => $.value === l.value));
    const _ = ($) => {
      $ = $.toLowerCase(), p.value = n.filter((k) => k.label.toLowerCase().includes($) || k.value.toLowerCase().includes($)), a.value && t("update:modelValue", $);
    }, b = f();
    return W(b, () => {
      p.value = n, c.value !== "" && h.value++, y(!1);
    }), ($, k) => {
      var K;
      return v(), m("div", qt, [
        i("div", {
          ref_key: "_dropdown_trigger",
          ref: b,
          class: "handler"
        }, [
          i("div", {
            class: "trigger",
            onClick: k[0] || (k[0] = (ne) => y(!d.value))
          }, [
            i("span", Gt, T(((K = a.value) == null ? void 0 : K.value) || "unknown"), 1),
            i("i", {
              class: C(["icon", [d.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          i("div", Jt, [
            (v(), A(L, {
              key: h.value,
              "model-value": c.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": _,
              onFocus: k[1] || (k[1] = (ne) => {
                var q;
                return !((q = a.value) != null && q.value) && y(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        B(S(z, {
          class: "items-menu",
          "model-value": a.value,
          items: e.items,
          "onUpdate:modelValue": r
        }, null, 8, ["model-value", "items"]), [
          [D, d.value]
        ])
      ]);
    };
  }
});
const Yt = /* @__PURE__ */ I(Xt, [["__scopeId", "data-v-037ace4c"]]), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: se,
  StoreSlugInput: tt,
  Dropdown: ft,
  PasswordInput: yt,
  Note: xt,
  Loading: Et,
  Checkbox: At,
  PrimaryButton: jt,
  ComboBox: Kt,
  PhoneNumberInput: Yt,
  Input: L
}, Symbol.toStringTag, { value: "Module" }));
function Zt(e) {
  for (const t in oe)
    e.component(t, oe[t]);
}
const to = { install: Zt };
export {
  At as Checkbox,
  Kt as ComboBox,
  ft as Dropdown,
  L as Input,
  Et as Loading,
  xt as Note,
  yt as PasswordInput,
  Yt as PhoneNumberInput,
  jt as PrimaryButton,
  tt as StoreSlugInput,
  se as TextInput,
  to as default
};

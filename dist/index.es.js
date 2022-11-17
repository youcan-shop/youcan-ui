import { defineComponent as b, computed as x, openBlock as v, createElementBlock as m, mergeProps as M, unref as I, createBlock as Q, ref as p, createElementVNode as a, createVNode as V, Transition as se, withCtx as te, withDirectives as P, vShow as D, toDisplayString as C, pushScopeId as B, popScopeId as E, getCurrentScope as ae, onScopeDispose as ue, watch as oe, normalizeClass as S, Fragment as ce, renderList as de, createCommentVNode as K, watchEffect as N, renderSlot as L, normalizeStyle as re, vModelCheckbox as ie } from "vue";
const pe = ["value", "type", "placeholder"], _e = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const o = e, n = x(() => o.modelValue), l = x(() => o.type), u = ({ target: d }) => {
      t("update:modelValue", d.value);
    }, c = () => t("focus"), s = () => t("blur");
    return (d, r) => (v(), m("input", M({
      value: I(n),
      type: I(l),
      placeholder: e.placeholder,
      class: "input"
    }, d.$attrs, {
      onInput: u,
      onFocus: c,
      onBlur: s
    }), null, 16, pe));
  }
});
const g = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, H = /* @__PURE__ */ g(_e, [["__scopeId", "data-v-0dfcb387"]]), j = /* @__PURE__ */ b({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = x(() => o.modelValue), l = (u) => {
      t("update:modelValue", u);
    };
    return (u, c) => (v(), Q(H, M({
      "model-value": I(n),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, u.$attrs, { "onUpdate:modelValue": l }), null, 16, ["model-value", "placeholder"]));
  }
}), ve = (e) => (B("data-v-6d180ddd"), e = e(), E(), e), me = { class: "store-slug-input" }, fe = { class: "input-container" }, he = { class: "popover" }, ye = /* @__PURE__ */ ve(() => /* @__PURE__ */ a("div", { class: "store-slug-box-content" }, [
  /* @__PURE__ */ a("div", { class: "box-description" }, [
    /* @__PURE__ */ a("p", { class: "store-slug-title" }, " Store slug "),
    /* @__PURE__ */ a("p", { class: "store-slug-description" }, " The slug you choose will be your store's domain name that your customers will see. "),
    /* @__PURE__ */ a("div", { class: "border-example" }, [
      /* @__PURE__ */ a("i", { class: "border-icon-example i-tabler-search" }),
      /* @__PURE__ */ a("span", { class: "input-border-example" }, "example.youcan.shop")
    ])
  ]),
  /* @__PURE__ */ a("div", { class: "note" }, [
    /* @__PURE__ */ a("div", null, [
      /* @__PURE__ */ a("i", { class: "icon-note i-tabler-alert-circle" })
    ]),
    /* @__PURE__ */ a("span", { class: "note-description" }, " You can always replace it with a custom domain name you purchased. ")
  ])
], -1)), be = [
  ye
], ge = { class: "slug-suffix" }, Ie = /* @__PURE__ */ b({
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
    const n = p(e.modelValue), l = p(!1), u = (d) => t("update:modelValue", d), c = () => l.value = !0, s = () => l.value = !1;
    return (d, r) => (v(), m("div", me, [
      a("div", fe, [
        V(se, { name: "fade" }, {
          default: te(() => [
            P(a("div", he, be, 512), [
              [D, l.value]
            ])
          ]),
          _: 1
        }),
        V(H, {
          "model-value": n.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": u,
          onFocus: c,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        a("span", ge, C(e.slugSuffix), 1)
      ])
    ]));
  }
});
const we = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-6d180ddd"]]);
var G;
const T = typeof window < "u", $e = (e) => typeof e == "string", F = () => {
};
T && ((G = window == null ? void 0 : window.navigator) == null ? void 0 : G.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xe(e) {
  return typeof e == "function" ? e() : I(e);
}
function Ve(e) {
  return e;
}
function Se(e) {
  return ae() ? (ue(e), !0) : !1;
}
function O(e) {
  var t;
  const o = xe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ne = T ? window : void 0;
T && window.document;
T && window.navigator;
T && window.location;
function U(...e) {
  let t, o, n, l;
  if ($e(e[0]) ? ([o, n, l] = e, t = ne) : [t, o, n, l] = e, !t)
    return F;
  let u = F;
  const c = oe(() => O(t), (d) => {
    u(), d && (d.addEventListener(o, n, l), u = () => {
      d.removeEventListener(o, n, l), u = F;
    });
  }, { immediate: !0, flush: "post" }), s = () => {
    c(), u();
  };
  return Se(s), s;
}
function A(e, t, o = {}) {
  const { window: n = ne, ignore: l, capture: u = !0, detectIframe: c = !1 } = o;
  if (!n)
    return;
  const s = p(!0);
  let d;
  const r = (_) => {
    n.clearTimeout(d);
    const i = O(e), y = _.composedPath();
    !i || i === _.target || y.includes(i) || !s.value || l && l.length > 0 && l.some((k) => {
      const h = O(k);
      return h && (_.target === h || y.includes(h));
    }) || t(_);
  }, f = [
    U(n, "click", r, { passive: !0, capture: u }),
    U(n, "pointerdown", (_) => {
      const i = O(e);
      s.value = !!i && !_.composedPath().includes(i);
    }, { passive: !0 }),
    U(n, "pointerup", (_) => {
      if (_.button === 0) {
        const i = _.composedPath();
        _.composedPath = () => i, d = n.setTimeout(() => r(_), 50);
      }
    }, { passive: !0 }),
    c && U(n, "blur", (_) => {
      var i;
      const y = O(e);
      ((i = document.activeElement) == null ? void 0 : i.tagName) === "IFRAME" && !(y != null && y.contains(document.activeElement)) && t(_);
    })
  ].filter(Boolean);
  return () => f.forEach((_) => _());
}
const Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, q = "__vueuse_ssr_handlers__";
Y[q] = Y[q] || {};
var J;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(J || (J = {}));
var ke = Object.defineProperty, X = Object.getOwnPropertySymbols, Oe = Object.prototype.hasOwnProperty, Pe = Object.prototype.propertyIsEnumerable, Z = (e, t, o) => t in e ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Ce = (e, t) => {
  for (var o in t || (t = {}))
    Oe.call(t, o) && Z(e, o, t[o]);
  if (X)
    for (var o of X(t))
      Pe.call(t, o) && Z(e, o, t[o]);
  return e;
};
const Be = {
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
Ce({
  linear: Ve
}, Be);
const Ee = (e) => (B("data-v-b19d081d"), e = e(), E(), e), Ne = { class: "label-item" }, Te = /* @__PURE__ */ Ee(() => /* @__PURE__ */ a("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Ue = /* @__PURE__ */ b({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, n = x(() => o.item), l = p();
    return A(l, () => t("clickOutside")), (u, c) => {
      var s;
      return v(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: l,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (d) => t("click"))
      }, [
        a("div", Ne, [
          a("i", {
            class: S([(s = I(n)) == null ? void 0 : s.icon])
          }, null, 2),
          a("span", null, C(I(n) ? I(n).label : e.placeholder || "Please select an option"), 1)
        ]),
        Te
      ], 512);
    };
  }
});
const Le = /* @__PURE__ */ g(Ue, [["__scopeId", "data-v-b19d081d"]]), Qe = (e) => (B("data-v-78fb5b73"), e = e(), E(), e), De = { class: "dropdown-content" }, Fe = ["onClick"], Me = ["src"], He = {
  key: 1,
  class: "no-results"
}, je = /* @__PURE__ */ Qe(() => /* @__PURE__ */ a("span", null, "Your search came up with no results.", -1)), Ae = [
  je
], Re = /* @__PURE__ */ b({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = p(e.modelValue), l = (u) => {
      n.value = u, t("update:modelValue", n.value);
    };
    return (u, c) => (v(), m("div", De, [
      e.items.length > 0 ? (v(!0), m(ce, { key: 0 }, de(e.items, (s) => (v(), m("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (d) => l(s)
      }, [
        s.icon ? (v(), m("i", {
          key: 0,
          class: S(s.icon)
        }, null, 2)) : K("", !0),
        s.image ? (v(), m("img", {
          key: 1,
          src: s.image
        }, null, 8, Me)) : K("", !0),
        a("span", null, C(s.label), 1)
      ], 8, Fe))), 128)) : (v(), m("div", He, Ae))
    ]));
  }
});
const R = /* @__PURE__ */ g(Re, [["__scopeId", "data-v-78fb5b73"]]), We = { class: "dropdown" }, ze = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: n, placeholder: l } = e, u = x(() => o), c = p(), s = p(!1), d = (r) => {
      !r || (c.value = r, t("update:modelValue", c.value.value), s.value = !1);
    };
    return N(() => c.value = n.find((r) => r.value === u.value)), (r, f) => (v(), m("div", We, [
      V(Le, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: f[0] || (f[0] = (w) => s.value = !s.value),
        onClickOutside: f[1] || (f[1] = (w) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      P(V(R, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": d
      }, null, 8, ["model-value", "items"]), [
        [D, s.value]
      ])
    ]));
  }
});
const Ke = /* @__PURE__ */ g(ze, [["__scopeId", "data-v-a344e087"]]), Ge = { class: "password-input" }, Ye = /* @__PURE__ */ b({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, passwordHidden: n = !0 } = e, l = p(), u = p(n), c = p(o), s = (d) => {
      t("update:modelValue", d);
    };
    return (d, r) => (v(), m("div", Ge, [
      a("button", {
        class: "password-icon",
        onClick: r[0] || (r[0] = (f) => u.value = !u.value)
      }, [
        a("i", {
          class: S(u.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      V(H, {
        ref_key: "baseInput",
        ref: l,
        type: u.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["type", "placeholder", "model-value"])
    ]));
  }
});
const qe = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-f2932a78"]]);
const Je = {}, Xe = { class: "note" }, Ze = { class: "icon" }, et = { class: "content" };
function tt(e, t) {
  return v(), m("div", Xe, [
    a("div", Ze, [
      L(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    a("div", et, [
      L(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const ot = /* @__PURE__ */ g(Je, [["render", tt], ["__scopeId", "data-v-b82d0345"]]), nt = (e) => (B("data-v-dbbecf04"), e = e(), E(), e), lt = { class: "loading" }, st = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, at = /* @__PURE__ */ nt(() => /* @__PURE__ */ a("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), ut = { class: "loading-value" }, ct = /* @__PURE__ */ b({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const o = e, n = p(0), l = p(!1), u = x(() => ({
      strokeDashoffset: `${(100 - n.value) * 2.64}px`,
      transition: l.value ? "all 0.1s ease" : "none"
    }));
    return oe(o, () => {
      n.value = 0, l.value = !0;
    }), N(() => {
      const c = o.duration, s = c / 100, d = 100 / (c / s);
      let r = 0;
      l.value = !0;
      const f = setInterval(() => {
        r += d, n.value = r, r >= 100 && (clearInterval(f), l.value = !1, t("complete"));
      }, s);
      return () => clearInterval(f);
    }), (c, s) => (v(), m("div", lt, [
      (v(), m("svg", st, [
        at,
        a("circle", {
          class: "loading-circle-progress",
          style: re(I(u)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      a("div", ut, C(`${n.value}%`), 1)
    ]));
  }
});
const dt = /* @__PURE__ */ g(ct, [["__scopeId", "data-v-dbbecf04"]]), rt = (e) => (B("data-v-fabf80c5"), e = e(), E(), e), it = { class: "checkbox-container" }, pt = /* @__PURE__ */ rt(() => /* @__PURE__ */ a("span", { class: "checkmark" }, null, -1)), _t = /* @__PURE__ */ b({
  __name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = p(e.modelValue);
    return N(() => {
      t("update:modelValue", n.value);
    }), (l, u) => (v(), m("label", it, [
      P(a("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 512), [
        [ie, n.value]
      ]),
      pt
    ]));
  }
});
const vt = /* @__PURE__ */ g(_t, [["__scopeId", "data-v-fabf80c5"]]), mt = ["disabled"], ft = { class: "text" }, ht = /* @__PURE__ */ b({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (v(), m("button", {
      ref: "target",
      class: S(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      a("span", ft, [
        L(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, mt));
  }
});
const yt = /* @__PURE__ */ g(ht, [["__scopeId", "data-v-4695437a"]]), bt = /* @__PURE__ */ b({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (v(), Q(yt, M(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: te(() => [
        L(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const gt = /* @__PURE__ */ g(bt, [["__scopeId", "data-v-99aecff6"]]), It = { class: "dropdown" }, wt = { class: "icon-container" }, $t = /* @__PURE__ */ b({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o = "", items: n } = e, l = p(o), u = p(), c = p(!1), s = p(n), d = p(0), r = (i) => c.value = i, f = (i) => {
      !i || (u.value = i, l.value = i.label, t("update:modelValue", u.value.value), r(!1));
    };
    N(() => u.value = n.find((i) => i.value === l.value));
    const w = (i) => {
      s.value = n.filter((y) => y.label.includes(i) || y.value.includes(i));
    }, _ = p();
    return A(_, () => {
      d.value++, s.value = n, r(!1);
    }), (i, y) => (v(), m("div", It, [
      a("div", {
        ref_key: "_dropdown_trigger",
        ref: _,
        class: "input-container"
      }, [
        (v(), Q(j, {
          key: d.value,
          "model-value": l.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": w,
          onFocus: y[0] || (y[0] = (k) => r(!0))
        }, null, 8, ["model-value", "placeholder"])),
        a("div", wt, [
          a("i", {
            class: S(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
          }, null, 2)
        ])
      ], 512),
      P(V(R, {
        class: "items-menu",
        "model-value": u.value,
        items: s.value,
        "onUpdate:modelValue": f
      }, null, 8, ["model-value", "items"]), [
        [D, c.value]
      ])
    ]));
  }
});
const xt = /* @__PURE__ */ g($t, [["__scopeId", "data-v-f764e0e5"]]), Vt = { class: "dropdown" }, St = { class: "text" }, kt = { class: "input-container" }, Ot = /* @__PURE__ */ b({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: n, items: l, placeholder: u } = e, c = p(o), s = x(() => n), d = p(), r = p(!1), f = p(l), w = p(0), _ = (h) => r.value = h, i = (h) => {
      !h || (d.value = h, c.value = "", _(!1));
    };
    N(() => d.value = l.find((h) => h.value === s.value));
    const y = (h) => {
      f.value = l.filter(($) => $.label.includes(h) || $.value.includes(h)), d.value && t("update:modelValue", h);
    }, k = p();
    return A(k, () => {
      f.value = l, c.value !== "" && w.value++, _(!1);
    }), (h, $) => {
      var W;
      return v(), m("div", Vt, [
        a("div", {
          ref_key: "_dropdown_trigger",
          ref: k,
          class: "handler"
        }, [
          a("div", {
            class: "trigger",
            onClick: $[0] || ($[0] = (le) => _(!r.value))
          }, [
            a("span", St, C(((W = d.value) == null ? void 0 : W.value) || "unknown"), 1),
            a("i", {
              class: S(["icon", [r.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          a("div", kt, [
            (v(), Q(j, {
              key: w.value,
              "model-value": c.value,
              class: "input",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": y,
              onFocus: $[1] || ($[1] = (le) => {
                var z;
                return !((z = d.value) != null && z.value) && _(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        P(V(R, {
          class: "items-menu",
          "model-value": d.value,
          items: e.items,
          "onUpdate:modelValue": i
        }, null, 8, ["model-value", "items"]), [
          [D, r.value]
        ])
      ]);
    };
  }
});
const Pt = /* @__PURE__ */ g(Ot, [["__scopeId", "data-v-9dca4090"]]), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: j,
  StoreSlugInput: we,
  Dropdown: Ke,
  PasswordInput: qe,
  Note: ot,
  Loading: dt,
  Checkbox: vt,
  PrimaryButton: gt,
  ComboBox: xt,
  PhoneNumberInput: Pt
}, Symbol.toStringTag, { value: "Module" }));
function Ct(e) {
  for (const t in ee)
    e.component(t, ee[t]);
}
const Et = { install: Ct };
export {
  vt as Checkbox,
  xt as ComboBox,
  Ke as Dropdown,
  dt as Loading,
  ot as Note,
  qe as PasswordInput,
  Pt as PhoneNumberInput,
  gt as PrimaryButton,
  we as StoreSlugInput,
  j as TextInput,
  Et as default
};

import { defineComponent as b, computed as x, openBlock as v, createElementBlock as m, mergeProps as M, unref as I, createBlock as Q, ref as p, createElementVNode as s, createVNode as V, Transition as se, withCtx as te, withDirectives as C, vShow as D, toDisplayString as B, pushScopeId as E, popScopeId as N, getCurrentScope as ae, onScopeDispose as ue, watch as oe, normalizeClass as S, watchEffect as k, Fragment as ce, renderList as de, createCommentVNode as K, renderSlot as L, normalizeStyle as re, vModelCheckbox as ie } from "vue";
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
    }, c = () => t("focus"), a = () => t("blur");
    return (d, r) => (v(), m("input", M({
      value: I(n),
      type: I(l),
      placeholder: e.placeholder,
      class: "input"
    }, d.$attrs, {
      onInput: u,
      onFocus: c,
      onBlur: a
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
}), ve = (e) => (E("data-v-8c04c0d1"), e = e(), N(), e), me = { class: "store-slug-input" }, fe = { class: "input-container" }, he = { class: "popover" }, ye = /* @__PURE__ */ ve(() => /* @__PURE__ */ s("div", { class: "store-slug-box-content" }, [
  /* @__PURE__ */ s("div", { class: "box-description" }, [
    /* @__PURE__ */ s("p", { class: "store-slug-title" }, " Store slug "),
    /* @__PURE__ */ s("p", { class: "store-slug-description" }, " The slug you choose will be your store's domain name that your customers will see. "),
    /* @__PURE__ */ s("div", { class: "border-example" }, [
      /* @__PURE__ */ s("i", { class: "border-icon-example i-tabler-search" }),
      /* @__PURE__ */ s("span", { class: "input-border-example" }, "example.youcan.shop")
    ])
  ]),
  /* @__PURE__ */ s("div", { class: "note" }, [
    /* @__PURE__ */ s("div", null, [
      /* @__PURE__ */ s("i", { class: "icon-note i-tabler-alert-circle" })
    ]),
    /* @__PURE__ */ s("span", { class: "note-description" }, " You can always replace it with a custom domain name you purchased. ")
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
    const n = p(e.modelValue), l = p(!1), u = (d) => t("update:modelValue", d), c = () => l.value = !0, a = () => l.value = !1;
    return (d, r) => (v(), m("div", me, [
      s("div", fe, [
        V(se, { name: "fade" }, {
          default: te(() => [
            C(s("div", he, be, 512), [
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
          onBlur: a
        }, null, 8, ["model-value", "placeholder"]),
        s("span", ge, B(e.slugSuffix), 1)
      ])
    ]));
  }
});
const we = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-8c04c0d1"]]);
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
function P(e) {
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
  const c = oe(() => P(t), (d) => {
    u(), d && (d.addEventListener(o, n, l), u = () => {
      d.removeEventListener(o, n, l), u = F;
    });
  }, { immediate: !0, flush: "post" }), a = () => {
    c(), u();
  };
  return Se(a), a;
}
function A(e, t, o = {}) {
  const { window: n = ne, ignore: l, capture: u = !0, detectIframe: c = !1 } = o;
  if (!n)
    return;
  const a = p(!0);
  let d;
  const r = (_) => {
    n.clearTimeout(d);
    const i = P(e), y = _.composedPath();
    !i || i === _.target || y.includes(i) || !a.value || l && l.length > 0 && l.some((O) => {
      const h = P(O);
      return h && (_.target === h || y.includes(h));
    }) || t(_);
  }, f = [
    U(n, "click", r, { passive: !0, capture: u }),
    U(n, "pointerdown", (_) => {
      const i = P(e);
      a.value = !!i && !_.composedPath().includes(i);
    }, { passive: !0 }),
    U(n, "pointerup", (_) => {
      if (_.button === 0) {
        const i = _.composedPath();
        _.composedPath = () => i, d = n.setTimeout(() => r(_), 50);
      }
    }, { passive: !0 }),
    c && U(n, "blur", (_) => {
      var i;
      const y = P(e);
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
const Ee = (e) => (E("data-v-b19d081d"), e = e(), N(), e), Ne = { class: "label-item" }, Te = /* @__PURE__ */ Ee(() => /* @__PURE__ */ s("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Ue = /* @__PURE__ */ b({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, n = x(() => o.item), l = p();
    return A(l, () => t("clickOutside")), (u, c) => {
      var a;
      return v(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: l,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (d) => t("click"))
      }, [
        s("div", Ne, [
          s("i", {
            class: S([(a = I(n)) == null ? void 0 : a.icon])
          }, null, 2),
          s("span", null, B(I(n) ? I(n).label : e.placeholder || "Please select an option"), 1)
        ]),
        Te
      ], 512);
    };
  }
});
const Le = /* @__PURE__ */ g(Ue, [["__scopeId", "data-v-b19d081d"]]), Qe = (e) => (E("data-v-710b1b7c"), e = e(), N(), e), De = { class: "dropdown-content" }, Fe = ["onClick"], Me = ["src"], He = {
  key: 1,
  class: "no-results"
}, je = /* @__PURE__ */ Qe(() => /* @__PURE__ */ s("span", null, "Your search came up with no results.", -1)), Ae = [
  je
], Re = /* @__PURE__ */ b({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = p(e.modelValue);
    k(() => {
      t("update:modelValue", n.value);
    });
    const l = (u) => {
      n.value = u;
    };
    return (u, c) => (v(), m("div", De, [
      e.items.length > 0 ? (v(!0), m(ce, { key: 0 }, de(e.items, (a, d) => (v(), m("div", {
        key: d,
        class: "dropdown-item",
        onClick: (r) => l(a)
      }, [
        a.icon ? (v(), m("i", {
          key: 0,
          class: S(a.icon)
        }, null, 2)) : K("", !0),
        a.image ? (v(), m("img", {
          key: 1,
          src: a.image
        }, null, 8, Me)) : K("", !0),
        s("span", null, B(a.label), 1)
      ], 8, Fe))), 128)) : (v(), m("div", He, Ae))
    ]));
  }
});
const R = /* @__PURE__ */ g(Re, [["__scopeId", "data-v-710b1b7c"]]), We = { class: "dropdown" }, ze = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: n, placeholder: l } = e, u = x(() => o), c = p(), a = p(!1), d = (r) => {
      !r || (c.value = r, t("update:modelValue", c.value.value), a.value = !1);
    };
    return k(() => c.value = n.find((r) => r.value === u.value)), (r, f) => (v(), m("div", We, [
      V(Le, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: f[0] || (f[0] = (w) => a.value = !a.value),
        onClickOutside: f[1] || (f[1] = (w) => a.value = !1)
      }, null, 8, ["item", "placeholder"]),
      C(V(R, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": d
      }, null, 8, ["model-value", "items"]), [
        [D, a.value]
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
    const { modelValue: o, passwordHidden: n = !0 } = e, l = p(), u = p(n), c = p(o), a = (d) => {
      t("update:modelValue", d);
    };
    return (d, r) => (v(), m("div", Ge, [
      s("button", {
        onClick: r[0] || (r[0] = (f) => u.value = !u.value)
      }, [
        s("i", {
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
        "onUpdate:modelValue": a
      }, null, 8, ["type", "placeholder", "model-value"])
    ]));
  }
});
const qe = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-ea0e6a27"]]);
const Je = {}, Xe = { class: "note" }, Ze = { class: "icon" }, et = { class: "content" };
function tt(e, t) {
  return v(), m("div", Xe, [
    s("div", Ze, [
      L(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    s("div", et, [
      L(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const ot = /* @__PURE__ */ g(Je, [["render", tt], ["__scopeId", "data-v-cb9f4361"]]), nt = (e) => (E("data-v-dbbecf04"), e = e(), N(), e), lt = { class: "loading" }, st = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, at = /* @__PURE__ */ nt(() => /* @__PURE__ */ s("circle", {
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
    }), k(() => {
      const c = o.duration, a = c / 100, d = 100 / (c / a);
      let r = 0;
      l.value = !0;
      const f = setInterval(() => {
        r += d, n.value = r, r >= 100 && (clearInterval(f), l.value = !1, t("complete"));
      }, a);
      return () => clearInterval(f);
    }), (c, a) => (v(), m("div", lt, [
      (v(), m("svg", st, [
        at,
        s("circle", {
          class: "loading-circle-progress",
          style: re(I(u)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      s("div", ut, B(`${n.value}%`), 1)
    ]));
  }
});
const dt = /* @__PURE__ */ g(ct, [["__scopeId", "data-v-dbbecf04"]]), rt = (e) => (E("data-v-fabf80c5"), e = e(), N(), e), it = { class: "checkbox-container" }, pt = /* @__PURE__ */ rt(() => /* @__PURE__ */ s("span", { class: "checkmark" }, null, -1)), _t = /* @__PURE__ */ b({
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
    return k(() => {
      t("update:modelValue", n.value);
    }), (l, u) => (v(), m("label", it, [
      C(s("input", {
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
      s("span", ft, [
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
    const { modelValue: o = "", items: n } = e, l = p(o), u = p(), c = p(!1), a = p(n), d = p(0), r = (i) => c.value = i, f = (i) => {
      !i || (u.value = i, l.value = i.label, t("update:modelValue", u.value.value), r(!1));
    };
    k(() => u.value = n.find((i) => i.value === l.value));
    const w = (i) => {
      a.value = n.filter((y) => y.label.includes(i) || y.value.includes(i));
    }, _ = p();
    return A(_, () => {
      d.value++, a.value = n, r(!1);
    }), (i, y) => (v(), m("div", It, [
      s("div", {
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
          onFocus: y[0] || (y[0] = (O) => r(!0))
        }, null, 8, ["model-value", "placeholder"])),
        s("div", wt, [
          s("i", {
            class: S(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
          }, null, 2)
        ])
      ], 512),
      C(V(R, {
        class: "items-menu",
        "model-value": u.value,
        items: a.value,
        "onUpdate:modelValue": f
      }, null, 8, ["model-value", "items"]), [
        [D, c.value]
      ])
    ]));
  }
});
const xt = /* @__PURE__ */ g($t, [["__scopeId", "data-v-c78349ed"]]), Vt = { class: "dropdown" }, St = { class: "text" }, kt = { class: "input-container" }, Ot = /* @__PURE__ */ b({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: n, items: l, placeholder: u } = e, c = p(o), a = x(() => n), d = p(), r = p(!1), f = p(l), w = p(0), _ = (h) => r.value = h, i = (h) => {
      !h || (d.value = h, c.value = "", _(!1));
    };
    k(() => d.value = l.find((h) => h.value === a.value));
    const y = (h) => {
      f.value = l.filter(($) => $.label.includes(h) || $.value.includes(h)), d.value && t("update:modelValue", h);
    }, O = p();
    return A(O, () => {
      f.value = l, c.value !== "" && w.value++, _(!1);
    }), (h, $) => {
      var W;
      return v(), m("div", Vt, [
        s("div", {
          ref_key: "_dropdown_trigger",
          ref: O,
          class: "handler"
        }, [
          s("div", {
            class: "trigger",
            onClick: $[0] || ($[0] = (le) => _(!r.value))
          }, [
            s("span", St, B(((W = d.value) == null ? void 0 : W.value) || "unknown"), 1),
            s("i", {
              class: S(["icon", [r.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          s("div", kt, [
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
        C(V(R, {
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

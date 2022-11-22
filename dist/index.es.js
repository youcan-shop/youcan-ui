import { defineComponent as b, computed as x, openBlock as v, createElementBlock as m, mergeProps as H, unref as w, createBlock as Q, ref as p, createElementVNode as u, createVNode as V, Transition as se, withCtx as te, withDirectives as C, vShow as D, toDisplayString as P, pushScopeId as B, popScopeId as E, getCurrentScope as ae, onScopeDispose as ue, watch as oe, normalizeClass as S, Fragment as ce, renderList as de, createCommentVNode as F, watchEffect as N, renderSlot as U, normalizeStyle as re, vModelCheckbox as ie } from "vue";
const pe = ["value", "type", "placeholder"], _e = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const l = e, o = x(() => l.modelValue), n = x(() => l.type), a = ({ target: d }) => {
      t("update:modelValue", d.value);
    }, c = () => t("focus"), s = () => t("blur");
    return (d, i) => (v(), m("input", H({
      value: w(o),
      type: w(n),
      placeholder: e.placeholder,
      class: "input"
    }, d.$attrs, {
      onInput: a,
      onFocus: c,
      onBlur: s
    }), null, 16, pe));
  }
});
const g = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, j = /* @__PURE__ */ g(_e, [["__scopeId", "data-v-ef8f9c89"]]), A = /* @__PURE__ */ b({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = x(() => l.modelValue), n = (a) => {
      t("update:modelValue", a);
    };
    return (a, c) => (v(), Q(j, H({
      "model-value": w(o),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, a.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), ve = (e) => (B("data-v-87bfb4e9"), e = e(), E(), e), me = { class: "store-slug-input" }, fe = { class: "input-container" }, he = { class: "popover" }, ye = /* @__PURE__ */ ve(() => /* @__PURE__ */ u("div", { class: "store-slug-box-content" }, [
  /* @__PURE__ */ u("div", { class: "box-description" }, [
    /* @__PURE__ */ u("p", { class: "store-slug-title" }, " Store slug "),
    /* @__PURE__ */ u("p", { class: "store-slug-description" }, " The slug you choose will be your store's domain name that your customers will see. "),
    /* @__PURE__ */ u("div", { class: "border-example" }, [
      /* @__PURE__ */ u("i", { class: "border-icon-example i-tabler-search" }),
      /* @__PURE__ */ u("span", { class: "input-border-example" }, "example.youcan.shop")
    ])
  ]),
  /* @__PURE__ */ u("div", { class: "note" }, [
    /* @__PURE__ */ u("div", null, [
      /* @__PURE__ */ u("i", { class: "icon-note i-tabler-alert-circle" })
    ]),
    /* @__PURE__ */ u("span", { class: "note-description" }, " You can always replace it with a custom domain name you purchased. ")
  ])
], -1)), be = [
  ye
], ge = { class: "slug-suffix" }, we = /* @__PURE__ */ b({
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
    const o = p(e.modelValue), n = p(!1), a = (d) => t("update:modelValue", d), c = () => n.value = !0, s = () => n.value = !1;
    return (d, i) => (v(), m("div", me, [
      u("div", fe, [
        V(se, { name: "fade" }, {
          default: te(() => [
            C(u("div", he, be, 512), [
              [D, n.value]
            ])
          ]),
          _: 1
        }),
        V(j, {
          "model-value": o.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": a,
          onFocus: c,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        u("span", ge, P(e.slugSuffix), 1)
      ])
    ]));
  }
});
const Ie = /* @__PURE__ */ g(we, [["__scopeId", "data-v-87bfb4e9"]]);
var G;
const T = typeof window < "u", $e = (e) => typeof e == "string", M = () => {
};
T && ((G = window == null ? void 0 : window.navigator) == null ? void 0 : G.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xe(e) {
  return typeof e == "function" ? e() : w(e);
}
function Ve(e) {
  return e;
}
function ke(e) {
  return ae() ? (ue(e), !0) : !1;
}
function O(e) {
  var t;
  const l = xe(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const le = T ? window : void 0;
T && window.document;
T && window.navigator;
T && window.location;
function L(...e) {
  let t, l, o, n;
  if ($e(e[0]) ? ([l, o, n] = e, t = le) : [t, l, o, n] = e, !t)
    return M;
  let a = M;
  const c = oe(() => O(t), (d) => {
    a(), d && (d.addEventListener(l, o, n), a = () => {
      d.removeEventListener(l, o, n), a = M;
    });
  }, { immediate: !0, flush: "post" }), s = () => {
    c(), a();
  };
  return ke(s), s;
}
function R(e, t, l = {}) {
  const { window: o = le, ignore: n, capture: a = !0, detectIframe: c = !1 } = l;
  if (!o)
    return;
  const s = p(!0);
  let d;
  const i = (_) => {
    o.clearTimeout(d);
    const r = O(e), f = _.composedPath();
    !r || r === _.target || f.includes(r) || !s.value || n && n.length > 0 && n.some((k) => {
      const h = O(k);
      return h && (_.target === h || f.includes(h));
    }) || t(_);
  }, y = [
    L(o, "click", i, { passive: !0, capture: a }),
    L(o, "pointerdown", (_) => {
      const r = O(e);
      s.value = !!r && !_.composedPath().includes(r);
    }, { passive: !0 }),
    L(o, "pointerup", (_) => {
      if (_.button === 0) {
        const r = _.composedPath();
        _.composedPath = () => r, d = o.setTimeout(() => i(_), 50);
      }
    }, { passive: !0 }),
    c && L(o, "blur", (_) => {
      var r;
      const f = O(e);
      ((r = document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(f != null && f.contains(document.activeElement)) && t(_);
    })
  ].filter(Boolean);
  return () => y.forEach((_) => _());
}
const Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, q = "__vueuse_ssr_handlers__";
Y[q] = Y[q] || {};
var J;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(J || (J = {}));
var Se = Object.defineProperty, X = Object.getOwnPropertySymbols, Oe = Object.prototype.hasOwnProperty, Ce = Object.prototype.propertyIsEnumerable, Z = (e, t, l) => t in e ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Pe = (e, t) => {
  for (var l in t || (t = {}))
    Oe.call(t, l) && Z(e, l, t[l]);
  if (X)
    for (var l of X(t))
      Ce.call(t, l) && Z(e, l, t[l]);
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
Pe({
  linear: Ve
}, Be);
const Ee = (e) => (B("data-v-adc57234"), e = e(), E(), e), Ne = { class: "label-item" }, Te = /* @__PURE__ */ Ee(() => /* @__PURE__ */ u("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Le = /* @__PURE__ */ b({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const l = e, o = x(() => l.item), n = p();
    return R(n, () => t("clickOutside")), (a, c) => {
      var s;
      return v(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (d) => t("click"))
      }, [
        u("div", Ne, [
          u("i", {
            class: S([(s = w(o)) == null ? void 0 : s.icon])
          }, null, 2),
          u("span", null, P(w(o) ? w(o).label : e.placeholder || "Please select an option"), 1)
        ]),
        Te
      ], 512);
    };
  }
});
const Ue = /* @__PURE__ */ g(Le, [["__scopeId", "data-v-adc57234"]]), Qe = (e) => (B("data-v-c0ef81fc"), e = e(), E(), e), De = { class: "dropdown-content" }, Fe = ["onClick"], Me = ["src"], He = {
  key: 2,
  class: "icon i-tabler:check"
}, je = {
  key: 1,
  class: "no-results"
}, Ae = /* @__PURE__ */ Qe(() => /* @__PURE__ */ u("span", null, "Your search came up with no results.", -1)), Re = [
  Ae
], We = /* @__PURE__ */ b({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = p(e.modelValue), n = (a) => {
      o.value = a, t("update:modelValue", o.value);
    };
    return (a, c) => (v(), m("div", De, [
      e.items.length > 0 ? (v(!0), m(ce, { key: 0 }, de(e.items, (s) => (v(), m("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (d) => n(s)
      }, [
        s.icon ? (v(), m("i", {
          key: 0,
          class: S(s.icon)
        }, null, 2)) : F("", !0),
        s.image ? (v(), m("img", {
          key: 1,
          src: s.image,
          class: "image"
        }, null, 8, Me)) : F("", !0),
        u("span", null, P(s.label), 1),
        s && o.value && s.value === o.value.value ? (v(), m("i", He)) : F("", !0)
      ], 8, Fe))), 128)) : (v(), m("div", je, Re))
    ]));
  }
});
const W = /* @__PURE__ */ g(We, [["__scopeId", "data-v-c0ef81fc"]]), ze = { class: "dropdown" }, Ke = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, items: o, placeholder: n } = e, a = x(() => l), c = p(), s = p(!1), d = (i) => {
      !i || (c.value = i, t("update:modelValue", c.value.value), s.value = !1);
    };
    return N(() => c.value = o.find((i) => i.value === a.value)), (i, y) => (v(), m("div", ze, [
      V(Ue, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: y[0] || (y[0] = (I) => s.value = !s.value),
        onClickOutside: y[1] || (y[1] = (I) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      C(V(W, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": d
      }, null, 8, ["model-value", "items"]), [
        [D, s.value]
      ])
    ]));
  }
});
const Ge = /* @__PURE__ */ g(Ke, [["__scopeId", "data-v-a4109ef5"]]), Ye = { class: "password-input" }, qe = /* @__PURE__ */ b({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, passwordHidden: o = !0 } = e, n = p(), a = p(o), c = p(l), s = (d) => {
      c.value = d, t("update:modelValue", d);
    };
    return (d, i) => (v(), m("div", Ye, [
      u("button", {
        class: "password-icon",
        type: "button",
        onClick: i[0] || (i[0] = (y) => a.value = !a.value)
      }, [
        u("i", {
          class: S(a.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      V(j, {
        ref_key: "baseInput",
        ref: n,
        type: a.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["type", "placeholder", "model-value"])
    ]));
  }
});
const Je = /* @__PURE__ */ g(qe, [["__scopeId", "data-v-1216e394"]]);
const Xe = {}, Ze = { class: "note" }, et = { class: "icon" }, tt = { class: "content" };
function ot(e, t) {
  return v(), m("div", Ze, [
    u("div", et, [
      U(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    u("div", tt, [
      U(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const lt = /* @__PURE__ */ g(Xe, [["render", ot], ["__scopeId", "data-v-b82d0345"]]), nt = (e) => (B("data-v-dbbecf04"), e = e(), E(), e), st = { class: "loading" }, at = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, ut = /* @__PURE__ */ nt(() => /* @__PURE__ */ u("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), ct = { class: "loading-value" }, dt = /* @__PURE__ */ b({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const l = e, o = p(0), n = p(!1), a = x(() => ({
      strokeDashoffset: `${(100 - o.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return oe(l, () => {
      o.value = 0, n.value = !0;
    }), N(() => {
      const c = l.duration, s = c / 100, d = 100 / (c / s);
      let i = 0;
      n.value = !0;
      const y = setInterval(() => {
        i += d, o.value = i, i >= 100 && (clearInterval(y), n.value = !1, t("complete"));
      }, s);
      return () => clearInterval(y);
    }), (c, s) => (v(), m("div", st, [
      (v(), m("svg", at, [
        ut,
        u("circle", {
          class: "loading-circle-progress",
          style: re(w(a)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      u("div", ct, P(`${o.value}%`), 1)
    ]));
  }
});
const rt = /* @__PURE__ */ g(dt, [["__scopeId", "data-v-dbbecf04"]]), it = (e) => (B("data-v-d2726505"), e = e(), E(), e), pt = { class: "checkbox-container" }, _t = /* @__PURE__ */ it(() => /* @__PURE__ */ u("span", { class: "checkmark" }, null, -1)), vt = /* @__PURE__ */ b({
  __name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = p(e.modelValue);
    return N(() => {
      t("update:modelValue", o.value);
    }), (n, a) => (v(), m("label", pt, [
      C(u("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (c) => o.value = c),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 512), [
        [ie, o.value]
      ]),
      _t
    ]));
  }
});
const mt = /* @__PURE__ */ g(vt, [["__scopeId", "data-v-d2726505"]]), ft = ["disabled"], ht = { class: "text" }, yt = /* @__PURE__ */ b({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, l) => (v(), m("button", {
      ref: "target",
      class: S(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      u("span", ht, [
        U(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, ft));
  }
});
const bt = /* @__PURE__ */ g(yt, [["__scopeId", "data-v-18d5b861"]]), gt = /* @__PURE__ */ b({
  __name: "PrimaryButton",
  setup(e) {
    return (t, l) => (v(), Q(bt, H(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: te(() => [
        U(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const wt = /* @__PURE__ */ g(gt, [["__scopeId", "data-v-313a8242"]]), It = { class: "dropdown" }, $t = { class: "icon-container" }, xt = /* @__PURE__ */ b({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l = "", items: o } = e, n = p(l), a = p(), c = p(!1), s = p(o), d = p(0), i = (r) => c.value = r, y = (r) => {
      !r || (a.value = r, n.value = r.label, t("update:modelValue", a.value.value), i(!1));
    };
    N(() => {
      var r;
      a.value = o.find((f) => f.value === n.value || f.label === n.value), a.value ? n.value = (r = a.value) == null ? void 0 : r.label : n.value = "";
    });
    const I = (r) => {
      r = r.toLowerCase(), s.value = o.filter((f) => f.label.toLowerCase().includes(r) || f.value.toLowerCase().includes(r));
    }, _ = p();
    return R(_, () => {
      d.value++, s.value = o, i(!1);
    }), (r, f) => (v(), m("div", It, [
      u("div", {
        ref_key: "_dropdown_trigger",
        ref: _,
        class: "input-container"
      }, [
        (v(), Q(A, {
          key: d.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": I,
          onFocus: f[0] || (f[0] = (k) => i(!0))
        }, null, 8, ["model-value", "placeholder"])),
        u("div", $t, [
          u("i", {
            class: S(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: f[1] || (f[1] = (k) => i(!c.value))
          }, null, 2)
        ])
      ], 512),
      C(V(W, {
        class: "items-menu",
        "model-value": a.value,
        items: s.value,
        "onUpdate:modelValue": y
      }, null, 8, ["model-value", "items"]), [
        [D, c.value]
      ])
    ]));
  }
});
const Vt = /* @__PURE__ */ g(xt, [["__scopeId", "data-v-d2e99be1"]]), kt = { class: "dropdown" }, St = { class: "text" }, Ot = { class: "input-container" }, Ct = /* @__PURE__ */ b({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, dialCode: o, items: n, placeholder: a } = e, c = p(l), s = x(() => o), d = p(), i = p(!1), y = p(n), I = p(0), _ = (h) => i.value = h, r = (h) => {
      !h || (d.value = h, c.value = "", _(!1));
    };
    N(() => d.value = n.find((h) => h.value === s.value));
    const f = (h) => {
      h = h.toLowerCase(), y.value = n.filter(($) => $.label.toLowerCase().includes(h) || $.value.toLowerCase().includes(h)), d.value && t("update:modelValue", h);
    }, k = p();
    return R(k, () => {
      y.value = n, c.value !== "" && I.value++, _(!1);
    }), (h, $) => {
      var z;
      return v(), m("div", kt, [
        u("div", {
          ref_key: "_dropdown_trigger",
          ref: k,
          class: "handler"
        }, [
          u("div", {
            class: "trigger",
            onClick: $[0] || ($[0] = (ne) => _(!i.value))
          }, [
            u("span", St, P(((z = d.value) == null ? void 0 : z.value) || "unknown"), 1),
            u("i", {
              class: S(["icon", [i.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          u("div", Ot, [
            (v(), Q(A, {
              key: I.value,
              "model-value": c.value,
              class: "input",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": f,
              onFocus: $[1] || ($[1] = (ne) => {
                var K;
                return !((K = d.value) != null && K.value) && _(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        C(V(W, {
          class: "items-menu",
          "model-value": d.value,
          items: e.items,
          "onUpdate:modelValue": r
        }, null, 8, ["model-value", "items"]), [
          [D, i.value]
        ])
      ]);
    };
  }
});
const Pt = /* @__PURE__ */ g(Ct, [["__scopeId", "data-v-548157ba"]]), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: A,
  StoreSlugInput: Ie,
  Dropdown: Ge,
  PasswordInput: Je,
  Note: lt,
  Loading: rt,
  Checkbox: mt,
  PrimaryButton: wt,
  ComboBox: Vt,
  PhoneNumberInput: Pt
}, Symbol.toStringTag, { value: "Module" }));
function Bt(e) {
  for (const t in ee)
    e.component(t, ee[t]);
}
const Nt = { install: Bt };
export {
  mt as Checkbox,
  Vt as ComboBox,
  Ge as Dropdown,
  rt as Loading,
  lt as Note,
  Je as PasswordInput,
  Pt as PhoneNumberInput,
  wt as PrimaryButton,
  Ie as StoreSlugInput,
  A as TextInput,
  Nt as default
};

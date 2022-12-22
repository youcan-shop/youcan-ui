import { defineComponent as b, computed as k, openBlock as m, createElementBlock as f, mergeProps as A, unref as V, createBlock as L, ref as _, createElementVNode as r, createVNode as S, Transition as le, withCtx as D, withDirectives as P, renderSlot as $, vShow as T, toDisplayString as B, getCurrentScope as ne, onScopeDispose as se, watch as Z, normalizeClass as C, pushScopeId as F, popScopeId as H, Fragment as ae, renderList as ue, createCommentVNode as Q, watchEffect as E, normalizeStyle as ce, vModelCheckbox as de } from "vue";
const re = ["value", "type", "placeholder"], ie = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const o = e, l = k(() => o.modelValue), n = k(() => o.type), c = ({ target: u }) => {
      t("update:modelValue", u.value);
    }, a = () => t("focus"), s = () => t("blur");
    return (u, i) => (m(), f("input", A({
      value: V(l),
      type: V(n),
      placeholder: e.placeholder,
      class: "input"
    }, u.$attrs, {
      onInput: c,
      onFocus: a,
      onBlur: s
    }), null, 16, re));
  }
});
const I = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, U = /* @__PURE__ */ I(ie, [["__scopeId", "data-v-3ea2132f"]]), ee = /* @__PURE__ */ b({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = k(() => o.modelValue), n = (c) => {
      t("update:modelValue", c);
    };
    return (c, a) => (m(), L(U, A({
      "model-value": V(l),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, c.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), pe = { class: "store-slug-input" }, _e = { class: "input-container" }, ve = { class: "popover" }, me = { class: "store-slug-box-content" }, fe = { class: "box-description" }, he = { class: "store-slug-title" }, ye = { class: "store-slug-description" }, ge = { class: "border-example" }, be = { class: "border-icon-example" }, Ie = { class: "input-border-example" }, $e = { class: "note" }, we = { class: "icon-note" }, Ve = { class: "note-description" }, xe = { class: "slug-suffix" }, ke = /* @__PURE__ */ b({
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
    const l = _(e.modelValue), n = _(!1), c = (u) => t("update:modelValue", u), a = () => n.value = !0, s = () => n.value = !1;
    return (u, i) => (m(), f("div", pe, [
      r("div", _e, [
        S(le, { name: "fade" }, {
          default: D(() => [
            P(r("div", ve, [
              r("div", me, [
                r("div", fe, [
                  r("div", he, [
                    $(u.$slots, "title", {}, void 0, !0)
                  ]),
                  r("div", ye, [
                    $(u.$slots, "description", {}, void 0, !0)
                  ]),
                  r("div", ge, [
                    r("div", be, [
                      $(u.$slots, "example", {}, void 0, !0)
                    ]),
                    r("div", Ie, [
                      $(u.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                r("div", $e, [
                  r("div", we, [
                    $(u.$slots, "icon", {}, void 0, !0)
                  ]),
                  r("span", Ve, [
                    $(u.$slots, "note-desc", {}, void 0, !0)
                  ])
                ])
              ])
            ], 512), [
              [T, n.value]
            ])
          ]),
          _: 3
        }),
        S(U, {
          "model-value": l.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": c,
          onFocus: a,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        r("span", xe, B(e.slugSuffix), 1)
      ])
    ]));
  }
});
const Se = /* @__PURE__ */ I(ke, [["__scopeId", "data-v-ad7dc538"]]), M = typeof window < "u", Ce = (e) => typeof e == "string", Oe = () => {
};
function Pe(e) {
  return typeof e == "function" ? e() : V(e);
}
function Be(e) {
  return e;
}
function Ee(e) {
  return ne() ? (se(e), !0) : !1;
}
function O(e) {
  var t;
  const o = Pe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const te = M ? window : void 0;
M && window.document;
M && window.navigator;
M && window.location;
function N(...e) {
  let t, o, l, n;
  if (Ce(e[0]) || Array.isArray(e[0]) ? ([o, l, n] = e, t = te) : [t, o, l, n] = e, !t)
    return Oe;
  Array.isArray(o) || (o = [o]), Array.isArray(l) || (l = [l]);
  const c = [], a = () => {
    c.forEach((v) => v()), c.length = 0;
  }, s = (v, y, g) => (v.addEventListener(y, g, n), () => v.removeEventListener(y, g, n)), u = Z(() => O(t), (v) => {
    a(), v && c.push(...o.flatMap((y) => l.map((g) => s(v, y, g))));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), a();
  };
  return Ee(i), i;
}
function j(e, t, o = {}) {
  const { window: l = te, ignore: n, capture: c = !0, detectIframe: a = !1 } = o;
  if (!l)
    return;
  let s = !0, u;
  const i = (d) => {
    l.clearTimeout(u);
    const p = O(e);
    if (!(!p || p === d.target || d.composedPath().includes(p))) {
      if (!s) {
        s = !0;
        return;
      }
      t(d);
    }
  }, v = (d) => n && n.some((p) => {
    const w = O(p);
    return w && (d.target === w || d.composedPath().includes(w));
  }), y = [
    N(l, "click", i, { passive: !0, capture: c }),
    N(l, "pointerdown", (d) => {
      const p = O(e);
      p && (s = !d.composedPath().includes(p) && !v(d));
    }, { passive: !0 }),
    N(l, "pointerup", (d) => {
      if (d.button === 0) {
        const p = d.composedPath();
        d.composedPath = () => p, u = l.setTimeout(() => i(d), 50);
      }
    }, { passive: !0 }),
    a && N(l, "blur", (d) => {
      var p;
      const w = O(e);
      ((p = l.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(w != null && w.contains(l.document.activeElement)) && t(d);
    })
  ].filter(Boolean);
  return () => y.forEach((d) => d());
}
const K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, G = "__vueuse_ssr_handlers__";
K[G] = K[G] || {};
var q;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(q || (q = {}));
var Ne = Object.defineProperty, J = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, Te = Object.prototype.propertyIsEnumerable, X = (e, t, o) => t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Ue = (e, t) => {
  for (var o in t || (t = {}))
    Le.call(t, o) && X(e, o, t[o]);
  if (J)
    for (var o of J(t))
      Te.call(t, o) && X(e, o, t[o]);
  return e;
};
const Me = {
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
Ue({
  linear: Be
}, Me);
const Qe = (e) => (F("data-v-adc57234"), e = e(), H(), e), Ae = { class: "label-item" }, De = /* @__PURE__ */ Qe(() => /* @__PURE__ */ r("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Fe = /* @__PURE__ */ b({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, l = k(() => o.item), n = _();
    return j(n, () => t("clickOutside")), (c, a) => {
      var s;
      return m(), f("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: a[0] || (a[0] = (u) => t("click"))
      }, [
        r("div", Ae, [
          r("i", {
            class: C([(s = V(l)) == null ? void 0 : s.icon])
          }, null, 2),
          r("span", null, B(V(l) ? V(l).label : e.placeholder || "Please select an option"), 1)
        ]),
        De
      ], 512);
    };
  }
});
const He = /* @__PURE__ */ I(Fe, [["__scopeId", "data-v-adc57234"]]), je = { class: "dropdown-content" }, Re = ["onClick"], We = ["src"], ze = {
  key: 2,
  class: "icon i-tabler:check"
}, Ke = {
  key: 1,
  class: "no-results"
}, Ge = /* @__PURE__ */ b({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = _(e.modelValue), n = (c) => {
      l.value = c, t("update:modelValue", l.value);
    };
    return (c, a) => (m(), f("div", je, [
      e.items.length > 0 ? (m(!0), f(ae, { key: 0 }, ue(e.items, (s) => (m(), f("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (u) => n(s)
      }, [
        s.icon ? (m(), f("i", {
          key: 0,
          class: C(s.icon)
        }, null, 2)) : Q("", !0),
        s.image ? (m(), f("img", {
          key: 1,
          src: s.image,
          class: "image"
        }, null, 8, We)) : Q("", !0),
        r("span", null, B(s.label), 1),
        s && l.value && s.value === l.value.value ? (m(), f("i", ze)) : Q("", !0)
      ], 8, Re))), 128)) : (m(), f("div", Ke, [
        $(c.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const R = /* @__PURE__ */ I(Ge, [["__scopeId", "data-v-2f74106b"]]), qe = { class: "dropdown" }, Je = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: l, placeholder: n } = e, c = k(() => o), a = _(), s = _(!1), u = (i) => {
      i && (a.value = i, t("update:modelValue", a.value.value), s.value = !1);
    };
    return E(() => a.value = l.find((i) => i.value === c.value)), (i, v) => (m(), f("div", qe, [
      S(He, {
        item: a.value,
        placeholder: e.placeholder,
        onClick: v[0] || (v[0] = (y) => s.value = !s.value),
        onClickOutside: v[1] || (v[1] = (y) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      P(S(R, {
        "model-value": a.value,
        items: e.items,
        "onUpdate:modelValue": u
      }, null, 8, ["model-value", "items"]), [
        [T, s.value]
      ])
    ]));
  }
});
const Xe = /* @__PURE__ */ I(Je, [["__scopeId", "data-v-a4109ef5"]]), Ye = { class: "password-input" }, Ze = /* @__PURE__ */ b({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean },
    id: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, passwordHidden: l = !0 } = e, n = _(), c = _(l), a = _(o), s = (u) => {
      a.value = u, t("update:modelValue", u);
    };
    return (u, i) => (m(), f("div", Ye, [
      r("button", {
        class: "password-icon",
        type: "button",
        onClick: i[0] || (i[0] = (v) => c.value = !c.value)
      }, [
        r("i", {
          class: C(c.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      S(U, {
        id: e.id,
        ref_key: "baseInput",
        ref: n,
        type: c.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": a.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["id", "type", "placeholder", "model-value"])
    ]));
  }
});
const et = /* @__PURE__ */ I(Ze, [["__scopeId", "data-v-431587a5"]]);
const tt = {}, ot = { class: "note" }, lt = { class: "icon" }, nt = { class: "content" };
function st(e, t) {
  return m(), f("div", ot, [
    r("div", lt, [
      $(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    r("div", nt, [
      $(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const at = /* @__PURE__ */ I(tt, [["render", st], ["__scopeId", "data-v-5be167d4"]]), ut = (e) => (F("data-v-dbbecf04"), e = e(), H(), e), ct = { class: "loading" }, dt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, rt = /* @__PURE__ */ ut(() => /* @__PURE__ */ r("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), it = { class: "loading-value" }, pt = /* @__PURE__ */ b({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const o = e, l = _(0), n = _(!1), c = k(() => ({
      strokeDashoffset: `${(100 - l.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return Z(o, () => {
      l.value = 0, n.value = !0;
    }), E(() => {
      const a = o.duration, s = a / 100, u = 100 / (a / s);
      let i = 0;
      n.value = !0;
      const v = setInterval(() => {
        i += u, l.value = i, i >= 100 && (clearInterval(v), n.value = !1, t("complete"));
      }, s);
      return () => clearInterval(v);
    }), (a, s) => (m(), f("div", ct, [
      (m(), f("svg", dt, [
        rt,
        r("circle", {
          class: "loading-circle-progress",
          style: ce(V(c)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      r("div", it, B(`${l.value}%`), 1)
    ]));
  }
});
const _t = /* @__PURE__ */ I(pt, [["__scopeId", "data-v-dbbecf04"]]), vt = (e) => (F("data-v-85a1e21d"), e = e(), H(), e), mt = { class: "checkbox-container" }, ft = ["id"], ht = /* @__PURE__ */ vt(() => /* @__PURE__ */ r("span", { class: "checkmark" }, null, -1)), yt = /* @__PURE__ */ b({
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
    const o = e, l = _(o.id), n = _(o.modelValue);
    return E(() => {
      t("update:modelValue", n.value);
    }), (c, a) => (m(), f("label", mt, [
      P(r("input", {
        id: l.value,
        "onUpdate:modelValue": a[0] || (a[0] = (s) => n.value = s),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, ft), [
        [de, n.value]
      ]),
      ht
    ]));
  }
});
const gt = /* @__PURE__ */ I(yt, [["__scopeId", "data-v-85a1e21d"]]), bt = ["disabled"], It = { class: "text" }, $t = /* @__PURE__ */ b({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (m(), f("button", {
      ref: "target",
      class: C(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      r("span", It, [
        $(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, bt));
  }
});
const wt = /* @__PURE__ */ I($t, [["__scopeId", "data-v-193bb3f6"]]), Vt = /* @__PURE__ */ b({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (m(), L(wt, A(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: D(() => [
        $(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const xt = /* @__PURE__ */ I(Vt, [["__scopeId", "data-v-18934737"]]), kt = { class: "dropdown" }, St = { class: "icon-container" }, Ct = /* @__PURE__ */ b({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o = "", items: l } = e, n = _(o), c = _(), a = _(!1), s = _(l), u = _(0), i = (d) => a.value = d, v = (d) => {
      d && (c.value = d, n.value = d.label, t("update:modelValue", c.value.value), i(!1));
    };
    E(() => {
      var d;
      c.value = l.find((p) => p.value === n.value || p.label === n.value), c.value ? n.value = (d = c.value) == null ? void 0 : d.label : n.value = "";
    });
    const y = (d) => {
      d = d.toLowerCase(), s.value = l.filter((p) => p.label.toLowerCase().includes(d) || p.value.toLowerCase().includes(d));
    }, g = _();
    return j(g, () => {
      u.value++, s.value = l, i(!1);
    }), (d, p) => (m(), f("div", kt, [
      r("div", {
        ref_key: "_dropdown_trigger",
        ref: g,
        class: "input-container"
      }, [
        (m(), L(ee, {
          key: u.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": y,
          onFocus: p[0] || (p[0] = (w) => i(!0))
        }, null, 8, ["model-value", "placeholder"])),
        r("div", St, [
          r("i", {
            class: C(["icon", [a.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: p[1] || (p[1] = (w) => i(!a.value))
          }, null, 2)
        ])
      ], 512),
      P(S(R, {
        class: "items-menu",
        "model-value": c.value,
        items: s.value,
        "onUpdate:modelValue": v
      }, {
        no_result: D(() => [
          $(d.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [T, a.value]
      ])
    ]));
  }
});
const Ot = /* @__PURE__ */ I(Ct, [["__scopeId", "data-v-0d4f44d8"]]), Pt = { class: "dropdown" }, Bt = { class: "text" }, Et = { class: "input-container" }, Nt = /* @__PURE__ */ b({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: l, items: n, placeholder: c } = e, a = _(o), s = k(() => l), u = _(), i = _(!1), v = _(n), y = _(0), g = (h) => i.value = h, d = (h) => {
      h && (u.value = h, a.value = "", t("update:dialCode", h.value), g(!1));
    };
    E(() => u.value = n.find((h) => h.value === s.value));
    const p = (h) => {
      h = h.toLowerCase(), v.value = n.filter((x) => x.label.toLowerCase().includes(h) || x.value.toLowerCase().includes(h)), u.value && t("update:modelValue", h);
    }, w = _();
    return j(w, () => {
      v.value = n, a.value !== "" && y.value++, g(!1);
    }), (h, x) => {
      var W;
      return m(), f("div", Pt, [
        r("div", {
          ref_key: "_dropdown_trigger",
          ref: w,
          class: "handler"
        }, [
          r("div", {
            class: "trigger",
            onClick: x[0] || (x[0] = (oe) => g(!i.value))
          }, [
            r("span", Bt, B(((W = u.value) == null ? void 0 : W.value) || "unknown"), 1),
            r("i", {
              class: C(["icon", [i.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          r("div", Et, [
            (m(), L(U, {
              key: y.value,
              "model-value": a.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": p,
              onFocus: x[1] || (x[1] = (oe) => {
                var z;
                return !((z = u.value) != null && z.value) && g(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        P(S(R, {
          class: "items-menu",
          "model-value": u.value,
          items: e.items,
          "onUpdate:modelValue": d
        }, null, 8, ["model-value", "items"]), [
          [T, i.value]
        ])
      ]);
    };
  }
});
const Lt = /* @__PURE__ */ I(Nt, [["__scopeId", "data-v-037ace4c"]]), Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: ee,
  StoreSlugInput: Se,
  Dropdown: Xe,
  PasswordInput: et,
  Note: at,
  Loading: _t,
  Checkbox: gt,
  PrimaryButton: xt,
  ComboBox: Ot,
  PhoneNumberInput: Lt
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e) {
  for (const t in Y)
    e.component(t, Y[t]);
}
const Mt = { install: Tt };
export {
  gt as Checkbox,
  Ot as ComboBox,
  Xe as Dropdown,
  _t as Loading,
  at as Note,
  et as PasswordInput,
  Lt as PhoneNumberInput,
  xt as PrimaryButton,
  Se as StoreSlugInput,
  ee as TextInput,
  Mt as default
};

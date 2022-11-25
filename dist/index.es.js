import { defineComponent as g, computed as x, openBlock as v, createElementBlock as m, mergeProps as M, unref as w, createBlock as T, ref as p, createElementVNode as d, createVNode as k, Transition as se, withCtx as H, withDirectives as P, renderSlot as I, vShow as U, toDisplayString as B, getCurrentScope as ae, onScopeDispose as ue, watch as te, normalizeClass as C, pushScopeId as j, popScopeId as A, Fragment as ce, renderList as de, createCommentVNode as D, watchEffect as E, normalizeStyle as re, vModelCheckbox as ie } from "vue";
const pe = ["value", "type", "placeholder"], _e = /* @__PURE__ */ g({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const o = e, l = x(() => o.modelValue), n = x(() => o.type), u = ({ target: a }) => {
      t("update:modelValue", a.value);
    }, c = () => t("focus"), s = () => t("blur");
    return (a, i) => (v(), m("input", M({
      value: w(l),
      type: w(n),
      placeholder: e.placeholder,
      class: "input"
    }, a.$attrs, {
      onInput: u,
      onFocus: c,
      onBlur: s
    }), null, 16, pe));
  }
});
const b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, Q = /* @__PURE__ */ b(_e, [["__scopeId", "data-v-3ea2132f"]]), oe = /* @__PURE__ */ g({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = x(() => o.modelValue), n = (u) => {
      t("update:modelValue", u);
    };
    return (u, c) => (v(), T(Q, M({
      "model-value": w(l),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, u.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), ve = { class: "store-slug-input" }, me = { class: "input-container" }, fe = { class: "popover" }, he = { class: "store-slug-box-content" }, ye = { class: "box-description" }, ge = { class: "store-slug-title" }, be = { class: "store-slug-description" }, Ie = { class: "border-example" }, we = { class: "border-icon-example" }, $e = { class: "input-border-example" }, Ve = { class: "note" }, xe = { class: "icon-note" }, ke = { class: "note-description" }, Se = { class: "slug-suffix" }, Ce = /* @__PURE__ */ g({
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
    const l = p(e.modelValue), n = p(!1), u = (a) => t("update:modelValue", a), c = () => n.value = !0, s = () => n.value = !1;
    return (a, i) => (v(), m("div", ve, [
      d("div", me, [
        k(se, { name: "fade" }, {
          default: H(() => [
            P(d("div", fe, [
              d("div", he, [
                d("div", ye, [
                  d("div", ge, [
                    I(a.$slots, "title", {}, void 0, !0)
                  ]),
                  d("div", be, [
                    I(a.$slots, "description", {}, void 0, !0)
                  ]),
                  d("div", Ie, [
                    d("div", we, [
                      I(a.$slots, "example", {}, void 0, !0)
                    ]),
                    d("div", $e, [
                      I(a.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                d("div", Ve, [
                  d("div", xe, [
                    I(a.$slots, "icon", {}, void 0, !0)
                  ]),
                  d("span", ke, [
                    I(a.$slots, "note-desc", {}, void 0, !0)
                  ])
                ])
              ])
            ], 512), [
              [U, n.value]
            ])
          ]),
          _: 3
        }),
        k(Q, {
          "model-value": l.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": u,
          onFocus: c,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        d("span", Se, B(e.slugSuffix), 1)
      ])
    ]));
  }
});
const Oe = /* @__PURE__ */ b(Ce, [["__scopeId", "data-v-ad7dc538"]]);
var G;
const N = typeof window < "u", Pe = (e) => typeof e == "string", F = () => {
};
N && ((G = window == null ? void 0 : window.navigator) == null ? void 0 : G.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Be(e) {
  return typeof e == "function" ? e() : w(e);
}
function Ee(e) {
  return e;
}
function Ne(e) {
  return ae() ? (ue(e), !0) : !1;
}
function O(e) {
  var t;
  const o = Be(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const le = N ? window : void 0;
N && window.document;
N && window.navigator;
N && window.location;
function L(...e) {
  let t, o, l, n;
  if (Pe(e[0]) ? ([o, l, n] = e, t = le) : [t, o, l, n] = e, !t)
    return F;
  let u = F;
  const c = te(() => O(t), (a) => {
    u(), a && (a.addEventListener(o, l, n), u = () => {
      a.removeEventListener(o, l, n), u = F;
    });
  }, { immediate: !0, flush: "post" }), s = () => {
    c(), u();
  };
  return Ne(s), s;
}
function R(e, t, o = {}) {
  const { window: l = le, ignore: n, capture: u = !0, detectIframe: c = !1 } = o;
  if (!l)
    return;
  const s = p(!0);
  let a;
  const i = (_) => {
    l.clearTimeout(a);
    const r = O(e), f = _.composedPath();
    !r || r === _.target || f.includes(r) || !s.value || n && n.length > 0 && n.some((S) => {
      const h = O(S);
      return h && (_.target === h || f.includes(h));
    }) || t(_);
  }, y = [
    L(l, "click", i, { passive: !0, capture: u }),
    L(l, "pointerdown", (_) => {
      const r = O(e);
      s.value = !!r && !_.composedPath().includes(r);
    }, { passive: !0 }),
    L(l, "pointerup", (_) => {
      if (_.button === 0) {
        const r = _.composedPath();
        _.composedPath = () => r, a = l.setTimeout(() => i(_), 50);
      }
    }, { passive: !0 }),
    c && L(l, "blur", (_) => {
      var r;
      const f = O(e);
      ((r = document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(f != null && f.contains(document.activeElement)) && t(_);
    })
  ].filter(Boolean);
  return () => y.forEach((_) => _());
}
const q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = "__vueuse_ssr_handlers__";
q[J] = q[J] || {};
var X;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(X || (X = {}));
var Le = Object.defineProperty, Y = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, Z = (e, t, o) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Qe = (e, t) => {
  for (var o in t || (t = {}))
    Te.call(t, o) && Z(e, o, t[o]);
  if (Y)
    for (var o of Y(t))
      Ue.call(t, o) && Z(e, o, t[o]);
  return e;
};
const De = {
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
  linear: Ee
}, De);
const Fe = (e) => (j("data-v-adc57234"), e = e(), A(), e), Me = { class: "label-item" }, He = /* @__PURE__ */ Fe(() => /* @__PURE__ */ d("i", { class: "i-tabler:chevron-down icon" }, null, -1)), je = /* @__PURE__ */ g({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, l = x(() => o.item), n = p();
    return R(n, () => t("clickOutside")), (u, c) => {
      var s;
      return v(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (a) => t("click"))
      }, [
        d("div", Me, [
          d("i", {
            class: C([(s = w(l)) == null ? void 0 : s.icon])
          }, null, 2),
          d("span", null, B(w(l) ? w(l).label : e.placeholder || "Please select an option"), 1)
        ]),
        He
      ], 512);
    };
  }
});
const Ae = /* @__PURE__ */ b(je, [["__scopeId", "data-v-adc57234"]]), Re = { class: "dropdown-content" }, We = ["onClick"], ze = ["src"], Ke = {
  key: 2,
  class: "icon i-tabler:check"
}, Ge = {
  key: 1,
  class: "no-results"
}, qe = /* @__PURE__ */ g({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = p(e.modelValue), n = (u) => {
      l.value = u, t("update:modelValue", l.value);
    };
    return (u, c) => (v(), m("div", Re, [
      e.items.length > 0 ? (v(!0), m(ce, { key: 0 }, de(e.items, (s) => (v(), m("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (a) => n(s)
      }, [
        s.icon ? (v(), m("i", {
          key: 0,
          class: C(s.icon)
        }, null, 2)) : D("", !0),
        s.image ? (v(), m("img", {
          key: 1,
          src: s.image,
          class: "image"
        }, null, 8, ze)) : D("", !0),
        d("span", null, B(s.label), 1),
        s && l.value && s.value === l.value.value ? (v(), m("i", Ke)) : D("", !0)
      ], 8, We))), 128)) : (v(), m("div", Ge, [
        I(u.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const W = /* @__PURE__ */ b(qe, [["__scopeId", "data-v-2f74106b"]]), Je = { class: "dropdown" }, Xe = /* @__PURE__ */ g({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: l, placeholder: n } = e, u = x(() => o), c = p(), s = p(!1), a = (i) => {
      !i || (c.value = i, t("update:modelValue", c.value.value), s.value = !1);
    };
    return E(() => c.value = l.find((i) => i.value === u.value)), (i, y) => (v(), m("div", Je, [
      k(Ae, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: y[0] || (y[0] = ($) => s.value = !s.value),
        onClickOutside: y[1] || (y[1] = ($) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      P(k(W, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": a
      }, null, 8, ["model-value", "items"]), [
        [U, s.value]
      ])
    ]));
  }
});
const Ye = /* @__PURE__ */ b(Xe, [["__scopeId", "data-v-a4109ef5"]]), Ze = { class: "password-input" }, et = /* @__PURE__ */ g({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, passwordHidden: l = !0 } = e, n = p(), u = p(l), c = p(o), s = (a) => {
      c.value = a, t("update:modelValue", a);
    };
    return (a, i) => (v(), m("div", Ze, [
      d("button", {
        class: "password-icon",
        type: "button",
        onClick: i[0] || (i[0] = (y) => u.value = !u.value)
      }, [
        d("i", {
          class: C(u.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      k(Q, {
        ref_key: "baseInput",
        ref: n,
        type: u.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["type", "placeholder", "model-value"])
    ]));
  }
});
const tt = /* @__PURE__ */ b(et, [["__scopeId", "data-v-1f342af8"]]);
const ot = {}, lt = { class: "note" }, nt = { class: "icon" }, st = { class: "content" };
function at(e, t) {
  return v(), m("div", lt, [
    d("div", nt, [
      I(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    d("div", st, [
      I(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const ut = /* @__PURE__ */ b(ot, [["render", at], ["__scopeId", "data-v-5be167d4"]]), ct = (e) => (j("data-v-dbbecf04"), e = e(), A(), e), dt = { class: "loading" }, rt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, it = /* @__PURE__ */ ct(() => /* @__PURE__ */ d("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), pt = { class: "loading-value" }, _t = /* @__PURE__ */ g({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const o = e, l = p(0), n = p(!1), u = x(() => ({
      strokeDashoffset: `${(100 - l.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return te(o, () => {
      l.value = 0, n.value = !0;
    }), E(() => {
      const c = o.duration, s = c / 100, a = 100 / (c / s);
      let i = 0;
      n.value = !0;
      const y = setInterval(() => {
        i += a, l.value = i, i >= 100 && (clearInterval(y), n.value = !1, t("complete"));
      }, s);
      return () => clearInterval(y);
    }), (c, s) => (v(), m("div", dt, [
      (v(), m("svg", rt, [
        it,
        d("circle", {
          class: "loading-circle-progress",
          style: re(w(u)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      d("div", pt, B(`${l.value}%`), 1)
    ]));
  }
});
const vt = /* @__PURE__ */ b(_t, [["__scopeId", "data-v-dbbecf04"]]), mt = (e) => (j("data-v-85a1e21d"), e = e(), A(), e), ft = { class: "checkbox-container" }, ht = ["id"], yt = /* @__PURE__ */ mt(() => /* @__PURE__ */ d("span", { class: "checkmark" }, null, -1)), gt = /* @__PURE__ */ g({
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
    const o = e, l = p(o.id), n = p(o.modelValue);
    return E(() => {
      t("update:modelValue", n.value);
    }), (u, c) => (v(), m("label", ft, [
      P(d("input", {
        id: l.value,
        "onUpdate:modelValue": c[0] || (c[0] = (s) => n.value = s),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, ht), [
        [ie, n.value]
      ]),
      yt
    ]));
  }
});
const bt = /* @__PURE__ */ b(gt, [["__scopeId", "data-v-85a1e21d"]]), It = ["disabled"], wt = { class: "text" }, $t = /* @__PURE__ */ g({
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
      class: C(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      d("span", wt, [
        I(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, It));
  }
});
const Vt = /* @__PURE__ */ b($t, [["__scopeId", "data-v-193bb3f6"]]), xt = /* @__PURE__ */ g({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (v(), T(Vt, M(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: H(() => [
        I(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const kt = /* @__PURE__ */ b(xt, [["__scopeId", "data-v-18934737"]]), St = { class: "dropdown" }, Ct = { class: "icon-container" }, Ot = /* @__PURE__ */ g({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o = "", items: l } = e, n = p(o), u = p(), c = p(!1), s = p(l), a = p(0), i = (r) => c.value = r, y = (r) => {
      !r || (u.value = r, n.value = r.label, t("update:modelValue", u.value.value), i(!1));
    };
    E(() => {
      var r;
      u.value = l.find((f) => f.value === n.value || f.label === n.value), u.value ? n.value = (r = u.value) == null ? void 0 : r.label : n.value = "";
    });
    const $ = (r) => {
      r = r.toLowerCase(), s.value = l.filter((f) => f.label.toLowerCase().includes(r) || f.value.toLowerCase().includes(r));
    }, _ = p();
    return R(_, () => {
      a.value++, s.value = l, i(!1);
    }), (r, f) => (v(), m("div", St, [
      d("div", {
        ref_key: "_dropdown_trigger",
        ref: _,
        class: "input-container"
      }, [
        (v(), T(oe, {
          key: a.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": $,
          onFocus: f[0] || (f[0] = (S) => i(!0))
        }, null, 8, ["model-value", "placeholder"])),
        d("div", Ct, [
          d("i", {
            class: C(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: f[1] || (f[1] = (S) => i(!c.value))
          }, null, 2)
        ])
      ], 512),
      P(k(W, {
        class: "items-menu",
        "model-value": u.value,
        items: s.value,
        "onUpdate:modelValue": y
      }, {
        no_result: H(() => [
          I(r.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [U, c.value]
      ])
    ]));
  }
});
const Pt = /* @__PURE__ */ b(Ot, [["__scopeId", "data-v-0d4f44d8"]]), Bt = { class: "dropdown" }, Et = { class: "text" }, Nt = { class: "input-container" }, Lt = /* @__PURE__ */ g({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: l, items: n, placeholder: u } = e, c = p(o), s = x(() => l), a = p(), i = p(!1), y = p(n), $ = p(0), _ = (h) => i.value = h, r = (h) => {
      !h || (a.value = h, c.value = "", t("update:dialCode", h.value), _(!1));
    };
    E(() => a.value = n.find((h) => h.value === s.value));
    const f = (h) => {
      h = h.toLowerCase(), y.value = n.filter((V) => V.label.toLowerCase().includes(h) || V.value.toLowerCase().includes(h)), a.value && t("update:modelValue", h);
    }, S = p();
    return R(S, () => {
      y.value = n, c.value !== "" && $.value++, _(!1);
    }), (h, V) => {
      var z;
      return v(), m("div", Bt, [
        d("div", {
          ref_key: "_dropdown_trigger",
          ref: S,
          class: "handler"
        }, [
          d("div", {
            class: "trigger",
            onClick: V[0] || (V[0] = (ne) => _(!i.value))
          }, [
            d("span", Et, B(((z = a.value) == null ? void 0 : z.value) || "unknown"), 1),
            d("i", {
              class: C(["icon", [i.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          d("div", Nt, [
            (v(), T(Q, {
              key: $.value,
              "model-value": c.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": f,
              onFocus: V[1] || (V[1] = (ne) => {
                var K;
                return !((K = a.value) != null && K.value) && _(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        P(k(W, {
          class: "items-menu",
          "model-value": a.value,
          items: e.items,
          "onUpdate:modelValue": r
        }, null, 8, ["model-value", "items"]), [
          [U, i.value]
        ])
      ]);
    };
  }
});
const Tt = /* @__PURE__ */ b(Lt, [["__scopeId", "data-v-037ace4c"]]), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: oe,
  StoreSlugInput: Oe,
  Dropdown: Ye,
  PasswordInput: tt,
  Note: ut,
  Loading: vt,
  Checkbox: bt,
  PrimaryButton: kt,
  ComboBox: Pt,
  PhoneNumberInput: Tt
}, Symbol.toStringTag, { value: "Module" }));
function Ut(e) {
  for (const t in ee)
    e.component(t, ee[t]);
}
const Dt = { install: Ut };
export {
  bt as Checkbox,
  Pt as ComboBox,
  Ye as Dropdown,
  vt as Loading,
  ut as Note,
  tt as PasswordInput,
  Tt as PhoneNumberInput,
  kt as PrimaryButton,
  Oe as StoreSlugInput,
  oe as TextInput,
  Dt as default
};

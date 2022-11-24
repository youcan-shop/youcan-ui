import { defineComponent as b, computed as V, openBlock as v, createElementBlock as m, mergeProps as H, unref as w, createBlock as T, ref as p, createElementVNode as c, createVNode as k, Transition as se, withCtx as te, withDirectives as P, renderSlot as I, vShow as U, toDisplayString as B, getCurrentScope as ae, onScopeDispose as ue, watch as oe, normalizeClass as C, pushScopeId as Q, popScopeId as D, Fragment as ce, renderList as de, createCommentVNode as F, watchEffect as E, normalizeStyle as re, vModelCheckbox as ie } from "vue";
const pe = ["value", "type", "placeholder"], _e = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const o = e, l = V(() => o.modelValue), n = V(() => o.type), d = ({ target: a }) => {
      t("update:modelValue", a.value);
    }, u = () => t("focus"), s = () => t("blur");
    return (a, i) => (v(), m("input", H({
      value: w(l),
      type: w(n),
      placeholder: e.placeholder,
      class: "input"
    }, a.$attrs, {
      onInput: d,
      onFocus: u,
      onBlur: s
    }), null, 16, pe));
  }
});
const g = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, j = /* @__PURE__ */ g(_e, [["__scopeId", "data-v-b9ca6b78"]]), A = /* @__PURE__ */ b({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = V(() => o.modelValue), n = (d) => {
      t("update:modelValue", d);
    };
    return (d, u) => (v(), T(j, H({
      "model-value": w(l),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, d.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), ve = { class: "store-slug-input" }, me = { class: "input-container" }, fe = { class: "popover" }, he = { class: "store-slug-box-content" }, ye = { class: "box-description" }, be = { class: "store-slug-title" }, ge = { class: "store-slug-description" }, Ie = { class: "border-example" }, we = { class: "border-icon-example" }, $e = { class: "input-border-example" }, xe = { class: "note" }, Ve = { class: "icon-note" }, ke = { class: "note-description" }, Se = { class: "slug-suffix" }, Ce = /* @__PURE__ */ b({
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
    const l = p(e.modelValue), n = p(!1), d = (a) => t("update:modelValue", a), u = () => n.value = !0, s = () => n.value = !1;
    return (a, i) => (v(), m("div", ve, [
      c("div", me, [
        k(se, { name: "fade" }, {
          default: te(() => [
            P(c("div", fe, [
              c("div", he, [
                c("div", ye, [
                  c("div", be, [
                    I(a.$slots, "title", {}, void 0, !0)
                  ]),
                  c("div", ge, [
                    I(a.$slots, "description", {}, void 0, !0)
                  ]),
                  c("div", Ie, [
                    c("div", we, [
                      I(a.$slots, "example", {}, void 0, !0)
                    ]),
                    c("div", $e, [
                      I(a.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                c("div", xe, [
                  c("div", Ve, [
                    I(a.$slots, "icon", {}, void 0, !0)
                  ]),
                  c("span", ke, [
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
        k(j, {
          "model-value": l.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": d,
          onFocus: u,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        c("span", Se, B(e.slugSuffix), 1)
      ])
    ]));
  }
});
const Oe = /* @__PURE__ */ g(Ce, [["__scopeId", "data-v-4381b233"]]);
var G;
const N = typeof window < "u", Pe = (e) => typeof e == "string", M = () => {
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
    return M;
  let d = M;
  const u = oe(() => O(t), (a) => {
    d(), a && (a.addEventListener(o, l, n), d = () => {
      a.removeEventListener(o, l, n), d = M;
    });
  }, { immediate: !0, flush: "post" }), s = () => {
    u(), d();
  };
  return Ne(s), s;
}
function R(e, t, o = {}) {
  const { window: l = le, ignore: n, capture: d = !0, detectIframe: u = !1 } = o;
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
    L(l, "click", i, { passive: !0, capture: d }),
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
    u && L(l, "blur", (_) => {
      var r;
      const f = O(e);
      ((r = document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(f != null && f.contains(document.activeElement)) && t(_);
    })
  ].filter(Boolean);
  return () => y.forEach((_) => _());
}
const q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__";
q[Y] = q[Y] || {};
var J;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(J || (J = {}));
var Le = Object.defineProperty, X = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, Z = (e, t, o) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Qe = (e, t) => {
  for (var o in t || (t = {}))
    Te.call(t, o) && Z(e, o, t[o]);
  if (X)
    for (var o of X(t))
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
const Fe = (e) => (Q("data-v-adc57234"), e = e(), D(), e), Me = { class: "label-item" }, He = /* @__PURE__ */ Fe(() => /* @__PURE__ */ c("i", { class: "i-tabler:chevron-down icon" }, null, -1)), je = /* @__PURE__ */ b({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, l = V(() => o.item), n = p();
    return R(n, () => t("clickOutside")), (d, u) => {
      var s;
      return v(), m("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: u[0] || (u[0] = (a) => t("click"))
      }, [
        c("div", Me, [
          c("i", {
            class: C([(s = w(l)) == null ? void 0 : s.icon])
          }, null, 2),
          c("span", null, B(w(l) ? w(l).label : e.placeholder || "Please select an option"), 1)
        ]),
        He
      ], 512);
    };
  }
});
const Ae = /* @__PURE__ */ g(je, [["__scopeId", "data-v-adc57234"]]), Re = (e) => (Q("data-v-c0ef81fc"), e = e(), D(), e), We = { class: "dropdown-content" }, ze = ["onClick"], Ke = ["src"], Ge = {
  key: 2,
  class: "icon i-tabler:check"
}, qe = {
  key: 1,
  class: "no-results"
}, Ye = /* @__PURE__ */ Re(() => /* @__PURE__ */ c("span", null, "Your search came up with no results.", -1)), Je = [
  Ye
], Xe = /* @__PURE__ */ b({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = p(e.modelValue), n = (d) => {
      l.value = d, t("update:modelValue", l.value);
    };
    return (d, u) => (v(), m("div", We, [
      e.items.length > 0 ? (v(!0), m(ce, { key: 0 }, de(e.items, (s) => (v(), m("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (a) => n(s)
      }, [
        s.icon ? (v(), m("i", {
          key: 0,
          class: C(s.icon)
        }, null, 2)) : F("", !0),
        s.image ? (v(), m("img", {
          key: 1,
          src: s.image,
          class: "image"
        }, null, 8, Ke)) : F("", !0),
        c("span", null, B(s.label), 1),
        s && l.value && s.value === l.value.value ? (v(), m("i", Ge)) : F("", !0)
      ], 8, ze))), 128)) : (v(), m("div", qe, Je))
    ]));
  }
});
const W = /* @__PURE__ */ g(Xe, [["__scopeId", "data-v-c0ef81fc"]]), Ze = { class: "dropdown" }, et = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, items: l, placeholder: n } = e, d = V(() => o), u = p(), s = p(!1), a = (i) => {
      !i || (u.value = i, t("update:modelValue", u.value.value), s.value = !1);
    };
    return E(() => u.value = l.find((i) => i.value === d.value)), (i, y) => (v(), m("div", Ze, [
      k(Ae, {
        item: u.value,
        placeholder: e.placeholder,
        onClick: y[0] || (y[0] = ($) => s.value = !s.value),
        onClickOutside: y[1] || (y[1] = ($) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      P(k(W, {
        "model-value": u.value,
        items: e.items,
        "onUpdate:modelValue": a
      }, null, 8, ["model-value", "items"]), [
        [U, s.value]
      ])
    ]));
  }
});
const tt = /* @__PURE__ */ g(et, [["__scopeId", "data-v-a4109ef5"]]), ot = { class: "password-input" }, lt = /* @__PURE__ */ b({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o, passwordHidden: l = !0 } = e, n = p(), d = p(l), u = p(o), s = (a) => {
      u.value = a, t("update:modelValue", a);
    };
    return (a, i) => (v(), m("div", ot, [
      c("button", {
        class: "password-icon",
        type: "button",
        onClick: i[0] || (i[0] = (y) => d.value = !d.value)
      }, [
        c("i", {
          class: C(d.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      k(j, {
        ref_key: "baseInput",
        ref: n,
        type: d.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": u.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["type", "placeholder", "model-value"])
    ]));
  }
});
const nt = /* @__PURE__ */ g(lt, [["__scopeId", "data-v-1f342af8"]]);
const st = {}, at = { class: "note" }, ut = { class: "icon" }, ct = { class: "content" };
function dt(e, t) {
  return v(), m("div", at, [
    c("div", ut, [
      I(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    c("div", ct, [
      I(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const rt = /* @__PURE__ */ g(st, [["render", dt], ["__scopeId", "data-v-5be167d4"]]), it = (e) => (Q("data-v-dbbecf04"), e = e(), D(), e), pt = { class: "loading" }, _t = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, vt = /* @__PURE__ */ it(() => /* @__PURE__ */ c("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), mt = { class: "loading-value" }, ft = /* @__PURE__ */ b({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const o = e, l = p(0), n = p(!1), d = V(() => ({
      strokeDashoffset: `${(100 - l.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return oe(o, () => {
      l.value = 0, n.value = !0;
    }), E(() => {
      const u = o.duration, s = u / 100, a = 100 / (u / s);
      let i = 0;
      n.value = !0;
      const y = setInterval(() => {
        i += a, l.value = i, i >= 100 && (clearInterval(y), n.value = !1, t("complete"));
      }, s);
      return () => clearInterval(y);
    }), (u, s) => (v(), m("div", pt, [
      (v(), m("svg", _t, [
        vt,
        c("circle", {
          class: "loading-circle-progress",
          style: re(w(d)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      c("div", mt, B(`${l.value}%`), 1)
    ]));
  }
});
const ht = /* @__PURE__ */ g(ft, [["__scopeId", "data-v-dbbecf04"]]), yt = (e) => (Q("data-v-85a1e21d"), e = e(), D(), e), bt = { class: "checkbox-container" }, gt = ["id"], It = /* @__PURE__ */ yt(() => /* @__PURE__ */ c("span", { class: "checkmark" }, null, -1)), wt = /* @__PURE__ */ b({
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
    }), (d, u) => (v(), m("label", bt, [
      P(c("input", {
        id: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (s) => n.value = s),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, gt), [
        [ie, n.value]
      ]),
      It
    ]));
  }
});
const $t = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-85a1e21d"]]), xt = ["disabled"], Vt = { class: "text" }, kt = /* @__PURE__ */ b({
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
      c("span", Vt, [
        I(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, xt));
  }
});
const St = /* @__PURE__ */ g(kt, [["__scopeId", "data-v-193bb3f6"]]), Ct = /* @__PURE__ */ b({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (v(), T(St, H(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: te(() => [
        I(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const Ot = /* @__PURE__ */ g(Ct, [["__scopeId", "data-v-18934737"]]), Pt = { class: "dropdown" }, Bt = { class: "icon-container" }, Et = /* @__PURE__ */ b({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: o = "", items: l } = e, n = p(o), d = p(), u = p(!1), s = p(l), a = p(0), i = (r) => u.value = r, y = (r) => {
      !r || (d.value = r, n.value = r.label, t("update:modelValue", d.value.value), i(!1));
    };
    E(() => {
      var r;
      d.value = l.find((f) => f.value === n.value || f.label === n.value), d.value ? n.value = (r = d.value) == null ? void 0 : r.label : n.value = "";
    });
    const $ = (r) => {
      r = r.toLowerCase(), s.value = l.filter((f) => f.label.toLowerCase().includes(r) || f.value.toLowerCase().includes(r));
    }, _ = p();
    return R(_, () => {
      a.value++, s.value = l, i(!1);
    }), (r, f) => (v(), m("div", Pt, [
      c("div", {
        ref_key: "_dropdown_trigger",
        ref: _,
        class: "input-container"
      }, [
        (v(), T(A, {
          key: a.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": $,
          onFocus: f[0] || (f[0] = (S) => i(!0))
        }, null, 8, ["model-value", "placeholder"])),
        c("div", Bt, [
          c("i", {
            class: C(["icon", [u.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: f[1] || (f[1] = (S) => i(!u.value))
          }, null, 2)
        ])
      ], 512),
      P(k(W, {
        class: "items-menu",
        "model-value": d.value,
        items: s.value,
        "onUpdate:modelValue": y
      }, null, 8, ["model-value", "items"]), [
        [U, u.value]
      ])
    ]));
  }
});
const Nt = /* @__PURE__ */ g(Et, [["__scopeId", "data-v-e54d0a92"]]), Lt = { class: "dropdown" }, Tt = { class: "text" }, Ut = { class: "input-container" }, Qt = /* @__PURE__ */ b({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: l, items: n, placeholder: d } = e, u = p(o), s = V(() => l), a = p(), i = p(!1), y = p(n), $ = p(0), _ = (h) => i.value = h, r = (h) => {
      !h || (a.value = h, u.value = "", t("update:dialCode", h.value), _(!1));
    };
    E(() => a.value = n.find((h) => h.value === s.value));
    const f = (h) => {
      h = h.toLowerCase(), y.value = n.filter((x) => x.label.toLowerCase().includes(h) || x.value.toLowerCase().includes(h)), a.value && t("update:modelValue", h);
    }, S = p();
    return R(S, () => {
      y.value = n, u.value !== "" && $.value++, _(!1);
    }), (h, x) => {
      var z;
      return v(), m("div", Lt, [
        c("div", {
          ref_key: "_dropdown_trigger",
          ref: S,
          class: "handler"
        }, [
          c("div", {
            class: "trigger",
            onClick: x[0] || (x[0] = (ne) => _(!i.value))
          }, [
            c("span", Tt, B(((z = a.value) == null ? void 0 : z.value) || "unknown"), 1),
            c("i", {
              class: C(["icon", [i.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          c("div", Ut, [
            (v(), T(A, {
              key: $.value,
              "model-value": u.value,
              class: "input",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": f,
              onFocus: x[1] || (x[1] = (ne) => {
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
const Dt = /* @__PURE__ */ g(Qt, [["__scopeId", "data-v-d11e43b5"]]), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: A,
  StoreSlugInput: Oe,
  Dropdown: tt,
  PasswordInput: nt,
  Note: rt,
  Loading: ht,
  Checkbox: $t,
  PrimaryButton: Ot,
  ComboBox: Nt,
  PhoneNumberInput: Dt
}, Symbol.toStringTag, { value: "Module" }));
function Ft(e) {
  for (const t in ee)
    e.component(t, ee[t]);
}
const Ht = { install: Ft };
export {
  $t as Checkbox,
  Nt as ComboBox,
  tt as Dropdown,
  ht as Loading,
  rt as Note,
  nt as PasswordInput,
  Dt as PhoneNumberInput,
  Ot as PrimaryButton,
  Oe as StoreSlugInput,
  A as TextInput,
  Ht as default
};

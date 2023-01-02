import { defineComponent as I, computed as k, openBlock as m, createElementBlock as f, mergeProps as Q, unref as V, createBlock as L, ref as _, createElementVNode as r, createVNode as S, Transition as le, withCtx as D, withDirectives as P, renderSlot as w, vShow as T, toDisplayString as B, getCurrentScope as ne, onScopeDispose as se, watch as Z, normalizeClass as C, pushScopeId as F, popScopeId as H, Fragment as ae, renderList as ue, createCommentVNode as M, watchEffect as E, normalizeStyle as ce, vModelCheckbox as de } from "vue";
const re = ["value", "type", "placeholder"], ie = /* @__PURE__ */ I({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const l = e, o = k(() => l.modelValue), n = k(() => l.type), d = ({ target: c }) => {
      t("update:modelValue", c.value);
    }, u = () => t("focus"), s = () => t("blur");
    return (c, i) => (m(), f("input", Q({
      value: V(o),
      type: V(n),
      placeholder: e.placeholder,
      class: "input"
    }, c.$attrs, {
      onInput: d,
      onFocus: u,
      onBlur: s
    }), null, 16, re));
  }
});
const $ = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, U = /* @__PURE__ */ $(ie, [["__scopeId", "data-v-3ea2132f"]]), ee = /* @__PURE__ */ I({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = k(() => l.modelValue), n = (d) => {
      t("update:modelValue", d);
    };
    return (d, u) => (m(), L(U, Q({
      "model-value": V(o),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, d.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), pe = { class: "store-slug-input" }, _e = { class: "input-container" }, ve = { class: "popover" }, me = { class: "store-slug-box-content" }, fe = { class: "box-description" }, he = { class: "store-slug-title" }, ye = { class: "store-slug-description" }, be = { class: "border-example" }, ge = { class: "border-icon-example" }, Ie = { class: "input-border-example" }, $e = { class: "note" }, we = { class: "icon-note" }, Ve = { class: "note-description" }, xe = { class: "slug-suffix" }, ke = /* @__PURE__ */ I({
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
    const o = _(e.modelValue), n = _(!1), d = (c) => t("update:modelValue", c), u = () => n.value = !0, s = () => n.value = !1;
    return (c, i) => (m(), f("div", pe, [
      r("div", _e, [
        S(le, { name: "fade" }, {
          default: D(() => [
            P(r("div", ve, [
              r("div", me, [
                r("div", fe, [
                  r("div", he, [
                    w(c.$slots, "title", {}, void 0, !0)
                  ]),
                  r("div", ye, [
                    w(c.$slots, "description", {}, void 0, !0)
                  ]),
                  r("div", be, [
                    r("div", ge, [
                      w(c.$slots, "example", {}, void 0, !0)
                    ]),
                    r("div", Ie, [
                      w(c.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                r("div", $e, [
                  r("div", we, [
                    w(c.$slots, "icon", {}, void 0, !0)
                  ]),
                  r("span", Ve, [
                    w(c.$slots, "note-desc", {}, void 0, !0)
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
          "model-value": o.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": d,
          onFocus: u,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        r("span", xe, B(e.slugSuffix), 1)
      ])
    ]));
  }
});
const Se = /* @__PURE__ */ $(ke, [["__scopeId", "data-v-ad7dc538"]]), A = typeof window < "u", Ce = (e) => typeof e == "string", Oe = () => {
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
  const l = Pe(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const te = A ? window : void 0;
A && window.document;
A && window.navigator;
A && window.location;
function N(...e) {
  let t, l, o, n;
  if (Ce(e[0]) || Array.isArray(e[0]) ? ([l, o, n] = e, t = te) : [t, l, o, n] = e, !t)
    return Oe;
  Array.isArray(l) || (l = [l]), Array.isArray(o) || (o = [o]);
  const d = [], u = () => {
    d.forEach((v) => v()), d.length = 0;
  }, s = (v, b, g) => (v.addEventListener(b, g, n), () => v.removeEventListener(b, g, n)), c = Z(() => O(t), (v) => {
    u(), v && d.push(...l.flatMap((b) => o.map((g) => s(v, b, g))));
  }, { immediate: !0, flush: "post" }), i = () => {
    c(), u();
  };
  return Ee(i), i;
}
function j(e, t, l = {}) {
  const { window: o = te, ignore: n = [], capture: d = !0, detectIframe: u = !1 } = l;
  if (!o)
    return;
  let s = !0, c;
  const i = (a) => n.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === a.target || a.composedPath().includes(h));
    {
      const h = O(p);
      return h && (a.target === h || a.composedPath().includes(h));
    }
  }), v = (a) => {
    o.clearTimeout(c);
    const p = O(e);
    if (!(!p || p === a.target || a.composedPath().includes(p))) {
      if (a.detail === 0 && (s = !i(a)), !s) {
        s = !0;
        return;
      }
      t(a);
    }
  }, b = [
    N(o, "click", v, { passive: !0, capture: d }),
    N(o, "pointerdown", (a) => {
      const p = O(e);
      p && (s = !a.composedPath().includes(p) && !i(a));
    }, { passive: !0 }),
    N(o, "pointerup", (a) => {
      if (a.button === 0) {
        const p = a.composedPath();
        a.composedPath = () => p, c = o.setTimeout(() => v(a), 50);
      }
    }, { passive: !0 }),
    u && N(o, "blur", (a) => {
      var p;
      const h = O(e);
      ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && t(a);
    })
  ].filter(Boolean);
  return () => b.forEach((a) => a());
}
const K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, q = "__vueuse_ssr_handlers__";
K[q] = K[q] || {};
var G;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(G || (G = {}));
var Ne = Object.defineProperty, J = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, Te = Object.prototype.propertyIsEnumerable, X = (e, t, l) => t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Ue = (e, t) => {
  for (var l in t || (t = {}))
    Le.call(t, l) && X(e, l, t[l]);
  if (J)
    for (var l of J(t))
      Te.call(t, l) && X(e, l, t[l]);
  return e;
};
const Ae = {
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
}, Ae);
const Me = (e) => (F("data-v-adc57234"), e = e(), H(), e), Qe = { class: "label-item" }, De = /* @__PURE__ */ Me(() => /* @__PURE__ */ r("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Fe = /* @__PURE__ */ I({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const l = e, o = k(() => l.item), n = _();
    return j(n, () => t("clickOutside")), (d, u) => {
      var s;
      return m(), f("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: u[0] || (u[0] = (c) => t("click"))
      }, [
        r("div", Qe, [
          r("i", {
            class: C([(s = V(o)) == null ? void 0 : s.icon])
          }, null, 2),
          r("span", null, B(V(o) ? V(o).label : e.placeholder || "Please select an option"), 1)
        ]),
        De
      ], 512);
    };
  }
});
const He = /* @__PURE__ */ $(Fe, [["__scopeId", "data-v-adc57234"]]), je = { class: "dropdown-content" }, Re = ["onClick"], We = ["src"], ze = {
  key: 2,
  class: "icon i-tabler:check"
}, Ke = {
  key: 1,
  class: "no-results"
}, qe = /* @__PURE__ */ I({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = _(e.modelValue), n = (d) => {
      o.value = d, t("update:modelValue", o.value);
    };
    return (d, u) => (m(), f("div", je, [
      e.items.length > 0 ? (m(!0), f(ae, { key: 0 }, ue(e.items, (s) => (m(), f("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (c) => n(s)
      }, [
        s.icon ? (m(), f("i", {
          key: 0,
          class: C(s.icon)
        }, null, 2)) : M("", !0),
        s.image ? (m(), f("img", {
          key: 1,
          src: s.image,
          class: "image"
        }, null, 8, We)) : M("", !0),
        r("span", null, B(s.label), 1),
        s && o.value && s.value === o.value.value ? (m(), f("i", ze)) : M("", !0)
      ], 8, Re))), 128)) : (m(), f("div", Ke, [
        w(d.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const R = /* @__PURE__ */ $(qe, [["__scopeId", "data-v-2f74106b"]]), Ge = { class: "dropdown" }, Je = /* @__PURE__ */ I({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, items: o, placeholder: n } = e, d = k(() => l), u = _(), s = _(!1), c = (i) => {
      i && (u.value = i, t("update:modelValue", u.value.value), s.value = !1);
    };
    return E(() => u.value = o.find((i) => i.value === d.value)), (i, v) => (m(), f("div", Ge, [
      S(He, {
        item: u.value,
        placeholder: e.placeholder,
        onClick: v[0] || (v[0] = (b) => s.value = !s.value),
        onClickOutside: v[1] || (v[1] = (b) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      P(S(R, {
        "model-value": u.value,
        items: e.items,
        "onUpdate:modelValue": c
      }, null, 8, ["model-value", "items"]), [
        [T, s.value]
      ])
    ]));
  }
});
const Xe = /* @__PURE__ */ $(Je, [["__scopeId", "data-v-a4109ef5"]]), Ye = { class: "password-input" }, Ze = /* @__PURE__ */ I({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean },
    id: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, passwordHidden: o = !0 } = e, n = _(), d = _(o), u = _(l), s = (c) => {
      u.value = c, t("update:modelValue", c);
    };
    return (c, i) => (m(), f("div", Ye, [
      r("button", {
        class: "password-icon",
        type: "button",
        onClick: i[0] || (i[0] = (v) => d.value = !d.value)
      }, [
        r("i", {
          class: C(d.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      S(U, {
        id: e.id,
        ref_key: "baseInput",
        ref: n,
        type: d.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": u.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["id", "type", "placeholder", "model-value"])
    ]));
  }
});
const et = /* @__PURE__ */ $(Ze, [["__scopeId", "data-v-e1b15513"]]);
const tt = {}, ot = { class: "note" }, lt = { class: "icon" }, nt = { class: "content" };
function st(e, t) {
  return m(), f("div", ot, [
    r("div", lt, [
      w(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    r("div", nt, [
      w(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const at = /* @__PURE__ */ $(tt, [["render", st], ["__scopeId", "data-v-5be167d4"]]), ut = (e) => (F("data-v-dbbecf04"), e = e(), H(), e), ct = { class: "loading" }, dt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, rt = /* @__PURE__ */ ut(() => /* @__PURE__ */ r("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), it = { class: "loading-value" }, pt = /* @__PURE__ */ I({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const l = e, o = _(0), n = _(!1), d = k(() => ({
      strokeDashoffset: `${(100 - o.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return Z(l, () => {
      o.value = 0, n.value = !0;
    }), E(() => {
      const u = l.duration, s = u / 100, c = 100 / (u / s);
      let i = 0;
      n.value = !0;
      const v = setInterval(() => {
        i += c, o.value = i, i >= 100 && (clearInterval(v), n.value = !1, t("complete"));
      }, s);
      return () => clearInterval(v);
    }), (u, s) => (m(), f("div", ct, [
      (m(), f("svg", dt, [
        rt,
        r("circle", {
          class: "loading-circle-progress",
          style: ce(V(d)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      r("div", it, B(`${o.value}%`), 1)
    ]));
  }
});
const _t = /* @__PURE__ */ $(pt, [["__scopeId", "data-v-dbbecf04"]]), vt = (e) => (F("data-v-539dca17"), e = e(), H(), e), mt = { class: "checkbox-container" }, ft = ["id"], ht = /* @__PURE__ */ vt(() => /* @__PURE__ */ r("span", { class: "checkmark" }, null, -1)), yt = /* @__PURE__ */ I({
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
    const l = e, o = _(l.id), n = _(l.modelValue);
    return E(() => {
      t("update:modelValue", n.value);
    }), (d, u) => (m(), f("label", mt, [
      P(r("input", {
        id: o.value,
        "onUpdate:modelValue": u[0] || (u[0] = (s) => n.value = s),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, ft), [
        [de, n.value]
      ]),
      ht
    ]));
  }
});
const bt = /* @__PURE__ */ $(yt, [["__scopeId", "data-v-539dca17"]]), gt = ["disabled"], It = { class: "text" }, $t = /* @__PURE__ */ I({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, l) => (m(), f("button", {
      ref: "target",
      class: C(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      r("span", It, [
        w(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, gt));
  }
});
const wt = /* @__PURE__ */ $($t, [["__scopeId", "data-v-193bb3f6"]]), Vt = /* @__PURE__ */ I({
  __name: "PrimaryButton",
  setup(e) {
    return (t, l) => (m(), L(wt, Q(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: D(() => [
        w(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const xt = /* @__PURE__ */ $(Vt, [["__scopeId", "data-v-18934737"]]), kt = { class: "dropdown" }, St = { class: "icon-container" }, Ct = /* @__PURE__ */ I({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l = "", items: o } = e, n = _(l), d = _(), u = _(!1), s = _(o), c = _(0), i = (a) => u.value = a, v = (a) => {
      a && (d.value = a, n.value = a.label, t("update:modelValue", d.value.value), i(!1));
    };
    E(() => {
      var a;
      d.value = o.find((p) => p.value === n.value || p.label === n.value), d.value ? n.value = (a = d.value) == null ? void 0 : a.label : n.value = "";
    });
    const b = (a) => {
      a = a.toLowerCase(), s.value = o.filter((p) => p.label.toLowerCase().includes(a) || p.value.toLowerCase().includes(a));
    }, g = _();
    return j(g, () => {
      c.value++, s.value = o, i(!1);
    }), (a, p) => (m(), f("div", kt, [
      r("div", {
        ref_key: "_dropdown_trigger",
        ref: g,
        class: "input-container"
      }, [
        (m(), L(ee, {
          key: c.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": b,
          onFocus: p[0] || (p[0] = (h) => i(!0))
        }, null, 8, ["model-value", "placeholder"])),
        r("div", St, [
          r("i", {
            class: C(["icon", [u.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: p[1] || (p[1] = (h) => i(!u.value))
          }, null, 2)
        ])
      ], 512),
      P(S(R, {
        class: "items-menu",
        "model-value": d.value,
        items: s.value,
        "onUpdate:modelValue": v
      }, {
        no_result: D(() => [
          w(a.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [T, u.value]
      ])
    ]));
  }
});
const Ot = /* @__PURE__ */ $(Ct, [["__scopeId", "data-v-0d4f44d8"]]), Pt = { class: "dropdown" }, Bt = { class: "text" }, Et = { class: "input-container" }, Nt = /* @__PURE__ */ I({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: l, dialCode: o, items: n, placeholder: d } = e, u = _(l), s = k(() => o), c = _(), i = _(!1), v = _(n), b = _(0), g = (y) => i.value = y, a = (y) => {
      y && (c.value = y, u.value = "", t("update:dialCode", y.value), g(!1));
    };
    E(() => c.value = n.find((y) => y.value === s.value));
    const p = (y) => {
      y = y.toLowerCase(), v.value = n.filter((x) => x.label.toLowerCase().includes(y) || x.value.toLowerCase().includes(y)), c.value && t("update:modelValue", y);
    }, h = _();
    return j(h, () => {
      v.value = n, u.value !== "" && b.value++, g(!1);
    }), (y, x) => {
      var W;
      return m(), f("div", Pt, [
        r("div", {
          ref_key: "_dropdown_trigger",
          ref: h,
          class: "handler"
        }, [
          r("div", {
            class: "trigger",
            onClick: x[0] || (x[0] = (oe) => g(!i.value))
          }, [
            r("span", Bt, B(((W = c.value) == null ? void 0 : W.value) || "unknown"), 1),
            r("i", {
              class: C(["icon", [i.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          r("div", Et, [
            (m(), L(U, {
              key: b.value,
              "model-value": u.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": p,
              onFocus: x[1] || (x[1] = (oe) => {
                var z;
                return !((z = c.value) != null && z.value) && g(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        P(S(R, {
          class: "items-menu",
          "model-value": c.value,
          items: e.items,
          "onUpdate:modelValue": a
        }, null, 8, ["model-value", "items"]), [
          [T, i.value]
        ])
      ]);
    };
  }
});
const Lt = /* @__PURE__ */ $(Nt, [["__scopeId", "data-v-037ace4c"]]), Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: ee,
  StoreSlugInput: Se,
  Dropdown: Xe,
  PasswordInput: et,
  Note: at,
  Loading: _t,
  Checkbox: bt,
  PrimaryButton: xt,
  ComboBox: Ot,
  PhoneNumberInput: Lt
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e) {
  for (const t in Y)
    e.component(t, Y[t]);
}
const At = { install: Tt };
export {
  bt as Checkbox,
  Ot as ComboBox,
  Xe as Dropdown,
  _t as Loading,
  at as Note,
  et as PasswordInput,
  Lt as PhoneNumberInput,
  xt as PrimaryButton,
  Se as StoreSlugInput,
  ee as TextInput,
  At as default
};

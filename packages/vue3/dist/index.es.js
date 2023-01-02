import { defineComponent as I, computed as S, openBlock as m, createElementBlock as f, createElementVNode as u, createBlock as T, mergeProps as Y, unref as k, ref as _, createVNode as V, Transition as le, withCtx as Q, withDirectives as P, renderSlot as $, vShow as U, toDisplayString as B, getCurrentScope as ne, onScopeDispose as se, watch as Z, normalizeClass as C, pushScopeId as D, popScopeId as F, Fragment as ae, renderList as ue, createCommentVNode as M, watchEffect as E, normalizeStyle as ce, vModelCheckbox as de } from "vue";
const re = /* @__PURE__ */ u("input", { type: "text" }, null, -1), ie = [
  re
], N = /* @__PURE__ */ I({
  __name: "Input",
  props: {
    modelValue: null,
    label: null,
    icon: null,
    hint: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    return S({
      get: () => l.modelValue,
      set: (o) => t("update:modelValue", o)
    }), (o, n) => (m(), f("div", null, ie));
  }
}), ee = /* @__PURE__ */ I({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = S(() => l.modelValue), n = (d) => {
      t("update:modelValue", d);
    };
    return (d, c) => (m(), T(N, Y({
      "model-value": k(o),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, d.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), pe = { class: "store-slug-input" }, _e = { class: "input-container" }, ve = { class: "popover" }, me = { class: "store-slug-box-content" }, fe = { class: "box-description" }, he = { class: "store-slug-title" }, ye = { class: "store-slug-description" }, ge = { class: "border-example" }, be = { class: "border-icon-example" }, Ie = { class: "input-border-example" }, $e = { class: "note" }, we = { class: "icon-note" }, xe = { class: "note-description" }, Ve = { class: "slug-suffix" }, ke = /* @__PURE__ */ I({
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
    const o = _(e.modelValue), n = _(!1), d = (r) => t("update:modelValue", r), c = () => n.value = !0, s = () => n.value = !1;
    return (r, i) => (m(), f("div", pe, [
      u("div", _e, [
        V(le, { name: "fade" }, {
          default: Q(() => [
            P(u("div", ve, [
              u("div", me, [
                u("div", fe, [
                  u("div", he, [
                    $(r.$slots, "title", {}, void 0, !0)
                  ]),
                  u("div", ye, [
                    $(r.$slots, "description", {}, void 0, !0)
                  ]),
                  u("div", ge, [
                    u("div", be, [
                      $(r.$slots, "example", {}, void 0, !0)
                    ]),
                    u("div", Ie, [
                      $(r.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                u("div", $e, [
                  u("div", we, [
                    $(r.$slots, "icon", {}, void 0, !0)
                  ]),
                  u("span", xe, [
                    $(r.$slots, "note-desc", {}, void 0, !0)
                  ])
                ])
              ])
            ], 512), [
              [U, n.value]
            ])
          ]),
          _: 3
        }),
        V(N, {
          "model-value": o.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": d,
          onFocus: c,
          onBlur: s
        }, null, 8, ["model-value", "placeholder"]),
        u("span", Ve, B(e.slugSuffix), 1)
      ])
    ]));
  }
});
const w = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, Se = /* @__PURE__ */ w(ke, [["__scopeId", "data-v-ad7dc538"]]), A = typeof window < "u", Ce = (e) => typeof e == "string", Oe = () => {
};
function Pe(e) {
  return typeof e == "function" ? e() : k(e);
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
function L(...e) {
  let t, l, o, n;
  if (Ce(e[0]) || Array.isArray(e[0]) ? ([l, o, n] = e, t = te) : [t, l, o, n] = e, !t)
    return Oe;
  Array.isArray(l) || (l = [l]), Array.isArray(o) || (o = [o]);
  const d = [], c = () => {
    d.forEach((v) => v()), d.length = 0;
  }, s = (v, g, b) => (v.addEventListener(g, b, n), () => v.removeEventListener(g, b, n)), r = Z(() => O(t), (v) => {
    c(), v && d.push(...l.flatMap((g) => o.map((b) => s(v, g, b))));
  }, { immediate: !0, flush: "post" }), i = () => {
    r(), c();
  };
  return Ee(i), i;
}
function H(e, t, l = {}) {
  const { window: o = te, ignore: n = [], capture: d = !0, detectIframe: c = !1 } = l;
  if (!o)
    return;
  let s = !0, r;
  const i = (a) => n.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === a.target || a.composedPath().includes(h));
    {
      const h = O(p);
      return h && (a.target === h || a.composedPath().includes(h));
    }
  }), v = (a) => {
    o.clearTimeout(r);
    const p = O(e);
    if (!(!p || p === a.target || a.composedPath().includes(p))) {
      if (a.detail === 0 && (s = !i(a)), !s) {
        s = !0;
        return;
      }
      t(a);
    }
  }, g = [
    L(o, "click", v, { passive: !0, capture: d }),
    L(o, "pointerdown", (a) => {
      const p = O(e);
      p && (s = !a.composedPath().includes(p) && !i(a));
    }, { passive: !0 }),
    L(o, "pointerup", (a) => {
      if (a.button === 0) {
        const p = a.composedPath();
        a.composedPath = () => p, r = o.setTimeout(() => v(a), 50);
      }
    }, { passive: !0 }),
    c && L(o, "blur", (a) => {
      var p;
      const h = O(e);
      ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && t(a);
    })
  ].filter(Boolean);
  return () => g.forEach((a) => a());
}
const z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K = "__vueuse_ssr_handlers__";
z[K] = z[K] || {};
var q;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(q || (q = {}));
var Ne = Object.defineProperty, G = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, Te = Object.prototype.propertyIsEnumerable, J = (e, t, l) => t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Ue = (e, t) => {
  for (var l in t || (t = {}))
    Le.call(t, l) && J(e, l, t[l]);
  if (G)
    for (var l of G(t))
      Te.call(t, l) && J(e, l, t[l]);
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
const Me = (e) => (D("data-v-adc57234"), e = e(), F(), e), Qe = { class: "label-item" }, De = /* @__PURE__ */ Me(() => /* @__PURE__ */ u("i", { class: "i-tabler:chevron-down icon" }, null, -1)), Fe = /* @__PURE__ */ I({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const l = e, o = S(() => l.item), n = _();
    return H(n, () => t("clickOutside")), (d, c) => {
      var s;
      return m(), f("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (r) => t("click"))
      }, [
        u("div", Qe, [
          u("i", {
            class: C([(s = k(o)) == null ? void 0 : s.icon])
          }, null, 2),
          u("span", null, B(k(o) ? k(o).label : e.placeholder || "Please select an option"), 1)
        ]),
        De
      ], 512);
    };
  }
});
const He = /* @__PURE__ */ w(Fe, [["__scopeId", "data-v-adc57234"]]), je = { class: "dropdown-content" }, Re = ["onClick"], We = ["src"], ze = {
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
    return (d, c) => (m(), f("div", je, [
      e.items.length > 0 ? (m(!0), f(ae, { key: 0 }, ue(e.items, (s) => (m(), f("div", {
        key: s.label,
        class: "dropdown-item",
        onClick: (r) => n(s)
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
        u("span", null, B(s.label), 1),
        s && o.value && s.value === o.value.value ? (m(), f("i", ze)) : M("", !0)
      ], 8, Re))), 128)) : (m(), f("div", Ke, [
        $(d.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const j = /* @__PURE__ */ w(qe, [["__scopeId", "data-v-2f74106b"]]), Ge = { class: "dropdown" }, Je = /* @__PURE__ */ I({
  __name: "Dropdown",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, items: o, placeholder: n } = e, d = S(() => l), c = _(), s = _(!1), r = (i) => {
      i && (c.value = i, t("update:modelValue", c.value.value), s.value = !1);
    };
    return E(() => c.value = o.find((i) => i.value === d.value)), (i, v) => (m(), f("div", Ge, [
      V(He, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: v[0] || (v[0] = (g) => s.value = !s.value),
        onClickOutside: v[1] || (v[1] = (g) => s.value = !1)
      }, null, 8, ["item", "placeholder"]),
      P(V(j, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": r
      }, null, 8, ["model-value", "items"]), [
        [U, s.value]
      ])
    ]));
  }
});
const Xe = /* @__PURE__ */ w(Je, [["__scopeId", "data-v-a4109ef5"]]), Ye = { class: "password-input" }, Ze = /* @__PURE__ */ I({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean },
    id: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l, passwordHidden: o = !0 } = e, n = _(), d = _(o), c = _(l), s = (r) => {
      c.value = r, t("update:modelValue", r);
    };
    return (r, i) => (m(), f("div", Ye, [
      u("button", {
        class: "password-icon",
        type: "button",
        onClick: i[0] || (i[0] = (v) => d.value = !d.value)
      }, [
        u("i", {
          class: C(d.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      V(N, {
        id: e.id,
        ref_key: "baseInput",
        ref: n,
        type: d.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": s
      }, null, 8, ["id", "type", "placeholder", "model-value"])
    ]));
  }
});
const et = /* @__PURE__ */ w(Ze, [["__scopeId", "data-v-e1b15513"]]);
const tt = {}, ot = { class: "note" }, lt = { class: "icon" }, nt = { class: "content" };
function st(e, t) {
  return m(), f("div", ot, [
    u("div", lt, [
      $(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    u("div", nt, [
      $(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const at = /* @__PURE__ */ w(tt, [["render", st], ["__scopeId", "data-v-5be167d4"]]), ut = (e) => (D("data-v-dbbecf04"), e = e(), F(), e), ct = { class: "loading" }, dt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, rt = /* @__PURE__ */ ut(() => /* @__PURE__ */ u("circle", {
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
    const l = e, o = _(0), n = _(!1), d = S(() => ({
      strokeDashoffset: `${(100 - o.value) * 2.64}px`,
      transition: n.value ? "all 0.1s ease" : "none"
    }));
    return Z(l, () => {
      o.value = 0, n.value = !0;
    }), E(() => {
      const c = l.duration, s = c / 100, r = 100 / (c / s);
      let i = 0;
      n.value = !0;
      const v = setInterval(() => {
        i += r, o.value = i, i >= 100 && (clearInterval(v), n.value = !1, t("complete"));
      }, s);
      return () => clearInterval(v);
    }), (c, s) => (m(), f("div", ct, [
      (m(), f("svg", dt, [
        rt,
        u("circle", {
          class: "loading-circle-progress",
          style: ce(k(d)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      u("div", it, B(`${o.value}%`), 1)
    ]));
  }
});
const _t = /* @__PURE__ */ w(pt, [["__scopeId", "data-v-dbbecf04"]]), vt = (e) => (D("data-v-539dca17"), e = e(), F(), e), mt = { class: "checkbox-container" }, ft = ["id"], ht = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("span", { class: "checkmark" }, null, -1)), yt = /* @__PURE__ */ I({
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
    }), (d, c) => (m(), f("label", mt, [
      P(u("input", {
        id: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (s) => n.value = s),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, ft), [
        [de, n.value]
      ]),
      ht
    ]));
  }
});
const gt = /* @__PURE__ */ w(yt, [["__scopeId", "data-v-539dca17"]]), bt = ["disabled"], It = { class: "text" }, $t = /* @__PURE__ */ I({
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
      u("span", It, [
        $(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, bt));
  }
});
const wt = /* @__PURE__ */ w($t, [["__scopeId", "data-v-193bb3f6"]]), xt = /* @__PURE__ */ I({
  __name: "PrimaryButton",
  setup(e) {
    return (t, l) => (m(), T(wt, Y(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: Q(() => [
        $(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const Vt = /* @__PURE__ */ w(xt, [["__scopeId", "data-v-18934737"]]), kt = { class: "dropdown" }, St = { class: "icon-container" }, Ct = /* @__PURE__ */ I({
  __name: "ComboBox",
  props: {
    items: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: l = "", items: o } = e, n = _(l), d = _(), c = _(!1), s = _(o), r = _(0), i = (a) => c.value = a, v = (a) => {
      a && (d.value = a, n.value = a.label, t("update:modelValue", d.value.value), i(!1));
    };
    E(() => {
      var a;
      d.value = o.find((p) => p.value === n.value || p.label === n.value), d.value ? n.value = (a = d.value) == null ? void 0 : a.label : n.value = "";
    });
    const g = (a) => {
      a = a.toLowerCase(), s.value = o.filter((p) => p.label.toLowerCase().includes(a) || p.value.toLowerCase().includes(a));
    }, b = _();
    return H(b, () => {
      r.value++, s.value = o, i(!1);
    }), (a, p) => (m(), f("div", kt, [
      u("div", {
        ref_key: "_dropdown_trigger",
        ref: b,
        class: "input-container"
      }, [
        (m(), T(ee, {
          key: r.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": g,
          onFocus: p[0] || (p[0] = (h) => i(!0))
        }, null, 8, ["model-value", "placeholder"])),
        u("div", St, [
          u("i", {
            class: C(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: p[1] || (p[1] = (h) => i(!c.value))
          }, null, 2)
        ])
      ], 512),
      P(V(j, {
        class: "items-menu",
        "model-value": d.value,
        items: s.value,
        "onUpdate:modelValue": v
      }, {
        no_result: Q(() => [
          $(a.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [U, c.value]
      ])
    ]));
  }
});
const Ot = /* @__PURE__ */ w(Ct, [["__scopeId", "data-v-0d4f44d8"]]), Pt = { class: "dropdown" }, Bt = { class: "text" }, Et = { class: "input-container" }, Nt = /* @__PURE__ */ I({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: l, dialCode: o, items: n, placeholder: d } = e, c = _(l), s = S(() => o), r = _(), i = _(!1), v = _(n), g = _(0), b = (y) => i.value = y, a = (y) => {
      y && (r.value = y, c.value = "", t("update:dialCode", y.value), b(!1));
    };
    E(() => r.value = n.find((y) => y.value === s.value));
    const p = (y) => {
      y = y.toLowerCase(), v.value = n.filter((x) => x.label.toLowerCase().includes(y) || x.value.toLowerCase().includes(y)), r.value && t("update:modelValue", y);
    }, h = _();
    return H(h, () => {
      v.value = n, c.value !== "" && g.value++, b(!1);
    }), (y, x) => {
      var R;
      return m(), f("div", Pt, [
        u("div", {
          ref_key: "_dropdown_trigger",
          ref: h,
          class: "handler"
        }, [
          u("div", {
            class: "trigger",
            onClick: x[0] || (x[0] = (oe) => b(!i.value))
          }, [
            u("span", Bt, B(((R = r.value) == null ? void 0 : R.value) || "unknown"), 1),
            u("i", {
              class: C(["icon", [i.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          u("div", Et, [
            (m(), T(N, {
              key: g.value,
              "model-value": c.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": p,
              onFocus: x[1] || (x[1] = (oe) => {
                var W;
                return !((W = r.value) != null && W.value) && b(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        P(V(j, {
          class: "items-menu",
          "model-value": r.value,
          items: e.items,
          "onUpdate:modelValue": a
        }, null, 8, ["model-value", "items"]), [
          [U, i.value]
        ])
      ]);
    };
  }
});
const Lt = /* @__PURE__ */ w(Nt, [["__scopeId", "data-v-037ace4c"]]), X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: ee,
  StoreSlugInput: Se,
  Dropdown: Xe,
  PasswordInput: et,
  Note: at,
  Loading: _t,
  Checkbox: gt,
  PrimaryButton: Vt,
  ComboBox: Ot,
  PhoneNumberInput: Lt,
  Input: N
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e) {
  for (const t in X)
    e.component(t, X[t]);
}
const At = { install: Tt };
export {
  gt as Checkbox,
  Ot as ComboBox,
  Xe as Dropdown,
  N as Input,
  _t as Loading,
  at as Note,
  et as PasswordInput,
  Lt as PhoneNumberInput,
  Vt as PrimaryButton,
  Se as StoreSlugInput,
  ee as TextInput,
  At as default
};

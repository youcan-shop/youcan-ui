import { unref as w, ref as _, watch as M, customRef as Ve, getCurrentScope as Ee, onScopeDispose as Fe, computed as C, openBlock as f, createElementBlock as h, defineComponent as x, useSlots as Oe, useAttrs as Le, onBeforeMount as Pe, normalizeClass as B, renderSlot as k, createCommentVNode as P, withDirectives as N, createElementVNode as d, mergeProps as le, isRef as Se, vModelText as Me, createBlock as q, createVNode as V, Transition as Be, withCtx as ae, vShow as K, toDisplayString as W, pushScopeId as X, popScopeId as J, Fragment as Q, renderList as se, watchEffect as G, normalizeStyle as O, vModelCheckbox as Re, onUnmounted as Te, useCssVars as re, onMounted as Y, withModifiers as ue, nextTick as ee } from "vue";
const Z = typeof window < "u", _e = (e) => typeof e < "u", ve = (e) => typeof e == "function", Ae = (e) => typeof e == "string", ze = () => {
};
function Ne(e) {
  return typeof e == "function" ? e() : w(e);
}
function He(e) {
  return e;
}
function Ue(e, t) {
  let o, s, n;
  const l = _(!0), c = () => {
    l.value = !0, n();
  };
  M(e, c, { flush: "sync" });
  const a = ve(t) ? t : t.get, u = ve(t) ? void 0 : t.set, r = Ve((i, m) => (s = i, n = m, {
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
  return Ee() ? (Fe(e), !0) : !1;
}
function T(e) {
  var t;
  const o = Ne(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ce = Z ? window : void 0;
Z && window.document;
Z && window.navigator;
Z && window.location;
function A(...e) {
  let t, o, s, n;
  if (Ae(e[0]) || Array.isArray(e[0]) ? ([o, s, n] = e, t = ce) : [t, o, s, n] = e, !t)
    return ze;
  Array.isArray(o) || (o = [o]), Array.isArray(s) || (s = [s]);
  const l = [], c = () => {
    l.forEach((i) => i()), l.length = 0;
  }, a = (i, m, g) => (i.addEventListener(m, g, n), () => i.removeEventListener(m, g, n)), u = M(() => T(t), (i) => {
    c(), i && l.push(...o.flatMap((m) => s.map((g) => a(i, m, g))));
  }, { immediate: !0, flush: "post" }), r = () => {
    u(), c();
  };
  return De(r), r;
}
function ie(e, t, o = {}) {
  const { window: s = ce, ignore: n = [], capture: l = !0, detectIframe: c = !1 } = o;
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
  }, m = [
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
  return () => m.forEach((p) => p());
}
function je(e = {}) {
  const { window: t = ce } = e, o = Ue(() => null, () => t == null ? void 0 : t.document.activeElement);
  return t && (A(t, "blur", (s) => {
    s.relatedTarget !== null && o.trigger();
  }, !0), A(t, "focus", o.trigger, !0)), o;
}
const fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, me = "__vueuse_ssr_handlers__";
fe[me] = fe[me] || {};
function We(e, t = {}) {
  const { initialValue: o = !1 } = t, s = je(t), n = C(() => T(e)), l = C({
    get() {
      return _e(s.value) && _e(n.value) && s.value === n.value;
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
var he;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(he || (he = {}));
var Ge = Object.defineProperty, ge = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, qe = Object.prototype.propertyIsEnumerable, ye = (e, t, o) => t in e ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Ke = (e, t) => {
  for (var o in t || (t = {}))
    Qe.call(t, o) && ye(e, o, t[o]);
  if (ge)
    for (var o of ge(t))
      qe.call(t, o) && ye(e, o, t[o]);
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
  linear: He
}, Xe);
const S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Je = {}, Ye = { class: "prefix" };
function Ze(e, t) {
  return f(), h("div", Ye, " Prefix ");
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
    const o = e, s = _(), n = Oe(), l = Le(), { focused: c } = We(s), a = C({
      get: () => o.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return Pe(() => {
      if (!n.prefix)
        return;
      const u = n.prefix()[0].type;
      if (!(typeof u != "symbol" && [et].find((r) => r === u)))
        throw new TypeError("Invalid prefix");
    }), (u, r) => (f(), h("div", {
      class: B([{ enabled: !w(l).disabled, focused: w(c), error: e.error }, "wrapper"])
    }, [
      w(n).prefix ? (f(), h("div", tt, [
        k(u.$slots, "prefix", {}, void 0, !0)
      ])) : P("", !0),
      N(d("input", le({
        ref_key: "primitive",
        ref: s,
        "onUpdate:modelValue": r[0] || (r[0] = (i) => Se(a) ? a.value = i : null),
        class: "input",
        type: "text"
      }, u.$attrs), null, 16), [
        [Me, w(a)]
      ]),
      d("div", ot, [
        w(n).icon ? (f(), h("div", st, [
          k(u.$slots, "icon", {}, void 0, !0)
        ])) : P("", !0),
        w(n).suffix ? (f(), h("div", nt, [
          k(u.$slots, "suffix", {}, void 0, !0)
        ])) : P("", !0)
      ])
    ], 2));
  }
});
const H = /* @__PURE__ */ S(lt, [["__scopeId", "data-v-cfaee079"]]), Ie = /* @__PURE__ */ x({
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
    return (l, c) => (f(), q(H, le({
      "model-value": w(s),
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
    return (u, r) => (f(), h("div", at, [
      d("div", rt, [
        V(Be, { name: "fade" }, {
          default: ae(() => [
            N(d("div", ut, [
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
              [K, n.value]
            ])
          ]),
          _: 3
        }),
        V(H, {
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
const $t = /* @__PURE__ */ S(bt, [["__scopeId", "data-v-ad7dc538"]]), wt = (e) => (X("data-v-adc57234"), e = e(), J(), e), xt = { class: "label-item" }, St = /* @__PURE__ */ wt(() => /* @__PURE__ */ d("i", { class: "i-tabler:chevron-down icon" }, null, -1)), It = /* @__PURE__ */ x({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, s = C(() => o.item), n = _();
    return ie(n, () => t("clickOutside")), (l, c) => {
      var a;
      return f(), h("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (u) => t("click"))
      }, [
        d("div", xt, [
          d("i", {
            class: B([(a = w(s)) == null ? void 0 : a.icon])
          }, null, 2),
          d("span", null, W(w(s) ? w(s).label : e.placeholder || "Please select an option"), 1)
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
    return (l, c) => (f(), h("div", kt, [
      e.items.length > 0 ? (f(!0), h(Q, { key: 0 }, se(e.items, (a) => (f(), h("div", {
        key: a.label,
        class: "dropdown-item",
        onClick: (u) => n(a)
      }, [
        a.icon ? (f(), h("i", {
          key: 0,
          class: B(a.icon)
        }, null, 2)) : P("", !0),
        a.image ? (f(), h("img", {
          key: 1,
          src: a.image,
          class: "image"
        }, null, 8, Et)) : P("", !0),
        d("span", null, W(a.label), 1),
        a && s.value && a.value === s.value.value ? (f(), h("i", Ft)) : P("", !0)
      ], 8, Vt))), 128)) : (f(), h("div", Ot, [
        k(l.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const de = /* @__PURE__ */ S(Lt, [["__scopeId", "data-v-2f74106b"]]), Pt = { class: "dropdown" }, Mt = /* @__PURE__ */ x({
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
    return G(() => c.value = s.find((r) => r.value === l.value)), (r, i) => (f(), h("div", Pt, [
      V(Ct, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: i[0] || (i[0] = (m) => a.value = !a.value),
        onClickOutside: i[1] || (i[1] = (m) => a.value = !1)
      }, null, 8, ["item", "placeholder"]),
      N(V(de, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": u
      }, null, 8, ["model-value", "items"]), [
        [K, a.value]
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
    return (u, r) => (f(), h("div", Rt, [
      d("button", {
        class: "password-icon",
        type: "button",
        onClick: r[0] || (r[0] = (i) => l.value = !l.value)
      }, [
        d("i", {
          class: B(l.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      V(H, {
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
const zt = {}, Nt = { class: "note" }, Ht = { class: "icon" }, Ut = { class: "content" };
function Dt(e, t) {
  return f(), h("div", Nt, [
    d("div", Ht, [
      k(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    d("div", Ut, [
      k(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const jt = /* @__PURE__ */ S(zt, [["render", Dt], ["__scopeId", "data-v-5be167d4"]]), Wt = (e) => (X("data-v-dbbecf04"), e = e(), J(), e), Gt = { class: "loading" }, Qt = {
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
    }), G(() => {
      const c = o.duration, a = c / 100, u = 100 / (c / a);
      let r = 0;
      n.value = !0;
      const i = setInterval(() => {
        r += u, s.value = r, r >= 100 && (clearInterval(i), n.value = !1, t("complete"));
      }, a);
      return () => clearInterval(i);
    }), (c, a) => (f(), h("div", Gt, [
      (f(), h("svg", Qt, [
        qt,
        d("circle", {
          class: "loading-circle-progress",
          style: O(w(l)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      d("div", Kt, W(`${s.value}%`), 1)
    ]));
  }
});
const Jt = /* @__PURE__ */ S(Xt, [["__scopeId", "data-v-dbbecf04"]]), Yt = (e) => (X("data-v-539dca17"), e = e(), J(), e), Zt = { class: "checkbox-container" }, eo = ["id"], to = /* @__PURE__ */ Yt(() => /* @__PURE__ */ d("span", { class: "checkmark" }, null, -1)), oo = /* @__PURE__ */ x({
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
    const o = e, s = _(o.id), n = _(o.modelValue);
    return G(() => {
      t("update:modelValue", n.value);
    }), (l, c) => (f(), h("label", Zt, [
      N(d("input", {
        id: s.value,
        "onUpdate:modelValue": c[0] || (c[0] = (a) => n.value = a),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, eo), [
        [Re, n.value]
      ]),
      to
    ]));
  }
});
const so = /* @__PURE__ */ S(oo, [["__scopeId", "data-v-539dca17"]]), no = ["disabled"], lo = { class: "text" }, ao = /* @__PURE__ */ x({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (f(), h("button", {
      ref: "target",
      class: B(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      d("span", lo, [
        k(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, no));
  }
});
const ro = /* @__PURE__ */ S(ao, [["__scopeId", "data-v-193bb3f6"]]), uo = /* @__PURE__ */ x({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (f(), q(ro, le(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: ae(() => [
        k(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const co = /* @__PURE__ */ S(uo, [["__scopeId", "data-v-18934737"]]), io = { class: "dropdown" }, po = { class: "icon-container" }, _o = /* @__PURE__ */ x({
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
    G(() => {
      var p;
      l.value = s.find((v) => v.value === n.value || v.label === n.value), l.value ? n.value = (p = l.value) == null ? void 0 : p.label : n.value = "";
    });
    const m = (p) => {
      p = p.toLowerCase(), a.value = s.filter((v) => v.label.toLowerCase().includes(p) || v.value.toLowerCase().includes(p));
    }, g = _();
    return ie(g, () => {
      u.value++, a.value = s, r(!1);
    }), (p, v) => (f(), h("div", io, [
      d("div", {
        ref_key: "_dropdown_trigger",
        ref: g,
        class: "input-container"
      }, [
        (f(), q(Ie, {
          key: u.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": m,
          onFocus: v[0] || (v[0] = (y) => r(!0))
        }, null, 8, ["model-value", "placeholder"])),
        d("div", po, [
          d("i", {
            class: B(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: v[1] || (v[1] = (y) => r(!c.value))
          }, null, 2)
        ])
      ], 512),
      N(V(de, {
        class: "items-menu",
        "model-value": l.value,
        items: a.value,
        "onUpdate:modelValue": i
      }, {
        no_result: ae(() => [
          k(p.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [K, c.value]
      ])
    ]));
  }
});
const vo = /* @__PURE__ */ S(_o, [["__scopeId", "data-v-0d4f44d8"]]), fo = { class: "dropdown" }, mo = { class: "text" }, ho = { class: "input-container" }, go = /* @__PURE__ */ x({
  __name: "PhoneNumberInput",
  props: {
    items: null,
    dialCode: null,
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue", "update:dialCode"],
  setup(e, { emit: t }) {
    const { modelValue: o, dialCode: s, items: n, placeholder: l } = e, c = _(o), a = C(() => s), u = _(), r = _(!1), i = _(n), m = _(0), g = (b) => r.value = b, p = (b) => {
      b && (u.value = b, c.value = "", t("update:dialCode", b.value), g(!1));
    };
    G(() => u.value = n.find((b) => b.value === a.value));
    const v = (b) => {
      b = b.toLowerCase(), i.value = n.filter(($) => $.label.toLowerCase().includes(b) || $.value.toLowerCase().includes(b)), u.value && t("update:modelValue", b);
    }, y = _();
    return ie(y, () => {
      i.value = n, c.value !== "" && m.value++, g(!1);
    }), (b, $) => {
      var I;
      return f(), h("div", fo, [
        d("div", {
          ref_key: "_dropdown_trigger",
          ref: y,
          class: "handler"
        }, [
          d("div", {
            class: "trigger",
            onClick: $[0] || ($[0] = (L) => g(!r.value))
          }, [
            d("span", mo, W(((I = u.value) == null ? void 0 : I.value) || "unknown"), 1),
            d("i", {
              class: B(["icon", [r.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          d("div", ho, [
            (f(), q(H, {
              key: m.value,
              "model-value": c.value,
              class: "input",
              type: "tel",
              placeholder: e.placeholder || "Search by country or dialing code",
              "onUpdate:modelValue": v,
              onFocus: $[1] || ($[1] = (L) => {
                var F;
                return !((F = u.value) != null && F.value) && g(!0);
              })
            }, null, 8, ["model-value", "placeholder"]))
          ])
        ], 512),
        N(V(de, {
          class: "items-menu",
          "model-value": u.value,
          items: e.items,
          "onUpdate:modelValue": p
        }, null, 8, ["model-value", "items"]), [
          [K, r.value]
        ])
      ]);
    };
  }
});
const yo = /* @__PURE__ */ S(go, [["__scopeId", "data-v-037ace4c"]]);
function R(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function te(e) {
  return function t(o) {
    return arguments.length === 0 || R(o) ? t : e.apply(this, arguments);
  };
}
function bo(e) {
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
var $o = /* @__PURE__ */ bo(function(t, o) {
  return o instanceof t || o != null && (o.constructor === t || t.name === "Object" && typeof o == "object");
});
const be = $o;
const ne = "#000000", pe = "#FFFFFF", wo = "#CCD5DB", Ce = (e) => {
  const t = e * 2, o = document.createElement("canvas"), s = o.getContext("2d", { willReadFrequently: !0 });
  return o.width = t, o.height = t, s.fillStyle = pe, s.fillRect(0, 0, t, t), s.fillStyle = wo, s.fillRect(0, 0, e, e), s.fillRect(e, e, e, e), o;
}, $e = (e, t, o, s, n, l = "left") => {
  const c = l === "left", a = e.createLinearGradient(
    0,
    0,
    c ? t : 0,
    c ? 0 : o
  );
  a.addColorStop(0.01, s), a.addColorStop(0.99, n), e.fillStyle = a, e.fillRect(0, 0, t, o);
}, xo = (e, t, o, s, n) => {
  const l = e.createLinearGradient(
    0,
    0,
    t,
    0
  );
  l.addColorStop(0.01, s), l.addColorStop(0.99, n), e.fillStyle = l, e.fillRect(0, 0, t, o);
}, So = (e, t) => {
  const o = e.createLinearGradient(0, 0, t, 0);
  return o.addColorStop(0, "#FF0000"), o.addColorStop(0.17 * 1, "#FF00FF"), o.addColorStop(0.17 * 2, "#0000FF"), o.addColorStop(0.17 * 3, "#00FFFF"), o.addColorStop(0.17 * 4, "#00FF00"), o.addColorStop(0.17 * 5, "#FFFF00"), o.addColorStop(1, "#FF0000"), o;
}, z = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}, oe = (e) => parseInt(e, 16) || 0, Io = ({ r: e, g: t, b: o }) => `#${z(e)}${z(t)}${z(o)}`.toUpperCase(), Co = ({ r: e, g: t, b: o, a: s }) => {
  const n = (s * 255 | 256).toString(16).slice(1);
  return `#${z(e)}${z(t)}${z(o)}${n}`.toUpperCase();
}, ko = (e) => (e = e.startsWith("#") ? e.slice(1) : e, {
  r: oe(e.slice(0, 2)),
  g: oe(e.slice(2, 4)),
  b: oe(e.slice(4, 6))
}), we = (e) => {
  const t = (/rgba?\((.*?)\)/.exec(e) || ["", "0,0,0,1"])[1].split(",");
  return {
    r: Number(t[0]) || 0,
    g: Number(t[1]) || 0,
    b: Number(t[2]) || 0,
    a: Number(t[3] ?? 1)
  };
}, Vo = (e) => {
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
    t = { ...ko(e), a: 1 };
  else if (/rgb/.test(e))
    t = we(e);
  else if (be(String)(e))
    t = we(`rgba(${e})`);
  else if (be(Object)(e)) {
    const s = "a" in e ? e.a : 1;
    t = { ...e, a: s };
  }
  const o = Vo(t);
  return { ...t, ...o, a: t.a ?? 1 };
}, Eo = { class: "override" }, Fo = /* @__PURE__ */ x({
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
    return (n, l) => (f(), h("div", Eo, [
      V(H, {
        modelValue: w(s),
        "onUpdate:modelValue": l[0] || (l[0] = (c) => Se(s) ? s.value = c : null),
        class: "value/"
      }, null, 8, ["modelValue"])
    ]));
  }
}), Oo = {
  key: 0,
  class: "swatch-wrapper storage"
}, Lo = { class: "swatches storage" }, Po = ["onClick"], Mo = { class: "swatches" }, Bo = ["onClick"], Ro = /* @__PURE__ */ x({
  __name: "Swatches",
  props: {
    color: { default: pe },
    defaultSwatches: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const o = e, s = "youcan-theme-editor-colors", n = _(Ce(4).toDataURL()), l = _([]);
    localStorage && s && (l.value = JSON.parse(localStorage.getItem(s)) || []);
    const c = (u) => {
      if (!u)
        return;
      const r = l.value || [], i = r.indexOf(u);
      i >= 0 && r.splice(i, 1), r.length >= 7 && r.pop(), r.unshift(u), l.value = r || [], localStorage && s && localStorage.setItem(s, JSON.stringify(r));
    }, a = (u) => {
      t("setcolor", u);
    };
    return Te(() => c(o.color)), (u, r) => (f(), h(Q, null, [
      l.value.length ? (f(), h("div", Oo, [
        d("div", Lo, [
          (f(!0), h(Q, null, se(l.value, (i) => (f(), h("div", {
            key: i,
            class: "swatch",
            onClick: (m) => a(i)
          }, [
            d("div", {
              style: O({ background: `url(${n.value})` }),
              class: "alpha"
            }, null, 4),
            d("div", {
              style: O({ background: i }),
              class: "color"
            }, null, 4)
          ], 8, Po))), 128))
        ])
      ])) : P("", !0),
      d("div", Mo, [
        (f(!0), h(Q, null, se(e.defaultSwatches, (i) => (f(), h("div", {
          key: i,
          class: "swatch",
          onClick: (m) => a(i)
        }, [
          d("div", {
            style: O({ background: `url(${n.value})` }),
            class: "alpha"
          }, null, 4),
          d("div", {
            style: O({ background: i }),
            class: "color"
          }, null, 4)
        ], 8, Bo))), 128))
      ])
    ], 64));
  }
});
const To = /* @__PURE__ */ S(Ro, [["__scopeId", "data-v-8846510d"]]), Ao = ["onMousedown"], zo = /* @__PURE__ */ x({
  __name: "Saturation",
  props: {
    color: { default: ne },
    hsv: null,
    size: { default: 152 }
  },
  emits: ["setsaturation"],
  setup(e, { expose: t, emit: o }) {
    const s = e;
    re((i) => ({
      "8f5329ec": `${e.size}px`
    }));
    const n = _(), l = _(), c = _({}), a = () => {
      const i = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = s.size, l.value.height = s.size, i.fillStyle = s.color, i.fillRect(0, 0, s.size, s.size), $e(i, s.size, s.size, pe, "rgba(255, 255, 255, 0)"), $e(i, s.size, s.size, "rgba(0, 0, 0, 0)", ne, "right");
    }, u = () => {
      c.value = {
        left: `${s.hsv.s * s.size - 5}px`,
        top: `${(1 - s.hsv.v) * s.size - 5}px`
      };
    }, r = (i) => {
      const { top: m, left: g } = n.value.getBoundingClientRect(), p = i.target.getContext("2d", { willReadFrequently: !0 });
      function v(b) {
        let $ = b.clientX - g, I = b.clientY - m;
        $ < 0 && ($ = 0), I < 0 && (I = 0), $ > s.size && ($ = s.size), I > s.size && (I = s.size), c.value = {
          left: `${$ - 10}px`,
          top: `${I - 10}px`
        };
        const L = p.getImageData(Math.min($, s.size - 1), Math.min(I, s.size - 1), 1, 1), [F, U, D] = L.data;
        o("setsaturation", { r: F, g: U, b: D });
      }
      v(i);
      const y = () => {
        document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y);
      };
      document.addEventListener("mousemove", v), document.addEventListener("mouseup", y);
    };
    return Y(() => {
      a(), u();
    }), t({ renderColor: a, renderSlider: u }), (i, m) => (f(), h("div", {
      ref_key: "wrapper",
      ref: n,
      class: "saturation-wrapper",
      onMousedown: ue(r, ["prevent", "stop"])
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
    ], 40, Ao));
  }
});
const No = /* @__PURE__ */ S(zo, [["__scopeId", "data-v-9912972f"]]), Ho = ["onMousedown"], Uo = /* @__PURE__ */ x({
  __name: "Hue",
  props: {
    hsv: null,
    width: { default: 15 },
    height: { default: 152 }
  },
  emits: ["sethue"],
  setup(e, { expose: t, emit: o }) {
    const { hsv: s, width: n, height: l } = e;
    re((g) => ({
      da20afe6: `${n}px`,
      fe3c5554: `${l}px`
    }));
    const c = _(), a = _(), u = _({}), r = () => {
      const g = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = n, a.value.height = l;
      const p = So(g, n);
      g.fillStyle = p, g.fillRect(0, 0, n, l);
    }, i = () => {
      u.value = {
        left: `${(1 - s.h / 360) * n - 2}px`
      };
    }, m = (g) => {
      const { left: p } = c.value.getBoundingClientRect(), v = a.value.getContext("2d", { willReadFrequently: !0 });
      function y($) {
        let I = $.clientX - p;
        I < 0 && (I = 0), I > n && (I = n), u.value = {
          left: `${I - 12}px`
        };
        const L = v.getImageData(Math.min(I, n - 1), 1, 1, 1), [F, U, D] = L.data;
        o("sethue", { r: F, g: U, b: D });
      }
      y(g);
      const b = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", b);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", b);
    };
    return Y(() => {
      r(), i();
    }), t({ renderColor: r, renderSlider: i }), (g, p) => (f(), h("div", {
      ref_key: "wrapper",
      ref: c,
      class: "hue-wrapper",
      onMousedown: ue(m, ["prevent", "stop"])
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
    ], 40, Ho));
  }
});
const Do = /* @__PURE__ */ S(Uo, [["__scopeId", "data-v-c1489598"]]), jo = ["onMousedown"], Wo = /* @__PURE__ */ x({
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
    re((i) => ({
      "726d72ca": `${e.width}px`,
      "6f87eef0": `${e.height}px`
    }));
    const s = 5, n = _(), l = _(), c = _({}), a = () => {
      const i = Ce(s), m = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = o.width, l.value.height = o.height, m.fillStyle = m.createPattern(i, "repeat"), m.fillRect(0, 0, o.width, o.height), xo(m, o.width, o.height, "rgba(255, 255, 255, 0)", o.color);
    }, u = () => {
      c.value = {
        left: `${o.rgba.a * o.width - 12}px`
      };
    }, r = (i) => {
      const { left: m } = n.value.getBoundingClientRect();
      function g(v) {
        let y = v.clientX - m;
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
    }), M(() => o.color, () => a()), M(() => o.rgba, () => u()), (i, m) => (f(), h("div", {
      ref_key: "wrapper",
      ref: n,
      class: "alpha-wrapper",
      onMousedown: ue(r, ["prevent", "stop"])
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
    ], 40, jo));
  }
});
const Go = /* @__PURE__ */ S(Wo, [["__scopeId", "data-v-85346e4b"]]), ke = (e) => (X("data-v-c889b5c3"), e = e(), J(), e), Qo = { class: "color-picker" }, qo = { class: "sliders" }, Ko = { class: "color-override" }, Xo = /* @__PURE__ */ ke(() => /* @__PURE__ */ d("label", null, "HEX", -1)), Jo = /* @__PURE__ */ ke(() => /* @__PURE__ */ d("hr", null, null, -1)), Yo = { class: "swatches" }, Zo = /* @__PURE__ */ x({
  __name: "ColorPicker",
  props: {
    color: { default: "#000000" },
    defaults: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const { color: o, defaults: s } = e, n = _(), l = _(), c = _(""), a = _(""), u = _(""), r = _({ r: 0, g: 0, b: 0, a: 1, h: 0, s: 0, v: 0 }), i = C(() => ({ r: r.value.r, g: r.value.g, b: r.value.b, a: r.value.a })), m = C(() => ({ h: r.value.h, s: r.value.s, v: r.value.v })), g = C(() => Io(i.value)), p = C(() => Co(i.value)), v = C(() => `${r.value.r}, ${r.value.g}, ${r.value.b}, ${r.value.a}`), y = C(() => `rgb(${r.value.r}, ${r.value.g}, ${r.value.b})`), b = C(() => `rgba(${v.value})`), $ = () => {
      c.value = g.value, u.value = v.value, a.value = p.value;
    };
    Y(() => {
      r.value = j(o), $();
    });
    const I = (E) => {
      r.value = j(E), $();
    }, L = (E) => {
      r.value = j(E), $(), ee(() => {
        n.value.renderColor(), n.value.renderSlider();
      });
    }, F = (E) => {
      r.value.a = E, $();
    }, U = (E) => {
      r.value = j(E), c.value = E, u.value = v.value, ee(() => {
        l.value.renderSlider(), n.value.renderColor(), n.value.renderSlider();
      });
    }, D = (E) => {
      r.value = j(E), $(), ee(() => {
        l.value.renderSlider(), n.value.renderColor(), n.value.renderSlider();
      });
    };
    return M(
      i,
      () => t("setcolor", { rgba: i.value, hsv: m.value, hex: c.value, hexa: a.value })
    ), (E, os) => (f(), h("div", Qo, [
      V(No, {
        ref_key: "saturationElement",
        ref: n,
        class: "color-saturation",
        color: w(y),
        hsv: w(m),
        size: 224,
        onSetsaturation: I
      }, null, 8, ["color", "hsv"]),
      d("div", qo, [
        V(Do, {
          ref_key: "hueElement",
          ref: l,
          class: "color-hue",
          hsv: w(m),
          width: 224,
          height: 10,
          onSethue: L
        }, null, 8, ["hsv"]),
        V(Go, {
          class: "color-alpha",
          color: w(y),
          rgba: w(i),
          width: 224,
          height: 10,
          onSetalpha: F
        }, null, 8, ["color", "rgba"])
      ]),
      d("div", Ko, [
        Xo,
        V(Fo, {
          class: "hex-input",
          type: "#",
          color: a.value,
          onOverridecolor: U
        }, null, 8, ["color"])
      ]),
      Jo,
      d("div", Yo, [
        V(To, {
          color: w(b),
          "default-swatches": s,
          onSetcolor: D
        }, null, 8, ["color"])
      ])
    ]));
  }
});
const es = /* @__PURE__ */ S(Zo, [["__scopeId", "data-v-c889b5c3"]]), xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: Ie,
  StoreSlugInput: $t,
  Dropdown: Bt,
  PasswordInput: At,
  Note: jt,
  Loading: Jt,
  Checkbox: so,
  PrimaryButton: co,
  ComboBox: vo,
  PhoneNumberInput: yo,
  Input: H,
  ColorPicker: es
}, Symbol.toStringTag, { value: "Module" }));
function ts(e) {
  for (const t in xe)
    e.component(t, xe[t]);
}
const ns = { install: ts };
export {
  so as Checkbox,
  es as ColorPicker,
  vo as ComboBox,
  Bt as Dropdown,
  H as Input,
  Jt as Loading,
  jt as Note,
  At as PasswordInput,
  yo as PhoneNumberInput,
  co as PrimaryButton,
  $t as StoreSlugInput,
  Ie as TextInput,
  ns as default
};

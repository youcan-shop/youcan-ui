import { unref as w, ref as _, watch as P, customRef as ke, getCurrentScope as Ve, onScopeDispose as Ee, computed as C, openBlock as f, createElementBlock as h, defineComponent as x, useSlots as Fe, useAttrs as Oe, onBeforeMount as Pe, normalizeClass as B, renderSlot as k, createCommentVNode as M, withDirectives as N, createElementVNode as d, mergeProps as ce, isRef as Ie, vModelText as Le, createBlock as K, createVNode as V, Transition as Me, withCtx as re, vShow as Y, toDisplayString as q, pushScopeId as J, popScopeId as Z, Fragment as G, renderList as ne, watchEffect as Q, normalizeStyle as O, vModelCheckbox as Be, onUnmounted as Re, useCssVars as ue, onMounted as W, withModifiers as ie, nextTick as te } from "vue";
const X = typeof window < "u", fe = (e) => typeof e < "u", he = (e) => typeof e == "function", Te = (e) => typeof e == "string", Ae = () => {
};
function ze(e) {
  return typeof e == "function" ? e() : w(e);
}
function Ne(e) {
  return e;
}
function He(e, t) {
  let o, s, n;
  const l = _(!0), c = () => {
    l.value = !0, n();
  };
  P(e, c, { flush: "sync" });
  const a = he(t) ? t : t.get, u = he(t) ? void 0 : t.set, r = ke((i, m) => (s = i, n = m, {
    get() {
      return l.value && (o = a(), l.value = !1), s(), o;
    },
    set(g) {
      u == null || u(g);
    }
  }));
  return Object.isExtensible(r) && (r.trigger = c), r;
}
function Ue(e) {
  return Ve() ? (Ee(e), !0) : !1;
}
function T(e) {
  var t;
  const o = ze(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const de = X ? window : void 0;
X && window.document;
X && window.navigator;
X && window.location;
function A(...e) {
  let t, o, s, n;
  if (Te(e[0]) || Array.isArray(e[0]) ? ([o, s, n] = e, t = de) : [t, o, s, n] = e, !t)
    return Ae;
  Array.isArray(o) || (o = [o]), Array.isArray(s) || (s = [s]);
  const l = [], c = () => {
    l.forEach((i) => i()), l.length = 0;
  }, a = (i, m, g) => (i.addEventListener(m, g, n), () => i.removeEventListener(m, g, n)), u = P(() => T(t), (i) => {
    c(), i && l.push(...o.flatMap((m) => s.map((g) => a(i, m, g))));
  }, { immediate: !0, flush: "post" }), r = () => {
    u(), c();
  };
  return Ue(r), r;
}
function pe(e, t, o = {}) {
  const { window: s = de, ignore: n = [], capture: l = !0, detectIframe: c = !1 } = o;
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
function De(e = {}) {
  const { window: t = de } = e, o = He(() => null, () => t == null ? void 0 : t.document.activeElement);
  return t && (A(t, "blur", (s) => {
    s.relatedTarget !== null && o.trigger();
  }, !0), A(t, "focus", o.trigger, !0)), o;
}
const me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__";
me[ge] = me[ge] || {};
function je(e, t = {}) {
  const { initialValue: o = !1 } = t, s = De(t), n = C(() => T(e)), l = C({
    get() {
      return fe(s.value) && fe(n.value) && s.value === n.value;
    },
    set(c) {
      var a, u;
      !c && l.value && ((a = n.value) == null || a.blur()), c && !l.value && ((u = n.value) == null || u.focus());
    }
  });
  return P(n, () => {
    l.value = o;
  }, { immediate: !0, flush: "post" }), { focused: l };
}
var ye;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ye || (ye = {}));
var qe = Object.defineProperty, be = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable, $e = (e, t, o) => t in e ? qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Ge = (e, t) => {
  for (var o in t || (t = {}))
    Qe.call(t, o) && $e(e, o, t[o]);
  if (be)
    for (var o of be(t))
      We.call(t, o) && $e(e, o, t[o]);
  return e;
};
const Ke = {
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
Ge({
  linear: Ne
}, Ke);
const S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Ye = {}, Je = { class: "prefix" };
function Ze(e, t) {
  return f(), h("div", Je, " Prefix ");
}
const Xe = /* @__PURE__ */ S(Ye, [["render", Ze], ["__scopeId", "data-v-9b604abd"]]), et = {
  key: 0,
  class: "prefix"
}, tt = { class: "tail" }, ot = {
  key: 0,
  class: "icon"
}, st = {
  key: 1,
  class: "suffix"
}, nt = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    modelValue: null,
    error: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = _(), n = Fe(), l = Oe(), { focused: c } = je(s), a = C({
      get: () => o.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return Pe(() => {
      if (!n.prefix)
        return;
      const u = n.prefix()[0].type;
      if (!(typeof u != "symbol" && [Xe].find((r) => r === u)))
        throw new TypeError("Invalid prefix");
    }), (u, r) => (f(), h("div", {
      class: B([{ enabled: !w(l).disabled, focused: w(c), error: e.error }, "wrapper"])
    }, [
      w(n).prefix ? (f(), h("div", et, [
        k(u.$slots, "prefix", {}, void 0, !0)
      ])) : M("", !0),
      N(d("input", ce({
        ref_key: "primitive",
        ref: s,
        "onUpdate:modelValue": r[0] || (r[0] = (i) => Ie(a) ? a.value = i : null),
        class: "input",
        type: "text"
      }, u.$attrs), null, 16), [
        [Le, w(a)]
      ]),
      d("div", tt, [
        w(n).icon ? (f(), h("div", ot, [
          k(u.$slots, "icon", {}, void 0, !0)
        ])) : M("", !0),
        w(n).suffix ? (f(), h("div", st, [
          k(u.$slots, "suffix", {}, void 0, !0)
        ])) : M("", !0)
      ])
    ], 2));
  }
});
const H = /* @__PURE__ */ S(nt, [["__scopeId", "data-v-cfaee079"]]), Ce = /* @__PURE__ */ x({
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
    return (l, c) => (f(), K(H, ce({
      "model-value": w(s),
      type: "text",
      class: "input",
      placeholder: e.placeholder
    }, l.$attrs, { "onUpdate:modelValue": n }), null, 16, ["model-value", "placeholder"]));
  }
}), lt = { class: "store-slug-input" }, at = { class: "input-container" }, ct = { class: "popover" }, rt = { class: "store-slug-box-content" }, ut = { class: "box-description" }, it = { class: "store-slug-title" }, dt = { class: "store-slug-description" }, pt = { class: "border-example" }, _t = { class: "border-icon-example" }, vt = { class: "input-border-example" }, ft = { class: "note" }, ht = { class: "icon-note" }, mt = { class: "note-description" }, gt = { class: "slug-suffix" }, yt = /* @__PURE__ */ x({
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
    return (u, r) => (f(), h("div", lt, [
      d("div", at, [
        V(Me, { name: "fade" }, {
          default: re(() => [
            N(d("div", ct, [
              d("div", rt, [
                d("div", ut, [
                  d("div", it, [
                    k(u.$slots, "title", {}, void 0, !0)
                  ]),
                  d("div", dt, [
                    k(u.$slots, "description", {}, void 0, !0)
                  ]),
                  d("div", pt, [
                    d("div", _t, [
                      k(u.$slots, "example", {}, void 0, !0)
                    ]),
                    d("div", vt, [
                      k(u.$slots, "example-text", {}, void 0, !0)
                    ])
                  ])
                ]),
                d("div", ft, [
                  d("div", ht, [
                    k(u.$slots, "icon", {}, void 0, !0)
                  ]),
                  d("span", mt, [
                    k(u.$slots, "note-desc", {}, void 0, !0)
                  ])
                ])
              ])
            ], 512), [
              [Y, n.value]
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
        d("span", gt, q(e.slugSuffix), 1)
      ])
    ]));
  }
});
const bt = /* @__PURE__ */ S(yt, [["__scopeId", "data-v-ad7dc538"]]), $t = (e) => (J("data-v-adc57234"), e = e(), Z(), e), wt = { class: "label-item" }, xt = /* @__PURE__ */ $t(() => /* @__PURE__ */ d("i", { class: "i-tabler:chevron-down icon" }, null, -1)), St = /* @__PURE__ */ x({
  __name: "SelectButton",
  props: {
    item: null,
    placeholder: null
  },
  emits: ["click", "clickOutside"],
  setup(e, { emit: t }) {
    const o = e, s = C(() => o.item), n = _();
    return pe(n, () => t("clickOutside")), (l, c) => {
      var a;
      return f(), h("button", {
        ref_key: "_dropdown_trigger",
        ref: n,
        class: "dropdown-input",
        onClick: c[0] || (c[0] = (u) => t("click"))
      }, [
        d("div", wt, [
          d("i", {
            class: B([(a = w(s)) == null ? void 0 : a.icon])
          }, null, 2),
          d("span", null, q(w(s) ? w(s).label : e.placeholder || "Please select an option"), 1)
        ]),
        xt
      ], 512);
    };
  }
});
const It = /* @__PURE__ */ S(St, [["__scopeId", "data-v-adc57234"]]), Ct = { class: "dropdown-content" }, kt = ["onClick"], Vt = ["src"], Et = {
  key: 2,
  class: "icon i-tabler:check"
}, Ft = {
  key: 1,
  class: "no-results"
}, Ot = /* @__PURE__ */ x({
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
    return (l, c) => (f(), h("div", Ct, [
      e.items.length > 0 ? (f(!0), h(G, { key: 0 }, ne(e.items, (a) => (f(), h("div", {
        key: a.label,
        class: "dropdown-item",
        onClick: (u) => n(a)
      }, [
        a.icon ? (f(), h("i", {
          key: 0,
          class: B(a.icon)
        }, null, 2)) : M("", !0),
        a.image ? (f(), h("img", {
          key: 1,
          src: a.image,
          class: "image"
        }, null, 8, Vt)) : M("", !0),
        d("span", null, q(a.label), 1),
        a && s.value && a.value === s.value.value ? (f(), h("i", Et)) : M("", !0)
      ], 8, kt))), 128)) : (f(), h("div", Ft, [
        k(l.$slots, "no_result", {}, void 0, !0)
      ]))
    ]));
  }
});
const _e = /* @__PURE__ */ S(Ot, [["__scopeId", "data-v-2f74106b"]]), Pt = { class: "dropdown" }, Lt = /* @__PURE__ */ x({
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
    return Q(() => c.value = s.find((r) => r.value === l.value)), (r, i) => (f(), h("div", Pt, [
      V(It, {
        item: c.value,
        placeholder: e.placeholder,
        onClick: i[0] || (i[0] = (m) => a.value = !a.value),
        onClickOutside: i[1] || (i[1] = (m) => a.value = !1)
      }, null, 8, ["item", "placeholder"]),
      N(V(_e, {
        "model-value": c.value,
        items: e.items,
        "onUpdate:modelValue": u
      }, null, 8, ["model-value", "items"]), [
        [Y, a.value]
      ])
    ]));
  }
});
const Mt = /* @__PURE__ */ S(Lt, [["__scopeId", "data-v-a4109ef5"]]), Bt = { class: "password-input" }, Rt = /* @__PURE__ */ x({
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
    return (u, r) => (f(), h("div", Bt, [
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
const Tt = /* @__PURE__ */ S(Rt, [["__scopeId", "data-v-e1b15513"]]);
const At = {}, zt = { class: "note" }, Nt = { class: "icon" }, Ht = { class: "content" };
function Ut(e, t) {
  return f(), h("div", zt, [
    d("div", Nt, [
      k(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    d("div", Ht, [
      k(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const Dt = /* @__PURE__ */ S(At, [["render", Ut], ["__scopeId", "data-v-5be167d4"]]), jt = (e) => (J("data-v-dbbecf04"), e = e(), Z(), e), qt = { class: "loading" }, Qt = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, Wt = /* @__PURE__ */ jt(() => /* @__PURE__ */ d("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), Gt = { class: "loading-value" }, Kt = /* @__PURE__ */ x({
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
    return P(o, () => {
      s.value = 0, n.value = !0;
    }), Q(() => {
      const c = o.duration, a = c / 100, u = 100 / (c / a);
      let r = 0;
      n.value = !0;
      const i = setInterval(() => {
        r += u, s.value = r, r >= 100 && (clearInterval(i), n.value = !1, t("complete"));
      }, a);
      return () => clearInterval(i);
    }), (c, a) => (f(), h("div", qt, [
      (f(), h("svg", Qt, [
        Wt,
        d("circle", {
          class: "loading-circle-progress",
          style: O(w(l)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      d("div", Gt, q(`${s.value}%`), 1)
    ]));
  }
});
const Yt = /* @__PURE__ */ S(Kt, [["__scopeId", "data-v-dbbecf04"]]), Jt = (e) => (J("data-v-539dca17"), e = e(), Z(), e), Zt = { class: "checkbox-container" }, Xt = ["id"], eo = /* @__PURE__ */ Jt(() => /* @__PURE__ */ d("span", { class: "checkmark" }, null, -1)), to = /* @__PURE__ */ x({
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
    return Q(() => {
      t("update:modelValue", n.value);
    }), (l, c) => (f(), h("label", Zt, [
      N(d("input", {
        id: s.value,
        "onUpdate:modelValue": c[0] || (c[0] = (a) => n.value = a),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 8, Xt), [
        [Be, n.value]
      ]),
      eo
    ]));
  }
});
const oo = /* @__PURE__ */ S(to, [["__scopeId", "data-v-539dca17"]]), so = ["disabled"], no = { class: "text" }, lo = /* @__PURE__ */ x({
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
      d("span", no, [
        k(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, so));
  }
});
const ao = /* @__PURE__ */ S(lo, [["__scopeId", "data-v-193bb3f6"]]), co = /* @__PURE__ */ x({
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (f(), K(ao, ce(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: re(() => [
        k(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const ro = /* @__PURE__ */ S(co, [["__scopeId", "data-v-18934737"]]), uo = { class: "dropdown" }, io = { class: "icon-container" }, po = /* @__PURE__ */ x({
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
    Q(() => {
      var p;
      l.value = s.find((v) => v.value === n.value || v.label === n.value), l.value ? n.value = (p = l.value) == null ? void 0 : p.label : n.value = "";
    });
    const m = (p) => {
      p = p.toLowerCase(), a.value = s.filter((v) => v.label.toLowerCase().includes(p) || v.value.toLowerCase().includes(p));
    }, g = _();
    return pe(g, () => {
      u.value++, a.value = s, r(!1);
    }), (p, v) => (f(), h("div", uo, [
      d("div", {
        ref_key: "_dropdown_trigger",
        ref: g,
        class: "input-container"
      }, [
        (f(), K(Ce, {
          key: u.value,
          "model-value": n.value,
          class: "input",
          placeholder: e.placeholder || "Search items",
          "onUpdate:modelValue": m,
          onFocus: v[0] || (v[0] = (y) => r(!0))
        }, null, 8, ["model-value", "placeholder"])),
        d("div", io, [
          d("i", {
            class: B(["icon", [c.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]]),
            onClick: v[1] || (v[1] = (y) => r(!c.value))
          }, null, 2)
        ])
      ], 512),
      N(V(_e, {
        class: "items-menu",
        "model-value": l.value,
        items: a.value,
        "onUpdate:modelValue": i
      }, {
        no_result: re(() => [
          k(p.$slots, "no-result", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["model-value", "items"]), [
        [Y, c.value]
      ])
    ]));
  }
});
const _o = /* @__PURE__ */ S(po, [["__scopeId", "data-v-0d4f44d8"]]), vo = { class: "dropdown" }, fo = { class: "text" }, ho = { class: "input-container" }, mo = /* @__PURE__ */ x({
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
    Q(() => u.value = n.find((b) => b.value === a.value));
    const v = (b) => {
      b = b.toLowerCase(), i.value = n.filter(($) => $.label.toLowerCase().includes(b) || $.value.toLowerCase().includes(b)), u.value && t("update:modelValue", b);
    }, y = _();
    return pe(y, () => {
      i.value = n, c.value !== "" && m.value++, g(!1);
    }), (b, $) => {
      var I;
      return f(), h("div", vo, [
        d("div", {
          ref_key: "_dropdown_trigger",
          ref: y,
          class: "handler"
        }, [
          d("div", {
            class: "trigger",
            onClick: $[0] || ($[0] = (L) => g(!r.value))
          }, [
            d("span", fo, q(((I = u.value) == null ? void 0 : I.value) || "unknown"), 1),
            d("i", {
              class: B(["icon", [r.value ? "i-tabler:chevron-up" : "i-tabler:chevron-down"]])
            }, null, 2)
          ]),
          d("div", ho, [
            (f(), K(H, {
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
        N(V(_e, {
          class: "items-menu",
          "model-value": u.value,
          items: e.items,
          "onUpdate:modelValue": p
        }, null, 8, ["model-value", "items"]), [
          [Y, r.value]
        ])
      ]);
    };
  }
});
const go = /* @__PURE__ */ S(mo, [["__scopeId", "data-v-037ace4c"]]);
function R(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function oe(e) {
  return function t(o) {
    return arguments.length === 0 || R(o) ? t : e.apply(this, arguments);
  };
}
function yo(e) {
  return function t(o, s) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return R(o) ? t : oe(function(n) {
          return e(o, n);
        });
      default:
        return R(o) && R(s) ? t : R(o) ? oe(function(n) {
          return e(n, s);
        }) : R(s) ? oe(function(n) {
          return e(o, n);
        }) : e(o, s);
    }
  };
}
var bo = /* @__PURE__ */ yo(function(t, o) {
  return o instanceof t || o != null && (o.constructor === t || t.name === "Object" && typeof o == "object");
});
const we = bo;
const le = "#000000", ee = "#FFFFFF", $o = "#CCD5DB", ve = (e) => {
  const t = e * 2, o = document.createElement("canvas"), s = o.getContext("2d", { willReadFrequently: !0 });
  return o.width = t, o.height = t, s.fillStyle = ee, s.fillRect(0, 0, t, t), s.fillStyle = $o, s.fillRect(0, 0, e, e), s.fillRect(e, e, e, e), o;
}, ae = (e, t, o, s, n, l = "left") => {
  const c = l === "left", a = e.createLinearGradient(
    0,
    0,
    c ? t : 0,
    c ? 0 : o
  );
  a.addColorStop(0.01, s), a.addColorStop(0.99, n), e.fillStyle = a, e.fillRect(0, 0, t, o);
}, wo = (e, t) => {
  const o = e.createLinearGradient(0, 0, 0, t);
  return o.addColorStop(0, "#FF0000"), o.addColorStop(0.17 * 1, "#FF00FF"), o.addColorStop(0.17 * 2, "#0000FF"), o.addColorStop(0.17 * 3, "#00FFFF"), o.addColorStop(0.17 * 4, "#00FF00"), o.addColorStop(0.17 * 5, "#FFFF00"), o.addColorStop(1, "#FF0000"), o;
}, z = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}, se = (e) => parseInt(e, 16) || 0, xo = ({ r: e, g: t, b: o }) => `#${z(e)}${z(t)}${z(o)}`.toUpperCase(), So = ({ r: e, g: t, b: o, a: s }) => {
  const n = (s * 255 | 256).toString(16).slice(1);
  return `#${z(e)}${z(t)}${z(o)}${n}`.toUpperCase();
}, Io = (e) => (e = e.startsWith("#") ? e.slice(1) : e, {
  r: se(e.slice(0, 2)),
  g: se(e.slice(2, 4)),
  b: se(e.slice(4, 6))
}), xe = (e) => {
  const t = (/rgba?\((.*?)\)/.exec(e) || ["", "0,0,0,1"])[1].split(",");
  return {
    r: Number(t[0]) || 0,
    g: Number(t[1]) || 0,
    b: Number(t[2]) || 0,
    a: Number(t[3] ?? 1)
  };
}, Co = (e) => {
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
    t = { ...Io(e), a: 1 };
  else if (/rgb/.test(e))
    t = xe(e);
  else if (we(String)(e))
    t = xe(`rgba(${e})`);
  else if (we(Object)(e)) {
    const s = "a" in e ? e.a : 1;
    t = { ...e, a: s };
  }
  const o = Co(t);
  return { ...t, ...o, a: t.a ?? 1 };
}, ko = { class: "color-override" }, Vo = /* @__PURE__ */ x({
  __name: "Override",
  props: {
    color: { default: "" }
  },
  emits: ["overridecolor"],
  setup(e, { emit: t }) {
    const o = e, s = C({
      get: () => o.color.substring(1),
      set: (n) => t("overridecolor", `#${n}`)
    });
    return (n, l) => (f(), h("div", ko, [
      V(H, {
        modelValue: w(s),
        "onUpdate:modelValue": l[0] || (l[0] = (c) => Ie(s) ? s.value = c : null),
        class: "value/"
      }, null, 8, ["modelValue"])
    ]));
  }
}), Eo = (e) => (J("data-v-e5f1acbf"), e = e(), Z(), e), Fo = {
  key: 0,
  class: "swatch-wrapper storage"
}, Oo = /* @__PURE__ */ Eo(() => /* @__PURE__ */ d("div", { class: "label" }, " Recently used ", -1)), Po = { class: "swatches storage" }, Lo = ["onClick"], Mo = { class: "swatches" }, Bo = ["onClick"], Ro = /* @__PURE__ */ x({
  __name: "Swatches",
  props: {
    color: { default: ee },
    defaultSwatches: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const o = e, s = "youcan-theme-editor-colors", n = _(ve(4).toDataURL()), l = _([]);
    localStorage && s && (l.value = JSON.parse(localStorage.getItem(s)) || []);
    const c = (u) => {
      if (!u)
        return;
      const r = l.value || [], i = r.indexOf(u);
      i >= 0 && r.splice(i, 1), r.length >= 7 && r.pop(), r.unshift(u), l.value = r || [], localStorage && s && localStorage.setItem(s, JSON.stringify(r));
    }, a = (u) => {
      t("setcolor", u);
    };
    return Re(() => c(o.color)), (u, r) => (f(), h(G, null, [
      l.value.length ? (f(), h("div", Fo, [
        Oo,
        d("div", Po, [
          (f(!0), h(G, null, ne(l.value, (i) => (f(), h("div", {
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
          ], 8, Lo))), 128))
        ])
      ])) : M("", !0),
      d("div", Mo, [
        (f(!0), h(G, null, ne(e.defaultSwatches, (i) => (f(), h("div", {
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
const To = /* @__PURE__ */ S(Ro, [["__scopeId", "data-v-e5f1acbf"]]), Ao = ["onMousedown"], zo = /* @__PURE__ */ x({
  __name: "Saturation",
  props: {
    color: { default: le },
    hsv: null,
    size: { default: 152 }
  },
  emits: ["setsaturation"],
  setup(e, { expose: t, emit: o }) {
    const s = e;
    ue((i) => ({
      "3b247f1a": `${e.size}px`
    }));
    const n = _(), l = _(), c = _({}), a = () => {
      const i = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = s.size, l.value.height = s.size, i.fillStyle = s.color, i.fillRect(0, 0, s.size, s.size), ae(i, s.size, s.size, ee, "rgba(255, 255, 255, 0)"), ae(i, s.size, s.size, "rgba(0, 0, 0, 0)", le, "right");
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
    return W(() => {
      a(), u();
    }), t({ renderColor: a, renderSlider: u }), (i, m) => (f(), h("div", {
      ref_key: "wrapper",
      ref: n,
      class: "saturation-wrapper",
      onMousedown: ie(r, ["prevent", "stop"])
    }, [
      d("canvas", {
        ref_key: "canvas",
        ref: l,
        class: "canvas"
      }, null, 512),
      d("i", {
        "i-ph-circle-bold": "",
        style: O(c.value),
        class: "slider"
      }, null, 4)
    ], 40, Ao));
  }
});
const No = /* @__PURE__ */ S(zo, [["__scopeId", "data-v-2db2ec58"]]), Ho = ["onMousedown"], Uo = /* @__PURE__ */ x({
  __name: "Hue",
  props: {
    hsv: null,
    width: { default: 15 },
    height: { default: 152 }
  },
  emits: ["sethue"],
  setup(e, { expose: t, emit: o }) {
    const { hsv: s, width: n, height: l } = e;
    ue((g) => ({
      "4f0ee4bc": `${n}px`,
      "2714bb3e": `${l}px`
    }));
    const c = _(), a = _(), u = _({}), r = () => {
      const g = a.value.getContext("2d", { willReadFrequently: !0 });
      a.value.width = n, a.value.height = l;
      const p = wo(g, l);
      g.fillStyle = p, g.fillRect(0, 0, n, l);
    }, i = () => {
      u.value = {
        top: `${(1 - s.h / 360) * l - 2}px`
      };
    }, m = (g) => {
      const { top: p } = c.value.getBoundingClientRect(), v = a.value.getContext("2d", { willReadFrequently: !0 });
      function y($) {
        let I = $.clientY - p;
        I < 0 && (I = 0), I > l && (I = l), u.value = {
          top: `${I - 2}px`
        };
        const L = v.getImageData(0, Math.min(I, l - 1), 1, 1), [F, U, D] = L.data;
        o("sethue", { r: F, g: U, b: D });
      }
      y(g);
      const b = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", b);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", b);
    };
    return W(() => {
      r(), i();
    }), t({ renderColor: r, renderSlider: i }), (g, p) => (f(), h("div", {
      ref_key: "wrapper",
      ref: c,
      class: "hue-wrapper",
      onMousedown: ie(m, ["prevent", "stop"])
    }, [
      d("canvas", {
        ref_key: "canvas",
        ref: a,
        class: "canvas"
      }, null, 512),
      d("i", {
        "i-ph-circle-bold": "",
        style: O(u.value),
        class: "slider"
      }, null, 4)
    ], 40, Ho));
  }
});
const Do = /* @__PURE__ */ S(Uo, [["__scopeId", "data-v-47aaad62"]]), jo = ["onMousedown"], qo = /* @__PURE__ */ x({
  __name: "Alpha",
  props: {
    color: { default: le },
    rgba: null,
    height: { default: 152 },
    width: { default: 15 }
  },
  emits: ["setalpha"],
  setup(e, { emit: t }) {
    const o = e;
    ue((i) => ({
      "22fef010": `${e.width}px`,
      "1a88e49a": `${e.height}px`
    }));
    const s = 5, n = _(), l = _(), c = _({}), a = () => {
      const i = ve(s), m = l.value.getContext("2d", { willReadFrequently: !0 });
      l.value.width = o.width, l.value.height = o.height, m.fillStyle = m.createPattern(i, "repeat"), m.fillRect(0, 0, o.width, o.height), ae(m, o.width, o.height, "rgba(255, 255, 255, 0)", o.color, "right");
    }, u = () => {
      c.value = {
        top: `${o.rgba.a * o.height - 2}px`
      };
    }, r = (i) => {
      const { top: m } = n.value.getBoundingClientRect();
      function g(v) {
        let y = v.clientY - m;
        y < 0 && (y = 0), y > o.height && (y = o.height), t("setalpha", parseFloat((y / o.height).toFixed(2)));
      }
      g(i);
      const p = () => {
        document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", p);
      };
      document.addEventListener("mousemove", g), document.addEventListener("mouseup", p);
    };
    return W(() => {
      a(), u();
    }), P(() => o.color, () => a()), P(() => o.rgba, () => u()), (i, m) => (f(), h("div", {
      ref_key: "wrapper",
      ref: n,
      class: "alpha-wrapper",
      onMousedown: ie(r, ["prevent", "stop"])
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
const Qo = /* @__PURE__ */ S(qo, [["__scopeId", "data-v-4801b1ea"]]), Wo = /* @__PURE__ */ x({
  __name: "Backdrop",
  props: {
    color: { default: ee },
    width: { default: 100 },
    height: { default: 30 }
  },
  setup(e) {
    const t = e, o = 5, s = _(), n = () => {
      const l = ve(o), c = s.value.getContext("2d", { willReadFrequently: !0 });
      s.value.width = t.width, s.value.height = t.height, c.fillStyle = c.createPattern(l, "repeat"), c.fillRect(0, 0, t.width, t.height), c.fillStyle = t.color, c.fillRect(0, 0, t.width, t.height);
    };
    return W(() => n()), P(() => t.color, () => n()), (l, c) => (f(), h("canvas", {
      ref_key: "canvas",
      ref: s,
      class: "canvas"
    }, null, 512));
  }
}), Go = { class: "color-picker" }, Ko = { class: "color-settings" }, Yo = { class: "input-group" }, Jo = { class: "swatches" }, Zo = /* @__PURE__ */ x({
  __name: "ColorPicker",
  props: {
    color: { default: "#000000" },
    defaults: { default: () => [] }
  },
  emits: ["setcolor"],
  setup(e, { emit: t }) {
    const { color: o, defaults: s } = e, n = _(), l = _(), c = _(""), a = _(""), u = _(""), r = _({ r: 0, g: 0, b: 0, a: 1, h: 0, s: 0, v: 0 }), i = C(() => ({ r: r.value.r, g: r.value.g, b: r.value.b, a: r.value.a })), m = C(() => ({ h: r.value.h, s: r.value.s, v: r.value.v })), g = C(() => xo(i.value)), p = C(() => So(i.value)), v = C(() => `${r.value.r}, ${r.value.g}, ${r.value.b}, ${r.value.a}`), y = C(() => `rgb(${r.value.r}, ${r.value.g}, ${r.value.b})`), b = C(() => `rgba(${v.value})`), $ = () => {
      c.value = g.value, u.value = v.value, a.value = p.value;
    };
    W(() => {
      r.value = j(o), $();
    });
    const I = (E) => {
      r.value = j(E), $();
    }, L = (E) => {
      r.value = j(E), $(), te(() => {
        n.value.renderColor(), n.value.renderSlider();
      });
    }, F = (E) => {
      r.value.a = E, $();
    }, U = (E) => {
      r.value = j(E), c.value = E, u.value = v.value, te(() => {
        l.value.renderSlider(), n.value.renderColor(), n.value.renderSlider();
      });
    }, D = (E) => {
      r.value = j(E), $(), te(() => {
        l.value.renderSlider(), n.value.renderColor(), n.value.renderSlider();
      });
    };
    return P(
      i,
      () => t("setcolor", { rgba: i.value, hsv: m.value, hex: c.value, hexa: a.value })
    ), (E, ts) => (f(), h("div", Go, [
      d("div", Ko, [
        V(No, {
          ref_key: "saturationElement",
          ref: n,
          class: "color-saturation",
          color: w(y),
          hsv: w(m),
          size: 160,
          onSetsaturation: I
        }, null, 8, ["color", "hsv"]),
        V(Do, {
          ref_key: "hueElement",
          ref: l,
          class: "color-hue",
          hsv: w(m),
          width: 24,
          height: 160,
          onSethue: L
        }, null, 8, ["hsv"]),
        V(Qo, {
          class: "color-alpha",
          color: w(y),
          rgba: w(i),
          width: 24,
          height: 160,
          onSetalpha: F
        }, null, 8, ["color", "rgba"])
      ]),
      d("div", Yo, [
        V(Wo, {
          class: "color-preview",
          color: w(b),
          width: 38,
          height: 38
        }, null, 8, ["color"]),
        V(Vo, {
          class: "hex-input",
          type: "#",
          color: a.value,
          onOverridecolor: U
        }, null, 8, ["color"])
      ]),
      d("div", Jo, [
        V(To, {
          color: w(b),
          "default-swatches": s,
          onSetcolor: D
        }, null, 8, ["color"])
      ])
    ]));
  }
});
const Xo = /* @__PURE__ */ S(Zo, [["__scopeId", "data-v-ca12ecfc"]]), Se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: Ce,
  StoreSlugInput: bt,
  Dropdown: Mt,
  PasswordInput: Tt,
  Note: Dt,
  Loading: Yt,
  Checkbox: oo,
  PrimaryButton: ro,
  ComboBox: _o,
  PhoneNumberInput: go,
  Input: H,
  ColorPicker: Xo
}, Symbol.toStringTag, { value: "Module" }));
function es(e) {
  for (const t in Se)
    e.component(t, Se[t]);
}
const ss = { install: es };
export {
  oo as Checkbox,
  Xo as ColorPicker,
  _o as ComboBox,
  Mt as Dropdown,
  H as Input,
  Yt as Loading,
  Dt as Note,
  Tt as PasswordInput,
  go as PhoneNumberInput,
  ro as PrimaryButton,
  bt as StoreSlugInput,
  Ce as TextInput,
  ss as default
};

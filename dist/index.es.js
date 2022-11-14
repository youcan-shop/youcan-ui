import { defineComponent as i, ref as r, computed as I, openBlock as u, createElementBlock as d, mergeProps as P, unref as f, createBlock as D, createElementVNode as l, createVNode as h, Transition as U, withCtx as T, withDirectives as S, vShow as N, toDisplayString as b, pushScopeId as g, popScopeId as x, normalizeClass as $, watchEffect as w, Fragment as M, renderList as L, createCommentVNode as B, renderSlot as y, watch as z, normalizeStyle as E, vModelCheckbox as F } from "vue";
const H = ["value", "type", "placeholder"], O = /* @__PURE__ */ i({
  __name: "Input",
  props: {
    modelValue: null,
    type: null,
    placeholder: null
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const a = e, o = r(a.modelValue), s = I(() => a.type), n = ({ target: p }) => {
      o.value = p.value, t("update:modelValue", o.value);
    }, c = () => t("focus"), _ = () => t("blur");
    return (p, m) => (u(), d("input", P({
      value: o.value,
      type: f(s),
      placeholder: e.placeholder,
      class: "input"
    }, p.$attrs, {
      onInput: n,
      onFocus: c,
      onBlur: _
    }), null, 16, H));
  }
});
const v = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, s] of t)
    a[o] = s;
  return a;
}, k = /* @__PURE__ */ v(O, [["__scopeId", "data-v-76e6a459"]]), j = /* @__PURE__ */ i({
  __name: "TextInput",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = r(e.modelValue), s = (n) => {
      o.value = n, t("update:modelValue", o.value);
    };
    return (n, c) => (u(), D(k, {
      "model-value": o.value,
      type: "text",
      class: "input",
      placeholder: e.placeholder,
      "onUpdate:modelValue": s
    }, null, 8, ["model-value", "placeholder"]));
  }
}), q = (e) => (g("data-v-7f51ea46"), e = e(), x(), e), A = { class: "store-slug-input" }, R = { class: "input-container" }, Y = { class: "popover" }, G = /* @__PURE__ */ q(() => /* @__PURE__ */ l("div", { class: "store-slug-box-content" }, [
  /* @__PURE__ */ l("div", { class: "box-description" }, [
    /* @__PURE__ */ l("p", { class: "store-slug-title" }, " Store slug "),
    /* @__PURE__ */ l("p", { class: "store-slug-description" }, " The slug you choose will be your store's domain name that your customers will see. "),
    /* @__PURE__ */ l("div", { class: "border-example" }, [
      /* @__PURE__ */ l("i", { class: "border-icon-example i-tabler-search" }),
      /* @__PURE__ */ l("span", { class: "input-border-example" }, "example.youcan.shop")
    ])
  ]),
  /* @__PURE__ */ l("div", { class: "note" }, [
    /* @__PURE__ */ l("div", null, [
      /* @__PURE__ */ l("i", { class: "icon-note i-tabler-alert-circle" })
    ]),
    /* @__PURE__ */ l("span", { class: "note-description" }, " You can always replace it with a custom domain name you purchased. ")
  ])
], -1)), J = [
  G
], K = { class: "slug-suffix" }, Q = /* @__PURE__ */ i({
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
    const o = r(e.modelValue), s = r(!1), n = (p) => t("update:modelValue", p), c = () => s.value = !0, _ = () => s.value = !1;
    return (p, m) => (u(), d("div", A, [
      l("div", R, [
        h(U, { name: "fade" }, {
          default: T(() => [
            S(l("div", Y, J, 512), [
              [N, s.value]
            ])
          ]),
          _: 1
        }),
        h(k, {
          "model-value": o.value,
          type: "text",
          class: "input",
          placeholder: e.placeholder,
          "onUpdate:modelValue": n,
          onFocus: c,
          onBlur: _
        }, null, 8, ["model-value", "placeholder"]),
        l("span", K, b(e.slugSuffix), 1)
      ])
    ]));
  }
});
const W = /* @__PURE__ */ v(Q, [["__scopeId", "data-v-7f51ea46"]]), X = (e) => (g("data-v-80e63c12"), e = e(), x(), e), Z = { class: "label-item" }, ee = /* @__PURE__ */ X(() => /* @__PURE__ */ l("i", { class: "i-tabler:chevron-down icon" }, null, -1)), te = /* @__PURE__ */ i({
  __name: "SelectButton",
  props: {
    modelValue: null,
    placeholder: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = e, o = I(() => a.modelValue);
    return (s, n) => {
      var c;
      return u(), d("button", {
        class: "dropdown-input",
        onClick: n[0] || (n[0] = (_) => t("click"))
      }, [
        l("div", Z, [
          l("i", {
            class: $([(c = f(o)) == null ? void 0 : c.icon])
          }, null, 2),
          l("span", null, b(f(o) ? f(o).label : e.placeholder), 1)
        ]),
        ee
      ]);
    };
  }
});
const oe = /* @__PURE__ */ v(te, [["__scopeId", "data-v-80e63c12"]]), le = { class: "dropdown-content" }, se = ["onClick"], ne = ["src"], ae = /* @__PURE__ */ i({
  __name: "SelectMenu",
  props: {
    items: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = r(e.modelValue);
    return w(() => {
      t("update:modelValue", o.value);
    }), (s, n) => (u(), d("div", le, [
      (u(!0), d(M, null, L(e.items, (c, _) => (u(), d("div", {
        key: _,
        class: "dropdown-item",
        onClick: (p) => o.value = c
      }, [
        c.icon ? (u(), d("i", {
          key: 0,
          class: $(c.icon)
        }, null, 2)) : B("", !0),
        c.image ? (u(), d("img", {
          key: 1,
          src: c.image
        }, null, 8, ne)) : B("", !0),
        l("span", null, b(c.label), 1)
      ], 8, se))), 128))
    ]));
  }
});
const ce = /* @__PURE__ */ v(ae, [["__scopeId", "data-v-3746b3dd"]]), ue = { class: "dropdown" }, de = /* @__PURE__ */ i({
  __name: "Select",
  props: {
    items: null
  },
  setup(e) {
    const t = r(), a = r(!1);
    return (o, s) => (u(), d("div", ue, [
      h(oe, {
        modelValue: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (n) => t.value = n),
        placeholder: "Please select an option",
        onClick: s[1] || (s[1] = (n) => a.value = !a.value)
      }, null, 8, ["modelValue"]),
      S(h(ce, {
        modelValue: t.value,
        "onUpdate:modelValue": s[2] || (s[2] = (n) => t.value = n),
        items: e.items
      }, null, 8, ["modelValue", "items"]), [
        [N, a.value]
      ])
    ]));
  }
});
const re = /* @__PURE__ */ v(de, [["__scopeId", "data-v-40830d85"]]), _e = { class: "password-input" }, pe = /* @__PURE__ */ i({
  __name: "PasswordInput",
  props: {
    modelValue: null,
    placeholder: null,
    passwordHidden: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: a, passwordHidden: o = !0 } = e, s = r(), n = r(o), c = r(a), _ = (p) => {
      t("update:modelValue", p);
    };
    return (p, m) => (u(), d("div", _e, [
      l("button", {
        onClick: m[0] || (m[0] = (V) => n.value = !n.value)
      }, [
        l("i", {
          class: $(n.value ? "i-tabler-eye" : "i-tabler-eye-off")
        }, null, 2)
      ]),
      h(k, {
        ref_key: "baseInput",
        ref: s,
        type: n.value ? "password" : "text",
        placeholder: e.placeholder,
        "model-value": c.value,
        class: "input",
        "onUpdate:modelValue": _
      }, null, 8, ["type", "placeholder", "model-value"])
    ]));
  }
});
const ie = /* @__PURE__ */ v(pe, [["__scopeId", "data-v-526cc1b1"]]);
const ve = {}, me = { class: "note" }, fe = { class: "icon" }, he = { class: "content" };
function ye(e, t) {
  return u(), d("div", me, [
    l("div", fe, [
      y(e.$slots, "icon", { class: "icon" }, void 0, !0)
    ]),
    l("div", he, [
      y(e.$slots, "content", {}, void 0, !0)
    ])
  ]);
}
const be = /* @__PURE__ */ v(ve, [["render", ye], ["__scopeId", "data-v-cb9f4361"]]), ge = (e) => (g("data-v-dbbecf04"), e = e(), x(), e), xe = { class: "loading" }, $e = {
  class: "loading-svg",
  viewBox: "0 0 100 100"
}, Ve = /* @__PURE__ */ ge(() => /* @__PURE__ */ l("circle", {
  class: "loading-circle",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1)), Ie = { class: "loading-value" }, Se = /* @__PURE__ */ i({
  __name: "Loading",
  props: {
    duration: {
      type: Number,
      default: 12e3
    }
  },
  emits: ["complete"],
  setup(e, { emit: t }) {
    const a = e, o = r(0), s = r(!1), n = I(() => ({
      strokeDashoffset: `${(100 - o.value) * 2.64}px`,
      transition: s.value ? "all 0.1s ease" : "none"
    }));
    return z(a, () => {
      o.value = 0, s.value = !0;
    }), w(() => {
      const c = a.duration, _ = c / 100, p = 100 / (c / _);
      let m = 0;
      s.value = !0;
      const V = setInterval(() => {
        m += p, o.value = m, m >= 100 && (clearInterval(V), s.value = !1, t("complete"));
      }, _);
      return () => clearInterval(V);
    }), (c, _) => (u(), d("div", xe, [
      (u(), d("svg", $e, [
        Ve,
        l("circle", {
          class: "loading-circle-progress",
          style: E(f(n)),
          cx: "50",
          cy: "50",
          r: "45"
        }, null, 4)
      ])),
      l("div", Ie, b(`${o.value}%`), 1)
    ]));
  }
});
const we = /* @__PURE__ */ v(Se, [["__scopeId", "data-v-dbbecf04"]]), ke = (e) => (g("data-v-fabf80c5"), e = e(), x(), e), Be = { class: "checkbox-container" }, Ce = /* @__PURE__ */ ke(() => /* @__PURE__ */ l("span", { class: "checkmark" }, null, -1)), Pe = /* @__PURE__ */ i({
  __name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = r(e.modelValue);
    return w(() => {
      t("update:modelValue", o.value);
    }), (s, n) => (u(), d("label", Be, [
      S(l("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (c) => o.value = c),
        class: "checkbox-input",
        type: "checkbox"
      }, null, 512), [
        [F, o.value]
      ]),
      Ce
    ]));
  }
});
const De = /* @__PURE__ */ v(Pe, [["__scopeId", "data-v-fabf80c5"]]), Te = ["disabled"], Ne = { class: "text" }, Ue = /* @__PURE__ */ i({
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, a) => (u(), d("button", {
      ref: "target",
      class: $(["button", { disabled: e.disabled }]),
      disabled: e.disabled
    }, [
      l("span", Ne, [
        y(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, Te));
  }
});
const Me = /* @__PURE__ */ v(Ue, [["__scopeId", "data-v-4695437a"]]), Le = /* @__PURE__ */ i({
  __name: "PrimaryButton",
  setup(e) {
    return (t, a) => (u(), D(Me, P(t.$attrs, {
      ref: "target",
      class: "primary"
    }), {
      default: T(() => [
        y(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
});
const ze = /* @__PURE__ */ v(Le, [["__scopeId", "data-v-99aecff6"]]), C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextInput: j,
  StoreSlugInput: W,
  DropDown: re,
  PasswordInput: ie,
  Note: be,
  Loading: we,
  Checkbox: De,
  PrimaryButton: ze
}, Symbol.toStringTag, { value: "Module" }));
function Ee(e) {
  for (const t in C)
    e.component(t, C[t]);
}
const He = { install: Ee };
export {
  De as Checkbox,
  re as DropDown,
  we as Loading,
  be as Note,
  ie as PasswordInput,
  ze as PrimaryButton,
  W as StoreSlugInput,
  j as TextInput,
  He as default
};

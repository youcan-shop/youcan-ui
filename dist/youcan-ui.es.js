import { defineComponent as x, openBlock as u, createElementBlock as h, createTextVNode as W, toDisplayString as b, createElementVNode as y, resolveDirective as H, withDirectives as k, normalizeClass as g, renderSlot as P, createCommentVNode as w, ref as L, createVNode as C, unref as S, pushScopeId as F, popScopeId as A } from "vue";
const R = /* @__PURE__ */ y("span", {
  class: "icon-heart",
  style: { color: "tomato" }
}, null, -1), B = /* @__PURE__ */ x({
  __name: "ComponentA",
  props: {
    msg: null
  },
  setup(t) {
    return (e, i) => (u(), h("div", null, [
      W(" Hello " + b(t.msg) + "! ", 1),
      R
    ]));
  }
});
var d = {
  innerWidth(t) {
    if (t) {
      let e = t.offsetWidth, i = getComputedStyle(t);
      return e += parseFloat(i.paddingLeft) + parseFloat(i.paddingRight), e;
    }
    return 0;
  },
  width(t) {
    if (t) {
      let e = t.offsetWidth, i = getComputedStyle(t);
      return e -= parseFloat(i.paddingLeft) + parseFloat(i.paddingRight), e;
    }
    return 0;
  },
  getWindowScrollTop() {
    let t = document.documentElement;
    return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
  },
  getWindowScrollLeft() {
    let t = document.documentElement;
    return (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
  },
  getOuterWidth(t, e) {
    if (t) {
      let i = t.offsetWidth;
      if (e) {
        let o = getComputedStyle(t);
        i += parseFloat(o.marginLeft) + parseFloat(o.marginRight);
      }
      return i;
    }
    return 0;
  },
  getOuterHeight(t, e) {
    if (t) {
      let i = t.offsetHeight;
      if (e) {
        let o = getComputedStyle(t);
        i += parseFloat(o.marginTop) + parseFloat(o.marginBottom);
      }
      return i;
    }
    return 0;
  },
  getClientHeight(t, e) {
    if (t) {
      let i = t.clientHeight;
      if (e) {
        let o = getComputedStyle(t);
        i += parseFloat(o.marginTop) + parseFloat(o.marginBottom);
      }
      return i;
    }
    return 0;
  },
  getViewport() {
    let t = window, e = document, i = e.documentElement, o = e.getElementsByTagName("body")[0], n = t.innerWidth || i.clientWidth || o.clientWidth, l = t.innerHeight || i.clientHeight || o.clientHeight;
    return { width: n, height: l };
  },
  getOffset(t) {
    if (t) {
      let e = t.getBoundingClientRect();
      return {
        top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: e.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index(t) {
    if (t) {
      let e = t.parentNode.childNodes, i = 0;
      for (let o = 0; o < e.length; o++) {
        if (e[o] === t)
          return i;
        e[o].nodeType === 1 && i++;
      }
    }
    return -1;
  },
  addMultipleClasses(t, e) {
    if (t && e)
      if (t.classList) {
        let i = e.split(" ");
        for (let o = 0; o < i.length; o++)
          t.classList.add(i[o]);
      } else {
        let i = e.split(" ");
        for (let o = 0; o < i.length; o++)
          t.className += " " + i[o];
      }
  },
  addClass(t, e) {
    t && e && (t.classList ? t.classList.add(e) : t.className += " " + e);
  },
  removeClass(t, e) {
    t && e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
  },
  hasClass(t, e) {
    return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
  },
  find(t, e) {
    return t ? t.querySelectorAll(e) : [];
  },
  findSingle(t, e) {
    return t ? t.querySelector(e) : null;
  },
  getHeight(t) {
    if (t) {
      let e = t.offsetHeight, i = getComputedStyle(t);
      return e -= parseFloat(i.paddingTop) + parseFloat(i.paddingBottom) + parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth), e;
    }
    return 0;
  },
  getWidth(t) {
    if (t) {
      let e = t.offsetWidth, i = getComputedStyle(t);
      return e -= parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth), e;
    }
    return 0;
  },
  absolutePosition(t, e) {
    if (t) {
      let i = t.offsetParent ? { width: t.offsetWidth, height: t.offsetHeight } : this.getHiddenElementDimensions(t), o = i.height, n = i.width, l = e.offsetHeight, s = e.offsetWidth, r = e.getBoundingClientRect(), a = this.getWindowScrollTop(), c = this.getWindowScrollLeft(), f = this.getViewport(), p, m;
      r.top + l + o > f.height ? (p = r.top + a - o, t.style.transformOrigin = "bottom", p < 0 && (p = a)) : (p = l + r.top + a, t.style.transformOrigin = "top"), r.left + n > f.width ? m = Math.max(0, r.left + c + s - n) : m = r.left + c, t.style.top = p + "px", t.style.left = m + "px";
    }
  },
  relativePosition(t, e) {
    if (t) {
      let i = t.offsetParent ? { width: t.offsetWidth, height: t.offsetHeight } : this.getHiddenElementDimensions(t);
      const o = e.offsetHeight, n = e.getBoundingClientRect(), l = this.getViewport();
      let s, r;
      n.top + o + i.height > l.height ? (s = -1 * i.height, t.style.transformOrigin = "bottom", n.top + s < 0 && (s = -1 * n.top)) : (s = o, t.style.transformOrigin = "top"), i.width > l.width ? r = n.left * -1 : n.left + i.width > l.width ? r = (n.left + i.width - l.width) * -1 : r = 0, t.style.top = s + "px", t.style.left = r + "px";
    }
  },
  getParents(t, e = []) {
    return t.parentNode === null ? e : this.getParents(t.parentNode, e.concat([t.parentNode]));
  },
  getScrollableParents(t) {
    let e = [];
    if (t) {
      let i = this.getParents(t);
      const o = /(auto|scroll)/, n = (l) => {
        let s = window.getComputedStyle(l, null);
        return o.test(s.getPropertyValue("overflow")) || o.test(s.getPropertyValue("overflowX")) || o.test(s.getPropertyValue("overflowY"));
      };
      for (let l of i) {
        let s = l.nodeType === 1 && l.dataset.scrollselectors;
        if (s) {
          let r = s.split(",");
          for (let a of r) {
            let c = this.findSingle(l, a);
            c && n(c) && e.push(c);
          }
        }
        l.nodeType !== 9 && n(l) && e.push(l);
      }
    }
    return e;
  },
  getHiddenElementOuterHeight(t) {
    if (t) {
      t.style.visibility = "hidden", t.style.display = "block";
      let e = t.offsetHeight;
      return t.style.display = "none", t.style.visibility = "visible", e;
    }
    return 0;
  },
  getHiddenElementOuterWidth(t) {
    if (t) {
      t.style.visibility = "hidden", t.style.display = "block";
      let e = t.offsetWidth;
      return t.style.display = "none", t.style.visibility = "visible", e;
    }
    return 0;
  },
  getHiddenElementDimensions(t) {
    if (t) {
      let e = {};
      return t.style.visibility = "hidden", t.style.display = "block", e.width = t.offsetWidth, e.height = t.offsetHeight, t.style.display = "none", t.style.visibility = "visible", e;
    }
    return 0;
  },
  fadeIn(t, e) {
    if (t) {
      t.style.opacity = 0;
      let i = +new Date(), o = 0, n = function() {
        o = +t.style.opacity + (new Date().getTime() - i) / e, t.style.opacity = o, i = +new Date(), +o < 1 && (window.requestAnimationFrame && requestAnimationFrame(n) || setTimeout(n, 16));
      };
      n();
    }
  },
  fadeOut(t, e) {
    if (t) {
      let i = 1, o = 50, n = e, l = o / n, s = setInterval(() => {
        i -= l, i <= 0 && (i = 0, clearInterval(s)), t.style.opacity = i;
      }, o);
    }
  },
  getUserAgent() {
    return navigator.userAgent;
  },
  appendChild(t, e) {
    if (this.isElement(e))
      e.appendChild(t);
    else if (e.el && e.elElement)
      e.elElement.appendChild(t);
    else
      throw new Error("Cannot append " + e + " to " + t);
  },
  scrollInView(t, e) {
    let i = getComputedStyle(t).getPropertyValue("borderTopWidth"), o = i ? parseFloat(i) : 0, n = getComputedStyle(t).getPropertyValue("paddingTop"), l = n ? parseFloat(n) : 0, s = t.getBoundingClientRect(), a = e.getBoundingClientRect().top + document.body.scrollTop - (s.top + document.body.scrollTop) - o - l, c = t.scrollTop, f = t.clientHeight, p = this.getOuterHeight(e);
    a < 0 ? t.scrollTop = c + a : a + p > f && (t.scrollTop = c + a - f + p);
  },
  clearSelection() {
    if (window.getSelection)
      window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0 && window.getSelection().removeAllRanges();
    else if (document.selection && document.selection.empty)
      try {
        document.selection.empty();
      } catch {
      }
  },
  calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    let t = document.createElement("div");
    t.className = "p-scrollbar-measure", document.body.appendChild(t);
    let e = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), this.calculatedScrollbarWidth = e, e;
  },
  getBrowser() {
    if (!this.browser) {
      let t = this.resolveUserAgent();
      this.browser = {}, t.browser && (this.browser[t.browser] = !0, this.browser.version = t.version), this.browser.chrome ? this.browser.webkit = !0 : this.browser.webkit && (this.browser.safari = !0);
    }
    return this.browser;
  },
  resolveUserAgent() {
    let t = navigator.userAgent.toLowerCase(), e = /(chrome)[ ]([\w.]+)/.exec(t) || /(webkit)[ ]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
    return {
      browser: e[1] || "",
      version: e[2] || "0"
    };
  },
  isVisible(t) {
    return t && t.offsetParent != null;
  },
  invokeElementMethod(t, e, i) {
    t[e].apply(t, i);
  },
  isClient() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  },
  getFocusableElements(t, e = "") {
    let i = this.find(
      t,
      `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`
    ), o = [];
    for (let n of i)
      getComputedStyle(n).display != "none" && getComputedStyle(n).visibility != "hidden" && o.push(n);
    return o;
  },
  getFirstFocusableElement(t, e) {
    const i = this.getFocusableElements(t, e);
    return i.length > 0 ? i[0] : null;
  },
  isClickable(t) {
    const e = t.nodeName, i = t.parentElement && t.parentElement.nodeName;
    return e == "INPUT" || e == "BUTTON" || e == "A" || i == "INPUT" || i == "BUTTON" || i == "A" || this.hasClass(t, "p-button") || this.hasClass(t.parentElement, "p-button") || this.hasClass(t.parentElement, "p-checkbox") || this.hasClass(t.parentElement, "p-radiobutton");
  },
  applyStyle(t, e) {
    if (typeof e == "string")
      t.style.cssText = e;
    else
      for (let i in e)
        t.style[i] = e[i];
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },
  isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  exportCSV(t, e) {
    let i = new Blob([t], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob)
      navigator.msSaveOrOpenBlob(i, e + ".csv");
    else {
      let o = document.createElement("a");
      o.download !== void 0 ? (o.setAttribute("href", URL.createObjectURL(i)), o.setAttribute("download", e + ".csv"), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o)) : (t = "data:text/csv;charset=utf-8," + t, window.open(encodeURI(t)));
    }
  }
};
function N(t) {
  t.addEventListener("mousedown", T);
}
function I(t) {
  t.removeEventListener("mousedown", T);
}
function V(t) {
  let e = document.createElement("span");
  e.className = "p-ink", e.setAttribute("role", "presentation"), t.appendChild(e), e.addEventListener("animationend", E);
}
function D(t) {
  let e = O(t);
  e && (I(t), e.removeEventListener("animationend", E), e.remove());
}
function T(t) {
  let e = t.currentTarget, i = O(e);
  if (!i || getComputedStyle(i, null).display === "none")
    return;
  if (d.removeClass(i, "p-ink-active"), !d.getHeight(i) && !d.getWidth(i)) {
    let s = Math.max(d.getOuterWidth(e), d.getOuterHeight(e));
    i.style.height = s + "px", i.style.width = s + "px";
  }
  let o = d.getOffset(e), n = t.pageX - o.left + document.body.scrollTop - d.getWidth(i) / 2, l = t.pageY - o.top + document.body.scrollLeft - d.getHeight(i) / 2;
  i.style.top = l + "px", i.style.left = n + "px", d.addClass(i, "p-ink-active");
}
function E(t) {
  d.removeClass(t.currentTarget, "p-ink-active");
}
function O(t) {
  for (let e = 0; e < t.children.length; e++)
    if (typeof t.children[e].className == "string" && t.children[e].className.indexOf("p-ink") !== -1)
      return t.children[e];
  return null;
}
const $ = {
  mounted(t, e) {
    e.instance.$primevue && e.instance.$primevue.config && e.instance.$primevue.config.ripple && (V(t), N(t));
  },
  unmounted(t) {
    D(t);
  }
};
var v = {
  name: "Button",
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    iconPos: {
      type: String,
      default: "left"
    },
    badge: {
      type: String
    },
    badgeClass: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: "pi pi-spinner pi-spin"
    }
  },
  computed: {
    buttonClass() {
      return {
        "p-button p-component": !0,
        "p-button-icon-only": this.icon && !this.label,
        "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
        "p-disabled": this.$attrs.disabled || this.loading,
        "p-button-loading": this.loading,
        "p-button-loading-label-only": this.loading && !this.icon && this.label
      };
    },
    iconClass() {
      return [
        this.loading ? "p-button-loading-icon " + this.loadingIcon : this.icon,
        "p-button-icon",
        {
          "p-button-icon-left": this.iconPos === "left" && this.label,
          "p-button-icon-right": this.iconPos === "right" && this.label,
          "p-button-icon-top": this.iconPos === "top" && this.label,
          "p-button-icon-bottom": this.iconPos === "bottom" && this.label
        }
      ];
    },
    badgeStyleClass() {
      return [
        "p-badge p-component",
        this.badgeClass,
        {
          "p-badge-no-gutter": this.badge && String(this.badge).length === 1
        }
      ];
    },
    disabled() {
      return this.$attrs.disabled || this.loading;
    },
    defaultAriaLabel() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs["aria-label"];
    }
  },
  directives: {
    ripple: $
  }
};
const M = ["aria-label", "disabled"], U = { class: "p-button-label" };
function j(t, e, i, o, n, l) {
  const s = H("ripple");
  return k((u(), h("button", {
    class: g(l.buttonClass),
    type: "button",
    "aria-label": l.defaultAriaLabel,
    disabled: l.disabled
  }, [
    P(t.$slots, "default", {}, () => [
      i.loading && !i.icon ? (u(), h("span", {
        key: 0,
        class: g(l.iconClass)
      }, null, 2)) : w("", !0),
      i.icon ? (u(), h("span", {
        key: 1,
        class: g(l.iconClass)
      }, null, 2)) : w("", !0),
      y("span", U, b(i.label || "\xA0"), 1),
      i.badge ? (u(), h("span", {
        key: 2,
        class: g(l.badgeStyleClass)
      }, b(i.badge), 3)) : w("", !0)
    ])
  ], 10, M)), [
    [s]
  ]);
}
v.render = j;
const q = (t) => (F("data-v-6bb3cd59"), t = t(), A(), t), z = { class: "flex align-content-center flex-wrap counter" }, X = /* @__PURE__ */ q(() => /* @__PURE__ */ y("label", { class: "flex align-items-center justify-content-center" }, "Counter:", -1)), Y = { class: "flex align-items-center justify-content-center count" }, G = /* @__PURE__ */ x({
  __name: "ComponentB",
  setup(t) {
    const e = L(0);
    return (i, o) => (u(), h("div", z, [
      X,
      C(S(v), {
        icon: "pi pi-plus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: o[0] || (o[0] = (n) => e.value++)
      }),
      y("span", Y, b(e.value), 1),
      C(S(v), {
        icon: "pi pi-minus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: o[1] || (o[1] = (n) => e.value--)
      })
    ]));
  }
});
const J = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [o, n] of e)
    i[o] = n;
  return i;
}, K = /* @__PURE__ */ J(G, [["__scopeId", "data-v-6bb3cd59"]]), _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: B,
  ComponentB: K
}, Symbol.toStringTag, { value: "Module" }));
const Q = 100, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAGIC_NUM: Q
}, Symbol.toStringTag, { value: "Module" }));
function Z(t, e) {
  return t + e;
}
const ot = {
  add: Z
};
function tt(t) {
  for (const e in _)
    t.component(e, _[e]);
}
const nt = { install: tt };
export {
  B as ComponentA,
  K as ComponentB,
  it as MyConstants,
  ot as MyUtil,
  nt as default
};

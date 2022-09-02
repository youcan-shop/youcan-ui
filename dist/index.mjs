import { defineComponent as ie, openBlock as ne, createElementBlock as oe, createElementVNode as X, normalizeClass as le, unref as se, toDisplayString as Z } from "vue";
import { ref as ae } from "vue-demi";
var m = "colors", x = "sizes", o = "space", ce = { gap: o, gridGap: o, columnGap: o, gridColumnGap: o, rowGap: o, gridRowGap: o, inset: o, insetBlock: o, insetBlockEnd: o, insetBlockStart: o, insetInline: o, insetInlineEnd: o, insetInlineStart: o, margin: o, marginTop: o, marginRight: o, marginBottom: o, marginLeft: o, marginBlock: o, marginBlockEnd: o, marginBlockStart: o, marginInline: o, marginInlineEnd: o, marginInlineStart: o, padding: o, paddingTop: o, paddingRight: o, paddingBottom: o, paddingLeft: o, paddingBlock: o, paddingBlockEnd: o, paddingBlockStart: o, paddingInline: o, paddingInlineEnd: o, paddingInlineStart: o, top: o, right: o, bottom: o, left: o, scrollMargin: o, scrollMarginTop: o, scrollMarginRight: o, scrollMarginBottom: o, scrollMarginLeft: o, scrollMarginX: o, scrollMarginY: o, scrollMarginBlock: o, scrollMarginBlockEnd: o, scrollMarginBlockStart: o, scrollMarginInline: o, scrollMarginInlineEnd: o, scrollMarginInlineStart: o, scrollPadding: o, scrollPaddingTop: o, scrollPaddingRight: o, scrollPaddingBottom: o, scrollPaddingLeft: o, scrollPaddingX: o, scrollPaddingY: o, scrollPaddingBlock: o, scrollPaddingBlockEnd: o, scrollPaddingBlockStart: o, scrollPaddingInline: o, scrollPaddingInlineEnd: o, scrollPaddingInlineStart: o, fontSize: "fontSizes", background: m, backgroundColor: m, backgroundImage: m, borderImage: m, border: m, borderBlock: m, borderBlockEnd: m, borderBlockStart: m, borderBottom: m, borderBottomColor: m, borderColor: m, borderInline: m, borderInlineEnd: m, borderInlineStart: m, borderLeft: m, borderLeftColor: m, borderRight: m, borderRightColor: m, borderTop: m, borderTopColor: m, caretColor: m, color: m, columnRuleColor: m, fill: m, outline: m, outlineColor: m, stroke: m, textDecorationColor: m, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: x, minBlockSize: x, maxBlockSize: x, inlineSize: x, minInlineSize: x, maxInlineSize: x, width: x, minWidth: x, maxWidth: x, height: x, minHeight: x, maxHeight: x, flexBasis: x, gridTemplateColumns: x, gridTemplateRows: x, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, de = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, O = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, i, ...r) => {
    const n = ((s) => JSON.stringify(s, de))(t);
    return n in e ? e[n] : e[n] = i(t, ...r);
  };
}, H = Symbol.for("sxs.internal"), J = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Y = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: ge } = Object.prototype, F = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), pe = /\s+(?![^()]*\))/, w = (e) => (t) => e(...typeof t == "string" ? String(t).split(pe) : [t]), q = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: w((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: w((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: w((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: w((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: w((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: w((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, G = /([\d.]+)([^]*)/, ue = (e, t) => e.length ? e.reduce((i, r) => (i.push(...t.map((n) => n.includes("&") ? n.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(n) ? `:is(${r})` : r) : r + " " + n)), i), []) : t, he = (e, t) => e in fe && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (i, r, n, s) => r + (n === "stretch" ? `-moz-available${s};${F(e)}:${r}-webkit-fill-available` : `-moz-fit-content${s};${F(e)}:${r}fit-content`) + s) : String(t), fe = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, j = (e) => e ? e + "-" : "", te = (e, t, i) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, n, s, p, a) => p == "$" == !!s ? r : (n || p == "--" ? "calc(" : "") + "var(--" + (p === "$" ? j(t) + (a.includes("$") ? "" : j(i)) + a.replace(/\$/g, "-") : a) + ")" + (n || p == "--" ? "*" + (n || "") + (s || "1") + ")" : "")), me = /\s*,\s*(?![^()]*\))/, be = Object.prototype.toString, C = (e, t, i, r, n) => {
  let s, p, a;
  const l = (d, u, b) => {
    let c, g;
    const f = (S) => {
      for (c in S) {
        const k = c.charCodeAt(0) === 64, N = k && Array.isArray(S[c]) ? S[c] : [S[c]];
        for (g of N) {
          const I = /[A-Z]/.test(h = c) ? h : h.replace(/-[^]/g, (B) => B[1].toUpperCase()), M = typeof g == "object" && g && g.toString === be && (!r.utils[I] || !u.length);
          if (I in r.utils && !M) {
            const B = r.utils[I];
            if (B !== p) {
              p = B, f(B(g)), p = null;
              continue;
            }
          } else if (I in q) {
            const B = q[I];
            if (B !== a) {
              a = B, f(B(g)), a = null;
              continue;
            }
          }
          if (k && (y = c.slice(1) in r.media ? "@media " + r.media[c.slice(1)] : c, c = y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (B, $, z, v, R, W) => {
            const T = G.test($), A = 0.0625 * (T ? -1 : 1), [D, U] = T ? [v, $] : [$, v];
            return "(" + (z[0] === "=" ? "" : z[0] === ">" === T ? "max-" : "min-") + D + ":" + (z[0] !== "=" && z.length === 1 ? U.replace(G, (re, _, V) => Number(_) + A * (z === ">" ? 1 : -1) + V) : U) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + D + ":" + (R.length === 1 ? W.replace(G, (re, _, V) => Number(_) + A * (R === ">" ? -1 : 1) + V) : W) : "") + ")";
          })), M) {
            const B = k ? b.concat(c) : [...b], $ = k ? [...u] : ue(u, c.split(me));
            s !== void 0 && n(K(...s)), s = void 0, l(g, $, B);
          } else
            s === void 0 && (s = [[], u, b]), c = k || c.charCodeAt(0) !== 36 ? c : `--${j(r.prefix)}${c.slice(1).replace(/\$/g, "-")}`, g = M ? g : typeof g == "number" ? g && I in Se ? String(g) + "px" : String(g) : te(he(I, g == null ? "" : g), r.prefix, r.themeMap[I]), s[0].push(`${k ? `${c} ` : `${F(c)}:`}${g}`);
        }
      }
      var y, h;
    };
    f(d), s !== void 0 && n(K(...s)), s = void 0;
  };
  l(e, t, i);
}, K = (e, t, i) => `${i.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(i.length ? i.length + 1 : 0).join("}")}`, Se = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Q = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), E = (e) => ((t) => {
  let i, r = "";
  for (i = Math.abs(t); i > 52; i = i / 52 | 0)
    r = Q(i % 52) + r;
  return Q(i % 52) + r;
})(((t, i) => {
  let r = i.length;
  for (; r; )
    t = 33 * t ^ i.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), L = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], ke = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, ye = (e) => {
  let t;
  const i = () => {
    const { cssRules: n } = t.sheet;
    return [].map.call(n, (s, p) => {
      const { cssText: a } = s;
      let l = "";
      if (a.startsWith("--sxs"))
        return "";
      if (n[p - 1] && (l = n[p - 1].cssText).startsWith("--sxs")) {
        if (!s.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === s)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;
        return s.cssRules.length ? `${l}${a}` : "";
      }
      return a;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: a, sheet: l } = t;
      if (!l.deleteRule) {
        for (; Object(Object(l.cssRules)[0]).type === 3; )
          l.cssRules.splice(0, 1);
        l.cssRules = [];
      }
      for (const d in a)
        delete a[d];
    }
    const n = Object(e).styleSheets || [];
    for (const a of n)
      if (ke(a)) {
        for (let l = 0, d = a.cssRules; d[l]; ++l) {
          const u = Object(d[l]);
          if (u.type !== 1)
            continue;
          const b = Object(d[l + 1]);
          if (b.type !== 4)
            continue;
          ++l;
          const { cssText: c } = u;
          if (!c.startsWith("--sxs"))
            continue;
          const g = c.slice(14, -3).trim().split(/\s+/), f = L[g[0]];
          f && (t || (t = { sheet: a, reset: r, rules: {}, toString: i }), t.rules[f] = { group: b, index: l, cache: new Set(g) });
        }
        if (t)
          break;
      }
    if (!t) {
      const a = (l, d) => ({ type: d, cssRules: [], insertRule(u, b) {
        this.cssRules.splice(b, 0, a(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return l === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : l;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: r, toString: i };
    }
    const { sheet: s, rules: p } = t;
    for (let a = L.length - 1; a >= 0; --a) {
      const l = L[a];
      if (!p[l]) {
        const d = L[a + 1], u = p[d] ? p[d].index : s.cssRules.length;
        s.insertRule("@media{}", u), s.insertRule(`--sxs{--sxs:${a}}`, u), p[l] = { group: s.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([a]) };
      }
      xe(p[l]);
    }
  };
  return r(), t;
}, xe = (e) => {
  const t = e.group;
  let i = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, i), ++i;
    } catch {
    }
  };
}, P = Symbol(), Be = O(), $e = (e, t) => Be(e, () => (...i) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const n of i)
    if (n != null)
      if (n[H]) {
        r.type == null && (r.type = n[H].type);
        for (const s of n[H].composers)
          r.composers.add(s);
      } else
        n.constructor !== Object || n.$$typeof ? r.type == null && (r.type = n) : r.composers.add(Re(n, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), Ie(e, r, t);
}), Re = ({ variants: e, compoundVariants: t, defaultVariants: i, ...r }, n) => {
  const s = `${j(n.prefix)}c-${E(r)}`, p = [], a = [], l = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in i)
    l[c] = String(i[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      u = l, b = c, ge.call(u, b) || (l[c] = "undefined");
      const g = e[c];
      for (const f in g) {
        const S = { [c]: String(f) };
        String(f) === "undefined" && d.push(c);
        const y = g[f], h = [S, y, !Y(y)];
        p.push(h);
      }
    }
  var u, b;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: g, ...f } = c;
      g = typeof g == "object" && g || {};
      for (const y in f)
        f[y] = String(f[y]);
      const S = [f, g, !Y(g)];
      a.push(S);
    }
  return [s, r, p, a, l, d];
}, Ie = (e, t, i) => {
  const [r, n, s, p] = ze(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((b) => {
    function c() {
      for (let g = 0; g < c[P].length; g++) {
        const [f, S] = c[P][g];
        b.rules[f].apply(S);
      }
      return c[P] = [], null;
    }
    return c[P] = [], c.rules = {}, L.forEach((g) => c.rules[g] = { apply: (f) => c[P].push([g, f]) }), c;
  })(i) : null, l = (a || i).rules, d = `.${r}${n.length > 1 ? `:where(.${n.slice(1).join(".")})` : ""}`, u = (b) => {
    b = typeof b == "object" && b || We;
    const { css: c, ...g } = b, f = {};
    for (const h in s)
      if (delete g[h], h in b) {
        let k = b[h];
        typeof k == "object" && k ? f[h] = { "@initial": s[h], ...k } : (k = String(k), f[h] = k !== "undefined" || p.has(h) ? k : s[h]);
      } else
        f[h] = s[h];
    const S = /* @__PURE__ */ new Set([...n]);
    for (const [h, k, N, I] of t.composers) {
      i.rules.styled.cache.has(h) || (i.rules.styled.cache.add(h), C(k, [`.${h}`], [], e, ($) => {
        l.styled.apply($);
      }));
      const M = ee(N, f, e.media), B = ee(I, f, e.media, !0);
      for (const $ of M)
        if ($ !== void 0)
          for (const [z, v, R] of $) {
            const W = `${h}-${E(v)}-${z}`;
            S.add(W);
            const T = (R ? i.rules.resonevar : i.rules.onevar).cache, A = R ? l.resonevar : l.onevar;
            T.has(W) || (T.add(W), C(v, [`.${W}`], [], e, (D) => {
              A.apply(D);
            }));
          }
      for (const $ of B)
        if ($ !== void 0)
          for (const [z, v] of $) {
            const R = `${h}-${E(v)}-${z}`;
            S.add(R), i.rules.allvar.cache.has(R) || (i.rules.allvar.cache.add(R), C(v, [`.${R}`], [], e, (W) => {
              l.allvar.apply(W);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const h = `${r}-i${E(c)}-css`;
      S.add(h), i.rules.inline.cache.has(h) || (i.rules.inline.cache.add(h), C(c, [`.${h}`], [], e, (k) => {
        l.inline.apply(k);
      }));
    }
    for (const h of String(b.className || "").trim().split(/\s+/))
      h && S.add(h);
    const y = g.className = [...S].join(" ");
    return { type: t.type, className: y, selector: d, props: g, toString: () => y, deferredInjector: a };
  };
  return J(u, { className: r, selector: d, [H]: t, toString: () => (i.rules.styled.cache.has(r) || u(), r) });
}, ze = (e) => {
  let t = "";
  const i = [], r = {}, n = [];
  for (const [s, , , , p, a] of e) {
    t === "" && (t = s), i.push(s), n.push(...a);
    for (const l in p) {
      const d = p[l];
      (r[l] === void 0 || d !== "undefined" || a.includes(d)) && (r[l] = d);
    }
  }
  return [t, i, r, new Set(n)];
}, ee = (e, t, i, r) => {
  const n = [];
  e:
    for (let [s, p, a] of e) {
      if (a)
        continue;
      let l, d = 0, u = !1;
      for (l in s) {
        const b = s[l];
        let c = t[l];
        if (c !== b) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let g, f, S = 0;
            for (const y in c) {
              if (b === String(c[y])) {
                if (y !== "@initial") {
                  const h = y.slice(1);
                  (f = f || []).push(h in i ? i[h] : y.replace(/^@media ?/, "")), u = !0;
                }
                d += S, g = !0;
              }
              ++S;
            }
            if (f && f.length && (p = { ["@media " + f.join(", ")]: p }), !g)
              continue e;
          }
        }
      }
      (n[d] = n[d] || []).push([r ? "cv" : `${l}-${s[l]}`, p, u]);
    }
  return n;
}, We = {}, je = O(), ve = (e, t) => je(e, () => (...i) => {
  const r = () => {
    for (let n of i) {
      n = typeof n == "object" && n || {};
      let s = E(n);
      if (!t.rules.global.cache.has(s)) {
        if (t.rules.global.cache.add(s), "@import" in n) {
          let p = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(n["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, p++);
          delete n["@import"];
        }
        C(n, [], [], e, (p) => {
          t.rules.global.apply(p);
        });
      }
    }
    return "";
  };
  return J(r, { toString: r });
}), Ee = O(), Te = (e, t) => Ee(e, () => (i) => {
  const r = `${j(e.prefix)}k-${E(i)}`, n = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const s = [];
      C(i, [], [], e, (a) => s.push(a));
      const p = `@keyframes ${r}{${s.join("")}}`;
      t.rules.global.apply(p);
    }
    return r;
  };
  return J(n, { get name() {
    return n();
  }, toString: n });
}), we = class {
  constructor(e, t, i, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = i == null ? "" : String(i), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + j(this.prefix) + j(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Ce = O(), Me = (e, t) => Ce(e, () => (i, r) => {
  r = typeof i == "object" && i || Object(r);
  const n = `.${i = (i = typeof i == "string" ? i : "") || `${j(e.prefix)}t-${E(r)}`}`, s = {}, p = [];
  for (const l in r) {
    s[l] = {};
    for (const d in r[l]) {
      const u = `--${j(e.prefix)}${l}-${d}`, b = te(String(r[l][d]), e.prefix, l);
      s[l][d] = new we(d, b, l, e.prefix), p.push(`${u}:${b}`);
    }
  }
  const a = () => {
    if (p.length && !t.rules.themed.cache.has(i)) {
      t.rules.themed.cache.add(i);
      const l = `${r === e.theme ? ":root," : ""}.${i}{${p.join(";")}}`;
      t.rules.themed.apply(l);
    }
    return i;
  };
  return { ...s, get className() {
    return a();
  }, selector: n, toString: a };
}), Pe = O(), Le = (e) => {
  let t = !1;
  const i = Pe(e, (r) => {
    t = !0;
    const n = "prefix" in (r = typeof r == "object" && r || {}) ? String(r.prefix) : "", s = typeof r.media == "object" && r.media || {}, p = typeof r.root == "object" ? r.root || null : globalThis.document || null, a = typeof r.theme == "object" && r.theme || {}, l = { prefix: n, media: s, theme: a, themeMap: typeof r.themeMap == "object" && r.themeMap || { ...ce }, utils: typeof r.utils == "object" && r.utils || {} }, d = ye(p), u = { css: $e(l, d), globalCss: ve(l, d), keyframes: Te(l, d), createTheme: Me(l, d), reset() {
      d.reset(), u.theme.toString();
    }, theme: {}, sheet: d, config: l, prefix: n, getCssText: d.toString, toString: d.toString };
    return String(u.theme = u.createTheme(a)), u;
  });
  return t || i.reset(), i;
};
const {
  css: Oe,
  globalCss: Ve,
  keyframes: Ge,
  getCssText: Fe,
  theme: Je,
  createTheme: Ue,
  config: Xe
} = Le({
  theme: {
    colors: {
      gray400: "red",
      gray500: "lightgray"
    }
  },
  media: {
    bp1: "(min-width: 480px)"
  },
  utils: {
    marginX: (e) => ({ marginLeft: e, marginRight: e })
  }
}), { className: Ae } = Oe({
  backgroundColor: "$gray400",
  borderRadius: "9999px",
  fontSize: "13px",
  lineHeight: "1",
  fontWeight: 500,
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "16px",
  paddingRight: "16px",
  border: "0",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, .3)"
  }
})(), De = /* @__PURE__ */ ie({
  __name: "test",
  props: {
    name: { type: null, required: !0 }
  },
  setup(e) {
    const t = ae(0);
    return (i, r) => (ne(), oe("div", null, [
      X("span", {
        class: le(se(Ae))
      }, "Hello: " + Z(e.name), 3),
      X("span", null, Z(t.value), 1)
    ]));
  }
}), He = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, n] of t)
    i[r] = n;
  return i;
}, Ze = /* @__PURE__ */ He(De, [["__file", "/var/dev/youcan-ui/src/Primitives/Test/test.vue"]]);
export {
  Ze as default
};

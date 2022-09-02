import { defineComponent as ie } from "vue";
import { ref as ne } from "vue-demi";
var b = "colors", $ = "sizes", l = "space", oe = { gap: l, gridGap: l, columnGap: l, gridColumnGap: l, rowGap: l, gridRowGap: l, inset: l, insetBlock: l, insetBlockEnd: l, insetBlockStart: l, insetInline: l, insetInlineEnd: l, insetInlineStart: l, margin: l, marginTop: l, marginRight: l, marginBottom: l, marginLeft: l, marginBlock: l, marginBlockEnd: l, marginBlockStart: l, marginInline: l, marginInlineEnd: l, marginInlineStart: l, padding: l, paddingTop: l, paddingRight: l, paddingBottom: l, paddingLeft: l, paddingBlock: l, paddingBlockEnd: l, paddingBlockStart: l, paddingInline: l, paddingInlineEnd: l, paddingInlineStart: l, top: l, right: l, bottom: l, left: l, scrollMargin: l, scrollMarginTop: l, scrollMarginRight: l, scrollMarginBottom: l, scrollMarginLeft: l, scrollMarginX: l, scrollMarginY: l, scrollMarginBlock: l, scrollMarginBlockEnd: l, scrollMarginBlockStart: l, scrollMarginInline: l, scrollMarginInlineEnd: l, scrollMarginInlineStart: l, scrollPadding: l, scrollPaddingTop: l, scrollPaddingRight: l, scrollPaddingBottom: l, scrollPaddingLeft: l, scrollPaddingX: l, scrollPaddingY: l, scrollPaddingBlock: l, scrollPaddingBlockEnd: l, scrollPaddingBlockStart: l, scrollPaddingInline: l, scrollPaddingInlineEnd: l, scrollPaddingInlineStart: l, fontSize: "fontSizes", background: b, backgroundColor: b, backgroundImage: b, borderImage: b, border: b, borderBlock: b, borderBlockEnd: b, borderBlockStart: b, borderBottom: b, borderBottomColor: b, borderColor: b, borderInline: b, borderInlineEnd: b, borderInlineStart: b, borderLeft: b, borderLeftColor: b, borderRight: b, borderRightColor: b, borderTop: b, borderTopColor: b, caretColor: b, color: b, columnRuleColor: b, fill: b, outline: b, outlineColor: b, stroke: b, textDecorationColor: b, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: $, minBlockSize: $, maxBlockSize: $, inlineSize: $, minInlineSize: $, maxInlineSize: $, width: $, minWidth: $, maxWidth: $, height: $, minHeight: $, maxHeight: $, flexBasis: $, gridTemplateColumns: $, gridTemplateRows: $, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, le = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, L = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, i, ...r) => {
    const o = ((a) => JSON.stringify(a, le))(t);
    return o in e ? e[o] : e[o] = i(t, ...r);
  };
}, D = Symbol.for("sxs.internal"), U = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), J = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: se } = Object.prototype, G = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), ae = /\s+(?![^()]*\))/, T = (e) => (t) => e(...typeof t == "string" ? String(t).split(ae) : [t]), Z = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: T((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: T((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: T((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: T((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: T((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: T((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, F = /([\d.]+)([^]*)/, ce = (e, t) => e.length ? e.reduce((i, r) => (i.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), i), []) : t, de = (e, t) => e in pe && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (i, r, o, a) => r + (o === "stretch" ? `-moz-available${a};${G(e)}:${r}-webkit-fill-available` : `-moz-fit-content${a};${G(e)}:${r}fit-content`) + a) : String(t), pe = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, W = (e) => e ? e + "-" : "", Q = (e, t, i) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, a, p, c) => p == "$" == !!a ? r : (o || p == "--" ? "calc(" : "") + "var(--" + (p === "$" ? W(t) + (c.includes("$") ? "" : W(i)) + c.replace(/\$/g, "-") : c) + ")" + (o || p == "--" ? "*" + (o || "") + (a || "1") + ")" : "")), ge = /\s*,\s*(?![^()]*\))/, ue = Object.prototype.toString, E = (e, t, i, r, o) => {
  let a, p, c;
  const n = (d, u, m) => {
    let s, g;
    const f = (S) => {
      for (s in S) {
        const y = s.charCodeAt(0) === 64, N = y && Array.isArray(S[s]) ? S[s] : [S[s]];
        for (g of N) {
          const I = /[A-Z]/.test(h = s) ? h : h.replace(/-[^]/g, (B) => B[1].toUpperCase()), w = typeof g == "object" && g && g.toString === ue && (!r.utils[I] || !u.length);
          if (I in r.utils && !w) {
            const B = r.utils[I];
            if (B !== p) {
              p = B, f(B(g)), p = null;
              continue;
            }
          } else if (I in Z) {
            const B = Z[I];
            if (B !== c) {
              c = B, f(B(g)), c = null;
              continue;
            }
          }
          if (y && (k = s.slice(1) in r.media ? "@media " + r.media[s.slice(1)] : s, s = k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (B, x, v, _, R, z) => {
            const C = F.test(x), O = 0.0625 * (C ? -1 : 1), [A, X] = C ? [_, x] : [x, _];
            return "(" + (v[0] === "=" ? "" : v[0] === ">" === C ? "max-" : "min-") + A + ":" + (v[0] !== "=" && v.length === 1 ? X.replace(F, (re, H, V) => Number(H) + O * (v === ">" ? 1 : -1) + V) : X) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + A + ":" + (R.length === 1 ? z.replace(F, (re, H, V) => Number(H) + O * (R === ">" ? -1 : 1) + V) : z) : "") + ")";
          })), w) {
            const B = y ? m.concat(s) : [...m], x = y ? [...u] : ce(u, s.split(ge));
            a !== void 0 && o(Y(...a)), a = void 0, n(g, x, B);
          } else
            a === void 0 && (a = [[], u, m]), s = y || s.charCodeAt(0) !== 36 ? s : `--${W(r.prefix)}${s.slice(1).replace(/\$/g, "-")}`, g = w ? g : typeof g == "number" ? g && I in fe ? String(g) + "px" : String(g) : Q(de(I, g == null ? "" : g), r.prefix, r.themeMap[I]), a[0].push(`${y ? `${s} ` : `${G(s)}:`}${g}`);
        }
      }
      var k, h;
    };
    f(d), a !== void 0 && o(Y(...a)), a = void 0;
  };
  n(e, t, i);
}, Y = (e, t, i) => `${i.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(i.length ? i.length + 1 : 0).join("}")}`, fe = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, q = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), j = (e) => ((t) => {
  let i, r = "";
  for (i = Math.abs(t); i > 52; i = i / 52 | 0)
    r = q(i % 52) + r;
  return q(i % 52) + r;
})(((t, i) => {
  let r = i.length;
  for (; r; )
    t = 33 * t ^ i.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), P = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], he = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, me = (e) => {
  let t;
  const i = () => {
    const { cssRules: o } = t.sheet;
    return [].map.call(o, (a, p) => {
      const { cssText: c } = a;
      let n = "";
      if (c.startsWith("--sxs"))
        return "";
      if (o[p - 1] && (n = o[p - 1].cssText).startsWith("--sxs")) {
        if (!a.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === a)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${c}`;
        return a.cssRules.length ? `${n}${c}` : "";
      }
      return c;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: c, sheet: n } = t;
      if (!n.deleteRule) {
        for (; Object(Object(n.cssRules)[0]).type === 3; )
          n.cssRules.splice(0, 1);
        n.cssRules = [];
      }
      for (const d in c)
        delete c[d];
    }
    const o = Object(e).styleSheets || [];
    for (const c of o)
      if (he(c)) {
        for (let n = 0, d = c.cssRules; d[n]; ++n) {
          const u = Object(d[n]);
          if (u.type !== 1)
            continue;
          const m = Object(d[n + 1]);
          if (m.type !== 4)
            continue;
          ++n;
          const { cssText: s } = u;
          if (!s.startsWith("--sxs"))
            continue;
          const g = s.slice(14, -3).trim().split(/\s+/), f = P[g[0]];
          f && (t || (t = { sheet: c, reset: r, rules: {}, toString: i }), t.rules[f] = { group: m, index: n, cache: new Set(g) });
        }
        if (t)
          break;
      }
    if (!t) {
      const c = (n, d) => ({ type: d, cssRules: [], insertRule(u, m) {
        this.cssRules.splice(m, 0, c(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return n === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : n;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : c("", "text/css"), rules: {}, reset: r, toString: i };
    }
    const { sheet: a, rules: p } = t;
    for (let c = P.length - 1; c >= 0; --c) {
      const n = P[c];
      if (!p[n]) {
        const d = P[c + 1], u = p[d] ? p[d].index : a.cssRules.length;
        a.insertRule("@media{}", u), a.insertRule(`--sxs{--sxs:${c}}`, u), p[n] = { group: a.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([c]) };
      }
      be(p[n]);
    }
  };
  return r(), t;
}, be = (e) => {
  const t = e.group;
  let i = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, i), ++i;
    } catch {
    }
  };
}, M = Symbol(), Se = L(), ye = (e, t) => Se(e, () => (...i) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of i)
    if (o != null)
      if (o[D]) {
        r.type == null && (r.type = o[D].type);
        for (const a of o[D].composers)
          r.composers.add(a);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(ke(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), $e(e, r, t);
}), ke = ({ variants: e, compoundVariants: t, defaultVariants: i, ...r }, o) => {
  const a = `${W(o.prefix)}c-${j(r)}`, p = [], c = [], n = /* @__PURE__ */ Object.create(null), d = [];
  for (const s in i)
    n[s] = String(i[s]);
  if (typeof e == "object" && e)
    for (const s in e) {
      u = n, m = s, se.call(u, m) || (n[s] = "undefined");
      const g = e[s];
      for (const f in g) {
        const S = { [s]: String(f) };
        String(f) === "undefined" && d.push(s);
        const k = g[f], h = [S, k, !J(k)];
        p.push(h);
      }
    }
  var u, m;
  if (typeof t == "object" && t)
    for (const s of t) {
      let { css: g, ...f } = s;
      g = typeof g == "object" && g || {};
      for (const k in f)
        f[k] = String(f[k]);
      const S = [f, g, !J(g)];
      c.push(S);
    }
  return [a, r, p, c, n, d];
}, $e = (e, t, i) => {
  const [r, o, a, p] = Be(t.composers), c = typeof t.type == "function" || t.type.$$typeof ? ((m) => {
    function s() {
      for (let g = 0; g < s[M].length; g++) {
        const [f, S] = s[M][g];
        m.rules[f].apply(S);
      }
      return s[M] = [], null;
    }
    return s[M] = [], s.rules = {}, P.forEach((g) => s.rules[g] = { apply: (f) => s[M].push([g, f]) }), s;
  })(i) : null, n = (c || i).rules, d = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, u = (m) => {
    m = typeof m == "object" && m || xe;
    const { css: s, ...g } = m, f = {};
    for (const h in a)
      if (delete g[h], h in m) {
        let y = m[h];
        typeof y == "object" && y ? f[h] = { "@initial": a[h], ...y } : (y = String(y), f[h] = y !== "undefined" || p.has(h) ? y : a[h]);
      } else
        f[h] = a[h];
    const S = /* @__PURE__ */ new Set([...o]);
    for (const [h, y, N, I] of t.composers) {
      i.rules.styled.cache.has(h) || (i.rules.styled.cache.add(h), E(y, [`.${h}`], [], e, (x) => {
        n.styled.apply(x);
      }));
      const w = K(N, f, e.media), B = K(I, f, e.media, !0);
      for (const x of w)
        if (x !== void 0)
          for (const [v, _, R] of x) {
            const z = `${h}-${j(_)}-${v}`;
            S.add(z);
            const C = (R ? i.rules.resonevar : i.rules.onevar).cache, O = R ? n.resonevar : n.onevar;
            C.has(z) || (C.add(z), E(_, [`.${z}`], [], e, (A) => {
              O.apply(A);
            }));
          }
      for (const x of B)
        if (x !== void 0)
          for (const [v, _] of x) {
            const R = `${h}-${j(_)}-${v}`;
            S.add(R), i.rules.allvar.cache.has(R) || (i.rules.allvar.cache.add(R), E(_, [`.${R}`], [], e, (z) => {
              n.allvar.apply(z);
            }));
          }
    }
    if (typeof s == "object" && s) {
      const h = `${r}-i${j(s)}-css`;
      S.add(h), i.rules.inline.cache.has(h) || (i.rules.inline.cache.add(h), E(s, [`.${h}`], [], e, (y) => {
        n.inline.apply(y);
      }));
    }
    for (const h of String(m.className || "").trim().split(/\s+/))
      h && S.add(h);
    const k = g.className = [...S].join(" ");
    return { type: t.type, className: k, selector: d, props: g, toString: () => k, deferredInjector: c };
  };
  return U(u, { className: r, selector: d, [D]: t, toString: () => (i.rules.styled.cache.has(r) || u(), r) });
}, Be = (e) => {
  let t = "";
  const i = [], r = {}, o = [];
  for (const [a, , , , p, c] of e) {
    t === "" && (t = a), i.push(a), o.push(...c);
    for (const n in p) {
      const d = p[n];
      (r[n] === void 0 || d !== "undefined" || c.includes(d)) && (r[n] = d);
    }
  }
  return [t, i, r, new Set(o)];
}, K = (e, t, i, r) => {
  const o = [];
  e:
    for (let [a, p, c] of e) {
      if (c)
        continue;
      let n, d = 0, u = !1;
      for (n in a) {
        const m = a[n];
        let s = t[n];
        if (s !== m) {
          if (typeof s != "object" || !s)
            continue e;
          {
            let g, f, S = 0;
            for (const k in s) {
              if (m === String(s[k])) {
                if (k !== "@initial") {
                  const h = k.slice(1);
                  (f = f || []).push(h in i ? i[h] : k.replace(/^@media ?/, "")), u = !0;
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
      (o[d] = o[d] || []).push([r ? "cv" : `${n}-${a[n]}`, p, u]);
    }
  return o;
}, xe = {}, Re = L(), Ie = (e, t) => Re(e, () => (...i) => {
  const r = () => {
    for (let o of i) {
      o = typeof o == "object" && o || {};
      let a = j(o);
      if (!t.rules.global.cache.has(a)) {
        if (t.rules.global.cache.add(a), "@import" in o) {
          let p = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let c of [].concat(o["@import"]))
            c = c.includes('"') || c.includes("'") ? c : `"${c}"`, t.sheet.insertRule(`@import ${c};`, p++);
          delete o["@import"];
        }
        E(o, [], [], e, (p) => {
          t.rules.global.apply(p);
        });
      }
    }
    return "";
  };
  return U(r, { toString: r });
}), ve = L(), ze = (e, t) => ve(e, () => (i) => {
  const r = `${W(e.prefix)}k-${j(i)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const a = [];
      E(i, [], [], e, (c) => a.push(c));
      const p = `@keyframes ${r}{${a.join("")}}`;
      t.rules.global.apply(p);
    }
    return r;
  };
  return U(o, { get name() {
    return o();
  }, toString: o });
}), We = class {
  constructor(e, t, i, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = i == null ? "" : String(i), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + W(this.prefix) + W(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, _e = L(), je = (e, t) => _e(e, () => (i, r) => {
  r = typeof i == "object" && i || Object(r);
  const o = `.${i = (i = typeof i == "string" ? i : "") || `${W(e.prefix)}t-${j(r)}`}`, a = {}, p = [];
  for (const n in r) {
    a[n] = {};
    for (const d in r[n]) {
      const u = `--${W(e.prefix)}${n}-${d}`, m = Q(String(r[n][d]), e.prefix, n);
      a[n][d] = new We(d, m, n, e.prefix), p.push(`${u}:${m}`);
    }
  }
  const c = () => {
    if (p.length && !t.rules.themed.cache.has(i)) {
      t.rules.themed.cache.add(i);
      const n = `${r === e.theme ? ":root," : ""}.${i}{${p.join(";")}}`;
      t.rules.themed.apply(n);
    }
    return i;
  };
  return { ...a, get className() {
    return c();
  }, selector: o, toString: c };
}), Ce = L(), Te = (e) => {
  let t = !1;
  const i = Ce(e, (r) => {
    t = !0;
    const o = "prefix" in (r = typeof r == "object" && r || {}) ? String(r.prefix) : "", a = typeof r.media == "object" && r.media || {}, p = typeof r.root == "object" ? r.root || null : globalThis.document || null, c = typeof r.theme == "object" && r.theme || {}, n = { prefix: o, media: a, theme: c, themeMap: typeof r.themeMap == "object" && r.themeMap || { ...oe }, utils: typeof r.utils == "object" && r.utils || {} }, d = me(p), u = { css: ye(n, d), globalCss: Ie(n, d), keyframes: ze(n, d), createTheme: je(n, d), reset() {
      d.reset(), u.theme.toString();
    }, theme: {}, sheet: d, config: n, prefix: o, getCssText: d.toString, toString: d.toString };
    return String(u.theme = u.createTheme(c)), u;
  });
  return t || i.reset(), i;
};
const {
  css: Ee,
  globalCss: De,
  keyframes: Ne,
  getCssText: He,
  theme: Ve,
  createTheme: Fe,
  config: Ge
} = Te({
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
}), { className: we } = Ee({
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
})(), Me = /* @__PURE__ */ ie({
  __name: "test",
  props: {
    name: { type: null, required: !0 }
  },
  setup(e) {
    const t = ne(0);
    return { __sfc: !0, count: t, testStyles: we };
  }
});
function Pe(e, t, i, r, o, a, p, c) {
  var n = typeof e == "function" ? e.options : e;
  t && (n.render = t, n.staticRenderFns = i, n._compiled = !0), r && (n.functional = !0), a && (n._scopeId = "data-v-" + a);
  var d;
  if (p ? (d = function(s) {
    s = s || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), o && o.call(this, s), s && s._registeredComponents && s._registeredComponents.add(p);
  }, n._ssrRegister = d) : o && (d = c ? function() {
    o.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), d)
    if (n.functional) {
      n._injectStyles = d;
      var u = n.render;
      n.render = function(g, f) {
        return d.call(f), u(g, f);
      };
    } else {
      var m = n.beforeCreate;
      n.beforeCreate = m ? [].concat(m, d) : [d];
    }
  return {
    exports: e,
    options: n
  };
}
var ee = function() {
  var t = this, i = t._self._c, r = t._self._setupProxy;
  return i("div", [i("span", { class: r.testStyles }, [t._v("Hello: " + t._s(t.name))]), i("span", [t._v(t._s(r.count))])]);
}, Le = [];
ee._withStripped = !0;
var te = /* @__PURE__ */ Pe(
  Me,
  ee,
  Le,
  !1,
  null,
  null,
  null,
  null
);
te.options.__file = "/var/dev/youcan-ui/src/Primitives/Test/test.vue";
const Ue = te.exports;
export {
  Ue as Test
};

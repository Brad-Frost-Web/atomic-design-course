const U = globalThis, L = U.ShadowRoot && (U.ShadyCSS === void 0 || U.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, tt = /* @__PURE__ */ Symbol(), I = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== tt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (L && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = I.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && I.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const f = (s) => new nt(typeof s == "string" ? s : s + "", void 0, tt), lt = (s, t) => {
  if (L) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = U.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, s.appendChild(r);
  }
}, q = L ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return f(e);
})(s) : s;
const { is: ht, defineProperty: ct, getOwnPropertyDescriptor: dt, getOwnPropertyNames: pt, getOwnPropertySymbols: yt, getPrototypeOf: gt } = Object, N = globalThis, W = N.trustedTypes, ft = W ? W.emptyScript : "", mt = N.reactiveElementPolyfillSupport, S = (s, t) => s, R = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? ft : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, et = (s, t) => !ht(s, t), V = { attribute: !0, type: String, converter: R, reflect: !1, useDefault: !1, hasChanged: et };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), N.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let x = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = V) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && ct(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: i } = dt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: o, set(a) {
      const c = o?.call(this);
      i?.call(this, a), this.requestUpdate(t, c, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? V;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S("elementProperties"))) return;
    const t = gt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(S("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(S("properties"))) {
      const e = this.properties, r = [...pt(e), ...yt(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(q(o));
    } else t !== void 0 && e.push(q(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return lt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const i = (r.converter?.toAttribute !== void 0 ? r.converter : R).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(o) : this.setAttribute(o, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const i = r.getPropertyOptions(o), a = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : R;
      this._$Em = o;
      const c = a.fromAttribute(e, i.type);
      this[o] = c ?? this._$Ej?.get(o) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, o = !1, i) {
    if (t !== void 0) {
      const a = this.constructor;
      if (o === !1 && (i = this[t]), r ??= a.getPropertyOptions(t), !((r.hasChanged ?? et)(i, e) || r.useDefault && r.reflect && i === this._$Ej?.get(t) && !this.hasAttribute(a._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: i }, a) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), i !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, i] of this._$Ep) this[o] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, i] of r) {
        const { wrapped: a } = i, c = this[o];
        a !== !0 || this._$AL.has(o) || c === void 0 || this.C(o, void 0, i, c);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[S("elementProperties")] = /* @__PURE__ */ new Map(), x[S("finalized")] = /* @__PURE__ */ new Map(), mt?.({ ReactiveElement: x }), (N.reactiveElementVersions ??= []).push("2.1.2");
const j = globalThis, F = (s) => s, H = j.trustedTypes, G = H ? H.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, rt = "$lit$", b = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + b, ut = `<${ot}>`, _ = document, k = () => _.createComment(""), C = (s) => s === null || typeof s != "object" && typeof s != "function", D = Array.isArray, bt = (s) => D(s) || typeof s?.[Symbol.iterator] == "function", T = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Z = /-->/g, J = />/g, v = RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), K = /'/g, Q = /"/g, st = /^(?:script|style|textarea|title)$/i, vt = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), p = vt(1), A = /* @__PURE__ */ Symbol.for("lit-noChange"), g = /* @__PURE__ */ Symbol.for("lit-nothing"), X = /* @__PURE__ */ new WeakMap(), $ = _.createTreeWalker(_, 129);
function it(s, t) {
  if (!D(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const $t = (s, t) => {
  const e = s.length - 1, r = [];
  let o, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = E;
  for (let c = 0; c < e; c++) {
    const n = s[c];
    let l, y, h = -1, m = 0;
    for (; m < n.length && (a.lastIndex = m, y = a.exec(n), y !== null); ) m = a.lastIndex, a === E ? y[1] === "!--" ? a = Z : y[1] !== void 0 ? a = J : y[2] !== void 0 ? (st.test(y[2]) && (o = RegExp("</" + y[2], "g")), a = v) : y[3] !== void 0 && (a = v) : a === v ? y[0] === ">" ? (a = o ?? E, h = -1) : y[1] === void 0 ? h = -2 : (h = a.lastIndex - y[2].length, l = y[1], a = y[3] === void 0 ? v : y[3] === '"' ? Q : K) : a === Q || a === K ? a = v : a === Z || a === J ? a = E : (a = v, o = void 0);
    const u = a === v && s[c + 1].startsWith("/>") ? " " : "";
    i += a === E ? n + ut : h >= 0 ? (r.push(l), n.slice(0, h) + rt + n.slice(h) + b + u) : n + b + (h === -2 ? c : u);
  }
  return [it(s, i + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class z {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let i = 0, a = 0;
    const c = t.length - 1, n = this.parts, [l, y] = $t(t, e);
    if (this.el = z.createElement(l, r), $.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = $.nextNode()) !== null && n.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(rt)) {
          const m = y[a++], u = o.getAttribute(h).split(b), P = /([.?@])?(.*)/.exec(m);
          n.push({ type: 1, index: i, name: P[2], strings: u, ctor: P[1] === "." ? xt : P[1] === "?" ? At : P[1] === "@" ? wt : O }), o.removeAttribute(h);
        } else h.startsWith(b) && (n.push({ type: 6, index: i }), o.removeAttribute(h));
        if (st.test(o.tagName)) {
          const h = o.textContent.split(b), m = h.length - 1;
          if (m > 0) {
            o.textContent = H ? H.emptyScript : "";
            for (let u = 0; u < m; u++) o.append(h[u], k()), $.nextNode(), n.push({ type: 2, index: ++i });
            o.append(h[m], k());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ot) n.push({ type: 2, index: i });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(b, h + 1)) !== -1; ) n.push({ type: 7, index: i }), h += b.length - 1;
      }
      i++;
    }
  }
  static createElement(t, e) {
    const r = _.createElement("template");
    return r.innerHTML = t, r;
  }
}
function w(s, t, e = s, r) {
  if (t === A) return t;
  let o = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const i = C(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== i && (o?._$AO?.(!1), i === void 0 ? o = void 0 : (o = new i(s), o._$AT(s, e, r)), r !== void 0 ? (e._$Co ??= [])[r] = o : e._$Cl = o), o !== void 0 && (t = w(s, o._$AS(s, t.values), o, r)), t;
}
class _t {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, o = (t?.creationScope ?? _).importNode(e, !0);
    $.currentNode = o;
    let i = $.nextNode(), a = 0, c = 0, n = r[0];
    for (; n !== void 0; ) {
      if (a === n.index) {
        let l;
        n.type === 2 ? l = new M(i, i.nextSibling, this, t) : n.type === 1 ? l = new n.ctor(i, n.name, n.strings, this, t) : n.type === 6 && (l = new Et(i, this, t)), this._$AV.push(l), n = r[++c];
      }
      a !== n?.index && (i = $.nextNode(), a++);
    }
    return $.currentNode = _, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = w(this, t, e), C(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== A && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : bt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== g && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(_.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = z.createElement(it(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const i = new _t(o, this), a = i.u(this.options);
      i.p(e), this.T(a), this._$AH = i;
    }
  }
  _$AC(t) {
    let e = X.get(t.strings);
    return e === void 0 && X.set(t.strings, e = new z(t)), e;
  }
  k(t) {
    D(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const i of t) o === e.length ? e.push(r = new M(this.O(k()), this.O(k()), this, this.options)) : r = e[o], r._$AI(i), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const r = F(t).nextSibling;
      F(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class O {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, i) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = g;
  }
  _$AI(t, e = this, r, o) {
    const i = this.strings;
    let a = !1;
    if (i === void 0) t = w(this, t, e, 0), a = !C(t) || t !== this._$AH && t !== A, a && (this._$AH = t);
    else {
      const c = t;
      let n, l;
      for (t = i[0], n = 0; n < i.length - 1; n++) l = w(this, c[r + n], e, n), l === A && (l = this._$AH[n]), a ||= !C(l) || l !== this._$AH[n], l === g ? t = g : t !== g && (t += (l ?? "") + i[n + 1]), this._$AH[n] = l;
    }
    a && !o && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class xt extends O {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
class At extends O {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== g);
  }
}
class wt extends O {
  constructor(t, e, r, o, i) {
    super(t, e, r, o, i), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? g) === A) return;
    const r = this._$AH, o = t === g && r !== g || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, i = t !== g && (r === g || o);
    o && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Et {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const St = j.litHtmlPolyfillSupport;
St?.(z, M), (j.litHtmlVersions ??= []).push("3.3.2");
const kt = (s, t, e) => {
  const r = e?.renderBefore ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const i = e?.renderBefore ?? null;
    r._$litPart$ = o = new M(t.insertBefore(k(), i), i, void 0, e ?? {});
  }
  return o._$AI(s), o;
};
const B = globalThis;
class d extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = kt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return A;
  }
}
d._$litElement$ = !0, d.finalized = !0, B.litElementHydrateSupport?.({ LitElement: d });
const Ct = B.litElementPolyfillSupport;
Ct?.({ LitElement: d });
(B.litElementVersions ??= []).push("4.2.2");
const zt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.header{display:flex;align-items:center;justify-content:space-between;padding:var(--oc-spacing-24);background-color:var(--oc-theme-color-background-knockout)}.logo{width:40px;height:40px;background-color:var(--oc-theme-color-background-brand-knockout);border-radius:50%}.logo-link{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.primary-nav__list{display:flex;gap:var(--oc-spacing-24);list-style:none;margin:0;padding:0}.primary-nav__link{font-family:var(--oc-theme-typography-body-default-font-family);font-size:var(--oc-theme-typography-body-default-font-size);line-height:var(--oc-theme-typography-body-default-line-height);font-weight:var(--oc-theme-typography-body-default-font-weight);letter-spacing:var(--oc-theme-typography-body-default-letter-spacing);text-transform:var(--oc-theme-typography-body-default-text-transform);color:var(--oc-theme-color-content-knockout);text-decoration:none;transition:opacity var(--oc-theme-animation-fade-quick) var(--oc-theme-animation-ease)}.primary-nav__link:hover{opacity:.8}";
class Mt extends d {
  static get styles() {
    return f(zt);
  }
  render() {
    return p`
			<header class="header">
				<div class="logo">
					<a href="./index.html" class="logo-link">Our Company</a>
				</div>
				<nav class="primary-nav">
					<ul class="primary-nav__list">
						<li class="primary-nav__item">
							<a href="./services.html" class="primary-nav__link">Services</a>
						</li>
						<li class="primary-nav__item">
							<a href="./about.html" class="primary-nav__link">About</a>
						</li>
						<li class="primary-nav__item">
							<a href="./contact.html" class="primary-nav__link">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		`;
  }
}
customElements.define("my-header", Mt);
const Pt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.footer{display:flex;flex-direction:column;gap:var(--oc-spacing-0);padding:var(--oc-spacing-12) 0;background-color:var(--oc-theme-color-background-subtle)}.footer__copyright{font-family:var(--oc-theme-typography-body-sm-font-family);font-size:var(--oc-theme-typography-body-sm-font-size);line-height:var(--oc-theme-typography-body-sm-line-height);font-weight:var(--oc-theme-typography-body-sm-font-weight);letter-spacing:var(--oc-theme-typography-body-sm-letter-spacing);text-transform:var(--oc-theme-typography-body-sm-text-transform);color:var(--oc-theme-color-content-subtle);margin:0;text-align:center}.footer-nav__list{display:flex;gap:var(--oc-spacing-24);justify-content:center;list-style:none;padding:0;margin:0}.footer-nav__link{color:var(--oc-theme-color-content-subtle);font-family:var(--oc-theme-typography-body-default-font-family);font-size:var(--oc-theme-typography-body-default-font-size);line-height:var(--oc-theme-typography-body-default-line-height);font-weight:var(--oc-theme-typography-body-default-font-weight);letter-spacing:var(--oc-theme-typography-body-default-letter-spacing);text-transform:var(--oc-theme-typography-body-default-text-transform);text-decoration:none}";
class Ut extends d {
  static get styles() {
    return f(Pt);
  }
  render() {
    return p`
			<footer class="footer">
				<nav class="footer-nav">
					<ul class="footer-nav__list">
						<li class="footer-nav__item">
							<a href="./services.html" class="footer-nav__link">Services</a>
						</li>
						<li class="footer-nav__item">
							<a href="./about.html" class="footer-nav__link">About</a>
						</li>
						<li class="footer-nav__item">
							<a href="./contact.html" class="footer-nav__link">Contact</a>
						</li>
					</ul>
				</nav>
				<p class="footer__copyright">
					&copy; 2026 My Company. All rights reserved.
				</p>
			</footer>
		`;
  }
}
customElements.define("my-footer", Ut);
const Ht = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.hero{text-align:center}.hero__heading{margin-block-end:var(--oc-spacing-24)}.hero__description{display:block;max-width:672px;margin:0 auto var(--oc-spacing-32)}";
const at = /* @__PURE__ */ Symbol.for(""), Nt = (s) => {
  if (s?.r === at) return s?._$litStatic$;
}, Ot = (s) => ({ _$litStatic$: s, r: at }), Y = /* @__PURE__ */ new Map(), Tt = (s) => (t, ...e) => {
  const r = e.length;
  let o, i;
  const a = [], c = [];
  let n, l = 0, y = !1;
  for (; l < r; ) {
    for (n = t[l]; l < r && (i = e[l], (o = Nt(i)) !== void 0); ) n += o + t[++l], y = !0;
    l !== r && c.push(i), a.push(n), l++;
  }
  if (l === r && a.push(t[r]), y) {
    const h = a.join("$$lit$$");
    (t = Y.get(h)) === void 0 && (a.raw = a, Y.set(h, t = a)), e = c;
  }
  return s(t, ...e);
}, Rt = Tt(p), Lt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.heading{margin:0}.heading--title-lg{font-family:var(--oc-theme-typography-title-lg-font-family);font-size:var(--oc-theme-typography-title-lg-font-size);font-weight:var(--oc-theme-typography-title-lg-font-weight);line-height:var(--oc-theme-typography-title-lg-line-height);letter-spacing:var(--oc-theme-typography-title-lg-letter-spacing);text-transform:var(--oc-theme-typography-title-lg-text-transform)}.heading--title{font-family:var(--oc-theme-typography-title-default-font-family);font-size:var(--oc-theme-typography-title-default-font-size);font-weight:var(--oc-theme-typography-title-default-font-weight);line-height:var(--oc-theme-typography-title-default-line-height);letter-spacing:var(--oc-theme-typography-title-default-letter-spacing);text-transform:var(--oc-theme-typography-title-default-text-transform)}.heading--title-sm{font-family:var(--oc-theme-typography-title-sm-font-family);font-size:var(--oc-theme-typography-title-sm-font-size);font-weight:var(--oc-theme-typography-title-sm-font-weight);line-height:var(--oc-theme-typography-title-sm-line-height);letter-spacing:var(--oc-theme-typography-title-sm-letter-spacing);text-transform:var(--oc-theme-typography-title-sm-text-transform)}", jt = ["h1", "h2", "h3", "h4", "h5", "h6"];
class Dt extends d {
  static properties = {
    tagName: { type: String, reflect: !0, attribute: "tag-name" },
    variant: { type: String, reflect: !0 }
  };
  static get styles() {
    return f(Lt);
  }
  constructor() {
    super(), this.tagName = "h2", this.variant = "title";
  }
  get _tag() {
    const t = (this.tagName || "").toLowerCase();
    return jt.includes(t) ? t : "h2";
  }
  render() {
    const t = Ot(this._tag);
    return Rt`<${t} class="heading ${this.variant ? `heading--${this.variant}` : ""}"><slot></slot></${t}>`;
  }
}
customElements.define("my-heading", Dt);
const Bt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.text-passage p{margin-block-end:32px}.text-passage :last-child{margin-block-end:0}.text-passage--lg{font-family:var(--oc-theme-typography-body-lg-font-family);font-size:var(--oc-theme-typography-body-lg-font-size);line-height:var(--oc-theme-typography-body-lg-line-height);letter-spacing:var(--oc-theme-typography-body-lg-letter-spacing);text-transform:var(--oc-theme-typography-body-lg-text-transform);font-weight:var(--oc-theme-typography-body-lg-font-weight)}";
class It extends d {
  static get styles() {
    return f(Bt);
  }
  render() {
    return p`<div class="text-passage"><slot></slot></div>`;
  }
}
customElements.define("my-text-passage", It);
const qt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.button{display:inline-block;padding:var(--oc-spacing-12) var(--oc-spacing-24);background-color:var(--oc-theme-button-primary-color-background-default);color:var(--oc-theme-button-primary-color-content-default);font-family:var(--oc-theme-typography-label-default-font-family);font-size:var(--oc-theme-typography-label-default-font-size);line-height:var(--oc-theme-typography-label-default-line-height);letter-spacing:var(--oc-theme-typography-label-default-letter-spacing);text-transform:var(--oc-theme-typography-label-default-text-transform);font-weight:var(--oc-theme-typography-label-default-font-weight);border:var(--oc-theme-border-width-sm) solid var(--oc-theme-button-primary-color-border-default);border-radius:var(--oc-theme-border-radius-sm);cursor:pointer;transition:background-color var(--oc-theme-animation-fade-quick) var(--oc-theme-animation-ease)}.button:hover{background-color:var(--oc-theme-button-primary-color-background-hover);color:var(--oc-theme-button-primary-color-content-hover)}";
class Wt extends d {
  static properties = {
    type: { type: String }
  };
  static get styles() {
    return f(qt);
  }
  constructor() {
    super(), this.type = "button";
  }
  render() {
    return p`
			<button class="button" type="${this.type}">
				<slot></slot>
			</button>
		`;
  }
}
customElements.define("my-button", Wt);
class Vt extends d {
  static get styles() {
    return f(Ht);
  }
  render() {
    return p`
			<section class="hero">
				<my-heading variant="title-lg" tagName="h1" class="hero__heading">
					Welcome to Our Company
				</my-heading>
				<my-text-passage class="hero__description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</my-text-passage>
				<my-button>Get Started</my-button>
			</section>
		`;
  }
}
customElements.define("my-hero", Vt);
const Ft = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.band{padding:var(--oc-spacing-48) 0;background:var(--oc-theme-color-background-brand)}";
class Gt extends d {
  static get styles() {
    return f(Ft);
  }
  render() {
    return p`
			<div class="band">
				<slot></slot>
			</div>
		`;
  }
}
customElements.define("my-band", Gt);
const Zt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.layout-container{margin:0 auto;padding:0 var(--oc-spacing-24);max-width:1143px}.layout-container--narrow{max-width:672px}";
class Jt extends d {
  static properties = {
    variant: { type: String, reflect: !0 }
  };
  static get styles() {
    return f(Zt);
  }
  constructor() {
    super(), this.variant = "";
  }
  render() {
    return p`
			<div
				class="layout-container ${this.variant === "narrow" ? "layout-container--narrow" : ""}"
			>
				<slot></slot>
			</div>
		`;
  }
}
customElements.define("my-layout-container", Jt);
const Kt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.card{display:flex;flex-direction:column;padding:var(--oc-spacing-24);gap:var(--oc-spacing-16);background-color:var(--oc-theme-color-background-default);border:var(--oc-theme-border-width-sm) solid var(--oc-theme-color-border-subtle);border-radius:var(--oc-theme-border-radius-sm);text-align:left}";
class Qt extends d {
  static properties = {
    heading: { type: String },
    description: { type: String }
  };
  static get styles() {
    return f(Kt);
  }
  constructor() {
    super(), this.heading = "", this.description = "";
  }
  render() {
    return p`
			<article class="card">
				<my-heading variant="title-sm">${this.heading}</my-heading>
				<my-text-passage>${this.description}</my-text-passage>
			</article>
		`;
  }
}
customElements.define("my-card", Qt);
const Xt = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.grid{display:grid;gap:var(--oc-spacing-24)}.grid--3up{grid-template-columns:repeat(3,1fr)}";
class Yt extends d {
  static get styles() {
    return f(Xt);
  }
  static properties = {
    variant: { type: String, reflect: !0 }
  };
  constructor() {
    super(), this.variant = "";
  }
  render() {
    return p`
			<div class="grid ${this.variant ? `grid--${this.variant}` : ""}">
				<slot></slot>
			</div>
		`;
  }
}
customElements.define("my-grid", Yt);
const te = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.text-field{display:flex;flex-direction:column;gap:var(--oc-spacing-8)}.text-field__label{font-family:var(--oc-theme-typography-label-default-font-family);font-size:var(--oc-theme-typography-label-default-font-size);line-height:var(--oc-theme-typography-label-default-line-height);letter-spacing:var(--oc-theme-typography-label-default-letter-spacing);text-transform:var(--oc-theme-typography-label-default-text-transform);font-weight:var(--oc-theme-typography-label-default-font-weight);color:var(--oc-theme-color-content-default)}.text-field__input{padding:var(--oc-spacing-12) var(--oc-spacing-16);font-family:var(--oc-theme-typography-body-default-font-family);font-size:var(--oc-theme-typography-body-default-font-size);line-height:var(--oc-theme-typography-body-default-line-height);letter-spacing:var(--oc-theme-typography-body-default-letter-spacing);text-transform:var(--oc-theme-typography-body-default-text-transform);font-weight:var(--oc-theme-typography-body-default-font-weight);color:var(--oc-theme-color-content-default);border:var(--oc-theme-border-width-sm) solid var(--oc-theme-color-border-default);background-color:var(--oc-theme-color-background-default);border-radius:var(--oc-theme-border-radius-sm);outline:none;transition:border-color var(--oc-theme-animation-fade-quick) var(--oc-theme-animation-ease)}.text-field__input:focus{border-color:var(--oc-theme-focus-ring-color-border-default)}.text-field__input::placeholder{color:var(--oc-theme-color-content-subtle)}";
class ee extends d {
  static properties = {
    label: { type: String },
    placeholder: { type: String },
    type: { type: String }
  };
  static get styles() {
    return f(te);
  }
  constructor() {
    super(), this.label = "", this.placeholder = "", this.type = "text";
  }
  render() {
    return p`
			<div class="text-field">
				${this.label ? p`<label class="text-field__label">${this.label}</label>` : ""}
				<input
					class="text-field__input"
					type="${this.type}"
					placeholder="${this.placeholder}"
				/>
			</div>
		`;
  }
}
customElements.define("my-text-field", ee);
const re = ":host{display:block}.textarea-field{display:flex;flex-direction:column;gap:var(--oc-spacing-8)}.textarea-field__label{font-family:var(--oc-theme-typography-label-default-font-family);font-size:var(--oc-theme-typography-label-default-font-size);line-height:var(--oc-theme-typography-label-default-line-height);letter-spacing:var(--oc-theme-typography-label-default-letter-spacing);text-transform:var(--oc-theme-typography-label-default-text-transform);font-weight:var(--oc-theme-typography-label-default-font-weight);color:var(--oc-theme-color-content-default)}.textarea-field__textarea{min-height:162px;padding:var(--oc-spacing-8) var(--oc-spacing-12);font-family:var(--oc-theme-typography-body-default-font-family);font-size:var(--oc-theme-typography-body-default-font-size);line-height:var(--oc-theme-typography-body-default-line-height);letter-spacing:var(--oc-theme-typography-body-default-letter-spacing);text-transform:var(--oc-theme-typography-body-default-text-transform);font-weight:var(--oc-theme-typography-body-default-font-weight);color:var(--oc-theme-color-content-default);background-color:var(--oc-theme-color-background-default);border:var(--oc-theme-border-width-sm) solid var(--oc-theme-color-border-default);border-radius:var(--oc-theme-border-radius-sm);outline:none;resize:vertical;transition:border-color var(--oc-theme-animation-fade-quick) var(--oc-theme-animation-ease)}.textarea-field__textarea::placeholder{color:var(--oc-theme-color-content-subtle)}.textarea-field__textarea:focus{border-color:var(--oc-theme-focus-ring-color-border-default)}";
class oe extends d {
  static properties = {
    label: { type: String },
    placeholder: { type: String }
  };
  static get styles() {
    return f(re);
  }
  constructor() {
    super(), this.label = "", this.placeholder = "";
  }
  render() {
    return p`
			<div class="textarea-field">
				${this.label ? p`<label class="textarea-field__label">${this.label}</label>` : ""}
				<textarea
					class="textarea-field__textarea"
					placeholder="${this.placeholder}"
				></textarea>
			</div>
		`;
  }
}
customElements.define("my-textarea-field", oe);
const se = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.page-header{margin-block-end:var(--oc-spacing-16)}.page-header__description{margin-block-start:var(--oc-spacing-16)}";
class ie extends d {
  static properties = {
    heading: { type: String },
    description: { type: String }
  };
  static get styles() {
    return f(se);
  }
  constructor() {
    super(), this.heading = "", this.description = !1;
  }
  render() {
    return p`
			<div class="page-header">
				<my-heading tagName="h1" variant="title-lg">${this.heading}</my-heading>
				${this.description ? p`<my-text-passage class="page-header__description"
							>${this.description}</my-text-passage
						>` : ""}
			</div>
		`;
  }
}
customElements.define("my-page-header", ie);
const ae = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.section{text-align:center}.section__heading{margin-block-end:var(--oc-spacing-24)}";
class ne extends d {
  static properties = {
    heading: { type: String }
  };
  static get styles() {
    return f(ae);
  }
  constructor() {
    super(), this.heading = "";
  }
  render() {
    return p`
			<section class="section">
				${this.heading ? p`<my-heading tag-name="h2" variant="title" class="section__heading">${this.heading}</my-heading>` : ""}
				<slot></slot>
			</section>
		`;
  }
}
customElements.define("my-section", ne);
const le = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.form{display:flex;flex-direction:column;gap:var(--oc-spacing-24)}";
class he extends d {
  static get styles() {
    return f(le);
  }
  render() {
    return p`
			<form class="form">
				<slot></slot>
			</form>
		`;
  }
}
customElements.define("my-form", he);
const ce = ":host{display:block}*,*:before,*:after{box-sizing:border-box}.newsletter-form{display:flex;justify-content:center;gap:var(--oc-spacing-24)}.newsletter-form__text-field{max-width:302px;width:100%}";
class de extends d {
  static get styles() {
    return f(ce);
  }
  render() {
    return p`
			<form class="newsletter-form">
				<my-text-field
					type="email"
					placeholder="Enter your email"
					class="newsletter-form__text-field"
				></my-text-field>
				<my-button type="submit">Subscribe</my-button>
			</form>
		`;
  }
}
customElements.define("my-newsletter-form", de);

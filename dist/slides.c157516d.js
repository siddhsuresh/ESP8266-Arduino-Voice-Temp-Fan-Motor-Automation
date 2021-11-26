/*!
* reveal.js 4.2.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2021 Hakim El Hattab, https://hakim.se
*/ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Reveal = t();
}(this, function() {
    "use strict";
    var e1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
    }, t1 = function(e) {
        return e && e.Math == Math && e;
    }, n1 = t1("object" == typeof globalThis && globalThis) || t1("object" == typeof window && window) || t1("object" == typeof self && self) || t1("object" == typeof e1 && e1) || function() {
        return this;
    }() || Function("return this")(), i1 = {
    }, r1 = function(e) {
        try {
            return !!e();
        } catch (e2) {
            return !0;
        }
    }, a1 = !r1(function() {
        return 7 != Object.defineProperty({
        }, 1, {
            get: function() {
                return 7;
            }
        })[1];
    }), o1 = {
    }, s1 = {
    }.propertyIsEnumerable, l1 = Object.getOwnPropertyDescriptor, c1 = l1 && !s1.call({
        1: 2
    }, 1);
    o1.f = c1 ? function(e) {
        var t = l1(this, e);
        return !!t && t.enumerable;
    } : s1;
    var u1 = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    }, d1 = {
    }.toString, h1 = function(e) {
        return d1.call(e).slice(8, -1);
    }, f1 = h1, v1 = "".split, g1 = r1(function() {
        return !Object("z").propertyIsEnumerable(0);
    }) ? function(e) {
        return "String" == f1(e) ? v1.call(e, "") : Object(e);
    } : Object, p1 = function(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
    }, m1 = g1, y1 = p1, b1 = function(e) {
        return m1(y1(e));
    }, w1 = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
    }, S1 = w1, E1 = function(e, t) {
        if (!S1(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !S1(i = n.call(e))) return i;
        if ("function" == typeof (n = e.valueOf) && !S1(i = n.call(e))) return i;
        if (!t && "function" == typeof (n = e.toString) && !S1(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value");
    }, k1 = p1, A1 = function(e) {
        return Object(k1(e));
    }, R1 = A1, x1 = {
    }.hasOwnProperty, L1 = function(e, t) {
        return x1.call(R1(e), t);
    }, P1 = w1, C1 = n1.document, N1 = P1(C1) && P1(C1.createElement), I1 = function(e) {
        return N1 ? C1.createElement(e) : {
        };
    }, M1 = I1, T1 = !a1 && !r1(function() {
        return 7 != Object.defineProperty(M1("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), O1 = a1, D1 = o1, j1 = u1, F1 = b1, z1 = E1, H1 = L1, U1 = T1, B1 = Object.getOwnPropertyDescriptor;
    i1.f = O1 ? B1 : function(e, t) {
        if (e = F1(e), t = z1(t, !0), U1) try {
            return B1(e, t);
        } catch (e3) {
        }
        if (H1(e, t)) return j1(!D1.f.call(e, t), e[t]);
    };
    var _1 = {
    }, q1 = w1, W1 = function(e) {
        if (!q1(e)) throw TypeError(String(e) + " is not an object");
        return e;
    }, V1 = a1, K1 = T1, Y1 = W1, $1 = E1, X1 = Object.defineProperty;
    _1.f = V1 ? X1 : function(e, t, n) {
        if (Y1(e), t = $1(t, !0), Y1(n), K1) try {
            return X1(e, t, n);
        } catch (e4) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e;
    };
    var G1 = _1, J1 = u1, Q1 = a1 ? function(e, t, n) {
        return G1.f(e, t, J1(1, n));
    } : function(e, t, n) {
        return e[t] = n, e;
    }, Z1 = {
        exports: {
        }
    }, ee1 = n1, te1 = Q1, ne1 = function(e, t) {
        try {
            te1(ee1, e, t);
        } catch (n) {
            ee1[e] = t;
        }
        return t;
    }, ie1 = ne1, re1 = "__core-js_shared__", ae1 = n1[re1] || ie1(re1, {
    }), oe1 = ae1, se1 = Function.toString;
    "function" != typeof oe1.inspectSource && (oe1.inspectSource = function(e) {
        return se1.call(e);
    });
    var le1 = oe1.inspectSource, ce1 = le1, ue1 = n1.WeakMap, de1 = "function" == typeof ue1 && /native code/.test(ce1(ue1)), he1 = {
        exports: {
        }
    }, fe1 = ae1;
    (he1.exports = function(e, t) {
        return fe1[e] || (fe1[e] = void 0 !== t ? t : {
        });
    })("versions", []).push({
        version: "3.12.1",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
    var ve1, ge1, pe1, me1 = 0, ye1 = Math.random(), be1 = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++me1 + ye1).toString(36);
    }, we1 = he1.exports, Se1 = be1, Ee1 = we1("keys"), ke1 = function(e) {
        return Ee1[e] || (Ee1[e] = Se1(e));
    }, Ae1 = {
    }, Re1 = de1, xe1 = w1, Le1 = Q1, Pe1 = L1, Ce1 = ae1, Ne1 = ke1, Ie1 = Ae1, Me1 = "Object already initialized", Te1 = n1.WeakMap;
    if (Re1 || Ce1.state) {
        var Oe = Ce1.state || (Ce1.state = new Te1), De = Oe.get, je = Oe.has, Fe = Oe.set;
        ve1 = function(e, t) {
            if (je.call(Oe, e)) throw new TypeError(Me1);
            return t.facade = e, Fe.call(Oe, e, t), t;
        }, ge1 = function(e) {
            return De.call(Oe, e) || {
            };
        }, pe1 = function(e) {
            return je.call(Oe, e);
        };
    } else {
        var ze = Ne1("state");
        Ie1[ze] = !0, ve1 = function(e, t) {
            if (Pe1(e, ze)) throw new TypeError(Me1);
            return t.facade = e, Le1(e, ze, t), t;
        }, ge1 = function(e) {
            return Pe1(e, ze) ? e[ze] : {
            };
        }, pe1 = function(e) {
            return Pe1(e, ze);
        };
    }
    var He1 = {
        set: ve1,
        get: ge1,
        has: pe1,
        enforce: function(e) {
            return pe1(e) ? ge1(e) : ve1(e, {
            });
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!xe1(t) || (n = ge1(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n;
            };
        }
    }, Ue1 = n1, Be1 = Q1, _e1 = L1, qe1 = ne1, We1 = le1, Ve1 = He1.get, Ke1 = He1.enforce, Ye1 = String(String).split("String");
    (Z1.exports = function(e, t, n, i) {
        var r, a = !!i && !!i.unsafe, o = !!i && !!i.enumerable, s = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof t || _e1(n, "name") || Be1(n, "name", t), (r = Ke1(n)).source || (r.source = Ye1.join("string" == typeof t ? t : ""))), e !== Ue1 ? (a ? !s && e[t] && (o = !0) : delete e[t], o ? e[t] = n : Be1(e, t, n)) : o ? e[t] = n : qe1(t, n);
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && Ve1(this).source || We1(this);
    });
    var $e1 = n1, Xe1 = $e1, Ge1 = n1, Je1 = function(e) {
        return "function" == typeof e ? e : void 0;
    }, Qe1 = function(e, t) {
        return arguments.length < 2 ? Je1(Xe1[e]) || Je1(Ge1[e]) : Xe1[e] && Xe1[e][t] || Ge1[e] && Ge1[e][t];
    }, Ze1 = {
    }, et1 = Math.ceil, tt1 = Math.floor, nt1 = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? tt1 : et1)(e);
    }, it1 = nt1, rt1 = Math.min, at1 = function(e) {
        return e > 0 ? rt1(it1(e), 9007199254740991) : 0;
    }, ot1 = nt1, st1 = Math.max, lt = Math.min, ct = function(e, t) {
        var n = ot1(e);
        return n < 0 ? st1(n + t, 0) : lt(n, t);
    }, ut = b1, dt = at1, ht = ct, ft = function(e) {
        return function(t, n, i) {
            var r, a = ut(t), o = dt(a.length), s = ht(i, o);
            if (e && n != n) {
                for(; o > s;)if ((r = a[s++]) != r) return !0;
            } else for(; o > s; s++)if ((e || s in a) && a[s] === n) return e || s || 0;
            return !e && -1;
        };
    }, vt = {
        includes: ft(!0),
        indexOf: ft(!1)
    }, gt = L1, pt = b1, mt = vt.indexOf, yt = Ae1, bt = function(e, t) {
        var n, i = pt(e), r = 0, a = [];
        for(n in i)!gt(yt, n) && gt(i, n) && a.push(n);
        for(; t.length > r;)gt(i, n = t[r++]) && (~mt(a, n) || a.push(n));
        return a;
    }, wt = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
    ], St = bt, Et = wt.concat("length", "prototype");
    Ze1.f = Object.getOwnPropertyNames || function(e) {
        return St(e, Et);
    };
    var kt = {
    };
    kt.f = Object.getOwnPropertySymbols;
    var At = Ze1, Rt = kt, xt = W1, Lt = Qe1("Reflect", "ownKeys") || function(e) {
        var t = At.f(xt(e)), n = Rt.f;
        return n ? t.concat(n(e)) : t;
    }, Pt = L1, Ct = Lt, Nt = i1, It = _1, Mt = function(e, t) {
        for(var n = Ct(t), i = It.f, r = Nt.f, a = 0; a < n.length; a++){
            var o = n[a];
            Pt(e, o) || i(e, o, r(t, o));
        }
    }, Tt = r1, Ot = /#|\.prototype\./, Dt = function(e, t) {
        var n = Ft[jt(e)];
        return n == Ht || n != zt && ("function" == typeof t ? Tt(t) : !!t);
    }, jt = Dt.normalize = function(e) {
        return String(e).replace(Ot, ".").toLowerCase();
    }, Ft = Dt.data = {
    }, zt = Dt.NATIVE = "N", Ht = Dt.POLYFILL = "P", Ut = Dt, Bt = n1, _t = i1.f, qt = Q1, Wt = Z1.exports, Vt = ne1, Kt = Mt, Yt = Ut, $t = function(e, t) {
        var n, i, r, a, o, s = e.target, l = e.global, c = e.stat;
        if (n = l ? Bt : c ? Bt[s] || Vt(s, {
        }) : (Bt[s] || {
        }).prototype) for(i in t){
            if (a = t[i], r = e.noTargetGet ? (o = _t(n, i)) && o.value : n[i], !Yt(l ? i : s + (c ? "." : "#") + i, e.forced) && void 0 !== r) {
                if (typeof a == typeof r) continue;
                Kt(a, r);
            }
            (e.sham || r && r.sham) && qt(a, "sham", !0), Wt(n, i, a, e);
        }
    }, Xt = bt, Gt = wt, Jt = Object.keys || function(e) {
        return Xt(e, Gt);
    }, Qt = a1, Zt = r1, en = Jt, tn = kt, nn = o1, rn = A1, an = g1, on = Object.assign, sn = Object.defineProperty, ln = !on || Zt(function() {
        if (Qt && 1 !== on({
            b: 1
        }, on(sn({
        }, "a", {
            enumerable: !0,
            get: function() {
                sn(this, "b", {
                    value: 3,
                    enumerable: !1
                });
            }
        }), {
            b: 2
        })).b) return !0;
        var e5 = {
        }, t = {
        }, n = Symbol(), i = "abcdefghijklmnopqrst";
        return e5[n] = 7, i.split("").forEach(function(e) {
            t[e] = e;
        }), 7 != on({
        }, e5)[n] || en(on({
        }, t)).join("") != i;
    }) ? function(e, t) {
        for(var n = rn(e), i = arguments.length, r = 1, a = tn.f, o = nn.f; i > r;)for(var s, l = an(arguments[r++]), c = a ? en(l).concat(a(l)) : en(l), u = c.length, d = 0; u > d;)s = c[d++], Qt && !o.call(l, s) || (n[s] = l[s]);
        return n;
    } : on;
    $t({
        target: "Object",
        stat: !0,
        forced: Object.assign !== ln
    }, {
        assign: ln
    });
    var cn, un, dn = function(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e;
    }, hn = dn, fn = function(e, t, n2) {
        if (hn(e), void 0 === t) return e;
        switch(n2){
            case 0:
                return function() {
                    return e.call(t);
                };
            case 1:
                return function(n) {
                    return e.call(t, n);
                };
            case 2:
                return function(n, i) {
                    return e.call(t, n, i);
                };
            case 3:
                return function(n, i, r) {
                    return e.call(t, n, i, r);
                };
        }
        return function() {
            return e.apply(t, arguments);
        };
    }, vn = h1, gn = Array.isArray || function(e) {
        return "Array" == vn(e);
    }, pn = Qe1("navigator", "userAgent") || "", mn = pn, yn = n1.process, bn = yn && yn.versions, wn = bn && bn.v8;
    wn ? un = (cn = wn.split("."))[0] < 4 ? 1 : cn[0] + cn[1] : mn && (!(cn = mn.match(/Edge\/(\d+)/)) || cn[1] >= 74) && (cn = mn.match(/Chrome\/(\d+)/)) && (un = cn[1]);
    var Sn = un && +un, En = Sn, kn = r1, An = !!Object.getOwnPropertySymbols && !kn(function() {
        return !String(Symbol()) || !Symbol.sham && En && En < 41;
    }), Rn = An && !Symbol.sham && "symbol" == typeof Symbol.iterator, xn = n1, Ln = he1.exports, Pn = L1, Cn = be1, Nn = An, In = Rn, Mn = Ln("wks"), Tn = xn.Symbol, On = In ? Tn : Tn && Tn.withoutSetter || Cn, Dn = function(e) {
        return Pn(Mn, e) && (Nn || "string" == typeof Mn[e]) || (Nn && Pn(Tn, e) ? Mn[e] = Tn[e] : Mn[e] = On("Symbol." + e)), Mn[e];
    }, jn = w1, Fn = gn, zn = Dn("species"), Hn = function(e, t) {
        var n;
        return Fn(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Fn(n.prototype) ? jn(n) && null === (n = n[zn]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
    }, Un = fn, Bn = g1, _n = A1, qn = at1, Wn = Hn, Vn = [].push, Kn = function(e) {
        var t = 1 == e, n = 2 == e, i = 3 == e, r = 4 == e, a = 6 == e, o = 7 == e, s = 5 == e || a;
        return function(l, c, u, d) {
            for(var h, f, v = _n(l), g = Bn(v), p = Un(c, u, 3), m = qn(g.length), y = 0, b = d || Wn, w = t ? b(l, m) : n || o ? b(l, 0) : void 0; m > y; y++)if ((s || y in g) && (f = p(h = g[y], y, v), e)) {
                if (t) w[y] = f;
                else if (f) switch(e){
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return y;
                    case 2:
                        Vn.call(w, h);
                }
                else switch(e){
                    case 4:
                        return !1;
                    case 7:
                        Vn.call(w, h);
                }
            }
            return a ? -1 : i || r ? r : w;
        };
    }, Yn = {
        forEach: Kn(0),
        map: Kn(1),
        filter: Kn(2),
        some: Kn(3),
        every: Kn(4),
        find: Kn(5),
        findIndex: Kn(6),
        filterOut: Kn(7)
    }, $n = r1, Xn = Sn, Gn = Dn("species"), Jn = function(e) {
        return Xn >= 51 || !$n(function() {
            var t = [];
            return (t.constructor = {
            })[Gn] = function() {
                return {
                    foo: 1
                };
            }, 1 !== t[e](Boolean).foo;
        });
    }, Qn = Yn.map;
    $t({
        target: "Array",
        proto: !0,
        forced: !Jn("map")
    }, {
        map: function(e) {
            return Qn(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var Zn = E1, ei = _1, ti = u1, ni = function(e, t, n) {
        var i = Zn(t);
        i in e ? ei.f(e, i, ti(0, n)) : e[i] = n;
    }, ii = $t, ri = r1, ai = gn, oi = w1, si = A1, li = at1, ci = ni, ui = Hn, di = Jn, hi = Sn, fi = Dn("isConcatSpreadable"), vi = 9007199254740991, gi = "Maximum allowed index exceeded", pi = hi >= 51 || !ri(function() {
        var e = [];
        return e[fi] = !1, e.concat()[0] !== e;
    }), mi = di("concat"), yi = function(e) {
        if (!oi(e)) return !1;
        var t = e[fi];
        return void 0 !== t ? !!t : ai(e);
    };
    function bi(e, t2) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t2 && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, i);
        }
        return n;
    }
    function wi(e) {
        for(var t3 = 1; t3 < arguments.length; t3++){
            var n = null != arguments[t3] ? arguments[t3] : {
            };
            t3 % 2 ? bi(Object(n), !0).forEach(function(t) {
                xi(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bi(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function Si(e6) {
        return (Si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e6);
    }
    function Ei(e, t, n, i, r, a, o) {
        try {
            var s = e[a](o), l = s.value;
        } catch (e7) {
            return void n(e7);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, r);
    }
    function ki(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function Ai(e, t) {
        for(var n = 0; n < t.length; n++){
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    function Ri(e, t, n) {
        return t && Ai(e.prototype, t), n && Ai(e, n), e;
    }
    function xi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function Li(e8) {
        return (function(e) {
            if (Array.isArray(e)) return Pi(e);
        })(e8) || (function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        })(e8) || (function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Pi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pi(e, t);
        })(e8) || (function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
    }
    function Pi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for(var n = 0, i = new Array(t); n < t; n++)i[n] = e[n];
        return i;
    }
    ii({
        target: "Array",
        proto: !0,
        forced: !pi || !mi
    }, {
        concat: function(e) {
            var t, n, i, r, a, o = si(this), s = ui(o, 0), l = 0;
            for(t = -1, i = arguments.length; t < i; t++)if (yi(a = -1 === t ? o : arguments[t])) {
                if (l + (r = li(a.length)) > vi) throw TypeError(gi);
                for(n = 0; n < r; n++, l++)n in a && ci(s, l, a[n]);
            } else {
                if (l >= vi) throw TypeError(gi);
                ci(s, l++, a);
            }
            return s.length = l, s;
        }
    });
    var Ci = {
    };
    Ci[Dn("toStringTag")] = "z";
    var Ni = "[object z]" === String(Ci), Ii = Ni, Mi = h1, Ti = Dn("toStringTag"), Oi = "Arguments" == Mi(function() {
        return arguments;
    }()), Di = Ii ? Mi : function(e9) {
        var t, n, i;
        return void 0 === e9 ? "Undefined" : null === e9 ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t];
            } catch (e10) {
            }
        }(t = Object(e9), Ti)) ? n : Oi ? Mi(t) : "Object" == (i = Mi(t)) && "function" == typeof t.callee ? "Arguments" : i;
    }, ji = Di, Fi = Ni ? {
    }.toString : function() {
        return "[object " + ji(this) + "]";
    }, zi = Ni, Hi = Z1.exports, Ui = Fi;
    zi || Hi(Object.prototype, "toString", Ui, {
        unsafe: !0
    });
    var Bi = n1.Promise, _i = Z1.exports, qi = w1, Wi = W1, Vi = function(e) {
        if (!qi(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
    }, Ki = Object.setPrototypeOf || ("__proto__" in {
    } ? function() {
        var e, t = !1, n3 = {
        };
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n3, []), t = n3 instanceof Array;
        } catch (e11) {
        }
        return function(n, i) {
            return Wi(n), Vi(i), t ? e.call(n, i) : n.__proto__ = i, n;
        };
    }() : void 0), Yi = _1.f, $i = L1, Xi = Dn("toStringTag"), Gi = function(e, t, n) {
        e && !$i(e = n ? e : e.prototype, Xi) && Yi(e, Xi, {
            configurable: !0,
            value: t
        });
    }, Ji = Qe1, Qi = _1, Zi = a1, er = Dn("species"), tr = {
    }, nr = tr, ir = Dn("iterator"), rr = Array.prototype, ar = function(e) {
        return void 0 !== e && (nr.Array === e || rr[ir] === e);
    }, or = Di, sr = tr, lr = Dn("iterator"), cr = function(e) {
        if (null != e) return e[lr] || e["@@iterator"] || sr[or(e)];
    }, ur = W1, dr = function(e) {
        var t = e.return;
        if (void 0 !== t) return ur(t.call(e)).value;
    }, hr = W1, fr = ar, vr = at1, gr = fn, pr = cr, mr = dr, yr = function(e, t) {
        this.stopped = e, this.result = t;
    }, br = Dn("iterator"), wr = !1;
    try {
        var Sr = 0, Er = {
            next: function() {
                return {
                    done: !!Sr++
                };
            },
            return: function() {
                wr = !0;
            }
        };
        Er[br] = function() {
            return this;
        }, Array.from(Er, function() {
            throw 2;
        });
    } catch (e12) {
    }
    var kr, Ar, Rr, xr = function(e, t) {
        if (!t && !wr) return !1;
        var n = !1;
        try {
            var i = {
            };
            i[br] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        };
                    }
                };
            }, e(i);
        } catch (e13) {
        }
        return n;
    }, Lr = W1, Pr = dn, Cr = Dn("species"), Nr = function(e, t) {
        var n, i = Lr(e).constructor;
        return void 0 === i || null == (n = Lr(i)[Cr]) ? t : Pr(n);
    }, Ir = Qe1("document", "documentElement"), Mr = /(?:iphone|ipod|ipad).*applewebkit/i.test(pn), Tr = "process" == h1(n1.process), Or = n1, Dr = r1, jr = fn, Fr = Ir, zr = I1, Hr = Mr, Ur = Tr, Br = Or.location, _r = Or.setImmediate, qr = Or.clearImmediate, Wr = Or.process, Vr = Or.MessageChannel, Kr = Or.Dispatch, Yr = 0, $r = {
    }, Xr = "onreadystatechange", Gr = function(e) {
        if ($r.hasOwnProperty(e)) {
            var t = $r[e];
            delete $r[e], t();
        }
    }, Jr = function(e) {
        return function() {
            Gr(e);
        };
    }, Qr = function(e) {
        Gr(e.data);
    }, Zr = function(e) {
        Or.postMessage(e + "", Br.protocol + "//" + Br.host);
    };
    _r && qr || (_r = function(e) {
        for(var t = [], n = 1; arguments.length > n;)t.push(arguments[n++]);
        return $r[++Yr] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t);
        }, kr(Yr), Yr;
    }, qr = function(e) {
        delete $r[e];
    }, Ur ? kr = function(e) {
        Wr.nextTick(Jr(e));
    } : Kr && Kr.now ? kr = function(e) {
        Kr.now(Jr(e));
    } : Vr && !Hr ? (Rr = (Ar = new Vr).port2, Ar.port1.onmessage = Qr, kr = jr(Rr.postMessage, Rr, 1)) : Or.addEventListener && "function" == typeof postMessage && !Or.importScripts && Br && "file:" !== Br.protocol && !Dr(Zr) ? (kr = Zr, Or.addEventListener("message", Qr, !1)) : kr = Xr in zr("script") ? function(e) {
        Fr.appendChild(zr("script")).onreadystatechange = function() {
            Fr.removeChild(this), Gr(e);
        };
    } : function(e) {
        setTimeout(Jr(e), 0);
    });
    var ea, ta, na, ia, ra, aa, oa, sa, la = {
        set: _r,
        clear: qr
    }, ca = /web0s(?!.*chrome)/i.test(pn), ua = n1, da = i1.f, ha = la.set, fa = Mr, va = ca, ga = Tr, pa = ua.MutationObserver || ua.WebKitMutationObserver, ma = ua.document, ya = ua.process, ba = ua.Promise, wa = da(ua, "queueMicrotask"), Sa = wa && wa.value;
    Sa || (ea = function() {
        var e, t;
        for(ga && (e = ya.domain) && e.exit(); ta;){
            t = ta.fn, ta = ta.next;
            try {
                t();
            } catch (e) {
                throw ta ? ia() : na = void 0, e;
            }
        }
        na = void 0, e && e.enter();
    }, fa || ga || va || !pa || !ma ? ba && ba.resolve ? ((oa = ba.resolve(void 0)).constructor = ba, sa = oa.then, ia = function() {
        sa.call(oa, ea);
    }) : ia = ga ? function() {
        ya.nextTick(ea);
    } : function() {
        ha.call(ua, ea);
    } : (ra = !0, aa = ma.createTextNode(""), new pa(ea).observe(aa, {
        characterData: !0
    }), ia = function() {
        aa.data = ra = !ra;
    }));
    var Ea = Sa || function(e) {
        var t = {
            fn: e,
            next: void 0
        };
        na && (na.next = t), ta || (ta = t, ia()), na = t;
    }, ka = {
    }, Aa = dn, Ra = function(e14) {
        var t, n;
        this.promise = new e14(function(e, i) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = i;
        }), this.resolve = Aa(t), this.reject = Aa(n);
    };
    ka.f = function(e) {
        return new Ra(e);
    };
    var xa, La, Pa, Ca, Na = W1, Ia = w1, Ma = ka, Ta = n1, Oa = "object" == typeof window, Da = $t, ja = n1, Fa = Qe1, za = Bi, Ha = Z1.exports, Ua = function(e, t, n) {
        for(var i in t)_i(e, i, t[i], n);
        return e;
    }, Ba = Ki, _a = Gi, qa = function(e) {
        var t = Ji(e), n = Qi.f;
        Zi && t && !t[er] && n(t, er, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    }, Wa = w1, Va = dn, Ka = function(e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
    }, Ya = le1, $a = function(e15, t, n) {
        var i, r, a, o, s, l, c, u = n && n.that, d = !(!n || !n.AS_ENTRIES), h = !(!n || !n.IS_ITERATOR), f = !(!n || !n.INTERRUPTED), v = gr(t, u, 1 + d + f), g = function(e) {
            return i && mr(i), new yr(!0, e);
        }, p = function(e) {
            return d ? (hr(e), f ? v(e[0], e[1], g) : v(e[0], e[1])) : f ? v(e, g) : v(e);
        };
        if (h) i = e15;
        else {
            if ("function" != typeof (r = pr(e15))) throw TypeError("Target is not iterable");
            if (fr(r)) {
                for(a = 0, o = vr(e15.length); o > a; a++)if ((s = p(e15[a])) && s instanceof yr) return s;
                return new yr(!1);
            }
            i = r.call(e15);
        }
        for(l = i.next; !(c = l.call(i)).done;){
            try {
                s = p(c.value);
            } catch (e) {
                throw mr(i), e;
            }
            if ("object" == typeof s && s && s instanceof yr) return s;
        }
        return new yr(!1);
    }, Xa = xr, Ga = Nr, Ja = la.set, Qa = Ea, Za = function(e, t) {
        if (Na(e), Ia(t) && t.constructor === e) return t;
        var n = Ma.f(e);
        return (0, n.resolve)(t), n.promise;
    }, eo = function(e, t) {
        var n = Ta.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    }, to = ka, no = function(e) {
        try {
            return {
                error: !1,
                value: e()
            };
        } catch (e16) {
            return {
                error: !0,
                value: e16
            };
        }
    }, io = He1, ro = Ut, ao = Oa, oo = Tr, so = Sn, lo = Dn("species"), co = "Promise", uo = io.get, ho = io.set, fo = io.getterFor(co), vo = za && za.prototype, go = za, po = vo, mo = ja.TypeError, yo = ja.document, bo = ja.process, wo = to.f, So = wo, Eo = !!(yo && yo.createEvent && ja.dispatchEvent), ko = "function" == typeof PromiseRejectionEvent, Ao = "unhandledrejection", Ro = !1, xo = ro(co, function() {
        var e17 = Ya(go) !== String(go);
        if (!e17 && 66 === so) return !0;
        if (so >= 51 && /native code/.test(go)) return !1;
        var t = new go(function(e) {
            e(1);
        }), n = function(e) {
            e(function() {
            }, function() {
            });
        };
        return (t.constructor = {
        })[lo] = n, !(Ro = t.then(function() {
        }) instanceof n) || !e17 && ao && !ko;
    }), Lo = xo || !Xa(function(e) {
        go.all(e).catch(function() {
        });
    }), Po = function(e) {
        var t;
        return !(!Wa(e) || "function" != typeof (t = e.then)) && t;
    }, Co = function(e18, t) {
        if (!e18.notified) {
            e18.notified = !0;
            var n = e18.reactions;
            Qa(function() {
                for(var i = e18.value, r = 1 == e18.state, a = 0; n.length > a;){
                    var o, s, l, c = n[a++], u = r ? c.ok : c.fail, d = c.resolve, h = c.reject, f = c.domain;
                    try {
                        u ? (r || (2 === e18.rejection && To(e18), e18.rejection = 1), !0 === u ? o = i : (f && f.enter(), o = u(i), f && (f.exit(), l = !0)), o === c.promise ? h(mo("Promise-chain cycle")) : (s = Po(o)) ? s.call(o, d, h) : d(o)) : h(i);
                    } catch (e) {
                        f && !l && f.exit(), h(e);
                    }
                }
                e18.reactions = [], e18.notified = !1, t && !e18.rejection && Io(e18);
            });
        }
    }, No = function(e, t, n) {
        var i, r;
        Eo ? ((i = yo.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), ja.dispatchEvent(i)) : i = {
            promise: t,
            reason: n
        }, !ko && (r = ja["on" + e]) ? r(i) : e === Ao && eo("Unhandled promise rejection", n);
    }, Io = function(e) {
        Ja.call(ja, function() {
            var t, n = e.facade, i = e.value;
            if (Mo(e) && (t = no(function() {
                oo ? bo.emit("unhandledRejection", i, n) : No(Ao, n, i);
            }), e.rejection = oo || Mo(e) ? 2 : 1, t.error)) throw t.value;
        });
    }, Mo = function(e) {
        return 1 !== e.rejection && !e.parent;
    }, To = function(e) {
        Ja.call(ja, function() {
            var t = e.facade;
            oo ? bo.emit("rejectionHandled", t) : No("rejectionhandled", t, e.value);
        });
    }, Oo = function(e, t, n) {
        return function(i) {
            e(t, i, n);
        };
    }, Do = function(e, t, n) {
        e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, Co(e, !0));
    }, jo = function(e, t4, n4) {
        if (!e.done) {
            e.done = !0, n4 && (e = n4);
            try {
                if (e.facade === t4) throw mo("Promise can't be resolved itself");
                var i = Po(t4);
                i ? Qa(function() {
                    var n = {
                        done: !1
                    };
                    try {
                        i.call(t4, Oo(jo, n, e), Oo(Do, n, e));
                    } catch (t) {
                        Do(n, t, e);
                    }
                }) : (e.value = t4, e.state = 1, Co(e, !1));
            } catch (t) {
                Do({
                    done: !1
                }, t, e);
            }
        }
    };
    if (xo && (po = (go = function(e) {
        Ka(this, go, co), Va(e), xa.call(this);
        var t = uo(this);
        try {
            e(Oo(jo, t), Oo(Do, t));
        } catch (e19) {
            Do(t, e19);
        }
    }).prototype, (xa = function(e) {
        ho(this, {
            type: co,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        });
    }).prototype = Ua(po, {
        then: function(e, t) {
            var n = fo(this), i = wo(Ga(this, go));
            return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = oo ? bo.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && Co(n, !1), i.promise;
        },
        catch: function(e) {
            return this.then(void 0, e);
        }
    }), La = function() {
        var e = new xa, t = uo(e);
        this.promise = e, this.resolve = Oo(jo, t), this.reject = Oo(Do, t);
    }, to.f = wo = function(e) {
        return e === go || e === Pa ? new La(e) : So(e);
    }, "function" == typeof za && vo !== Object.prototype)) {
        Ca = vo.then, Ro || (Ha(vo, "then", function(e20, t5) {
            var n = this;
            return new go(function(e, t) {
                Ca.call(n, e, t);
            }).then(e20, t5);
        }, {
            unsafe: !0
        }), Ha(vo, "catch", po.catch, {
            unsafe: !0
        }));
        try {
            delete vo.constructor;
        } catch (e) {
        }
        Ba && Ba(vo, po);
    }
    Da({
        global: !0,
        wrap: !0,
        forced: xo
    }, {
        Promise: go
    }), _a(go, co, !1), qa(co), Pa = Fa(co), Da({
        target: co,
        stat: !0,
        forced: xo
    }, {
        reject: function(e) {
            var t = wo(this);
            return t.reject.call(void 0, e), t.promise;
        }
    }), Da({
        target: co,
        stat: !0,
        forced: xo
    }, {
        resolve: function(e) {
            return Za(this, e);
        }
    }), Da({
        target: co,
        stat: !0,
        forced: Lo
    }, {
        all: function(e21) {
            var t = this, n5 = wo(t), i = n5.resolve, r = n5.reject, a2 = no(function() {
                var n = Va(t.resolve), a = [], o = 0, s = 1;
                $a(e21, function(e22) {
                    var l = o++, c = !1;
                    a.push(void 0), s++, n.call(t, e22).then(function(e) {
                        c || (c = !0, a[l] = e, --s || i(a));
                    }, r);
                }), --s || i(a);
            });
            return a2.error && r(a2.value), n5.promise;
        },
        race: function(e23) {
            var t = this, n = wo(t), i = n.reject, r2 = no(function() {
                var r = Va(t.resolve);
                $a(e23, function(e) {
                    r.call(t, e).then(n.resolve, i);
                });
            });
            return r2.error && i(r2.value), n.promise;
        }
    });
    var Fo = r1, zo = function(e, t) {
        var n = [][e];
        return !!n && Fo(function() {
            n.call(null, t || function() {
                throw 1;
            }, 1);
        });
    }, Ho = Yn.forEach, Uo = n1, Bo = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }, _o = zo("forEach") ? [].forEach : function(e) {
        return Ho(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }, qo = Q1;
    for(var Wo in Bo){
        var Vo = Uo[Wo], Ko = Vo && Vo.prototype;
        if (Ko && Ko.forEach !== _o) try {
            qo(Ko, "forEach", _o);
        } catch (e) {
            Ko.forEach = _o;
        }
    }
    var Yo = W1, $o = dr, Xo = fn, Go = A1, Jo = function(e, t, n, i) {
        try {
            return i ? t(Yo(n)[0], n[1]) : t(n);
        } catch (t6) {
            throw $o(e), t6;
        }
    }, Qo = ar, Zo = at1, es = ni, ts = cr, ns = function(e) {
        var t, n, i, r, a, o, s = Go(e), l = "function" == typeof this ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, d = void 0 !== u, h = ts(s), f = 0;
        if (d && (u = Xo(u, c > 2 ? arguments[2] : void 0, 2)), null == h || l == Array && Qo(h)) for(n = new l(t = Zo(s.length)); t > f; f++)o = d ? u(s[f], f) : s[f], es(n, f, o);
        else for(a = (r = h.call(s)).next, n = new l; !(i = a.call(r)).done; f++)o = d ? Jo(r, u, [
            i.value,
            f
        ], !0) : i.value, es(n, f, o);
        return n.length = f, n;
    };
    $t({
        target: "Array",
        stat: !0,
        forced: !xr(function(e) {
            Array.from(e);
        })
    }, {
        from: ns
    });
    var is, rs, as, os = nt1, ss = p1, ls = function(e) {
        return function(t, n) {
            var i, r, a = String(ss(t)), o = os(n), s = a.length;
            return o < 0 || o >= s ? e ? "" : void 0 : (i = a.charCodeAt(o)) < 55296 || i > 56319 || o + 1 === s || (r = a.charCodeAt(o + 1)) < 56320 || r > 57343 ? e ? a.charAt(o) : i : e ? a.slice(o, o + 2) : r - 56320 + (i - 55296 << 10) + 65536;
        };
    }, cs = {
        codeAt: ls(!1),
        charAt: ls(!0)
    }, us = !r1(function() {
        function e() {
        }
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype;
    }), ds = L1, hs = A1, fs = us, vs = ke1("IE_PROTO"), gs = Object.prototype, ps = fs ? Object.getPrototypeOf : function(e) {
        return e = hs(e), ds(e, vs) ? e[vs] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? gs : null;
    }, ms = r1, ys = ps, bs = Q1, ws = L1, Ss = Dn("iterator"), Es = !1;
    [].keys && ("next" in (as = [].keys()) ? (rs = ys(ys(as))) !== Object.prototype && (is = rs) : Es = !0), (null == is || ms(function() {
        var e = {
        };
        return is[Ss].call(e) !== e;
    })) && (is = {
    }), ws(is, Ss) || bs(is, Ss, function() {
        return this;
    });
    var ks, As = {
        IteratorPrototype: is,
        BUGGY_SAFARI_ITERATORS: Es
    }, Rs = _1, xs = W1, Ls = Jt, Ps = a1 ? Object.defineProperties : function(e, t) {
        xs(e);
        for(var n, i = Ls(t), r = i.length, a = 0; r > a;)Rs.f(e, n = i[a++], t[n]);
        return e;
    }, Cs = W1, Ns = Ps, Is = wt, Ms = Ae1, Ts = Ir, Os = I1, Ds = ke1("IE_PROTO"), js = function() {
    }, Fs = function(e) {
        return "<script>" + e + "</" + "script>";
    }, zs = function() {
        try {
            ks = document.domain && new ActiveXObject("htmlfile");
        } catch (e24) {
        }
        var e25, t7;
        zs = ks ? (function(e) {
            e.write(Fs("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t;
        })(ks) : ((t7 = Os("iframe")).style.display = "none", Ts.appendChild(t7), t7.src = String("javascript:"), (e25 = t7.contentWindow.document).open(), e25.write(Fs("document.F=Object")), e25.close(), e25.F);
        for(var n = Is.length; n--;)delete zs.prototype[Is[n]];
        return zs();
    };
    Ms[Ds] = !0;
    var Hs = Object.create || function(e, t) {
        var n;
        return null !== e ? (js.prototype = Cs(e), n = new js, js.prototype = null, n[Ds] = e) : n = zs(), void 0 === t ? n : Ns(n, t);
    }, Us = As.IteratorPrototype, Bs = Hs, _s = u1, qs = Gi, Ws = tr, Vs = function() {
        return this;
    }, Ks = $t, Ys = function(e, t, n) {
        var i = t + " Iterator";
        return e.prototype = Bs(Us, {
            next: _s(1, n)
        }), qs(e, i, !1), Ws[i] = Vs, e;
    }, $s = ps, Xs = Ki, Gs = Gi, Js = Q1, Qs = Z1.exports, Zs = tr, el = As.IteratorPrototype, tl = As.BUGGY_SAFARI_ITERATORS, nl = Dn("iterator"), il = "keys", rl = "values", al = "entries", ol = function() {
        return this;
    }, sl = cs.charAt, ll = He1, cl = function(e26, t, n, i, r, a, o) {
        Ys(n, t, i);
        var s, l, c, u = function(e) {
            if (e === r && g) return g;
            if (!tl && e in f) return f[e];
            switch(e){
                case il:
                case rl:
                case al:
                    return function() {
                        return new n(this, e);
                    };
            }
            return function() {
                return new n(this);
            };
        }, d = t + " Iterator", h = !1, f = e26.prototype, v = f[nl] || f["@@iterator"] || r && f[r], g = !tl && v || u(r), p = "Array" == t && f.entries || v;
        if (p && (s = $s(p.call(new e26)), el !== Object.prototype && s.next && ($s(s) !== el && (Xs ? Xs(s, el) : "function" != typeof s[nl] && Js(s, nl, ol)), Gs(s, d, !0))), r == rl && v && v.name !== rl && (h = !0, g = function() {
            return v.call(this);
        }), f[nl] !== g && Js(f, nl, g), Zs[t] = g, r) {
            if (l = {
                values: u(rl),
                keys: a ? g : u(il),
                entries: u(al)
            }, o) for(c in l)(tl || h || !(c in f)) && Qs(f, c, l[c]);
            else Ks({
                target: t,
                proto: !0,
                forced: tl || h
            }, l);
        }
        return l;
    }, ul = "String Iterator", dl = ll.set, hl = ll.getterFor(ul);
    cl(String, "String", function(e) {
        dl(this, {
            type: ul,
            string: String(e),
            index: 0
        });
    }, function() {
        var e, t = hl(this), n = t.string, i = t.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (e = sl(n, i), t.index += e.length, {
            value: e,
            done: !1
        });
    });
    var fl = "\t\n\v\f\r                　\u2028\u2029\ufeff", vl = p1, gl = "[\t\n\v\f\r                　\u2028\u2029\ufeff]", pl = RegExp("^" + gl + gl + "*"), ml = RegExp(gl + gl + "*$"), yl = function(e) {
        return function(t) {
            var n = String(vl(t));
            return 1 & e && (n = n.replace(pl, "")), 2 & e && (n = n.replace(ml, "")), n;
        };
    }, bl = {
        start: yl(1),
        end: yl(2),
        trim: yl(3)
    }, wl = r1, Sl = fl, El = bl.trim;
    $t({
        target: "String",
        proto: !0,
        forced: function(e) {
            return wl(function() {
                return !!Sl[e]() || "​᠎" != "​᠎"[e]() || Sl[e].name !== e;
            });
        }("trim")
    }, {
        trim: function() {
            return El(this);
        }
    });
    var kl = {
    }, Al = b1, Rl = Ze1.f, xl = {
    }.toString, Ll = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    kl.f = function(e27) {
        return Ll && "[object Window]" == xl.call(e27) ? (function(e) {
            try {
                return Rl(e);
            } catch (e28) {
                return Ll.slice();
            }
        })(e27) : Rl(Al(e27));
    };
    var Pl = {
    }, Cl = Dn;
    Pl.f = Cl;
    var Nl = $e1, Il = L1, Ml = Pl, Tl = _1.f, Ol = $t, Dl = n1, jl = Qe1, Fl = a1, zl = An, Hl = Rn, Ul = r1, Bl = L1, _l = gn, ql = w1, Wl = W1, Vl = A1, Kl = b1, Yl = E1, $l = u1, Xl = Hs, Gl = Jt, Jl = Ze1, Ql = kl, Zl = kt, ec = i1, tc = _1, nc = o1, ic = Q1, rc = Z1.exports, ac = he1.exports, oc = Ae1, sc = be1, lc = Dn, cc = Pl, uc = function(e) {
        var t = Nl.Symbol || (Nl.Symbol = {
        });
        Il(t, e) || Tl(t, e, {
            value: Ml.f(e)
        });
    }, dc = Gi, hc = He1, fc = Yn.forEach, vc = ke1("hidden"), gc = "Symbol", pc = lc("toPrimitive"), mc = hc.set, yc = hc.getterFor(gc), bc = Object.prototype, wc = Dl.Symbol, Sc = jl("JSON", "stringify"), Ec = ec.f, kc = tc.f, Ac = Ql.f, Rc = nc.f, xc = ac("symbols"), Lc = ac("op-symbols"), Pc = ac("string-to-symbol-registry"), Cc = ac("symbol-to-string-registry"), Nc = ac("wks"), Ic = Dl.QObject, Mc = !Ic || !Ic.prototype || !Ic.prototype.findChild, Tc = Fl && Ul(function() {
        return 7 != Xl(kc({
        }, "a", {
            get: function() {
                return kc(this, "a", {
                    value: 7
                }).a;
            }
        })).a;
    }) ? function(e, t, n) {
        var i = Ec(bc, t);
        i && delete bc[t], kc(e, t, n), i && e !== bc && kc(bc, t, i);
    } : kc, Oc = function(e, t) {
        var n = xc[e] = Xl(wc.prototype);
        return mc(n, {
            type: gc,
            tag: e,
            description: t
        }), Fl || (n.description = t), n;
    }, Dc = Hl ? function(e) {
        return "symbol" == typeof e;
    } : function(e) {
        return Object(e) instanceof wc;
    }, jc = function(e, t, n) {
        e === bc && jc(Lc, t, n), Wl(e);
        var i = Yl(t, !0);
        return Wl(n), Bl(xc, i) ? (n.enumerable ? (Bl(e, vc) && e[vc][i] && (e[vc][i] = !1), n = Xl(n, {
            enumerable: $l(0, !1)
        })) : (Bl(e, vc) || kc(e, vc, $l(1, {
        })), e[vc][i] = !0), Tc(e, i, n)) : kc(e, i, n);
    }, Fc = function(e, t8) {
        Wl(e);
        var n = Kl(t8), i = Gl(n).concat(Bc(n));
        return fc(i, function(t) {
            Fl && !zc.call(n, t) || jc(e, t, n[t]);
        }), e;
    }, zc = function(e) {
        var t = Yl(e, !0), n = Rc.call(this, t);
        return !(this === bc && Bl(xc, t) && !Bl(Lc, t)) && (!(n || !Bl(this, t) || !Bl(xc, t) || Bl(this, vc) && this[vc][t]) || n);
    }, Hc = function(e, t) {
        var n = Kl(e), i = Yl(t, !0);
        if (n !== bc || !Bl(xc, i) || Bl(Lc, i)) {
            var r = Ec(n, i);
            return !r || !Bl(xc, i) || Bl(n, vc) && n[vc][i] || (r.enumerable = !0), r;
        }
    }, Uc = function(e29) {
        var t = Ac(Kl(e29)), n = [];
        return fc(t, function(e) {
            Bl(xc, e) || Bl(oc, e) || n.push(e);
        }), n;
    }, Bc = function(e30) {
        var t = e30 === bc, n = Ac(t ? Lc : Kl(e30)), i = [];
        return fc(n, function(e) {
            !Bl(xc, e) || t && !Bl(bc, e) || i.push(xc[e]);
        }), i;
    };
    (zl || (rc((wc = function() {
        if (this instanceof wc) throw TypeError("Symbol is not a constructor");
        var e31 = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, t = sc(e31), n = function(e) {
            this === bc && n.call(Lc, e), Bl(this, vc) && Bl(this[vc], t) && (this[vc][t] = !1), Tc(this, t, $l(1, e));
        };
        return Fl && Mc && Tc(bc, t, {
            configurable: !0,
            set: n
        }), Oc(t, e31);
    }).prototype, "toString", function() {
        return yc(this).tag;
    }), rc(wc, "withoutSetter", function(e) {
        return Oc(sc(e), e);
    }), nc.f = zc, tc.f = jc, ec.f = Hc, Jl.f = Ql.f = Uc, Zl.f = Bc, cc.f = function(e) {
        return Oc(lc(e), e);
    }, Fl && (kc(wc.prototype, "description", {
        configurable: !0,
        get: function() {
            return yc(this).description;
        }
    }), rc(bc, "propertyIsEnumerable", zc, {
        unsafe: !0
    }))), Ol({
        global: !0,
        wrap: !0,
        forced: !zl,
        sham: !zl
    }, {
        Symbol: wc
    }), fc(Gl(Nc), function(e) {
        uc(e);
    }), Ol({
        target: gc,
        stat: !0,
        forced: !zl
    }, {
        for: function(e) {
            var t = String(e);
            if (Bl(Pc, t)) return Pc[t];
            var n = wc(t);
            return Pc[t] = n, Cc[n] = t, n;
        },
        keyFor: function(e) {
            if (!Dc(e)) throw TypeError(e + " is not a symbol");
            if (Bl(Cc, e)) return Cc[e];
        },
        useSetter: function() {
            Mc = !0;
        },
        useSimple: function() {
            Mc = !1;
        }
    }), Ol({
        target: "Object",
        stat: !0,
        forced: !zl,
        sham: !Fl
    }, {
        create: function(e, t) {
            return void 0 === t ? Xl(e) : Fc(Xl(e), t);
        },
        defineProperty: jc,
        defineProperties: Fc,
        getOwnPropertyDescriptor: Hc
    }), Ol({
        target: "Object",
        stat: !0,
        forced: !zl
    }, {
        getOwnPropertyNames: Uc,
        getOwnPropertySymbols: Bc
    }), Ol({
        target: "Object",
        stat: !0,
        forced: Ul(function() {
            Zl.f(1);
        })
    }, {
        getOwnPropertySymbols: function(e) {
            return Zl.f(Vl(e));
        }
    }), Sc) && Ol({
        target: "JSON",
        stat: !0,
        forced: !zl || Ul(function() {
            var e = wc();
            return "[null]" != Sc([
                e
            ]) || "{}" != Sc({
                a: e
            }) || "{}" != Sc(Object(e));
        })
    }, {
        stringify: function(e32, t9, n) {
            for(var i, r = [
                e32
            ], a = 1; arguments.length > a;)r.push(arguments[a++]);
            if (i = t9, (ql(t9) || void 0 !== e32) && !Dc(e32)) return _l(t9) || (t9 = function(e, t) {
                if ("function" == typeof i && (t = i.call(this, e, t)), !Dc(t)) return t;
            }), r[1] = t9, Sc.apply(null, r);
        }
    });
    wc.prototype[pc] || ic(wc.prototype, pc, wc.prototype.valueOf), dc(wc, gc), oc[vc] = !0;
    var _c = $t, qc = a1, Wc = n1, Vc = L1, Kc = w1, Yc = _1.f, $c = Mt, Xc = Wc.Symbol;
    if (qc && "function" == typeof Xc && (!("description" in Xc.prototype) || void 0 !== Xc().description)) {
        var Gc = {
        }, Jc = function() {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), t = this instanceof Jc ? new Xc(e) : void 0 === e ? Xc() : Xc(e);
            return "" === e && (Gc[t] = !0), t;
        };
        $c(Jc, Xc);
        var Qc = Jc.prototype = Xc.prototype;
        Qc.constructor = Jc;
        var Zc = Qc.toString, eu = "Symbol(test)" == String(Xc("test")), tu = /^Symbol\((.*)\)[^)]+$/;
        Yc(Qc, "description", {
            configurable: !0,
            get: function() {
                var e = Kc(this) ? this.valueOf() : this, t = Zc.call(e);
                if (Vc(Gc, e)) return "";
                var n = eu ? t.slice(7, -1) : t.replace(tu, "$1");
                return "" === n ? void 0 : n;
            }
        }), _c({
            global: !0,
            forced: !0
        }, {
            Symbol: Jc
        });
    }
    var nu = W1, iu = {
    }, ru = r1;
    function au(e, t) {
        return RegExp(e, t);
    }
    iu.UNSUPPORTED_Y = ru(function() {
        var e = au("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd");
    }), iu.BROKEN_CARET = ru(function() {
        var e = au("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str");
    });
    var ou, su, lu = function() {
        var e = nu(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
    }, cu = iu, uu = he1.exports, du = RegExp.prototype.exec, hu = uu("native-string-replace", String.prototype.replace), fu = du, vu = (ou = /a/, su = /b*/g, du.call(ou, "a"), du.call(su, "a"), 0 !== ou.lastIndex || 0 !== su.lastIndex), gu = cu.UNSUPPORTED_Y || cu.BROKEN_CARET, pu = void 0 !== /()??/.exec("")[1];
    (vu || pu || gu) && (fu = function(e) {
        var t, n, i, r, a = this, o = gu && a.sticky, s = lu.call(a), l = a.source, c = 0, u = e;
        return o && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), n = new RegExp("^(?:" + l + ")", s)), pu && (n = new RegExp("^" + l + "$(?!\\s)", s)), vu && (t = a.lastIndex), i = du.call(o ? n : a, u), o ? i ? (i.input = i.input.slice(c), i[0] = i[0].slice(c), i.index = a.lastIndex, a.lastIndex += i[0].length) : a.lastIndex = 0 : vu && i && (a.lastIndex = a.global ? i.index + i[0].length : t), pu && i && i.length > 1 && hu.call(i[0], n, function() {
            for(r = 1; r < arguments.length - 2; r++)void 0 === arguments[r] && (i[r] = void 0);
        }), i;
    });
    var mu = fu;
    $t({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== mu
    }, {
        exec: mu
    });
    var yu = Z1.exports, bu = mu, wu = r1, Su = Dn, Eu = Q1, ku = Su("species"), Au = RegExp.prototype, Ru = !wu(function() {
        var e33 = /./;
        return e33.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            }, e;
        }, "7" !== "".replace(e33, "$<a>");
    }), xu = "$0" === "a".replace(/./, "$0"), Lu = Su("replace"), Pu = !!/./[Lu] && "" === /./[Lu]("a", "$0"), Cu = !wu(function() {
        var e = /(?:)/, t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }), Nu = function(e34, t10, n6, i2) {
        var r3 = Su(e34), a = !wu(function() {
            var t = {
            };
            return t[r3] = function() {
                return 7;
            }, 7 != ""[e34](t);
        }), o2 = a && !wu(function() {
            var t = !1, n = /a/;
            return "split" === e34 && ((n = {
            }).constructor = {
            }, n.constructor[ku] = function() {
                return n;
            }, n.flags = "", n[r3] = /./[r3]), n.exec = function() {
                return t = !0, null;
            }, n[r3](""), !t;
        });
        if (!a || !o2 || "replace" === e34 && (!Ru || !xu || Pu) || "split" === e34 && !Cu) {
            var s = /./[r3], l = n6(r3, ""[e34], function(e, t, n, i, r) {
                var o = t.exec;
                return o === bu || o === Au.exec ? a && !r ? {
                    done: !0,
                    value: s.call(t, n, i)
                } : {
                    done: !0,
                    value: e.call(n, t, i)
                } : {
                    done: !1
                };
            }, {
                REPLACE_KEEPS_$0: xu,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Pu
            }), c = l[0], u = l[1];
            yu(String.prototype, e34, c), yu(Au, r3, 2 == t10 ? function(e, t) {
                return u.call(e, this, t);
            } : function(e) {
                return u.call(e, this);
            });
        }
        i2 && Eu(Au[r3], "sham", !0);
    }, Iu = cs.charAt, Mu = function(e, t, n) {
        return t + (n ? Iu(e, t).length : 1);
    }, Tu = h1, Ou = mu, Du = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
            return i;
        }
        if ("RegExp" !== Tu(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return Ou.call(e, t);
    }, ju = W1, Fu = at1, zu = p1, Hu = Mu, Uu = Du;
    Nu("match", 1, function(e35, t11, n7) {
        return [
            function(t) {
                var n = zu(this), i = null == t ? void 0 : t[e35];
                return void 0 !== i ? i.call(t, n) : new RegExp(t)[e35](String(n));
            },
            function(e) {
                var i = n7(t11, e, this);
                if (i.done) return i.value;
                var r = ju(e), a = String(this);
                if (!r.global) return Uu(r, a);
                var o = r.unicode;
                r.lastIndex = 0;
                for(var s, l = [], c = 0; null !== (s = Uu(r, a));){
                    var u = String(s[0]);
                    l[c] = u, "" === u && (r.lastIndex = Hu(a, Fu(r.lastIndex), o)), c++;
                }
                return 0 === c ? null : l;
            }
        ];
    });
    var Bu = $t, _u = ct, qu = nt1, Wu = at1, Vu = A1, Ku = Hn, Yu = ni, $u = Jn("splice"), Xu = Math.max, Gu = Math.min, Ju = 9007199254740991, Qu = "Maximum allowed length exceeded";
    Bu({
        target: "Array",
        proto: !0,
        forced: !$u
    }, {
        splice: function(e, t) {
            var n, i, r, a, o, s, l = Vu(this), c = Wu(l.length), u = _u(e, c), d = arguments.length;
            if (0 === d ? n = i = 0 : 1 === d ? (n = 0, i = c - u) : (n = d - 2, i = Gu(Xu(qu(t), 0), c - u)), c + n - i > Ju) throw TypeError(Qu);
            for(r = Ku(l, i), a = 0; a < i; a++)(o = u + a) in l && Yu(r, a, l[o]);
            if (r.length = i, n < i) {
                for(a = u; a < c - i; a++)s = a + n, (o = a + i) in l ? l[s] = l[o] : delete l[s];
                for(a = c; a > c - i + n; a--)delete l[a - 1];
            } else if (n > i) for(a = c - i; a > u; a--)s = a + n - 1, (o = a + i - 1) in l ? l[s] = l[o] : delete l[s];
            for(a = 0; a < n; a++)l[a + u] = arguments[a + 2];
            return l.length = c - i + n, r;
        }
    });
    var Zu = w1, ed = h1, td = Dn("match"), nd = Nu, id = function(e) {
        var t;
        return Zu(e) && (void 0 !== (t = e[td]) ? !!t : "RegExp" == ed(e));
    }, rd = W1, ad = p1, od = Nr, sd = Mu, ld = at1, cd = Du, ud = mu, dd = iu.UNSUPPORTED_Y, hd = [].push, fd = Math.min, vd = 4294967295;
    nd("split", 2, function(e36, t12, n8) {
        var i3;
        return i3 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var i = String(ad(this)), r = void 0 === n ? vd : n >>> 0;
            if (0 === r) return [];
            if (void 0 === e) return [
                i
            ];
            if (!id(e)) return t12.call(i, e, r);
            for(var a, o, s, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, d = new RegExp(e.source, c + "g"); (a = ud.call(d, i)) && !((o = d.lastIndex) > u && (l.push(i.slice(u, a.index)), a.length > 1 && a.index < i.length && hd.apply(l, a.slice(1)), s = a[0].length, u = o, l.length >= r));)d.lastIndex === a.index && d.lastIndex++;
            return u === i.length ? !s && d.test("") || l.push("") : l.push(i.slice(u)), l.length > r ? l.slice(0, r) : l;
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t12.call(this, e, n);
        } : t12, [
            function(t, n) {
                var r = ad(this), a = null == t ? void 0 : t[e36];
                return void 0 !== a ? a.call(t, r, n) : i3.call(String(r), t, n);
            },
            function(e, r) {
                var a = n8(i3, e, this, r, i3 !== t12);
                if (a.done) return a.value;
                var o = rd(e), s = String(this), l = od(o, RegExp), c = o.unicode, u = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (dd ? "g" : "y"), d = new l(dd ? "^(?:" + o.source + ")" : o, u), h = void 0 === r ? vd : r >>> 0;
                if (0 === h) return [];
                if (0 === s.length) return null === cd(d, s) ? [
                    s
                ] : [];
                for(var f = 0, v = 0, g = []; v < s.length;){
                    d.lastIndex = dd ? 0 : v;
                    var p, m = cd(d, dd ? s.slice(v) : s);
                    if (null === m || (p = fd(ld(d.lastIndex + (dd ? v : 0)), s.length)) === f) v = sd(s, v, c);
                    else {
                        if (g.push(s.slice(f, v)), g.length === h) return g;
                        for(var y = 1; y <= m.length - 1; y++)if (g.push(m[y]), g.length === h) return g;
                        v = f = p;
                    }
                }
                return g.push(s.slice(f)), g;
            }
        ];
    }, dd);
    var gd = w1, pd = Ki, md = a1, yd = n1, bd = Ut, wd = Z1.exports, Sd = L1, Ed = h1, kd = function(e, t, n) {
        var i, r;
        return pd && "function" == typeof (i = t.constructor) && i !== n && gd(r = i.prototype) && r !== n.prototype && pd(e, r), e;
    }, Ad = E1, Rd = r1, xd = Hs, Ld = Ze1.f, Pd = i1.f, Cd = _1.f, Nd = bl.trim, Id = "Number", Md = yd.Number, Td = Md.prototype, Od = Ed(xd(Td)) == Id, Dd = function(e) {
        var t, n, i, r, a, o, s, l, c = Ad(e, !1);
        if ("string" == typeof c && c.length > 2) {
            if (43 === (t = (c = Nd(c)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === t) {
                switch(c.charCodeAt(1)){
                    case 66:
                    case 98:
                        i = 2, r = 49;
                        break;
                    case 79:
                    case 111:
                        i = 8, r = 55;
                        break;
                    default:
                        return +c;
                }
                for(o = (a = c.slice(2)).length, s = 0; s < o; s++)if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
                return parseInt(a, i);
            }
        }
        return +c;
    };
    if (bd(Id, !Md(" 0o1") || !Md("0b1") || Md("+0x1"))) {
        for(var jd, Fd = function(e) {
            var t = arguments.length < 1 ? 0 : e, n = this;
            return n instanceof Fd && (Od ? Rd(function() {
                Td.valueOf.call(n);
            }) : Ed(n) != Id) ? kd(new Md(Dd(t)), n, Fd) : Dd(t);
        }, zd = md ? Ld(Md) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), Hd = 0; zd.length > Hd; Hd++)Sd(Md, jd = zd[Hd]) && !Sd(Fd, jd) && Cd(Fd, jd, Pd(Md, jd));
        Fd.prototype = Td, Td.constructor = Fd, wd(yd, Id, Fd);
    }
    var Ud = a1, Bd = _1.f, _d = Function.prototype, qd = _d.toString, Wd = /^\s*function ([^ (]*)/, Vd = "name";
    Ud && !(Vd in _d) && Bd(_d, Vd, {
        configurable: !0,
        get: function() {
            try {
                return qd.call(this).match(Wd)[1];
            } catch (e) {
                return "";
            }
        }
    });
    var Kd = $t, Yd = b1, $d = [].join, Xd = g1 != Object, Gd = zo("join", ",");
    Kd({
        target: "Array",
        proto: !0,
        forced: Xd || !Gd
    }, {
        join: function(e) {
            return $d.call(Yd(this), void 0 === e ? "," : e);
        }
    });
    var Jd = ".slides section", Qd = ".slides>section", Zd = ".slides>section.present>section", eh = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/, th = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/, nh = A1, ih = Math.floor, rh = "".replace, ah = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, oh = /\$([$&'`]|\d{1,2})/g, sh = Nu, lh = W1, ch = at1, uh = nt1, dh = p1, hh = Mu, fh = function(e, t, n, i, r, a3) {
        var o = n + e.length, s = i.length, l2 = oh;
        return void 0 !== r && (r = nh(r), l2 = ah), rh.call(a3, l2, function(a, l) {
            var c;
            switch(l.charAt(0)){
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return t.slice(0, n);
                case "'":
                    return t.slice(o);
                case "<":
                    c = r[l.slice(1, -1)];
                    break;
                default:
                    var u = +l;
                    if (0 === u) return a;
                    if (u > s) {
                        var d = ih(u / 10);
                        return 0 === d ? a : d <= s ? void 0 === i[d - 1] ? l.charAt(1) : i[d - 1] + l.charAt(1) : a;
                    }
                    c = i[u - 1];
            }
            return void 0 === c ? "" : c;
        });
    }, vh = Du, gh = Math.max, ph = Math.min;
    sh("replace", 2, function(e37, t, n9, i4) {
        var r4 = i4.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, a4 = i4.REPLACE_KEEPS_$0, o = r4 ? "$" : "$0";
        return [
            function(n, i) {
                var r = dh(this), a = null == n ? void 0 : n[e37];
                return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i);
            },
            function(e, i) {
                if (!r4 && a4 || "string" == typeof i && -1 === i.indexOf(o)) {
                    var s = n9(t, e, this, i);
                    if (s.done) return s.value;
                }
                var l = lh(e), c = String(this), u = "function" == typeof i;
                u || (i = String(i));
                var d = l.global;
                if (d) {
                    var h = l.unicode;
                    l.lastIndex = 0;
                }
                for(var f = [];;){
                    var v = vh(l, c);
                    if (null === v) break;
                    if (f.push(v), !d) break;
                    "" === String(v[0]) && (l.lastIndex = hh(c, ch(l.lastIndex), h));
                }
                for(var g, p = "", m = 0, y = 0; y < f.length; y++){
                    v = f[y];
                    for(var b = String(v[0]), w = gh(ph(uh(v.index), c.length), 0), S = [], E = 1; E < v.length; E++)S.push(void 0 === (g = v[E]) ? g : String(g));
                    var k = v.groups;
                    if (u) {
                        var A = [
                            b
                        ].concat(S, w, c);
                        void 0 !== k && A.push(k);
                        var R = String(i.apply(void 0, A));
                    } else R = fh(b, c, w, S, k, i);
                    w >= m && (p += c.slice(m, w) + R, m = w + b.length);
                }
                return p + c.slice(m);
            }
        ];
    });
    var mh = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }, yh = W1, bh = p1, wh = mh, Sh = Du;
    Nu("search", 1, function(e38, t13, n10) {
        return [
            function(t) {
                var n = bh(this), i = null == t ? void 0 : t[e38];
                return void 0 !== i ? i.call(t, n) : new RegExp(t)[e38](String(n));
            },
            function(e) {
                var i = n10(t13, e, this);
                if (i.done) return i.value;
                var r = yh(e), a = String(this), o = r.lastIndex;
                wh(o, 0) || (r.lastIndex = 0);
                var s = Sh(r, a);
                return wh(r.lastIndex, o) || (r.lastIndex = o), null === s ? -1 : s.index;
            }
        ];
    });
    var Eh = function(e, t) {
        for(var n in t)e[n] = t[n];
        return e;
    }, kh = function(e, t) {
        return Array.from(e.querySelectorAll(t));
    }, Ah = function(e, t, n) {
        n ? e.classList.add(t) : e.classList.remove(t);
    }, Rh = function(e) {
        if ("string" == typeof e) {
            if ("null" === e) return null;
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
        }
        return e;
    }, xh = function(e, t) {
        e.style.transform = t;
    }, Lh = function(e, t) {
        var n = e.matches || e.matchesSelector || e.msMatchesSelector;
        return !(!n || !n.call(e, t));
    }, Ph = function(e, t) {
        if ("function" == typeof e.closest) return e.closest(t);
        for(; e;){
            if (Lh(e, t)) return e;
            e = e.parentNode;
        }
        return null;
    }, Ch = function(e, t, n) {
        for(var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = e.querySelectorAll("." + n), a = 0; a < r.length; a++){
            var o = r[a];
            if (o.parentNode === e) return o;
        }
        var s = document.createElement(t);
        return s.className = n, s.innerHTML = i, e.appendChild(s), s;
    }, Nh = function(e) {
        var t = document.createElement("style");
        return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t;
    }, Ih = function() {
        var e = {
        };
        for(var t14 in location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) {
            e[t.split("=").shift()] = t.split("=").pop();
        }), e){
            var n = e[t14];
            e[t14] = Rh(unescape(n));
        }
        return void 0 !== e.dependencies && delete e.dependencies, e;
    }, Mh = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (e) {
            var n, i = e.style.height;
            return e.style.height = "0px", e.parentNode.style.height = "auto", n = t - e.parentNode.offsetHeight, e.style.height = i + "px", e.parentNode.style.removeProperty("height"), n;
        }
        return t;
    }, Th = navigator.userAgent, Oh = document.createElement("div"), Dh = /(iphone|ipod|ipad|android)/gi.test(Th) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, jh = /chrome/i.test(Th) && !/edge/i.test(Th), Fh = /android/gi.test(Th), zh = "zoom" in Oh.style && !Dh && (jh || /Version\/[\d\.]+.*Safari/.test(Th)), Hh = {
    };
    Object.defineProperty(Hh, "__esModule", {
        value: !0
    });
    var Uh = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var i in n)Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
    }, Bh = Hh.default = function(e39) {
        if (e39) {
            var t15 = function(e) {
                return [].slice.call(e);
            }, n11 = 0, i = 1, r = 2, a = 3, o = [], s = null, l = "requestAnimationFrame" in e39 ? function() {
                e39.cancelAnimationFrame(s), s = e39.requestAnimationFrame(function() {
                    return u(o.filter(function(e) {
                        return e.dirty && e.active;
                    }));
                });
            } : function() {
            }, c = function(e) {
                return function() {
                    o.forEach(function(t) {
                        return t.dirty = e;
                    }), l();
                };
            }, u = function(e40) {
                e40.filter(function(e) {
                    return !e.styleComputed;
                }).forEach(function(e) {
                    e.styleComputed = v(e);
                }), e40.filter(g).forEach(p);
                var t = e40.filter(f);
                t.forEach(h), t.forEach(function(e) {
                    p(e), d(e);
                }), t.forEach(m);
            }, d = function(e) {
                return e.dirty = n11;
            }, h = function(e) {
                e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
            }, f = function(e) {
                return e.dirty !== r || e.dirty === r && e.element.parentNode.clientWidth !== e.availableWidth;
            }, v = function(t) {
                var n = e39.getComputedStyle(t.element, null);
                t.currentFontSize = parseFloat(n.getPropertyValue("font-size")), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space");
            }, g = function(e) {
                var t = !1;
                return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
            }, p = function(e) {
                e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px";
            }, m = function(e) {
                e.element.dispatchEvent(new CustomEvent("fit", {
                    detail: {
                        oldValue: e.previousFontSize,
                        newValue: e.currentFontSize,
                        scaleFactor: e.currentFontSize / e.previousFontSize
                    }
                }));
            }, y = function(e, t) {
                return function() {
                    e.dirty = t, e.active && l();
                };
            }, b = function(e) {
                return function() {
                    o = o.filter(function(t) {
                        return t.element !== e.element;
                    }), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize;
                };
            }, w = function(e) {
                return function() {
                    e.active || (e.active = !0, l());
                };
            }, S = function(e) {
                return function() {
                    return e.active = !1;
                };
            }, E = function(e) {
                e.observeMutations && (e.observer = new MutationObserver(y(e, i)), e.observer.observe(e.element, e.observeMutations));
            }, k = {
                minSize: 16,
                maxSize: 512,
                multiLine: !0,
                observeMutations: "MutationObserver" in e39 && {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }
            }, A = null, R = function() {
                e39.clearTimeout(A), A = e39.setTimeout(c(r), P.observeWindowDelay);
            }, x = [
                "resize",
                "orientationchange"
            ];
            return Object.defineProperty(P, "observeWindow", {
                set: function(t16) {
                    var n = (t16 ? "add" : "remove") + "EventListener";
                    x.forEach(function(t) {
                        e39[n](t, R);
                    });
                }
            }), P.observeWindow = !0, P.observeWindowDelay = 100, P.fitAll = c(a), P;
        }
        function L(e41, t17) {
            var n = Uh({
            }, k, t17), i = e41.map(function(e42) {
                var t = Uh({
                }, n, {
                    element: e42,
                    active: !0
                });
                return (function(e) {
                    e.originalStyle = {
                        whiteSpace: e.element.style.whiteSpace,
                        display: e.element.style.display,
                        fontSize: e.element.style.fontSize
                    }, E(e), e.newbie = !0, e.dirty = !0, o.push(e);
                })(t), {
                    element: e42,
                    fit: y(t, a),
                    unfreeze: w(t),
                    freeze: S(t),
                    unsubscribe: b(t)
                };
            });
            return l(), i;
        }
        function P(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            };
            return "string" == typeof e ? L(t15(document.querySelectorAll(e)), n) : L([
                e
            ], n)[0];
        }
    }("undefined" == typeof window ? null : window), _h = function() {
        function e43(t) {
            ki(this, e43), this.Reveal = t, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
        }
        return Ri(e43, [
            {
                key: "shouldPreload",
                value: function(e) {
                    var t = this.Reveal.getConfig().preloadIframes;
                    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
                }
            },
            {
                key: "load",
                value: function(e44) {
                    var t18 = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    };
                    e44.style.display = this.Reveal.getConfig().display, kh(e44, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(function(e) {
                        ("IFRAME" !== e.tagName || t18.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"));
                    }), kh(e44, "video, audio").forEach(function(e45) {
                        var t = 0;
                        kh(e45, "source[data-src]").forEach(function(e) {
                            e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1;
                        }), Dh && "VIDEO" === e45.tagName && e45.setAttribute("playsinline", ""), t > 0 && e45.load();
                    });
                    var i = e44.slideBackgroundElement;
                    if (i) {
                        i.style.display = "block";
                        var r = e44.slideBackgroundContentElement, a = e44.getAttribute("data-background-iframe");
                        if (!1 === i.hasAttribute("data-loaded")) {
                            i.setAttribute("data-loaded", "true");
                            var o = e44.getAttribute("data-background-image"), s = e44.getAttribute("data-background-video"), l = e44.hasAttribute("data-background-video-loop"), c = e44.hasAttribute("data-background-video-muted");
                            if (o) /^data:/.test(o.trim()) ? r.style.backgroundImage = "url(".concat(o.trim(), ")") : r.style.backgroundImage = o.split(",").map(function(e) {
                                return "url(".concat(encodeURI(e.trim()), ")");
                            }).join(",");
                            else if (s && !this.Reveal.isSpeakerNotes()) {
                                var u = document.createElement("video");
                                l && u.setAttribute("loop", ""), c && (u.muted = !0), Dh && (u.muted = !0, u.setAttribute("playsinline", "")), s.split(",").forEach(function(e) {
                                    u.innerHTML += '<source src="' + e + '">';
                                }), r.appendChild(u);
                            } else if (a && !0 !== n.excludeIframes) {
                                var d = document.createElement("iframe");
                                d.setAttribute("allowfullscreen", ""), d.setAttribute("mozallowfullscreen", ""), d.setAttribute("webkitallowfullscreen", ""), d.setAttribute("allow", "autoplay"), d.setAttribute("data-src", a), d.style.width = "100%", d.style.height = "100%", d.style.maxHeight = "100%", d.style.maxWidth = "100%", r.appendChild(d);
                            }
                        }
                        var h = r.querySelector("iframe[data-src]");
                        h && this.shouldPreload(i) && !/autoplay=(1|true|yes)/gi.test(a) && h.getAttribute("src") !== a && h.setAttribute("src", a);
                    }
                    this.layout(e44);
                }
            },
            {
                key: "layout",
                value: function(e46) {
                    var t = this;
                    Array.from(e46.querySelectorAll(".r-fit-text")).forEach(function(e) {
                        Bh(e, {
                            minSize: 24,
                            maxSize: 0.8 * t.Reveal.getConfig().height,
                            observeMutations: !1,
                            observeWindow: !1
                        });
                    });
                }
            },
            {
                key: "unload",
                value: function(e47) {
                    e47.style.display = "none";
                    var t = this.Reveal.getSlideBackground(e47);
                    t && (t.style.display = "none", kh(t, "iframe[src]").forEach(function(e) {
                        e.removeAttribute("src");
                    })), kh(e47, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(function(e) {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
                    }), kh(e47, "video[data-lazy-loaded] source[src], audio source[src]").forEach(function(e) {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
                    });
                }
            },
            {
                key: "formatEmbeddedContent",
                value: function() {
                    var e48 = this, t19 = function(t, n12, i) {
                        kh(e48.Reveal.getSlidesElement(), "iframe[" + t + '*="' + n12 + '"]').forEach(function(e) {
                            var n = e.getAttribute(t);
                            n && -1 === n.indexOf(i) && e.setAttribute(t, n + (/\?/.test(n) ? "&" : "?") + i);
                        });
                    };
                    t19("src", "youtube.com/embed/", "enablejsapi=1"), t19("data-src", "youtube.com/embed/", "enablejsapi=1"), t19("src", "player.vimeo.com/", "api=1"), t19("data-src", "player.vimeo.com/", "api=1");
                }
            },
            {
                key: "startEmbeddedContent",
                value: function(e49) {
                    var t = this;
                    e49 && !this.Reveal.isSpeakerNotes() && (kh(e49, 'img[src$=".gif"]').forEach(function(e) {
                        e.setAttribute("src", e.getAttribute("src"));
                    }), kh(e49, "video, audio").forEach(function(e) {
                        if (!Ph(e, ".fragment") || Ph(e, ".fragment.visible")) {
                            var n = t.Reveal.getConfig().autoPlayMedia;
                            if ("boolean" != typeof n && (n = e.hasAttribute("data-autoplay") || !!Ph(e, ".slide-background")), n && "function" == typeof e.play) {
                                if (e.readyState > 1) t.startEmbeddedMedia({
                                    target: e
                                });
                                else if (Dh) {
                                    var i = e.play();
                                    i && "function" == typeof i.catch && !1 === e.controls && i.catch(function() {
                                        e.controls = !0, e.addEventListener("play", function() {
                                            e.controls = !1;
                                        });
                                    });
                                } else e.removeEventListener("loadeddata", t.startEmbeddedMedia), e.addEventListener("loadeddata", t.startEmbeddedMedia);
                            }
                        }
                    }), kh(e49, "iframe[src]").forEach(function(e) {
                        Ph(e, ".fragment") && !Ph(e, ".fragment.visible") || t.startEmbeddedIframe({
                            target: e
                        });
                    }), kh(e49, "iframe[data-src]").forEach(function(e) {
                        Ph(e, ".fragment") && !Ph(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", t.startEmbeddedIframe), e.addEventListener("load", t.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
                    }));
                }
            },
            {
                key: "startEmbeddedMedia",
                value: function(e) {
                    var t = !!Ph(e.target, "html"), n = !!Ph(e.target, ".present");
                    t && n && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
                }
            },
            {
                key: "startEmbeddedIframe",
                value: function(e) {
                    var t = e.target;
                    if (t && t.contentWindow) {
                        var n = !!Ph(e.target, "html"), i = !!Ph(e.target, ".present");
                        if (n && i) {
                            var r = this.Reveal.getConfig().autoPlayMedia;
                            "boolean" != typeof r && (r = t.hasAttribute("data-autoplay") || !!Ph(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*");
                        }
                    }
                }
            },
            {
                key: "stopEmbeddedContent",
                value: function(e50) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    };
                    n = Eh({
                        unloadIframes: !0
                    }, n), e50 && e50.parentNode && (kh(e50, "video, audio").forEach(function(e) {
                        e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause());
                    }), kh(e50, "iframe").forEach(function(e) {
                        e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", t.startEmbeddedIframe);
                    }), kh(e50, 'iframe[src*="youtube.com/embed/"]').forEach(function(e) {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    }), kh(e50, 'iframe[src*="player.vimeo.com/"]').forEach(function(e) {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*");
                    }), !0 === n.unloadIframes && kh(e50, "iframe[data-src]").forEach(function(e) {
                        e.setAttribute("src", "about:blank"), e.removeAttribute("src");
                    }));
                }
            }
        ]), e43;
    }(), qh = function() {
        function e51(t) {
            ki(this, e51), this.Reveal = t;
        }
        return Ri(e51, [
            {
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
                }
            },
            {
                key: "configure",
                value: function(e, t) {
                    var n = "none";
                    e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (n = "block"), this.element.style.display = n;
                }
            },
            {
                key: "update",
                value: function() {
                    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
                }
            },
            {
                key: "getSlideNumber",
                value: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide(), n = this.Reveal.getConfig(), i = "h.v";
                    if ("function" == typeof n.slideNumber) e = n.slideNumber(t);
                    else {
                        "string" == typeof n.slideNumber && (i = n.slideNumber), /c/.test(i) || 1 !== this.Reveal.getHorizontalSlides().length || (i = "c");
                        var r = t && "uncounted" === t.dataset.visibility ? 0 : 1;
                        switch(e = [], i){
                            case "c":
                                e.push(this.Reveal.getSlidePastCount(t) + r);
                                break;
                            case "c/t":
                                e.push(this.Reveal.getSlidePastCount(t) + r, "/", this.Reveal.getTotalSlides());
                                break;
                            default:
                                var a = this.Reveal.getIndices(t);
                                e.push(a.h + r);
                                var o = "h/v" === i ? "/" : ".";
                                this.Reveal.isVerticalSlide(t) && e.push(o, a.v + 1);
                        }
                    }
                    var s = "#" + this.Reveal.location.getHash(t);
                    return this.formatNumber(e[0], e[1], e[2], s);
                }
            },
            {
                key: "formatNumber",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#" + this.Reveal.location.getHash();
                    return "number" != typeof n || isNaN(n) ? '<a href="'.concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, "</span>\n\t\t\t\t\t</a>") : '<a href="'.concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">').concat(t, '</span>\n\t\t\t\t\t<span class="slide-number-b">').concat(n, "</span>\n\t\t\t\t\t</a>");
                }
            }
        ]), e51;
    }(), Wh = function(e) {
        var t = e.match(/^#([0-9a-f]{3})$/i);
        if (t && t[1]) return t = t[1], {
            r: 17 * parseInt(t.charAt(0), 16),
            g: 17 * parseInt(t.charAt(1), 16),
            b: 17 * parseInt(t.charAt(2), 16)
        };
        var n = e.match(/^#([0-9a-f]{6})$/i);
        if (n && n[1]) return n = n[1], {
            r: parseInt(n.substr(0, 2), 16),
            g: parseInt(n.substr(2, 2), 16),
            b: parseInt(n.substr(4, 2), 16)
        };
        var i = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (i) return {
            r: parseInt(i[1], 10),
            g: parseInt(i[2], 10),
            b: parseInt(i[3], 10)
        };
        var r = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
        return r ? {
            r: parseInt(r[1], 10),
            g: parseInt(r[2], 10),
            b: parseInt(r[3], 10),
            a: parseFloat(r[4])
        } : null;
    }, Vh = function() {
        function e52(t) {
            ki(this, e52), this.Reveal = t;
        }
        return Ri(e52, [
            {
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
                }
            },
            {
                key: "create",
                value: function() {
                    var e = this;
                    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(function(t20) {
                        var n = e.createBackground(t20, e.element);
                        kh(t20, "section").forEach(function(t) {
                            e.createBackground(t, n), n.classList.add("stack");
                        });
                    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(function() {
                        e.Reveal.getRevealElement().classList.add("has-parallax-background");
                    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
                }
            },
            {
                key: "createBackground",
                value: function(e, t) {
                    var n = document.createElement("div");
                    n.className = "slide-background " + e.className.replace(/present|past|future/, "");
                    var i = document.createElement("div");
                    return i.className = "slide-background-content", n.appendChild(i), t.appendChild(n), e.slideBackgroundElement = n, e.slideBackgroundContentElement = i, this.sync(e), n;
                }
            },
            {
                key: "sync",
                value: function(e) {
                    var t = e.slideBackgroundElement, n = e.slideBackgroundContentElement, i = {
                        background: e.getAttribute("data-background"),
                        backgroundSize: e.getAttribute("data-background-size"),
                        backgroundImage: e.getAttribute("data-background-image"),
                        backgroundVideo: e.getAttribute("data-background-video"),
                        backgroundIframe: e.getAttribute("data-background-iframe"),
                        backgroundColor: e.getAttribute("data-background-color"),
                        backgroundRepeat: e.getAttribute("data-background-repeat"),
                        backgroundPosition: e.getAttribute("data-background-position"),
                        backgroundTransition: e.getAttribute("data-background-transition"),
                        backgroundOpacity: e.getAttribute("data-background-opacity")
                    }, r = e.hasAttribute("data-preload");
                    e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", n.style.backgroundSize = "", n.style.backgroundRepeat = "", n.style.backgroundPosition = "", n.style.backgroundImage = "", n.style.opacity = "", n.innerHTML = "", i.background && (/^(http|file|\/\/)/gi.test(i.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(i.background) ? e.setAttribute("data-background-image", i.background) : t.style.background = i.background), (i.background || i.backgroundColor || i.backgroundImage || i.backgroundVideo || i.backgroundIframe) && t.setAttribute("data-background-hash", i.background + i.backgroundSize + i.backgroundImage + i.backgroundVideo + i.backgroundIframe + i.backgroundColor + i.backgroundRepeat + i.backgroundPosition + i.backgroundTransition + i.backgroundOpacity), i.backgroundSize && t.setAttribute("data-background-size", i.backgroundSize), i.backgroundColor && (t.style.backgroundColor = i.backgroundColor), i.backgroundTransition && t.setAttribute("data-background-transition", i.backgroundTransition), r && t.setAttribute("data-preload", ""), i.backgroundSize && (n.style.backgroundSize = i.backgroundSize), i.backgroundRepeat && (n.style.backgroundRepeat = i.backgroundRepeat), i.backgroundPosition && (n.style.backgroundPosition = i.backgroundPosition), i.backgroundOpacity && (n.style.opacity = i.backgroundOpacity);
                    var a, o = i.backgroundColor;
                    if (!o || !Wh(o)) {
                        var s = window.getComputedStyle(t);
                        s && s.backgroundColor && (o = s.backgroundColor);
                    }
                    if (o) {
                        var l = Wh(o);
                        l && 0 !== l.a && ("string" == typeof (a = o) && (a = Wh(a)), (a ? (299 * a.r + 587 * a.g + 114 * a.b) / 1000 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"));
                    }
                }
            },
            {
                key: "update",
                value: function() {
                    var e53 = this, t21 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n13 = this.Reveal.getCurrentSlide(), i = this.Reveal.getIndices(), r = null, a = this.Reveal.getConfig().rtl ? "future" : "past", o = this.Reveal.getConfig().rtl ? "past" : "future";
                    if (Array.from(this.element.childNodes).forEach(function(e54, n) {
                        e54.classList.remove("past", "present", "future"), n < i.h ? e54.classList.add(a) : n > i.h ? e54.classList.add(o) : (e54.classList.add("present"), r = e54), (t21 || n === i.h) && kh(e54, ".slide-background").forEach(function(e, t) {
                            e.classList.remove("past", "present", "future"), t < i.v ? e.classList.add("past") : t > i.v ? e.classList.add("future") : (e.classList.add("present"), n === i.h && (r = e));
                        });
                    }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
                        unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
                    }), r) {
                        this.Reveal.slideContent.startEmbeddedContent(r);
                        var s = r.querySelector(".slide-background-content");
                        if (s) {
                            var l = s.style.backgroundImage || "";
                            /\.gif/i.test(l) && (s.style.backgroundImage = "", window.getComputedStyle(s).opacity, s.style.backgroundImage = l);
                        }
                        var c = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, u = r.getAttribute("data-background-hash");
                        u && u === c && r !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = r;
                    }
                    n13 && [
                        "has-light-background",
                        "has-dark-background"
                    ].forEach(function(t) {
                        n13.classList.contains(t) ? e53.Reveal.getRevealElement().classList.add(t) : e53.Reveal.getRevealElement().classList.remove(t);
                    }, this), setTimeout(function() {
                        e53.element.classList.remove("no-transition");
                    }, 1);
                }
            },
            {
                key: "updateParallax",
                value: function() {
                    var e = this.Reveal.getIndices();
                    if (this.Reveal.getConfig().parallaxBackgroundImage) {
                        var t, n, i = this.Reveal.getHorizontalSlides(), r = this.Reveal.getVerticalSlides(), a = this.element.style.backgroundSize.split(" ");
                        1 === a.length ? t = n = parseInt(a[0], 10) : (t = parseInt(a[0], 10), n = parseInt(a[1], 10));
                        var o, s = this.element.offsetWidth, l = i.length;
                        o = ("number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : l > 1 ? (t - s) / (l - 1) : 0) * e.h * -1;
                        var c, u, d = this.element.offsetHeight, h = r.length;
                        c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (n - d) / (h - 1), u = h > 0 ? c * e.v : 0, this.element.style.backgroundPosition = o + "px " + -u + "px";
                    }
                }
            }
        ]), e52;
    }(), Kh = A1, Yh = Jt;
    $t({
        target: "Object",
        stat: !0,
        forced: r1(function() {
            Yh(1);
        })
    }, {
        keys: function(e) {
            return Yh(Kh(e));
        }
    });
    var $h = Yn.filter;
    $t({
        target: "Array",
        proto: !0,
        forced: !Jn("filter")
    }, {
        filter: function(e) {
            return $h(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var Xh = $t, Gh = w1, Jh = gn, Qh = ct, Zh = at1, ef = b1, tf = ni, nf = Dn, rf = Jn("slice"), af = nf("species"), of = [].slice, sf = Math.max;
    Xh({
        target: "Array",
        proto: !0,
        forced: !rf
    }, {
        slice: function(e, t) {
            var n, i, r, a = ef(this), o = Zh(a.length), s = Qh(e, o), l = Qh(void 0 === t ? o : t, o);
            if (Jh(a) && ("function" != typeof (n = a.constructor) || n !== Array && !Jh(n.prototype) ? Gh(n) && null === (n = n[af]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return of.call(a, s, l);
            for(i = new (void 0 === n ? Array : n)(sf(l - s, 0)), r = 0; s < l; s++, r++)s in a && tf(i, r, a[s]);
            return i.length = r, i;
        }
    });
    var lf = 0, cf = function() {
        function e55(t) {
            ki(this, e55), this.Reveal = t;
        }
        return Ri(e55, [
            {
                key: "run",
                value: function(e56, t22) {
                    var n = this;
                    this.reset();
                    var i5 = this.Reveal.getSlides(), r = i5.indexOf(t22), a = i5.indexOf(e56);
                    if (e56.hasAttribute("data-auto-animate") && t22.hasAttribute("data-auto-animate") && e56.getAttribute("data-auto-animate-id") === t22.getAttribute("data-auto-animate-id") && !(r > a ? t22 : e56).hasAttribute("data-auto-animate-restart")) {
                        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || Nh();
                        var o = this.getAutoAnimateOptions(t22);
                        e56.dataset.autoAnimate = "pending", t22.dataset.autoAnimate = "pending", o.slideDirection = r > a ? "forward" : "backward";
                        var s = this.getAutoAnimatableElements(e56, t22).map(function(e) {
                            return n.autoAnimateElements(e.from, e.to, e.options || {
                            }, o, lf++);
                        });
                        if ("false" !== t22.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
                            var l = 0.8 * o.duration, c = 0.2 * o.duration;
                            this.getUnmatchedAutoAnimateElements(t22).forEach(function(e) {
                                var t = n.getAutoAnimateOptions(e, o), i = "unmatched";
                                t.duration === o.duration && t.delay === o.delay || (i = "unmatched-" + lf++, s.push('[data-auto-animate="running"] [data-auto-animate-target="'.concat(i, '"] { transition: opacity ').concat(t.duration, "s ease ").concat(t.delay, "s; }"))), e.dataset.autoAnimateTarget = i;
                            }, this), s.push('[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '.concat(l, "s ease ").concat(c, "s; }"));
                        }
                        this.autoAnimateStyleSheet.innerHTML = s.join(""), requestAnimationFrame(function() {
                            n.autoAnimateStyleSheet && (getComputedStyle(n.autoAnimateStyleSheet).fontWeight, t22.dataset.autoAnimate = "running");
                        }), this.Reveal.dispatchEvent({
                            type: "autoanimate",
                            data: {
                                fromSlide: e56,
                                toSlide: t22,
                                sheet: this.autoAnimateStyleSheet
                            }
                        });
                    }
                }
            },
            {
                key: "reset",
                value: function() {
                    kh(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(function(e) {
                        e.dataset.autoAnimate = "";
                    }), kh(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(function(e) {
                        delete e.dataset.autoAnimateTarget;
                    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
                }
            },
            {
                key: "autoAnimateElements",
                value: function(e57, t, n, i, r) {
                    e57.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = r;
                    var a = this.getAutoAnimateOptions(t, i);
                    void 0 !== n.delay && (a.delay = n.delay), void 0 !== n.duration && (a.duration = n.duration), void 0 !== n.easing && (a.easing = n.easing);
                    var o = this.getAutoAnimatableProperties("from", e57, n), s = this.getAutoAnimatableProperties("to", t, n);
                    t.classList.contains("fragment") && (delete s.styles.opacity, e57.classList.contains("fragment") && (e57.className.match(th) || [
                        ""
                    ])[0] === (t.className.match(th) || [
                        ""
                    ])[0] && "forward" === i.slideDirection && t.classList.add("visible", "disabled"));
                    if (!1 !== n.translate || !1 !== n.scale) {
                        var l = this.Reveal.getScale(), c = {
                            x: (o.x - s.x) / l,
                            y: (o.y - s.y) / l,
                            scaleX: o.width / s.width,
                            scaleY: o.height / s.height
                        };
                        c.x = Math.round(1000 * c.x) / 1000, c.y = Math.round(1000 * c.y) / 1000, c.scaleX = Math.round(1000 * c.scaleX) / 1000, c.scaleX = Math.round(1000 * c.scaleX) / 1000;
                        var u = !1 !== n.translate && (0 !== c.x || 0 !== c.y), d = !1 !== n.scale && (0 !== c.scaleX || 0 !== c.scaleY);
                        if (u || d) {
                            var h = [];
                            u && h.push("translate(".concat(c.x, "px, ").concat(c.y, "px)")), d && h.push("scale(".concat(c.scaleX, ", ").concat(c.scaleY, ")")), o.styles.transform = h.join(" "), o.styles["transform-origin"] = "top left", s.styles.transform = "none";
                        }
                    }
                    for(var f in s.styles){
                        var v = s.styles[f], g = o.styles[f];
                        v === g ? delete s.styles[f] : (!0 === v.explicitValue && (s.styles[f] = v.value), !0 === g.explicitValue && (o.styles[f] = g.value));
                    }
                    var p = "", m = Object.keys(s.styles);
                    m.length > 0 && (o.styles.transition = "none", s.styles.transition = "all ".concat(a.duration, "s ").concat(a.easing, " ").concat(a.delay, "s"), s.styles["transition-property"] = m.join(", "), s.styles["will-change"] = m.join(", "), p = '[data-auto-animate-target="' + r + '"] {' + Object.keys(o.styles).map(function(e) {
                        return e + ": " + o.styles[e] + " !important;";
                    }).join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + r + '"] {' + Object.keys(s.styles).map(function(e) {
                        return e + ": " + s.styles[e] + " !important;";
                    }).join("") + "}");
                    return p;
                }
            },
            {
                key: "getAutoAnimateOptions",
                value: function(e, t) {
                    var n = {
                        easing: this.Reveal.getConfig().autoAnimateEasing,
                        duration: this.Reveal.getConfig().autoAnimateDuration,
                        delay: 0
                    };
                    if (n = Eh(n, t), e.parentNode) {
                        var i = Ph(e.parentNode, "[data-auto-animate-target]");
                        i && (n = this.getAutoAnimateOptions(i, n));
                    }
                    return e.dataset.autoAnimateEasing && (n.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (n.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (n.delay = parseFloat(e.dataset.autoAnimateDelay)), n;
                }
            },
            {
                key: "getAutoAnimatableProperties",
                value: function(e, t23, n14) {
                    var i = this.Reveal.getConfig(), r = {
                        styles: []
                    };
                    if (!1 !== n14.translate || !1 !== n14.scale) {
                        var a;
                        if ("function" == typeof n14.measure) a = n14.measure(t23);
                        else if (i.center) a = t23.getBoundingClientRect();
                        else {
                            var o = this.Reveal.getScale();
                            a = {
                                x: t23.offsetLeft * o,
                                y: t23.offsetTop * o,
                                width: t23.offsetWidth * o,
                                height: t23.offsetHeight * o
                            };
                        }
                        r.x = a.x, r.y = a.y, r.width = a.width, r.height = a.height;
                    }
                    var s = getComputedStyle(t23);
                    return (n14.styles || i.autoAnimateStyles).forEach(function(t) {
                        var n;
                        "string" == typeof t && (t = {
                            property: t
                        }), "" !== (n = void 0 !== t.from && "from" === e ? {
                            value: t.from,
                            explicitValue: !0
                        } : void 0 !== t.to && "to" === e ? {
                            value: t.to,
                            explicitValue: !0
                        } : s[t.property]) && (r.styles[t.property] = n);
                    }), r;
                }
            },
            {
                key: "getAutoAnimatableElements",
                value: function(e58, t) {
                    var n = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e58, t), i = [];
                    return n.filter(function(e, t) {
                        if (-1 === i.indexOf(e.to)) return i.push(e.to), !0;
                    });
                }
            },
            {
                key: "getAutoAnimatePairs",
                value: function(e59, t) {
                    var n = this, i = [], r = "h1, h2, h3, h4, h5, h6, p, li";
                    return this.findAutoAnimateMatches(i, e59, t, "[data-id]", function(e) {
                        return e.nodeName + ":::" + e.getAttribute("data-id");
                    }), this.findAutoAnimateMatches(i, e59, t, r, function(e) {
                        return e.nodeName + ":::" + e.innerText;
                    }), this.findAutoAnimateMatches(i, e59, t, "img, video, iframe", function(e) {
                        return e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"));
                    }), this.findAutoAnimateMatches(i, e59, t, "pre", function(e) {
                        return e.nodeName + ":::" + e.innerText;
                    }), i.forEach(function(e60) {
                        Lh(e60.from, r) ? e60.options = {
                            scale: !1
                        } : Lh(e60.from, "pre") && (e60.options = {
                            scale: !1,
                            styles: [
                                "width",
                                "height"
                            ]
                        }, n.findAutoAnimateMatches(i, e60.from, e60.to, ".hljs .hljs-ln-code", function(e) {
                            return e.textContent;
                        }, {
                            scale: !1,
                            styles: [],
                            measure: n.getLocalBoundingBox.bind(n)
                        }), n.findAutoAnimateMatches(i, e60.from, e60.to, ".hljs .hljs-ln-line[data-line-number]", function(e) {
                            return e.getAttribute("data-line-number");
                        }, {
                            scale: !1,
                            styles: [
                                "width"
                            ],
                            measure: n.getLocalBoundingBox.bind(n)
                        }));
                    }, this), i;
                }
            },
            {
                key: "getLocalBoundingBox",
                value: function(e) {
                    var t = this.Reveal.getScale();
                    return {
                        x: Math.round(e.offsetLeft * t * 100) / 100,
                        y: Math.round(e.offsetTop * t * 100) / 100,
                        width: Math.round(e.offsetWidth * t * 100) / 100,
                        height: Math.round(e.offsetHeight * t * 100) / 100
                    };
                }
            },
            {
                key: "findAutoAnimateMatches",
                value: function(e61, t24, n15, i6, r, a) {
                    var o = {
                    }, s = {
                    };
                    [].slice.call(t24.querySelectorAll(i6)).forEach(function(e, t) {
                        var n = r(e);
                        "string" == typeof n && n.length && (o[n] = o[n] || [], o[n].push(e));
                    }), [].slice.call(n15.querySelectorAll(i6)).forEach(function(t, n) {
                        var i, l = r(t);
                        if (s[l] = s[l] || [], s[l].push(t), o[l]) {
                            var c = s[l].length - 1, u = o[l].length - 1;
                            o[l][c] ? (i = o[l][c], o[l][c] = null) : o[l][u] && (i = o[l][u], o[l][u] = null);
                        }
                        i && e61.push({
                            from: i,
                            to: t,
                            options: a
                        });
                    });
                }
            },
            {
                key: "getUnmatchedAutoAnimateElements",
                value: function(e62) {
                    var t = this;
                    return [].slice.call(e62.children).reduce(function(e, n) {
                        var i = n.querySelector("[data-auto-animate-target]");
                        return n.hasAttribute("data-auto-animate-target") || i || e.push(n), n.querySelector("[data-auto-animate-target]") && (e = e.concat(t.getUnmatchedAutoAnimateElements(n))), e;
                    }, []);
                }
            }
        ]), e55;
    }(), uf = function() {
        function e63(t) {
            ki(this, e63), this.Reveal = t;
        }
        return Ri(e63, [
            {
                key: "configure",
                value: function(e, t) {
                    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
                }
            },
            {
                key: "disable",
                value: function() {
                    kh(this.Reveal.getSlidesElement(), ".fragment").forEach(function(e) {
                        e.classList.add("visible"), e.classList.remove("current-fragment");
                    });
                }
            },
            {
                key: "enable",
                value: function() {
                    kh(this.Reveal.getSlidesElement(), ".fragment").forEach(function(e) {
                        e.classList.remove("visible"), e.classList.remove("current-fragment");
                    });
                }
            },
            {
                key: "availableRoutes",
                value: function() {
                    var e = this.Reveal.getCurrentSlide();
                    if (e && this.Reveal.getConfig().fragments) {
                        var t = e.querySelectorAll(".fragment:not(.disabled)"), n = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
                        return {
                            prev: t.length - n.length > 0,
                            next: !!n.length
                        };
                    }
                    return {
                        prev: !1,
                        next: !1
                    };
                }
            },
            {
                key: "sort",
                value: function(e64) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e64 = Array.from(e64);
                    var n = [], i = [], r = [];
                    e64.forEach(function(e) {
                        if (e.hasAttribute("data-fragment-index")) {
                            var t = parseInt(e.getAttribute("data-fragment-index"), 10);
                            n[t] || (n[t] = []), n[t].push(e);
                        } else i.push([
                            e
                        ]);
                    }), n = n.concat(i);
                    var a = 0;
                    return n.forEach(function(e65) {
                        e65.forEach(function(e) {
                            r.push(e), e.setAttribute("data-fragment-index", a);
                        }), a++;
                    }), !0 === t ? n : r;
                }
            },
            {
                key: "sortAll",
                value: function() {
                    var e = this;
                    this.Reveal.getHorizontalSlides().forEach(function(t25) {
                        var n = kh(t25, "section");
                        n.forEach(function(t, n) {
                            e.sort(t.querySelectorAll(".fragment"));
                        }, e), 0 === n.length && e.sort(t25.querySelectorAll(".fragment"));
                    });
                }
            },
            {
                key: "update",
                value: function(e, t26) {
                    var n = this, i = {
                        shown: [],
                        hidden: []
                    }, r5 = this.Reveal.getCurrentSlide();
                    if (r5 && this.Reveal.getConfig().fragments && (t26 = t26 || this.sort(r5.querySelectorAll(".fragment"))).length) {
                        var a = 0;
                        if ("number" != typeof e) {
                            var o = this.sort(r5.querySelectorAll(".fragment.visible")).pop();
                            o && (e = parseInt(o.getAttribute("data-fragment-index") || 0, 10));
                        }
                        Array.from(t26).forEach(function(t, r) {
                            if (t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), a = Math.max(a, r), r <= e) {
                                var o = t.classList.contains("visible");
                                t.classList.add("visible"), t.classList.remove("current-fragment"), r === e && (n.Reveal.announceStatus(n.Reveal.getStatusText(t)), t.classList.add("current-fragment"), n.Reveal.slideContent.startEmbeddedContent(t)), o || (i.shown.push(t), n.Reveal.dispatchEvent({
                                    target: t,
                                    type: "visible",
                                    bubbles: !1
                                }));
                            } else {
                                var s = t.classList.contains("visible");
                                t.classList.remove("visible"), t.classList.remove("current-fragment"), s && (n.Reveal.slideContent.stopEmbeddedContent(t), i.hidden.push(t), n.Reveal.dispatchEvent({
                                    target: t,
                                    type: "hidden",
                                    bubbles: !1
                                }));
                            }
                        }), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, a), -1), r5.setAttribute("data-fragment", e);
                    }
                    return i;
                }
            },
            {
                key: "sync",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
                    return this.sort(e.querySelectorAll(".fragment"));
                }
            },
            {
                key: "goto",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.Reveal.getCurrentSlide();
                    if (n && this.Reveal.getConfig().fragments) {
                        var i = this.sort(n.querySelectorAll(".fragment:not(.disabled)"));
                        if (i.length) {
                            if ("number" != typeof e) {
                                var r = this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();
                                e = r ? parseInt(r.getAttribute("data-fragment-index") || 0, 10) : -1;
                            }
                            e += t;
                            var a = this.update(e, i);
                            return a.hidden.length && this.Reveal.dispatchEvent({
                                type: "fragmenthidden",
                                data: {
                                    fragment: a.hidden[0],
                                    fragments: a.hidden
                                }
                            }), a.shown.length && this.Reveal.dispatchEvent({
                                type: "fragmentshown",
                                data: {
                                    fragment: a.shown[0],
                                    fragments: a.shown
                                }
                            }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a.shown.length && !a.hidden.length);
                        }
                    }
                    return !1;
                }
            },
            {
                key: "next",
                value: function() {
                    return this.goto(null, 1);
                }
            },
            {
                key: "prev",
                value: function() {
                    return this.goto(null, -1);
                }
            }
        ]), e63;
    }(), df = function() {
        function e66(t) {
            ki(this, e66), this.Reveal = t, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this);
        }
        return Ri(e66, [
            {
                key: "activate",
                value: function() {
                    var e = this;
                    if (this.Reveal.getConfig().overview && !this.isActive()) {
                        this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), kh(this.Reveal.getRevealElement(), Jd).forEach(function(t) {
                            t.classList.contains("stack") || t.addEventListener("click", e.onSlideClicked, !0);
                        });
                        var t27 = this.Reveal.getComputedSlideSize();
                        this.overviewSlideWidth = t27.width + 70, this.overviewSlideHeight = t27.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
                        var n = this.Reveal.getIndices();
                        this.Reveal.dispatchEvent({
                            type: "overviewshown",
                            data: {
                                indexh: n.h,
                                indexv: n.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        });
                    }
                }
            },
            {
                key: "layout",
                value: function() {
                    var e = this;
                    this.Reveal.getHorizontalSlides().forEach(function(t28, n) {
                        t28.setAttribute("data-index-h", n), xh(t28, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), t28.classList.contains("stack") && kh(t28, "section").forEach(function(t, i) {
                            t.setAttribute("data-index-h", n), t.setAttribute("data-index-v", i), xh(t, "translate3d(0, " + i * e.overviewSlideHeight + "px, 0)");
                        });
                    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(function(t29, n16) {
                        xh(t29, "translate3d(" + n16 * e.overviewSlideWidth + "px, 0, 0)"), kh(t29, ".slide-background").forEach(function(t, n) {
                            xh(t, "translate3d(0, " + n * e.overviewSlideHeight + "px, 0)");
                        });
                    });
                }
            },
            {
                key: "update",
                value: function() {
                    var e = Math.min(window.innerWidth, window.innerHeight), t = Math.max(e / 5, 150) / e, n = this.Reveal.getIndices();
                    this.Reveal.transformSlides({
                        overview: [
                            "scale(" + t + ")",
                            "translateX(" + -n.h * this.overviewSlideWidth + "px)",
                            "translateY(" + -n.v * this.overviewSlideHeight + "px)"
                        ].join(" ")
                    });
                }
            },
            {
                key: "deactivate",
                value: function() {
                    var e67 = this;
                    if (this.Reveal.getConfig().overview) {
                        this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(function() {
                            e67.Reveal.getRevealElement().classList.remove("overview-deactivating");
                        }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), kh(this.Reveal.getRevealElement(), Jd).forEach(function(t) {
                            xh(t, ""), t.removeEventListener("click", e67.onSlideClicked, !0);
                        }), kh(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(function(e) {
                            xh(e, "");
                        }), this.Reveal.transformSlides({
                            overview: ""
                        });
                        var t30 = this.Reveal.getIndices();
                        this.Reveal.slide(t30.h, t30.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
                            type: "overviewhidden",
                            data: {
                                indexh: t30.h,
                                indexv: t30.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        });
                    }
                }
            },
            {
                key: "toggle",
                value: function(e) {
                    "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
                }
            },
            {
                key: "isActive",
                value: function() {
                    return this.active;
                }
            },
            {
                key: "onSlideClicked",
                value: function(e) {
                    if (this.isActive()) {
                        e.preventDefault();
                        for(var t = e.target; t && !t.nodeName.match(/section/gi);)t = t.parentNode;
                        if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
                            var n = parseInt(t.getAttribute("data-index-h"), 10), i = parseInt(t.getAttribute("data-index-v"), 10);
                            this.Reveal.slide(n, i);
                        }
                    }
                }
            }
        ]), e66;
    }(), hf = function() {
        function e68(t) {
            ki(this, e68), this.Reveal = t, this.shortcuts = {
            }, this.bindings = {
            }, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
        }
        return Ri(e68, [
            {
                key: "configure",
                value: function(e, t) {
                    "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview";
                }
            },
            {
                key: "bind",
                value: function() {
                    document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1);
                }
            },
            {
                key: "unbind",
                value: function() {
                    document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1);
                }
            },
            {
                key: "addKeyBinding",
                value: function(e, t) {
                    "object" === Si(e) && e.keyCode ? this.bindings[e.keyCode] = {
                        callback: t,
                        key: e.key,
                        description: e.description
                    } : this.bindings[e] = {
                        callback: t,
                        key: null,
                        description: null
                    };
                }
            },
            {
                key: "removeKeyBinding",
                value: function(e) {
                    delete this.bindings[e];
                }
            },
            {
                key: "triggerKey",
                value: function(e) {
                    this.onDocumentKeyDown({
                        keyCode: e
                    });
                }
            },
            {
                key: "registerKeyboardShortcut",
                value: function(e, t) {
                    this.shortcuts[e] = t;
                }
            },
            {
                key: "getShortcuts",
                value: function() {
                    return this.shortcuts;
                }
            },
            {
                key: "getBindings",
                value: function() {
                    return this.bindings;
                }
            },
            {
                key: "onDocumentKeyPress",
                value: function(e) {
                    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
                }
            },
            {
                key: "onDocumentKeyDown",
                value: function(e) {
                    var t = this.Reveal.getConfig();
                    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
                    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
                    var n = e.keyCode, i = !this.Reveal.isAutoSliding();
                    this.Reveal.onUserInput(e);
                    var r = document.activeElement && !0 === document.activeElement.isContentEditable, a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), o = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), s = !(-1 !== [
                        32,
                        37,
                        38,
                        39,
                        40,
                        78,
                        80
                    ].indexOf(e.keyCode) && e.shiftKey || e.altKey) && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
                    if (!(r || a || o || s)) {
                        var l, c = [
                            66,
                            86,
                            190,
                            191
                        ];
                        if ("object" === Si(t.keyboard)) for(l in t.keyboard)"togglePause" === t.keyboard[l] && c.push(parseInt(l, 10));
                        if (this.Reveal.isPaused() && -1 === c.indexOf(n)) return !1;
                        var u, d, h = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), f = !1;
                        if ("object" === Si(t.keyboard)) {
                            for(l in t.keyboard)if (parseInt(l, 10) === n) {
                                var v = t.keyboard[l];
                                "function" == typeof v ? v.apply(null, [
                                    e
                                ]) : "string" == typeof v && "function" == typeof this.Reveal[v] && this.Reveal[v].call(), f = !0;
                            }
                        }
                        if (!1 === f) {
                            for(l in this.bindings)if (parseInt(l, 10) === n) {
                                var g = this.bindings[l].callback;
                                "function" == typeof g ? g.apply(null, [
                                    e
                                ]) : "string" == typeof g && "function" == typeof this.Reveal[g] && this.Reveal[g].call(), f = !0;
                            }
                        }
                        !1 === f && (f = !0, 80 === n || 33 === n ? this.Reveal.prev({
                            skipFragments: e.altKey
                        }) : 78 === n || 34 === n ? this.Reveal.next({
                            skipFragments: e.altKey
                        }) : 72 === n || 37 === n ? e.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && h ? this.Reveal.prev({
                            skipFragments: e.altKey
                        }) : this.Reveal.left({
                            skipFragments: e.altKey
                        }) : 76 === n || 39 === n ? e.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && h ? this.Reveal.next({
                            skipFragments: e.altKey
                        }) : this.Reveal.right({
                            skipFragments: e.altKey
                        }) : 75 === n || 38 === n ? e.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && h ? this.Reveal.prev({
                            skipFragments: e.altKey
                        }) : this.Reveal.up({
                            skipFragments: e.altKey
                        }) : 74 === n || 40 === n ? e.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && h ? this.Reveal.next({
                            skipFragments: e.altKey
                        }) : this.Reveal.down({
                            skipFragments: e.altKey
                        }) : 36 === n ? this.Reveal.slide(0) : 35 === n ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === n ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev({
                            skipFragments: e.altKey
                        }) : this.Reveal.next({
                            skipFragments: e.altKey
                        })) : 58 === n || 59 === n || 66 === n || 86 === n || 190 === n || 191 === n ? this.Reveal.togglePause() : 70 === n ? (u = t.embedded ? this.Reveal.getViewportElement() : document.documentElement, (d = (u = u || document.documentElement).requestFullscreen || u.webkitRequestFullscreen || u.webkitRequestFullScreen || u.mozRequestFullScreen || u.msRequestFullscreen) && d.apply(u)) : 65 === n ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(i) : f = !1), f ? e.preventDefault && e.preventDefault() : 27 !== n && 79 !== n || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide();
                    }
                }
            }
        ]), e68;
    }(), ff = function() {
        function e69(t) {
            ki(this, e69), this.Reveal = t, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
        }
        return Ri(e69, [
            {
                key: "bind",
                value: function() {
                    window.addEventListener("hashchange", this.onWindowHashChange, !1);
                }
            },
            {
                key: "unbind",
                value: function() {
                    window.removeEventListener("hashchange", this.onWindowHashChange, !1);
                }
            },
            {
                key: "getIndicesFromHash",
                value: function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hash, i = n.replace(/^#\/?/, ""), r = i.split("/");
                    if (/^[0-9]*$/.test(r[0]) || !i.length) {
                        var a, o = this.Reveal.getConfig(), s = o.hashOneBasedIndex ? 1 : 0, l = parseInt(r[0], 10) - s || 0, c = parseInt(r[1], 10) - s || 0;
                        return o.fragmentInURL && (a = parseInt(r[2], 10), isNaN(a) && (a = void 0)), {
                            h: l,
                            v: c,
                            f: a
                        };
                    }
                    /\/[-\d]+$/g.test(i) && (t = parseInt(i.split("/").pop(), 10), t = isNaN(t) ? void 0 : t, i = i.split("/").shift());
                    try {
                        e = document.getElementById(decodeURIComponent(i));
                    } catch (e70) {
                    }
                    return e ? wi(wi({
                    }, this.Reveal.getIndices(e)), {
                    }, {
                        f: t
                    }) : null;
                }
            },
            {
                key: "readURL",
                value: function() {
                    var e = this.Reveal.getIndices(), t = this.getIndicesFromHash();
                    !t || t.h === e.h && t.v === e.v && void 0 === t.f ? this.Reveal.slide(e.h || 0, e.v || 0) : this.Reveal.slide(t.h, t.v, t.f);
                }
            },
            {
                key: "writeURL",
                value: function(e) {
                    var t = this.Reveal.getConfig(), n = this.Reveal.getCurrentSlide();
                    if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);
                    else if (n) {
                        var i = this.getHash();
                        t.history ? window.location.hash = i : t.hash && ("/" === i ? window.history.replaceState(null, null, window.location.pathname + window.location.search) : window.history.replaceState(null, null, "#" + i));
                    }
                }
            },
            {
                key: "getHash",
                value: function(e) {
                    var t = "/", n = e || this.Reveal.getCurrentSlide(), i = n ? n.getAttribute("id") : null;
                    i && (i = encodeURIComponent(i));
                    var r = this.Reveal.getIndices(e);
                    if (this.Reveal.getConfig().fragmentInURL || (r.f = void 0), "string" == typeof i && i.length) t = "/" + i, r.f >= 0 && (t += "/" + r.f);
                    else {
                        var a = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
                        (r.h > 0 || r.v > 0 || r.f >= 0) && (t += r.h + a), (r.v > 0 || r.f >= 0) && (t += "/" + (r.v + a)), r.f >= 0 && (t += "/" + r.f);
                    }
                    return t;
                }
            },
            {
                key: "onWindowHashChange",
                value: function(e) {
                    this.readURL();
                }
            }
        ]), e69;
    }(), vf = function() {
        function e71(t) {
            ki(this, e71), this.Reveal = t, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
        }
        return Ri(e71, [
            {
                key: "render",
                value: function() {
                    var e = this.Reveal.getConfig().rtl, t = this.Reveal.getRevealElement();
                    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = '<button class="navigate-left" aria-label="'.concat(e ? "next slide" : "previous slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="').concat(e ? "previous slide" : "next slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = kh(t, ".navigate-left"), this.controlsRight = kh(t, ".navigate-right"), this.controlsUp = kh(t, ".navigate-up"), this.controlsDown = kh(t, ".navigate-down"), this.controlsPrev = kh(t, ".navigate-prev"), this.controlsNext = kh(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
                }
            },
            {
                key: "configure",
                value: function(e, t) {
                    this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
                }
            },
            {
                key: "bind",
                value: function() {
                    var e = this, t31 = [
                        "touchstart",
                        "click"
                    ];
                    Fh && (t31 = [
                        "touchstart"
                    ]), t31.forEach(function(t) {
                        e.controlsLeft.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateLeftClicked, !1);
                        }), e.controlsRight.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateRightClicked, !1);
                        }), e.controlsUp.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateUpClicked, !1);
                        }), e.controlsDown.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateDownClicked, !1);
                        }), e.controlsPrev.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigatePrevClicked, !1);
                        }), e.controlsNext.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateNextClicked, !1);
                        });
                    });
                }
            },
            {
                key: "unbind",
                value: function() {
                    var e = this;
                    [
                        "touchstart",
                        "click"
                    ].forEach(function(t) {
                        e.controlsLeft.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateLeftClicked, !1);
                        }), e.controlsRight.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateRightClicked, !1);
                        }), e.controlsUp.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateUpClicked, !1);
                        }), e.controlsDown.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateDownClicked, !1);
                        }), e.controlsPrev.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigatePrevClicked, !1);
                        }), e.controlsNext.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateNextClicked, !1);
                        });
                    });
                }
            },
            {
                key: "update",
                value: function() {
                    var e72 = this.Reveal.availableRoutes();
                    [].concat(Li(this.controlsLeft), Li(this.controlsRight), Li(this.controlsUp), Li(this.controlsDown), Li(this.controlsPrev), Li(this.controlsNext)).forEach(function(e) {
                        e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
                    }), e72.left && this.controlsLeft.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled");
                    }), e72.right && this.controlsRight.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled");
                    }), e72.up && this.controlsUp.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled");
                    }), e72.down && this.controlsDown.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled");
                    }), (e72.left || e72.up) && this.controlsPrev.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled");
                    }), (e72.right || e72.down) && this.controlsNext.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled");
                    });
                    var t = this.Reveal.getCurrentSlide();
                    if (t) {
                        var n = this.Reveal.fragments.availableRoutes();
                        n.prev && this.controlsPrev.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
                        }), n.next && this.controlsNext.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
                        }), this.Reveal.isVerticalSlide(t) ? (n.prev && this.controlsUp.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
                        }), n.next && this.controlsDown.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
                        })) : (n.prev && this.controlsLeft.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
                        }), n.next && this.controlsRight.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
                        }));
                    }
                    if (this.Reveal.getConfig().controlsTutorial) {
                        var i = this.Reveal.getIndices();
                        !this.Reveal.hasNavigatedVertically() && e72.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e72.left && 0 === i.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e72.right && 0 === i.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
                    }
                }
            },
            {
                key: "onNavigateLeftClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
                }
            },
            {
                key: "onNavigateRightClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
                }
            },
            {
                key: "onNavigateUpClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
                }
            },
            {
                key: "onNavigateDownClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
                }
            },
            {
                key: "onNavigatePrevClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
                }
            },
            {
                key: "onNavigateNextClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
                }
            }
        ]), e71;
    }(), gf = function() {
        function e73(t) {
            ki(this, e73), this.Reveal = t, this.onProgressClicked = this.onProgressClicked.bind(this);
        }
        return Ri(e73, [
            {
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
                }
            },
            {
                key: "configure",
                value: function(e, t) {
                    this.element.style.display = e.progress ? "block" : "none";
                }
            },
            {
                key: "bind",
                value: function() {
                    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
                }
            },
            {
                key: "unbind",
                value: function() {
                    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
                }
            },
            {
                key: "update",
                value: function() {
                    if (this.Reveal.getConfig().progress && this.bar) {
                        var e = this.Reveal.getProgress();
                        this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")";
                    }
                }
            },
            {
                key: "getMaxWidth",
                value: function() {
                    return this.Reveal.getRevealElement().offsetWidth;
                }
            },
            {
                key: "onProgressClicked",
                value: function(e) {
                    this.Reveal.onUserInput(e), e.preventDefault();
                    var t = this.Reveal.getSlides(), n = t.length, i = Math.floor(e.clientX / this.getMaxWidth() * n);
                    this.Reveal.getConfig().rtl && (i = n - i);
                    var r = this.Reveal.getIndices(t[i]);
                    this.Reveal.slide(r.h, r.v);
                }
            }
        ]), e73;
    }(), pf = function() {
        function e74(t) {
            ki(this, e74), this.Reveal = t, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
        }
        return Ri(e74, [
            {
                key: "configure",
                value: function(e, t) {
                    e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
                }
            },
            {
                key: "showCursor",
                value: function() {
                    this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
                }
            },
            {
                key: "hideCursor",
                value: function() {
                    !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
                }
            },
            {
                key: "onDocumentCursorActive",
                value: function(e) {
                    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
                }
            },
            {
                key: "onDocumentMouseScroll",
                value: function(e) {
                    if (Date.now() - this.lastMouseWheelStep > 1000) {
                        this.lastMouseWheelStep = Date.now();
                        var t = e.detail || -e.wheelDelta;
                        t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
                    }
                }
            }
        ]), e74;
    }(), mf = a1, yf = Jt, bf = b1, wf = o1.f, Sf = function(e) {
        return function(t) {
            for(var n, i = bf(t), r = yf(i), a = r.length, o = 0, s = []; a > o;)n = r[o++], mf && !wf.call(i, n) || s.push(e ? [
                n,
                i[n]
            ] : i[n]);
            return s;
        };
    }, Ef = {
        entries: Sf(!0),
        values: Sf(!1)
    }.values;
    $t({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return Ef(e);
        }
    });
    var kf = function(e75, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.async = !1, n.defer = !1, n.src = e75, "function" == typeof t && (n.onload = n.onreadystatechange = function(e) {
            ("load" === e.type || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = n.onerror = null, t());
        }, n.onerror = function(e) {
            n.onload = n.onreadystatechange = n.onerror = null, t(new Error("Failed loading script: " + n.src + "\n" + e));
        });
        var i = document.querySelector("head");
        i.insertBefore(n, i.lastChild);
    }, Af = function() {
        function e76(t) {
            ki(this, e76), this.Reveal = t, this.state = "idle", this.registeredPlugins = {
            }, this.asyncDependencies = [];
        }
        return Ri(e76, [
            {
                key: "load",
                value: function(e77, t32) {
                    var n = this;
                    return this.state = "loading", e77.forEach(this.registerPlugin.bind(this)), new Promise(function(e78) {
                        var i = [], r = 0;
                        if (t32.forEach(function(e) {
                            e.condition && !e.condition() || (e.async ? n.asyncDependencies.push(e) : i.push(e));
                        }), i.length) {
                            r = i.length;
                            var a = function(t) {
                                t && "function" == typeof t.callback && t.callback(), 0 == --r && n.initPlugins().then(e78);
                            };
                            i.forEach(function(e) {
                                "string" == typeof e.id ? (n.registerPlugin(e), a(e)) : "string" == typeof e.src ? kf(e.src, function() {
                                    return a(e);
                                }) : (console.warn("Unrecognized plugin format", e), a());
                            });
                        } else n.initPlugins().then(e78);
                    });
                }
            },
            {
                key: "initPlugins",
                value: function() {
                    var e = this;
                    return new Promise(function(t33) {
                        var n = Object.values(e.registeredPlugins), i7 = n.length;
                        if (0 === i7) e.loadAsync().then(t33);
                        else {
                            var r, a = function() {
                                0 == --i7 ? e.loadAsync().then(t33) : r();
                            }, o = 0;
                            (r = function() {
                                var t = n[o++];
                                if ("function" == typeof t.init) {
                                    var i = t.init(e.Reveal);
                                    i && "function" == typeof i.then ? i.then(a) : a();
                                } else a();
                            })();
                        }
                    });
                }
            },
            {
                key: "loadAsync",
                value: function() {
                    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(function(e) {
                        kf(e.src, e.callback);
                    }), Promise.resolve();
                }
            },
            {
                key: "registerPlugin",
                value: function(e) {
                    2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
                    var t = e.id;
                    "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered');
                }
            },
            {
                key: "hasPlugin",
                value: function(e) {
                    return !!this.registeredPlugins[e];
                }
            },
            {
                key: "getPlugin",
                value: function(e) {
                    return this.registeredPlugins[e];
                }
            },
            {
                key: "getRegisteredPlugins",
                value: function() {
                    return this.registeredPlugins;
                }
            }
        ]), e76;
    }();
    !function(e79) {
        var t34 = function(e80) {
            var t35, n17 = Object.prototype, i8 = n17.hasOwnProperty, r6 = "function" == typeof Symbol ? Symbol : {
            }, a5 = r6.iterator || "@@iterator", o3 = r6.asyncIterator || "@@asyncIterator", s2 = r6.toStringTag || "@@toStringTag";
            function l3(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                l3({
                }, "");
            } catch (e81) {
                l3 = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function c2(e82, t36, n18, i9) {
                var r7 = t36 && t36.prototype instanceof p ? t36 : p, a6 = Object.create(r7.prototype), o4 = new P(i9 || []);
                return a6._invoke = (function(e, t, n) {
                    var i = d2;
                    return function(r, a) {
                        if (i === f) throw new Error("Generator is already running");
                        if (i === v) {
                            if ("throw" === r) throw a;
                            return N();
                        }
                        for(n.method = r, n.arg = a;;){
                            var o = n.delegate;
                            if (o) {
                                var s = R(o, n);
                                if (s) {
                                    if (s === g) continue;
                                    return s;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === d2) throw i = v, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = f;
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (i = n.done ? v : h, l.arg === g) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                };
                            }
                            "throw" === l.type && (i = v, n.method = "throw", n.arg = l.arg);
                        }
                    };
                })(e82, n18, o4), a6;
            }
            function u(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e83) {
                    return {
                        type: "throw",
                        arg: e83
                    };
                }
            }
            e80.wrap = c2;
            var d2 = "suspendedStart", h = "suspendedYield", f = "executing", v = "completed", g = {
            };
            function p() {
            }
            function m() {
            }
            function y() {
            }
            var b = {
            };
            b[a5] = function() {
                return this;
            };
            var w = Object.getPrototypeOf, S = w && w(w(C([])));
            S && S !== n17 && i8.call(S, a5) && (b = S);
            var E = y.prototype = p.prototype = Object.create(b);
            function k(e84) {
                [
                    "next",
                    "throw",
                    "return"
                ].forEach(function(t) {
                    l3(e84, t, function(e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function A(e85, t37) {
                function n(r, a, o, s) {
                    var l = u(e85[r], e85, a);
                    if ("throw" !== l.type) {
                        var c = l.arg, d = c.value;
                        return d && "object" == typeof d && i8.call(d, "__await") ? t37.resolve(d.__await).then(function(e) {
                            n("next", e, o, s);
                        }, function(e) {
                            n("throw", e, o, s);
                        }) : t37.resolve(d).then(function(e) {
                            c.value = e, o(c);
                        }, function(e) {
                            return n("throw", e, o, s);
                        });
                    }
                    s(l.arg);
                }
                var r8;
                this._invoke = function(e, i) {
                    function a() {
                        return new t37(function(t, r) {
                            n(e, i, t, r);
                        });
                    }
                    return r8 = r8 ? r8.then(a, a) : a();
                };
            }
            function R(e, n) {
                var i = e.iterator[n.method];
                if (i === t35) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (e.iterator.return && (n.method = "return", n.arg = t35, R(e, n), "throw" === n.method)) return g;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return g;
                }
                var r = u(i, e.iterator, n.arg);
                if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, g;
                var a = r.arg;
                return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t35), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g);
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }
            function L(e) {
                var t = e.completion || {
                };
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function P(e) {
                this.tryEntries = [
                    {
                        tryLoc: "root"
                    }
                ], e.forEach(x, this), this.reset(!0);
            }
            function C(e) {
                if (e) {
                    var n19 = e[a5];
                    if (n19) return n19.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function n() {
                            for(; ++r < e.length;)if (i8.call(e, r)) return n.value = e[r], n.done = !1, n;
                            return n.value = t35, n.done = !0, n;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: N
                };
            }
            function N() {
                return {
                    value: t35,
                    done: !0
                };
            }
            return m.prototype = E.constructor = y, y.constructor = m, m.displayName = l3(y, s2, "GeneratorFunction"), e80.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
            }, e80.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l3(e, s2, "GeneratorFunction")), e.prototype = Object.create(E), e;
            }, e80.awrap = function(e) {
                return {
                    __await: e
                };
            }, k(A.prototype), A.prototype[o3] = function() {
                return this;
            }, e80.AsyncIterator = A, e80.async = function(t, n, i, r, a) {
                void 0 === a && (a = Promise);
                var o = new A(c2(t, n, i, r), a);
                return e80.isGeneratorFunction(n) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next();
                });
            }, k(E), l3(E, s2, "Generator"), E[a5] = function() {
                return this;
            }, E.toString = function() {
                return "[object Generator]";
            }, e80.keys = function(e) {
                var t = [];
                for(var n20 in e)t.push(n20);
                return t.reverse(), function n() {
                    for(; t.length;){
                        var i = t.pop();
                        if (i in e) return n.value = i, n.done = !1, n;
                    }
                    return n.done = !0, n;
                };
            }, e80.values = C, P.prototype = {
                constructor: P,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t35, this.done = !1, this.delegate = null, this.method = "next", this.arg = t35, this.tryEntries.forEach(L), !e) for(var n in this)"t" === n.charAt(0) && i8.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t35);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var n = this;
                    function r9(i, r) {
                        return s.type = "throw", s.arg = e, n.next = i, r && (n.method = "next", n.arg = t35), !!r;
                    }
                    for(var a = this.tryEntries.length - 1; a >= 0; --a){
                        var o = this.tryEntries[a], s = o.completion;
                        if ("root" === o.tryLoc) return r9("end");
                        if (o.tryLoc <= this.prev) {
                            var l = i8.call(o, "catchLoc"), c = i8.call(o, "finallyLoc");
                            if (l && c) {
                                if (this.prev < o.catchLoc) return r9(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return r9(o.finallyLoc);
                            } else if (l) {
                                if (this.prev < o.catchLoc) return r9(o.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return r9(o.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for(var n = this.tryEntries.length - 1; n >= 0; --n){
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && i8.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break;
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var o = a ? a.completion : {
                    };
                    return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(o);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
                },
                finish: function(e) {
                    for(var t = this.tryEntries.length - 1; t >= 0; --t){
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), g;
                    }
                },
                catch: function(e) {
                    for(var t = this.tryEntries.length - 1; t >= 0; --t){
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var r = i.arg;
                                L(n);
                            }
                            return r;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, n, i) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: n,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = t35), g;
                }
            }, e80;
        }(e79.exports);
        try {
            regeneratorRuntime = t34;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t34);
        }
    }({
        exports: {
        }
    });
    var Rf = function() {
        function e86(t) {
            ki(this, e86), this.Reveal = t;
        }
        var t38, n21;
        return Ri(e86, [
            {
                key: "setupPDF",
                value: (t38 = regeneratorRuntime.mark(function e87() {
                    var t39, n22, i, r10, a, o, s, l, c, u, d3, h2 = this;
                    return regeneratorRuntime.wrap(function(e88) {
                        for(;;)switch(e88.prev = e88.next){
                            case 0:
                                return t39 = this.Reveal.getConfig(), n22 = kh(this.Reveal.getRevealElement(), Jd), i = t39.slideNumber && /all|print/i.test(t39.showSlideNumber), r10 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), a = Math.floor(r10.width * (1 + t39.margin)), o = Math.floor(r10.height * (1 + t39.margin)), s = r10.width, l = r10.height, e88.next = 8, new Promise(requestAnimationFrame);
                            case 8:
                                return Nh("@page{size:" + a + "px " + o + "px; margin: 0px;}"), Nh(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + s + "px; max-height:" + l + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = a + "px", document.body.style.height = o + "px", e88.next = 15, new Promise(requestAnimationFrame);
                            case 15:
                                return this.Reveal.layoutSlideContents(s, l), n22.forEach(function(e) {
                                    return h2.Reveal.slideContent.layout(e);
                                }), e88.next = 19, new Promise(requestAnimationFrame);
                            case 19:
                                return c = n22.map(function(e) {
                                    return e.scrollHeight;
                                }), u = [], d3 = n22[0].parentNode, n22.forEach(function(e89, n) {
                                    if (!1 === e89.classList.contains("stack")) {
                                        var r = (a - s) / 2, d = (o - l) / 2, h = c[n], f = Math.max(Math.ceil(h / o), 1);
                                        (1 === (f = Math.min(f, t39.pdfMaxPagesPerSlide)) && t39.center || e89.classList.contains("center")) && (d = Math.max((o - h) / 2, 0));
                                        var v = document.createElement("div");
                                        if (u.push(v), v.className = "pdf-page", v.style.height = (o + t39.pdfPageHeightOffset) * f + "px", v.appendChild(e89), e89.style.left = r + "px", e89.style.top = d + "px", e89.style.width = s + "px", e89.slideBackgroundElement && v.insertBefore(e89.slideBackgroundElement, e89), t39.showNotes) {
                                            var g = this.Reveal.getSlideNotes(e89);
                                            if (g) {
                                                var p = "string" == typeof t39.showNotes ? t39.showNotes : "inline", m = document.createElement("div");
                                                m.classList.add("speaker-notes"), m.classList.add("speaker-notes-pdf"), m.setAttribute("data-layout", p), m.innerHTML = g, "separate-page" === p ? u.push(m) : (m.style.left = "8px", m.style.bottom = "8px", m.style.width = a - 16 + "px", v.appendChild(m));
                                            }
                                        }
                                        if (i) {
                                            var y = n + 1, b = document.createElement("div");
                                            b.classList.add("slide-number"), b.classList.add("slide-number-pdf"), b.innerHTML = y, v.appendChild(b);
                                        }
                                        if (t39.pdfSeparateFragments) {
                                            var w, S = this.Reveal.fragments.sort(v.querySelectorAll(".fragment"), !0);
                                            S.forEach(function(e90) {
                                                w && w.forEach(function(e) {
                                                    e.classList.remove("current-fragment");
                                                }), e90.forEach(function(e) {
                                                    e.classList.add("visible", "current-fragment");
                                                }, this);
                                                var t = v.cloneNode(!0);
                                                u.push(t), w = e90;
                                            }, this), S.forEach(function(e91) {
                                                e91.forEach(function(e) {
                                                    e.classList.remove("visible", "current-fragment");
                                                });
                                            });
                                        } else kh(v, ".fragment:not(.fade-out)").forEach(function(e) {
                                            e.classList.add("visible");
                                        });
                                    }
                                }, this), e88.next = 25, new Promise(requestAnimationFrame);
                            case 25:
                                u.forEach(function(e) {
                                    return d3.appendChild(e);
                                }), this.Reveal.dispatchEvent({
                                    type: "pdf-ready"
                                });
                            case 27:
                            case "end":
                                return e88.stop();
                        }
                    }, e87, this);
                }), n21 = function() {
                    var e92 = this, n = arguments;
                    return new Promise(function(i, r) {
                        var a = t38.apply(e92, n);
                        function o(e) {
                            Ei(a, i, r, o, s, "next", e);
                        }
                        function s(e) {
                            Ei(a, i, r, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                }, function() {
                    return n21.apply(this, arguments);
                })
            },
            {
                key: "isPrintingPDF",
                value: function() {
                    return /print-pdf/gi.test(window.location.search);
                }
            }
        ]), e86;
    }(), xf = function() {
        function e93(t) {
            ki(this, e93), this.Reveal = t, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
        }
        return Ri(e93, [
            {
                key: "bind",
                value: function() {
                    var e = this.Reveal.getRevealElement();
                    "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
                }
            },
            {
                key: "unbind",
                value: function() {
                    var e = this.Reveal.getRevealElement();
                    e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1);
                }
            },
            {
                key: "isSwipePrevented",
                value: function(e) {
                    if (Lh(e, "video, audio")) return !0;
                    for(; e && "function" == typeof e.hasAttribute;){
                        if (e.hasAttribute("data-prevent-swipe")) return !0;
                        e = e.parentNode;
                    }
                    return !1;
                }
            },
            {
                key: "onTouchStart",
                value: function(e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length;
                }
            },
            {
                key: "onTouchMove",
                value: function(e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    var t = this.Reveal.getConfig();
                    if (this.touchCaptured) Fh && e.preventDefault();
                    else {
                        this.Reveal.onUserInput(e);
                        var n = e.touches[0].clientX, i = e.touches[0].clientY;
                        if (1 === e.touches.length && 2 !== this.touchStartCount) {
                            var r = this.Reveal.availableRoutes({
                                includeFragments: !0
                            }), a = n - this.touchStartX, o = i - this.touchStartY;
                            a > 40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o > 40 && r.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : o < -40 && r.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault();
                        }
                    }
                }
            },
            {
                key: "onTouchEnd",
                value: function(e) {
                    this.touchCaptured = !1;
                }
            },
            {
                key: "onPointerDown",
                value: function(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [
                        {
                            clientX: e.clientX,
                            clientY: e.clientY
                        }
                    ], this.onTouchStart(e));
                }
            },
            {
                key: "onPointerMove",
                value: function(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [
                        {
                            clientX: e.clientX,
                            clientY: e.clientY
                        }
                    ], this.onTouchMove(e));
                }
            },
            {
                key: "onPointerUp",
                value: function(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [
                        {
                            clientX: e.clientX,
                            clientY: e.clientY
                        }
                    ], this.onTouchEnd(e));
                }
            }
        ]), e93;
    }(), Lf = "focus", Pf = "blur", Cf = function() {
        function e94(t) {
            ki(this, e94), this.Reveal = t, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
        }
        return Ri(e94, [
            {
                key: "configure",
                value: function(e, t) {
                    e.embedded ? this.blur() : (this.focus(), this.unbind());
                }
            },
            {
                key: "bind",
                value: function() {
                    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
                }
            },
            {
                key: "unbind",
                value: function() {
                    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
                }
            },
            {
                key: "focus",
                value: function() {
                    this.state !== Lf && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = Lf;
                }
            },
            {
                key: "blur",
                value: function() {
                    this.state !== Pf && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = Pf;
                }
            },
            {
                key: "isFocused",
                value: function() {
                    return this.state === Lf;
                }
            },
            {
                key: "onRevealPointerDown",
                value: function(e) {
                    this.focus();
                }
            },
            {
                key: "onDocumentPointerDown",
                value: function(e) {
                    var t = Ph(e.target, ".reveal");
                    t && t === this.Reveal.getRevealElement() || this.blur();
                }
            }
        ]), e94;
    }(), Nf = function() {
        function e95(t) {
            ki(this, e95), this.Reveal = t;
        }
        return Ri(e95, [
            {
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
                }
            },
            {
                key: "configure",
                value: function(e, t) {
                    e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline");
                }
            },
            {
                key: "update",
                value: function() {
                    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
                }
            },
            {
                key: "updateVisibility",
                value: function() {
                    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
                }
            },
            {
                key: "hasNotes",
                value: function() {
                    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
                }
            },
            {
                key: "isSpeakerNotesWindow",
                value: function() {
                    return !!window.location.search.match(/receiver/gi);
                }
            },
            {
                key: "getSlideNotes",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
                    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
                    var t = e.querySelector("aside.notes");
                    return t ? t.innerHTML : null;
                }
            }
        ]), e95;
    }(), If = A1, Mf = ct, Tf = at1, Of = Hs, Df = _1, jf = Dn("unscopables"), Ff = Array.prototype;
    null == Ff[jf] && Df.f(Ff, jf, {
        configurable: !0,
        value: Of(null)
    });
    var zf = function(e) {
        Ff[jf][e] = !0;
    };
    $t({
        target: "Array",
        proto: !0
    }, {
        fill: function(e) {
            for(var t = If(this), n = Tf(t.length), i = arguments.length, r = Mf(i > 1 ? arguments[1] : void 0, n), a = i > 2 ? arguments[2] : void 0, o = void 0 === a ? n : Mf(a, n); o > r;)t[r++] = e;
            return t;
        }
    }), zf("fill");
    var Hf = function() {
        function e96(t, n) {
            ki(this, e96), this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = t, this.progressCheck = n, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
        }
        return Ri(e96, [
            {
                key: "setPlaying",
                value: function(e) {
                    var t = this.playing;
                    this.playing = e, !t && this.playing ? this.animate() : this.render();
                }
            },
            {
                key: "animate",
                value: function() {
                    var e = this.progress;
                    this.progress = this.progressCheck(), e > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.playing ? this.progress : 0, t = this.diameter2 - this.thickness, n = this.diameter2, i = this.diameter2, r = 28;
                    this.progressOffset += 0.1 * (1 - this.progressOffset);
                    var a = -Math.PI / 2 + e * (2 * Math.PI), o = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
                    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(n, i, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(n, i, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(n, i, t, o, a, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(n - 14, i - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, r), this.context.fillRect(18, 0, 10, r)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, r), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    this.canvas.addEventListener(e, t, !1);
                }
            },
            {
                key: "off",
                value: function(e, t) {
                    this.canvas.removeEventListener(e, t, !1);
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
                }
            }
        ]), e96;
    }(), Uf = {
        width: 960,
        height: 700,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2,
        controls: !0,
        controlsTutorial: !0,
        controlsLayout: "bottom-right",
        controlsBackArrows: "faded",
        progress: !0,
        slideNumber: !1,
        showSlideNumber: "all",
        hashOneBasedIndex: !1,
        hash: !1,
        respondToHashChanges: !0,
        history: !1,
        keyboard: !0,
        keyboardCondition: null,
        disableLayout: !1,
        overview: !0,
        center: !0,
        touch: !0,
        loop: !1,
        rtl: !1,
        navigationMode: "default",
        shuffle: !1,
        fragments: !0,
        fragmentInURL: !0,
        embedded: !1,
        help: !0,
        pause: !0,
        showNotes: !1,
        showHiddenSlides: !1,
        autoPlayMedia: null,
        preloadIframes: null,
        autoAnimate: !0,
        autoAnimateMatcher: null,
        autoAnimateEasing: "ease",
        autoAnimateDuration: 1,
        autoAnimateUnmatched: !0,
        autoAnimateStyles: [
            "opacity",
            "color",
            "background-color",
            "padding",
            "font-size",
            "line-height",
            "letter-spacing",
            "border-width",
            "border-color",
            "border-radius",
            "outline",
            "outline-offset"
        ],
        autoSlide: 0,
        autoSlideStoppable: !0,
        autoSlideMethod: null,
        defaultTiming: null,
        mouseWheel: !1,
        previewLinks: !1,
        postMessage: !0,
        postMessageEvents: !1,
        focusBodyOnPageVisibilityChange: !0,
        transition: "slide",
        transitionSpeed: "default",
        backgroundTransition: "fade",
        parallaxBackgroundImage: "",
        parallaxBackgroundSize: "",
        parallaxBackgroundRepeat: "",
        parallaxBackgroundPosition: "",
        parallaxBackgroundHorizontal: null,
        parallaxBackgroundVertical: null,
        pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
        pdfSeparateFragments: !0,
        pdfPageHeightOffset: -1,
        viewDistance: 3,
        mobileViewDistance: 2,
        display: "block",
        hideInactiveCursor: !0,
        hideCursorTime: 5000,
        dependencies: [],
        plugins: []
    }, Bf = "4.2.0";
    function _f(e97, t40) {
        arguments.length < 2 && (t40 = arguments[0], e97 = document.querySelector(".reveal"));
        var n23, i10, r11, a7, o5, s3 = {
        }, l4 = {
        }, c3 = !1, u2 = {
            hasNavigatedHorizontally: !1,
            hasNavigatedVertically: !1
        }, d4 = [], h3 = 1, f2 = {
            layout: "",
            overview: ""
        }, v = {
        }, g = "idle", p2 = 0, m2 = 0, y2 = -1, b2 = !1, w = new _h(s3), S = new qh(s3), E = new cf(s3), k = new Vh(s3), A = new uf(s3), R = new df(s3), x2 = new hf(s3), L = new ff(s3), P = new vf(s3), C = new gf(s3), N2 = new pf(s3), I2 = new Af(s3), M = new Rf(s3), T = new Cf(s3), O = new xf(s3), D = new Nf(s3);
        function j(n) {
            if (!e97) throw 'Unable to find presentation root (<div class="reveal">).';
            if (v.wrapper = e97, v.slides = e97.querySelector(".slides"), !v.slides) throw 'Unable to find slides container (<div class="slides">).';
            return l4 = wi(wi(wi(wi(wi({
            }, Uf), l4), t40), n), Ih()), F(), window.addEventListener("load", oe, !1), I2.load(l4.plugins, l4.dependencies).then(z), new Promise(function(e) {
                return s3.on("ready", e);
            });
        }
        function F() {
            !0 === l4.embedded ? v.viewport = Ph(e97, ".reveal-viewport") || e97 : (v.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), v.viewport.classList.add("reveal-viewport");
        }
        function z() {
            c3 = !0, H(), U(), V(), W(), Ae(), K(), L.readURL(), k.update(!0), setTimeout(function() {
                v.slides.classList.remove("no-transition"), v.wrapper.classList.add("ready"), Q({
                    type: "ready",
                    data: {
                        indexh: n23,
                        indexv: i10,
                        currentSlide: a7
                    }
                });
            }, 1), M.isPrintingPDF() && ($(), "complete" === document.readyState ? M.setupPDF() : window.addEventListener("load", function() {
                M.setupPDF();
            }));
        }
        function H() {
            l4.showHiddenSlides || kh(v.wrapper, 'section[data-visibility="hidden"]').forEach(function(e) {
                e.parentNode.removeChild(e);
            });
        }
        function U() {
            v.slides.classList.add("no-transition"), Dh ? v.wrapper.classList.add("no-hover") : v.wrapper.classList.remove("no-hover"), k.render(), S.render(), P.render(), C.render(), D.render(), v.pauseOverlay = Ch(v.wrapper, "div", "pause-overlay", l4.controls ? '<button class="resume-button">Resume presentation</button>' : null), v.statusElement = B(), v.wrapper.setAttribute("role", "application");
        }
        function B() {
            var e = v.wrapper.querySelector(".aria-status");
            return e || ((e = document.createElement("div")).style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), v.wrapper.appendChild(e)), e;
        }
        function _(e) {
            v.statusElement.textContent = e;
        }
        function q(e98) {
            var t = "";
            if (3 === e98.nodeType) t += e98.textContent;
            else if (1 === e98.nodeType) {
                var n = e98.getAttribute("aria-hidden"), i = "none" === window.getComputedStyle(e98).display;
                "true" === n || i || Array.from(e98.childNodes).forEach(function(e) {
                    t += q(e);
                });
            }
            return "" === (t = t.trim()) ? "" : t + " ";
        }
        function W() {
            setInterval(function() {
                0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft || (v.wrapper.scrollTop = 0, v.wrapper.scrollLeft = 0);
            }, 1000);
        }
        function V() {
            l4.postMessage && window.addEventListener("message", function(e) {
                var t = e.data;
                if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t)).method && "function" == typeof s3[t.method]) {
                    if (!1 === eh.test(t.method)) {
                        var n = s3[t.method].apply(s3, t.args);
                        Z("callback", {
                            method: t.method,
                            result: n
                        });
                    } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
                }
            }, !1);
        }
        function K(e) {
            var t = wi({
            }, l4);
            if ("object" === Si(e) && Eh(l4, e), !1 !== s3.isReady()) {
                var n = v.wrapper.querySelectorAll(Jd).length;
                v.wrapper.classList.remove(t.transition), v.wrapper.classList.add(l4.transition), v.wrapper.setAttribute("data-transition-speed", l4.transitionSpeed), v.wrapper.setAttribute("data-background-transition", l4.backgroundTransition), v.viewport.style.setProperty("--slide-width", l4.width + "px"), v.viewport.style.setProperty("--slide-height", l4.height + "px"), l4.shuffle && Re(), Ah(v.wrapper, "embedded", l4.embedded), Ah(v.wrapper, "rtl", l4.rtl), Ah(v.wrapper, "center", l4.center), !1 === l4.pause && pe(), l4.previewLinks ? (ee(), te("[data-preview-link=false]")) : (te(), ee("[data-preview-link]:not([data-preview-link=false])")), E.reset(), o5 && (o5.destroy(), o5 = null), n > 1 && l4.autoSlide && l4.autoSlideStoppable && ((o5 = new Hf(v.wrapper, function() {
                    return Math.min(Math.max((Date.now() - y2) / p2, 0), 1);
                })).on("click", ot), b2 = !1), "default" !== l4.navigationMode ? v.wrapper.setAttribute("data-navigation-mode", l4.navigationMode) : v.wrapper.removeAttribute("data-navigation-mode"), D.configure(l4, t), T.configure(l4, t), N2.configure(l4, t), P.configure(l4, t), C.configure(l4, t), x2.configure(l4, t), A.configure(l4, t), S.configure(l4, t), Ee();
            }
        }
        function Y() {
            window.addEventListener("resize", it, !1), l4.touch && O.bind(), l4.keyboard && x2.bind(), l4.progress && C.bind(), l4.respondToHashChanges && L.bind(), P.bind(), T.bind(), v.slides.addEventListener("click", nt, !1), v.slides.addEventListener("transitionend", tt, !1), v.pauseOverlay.addEventListener("click", pe, !1), l4.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", rt, !1);
        }
        function $() {
            O.unbind(), T.unbind(), x2.unbind(), P.unbind(), C.unbind(), L.unbind(), window.removeEventListener("resize", it, !1), v.slides.removeEventListener("click", nt, !1), v.slides.removeEventListener("transitionend", tt, !1), v.pauseOverlay.removeEventListener("click", pe, !1);
        }
        function X(t, n, i) {
            e97.addEventListener(t, n, i);
        }
        function G(t, n, i) {
            e97.removeEventListener(t, n, i);
        }
        function J(e) {
            "string" == typeof e.layout && (f2.layout = e.layout), "string" == typeof e.overview && (f2.overview = e.overview), f2.layout ? xh(v.slides, f2.layout + " " + f2.overview) : xh(v.slides, f2.overview);
        }
        function Q(e) {
            var t = e.target, n = void 0 === t ? v.wrapper : t, i = e.type, r = e.data, a = e.bubbles, o = void 0 === a || a, s = document.createEvent("HTMLEvents", 1, 2);
            return s.initEvent(i, o, !0), Eh(s, r), n.dispatchEvent(s), n === v.wrapper && Z(i), s;
        }
        function Z(e, t) {
            if (l4.postMessageEvents && window.parent !== window.self) {
                var n = {
                    namespace: "reveal",
                    eventName: e,
                    state: _e()
                };
                Eh(n, t), window.parent.postMessage(JSON.stringify(n), "*");
            }
        }
        function ee() {
            var e99 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
            Array.from(v.wrapper.querySelectorAll(e99)).forEach(function(e) {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", at, !1);
            });
        }
        function te() {
            var e100 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
            Array.from(v.wrapper.querySelectorAll(e100)).forEach(function(e) {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", at, !1);
            });
        }
        function ne(e101) {
            ae(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-preview"), v.wrapper.appendChild(v.overlay), v.overlay.innerHTML = '<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="'.concat(e101, '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="').concat(e101, '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'), v.overlay.querySelector("iframe").addEventListener("load", function(e) {
                v.overlay.classList.add("loaded");
            }, !1), v.overlay.querySelector(".close").addEventListener("click", function(e) {
                ae(), e.preventDefault();
            }, !1), v.overlay.querySelector(".external").addEventListener("click", function(e) {
                ae();
            }, !1);
        }
        function ie(e) {
            "boolean" == typeof e ? e ? re() : ae() : v.overlay ? ae() : re();
        }
        function re() {
            if (l4.help) {
                ae(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-help"), v.wrapper.appendChild(v.overlay);
                var e102 = '<p class="title">Keyboard Shortcuts</p><br/>', t = x2.getShortcuts(), n = x2.getBindings();
                for(var i in e102 += "<table><th>KEY</th><th>ACTION</th>", t)e102 += "<tr><td>".concat(i, "</td><td>").concat(t[i], "</td></tr>");
                for(var r in n)n[r].key && n[r].description && (e102 += "<tr><td>".concat(n[r].key, "</td><td>").concat(n[r].description, "</td></tr>"));
                e102 += "</table>", v.overlay.innerHTML = '\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">'.concat(e102, "</div>\n\t\t\t\t</div>\n\t\t\t"), v.overlay.querySelector(".close").addEventListener("click", function(e) {
                    ae(), e.preventDefault();
                }, !1);
            }
        }
        function ae() {
            return !!v.overlay && (v.overlay.parentNode.removeChild(v.overlay), v.overlay = null, !0);
        }
        function oe() {
            if (v.wrapper && !M.isPrintingPDF()) {
                if (!l4.disableLayout) {
                    Dh && !l4.embedded && document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
                    var e = le(), t = h3;
                    se(l4.width, l4.height), v.slides.style.width = e.width + "px", v.slides.style.height = e.height + "px", h3 = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), h3 = Math.max(h3, l4.minScale), 1 === (h3 = Math.min(h3, l4.maxScale)) ? (v.slides.style.zoom = "", v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", J({
                        layout: ""
                    })) : h3 > 1 && zh && window.devicePixelRatio < 2 ? (v.slides.style.zoom = h3, v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", J({
                        layout: ""
                    })) : (v.slides.style.zoom = "", v.slides.style.left = "50%", v.slides.style.top = "50%", v.slides.style.bottom = "auto", v.slides.style.right = "auto", J({
                        layout: "translate(-50%, -50%) scale(" + h3 + ")"
                    }));
                    for(var n = Array.from(v.wrapper.querySelectorAll(Jd)), i = 0, r = n.length; i < r; i++){
                        var a = n[i];
                        "none" !== a.style.display && (l4.center || a.classList.contains("center") ? a.classList.contains("stack") ? a.style.top = 0 : a.style.top = Math.max((e.height - a.scrollHeight) / 2, 0) + "px" : a.style.top = "");
                    }
                    t !== h3 && Q({
                        type: "resize",
                        data: {
                            oldScale: t,
                            scale: h3,
                            size: e
                        }
                    });
                }
                C.update(), k.updateParallax(), R.isActive() && R.update();
            }
        }
        function se(e, t) {
            kh(v.slides, "section > .stretch, section > .r-stretch").forEach(function(n) {
                var i = Mh(n, t);
                if (/(img|video)/gi.test(n.nodeName)) {
                    var r = n.naturalWidth || n.videoWidth, a = n.naturalHeight || n.videoHeight, o = Math.min(e / r, i / a);
                    n.style.width = r * o + "px", n.style.height = a * o + "px";
                } else n.style.width = e + "px", n.style.height = i + "px";
            });
        }
        function le(e, t) {
            var n = {
                width: l4.width,
                height: l4.height,
                presentationWidth: e || v.wrapper.offsetWidth,
                presentationHeight: t || v.wrapper.offsetHeight
            };
            return n.presentationWidth -= n.presentationWidth * l4.margin, n.presentationHeight -= n.presentationHeight * l4.margin, "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth), "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight), n;
        }
        function ce(e, t) {
            "object" === Si(e) && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0);
        }
        function ue(e) {
            if ("object" === Si(e) && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
                var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
                return parseInt(e.getAttribute(t) || 0, 10);
            }
            return 0;
        }
        function de() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a7;
            return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
        }
        function he() {
            return !(!a7 || !de(a7)) && !a7.nextElementSibling;
        }
        function fe() {
            return 0 === n23 && 0 === i10;
        }
        function ve() {
            return !!a7 && !a7.nextElementSibling && (!de(a7) || !a7.parentNode.nextElementSibling);
        }
        function ge() {
            if (l4.pause) {
                var e = v.wrapper.classList.contains("paused");
                Ve(), v.wrapper.classList.add("paused"), !1 === e && Q({
                    type: "paused"
                });
            }
        }
        function pe() {
            var e = v.wrapper.classList.contains("paused");
            v.wrapper.classList.remove("paused"), We(), e && Q({
                type: "resumed"
            });
        }
        function me(e) {
            "boolean" == typeof e ? e ? ge() : pe() : ye() ? pe() : ge();
        }
        function ye() {
            return v.wrapper.classList.contains("paused");
        }
        function be(e) {
            "boolean" == typeof e ? e ? Ye() : Ke() : b2 ? Ye() : Ke();
        }
        function we() {
            return !(!p2 || b2);
        }
        function Se(e103, t, o, s) {
            if (!Q({
                type: "beforeslidechange",
                data: {
                    indexh: void 0 === e103 ? n23 : e103,
                    indexv: void 0 === t ? i10 : t,
                    origin: s
                }
            }).defaultPrevented) {
                r11 = a7;
                var c = v.wrapper.querySelectorAll(Qd);
                if (0 !== c.length) {
                    void 0 !== t || R.isActive() || (t = ue(c[e103])), r11 && r11.parentNode && r11.parentNode.classList.contains("stack") && ce(r11.parentNode, i10);
                    var u = d4.concat();
                    d4.length = 0;
                    var h = n23 || 0, f = i10 || 0;
                    n23 = xe(Qd, void 0 === e103 ? n23 : e103), i10 = xe(Zd, void 0 === t ? i10 : t);
                    var p = n23 !== h || i10 !== f;
                    p || (r11 = null);
                    var m = c[n23], y = m.querySelectorAll("section");
                    a7 = y[i10] || m;
                    var b = !1;
                    p && r11 && a7 && !R.isActive() && (r11.hasAttribute("data-auto-animate") && a7.hasAttribute("data-auto-animate") && r11.getAttribute("data-auto-animate-id") === a7.getAttribute("data-auto-animate-id") && !(n23 > h || i10 > f ? a7 : r11).hasAttribute("data-auto-animate-restart") && (b = !0, v.slides.classList.add("disable-slide-transitions")), g = "running"), Le(), oe(), R.isActive() && R.update(), void 0 !== o && A.goto(o), r11 && r11 !== a7 && (r11.classList.remove("present"), r11.setAttribute("aria-hidden", "true"), fe() && setTimeout(function() {
                        De().forEach(function(e) {
                            ce(e, 0);
                        });
                    }, 0));
                    e: for(var x = 0, N = d4.length; x < N; x++){
                        for(var I = 0; I < u.length; I++)if (u[I] === d4[x]) {
                            u.splice(I, 1);
                            continue e;
                        }
                        v.viewport.classList.add(d4[x]), Q({
                            type: d4[x]
                        });
                    }
                    for(; u.length;)v.viewport.classList.remove(u.pop());
                    p && Q({
                        type: "slidechanged",
                        data: {
                            indexh: n23,
                            indexv: i10,
                            previousSlide: r11,
                            currentSlide: a7,
                            origin: s
                        }
                    }), !p && r11 || (w.stopEmbeddedContent(r11), w.startEmbeddedContent(a7)), requestAnimationFrame(function() {
                        _(q(a7));
                    }), C.update(), P.update(), D.update(), k.update(), k.updateParallax(), S.update(), A.update(), L.writeURL(), We(), b && (setTimeout(function() {
                        v.slides.classList.remove("disable-slide-transitions");
                    }, 0), l4.autoAnimate && E.run(r11, a7));
                }
            }
        }
        function Ee() {
            $(), Y(), oe(), p2 = l4.autoSlide, We(), k.create(), L.writeURL(), A.sortAll(), P.update(), C.update(), Le(), D.update(), D.updateVisibility(), k.update(!0), S.update(), w.formatEmbeddedContent(), !1 === l4.autoPlayMedia ? w.stopEmbeddedContent(a7, {
                unloadIframes: !1
            }) : w.startEmbeddedContent(a7), R.isActive() && R.layout();
        }
        function ke() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a7;
            k.sync(e), A.sync(e), w.load(e), k.update(), D.update();
        }
        function Ae() {
            Te().forEach(function(e104) {
                kh(e104, "section").forEach(function(e, t) {
                    t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
                });
            });
        }
        function Re() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te();
            e.forEach(function(t, n) {
                var i = e[Math.floor(Math.random() * e.length)];
                i.parentNode === t.parentNode && t.parentNode.insertBefore(t, i);
                var r = t.querySelectorAll("section");
                r.length && Re(r);
            });
        }
        function xe(e105, t) {
            var n = kh(v.wrapper, e105), i = n.length, r = M.isPrintingPDF();
            if (i) {
                l4.loop && (t %= i) < 0 && (t = i + t), t = Math.max(Math.min(t, i - 1), 0);
                for(var a = 0; a < i; a++){
                    var o = n[a], s = l4.rtl && !de(o);
                    o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), r ? o.classList.add("present") : a < t ? (o.classList.add(s ? "future" : "past"), l4.fragments && kh(o, ".fragment").forEach(function(e) {
                        e.classList.add("visible"), e.classList.remove("current-fragment");
                    })) : a > t && (o.classList.add(s ? "past" : "future"), l4.fragments && kh(o, ".fragment.visible").forEach(function(e) {
                        e.classList.remove("visible", "current-fragment");
                    }));
                }
                var c = n[t], u = c.classList.contains("present");
                c.classList.add("present"), c.removeAttribute("hidden"), c.removeAttribute("aria-hidden"), u || Q({
                    target: c,
                    type: "visible",
                    bubbles: !1
                });
                var h = c.getAttribute("data-state");
                h && (d4 = d4.concat(h.split(" ")));
            } else t = 0;
            return t;
        }
        function Le() {
            var e, t = Te(), r = t.length;
            if (r && void 0 !== n23) {
                var a = R.isActive() ? 10 : l4.viewDistance;
                Dh && (a = R.isActive() ? 6 : l4.mobileViewDistance), M.isPrintingPDF() && (a = Number.MAX_VALUE);
                for(var o = 0; o < r; o++){
                    var s = t[o], c = kh(s, "section"), u = c.length;
                    if (e = Math.abs((n23 || 0) - o) || 0, l4.loop && (e = Math.abs(((n23 || 0) - o) % (r - a)) || 0), e < a ? w.load(s) : w.unload(s), u) for(var d = ue(s), h = 0; h < u; h++){
                        var f = c[h];
                        e + (o === (n23 || 0) ? Math.abs((i10 || 0) - h) : Math.abs(h - d)) < a ? w.load(f) : w.unload(f);
                    }
                }
                Fe() ? v.wrapper.classList.add("has-vertical-slides") : v.wrapper.classList.remove("has-vertical-slides"), je() ? v.wrapper.classList.add("has-horizontal-slides") : v.wrapper.classList.remove("has-horizontal-slides");
            }
        }
        function Pe() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.includeFragments, r = void 0 !== t && t, a = v.wrapper.querySelectorAll(Qd), o = v.wrapper.querySelectorAll(Zd), s = {
                left: n23 > 0,
                right: n23 < a.length - 1,
                up: i10 > 0,
                down: i10 < o.length - 1
            };
            if (l4.loop && (a.length > 1 && (s.left = !0, s.right = !0), o.length > 1 && (s.up = !0, s.down = !0)), a.length > 1 && "linear" === l4.navigationMode && (s.right = s.right || s.down, s.left = s.left || s.up), !0 === r) {
                var c = A.availableRoutes();
                s.left = s.left || c.prev, s.up = s.up || c.prev, s.down = s.down || c.next, s.right = s.right || c.next;
            }
            if (l4.rtl) {
                var u = s.left;
                s.left = s.right, s.right = u;
            }
            return s;
        }
        function Ce() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a7, t = Te(), n = 0;
            e: for(var i = 0; i < t.length; i++){
                for(var r = t[i], o = r.querySelectorAll("section"), s = 0; s < o.length; s++){
                    if (o[s] === e) break e;
                    "uncounted" !== o[s].dataset.visibility && n++;
                }
                if (r === e) break;
                !1 === r.classList.contains("stack") && "uncounted" !== r.dataset.visibility && n++;
            }
            return n;
        }
        function Ne() {
            var e = He(), t = Ce();
            if (a7) {
                var n = a7.querySelectorAll(".fragment");
                if (n.length > 0) t += a7.querySelectorAll(".fragment.visible").length / n.length * 0.9;
            }
            return Math.min(t / (e - 1), 1);
        }
        function Ie(e) {
            var t, r = n23, o = i10;
            if (e) {
                var s = de(e), l = s ? e.parentNode : e, c = Te();
                r = Math.max(c.indexOf(l), 0), o = void 0, s && (o = Math.max(kh(e.parentNode, "section").indexOf(e), 0));
            }
            if (!e && a7 && a7.querySelectorAll(".fragment").length > 0) {
                var u = a7.querySelector(".current-fragment");
                t = u && u.hasAttribute("data-fragment-index") ? parseInt(u.getAttribute("data-fragment-index"), 10) : a7.querySelectorAll(".fragment.visible").length - 1;
            }
            return {
                h: r,
                v: o,
                f: t
            };
        }
        function Me() {
            return kh(v.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])');
        }
        function Te() {
            return kh(v.wrapper, Qd);
        }
        function Oe() {
            return kh(v.wrapper, ".slides>section>section");
        }
        function De() {
            return kh(v.wrapper, ".slides>section.stack");
        }
        function je() {
            return Te().length > 1;
        }
        function Fe() {
            return Oe().length > 1;
        }
        function ze() {
            return Me().map(function(e) {
                for(var t = {
                }, n = 0; n < e.attributes.length; n++){
                    var i = e.attributes[n];
                    t[i.name] = i.value;
                }
                return t;
            });
        }
        function He() {
            return Me().length;
        }
        function Ue(e, t) {
            var n = Te()[e], i = n && n.querySelectorAll("section");
            return i && i.length && "number" == typeof t ? i ? i[t] : void 0 : n;
        }
        function Be(e, t) {
            var n = "number" == typeof e ? Ue(e, t) : e;
            if (n) return n.slideBackgroundElement;
        }
        function _e() {
            var e = Ie();
            return {
                indexh: e.h,
                indexv: e.v,
                indexf: e.f,
                paused: ye(),
                overview: R.isActive()
            };
        }
        function qe(e) {
            if ("object" === Si(e)) {
                Se(Rh(e.indexh), Rh(e.indexv), Rh(e.indexf));
                var t = Rh(e.paused), n = Rh(e.overview);
                "boolean" == typeof t && t !== ye() && me(t), "boolean" == typeof n && n !== R.isActive() && R.toggle(n);
            }
        }
        function We() {
            if (Ve(), a7 && !1 !== l4.autoSlide) {
                var e106 = a7.querySelector(".current-fragment");
                e106 || (e106 = a7.querySelector(".fragment"));
                var t = e106 ? e106.getAttribute("data-autoslide") : null, n = a7.parentNode ? a7.parentNode.getAttribute("data-autoslide") : null, i = a7.getAttribute("data-autoslide");
                t ? p2 = parseInt(t, 10) : i ? p2 = parseInt(i, 10) : n ? p2 = parseInt(n, 10) : (p2 = l4.autoSlide, 0 === a7.querySelectorAll(".fragment").length && kh(a7, "video, audio").forEach(function(e) {
                    e.hasAttribute("data-autoplay") && p2 && 1000 * e.duration / e.playbackRate > p2 && (p2 = 1000 * e.duration / e.playbackRate + 1000);
                })), !p2 || b2 || ye() || R.isActive() || ve() && !A.availableRoutes().next && !0 !== l4.loop || (m2 = setTimeout(function() {
                    "function" == typeof l4.autoSlideMethod ? l4.autoSlideMethod() : Ze(), We();
                }, p2), y2 = Date.now()), o5 && o5.setPlaying(-1 !== m2);
            }
        }
        function Ve() {
            clearTimeout(m2), m2 = -1;
        }
        function Ke() {
            p2 && !b2 && (b2 = !0, Q({
                type: "autoslidepaused"
            }), clearTimeout(m2), o5 && o5.setPlaying(!1));
        }
        function Ye() {
            p2 && b2 && (b2 = !1, Q({
                type: "autoslideresumed"
            }), We());
        }
        function $e() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.skipFragments, r = void 0 !== t && t;
            u2.hasNavigatedHorizontally = !0, l4.rtl ? (R.isActive() || r || !1 === A.next()) && Pe().left && Se(n23 + 1, "grid" === l4.navigationMode ? i10 : void 0) : (R.isActive() || r || !1 === A.prev()) && Pe().left && Se(n23 - 1, "grid" === l4.navigationMode ? i10 : void 0);
        }
        function Xe() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.skipFragments, r = void 0 !== t && t;
            u2.hasNavigatedHorizontally = !0, l4.rtl ? (R.isActive() || r || !1 === A.prev()) && Pe().right && Se(n23 - 1, "grid" === l4.navigationMode ? i10 : void 0) : (R.isActive() || r || !1 === A.next()) && Pe().right && Se(n23 + 1, "grid" === l4.navigationMode ? i10 : void 0);
        }
        function Ge() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.skipFragments, r = void 0 !== t && t;
            (R.isActive() || r || !1 === A.prev()) && Pe().up && Se(n23, i10 - 1);
        }
        function Je() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.skipFragments, r = void 0 !== t && t;
            u2.hasNavigatedVertically = !0, (R.isActive() || r || !1 === A.next()) && Pe().down && Se(n23, i10 + 1);
        }
        function Qe() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, i = t.skipFragments, r = void 0 !== i && i;
            if (r || !1 === A.prev()) {
                if (Pe().up) Ge({
                    skipFragments: r
                });
                else if ((e = l4.rtl ? kh(v.wrapper, ".slides>section.future").pop() : kh(v.wrapper, ".slides>section.past").pop()) && e.classList.contains("stack")) {
                    var a = e.querySelectorAll("section").length - 1 || void 0, o = n23 - 1;
                    Se(o, a);
                } else $e({
                    skipFragments: r
                });
            }
        }
        function Ze() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.skipFragments, n = void 0 !== t && t;
            if (u2.hasNavigatedHorizontally = !0, u2.hasNavigatedVertically = !0, n || !1 === A.next()) {
                var i = Pe();
                i.down && i.right && l4.loop && he() && (i.down = !1), i.down ? Je({
                    skipFragments: n
                }) : l4.rtl ? $e({
                    skipFragments: n
                }) : Xe({
                    skipFragments: n
                });
            }
        }
        function et(e) {
            l4.autoSlideStoppable && Ke();
        }
        function tt(e) {
            "running" === g && /section/gi.test(e.target.nodeName) && (g = "idle", Q({
                type: "slidetransitionend",
                data: {
                    indexh: n23,
                    indexv: i10,
                    previousSlide: r11,
                    currentSlide: a7
                }
            }));
        }
        function nt(e) {
            var t = Ph(e.target, 'a[href^="#"]');
            if (t) {
                var n = t.getAttribute("href"), i = L.getIndicesFromHash(n);
                i && (s3.slide(i.h, i.v, i.f), e.preventDefault());
            }
        }
        function it(e) {
            oe();
        }
        function rt(e) {
            !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
        }
        function at(e) {
            if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
                var t = e.currentTarget.getAttribute("href");
                t && (ne(t), e.preventDefault());
            }
        }
        function ot(e) {
            ve() && !1 === l4.loop ? (Se(0, 0), Ye()) : b2 ? Ye() : Ke();
        }
        var st = {
            VERSION: Bf,
            initialize: j,
            configure: K,
            sync: Ee,
            syncSlide: ke,
            syncFragments: A.sync.bind(A),
            slide: Se,
            left: $e,
            right: Xe,
            up: Ge,
            down: Je,
            prev: Qe,
            next: Ze,
            navigateLeft: $e,
            navigateRight: Xe,
            navigateUp: Ge,
            navigateDown: Je,
            navigatePrev: Qe,
            navigateNext: Ze,
            navigateFragment: A.goto.bind(A),
            prevFragment: A.prev.bind(A),
            nextFragment: A.next.bind(A),
            on: X,
            off: G,
            addEventListener: X,
            removeEventListener: G,
            layout: oe,
            shuffle: Re,
            availableRoutes: Pe,
            availableFragments: A.availableRoutes.bind(A),
            toggleHelp: ie,
            toggleOverview: R.toggle.bind(R),
            togglePause: me,
            toggleAutoSlide: be,
            isFirstSlide: fe,
            isLastSlide: ve,
            isLastVerticalSlide: he,
            isVerticalSlide: de,
            isPaused: ye,
            isAutoSliding: we,
            isSpeakerNotes: D.isSpeakerNotesWindow.bind(D),
            isOverview: R.isActive.bind(R),
            isFocused: T.isFocused.bind(T),
            isPrintingPDF: M.isPrintingPDF.bind(M),
            isReady: function() {
                return c3;
            },
            loadSlide: w.load.bind(w),
            unloadSlide: w.unload.bind(w),
            showPreview: ne,
            hidePreview: ae,
            addEventListeners: Y,
            removeEventListeners: $,
            dispatchEvent: Q,
            getState: _e,
            setState: qe,
            getProgress: Ne,
            getIndices: Ie,
            getSlidesAttributes: ze,
            getSlidePastCount: Ce,
            getTotalSlides: He,
            getSlide: Ue,
            getPreviousSlide: function() {
                return r11;
            },
            getCurrentSlide: function() {
                return a7;
            },
            getSlideBackground: Be,
            getSlideNotes: D.getSlideNotes.bind(D),
            getSlides: Me,
            getHorizontalSlides: Te,
            getVerticalSlides: Oe,
            hasHorizontalSlides: je,
            hasVerticalSlides: Fe,
            hasNavigatedHorizontally: function() {
                return u2.hasNavigatedHorizontally;
            },
            hasNavigatedVertically: function() {
                return u2.hasNavigatedVertically;
            },
            addKeyBinding: x2.addKeyBinding.bind(x2),
            removeKeyBinding: x2.removeKeyBinding.bind(x2),
            triggerKey: x2.triggerKey.bind(x2),
            registerKeyboardShortcut: x2.registerKeyboardShortcut.bind(x2),
            getComputedSlideSize: le,
            getScale: function() {
                return h3;
            },
            getConfig: function() {
                return l4;
            },
            getQueryHash: Ih,
            getRevealElement: function() {
                return e97;
            },
            getSlidesElement: function() {
                return v.slides;
            },
            getViewportElement: function() {
                return v.viewport;
            },
            getBackgroundsElement: function() {
                return k.element;
            },
            registerPlugin: I2.registerPlugin.bind(I2),
            hasPlugin: I2.hasPlugin.bind(I2),
            getPlugin: I2.getPlugin.bind(I2),
            getPlugins: I2.getRegisteredPlugins.bind(I2)
        };
        return Eh(s3, wi(wi({
        }, st), {
        }, {
            announceStatus: _,
            getStatusText: q,
            print: M,
            focus: T,
            progress: C,
            controls: P,
            location: L,
            overview: R,
            fragments: A,
            slideContent: w,
            slideNumber: S,
            onUserInput: et,
            closeOverlay: ae,
            updateSlidesVisibility: Le,
            layoutSlideContents: se,
            transformSlides: J,
            cueAutoSlide: We,
            cancelAutoSlide: Ve
        })), st;
    }
    var qf = _f, Wf = [];
    return qf.initialize = function(e107) {
        return Object.assign(qf, new _f(document.querySelector(".reveal"), e107)), Wf.map(function(e) {
            return e(qf);
        }), qf.initialize();
    }, [
        "configure",
        "on",
        "off",
        "addEventListener",
        "removeEventListener",
        "registerPlugin"
    ].forEach(function(e) {
        qf[e] = function() {
            for(var t41 = arguments.length, n = new Array(t41), i11 = 0; i11 < t41; i11++)n[i11] = arguments[i11];
            Wf.push(function(t) {
                var i;
                return (i = t[e]).call.apply(i, [
                    null
                ].concat(n));
            });
        };
    }), qf.isReady = function() {
        return !1;
    }, qf.VERSION = Bf, qf;
});

//# sourceMappingURL=slides.c157516d.js.map

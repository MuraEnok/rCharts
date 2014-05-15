;
(function() {
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, v = e.reduce, h = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, _ = Object.keys, j = i.bind, w = function(n) {
        return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.3";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s)
                n.forEach(t, e);
            else if (n.length ===+ n.length) {
                for (var u = 0, i = n.length; i > u; u++)
                    if (t.call(e, n[u], u, n) === r)
                        return 
            } else 
                for (var a in n)
                    if (w.has(n, a) && t.call(e, n[a], a, n) === r)
                        return 
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v)
            return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u=!0)
        }), !u)
            throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h)
            return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i!==+i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u=!0)
        }), !u)
            throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u=!0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u=!1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    w.contains = w.include = function(n, t) {
        return null == n?!1 : y && n.indexOf === y?-1 != n.indexOf(t) : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2);
        return w.map(n, function(n) {
            return (w.isFunction(t) ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t) {
        return w.isEmpty(t) ? [] : w.filter(n, function(n) {
            for (var r in t)
                if (t[r] !== n[r])
                    return !1;
            return !0
        })
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] ===+ n[0] && 65535 > n.length)
            return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n))
            return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i): n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] ===+ n[0] && 65535 > n.length)
            return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n))
            return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i): n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r-1] = e[t], e[t] = n
        }), e
    };
    var F = function(n) {
        return w.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = F(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r)
                    return 1;
                if (e > r || void 0 === e)
                    return -1
            }
            return n.index < t.index?-1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {}, i = F(t || w.identity);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    w.groupBy = function(n, t, r) {
        return k(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return k(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a>>>1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length ===+ n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length ===+ n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length-1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n, function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t=!1);
        var u = r ? w.map(n, r, e): n, i = [], a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length-1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++)
            r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = 0, u = n.length;
        if (r) {
            if ("number" != typeof r)
                return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y)
            return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b)
            return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t)
                return u;
        return -1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;)
            i[u++] = n, n += r;
        return i
    };
    var I = function() {};
    w.bind = function(n, t) {
        var r, e;
        if (n.bind === j && j)
            return j.apply(n, o.call(arguments, 1));
        if (!w.isFunction(n))
            throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e))
                return n.apply(t, r.concat(o.call(arguments)));
            I.prototype = n.prototype;
            var u = new I;
            I.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity), function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a = 0, o = function() {
            a = new Date, u = null, i = n.apply(r, e)
        };
        return function() {
            var c = new Date, l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this, a = arguments, o = function() {
                e = null, r || (u = n.apply(i, a))
            }, c = r&&!e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r=!1;
        return function() {
            return r ? t : (r=!0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length-1; r >= 0; r--)
                t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1>--n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ || function(n) {
        if (n !== Object(n))
            throw new TypeError("Invalid object");
        var t = [];
        for (var r in n)
            w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n)
            w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n)
            w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n)
            w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n)
            w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n)
            w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t))
            return !1;
        switch (u) {
        case"[object String]":
            return n == t + "";
        case"[object Number]":
            return n!=+n ? t!=+t : 0 == n ? 1 / n == 1 / t : n ==+ t;
        case"[object Date]":
        case"[object Boolean]":
            return + n ==+ t;
        case"[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t)
            return !1;
        for (var i = r.length; i--;)
            if (r[i] == n)
                return e[i] == t;
        r.push(n), e.push(t);
        var a = 0, o=!0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length)
                for (; a--&&(o = S(n[a], t[a], r, e)););
        } else {
            var c = n.constructor, f = t.constructor;
            if (c !== f&&!(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f))
                return !1;
            for (var s in n)
                if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e))
                    ))break;
            if (o) {
                for (s in t)
                    if (w.has(t, s)&&!a--)
                        break;
                o=!a
            }
        }
        return r.pop(), e.pop(), o
    };
    w.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (w.isArray(n) || w.isString(n))
            return 0 === n.length;
        for (var t in n)
            if (w.has(n, t))
                return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n ||!w.has(n, "callee"))
    }), w.isFunction = function(n) {
        return "function" == typeof n
    }, w.isFinite = function(n) {
        return isFinite(n)&&!isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n!=+n
    }, w.isBoolean = function(n) {
        return n===!0 || n===!1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return void 0 === n
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++)
            e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1))
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    T.unescape = w.invert(T.escape);
    var M = {
        escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(M[n], function(t) {
                return T[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n)
            return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = "" + ++N;
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        r = w.defaults({}, r, w.templateSettings);
        var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), a && (i += "';\n" + a + "\n__p+='"), u = o + t.length, t
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = Function(r.variable || "obj", "_", i)
        } catch (o) {
            throw o.source = i, o
        }
        if (t)
            return a(t, w);
        var c = function(n) {
            return a.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var z = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain=!0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);;
// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a) {
    function E(a, b, c, d) {
        var e = c.lang();
        return e[a].call ? e[a](c, d) : e[a][b]
    }
    function F(a, b) {
        return function(c) {
            return K(a.call(this, c), b)
        }
    }
    function G(a) {
        return function(b) {
            var c = a.call(this, b);
            return c + this.lang().ordinal(c)
        }
    }
    function H(a, b, c) {
        this._d = a, this._isUTC=!!b, this._a = a._a || null, this._lang = c ||!1
    }
    function I(a) {
        var b = this._data = {}, c = a.years || a.y || 0, d = a.months || a.M || 0, e = a.weeks || a.w || 0, f = a.days || a.d || 0, g = a.hours || a.h || 0, h = a.minutes || a.m || 0, i = a.seconds || a.s || 0, j = a.milliseconds || a.ms || 0;
        this._milliseconds = j + i * 1e3 + h * 6e4 + g * 36e5, this._days = f + e * 7, this._months = d + c * 12, b.milliseconds = j%1e3, i += J(j / 1e3), b.seconds = i%60, h += J(i / 60), b.minutes = h%60, g += J(h / 60), b.hours = g%24, f += J(g / 24), f += e * 7, b.days = f%30, d += J(f / 30), b.months = d%12, c += J(d / 12), b.years = c, this._lang=!1
    }
    function J(a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a)
    }
    function K(a, b) {
        var c = a + "";
        while (c.length < b)
            c = "0" + c;
        return c
    }
    function L(a, b, c) {
        var d = b._milliseconds, e = b._days, f = b._months, g;
        d && a._d.setTime( + a + d * c), e && a.date(a.date() + e * c), f && (g = a.date(), a.date(1).month(a.month() + f * c).date(Math.min(g, a.daysInMonth())))
    }
    function M(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
    function N(a, b) {
        var c = Math.min(a.length, b.length), d = Math.abs(a.length - b.length), e = 0, f;
        for (f = 0; f < c; f++)
            ~~a[f]!==~~b[f] && e++;
        return e + d
    }
    function O(a, b, c, d) {
        var e, f, g = [];
        for (e = 0; e < 7; e++)
            g[e] = a[e] = a[e] == null ? e === 2 ? 1 : 0 : a[e];
        return a[7] = g[7] = b, a[8] != null && (g[8] = a[8]), a[3] += c || 0, a[4] += d || 0, f = new Date(0), b ? (f.setUTCFullYear(a[0], a[1], a[2]), f.setUTCHours(a[3], a[4], a[5], a[6])) : (f.setFullYear(a[0], a[1], a[2]), f.setHours(a[3], a[4], a[5], a[6])), f._a = g, f
    }
    function P(a, c) {
        var d, e, g = [];
        !c && h && (c = require("./lang/" + a));
        for (d = 0; d < i.length; d++)
            c[i[d]] = c[i[d]] || f.en[i[d]];
        for (d = 0; d < 12; d++)
            e = b([2e3, d]), g[d] = new RegExp("^" + (c.months[d] || c.months(e, "")) + "|^" + (c.monthsShort[d] || c.monthsShort(e, "")).replace(".", ""), "i");
        return c.monthsParse = c.monthsParse || g, f[a] = c, c
    }
    function Q(a) {
        var c = typeof a == "string" && a || a && a._lang || null;
        return c ? f[c] || P(c) : b
    }
    function R(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function S(a) {
        var b = a.match(k), c, d;
        for (c = 0, d = b.length; c < d; c++)
            D[b[c]] ? b[c] = D[b[c]] : b[c] = R(b[c]);
        return function(e) {
            var f = "";
            for (c = 0; c < d; c++)
                f += typeof b[c].call == "function" ? b[c].call(e, a) : b[c];
            return f
        }
    }
    function T(a, b) {
        function d(b) {
            return a.lang().longDateFormat[b] || b
        }
        var c = 5;
        while (c--&&l.test(b)
            )b = b.replace(l, d);
        return A[b] || (A[b] = S(b)), A[b](a)
    }
    function U(a) {
        switch (a) {
        case"DDDD":
            return p;
        case"YYYY":
            return q;
        case"S":
        case"SS":
        case"SSS":
        case"DDD":
            return o;
        case"MMM":
        case"MMMM":
        case"dd":
        case"ddd":
        case"dddd":
        case"a":
        case"A":
            return r;
        case"Z":
        case"ZZ":
            return s;
        case"T":
            return t;
        case"MM":
        case"DD":
        case"YY":
        case"HH":
        case"hh":
        case"mm":
        case"ss":
        case"M":
        case"D":
        case"d":
        case"H":
        case"h":
        case"m":
        case"s":
            return n;
        default:
            return new RegExp(a.replace("\\", ""))
        }
    }
    function V(a, b, c, d) {
        var e, f;
        switch (a) {
        case"M":
        case"MM":
            c[1] = b == null ? 0 : ~~b-1;
            break;
        case"MMM":
        case"MMMM":
            for (e = 0; e < 12; e++)
                if (Q().monthsParse[e].test(b)) {
                    c[1] = e, f=!0;
                    break
                }
            f || (c[8]=!1);
            break;
        case"D":
        case"DD":
        case"DDD":
        case"DDDD":
            b != null && (c[2]=~~b);
            break;
        case"YY":
            c[0]=~~b + (~~b > 70 ? 1900 : 2e3);
            break;
        case"YYYY":
            c[0]=~~Math.abs(b);
            break;
        case"a":
        case"A":
            d.isPm = (b + "").toLowerCase() === "pm";
            break;
        case"H":
        case"HH":
        case"h":
        case"hh":
            c[3]=~~b;
            break;
        case"m":
        case"mm":
            c[4]=~~b;
            break;
        case"s":
        case"ss":
            c[5]=~~b;
            break;
        case"S":
        case"SS":
        case"SSS":
            c[6]=~~(("0." + b) * 1e3);
            break;
        case"Z":
        case"ZZ":
            d.isUTC=!0, e = (b + "").match(x), e && e[1] && (d.tzh=~~e[1]), e && e[2] && (d.tzm=~~e[2]), e && e[0] === "+" && (d.tzh =- d.tzh, d.tzm =- d.tzm)
        }
        b == null && (c[8]=!1)
    }
    function W(a, b) {
        var c = [0, 0, 1, 0, 0, 0, 0], d = {
            tzh: 0,
            tzm: 0
        }, e = b.match(k), f, g;
        for (f = 0; f < e.length; f++)
            g = (U(e[f]).exec(a) || [])[0], g && (a = a.slice(a.indexOf(g) + g.length)), D[e[f]] && V(e[f], g, c, d);
        return d.isPm && c[3] < 12 && (c[3] += 12), d.isPm===!1 && c[3] === 12 && (c[3] = 0), O(c, d.isUTC, d.tzh, d.tzm)
    }
    function X(a, b) {
        var c, d = a.match(m) || [], e, f = 99, g, h, i;
        for (g = 0; g < b.length; g++)
            h = W(a, b[g]), e = T(new H(h), b[g]).match(m) || [], i = N(d, e), i < f && (f = i, c = h);
        return c
    }
    function Y(a) {
        var b = "YYYY-MM-DDT", c;
        if (u.exec(a)) {
            for (c = 0; c < 4; c++)
                if (w[c][1].exec(a)) {
                    b += w[c][0];
                    break
                }
            return s.exec(a) ? W(a, b + " Z") : W(a, b)
        }
        return new Date(a)
    }
    function Z(a, b, c, d, e) {
        var f = e.relativeTime[a];
        return typeof f == "function" ? f(b || 1, !!c, a, d) : f.replace(/%d/i, b || 1)
    }
    function $(a, b, c) {
        var e = d(Math.abs(a) / 1e3), f = d(e / 60), g = d(f / 60), h = d(g / 24), i = d(h / 365), j = e < 45 && ["s", e] || f === 1 && ["m"] || f < 45 && ["mm", f] || g === 1 && ["h"] || g < 22 && ["hh", g] || h === 1 && ["d"] || h <= 25 && ["dd", h] || h <= 45 && ["M"] || h < 345 && ["MM", d(h / 30)] || i === 1 && ["y"] || ["yy", i];
        return j[2] = b, j[3] = a > 0, j[4] = c, Z.apply({}, j)
    }
    function _(a, c) {
        b.fn[a] = function(a) {
            var b = this._isUTC ? "UTC": "";
            return a != null ? (this._d["set" + b + c](a), this) : this._d["get" + b + c]()
        }
    }
    function ab(a) {
        b.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function bb(a, c) {
        b.duration.fn["as" + a] = function() {
            return + this / c
        }
    }
    var b, c = "1.7.2", d = Math.round, e, f = {}, g = "en", h = typeof module != "undefined" && module.exports, i = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"), j = /^\/?Date\((\-?\d+)/i, k = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g, l = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g, m = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, n = /\d\d?/, o = /\d{1,3}/, p = /\d{3}/, q = /\d{1,4}/, r = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i, s = /Z|[\+\-]\d\d:?\d\d/i, t = /T/i, u = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, v = "YYYY-MM-DDTHH:mm:ssZ", w = [["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /T\d\d:\d\d:\d\d/], ["HH:mm", /T\d\d:\d\d/], ["HH", /T\d\d/]], x = /([\+\-]|\d\d)/gi, y = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), z = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, A = {}, B = "DDD w M D d".split(" "), C = "M D H h m s w".split(" "), D = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(a) {
            return E("monthsShort", this.month(), this, a)
        },
        MMMM: function(a) {
            return E("months", this.month(), this, a)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            var a = new Date(this.year(), this.month(), this.date()), b = new Date(this.year(), 0, 1);
            return ~~((a - b) / 864e5 + 1.5)
        },
        d: function() {
            return this.day()
        },
        dd: function(a) {
            return E("weekdaysMin", this.day(), this, a)
        },
        ddd: function(a) {
            return E("weekdaysShort", this.day(), this, a)
        },
        dddd: function(a) {
            return E("weekdays", this.day(), this, a)
        },
        w: function() {
            var a = new Date(this.year(), this.month(), this.date() - this.day() + 5), b = new Date(a.getFullYear(), 0, 4);
            return ~~((a - b) / 864e5 / 7 + 1.5)
        },
        YY: function() {
            return K(this.year()%100, 2)
        },
        YYYY: function() {
            return K(this.year(), 4)
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours()%12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return ~~(this.milliseconds() / 100)
        },
        SS: function() {
            return K(~~(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return K(this.milliseconds(), 3)
        },
        Z: function() {
            var a =- this.zone(), b = "+";
            return a < 0 && (a =- a, b = "-"), b + K(~~(a / 60), 2) + ":" + K(~~a%60, 2)
        },
        ZZ: function() {
            var a =- this.zone(), b = "+";
            return a < 0 && (a =- a, b = "-"), b + K(~~(10 * a / 6), 4)
        }
    };
    while (B.length)
        e = B.pop(), D[e + "o"] = G(D[e]);
    while (C.length)
        e = C.pop(), D[e + e] = F(D[e], 2);
    D.DDDD = F(D.DDD, 3), b = function(c, d) {
        if (c === null || c === "")
            return null;
        var e, f;
        return b.isMoment(c) ? new H(new Date( + c._d), c._isUTC, c._lang) : (d ? M(d) ? e = X(c, d) : e = W(c, d) : (f = j.exec(c), e = c === a ? new Date : f ? new Date( + f[1]) : c instanceof Date ? c : M(c) ? O(c) : typeof c == "string" ? Y(c) : new Date(c)), new H(e))
    }, b.utc = function(a, c) {
        return M(a) ? new H(O(a, !0), !0) : (typeof a == "string"&&!s.exec(a) && (a += " +0000", c && (c += " Z")), b(a, c).utc())
    }, b.unix = function(a) {
        return b(a * 1e3)
    }, b.duration = function(a, c) {
        var d = b.isDuration(a), e = typeof a == "number", f = d ? a._data: e ? {}
        : a, g;
        return e && (c ? f[c] = a : f.milliseconds = a), g = new I(f), d && (g._lang = a._lang), g
    }, b.humanizeDuration = function(a, c, d) {
        return b.duration(a, c===!0 ? null : c).humanize(c===!0?!0 : d)
    }, b.version = c, b.defaultFormat = v, b.lang = function(a, c) {
        var d;
        if (!a)
            return g;
        (c ||!f[a]) && P(a, c);
        if (f[a]) {
            for (d = 0; d < i.length; d++)
                b[i[d]] = f[a][i[d]];
            b.monthsParse = f[a].monthsParse, g = a
        }
    }, b.langData = Q, b.isMoment = function(a) {
        return a instanceof H
    }, b.isDuration = function(a) {
        return a instanceof I
    }, b.lang("en", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(a) {
            var b = a%10;
            return ~~(a%100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th"
        }
    }), b.fn = H.prototype = {
        clone: function() {
            return b(this)
        },
        valueOf: function() {
            return + this._d
        },
        unix: function() {
            return Math.floor( + this._d / 1e3)
        },
        toString: function() {
            return this._d.toString()
        },
        toDate: function() {
            return this._d
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds(), !!this._isUTC]
        },
        isValid: function() {
            return this._a ? this._a[8] != null?!!this._a[8] : !N(this._a, (this._a[7] ? b.utc(this._a) : b(this._a)).toArray()) : !isNaN(this._d.getTime())
        },
        utc: function() {
            return this._isUTC=!0, this
        },
        local: function() {
            return this._isUTC=!1, this
        },
        format: function(a) {
            return T(this, a ? a : b.defaultFormat)
        },
        add: function(a, c) {
            var d = c ? b.duration( + c, a): b.duration(a);
            return L(this, d, 1), this
        },
        subtract: function(a, c) {
            var d = c ? b.duration( + c, a): b.duration(a);
            return L(this, d, -1), this
        },
        diff: function(a, c, e) {
            var f = this._isUTC ? b(a).utc(): b(a).local(), g = (this.zone() - f.zone()) * 6e4, h = this._d - f._d - g, i = this.year() - f.year(), j = this.month() - f.month(), k = this.date() - f.date(), l;
            return c === "months" ? l = i * 12 + j + k / 30 : c === "years" ? l = i + (j + k / 30) / 12 : l = c === "seconds" ? h / 1e3 : c === "minutes" ? h / 6e4 : c === "hours" ? h / 36e5 : c === "days" ? h / 864e5 : c === "weeks" ? h / 6048e5 : h, e ? l : d(l)
        },
        from: function(a, c) {
            return b.duration(this.diff(a)).lang(this._lang).humanize(!c)
        },
        fromNow: function(a) {
            return this.from(b(), a)
        },
        calendar: function() {
            var a = this.diff(b().sod(), "days", !0), c = this.lang().calendar, d = c.sameElse, e = a<-6 ? d: a<-1 ? c.lastWeek: a < 0 ? c.lastDay: a < 1 ? c.sameDay: a < 2 ? c.nextDay: a < 7 ? c.nextWeek: d;
            return this.format(typeof e == "function" ? e.apply(this) : e)
        },
        isLeapYear: function() {
            var a = this.year();
            return a%4 === 0 && a%100 !== 0 || a%400 === 0
        },
        isDST: function() {
            return this.zone() < b([this.year()]).zone() || this.zone() < b([this.year(), 5]).zone()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay(): this._d.getDay();
            return a == null ? b : this.add({
                d: a - b
            })
        },
        startOf: function(a) {
            switch (a.replace(/s$/, "")) {
            case"year":
                this.month(0);
            case"month":
                this.date(1);
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
            }
            return this
        },
        endOf: function(a) {
            return this.startOf(a).add(a.replace(/s?$/, "s"), 1).subtract("ms", 1)
        },
        sod: function() {
            return this.clone().startOf("day")
        },
        eod: function() {
            return this.clone().endOf("day")
        },
        zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },
        daysInMonth: function() {
            return b.utc([this.year(), this.month() + 1, 0]).date()
        },
        lang: function(b) {
            return b === a ? Q(this) : (this._lang = b, this)
        }
    };
    for (e = 0; e < y.length; e++)
        _(y[e].toLowerCase(), y[e]);
    _("year", "FullYear"), b.duration.fn = I.prototype = {
        weeks: function() {
            return J(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        },
        humanize: function(a) {
            var b =+ this, c = this.lang().relativeTime, d = $(b, !a, this.lang()), e = b <= 0 ? c.past : c.future;
            return a && (typeof e == "function" ? d = e(d) : d = e.replace(/%s/i, d)), d
        },
        lang: b.fn.lang
    };
    for (e in z)
        z.hasOwnProperty(e) && (bb(e, z[e]), ab(e.toLowerCase()));
    bb("Weeks", 6048e5), h && (module.exports = b), typeof ender == "undefined" && (this.moment = b), typeof define == "function" && define.amd && define("moment", [], function() {
        return b
    })
}).call(this);;
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a) {
    var b = "0.3.4", c = "hasOwnProperty", d = /[\.\/]/, e = "*", f = function() {}, g = function(a, b) {
        return a - b
    }, h, i, j = {
        n: {}
    }, k = function(a, b) {
        var c = j, d = i, e = Array.prototype.slice.call(arguments, 2), f = k.listeners(a), l = 0, m=!1, n, o = [], p = {}, q = [], r = h, s = [];
        h = a, i = 0;
        for (var t = 0, u = f.length; t < u; t++)
            "zIndex"in f[t] && (o.push(f[t].zIndex), f[t].zIndex < 0 && (p[f[t].zIndex] = f[t]));
        o.sort(g);
        while (o[l] < 0) {
            n = p[o[l++]], q.push(n.apply(b, e));
            if (i) {
                i = d;
                return q
            }
        }
        for (t = 0; t < u; t++) {
            n = f[t];
            if ("zIndex"in n)
                if (n.zIndex == o[l]) {
                    q.push(n.apply(b, e));
                    if (i)
                        break;
                        do {
                            l++, n = p[o[l]], n && q.push(n.apply(b, e));
                            if (i)
                                break
                        }
                        while (n)
                        } else 
                            p[n.zIndex] = n;
                    else {
                        q.push(n.apply(b, e));
                        if (i)
                            break
                    }
            }
        i = d, h = r;
        return q.length ? q : null
    };
    k.listeners = function(a) {
        var b = a.split(d), c = j, f, g, h, i, k, l, m, n, o = [c], p = [];
        for (i = 0, k = b.length; i < k; i++) {
            n = [];
            for (l = 0, m = o.length; l < m; l++) {
                c = o[l].n, g = [c[b[i]], c[e]], h = 2;
                while (h--)
                    f = g[h], f && (n.push(f), p = p.concat(f.f || []))
            }
            o = n
        }
        return p
    }, k.on = function(a, b) {
        var c = a.split(d), e = j;
        for (var g = 0, h = c.length; g < h; g++)
            e = e.n, !e[c[g]] && (e[c[g]] = {
            n: {}
        }), e = e[c[g]];
        e.f = e.f || [];
        for (g = 0, h = e.f.length; g < h; g++)
            if (e.f[g] == b)
                return f;
        e.f.push(b);
        return function(a) {
            + a ==+ a && (b.zIndex =+ a)
        }
    }, k.stop = function() {
        i = 1
    }, k.nt = function(a) {
        if (a)
            return (new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)")).test(h);
        return h
    }, k.off = k.unbind = function(a, b) {
        var f = a.split(d), g, h, i, k, l, m, n, o = [j];
        for (k = 0, l = f.length; k < l; k++)
            for (m = 0; m < o.length; m += i.length-2) {
                i = [m, 1], g = o[m].n;
                if (f[k] != e)
                    g[f[k]] && i.push(g[f[k]]);
                else 
                    for (h in g)
                        g[c](h) && i.push(g[h]);
                        o.splice.apply(o, i)
            }
        for (k = 0, l = o.length; k < l; k++) {
            g = o[k];
            while (g.n) {
                if (b) {
                    if (g.f) {
                        for (m = 0, n = g.f.length; m < n; m++)
                            if (g.f[m] == b) {
                                g.f.splice(m, 1);
                                break
                            }
                        !g.f.length && delete g.f
                    }
                    for (h in g.n)
                        if (g.n[c](h) && g.n[h].f) {
                            var p = g.n[h].f;
                            for (m = 0, n = p.length; m < n; m++)
                                if (p[m] == b) {
                                    p.splice(m, 1);
                                    break
                                }
                                !p.length && delete g.n[h].f
                        }
                } else {
                    delete g.f;
                    for (h in g.n)
                        g.n[c](h) && g.n[h].f && delete g.n[h].f
                }
                g = g.n
            }
        }
    }, k.once = function(a, b) {
        var c = function() {
            var d = b.apply(this, arguments);
            k.unbind(a, c);
            return d
        };
        return k.on(a, c)
    }, k.version = b, k.toString = function() {
        return "You are running Eve " + b
    }, typeof module != "undefined" && module.exports ? module.exports = k : typeof define != "undefined" ? define("eve", [], function() {
        return k
    }) : a.eve = k
})(this), function() {
    function cF(a) {
        for (var b = 0; b < cy.length; b++)
            cy[b].el.paper == a && cy.splice(b--, 1)
    }
    function cE(b, d, e, f, h, i) {
        e = Q(e);
        var j, k, l, m = [], o, p, q, t = b.ms, u = {}, v = {}, w = {};
        if (f)
            for (y = 0, z = cy.length; y < z; y++) {
                var x = cy[y];
                if (x.el.id == d.id && x.anim == b) {
                    x.percent != e ? (cy.splice(y, 1), l = 1) : k = x, d.attr(x.totalOrigin);
                    break
                }
            } else 
                f =+ v;
        for (var y = 0, z = b.percents.length; y < z; y++) {
            if (b.percents[y] == e || b.percents[y] > f * b.top) {
                e = b.percents[y], p = b.percents[y-1] || 0, t = t / b.top * (e - p), o = b.percents[y + 1], j = b.anim[e];
                break
            }
            f && d.attr(b.anim[b.percents[y]])
        }
        if (!!j) {
            if (!k) {
                for (var A in j)
                    if (j[g](A))
                        if (U[g](A) || d.paper.customAttributes[g](A)) {
                            u[A] = d.attr(A), u[A] == null && (u[A] = T[A]), v[A] = j[A];
                            switch (U[A]) {
                            case C:
                                w[A] = (v[A] - u[A]) / t;
                                break;
                            case"colour":
                                u[A] = a.getRGB(u[A]);
                                var B = a.getRGB(v[A]);
                                w[A] = {
                                    r: (B.r - u[A].r) / t,
                                    g: (B.g - u[A].g) / t,
                                    b: (B.b - u[A].b) / t
                                };
                                break;
                            case"path":
                                var D = bR(u[A], v[A]), E = D[1];
                                u[A] = D[0], w[A] = [];
                                for (y = 0, z = u[A].length; y < z; y++) {
                                    w[A][y] = [0];
                                    for (var F = 1, G = u[A][y].length; F < G; F++)
                                        w[A][y][F] = (E[y][F] - u[A][y][F]) / t
                                }
                                break;
                            case"transform":
                                var H = d._, I = ca(H[A], v[A]);
                                if (I) {
                                    u[A] = I.from, v[A] = I.to, w[A] = [], w[A].real=!0;
                                    for (y = 0, z = u[A].length; y < z; y++) {
                                        w[A][y] = [u[A][y][0]];
                                        for (F = 1, G = u[A][y].length; F < G; F++)
                                            w[A][y][F] = (v[A][y][F] - u[A][y][F]) / t
                                    }
                                } else {
                                    var J = d.matrix || new cb, K = {
                                        _: {
                                            transform: H.transform
                                        },
                                        getBBox: function() {
                                            return d.getBBox(1)
                                        }
                                    };
                                    u[A] = [J.a, J.b, J.c, J.d, J.e, J.f], b$(K, v[A]), v[A] = K._.transform, w[A] = [(K.matrix.a - J.a) / t, (K.matrix.b - J.b) / t, (K.matrix.c - J.c) / t, (K.matrix.d - J.d) / t, (K.matrix.e - J.e) / t, (K.matrix.f - J.f) / t]
                                }
                                break;
                            case"csv":
                                var L = r(j[A])[s](c), M = r(u[A])[s](c);
                                if (A == "clip-rect") {
                                    u[A] = M, w[A] = [], y = M.length;
                                    while (y--)
                                        w[A][y] = (L[y] - u[A][y]) / t
                                }
                                v[A] = L;
                                break;
                            default:
                                L = [][n](j[A]), M = [][n](u[A]), w[A] = [], y = d.paper.customAttributes[A].length;
                                while (y--)
                                    w[A][y] = ((L[y] || 0) - (M[y] || 0)) / t
                            }
                        }
                var O = j.easing, P = a.easing_formulas[O];
                if (!P) {
                    P = r(O).match(N);
                    if (P && P.length == 5) {
                        var R = P;
                        P = function(a) {
                            return cC(a, + R[1], + R[2], + R[3], + R[4], t)
                        }
                    } else 
                        P = bf
                }
                q = j.start || b.start||+(new Date), x = {
                    anim: b,
                    percent: e,
                    timestamp: q,
                    start: q + (b.del || 0),
                    status: 0,
                    initstatus: f || 0,
                    stop: !1,
                    ms: t,
                    easing: P,
                    from: u,
                    diff: w,
                    to: v,
                    el: d,
                    callback: j.callback,
                    prev: p,
                    next: o,
                    repeat: i || b.times,
                    origin: d.attr(),
                    totalOrigin: h
                }, cy.push(x);
                if (f&&!k&&!l) {
                    x.stop=!0, x.start = new Date - t * f;
                    if (cy.length == 1)
                        return cA()
                    }
                l && (x.start = new Date - x.ms * f), cy.length == 1 && cz(cA)
            } else 
                k.initstatus = f, k.start = new Date - k.ms * f;
            eve("raphael.anim.start." + d.id, d, b)
        }
    }
    function cD(a, b) {
        var c = [], d = {};
        this.ms = b, this.times = 1;
        if (a) {
            for (var e in a)
                a[g](e) && (d[Q(e)] = a[e], c.push(Q(e)));
            c.sort(bd)
        }
        this.anim = d, this.top = c[c.length-1], this.percents = c
    }
    function cC(a, b, c, d, e, f) {
        function o(a, b) {
            var c, d, e, f, j, k;
            for (e = a, k = 0; k < 8; k++) {
                f = m(e) - a;
                if (z(f) < b)
                    return e;
                j = (3 * i * e + 2 * h) * e + g;
                if (z(j) < 1e-6)
                    break;
                e = e - f / j
            }
            c = 0, d = 1, e = a;
            if (e < c)
                return c;
            if (e > d)
                return d;
            while (c < d) {
                f = m(e);
                if (z(f - a) < b)
                    return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        function n(a, b) {
            var c = o(a, b);
            return ((l * c + k) * c + j) * c
        }
        function m(a) {
            return ((i * a + h) * a + g) * a
        }
        var g = 3 * b, h = 3 * (d - b) - g, i = 1 - g - h, j = 3 * c, k = 3 * (e - c) - j, l = 1 - j - k;
        return n(a, 1 / (200 * f))
    }
    function cq() {
        return this.x + q + this.y + q + this.width + " × " + this.height
    }
    function cp() {
        return this.x + q + this.y
    }
    function cb(a, b, c, d, e, f) {
        a != null ? (this.a =+ a, this.b =+ b, this.c =+ c, this.d =+ d, this.e =+ e, this.f =+ f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }
    function bH(b, c, d) {
        b = a._path2curve(b), c = a._path2curve(c);
        var e, f, g, h, i, j, k, l, m, n, o = d ? 0: [];
        for (var p = 0, q = b.length; p < q; p++) {
            var r = b[p];
            if (r[0] == "M")
                e = i = r[1], f = j = r[2];
            else {
                r[0] == "C" ? (m = [e, f].concat(r.slice(1)), e = m[6], f = m[7]) : (m = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var s = 0, t = c.length; s < t; s++) {
                    var u = c[s];
                    if (u[0] == "M")
                        g = k = u[1], h = l = u[2];
                    else {
                        u[0] == "C" ? (n = [g, h].concat(u.slice(1)), g = n[6], h = n[7]) : (n = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var v = bG(m, n, d);
                        if (d)
                            o += v;
                        else {
                            for (var w = 0, x = v.length; w < x; w++)
                                v[w].segment1 = p, v[w].segment2 = s, v[w].bez1 = m, v[w].bez2 = n;
                            o = o.concat(v)
                        }
                    }
                }
            }
        }
        return o
    }
    function bG(b, c, d) {
        var e = a.bezierBBox(b), f = a.bezierBBox(c);
        if (!a.isBBoxIntersect(e, f))
            return d ? 0 : [];
        var g = bB.apply(0, b), h = bB.apply(0, c), i=~~(g / 5), j=~~(h / 5), k = [], l = [], m = {}, n = d ? 0 : [];
        for (var o = 0; o < i + 1; o++) {
            var p = a.findDotsAtSegment.apply(a, b.concat(o / i));
            k.push({
                x: p.x,
                y: p.y,
                t: o / i
            })
        }
        for (o = 0; o < j + 1; o++)
            p = a.findDotsAtSegment.apply(a, c.concat(o / j)), l.push({
            x: p.x,
            y: p.y,
            t: o / j
        });
        for (o = 0; o < i; o++)
            for (var q = 0; q < j; q++) {
                var r = k[o], s = k[o + 1], t = l[q], u = l[q + 1], v = z(s.x - r.x) < .001 ? "y" : "x", w = z(u.x - t.x) < .001 ? "y" : "x", x = bD(r.x, r.y, s.x, s.y, t.x, t.y, u.x, u.y);
                if (x) {
                    if (m[x.x.toFixed(4)] == x.y.toFixed(4))
                        continue;
                        m[x.x.toFixed(4)] = x.y.toFixed(4);
                        var y = r.t + z((x[v] - r[v]) / (s[v] - r[v])) * (s.t - r.t), A = t.t + z((x[w] - t[w]) / (u[w] - t[w])) * (u.t - t.t);
                        y >= 0 && y <= 1 && A >= 0 && A <= 1 && (d ? n++ : n.push({
                            x: x.x,
                            y: x.y,
                            t1: y,
                            t2: A
                        }))
                    }
            }
        return n
    }
    function bF(a, b) {
        return bG(a, b, 1)
    }
    function bE(a, b) {
        return bG(a, b)
    }
    function bD(a, b, c, d, e, f, g, h) {
        if (!(x(a, c) < y(e, g) || y(a, c) > x(e, g) || x(b, d) < y(f, h) || y(b, d) > x(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g), j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g), k = (a - c) * (f - h) - (b - d) * (e - g);
            if (!k)
                return;
            var l = i / k, m = j / k, n =+ l.toFixed(2), o =+ m.toFixed(2);
            if (n<+y(a, c).toFixed(2) || n>+x(a, c).toFixed(2) || n<+y(e, g).toFixed(2) || n>+x(e, g).toFixed(2) || o<+y(b, d).toFixed(2) || o>+x(b, d).toFixed(2) || o<+y(f, h).toFixed(2) || o>+x(f, h).toFixed(2))
                return;
            return {
                x: l,
                y: m
            }
        }
    }
    function bC(a, b, c, d, e, f, g, h, i) {
        if (!(i < 0 || bB(a, b, c, d, e, f, g, h) < i)) {
            var j = 1, k = j / 2, l = j - k, m, n = .01;
            m = bB(a, b, c, d, e, f, g, h, l);
            while (z(m - i) > n)
                k/=2, l += (m < i ? 1 : -1) * k, m = bB(a, b, c, d, e, f, g, h, l);
            return l
        }
    }
    function bB(a, b, c, d, e, f, g, h, i) {
        i == null && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;
        var j = i / 2, k = 12, l = [-0.1252, .1252, -0.3678, .3678, -0.5873, .5873, -0.7699, .7699, -0.9041, .9041, -0.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0;
        for (var o = 0; o < k; o++) {
            var p = j * l[o] + j, q = bA(p, a, c, e, g), r = bA(p, b, d, f, h), s = q * q + r * r;
            n += m[o] * w.sqrt(s)
        }
        return j * n
    }
    function bA(a, b, c, d, e) {
        var f =- 3 * b + 9 * c-9 * d + 3 * e, g = a * f + 6 * b-12 * c + 6 * d;
        return a * g-3 * b + 3 * c
    }
    function by(a, b) {
        var c = [];
        for (var d = 0, e = a.length; e-2*!b > d; d += 2) {
            var f = [{
                x: + a[d-2],
                y: + a[d-1]
            }, {
                x: + a[d],
                y: + a[d + 1]
            }, {
                x: + a[d + 2],
                y: + a[d + 3]
            }, {
                x: + a[d + 4],
                y: + a[d + 5]
            }
            ];
            b ? d ? e-4 == d ? f[3] = {
                x : + a[0], y : + a[1]
            } : e-2 == d && (f[2] = {
                x: + a[0],
                y: + a[1]
            }, f[3] = {
                x : + a[2], y : + a[3]
            }) : f[0] = {
                x: + a[e-2],
                y: + a[e-1]
            } : e-4 == d ? f[3] = f[2] : d || (f[0] = {
                x: + a[d],
                y: + a[d + 1]
            }), c.push(["C", ( - f[0].x + 6 * f[1].x + f[2].x) / 6, ( - f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }
    function bx() {
        return this.hex
    }
    function bv(a, b, c) {
        function d() {
            var e = Array.prototype.slice.call(arguments, 0), f = e.join("␀"), h = d.cache = d.cache || {}, i = d.count = d.count || [];
            if (h[g](f)) {
                bu(i, f);
                return c ? c(h[f]) : h[f]
            }
            i.length >= 1e3 && delete h[i.shift()], i.push(f), h[f] = a[m](b, e);
            return c ? c(h[f]) : h[f]
        }
        return d
    }
    function bu(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b)
                return a.push(a.splice(c, 1)[0])
    }
    function bm(a) {
        if (Object(a) !== a)
            return a;
        var b = new a.constructor;
        for (var c in a)
            a[g](c) && (b[c] = bm(a[c]));
        return b
    }
    function a(c) {
        if (a.is(c, "function"))
            return b ? c() : eve.on("raphael.DOMload", c);
        if (a.is(c, E))
            return a._engine.create[m](a, c.splice(0, 3 + a.is(c[0], C))).add(c);
        var d = Array.prototype.slice.call(arguments, 0);
        if (a.is(d[d.length-1], "function")) {
            var e = d.pop();
            return b ? e.call(a._engine.create[m](a, d)) : eve.on("raphael.DOMload", function() {
                e.call(a._engine.create[m](a, d))
            })
        }
        return a._engine.create[m](a, arguments)
    }
    a.version = "2.1.0", a.eve = eve;
    var b, c = /[, ]+/, d = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, e = /\{(\d+)\}/g, f = "prototype", g = "hasOwnProperty", h = {
        doc: document,
        win: window
    }, i = {
        was: Object.prototype[g].call(h.win, "Raphael"),
        is: h.win.Raphael
    }, j = function() {
        this.ca = this.customAttributes = {}
    }, k, l = "appendChild", m = "apply", n = "concat", o = "createTouch"in h.doc, p = "", q = " ", r = String, s = "split", t = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q), u = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, v = r.prototype.toLowerCase, w = Math, x = w.max, y = w.min, z = w.abs, A = w.pow, B = w.PI, C = "number", D = "string", E = "array", F = "toString", G = "fill", H = Object.prototype.toString, I = {}, J = "push", K = a._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, L = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i, M = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
    }, N = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, O = w.round, P = "setAttribute", Q = parseFloat, R = parseInt, S = r.prototype.toUpperCase, T = a._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }, U = a._availableAnimAttrs = {
        blur: C,
        "clip-rect": "csv",
        cx: C,
        cy: C,
        fill: "colour",
        "fill-opacity": C,
        "font-size": C,
        height: C,
        opacity: C,
        path: "path",
        r: C,
        rx: C,
        ry: C,
        stroke: "colour",
        "stroke-opacity": C,
        "stroke-width": C,
        transform: "transform",
        width: C,
        x: C,
        y: C
    }, V = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g, W = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, X = {
        hs: 1,
        rg: 1
    }, Y = /,?([achlmqrstvxz]),?/gi, Z = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, $ = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, _ = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig, ba = a._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, bb = {}, bc = function(a, b) {
        return a.key - b.key
    }, bd = function(a, b) {
        return Q(a) - Q(b)
    }, be = function() {}, bf = function(a) {
        return a
    }, bg = a._rectPath = function(a, b, c, d, e) {
        if (e)
            return [["M", a + e, b], ["l", c - e * 2, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - e * 2], ["a", e, e, 0, 0, 1, - e, e], ["l", e * 2 - c, 0], ["a", e, e, 0, 0, 1, - e, - e], ["l", 0, e * 2 - d], ["a", e, e, 0, 0, 1, e, - e], ["z"]];
        return [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", - c, 0], ["z"]]
    }, bh = function(a, b, c, d) {
        d == null && (d = c);
        return [["M", a, b], ["m", 0, - d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
    }, bi = a._getPath = {
        path: function(a) {
            return a.attr("path")
        },
        circle: function(a) {
            var b = a.attrs;
            return bh(b.cx, b.cy, b.r)
        },
        ellipse: function(a) {
            var b = a.attrs;
            return bh(b.cx, b.cy, b.rx, b.ry)
        },
        rect: function(a) {
            var b = a.attrs;
            return bg(b.x, b.y, b.width, b.height, b.r)
        },
        image: function(a) {
            var b = a.attrs;
            return bg(b.x, b.y, b.width, b.height)
        },
        text: function(a) {
            var b = a._getBBox();
            return bg(b.x, b.y, b.width, b.height)
        }
    }, bj = a.mapPath = function(a, b) {
        if (!b)
            return a;
        var c, d, e, f, g, h, i;
        a = bR(a);
        for (e = 0, g = a.length; e < g; e++) {
            i = a[e];
            for (f = 1, h = i.length; f < h; f += 2)
                c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d
        }
        return a
    };
    a._g = h, a.type = h.win.SVGAngle || h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (a.type == "VML") {
        var bk = h.doc.createElement("div"), bl;
        bk.innerHTML = '<v:shape adj="1"/>', bl = bk.firstChild, bl.style.behavior = "url(#default#VML)";
        if (!bl || typeof bl.adj != "object")
            return a.type = p;
        bk = null
    }
    a.svg=!(a.vml = a.type == "VML"), a._Paper = j, a.fn = k = j.prototype = a.prototype, a._id = 0, a._oid = 0, a.is = function(a, b) {
        b = v.call(b);
        if (b == "finite")
            return !M[g]( + a);
        if (b == "array")
            return a instanceof Array;
        return b == "null" && a === null || b == typeof a && a !== null || b == "object" && a === Object(a) || b == "array" && Array.isArray && Array.isArray(a) || H.call(a).slice(8, -1).toLowerCase() == b
    }, a.angle = function(b, c, d, e, f, g) {
        if (f == null) {
            var h = b - d, i = c - e;
            if (!h&&!i)
                return 0;
            return (180 + w.atan2( - i, - h) * 180 / B + 360)%360
        }
        return a.angle(b, c, f, g) - a.angle(d, e, f, g)
    }, a.rad = function(a) {
        return a%360 * B / 180
    }, a.deg = function(a) {
        return a * 180 / B%360
    }, a.snapTo = function(b, c, d) {
        d = a.is(d, "finite") ? d : 10;
        if (a.is(b, E)) {
            var e = b.length;
            while (e--)
                if (z(b[e] - c) <= d)
                    return b[e]
        } else {
            b =+ b;
            var f = c%b;
            if (f < d)
                return c - f;
            if (f > b - d)
                return c - f + b
        }
        return c
    };
    var bn = a.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = w.random() * 16 | 0, c = a == "x" ? b: b & 3 | 8;
        return c.toString(16)
    });
    a.setWindow = function(b) {
        eve("raphael.setWindow", a, h.win, b), h.win = b, h.doc = h.win.document, a._engine.initWin && a._engine.initWin(h.win)
    };
    var bo = function(b) {
        if (a.vml) {
            var c = /^\s+|\s+$/g, d;
            try {
                var e = new ActiveXObject("htmlfile");
                e.write("<body>"), e.close(), d = e.body
            } catch (f) {
                d = createPopup().document.body
            }
            var g = d.createTextRange();
            bo = bv(function(a) {
                try {
                    d.style.color = r(a).replace(c, p);
                    var b = g.queryCommandValue("ForeColor");
                    b = (b & 255)<<16 | b & 65280 | (b & 16711680)>>>16;
                    return "#" + ("000000" + b.toString(16)).slice(-6)
                } catch (e) {
                    return "none"
                }
            })
        } else {
            var i = h.doc.createElement("i");
            i.title = "Raphaël Colour Picker", i.style.display = "none", h.doc.body.appendChild(i), bo = bv(function(a) {
                i.style.color = a;
                return h.doc.defaultView.getComputedStyle(i, p).getPropertyValue("color")
            })
        }
        return bo(b)
    }, bp = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }, bq = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }, br = function() {
        return this.hex
    }, bs = function(b, c, d) {
        c == null && a.is(b, "object") && "r"in b && "g"in b && "b"in b && (d = b.b, c = b.g, b = b.r);
        if (c == null && a.is(b, D)) {
            var e = a.getRGB(b);
            b = e.r, c = e.g, d = e.b
        }
        if (b > 1 || c > 1 || d > 1)
            b/=255, c/=255, d/=255;
        return [b, c, d]
    }, bt = function(b, c, d, e) {
        b*=255, c*=255, d*=255;
        var f = {
            r: b,
            g: c,
            b: d,
            hex: a.rgb(b, c, d),
            toString: br
        };
        a.is(e, "finite") && (f.opacity = e);
        return f
    };
    a.color = function(b) {
        var c;
        a.is(b, "object") && "h"in b && "s"in b && "b"in b ? (c = a.hsb2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : a.is(b, "object") && "h"in b && "s"in b && "l"in b ? (c = a.hsl2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : (a.is(b, "string") && (b = a.getRGB(b)), a.is(b, "object") && "r"in b && "g"in b && "b"in b ? (c = a.rgb2hsl(b), b.h = c.h, b.s = c.s, b.l = c.l, c = a.rgb2hsb(b), b.v = c.b) : (b = {
            hex: "none"
        }, b.r = b.g = b.b = b.h = b.s = b.v = b.l =- 1)), b.toString = br;
        return b
    }, a.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h"in a && "s"in a && "b"in a && (c = a.b, b = a.s, a = a.h, d = a.o), a*=360;
        var e, f, g, h, i;
        a = a%360 / 60, i = c * b, h = i * (1 - z(a%2-1)), e = f = g = c - i, a=~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
        return bt(e, f, g, d)
    }, a.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h"in a && "s"in a && "l"in a && (c = a.l, b = a.s, a = a.h);
        if (a > 1 || b > 1 || c > 1)
            a/=360, b/=100, c/=100;
        a*=360;
        var e, f, g, h, i;
        a = a%360 / 60, i = 2 * b * (c < .5 ? c : 1 - c), h = i * (1 - z(a%2-1)), e = f = g = c - i / 2, a=~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
        return bt(e, f, g, d)
    }, a.rgb2hsb = function(a, b, c) {
        c = bs(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        f = x(a, b, c), g = f - y(a, b, c), d = g == 0 ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360)%6 * 60 / 360, e = g == 0 ? 0 : g / f;
        return {
            h: d,
            s: e,
            b: f,
            toString: bp
        }
    }, a.rgb2hsl = function(a, b, c) {
        c = bs(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        g = x(a, b, c), h = y(a, b, c), i = g - h, d = i == 0 ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360)%6 * 60 / 360, f = (g + h) / 2, e = i == 0 ? 0 : f < .5 ? i / (2 * f) : i / (2-2 * f);
        return {
            h: d,
            s: e,
            l: f,
            toString: bq
        }
    }, a._path2string = function() {
        return this.join(",").replace(Y, "$1")
    };
    var bw = a._preload = function(a, b) {
        var c = h.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, h.doc.body.removeChild(this)
        }, c.onerror = function() {
            h.doc.body.removeChild(this)
        }, h.doc.body.appendChild(c), c.src = a
    };
    a.getRGB = bv(function(b) {
        if (!b||!!((b = r(b)).indexOf("-") + 1))
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: bx
            };
        if (b == "none")
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: bx
            };
        !X[g](b.toLowerCase().substring(0, 2)) && b.charAt() != "#" && (b = bo(b));
        var c, d, e, f, h, i, j, k = b.match(L);
        if (k) {
            k[2] && (f = R(k[2].substring(5), 16), e = R(k[2].substring(3, 5), 16), d = R(k[2].substring(1, 3), 16)), k[3] && (f = R((i = k[3].charAt(3)) + i, 16), e = R((i = k[3].charAt(2)) + i, 16), d = R((i = k[3].charAt(1)) + i, 16)), k[4] && (j = k[4][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d*=2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e*=2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f*=2.55), k[1].toLowerCase().slice(0, 4) == "rgba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h/=100));
            if (k[5]) {
                j = k[5][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d*=2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e*=2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f*=2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d/=360), k[1].toLowerCase().slice(0, 4) == "hsba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h/=100);
                return a.hsb2rgb(d, e, f, h)
            }
            if (k[6]) {
                j = k[6][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d*=2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e*=2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f*=2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d/=360), k[1].toLowerCase().slice(0, 4) == "hsla" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h/=100);
                return a.hsl2rgb(d, e, f, h)
            }
            k = {
                r: d,
                g: e,
                b: f,
                toString: bx
            }, k.hex = "#" + (16777216 | f | e<<8 | d<<16).toString(16).slice(1), a.is(h, "finite") && (k.opacity = h);
            return k
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: bx
        }
    }, a), a.hsb = bv(function(b, c, d) {
        return a.hsb2rgb(b, c, d).hex
    }), a.hsl = bv(function(b, c, d) {
        return a.hsl2rgb(b, c, d).hex
    }), a.rgb = bv(function(a, b, c) {
        return "#" + (16777216 | c | b<<8 | a<<16).toString(16).slice(1)
    }), a.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: a || .75
        }, c = this.hsb2rgb(b.h, b.s, b.b);
        b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h : 0, s : 1, b : b.b
        }));
        return c.hex
    }, a.getColor.reset = function() {
        delete this.start
    }, a.parsePathString = function(b) {
        if (!b)
            return null;
        var c = bz(b);
        if (c.arr)
            return bJ(c.arr);
        var d = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, e = [];
        a.is(b, E) && a.is(b[0], E) && (e = bJ(b)), e.length || r(b).replace(Z, function(a, b, c) {
            var f = [], g = b.toLowerCase();
            c.replace(_, function(a, b) {
                b && f.push( + b)
            }), g == "m" && f.length > 2 && (e.push([b][n](f.splice(0, 2))), g = "l", b = b == "m" ? "l" : "L");
            if (g == "r")
                e.push([b][n](f));
            else 
                while (f.length >= d[g]) {
                    e.push([b][n](f.splice(0, d[g])));
                    if (!d[g])
                        break
                }
        }), e.toString = a._path2string, c.arr = bJ(e);
        return e
    }, a.parseTransformString = bv(function(b) {
        if (!b)
            return null;
        var c = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
        }, d = [];
        a.is(b, E) && a.is(b[0], E) && (d = bJ(b)), d.length || r(b).replace($, function(a, b, c) {
            var e = [], f = v.call(b);
            c.replace(_, function(a, b) {
                b && e.push( + b)
            }), d.push([b][n](e))
        }), d.toString = a._path2string;
        return d
    });
    var bz = function(a) {
        var b = bz.ps = bz.ps || {};
        b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b)
                b[g](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        });
        return b[a]
    };
    a.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i, k = A(j, 3), l = A(j, 2), m = i * i, n = m * i, o = k * a + l * 3 * i * c + j * 3 * i * i * e + n * g, p = k * b + l * 3 * i * d + j * 3 * i * i * f + n * h, q = a + 2 * i * (c - a) + m * (e-2 * c + a), r = b + 2 * i * (d - b) + m * (f-2 * d + b), s = c + 2 * i * (e - c) + m * (g-2 * e + c), t = d + 2 * i * (f - d) + m * (h-2 * f + d), u = j * a + i * c, v = j * b + i * d, x = j * e + i * g, y = j * f + i * h, z = 90 - w.atan2(q - s, r - t) * 180 / B;
        (q > s || r < t) && (z += 180);
        return {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: x,
                y: y
            },
            alpha: z
        }
    }, a.bezierBBox = function(b, c, d, e, f, g, h, i) {
        a.is(b, "array") || (b = [b, c, d, e, f, g, h, i]);
        var j = bQ.apply(null, b);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, a.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, a.isBBoxIntersect = function(b, c) {
        var d = a.isPointInsideBBox;
        return d(c, b.x, b.y) || d(c, b.x2, b.y) || d(c, b.x, b.y2) || d(c, b.x2, b.y2) || d(b, c.x, c.y) || d(b, c.x2, c.y) || d(b, c.x, c.y2) || d(b, c.x2, c.y2) || (b.x < c.x2 && b.x > c.x || c.x < b.x2 && c.x > b.x) && (b.y < c.y2 && b.y > c.y || c.y < b.y2 && c.y > b.y)
    }, a.pathIntersection = function(a, b) {
        return bH(a, b)
    }, a.pathIntersectionNumber = function(a, b) {
        return bH(a, b, 1)
    }, a.isPointInsidePath = function(b, c, d) {
        var e = a.pathBBox(b);
        return a.isPointInsideBBox(e, c, d) && bH(b, [["M", c, d], ["H", e.x2 + 10]], 1)%2 == 1
    }, a._removedFactory = function(a) {
        return function() {
            eve("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var bI = a.pathBBox = function(a) {
        var b = bz(a);
        if (b.bbox)
            return b.bbox;
        if (!a)
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
        a = bR(a);
        var c = 0, d = 0, e = [], f = [], g;
        for (var h = 0, i = a.length; h < i; h++) {
            g = a[h];
            if (g[0] == "M")
                c = g[1], d = g[2], e.push(c), f.push(d);
            else {
                var j = bQ(c, d, g[1], g[2], g[3], g[4], g[5], g[6]);
                e = e[n](j.min.x, j.max.x), f = f[n](j.min.y, j.max.y), c = g[5], d = g[6]
            }
        }
        var k = y[m](0, e), l = y[m](0, f), o = x[m](0, e), p = x[m](0, f), q = {
            x: k,
            y: l,
            x2: o,
            y2: p,
            width: o - k,
            height: p - l
        };
        b.bbox = bm(q);
        return q
    }, bJ = function(b) {
        var c = bm(b);
        c.toString = a._path2string;
        return c
    }, bK = a._pathToRelative = function(b) {
        var c = bz(b);
        if (c.rel)
            return bJ(c.rel);
        if (!a.is(b, E) ||!a.is(b && b[0], E))
            b = a.parsePathString(b);
        var d = [], e = 0, f = 0, g = 0, h = 0, i = 0;
        b[0][0] == "M" && (e = b[0][1], f = b[0][2], g = e, h = f, i++, d.push(["M", e, f]));
        for (var j = i, k = b.length; j < k; j++) {
            var l = d[j] = [], m = b[j];
            if (m[0] != v.call(m[0])) {
                l[0] = v.call(m[0]);
                switch (l[0]) {
                case"a":
                    l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] =+ (m[6] - e).toFixed(3), l[7] =+ (m[7] - f).toFixed(3);
                    break;
                case"v":
                    l[1] =+ (m[1] - f).toFixed(3);
                    break;
                case"m":
                    g = m[1], h = m[2];
                default:
                    for (var n = 1, o = m.length; n < o; n++)
                        l[n] =+ (m[n] - (n%2 ? e : f)).toFixed(3)
                    }
            } else {
                l = d[j] = [], m[0] == "m" && (g = m[1] + e, h = m[2] + f);
                for (var p = 0, q = m.length; p < q; p++)
                    d[j][p] = m[p]
            }
            var r = d[j].length;
            switch (d[j][0]) {
            case"z":
                e = g, f = h;
                break;
            case"h":
                e+=+d[j][r-1];
                break;
            case"v":
                f+=+d[j][r-1];
                break;
            default:
                e+=+d[j][r-2], f+=+d[j][r-1]
            }
        }
        d.toString = a._path2string, c.rel = bJ(d);
        return d
    }, bL = a._pathToAbsolute = function(b) {
        var c = bz(b);
        if (c.abs)
            return bJ(c.abs);
        if (!a.is(b, E) ||!a.is(b && b[0], E))
            b = a.parsePathString(b);
        if (!b ||!b.length)
            return [["M", 0, 0]];
        var d = [], e = 0, f = 0, g = 0, h = 0, i = 0;
        b[0][0] == "M" && (e =+ b[0][1], f =+ b[0][2], g = e, h = f, i++, d[0] = ["M", e, f]);
        var j = b.length == 3 && b[0][0] == "M" && b[1][0].toUpperCase() == "R" && b[2][0].toUpperCase() == "Z";
        for (var k, l, m = i, o = b.length; m < o; m++) {
            d.push(k = []), l = b[m];
            if (l[0] != S.call(l[0])) {
                k[0] = S.call(l[0]);
                switch (k[0]) {
                case"A":
                    k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] =+ (l[6] + e), k[7] =+ (l[7] + f);
                    break;
                case"V":
                    k[1] =+ l[1] + f;
                    break;
                case"H":
                    k[1] =+ l[1] + e;
                    break;
                case"R":
                    var p = [e, f][n](l.slice(1));
                    for (var q = 2, r = p.length; q < r; q++)
                        p[q] =+ p[q] + e, p[++q] =+ p[q] + f;
                    d.pop(), d = d[n](by(p, j));
                    break;
                case"M":
                    g =+ l[1] + e, h =+ l[2] + f;
                default:
                    for (q = 1, r = l.length; q < r; q++)
                        k[q] =+ l[q] + (q%2 ? e : f)
                    }
            } else if (l[0] == "R")
                p = [e, f][n](l.slice(1)), d.pop(), d = d[n](by(p, j)), k = ["R"][n](l.slice(-2));
            else 
                for (var s = 0, t = l.length; s < t; s++)
                    k[s] = l[s];
            switch (k[0]) {
            case"Z":
                e = g, f = h;
                break;
            case"H":
                e = k[1];
                break;
            case"V":
                f = k[1];
                break;
            case"M":
                g = k[k.length-2], h = k[k.length-1];
            default:
                e = k[k.length-2], f = k[k.length-1]
            }
        }
        d.toString = a._path2string, c.abs = bJ(d);
        return d
    }, bM = function(a, b, c, d) {
        return [a, b, c, d, c, d]
    }, bN = function(a, b, c, d, e, f) {
        var g = 1 / 3, h = 2 / 3;
        return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }, bO = function(a, b, c, d, e, f, g, h, i, j) {
        var k = B * 120 / 180, l = B / 180 * ( + e || 0), m = [], o, p = bv(function(a, b, c) {
            var d = a * w.cos(c) - b * w.sin(c), e = a * w.sin(c) + b * w.cos(c);
            return {
                x: d,
                y: e
            }
        });
        if (!j) {
            o = p(a, b, - l), a = o.x, b = o.y, o = p(h, i, - l), h = o.x, i = o.y;
            var q = w.cos(B / 180 * e), r = w.sin(B / 180 * e), t = (a - h) / 2, u = (b - i) / 2, v = t * t / (c * c) + u * u / (d * d);
            v > 1 && (v = w.sqrt(v), c = v * c, d = v * d);
            var x = c * c, y = d * d, A = (f == g?-1 : 1) * w.sqrt(z((x * y - x * u * u - y * t * t) / (x * u * u + y * t * t))), C = A * c * u / d + (a + h) / 2, D = A*-d * t / c + (b + i) / 2, E = w.asin(((b - D) / d).toFixed(9)), F = w.asin(((i - D) / d).toFixed(9));
            E = a < C ? B - E : E, F = h < C ? B - F : F, E < 0 && (E = B * 2 + E), F < 0 && (F = B * 2 + F), g && E > F && (E = E - B * 2), !g && F > E && (F = F - B * 2)
        } else 
            E = j[0], F = j[1], C = j[2], D = j[3];
        var G = F - E;
        if (z(G) > k) {
            var H = F, I = h, J = i;
            F = E + k * (g && F > E ? 1 : -1), h = C + c * w.cos(F), i = D + d * w.sin(F), m = bO(h, i, c, d, e, 0, g, I, J, [F, H, C, D])
        }
        G = F - E;
        var K = w.cos(E), L = w.sin(E), M = w.cos(F), N = w.sin(F), O = w.tan(G / 4), P = 4 / 3 * c * O, Q = 4 / 3 * d * O, R = [a, b], S = [a + P * L, b - Q * K], T = [h + P * N, i - Q * M], U = [h, i];
        S[0] = 2 * R[0] - S[0], S[1] = 2 * R[1] - S[1];
        if (j)
            return [S, T, U][n](m);
        m = [S, T, U][n](m).join()[s](",");
        var V = [];
        for (var W = 0, X = m.length; W < X; W++)
            V[W] = W%2 ? p(m[W-1], m[W], l).y : p(m[W], m[W + 1], l).x;
        return V
    }, bP = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i;
        return {
            x: A(j, 3) * a + A(j, 2) * 3 * i * c + j * 3 * i * i * e + A(i, 3) * g,
            y: A(j, 3) * b + A(j, 2) * 3 * i * d + j * 3 * i * i * f + A(i, 3) * h
        }
    }, bQ = bv(function(a, b, c, d, e, f, g, h) {
        var i = e-2 * c + a - (g-2 * e + c), j = 2 * (c - a)-2 * (e - c), k = a - c, l = ( - j + w.sqrt(j * j-4 * i * k)) / 2 / i, n = ( - j - w.sqrt(j * j-4 * i * k)) / 2 / i, o = [b, h], p = [a, g], q;
        z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bP(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bP(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y)), i = f-2 * d + b - (h-2 * f + d), j = 2 * (d - b)-2 * (f - d), k = b - d, l = ( - j + w.sqrt(j * j-4 * i * k)) / 2 / i, n = ( - j - w.sqrt(j * j-4 * i * k)) / 2 / i, z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bP(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bP(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y));
        return {
            min: {
                x: y[m](0, p),
                y: y[m](0, o)
            },
            max: {
                x: x[m](0, p),
                y: x[m](0, o)
            }
        }
    }), bR = a._path2curve = bv(function(a, b) {
        var c=!b && bz(a);
        if (!b && c.curve)
            return bJ(c.curve);
        var d = bL(a), e = b && bL(b), f = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, g = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, h = function(a, b) {
            var c, d;
            if (!a)
                return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
            !(a[0]in{
                T: 1,
                Q: 1
            }) && (b.qx = b.qy = null);
            switch (a[0]) {
            case"M":
                b.X = a[1], b.Y = a[2];
                break;
            case"A":
                a = ["C"][n](bO[m](0, [b.x, b.y][n](a.slice(1))));
                break;
            case"S":
                c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d][n](a.slice(1));
                break;
            case"T":
                b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"][n](bN(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                break;
            case"Q":
                b.qx = a[1], b.qy = a[2], a = ["C"][n](bN(b.x, b.y, a[1], a[2], a[3], a[4]));
                break;
            case"L":
                a = ["C"][n](bM(b.x, b.y, a[1], a[2]));
                break;
            case"H":
                a = ["C"][n](bM(b.x, b.y, a[1], b.y));
                break;
            case"V":
                a = ["C"][n](bM(b.x, b.y, b.x, a[1]));
                break;
            case"Z":
                a = ["C"][n](bM(b.x, b.y, b.X, b.Y))
            }
            return a
        }, i = function(a, b) {
            if (a[b].length > 7) {
                a[b].shift();
                var c = a[b];
                while (c.length)
                    a.splice(b++, 0, ["C"][n](c.splice(0, 6)));
                a.splice(b, 1), l = x(d.length, e && e.length || 0)
            }
        }, j = function(a, b, c, f, g) {
            a && b && a[g][0] == "M" && b[g][0] != "M" && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = x(d.length, e && e.length || 0))
        };
        for (var k = 0, l = x(d.length, e && e.length || 0); k < l; k++) {
            d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
            var o = d[k], p = e && e[k], q = o.length, r = e && p.length;
            f.x = o[q-2], f.y = o[q-1], f.bx = Q(o[q-4]) || f.x, f.by = Q(o[q-3]) || f.y, g.bx = e && (Q(p[r-4]) || g.x), g.by = e && (Q(p[r-3]) || g.y), g.x = e && p[r-2], g.y = e && p[r-1]
        }
        e || (c.curve = bJ(d));
        return e ? [d, e] : d
    }, null, bJ), bS = a._parseDots = bv(function(b) {
        var c = [];
        for (var d = 0, e = b.length; d < e; d++) {
            var f = {}, g = b[d].match(/^([^:]*):?([\d\.]*)/);
            f.color = a.getRGB(g[1]);
            if (f.color.error)
                return null;
            f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), c.push(f)
        }
        for (d = 1, e = c.length-1; d < e; d++)
            if (!c[d].offset) {
                var h = Q(c[d-1].offset || 0), i = 0;
                for (var j = d + 1; j < e; j++)
                    if (c[j].offset) {
                        i = c[j].offset;
                        break
                    }
                    i || (i = 100, j = e), i = Q(i);
                    var k = (i - h) / (j - d + 1);
                    for (; d < j; d++)
                        h += k, c[d].offset = h + "%"
            }
        return c
    }), bT = a._tear = function(a, b) {
        a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
    }, bU = a._tofront = function(a, b) {
        b.top !== a && (bT(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
    }, bV = a._toback = function(a, b) {
        b.bottom !== a && (bT(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
    }, bW = a._insertafter = function(a, b, c) {
        bT(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
    }, bX = a._insertbefore = function(a, b, c) {
        bT(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
    }, bY = a.toMatrix = function(a, b) {
        var c = bI(a), d = {
            _: {
                transform: p
            },
            getBBox: function() {
                return c
            }
        };
        b$(d, b);
        return d.matrix
    }, bZ = a.transformPath = function(a, b) {
        return bj(a, bY(a, b))
    }, b$ = a._extractTransform = function(b, c) {
        if (c == null)
            return b._.transform;
        c = r(c).replace(/\.{3}|\u2026/g, b._.transform || p);
        var d = a.parseTransformString(c), e = 0, f = 0, g = 0, h = 1, i = 1, j = b._, k = new cb;
        j.transform = d || [];
        if (d)
            for (var l = 0, m = d.length; l < m; l++) {
                var n = d[l], o = n.length, q = r(n[0]).toLowerCase(), s = n[0] != q, t = s ? k.invert(): 0, u, v, w, x, y;
                q == "t" && o == 3 ? s ? (u = t.x(0, 0), v = t.y(0, 0), w = t.x(n[1], n[2]), x = t.y(n[1], n[2]), k.translate(w - u, x - v)) : k.translate(n[1], n[2]) : q == "r" ? o == 2 ? (y = y || b.getBBox(1), k.rotate(n[1], y.x + y.width / 2, y.y + y.height / 2), e += n[1]) : o == 4 && (s ? (w = t.x(n[2], n[3]), x = t.y(n[2], n[3]), k.rotate(n[1], w, x)) : k.rotate(n[1], n[2], n[3]), e += n[1]) : q == "s" ? o == 2 || o == 3 ? (y = y || b.getBBox(1), k.scale(n[1], n[o-1], y.x + y.width / 2, y.y + y.height / 2), h*=n[1], i*=n[o-1]) : o == 5 && (s ? (w = t.x(n[3], n[4]), x = t.y(n[3], n[4]), k.scale(n[1], n[2], w, x)) : k.scale(n[1], n[2], n[3], n[4]), h*=n[1], i*=n[2]) : q == "m" && o == 7 && k.add(n[1], n[2], n[3], n[4], n[5], n[6]), j.dirtyT = 1, b.matrix = k
            }
        b.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, h == 1 && i == 1&&!e && j.bbox ? (j.bbox.x+=+f, j.bbox.y+=+g) : j.dirtyT = 1
    }, b_ = function(a) {
        var b = a[0];
        switch (b.toLowerCase()) {
        case"t":
            return [b, 0, 0];
        case"m":
            return [b, 1, 0, 0, 1, 0, 0];
        case"r":
            return a.length == 4 ? [b, 0, a[2], a[3]] : [b, 0];
        case"s":
            return a.length == 5 ? [b, 1, 1, a[3], a[4]] : a.length == 3 ? [b, 1, 1] : [b, 1]
        }
    }, ca = a._equaliseTransform = function(b, c) {
        c = r(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
        var d = x(b.length, c.length), e = [], f = [], g = 0, h, i, j, k;
        for (; g < d; g++) {
            j = b[g] || b_(c[g]), k = c[g] || b_(j);
            if (j[0] != k[0] || j[0].toLowerCase() == "r" && (j[2] != k[2] || j[3] != k[3]) || j[0].toLowerCase() == "s" && (j[3] != k[3] || j[4] != k[4]))
                return;
            e[g] = [], f[g] = [];
            for (h = 0, i = x(j.length, k.length);
            h < i;
            h++)h in j && (e[g][h] = j[h]), h in k && (f[g][h] = k[h])
        }
        return {
            from: e,
            to: f
        }
    };
    a._getContainer = function(b, c, d, e) {
        var f;
        f = e == null&&!a.is(b, "object") ? h.doc.getElementById(b) : b;
        if (f != null) {
            if (f.tagName)
                return c == null ? {
                    container: f,
                    width: f.style.pixelWidth || f.offsetWidth,
                    height: f.style.pixelHeight || f.offsetHeight
                } : {
                    container: f,
                    width: c,
                    height: d
                };
            return {
                container: 1,
                x: b,
                y: c,
                width: d,
                height: e
            }
        }
    }, a.pathToRelative = bK, a._engine = {}, a.path2curve = bR, a.matrix = function(a, b, c, d, e, f) {
        return new cb(a, b, c, d, e, f)
    }, function(b) {
        function d(a) {
            var b = w.sqrt(c(a));
            a[0] && (a[0]/=b), a[1] && (a[1]/=b)
        }
        function c(a) {
            return a[0] * a[0] + a[1] * a[1]
        }
        b.add = function(a, b, c, d, e, f) {
            var g = [[], [], []], h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], i = [[a, c, e], [b, d, f], [0, 0, 1]], j, k, l, m;
            a && a instanceof cb && (i = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]);
            for (j = 0; j < 3; j++)
                for (k = 0; k < 3; k++) {
                    m = 0;
                    for (l = 0; l < 3; l++)
                        m += h[j][l] * i[l][k];
                        g[j][k] = m
                }
            this.a = g[0][0], this.b = g[1][0], this.c = g[0][1], this.d = g[1][1], this.e = g[0][2], this.f = g[1][2]
        }, b.invert = function() {
            var a = this, b = a.a * a.d - a.b * a.c;
            return new cb(a.d / b, - a.b / b, - a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
        }, b.clone = function() {
            return new cb(this.a, this.b, this.c, this.d, this.e, this.f)
        }, b.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b)
        }, b.scale = function(a, b, c, d) {
            b == null && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, - c, - d)
        }, b.rotate = function(b, c, d) {
            b = a.rad(b), c = c || 0, d = d || 0;
            var e =+ w.cos(b).toFixed(9), f =+ w.sin(b).toFixed(9);
            this.add(e, f, - f, e, c, d), this.add(1, 0, 0, 1, - c, - d)
        }, b.x = function(a, b) {
            return a * this.a + b * this.c + this.e
        }, b.y = function(a, b) {
            return a * this.b + b * this.d + this.f
        }, b.get = function(a) {
            return + this[r.fromCharCode(97 + a)].toFixed(4)
        }, b.toString = function() {
            return a.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, b.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, b.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, b.split = function() {
            var b = {};
            b.dx = this.e, b.dy = this.f;
            var e = [[this.a, this.c], [this.b, this.d]];
            b.scalex = w.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = w.sqrt(c(e[1])), d(e[1]), b.shear/=b.scaley;
            var f =- e[0][1], g = e[1][1];
            g < 0 ? (b.rotate = a.deg(w.acos(g)), f < 0 && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(w.asin(f)), b.isSimple=!+b.shear.toFixed(9) && (b.scalex.toFixed(9) == b.scaley.toFixed(9) ||!b.rotate), b.isSuperSimple=!+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9)&&!b.rotate, b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;
            return b
        }, b.toTransformString = function(a) {
            var b = a || this[s]();
            if (b.isSimple) {
                b.scalex =+ b.scalex.toFixed(4), b.scaley =+ b.scaley.toFixed(4), b.rotate =+ b.rotate.toFixed(4);
                return (b.dx || b.dy ? "t" + [b.dx, b.dy] : p) + (b.scalex != 1 || b.scaley != 1 ? "s" + [b.scalex, b.scaley, 0, 0] : p) + (b.rotate ? "r" + [b.rotate, 0, 0] : p)
            }
            return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(cb.prototype);
    var cc = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    navigator.vendor == "Apple Computer, Inc." && (cc && cc[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && cc && cc[1] < 8 ? k.safari = function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    } : k.safari = be;
    var cd = function() {
        this.returnValue=!1
    }, ce = function() {
        return this.originalEvent.preventDefault()
    }, cf = function() {
        this.cancelBubble=!0
    }, cg = function() {
        return this.originalEvent.stopPropagation()
    }, ch = function() {
        if (h.doc.addEventListener)
            return function(a, b, c, d) {
                var e = o && u[b] ? u[b]: b, f = function(e) {
                    var f = h.doc.documentElement.scrollTop || h.doc.body.scrollTop, i = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft, j = e.clientX + i, k = e.clientY + f;
                    if (o && u[g](b))
                        for (var l = 0, m = e.targetTouches && e.targetTouches.length; l < m; l++)
                            if (e.targetTouches[l].target == a) {
                                var n = e;
                                e = e.targetTouches[l], e.originalEvent = n, e.preventDefault = ce, e.stopPropagation = cg;
                                break
                            }
                            return c.call(d, e, j, k)
                        };
                        a.addEventListener(e, f, !1);
                        return function() {
                            a.removeEventListener(e, f, !1);
                            return !0
                        }
                    };
        if (h.doc.attachEvent)
            return function(a, b, c, d) {
                var e = function(a) {
                    a = a || h.win.event;
                    var b = h.doc.documentElement.scrollTop || h.doc.body.scrollTop, e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft, f = a.clientX + e, g = a.clientY + b;
                    a.preventDefault = a.preventDefault || cd, a.stopPropagation = a.stopPropagation || cf;
                    return c.call(d, a, f, g)
                };
                a.attachEvent("on" + b, e);
                var f = function() {
                    a.detachEvent("on" + b, e);
                    return !0
                };
                return f
            }
    }(), ci = [], cj = function(a) {
        var b = a.clientX, c = a.clientY, d = h.doc.documentElement.scrollTop || h.doc.body.scrollTop, e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft, f, g = ci.length;
        while (g--) {
            f = ci[g];
            if (o) {
                var i = a.touches.length, j;
                while (i--) {
                    j = a.touches[i];
                    if (j.identifier == f.el._drag.id) {
                        b = j.clientX, c = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                        break
                    }
                }
            } else 
                a.preventDefault();
            var k = f.el.node, l, m = k.nextSibling, n = k.parentNode, p = k.style.display;
            h.win.opera && n.removeChild(k), k.style.display = "none", l = f.el.paper.getElementByPoint(b, c), k.style.display = p, h.win.opera && (m ? n.insertBefore(k, m) : n.appendChild(k)), l && eve("raphael.drag.over." + f.el.id, f.el, l), b += e, c += d, eve("raphael.drag.move." + f.el.id, f.move_scope || f.el, b - f.el._drag.x, c - f.el._drag.y, b, c, a)
        }
    }, ck = function(b) {
        a.unmousemove(cj).unmouseup(ck);
        var c = ci.length, d;
        while (c--)
            d = ci[c], d.el._drag = {}, eve("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, b);
        ci = []
    }, cl = a.el = {};
    for (var cm = t.length; cm--;)(function(b) {
        a[b] = cl[b] = function(c, d) {
            a.is(c, "function") && (this.events = this.events || [], this.events.push({
                name : b, f : c, unbind : ch(this.shape || this.node || h.doc, b, c, d || this)
            }));
            return this
        }, a["un" + b] = cl["un" + b] = function(a) {
            var c = this.events || [], d = c.length;
            while (d--)
                if (c[d].name == b && c[d].f == a) {
                    c[d].unbind(), c.splice(d, 1), !c.length && delete this.events;
                    return this
                }
            return this
        }
    })(t[cm]);
    cl.data = function(b, c) {
        var d = bb[this.id] = bb[this.id] || {};
        if (arguments.length == 1) {
            if (a.is(b, "object")) {
                for (var e in b)
                    b[g](e) && this.data(e, b[e]);
                return this
            }
            eve("raphael.data.get." + this.id, this, d[b], b);
            return d[b]
        }
        d[b] = c, eve("raphael.data.set." + this.id, this, c, b);
        return this
    }, cl.removeData = function(a) {
        a == null ? bb[this.id] = {} : bb[this.id] && delete bb[this.id][a];
        return this
    }, cl.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, cl.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var cn = [];
    cl.drag = function(b, c, d, e, f, g) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = h.doc.documentElement.scrollTop || h.doc.body.scrollTop, k = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft;
            this._drag.x = i.clientX + k, this._drag.y = i.clientY + j, this._drag.id = i.identifier, !ci.length && a.mousemove(cj).mouseup(ck), ci.push({
                el: this,
                move_scope: e,
                start_scope: f,
                end_scope: g
            }), c && eve.on("raphael.drag.start." + this.id, c), b && eve.on("raphael.drag.move." + this.id, b), d && eve.on("raphael.drag.end." + this.id, d), eve("raphael.drag.start." + this.id, f || e || this, i.clientX + k, i.clientY + j, i)
        }
        this._drag = {}, cn.push({
            el: this,
            start: i
        }), this.mousedown(i);
        return this
    }, cl.onDragOver = function(a) {
        a ? eve.on("raphael.drag.over." + this.id, a) : eve.unbind("raphael.drag.over." + this.id)
    }, cl.undrag = function() {
        var b = cn.length;
        while (b--)
            cn[b].el == this && (this.unmousedown(cn[b].start), cn.splice(b, 1), eve.unbind("raphael.drag.*." + this.id));
        !cn.length && a.unmousemove(cj).unmouseup(ck)
    }, k.circle = function(b, c, d) {
        var e = a._engine.circle(this, b || 0, c || 0, d || 0);
        this.__set__ && this.__set__.push(e);
        return e
    }, k.rect = function(b, c, d, e, f) {
        var g = a._engine.rect(this, b || 0, c || 0, d || 0, e || 0, f || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }, k.ellipse = function(b, c, d, e) {
        var f = a._engine.ellipse(this, b || 0, c || 0, d || 0, e || 0);
        this.__set__ && this.__set__.push(f);
        return f
    }, k.path = function(b) {
        b&&!a.is(b, D)&&!a.is(b[0], E) && (b += p);
        var c = a._engine.path(a.format[m](a, arguments), this);
        this.__set__ && this.__set__.push(c);
        return c
    }, k.image = function(b, c, d, e, f) {
        var g = a._engine.image(this, b || "about:blank", c || 0, d || 0, e || 0, f || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }, k.text = function(b, c, d) {
        var e = a._engine.text(this, b || 0, c || 0, r(d));
        this.__set__ && this.__set__.push(e);
        return e
    }, k.set = function(b) {
        !a.is(b, "array") && (b = Array.prototype.splice.call(arguments, 0, arguments.length));
        var c = new cG(b);
        this.__set__ && this.__set__.push(c);
        return c
    }, k.setStart = function(a) {
        this.__set__ = a || this.set()
    }, k.setFinish = function(a) {
        var b = this.__set__;
        delete this.__set__;
        return b
    }, k.setSize = function(b, c) {
        return a._engine.setSize.call(this, b, c)
    }, k.setViewBox = function(b, c, d, e, f) {
        return a._engine.setViewBox.call(this, b, c, d, e, f)
    }, k.top = k.bottom = null, k.raphael = a;
    var co = function(a) {
        var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.body, e = c.documentElement, f = e.clientTop || d.clientTop || 0, g = e.clientLeft || d.clientLeft || 0, i = b.top + (h.win.pageYOffset || e.scrollTop || d.scrollTop) - f, j = b.left + (h.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: i,
            x: j
        }
    };
    k.getElementByPoint = function(a, b) {
        var c = this, d = c.canvas, e = h.doc.elementFromPoint(a, b);
        if (h.win.opera && e.tagName == "svg") {
            var f = co(d), g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var i = d.getIntersectionList(g, null);
            i.length && (e = i[i.length-1])
        }
        if (!e)
            return null;
        while (e.parentNode && e != d.parentNode&&!e.raphael)
            e = e.parentNode;
        e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null;
        return e
    }, k.getById = function(a) {
        var b = this.bottom;
        while (b) {
            if (b.id == a)
                return b;
            b = b.next
        }
        return null
    }, k.forEach = function(a, b) {
        var c = this.bottom;
        while (c) {
            if (a.call(b, c)===!1)
                return this;
            c = c.next
        }
        return this
    }, k.getElementsByPoint = function(a, b) {
        var c = this.set();
        this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        });
        return c
    }, cl.isPointInside = function(b, c) {
        var d = this.realPath = this.realPath || bi[this.type](this);
        return a.isPointInsidePath(d, b, c)
    }, cl.getBBox = function(a) {
        if (this.removed)
            return {};
        var b = this._;
        if (a) {
            if (b.dirty ||!b.bboxwt)
                this.realPath = bi[this.type](this), b.bboxwt = bI(this.realPath), b.bboxwt.toString = cq, b.dirty = 0;
            return b.bboxwt
        }
        if (b.dirty || b.dirtyT ||!b.bbox) {
            if (b.dirty ||!this.realPath)
                b.bboxwt = 0, this.realPath = bi[this.type](this);
            b.bbox = bI(bj(this.realPath, this.matrix)), b.bbox.toString = cq, b.dirty = b.dirtyT = 0
        }
        return b.bbox
    }, cl.clone = function() {
        if (this.removed)
            return null;
        var a = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(a);
        return a
    }, cl.glow = function(a) {
        if (this.type == "text")
            return null;
        a = a || {};
        var b = {
            width: (a.width || 10) + ( + this.attr("stroke-width") || 1),
            fill: a.fill ||!1,
            opacity: a.opacity || .5,
            offsetx: a.offsetx || 0,
            offsety: a.offsety || 0,
            color: a.color || "#000"
        }, c = b.width / 2, d = this.paper, e = d.set(), f = this.realPath || bi[this.type](this);
        f = this.matrix ? bj(f, this.matrix) : f;
        for (var g = 1; g < c + 1; g++)
            e.push(d.path(f).attr({
                stroke: b.color,
                fill: b.fill ? b.color: "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": + (b.width / c * g).toFixed(3),
                opacity: + (b.opacity / c).toFixed(3)
            }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var cr = {}, cs = function(b, c, d, e, f, g, h, i, j) {
        return j == null ? bB(b, c, d, e, f, g, h, i) : a.findDotsAtSegment(b, c, d, e, f, g, h, i, bC(b, c, d, e, f, g, h, i, j))
    }, ct = function(b, c) {
        return function(d, e, f) {
            d = bR(d);
            var g, h, i, j, k = "", l = {}, m, n = 0;
            for (var o = 0, p = d.length; o < p; o++) {
                i = d[o];
                if (i[0] == "M")
                    g =+ i[1], h =+ i[2];
                else {
                    j = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6]);
                    if (n + j > e) {
                        if (c&&!l.start) {
                            m = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), k += ["C" + m.start.x, m.start.y, m.m.x, m.m.y, m.x, m.y];
                            if (f)
                                return k;
                            l.start = k, k = ["M" + m.x, m.y + "C" + m.n.x, m.n.y, m.end.x, m.end.y, i[5], i[6]].join(), n += j, g =+ i[5], h =+ i[6];
                            continue
                        }
                        if (!b&&!c) {
                            m = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n);
                            return {
                                x: m.x,
                                y: m.y,
                                alpha: m.alpha
                            }
                        }
                    }
                    n += j, g =+ i[5], h =+ i[6]
                }
                k += i.shift() + i
            }
            l.end = k, m = b ? n : c ? l : a.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), m.alpha && (m = {
                x: m.x,
                y: m.y,
                alpha: m.alpha
            });
            return m
        }
    }, cu = ct(1), cv = ct(), cw = ct(0, 1);
    a.getTotalLength = cu, a.getPointAtLength = cv, a.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6)
            return cw(a, b).end;
        var d = cw(a, c, 1);
        return b ? cw(d, b).end : d
    }, cl.getTotalLength = function() {
        if (this.type == "path") {
            if (this.node.getTotalLength)
                return this.node.getTotalLength();
            return cu(this.attrs.path)
        }
    }, cl.getPointAtLength = function(a) {
        if (this.type == "path")
            return cv(this.attrs.path, a)
    }, cl.getSubpath = function(b, c) {
        if (this.type == "path")
            return a.getSubpath(this.attrs.path, b, c)
    };
    var cx = a.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return A(a, 1.7)
        },
        ">": function(a) {
            return A(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04, c = w.sqrt(.1734 + b * b), d = c - b, e = A(z(d), 1 / 3) * (d < 0?-1 : 1), f =- c - b, g = A(z(f), 1 / 3) * (f < 0?-1 : 1), h = e + g + .5;
            return (1 - h) * 3 * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a = a-1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            if (a==!!a)
                return a;
            return A(2, -10 * a) * w.sin((a - .075) * 2 * B / .3) + 1
        },
        bounce: function(a) {
            var b = 7.5625, c = 2.75, d;
            a < 1 / c ? d = b * a * a : a < 2 / c ? (a -= 1.5 / c, d = b * a * a + .75) : a < 2.5 / c ? (a -= 2.25 / c, d = b * a * a + .9375) : (a -= 2.625 / c, d = b * a * a + .984375);
            return d
        }
    };
    cx.easeIn = cx["ease-in"] = cx["<"], cx.easeOut = cx["ease-out"] = cx[">"], cx.easeInOut = cx["ease-in-out"] = cx["<>"], cx["back-in"] = cx.backIn, cx["back-out"] = cx.backOut;
    var cy = [], cz = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        setTimeout(a, 16)
    }, cA = function() {
        var b =+ (new Date), c = 0;
        for (; c < cy.length; c++) {
            var d = cy[c];
            if (d.el.removed || d.paused)
                continue;
            var e = b - d.start, f = d.ms, h = d.easing, i = d.from, j = d.diff, k = d.to, l = d.t, m = d.el, o = {}, p, r = {}, s;
            d.initstatus ? (e = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * f, d.status = d.initstatus, delete d.initstatus, d.stop && cy.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (e / f)) / d.anim.top;
            if (e < 0)
                continue;
            if (e < f) {
                var t = h(e / f);
                for (var u in i)
                    if (i[g](u)) {
                        switch (U[u]) {
                        case C:
                            p =+ i[u] + t * f * j[u];
                            break;
                        case"colour":
                            p = "rgb(" + [cB(O(i[u].r + t * f * j[u].r)), cB(O(i[u].g + t * f * j[u].g)), cB(O(i[u].b + t * f * j[u].b))].join(",") + ")";
                            break;
                        case"path":
                            p = [];
                            for (var v = 0, w = i[u].length; v < w; v++) {
                                p[v] = [i[u][v][0]];
                                for (var x = 1, y = i[u][v].length; x < y; x++)
                                    p[v][x] =+ i[u][v][x] + t * f * j[u][v][x];
                                    p[v] = p[v].join(q)
                                }
                                p = p.join(q);
                                break;
                            case"transform":
                                if (j[u].real) {
                                    p = [];
                                    for (v = 0, w = i[u].length; v < w; v++) {
                                        p[v] = [i[u][v][0]];
                                        for (x = 1, y = i[u][v].length; x < y; x++)
                                            p[v][x] = i[u][v][x] + t * f * j[u][v][x]
                                    }
                                } else {
                                    var z = function(a) {
                                        return + i[u][a] + t * f * j[u][a]
                                    };
                                    p = [["m", z(0), z(1), z(2), z(3), z(4), z(5)]]
                                }
                                break;
                            case"csv":
                                if (u == "clip-rect") {
                                    p = [], v = 4;
                                    while (v--)
                                        p[v] =+ i[u][v] + t * f * j[u][v]
                                }
                                break;
                            default:
                                var A = [][n](i[u]);
                                p = [], v = m.paper.customAttributes[u].length;
                                while (v--)
                                    p[v] =+ A[v] + t * f * j[u][v]
                        }
                        o[u] = p
                    }
                m.attr(o), function(a, b, c) {
                    setTimeout(function() {
                        eve("raphael.anim.frame." + a, b, c)
                    })
                }(m.id, m, d.anim)
            } else {
                (function(b, c, d) {
                    setTimeout(function() {
                        eve("raphael.anim.frame." + c.id, c, d), eve("raphael.anim.finish." + c.id, c, d), a.is(b, "function") && b.call(c)
                    })
                })(d.callback, m, d.anim), m.attr(k), cy.splice(c--, 1);
                if (d.repeat > 1&&!d.next) {
                    for (s in k)
                        k[g](s) && (r[s] = d.totalOrigin[s]);
                    d.el.attr(r), cE(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat-1)
                }
                d.next&&!d.stop && cE(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat)
            }
        }
        a.svg && m && m.paper && m.paper.safari(), cy.length && cz(cA)
    }, cB = function(a) {
        return a > 255 ? 255 : a < 0 ? 0 : a
    };
    cl.animateWith = function(b, c, d, e, f, g) {
        var h = this;
        if (h.removed) {
            g && g.call(h);
            return h
        }
        var i = d instanceof cD ? d: a.animation(d, e, f, g), j, k;
        cE(i, h, i.percents[0], null, h.attr());
        for (var l = 0, m = cy.length; l < m; l++)
            if (cy[l].anim == c && cy[l].el == b) {
                cy[m-1].start = cy[l].start;
                break
            }
        return h
    }, cl.onAnimation = function(a) {
        a ? eve.on("raphael.anim.frame." + this.id, a) : eve.unbind("raphael.anim.frame." + this.id);
        return this
    }, cD.prototype.delay = function(a) {
        var b = new cD(this.anim, this.ms);
        b.times = this.times, b.del =+ a || 0;
        return b
    }, cD.prototype.repeat = function(a) {
        var b = new cD(this.anim, this.ms);
        b.del = this.del, b.times = w.floor(x(a, 0)) || 1;
        return b
    }, a.animation = function(b, c, d, e) {
        if (b instanceof cD)
            return b;
        if (a.is(d, "function") ||!d)
            e = e || d || null, d = null;
        b = Object(b), c =+ c || 0;
        var f = {}, h, i;
        for (i in b)
            b[g](i) && Q(i) != i && Q(i) + "%" != i && (h=!0, f[i] = b[i]);
        if (!h)
            return new cD(b, c);
        d && (f.easing = d), e && (f.callback = e);
        return new cD({
            100: f
        }, c)
    }, cl.animate = function(b, c, d, e) {
        var f = this;
        if (f.removed) {
            e && e.call(f);
            return f
        }
        var g = b instanceof cD ? b: a.animation(b, c, d, e);
        cE(g, f, g.percents[0], null, f.attr());
        return f
    }, cl.setTime = function(a, b) {
        a && b != null && this.status(a, y(b, a.ms) / a.ms);
        return this
    }, cl.status = function(a, b) {
        var c = [], d = 0, e, f;
        if (b != null) {
            cE(a, this, -1, y(b, 1));
            return this
        }
        e = cy.length;
        for (; d < e; d++) {
            f = cy[d];
            if (f.el.id == this.id && (!a || f.anim == a)) {
                if (a)
                    return f.status;
                c.push({
                    anim: f.anim,
                    status: f.status
                })
            }
        }
        if (a)
            return 0;
        return c
    }, cl.pause = function(a) {
        for (var b = 0; b < cy.length; b++)
            cy[b].el.id == this.id && (!a || cy[b].anim == a) && eve("raphael.anim.pause." + this.id, this, cy[b].anim)!==!1 && (cy[b].paused=!0);
        return this
    }, cl.resume = function(a) {
        for (var b = 0; b < cy.length; b++)
            if (cy[b].el.id == this.id && (!a || cy[b].anim == a)) {
                var c = cy[b];
                eve("raphael.anim.resume." + this.id, this, c.anim)!==!1 && (delete c.paused, this.status(c.anim, c.status))
            }
        return this
    }, cl.stop = function(a) {
        for (var b = 0; b < cy.length; b++)
            cy[b].el.id == this.id && (!a || cy[b].anim == a) && eve("raphael.anim.stop." + this.id, this, cy[b].anim)!==!1 && cy.splice(b--, 1);
        return this
    }, eve.on("raphael.remove", cF), eve.on("raphael.clear", cF), cl.toString = function() {
        return "Raphaël’s object"
    };
    var cG = function(a) {
        this.items = [], this.length = 0, this.type = "set";
        if (a)
            for (var b = 0, c = a.length; b < c; b++)
                a[b] && (a[b].constructor == cl.constructor || a[b].constructor == cG) && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    }, cH = cG.prototype;
    cH.push = function() {
        var a, b;
        for (var c = 0, d = arguments.length; c < d; c++)
            a = arguments[c], a && (a.constructor == cl.constructor || a.constructor == cG) && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, cH.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop()
    }, cH.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; c < d; c++)
            if (a.call(b, this.items[c], c)===!1)
                return this;
        return this
    };
    for (var cI in cl)
        cl[g](cI) && (cH[cI] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a][m](c, b)
                })
            }
        }(cI));
    cH.attr = function(b, c) {
        if (b && a.is(b, E) && a.is(b[0], "object"))
            for (var d = 0, e = b.length; d < e; d++)
                this.items[d].attr(b[d]);
        else 
            for (var f = 0, g = this.items.length; f < g; f++)
                this.items[f].attr(b, c);
        return this
    }, cH.clear = function() {
        while (this.length)
            this.pop()
    }, cH.splice = function(a, b, c) {
        a = a < 0 ? x(this.length + a, 0) : a, b = x(0, y(this.length - a, b));
        var d = [], e = [], f = [], g;
        for (g = 2; g < arguments.length; g++)
            f.push(arguments[g]);
        for (g = 0; g < b; g++)
            e.push(this[a + g]);
        for (; g < this.length - a; g++)
            d.push(this[a + g]);
        var h = f.length;
        for (g = 0; g < h + d.length; g++)
            this.items[a + g] = this[a + g] = g < h ? f[g] : d[g - h];
        g = this.items.length = this.length -= b - h;
        while (this[g])
            delete this[g++];
        return new cG(e)
    }, cH.exclude = function(a) {
        for (var b = 0, c = this.length; b < c; b++)
            if (this[b] == a) {
                this.splice(b, 1);
                return !0
            }
    }, cH.animate = function(b, c, d, e) {
        (a.is(d, "function") ||!d) && (e = d || null);
        var f = this.items.length, g = f, h, i = this, j;
        if (!f)
            return this;
        e && (j = function() {
            !--f && e.call(i)
        }), d = a.is(d, D) ? d : j;
        var k = a.animation(b, c, d, j);
        h = this.items[--g].animate(k);
        while (g--)
            this.items[g]&&!this.items[g].removed && this.items[g].animateWith(h, k, k);
        return this
    }, cH.insertAfter = function(a) {
        var b = this.items.length;
        while (b--)
            this.items[b].insertAfter(a);
        return this
    }, cH.getBBox = function() {
        var a = [], b = [], c = [], d = [];
        for (var e = this.items.length; e--;)
            if (!this.items[e].removed) {
                var f = this.items[e].getBBox();
                a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
            }
        a = y[m](0, a), b = y[m](0, b), c = x[m](0, c), d = x[m](0, d);
        return {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b
        }
    }, cH.clone = function(a) {
        a = new cG;
        for (var b = 0, c = this.items.length; b < c; b++)
            a.push(this.items[b].clone());
        return a
    }, cH.toString = function() {
        return "Raphaël‘s set"
    }, a.registerFont = function(a) {
        if (!a.face)
            return a;
        this.fonts = this.fonts || {};
        var b = {
            w: a.w,
            face: {},
            glyphs: {}
        }, c = a.face["font-family"];
        for (var d in a.face)
            a.face[g](d) && (b.face[d] = a.face[d]);
        this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b];
        if (!a.svg) {
            b.face["units-per-em"] = R(a.face["units-per-em"], 10);
            for (var e in a.glyphs)
                if (a.glyphs[g](e)) {
                    var f = a.glyphs[e];
                    b.glyphs[e] = {
                        w: f.w,
                        k: {},
                        d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }
                            [a] || "M"
                        }) + "z"
                    };
                    if (f.k)
                        for (var h in f.k)
                            f[g](h) && (b.glyphs[e].k[h] = f.k[h])
                }
        }
        return a
    }, k.getFont = function(b, c, d, e) {
        e = e || "normal", d = d || "normal", c =+ c || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }
        [c] || 400;
        if (!!a.fonts) {
            var f = a.fonts[b];
            if (!f) {
                var h = new RegExp("(^|\\s)" + b.replace(/[^\w\d\s+!~.:_-]/g, p) + "(\\s|$)", "i");
                for (var i in a.fonts)
                    if (a.fonts[g](i) && h.test(i)) {
                        f = a.fonts[i];
                        break
                    }
            }
            var j;
            if (f)
                for (var k = 0, l = f.length; k < l; k++) {
                    j = f[k];
                    if (j.face["font-weight"] == c && (j.face["font-style"] == d ||!j.face["font-style"]) && j.face["font-stretch"] == e)
                        break
                }
            return j
        }
    }, k.print = function(b, d, e, f, g, h, i) {
        h = h || "middle", i = x(y(i || 0, 1), -1);
        var j = r(e)[s](p), k = 0, l = 0, m = p, n;
        a.is(f, e) && (f = this.getFont(f));
        if (f) {
            n = (g || 16) / f.face["units-per-em"];
            var o = f.face.bbox[s](c), q =+ o[0], t = o[3] - o[1], u = 0, v =+ o[1] + (h == "baseline" ? t + + f.face.descent : t / 2);
            for (var w = 0, z = j.length; w < z; w++) {
                if (j[w] == "\n")
                    k = 0, B = 0, l = 0, u += t;
                else {
                    var A = l && f.glyphs[j[w-1]] || {}, B = f.glyphs[j[w]];
                    k += l ? (A.w || f.w) + (A.k && A.k[j[w]] || 0) + f.w * i : 0, l = 1
                }
                B && B.d && (m += a.transformPath(B.d, ["t", k * n, u * n, "s", n, n, q, v, "t", (b - q) / n, (d - v) / n]))
            }
        }
        return this.path(m).attr({
            fill: "#000",
            stroke: "none"
        })
    }, k.add = function(b) {
        if (a.is(b, "array")) {
            var c = this.set(), e = 0, f = b.length, h;
            for (; e < f; e++)
                h = b[e] || {}, d[g](h.type) && c.push(this[h.type]().attr(h))
        }
        return c
    }, a.format = function(b, c) {
        var d = a.is(c, E) ? [0][n](c): arguments;
        b && a.is(b, D) && d.length-1 && (b = b.replace(e, function(a, b) {
            return d[++b] == null ? p : d[b]
        }));
        return b || p
    }, a.fullfill = function() {
        var a = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, c = function(a, c, d) {
            var e = d;
            c.replace(b, function(a, b, c, d, f) {
                b = b || d, e && (b in e && (e = e[b]), typeof e == "function" && f && (e = e()))
            }), e = (e == null || e == d ? a : e) + "";
            return e
        };
        return function(b, d) {
            return String(b).replace(a, function(a, b) {
                return c(a, b, d)
            })
        }
    }(), a.ninja = function() {
        i.was ? h.win.Raphael = i.is : delete Raphael;
        return a
    }, a.st = cH, function(b, c, d) {
        function e() {
            /in/.test(b.readyState) ? setTimeout(e, 9) : a.eve("raphael.DOMload")
        }
        b.readyState == null && b.addEventListener && (b.addEventListener(c, d = function() {
            b.removeEventListener(c, d, !1), b.readyState = "complete"
        }, !1), b.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), i.was ? h.win.Raphael = a : Raphael = a, eve.on("raphael.DOMload", function() {
        b=!0
    })
}(), window.Raphael.svg && function(a) {
    var b = "hasOwnProperty", c = String, d = parseFloat, e = parseInt, f = Math, g = f.max, h = f.abs, i = f.pow, j = /[, ]+/, k = a.eve, l = "", m = " ", n = "http://www.w3.org/1999/xlink", o = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }, p = {};
    a.toString = function() {
        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
    };
    var q = function(d, e) {
        if (e) {
            typeof d == "string" && (d = q(d));
            for (var f in e)
                e[b](f) && (f.substring(0, 6) == "xlink:" ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f])))
        } else 
            d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
        return d
    }, r = function(b, e) {
        var j = "linear", k = b.id + e, m = .5, n = .5, o = b.node, p = b.paper, r = o.style, s = a._g.doc.getElementById(k);
        if (!s) {
            e = c(e).replace(a._radial_gradient, function(a, b, c) {
                j = "radial";
                if (b && c) {
                    m = d(b), n = d(c);
                    var e = (n > .5) * 2-1;
                    i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && n != .5 && (n = n.toFixed(5)-1e-5 * e)
                }
                return l
            }), e = e.split(/\s*\-\s*/);
            if (j == "linear") {
                var t = e.shift();
                t =- d(t);
                if (isNaN(t))
                    return null;
                var u = [0, 0, f.cos(a.rad(t)), f.sin(a.rad(t))], v = 1 / (g(h(u[2]), h(u[3])) || 1);
                u[2]*=v, u[3]*=v, u[2] < 0 && (u[0] =- u[2], u[2] = 0), u[3] < 0 && (u[1] =- u[3], u[3] = 0)
            }
            var w = a._parseDots(e);
            if (!w)
                return null;
            k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), delete b.gradient);
            if (!b.gradient) {
                s = q(j + "Gradient", {
                    id: k
                }), b.gradient = s, q(s, j == "radial" ? {
                    fx: m,
                    fy: n
                } : {
                    x1: u[0],
                    y1: u[1],
                    x2: u[2],
                    y2: u[3],
                    gradientTransform: b.matrix.invert()
                }), p.defs.appendChild(s);
                for (var x = 0, y = w.length; x < y; x++)
                    s.appendChild(q("stop", {
                        offset: w[x].offset ? w[x].offset: x ? "100%": "0%",
                        "stop-color": w[x].color || "#fff"
                    }))
                }
        }
        q(o, {
            fill: "url(#" + k + ")",
            opacity: 1,
            "fill-opacity": 1
        }), r.fill = l, r.opacity = 1, r.fillOpacity = 1;
        return 1
    }, s = function(a) {
        var b = a.getBBox(1);
        q(a.pattern, {
            patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
        })
    }, t = function(d, e, f) {
        if (d.type == "path") {
            var g = c(e).toLowerCase().split("-"), h = d.paper, i = f ? "end": "start", j = d.node, k = d.attrs, m = k["stroke-width"], n = g.length, r = "classic", s, t, u, v, w, x = 3, y = 3, z = 5;
            while (n--)
                switch (g[n]) {
                case"block":
                case"classic":
                case"oval":
                case"diamond":
                case"open":
                case"none":
                    r = g[n];
                    break;
                case"wide":
                    y = 5;
                    break;
                case"narrow":
                    y = 2;
                    break;
                case"long":
                    x = 5;
                    break;
                case"short":
                    x = 2
                }
            r == "open" ? (x += 2, y += 2, z += 2, u = 1, v = f ? 4 : 1, w = {
                fill : "none", stroke : k.stroke
            }) : (v = u = x / 2, w = {
                fill : k.stroke, stroke : "none"
            }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {};
            if (r != "none") {
                var A = "raphael-marker-" + r, B = "raphael-marker-" + i + r + x + y;
                a._g.doc.getElementById(A) ? p[A]++ : (h.defs.appendChild(q(q("path"), {
                    "stroke-linecap": "round",
                    d: o[r],
                    id: A
                })), p[A] = 1);
                var C = a._g.doc.getElementById(B), D;
                C ? (p[B]++, D = C.getElementsByTagName("use")[0]) : (C = q(q("marker"), {
                    id: B,
                    markerHeight: y,
                    markerWidth: x,
                    orient: "auto",
                    refX: v,
                    refY: y / 2
                }), D = q(q("use"), {
                    "xlink:href" : "#" + A, transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")", "stroke-width" : (1 / ((x / z + y / z) / 2)).toFixed(4)
                }), C.appendChild(D), h.defs.appendChild(C), p[B] = 1), q(D, w);
                var F = u * (r != "diamond" && r != "oval");
                f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - F * m) : (s = F * m, t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), w = {}, w["marker-" + i] = "url(#" + B + ")";
                if (t || s)
                    w.d = Raphael.getSubpath(k.path, s, t);
                q(j, w), d._.arrows[i + "Path"] = A, d._.arrows[i + "Marker"] = B, d._.arrows[i + "dx"] = F, d._.arrows[i + "Type"] = r, d._.arrows[i + "String"] = e
            } else 
                f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - s) : (s = 0, t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), d._.arrows[i + "Path"] && q(j, {
                d: Raphael.getSubpath(k.path, s, t)
            }), delete d._.arrows[i + "Path"], delete d._.arrows[i + "Marker"], delete d._.arrows[i + "dx"], delete d._.arrows[i + "Type"], delete d._.arrows[i + "String"];
            for (w in p)
                if (p[b](w)&&!p[w]) {
                    var G = a._g.doc.getElementById(w);
                    G && G.parentNode.removeChild(G)
                }
        }
    }, u = {
        "": [0],
        none: [0],
        "-": [3, 1],
        ".": [1, 1],
        "-.": [3, 1, 1, 1],
        "-..": [3, 1, 1, 1, 1, 1],
        ". ": [1, 3],
        "- ": [4, 3],
        "--": [8, 3],
        "- .": [4, 3, 1, 3],
        "--.": [8, 3, 1, 3],
        "--..": [8, 3, 1, 3, 1, 3]
    }, v = function(a, b, d) {
        b = u[c(b).toLowerCase()];
        if (b) {
            var e = a.attrs["stroke-width"] || "1", f = {
                round: e,
                square: e,
                butt: 0
            }
            [a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = b.length;
            while (h--)
                g[h] = b[h] * e + (h%2 ? 1 : -1) * f;
            q(a.node, {
                "stroke-dasharray": g.join(",")
            })
        }
    }, w = function(d, f) {
        var i = d.node, k = d.attrs, m = i.style.visibility;
        i.style.visibility = "hidden";
        for (var o in f)
            if (f[b](o)) {
                if (!a._availableAttrs[b](o))
                    continue;
                    var p = f[o];
                    k[o] = p;
                    switch (o) {
                    case"blur":
                        d.blur(p);
                        break;
                    case"href":
                    case"title":
                    case"target":
                        var u = i.parentNode;
                        if (u.tagName.toLowerCase() != "a") {
                            var w = q("a");
                            u.insertBefore(w, i), w.appendChild(i), u = w
                        }
                        o == "target" ? u.setAttributeNS(n, "show", p == "blank" ? "new" : p) : u.setAttributeNS(n, o, p);
                        break;
                    case"cursor":
                        i.style.cursor = p;
                        break;
                    case"transform":
                        d.transform(p);
                        break;
                    case"arrow-start":
                        t(d, p);
                        break;
                    case"arrow-end":
                        t(d, p, 1);
                        break;
                    case"clip-rect":
                        var x = c(p).split(j);
                        if (x.length == 4) {
                            d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                            var z = q("clipPath"), A = q("rect");
                            z.id = a.createUUID(), q(A, {
                                x: x[0],
                                y: x[1],
                                width: x[2],
                                height: x[3]
                            }), z.appendChild(A), d.paper.defs.appendChild(z), q(i, {
                                "clip-path": "url(#" + z.id + ")"
                            }), d.clip = A
                        }
                        if (!p) {
                            var B = i.getAttribute("clip-path");
                            if (B) {
                                var C = a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, l));
                                C && C.parentNode.removeChild(C), q(i, {
                                    "clip-path": l
                                }), delete d.clip
                            }
                        }
                        break;
                    case"path":
                        d.type == "path" && (q(i, {
                            d: p ? k.path = a._pathToAbsolute(p): "M0,0"
                        }), d._.dirty = 1, d._.arrows && ("startString"in d._.arrows && t(d, d._.arrows.startString), "endString"in d._.arrows && t(d, d._.arrows.endString, 1)));
                        break;
                    case"width":
                        i.setAttribute(o, p), d._.dirty = 1;
                        if (k.fx)
                            o = "x", p = k.x;
                        else 
                            break;
                        case"x":
                            k.fx && (p =- k.x - (k.width || 0));
                        case"rx":
                            if (o == "rx" && d.type == "rect")
                                break;
                            case"cx":
                                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                break;
                            case"height":
                                i.setAttribute(o, p), d._.dirty = 1;
                                if (k.fy)
                                    o = "y", p = k.y;
                                else 
                                    break;
                                case"y":
                                    k.fy && (p =- k.y - (k.height || 0));
                                case"ry":
                                    if (o == "ry" && d.type == "rect")
                                        break;
                                    case"cy":
                                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                        break;
                                    case"r":
                                        d.type == "rect" ? q(i, {
                                            rx: p,
                                            ry: p
                                        }) : i.setAttribute(o, p), d._.dirty = 1;
                                        break;
                                    case"src":
                                        d.type == "image" && i.setAttributeNS(n, "href", p);
                                        break;
                                    case"stroke-width":
                                        if (d._.sx != 1 || d._.sy != 1)
                                            p/=g(h(d._.sx), h(d._.sy)) || 1;
                                            d.paper._vbSize && (p*=d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString"in d._.arrows && t(d, d._.arrows.startString), "endString"in d._.arrows && t(d, d._.arrows.endString, 1));
                                            break;
                                        case"stroke-dasharray":
                                            v(d, p, f);
                                            break;
                                        case"fill":
                                            var D = c(p).match(a._ISURL);
                                            if (D) {
                                                z = q("pattern");
                                                var F = q("image");
                                                z.id = a.createUUID(), q(z, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), q(F, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": D[1]
                                                }), z.appendChild(F), function(b) {
                                                    a._preload(D[1], function() {
                                                        var a = this.offsetWidth, c = this.offsetHeight;
                                                        q(b, {
                                                            width: a,
                                                            height: c
                                                        }), q(F, {
                                                            width: a,
                                                            height: c
                                                        }), d.paper.safari()
                                                    })
                                                }(z), d.paper.defs.appendChild(z), q(i, {
                                                    fill: "url(#" + z.id + ")"
                                                }), d.pattern = z, d.pattern && s(d);
                                                break
                                            }
                                            var G = a.getRGB(p);
                                            if (!G.error)
                                                delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, {
                                                    opacity: k.opacity
                                                }), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, {
                                                    "fill-opacity": k["fill-opacity"]
                                                });
                                            else if ((d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && r(d, p)) {
                                                if ("opacity"in k || "fill-opacity"in k) {
                                                    var H = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                    if (H) {
                                                        var I = H.getElementsByTagName("stop");
                                                        q(I[I.length-1], {
                                                            "stop-opacity": ("opacity"in k ? k.opacity : 1) * ("fill-opacity"in k ? k["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                k.gradient = p, k.fill = "none";
                                                break
                                            }
                                            G[b]("opacity") && q(i, {
                                                "fill-opacity": G.opacity > 1 ? G.opacity / 100: G.opacity
                                            });
                                        case"stroke":
                                            G = a.getRGB(p), i.setAttribute(o, G.hex), o == "stroke" && G[b]("opacity") && q(i, {
                                                "stroke-opacity": G.opacity > 1 ? G.opacity / 100: G.opacity
                                            }), o == "stroke" && d._.arrows && ("startString"in d._.arrows && t(d, d._.arrows.startString), "endString"in d._.arrows && t(d, d._.arrows.endString, 1));
                                            break;
                                        case"gradient":
                                            (d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && r(d, p);
                                            break;
                                        case"opacity":
                                            k.gradient&&!k[b]("stroke-opacity") && q(i, {
                                                "stroke-opacity": p > 1 ? p / 100: p
                                            });
                                        case"fill-opacity":
                                            if (k.gradient) {
                                                H = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length-1], {
                                                    "stop-opacity" : p
                                                }));
                                                break
                                            };
                                        default:
                                            o == "font-size" && (p = e(p, 10) + "px");
                                            var J = o.replace(/(\-.)/g, function(a) {
                                                return a.substring(1).toUpperCase()
                                            });
                                            i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p)
                                        }
                                    }
        y(d, f), i.style.visibility = m
    }, x = 1.2, y = function(d, f) {
        if (d.type == "text"&&!!(f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
            var g = d.attrs, h = d.node, i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10): 10;
            if (f[b]("text")) {
                g.text = f.text;
                while (h.firstChild)
                    h.removeChild(h.firstChild);
                var j = c(f.text).split("\n"), k = [], m;
                for (var n = 0, o = j.length; n < o; n++)
                    m = q("tspan"), n && q(m, {
                    dy: i * x,
                    x: g.x
                }), m.appendChild(a._g.doc.createTextNode(j[n])), h.appendChild(m), k[n] = m
            } else {
                k = h.getElementsByTagName("tspan");
                for (n = 0, o = k.length; n < o; n++)
                    n ? q(k[n], {
                        dy: i * x,
                        x: g.x
                    }) : q(k[0], {
                        dy: 0
                    })
                }
            q(h, {
                x: g.x,
                y: g.y
            }), d._.dirty = 1;
            var p = d._getBBox(), r = g.y - (p.y + p.height / 2);
            r && a.is(r, "finite") && q(k[0], {
                dy: r
            })
        }
    }, z = function(b, c) {
        var d = 0, e = 0;
        this[0] = this.node = b, b.raphael=!0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
        }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
    }, A = a.el;
    z.prototype = A, A.constructor = z, a._engine.path = function(a, b) {
        var c = q("path");
        b.canvas && b.canvas.appendChild(c);
        var d = new z(c, b);
        d.type = "path", w(d, {
            fill: "none",
            stroke: "#000",
            path: a
        });
        return d
    }, A.rotate = function(a, b, e) {
        if (this.removed)
            return this;
        a = c(a).split(j), a.length-1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
        if (b == null || e == null) {
            var f = this.getBBox(1);
            b = f.x + f.width / 2, e = f.y + f.height / 2
        }
        this.transform(this._.transform.concat([["r", a, b, e]]));
        return this
    }, A.scale = function(a, b, e, f) {
        if (this.removed)
            return this;
        a = c(a).split(j), a.length-1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), b == null && (b = a), f == null && (e = f);
        if (e == null || f == null)
            var g = this.getBBox(1);
        e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, b, e, f]]));
        return this
    }, A.translate = function(a, b) {
        if (this.removed)
            return this;
        a = c(a).split(j), a.length-1 && (b = d(a[1])), a = d(a[0]) || 0, b =+ b || 0, this.transform(this._.transform.concat([["t", a, b]]));
        return this
    }, A.transform = function(c) {
        var d = this._;
        if (c == null)
            return d.transform;
        a._extractTransform(this, c), this.clip && q(this.clip, {
            transform: this.matrix.invert()
        }), this.pattern && s(this), this.node && q(this.node, {
            transform: this.matrix
        });
        if (d.sx != 1 || d.sy != 1) {
            var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"]: 1;
            this.attr({
                "stroke-width": e
            })
        }
        return this
    }, A.hide = function() {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    }, A.show = function() {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    }, A.remove = function() {
        if (!this.removed&&!!this.node.parentNode) {
            var b = this.paper;
            b.__set__ && b.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && b.defs.removeChild(this.gradient), a._tear(this, b), this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var c in this)
                this[c] = typeof this[c] == "function" ? a._removedFactory(c) : null;
            this.removed=!0
        }
    }, A._getBBox = function() {
        if (this.node.style.display == "none") {
            this.show();
            var a=!0
        }
        var b = {};
        try {
            b = this.node.getBBox()
        } catch (c) {} finally {
            b = b || {}
        }
        a && this.hide();
        return b
    }, A.attr = function(c, d) {
        if (this.removed)
            return this;
        if (c == null) {
            var e = {};
            for (var f in this.attrs)
                this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e
        }
        if (d == null && a.is(c, "string")) {
            if (c == "fill" && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
            if (c == "transform")
                return this._.transform;
            var g = c.split(j), h = {};
            for (var i = 0, l = g.length; i < l; i++)
                c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return l-1 ? h : h[g[0]]
        }
        if (d == null && a.is(c, "array")) {
            h = {};
            for (i = 0, l = c.length; i < l; i++)
                h[c[i]] = this.attr(c[i]);
            return h
        }
        if (d != null) {
            var m = {};
            m[c] = d
        } else 
            c != null && a.is(c, "object") && (m = c);
        for (var n in m)
            k("raphael.attr." + n + "." + this.id, this, m[n]);
        for (n in this.paper.customAttributes)
            if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
                var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                this.attrs[n] = m[n];
                for (var p in o)
                    o[b](p) && (m[p] = o[p])
            }
        w(this, m);
        return this
    }, A.toFront = function() {
        if (this.removed)
            return this;
        this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var b = this.paper;
        b.top != this && a._tofront(this, b);
        return this
    }, A.toBack = function() {
        if (this.removed)
            return this;
        var b = this.node.parentNode;
        b.tagName.toLowerCase() == "a" ? b.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : b.firstChild != this.node && b.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper);
        var c = this.paper;
        return this
    }, A.insertAfter = function(b) {
        if (this.removed)
            return this;
        var c = b.node || b[b.length-1].node;
        c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
        return this
    }, A.insertBefore = function(b) {
        if (this.removed)
            return this;
        var c = b.node || b[0].node;
        c.parentNode.insertBefore(this.node, c), a._insertbefore(this, b, this.paper);
        return this
    }, A.blur = function(b) {
        var c = this;
        if ( + b !== 0) {
            var d = q("filter"), e = q("feGaussianBlur");
            c.attrs.blur = b, d.id = a.createUUID(), q(e, {
                stdDeviation: + b || 1.5
            }), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, {
                filter: "url(#" + d.id + ")"
            })
        } else 
            c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter")
    }, a._engine.circle = function(a, b, c, d) {
        var e = q("circle");
        a.canvas && a.canvas.appendChild(e);
        var f = new z(e, a);
        f.attrs = {
            cx: b,
            cy: c,
            r: d,
            fill: "none",
            stroke: "#000"
        }, f.type = "circle", q(e, f.attrs);
        return f
    }, a._engine.rect = function(a, b, c, d, e, f) {
        var g = q("rect");
        a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = {
            x: b,
            y: c,
            width: d,
            height: e,
            r: f || 0,
            rx: f || 0,
            ry: f || 0,
            fill: "none",
            stroke: "#000"
        }, h.type = "rect", q(g, h.attrs);
        return h
    }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = q("ellipse");
        a.canvas && a.canvas.appendChild(f);
        var g = new z(f, a);
        g.attrs = {
            cx: b,
            cy: c,
            rx: d,
            ry: e,
            fill: "none",
            stroke: "#000"
        }, g.type = "ellipse", q(f, g.attrs);
        return g
    }, a._engine.image = function(a, b, c, d, e, f) {
        var g = q("image");
        q(g, {
            x: c,
            y: d,
            width: e,
            height: f,
            preserveAspectRatio: "none"
        }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = {
            x: c,
            y: d,
            width: e,
            height: f,
            src: b
        }, h.type = "image";
        return h
    }, a._engine.text = function(b, c, d, e) {
        var f = q("text");
        b.canvas && b.canvas.appendChild(f);
        var g = new z(f, b);
        g.attrs = {
            x: c,
            y: d,
            "text-anchor": "middle",
            text: e,
            font: a._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        }, g.type = "text", w(g, g.attrs);
        return g
    }, a._engine.setSize = function(a, b) {
        this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox);
        return this
    }, a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments), c = b && b.container, d = b.x, e = b.y, f = b.width, g = b.height;
        if (!c)
            throw new Error("SVG container not found.");
        var h = q("svg"), i = "overflow:hidden;", j;
        d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(h, {
            height: g,
            version: 1.1,
            width: f,
            xmlns: "http://www.w3.org/2000/svg"
        }), c == 1 ? (h.style.cssText = i + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(h), j = 1) : (h.style.cssText = i + "position:relative", c.firstChild ? c.insertBefore(h, c.firstChild) : c.appendChild(h)), c = new a._Paper, c.width = f, c.height = g, c.canvas = h, c.clear(), c._left = c._top = 0, j && (c.renderfix = function() {}), c.renderfix();
        return c
    }, a._engine.setViewBox = function(a, b, c, d, e) {
        k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
        var f = g(c / this.width, d / this.height), h = this.top, i = e ? "meet": "xMinYMin", j, l;
        a == null ? (this._vbSize && (f = 1), delete this._vbSize, j = "0 0 " + this.width + m + this.height) : (this._vbSize = f, j = a + m + b + m + c + m + d), q(this.canvas, {
            viewBox: j,
            preserveAspectRatio: i
        });
        while (f && h)
            l = "stroke-width"in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
            "stroke-width": l
        }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
        this._viewBox = [a, b, c, d, !!e];
        return this
    }, a.prototype.renderfix = function() {
        var a = this.canvas, b = a.style, c;
        try {
            c = a.getScreenCTM() || a.createSVGMatrix()
        } catch (d) {
            c = a.createSVGMatrix()
        }
        var e =- c.e%1, f =- c.f%1;
        if (e || f)
            e && (this._left = (this._left + e)%1, b.left = this._left + "px"), f && (this._top = (this._top + f)%1, b.top = this._top + "px")
    }, a.prototype.clear = function() {
        a.eve("raphael.clear", this);
        var b = this.canvas;
        while (b.firstChild)
            b.removeChild(b.firstChild);
        this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs"))
    }, a.prototype.remove = function() {
        k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this)
            this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null
    };
    var B = a.st;
    for (var C in A)
        A[b](C)&&!B[b](C) && (B[C] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a].apply(c, b)
                })
            }
        }(C))
}(window.Raphael), window.Raphael.vml && function(a) {
    var b = "hasOwnProperty", c = String, d = parseFloat, e = Math, f = e.round, g = e.max, h = e.min, i = e.abs, j = "fill", k = /[, ]+/, l = a.eve, m = " progid:DXImageTransform.Microsoft", n = " ", o = "", p = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }, q = /([clmz]),?([^clmz]*)/gi, r = / progid:\S+Blur\([^\)]+\)/g, s = /-?[^,\s-]+/g, t = "position:absolute;left:0;top:0;width:1px;height:1px", u = 21600, v = {
        path: 1,
        rect: 1,
        image: 1
    }, w = {
        circle: 1,
        ellipse: 1
    }, x = function(b) {
        var d = /[ahqstv]/ig, e = a._pathToAbsolute;
        c(b).match(d) && (e = a._path2curve), d = /[clmz]/g;
        if (e == a._pathToAbsolute&&!c(b).match(d)) {
            var g = c(b).replace(q, function(a, b, c) {
                var d = [], e = b.toLowerCase() == "m", g = p[b];
                c.replace(s, function(a) {
                    e && d.length == 2 && (g += d + p[b == "m" ? "l": "L"], d = []), d.push(f(a * u))
                });
                return g + d
            });
            return g
        }
        var h = e(b), i, j;
        g = [];
        for (var k = 0, l = h.length; k < l; k++) {
            i = h[k], j = h[k][0].toLowerCase(), j == "z" && (j = "x");
            for (var m = 1, r = i.length; m < r; m++)
                j += f(i[m] * u) + (m != r-1 ? "," : o);
            g.push(j)
        }
        return g.join(n)
    }, y = function(b, c, d) {
        var e = a.matrix();
        e.rotate( - b, .5, .5);
        return {
            dx: e.x(c, d),
            dy: e.y(c, d)
        }
    }, z = function(a, b, c, d, e, f) {
        var g = a._, h = a.matrix, k = g.fillpos, l = a.node, m = l.style, o = 1, p = "", q, r = u / b, s = u / c;
        m.visibility = "hidden";
        if (!!b&&!!c) {
            l.coordsize = i(r) + n + i(s), m.rotation = f * (b * c < 0?-1 : 1);
            if (f) {
                var t = y(f, d, e);
                d = t.dx, e = t.dy
            }
            b < 0 && (p += "x"), c < 0 && (p += " y") && (o =- 1), m.flip = p, l.coordorigin = d*-r + n + e*-s;
            if (k || g.fillsize) {
                var v = l.getElementsByTagName(j);
                v = v && v[0], l.removeChild(v), k && (t = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), v.position = t.dx * o + n + t.dy * o), g.fillsize && (v.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(v)
            }
            m.visibility = "visible"
        }
    };
    a.toString = function() {
        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
    };
    var A = function(a, b, d) {
        var e = c(b).toLowerCase().split("-"), f = d ? "end": "start", g = e.length, h = "classic", i = "medium", j = "medium";
        while (g--)
            switch (e[g]) {
            case"block":
            case"classic":
            case"oval":
            case"diamond":
            case"open":
            case"none":
                h = e[g];
                break;
            case"wide":
            case"narrow":
                j = e[g];
                break;
            case"long":
            case"short":
                i = e[g]
            }
        var k = a.node.getElementsByTagName("stroke")[0];
        k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
    }, B = function(e, i) {
        e.attrs = e.attrs || {};
        var l = e.node, m = e.attrs, p = l.style, q, r = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r), s = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry), t = e;
        for (var y in i)
            i[b](y) && (m[y] = i[y]);
        r && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur"in i && e.blur(i.blur);
        if (i.path && e.type == "path" || r)
            l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), e.type == "image" && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0));
        "transform"in i && e.transform(i.transform);
        if (s) {
            var B =+ m.cx, D =+ m.cy, E =+ m.rx||+m.r || 0, G =+ m.ry||+m.r || 0;
            l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((B - E) * u), f((D - G) * u), f((B + E) * u), f((D + G) * u), f(B * u))
        }
        if ("clip-rect"in i) {
            var H = c(i["clip-rect"]).split(k);
            if (H.length == 4) {
                H[2] =+ H[2] + + H[0], H[3] =+ H[3] + + H[1];
                var I = l.clipRect || a._g.doc.createElement("div"), J = I.style;
                J.clip = a.format("rect({1}px {2}px {3}px {0}px)", H), l.clipRect || (J.position = "absolute", J.top = 0, J.left = 0, J.width = e.paper.width + "px", J.height = e.paper.height + "px", l.parentNode.insertBefore(I, l), I.appendChild(l), l.clipRect = I)
            }
            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
        }
        if (e.textpath) {
            var K = e.textpath.style;
            i.font && (K.font = i.font), i["font-family"] && (K.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (K.fontSize = i["font-size"]), i["font-weight"] && (K.fontWeight = i["font-weight"]), i["font-style"] && (K.fontStyle = i["font-style"])
        }
        "arrow-start"in i && A(t, i["arrow-start"]), "arrow-end"in i && A(t, i["arrow-end"], 1);
        if (i.opacity != null || i["stroke-width"] != null || i.fill != null || i.src != null || i.stroke != null || i["stroke-width"] != null || i["stroke-opacity"] != null || i["fill-opacity"] != null || i["stroke-dasharray"] != null || i["stroke-miterlimit"] != null || i["stroke-linejoin"] != null || i["stroke-linecap"] != null) {
            var L = l.getElementsByTagName(j), M=!1;
            L = L && L[0], !L && (M = L = F(j)), e.type == "image" && i.src && (L.src = i.src), i.fill && (L.on=!0);
            if (L.on == null || i.fill == "none" || i.fill === null)
                L.on=!1;
            if (L.on && i.fill) {
                var N = c(i.fill).match(a._ISURL);
                if (N) {
                    L.parentNode == l && l.removeChild(L), L.rotate=!0, L.src = N[1], L.type = "tile";
                    var O = e.getBBox(1);
                    L.position = O.x + n + O.y, e._.fillpos = [O.x, O.y], a._preload(N[1], function() {
                        e._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else 
                    L.color = a.getRGB(i.fill).hex, L.src = o, L.type = "solid", a.getRGB(i.fill).error && (t.type in{
                    circle: 1,
                    ellipse: 1
                }
                || c(i.fill).charAt() != "r") && C(t, i.fill, L) && (m.fill = "none", m.gradient = i.fill, L.rotate=!1)
            }
            if ("fill-opacity"in i || "opacity"in i) {
                var P = (( + m["fill-opacity"] + 1 || 2)-1) * (( + m.opacity + 1 || 2)-1) * (( + a.getRGB(i.fill).o + 1 || 2)-1);
                P = h(g(P, 0), 1), L.opacity = P, L.src && (L.color = "none")
            }
            l.appendChild(L);
            var Q = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0], T=!1;
            !Q && (T = Q = F("stroke"));
            if (i.stroke && i.stroke != "none" || i["stroke-width"] || i["stroke-opacity"] != null || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"])
                Q.on=!0;
            (i.stroke == "none" || i.stroke === null || Q.on == null || i.stroke == 0 || i["stroke-width"] == 0) && (Q.on=!1);
            var U = a.getRGB(i.stroke);
            Q.on && i.stroke && (Q.color = U.hex), P = (( + m["stroke-opacity"] + 1 || 2)-1) * (( + m.opacity + 1 || 2)-1) * (( + U.o + 1 || 2)-1);
            var V = (d(i["stroke-width"]) || 1) * .75;
            P = h(g(P, 0), 1), i["stroke-width"] == null && (V = m["stroke-width"]), i["stroke-width"] && (Q.weight = V), V && V < 1 && (P*=V) && (Q.weight = 1), Q.opacity = P, i["stroke-linejoin"] && (Q.joinstyle = i["stroke-linejoin"] || "miter"), Q.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (Q.endcap = i["stroke-linecap"] == "butt" ? "flat" : i["stroke-linecap"] == "square" ? "square" : "round");
            if (i["stroke-dasharray"]) {
                var W = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                Q.dashstyle = W[b](i["stroke-dasharray"]) ? W[i["stroke-dasharray"]] : o
            }
            T && l.appendChild(Q)
        }
        if (t.type == "text") {
            t.paper.canvas.style.display = o;
            var X = t.paper.span, Y = 100, Z = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
            p = X.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), Z = d(m["font-size"] || Z && Z[0]) || 10, p.fontSize = Z * Y + "px", t.textpath.string && (X.innerHTML = c(t.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var $ = X.getBoundingClientRect();
            t.W = m.w = ($.right - $.left) / Y, t.H = m.h = ($.bottom - $.top) / Y, t.X = m.x, t.Y = m.y + t.H / 2, ("x"in i || "y"in i) && (t.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
            var _ = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
            for (var ba = 0, bb = _.length; ba < bb; ba++)
                if (_[ba]in i) {
                    t._.dirty = 1;
                    break
                }
            switch (m["text-anchor"]) {
            case"start":
                t.textpath.style["v-text-align"] = "left", t.bbx = t.W / 2;
                break;
            case"end":
                t.textpath.style["v-text-align"] = "right", t.bbx =- t.W / 2;
                break;
            default:
                t.textpath.style["v-text-align"] = "center", t.bbx = 0
            }
            t.textpath.style["v-text-kern"]=!0
        }
    }, C = function(b, f, g) {
        b.attrs = b.attrs || {};
        var h = b.attrs, i = Math.pow, j, k, l = "linear", m = ".5 .5";
        b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) {
            l = "radial", b && c && (b = d(b), c = d(c), i(b - .5, 2) + i(c - .5, 2) > .25 && (c = e.sqrt(.25 - i(b - .5, 2)) * ((c > .5) * 2-1) + .5), m = b + n + c);
            return o
        }), f = f.split(/\s*\-\s*/);
        if (l == "linear") {
            var p = f.shift();
            p =- d(p);
            if (isNaN(p))
                return null
        }
        var q = a._parseDots(f);
        if (!q)
            return null;
        b = b.shape || b.node;
        if (q.length) {
            b.removeChild(g), g.on=!0, g.method = "none", g.color = q[0].color, g.color2 = q[q.length-1].color;
            var r = [];
            for (var s = 0, t = q.length; s < t; s++)
                q[s].offset && r.push(q[s].offset + n + q[s].color);
            g.colors = r.length ? r.join() : "0% " + g.color, l == "radial" ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = m, g.angle = 0) : (g.type = "gradient", g.angle = (270 - p)%360), b.appendChild(g)
        }
        return 1
    }, D = function(b, c) {
        this[0] = this.node = b, b.raphael=!0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
    }, E = a.el;
    D.prototype = E, E.constructor = D, E.transform = function(b) {
        if (b == null)
            return this._.transform;
        var d = this.paper._viewBoxShift, e = d ? "s" + [d.scale, d.scale] + "-1-1t" + [d.dx, d.dy]: o, f;
        d && (f = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, e + b);
        var g = this.matrix.clone(), h = this.skew, i = this.node, j, k=~c(this.attrs.fill).indexOf("-"), l=!c(this.attrs.fill).indexOf("url(");
        g.translate(-0.5, -0.5);
        if (l || k || this.type == "image") {
            h.matrix = "1 0 0 1", h.offset = "0 0", j = g.split();
            if (k && j.noRotation ||!j.isSimple) {
                i.style.filter = g.toFilter();
                var m = this.getBBox(), p = this.getBBox(1), q = m.x - p.x, r = m.y - p.y;
                i.coordorigin = q*-u + n + r*-u, z(this, 1, 1, q, r, 0)
            } else 
                i.style.filter = o, z(this, j.scalex, j.scaley, j.dx, j.dy, j.rotate)
        } else 
            i.style.filter = o, h.matrix = c(g), h.offset = g.offset();
        f && (this._.transform = f);
        return this
    }, E.rotate = function(a, b, e) {
        if (this.removed)
            return this;
        if (a != null) {
            a = c(a).split(k), a.length-1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
            if (b == null || e == null) {
                var f = this.getBBox(1);
                b = f.x + f.width / 2, e = f.y + f.height / 2
            }
            this._.dirtyT = 1, this.transform(this._.transform.concat([["r", a, b, e]]));
            return this
        }
    }, E.translate = function(a, b) {
        if (this.removed)
            return this;
        a = c(a).split(k), a.length-1 && (b = d(a[1])), a = d(a[0]) || 0, b =+ b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([["t", a, b]]));
        return this
    }, E.scale = function(a, b, e, f) {
        if (this.removed)
            return this;
        a = c(a).split(k), a.length-1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), b == null && (b = a), f == null && (e = f);
        if (e == null || f == null)
            var g = this.getBBox(1);
        e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, b, e, f]])), this._.dirtyT = 1;
        return this
    }, E.hide = function() {
        !this.removed && (this.node.style.display = "none");
        return this
    }, E.show = function() {
        !this.removed && (this.node.style.display = o);
        return this
    }, E._getBBox = function() {
        if (this.removed)
            return {};
        return {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        }
    }, E.remove = function() {
        if (!this.removed&&!!this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var b in this)
                this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null;
            this.removed=!0
        }
    }, E.attr = function(c, d) {
        if (this.removed)
            return this;
        if (c == null) {
            var e = {};
            for (var f in this.attrs)
                this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e
        }
        if (d == null && a.is(c, "string")) {
            if (c == j && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
            var g = c.split(k), h = {};
            for (var i = 0, m = g.length; i < m; i++)
                c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return m-1 ? h : h[g[0]]
        }
        if (this.attrs && d == null && a.is(c, "array")) {
            h = {};
            for (i = 0, m = c.length; i < m; i++)
                h[c[i]] = this.attr(c[i]);
            return h
        }
        var n;
        d != null && (n = {}, n[c] = d), d == null && a.is(c, "object") && (n = c);
        for (var o in n)
            l("raphael.attr." + o + "." + this.id, this, n[o]);
        if (n) {
            for (o in this.paper.customAttributes)
                if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
                    var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                    this.attrs[o] = n[o];
                    for (var q in p)
                        p[b](q) && (n[q] = p[q])
                }
            n.text && this.type == "text" && (this.textpath.string = n.text), B(this, n)
        }
        return this
    }, E.toFront = function() {
        !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper);
        return this
    }, E.toBack = function() {
        if (this.removed)
            return this;
        this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper));
        return this
    }, E.insertAfter = function(b) {
        if (this.removed)
            return this;
        b.constructor == a.st.constructor && (b = b[b.length-1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
        return this
    }, E.insertBefore = function(b) {
        if (this.removed)
            return this;
        b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper);
        return this
    }, E.blur = function(b) {
        var c = this.node.runtimeStyle, d = c.filter;
        d = d.replace(r, o), + b !== 0 ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + ( + b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f( + b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur)
    }, a._engine.path = function(a, b) {
        var c = F("shape");
        c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
        var d = new D(c, b), e = {
            fill: "none",
            stroke: "#000"
        };
        a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
        var f = F("skew");
        f.on=!0, c.appendChild(f), d.skew = f, d.transform(o);
        return d
    }, a._engine.rect = function(b, c, d, e, f, g) {
        var h = a._rectPath(c, d, e, f, g), i = b.path(h), j = i.attrs;
        i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect";
        return i
    }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = a.path(), g = f.attrs;
        f.X = b - d, f.Y = c - e, f.W = d * 2, f.H = e * 2, f.type = "ellipse", B(f, {
            cx: b,
            cy: c,
            rx: d,
            ry: e
        });
        return f
    }, a._engine.circle = function(a, b, c, d) {
        var e = a.path(), f = e.attrs;
        e.X = b - d, e.Y = c - d, e.W = e.H = d * 2, e.type = "circle", B(e, {
            cx: b,
            cy: c,
            r: d
        });
        return e
    }, a._engine.image = function(b, c, d, e, f, g) {
        var h = a._rectPath(d, e, f, g), i = b.path(h).attr({
            stroke: "none"
        }), k = i.attrs, l = i.node, m = l.getElementsByTagName(j)[0];
        k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate=!0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0);
        return i
    }, a._engine.text = function(b, d, e, g) {
        var h = F("shape"), i = F("path"), j = F("textpath");
        d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok=!0, j.string = c(g), j.on=!0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
        var k = new D(h, b), l = {
            fill: "#000",
            stroke: "none",
            font: a._availableAttrs.font,
            text: g
        };
        k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h);
        var m = F("skew");
        m.on=!0, h.appendChild(m), k.skew = m, k.transform(o);
        return k
    }, a._engine.setSize = function(b, c) {
        var d = this.canvas.style;
        this.width = b, this.height = c, b ==+ b && (b += "px"), c ==+ c && (c += "px"), d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox);
        return this
    }, a._engine.setViewBox = function(b, c, d, e, f) {
        a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]);
        var h = this.width, i = this.height, j = 1 / g(d / h, e / i), k, l;
        f && (k = i / e, l = h / d, d * k < h && (b -= (h - d * k) / 2 / k), e * l < i && (c -= (i - e * l) / 2 / l)), this._viewBox = [b, c, d, e, !!f], this._viewBoxShift = {
            dx: - b,
            dy: - c,
            scale: j
        }, this.forEach(function(a) {
            a.transform("...")
        });
        return this
    };
    var F;
    a._engine.initWin = function(a) {
        var b = a.document;
        b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                return b.createElement("<rvml:" + a + ' class="rvml">')
            }
        } catch (c) {
            F = function(a) {
                return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }, a._engine.initWin(a._g.win), a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments), c = b.container, d = b.height, e, f = b.width, g = b.x, h = b.y;
        if (!c)
            throw new Error("VML container not found.");
        var i = new a._Paper, j = i.canvas = a._g.doc.createElement("div"), k = j.style;
        g = g || 0, h = h || 0, f = f || 512, d = d || 342, i.width = f, i.height = d, f ==+ f && (f += "px"), d ==+ d && (d += "px"), i.coordsize = u * 1e3 + n + u * 1e3, i.coordorigin = "0 0", i.span = a._g.doc.createElement("span"), i.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", j.appendChild(i.span), k.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d), c == 1 ? (a._g.doc.body.appendChild(j), k.left = g + "px", k.top = h + "px", k.position = "absolute") : c.firstChild ? c.insertBefore(j, c.firstChild) : c.appendChild(j), i.renderfix = function() {};
        return i
    }, a.prototype.clear = function() {
        a.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
    }, a.prototype.remove = function() {
        a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this)
            this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null;
        return !0
    };
    var G = a.st;
    for (var H in E)
        E[b](H)&&!G[b](H) && (G[H] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a].apply(c, b)
                })
            }
        }(H))
}(window.Raphael)
;
window.polyjs = function(Ed) {
    if (!Ed) {
        var h = {}, Fd = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        h.groupBy = function(a, b) {
            return _.groupBy(a, h.stringify(b))
        };
        h.stringify = function(a) {
            return function(b) {
                return _.reduce(a, function(a, d) {
                    return "" + a + d + ":" + b[d] + ";"
                }, "")
            }
        };
        h.cross = function(a, b) {
            var c, d, e, f, g, j, k, l, m, n;
            null == b && (b = []);
            e = _.difference(_.keys(a), b);
            if (0 === e.length)
                return [{}
                ];
            c = [];
            f = e[0];
            e = h.cross(a, b.concat(f));
            n = a[f];
            j = 0;
            for (l = n.length; j < l; j++) {
                g =
                n[j];
                k = 0;
                for (m = e.length; k < m; k++)
                    d = e[k], d = _.clone(d), d[f] = g, c.push(d)
            }
            return c
        };
        h.filter = function(a, b, c) {
            var d, e, f, g;
            e = [];
            f = 0;
            for (g = a.length; f < g; f++)
                d = a[f], d[b] === c && e.push(d);
            return e
        };
        h.intersect = function(a, b) {
            var c, d, e, f, g;
            d = function(c) {
                var d, e, f, g, h;
                e = [];
                h = a[c]["in"];
                f = 0;
                for (g = h.length; f < g; f++)
                    d = h[f], 0 <= Fd.call(b[c]["in"], d) && e.push(d);
                return {
                    "in": e
                }
            };
            c = function(c) {
                var d, e, f, g, h;
                e = function(a) {
                    return a[c].lt ? {
                        type: "lt",
                        val: a[c].lt
                    } : a[c].le ? {
                        type: "le",
                        val: a[c].le
                    } : {
                        type: null,
                        val: null
                    }
                };
                d = function(a) {
                    return a[c].gt ?
                    {
                        type: "gt",
                        val: a[c].gt
                    } : a[c].ge ? {
                        type: "ge",
                        val: a[c].ge
                    } : {
                        type: null,
                        val: null
                    }
                };
                d = [d(a), d(b)];
                g = [e(a), e(b)];
                d.sort(function(a, b) {
                    return b.val - a.val
                });
                g.sort(function(a, b) {
                    return a.val - b.val
                });
                e = {};
                d[0].type && d[0].val && (h = d[0], f = h.type, h = h.val, d[0].val === d[1].val && d[0].type !== d[1].type && (f = "lt"), e[f] = h);
                g[0].type && g[0].val && (h = g[0], f = h.type, h = h.val, g[0].val === g[1].val && g[0].type !== g[1].type && (f = "lt"), e[f] = h);
                if (d[0].type && g[0].type && (d[0].val > g[0].val || d[0].val === g[0].val && ("lt" === d[0].key || "gt" === g[0].key)))
                    throw "No intersection found!";
                return e
            };
            f = {};
            for (e in a)
                g = a[e], f[e] = e in b ? "in"in a[e] ? d(e) : c(e) : g;
            for (e in b)
                g = b[e], e in f || (f[e] = g);
            return f
        };
        h.linear = function(a, b, c, d) {
            if (_.isFinite(a) && _.isFinite(b) && _.isFinite(c) && _.isFinite(d))
                return function(e) {
                    return (d - b) / (c - a) * (e - a) + b
                };
            throw h.error.input("Attempting to create linear function from infinity");
        };
        h.median = function(a, b) {
            var c;
            null == b && (b=!1);
            b || (a = _.sortBy(a, function(a) {
                return a
            }));
            c = a.length / 2;
            return 0 !== c%1 ? a[Math.floor(c)] : (a[c-1] + a[c]) / 2
        };
        h.counter = function() {
            var a;
            a =
            0;
            return function() {
                return a++
            }
        };
        h.sample = function(a, b) {
            return _.pick(a, _.shuffle(_.keys(a)).splice(0, b))
        };
        h.compare = function(a, b) {
            var c, d, e, f, g, j, h, l, m;
            m = _.sortBy(a, function(a) {
                return a
            });
            l = _.sortBy(b, function(a) {
                return a
            });
            d = [];
            e = [];
            c = [];
            for (h = g = 0; h < m.length || g < l.length;)
                if (j = m[h], f = l[g], h >= m.length)
                    c.push(f), g += 1;
            else if (g >= l.length)
                d.push(j), h += 1;
            else if (j < f)
                d.push(j), h += 1;
            else if (j > f)
                c.push(f), g += 1;
            else if (j === f)
                e.push(j), h += 1, g += 1;
            else 
                throw DataError("Unknown data encounted");
            return {
                deleted: d,
                kept: e,
                added: c
            }
        };
        h.flatten = function(a) {
            var b, c, d, e;
            b = [];
            if (null != a)
                if (_.isObject(a))
                    if ("scalefn" === a.t)
                        "novalue" !== a.f && b.push(a.v);
                    else 
                        for (c in a)
                            d = a[c], b = b.concat(h.flatten(d));
            else if (_.isArray(a)) {
                c = 0;
                for (e = a.length; c < e; c++)
                    d = a[c], b = b.concat(h.flatten(d))
            } else 
                b.push(a);
            return b
        };
        h.getLabel = function(a, b) {
            return _.chain(a).map(function(a) {
                return a.mapping[b]
            }).without(null, void 0).uniq().value().join(" | ")
        };
        h.strSize = function(a) {
            a = (a + "").length;
            return 10 > a ? 6 * a : 5 * (a-10) + 60
        };
        h.sortArrays = function(a,
        b) {
            var c;
            c = _.zip.apply(_, b);
            c.sort(function(b, c) {
                return a(b[0], c[0])
            });
            return _.zip.apply(_, c)
        };
        h.isDefined = function(a) {
            return _.isObject(a) ? "scalefn" === a.t && "novalue" !== a.f ? h.isDefined(a.v) : !0 : void 0 !== a && null !== a&&!(_.isNumber(a) && _.isNaN(a))
        };
        h.isURI = function(a) {
            var b;
            return _.isString(a) ? (b = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i"), b.test(a)) : !1
        };
        h["const"] =
        {
            aes: "x y color size opacity shape id text".split(" "),
            noDomain: ["id", "text", "tooltip"],
            noLegend: ["x", "y", "id", "text", "tooltip"],
            trans: {
                bin: ["key", "binwidth"],
                lag: ["key", "lag"]
            },
            stat: {
                count: ["key"],
                unique: ["key"],
                sum: ["key"],
                mean: ["key"],
                box: ["key"],
                median: ["key"]
            },
            timerange: "second minute hour day week month 2month quarter 6month year 2year 5year decade".split(" "),
            metas: {
                sort: null,
                stat: null,
                limit: null,
                asc: !0
            },
            scaleFns: {
                novalue: function() {
                    return {
                        v: null,
                        f: "novalue",
                        t: "scalefn"
                    }
                },
                max: function(a) {
                    return {
                        v: a,
                        f: "max",
                        t: "scalefn"
                    }
                },
                min: function(a) {
                    return {
                        v: a,
                        f: "min",
                        t: "scalefn"
                    }
                },
                upper: function(a, b, c) {
                    return {
                        v: a,
                        n: b,
                        m: c,
                        f: "upper",
                        t: "scalefn"
                    }
                },
                lower: function(a, b, c) {
                    return {
                        v: a,
                        n: b,
                        m: c,
                        f: "lower",
                        t: "scalefn"
                    }
                },
                middle: function(a) {
                    return {
                        v: a,
                        f: "middle",
                        t: "scalefn"
                    }
                },
                jitter: function(a) {
                    return {
                        v: a,
                        f: "jitter",
                        t: "scalefn"
                    }
                },
                identity: function(a) {
                    return {
                        v: a,
                        f: "identity",
                        t: "scalefn"
                    }
                }
            },
            epsilon: Math.pow(10, -7),
            defaults: {
                x: {
                    v: null,
                    f: "novalue",
                    t: "scalefn"
                },
                y: {
                    v: null,
                    f: "novalue",
                    t: "scalefn"
                },
                color: "steelblue",
                size: 2,
                opacity: 0.7
            }
        };
        var Gd = {}.hasOwnProperty, T = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Gd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, Ub = function(a) {
            this.message = a;
            this.name = "DefinitionError"
        };
        T(Ub, Error);
        var Vb = function(a) {
            this.message = a;
            this.name = "DependencyError"
        };
        T(Vb, Error);
        var Wb = function(a) {
            this.message = a;
            this.name = "ModeError"
        };
        T(Wb, Error);
        var Xb = function(a) {
            this.message = a;
            this.name = "DataError"
        };
        T(Xb, Error);
        var Yb = function(a) {
            this.message =
            a;
            this.name = "UnknownInput"
        };
        T(Yb, Error);
        var Zb = function(a) {
            this.message = a;
            this.name = "ModeError"
        };
        T(Zb, Error);
        var $b = function(a) {
            this.message = a;
            this.name = "ScaleError"
        };
        T($b, Error);
        var ac = function(a) {
            this.message = a;
            this.name = "MissingData"
        };
        T(ac, Error);
        var bc = function(a) {
            this.message = a;
            this.name = "Type"
        };
        T(bc, Error);
        h.error = function(a) {
            return Error(a)
        };
        h.error.data = function(a) {
            return new Xb(a)
        };
        h.error.depn = function(a) {
            return new Vb(a)
        };
        h.error.defn = function(a) {
            return new Ub(a)
        };
        h.error.mode = function(a) {
            return new Wb(a)
        };
        h.error.impl = function(a) {
            return new Zb(a)
        };
        h.error.input = function(a) {
            return new Yb(a)
        };
        h.error.scale = function(a) {
            return new $b(a)
        };
        h.error.missing = function(a) {
            return new ac(a)
        };
        h.error.type = function(a) {
            return new bc(a)
        };
        var cc, dc, Hd = {}.hasOwnProperty, pb = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Hd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, da = function() {};
        da.prototype.render = function() {
            return h.error.impl()
        };
        da.prototype.dispose =
        function() {
            return h.error.impl()
        };
        var Oa = function() {
            return Oa.__super__.constructor.apply(this, arguments)
        };
        pb(Oa, da);
        Oa.prototype.getDimension = function() {
            throw h.error.impl();
        };
        cc = Oa;
        var la = function() {
            return la.__super__.constructor.apply(this, arguments)
        };
        pb(la, da);
        la.prototype.getDimension = function() {
            throw h.error.impl();
        };
        la.prototype.make = function() {
            throw h.error.impl();
        };
        dc = la;
        var X = function(a) {
            this.type = null != a ? a : null;
            var b = this.dispose, c = this;
            this.dispose = function() {
                return b.apply(c, arguments)
            };
            this.geoms = {};
            this.pts = {}
        };
        pb(X, da);
        X.prototype.set = function(a) {
            return this.geoms = a
        };
        X.prototype.render = function(a) {
            var b, c, d, e, f, g, j;
            f = {};
            d = h.compare(_.keys(this.pts), _.keys(this.geoms));
            c = d.deleted;
            e = d.kept;
            b = d.added;
            g = 0;
            for (j = c.length; g < j; g++)
                d = c[g], this._delete(a, this.pts[d]);
            c = 0;
            for (g = b.length; c < g; c++)
                d = b[c], f[d] = this._add(a, this.geoms[d]);
            b = 0;
            for (c = e.length; b < c; b++)
                d = e[b], f[d] = this._modify(a, this.pts[d], this.geoms[d]);
            return this.pts = f
        };
        X.prototype._delete = function(a, b) {
            var c, d, e;
            e = [];
            for (c in b)
                d =
                b[c], e.push(a.remove(d));
            return e
        };
        X.prototype._modify = function(a, b, c) {
            var d, e, f, g;
            f = {};
            g = c.marks;
            for (d in g) {
                e = g[d];
                try {
                    f[d] = b[d] ? b[d].data("m").type === e.type ? a.animate(b[d], e, c.evtData, c.tooltip) : (a.remove(b[d]), a.add(e, c.evtData, c.tooltip, this.type)) : a.add(e, c.evtData, c.tooltip, this.type)
                } catch (j) {
                    if ("MissingData" === j.name)
                        console.log(j.message);
                    else 
                        throw j;
                }
            }
            return f
        };
        X.prototype._add = function(a, b) {
            var c, d, e, f;
            e = {};
            f = b.marks;
            for (c in f) {
                d = f[c];
                try {
                    e[c] = a.add(d, b.evtData, b.tooltip, this.type)
                } catch (g) {
                    if ("MissingData" ===
                    g.name)
                        console.log(g.message);
                    else 
                        throw g;
                }
            }
            return e
        };
        X.prototype.dispose = function(a) {
            var b, c, d;
            d = this.pts;
            for (b in d)
                c = d[b], this._delete(a, c);
            return this.pts = {}
        };
        h.Renderable = da;
        h.Guide = cc;
        h.GuideSet = dc;
        h.Geometry = X;
        h.offset = function(a) {
            var b, c, d;
            b = {
                top: 0,
                left: 0
            };
            if (c = a && a.ownerDocument)
                return d = c.documentElement, "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect()), a = null !== c && c === c.window ? c : 9 === c.nodeType && c.defaultView, {
                top: b.top + a.pageYOffset - d.clientTop, left: b.left + a.pageXOffset -
                d.clientLeft
            }
        };
        h.getXY = function(a, b) {
            return {
                x: b.clientX + (document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft) - a.left,
                y: b.clientY + (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) - a.top
            }
        };
        var qb, ec, fc;
        h.format = function(a, b) {
            switch (a) {
            case "cat":
                return h.format.identity;
            case "num":
                return h.format.number(b);
            case "date":
                return h.format.date(b);
            case "none":
                return h.format.identity
            }
        };
        h.format.identity = function(a) {
            return a
        };
        qb = {
            "0": "",
            3: "k",
            6: "m",
            9: "b",
            12: "t"
        };
        fc = function(a, b) {
            return _.isUndefined(qb[b]) ? a + "e" + (0 < b ? "+" : "-") + Math.abs(b) : a + qb[b]
        };
        ec = function(a) {
            var b, c, d;
            if (!isFinite(a))
                return a;
            c = "" + a;
            b = Math.abs(a);
            1E4 <= b && (d = ("" + b).split(/\./), b = d[0].length%3 || 3, d[0] = c.slice(0, b + (0 > a)) + d[0].slice(b).replace(/(\d{3})/g, ",$1"), c = d.join("."));
            return c
        };
        h.format.number = function(a) {
            return function(b) {
                var c, d;
                d = 0;
                c = null != a ? a : Math.floor(Math.log(Math.abs(0 === b ? 1 : b)) / Math.LN10);
                null != a && (2 === c || 5 === c || 8 === c || 11 === c) ? (c += 1, d = 1) : -1 === c ?
                (c = 0, d = null != a ? 1 : 2) : -2 === c ? (c = 0, d = null != a ? 2 : 3) : 1 === c || 2 === c ? c = 0 : 3 < c && 6 > c ? c = 3 : 6 < c && 9 > c ? c = 6 : 9 < c && 12 > c ? c = 9 : 12 < c && 15 > c ? c = 12 : d = null != a ? 0 : 1;
                b = Math.round(b / Math.pow(10, c - d));
                b/=Math.pow(10, d);
                b = b.toFixed(d);
                return fc(ec(b), c)
            }
        };
        h.format.date = function(a) {
            return -1 !== _.indexOf(h["const"].timerange, a) ? "second" === a ? function(a) {
                return moment.unix(a).format("h:mm:ss a")
            } : "minute" === a ? function(a) {
                return moment.unix(a).format("h:mm a")
            } : "hour" === a ? function(a) {
                return moment.unix(a).format("MMM D h a")
            } : "day" === a ||
            "week" === a ? function(a) {
                return moment.unix(a).format("MMM D")
            } : "month" === a || "2month" === a || "quarter" === a || "6month" === a ? function(a) {
                return moment.unix(a).format("YYYY/MM")
            } : function(a) {
                return moment.unix(a).format("YYYY")
            } : function(b) {
                return moment.unix(b).format(a)
            }
        };
        h.format._number_instance = h.format.number();
        h.format.value = function(a) {
            return _.isNumber(a) ? h.format._number_instance(a) : a
        };
        var gc, hc;
        h.type = {};
        h.type.impute = function(a) {
            var b, c, d, e, f, g;
            f = c = e = b = 0;
            for (g = a.length; f < g; f++)
                d = a[f], null == d ||
            (void 0 === d || null === d) || (c++, (!isNaN(d) ||!isNaN(d.replace(/\$|\,/g, ""))) && e++, d = moment(d), null != d && d.isValid() && b++);
            return e > 0.95 * c ? "num" : b > 0.95 * c ? "date" : "cat"
        };
        h.type.coerce = function(a, b) {
            if (_.isUndefined(a) || _.isNull(a) || "cat" === b.type)
                return a;
            if ("num" === b.type)
                return isNaN(a)?+("" + a).replace(/\$|\,/g, "") : + a;
            if ("date" === b.type)
                return b.format ? "unix" === b.format ? moment.unix(a).unix() : moment(a, b.format).unix() : moment(a).unix()
        };
        h.type.compare = function(a) {
            switch (a) {
            case "cat":
                return gc;
            default:
                return hc
            }
        };
        gc = function(a, b) {
            var c, d;
            if (a === b)
                return 0;
            _.isString(a) || (a = "" + a);
            _.isString(b) || (b = "" + b);
            c = a.toLowerCase();
            d = b.toLowerCase();
            return c === d ? a < b?-1 : a > b ? 1 : 0 : c < d?-1 : c > d ? 1 : 0
        };
        hc = function(a, b) {
            return a === b ? 0 : null === a ? 1 : null === b?-1 : a < b?-1 : a > b ? 1 : 0
        };
        h.spec = {};
        h.spec.toStrictMode = function(a) {
            var b, c, d, e, f, g, j, k;
            a = _.clone(a);
            null == a.layers && a.layer && (a.layers = [a.layer]);
            null == a.guides && a.guide && (a.guides = a.guide);
            null == a.guides && (a.guides = {});
            if (a.layers) {
                g = a.layers;
                b = c = 0;
                for (e = g.length; c < e; b=++c) {
                    d = g[b];
                    k =
                    h["const"].aes;
                    f = 0;
                    for (j = k.length; f < j; f++)
                        b = k[f], d[b] && _.isString(d[b]) && (d[b] = {
                        "var": d[b]
                    });
                    null == d.sample && (d.sample = 500)
                }
            }
            if (a.facet) {
                d = ["var", "x", "y"];
                g = 0;
                for (b = d.length; g < b; g++)
                    e = d[g], (c = a.facet[e]) && _.isString(c) && (a.facet[e] = {
                    "var": c
                })
            } else 
                a.facet = {
                    type: "none"
                };
            a.coord || (a.coord = {
                type: "cartesian",
                flip: !1
            });
            _.isString(a.dom) && (a.dom = document.getElementById(a.dom));
            return a
        };
        h.spec.check = function(a) {
            var b, c, d, e, f;
            if (null == a.layers || 0 === a.layers.length)
                throw h.error.defn("No layers are defined in the specification.");
            f = a.layers;
            b = d = 0;
            for (e = f.length; d < e; b=++d) {
                c = f[b];
                if (null == c.data)
                    throw h.error.defn("Layer " + (b + 1) + " does not have data to plot!");
                if (!c.data.isData)
                    throw h.error.defn("Data must be a Polychart Data object.");
            }
            if (!(null != a.render&&!1 === a.render)&&!a.dom)
                throw h.error.defn("No DOM element specified. Where to make plot?");
            return a
        };
        h.xhr = function(a, b, c) {
            var d;
            d = new XMLHttpRequest;
            3 > arguments.length ? (c = b, b = null) : b && d.overrideMimeType && d.overrideMimeType(b);
            d.open("GET", a, !0);
            b && d.setRequestHeader("Accept",
            b);
            d.onreadystatechange = function() {
                var a;
                if (4 === d.readyState)
                    return a = d.status, a=!a && d.response || 200 <= a && 300 > a || 304 === a ? d : null, c(a)
            };
            return d.send(null)
        };
        h.text = function(a, b, c) {
            3 > arguments.length && (c = b, b = null);
            return h.xhr(a, b, function(a) {
                return c(a && a.responseText)
            })
        };
        h.json = function(a, b) {
            return h.text(a, "application/json", function(a) {
                return b(a ? JSON.parse(a) : null)
            })
        };
        h.dsv = function(a, b) {
            var c, d, e, f, g, j, k;
            k = RegExp("\r\n|[" + a + "\r\n]", "g");
            j = RegExp('["' + a + "\n]");
            c = a.charCodeAt(0);
            e = function(b) {
                return b.map(f).join(a)
            };
            f = function(a) {
                var b;
                return null != (b = j.test(a)) ? b : '"' + a.replace(/\"/g, '""') + {
                    '"': a
                }
            };
            g = null;
            d = function(a, c) {
                return h.text(a, b, function(a) {
                    return c(a && d.parse(a))
                })
            };
            d.parse = function(a) {
                return d.parseRows(a, function(a, b) {
                    var c, d, e;
                    if (b) {
                        e = {};
                        c =- 1;
                        for (d = g.length; ++c < d;)
                            e[g[c]] = a[c];
                        return e
                    }
                    g = a;
                    return null
                })
            };
            d.parseRows = function(a, b) {
                var d, e, f, g, j, h, p, rb;
                e = {};
                d = {};
                h = [];
                j = 0;
                g = p = null;
                k.lastIndex = 0;
                for (rb = function() {
                    var b, f, j;
                    if (k.lastIndex >= a.length)
                        return d;
                    if (g)
                        return g=!1, e;
                    j = k.lastIndex;
                    if (34 === a.charCodeAt(j)) {
                        for (f =
                        j; f++<a.length;)
                            if (34 === a.charCodeAt(f)) {
                                if (34 !== a.charCodeAt(f + 1))
                                    break;
                                    f++
                            }
                        k.lastIndex = f + 2;
                        b = a.charCodeAt(f + 1);
                        13 === b ? (g=!0, 10 === a.charCodeAt(f + 2) && k.lastIndex++) : 10 === b && (g=!0);
                        return a.substring(j + 1, f).replace(/""/g, '"')
                    }
                    if (b = k.exec(a))
                        return g = b[0].charCodeAt(0) !== c, a.substring(j, b.index);
                    k.lastIndex = a.length;
                    return a.substring(j)
                }; (p = rb()) !== d;) {
                    for (f = [];
                    p !== e && p !== d;
                    )f.push(p), p = rb();
                    (!b || (f = b(f, j++))) && h.push(f)
                }
                return h
            };
            d.format = function(a) {
                return a.map(e).join("\n")
            };
            return d
        };
        h.csv = h.dsv(",",
        "text/csv");
        var ic, jc, kc, lc, mc, nc, Pa, oc, sb, pc, ma, Qa, qc, rc, $, sc, tb, tc, ub, vb, uc, Ra, wb, Sa, xb, yb, zb, vc, Id = [].slice, Jd = {}.hasOwnProperty, na = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Jd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        };
        zb = function(a, b) {
            var c, d, e, f;
            c = a.length;
            f = ['"', "'"];
            d = 0;
            for (e = f.length; d < e; d++)
                if (b = f[d], a[0] === b && a[c-1] === b)
                    return a.slice(1, + (c-2) + 1 || 9E9);
            return a
        };
        vc = function(a, b) {
            var c, d, e, f, g;
            g = [];
            c = e = 0;
            for (f = a.length; e <
            f; c=++e)
                d = a[c], g.push([d, b[c]]);
            return g
        };
        nc = function(a) {
            var b, c, d, e, f;
            c = {};
            e = 0;
            for (f = a.length; e < f; e++)
                d = a[e], b = d[0], d = d[1], c[b] = d;
            return c
        };
        sb = function(a, b, c) {
            null == c && (c = null);
            return b in a && a[b] || c
        };
        pc = function(a, b) {
            var c, d, e;
            d = {};
            for (e in b)
                c = b[e], c = sb(a, e, c), null !== c && (d[e] = c);
            return d
        };
        rc = function(a) {
            var b, c, d, e, f;
            c = {};
            e = 0;
            for (f = a.length; e < f; e++)
                for (d in b = a[e], b)
                    c[d] = b[d].concat(sb(c, d, []));
            return c
        };
        Pa = function(a, b) {
            var c, d, e, f, g;
            null == b && (b = function(a) {
                return a
            });
            c = {};
            f = 0;
            for (g = a.length; f <
            g; f++)
                d = a[f], c[b(d)] = d;
            f = [];
            for (e in c)
                d = c[e], f.push(d);
            return f
        };
        oc = function(a) {
            return function(b) {
                return Pa(b, function(b) {
                    return b[a]
                })
            }
        };
        Ra = function(a, b) {
            return "" + a + "(" + b + ")"
        };
        wb = function(a) {
            return "[" + a + "]"
        };
        var oa = function(a) {
            var b, c, d, e;
            e = [];
            c = 0;
            for (d = a.length; c < d; c++)
                b = a[c], e.push(b);
            this.buffer = e.reverse()
        };
        oa.prototype.empty = function() {
            return 0 === this.buffer.length
        };
        oa.prototype.peek = function() {
            return this.empty() ? null : this.buffer[this.buffer.length-1]
        };
        oa.prototype.get = function() {
            return this.empty() ?
            null : this.buffer.pop()
        };
        oa.prototype.toString = function() {
            return Ra("Stream", wb(Id.call(this.buffer).reverse()))
        };
        var y = function(a) {
            this.tag = a
        };
        y.Tag = {
            symbol: "symbol",
            literal: "literal",
            lparen: "(",
            rparen: ")",
            comma: ","
        };
        y.prototype.toString = function() {
            return "<" + this.contents().toString() + ">"
        };
        y.prototype.contents = function() {
            return [this.tag]
        };
        var pa = function(a) {
            this.name = a;
            this.name = zb(this.name);
            pa.__super__.constructor.call(this, y.Tag.symbol)
        };
        na(pa, y);
        pa.prototype.contents = function() {
            return pa.__super__.contents.call(this).concat([this.name])
        };
        mc = pa;
        var qa = function(a) {
            this.val = a;
            this.val = zb(this.val);
            qa.__super__.constructor.call(this, y.Tag.literal)
        };
        na(qa, y);
        qa.prototype.contents = function() {
            return qa.__super__.contents.call(this).concat([this.val])
        };
        kc = qa;
        var Ta, wc, Ab, ra;
        Ab = [y.Tag.lparen, y.Tag.rparen, y.Tag.comma];
        ra = [];
        Ta = 0;
        for (wc = Ab.length; Ta < wc; Ta++)
            Sa = Ab[Ta], ra.push(new y(Sa));
        jc = ra[0];
        lc = ra[1];
        ic = ra[2];
        yb = [[/^\(/, function() {
            return jc
        }
        ], [/^\)/, function() {
            return lc
        }
        ], [/^,/, function() {
            return ic
        }
        ], [/^[+-]?(0x[0-9a-fA-F]+|0?\.\d+|[1-9]\d*(\.\d+)?|0)([eE][+-]?\d+)?/,
        function(a) {
            return new kc(a)
        }
        ], [/^(\w|[^\u0000-\u0080])+|'((\\.)|[^\\'])+'|"((\\.)|[^\\"])+"/, function(a) {
            return new mc(a)
        }
        ]];
        qc = function(a) {
            var b, c, d, e;
            d = 0;
            for (e = yb.length; d < e; d++)
                if (c = yb[d], b = c[0], c = c[1], b = b.exec(a)
                    )return d = b[0], [a.slice(d.length), c(d)];
            throw h.error.defn("There is an error in your specification at " + a);
        };
        xb = function(a) {
            var b, c;
            for (c = [];;
            ) {
                a = a.replace(/^\s+/, "");
                if (!a)break;
                b = qc(a);
                a = b[0]; b = b[1]; c.push(b)
                }
            return c
        };
        var Ua = function() {};
        Ua.prototype.toString = function() {
            return Ra(this.constructor.name,
            this.contents())
        };
        var sa = function(a) {
            this.name = a
        };
        na(sa, Ua);
        sa.prototype.contents = function() {
            return [this.name]
        };
        sa.prototype.pretty = function() {
            return this.name
        };
        sa.prototype.visit = function(a) {
            return a.ident(this, this.name)
        };
        var ta = function(a) {
            this.val = a
        };
        na(ta, Ua);
        ta.prototype.contents = function() {
            return [this.val]
        };
        ta.prototype.pretty = function() {
            return this.val
        };
        ta.prototype.visit = function(a) {
            return a["const"](this, this.val)
        };
        var ua = function(a, b) {
            this.fname = a;
            this.args = b
        };
        na(ua, Ua);
        ua.prototype.contents =
        function() {
            return [this.fname, wb(this.args)]
        };
        ua.prototype.pretty = function() {
            var a, b = this.fname, c, d, e, f;
            e = this.args;
            f = [];
            c = 0;
            for (d = e.length; c < d; c++)
                a = e[c], f.push(a.pretty());
            return Ra(b, f)
        };
        ua.prototype.visit = function(a) {
            var b;
            return a.call(this, this.fname, function() {
                var c, d, e, f;
                e = this.args;
                f = [];
                c = 0;
                for (d = e.length; c < d; c++)
                    b = e[c], f.push(b.visit(a));
                return f
            }.call(this))
        };
        ma = function(a, b, c) {
            var d, e, f, g;
            e = a.peek();
            if (null !== e) {
                f = 0;
                for (g = c.length; f < g; f++)
                    if (d = c[f], Sa = d[0], d = d[1], e.tag === Sa)
                        return d(a)
            }
            return b(a)
        };
        vb = function(a) {
            throw h.error.defn("There is an error in your specification at " + a.toString());
        };
        $ = function(a) {
            var b;
            b = new oa(xb(a));
            a = ub(b);
            if (null !== b.peek())
                throw h.error.defn("There is an error in your specification at " + b.toString());
            return a
        };
        ub = function(a) {
            return ma(a, vb, [[y.Tag.literal, tc], [y.Tag.symbol, uc]])
        };
        tc = function(a) {
            return new ta(a.get().val)
        };
        uc = function(a) {
            var b;
            b = a.get().name;
            return ma(a, function() {
                return new sa(b)
            }, [[y.Tag.lparen, sc(b)]])
        };
        sc = function(a) {
            return function(b) {
                b.get();
                b = ma(b, tb([]), [[y.Tag.rparen, function(a) {
                    a.get();
                    return []
                }
                ]]);
                return new ua(a, b)
            }
        };
        tb = function(a) {
            return function(b) {
                var c, d;
                c = ub(b);
                d = a.concat([c]);
                return ma(b, vb, [[y.Tag.rparen, function(a) {
                    a.get();
                    return d
                }
                ], [y.Tag.comma, function(a) {
                    a.get();
                    return tb(d)(a)
                }
                ]])
            }
        };
        Qa = function(a) {
            var b;
            b = {
                trans: [],
                stat: []
            };
            a.visit({
                ident: function(a, b) {
                    return b
                },
                "const": function(a, b) {
                    return b
                },
                call: function(a, d, e) {
                    var f, g;
                    g = d in h["const"].trans ? "trans" : d in h["const"].stat ? "stat" : "none";
                    if ("none" !== g)
                        return f = h["const"][g][d],
                    e = nc(vc(f, e)), e.name = a.pretty(), e[g] = d, b[g].push(e), e.name;
                    throw h.error.defn("The operation " + d + " is not recognized. Please check your specifications.");
                }
            });
            return b
        };
        h.parser = {
            tokenize: xb,
            parse: $,
            layerToData: function(a, b) {
                var c, d, e, f, g, j, k, l, m, n;
                null == b && (b = []);
                g = {};
                k = null != (m = a.filter) ? m : {};
                for (d in k)
                    m = k[d], g[$(d).pretty()] = m;
                j = [];
                k = 0;
                for (m = b.length; k < m; k++)
                    d = b[k], j.push($(d["var"]).pretty());
                b = j;
                c = _.pick(a, h["const"].aes);
                for (d in c)
                    "var"in c[d] || delete c[d];
                n = [];
                m = [];
                j = [];
                k = {};
                for (d in c)
                    e =
                    c[d], f = $(e["var"]), e["var"] = f.pretty(), f = Qa(f), n.push(f), m.push(e["var"]), 0 === f.stat.length && j.push(e["var"]), "sort"in e && (f = pc(e, h["const"].metas), l = $(f.sort), f.sort = l.pretty(), l = Qa(l), 0 !== l.stat.length && (f.stat = l.stat[0]), k[e["var"]] = f);
                c = 0;
                for (e = b.length; c < e; c++)
                    if (d = b[c], f = $(d)
                        , d = f.pretty(), f = Qa(f), n.push(f), m.push(d), 0 === f.stat.length)j.push(d);
                else 
                    throw h.error.defn("Facet variable should not contain statistics!");
                n = rc(n);
                d = oc("name");
                j = {
                    stats: d(n.stat),
                    groups: Pa(j)
                };
                return {
                    trans: d(n.trans),
                    stats: j,
                    meta: k,
                    select: Pa(m),
                    filter: g
                }
            }
        };
        var xc, yc, Kd = {}.hasOwnProperty, zc = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Kd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, aa = function(a) {
            var b;
            this.spec = a;
            null == this.spec && (this.spec = {});
            this.flip = null != (b = this.spec.flip) ? b : !1;
            this.scales = null;
            a = this.flip ? ["y", "x"] : ["x", "y"];
            this.x = a[0];
            this.y = a[1]
        };
        aa.prototype.make = function(a) {
            return this.dims = a
        };
        aa.prototype.setScales = function(a) {
            return this.scales =
            {
                x: a.x.f,
                y: a.y.f
            }
        };
        aa.prototype.clipping = function(a) {
            return [a.x, a.y, this.dims.eachWidth, this.dims.eachHeight]
        };
        aa.prototype.getScale = function() {};
        aa.prototype.ranges = function() {};
        var U = function() {
            return U.__super__.constructor.apply(this, arguments)
        };
        zc(U, aa);
        U.prototype.type = "cartesian";
        U.prototype.getScale = function(a) {
            if ("x" === a || "y" === a)
                return this.scales[this[a]];
            throw h.error.input("Coordinates only keep x & y scales");
        };
        U.prototype.ranges = function() {
            var a;
            a = {};
            a[this.x] = {
                min: 0,
                max: this.dims.eachWidth
            };
            a[this.y] = {
                min: this.dims.eachHeight,
                max: 0
            };
            return a
        };
        U.prototype.axisType = function(a) {
            return this[a]
        };
        U.prototype.getXY = function(a, b) {
            var c, d;
            if (a)
                return c = {
                    x: _.isArray(b.x) ? _.map(b.x, this.scales.x): this.scales.x(b.x),
                    y: _.isArray(b.y) ? _.map(b.y, this.scales.y): this.scales.y(b.y)
                }, {
                x: c[this.x], y: c[this.y]
            };
            c = this.scales[this.x];
            d = this.scales[this.y];
            return {
                x: _.isArray(b.x) ? _.map(b.x, c): c(b.x),
                y: _.isArray(b.y) ? _.map(b.y, d): d(b.y)
            }
        };
        U.prototype.getAes = function(a, b, c) {
            return {
                x: c.x(a[this.x], b[this.x]),
                y: c.y(a[this.y], b[this.y])
            }
        };
        xc = U;
        var V = function() {
            var a = this.getXY, b = this;
            this.getXY = function() {
                return a.apply(b, arguments)
            };
            return V.__super__.constructor.apply(this, arguments)
        };
        zc(V, aa);
        V.prototype.type = "polar";
        V.prototype.make = function(a) {
            this.dims = a;
            this.cx = this.dims.eachWidth / 2;
            return this.cy = this.dims.eachHeight / 2
        };
        V.prototype.getScale = function(a) {
            if ("r" === a)
                return this.scales[this.x];
            if ("t" === a)
                return this.scales[this.y];
            throw h.error.input("Coordinates only keep r & t scales");
        };
        V.prototype.ranges =
        function() {
            var a, b, c;
            b = [this.x, this.y];
            a = b[0];
            c = b[1];
            b = {};
            b[c] = {
                min: 0,
                max: 2 * Math.PI
            };
            b[a] = {
                min: 0,
                max: Math.min(this.dims.eachWidth, this.dims.eachHeight) / 2-10
            };
            return b
        };
        V.prototype.axisType = function(a) {
            return "x" === this[a] ? "r" : "t"
        };
        V.prototype.getXY = function(a, b) {
            var c, d, e, f, g, j, h, l, m, n, q, ka, s, p, K = this;
            n = function(a, b) {
                return K.cx + a * Math.cos(b - Math.PI / 2)
            };
            q = function(a, b) {
                return K.cy + a * Math.sin(b - Math.PI / 2)
            };
            f = [this.x, this.y];
            g = f[0];
            h = f[1];
            if (a) {
                if (_.isArray(b[g])) {
                    f = {
                        x: [],
                        y: [],
                        r: [],
                        t: []
                    };
                    s = b[g];
                    d = c =
                    0;
                    for (ka = s.length; c < ka; d=++c)
                        j = s[d], j = this.scales[g](j), l = this.scales[h](b[h][d]), f.x.push(n(j, l)), f.y.push(q(j, l)), f.r.push(j), f.t.push(l);
                    return f
                }
                j = this.scales[g](b[g]);
                l = this.scales[h](b[h]);
                return {
                    x: n(j, l),
                    y: q(j, l),
                    r: j,
                    t: l
                }
            }
            e = function(a) {
                return _.isObject(a) && "scalefn" === a.t && "identity" === a.f
            };
            c = function(a, b) {
                var c, d;
                c = e(a);
                d = e(b);
                if (c&&!d)
                    return {
                        x: a.v,
                        y: q(K.scales[g](b), 0)
                    };
                if (c && d)
                    return {
                        x: a.v,
                        y: b.v
                    };
                if (!c && d)
                    return {
                        y: b.v,
                        x: q(K.scales[h](a), 0)
                    };
                j = K.scales[g](b);
                l = K.scales[h](a);
                return {
                    x: n(j,
                    l),
                    y: q(j, l)
                }
            };
            if (_.isArray(b.x)) {
                f = {
                    x: [],
                    y: []
                };
                p = b.x;
                d = ka = 0;
                for (s = p.length; ka < s; d=++ka)
                    m = p[d], d = b.y[d], m = c(m, d), d = m.x, m = m.y, f.x.push(d), f.y.push(m);
                return f
            }
            return c(b.x, b.y)
        };
        yc = V;
        h.coord = {
            cartesian: function(a) {
                return new xc(a)
            },
            polar: function(a) {
                return new yc(a)
            }
        };
        h.coord.make = function(a) {
            if (null == a || null == a.type)
                return h.coord.cartesian();
            switch (a.type) {
            case "cartesian":
                return h.coord.cartesian(a);
            case "polar":
                return h.coord.polar(a);
            default:
                throw h.error.defn("No such coordinate type " + a.type +
                ".");
            }
        };
        var Ac, Bc, Cc, Bb, Dc, Ec, Y, Fc, Gc, Ld = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        Bb = h["const"].aes;
        h.domain = {};
        h.domain.make = function(a, b, c, d) {
            var e, f, g;
            e = [];
            for (g in a)
                f = a[g], e.push(Fc(f.geoms, b[g], c, d));
            return h.domain.merge(e)
        };
        h.domain.compare = function(a) {
            return a ? "cat" === a.type ? function(b, c) {
                b = _.indexOf(a.levels, b);
                c = _.indexOf(a.levels, c);
                return -1 === b ? 1 : -1 === c?-1 : b < c?-1 : b > c ? 1 : 0
            } : h.type.compare(a.type) : function(a) {
                return a
            }
        };
        Cc = function(a) {
            this.type =
            a.type;
            this.min = a.min;
            this.max = a.max;
            this.bw = a.bw
        };
        Bc = function(a) {
            this.type = a.type;
            this.min = a.min;
            this.max = a.max;
            this.bw = a.bw
        };
        Ac = function(a) {
            this.type = a.type;
            this.levels = a.levels;
            this.sorted = a.sorted
        };
        Y = function(a) {
            switch (a.type) {
            case "num":
                return new Cc(a);
            case "date":
                return new Bc(a);
            case "cat":
                return new Ac(a)
            }
        };
        Fc = function(a, b, c, d) {
            var e, f, g, j, k, l, m, n, q, p, s, u, K, r, t;
            g = {};
            for (e in b)
                if (f = b[e], !(0 <= Ld.call(h["const"].noDomain, e)
                    ))if (d)
                g[e] = Y(c[e]);
            else {
                l = Ec(a, e);
                if (0 === l.length)
                    throw h.error.input("Dataset is none?");
                j = function(a) {
                    return null != c[e] ? c[e][a] : null
                };
                switch (f.type) {
                case "num":
                    f = null != (m = j("bw")) ? m : f.bw;
                    k = null != (n = j("min")) ? n : _.min(l);
                    j = null != (q = j("max")) ? q : _.max(l) + (null != f ? f : 0);
                    g[e] = Y({
                        type: "num",
                        min: k,
                        max: j,
                        bw: f
                    });
                    break;
                case "date":
                    f = null != (p = j("bw")) ? p : f.bw;
                    k = null != (s = j("min")) ? s : _.min(l);
                    j = j("max");
                    null == j && (j = _.max(l), j = "week" === f ? moment.unix(j).add("days", 7).unix() : "decade" === f ? moment.unix(j).add("years", 10).unix() : moment.unix(j).add(f + "s", 1).unix());
                    g[e] = Y({
                        type: "date",
                        min: k,
                        max: j,
                        bw: f
                    });
                    break;
                case "cat":
                    g[e] = Y({
                        type: "cat",
                        levels: null != (u = null != (K = j("levels")) ? K : f.levels) ? u: _.uniq(l),
                        sorted: null != (r = null != (t = j("levels")) ? t : f.sorted) ? r: !1
                    })
                }
            }
            return g
        };
        Ec = function(a, b) {
            var c, d, e, f, g;
            f = [];
            for (d in a)
                for (e in c = a[d], g = c.marks, g)
                    c = g[e], f = f.concat(h.flatten(c[b]));
            g = [];
            e = 0;
            for (c = f.length; e < c; e++)
                d = f[e], h.isDefined(d) && g.push(d);
            return g
        };
        h.domain.merge = function(a) {
            var b, c, d, e, f;
            d = {};
            e = 0;
            for (f = Bb.length; e < f; e++)
                b = Bb[e], c = _.without(_.pluck(a, b), void 0), 0 < c.length && (d[b] = Gc(c));
            return d
        };
        Dc = {
            num: function(a) {
                var b,
                c;
                b = _.compact(_.uniq(_.map(a, function(a) {
                    return a.bw
                })));
                if (1 < b.length)
                    throw h.error.data("Not all layers have the same binwidth.");
                b = null != (c = b[0]) ? c : void 0;
                c = _.min(_.map(a, function(a) {
                    return a.min
                }));
                a = _.max(_.map(a, function(a) {
                    return a.max
                }));
                return Y({
                    type: "num",
                    min: c,
                    max: a,
                    bw: b
                })
            },
            date: function(a) {
                var b, c;
                b = _.compact(_.uniq(_.map(a, function(a) {
                    return a.bw
                })));
                if (1 < b.length)
                    throw h.error.data("Not all layers have the same binwidth.");
                b = null != (c = b[0]) ? c : void 0;
                c = _.min(_.map(a, function(a) {
                    return a.min
                }));
                a = _.max(_.map(a, function(a) {
                    return a.max
                }));
                return Y({
                    type: "date",
                    min: c,
                    max: a,
                    bw: b
                })
            },
            cat: function(a) {
                var b, c, d, e, f, g, j, k;
                e = [];
                f = 0;
                for (j = a.length; f < j; f++)
                    if (c = a[f], c.sorted) {
                        b=!0;
                        g = 0;
                        for (k = e.length; g < k; g++)
                            d = e[g], _.isEqual(d, c.levels) && (b=!1);
                            b && e.push(c.levels)
                    }
                a = _.chain(a).filter(function(a) {
                    return !a.sorted
                }).map(function(a) {
                    return a.levels
                }).value();
                if (1 < e.length && _.intersection.apply(this, e))
                    throw h.error.data("You are trying to combine incompatible sorted domains in the same axis.");
                e = [_.flatten(e,
                !0)];
                a = _.union.apply(this, e.concat(a));
                0 === e[0].length && (a = a.sort());
                return Y({
                    type: "cat",
                    levels: a,
                    sorted: 0 !== e[0].length
                })
            }
        };
        Gc = function(a) {
            var b;
            b = _.uniq(_.map(a, function(a) {
                return a.type
            }));
            if (1 < b.length)
                throw h.error.data("You are trying to merge data of different types in the same axis or legend.");
            return Dc[b[0]](a)
        };
        var Hc, Cb, Ic, Jc;
        h.tick = {};
        h.tick.make = function(a, b, c) {
            var d, e, f, g, j, k, l;
            g = null;
            null != b.ticks ? k = "num" === c ? _.filter(b.ticks, function(b) {
                return b >= a.min && b <= a.max
            }) : b.ticks : (g = null !=
            (k = b.numticks) ? k : 5, g = Jc[c](a, g), k = g.ticks, g = g.step);
            d = b.labels ? function(a) {
                var c;
                return null != (c = b.labels[a]) ? c : a
            } : b.formatter ? b.formatter : h.format(c.split("-")[0], g);
            g = {};
            c = Ic(c, d);
            if (k) {
                e = d = 0;
                for (l = k.length-1; 0 <= l ? d <= l : d >= l; e = 0 <= l?++d : --d)
                    j = 0 === e ? null : k[e-1], f = e === k.length-1 ? null : k[e + 1], e = k[e], f = c(e, j, f), g[f.value] = f
            }
            return g
        };
        Hc = function(a) {
            this.location = a.location;
            this.value = a.value;
            this.index = a.index;
            this.evtData = a.evtData
        };
        Ic = function(a, b) {
            var c;
            c = 0;
            return function(d, e, f) {
                var g;
                "cat" === a ? g =
                {
                    "in": [d]
                } : (g = {}, null != e && (g.ge = e), null != f && (g.le = f));
                return new Hc({
                    location: d,
                    value: b(d),
                    index: c++,
                    evtData: g
                })
            }
        };
        Cb = function(a, b) {
            var c, d;
            d = Math.pow(10, Math.floor(Math.log(a / b) / Math.LN10));
            c = b / a * d;
            0.15 > c ? d*=10 : 0.35 >= c ? d*=5 : 0.75 >= c && (d*=2);
            return d
        };
        Jc = {
            none: function() {
                return {}
            },
            cat: function(a, b) {
                var c, d, e, f, g, j, h;
                e = Math.max(1, Math.round(a.levels.length / b));
                f = [];
                h = a.levels;
                c = g = 0;
                for (j = h.length; g < j; c=++g)
                    d = h[c], 0 === c%e && f.push(d);
                return {
                    ticks: f
                }
            },
            num: function(a, b) {
                var c, d, e, f;
                d = a.min;
                c = a.max;
                e = Cb(c -
                d, b);
                f = Math.ceil(d / e) * e;
                for (d = [];
                f < c;
                )d.push(f), f += e;
                return {
                    ticks: d, step: Math.floor(Math.log(e) / Math.LN10)
                }
            }, "num-log": function(a, b) {
                var c, d, e, f, g, j, k, l, m;
                l = []; j = a.min; g = a.max; d = function(a) {
                    return Math.log(a) / Math.LN10
                };
                c = function(a) {
                    return Math.exp(a * Math.LN10)
                };
                f = Math.max(d(j), 0);
                e = d(g);
                k = Cb(e - f, b);
                for (m = Math.ceil(f / k) * k; m < e + h["const"].epsilon;) {
                    if (!(0 !== m%1 && 0.1 >= m%1)) {
                        if (m%1 > h["const"].epsilon) {
                            if (f = Math.floor(m) + d(10 * (m%1)), 0 === f%1) {
                                m += k;
                                continue
                            }
                        } else 
                            f = m;
                        f = c(f);
                        f < j || f > g || l.push(f)
                    }
                    m += k
                }
                return {
                    ticks: l
                }
            },
            date: function(a, b) {
                var c, d, e, f, g, j;
                e = a.min;
                d = a.max;
                g = (d - e) / b;
                g = 1.4 > g ? "second" : 84 > g ? "minute" : 5040 > g ? "hour" : 120960 > g ? "day" : 846720 > g ? "week" : 3628800 > g ? "month" : 7257600 > g ? "2month" : 14515200 > g ? "quarter" : 21772800 > g ? "6month" : 44150400 > g ? "year" : 88300800 > g ? "2year" : 220752E3 > g ? "5year" : "decade";
                j = [];
                c = moment.unix(e).startOf(g);
                f = function() {
                    switch (g) {
                    case "2month":
                        return ["months", 2];
                    case "quarter":
                        return ["months", 4];
                    case "6month":
                        return ["months", 6];
                    case "2year":
                        return ["years", 2];
                    case "5year":
                        return ["years", 5];
                    case "decade":
                        return ["years",
                        10];
                    default:
                        return [g + "s", 1]
                    }
                }();
                for (c.unix() < e && c.add(f[0], f[1]); c.unix() < d;)
                    j.push(c.unix()), c.add(f[0], f[1]);
                return {
                    ticks: j,
                    step: g
                }
            }
        };
        var Kc, Lc, Mc, Nc, A, Va = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }, Md = {}.hasOwnProperty, va = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Md.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        };
        A = h["const"].scaleFns;
        var P = function() {
            this.render = Va(this.render, this);
            this.make = Va(this.make,
            this);
            this.position = "none";
            this.title = this.titletext = null
        };
        va(P, h.Guide);
        P.prototype.make = function(a) {
            var b, c, d, e;
            b = a.guideSpec;
            d = a.title;
            c = a.position;
            this.size = a.size;
            this.color = a.color;
            a = function(a, c) {
                var d;
                return null != (d = b[a]) ? d : c
            };
            this.titletext = a("title", d);
            this.position = null != (e = a("position", c)) ? e : this.defaultPosition;
            if ("out" === this.position)
                return this.position = "bottom"
        };
        P.prototype.render = function(a, b, c) {
            if ("none" !== this.position)
                return null != this.title && a.remove(this.title), this.title =
            a.add(this._makeTitle(b, c), null, null, "guide");
            if (null != this.title)
                return a.remove(this.title)
        };
        P.prototype.dispose = function(a) {
            a.remove(this.title);
            return this.title = null
        };
        P.prototype._makeTitle = function() {
            throw h.error.impl();
        };
        P.prototype.getDimension = function() {
            var a;
            a = {};
            "none" !== this.position && (a[this.position] = 10);
            return a
        };
        var wa = function() {
            return wa.__super__.constructor.apply(this, arguments)
        };
        va(wa, P);
        wa.prototype.defaultPosition = "bottom";
        wa.prototype._makeTitle = function(a, b) {
            var c, d, e, f,
            g;
            c = "top" === this.position ? a.paddingTop + a.guideTop - (null != (d = b.top) ? d : 0)-2 : a.height - a.paddingBottom - a.guideBottom + (null != (e = b.bottom) ? e : 0);
            return {
                type: "text",
                x: A.identity(a.paddingLeft + a.guideLeft + (a.width - a.paddingLeft - a.guideLeft - a.paddingRight - a.guideRight) / 2),
                y: A.identity(c),
                color: A.identity(null != (f = this.color) ? f : "black"),
                size: A.identity(null != (g = this.size) ? g : 12),
                text: this.titletext,
                "text-anchor": "middle"
            }
        };
        Lc = wa;
        var xa = function() {
            return xa.__super__.constructor.apply(this, arguments)
        };
        va(xa, P);
        xa.prototype.defaultPosition = "left";
        xa.prototype._makeTitle = function(a, b) {
            var c, d, e, f, g;
            c = "left" === this.position ? a.paddingLeft + a.guideLeft - (null != (d = b.left) ? d : 0)-7 : a.width - a.paddingRight - a.guideRight + (null != (e = b.right) ? e : 0);
            d = a.paddingTop + a.guideTop + (a.height - a.paddingTop - a.guideTop - a.paddingBottom - a.guideBottom) / 2;
            return {
                type: "text",
                x: A.identity(c),
                y: A.identity(d),
                color: A.identity(null != (f = this.color) ? f : "black"),
                size: A.identity(null != (g = this.size) ? g : 12),
                text: this.titletext,
                "text-anchor": "middle",
                transform: "r270"
            }
        };
        Nc = xa;
        var Wa = function() {
            return Wa.__super__.constructor.apply(this, arguments)
        };
        va(Wa, P);
        Wa.prototype._makeTitle = function(a) {
            var b, c;
            return {
                type: "text",
                x: A.identity(a.width / 2),
                y: A.identity(20),
                color: A.identity(null != (b = this.color) ? b : "black"),
                size: A.identity(null != (c = this.size) ? c : 12),
                text: this.titletext,
                "font-size": "13px",
                "font-weight": "bold",
                "text-anchor": "middle"
            }
        };
        Mc = Wa;
        var ea = function() {
            this.render = Va(this.render, this);
            this.make = Va(this.make, this);
            return ea.__super__.constructor.apply(this,
            arguments)
        };
        va(ea, P);
        ea.prototype.make = function(a) {
            var b;
            b = a.title;
            this.size = a.size;
            this.color = a.color;
            return this.titletext = b
        };
        ea.prototype.render = function(a, b, c) {
            return null != this.title ? this.title = a.animate(this.title, this._makeTitle(b, c)) : this.title = a.add(this._makeTitle(b, c), null, null, "guide")
        };
        ea.prototype._makeTitle = function(a, b) {
            var c, d;
            return {
                type: "text",
                x: A.identity(b.x + a.eachWidth / 2),
                y: A.identity(b.y-7),
                color: A.identity(null != (c = this.color) ? c : "black"),
                size: A.identity(null != (d = this.size) ?
                d : 12),
                text: this.titletext,
                "text-anchor": "middle"
            }
        };
        Kc = ea;
        null == h.guide && (h.guide = {});
        h.guide.title = function(a) {
            return "y" === a || "r" === a ? new Nc : "main" === a ? new Mc : "facet" === a ? new Kc : new Lc
        };
        var Oc, Pc, Qc, Rc, p, Nd = {}.hasOwnProperty, fa = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Nd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, Od = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        p = h["const"].scaleFns;
        var ga = function() {
            this.axesGeoms = {}
        };
        fa(ga, h.GuideSet);
        ga.prototype.make = function(a) {
            var b, c, d, e;
            this.domains = a.domains;
            this.coord = a.coord;
            this.scales = a.scales;
            this.specs = a.specs;
            this.labels = a.labels;
            return this.axes = {
                x: h.guide.axis(this.coord.axisType("x"), {
                    domain: this.domains.x,
                    type: this.scales.x.tickType(),
                    guideSpec: null != (b = this.specs.x) ? b: {},
                    key: null != (c = this.labels.x) ? c: "x"
                }),
                y: h.guide.axis(this.coord.axisType("y"), {
                    domain: this.domains.y,
                    type: this.scales.y.tickType(),
                    guideSpec: null != (d = this.specs.y) ?
                    d: {},
                    key: null != (e = this.labels.y) ? e: "y"
                })
            }
        };
        ga.prototype.getDimension = function() {
            var a, b, c, d;
            c = {};
            d = this.axes;
            for (b in d)
                a = d[b], a = a.getDimension(), "left" === a.position ? c.left = a.width : "right" === a.position ? c.right = a.width : "bottom" === a.position ? c.bottom = a.height : "top" === a.position && (c.top = a.height);
            return c
        };
        ga.prototype.render = function(a, b, c) {
            var d, e, f, g, j, k, l, m, n, q, p, s, u, K, r;
            j = _.keys(c.indices);
            f = h.compare(_.keys(this.axesGeoms), j).deleted;
            p = 0;
            for (s = f.length; p < s; p++)
                for (g in l = f[p], u = this.axesGeoms[l],
                u)
                    e = u[g], e.dispose(b());
            e = {
                top: 0,
                left: 0,
                right: a.eachWidth,
                bottom: a.eachHeight,
                width: a.eachWidth,
                height: a.eachHeight
            };
            f = c.edge(this.axes.x.position);
            g = c.edge(this.axes.y.position);
            p = {
                renderLabel: !1,
                renderTick: !1
            };
            s = {
                renderLabel: !1,
                renderTick: !1
            };
            "r" === this.axes.x.type && (p.renderLine=!1);
            "r" === this.axes.y.type && (s.renderLine=!1);
            r = [];
            u = 0;
            for (K = j.length; u < K; u++) {
                l = j[u];
                m = c.getOffset(a, l);
                if (null == (q = this.axesGeoms)[l])
                    q[l] = {
                        x: new h.Geometry("guide"),
                        y: new h.Geometry("guide")
                    };
                q = b(m, !1, !1);
                m = f(l) ? {} :
                p;
                this.axesGeoms[l].x.set(this.axes.x.calculate(e, this.coord, m));
                this.axesGeoms[l].x.render(q);
                m = g(l) ? {} : s;
                this.axesGeoms[l].y.set(this.axes.y.calculate(e, this.coord, m));
                this.axesGeoms[l].y.render(q);
                r.push(function() {
                    var a, b, c, e;
                    c = ["x", "y"];
                    e = [];
                    a = 0;
                    for (b = c.length; a < b; a++)
                        d = c[a], e.push(function() {
                        var a, b;
                        a = this.axesGeoms[l][d].pts;
                        b = [];
                        for (k in a)
                            n = a[k], n.grid ? b.push(n.grid.toBack()) : b.push(void 0);
                        return b
                    }.call(this));
                    return e
                }.call(this))
            }
            return r
        };
        ga.prototype.dispose = function(a) {
            var b, c, d;
            d =
            this.axesGeoms;
            for (c in d)
                b = d[c], b.x.dispose(a), b.y.dispose(a);
            return this.axesGeoms = {}
        };
        var J = function(a) {
            var b = this.calculate, c = this;
            this.calculate = function() {
                return b.apply(c, arguments)
            };
            var d, e, f, g, j;
            d = a.domain;
            g = a.type;
            e = a.guideSpec;
            a = a.key;
            f = function(a, b) {
                var c;
                return null != (c = e[a]) ? c : b
            };
            this.position = f("position", this.defaultPosition);
            if (j = this.position, 0 > Od.call(this.validPositions, j)
                )throw h.error.defn("X-axis position can't be " + this.position + ".");
            this.titletext = f("title", a);
            this.renderTick =
            f("renderTick", this.renderTickDefault);
            this.renderGrid = f("renderGrid", this.renderGridDefault);
            this.renderLabel = f("renderLabel", this.renderLabelDefault);
            this.renderLine = f("renderLine", this.renderLineDefault);
            this.ticks = h.tick.make(d, e, g);
            this.maxwidth = _.max(_.map(this.ticks, function(a) {
                return h.strSize(a.value)
            }));
            this.maxwidth = Math.max(this.maxwidth, 0)
        };
        fa(J, h.Guide);
        J.prototype.renderTickDefault=!0;
        J.prototype.renderGridDefault=!0;
        J.prototype.renderLabelDefault=!0;
        J.prototype.renderLineDefault=!0;
        J.prototype.calculate = function(a, b, c) {
            var d, e, f, g, j, h, l;
            this.coord = b;
            if ("none" === this.position)
                return {};
            null == c && (c = {});
            a.centerx = a.left + a.width / 2;
            a.centery = a.top + a.height / 2;
            a.radius = Math.min(a.width, a.height) / 2-10;
            b = {};
            this.renderLine && (b.line = {
                marks: {
                    "0": this._renderline(a)
                }
            });
            g = this.ticks;
            for (d in g) {
                f = g[d];
                e = {};
                if (this.renderTick && (null != (j = c.renderTick) ? j : 1))
                    e.tick = this._makeTick(a, f);
                if (this.renderLabel && (null != (h = c.renderLabel) ? h : 1))
                    e.text = this._makeLabel(a, f);
                if (this.renderGrid && (null != (l =
                c.renderGrid) ? l : 1))
                    e.grid = this._makeGrid(a, f);
                b[d] = {
                    marks: e
                }
            }
            return b
        };
        J.prototype._makeTick = function(a) {
            if (!a)
                throw h.error.impl();
            a.type = "path";
            a.stroke = p.identity("#666");
            a.color = p.identity("#666");
            return a
        };
        J.prototype._makeLabel = function(a) {
            if (!a)
                throw h.error.impl();
            a.type = "text";
            a.stroke = p.identity("#666");
            a.color = p.identity("#666");
            return a
        };
        J.prototype._makeGrid = function(a) {
            if (!a)
                throw h.error.impl();
            a.stroke = "#EFEFEF";
            return a
        };
        var C = function() {
            return C.__super__.constructor.apply(this,
            arguments)
        };
        fa(C, J);
        C.prototype.type = "x";
        C.prototype.renderGridDefault=!1;
        C.prototype.defaultPosition = "bottom";
        C.prototype.validPositions = ["top", "bottom", "none"];
        C.prototype._renderline = function(a) {
            var b, c;
            c = "top" === this.position ? p.identity(a.top) : p.identity(a.bottom);
            b = p.identity(a.left);
            a = p.identity(a.left + a.width);
            return {
                type: "path",
                y: [c, c],
                x: [b, a],
                stroke: p.identity("#666")
            }
        };
        C.prototype._makeTick = function(a, b) {
            var c, d;
            "top" === this.position ? (c = p.identity(a.top), d = p.identity(a.top-5)) : (c = p.identity(a.bottom),
            d = p.identity(a.bottom + 5));
            return C.__super__._makeTick.call(this, {
                x: [b.location, b.location],
                y: [c, d]
            })
        };
        C.prototype._makeLabel = function(a, b) {
            var c;
            c = "top" === this.position ? p.identity(a.top-15) : p.identity(a.bottom + 15);
            return C.__super__._makeLabel.call(this, {
                x: b.location,
                y: c,
                text: b.value,
                "text-anchor": "middle"
            })
        };
        C.prototype._makeGrid = function(a, b) {
            var c, d;
            c = p.identity(a.top);
            d = p.identity(a.bottom);
            return C.__super__._makeGrid.call(this, {
                type: "path",
                x: [b.location, b.location],
                y: [c, d]
            })
        };
        C.prototype.getDimension =
        function() {
            var a;
            return {
                position: null != (a = this.position) ? a: "bottom",
                height: 30,
                width: "all"
            }
        };
        Qc = C;
        var B = function() {
            return B.__super__.constructor.apply(this, arguments)
        };
        fa(B, J);
        B.prototype.type = "y";
        B.prototype.renderLineDefault=!1;
        B.prototype.renderTickDefault=!1;
        B.prototype.defaultPosition = "left";
        B.prototype.validPositions = ["left", "right", "none"];
        B.prototype._renderline = function(a) {
            var b, c;
            b = "left" === this.position ? p.identity(a.left) : p.identity(a.right);
            c = p.identity(a.top);
            a = p.identity(a.top + a.height);
            return {
                type: "path",
                x: [b, b],
                y: [c, a],
                stroke: p.identity("#666")
            }
        };
        B.prototype._makeTick = function(a, b) {
            var c, d;
            "left" === this.position ? (c = p.identity(a.left), d = p.identity(a.left-5)) : (c = p.identity(a.right), d = p.identity(a.right + 5));
            return B.__super__._makeTick.call(this, {
                x: [c, d],
                y: [b.location, b.location]
            })
        };
        B.prototype._makeLabel = function(a, b) {
            var c;
            c = "left" === this.position ? p.identity(a.left-7) : p.identity(a.right + 7);
            return B.__super__._makeLabel.call(this, {
                x: c,
                y: b.location,
                text: b.value,
                "text-anchor": "left" ===
                this.position ? "end": "start"
            })
        };
        B.prototype._makeGrid = function(a, b) {
            var c, d;
            c = p.identity(a.left);
            d = p.identity(a.right);
            return B.__super__._makeGrid.call(this, {
                type: "path",
                y: [b.location, b.location],
                x: [c, d]
            })
        };
        B.prototype.getDimension = function() {
            var a;
            return {
                position: null != (a = this.position) ? a: "right",
                height: "all",
                width: 5 + this.maxwidth
            }
        };
        Rc = B;
        var D = function() {
            return D.__super__.constructor.apply(this, arguments)
        };
        fa(D, J);
        D.prototype.type = "r";
        D.prototype.defaultPosition = "left";
        D.prototype.validPositions =
        ["left", "right", "none"];
        D.prototype._renderline = function(a) {
            var b, c;
            b = p.identity(a.left);
            c = p.identity(a.top);
            a = p.identity(a.top + a.height / 2);
            return {
                type: "path",
                x: [b, b],
                y: [c, a],
                stroke: p.identity("#666")
            }
        };
        D.prototype._makeTick = function(a, b) {
            return D.__super__._makeTick.call(this, {
                x: [p.identity(a.left), p.identity(a.left-5)],
                y: [b.location, b.location]
            })
        };
        D.prototype._makeLabel = function(a, b) {
            return D.__super__._makeLabel.call(this, {
                x: p.identity(a.left-7),
                y: b.location,
                text: b.value,
                "text-anchor": "end"
            })
        };
        D.prototype._makeGrid = function(a, b) {
            return D.__super__._makeGrid.call(this, {
                type: "circle",
                x: p.identity(a.centerx),
                y: p.identity(a.centery),
                size: p.identity(this.coord.getScale("r")(b.location)),
                color: p.identity("none"),
                "fill-opacity": 0,
                "stroke-width": 1
            })
        };
        D.prototype.getDimension = function() {
            return {
                position: "left",
                height: "all",
                width: 5 + this.maxwidth
            }
        };
        Oc = D;
        var E = function() {
            return E.__super__.constructor.apply(this, arguments)
        };
        fa(E, J);
        E.prototype.type = "t";
        E.prototype.defaultPosition = "out";
        E.prototype.validPositions =
        ["out", "none"];
        E.prototype._renderline = function(a) {
            return {
                type: "circle",
                x: p.identity(a.centerx),
                y: p.identity(a.centery),
                size: p.identity(a.radius),
                color: p.identity("none"),
                stroke: p.identity("#666"),
                "stroke-width": 1
            }
        };
        E.prototype._makeTick = function(a, b) {
            return E.__super__._makeTick.call(this, {
                x: [b.location, b.location],
                y: [p.max(0), p.max(3)]
            })
        };
        E.prototype._makeLabel = function(a, b) {
            return E.__super__._makeLabel.call(this, {
                x: b.location,
                y: p.max(12),
                text: b.value,
                "text-anchor": "middle"
            })
        };
        E.prototype._makeGrid =
        function(a, b) {
            var c, d, e, f;
            d = p.identity(a.centerx);
            f = p.identity(a.centery);
            c = this.coord.getScale("t")(b.location) - Math.PI / 2;
            e = p.identity(a.centerx + a.radius * Math.cos(c));
            c = p.identity(a.centery + a.radius * Math.sin(c));
            return E.__super__._makeGrid.call(this, {
                type: "path",
                y: [f, c],
                x: [d, e]
            })
        };
        E.prototype.getDimension = function() {
            return {}
        };
        Pc = E;
        null == h.guide && (h.guide = {});
        h.guide.axis = function(a, b) {
            if ("x" === a)
                return new Qc(b);
            if ("y" === a)
                return new Rc(b);
            if ("r" === a)
                return new Oc(b);
            if ("t" === a)
                return new Pc(b)
        };
        h.guide.axes = function(a) {
            return new ga(a)
        };
        var Sc, Tc, Uc, F, Pd = {}.hasOwnProperty, Xa = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Pd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, Ya = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        }, Vc = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        };
        F = h["const"].scaleFns;
        h.guide.legends = function() {
            return new Tc
        };
        h.guide.legend = function(a,
        b) {
            return "left" === b || "right" === b ? new Uc(a) : new Sc(a)
        };
        var M = function() {
            this.legends = [];
            this.deletedLegends = []
        };
        Xa(M, h.GuideSet);
        M.prototype.make = function(a) {
            var b, c, d, e, f, g, j, k, l, m, n, q;
            d = a.domains;
            k = a.layers;
            e = a.guideSpec;
            n = a.scales;
            j = a.layerMapping;
            this.position = a.position;
            c = a.dims;
            null == this.postion && (this.postion = "right");
            if ("none" !== this.position) {
                b = this._mergeAes(d, k);
                for (g = 0; g < this.legends.length;) {
                    l = this.legends[g];
                    m=!0;
                    for (f = 0; f < b.length;) {
                        a = b[f];
                        if (_.isEqual(a, l.aes)) {
                            b.splice(f, 1);
                            m=!1;
                            break
                        }
                        f++
                    }
                    m ? (this.deletedLegends.push(l), this.legends.splice(g, 1)) : g++
                }
                l = 0;
                for (f = b.length; l < f; l++)
                    a = b[l], this.legends.push(h.guide.legend(a, this.position));
                g = this.legends;
                m = [];
                b = 0;
                for (f = g.length; b < f; b++)
                    l = g[b], a = l.aes[0], m.push(l.make({
                    domain: d[a],
                    position: this.position,
                    guideSpec: null != (q = e[a]) ? q: {},
                    type: n[a].tickType(),
                    mapping: j,
                    keys: h.getLabel(k, a),
                    dims: c
                }));
                return m
            }
        };
        M.prototype._mergeAes = function(a, b) {
            var c, d, e, f, g, j, k;
            g = [];
            for (c in a)
                if (!(0 <= Ya.call(h["const"].noLegend, c)) && (e = _.map(b, function(a) {
                    return a.mapping[c]
                }),
                !_.all(e, _.isUndefined))
                    ) {
                f=!1;
                j = 0;
                for (k = g.length; j < k; j++)
                    if (d = g[j], _.isEqual(d.mapped, e)
                        ) {
                    d.aes.push(c);
                    f=!0;
                    break
                }
                f || g.push({
                    aes: [c],
                    mapped: e
                })
            }
            return _.pluck(g, "aes")
        };
        M.prototype.getDimension = function(a) {
            var b, c, d;
            b = {};
            if ("left" === (c = this.position) || "right" === c)
                b[this.position] = this._leftrightWidth(a);
            else if ("top" === (d = this.position) || "bottom" === d)
                b[this.position] = this._topbottomHeight(a);
            return b
        };
        M.prototype._leftrightWidth = function(a) {
            var b, c, d, e, f, g, j, h;
            e = a.chartHeight;
            f = 0;
            b = 10;
            c = 0;
            h = this.legends;
            g = 0;
            for (j = h.length; g < j; g++)
                d = h[g], d = d.getDimension(a), d.height + c > e && (b += f + 5, f = c = 0), d.width > f && (f = d.width), c += d.height;
            return b + f
        };
        M.prototype._topbottomHeight = function(a) {
            var b, c, d, e, f;
            c = 10;
            f = this.legends;
            d = 0;
            for (e = f.length; d < e; d++)
                b = f[d], b = b.getDimension(a), c += b.height + 10;
            return c
        };
        M.prototype.render = function(a, b, c) {
            var d, e, f, g, j;
            e = b();
            j = this.deletedLegends;
            f = 0;
            for (g = j.length; f < g; f++)
                d = j[f], d.dispose(e);
            this.deletedLegends = [];
            if ("left" === this.position || "right" === this.position)
                return this._renderV(a,
                b, c);
            if ("top" === this.position || "bottom" === this.position)
                return this._renderH(a, b, c)
        };
        M.prototype._renderV = function(a, b, c) {
            var d, e, f, g, j, h, l, m, n, q, p, s, u;
            d = a.paddingTop + a.guideTop;
            e = "left" === this.position ? a.paddingLeft : a.width - a.guideRight - a.paddingRight;
            j = 0;
            g = a.height - a.guideTop - a.paddingTop;
            m = 10;
            l = "right" === this.position ? c.right : 0;
            s = this.legends;
            u = [];
            q = 0;
            for (p = s.length; q < p; q++)
                f = s[q], h = f.getDimension(a), h.height + c.y > g && (l += j + 5, j = m = 0), h.width > j && (j = h.width), n = {
                x: l + e,
                y: m + d
            }, f.render(b(n, !1, !1), j), u.push(m +=
            h.height);
            return u
        };
        M.prototype._renderH = function(a, b, c) {
            var d, e, f, g, j, h;
            d = a.paddingLeft;
            e = "top" === this.position ? a.paddingTop : a.height - a.guideBottom - a.paddingBottom;
            e = {
                x: d,
                y: "top" === this.position ? c.top + e: c.bottom + e + 10
            };
            j = this.legends;
            h = [];
            f = 0;
            for (g = j.length; f < g; f++)
                c = j[f], d = c.getDimension(a), c.render(b(e, !1, !1)), h.push(e.y += d.height + 10);
            return h
        };
        M.prototype.dispose = function(a) {
            var b, c, d, e, f;
            e = this.legends;
            f = [];
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], f.push(b.dispose(a));
            return f
        };
        Tc = M;
        var G = function(a) {
            this.aes =
            a;
            this._makeEvtData = Vc(this._makeEvtData, this);
            this._makeTick = Vc(this._makeTick, this);
            this.geometry = new h.Geometry("guide")
        };
        Xa(G, h.Guide);
        G.prototype.TITLEHEIGHT = 15;
        G.prototype.TICKHEIGHT = 12;
        G.prototype.SPACING = 10;
        G.prototype.make = function(a) {
            var b, c, d, e;
            b = a.domain;
            d = a.type;
            c = a.guideSpec;
            this.mapping = a.mapping;
            this.position = a.position;
            a = a.keys;
            this.titletext = null != (e = c.title) ? e : a;
            return this.ticks = h.tick.make(b, c, d)
        };
        G.prototype.calculate = function() {
            var a, b, c, d, e;
            b = {};
            b.title = {
                marks: {
                    "0": this._makeTitle(this.titletext)
                }
            };
            e = this.ticks;
            for (c in e)
                a = e[c], d = {}, d.tick = this._makeTick(a), d.text = this._makeLabel(a), a = this._makeEvtData(a), b[c] = {
                marks: d,
                evtData: a
            };
            return b
        };
        G.prototype.render = function(a) {
            this.geometry.set(this.calculate());
            return this.geometry.render(a)
        };
        G.prototype.dispose = function(a) {
            return this.geometry.dispose(a)
        };
        G.prototype._makeTitle = function(a, b) {
            null == b && (b = {
                x: 0,
                y: 0
            });
            return {
                type: "text",
                x: F.identity(b.x + 5),
                y: F.identity(b.y),
                color: F.identity("black"),
                text: a,
                "text-anchor": "start"
            }
        };
        G.prototype._makeLabel =
        function(a, b) {
            b || (b = {
                x: 0,
                y: 15 + 12 * a.index
            });
            return {
                type: "text",
                x: F.identity(b.x + 20),
                y: F.identity(b.y + 1),
                color: F.identity("black"),
                text: a.value,
                "text-anchor": "start"
            }
        };
        G.prototype._makeTick = function(a, b) {
            var c, d, e, f;
            b || (b = {
                x: 0,
                y: 15 + 12 * a.index
            });
            d = {
                type: "circle",
                x: F.identity(b.x + 10),
                y: F.identity(b.y),
                color: F.identity("steelblue")
            };
            f = this.mapping;
            for (c in f)
                e = f[c], 0 <= Ya.call(h["const"].noLegend, c) || (e = e[0], d[c] = 0 <= Ya.call(this.aes, c) ? a.location : null != e.type && "const" === e.type ? F.identity(e.value) : _.isObject(e) ?
            F.identity(h["const"].defaults[c]) : F.identity(e));
            _.isObject(d.size) && (d.size = F.identity(5));
            return d
        };
        G.prototype._makeEvtData = function(a) {
            var b, c, d, e, f, g, j;
            c = {};
            j = this.mapping;
            for (b in j) {
                e = j[b];
                f = 0;
                for (g = e.length; f < g; f++)
                    d = e[f], 0 <= Ya.call(this.aes, b) && "map" === d.type && (c[d.value] = a.evtData)
            }
            return c
        };
        var ha = function() {
            return ha.__super__.constructor.apply(this, arguments)
        };
        Xa(ha, G);
        ha.prototype.make = function(a) {
            var b;
            ha.__super__.make.call(this, a);
            this.height = this.TITLEHEIGHT + this.SPACING + this.TICKHEIGHT *
            _.size(this.ticks);
            b = h.strSize(this.titletext);
            a = _.max(_.map(this.ticks, function(a) {
                return h.strSize(a.value)
            }));
            return this.maxwidth = Math.max(b, a)
        };
        ha.prototype.getDimension = function() {
            return {
                position: this.position,
                height: this.height,
                width: 15 + this.maxwidth
            }
        };
        Uc = ha;
        var Z = function() {
            return Z.__super__.constructor.apply(this, arguments)
        };
        Xa(Z, G);
        Z.prototype.TICKSPACING = 25;
        Z.prototype.make = function(a) {
            var b, c, d, e;
            Z.__super__.make.call(this, a);
            this.maxwidth = a.dims.width;
            this.height = this.TITLEHEIGHT + this.SPACING;
            a = 0;
            this.height += this.TICKHEIGHT;
            e = this.ticks;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], b = h.strSize(b.value) + this.TICKSPACING, a + b < this.maxwidth ? a += b : (this.height += this.TICKHEIGHT, a = b);
            return null
        };
        Z.prototype.calculate = function() {
            var a, b, c, d, e, f, g;
            b = {};
            b.title = {
                marks: {
                    "0": this._makeTitle(this.titletext)
                }
            };
            e = {
                x: 0,
                y: this.TITLEHEIGHT
            };
            g = this.ticks;
            for (c in g)
                f = g[c], d = {}, d.tick = this._makeTick(f, e), d.text = this._makeLabel(f, e), a = this._makeEvtData(f, e), b[c] = {
                marks: d,
                evtData: a
            }, a = h.strSize(f.value) + this.TICKSPACING,
            e.x + a < this.maxwidth ? e.x += a : (e.x = 0, e.y += this.TICKHEIGHT);
            return b
        };
        Z.prototype.getDimension = function() {
            return {
                position: this.position,
                height: this.height,
                width: "all"
            }
        };
        Sc = Z;
        var Wc, Xc, Yc, Zc, $c, ad, W = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }, Qd = {}.hasOwnProperty, N = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Qd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, v = function() {
            this.f = null
        };
        v.prototype.make = function(a) {
            this.domain =
            a;
            this.compare = h.domain.compare(a);
            if (!a)
                return this._makeNone();
            switch (a.type) {
            case "num":
                return this._makeNum();
            case "date":
                return this._makeDate();
            case "cat":
                return this._makeCat()
            }
        };
        v.prototype._makeNone = function() {
            throw h.error.impl("You are using a scale that does not support null values");
        };
        v.prototype._makeNum = function() {
            throw h.error.impl("You are using a scale that does not support numbers");
        };
        v.prototype._makeDate = function() {
            throw h.error.impl("You are using a scale that does not support dates");
        };
        v.prototype._makeCat = function() {
            throw h.error.impl("You are using a scale that does not support categories");
        };
        v.prototype.tickType = function() {
            if (!this.domain)
                return this._tickNone();
            switch (this.domain.type) {
            case "num":
                return this._tickNum();
            case "date":
                return this._tickDate();
            case "cat":
                return this._tickCat()
            }
        };
        v.prototype._tickNone = function() {
            return "none"
        };
        v.prototype._tickNum = function() {
            return "num"
        };
        v.prototype._tickDate = function() {
            return "date"
        };
        v.prototype._tickCat = function() {
            return "cat"
        };
        v.prototype._identityWrapper =
        function(a) {
            return function(b) {
                return _.isObject(b) && "scalefn" === b.t && "identity" === b.f ? b.v : a(b)
            }
        };
        var Q = function() {
            this._catWrapper = W(this._catWrapper, this);
            this._dateWrapper = W(this._dateWrapper, this);
            this._numWrapper = W(this._numWrapper, this);
            this.finv = this.f = null
        };
        N(Q, v);
        Q.prototype.make = function(a, b, c) {
            this.range = b;
            this.space = c;
            _.isNumber(this.space) || (this.space = 0.05);
            return Q.__super__.make.call(this, a)
        };
        Q.prototype._makeNone = function() {
            var a, b = this;
            a = (this.range.max - this.range.min) * this.space;
            this.f = this._NaNCheckWrap(function(c) {
                var d;
                if (_.isObject(c)) {
                    if ("identity" === c.f)
                        return c.v;
                    if ("middle" === c.f)
                        return b.range.max / 2 + b.range.min / 2;
                    if ("max" === c.f)
                        return b.range.max;
                    if ("min" === c.f)
                        return b.range.min;
                    if ("upper" === c.f&&!c.m)
                        return b.range.max - a;
                    if ("lower" === c.f&&!c.m)
                        return b.range.min + a;
                    d = (b.range.max - b.range.min-2 * a) / c.m;
                    if ("upper" === c.f)
                        return b.range.min + a + (c.n + 1) * d;
                    if ("lower" === c.f)
                        return b.range.min + a + c.n * d
                }
                return b.range.max / 2 + b.range.min / 2
            });
            return this.finv = function() {
                return {}
            }
        };
        Q.prototype._NaNCheckWrap = function(a) {
            return function(b) {
                if (h.isDefined(b)) {
                    b = a(b);
                    if (isNaN(b) || Infinity === b||-Infinity === b)
                        throw h.error.scale("Scale outputed a value that is not finite.");
                    return b
                }
            }
        };
        Q.prototype._numWrapper = function(a, b) {
            var c = this;
            return this._NaNCheckWrap(function(d) {
                var e, f, g;
                if (_.isObject(d)) {
                    if ("scalefn" === d.t) {
                        if ("identity" === d.f)
                            return d.v;
                        if ("middle" === d.f)
                            return b(d.v + a.bw / 2);
                        if ("max" === d.f)
                            return c.range.max + d.v;
                        if ("min" === d.f)
                            return c.range.min + d.v;
                        if ("upper" === (e = d.f) ||
                        "lower" === e) {
                            g = b(d.v + a.bw);
                            e = b(d.v);
                            f = (g - e) * c.space;
                            if ("upper" === d.f&&!d.m)
                                return g - f;
                            if ("lower" === d.f&&!d.m)
                                return e + f;
                            g = (g - e-2 * f) / d.m;
                            if ("upper" === d.f)
                                return e + f + (d.n + 1) * g;
                            if ("lower" === d.f)
                                return e + f + d.n * g
                        }
                    }
                    throw h.error.input("Unknown object " + d + " is passed to a scale");
                }
                return b(d)
            })
        };
        Q.prototype._dateWrapper = function(a, b) {
            var c = this;
            return this._NaNCheckWrap(function(d) {
                var e, f, g;
                if (_.isObject(d)) {
                    if ("scalefn" === d.t) {
                        if ("identity" === d.f)
                            return d.v;
                        if ("max" === d.f)
                            return c.range.max + d.v;
                        if ("min" ===
                        d.f)
                            return c.range.min + d.v;
                        if ("upper" === (e = d.f) || "middle" === e || "lower" === e) {
                            g = "week" === a.bw ? moment.unix(d.v).day(7).unix() : "decade" === a.bw ? (f = moment.unix(d.v).startOf("year"), f.year(10 * Math.floor(f.year() / 10)), f.unix()) : moment.unix(d.v).endOf(a.bw).unix();
                            g = b(g);
                            e = "week" === a.bw ? moment.unix(d.v).day(0).unix() : "decade" === a.bw ? (f = moment.unix(d.v).startOf("year"), f.year(10 * Math.floor(f.year() / 10) + 10), f.unix()) : moment.unix(d.v).startOf(a.bw).unix();
                            e = b(e);
                            f = (g - e) * c.space;
                            if ("middle" === d.f)
                                return g / 2 + e /
                                2;
                            if ("upper" === d.f&&!d.m)
                                return g - f;
                            if ("lower" === d.f&&!d.m)
                                return e + f;
                            g = (g - e-2 * f) / d.m;
                            if ("upper" === d.f)
                                return e + f + (d.n + 1) * g;
                            if ("lower" === d.f)
                                return e + f + d.n * g
                        }
                    }
                    throw h.error.input("Unknown object " + d + " is passed to a scale");
                }
                return b(d)
            })
        };
        Q.prototype._catWrapper = function(a, b) {
            var c = this;
            return this._NaNCheckWrap(function(d) {
                var e, f, g;
                f = a * c.space;
                if (_.isObject(d)) {
                    if ("scalefn" === d.t) {
                        if ("identity" === d.f)
                            return d.v;
                        if ("max" === d.f)
                            return c.range.max + d.v;
                        if ("min" === d.f)
                            return c.range.min + d.v;
                        if ("upper" ===
                        (e = d.f) || "middle" === e || "lower" === e) {
                            g = b(d.v) + a;
                            e = b(d.v);
                            if ("middle" === d.f)
                                return g / 2 + e / 2;
                            if ("upper" === d.f&&!d.m)
                                return g - f;
                            if ("lower" === d.f&&!d.m)
                                return e + f;
                            g = (g - e-2 * f) / d.m;
                            if ("upper" === d.f)
                                return e + f + (d.n + 1) * g;
                            if ("lower" === d.f)
                                return e + f + d.n * g
                        }
                    }
                    throw h.error.input("Unknown object " + d + " is passed to a scale");
                }
                return b(d) + a / 2
            })
        };
        var ia = function() {
            return ia.__super__.constructor.apply(this, arguments)
        };
        N(ia, Q);
        ia.prototype._makeNum = function() {
            var a, b;
            b = h.linear(this.domain.min, this.range.min, this.domain.max,
            this.range.max);
            a = h.linear(this.range.min, this.domain.min, this.range.max, this.domain.max);
            this.f = this._numWrapper(this.domain, b);
            return this.finv = function(b, d) {
                var e;
                e = [a(b), a(d)];
                return {
                    ge: _.min(e),
                    le: _.max(e)
                }
            }
        };
        ia.prototype._makeDate = function() {
            var a, b;
            b = h.linear(this.domain.min, this.range.min, this.domain.max, this.range.max);
            a = h.linear(this.range.min, this.domain.min, this.range.max, this.domain.max);
            this.f = this._dateWrapper(this.domain, b);
            return this.finv = function(b, d) {
                var e;
                e = [a(b), a(d)];
                return {
                    ge: _.min(e),
                    le: _.max(e)
                }
            }
        };
        ia.prototype._makeCat = function() {
            var a, b = this;
            a = (this.range.max - this.range.min) / this.domain.levels.length;
            this.f = this._catWrapper(a, function(c) {
                c = _.indexOf(b.domain.levels, c);
                return -1 === c ? null : b.range.min + c * a
            });
            return this.finv = function(c, d) {
                var e;
                d < c && (e = [d, c], c = e[0], d = e[1]);
                return {
                    "in": b.domain.levels.slice(Math.floor(c / a), + Math.floor(d / a) + 1 || 9E9)
                }
            }
        };
        Yc = ia;
        var ya = function() {
            return ya.__super__.constructor.apply(this, arguments)
        };
        N(ya, Q);
        ya.prototype._makeNum = function() {
            var a, b, c, d;
            if (0 > this.domain.min)
                throw h.error.input("Log scale cannot handle zero or negative input.");
            a = Math.log;
            c = h.linear(a(this.domain.min), this.range.min, a(this.domain.max), this.range.max);
            this.f = this._numWrapper(this.domain, function(b) {
                return c(a(b))
            });
            d = h.linear(this.range.min, a(this.domain.min), this.range.max, a(this.domain.max));
            b = function(a) {
                return Math.exp(d(a))
            };
            return this.finv = function(a, c) {
                var d;
                d = [b(a), b(c)];
                return {
                    ge: _.min(d),
                    le: _.max(d)
                }
            }
        };
        ya.prototype._tickNum = function() {
            return "num-log"
        };
        Zc =
        ya;
        var Za = function() {
            this._makeNum = W(this._makeNum, this);
            return Za.__super__.constructor.apply(this, arguments)
        };
        N(Za, v);
        Za.prototype._makeNum = function() {
            var a, b, c;
            a = 0 === this.domain.min ? 0 : 1;
            b = Math.sqrt;
            c = h.linear(b(this.domain.min), a, b(this.domain.max), 10);
            return this.f = this._identityWrapper(function(a) {
                return c(b(a))
            })
        };
        Wc = Za;
        var $a = function() {
            this._makeNum = W(this._makeNum, this);
            return $a.__super__.constructor.apply(this, arguments)
        };
        N($a, v);
        $a.prototype._makeNum = function() {
            return this.f = this._identityWrapper(h.linear(this.domain.min,
            0 === this.domain.min ? 0 : 0.1, this.domain.max, 1))
        };
        $c = $a;
        var ab = function() {
            this._makeCat = W(this._makeCat, this);
            return ab.__super__.constructor.apply(this, arguments)
        };
        N(ab, v);
        ab.prototype._makeCat = function() {
            var a, b, c, d = this;
            c = this.domain.levels.length;
            if (9 >= c)
                return a = "#E41A1C #377EB8 #4DAF4A #984EA3 #FF7F00 #FFFF33 #A65628 #F781BF #999999".split(" "), this.f = function(b) {
                b = _.indexOf(d.domain.levels, b);
                return a[b]
            };
            b = function(a) {
                return _.indexOf(d.domain.levels, a) / c + 1 / (2 * c)
            };
            return this.f = function(a) {
                return Raphael.hsl(b(a),
                0.5, 0.5)
            }
        };
        ad = ab;
        var Db = function(a) {
            this._makeNum = W(this._makeNum, this);
            this.lower = a.lower;
            this.upper = a.upper
        };
        N(Db, v);
        Db.prototype._makeNum = function() {
            var a, b, c, d, e;
            c = Raphael.color(this.lower);
            e = Raphael.color(this.upper);
            d = h.linear(this.domain.min, c.r, this.domain.max, e.r);
            b = h.linear(this.domain.min, c.g, this.domain.max, e.g);
            a = h.linear(this.domain.min, c.b, this.domain.max, e.b);
            return this.f = this._identityWrapper(function(c) {
                return Raphael.rgb(d(c), b(c), a(c))
            })
        };
        var bb = function(a) {
            this._makeCat = W(this._makeCat,
            this);
            this._makeNum = W(this._makeNum, this);
            this.lower = a.lower;
            this.middle = a.middle;
            this.upper = a.upper;
            this.midpoint = a.midpoint;
            null == this.midpoint && (this.midpoint = 0)
        };
        N(bb, v);
        bb.prototype._makeNum = function() {
            var a, b, c, d, e, f, g, j, k, l = this;
            e = Raphael.color(this.lower);
            f = Raphael.color(this.middle);
            k = Raphael.color(this.upper);
            g = h.linear(this.domain.min, e.r, this.midpoint, f.r);
            c = h.linear(this.domain.min, e.g, this.midpoint, f.g);
            a = h.linear(this.domain.min, e.b, this.midpoint, f.b);
            j = h.linear(this.midpoint, f.r, this.domain.max,
            k.r);
            d = h.linear(this.midpoint, f.g, this.domain.max, k.g);
            b = h.linear(this.midpoint, f.b, this.domain.max, k.b);
            return this.f = this._identityWrapper(function(e) {
                return e < l.midpoint ? Raphael.rgb(g(e), c(e), a(e)) : Raphael.rgb(j(e), d(e), b(e))
            })
        };
        bb.prototype._makeCat = function() {};
        var Eb = function(a) {
            this["function"] = a["function"]
        };
        N(Eb, v);
        Eb.prototype.make = function(a) {
            this.domain = a;
            this.compare = h.domain.compare(a);
            return this.f = this._identityWrapper(this["function"])
        };
        var Fb = function() {
            return Fb.__super__.constructor.apply(this,
            arguments)
        };
        N(Fb, v);
        Fb.prototype._makeCat = function() {};
        var cb = function() {
            return cb.__super__.constructor.apply(this, arguments)
        };
        N(cb, v);
        cb.prototype.make = function(a) {
            this.domain = a;
            this.compare = function() {
                return 0
            };
            return this.f = this._identityWrapper(function(a) {
                return a
            })
        };
        Xc = cb;
        h.scale = {};
        h.scale.Base = v;
        h.scale.classes = {
            linear: Yc,
            log: Zc,
            area: Wc,
            palette: ad,
            gradient: Db,
            gradient2: bb,
            identity: Xc,
            opacity: $c,
            custom: Eb
        };
        h.scale.make = function(a) {
            var b;
            b = a.type;
            if (b in h.scale.classes)
                return new h.scale.classes[b](a);
            throw h.error.defn("No such scale " + a.type + ".");
        };
        var bd, Rd = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        h.scaleset = function(a, b, c) {
            return new bd(a, b, c)
        };
        var z = function(a, b) {
            this.coord = b;
            this.ranges = a;
            this.axes = h.guide.axes();
            this.legends = h.guide.legends()
        };
        z.prototype.make = function(a, b, c) {
            this.guideSpec = a;
            this.layers = c;
            this.domains = b;
            this.scales = this._makeScales(a, b, this.ranges);
            this.reverse = {
                x: this.scales.x.finv,
                y: this.scales.y.finv
            };
            return this.layerMapping =
            this._mapLayers(c)
        };
        z.prototype.setRanges = function(a) {
            var b, c, d, e;
            this.ranges = a;
            d = ["x", "y"];
            e = [];
            b = 0;
            for (c = d.length; b < c; b++)
                a = d[b], e.push(this.scales[a].make(this.domains[a], this.ranges[a], this.getSpec(a).padding));
            return e
        };
        z.prototype._makeScales = function(a, b, c) {
            var d, e;
            e = function(b) {
                var c, d;
                if (a && null != a[b] && null != a[b].scale) {
                    if (_.isFunction(a[b].scale))
                        return {
                            type: "custom",
                            "function": a[b].scale
                        };
                    switch (b) {
                    case "x":
                        c = ["linear", "log"];
                        break;
                    case "y":
                        c = ["linear", "log"];
                        break;
                    case "color":
                        c = ["palatte",
                        "gradient", "gradient2"];
                        break;
                    case "size":
                        c = ["linear", "log"];
                        break;
                    case "opacity":
                        c = ["opacity"];
                        break;
                    case "shape":
                        c = ["linear", "log", "area"];
                        break;
                    case "id":
                        c = ["identity"];
                        break;
                    case "text":
                        c = ["identity"];
                        break;
                    default:
                        c = []
                    }
                    if (d = a[b].scale.type, 0 <= Rd.call(c, d)
                        )return a[b].scale;
                    throw h.error.scale("Aesthetic " + b + " cannot have scale " + a[b].scale.type);
                }
                return null
            };
            d = {};
            d.x = h.scale.make(e("x") || {
                type: "linear"
            });
            d.x.make(b.x, c.x, this.getSpec("x").padding);
            d.y = h.scale.make(e("y") || {
                type: "linear"
            });
            d.y.make(b.y,
            c.y, this.getSpec("y").padding);
            null != b.color && ("cat" === b.color.type ? d.color = h.scale.make(e("color") || {
                type: "palette"
            }) : (c = {
                type: "gradient",
                upper: "steelblue",
                lower: "red"
            }, d.color = h.scale.make(e("color") || c)), d.color.make(b.color));
            null != b.size && (d.size = h.scale.make(e("size") || {
                type: "area"
            }), d.size.make(b.size));
            null != b.opacity && (d.opacity = h.scale.make(e("opacity") || {
                type: "opacity"
            }), d.opacity.make(b.opacity));
            d.text = h.scale.make({
                type: "identity"
            });
            d.text.make();
            return d
        };
        z.prototype.fromPixels = function(a,
        b) {
            var c, d, e, f, g, h, k;
            null != a && null != b && (c = this.coord.getAes(a, b, this.reverse), e = c.x, f = c.y);
            d = {};
            k = this.layerMapping.x;
            g = 0;
            for (h = k.length; g < h; g++)
                c = k[g], null != c.type && "map" === c.type && (d[c.value] = null != e ? e : null);
            h = this.layerMapping.y;
            e = 0;
            for (g = h.length; e < g; e++)
                c = h[e], null != c.type && "map" === c.type && (d[c.value] = null != f ? f : null);
            return d
        };
        z.prototype.getSpec = function(a) {
            return null != this.guideSpec && null != this.guideSpec[a] ? this.guideSpec[a] : {}
        };
        z.prototype.makeGuides = function(a, b) {
            var c, d;
            this.makeAxes();
            this.makeTitles(null != (c = a.title) ? c : "");
            this.makeLegends(null != (d = a.legendPosition) ? d : "right", b);
            return {
                axes: this.axes,
                legends: this.legends,
                title: this.title
            }
        };
        z.prototype.renderGuides = function(a, b, c) {
            this.axes.render(a, b, c);
            this.renderTitles(a, b);
            return this.renderLegends(a, b)
        };
        z.prototype.disposeGuides = function(a) {
            this.axes.dispose(a);
            this.legends.dispose(a);
            this.titles.x.dispose(a);
            this.titles.y.dispose(a);
            this.titles.main.dispose(a);
            return this.titles = {}
        };
        z.prototype.makeTitles = function(a) {
            null ==
            this.titles && (this.titles = {
                x: h.guide.title(this.coord.axisType("x")),
                y: h.guide.title(this.coord.axisType("y")),
                main: h.guide.title("main")
            });
            this.titles.main.make({
                title: a,
                guideSpec: {},
                position: "top"
            });
            this.titles.x.make({
                guideSpec: this.getSpec("x"),
                title: h.getLabel(this.layers, "x")
            });
            return this.titles.y.make({
                guideSpec: this.getSpec("y"),
                title: h.getLabel(this.layers, "y")
            })
        };
        z.prototype.titleOffset = function() {
            var a, b, c, d, e, f, g, h;
            d = {};
            g = this.titles;
            for (b in g) {
                a = g[b];
                c = a.getDimension();
                h = ["left", "right",
                "top", " bottom"];
                e = 0;
                for (f = h.length; e < f; e++)
                    a = h[e], c[a] && (null == d[a] && (d[a] = 0), d[a] += c[a])
            }
            return d
        };
        z.prototype.renderTitles = function(a, b) {
            var c;
            b = b({}, !1, !1);
            c = this.axesOffset(a);
            this.titles.x.render(b, a, c);
            this.titles.y.render(b, a, c);
            return this.titles.main.render(b, a, c)
        };
        z.prototype.makeAxes = function() {
            var a;
            return this.axes.make({
                domains: {
                    x: this.domains.x,
                    y: this.domains.y
                },
                coord: this.coord,
                scales: this.scales,
                specs: null != (a = this.guideSpec) ? a: {},
                labels: {
                    x: h.getLabel(this.layers, "x"),
                    y: h.getLabel(this.layers,
                    "y")
                }
            })
        };
        z.prototype.axesOffset = function(a) {
            return this.axes.getDimension(a)
        };
        z.prototype._mapLayers = function(a) {
            var b, c, d, e, f;
            c = {};
            f = h["const"].aes;
            d = 0;
            for (e = f.length; d < e; d++)
                b = f[d], c[b] = _.map(a, function(a) {
                return null != a.mapping[b] ? {
                    type: "map",
                    value: a.mapping[b]
                } : null != a.consts[b] ? {
                    type: "const",
                    value: a.consts[b]
                } : a.defaults[b]
            });
            return c
        };
        z.prototype.makeLegends = function(a, b) {
            null == a && (a = "right");
            return this.legends.make({
                domains: this.domains,
                layers: this.layers,
                guideSpec: this.guideSpec,
                scales: this.scales,
                layerMapping: this.layerMapping,
                position: a,
                dims: b
            })
        };
        z.prototype.legendOffset = function(a) {
            return this.legends.getDimension(a)
        };
        z.prototype.renderLegends = function(a, b) {
            var c, d, e, f, g, h, k, l, m;
            e = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
            c = this.axesOffset(a);
            f = this.titleOffset(a);
            k = ["left", "right", "top", "bottom"];
            g = 0;
            for (h = k.length; g < h; g++)
                d = k[g], e[d] += null != (l = c[d]) ? l : 0, e[d] += null != (m = f[d]) ? m : 0;
            return this.legends.render(a, b, e)
        };
        bd = z;
        var cd, Gb, db, Hb, Ib, eb, Jb, Sd = {}.hasOwnProperty, dd = function(a, b) {
            function c() {
                this.constructor =
                a
            }
            for (var d in b)
                Sd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        }, Td = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        h.data = function(a) {
            var b, c;
            c = void 0;
            _.isObject(a) && 4 > _.keys(a).length && "data"in a ? (b = a.data, c = a.meta) : b = a;
            switch (eb(b)) {
            case "json-object":
            case "json-grid":
            case "json-array":
                return h.data.json(b, c, void 0);
            case "url":
                return h.data.url(b, c, void 0);
            case "csv":
                return h.data.csv(b,
                c);
            default:
                throw h.error.data("Unknown data format.");
            }
        };
        h.data.json = function(a, b, c) {
            return new Gb({
                data: a,
                meta: b,
                type: c
            })
        };
        h.data.csv = function(a, b) {
            return new Gb({
                data: a,
                meta: b,
                csv: "csv"
            })
        };
        h.data.url = function(a, b, c) {
            return new cd({
                url: a,
                computeBackend: b,
                limit: c
            })
        };
        eb = function(a) {
            if (_.isArray(a))
                return _.isArray(a[0]) ? "json-grid" : "json-array";
            if (_.isObject(a))
                return "json-object";
            if (_.isString(a))
                return h.isURI(a) ? "url" : "csv";
            throw h.error.data("Unknown data format.");
        };
        db = function(a, b) {
            var c, d, e,
            f, g, j, k;
            if (0 < a.length) {
                e = _.union(_.keys(b), _.keys(a[0]));
                c = a.slice(0, 100);
                f = 0;
                for (g = e.length; f < g; f++)
                    d = e[f], null == b[d] && (b[d] = {}), b[d].type || (b[d].type = h.type.impute(_.pluck(c, d)));
                f = 0;
                for (j = a.length; f < j; f++) {
                    c = a[f];
                    g = 0;
                    for (k = e.length; g < k; g++)
                        d = e[g], c[d] = h.type.coerce(c[d], b[d])
                }
                d = e;
                e = a
            } else 
                d = _.keys(b), e = [];
            return {
                key: d,
                raw: e,
                meta: b
            }
        };
        Hb = function(a, b) {
            var c, d, e, f, g, j, k, l, m, n, q;
            j = [];
            if (0 < a.length) {
                f = b && _.isArray(b) ? b : b && _.isObject(b) ? _.keys(b) : _.keys(a[0]);
                if (_.isArray(b) ||!_.isObject(b))
                    b = {};
                c = a.slice(0,
                100);
                d = g = 0;
                for (k = f.length; g < k; d=++g)
                    e = f[d], null == b[e] && (b[e] = {}), b[e].type || (b[e].type = h.type.impute(_.pluck(c, d)));
                l = 0;
                for (n = a.length; l < n; l++) {
                    c = a[l];
                    g = {};
                    d = m = 0;
                    for (q = c.length; m < q; d=++m)
                        k = c[d], e = f[d], g[e] = h.type.coerce(k, b[e]);
                    j.push(g)
                }
                e = f;
                d = j
            } else 
                e = _.keys(b), d = [];
            return {
                key: e,
                raw: d,
                meta: b
            }
        };
        Jb = function(a, b) {
            var c, d, e, f, g, j, k, l, m;
            e = _.keys(a);
            g = [];
            j = 0;
            for (d = e.length; j < d; j++)
                c = e[j], null == b[c] && (b[c] = {}), b[c].type || (b[c].type = h.type.impute(a[c].slice(0, 100)));
            if (0 < e.length && (d = a[e[0]].length, 0 < d)) {
                c =
                j = 0;
                for (m = d-1; 0 <= m ? j <= m : j >= m; c = 0 <= m?++j : --j) {
                    f = {};
                    k = 0;
                    for (l = e.length; k < l; k++)
                        d = e[k], f[d] = h.type.coerce(a[d][c], b[d]);
                    g.push(f)
                }
            }
            return {
                key: e,
                raw: g,
                meta: b
            }
        };
        Ib = function(a, b) {
            return db(h.csv.parse(a), b)
        };
        var w = function() {
            this.raw = null;
            this.meta = {};
            this.key = [];
            this.subscribed = [];
            this.computeBackend=!1
        };
        w.prototype.isData=!0;
        w.prototype.update = function() {
            var a, b, c, d, e;
            d = this.subscribed;
            e = [];
            b = 0;
            for (c = d.length; b < c; b++)
                a = d[b], e.push(a());
            return e
        };
        w.prototype.subscribe = function(a) {
            if (-1 === _.indexOf(this.subscribed,
            a))
                return this.subscribed.push(a)
        };
        w.prototype.unsubscribe = function(a) {
            return this.subscribed.splice(_.indexOf(this.subscribed, a), 1)
        };
        w.prototype.keys = function() {
            return this.key
        };
        w.prototype.rename = function() {
            return !1
        };
        w.prototype.renameMany = function() {
            return !1
        };
        w.prototype.remove = function() {
            return !1
        };
        w.prototype.filter = function() {
            return !1
        };
        w.prototype.sort = function() {
            return !1
        };
        w.prototype.derive = function() {
            return !1
        };
        w.prototype.get = function(a) {
            if (this.raw)
                return _.pluck(this.raw, a);
            throw h.error.data("Data has not been fetched or is undefined.");
        };
        w.prototype.len = function() {
            if (this.raw)
                return this.raw.length;
            throw h.error.data("Data has not been fetched or is undefined.");
        };
        w.prototype.getObject = function(a) {
            if (this.raw)
                return this.raw[a];
            throw h.error.data("Data has not been fetched or is undefined.");
        };
        w.prototype.max = function(a) {
            return _.max(this.get(a))
        };
        w.prototype.min = function(a) {
            return _.min(this.get(a))
        };
        w.prototype.getMeta = function(a) {
            if (this.meta)
                return this.meta[a]
        };
        w.prototype.type = function(a) {
            if (a in this.meta)
                return a = this.meta[a].type,
            "num" === a ? "number" : a;
            throw h.error.defn("Data does not have column " + a + ".");
        };
        var H = function(a) {
            H.__super__.constructor.call(this);
            this._setData(a)
        };
        dd(H, w);
        H.prototype.getData = function(a) {
            return a(this)
        };
        H.prototype.update = function(a) {
            this._setData(a);
            return H.__super__.update.call(this)
        };
        H.prototype._setData = function(a) {
            var b, c, d;
            _.isObject(a) && 4 > _.keys(a).length && "data"in a ? (b = a.data, c = null != (d = a.meta) ? d : {}) : (b = a, c = {});
            d = function() {
                var d;
                switch (null != (d = a.type) ? d : eb(b)) {
                case "json-object":
                    return Jb(b,
                    c);
                case "json-grid":
                    return Hb(b, c);
                case "json-array":
                    return db(b, c);
                case "csv":
                    return Ib(b, c);
                default:
                    throw h.error.data("Unknown data format.");
                }
            }();
            this.key = d.key;
            this.raw = d.raw;
            this.meta = d.meta;
            return this.data = this.raw
        };
        H.prototype._checkRename = function(a, b) {
            if ("" === b)
                throw h.error.defn("Column names cannot be an empty string");
            if (-1 === _.indexOf(this.key, a))
                throw h.error.defn("The key " + a + " doesn't exist!");
            if (-1 !== _.indexOf(this.key, b))
                throw h.error.defn("The key " + b + " already exists!");
        };
        H.prototype.rename =
        function(a, b, c) {
            var d, e, f;
            null == c && (c=!1);
            a = a.toString();
            b = b.toString();
            if (a === b)
                return !0;
            c || this._checkRename(a, b);
            f = this.raw;
            d = 0;
            for (e = f.length; d < e; d++)
                c = f[d], c[b] = c[a], delete c[a];
            c = _.indexOf(this.key, a);
            this.key[c] = b;
            this.meta[b] = this.meta[a];
            delete this.meta[a];
            return !0
        };
        H.prototype.renameMany = function(a) {
            var b, c;
            for (b in a)
                c = a[b], b !== c && this._checkRename(b, c);
            for (b in a)
                c = a[b], b !== c && this.rename(b, c, !0);
            return !0
        };
        H.prototype.remove = function(a) {
            var b, c, d, e;
            b = _.indexOf(this.key, a);
            if ("-1" === b)
                return !1;
            this.key.splice(b, 1);
            delete this.meta[a];
            e = this.raw;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], delete b[a];
            return !0
        };
        H.prototype.filter = function(a) {
            var b, c, d, e, f;
            a = _.isFunction(a) ? a : _.isString(a) ? new Function("d", "with(d) { return " + a + ";}") : function() {
                return !0
            };
            c = [];
            f = this.raw;
            d = 0;
            for (e = f.length; d < e; d++)
                b = f[d], a(b) && c.push(b);
            return h.data.json(c, this.meta)
        };
        H.prototype.sort = function(a, b) {
            var c, d, e;
            e = this.type(a);
            c = _.clone(this.raw);
            d = h.type.compare(e);
            c.sort(function(b, c) {
                return d(b[a], c[a])
            });
            b && c.reverse();
            return h.data.json(c, this.meta)
        };
        H.prototype.derive = function(a, b, c) {
            var d, e, f, g, j, k, l, m;
            null == c && (c = {});
            e = c.dryrun;
            d = c.context;
            null == b && (b = _uniqueId("var_"));
            null == d && (d = {});
            _.isFunction(a) ? (c = a, f=!1) : (f=!0, c = new Function("d", "with(this) { with(d) { return " + a(a) + ";}}"));
            m = this.raw;
            k = 0;
            for (l = m.length; k < l; k++) {
                g = m[k];
                j = c.call(d, g);
                if (_.isFunction(j))
                    throw h.error.defn("Derivation function returned another function.");
                g[b] = j
            }
            if (e)
                return {
                    success: !0,
                    values: _.pluck(this.raw.slice(0, 11), b)
                };
            0 <= Td.call(this.key,
            b) || this.key.push(b);
            this.meta[b] = {
                type: h.type.impute(_.pluck(this.raw.slice(0, 101), b)),
                derived: !0
            };
            f && (this.meta[b].formula = a);
            return b
        };
        Gb = H;
        var ba = function(a) {
            var b = this.getData, c = this;
            this.getData = function() {
                return b.apply(c, arguments)
            };
            ba.__super__.constructor.call(this);
            this.url = a.url;
            this.computeBackend = a.computeBackend;
            this.limit = a.limit;
            null == this.computeBackend && (this.computeBackend=!1)
        };
        dd(ba, w);
        ba.prototype.getData = function(a, b) {
            var c, d, e = this;
            if (null != this.raw)
                return a(this);
            c =- 1 === _.indexOf(this.url,
            "?") ? "?" : "&";
            d = this.url;
            this.limit && (d += "" + c + "limit=" + this.limit);
            b && (d += "&spec=" + encodeURIComponent(JSON.stringify(b)));
            return h.text(d, function(b) {
                var c, d, k;
                try {
                    b = JSON.parse(b)
                } catch (l) {}
                _.isObject(b) && 4 > _.keys(b).length && "data"in b ? (c = b.data, d = null != (k = b.meta) ? k : {}) : (c = b, d = {});
                b = function() {
                    switch (eb(c)) {
                    case "json-object":
                        return Jb(c, d);
                    case "json-grid":
                        return Hb(c, d);
                    case "json-array":
                        return db(c, d);
                    case "csv":
                        return Ib(c, d);
                    default:
                        throw h.error.data("Unknown data format.");
                    }
                }();
                e.key = b.key;
                e.raw = b.raw;
                e.meta = b.meta;
                e.data = e.raw;
                return a(e)
            })
        };
        ba.prototype.update = function() {
            this.raw = null;
            return ba.__super__.update.call(this)
        };
        ba.prototype.renameMany = function(a) {
            return 0 === _.keys(a).length
        };
        cd = ba;
        var ed, fd, Kb, Lb, gd, Mb, hd, id, jd, kd, ld = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        }, za = function(a, b, c) {
            var d = this._wrap, e = this;
            this._wrap = function() {
                return d.apply(e, arguments)
            };
            this.dataObj = a.data;
            this.initialSpec = h.parser.layerToData(a,
            b);
            this.prevSpec = null;
            this.strictmode = c;
            this.statData = null;
            this.metaData = {}
        };
        za.prototype.reset = function(a) {
            return this.make(this.initialSpec, a)
        };
        za.prototype.make = function(a, b, c) {
            var d, e;
            e = this._wrap(c);
            this.strictmode && e(this.dataObj.json, {});
            if (this.dataObj.computeBackend)
                return d = h.parser.layerToData(a, b), ed(d, this.dataObj, e);
            d = h.parser.layerToData(a, b);
            return this.dataObj.getData(function(a) {
                return Mb(d, a, e)
            })
        };
        za.prototype._wrap = function(a) {
            var b = this;
            return function(c) {
                var d;
                d = c.data;
                c = c.meta;
                b.statData = d;
                b.metaData = c;
                return a(b.statData, b.metaData)
            }
        };
        h.DataProcess = za;
        h.data.process = function(a, b, c, d) {
            a = new za(b, c);
            a.process(d);
            return a
        };
        kd = {
            bin: function(a, b, c) {
                var d, e;
                e = b.name;
                d = b.binwidth;
                if ("num" === c.type) {
                    if (isNaN(d))
                        throw h.error.defn("The binwidth " + d + " is invalid for a numeric varliable");
                    d =+ d;
                    b = function(b) {
                        return b[e] = d * Math.floor(b[a] / d)
                    };
                    return {
                        trans: b,
                        meta: {
                            bw: d,
                            binned: !0,
                            type: "num"
                        }
                    }
                }
                if ("date" === c.type) {
                    if (!(0 <= ld.call(h["const"].timerange, d)))
                        throw h.error.defn("The binwidth " +
                        d + " is invalid for a datetime varliable");
                    b = function(b) {
                        var c;
                        return "week" === d ? b[e] = moment.unix(b[a]).day(0).unix() : "decade" === d ? (c = moment.unix(b[a]).startOf("year"), c.year(10 * Math.floor(c.year() / 10)), b[e] = c.unix()) : b[e] = moment.unix(b[a]).startOf(d).unix()
                    };
                    return {
                        trans: b,
                        meta: {
                            bw: d,
                            binned: !0,
                            type: "date"
                        }
                    }
                }
            },
            lag: function(a, b, c) {
                var d;
                d = b.name;
                b = b.lag;
                var e, f;
                f = [];
                for (e = 1; 1 <= b ? e <= b : e >= b; 1 <= b?++e : --e)
                    f.push(void 0);
                return {
                    trans: function(b) {
                        f.push(b[a]);
                        return b[d] = f.shift()
                    },
                    meta: {
                        type: c.type
                    }
                }
            }
        };
        jd =
        function(a, b, c) {
            return kd[b.trans](a, b, null != c ? c : {})
        };
        gd = {
            lt: function(a, b) {
                return a < b
            },
            le: function(a, b) {
                return a <= b
            },
            gt: function(a, b) {
                return a > b
            },
            ge: function(a, b) {
                return a >= b
            },
            "in": function(a, b) {
                return 0 <= ld.call(b, a)
            }
        };
        Lb = function(a) {
            var b;
            b = [];
            _.each(a, function(a, d) {
                return _.each(a, function(a, c) {
                    return b.push(function(b) {
                        return gd[c](b[d], a)
                    })
                })
            });
            return function(a) {
                var d, e, f;
                e = 0;
                for (f = b.length; e < f; e++)
                    if (d = b[e], !d(a)
                        )return !1;
                return !0
            }
        };
        hd = {
            sum: function() {
                return function(a) {
                    return _.reduce(_.without(a,
                    void 0, null), function(a, c) {
                        return a + c
                    }, 0)
                }
            },
            mean: function() {
                return function(a) {
                    a = _.without(a, void 0, null);
                    return _.reduce(a, function(a, c) {
                        return a + c
                    }, 0) / a.length
                }
            },
            count: function() {
                return function(a) {
                    return _.without(a, void 0, null).length
                }
            },
            unique: function() {
                return function(a) {
                    return _.uniq(_.without(a, void 0, null)).length
                }
            },
            min: function() {
                return function(a) {
                    return _.min(a)
                }
            },
            max: function() {
                return function(a) {
                    return _.max(a)
                }
            },
            median: function() {
                return function(a) {
                    return h.median(a)
                }
            },
            box: function() {
                return function(a) {
                    var b,
                    c, d, e, f, g;
                    c = a.length;
                    return 5 < c ? (e = c / 2, a = _.sortBy(a, function(a) {
                        return a
                    }), b = Math.ceil(e) / 2, 0 !== b%1 ? (b = Math.floor(b), e = a[b], c = a[c-1 - b]) : (e = (a[b] + a[b-1]) / 2, c = (a[c - b] + a[c - b-1]) / 2), b = c - e, d = e-1.5 * b, f = c + 1.5 * b, b = _.groupBy(a, function(a) {
                        return a >= d && a <= f
                    }), {
                        q1: _.min(b["true"]), q2: e, q3: h.median(a, !0), q4: c, q5: _.max(b["true"]), outliers: null != (g = b["false"]) ? g : []
                    }) : {
                        outliers: a
                    }
                }
            }
        };
        id = function(a) {
            return hd[a.stat](a)
        };
        Kb = function(a, b) {
            var c, d;
            d = {};
            _.each(b.stats, function(a) {
                var b, c, h;
                b = a.key;
                c = a.name;
                h = id(a);
                return d[c] = function(a) {
                    return h(_.pluck(a, b))
                }
            });
            c = h.groupBy(a, b.groups);
            return _.map(c, function(a) {
                var c;
                c = {};
                _.each(b.groups, function(b) {
                    return c[b] = a[0][b]
                });
                _.each(d, function(b, d) {
                    return c[d] = b(a)
                });
                return c
            })
        };
        fd = function(a, b, c) {
            var d, e, f, g;
            f = b.sort;
            g = b.stat;
            d = b.limit;
            b = b.asc;
            g && (g = {
                stats: [g],
                groups: [a]
            }, c = Kb(c, g));
            e = b ? 1 : -1;
            c.sort(function(a, b) {
                return a[f] === b[f] ? 0 : a[f] >= b[f] ? 1 * e : -1 * e
            });
            d && (c = c.slice(0, + (d-1) + 1 || 9E9));
            a = _.uniq(_.pluck(c, a));
            return {
                meta: {
                    levels: a,
                    sorted: !0
                },
                filter: {
                    "in": a
                }
            }
        };
        Mb = function(a, b, c) {
            var d, e, f, g, j, k, l, m, n, q, p, s, u;
            l = _.clone(b.meta);
            b = _.clone(b.raw);
            null == l && (l = {});
            d = function(a, b) {
                var c;
                return l[a] = _.extend(null != (c = l[a]) ? c : {}, b)
            };
            if (a.trans) {
                u = a.trans;
                g = 0;
                for (p = u.length; g < p; g++) {
                    m = u[g];
                    j = m.key;
                    k = jd(j, m, l[j]);
                    e = k.trans;
                    k = k.meta;
                    n = 0;
                    for (s = b.length; n < s; n++)
                        f = b[n], e(f);
                    d(m.name, k)
                }
            }
            a.filter && (b = _.filter(b, Lb(a.filter)));
            if (a.meta) {
                e = {};
                m = a.meta;
                for (j in m)
                    k = m[j], g = fd(j, k, b), k = g.meta, g = g.filter, e[j] = g, d(j, k);
                b = _.filter(b, Lb(e))
            }
            if (a.stats && a.stats.stats && 0 < a.stats.stats.length) {
                b =
                Kb(b, a.stats);
                e = a.stats.stats;
                j = 0;
                for (k = e.length; j < k; j++)
                    m = e[j], m = m.name, d(m, {
                    type: "num"
                })
            }
            a = null != (q = a.select) ? q : [];
            q = 0;
            for (d = a.length; q < d; q++)
                if (j = a[q], null == l[j])
                    throw h.error.defn("You referenced a data column " + j + " that doesn't exist.");
            return c({
                data: b,
                meta: l
            })
        };
        ed = function(a, b, c) {
            return b.getData(c, a)
        };
        h.data.frontendProcess = Mb;
        var md, nd, od, pd, qd, rd, sd, td, ud, vd, Nb, wd, r, Ud = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        }, Vd = {}.hasOwnProperty,
        R = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Vd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        };
        Nb = h["const"].aes;
        r = h["const"].scaleFns;
        wd = {
            x: r.novalue(),
            y: r.novalue(),
            color: "steelblue",
            size: 5,
            opacity: 0.9,
            shape: 1
        };
        var t = function(a, b, c) {
            var d;
            this.spec = a;
            this.guideSpec = c;
            this.mapping = {};
            this.consts = {};
            c = 0;
            for (d = Nb.length; c < d; c++)
                b = Nb[c], a[b] && (a[b]["var"] && (this.mapping[b] = a[b]["var"]), a[b]["const"] && (this.consts[b] = a[b]["const"]))
        };
        t.prototype.defaults = wd;
        t.prototype.calculate = function(a, b) {
            var c, d, e;
            this.statData = a;
            this.meta = b;
            this._calcGeoms();
            this.geoms = this._sample(this.geoms);
            b = {};
            e = this.mapping;
            for (c in e)
                d = e[c], b[c] = this.meta[d];
            return {
                geoms: this.geoms,
                meta: b
            }
        };
        t.prototype._calcGeoms = function() {
            throw h.error.impl();
        };
        t.prototype._tooltip = function(a) {
            var b, c, d, e, f;
            b = null;
            if ("function" === typeof this.spec.tooltip)
                return this.spec.tooltip(a);
            if (null != this.spec.tooltip)
                return this.spec.tooltip;
            f = _.uniq(_.values(this.mapping));
            d = 0;
            for (e = f.length; d < e; d++)
                c = f[d], b = b ? b + ("\n" + c + ": " + h.format.value(a[c])) : "" + c + ": " + h.format.value(a[c]);
            return b
        };
        t.prototype._sample = function(a) {
            if (!1 === this.spec.sample)
                return a;
            if (_.isNumber(this.spec.sample))
                return h.sample(a, this.spec.sample);
            throw h.error.defn("A layer's 'sample' definition should be an integer, not " + this.spec.sample);
        };
        t.prototype._getValue = function(a, b) {
            return this.mapping[b] ? a[this.mapping[b]] : this.consts[b] ? r.identity(this.consts[b]) : "x" === b || "y" === b ? this.defaults[b] :
            r.identity(this.defaults[b])
        };
        t.prototype._getIdFunc = function() {
            var a = this;
            return null != this.mapping.id ? function(b) {
                return a._getValue(b, "id")
            } : h.counter()
        };
        t.prototype._fillZeros = function(a, b) {
            var c, d, e, f;
            f = [];
            d = 0;
            for (e = a.length; d < e; d++)
                c = a[d], f.push(this._getValue(c, "x"));
            c = _.difference(b, f);
            f = f.concat(c);
            d = [];
            e = 0;
            for (c = c.length; e < c; e++)
                d.push(0);
            var g, h;
            h = [];
            e = 0;
            for (g = a.length; e < g; e++)
                c = a[e], h.push(this._getValue(c, "y"));
            return {
                x: f,
                y: h.concat(d)
            }
        };
        t.prototype._stack = function(a) {
            var b, c, d, e, f, g,
            j = this;
            a = h.groupBy(this.statData, a);
            g = [];
            for (d in a)
                b = a[d], e = 0, f = null != this.mapping.y ? function(a) {
                return a[j.mapping.y]
            } : function() {
                return 0
            }, g.push(function() {
                var a, d, g;
                g = [];
                a = 0;
                for (d = b.length; a < d; a++)
                    c = b[a], c.$lower = e, e += f(c), g.push(c.$upper = e);
                return g
            }());
            return g
        };
        t.prototype._dodge = function(a) {
            var b, c, d, e, f, g, j, k, l, m, n, q, p = this;
            d = _.without(_.keys(this.mapping), "x", "y", "id");
            _.toArray(_.pick(this.mapping, d));
            n = h.groupBy(this.statData, a);
            q = [];
            for (f in n) {
                c = n[f];
                j = {};
                g = 1;
                l = 0;
                for (m = d.length; l < m; l++)
                    b =
                    d[l], a = _.uniq(function() {
                    var a, d, f;
                    f = [];
                    a = 0;
                    for (d = c.length; a < d; a++)
                        e = c[a], f.push(this._getValue(e, b));
                    return f
                }.call(this)), g*=a.length, a.sort(h.type.compare(this.meta[this.mapping[b]].type)), j[b] = a;
                k = function(a) {
                    var c, e, f, h;
                    c = g;
                    f = e = 0;
                    for (h = d.length; f < h; f++)
                        b = d[f], c/=j[b].length, e += c * _.indexOf(j[b], p._getValue(a, b));
                    return e
                };
                q.push(function() {
                    var a, b, d;
                    d = [];
                    a = 0;
                    for (b = c.length; a < b; a++)
                        e = c[a], e.$n = k(e), d.push(e.$m = g);
                    return d
                }())
            }
            return q
        };
        t.prototype._inLevels = function(a) {
            var b, c, d;
            c = ["x", "y"];
            for (b =
            c.length; 0 < b;)
                return b = c[0], null != this.guideSpec[b] && null != this.guideSpec[b].levels ? (d = a[this.spec[b]["var"]], 0 <= Ud.call(this.guideSpec[b].levels, d)) : !0
        };
        var fb = function() {
            return fb.__super__.constructor.apply(this, arguments)
        };
        R(fb, t);
        fb.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, h, k;
            b = this._getIdFunc();
            this.geoms = {};
            h = this.statData;
            k = [];
            f = 0;
            for (g = h.length; f < g; f++) {
                c = h[f];
                a = {};
                for (d in c)
                    e = c[d], a[d] = {
                    "in": [e]
                };
                k.push(this.geoms[b(c)] = {
                    marks: {
                        "0": {
                            type: "circle",
                            x: this._getValue(c, "x"),
                            y: this._getValue(c,
                            "y"),
                            color: this._getValue(c, "color"),
                            size: this._getValue(c, "size"),
                            opacity: this._inLevels(c) ? this._getValue(c, "opacity"): 0
                        }
                    },
                    evtData: a,
                    tooltip: this._tooltip(c)
                })
            }
            return k
        };
        rd = fb;
        var gb = function() {
            return gb.__super__.constructor.apply(this, arguments)
        };
        R(gb, t);
        gb.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, j, k, l, m, n;
            d = _.without(_.keys(this.mapping), "x", "y");
            n = [];
            b = 0;
            for (c = d.length; b < c; b++)
                f = d[b], n.push(this.mapping[f]);
            b = h.groupBy(this.statData, n);
            d = this._getIdFunc();
            this.geoms = {};
            m = [];
            for (f in b) {
                a =
                b[f];
                j = a[0];
                c = {};
                k = 0;
                for (l = n.length; k < l; k++)
                    g = n[k], c[g] = {
                    "in": [j[g]]
                };
                m.push(this.geoms[d(j)] = {
                    marks: {
                        "0": {
                            type: "path",
                            x: function() {
                                var b, c, d;
                                d = [];
                                b = 0;
                                for (c = a.length; b < c; b++)
                                    e = a[b], d.push(this._getValue(e, "x"));
                                return d
                            }.call(this),
                            y: function() {
                                var b,
                                c,
                                d;
                                d = [];
                                b = 0;
                                for (c = a.length;
                                b < c;
                                b++)e = a[b],
                                d.push(this._getValue(e,
                                "y"));
                                return d
                            }.call(this),
                            color: this._getValue(j, "color"),
                            opacity: this._getValue(j, "opacity"),
                            size: this._getValue(j, "size")
                        }
                    }, evtData : c
                })
            }
            return m
        };
        qd = gb;
        var Aa = function() {
            return Aa.__super__.constructor.apply(this,
            arguments)
        };
        R(Aa, t);
        Aa.prototype.defaults = {
            x: r.novalue(),
            y: r.novalue(),
            color: "steelblue",
            size: 1,
            opacity: 0.9,
            shape: 1
        };
        Aa.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, j, k, l, m, n;
            a = _.uniq(function() {
                var a, b, c, d;
                c = this.statData;
                d = [];
                a = 0;
                for (b = c.length; a < b; a++)
                    f = c[a], d.push(this._getValue(f, "x"));
                return d
            }.call(this));
            var q;
            e = _.without(_.keys(this.mapping), "x", "y");
            q = [];
            c = 0;
            for (d = e.length; c < d; c++)
                g = e[c], q.push(this.mapping[g]);
            c = h.groupBy(this.statData, q);
            e = this._getIdFunc();
            this.geoms = {};
            n = [];
            for (g in c) {
                b =
                c[g];
                k = b[0];
                d = {};
                l = 0;
                for (m = q.length; l < m; l++)
                    j = q[l], d[j] = {
                    "in": [k[j]]
                };
                j = this._fillZeros(b, a);
                b = j.x;
                j = j.y;
                n.push(this.geoms[e(k)] = {
                    marks: {
                        "0": {
                            type: "line",
                            x: b,
                            y: j,
                            color: this._getValue(k, "color"),
                            opacity: this._getValue(k, "opacity"),
                            size: this._getValue(k, "size")
                        }
                    },
                    evtData: d
                })
            }
            return n
        };
        pd = Aa;
        var ja = function() {
            return ja.__super__.constructor.apply(this, arguments)
        };
        R(ja, t);
        ja.prototype._calcGeoms = function() {
            var a, b;
            if (this.mapping.x && (a = this.meta[this.mapping.x], "cat" !== a.type&&!a.binned && "num" === a.type &&
            null == this.guideSpec.x.bw))
                throw h.error.type("Bar chart x-values need to be binned. Set binwidth or use the bin() transform!");
            this.position = null != (b = this.spec.position) ? b : "stack";
            if ("stack" === this.position)
                return this._calcGeomsStack();
            if ("dodge" === this.position)
                return this._calcGeomsDodge();
            throw h.error.defn("Bar chart position " + this.position + " is unknown.");
        };
        ja.prototype._calcGeomsDodge = function() {
            var a, b, c, d, e, f, g, h, k, l;
            a = null != this.mapping.x ? [this.mapping.x] : [];
            this._dodge(a);
            this._stack(a.concat("$n"));
            this.geoms = {};
            b = this._getIdFunc();
            k = this.statData;
            l = [];
            g = 0;
            for (h = k.length; g < h; g++) {
                c = k[g];
                a = {};
                for (d in c)
                    e = c[d], "y" !== d && (a[d] = {
                    "in": [e]
                });
                e = r.lower(this._getValue(c, "x"), c.$n, c.$m);
                f = r.upper(this._getValue(c, "x"), c.$n, c.$m);
                l.push(this.geoms[b(c)] = {
                    marks: {
                        "0": {
                            type: "rect",
                            x: [e, f],
                            y: [c.$lower, c.$upper],
                            color: this._getValue(c, "color"),
                            opacity: this._inLevels(c) ? this._getValue(c, "opacity"): 0
                        }
                    },
                    evtData: a,
                    tooltip: this._tooltip(c)
                })
            }
            return l
        };
        ja.prototype._calcGeomsStack = function() {
            var a, b, c, d, e, f, g, h,
            k;
            this._stack(null != this.mapping.x ? [this.mapping.x] : []);
            b = this._getIdFunc();
            this.geoms = {};
            h = this.statData;
            k = [];
            f = 0;
            for (g = h.length; f < g; f++) {
                c = h[f];
                a = {};
                for (d in c)
                    e = c[d], "y" !== d && (a[d] = {
                    "in": [e]
                });
                k.push(this.geoms[b(c)] = {
                    marks: {
                        "0": {
                            type: "rect",
                            x: [r.lower(this._getValue(c, "x")), r.upper(this._getValue(c, "x"))],
                            y: [c.$lower, c.$upper],
                            color: this._getValue(c, "color"),
                            opacity: this._inLevels(c) ? this._getValue(c, "opacity"): 0
                        }
                    },
                    evtData: a,
                    tooltip: this._tooltip(c)
                })
            }
            return k
        };
        nd = ja;
        var hb = function() {
            return hb.__super__.constructor.apply(this,
            arguments)
        };
        R(hb, t);
        hb.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, j, k, l, m, n, q, p, s;
            n = this.statData;
            d = [];
            a = 0;
            for (b = n.length; a < b; a++)
                g = n[a], h.isDefined(this._getValue(g, "y")) && h.isDefined(k = this._getValue(g, "x")) && d.push(k);
            a = _.uniq(d);
            b = {};
            n = 0;
            for (d = a.length; n < d; n++)
                k = a[n], b[k] = 0;
            f = _.without(_.keys(this.mapping), "x", "y");
            n = [];
            d = 0;
            for (e = f.length; d < e; d++)
                j = f[d], n.push(this.mapping[j]);
            d = h.groupBy(this.statData, n);
            f = this._getIdFunc();
            this.geoms = {};
            s = [];
            for (j in d) {
                c = d[j];
                l = c[0];
                e = {};
                m = 0;
                for (g = n.length; m <
                g; m++)
                    k = n[m], e[k] = {
                    "in": [l[k]]
                };
                q = g = m = void 0;
                q = [];
                m = 0;
                for (g = a.length; m < g; m++)
                    k = a[m], q.push(b[k]);
                m = q;
                q = 0;
                for (p = c.length; q < p; q++)
                    g = c[q], k = this._getValue(g, "x"), g = this._getValue(g, "y"), b[k] += g;
                q = g = c = void 0;
                q = [];
                c = 0;
                for (g = a.length; c < g; c++)
                    k = a[c], q.push(b[k]);
                k = q;
                s.push(this.geoms[f(l)] = {
                    marks: {
                        "0": {
                            type: "area",
                            x: a,
                            y: {
                                bottom: m,
                                top: k
                            },
                            color: this._getValue(l, "color"),
                            opacity: this._getValue(l, "opacity")
                        }
                    },
                    evtData: e
                })
            }
            return s
        };
        md = hb;
        var ib = function() {
            return ib.__super__.constructor.apply(this, arguments)
        };
        R(ib, t);
        ib.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, h, k;
            b = this._getIdFunc();
            this.geoms = {};
            h = this.statData;
            k = [];
            f = 0;
            for (g = h.length; f < g; f++) {
                c = h[f];
                a = {};
                for (d in c)
                    e = c[d], a[d] = {
                    "in": [e]
                };
                k.push(this.geoms[b(c)] = {
                    marks: {
                        "0": {
                            type: "text",
                            x: this._getValue(c, "x"),
                            y: this._getValue(c, "y"),
                            text: this._getValue(c, "text"),
                            color: this._getValue(c, "color"),
                            size: this._getValue(c, "size"),
                            opacity: this._getValue(c, "opacity"),
                            "text-anchor": "center"
                        }
                    },
                    evtData: a
                })
            }
            return k
        };
        ud = ib;
        var jb = function() {
            return jb.__super__.constructor.apply(this,
            arguments)
        };
        R(jb, t);
        jb.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, h, k;
            b = this._getIdFunc();
            this.geoms = {};
            h = this.statData;
            k = [];
            f = 0;
            for (g = h.length; f < g; f++) {
                c = h[f];
                a = {};
                this._getValue(c, "x");
                this._getValue(c, "y");
                for (d in c)
                    e = c[d], "y" !== d && "x" !== d && (a[d] = {
                    "in": [e]
                });
                k.push(this.geoms[b(c)] = {
                    marks: {
                        "0": {
                            type: "rect",
                            x: [r.lower(this._getValue(c, "x")), r.upper(this._getValue(c, "x"))],
                            y: [r.lower(this._getValue(c, "y")), r.upper(this._getValue(c, "y"))],
                            color: this._getValue(c, "color"),
                            size: this._getValue(c,
                            "size"),
                            opacity: this._getValue(c, "opacity")
                        }
                    },
                    evtData: a,
                    tooltip: this._tooltip(c)
                })
            }
            return k
        };
        vd = jb;
        var kb = function() {
            return kb.__super__.constructor.apply(this, arguments)
        };
        R(kb, t);
        kb.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, h, k, l, m, n, q, p, s, u;
            c = this._getIdFunc();
            this.geoms = {};
            p = this.statData;
            u = [];
            n = 0;
            for (q = p.length; n < q; n++) {
                e = p[n];
                b = {};
                for (f in e)
                    a = e[f], "y" !== f && (b[f] = {
                    "in": [a]
                });
                k = this._getValue(e, "x");
                m = this._getValue(e, "y");
                a = this._getValue(e, "color");
                d = this._getValue(e, "size");
                g = this._inLevels(e) ?
                this._getValue(e, "opacity") : 0;
                h = r.lower(k);
                l = r.upper(k);
                k = r.middle(k);
                b = {
                    marks: {},
                    evtData: b
                };
                m.q1 && (b.marks = {
                    iqr: {
                        type: "rect",
                        x: [h, l],
                        y: [m.q2, m.q4],
                        stroke: a,
                        color: r.identity("white"),
                        size: d,
                        opacity: g,
                        "stroke-width": "1px"
                    },
                    q1: {
                        type: "pline",
                        x: [h, l],
                        y: [m.q1, m.q1],
                        color: a,
                        size: d,
                        opacity: g
                    },
                    lower: {
                        type: "pline",
                        x: [k, k],
                        y: [m.q1, m.q2],
                        color: a,
                        size: d,
                        opacity: g
                    },
                    q5: {
                        type: "pline",
                        x: [h, l],
                        y: [m.q5, m.q5],
                        color: a,
                        size: d,
                        opacity: g
                    },
                    upper: {
                        type: "pline",
                        x: [k, k],
                        y: [m.q4, m.q5],
                        color: a,
                        size: d,
                        opacity: g
                    },
                    middle: {
                        type: "pline",
                        x: [h, l],
                        y: [m.q3, m.q3],
                        color: a,
                        size: d,
                        opacity: g
                    }
                });
                s = m.outliers;
                d = l = 0;
                for (m = s.length; l < m; d=++l)
                    h = s[d], b.marks[d] = {
                    type: "circle",
                    x: k,
                    y: h,
                    color: a,
                    size: r.identity(3),
                    opacity: g
                };
                u.push(this.geoms[c(e)] = b)
            }
            return u
        };
        od = kb;
        var Ba = function() {
            return Ba.__super__.constructor.apply(this, arguments)
        };
        R(Ba, t);
        Ba.prototype.defaults = {
            x: r.novalue(),
            y: r.novalue(),
            color: "steelblue",
            size: 2,
            opacity: 0.9,
            shape: 1
        };
        Ba.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, j, k, l, m, n;
            a = _.uniq(function() {
                var a, b, c, d;
                c = this.statData;
                d = [];
                a = 0;
                for (b = c.length; a < b; a++)
                    f = c[a], d.push(this._getValue(f, "x"));
                return d
            }.call(this));
            var q;
            e = _.without(_.keys(this.mapping), "x", "y");
            q = [];
            c = 0;
            for (d = e.length; c < d; c++)
                g = e[c], q.push(this.mapping[g]);
            c = h.groupBy(this.statData, q);
            e = this._getIdFunc();
            this.geoms = {};
            n = [];
            for (g in c) {
                b = c[g];
                k = b[0];
                d = {};
                l = 0;
                for (m = q.length; l < m; l++)
                    j = q[l], d[j] = {
                    "in": [k[j]]
                };
                j = this._fillZeros(b, a);
                b = j.x;
                j = j.y;
                n.push(this.geoms[e(k)] = {
                    marks: {
                        "0": {
                            type: "spline",
                            x: b,
                            y: j,
                            color: this._getValue(k, "color"),
                            opacity: this._getValue(k,
                            "opacity"),
                            size: this._getValue(k, "size")
                        }
                    },
                    evtData: d
                })
            }
            return n
        };
        sd = Ba;
        var Ca = function() {
            return Ca.__super__.constructor.apply(this, arguments)
        };
        R(Ca, t);
        Ca.prototype.defaults = {
            x: r.novalue(),
            y: r.novalue(),
            color: "steelblue",
            size: 2,
            opacity: 0.9,
            shape: 1
        };
        Ca.prototype._calcGeoms = function() {
            var a, b, c, d, e, f, g, j, k, l, m, n;
            a = _.uniq(function() {
                var a, b, c, d;
                c = this.statData;
                d = [];
                a = 0;
                for (b = c.length; a < b; a++)
                    f = c[a], d.push(this._getValue(f, "x"));
                return d
            }.call(this));
            var q;
            e = _.without(_.keys(this.mapping), "x", "y");
            q =
            [];
            c = 0;
            for (d = e.length; c < d; c++)
                g = e[c], q.push(this.mapping[g]);
            c = h.groupBy(this.statData, q);
            e = this._getIdFunc();
            this.geoms = {};
            n = [];
            for (g in c) {
                b = c[g];
                k = b[0];
                d = {};
                l = 0;
                for (m = q.length; l < m; l++)
                    j = q[l], d[j] = {
                    "in": [k[j]]
                };
                j = this._fillZeros(b, a);
                b = j.x;
                j = j.y;
                n.push(this.geoms[e(k)] = {
                    marks: {
                        "0": {
                            type: "step",
                            x: b,
                            y: j,
                            color: this._getValue(k, "color"),
                            opacity: this._getValue(k, "opacity"),
                            size: this._getValue(k, "size")
                        }
                    },
                    evtData: d
                })
            }
            return n
        };
        td = Ca;
        h.layer = {};
        h.layer.Base = t;
        h.layer.classes = {
            point: rd,
            text: ud,
            line: pd,
            path: qd,
            area: md,
            bar: nd,
            tile: vd,
            box: od,
            spline: sd,
            step: td
        };
        h.layer.make = function(a, b, c) {
            var d;
            d = a.type;
            if (d in h.layer.classes)
                return new h.layer.classes[d](a, b, c);
            throw h.error.defn("No such layer " + a.type + ".");
        };
        var xd, Wd = {}.hasOwnProperty;
        h.pane = {};
        h.pane.make = function(a, b) {
            return new xd(a, b)
        };
        var S = function(a, b) {
            this.titleObj = b;
            this.index = a;
            this.title = this.layers = null
        }, Da = h.Renderable, yd = function() {
            this.constructor = S
        }, lb;
        for (lb in Da)
            Wd.call(Da, lb) && (S[lb] = Da[lb]);
        yd.prototype = Da.prototype;
        S.prototype =
        new yd;
        S.__super__ = Da.prototype;
        S.prototype.make = function(a, b, c) {
            var d, e, f, g, j;
            this.layers = c;
            if (!this.geoms) {
                this.geoms = {};
                g = this.layers;
                c = f = 0;
                for (g = g.length; f < g; c=++f)
                    this.geoms[c] = new h.Geometry
            }
            this.metas = {};
            j = this.layers;
            c = f = 0;
            for (g = j.length; f < g; c=++f)
                d = j[c], e = d.calculate(b[c].statData, b[c].metaData), d = e.geoms, e = e.meta, this.geoms[c].set(d), this.metas[c] = e;
            null == this.title && (this.title = this._makeTitle(a));
            this.title.make(this.titleObj);
            return this.domains = this._makeDomains(a, this.geoms, this.metas)
        };
        S.prototype._makeTitle = function() {
            return h.guide.title("facet")
        };
        S.prototype._makeDomains = function(a, b, c) {
            return h.domain.make(b, c, a.guides, a.strict)
        };
        S.prototype.render = function(a, b, c, d) {
            var e;
            this.title.render(a({}, !1, !1), d, b);
            b = a(b, c, !0);
            c = this.geoms;
            d = [];
            for (e in c)
                a = c[e], d.push(a.render(b));
            return d
        };
        S.prototype.dispose = function(a) {
            var b, c, d;
            d = this.geoms;
            for (c in d)
                b = d[c], b.dispose(a);
            this.geoms = {};
            return this.title.dispose(a)
        };
        xd = S;
        h.dim = {};
        h.dim.make = function(a, b, c) {
            var d, e, f, g, h, k, l, m;
            a = {
                width: null !=
                (e = a.width) ? e: 400,
                height: null != (f = a.height) ? f: 400,
                paddingLeft: null != (g = a.paddingLeft) ? g: 10,
                paddingRight: null != (d = a.paddingRight) ? d: 10,
                paddingTop: null != (h = a.paddingTop) ? h: 10,
                paddingBottom: null != (k = a.paddingBottom) ? k: 10,
                horizontalSpacing: null != (l = a.horizontalSpacing) ? l: 10,
                verticalSpacing: null != (m = a.verticalSpacing) ? m: 20,
                guideTop: 10,
                guideRight: 0,
                guideLeft: 5,
                guideBottom: 5
            };
            d = b.axesOffset(a);
            e = d.left;
            f = d.right;
            g = d.top;
            d = d.bottom;
            a.guideLeft += null != e ? e : 0;
            a.guideRight += null != f ? f : 0;
            a.guideBottom += null != d ?
            d : 0;
            a.guideTop += null != g ? g : 0;
            d = b.titleOffset(a);
            e = d.left;
            f = d.right;
            g = d.top;
            d = d.bottom;
            a.guideLeft += null != e ? e : 0;
            a.guideRight += null != f ? f : 0;
            a.guideBottom += null != d ? d : 0;
            a.guideTop += null != g ? g : 0;
            b = b.legendOffset(a);
            e = b.left;
            f = b.right;
            g = b.top;
            d = b.bottom;
            a.guideLeft += null != e ? e : 0;
            a.guideRight += null != f ? f : 0;
            a.guideBottom += null != d ? d : 0;
            a.guideTop += null != g ? g : 0;
            b = 0.4 * a.width;
            e = 0.4 * a.height;
            a.guideLeft > b && (a.guideLeft = b);
            a.guideRight > b && (a.guideRight = b);
            a.guideTop > e && (a.guideTop = e);
            a.guideBottom > e && (a.guideBottom =
            e);
            a.chartHeight = a.height - a.paddingTop - a.paddingBottom - a.guideTop - a.guideBottom;
            a.chartWidth = a.width - a.paddingLeft - a.paddingRight - a.guideLeft - a.guideRight;
            null != c.cols && 1 < c.cols ? (a.eachWidth = a.chartWidth - a.horizontalSpacing * c.cols, a.eachWidth/=c.cols) : a.eachWidth = a.chartWidth;
            null != c.rows && 1 < c.rows ? (a.eachHeight = a.chartHeight - a.verticalSpacing * (c.rows + 1), a.eachHeight/=c.rows) : a.eachHeight = a.chartHeight - a.verticalSpacing;
            return a
        };
        h.dim.guess = function(a, b) {
            var c, d, e, f, g, h, k, l, m;
            c = {
                width: null != (d = a.width) ?
                d: 400,
                height: null != (e = a.height) ? e: 400,
                paddingLeft: null != (f = a.paddingLeft) ? f: 10,
                paddingRight: null != (g = a.paddingRight) ? g: 10,
                paddingTop: null != (h = a.paddingTop) ? h: 10,
                paddingBottom: null != (k = a.paddingBottom) ? k: 10,
                guideLeft: 30,
                guideRight: 40,
                guideTop: 10,
                guideBottom: 30,
                horizontalSpacing: null != (l = a.horizontalSpacing) ? l: 10,
                verticalSpacing: null != (m = a.verticalSpacing) ? m: 10
            };
            c.chartHeight = c.height - c.paddingTop - c.paddingBottom - c.guideTop - c.guideBottom;
            c.chartWidth = c.width - c.paddingLeft - c.paddingRight - c.guideLeft -
            c.guideRight;
            c.eachWidth = null != b.cols && 1 < b.cols ? c.chartWidth - c.horizontalSpacing * (b.cols-1) : c.chartWidth;
            c.eachHeight = null != b.rows && 1 < b.rows ? c.chartHeight - c.verticalSpacing * (b.rows-1) : c.chartHeight;
            return c
        };
        var Ob, Pb, zd, ca, Qb, Rb, Ad, Bd, Sb, Cd, Tb, Ea, Xd = {}.hasOwnProperty, O = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                Xd.call(b, d) && (a[d] = b[d]);
            c.prototype = b.prototype;
            a.prototype = new c;
            a.__super__ = b.prototype;
            return a
        };
        h.paper = function(a, b, c, d) {
            if (!("undefined" !== typeof Raphael && null !==
            Raphael))
                throw h.error.depn("The dependency Raphael is not included.");
            a = Raphael(a, b, c);
            b = a.rect(0, 0, b, c).attr({
                fill: "white",
                opacity: 0,
                "stroke-width": 0
            });
            b.click(d.handleEvent("reset"));
            h.mouseEvents(d, b, !1);
            return a
        };
        h.mouseEvents = function(a, b, c) {
            var d, e, f, g, j, k;
            f = a.handleEvent("select");
            c && (g = null);
            k = e = j = d = null;
            return b.drag(function(b, f, n, q) {
                if (null != k && null != j) {
                    if (d = {
                        x: j.x + b,
                        y: j.y + f
                    }, e = a.facet.getFacetInfo(a.dims, d.x, d.y)
                        , null != g && null != e && e.col === k.col && e.row === k.row && c)return n = {
                        x: Math.min(j.x,
                        d.x),
                        y: Math.min(j.y, d.y),
                        width: Math.abs(j.x - d.x),
                        height: Math.abs(j.y - d.y)
                    }, g = g.attr(n)
                } else if (b = h.offset(a.dom), j = {
                    x : n - b.left, y : q - b.top
                }, k = a.facet.getFacetInfo(a.dims, j.x, j.y)
                    , null != k && c)return g = a.paper.rect(j.x, j.y, 0, 0, 2), g = g.attr({
                    fill: "black",
                    opacity: 0.2
                })
            }, function() {
                return d = j = null
            }, function() {
                if (null != j && null != d)
                    return null != g && c && (g = g.hide(), g.remove()), f({
                    start: j,
                    end: d
                })
            })
        };
        h.render = function(a, b, c, d) {
            return function(e, f, g) {
                null == e && (e = {});
                null == f && (f=!1);
                null == g && (g=!0);
                if (null == d.type)
                    throw h.error.unknown("Coordinate don't have at type?");
                if (null == Ea[d.type])
                    throw h.error.input("Unknown coordinate type " + d.type);
                return {
                    add: function(j, k, l, m) {
                        var n;
                        if (null == Ea[d.type][j.type])
                            throw h.error.input("Coord " + d.type + " has no mark " + j.type);
                        n = Ea[d.type][j.type].render(b, c, d, e, j, g);
                        n.data("m", j);
                        k && 0 < _.keys(k).length && n.data("e", k);
                        l && n.data("t", l);
                        null != f && n.attr("clip-rect", f);
                        "guide" === m ? n.click(a("guide-click")) : (n.click(a("click")), n.hover(a("mover"), a("mout")));
                        return n
                    },
                    remove: function(a) {
                        return a.remove()
                    },
                    animate: function(a, b, h, m) {
                        Ea[d.type][b.type].animate(a,
                        c, d, e, b, g);
                        null != f && a.attr("clip-rect", f);
                        h && 0 < _.keys(h).length && a.data("e", h);
                        m && a.data("t", m);
                        a.data("m", b);
                        return a
                    }
                }
            }
        };
        var x = function() {};
        x.prototype.render = function(a, b, c, d, e, f) {
            var g;
            a = this._make(a);
            c = this.attr(b, c, d, e, f);
            for (g in c)
                b = c[g], a.attr(g, b);
            return a
        };
        x.prototype._make = function() {
            throw h.error.impl();
        };
        x.prototype.animate = function(a, b, c, d, e, f) {
            return a.animate(this.attr(b, c, d, e, f), 300)
        };
        x.prototype.attr = function() {
            throw h.error.impl();
        };
        x.prototype._cantRender = function() {
            throw h.error.missingdata();
        };
        x.prototype._makePath = function(a, b, c) {
            null == c && (c = "L");
            switch (c) {
            case "spline":
                a = _.map(a, function(a, c) {
                    return (0 === c ? "M " + a + " " + b[c] + " R " : "") + ("" + a + " " + b[c])
                });
                break;
            case "step":
                a = _.map(a, function(a, c) {
                    return 0 === c ? "M " + a + " " + b[c] : "L " + a + " " + b[c-1] + " " + a + " " + b[c]
                });
                break;
            default:
                a = _.map(a, function(a, e) {
                    return (0 === e ? "M" : c) + a + " " + b[e]
                })
            }
            return a.join(" ")
        };
        x.prototype._maybeApply = function(a, b, c) {
            b = b[c];
            return _.isObject(b) && "identity" === b.f ? b.v : null != a[c] ? a[c].f(b) : b
        };
        x.prototype._applyOffset = function(a,
        b, c) {
            var d;
            if (!c)
                return {
                    x: a,
                    y: b
                };
            null == c.x && (c.x = 0);
            null == c.y && (c.y = 0);
            if (_.isArray(a)) {
                var e, f, g;
                g = [];
                e = 0;
                for (f = a.length; e < f; e++)
                    d = a[e], g.push(d + c.x);
                d = g
            } else 
                d = a + c.x;
            a = d;
            if (_.isArray(b)) {
                g = [];
                e = 0;
                for (f = b.length; e < f; e++)
                    d = b[e], g.push(d + c.y);
                b = g
            } else 
                b += c.y;
            return {
                x: a,
                y: b
            }
        };
        x.prototype._shared = function(a, b, c) {
            var d, e = this;
            d = function(d) {
                if (null != b[d] && null == c[d])
                    return c[d] = e._maybeApply(a, b, d)
            };
            d("opacity");
            d("stroke-width");
            d("stroke-dasharray");
            d("stroke-dashoffset");
            d("transform");
            d("font-size");
            d("font-weight");
            d("font-family");
            return c
        };
        x.prototype._checkPointUndefined = function(a, b, c) {
            null == c && (c = "Point");
            if (void 0 === a || void 0 === b)
                throw h.error.missing("" + c + " cannot be plotted due to undefined data.");
        };
        x.prototype._checkArrayUndefined = function(a, b, c) {
            var d;
            null == c && (c = "Line");
            if (_.all(function() {
                var c, f, g;
                g = [];
                d = c = 0;
                for (f = a.length-1; 0 <= f ? c <= f : c >= f; d = 0 <= f?++c : --c)
                    g.push(void 0 === a[d] || void 0 === b[d]);
                return g
            }())
                )throw h.error.missing("" + c + " cannot be plotted due to too many missing points.");
        };
        x.prototype._checkArrayNaN = function(a, b) {
            var c, d;
            d = _.map(_.zip(a, b), function(a) {
                return isNaN(a[0]) || isNaN(a[1]) ? void 0 : a
            });
            var e, f, g;
            g = [];
            e = 0;
            for (f = d.length; e < f; e++)
                c = d[e], null != c && g.push(c[0]);
            var h;
            h = [];
            e = 0;
            for (f = d.length; e < f; e++)
                c = d[e], null != c && h.push(c[1]);
            return {
                x: g,
                y: h
            }
        };
        var mb = function() {
            return mb.__super__.constructor.apply(this, arguments)
        };
        O(mb, x);
        mb.prototype.animate = function(a, b, c, d, e, f) {
            var g, h;
            h = a.data("m");
            g = this.attr(b, c, d, e, f);
            if (_.isEqual(h.x, e.x))
                return a.animate(g, 300);
            b = this.attr(b,
            c, d, h, f);
            return a.animate(b, 300, function() {
                return a.attr(g)
            })
        };
        Rb = mb;
        var Fa = function() {
            return Fa.__super__.constructor.apply(this, arguments)
        };
        O(Fa, x);
        Fa.prototype._make = function(a) {
            return a.circle()
        };
        Fa.prototype.attr = function(a, b, c, d, e) {
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkPointUndefined(b, e, "Circle");
            c = this._applyOffset(b, e, c);
            b = c.x;
            e = c.y;
            c = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            c = {
                cx: b,
                cy: e,
                r: this._maybeApply(a, d, "size"),
                stroke: c
            };
            if ((b = this._maybeApply(a, d, "color")) && "none" !== b)
                c.fill =
                b;
            return this._shared(a, d, c)
        };
        Pb = Fa;
        var Ga = function() {
            return Ga.__super__.constructor.apply(this, arguments)
        };
        O(Ga, x);
        Ga.prototype._make = function(a) {
            return a.path()
        };
        Ga.prototype.attr = function(a, b, c, d, e) {
            var f;
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkArrayUndefined(b, e, "Path");
            c = this._applyOffset(b, e, c);
            b = c.x;
            e = c.y;
            f = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            c = this._maybeApply(a, d, d.size ? "size" : "stroke-width");
            return this._shared(a, d, {
                path: this._makePath(b, e),
                stroke: f,
                "stroke-width": c
            })
        };
        Qb = Ga;
        var Ha = function() {
            return Ha.__super__.constructor.apply(this, arguments)
        };
        O(Ha, Rb);
        Ha.prototype._make = function(a) {
            return a.path()
        };
        Ha.prototype.attr = function(a, b, c, d, e) {
            var f, g;
            f = h.sortArrays(a.x.compare, [d.x, d.y]);
            d.x = f[0];
            d.y = f[1];
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkArrayUndefined(b, e, "Line");
            f = 0;
            for (g = b.length; f < g; ++f);
            c = this._applyOffset(b, e, c);
            b = c.x;
            e = c.y;
            c = this._checkArrayNaN(b, e);
            b = c.x;
            e = c.y;
            f = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            c = this._maybeApply(a, d, d.size ? "size" : "stroke-width");
            return this._shared(a, d, {
                path: this._makePath(b, e),
                stroke: f,
                "stroke-width": c
            })
        };
        ca = Ha;
        var nb = function() {
            return nb.__super__.constructor.apply(this, arguments)
        };
        O(nb, ca);
        nb.prototype.attr = function(a, b, c, d, e) {
            var f, g, j, k, l;
            k = b.getXY(e, d);
            e = k.x;
            l = k.y;
            b = k.r;
            k = k.t;
            this._checkArrayUndefined(e, l, "Line");
            l = this._applyOffset(e, l, c);
            e = l.x;
            l = l.y;
            var m, n;
            if (_.max(b) - _.min(b) < h["const"].epsilon) {
                b = b[0];
                c = "M " + e[0] + " " + l[0];
                g = m = 1;
                for (n = e.length-1; 1 <= n ? m <= n : m >= n; g = 1 <= n?++m : --m)
                    j = Math.abs(k[g] - k[g-1]) > Math.PI ? 1 : 0,
                f = 0 < k[g] - k[g-1] ? 1 : 0, c += "A " + b + " " + b + " 0 " + j + " " + f + " " + e[g] + " " + l[g]
            } else 
                c = this._makePath(e, l);
            b = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            return this._shared(a, d, {
                path: c,
                stroke: b
            })
        };
        Ad = nb;
        var Ia = function() {
            return Ia.__super__.constructor.apply(this, arguments)
        };
        O(Ia, Rb);
        Ia.prototype._make = function(a) {
            return a.path()
        };
        Ia.prototype.attr = function(a, b, c, d, e) {
            var f, g, j;
            f = h.sortArrays(a.x.compare, [d.x, d.y.top]);
            g = f[0];
            j = f[1];
            f = b.getXY(e, {
                x: g,
                y: j
            });
            f = this._applyOffset(f.x, f.y, c);
            j = h.sortArrays(function(b,
            c) {
                return - a.x.compare(b, c)
            }, [d.x, d.y.bottom]);
            g = j[0];
            j = j[1];
            b = b.getXY(e, {
                x: g,
                y: j
            });
            b = this._applyOffset(b.x, b.y, c);
            g = f.x.concat(b.x);
            j = f.y.concat(b.y);
            return this._shared(a, d, {
                path: this._makePath(g, j),
                stroke: this._maybeApply(a, d, "color"),
                fill: this._maybeApply(a, d, "color"),
                "stroke-width": "0px"
            })
        };
        Ob = Ia;
        var Ja = function() {
            return Ja.__super__.constructor.apply(this, arguments)
        };
        O(Ja, x);
        Ja.prototype._make = function(a) {
            return a.rect()
        };
        Ja.prototype.attr = function(a, b, c, d, e) {
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkPointUndefined(b[0],
            e[0], "Bar");
            this._checkPointUndefined(b[1], e[1], "Bar");
            c = this._applyOffset(b, e, c);
            b = c.x;
            e = c.y;
            c = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            return this._shared(a, d, {
                x: _.min(b),
                y: _.min(e),
                width: Math.abs(b[1] - b[0]),
                height: Math.abs(e[1] - e[0]),
                fill: this._maybeApply(a, d, "color"),
                stroke: c,
                "stroke-width": this._maybeApply(a, d, "stroke-width")
            })
        };
        Bd = Ja;
        var Ka = function() {
            return Ka.__super__.constructor.apply(this, arguments)
        };
        O(Ka, x);
        Ka.prototype._make = function(a) {
            return a.path()
        };
        Ka.prototype.attr = function(a,
        b, c, d, e) {
            var f, g, h, k;
            f = d.x;
            g = f[0];
            f = f[1];
            k = d.y;
            h = k[0];
            k = k[1];
            this._checkPointUndefined(g, h, "Bar");
            this._checkPointUndefined(f, k, "Bar");
            d.x = [g, g, f, f];
            d.y = [h, k, k, h];
            f = b.getXY(e, d);
            g = f.x;
            h = f.y;
            e = f.r;
            f = f.t;
            c = this._applyOffset(g, h, c);
            g = c.x;
            h = c.y;
            b.flip && (g.push(g.splice(0, 1)[0]), h.push(h.splice(0, 1)[0]), e.push(e.splice(0, 1)[0]), f.push(f.splice(0, 1)[0]));
            c = Math.abs(f[1] - f[0]) > Math.PI ? 1 : 0;
            b = "M " + g[0] + " " + h[0] + " A " + e[0] + " " + e[0] + " 0 " + c + " 1 " + g[1] + " " + h[1];
            c = Math.abs(f[3] - f[2]) > Math.PI ? 1 : 0;
            b += "L " + g[2] +
            " " + h[2] + " A " + e[2] + " " + e[2] + " 0 " + c + " 0 " + g[3] + " " + h[3] + " Z";
            c = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            return this._shared(a, d, {
                path: b,
                fill: this._maybeApply(a, d, "color"),
                stroke: c,
                "stroke-width": this._maybeApply(a, d, "stroke-width")
            })
        };
        zd = Ka;
        var La = function() {
            return La.__super__.constructor.apply(this, arguments)
        };
        O(La, x);
        La.prototype._make = function(a) {
            return a.text()
        };
        La.prototype.attr = function(a, b, c, d, e) {
            var f;
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkPointUndefined(b, e, "Text");
            c = this._applyOffset(b,
            e, c);
            b = c.x;
            e = c.y;
            return this._shared(a, d, {
                x: b,
                y: e,
                r: 10,
                text: this._maybeApply(a, d, "text"),
                "font-size": this._maybeApply(a, d, "size"),
                "text-anchor": null != (f = d["text-anchor"]) ? f: "left",
                fill: this._maybeApply(a, d, "color") || "black"
            })
        };
        Tb = La;
        var ob = function() {
            return ob.__super__.constructor.apply(this, arguments)
        };
        O(ob, ca);
        ob.prototype.attr = function(a, b, c, d, e) {
            var f, g;
            f = h.sortArrays(a.x.compare, [d.x, d.y]);
            d.x = f[0];
            d.y = f[1];
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkArrayUndefined(b, e, "Spline");
            f = 0;
            for (g = b.length; f <
            g; ++f);
            c = this._applyOffset(b, e, c);
            b = c.x;
            e = c.y;
            c = this._checkArrayNaN(b, e);
            b = c.x;
            e = c.y;
            f = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            c = this._maybeApply(a, d, d.size ? "size" : "stroke-width");
            return this._shared(a, d, {
                path: this._makePath(b, e, "spline"),
                stroke: f,
                "stroke-width": c
            })
        };
        Sb = ob;
        var Ma = function() {
            return Ma.__super__.constructor.apply(this, arguments)
        };
        O(Ma, ca);
        Ma.prototype._make = function(a) {
            return a.path()
        };
        Ma.prototype.attr = function(a, b, c, d, e) {
            var f, g;
            f = h.sortArrays(a.x.compare, [d.x, d.y]);
            d.x = f[0];
            d.y = f[1];
            e = b.getXY(e, d);
            b = e.x;
            e = e.y;
            this._checkArrayUndefined(b, e, "Spline");
            f = 0;
            for (g = b.length; f < g; ++f);
            c = this._applyOffset(b, e, c);
            b = c.x;
            e = c.y;
            c = this._checkArrayNaN(b, e);
            b = c.x;
            e = c.y;
            f = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
            c = this._maybeApply(a, d, d.size ? "size" : "stroke-width");
            return this._shared(a, d, {
                path: this._makePath(b, e, "step"),
                stroke: f,
                "stroke-width": c
            })
        };
        Cd = Ma;
        Ea = {
            cartesian: {
                circle: new Pb,
                line: new ca,
                pline: new ca,
                area: new Ob,
                path: new Qb,
                text: new Tb,
                rect: new Bd,
                spline: new Sb,
                step: new Cd
            },
            polar: {
                circle: new Pb,
                path: new Qb,
                line: new ca,
                pline: new Ad,
                area: new Ob,
                text: new Tb,
                rect: new zd,
                spline: new Sb
            }
        };
        var Yd = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        h.handler = {};
        h.handler.tooltip = function() {
            var a, b, c;
            b = {};
            a = null;
            c = function(b) {
                return function(c) {
                    var f, g, j;
                    f = h.getXY(a, c);
                    if (b.text.getBBox())
                        return c = b.text.getBBox(), c = c.height, b.text.attr({
                        x: f.x,
                        y: Math.max(0, f.y-5 - c)
                    }), c = b.text.getBBox(), g = c.x, j = c.y, f = c.width, c = c.height, b.box.attr({
                        x: Math.max(0,
                        g-5),
                        y: Math.max(0, j-5),
                        width: f + 10,
                        height: c + 10
                    })
                }
            };
            return function(d, e, f, g) {
                var j, k;
                a = h.offset(g.dom);
                g = e.paper;
                if ("mover" === d || "mout" === d)
                    return null != b.text && (b.text.remove(), b.box.remove()), b = {}, "mover" === d && e.tooltip ? (e.getBBox(), f = h.getXY(a, f), d = f.x, f = f.y, b.text = g.text(d, f, e.tooltip).attr({
                    "text-anchor" : "middle", fill: "white"
                }), d = b.text.getBBox(), d = d.height, b.text.attr({
                    y: f - d-10
                }), d = b.text.getBBox(), j = d.x, k = d.y, f = d.width, d = d.height, b.box = g.rect(j-5, k-5, f + 10, d + 10, 5), b.box.attr({
                    fill: "#213"
                }), b.text.toFront(),
                e.mousemove(c(b))) : "function" === typeof e.unmousemove ? e.unmousemove(null) : void 0
            }
        };
        h.handler.drilldown = function(a, b, c) {
            var d, e;
            null == c && (c = {});
            if (!_.isArray(b))
                throw h.error.input("Parameter `levels` should be an array.");
            if (0 > Yd.call(h["const"].aes, a))
                throw h.error.input("Unknown aesthetic " + a + ".");
            d = 0;
            e = [c];
            return function(c, g, h, k) {
                var l, m;
                if ("reset" === c && 0 < d) {
                    g = k.spec;
                    e.pop();
                    c = e.unshift();
                    d--;
                    m = g.layers;
                    h = 0;
                    for (l = m.length; h < l; h++)
                        g = m[h], g.filter = c, g[a] = b[d], g.id = b[d];
                    return k.make(k.spec)
                }
                if ("click" ===
                c && d < b.length-1 && (c = g.evtData, g = k.spec, h = c[b[d]])
                    ) {
                    c = {};
                    c[b[d]] = h;
                    d++;
                    c = _.extend(_.clone(e[e.length-1]), c);
                    m = g.layers;
                    h = 0;
                    for (l = m.length; h < l; h++)
                        g = m[h], g.filter = c, g[a] = b[d], g.id = b[d];
                    e.push(c);
                    return k.make(k.spec)
                }
            }
        };
        h.handler.zoom = function(a, b) {
            var c, d, e, f, g, j;
            null == b && (b = {
                x: !0,
                y: !0
            });
            if (null == a)
                throw h.error.input("Initial specification missing.");
            d = {
                x: _.clone(null != (f = a.guides) ? f.x : void 0),
                y: _.clone(null != (g = a.guides) ? g.y : void 0)
            };
            e = void 0;
            c = ["x", "y"];
            j = function(a) {
                return function(b, c, d, e) {
                    return "reset" ===
                    b ? _.isFunction(a) ? a("resetZoom", c, d, e) : a.handle("resetZoom", c, d, e) : _.isFunction(a) ? a(b, c, d, e) : a.handle(b, c, d, e)
                }
            };
            return function(a, f, g, n) {
                var p, r, s, u, t, v, w, z, x, y;
                null == e && (e = _.clone(n.handlers));
                if ("cartesian" === n.coord.type) {
                    if ("resetZoom" === a) {
                        p = n.spec;
                        r = 0;
                        for (s = c.length; r < s; r++)
                            g = c[r], p.guides[g] = _.clone(d[g]);
                        n.handlers = _.clone(e);
                        n.make(n.spec)
                    }
                    if ("select" === a) {
                        f = f.evtData;
                        p = n.spec.guides;
                        w = n.spec.layers;
                        y = [];
                        s = 0;
                        for (t = w.length; s < t; s++) {
                            r = w[s];
                            u = 0;
                            for (v = c.length; u < v; u++)
                                if (g = c[u], b[g] && null !=
                                r[g]) {
                                    a = r[g]["var"];
                                    if (("num" === (z = n.axes.domains[g].type) || "date" === z) && f[a].le - f[a].ge > h["const"].epsilon)
                                        null == p[g] && (p[g] = {
                                            min: null,
                                            max: null
                                        }), x = [f[a].ge, f[a].le], p[g].min = x[0], p[g].max = x[1];
                                        "cat" === n.axes.domains[g].type && 0 !== f[a]["in"].length && (null == p[g] && (p[g] = {
                                            levels: null
                                        }), p[g].levels = f[a]["in"])
                                }
                            n.handlers = _.map(n.handlers, j);
                            y.push(n.make(n.spec))
                        }
                        return y
                    }
                }
            }
        };
        var Dd, Zd = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
        h.facet = {};
        h.facet.make =
        function() {
            return new Dd
        };
        var I = function() {
            this.type = "none";
            this.mapping = {};
            this.specgroups = [];
            this.groups = [];
            this.panes = {};
            this.deletedPanes = []
        };
        I.prototype.make = function(a) {
            var b, c;
            this.spec = a;
            a = this._getMappings(this.spec.facet);
            this.type = a.type;
            this.mapping = c = a.mapping;
            this.groups = _.values(this.mapping);
            this.specgroups = {};
            for (b in c)
                a = c[b], this.spec.facet[b] && (this.specgroups[a] = this.spec.facet[b]);
            this.spec.facet.formatter && (this.formatter = this.spec.facet.formatter);
            this.style = {};
            this.spec.facet.size &&
            (this.style.size = this.spec.facet.size);
            if (this.spec.facet.color)
                return this.style.color = this.spec.facet.color
        };
        I.prototype.calculate = function(a, b) {
            var c, d, e, f, g;
            c = this._makeIndices(a, this.specgroups);
            this.values = c.values;
            this.indices = c.indices;
            "none" === this.type ? this.rows = this.cols = 1 : (this.cols = this.spec.facet.cols, this.rows = this.spec.facet.rows, "wrap" === this.type ? (c = this.values[this.mapping["var"]].length, !this.cols&&!this.rows && (this.cols = Math.min(3, c)), this.cols ? this.rows = Math.ceil(c / this.cols) :
            this.rows && (this.cols = Math.ceil(c / this.rows))) : (this.rows = this.mapping.y ? this.values[this.mapping.y].length : 1, this.cols = this.mapping.x ? this.values[this.mapping.x].length : 1));
            this.datas = this._groupData(a, this.indices);
            c = h.compare(_.keys(this.panes), _.keys(this.indices));
            d = c.deleted;
            c = c.added;
            f = 0;
            for (g = d.length; f < g; f++)
                e = d[f], this.deletedPanes.push(this.panes[e]), delete this.panes[e];
            f = 0;
            for (g = c.length; f < g; f++)
                e = c[f], d = this.formatter ? this.formatter(this.indices[e]) : e, this.panes[e] = h.pane.make(this.indices[e],
            _.extend({
                title: d
            }, this.style));
            c = this.indices;
            d = [];
            for (e in c)
                d.push(this.panes[e].make(this.spec, this.datas[e], b));
            return d
        };
        I.prototype.render = function(a, b, c) {
            var d, e, f, g, h, k;
            if (0 < this.deletedPanes.length) {
                d = a({}, !1, !1);
                k = this.deletedPanes;
                f = 0;
                for (h = k.length; f < h; f++)
                    g = k[f], g.dispose(d);
                this.deletedPanes = []
            }
            h = this.panes;
            k = [];
            for (e in h)
                g = h[e], f = this.getOffset(b, e), d = c.clipping(f), k.push(g.render(a, f, d, b));
            return k
        };
        I.prototype.dispose = function(a) {
            var b, c, d, e;
            d = this.panes;
            for (b in d)
                c = d[b], this.deletedPanes.push(c),
            delete this.panes[b];
            if (a) {
                e = this.deletedPanes;
                b = 0;
                for (d = e.length; b < d; b++)
                    c = e[b], c.dispose(a);
                return this.deletedPanes = []
            }
        };
        I.prototype.getGrid = function() {
            return {
                cols: this.cols,
                rows: this.rows
            }
        };
        I.prototype.getOffset = function(a, b) {
            var c;
            c = this._getRowCol(b);
            return {
                x: a.paddingLeft + a.guideLeft + (a.eachWidth + a.horizontalSpacing) * c.col,
                y: a.paddingTop + a.guideTop + (a.eachHeight + a.verticalSpacing) * c.row + a.verticalSpacing
            }
        };
        I.prototype.edge = function(a) {
            var b, c, d, e, f, g, h, k, l = this;
            if ("none" === this.type)
                return function() {
                    return !0
                };
            "grid" === this.type ? (k = function(a) {
                return _.indexOf(l.values[l.mapping.y], l.indices[a][l.mapping.y])
            }, b = function(a) {
                return _.indexOf(l.values[l.mapping.x], l.indices[a][l.mapping.x])
            }) : (b = function(a) {
                return _.indexOf(l.values[l.mapping["var"]], l.indices[a][l.mapping["var"]])%l.cols
            }, k = function(a) {
                return Math.floor(_.indexOf(l.values[l.mapping["var"]], l.indices[a][l.mapping["var"]]) / l.cols)
            });
            if ("none" === a)
                return function() {
                    return !1
                };
            if ("out" === a)
                return function() {
                    return !0
                };
            d = "top" === a || "bottom" === a ?
            b : k;
            h = "top" === a ? k : "bottom" === a ? function(a) {
                return - k(a)
            } : "left" === a ? b : "right" === a ? function(a) {
                return - b(a)
            } : void 0;
            a = {};
            for (e in this.indices)
                if (g = d(e), f = h(e)
                    , !a[g] || f < a[g].v)a[g] = {
                v: f,
                k: e
            };
            c = _.pluck(a, "k");
            return function(a) {
                return 0 <= Zd.call(c, a)
            }
        };
        I.prototype.getEvtData = function(a, b) {
            var c, d, e, f;
            e = {};
            f = this.mapping;
            for (c in f)
                d = f[c], e[d] = "x" === c || "y" === c ? {
                "in": this.values[d][a]
            } : {
                "in": this.values[d][this.rows * b + a]
            };
            return e
        };
        I.prototype.getFacetInfo = function(a, b, c, d) {
            var e, f, g;
            if (d) {
                if (!(null != d.col &&
                null != d.row))
                    throw h.error.impl("Preset rows & columns are not present.");
                e = d.col;
                g = d.row
            } else 
                e = (b - a.paddingLeft - a.guideLeft) / (a.eachWidth + a.horizontalSpacing), e = Math.floor(e), g = (c - a.paddingTop - a.guideTop - a.verticalSpacing) / (a.eachHeight + a.verticalSpacing), g = Math.floor(g);
            if (0 > e || e >= this.cols || 0 > g || g >= this.rows)
                return null;
            f = {
                x: a.paddingLeft + a.guideLeft + (a.eachWidth + a.horizontalSpacing) * e,
                y: a.paddingTop + a.guideTop + (a.eachHeight + a.verticalSpacing) * g + a.verticalSpacing
            };
            b = {
                x: b - f.x,
                y: c - f.y
            };
            if (!d && (b.x >
            a.eachWidth || b.y > a.eachHeight))
                return null;
            b.x = Math.max(Math.min(b.x, a.eachWidth), 0);
            b.y = Math.max(Math.min(b.y, a.eachHeight), 0);
            return {
                row: g,
                col: e,
                offset: f,
                adjusted: b,
                evtData: this.getEvtData(e, g)
            }
        };
        I.prototype._getMappings = function(a) {
            var b;
            b = {
                type: "none",
                mapping: {}
            };
            if (_.isObject(a))
                if ("wrap" === a.type) {
                    b.type = "wrap";
                    if (!a["var"])
                        throw h.error.defn("You didn't specify a variable to facet on.");
                        a["var"] && (b.mapping["var"] = a["var"]["var"])
                } else if ("grid" === a.type) {
                    b.type = "grid";
                    if (!a.x && a.y)
                        throw h.error.defn("You didn't specify a variable to facet on.");
                        a.x && (b.mapping.x = a.x["var"]);
                        a.y && (b.mapping.y = a.y["var"])
                }
            return b
        };
        I.prototype._makeIndices = function(a, b) {
            var c, d, e, f, g, j, k, l;
            k = {};
            for (c in b)
                if (f = b[c], f.levels)
                    k[f["var"]] = f.levels;
                else {
                    j = [];
                    for (e in a) {
                        d = a[e];
                        if (g = d.metaData[f["var"]])
                            g && ("num" === (l = g.type) || "date" === l) && h.type.compare(g.type);
                            j = _.uniq(_.union(j, _.pluck(d.statData, f["var"])))
                        }
                        k[f["var"]] = j
                }
            c = h.cross(k);
            d = {};
            e = h.stringify(_.pluck(b, "var"));
            g = 0;
            for (j = c.length; g < j; g++)
                f = c[g], d[e(f)] = f;
            return {
                values: k,
                indices: d
            }
        };
        I.prototype._groupData =
        function(a) {
            var b, c, d, e, f, g;
            b = h.groupProcessedData(a, this.groups);
            a = {};
            g = this.indices;
            for (c in g) {
                d = g[c];
                for (e = b; !0 === e.grouped;)
                    f = d[e.key], e = e.values[f];
                a[c] = e
            }
            return a
        };
        I.prototype._getRowCol = function(a) {
            var b;
            b = {
                row: 0,
                col: 0
            };
            "wrap" === this.type ? (a = this.indices[a][this.mapping["var"]], a = _.indexOf(this.values[this.mapping["var"]], a), b.col = a%this.cols, b.row = Math.floor(a / this.cols)) : "grid" === this.type && (b.row = _.indexOf(this.values[this.mapping.y], this.indices[a][this.mapping.y]), b.col = _.indexOf(this.values[this.mapping.x],
            this.indices[a][this.mapping.x]));
            return b
        };
        Dd = I;
        h.groupProcessedData = function(a, b) {
            var c, d, e, f, g, j, k, l, m;
            if (0 === b.length)
                return a;
            c = b.splice(0, 1)[0];
            j = [];
            for (e in a)
                d = a[e], c in d.metaData && (j = _.union(j, _.uniq(_.pluck(d.statData, c))));
            g = {
                grouped: !0,
                key: c,
                values: {}
            };
            l = 0;
            for (m = j.length; l < m; l++) {
                k = j[l];
                f = {};
                for (e in a)
                    d = a[e], f[e] = {
                    metaData: d.metaData
                }, f[e].statData = c in d.metaData ? h.filter(d.statData, c, k) : _.clone(d.statData);
                g.values[k] = h.groupProcessedData(f, _.clone(b))
            }
            return g
        };
        var Na = function(a,
        b) {
            return function() {
                return a.apply(b, arguments)
            }
        }, $d = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        }, L = function(a) {
            this.handleEvent = Na(this.handleEvent, this);
            this.render = Na(this.render, this);
            this.mergeDomains = Na(this.mergeDomains, this);
            this.merge = Na(this.merge, this);
            this.maybeDispose = Na(this.maybeDispose, this);
            if (null == a)
                throw h.error.defn("No graph specification is passed in!");
            this.handlers = [];
            this.coord = this.paper = this.dims = this.legends = this.axes =
            this.scaleSet = null;
            this.facet = h.facet.make();
            this.dataSubscribed = [];
            this.make(a);
            this.addHandler(h.handler.tooltip())
        };
        L.prototype.maybeDispose = function(a) {
            var b;
            b = h.render(this.handleEvent, this.paper, this.scaleSet.scales, this.coord);
            b = b();
            if (this.coord&&!_.isEqual(this.coord.spec, a.coord))
                return this.scaleSet && (this.scaleSet.disposeGuides(b), this.scaleSet = null), this.coord = null
        };
        L.prototype.make = function(a, b) {
            var c, d, e, f, g, j, k = this;
            this.callback = b;
            null != a ? (a = h.spec.toStrictMode(a), h.spec.check(a),
            this.spec = a) : a = this.spec;
            this.scaleSet && this.maybeDispose(a);
            null == this.coord && (this.coord = h.coord.make(this.spec.coord));
            this.facet.make(a);
            d = this.handleEvent("data");
            var l;
            j = a.layers;
            l = [];
            e = c = 0;
            for (g = j.length; c < g; e=++c)
                e = j[e], l.push(e.data);
            e = _.difference(l, this.dataSubscribed);
            g = 0;
            for (j = e.length; g < j; g++)
                c = e[g], c.subscribe(d);
            this.dataSubscribed = l;
            f = _.after(a.layers.length, this.merge);
            this.dataprocess = {};
            this.processedData = {};
            return _.each(a.layers, function(b, c) {
                var d;
                a = k.spec.layers[c];
                d = _.values(k.facet.specgroups);
                k.dataprocess[c] = new h.DataProcess(a, d, a.strict);
                return k.dataprocess[c].make(a, d, function(a, b) {
                    k.processedData[c] = {
                        statData: a,
                        metaData: b
                    };
                    return f()
                })
            })
        };
        L.prototype.merge = function() {
            var a = this;
            this.layers = _.map(this.spec.layers, function(b) {
                return h.layer.make(b, a.spec.strict, a.spec.guides)
            });
            this.facet.calculate(this.processedData, this.layers);
            this.mergeDomains();
            return this.render()
        };
        L.prototype.mergeDomains = function() {
            var a, b, c;
            a = _.map(this.facet.panes, function(a) {
                return a.domains
            });
            a = h.domain.merge(a);
            this.scaleSet || (b = h.dim.guess(this.spec, this.facet.getGrid()), this.coord.make(b), c = this.coord.ranges(), this.scaleSet = h.scaleset(c, this.coord));
            this.scaleSet.make(this.spec.guides, a, this.layers);
            this.dims = this._makeDimensions(this.spec, this.scaleSet, this.facet, b);
            this.coord.make(this.dims);
            this.ranges = this.coord.ranges();
            return this.scaleSet.setRanges(this.ranges)
        };
        L.prototype.render = function() {
            var a, b;
            if (!(null != this.spec.render&&!1 === this.spec.render) && (a = this.scaleSet.scales, this.coord.setScales(a),
            this.scaleSet.coord = this.coord, b = this.scaleSet.makeGuides(this.spec, this.dims)
                , this.axes = b.axes, this.titles = b.titles, this.legends = b.legends, this.dom = this.spec.dom, null == this.paper && (this.paper = this._makePaper(this.dom, this.dims.width, this.dims.height, this)), a = h.render(this.handleEvent, this.paper, a, this.coord), this.facet.render(a, this.dims, this.coord), this.scaleSet.renderGuides(this.dims, a, this.facet), this.callback))return this.callback()
        };
        L.prototype.addHandler = function(a) {
            if (0 > $d.call(this.handlers,
            a))
                return this.handlers.push(a)
        };
        L.prototype.removeHandler = function(a) {
            return this.handlers.splice(_.indexOf(this.handlers, a), 1)
        };
        L.prototype.handleEvent = function(a) {
            var b;
            b = this;
            return _.throttle(function(c) {
                var d, e, f, g, h;
                if ("select" === a) {
                    e = c.start;
                    d = c.end;
                    e = b.facet.getFacetInfo(b.dims, e.x, e.y);
                    if (!e)
                        return;
                    g = e.col;
                    h = e.row;
                    f = e.adjusted;
                    e = _.clone(f);
                    f = b.facet.getFacetInfo(b.dims, d.x, d.y, {
                        col: g,
                        row: h
                    }).adjusted;
                    d = _.clone(f);
                    this.evtData = "cartesian" === b.coord.type ? b.scaleSet.fromPixels(e, d) : null
                } else if ("data" ===
                a)
                    this.evtData = {};
                else if ("reset" === a || "click" === a || "mover" === a || "mout" === a || "guide-click" === a)
                    this.tooltip = this.data("t"), this.evtData = this.data("e");
                h = b.handlers;
                f = [];
                e = 0;
                for (g = h.length; e < g; e++)
                    d = h[e], _.isFunction(d) ? f.push(d(a, this, c, b)) : f.push(d.handle(a, this, c, b));
                return f
            }, 300)
        };
        L.prototype._makeScaleSet = function() {
            var a;
            a = this.coord.ranges();
            return h.scaleset(a, this.coord)
        };
        L.prototype._makeDimensions = function(a, b, c, d) {
            b.makeGuides(a, d);
            return h.dim.make(a, b, c.getGrid())
        };
        L.prototype._makePaper =
        function(a, b, c, d) {
            return h.paper(a, b, c, d)
        };
        h.chart = function(a) {
            return new L(a)
        }
    }
    return {
        data: h.data,
        chart: h.chart,
        handler: h.handler,
        debug: h
    }
}(window.polyjs);


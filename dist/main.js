!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 4));
})([
  function (t, e, n) {
    var r = n(1);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[t.i, r, ""]]);
    var o = { insert: "head", singleton: !1 };
    n(3)(r, o);
    r.locals && (t.exports = r.locals);
  },
  function (t, e, n) {
    (e = n(2)(!1)).push([
      t.i,
      ".button,.button-blue,.button-red{padding:5px;margin-top:30px;border-radius:10px}.button-red{background:linear-gradient(90deg, #800026, #ff00a6, yellow)}.button-blue{background:linear-gradient(90deg, #00b7ff, blue, #800062)}body{background:#00ff4c}",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n = t[1] || "",
                r = t[3];
              if (!r) return n;
              if (e && "function" == typeof btoa) {
                var o =
                    ((i = r),
                    (u = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (c =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        u
                      )),
                    "/*# ".concat(c, " */")),
                  a = r.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(t, " */");
                  });
                return [n].concat(a).concat([o]).join("\n");
              }
              var i, u, c;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = 0; r < t.length; r++) {
            var o = [].concat(t[r]);
            n &&
              (o[2] ? (o[2] = "".concat(n, " and ").concat(o[2])) : (o[2] = n)),
              e.push(o);
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o = {},
      a = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var t = {};
        return function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })();
    function u(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var a = t[o],
          i = e.base ? a[0] + e.base : a[0],
          u = { css: a[1], media: a[2], sourceMap: a[3] };
        r[i] ? r[i].parts.push(u) : n.push((r[i] = { id: i, parts: [u] }));
      }
      return n;
    }
    function c(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          a = o[r.id],
          i = 0;
        if (a) {
          for (a.refs++; i < a.parts.length; i++) a.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) a.parts.push(h(r.parts[i], e));
        } else {
          for (var u = []; i < r.parts.length; i++) u.push(h(r.parts[i], e));
          o[r.id] = { id: r.id, refs: 1, parts: u };
        }
      }
    }
    function s(t) {
      var e = document.createElement("style");
      if (void 0 === t.attributes.nonce) {
        var r = n.nc;
        r && (t.attributes.nonce = r);
      }
      if (
        (Object.keys(t.attributes).forEach(function (n) {
          e.setAttribute(n, t.attributes[n]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(e);
      else {
        var o = i(t.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(e);
      }
      return e;
    }
    var f,
      l =
        ((f = []),
        function (t, e) {
          return (f[t] = e), f.filter(Boolean).join("\n");
        });
    function d(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = l(e, o);
      else {
        var a = document.createTextNode(o),
          i = t.childNodes;
        i[e] && t.removeChild(i[e]),
          i.length ? t.insertBefore(a, i[e]) : t.appendChild(a);
      }
    }
    function p(t, e, n) {
      var r = n.css,
        o = n.media,
        a = n.sourceMap;
      if (
        (o && t.setAttribute("media", o),
        a &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = r;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(r));
      }
    }
    var b = null,
      v = 0;
    function h(t, e) {
      var n, r, o;
      if (e.singleton) {
        var a = v++;
        (n = b || (b = s(e))),
          (r = d.bind(null, n, a, !1)),
          (o = d.bind(null, n, a, !0));
      } else
        (n = s(e)),
          (r = p.bind(null, n, e)),
          (o = function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(n);
          });
      return (
        r(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            r((t = e));
          } else o();
        }
      );
    }
    t.exports = function (t, e) {
      ((e = e || {}).attributes =
        "object" == typeof e.attributes ? e.attributes : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a());
      var n = u(t, e);
      return (
        c(n, e),
        function (t) {
          for (var r = [], a = 0; a < n.length; a++) {
            var i = n[a],
              s = o[i.id];
            s && (s.refs--, r.push(s));
          }
          t && c(u(t, e), e);
          for (var f = 0; f < r.length; f++) {
            var l = r[f];
            if (0 === l.refs) {
              for (var d = 0; d < l.parts.length; d++) l.parts[d]();
              delete o[l.id];
            }
          }
        }
      );
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(0);
    console.log("$(type), bro");
  },
]);

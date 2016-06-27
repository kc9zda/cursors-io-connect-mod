(function(A, E) {
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();

function sa(f) {
  return f << 1
}

function ta(f) {
  return f << 1
}

function U() {
  return E.pointerLockElement === y || E.mozPointerLockElement === y || E.webkitPointerLockElement === y
}

function ba() {
  a.fillStyle = "#000000";
  a.font = "35px NovaSquare";
  a.fillText("Please do not embed our website, thank you.", 400 - a.measureText("Please do not embed our website, thank you.").width / 2, 300);
  a.font = "16px NovaSquare";
  a.fillText("Play the game on http://cursors.io/", 400 - a.measureText("Play the game on http://cursors.io/").width / 2, 330);
  top.location = "http://cursors.io";
  throw "Please do not embed our website, thank you.";
  }

function ua(f) {
  V(f)
}

function W(f, b) {
  J = f;
  K = b;
  k = v = f;
  q = w = b;
  B = v << 1;
  C = w << 1
}

function va(f) {
  if (D) return L = !1, V(f), !1;
  U() ? X || (X = !0, W(k, q)) : (X = !1, D || M.checked || y.requestPointerLock && y.requestPointerLock());
  if (L) L = !1, Q();
  else if (V(f), (f.ctrlKey || f.shiftKey) && !H.checked) Y = !0, R = k, S = q;
  else if (100 < t - ca && v == k && w == q) {
    ca = t;
    I.push([v << 1, w << 1, t]);
    wa(v, w);
    var b = [v, w];
    N.push(b);
    setTimeout(function() {
      N.remove(b)
    }, 1E3)
  }
  return !1
}

function xa(f) {
  Y = !1
}

function ya() {
  A.localStorage && M && (A.localStorage.setItem("noCursorLock", M.checked ? "1" : "0"), A.localStorage.setItem("noDrawings", H.checked ? "1" : "0"))
}

function V(f) {
  if (U()) {
    var b = f.webkitMovementX || f.mozMovementX || f.movementX || 0;
    f = f.webkitMovementY || f.mozMovementY || f.movementY || 0;
    300 > Math.abs(b) + Math.abs(f) && (B += b, C += f, v = B >> 1, w = C >> 1)
  } else f.offsetX ? (B = f.offsetX, C = f.offsetY) : f.layerX && (B = f.layerX, C = f.layerY), v = B >> 1, w = C >> 1;
  if (D) k = v, q = w;
  else if (Z(), !U() || v == k && w == q || (f = b = 0, v > k && (b = 1), w > q && (f = 1), v = k, w = q, B = (v << 1) + b, C = (w << 1) + f), Y && (R != k || S != q) && 50 < t - da) {
    b = R;
    f = S;
    var a = k,
        d = q;
    if (!D && null != u && u.readyState == WebSocket.OPEN) {
      var g = new ArrayBuffer(9),
          e = new DataView(g);
      e.setUint8(0, 3);
      e.setUint16(1, b, !0);
      e.setUint16(3, f, !0);
      e.setUint16(5, a, !0);
      e.setUint16(7, d, !0);
      u.send(g)
    }
    R = k;
    S = q;
    da = t
  }
}

  function Z() {
    ea(k, q) && Q();
    if (z(k, q)) {
      var a;
      a: {
        a = k;
        var b = q,
            c = [],
            d = new Uint8Array(12E4);
        c.push([a, b]);
        d[a + 400 * b] = 1;
        do {
          var g = c.shift(),
              e = g[0],
              g = g[1];
          if (!(0 > e || 0 > g || 400 <= e || 300 <= g)) {
            if (!z(e, g)) {
              a = {
                x: e,
                y: g
              };
              break a
            }
            d[e - 1 + 400 * g] || (c.push([e - 1, g]), d[e - 1 + 400 * g] = 1);
            d[e + 1 + 400 * g] || (c.push([e + 1, g]), d[e + 1 + 400 * g] = 1);
            d[e + 400 * (g - 1)] || (c.push([e, g - 1]), d[e + 400 * (g - 1)] = 1);
            d[e + 400 * (g + 1)] || (c.push([e, g + 1]), d[e + 400 * (g + 1)] = 1)
          }
        } while (0 < c.length);
        a = {
          x: a,
          y: b
        }
      }
      k = a.x;q = a.y
    }
    if (k != v || q != w) a = fa(k, q, v, w), k = a.x, q = a.y;
    ea(k, q) && Q()
  }
  function $() {
    T.set(za);
    r = [];
    I = [];
    O = []
  }
  function ga(f) {
    a.imageSmoothingEnabled = f;
    a.mozImageSmoothingEnabled = f;
    a.oImageSmoothingEnabled = f;
    a.webkitImageSmoothingEnabled = f
  }
  function Aa() {
    $();
    console.log("Connected!")
  }
  function Ba(a) {
    $();
    console.log("Socket closed: " + a.reason)
  }
  function Ca(a) {
    console.log("Socket error")
  }
  function Da(a, b) {
    for (var c = "", d = 0, g = 0; 0 != (g = a.getUint8(b)); ++b) d <<= 8, d |= g, g & 128 || (c += String.fromCharCode(d), d = 0);
    0 != d && (c += String.fromCharCode(d));
    return [c, b + 1]
  }
  function Ea(a, b) {
    setTimeout(function() {
      var c = a.getUint16(b, !0),
          d = 0;
      a: for (; d < c; d++) {
        for (var g = a.getUint16(b + 2 + 4 * d, !0), e = a.getUint16(b + 4 + 4 * d, !0), n = 0; n < N.length; n++) {
          var l = N[n];
          if (l[0] == g && l[1] == e) {
            N.splice(n, 1);
            continue a
          }
        }
        I.push([g << 1, e << 1, t])
      }
    }, 100);
    return b + 2 + 4 * a.getUint16(b, !0)
  }
  function Fa(a, b) {
    !H.checked && setTimeout(function() {
      for (var c = a.getUint16(b, !0), d = 0; d < c; d++) {
        var g = a.getUint16(b + 2 + 8 * d, !0),
            e = a.getUint16(b + 4 + 8 * d, !0),
            n = a.getUint16(b + 6 + 8 * d, !0),
            l = a.getUint16(b + 8 + 8 * d, !0);
        O.push([g << 1, e << 1, n << 1, l << 1, t])
      }
    }, 50);
    return b + 2 + 8 * a.getUint16(b, !0)
  }
  function Ga(a) {
    a = a.data;
    var b = new DataView(a);
    switch (b.getUint8(0)) {
    case 0:
      ha = b.getUint32(1, !0);
      break;
    case 1:
      var c;
      ia = c = b.getUint16(1, !0);
      ja = 100 <= c;
      var d = [],
          g;
      for (g in F) F.hasOwnProperty(g) && d.push(g);
      for (var e = 0; e < c; e++) {
        g = b.getUint32(3 + 8 * e, !0);
        var n = b.getUint16(7 + 8 * e, !0),
            l = b.getUint16(9 + 8 * e, !0);
        if (g != ha) if (null != F[g]) {
          for (var p = 0; p < d.length; p++) if (d[p] == g) {
            d.splice(p, 1);
            break
          }
          g = F[g];
          g.oldX = g.getX();
          g.oldY = g.getY();
          g.newX = n;
          g.newY = l;
          g.time = t
        } else F[g] = new ka(n, l)
      }
      for (e = 0; e < d.length; e++) delete F[d[e]];
      c = Ea(b, 3 + 8 * c);
      g = b.getUint16(c, !0);
      c += 2;
      for (d = 0; d < g; d++) {
        a: for (n = b.getUint32(c, !0), e = 0; e < r.length; e++) if (r[e].id == n) {
          var k = r[e];
          if (1 == k.type) for (var n = k.x | 0, l = k.y | 0, p = k.width | 0, k = k.height | 0, m = l; m < l + k; ++m) for (var h = n; h < n + p; ++h)--T[h + 400 * m];
          r.splice(e, 1);
          break a
        }
        c += 4
      }
      g = b.getUint16(c, !0);
      c += 2;
      for (d = 0; d < g; d++) {
        a: {
          e = b.getUint32(c, !0);
          for (n = 0; n < r.length; n++) if (r[n].id == e) {
            e = r[n];
            break a
          }
          e = {
            id: e
          };
          r.push(e)
        }
        c += 4;c = la(b, c, e)
      }
      c = Fa(b, c);
      if (a.byteLength < c + 4) break;
      aa = b.getUint32(c, !0);
      break;
    case 4:
      $();
      W(b.getUint16(1, !0), b.getUint16(3, !0));
      g = b.getUint16(5, !0);
      c = 7;
      for (d = 0; d < g; d++) e = {}, e.id = b.getUint32(c, !0), c += 4, c = la(b, c, e), r.push(e);
      a.byteLength >= c + 4 ? G = Math.max(G, b.getUint32(c, !0)) : a.byteLength >= c + 2 && (G = Math.max(G, b.getUint16(c, !0)));
      Z();
      break;
    case 5:
      W(b.getUint16(1, !0), b.getUint16(3, !0)), 9 <= b.byteLength ? G = Math.max(G, b.getUint32(5, !0)) : 7 <= b.byteLength && (G = Math.max(G, b.getUint16(5, !0))), Z()
    }
  }
  function Q() {
    if (!(D || L || null == u || u.readyState != WebSocket.OPEN || k == J && q == K)) {
      var a = new ArrayBuffer(9),
          b = new DataView(a);
      b.setUint8(0, 1);
      b.setUint16(1, k, !0);
      b.setUint16(3, q, !0);
      b.setUint32(5, G, !0);
      u.send(a);
      J = k;
      K = q
    }
  }
  function wa(a, b) {
    if (!D && null != u && u.readyState == WebSocket.OPEN) {
      var c = new ArrayBuffer(9),
          d = new DataView(c);
      d.setUint8(0, 2);
      d.setUint16(1, a, !0);
      d.setUint16(3, b, !0);
      d.setUint32(5, G, !0);
      u.send(c)
    }
  }
  function la(f, b, c) {
    function d() {
      c.x = f.getUint16(b, !0);
      b += 2;
      c.y = f.getUint16(b, !0);
      b += 2;
      c.width = f.getUint16(b, !0);
      b += 2;
      c.height = f.getUint16(b, !0);
      b += 2
    }
    function g() {
      for (var a = f.getUint32(b, !0).toString(16); 6 > a.length;) a = "0" + a;
      b += 4;
      c.color = "#" + a
    }
    var e = f.getUint8(b);
    b += 1;
    c.type = e;
    switch (e) {
    case 255:
      break;
    case 0:
      c.x = f.getUint16(b, !0);
      b += 2;
      c.y = f.getUint16(b, !0);
      b += 2;
      c.size = f.getUint8(b);
      b += 1;
      c.isCentered = !! f.getUint8(b);
      b += 1;
      e = Da(f, b);
      c.text = e[0];
      b = e[1];
      break;
    case 1:
      d();
      var n = !c.color;
      g();
      var e = c.x | 0,
          l = c.y | 0,
          p = c.width | 0,
          k = c.height | 0;
      if (n) for (n = l; n < l + k; ++n) for (var m = e; m < e + p; ++m)++T[m + 400 * n];
      break;
    case 2:
      d();
      c.isBad = !! f.getUint8(b);
      b += 1;
      break;
    case 3:
      d();
      c.count = f.getUint16(b, !0);
      b += 2;
      g();
      break;
    case 4:
      d();
      c.count ? c.count > f.getUint16(b, !0) && (c.lastClickAt = t) : c.lastClickAt = 0;
      c.count = f.getUint16(b, !0);
      b += 2;
      g();
      break;
    case 5:
      c.x = f.getUint16(b, !0);
      b += 2;
      c.y = f.getUint16(b, !0);
      b += 2;
      c.queue = [
        [0, c.x, c.y]
      ];
      c.potentialQueue = [];
      c.explored = new Uint8Array(12E4);
      c.img = a.createImageData(400, 300);
      e = E.createElement("canvas");
      e.width = 400;
      e.height = 300;
      c.canvas = e;
      c.ctx = c.canvas.getContext("2d");
      break;
    default:
      throw Error("Unknown object type " + e);
    }
    return b
  }
  function ea(a, b) {
    if (-1 != J && -1 != K) {
      var c = fa(J, K, a, b);
      if (c.x != a || c.y != b) return !0
    }
    for (c = 0; c < r.length; c++) {
      var d = r[c];
      if (2 == d.type && !(k < d.x || q < d.y || k >= d.x + d.width || q >= d.y + d.height)) return !0
    }
    return !1
  }
  function ma() {
    a.clearRect(0, 0, 800, 600);
    a.save();
    if (null != u && u.readyState != WebSocket.OPEN || L) {
      var f;
      if (null == u) f = "Click to begin";
      else
      switch (u.readyState) {
      case WebSocket.CONNECTING:
        f = "Connecting";
        break;
      case WebSocket.CLOSING:
      case WebSocket.CLOSED:
        f = "Lost connection to server";
        break;
      default:
        f = "Click to begin"
      }
      a.font = "60px NovaSquare";
      a.fillText(f, 400 - a.measureText(f).width / 2, 315);
      na();
      oa(!1)
    } else {
      a.fillStyle = "#000000";
      a.save();
      a.globalAlpha = 1;
      Ha();
      for (f = 0; f < r.length; f++) {
        var b = r[f];
        if (0 == b.type) {
          a.font = b.size + "px NovaSquare";
          var c = b.x << 1,
              d = b.y << 1;
          b.isCentered && (c -= a.measureText(b.text).width / 2);
          a.fillStyle = "#000000";
          a.fillText(b.text, c, d)
        } else if (1 == b.type) a.fillStyle = b.color, a.fillRect(b.x << 1, b.y << 1, b.width << 1, b.height << 1), a.strokeStyle = "#000000", a.globalAlpha = .2, a.lineWidth = 2, a.strokeRect((b.x << 1) + 1, (b.y << 1) + 1, (b.width << 1) - 2, (b.height << 1) - 2), a.globalAlpha = 1;
        else if (2 == b.type) a.fillStyle = b.isBad ? "#FF0000" : "#00FF00", a.globalAlpha = .2, a.fillRect(b.x << 1, b.y << 1, b.width << 1, b.height << 1), a.globalAlpha = 1;
        else if (3 == b.type) {
          var c = b.x << 1,
              d = b.y << 1,
              g = b.width << 1,
              e = b.height << 1;
          a.fillStyle = b.color;
          a.globalAlpha = .2;
          a.fillRect(c, d, g, e);
          a.globalAlpha = .5;
          a.fillStyle = "#000000";
          40 > b.width || 40 > b.height ? (a.font = "30px NovaSquare", a.fillText(b.count, c + g / 2 - a.measureText(b.count).width / 2, d + e / 2 + 10)) : (a.font = "60px NovaSquare", a.fillText(b.count, c + g / 2 - a.measureText(b.count).width / 2, d + e / 2 + 20));
          a.globalAlpha = 1
        } else if (4 == b.type) {
          c = b.x << 1;
          d = b.y << 1;
          g = b.width << 1;
          e = b.height << 1;
          a.fillStyle = b.color;
          a.strokeStyle = b.color;
          a.globalAlpha = 1;
          a.fillRect(c, d, g, e);
          a.globalAlpha = .2;
          a.fillStyle = "#000000";
          a.fillRect(c, d, g, e);
          a.globalAlpha = 1;
          a.fillStyle = b.color;
          var n = 150 > t - b.lastClickAt,
              l = n ? 8 : 12;
          a.fillRect(c + l, d + l, g - 2 * l, e - 2 * l);
          a.strokeStyle = "#000000";
          a.globalAlpha = .1;
          a.beginPath();
          a.moveTo(c, d);
          a.lineTo(c + l, d + l);
          a.moveTo(c + g, d);
          a.lineTo(c + g - l, d + l);
          a.moveTo(c, d + e);
          a.lineTo(c + l, d + e - l);
          a.moveTo(c + g, d + e);
          a.lineTo(c + g - l, d + e - l);
          a.moveTo(c, d);
          a.rect(c, d, g, e);
          a.rect(c + l, d + l, g - 2 * l, e - 2 * l);
          a.stroke();
          a.fillStyle = "#000000";
          a.globalAlpha = .5;
          50 > b.width || 50 > b.height ? (a.font = "35px NovaSquare", a.fillText(b.count, c + g / 2 - a.measureText(b.count).width / 2, d + e / 2 + 13)) : (a.font = "45px NovaSquare", a.fillText(b.count, c + g / 2 - a.measureText(b.count).width / 2, d + e / 2 + 16));
          n && (a.fillStyle = "#000000", a.globalAlpha = .15, a.fillRect(c + l, d + l, g - 2 * l, e - 2 * l));
          a.globalAlpha = 1
        } else 5 == b.type && (ga(!1), a.drawImage(b.canvas, 0, 0, 400, 300, 0, 0, 800, 600), ga(!0))
      }
      a.restore();
      D || (a.font = "12px NovaSquare", a.strokeStyle = "#000000", a.fillStyle = "#FFFFFF", a.lineWidth = 2.5, f = ja ? "Area too full, not all cursors are shown" : 30 < ia ? "Area too full, drawing is disabled" : "Use shift+click to draw", a.globalAlpha = .5, a.strokeText(f, 10, 590), a.globalAlpha = 1, a.fillText(f, 10, 590), 0 != aa && (f = aa + " players online", b = a.measureText(f).width, a.globalAlpha = .5, a.strokeText(f, 790 - b, 590), a.globalAlpha = 1, a.fillText(f, 790 - b, 590)));
      na();
      if (!H.checked) {
        a.save();
        a.strokeStyle = "#000000";
        a.lineWidth = 1;
        t = +new Date;
        for (f = 0; f < O.length; f++) b = O[f], c = 10 - (t - b[4]) / 1E3, 0 >= c ? (O.splice(f, 1), --f) : (1 < c && (c = 1), a.globalAlpha = .3 * c, a.beginPath(), a.moveTo(b[0] - .5, b[1] - .5), a.lineTo(b[2] - .5, b[3] - .5), a.stroke());
        a.restore()
      }
      a.save();
      for (var p in F) F.hasOwnProperty(p) && a.drawImage(P, sa(F[p].getX()) - 6, ta(F[p].getY()) - 6);
      a.restore();
      oa(!0)
    }
    a.restore();
    A.requestAnimationFrame(ma)
  }
  function na() {
    a.save();
    a.strokeStyle = "#000000";
    t = +new Date;
    for (var f = 0; f < I.length; f++) {
      var b = I[f],
          c = (t - b[2]) / 1E3,
          d = 1 - 2 * c;
      0 >= d ? (I.splice(f, 1), --f) : (c *= 50, a.beginPath(), a.globalAlpha = .3 * d, a.arc(b[0], b[1], c, 0, 2 * Math.PI, !1), a.stroke())
    }
    a.restore()
  }
  function oa(f) {
    if (D) a.save(), a.globalAlpha = 1, a.drawImage(P, B - 5, C - 5);
    else {
      var b = 0,
          c = 0;
      v != k || w != q ? (a.save(), f && (a.globalAlpha = .2, a.fillStyle = "#FF0000", a.beginPath(), a.arc(B + 2, C + 8, 20, 0, 2 * Math.PI, !1), a.fill()), a.globalAlpha = .5, a.drawImage(P, B - 5, C - 5), a.restore()) : (b = B & 1, c = C & 1);
      a.save();
      f && (a.globalAlpha = .2, a.fillStyle = "#FFFF00", a.beginPath(), a.arc((k << 1) + b + 2, (q << 1) + c + 8, 20, 0, 2 * Math.PI, !1), a.fill());
      a.globalAlpha = 1;
      a.drawImage(Ia, (k << 1) + b - 5, (q << 1) + c - 5)
    }
    a.restore()
  }
  function ka(a, b) {
    this.oldX = this.newX = a;
    this.oldY = this.newY = b;
    this.time = t
  }
  function pa(a) {
    return a * a * (3 - 2 * a)
  }
  function fa(a, b, c, d) {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    if (z(a, b)) return {
      x: a,
      y: b
    };
    if (a == c && b == d) return {
      x: c,
      y: d
    };
    var g = a,
        e = b;
    c = c - a | 0;
    d = d - b | 0;
    var n = 0,
        l = 0,
        p = 0,
        k = 0;
    0 > c ? n = -1 : 0 < c && (n = 1);
    0 > d ? l = -1 : 0 < d && (l = 1);
    0 > c ? p = -1 : 0 < c && (p = 1);
    var m = Math.abs(c) | 0,
        h = Math.abs(d) | 0;
    m <= h && (m = Math.abs(d) | 0, h = Math.abs(c) | 0, 0 > d ? k = -1 : 0 < d && (k = 1), p = 0);
    c = m >> 1;
    for (d = 0; d <= m && !z(a, b); d++) g = a, e = b, c += h, c >= m ? (c -= m, a += n, b += l) : (a += p, b += k);
    return {
      x: g,
      y: e
    }
  }
  function z(a, b) {
    return 0 > a || 400 <= a || 0 > b || 300 <= b ? !0 : T[a + 400 * b]
  }
  function Ja() {
    for (var a = 0; a < r.length; a++) {
      var b = r[a];
      5 == b.type && Ka(b)
    }
  }
  function Ka(a) {
    function b(a, b, c) {
      e.push([c, a, b]);
      l[a + 400 * b] = !0;
      g(a, b)
    }
    function c(a, b, c) {
      p.push([c, a, b]);
      l[a + 400 * b] = !0
    }
    function d(a, b) {
      return 255 != k[4 * (a + 400 * b) + 3] && !l[a + 400 * b]
    }
    function g(a, b) {
      var c = 4 * (a + 400 * b);
      k[c + 0] = 255;
      k[c + 1] = 153;
      k[c + 2] = 153;
      k[c + 3] = 255
    }
    for (var e = a.queue, k = a.img.data, l = a.explored, p = a.potentialQueue, r = e.length, m = 0; m < p.length; m++) z(p[m][1], p[m][2]) || (g(p[m][1], p[m][2]), e.push(p[m]), p.splice(m, 1), --m);
    for (m = 0; m < r; ++m) z(e[m][1], e[m][2]) && (p.push(e[m]), e.splice(m, 1), --m, --r);
    for (r = 0; 50 > r && 0 != e.length; ++r) {
      for (var h = Number.POSITIVE_INFINITY, q = [e[0]], m = 1; m < e.length; ++m) {
        var x = e[m][0];.01 > Math.abs(x - h) ? q.push(e[m]) : x < h && (h = x, q = [e[m]])
      }
      for (m = 0; m < q.length; ++m) {
        var x = q[m][0],
            h = q[m][1],
            s = q[m][2],
            qa = e.indexOf(q[m]); - 1 != qa && e.splice(qa, 1);
        0 < h && d(h - 1, s) && (z(h - 1, s) ? c(h - 1, s, x + 1) : b(h - 1, s, x + 1));
        0 < s && d(h, s - 1) && (z(h, s - 1) ? c(h, s - 1, x + 1) : b(h, s - 1, x + 1));
        400 > h + 1 && d(h + 1, s) && (z(h + 1, s) ? c(h + 1, s, x + 1) : b(h + 1, s, x + 1));
        300 > s + 1 && d(h, s + 1) && (z(h, s + 1) ? c(h, s + 1, x + 1) : b(h, s + 1, x + 1));
        0 < h && 0 < s && d(h - 1, s - 1) && (z(h - 1, s - 1) ? c(h - 1, s - 1, x + Math.SQRT2) : b(h - 1, s - 1, x + Math.SQRT2));
        0 < h && 300 > s + 1 && d(h - 1, s + 1) && (z(h - 1, s + 1) ? c(h - 1, s + 1, x + Math.SQRT2) : b(h - 1, s + 1, x + Math.SQRT2));
        400 > h + 1 && 0 < s && d(h + 1, s - 1) && (z(h + 1, s - 1) ? c(h + 1, s - 1, x + Math.SQRT2) : b(h + 1, s - 1, x + Math.SQRT2));
        400 > h + 1 && 300 > s + 1 && d(h + 1, s + 1) && (z(h + 1, s + 1) ? c(h + 1, s + 1, x + Math.SQRT2) : b(h + 1, s + 1, x + Math.SQRT2))
      }
    }
    a.ctx.putImageData(a.img, 0, 0)
  }
  var y, a, ia = 0,
      v = 0,
      w = 0,
      B = 0,
      C = 0,
      k = 0,
      q = 0,
      J = -1,
      K = -1,
      M = null,
      H = null,
      P = new Image;
  P.src = "img/cursor.png";
  var Ia = P,
      D = -1 != A.location.search.indexOf("editor"),
      I = [],
      O = [],
      t = 0,
      ca = 0,
      u = null,
      ha = -1,
      F = {},
      aa = 0,
      ja = !1,
      Y = !1,
      R = 0,
      S = 0,
      da = 0,
      X = !1,
      L = !D && !0,
      T = new Uint8Array(12E4),
      r = [],
      N = [];
  Array.prototype.remove = function(a) {
    a = this.indexOf(a);
    return -1 != a ? (this.splice(a, 1), !0) : !1
  };
  var G = 0;
  ka.prototype = {
    oldX: 0,
    oldY: 0,
    newX: 0,
    newY: 0,
    time: 0,
    getX: function() {
      var a = this.newX - this.oldX,
          b = (t - this.time) / 100,
          b = pa(0 >= b ? 0 : 1 <= b ? 1 : b);
      return this.oldX + b * a
    },
    getY: function() {
      var a = this.newY - this.oldY,
          b = (t - this.time) / 100,
          b = pa(0 >= b ? 0 : 1 <= b ? 1 : b);
      return this.oldY + b * a
    }
  };
  var ra = function() {
    function f() {
      var a = 0,
          b = 0,
          c = v / 10,
          d = w / 10;
      n < c ? (c = Math.ceil(c), a = Math.floor(n)) : (c = Math.floor(c), a = Math.ceil(n));
      l < d ? (d = Math.ceil(d), b = Math.floor(l)) : (d = Math.floor(d), b = Math.ceil(l));
      if (a > c) var e = c,
          c = a,
          a = e;
      b > d && (e = d, d = b, b = e);
      return {
        sx: a,
        sy: b,
        fx: c,
        fy: d
      }
    }
    function b() {
      e = !0;
      n = v / 10;
      l = w / 10
    }
    function c(a) {
      return "0x" + parseInt(a.slice(1), 16).toString(16).toUpperCase()
    }
    function d(a, b, c, d, e) {
      a = {
        x: 10 * ~~ (k / 10) - ~~ (a / 2) + c,
        y: 10 * ~~ (q / 10) - ~~ (b / 2) + d,
        width: a,
        height: b
      };
      for (var f in e) e.hasOwnProperty(f) && (a[f] = e[f]);
      return a
    }
    function g(a, b) {
      for (var c = null, d = Number.POSITIVE_INFINITY, e = 0; e < r.length; e++) {
        var f = r[e];
        if (f.hasOwnProperty("x") && f.hasOwnProperty("y") && f.hasOwnProperty("width") && f.hasOwnProperty("height")) {
          var g = f.x + f.width / 2,
              h = f.y + f.height / 2,
              g = (a - g) * (a - g) + (b - h) * (b - h);
          g < d && (d = g, c = f)
        }
      }
      return c
    }
    var e = !1,
        n = 0,
        l = 0,
        p = 1,
        u = 200,
        m = 150,
        h = new Uint8Array(1200),
        t = "#000000 #FF9999 #9999FF #FFFF99 #99FFFF #FF99FF #3333FF".split(" ");
    E.addEventListener("mouseup", function() {
      if (e) {
        for (var a = f(), b = p, c = a.sy; c < a.fy; ++c) for (var d = a.sx; d < a.fx; ++d) h[d + 40 * c] = b;
        e = !1
      }
    });
    E.addEventListener("mousemove", function() {});
    A.generateCode = function() {
      for (var a = "class Level? : public Level {\npublic:\n\tLevel?() : Level(" + u + ", " + m + "){}\n\n\tvoid OnInit(){\n", a = a + ("\t\tstd::vector<LevelObject*> wallByColor[" + t.length + "];\n"), b = new Uint8Array(1200), d = [], e = 0; 30 > e; ++e) for (var f = 0; 40 > f; ++f) if (!b[f + 40 * e]) {
        var g = h[f + 40 * e];
        if (0 != g) {
          for (var k = f; 40 > f && h[f + 40 * e] == g && !b[f + 40 * e];) b[f + 40 * e] = !0, ++f;
          var l = f--,
              p = l - k,
              q = e++;
          a: for (; 30 > e;) {
            for (var n = k; n < l; ++n) {
              if (h[n + 40 * e] != g) break a;
              if (b[n + 40 * e]) break a
            }
            for (n = k; n < l; ++n) b[n + 40 * e] = !0;
            ++e
          }
          l = e - q;e = q;d.push({
            x: 10 * k,
            y: 10 * q,
            width: 10 * p,
            height: 10 * l,
            color: g - 1
          })
        }
      }
      for (b = 0; b < d.length; b++) e = d[b], 0 == e.color ? a += "\t\tAddObject(new ObjWall(" + e.x + ", " + e.y + ", " + e.width + ", " + e.height + ", 0x000000));\n" : (f = c(t[e.color]), a += "\t\twallByColor[" + e.color + "].push_back(AddObject(new ObjWall(" + e.x + ", " + e.y + ", " + e.width + ", " + e.height + ", " + f + ")));\n");
      for (b = 0; b < r.length; b++) d = r[b], 0 != d.type && (2 == d.type ? a += "\t\tAddObject(new ObjTeleport(LevelManager::GetNextLevel(this), " + d.x + ", " + d.y + ", " + d.width + ", " + d.height + "));\n" : 3 == d.type ? (a += "\t\tAddObject(new ObjAreaCounter(wallByColor[" + d.colorCode + "], " + d.x + ", " + d.y + ", " + d.width + ", " + d.height + ", ", a += d.count + ", " + c(d.color) + "));\n") : 4 == d.type && (a += "\t\tAddObject(new ObjClickBox(wallByColor[" + d.colorCode + "], " + d.x + ", " + d.y + ", " + d.width + ", " + d.height + ", ", a += d.count + ", 1000, " + c(d.color) + "));\n"));
      return a += "\t}\n};\n"
    };
    E.addEventListener("keydown", function(a) {
      if (D) {
        var b = a.keyCode;
        65 == b ? (--p, 0 > p && (p = t.length)) : 83 == b ? (++p, p > t.length && (p = 0)) : 66 == b ? 1 >= p || r.push(d(40, 40, 5, 5, {
          type: 4,
          color: t[p - 1],
          colorCode: p - 1,
          count: 5
        })) : 90 == b ? r.pop() : 87 == b ? r.push(d(50, 50, -5, -5, {
          type: 2,
          isBad: !1
        })) : 79 == b ? (u = k, m = q) : 78 == b ? 1 >= p || r.push(d(40, 40, 0, 0, {
          type: 3,
          color: t[p - 1],
          colorCode: p - 1,
          count: 1
        })) : 37 == b ? (b = g(v, w), null != b && (a.shiftKey ? b.width -= 10 : (b.x -= 10, b.width += 10), 0 == b.width && r.splice(r.indexOf(b), 1))) : 39 == b ? (b = g(v, w), null != b && (a.shiftKey ? (b.x += 10, b.width -= 10) : b.width += 10, 0 == b.width && r.splice(r.indexOf(b), 1))) : 38 == b ? (b = g(v, w), null != b && (a.shiftKey ? b.height -= 10 : (b.y -= 10, b.height += 10), 0 == b.height && r.splice(r.indexOf(b), 1))) : 40 == b && (b = g(v, w), null != b && (a.shiftKey ? (b.y += 10, b.height -= 10) : b.height += 10, 0 == b.height && r.splice(r.indexOf(b), 1)))
      }
    });
    return {
      renderEditor: function() {
        if (D) {
          a.save();
          a.fillStyle = "#FF0000";
          a.strokeStyle = "#FF0000";
          a.lineWidth = 1;
          a.globalAlpha = .09;
          a.beginPath();
          for (var b = 0; 400 > b; b += 10) a.moveTo((b << 1) + .5, 0), a.lineTo((b << 1) + .5, 600);
          for (var c = 0; 300 > c; c += 10) a.moveTo(0, (c << 1) + .5), a.lineTo(800, (c << 1) + .5);
          a.stroke();
          a.lineWidth = 2;
          a.beginPath();
          a.moveTo(400.5, 0);
          a.lineTo(400.5, 600);
          a.moveTo(0, 300.5, 0);
          a.lineTo(800, 300.5);
          a.stroke();
          a.lineWidth = 1;
          a.globalAlpha = 1;
          a.fillStyle = "#000000";
          for (var d = f(), c = 0; 300 > c; c += 10) for (b = 0; 400 > b; b += 10) {
            var g = b / 10 | 0,
                k = c / 10 | 0,
                l = h[g + 40 * k];
            e && g >= d.sx && g < d.fx && k >= d.sy && k < d.fy && (l = p);
            0 != l && (a.fillStyle = t[l - 1], a.fillRect(b << 1, c << 1, 20, 20))
          }
          a.save();
          a.globalAlpha = .09;
          a.fillStyle = "#0000FF";
          a.beginPath();
          a.arc(u << 1, m << 1, 20, 0, 2 * Math.PI, !1);
          a.fill();
          a.restore();
          a.save();
          a.fillStyle = "#FFFFFF";
          a.strokeStyle = "#000000";
          a.lineWidth = 2.5;
          a.font = "14px NovaSquare";
          a.globalAlpha = .5;
          a.strokeText("Current color: ", 10, 590);
          a.globalAlpha = 1;
          a.fillText("Current color: ", 10, 590);
          0 == p ? a.fillText("ESR", 105, 590) : (a.fillStyle = "#000000", a.fillRect(104, 575, 22, 22), a.fillStyle = t[p - 1], a.fillRect(105, 576, 20, 20));
          a.restore();
          a.restore()
        }
      },
      initEditor: function() {
        y.addEventListener("mousedown", b)
      }
    }
  }(),
      Ha = ra.renderEditor,
      La = ra.initEditor,
      za = new Uint8Array(12E4);
  Array.prototype.remove = function(a) {
    a = this.indexOf(a);
    return -1 != a ? (this.splice(a, 1), !0) : !1
  };
  A.onload = function() {
    y = E.getElementById("canvas");
    a = y.getContext("2d");
    try {
      A.top.location.origin != A.location.origin && ba()
    } catch (f) {
      ba()
    }
    y.onmousemove = ua;
    y.onmousedown = va;
    y.onmouseup = xa;
    M = E.getElementById("noCursorLock");
    H = E.getElementById("noDrawings");
    null != localStorage && (M.checked = "1" == A.localStorage.getItem("noCursorLock") ? !0 : !1, H.checked = "1" == A.localStorage.getItem("noDrawings") ? !0 : !1);
    A.onbeforeunload = ya;
    y.requestPointerLock = y.requestPointerLock || y.mozRequestPointerLock || y.webkitRequestPointerLock;
    y.style.cursor = "none";
    La();
    D || null == u && (u = new WebSocket(QueryString.ip||"ws://s1.cursors.io:443/"), u.binaryType = "arraybuffer", u.onopen = Aa, u.onmessage = Ga, u.onclose = Ba, u.onerror = Ca);
    setInterval(Q, 50);
    setInterval(Ja, 40);
    A.requestAnimationFrame(ma)
  }
})(window, document);

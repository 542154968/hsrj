/*
 fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (t, B, f, u) {
    var J = f("html"), p = f(t), q = f(B), b = f.fancybox = function () { b.open.apply(this, arguments) }, I = navigator.userAgent.match(/msie/i), E = null, v = B.createTouch !== u, w = function (a) { return a && a.hasOwnProperty && a instanceof f }, r = function (a) { return a && "string" === f.type(a) }, G = function (a) { return r(a) && 0 < a.indexOf("%") }, m = function (a, c) { var e = parseInt(a, 10) || 0; c && G(a) && (e *= b.getViewport()[c] / 100); return Math.ceil(e) }, y = function (a, b) { return m(a, b) + "px" }; f.extend(b, {
        version: "2.1.5", defaults: {
            padding: 15, margin: 20,
            width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !v, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
            openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop
        }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
        isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (a, c) {
            if (a && (f.isPlainObject(c) || (c = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = w(a) ? f(a).get() : [a]), f.each(a, function (e, d) {
                var l = {}, g, k; "object" === f.type(d) && (d.nodeType && (d = f(d)), w(d) ? (l = { href: d.data("fancybox-href") || d.attr("href"), title: d.data("fancybox-title") || d.attr("title"), isDom: !0, element: d }, f.metadata && f.extend(!0, l, d.metadata())) :
                    l = d); var h = c.href || l.href || (r(d) ? d : null); var m = c.title !== u ? c.title : l.title || ""; var n = (g = c.content || l.content) ? "html" : c.type || l.type; !n && l.isDom && (n = d.data("fancybox-type"), n || (n = (n = d.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null)); r(h) && (n || (b.isImage(h) ? n = "image" : b.isSWF(h) ? n = "swf" : "#" === h.charAt(0) ? n = "inline" : r(d) && (n = "html", g = d)), "ajax" === n && (k = h.split(/\s+/, 2), h = k.shift(), k = k.shift())); g || ("inline" === n ? h ? g = f(r(h) ? h.replace(/.*(?=#[^\s]+$)/, "") : h) : l.isDom && (g = d) : "html" === n ? g = h : !n && !h && l.isDom &&
                        (n = "inline", g = d)); f.extend(l, { href: h, type: n, content: g, title: m, selector: k }); a[e] = l
            }), b.opts = f.extend(!0, {}, b.defaults, c), c.keys !== u && (b.opts.keys = c.keys ? f.extend({}, b.defaults.keys, c.keys) : !1), b.group = a, b._start(b.opts.index)
        }, cancel: function () { var a = b.coming; a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)) },
        close: function (a) { b.cancel(); !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()))) }, play: function (a) {
            var c = function () { clearTimeout(b.player.timer) }, e = function () {
                c(); b.current && b.player.isActive && (b.player.timer = setTimeout(b.next,
                    b.current.playSpeed))
            }, d = function () { c(); q.unbind(".player"); b.player.isActive = !1; b.trigger("onPlayEnd") }; !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, q.bind({ "onCancel.player beforeClose.player": d, "onUpdate.player": e, "beforeLoad.player": c }), e(), b.trigger("onPlayStart")) : d()
        }, next: function (a) { var c = b.current; c && (r(a) || (a = c.direction.next), b.jumpto(c.index + 1, a, "next")) }, prev: function (a) {
            var c = b.current; c && (r(a) || (a = c.direction.prev),
                b.jumpto(c.index - 1, a, "prev"))
        }, jumpto: function (a, c, e) { var d = b.current; d && (a = m(a), b.direction = c || d.direction[a >= d.index ? "next" : "prev"], b.router = e || "jumpto", d.loop && (0 > a && (a = d.group.length + a % d.group.length), a %= d.group.length), d.group[a] !== u && (b.cancel(), b._start(a))) }, reposition: function (a, c) { var e = b.current, d = e ? e.wrap : null, l; d && (l = b._getPosition(c), a && "scroll" === a.type ? (delete l.position, d.stop(!0, !0).animate(l, 200)) : (d.css(l), e.pos = f.extend({}, e.dim, l))) }, update: function (a) {
            var c = a && a.type, e = !c ||
                "orientationchange" === c; e && (clearTimeout(E), E = null); b.isOpen && !E && (E = setTimeout(function () { var d = b.current; d && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === c || "resize" === c && d.autoResize) && b._setDimension(), "scroll" === c && d.canShrink || b.reposition(a), b.trigger("onUpdate"), E = null) }, e && !v ? 0 : 300))
        }, toggle: function (a) { b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, v && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update()) }, hideLoading: function () {
            q.unbind(".loading");
            f("#fancybox-loading").remove()
        }, showLoading: function () { var a; b.hideLoading(); var c = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body"); q.bind("keydown.loading", function (a) { 27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel()) }); b.defaults.fixed || (a = b.getViewport(), c.css({ position: "absolute", top: .5 * a.h + a.y, left: .5 * a.w + a.x })) }, getViewport: function () {
            var a = b.current && b.current.locked || !1, c = { x: p.scrollLeft(), y: p.scrollTop() }; a ? (c.w = a[0].clientWidth, c.h = a[0].clientHeight) :
                (c.w = v && t.innerWidth ? t.innerWidth : p.width(), c.h = v && t.innerHeight ? t.innerHeight : p.height()); return c
        }, unbindEvents: function () { b.wrap && w(b.wrap) && b.wrap.unbind(".fb"); q.unbind(".fb"); p.unbind(".fb") }, bindEvents: function () {
            var a = b.current, c; a && (p.bind("orientationchange.fb" + (v ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (c = a.keys) && q.bind("keydown.fb", function (e) {
                var d = e.which || e.keyCode, l = e.target || e.srcElement; if (27 === d && b.coming) return !1; e.ctrlKey || e.altKey || e.shiftKey || e.metaKey ||
                    l && (l.type || f(l).is("[contenteditable]")) || f.each(c, function (c, k) { if (1 < a.group.length && k[d] !== u) return b[c](k[d]), e.preventDefault(), !1; if (-1 < f.inArray(d, k)) return b[c](), e.preventDefault(), !1 })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (c, d, l, g) {
                for (var e = f(c.target || null), h = !1; e.length && !h && !e.is(".fancybox-skin") && !e.is(".fancybox-wrap");)h = e[0] && !(e[0].style.overflow && "hidden" === e[0].style.overflow) && (e[0].clientWidth && e[0].scrollWidth > e[0].clientWidth || e[0].clientHeight &&
                    e[0].scrollHeight > e[0].clientHeight), e = f(e).parent(); 0 !== d && !h && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), c.preventDefault())
            }))
        }, trigger: function (a, c) {
            var e, d = c || b.coming || b.current; if (d) {
                f.isFunction(d[a]) && (e = d[a].apply(d, Array.prototype.slice.call(arguments, 1))); if (!1 === e) return !1; d.helpers && f.each(d.helpers, function (c, e) { if (e && b.helpers[c] && f.isFunction(b.helpers[c][a])) b.helpers[c][a](f.extend(!0, {}, b.helpers[c].defaults, e), d) });
                q.trigger(a)
            }
        }, isImage: function (a) { return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function (a) { return r(a) && a.match(/\.(swf)((\?|#).*)?$/i) }, _start: function (a) {
            var c = {}; a = m(a); var e = b.group[a] || null; if (!e) return !1; c = f.extend(!0, {}, b.opts, e); e = c.margin; var d = c.padding; "number" === f.type(e) && (c.margin = [e, e, e, e]); "number" === f.type(d) && (c.padding = [d, d, d, d]); c.modal && f.extend(!0, c, {
                closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null,
                helpers: { overlay: { closeClick: !1 } }
            }); c.autoSize && (c.autoWidth = c.autoHeight = !0); "auto" === c.width && (c.autoWidth = !0); "auto" === c.height && (c.autoHeight = !0); c.group = b.group; c.index = a; b.coming = c; if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
                d = c.type; e = c.href; if (!d) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1; b.isActive = !0; if ("image" === d || "swf" === d) c.autoHeight = c.autoWidth = !1, c.scrolling = "visible"; "image" === d && (c.aspectRatio = !0); "iframe" ===
                    d && v && (c.scrolling = "scroll"); c.wrap = f(c.tpl.wrap).addClass("fancybox-" + (v ? "mobile" : "desktop") + " fancybox-type-" + d + " fancybox-tmp " + c.wrapCSS).appendTo(c.parent || "body"); f.extend(c, { skin: f(".fancybox-skin", c.wrap), outer: f(".fancybox-outer", c.wrap), inner: f(".fancybox-inner", c.wrap) }); f.each(["Top", "Right", "Bottom", "Left"], function (a, b) { c.skin.css("padding" + b, y(c.padding[a])) }); b.trigger("onReady"); if ("inline" === d || "html" === d) { if (!c.content || !c.content.length) return b._error("content") } else if (!e) return b._error("href");
                "image" === d ? b._loadImage() : "ajax" === d ? b._loadAjax() : "iframe" === d ? b._loadIframe() : b._afterLoad()
            }
        }, _error: function (a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error }); b._afterLoad() }, _loadImage: function () {
            var a = b.imgPreload = new Image; a.onload = function () { this.onload = this.onerror = null; b.coming.width = this.width / b.opts.pixelRatio; b.coming.height = this.height / b.opts.pixelRatio; b._afterLoad() }; a.onerror = function () {
            this.onload =
                this.onerror = null; b._error("image")
            }; a.src = b.coming.href; !0 !== a.complete && b.showLoading()
        }, _loadAjax: function () { var a = b.coming; b.showLoading(); b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function (a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function (c, e) { "success" === e && (a.content = c, b._afterLoad()) } })) }, _loadIframe: function () {
            var a = b.coming, c = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", v ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (e) { } }); a.iframe.preload && (b.showLoading(), c.one("load", function () { f(this).data("ready", 1); v || f(this).bind("load.fb", b.update); f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(); b._afterLoad() })); a.content = c.appendTo(a.inner); a.iframe.preload || b._afterLoad()
        }, _preloadImages: function () {
            var a = b.group, c = b.current, e = a.length, d = c.preload ? Math.min(c.preload,
                e - 1) : 0, f; for (f = 1; f <= d; f += 1) { var g = a[(c.index + f) % e]; "image" === g.type && g.href && ((new Image).src = g.href) }
        }, _afterLoad: function () {
            var a = b.coming, c = b.current; b.hideLoading(); if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, c)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                c && (b.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()); b.unbindEvents(); var e = a.content; var d = a.type; var l = a.scrolling; f.extend(b, {
                    wrap: a.wrap,
                    skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: c
                }); var g = a.href; switch (d) {
                    case "inline": case "ajax": case "html": a.selector ? e = f("<div>").html(e).find(a.selector) : w(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () { f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1) })); break; case "image": e = a.tpl.image.replace("{href}",
                        g); break; case "swf": e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>'; var k = ""; f.each(a.swf, function (a, b) { e += '<param name="' + a + '" value="' + b + '"></param>'; k += " " + a + '="' + b + '"' }); e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + k + "></embed></object>"
                }w(e) && e.parent().is(a.inner) || a.inner.append(e); b.trigger("beforeShow"); a.inner.css("overflow", "yes" === l ? "scroll" :
                    "no" === l ? "hidden" : l); b._setDimension(); b.reposition(); b.isOpen = !1; b.coming = null; b.bindEvents(); if (b.isOpened) { if (c.prevMethod) b.transitions[c.prevMethod]() } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(); b.transitions[b.isOpened ? a.nextMethod : a.openMethod](); b._preloadImages()
            }
        }, _setDimension: function () {
            var a = b.getViewport(), c = 0; var e = b.wrap; var d = b.skin, l = b.inner, g = b.current; var k = g.width; var h = g.height, x = g.minWidth, n = g.minHeight, p = g.maxWidth, q = g.maxHeight, v = g.scrolling,
                r = g.scrollOutside ? g.scrollbarWidth : 0, z = g.margin, A = m(z[1] + z[3]), t = m(z[0] + z[2]), u, w; e.add(d).add(l).width("auto").height("auto").removeClass("fancybox-tmp"); z = m(d.outerWidth(!0) - d.width()); var E = m(d.outerHeight(!0) - d.height()); var C = A + z; var B = t + E; var F = G(k) ? (a.w - C) * m(k) / 100 : k; var D = G(h) ? (a.h - B) * m(h) / 100 : h; if ("iframe" === g.type) {
                    if (w = g.content, g.autoHeight && 1 === w.data("ready")) try {
                        w[0].contentWindow.document.location && (l.width(F).height(9999), u = w.contents().find("body"), r && u.css("overflow-x", "hidden"),
                            D = u.outerHeight(!0))
                    } catch (K) { }
                } else if (g.autoWidth || g.autoHeight) l.addClass("fancybox-tmp"), g.autoWidth || l.width(F), g.autoHeight || l.height(D), g.autoWidth && (F = l.width()), g.autoHeight && (D = l.height()), l.removeClass("fancybox-tmp"); k = m(F); h = m(D); var H = F / D; x = m(G(x) ? m(x, "w") - C : x); p = m(G(p) ? m(p, "w") - C : p); n = m(G(n) ? m(n, "h") - B : n); q = m(G(q) ? m(q, "h") - B : q); u = p; var I = q; g.fitToView && (p = Math.min(a.w - C, p), q = Math.min(a.h - B, q)); C = a.w - A; t = a.h - t; g.aspectRatio ? (k > p && (k = p, h = m(k / H)), h > q && (h = q, k = m(h * H)), k < x && (k = x, h = m(k / H)),
                    h < n && (h = n, k = m(h * H))) : (k = Math.max(x, Math.min(k, p)), g.autoHeight && "iframe" !== g.type && (l.width(k), h = l.height()), h = Math.max(n, Math.min(h, q))); if (g.fitToView) if (l.width(k).height(h), e.width(k + z), a = e.width(), A = e.height(), g.aspectRatio) for (; (a > C || A > t) && k > x && h > n && !(19 < c++);)h = Math.max(n, Math.min(q, h - 10)), k = m(h * H), k < x && (k = x, h = m(k / H)), k > p && (k = p, h = m(k / H)), l.width(k).height(h), e.width(k + z), a = e.width(), A = e.height(); else k = Math.max(x, Math.min(k, k - (a - C))), h = Math.max(n, Math.min(h, h - (A - t))); r && "auto" === v && h < D && k +
                        z + r < C && (k += r); l.width(k).height(h); e.width(k + z); a = e.width(); A = e.height(); e = (a > C || A > t) && k > x && h > n; k = g.aspectRatio ? k < u && h < I && k < F && h < D : (k < u || h < I) && (k < F || h < D); f.extend(g, { dim: { width: y(a), height: y(A) }, origWidth: F, origHeight: D, canShrink: e, canExpand: k, wPadding: z, hPadding: E, wrapSpace: A - d.outerHeight(!0), skinSpace: d.height() - h }); !w && g.autoHeight && h > n && h < q && !k && l.height("auto")
        }, _getPosition: function (a) {
            var c = b.current, e = b.getViewport(), d = c.margin, f = b.wrap.width() + d[1] + d[3], g = b.wrap.height() + d[0] + d[2]; d = {
                position: "absolute",
                top: d[0], left: d[3]
            }; c.autoCenter && c.fixed && !a && g <= e.h && f <= e.w ? d.position = "fixed" : c.locked || (d.top += e.y, d.left += e.x); d.top = y(Math.max(d.top, d.top + (e.h - g) * c.topRatio)); d.left = y(Math.max(d.left, d.left + (e.w - f) * c.leftRatio)); return d
        }, _afterZoomIn: function () {
            var a = b.current; a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (c) {
                f(c.target).is("a") || f(c.target).parent().is("a") ||
                (c.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) { a.preventDefault(); b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()) : b.play(!1))
        }, _afterZoomOut: function (a) {
            a =
            a || b.current; f(".fancybox-wrap").trigger("onReset").remove(); f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }); b.trigger("afterClose", a)
        }
    }); b.transitions = {
        getOrigPosition: function () {
            var a = b.current, c = a.element, e = a.orig, d = {}, f = 50, g = 50, k = a.hPadding, h = a.wPadding, m = b.getViewport(); !e && a.isDom && c.is(":visible") && (e = c.find("img:first"), e.length || (e = c)); w(e) ? (d = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
                (d.top = m.y + (m.h - g) * a.topRatio, d.left = m.x + (m.w - f) * a.leftRatio); if ("fixed" === b.wrap.css("position") || a.locked) d.top -= m.y, d.left -= m.x; return { top: y(d.top - k * a.topRatio), left: y(d.left - h * a.leftRatio), width: y(f + h), height: y(g + k) }
        }, step: function (a, c) {
            var e = c.prop; var d = b.current; var f = d.wrapSpace, g = d.skinSpace; if ("width" === e || "height" === e) c = c.end === c.start ? 1 : (a - c.start) / (c.end - c.start), b.isClosing && (c = 1 - c), d = "width" === e ? d.wPadding : d.hPadding, d = a - d, b.skin[e](m("width" === e ? d : d - f * c)), b.inner[e](m("width" === e ?
                d : d - f * c - g * c))
        }, zoomIn: function () { var a = b.current, c = a.pos, e = a.openEffect, d = "elastic" === e, l = f.extend({ opacity: 1 }, c); delete l.position; d ? (c = this.getOrigPosition(), a.openOpacity && (c.opacity = .1)) : "fade" === e && (c.opacity = .1); b.wrap.css(c).animate(l, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: d ? this.step : null, complete: b._afterZoomIn }) }, zoomOut: function () {
            var a = b.current, c = a.closeEffect, e = "elastic" === c, d = { opacity: .1 }; e && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)); b.wrap.animate(d,
                { duration: "none" === c ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
        }, changeIn: function () { var a = b.current, c = a.nextEffect, e = a.pos, d = { opacity: 1 }, f = b.direction, g; e.opacity = .1; "elastic" === c && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = y(m(e[g]) - 200), d[g] = "+=200px") : (e[g] = y(m(e[g]) + 200), d[g] = "-=200px")); "none" === c ? b._afterZoomIn() : b.wrap.css(e).animate(d, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) }, changeOut: function () {
            var a =
                b.previous, c = a.prevEffect, e = { opacity: .1 }, d = b.direction; "elastic" === c && (e["down" === d || "up" === d ? "top" : "left"] = ("up" === d || "left" === d ? "-" : "+") + "=200px"); a.wrap.animate(e, { duration: "none" === c ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () { f(this).trigger("onReset").remove() } })
        }
    }; b.helpers.overlay = {
        defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !v, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function (a) {
            a = f.extend({}, this.defaults, a); this.overlay && this.close(); this.overlay =
                f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent); this.fixed = !1; a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        }, open: function (a) {
            var c = this; a = f.extend({}, this.defaults, a); this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a); this.fixed || (p.bind("resize.overlay", f.proxy(this.update, this)), this.update()); a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ?
                    b.close() : c.close(), !1
            }); this.overlay.css(a.css).show()
        }, close: function () { var a, b; p.unbind("resize.overlay"); this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = p.scrollTop(), b = p.scrollLeft(), this.el.removeClass("fancybox-lock"), p.scrollTop(a).scrollLeft(b)); f(".fancybox-overlay").remove().hide(); f.extend(this, { overlay: null, fixed: !1 }) }, update: function () {
            var a = "100%", b; this.overlay.width(a).height("100%"); I ? (b = Math.max(B.documentElement.offsetWidth, B.body.offsetWidth),
                q.width() > b && (a = q.width())) : q.width() > p.width() && (a = q.width()); this.overlay.width(a).height(q.height())
        }, onReady: function (a, b) { var c = this.overlay; f(".fancybox-overlay").stop(!0, !0); c || this.create(a); a.locked && this.fixed && b.fixed && (c || (this.margin = q.height() > p.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1); !0 === a.showEarly && this.beforeShow.apply(this, arguments) }, beforeShow: function (a, b) {
            var c, d; b.locked && (!1 !== this.margin && (f("*").filter(function () {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), c = p.scrollTop(), d = p.scrollLeft(), this.el.addClass("fancybox-lock"), p.scrollTop(c).scrollLeft(d)); this.open(a)
        }, onUpdate: function () { this.fixed || this.update() }, afterClose: function (a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
    }; b.helpers.title = {
        defaults: { type: "float", position: "bottom" }, beforeShow: function (a) {
            var c =
                b.current, e = c.title, d = a.type; f.isFunction(e) && (e = e.call(c.element, c)); if (r(e) && "" !== f.trim(e)) { c = f('<div class="fancybox-title fancybox-title-' + d + '-wrap">' + e + "</div>"); switch (d) { case "inside": d = b.skin; break; case "outside": d = b.wrap; break; case "over": d = b.inner; break; default: d = b.skin, c.appendTo("body"), I && c.width(c.width()), c.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(c.css("margin-bottom"))) }c["top" === a.position ? "prependTo" : "appendTo"](d) }
        }
    }; f.fn.fancybox = function (a) {
        var c =
            f(this), e = this.selector || "", d = function (d) { var g = f(this).blur(), h = l, m, n; d.ctrlKey || d.altKey || d.shiftKey || d.metaKey || g.is(".fancybox-wrap") || (m = a.groupAttr || "data-fancybox-group", n = g.attr(m), n || (m = "rel", n = g.get(0)[m]), n && "" !== n && "nofollow" !== n && (g = e.length ? f(e) : c, g = g.filter("[" + m + '="' + n + '"]'), h = g.index(this)), a.index = h, !1 === b.open(g, a) || d.preventDefault()) }; a = a || {}; var l = a.index || 0; e && !1 !== a.live ? q.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", d) :
                c.unbind("click.fb-start").bind("click.fb-start", d); this.filter("[data-fancybox-start=1]").trigger("click"); return this
    }; q.ready(function () {
    f.scrollbarWidth === u && (f.scrollbarWidth = function () { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(); b = b.innerWidth() - b.height(99).innerWidth(); a.remove(); return b }); if (f.support.fixedPosition === u) {
        var a = f.support; var c = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"); var e = 20 === c[0].offsetTop ||
            15 === c[0].offsetTop; c.remove(); a.fixedPosition = e
    } f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") }); a = f(t).width(); J.addClass("fancybox-lock-test"); c = f(t).width(); J.removeClass("fancybox-lock-test"); f("<style type='text/css'>.fancybox-margin{margin-right:" + (c - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
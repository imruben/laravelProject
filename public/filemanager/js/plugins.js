!(function (e) {
    "use strict";
    e(function () {
        e.support.transition = (function () {
            var e = (function () {
                var e,
                    t = document.createElement("bootstrap"),
                    n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend",
                    };
                for (e in n) if (void 0 !== t.style[e]) return n[e];
            })();
            return e && { end: e };
        })();
    });
})(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (t, n) {
            (this.options = e.extend({}, e.fn.affix.defaults, n)),
                (this.$window = e(window)
                    .on(
                        "scroll.affix.data-api",
                        e.proxy(this.checkPosition, this)
                    )
                    .on(
                        "click.affix.data-api",
                        e.proxy(function () {
                            setTimeout(e.proxy(this.checkPosition, this), 1);
                        }, this)
                    )),
                (this.$element = e(t)),
                this.checkPosition();
        };
        t.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var t,
                    n = e(document).height(),
                    o = this.$window.scrollTop(),
                    i = this.$element.offset(),
                    a = this.options.offset,
                    r = a.bottom,
                    s = a.top,
                    c = "affix affix-top affix-bottom";
                "object" != typeof a && (r = s = a),
                    "function" == typeof s && (s = a.top()),
                    "function" == typeof r && (r = a.bottom()),
                    (t =
                        !(null != this.unpin && o + this.unpin <= i.top) &&
                        (null != r && i.top + this.$element.height() >= n - r
                            ? "bottom"
                            : null != s && o <= s && "top")),
                    this.affixed !== t &&
                        ((this.affixed = t),
                        (this.unpin = "bottom" == t ? i.top - o : null),
                        this.$element
                            .removeClass(c)
                            .addClass("affix" + (t ? "-" + t : "")));
            }
        };
        var n = e.fn.affix;
        (e.fn.affix = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("affix"),
                    a = "object" == typeof n && n;
                i || o.data("affix", (i = new t(this, a))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.affix.Constructor = t),
            (e.fn.affix.defaults = { offset: 0 }),
            (e.fn.affix.noConflict = function () {
                return (e.fn.affix = n), this;
            }),
            e(window).on("load", function () {
                e('[data-spy="affix"]').each(function () {
                    var t = e(this),
                        n = t.data();
                    (n.offset = n.offset || {}),
                        n.offsetBottom && (n.offset.bottom = n.offsetBottom),
                        n.offsetTop && (n.offset.top = n.offsetTop),
                        t.affix(n);
                });
            });
    })(window.jQuery),
    !(function (e) {
        "use strict";
        function t() {
            e(".dropdown-backdrop").remove(),
                e(o).each(function () {
                    n(e(this)).removeClass("open");
                });
        }
        function n(t) {
            var n,
                o = t.attr("data-target");
            return (
                o ||
                    ((o = t.attr("href")),
                    (o = o && /#/.test(o) && o.replace(/.*(?=#[^\s]*$)/, ""))),
                (n = o && e(o)),
                (n && n.length) || (n = t.parent()),
                n
            );
        }
        var o = "[data-toggle=dropdown]",
            i = function (t) {
                var n = e(t).on("click.dropdown.data-api", this.toggle);
                e("html").on("click.dropdown.data-api", function () {
                    n.parent().removeClass("open");
                });
            };
        i.prototype = {
            constructor: i,
            toggle: function (o) {
                var i,
                    a,
                    r = e(this);
                if (!r.is(".disabled, :disabled"))
                    return (
                        (i = n(r)),
                        (a = i.hasClass("open")),
                        t(),
                        a ||
                            ("ontouchstart" in document.documentElement &&
                                e('<div class="dropdown-backdrop"/>')
                                    .insertBefore(e(this))
                                    .on("click", t),
                            i.toggleClass("open")),
                        r.focus(),
                        !1
                    );
            },
            keydown: function (t) {
                var i, a, r, s, c;
                if (
                    /(38|40|27)/.test(t.keyCode) &&
                    ((i = e(this)),
                    t.preventDefault(),
                    t.stopPropagation(),
                    !i.is(".disabled, :disabled"))
                ) {
                    if (
                        ((r = n(i)),
                        (s = r.hasClass("open")),
                        !s || (s && 27 == t.keyCode))
                    )
                        return 27 == t.which && r.find(o).focus(), i.click();
                    (a = e("[role=menu] li:not(.divider):visible a", r)),
                        a.length &&
                            ((c = a.index(a.filter(":focus"))),
                            38 == t.keyCode && c > 0 && c--,
                            40 == t.keyCode && c < a.length - 1 && c++,
                            ~c || (c = 0),
                            a.eq(c).focus());
                }
            },
        };
        var a = e.fn.dropdown;
        (e.fn.dropdown = function (t) {
            return this.each(function () {
                var n = e(this),
                    o = n.data("dropdown");
                o || n.data("dropdown", (o = new i(this))),
                    "string" == typeof t && o[t].call(n);
            });
        }),
            (e.fn.dropdown.Constructor = i),
            (e.fn.dropdown.noConflict = function () {
                return (e.fn.dropdown = a), this;
            }),
            e(document)
                .on("click.dropdown.data-api", t)
                .on("click.dropdown.data-api", ".dropdown form", function (e) {
                    e.stopPropagation();
                })
                .on("click.dropdown.data-api", o, i.prototype.toggle)
                .on(
                    "keydown.dropdown.data-api",
                    o + ", [role=menu]",
                    i.prototype.keydown
                );
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = '[data-dismiss="alert"]',
            n = function (n) {
                e(n).on("click", t, this.close);
            };
        n.prototype.close = function (t) {
            function n() {
                o.trigger("closed").remove();
            }
            var o,
                i = e(this),
                a = i.attr("data-target");
            a ||
                ((a = i.attr("href")),
                (a = a && a.replace(/.*(?=#[^\s]*$)/, ""))),
                (o = e(a)),
                t && t.preventDefault(),
                o.length || (o = i.hasClass("alert") ? i : i.parent()),
                o.trigger((t = e.Event("close"))),
                t.isDefaultPrevented() ||
                    (o.removeClass("in"),
                    e.support.transition && o.hasClass("fade")
                        ? o.on(e.support.transition.end, n)
                        : n());
        };
        var o = e.fn.alert;
        (e.fn.alert = function (t) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("alert");
                i || o.data("alert", (i = new n(this))),
                    "string" == typeof t && i[t].call(o);
            });
        }),
            (e.fn.alert.Constructor = n),
            (e.fn.alert.noConflict = function () {
                return (e.fn.alert = o), this;
            }),
            e(document).on("click.alert.data-api", t, n.prototype.close);
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (t, n) {
            (this.$element = e(t)),
                (this.options = e.extend({}, e.fn.button.defaults, n));
        };
        (t.prototype.setState = function (e) {
            var t = "disabled",
                n = this.$element,
                o = n.data(),
                i = n.is("input") ? "val" : "html";
            (e += "Text"),
                o.resetText || n.data("resetText", n[i]()),
                n[i](o[e] || this.options[e]),
                setTimeout(function () {
                    "loadingText" == e
                        ? n.addClass(t).attr(t, t)
                        : n.removeClass(t).removeAttr(t);
                }, 0);
        }),
            (t.prototype.toggle = function () {
                var e = this.$element.closest('[data-toggle="buttons-radio"]');
                e && e.find(".active").removeClass("active"),
                    this.$element.toggleClass("active");
            });
        var n = e.fn.button;
        (e.fn.button = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("button"),
                    a = "object" == typeof n && n;
                i || o.data("button", (i = new t(this, a))),
                    "toggle" == n ? i.toggle() : n && i.setState(n);
            });
        }),
            (e.fn.button.defaults = { loadingText: "loading..." }),
            (e.fn.button.Constructor = t),
            (e.fn.button.noConflict = function () {
                return (e.fn.button = n), this;
            }),
            e(document).on(
                "click.button.data-api",
                "[data-toggle^=button]",
                function (t) {
                    var n = e(t.target);
                    n.hasClass("btn") || (n = n.closest(".btn")),
                        n.button("toggle");
                }
            );
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (t, n) {
            (this.$element = e(t)),
                (this.options = e.extend({}, e.fn.collapse.defaults, n)),
                this.options.parent && (this.$parent = e(this.options.parent)),
                this.options.toggle && this.toggle();
        };
        t.prototype = {
            constructor: t,
            dimension: function () {
                var e = this.$element.hasClass("width");
                return e ? "width" : "height";
            },
            show: function () {
                var t, n, o, i;
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    if (
                        ((t = this.dimension()),
                        (n = e.camelCase(["scroll", t].join("-"))),
                        (o =
                            this.$parent &&
                            this.$parent.find("> .accordion-group > .in")),
                        o && o.length)
                    ) {
                        if (((i = o.data("collapse")), i && i.transitioning))
                            return;
                        o.collapse("hide"), i || o.data("collapse", null);
                    }
                    this.$element[t](0),
                        this.transition("addClass", e.Event("show"), "shown"),
                        e.support.transition &&
                            this.$element[t](this.$element[0][n]);
                }
            },
            hide: function () {
                var t;
                !this.transitioning &&
                    this.$element.hasClass("in") &&
                    ((t = this.dimension()),
                    this.reset(this.$element[t]()),
                    this.transition("removeClass", e.Event("hide"), "hidden"),
                    this.$element[t](0));
            },
            reset: function (e) {
                var t = this.dimension();
                return (
                    this.$element.removeClass("collapse")[t](e || "auto")[0]
                        .offsetWidth,
                    this.$element[null !== e ? "addClass" : "removeClass"](
                        "collapse"
                    ),
                    this
                );
            },
            transition: function (t, n, o) {
                var i = this,
                    a = function () {
                        "show" == n.type && i.reset(),
                            (i.transitioning = 0),
                            i.$element.trigger(o);
                    };
                this.$element.trigger(n),
                    n.isDefaultPrevented() ||
                        ((this.transitioning = 1),
                        this.$element[t]("in"),
                        e.support.transition &&
                        this.$element.hasClass("collapse")
                            ? this.$element.one(e.support.transition.end, a)
                            : a());
            },
            toggle: function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            },
        };
        var n = e.fn.collapse;
        (e.fn.collapse = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("collapse"),
                    a = e.extend(
                        {},
                        e.fn.collapse.defaults,
                        o.data(),
                        "object" == typeof n && n
                    );
                i || o.data("collapse", (i = new t(this, a))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.collapse.defaults = { toggle: !0 }),
            (e.fn.collapse.Constructor = t),
            (e.fn.collapse.noConflict = function () {
                return (e.fn.collapse = n), this;
            }),
            e(document).on(
                "click.collapse.data-api",
                "[data-toggle=collapse]",
                function (t) {
                    var n,
                        o = e(this),
                        i =
                            o.attr("data-target") ||
                            t.preventDefault() ||
                            ((n = o.attr("href")) &&
                                n.replace(/.*(?=#[^\s]+$)/, "")),
                        a = e(i).data("collapse") ? "toggle" : o.data();
                    o[e(i).hasClass("in") ? "addClass" : "removeClass"](
                        "collapsed"
                    ),
                        e(i).collapse(a);
                }
            );
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (t, n) {
            (this.options = n),
                (this.$element = e(t).delegate(
                    '[data-dismiss="modal"]',
                    "click.dismiss.modal",
                    e.proxy(this.hide, this)
                )),
                this.options.remote &&
                    this.$element.find(".modal-body").load(this.options.remote);
        };
        t.prototype = {
            constructor: t,
            toggle: function () {
                return this[this.isShown ? "hide" : "show"]();
            },
            show: function () {
                var t = this,
                    n = e.Event("show");
                this.$element.trigger(n),
                    this.isShown ||
                        n.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.escape(),
                        this.backdrop(function () {
                            var n =
                                e.support.transition &&
                                t.$element.hasClass("fade");
                            t.$element.parent().length ||
                                t.$element.appendTo(document.body),
                                t.$element.show(),
                                n && t.$element[0].offsetWidth,
                                t.$element
                                    .addClass("in")
                                    .attr("aria-hidden", !1),
                                t.enforceFocus(),
                                n
                                    ? t.$element.one(
                                          e.support.transition.end,
                                          function () {
                                              t.$element
                                                  .focus()
                                                  .trigger("shown");
                                          }
                                      )
                                    : t.$element.focus().trigger("shown");
                        }));
            },
            hide: function (t) {
                t && t.preventDefault();
                (t = e.Event("hide")),
                    this.$element.trigger(t),
                    this.isShown &&
                        !t.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        e(document).off("focusin.modal"),
                        this.$element.removeClass("in").attr("aria-hidden", !0),
                        e.support.transition && this.$element.hasClass("fade")
                            ? this.hideWithTransition()
                            : this.hideModal());
            },
            enforceFocus: function () {
                var t = this;
                e(document).on("focusin.modal", function (e) {
                    t.$element[0] === e.target ||
                        t.$element.has(e.target).length ||
                        t.$element.focus();
                });
            },
            escape: function () {
                var e = this;
                this.isShown && this.options.keyboard
                    ? this.$element.on("keyup.dismiss.modal", function (t) {
                          27 == t.which && e.hide();
                      })
                    : this.isShown || this.$element.off("keyup.dismiss.modal");
            },
            hideWithTransition: function () {
                var t = this,
                    n = setTimeout(function () {
                        t.$element.off(e.support.transition.end), t.hideModal();
                    }, 500);
                this.$element.one(e.support.transition.end, function () {
                    clearTimeout(n), t.hideModal();
                });
            },
            hideModal: function () {
                var e = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        e.removeBackdrop(), e.$element.trigger("hidden");
                    });
            },
            removeBackdrop: function () {
                this.$backdrop && this.$backdrop.remove(),
                    (this.$backdrop = null);
            },
            backdrop: function (t) {
                var n = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = e.support.transition && n;
                    if (
                        ((this.$backdrop = e(
                            '<div class="modal-backdrop ' + n + '" />'
                        ).appendTo(document.body)),
                        this.$backdrop.click(
                            "static" == this.options.backdrop
                                ? e.proxy(
                                      this.$element[0].focus,
                                      this.$element[0]
                                  )
                                : e.proxy(this.hide, this)
                        ),
                        o && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !t)
                    )
                        return;
                    o ? this.$backdrop.one(e.support.transition.end, t) : t();
                } else
                    !this.isShown && this.$backdrop
                        ? (this.$backdrop.removeClass("in"),
                          e.support.transition && this.$element.hasClass("fade")
                              ? this.$backdrop.one(e.support.transition.end, t)
                              : t())
                        : t && t();
            },
        };
        var n = e.fn.modal;
        (e.fn.modal = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("modal"),
                    a = e.extend(
                        {},
                        e.fn.modal.defaults,
                        o.data(),
                        "object" == typeof n && n
                    );
                i || o.data("modal", (i = new t(this, a))),
                    "string" == typeof n ? i[n]() : a.show && i.show();
            });
        }),
            (e.fn.modal.defaults = { backdrop: !0, keyboard: !0, show: !0 }),
            (e.fn.modal.Constructor = t),
            (e.fn.modal.noConflict = function () {
                return (e.fn.modal = n), this;
            }),
            e(document).on(
                "click.modal.data-api",
                '[data-toggle="modal"]',
                function (t) {
                    var n = e(this),
                        o = n.attr("href"),
                        i = e(
                            n.attr("data-target") ||
                                (o && o.replace(/.*(?=#[^\s]+$)/, ""))
                        ),
                        a = i.data("modal")
                            ? "toggle"
                            : e.extend(
                                  { remote: !/#/.test(o) && o },
                                  i.data(),
                                  n.data()
                              );
                    t.preventDefault(),
                        i.modal(a).one("hide", function () {
                            n.focus();
                        });
                }
            );
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (e, t) {
            this.init("tooltip", e, t);
        };
        t.prototype = {
            constructor: t,
            init: function (t, n, o) {
                var i, a, r, s, c;
                for (
                    this.type = t,
                        this.$element = e(n),
                        this.options = this.getOptions(o),
                        this.enabled = !0,
                        r = this.options.trigger.split(" "),
                        c = r.length;
                    c--;

                )
                    (s = r[c]),
                        "click" == s
                            ? this.$element.on(
                                  "click." + this.type,
                                  this.options.selector,
                                  e.proxy(this.toggle, this)
                              )
                            : "manual" != s &&
                              ((i = "hover" == s ? "mouseenter" : "focus"),
                              (a = "hover" == s ? "mouseleave" : "blur"),
                              this.$element.on(
                                  i + "." + this.type,
                                  this.options.selector,
                                  e.proxy(this.enter, this)
                              ),
                              this.$element.on(
                                  a + "." + this.type,
                                  this.options.selector,
                                  e.proxy(this.leave, this)
                              ));
                this.options.selector
                    ? (this._options = e.extend({}, this.options, {
                          trigger: "manual",
                          selector: "",
                      }))
                    : this.fixTitle();
            },
            getOptions: function (t) {
                return (
                    (t = e.extend(
                        {},
                        e.fn[this.type].defaults,
                        this.$element.data(),
                        t
                    )),
                    t.delay &&
                        "number" == typeof t.delay &&
                        (t.delay = { show: t.delay, hide: t.delay }),
                    t
                );
            },
            enter: function (t) {
                var n,
                    o = e.fn[this.type].defaults,
                    i = {};
                return (
                    this._options &&
                        e.each(
                            this._options,
                            function (e, t) {
                                o[e] != t && (i[e] = t);
                            },
                            this
                        ),
                    (n = e(t.currentTarget)[this.type](i).data(this.type)),
                    n.options.delay && n.options.delay.show
                        ? (clearTimeout(this.timeout),
                          (n.hoverState = "in"),
                          void (this.timeout = setTimeout(function () {
                              "in" == n.hoverState && n.show();
                          }, n.options.delay.show)))
                        : n.show()
                );
            },
            leave: function (t) {
                var n = e(t.currentTarget)
                    [this.type](this._options)
                    .data(this.type);
                return (
                    this.timeout && clearTimeout(this.timeout),
                    n.options.delay && n.options.delay.hide
                        ? ((n.hoverState = "out"),
                          void (this.timeout = setTimeout(function () {
                              "out" == n.hoverState && n.hide();
                          }, n.options.delay.hide)))
                        : n.hide()
                );
            },
            show: function () {
                var t,
                    n,
                    o,
                    i,
                    a,
                    r,
                    s = e.Event("show");
                if (this.hasContent() && this.enabled) {
                    if ((this.$element.trigger(s), s.isDefaultPrevented()))
                        return;
                    switch (
                        ((t = this.tip()),
                        this.setContent(),
                        this.options.animation && t.addClass("fade"),
                        (a =
                            "function" == typeof this.options.placement
                                ? this.options.placement.call(
                                      this,
                                      t[0],
                                      this.$element[0]
                                  )
                                : this.options.placement),
                        t.detach().css({ top: 0, left: 0, display: "block" }),
                        this.options.container
                            ? t.appendTo(this.options.container)
                            : t.insertAfter(this.$element),
                        (n = this.getPosition()),
                        (o = t[0].offsetWidth),
                        (i = t[0].offsetHeight),
                        a)
                    ) {
                        case "bottom":
                            r = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - o / 2,
                            };
                            break;
                        case "top":
                            r = {
                                top: n.top - i,
                                left: n.left + n.width / 2 - o / 2,
                            };
                            break;
                        case "left":
                            r = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left - o,
                            };
                            break;
                        case "right":
                            r = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left + n.width,
                            };
                    }
                    this.applyPlacement(r, a), this.$element.trigger("shown");
                }
            },
            applyPlacement: function (e, t) {
                var n,
                    o,
                    i,
                    a,
                    r = this.tip(),
                    s = r[0].offsetWidth,
                    c = r[0].offsetHeight;
                r.offset(e).addClass(t).addClass("in"),
                    (n = r[0].offsetWidth),
                    (o = r[0].offsetHeight),
                    "top" == t && o != c && ((e.top = e.top + c - o), (a = !0)),
                    "bottom" == t || "top" == t
                        ? ((i = 0),
                          e.left < 0 &&
                              ((i = e.left * -2),
                              (e.left = 0),
                              r.offset(e),
                              (n = r[0].offsetWidth),
                              (o = r[0].offsetHeight)),
                          this.replaceArrow(i - s + n, n, "left"))
                        : this.replaceArrow(o - c, o, "top"),
                    a && r.offset(e);
            },
            replaceArrow: function (e, t, n) {
                this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "");
            },
            setContent: function () {
                var e = this.tip(),
                    t = this.getTitle();
                e
                    .find(".tooltip-inner")
                    [this.options.html ? "html" : "text"](t),
                    e.removeClass("fade in top bottom left right");
            },
            hide: function () {
                function t() {
                    var t = setTimeout(function () {
                        n.off(e.support.transition.end).detach();
                    }, 500);
                    n.one(e.support.transition.end, function () {
                        clearTimeout(t), n.detach();
                    });
                }
                var n = this.tip(),
                    o = e.Event("hide");
                if ((this.$element.trigger(o), !o.isDefaultPrevented()))
                    return (
                        n.removeClass("in"),
                        e.support.transition && this.$tip.hasClass("fade")
                            ? t()
                            : n.detach(),
                        this.$element.trigger("hidden"),
                        this
                    );
            },
            fixTitle: function () {
                var e = this.$element;
                (e.attr("title") ||
                    "string" != typeof e.attr("data-original-title")) &&
                    e
                        .attr("data-original-title", e.attr("title") || "")
                        .attr("title", "");
            },
            hasContent: function () {
                return this.getTitle();
            },
            getPosition: function () {
                var t = this.$element[0];
                return e.extend(
                    {},
                    "function" == typeof t.getBoundingClientRect
                        ? t.getBoundingClientRect()
                        : { width: t.offsetWidth, height: t.offsetHeight },
                    this.$element.offset()
                );
            },
            getTitle: function () {
                var e,
                    t = this.$element,
                    n = this.options;
                return (e =
                    t.attr("data-original-title") ||
                    ("function" == typeof n.title
                        ? n.title.call(t[0])
                        : n.title));
            },
            tip: function () {
                return (this.$tip = this.$tip || e(this.options.template));
            },
            arrow: function () {
                return (this.$arrow =
                    this.$arrow || this.tip().find(".tooltip-arrow"));
            },
            validate: function () {
                this.$element[0].parentNode ||
                    (this.hide(),
                    (this.$element = null),
                    (this.options = null));
            },
            enable: function () {
                this.enabled = !0;
            },
            disable: function () {
                this.enabled = !1;
            },
            toggleEnabled: function () {
                this.enabled = !this.enabled;
            },
            toggle: function (t) {
                var n = t
                    ? e(t.currentTarget)
                          [this.type](this._options)
                          .data(this.type)
                    : this;
                n.tip().hasClass("in") ? n.hide() : n.show();
            },
            destroy: function () {
                this.hide()
                    .$element.off("." + this.type)
                    .removeData(this.type);
            },
        };
        var n = e.fn.tooltip;
        (e.fn.tooltip = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("tooltip"),
                    a = "object" == typeof n && n;
                i || o.data("tooltip", (i = new t(this, a))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.tooltip.Constructor = t),
            (e.fn.tooltip.defaults = {
                animation: !0,
                placement: "top",
                selector: !1,
                template:
                    '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
            }),
            (e.fn.tooltip.noConflict = function () {
                return (e.fn.tooltip = n), this;
            });
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (e, t) {
            this.init("popover", e, t);
        };
        t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
            constructor: t,
            setContent: function () {
                var e = this.tip(),
                    t = this.getTitle(),
                    n = this.getContent();
                e
                    .find(".popover-title")
                    [this.options.html ? "html" : "text"](t),
                    e
                        .find(".popover-content")
                        [this.options.html ? "html" : "text"](n),
                    e.removeClass("fade top bottom left right in");
            },
            hasContent: function () {
                return this.getTitle() || this.getContent();
            },
            getContent: function () {
                var e,
                    t = this.$element,
                    n = this.options;
                return (e =
                    ("function" == typeof n.content
                        ? n.content.call(t[0])
                        : n.content) || t.attr("data-content"));
            },
            tip: function () {
                return (
                    this.$tip || (this.$tip = e(this.options.template)),
                    this.$tip
                );
            },
            destroy: function () {
                this.hide()
                    .$element.off("." + this.type)
                    .removeData(this.type);
            },
        });
        var n = e.fn.popover;
        (e.fn.popover = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("popover"),
                    a = "object" == typeof n && n;
                i || o.data("popover", (i = new t(this, a))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.popover.Constructor = t),
            (e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                    '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (e.fn.popover.noConflict = function () {
                return (e.fn.popover = n), this;
            });
    })(window.jQuery),
    !(function (e) {
        "use strict";
        function t(t, n) {
            var o,
                i = e.proxy(this.process, this),
                a = e(e(t).is("body") ? window : t);
            (this.options = e.extend({}, e.fn.scrollspy.defaults, n)),
                (this.$scrollElement = a.on("scroll.scroll-spy.data-api", i)),
                (this.selector =
                    (this.options.target ||
                        ((o = e(t).attr("href")) &&
                            o.replace(/.*(?=#[^\s]+$)/, "")) ||
                        "") + " .nav li > a"),
                (this.$body = e("body")),
                this.refresh(),
                this.process();
        }
        t.prototype = {
            constructor: t,
            refresh: function () {
                var t,
                    n = this;
                (this.offsets = e([])),
                    (this.targets = e([])),
                    (t = this.$body
                        .find(this.selector)
                        .map(function () {
                            var t = e(this),
                                o = t.data("target") || t.attr("href"),
                                i = /^#\w/.test(o) && e(o);
                            return (
                                (i &&
                                    i.length && [
                                        [
                                            i.position().top +
                                                (!e.isWindow(
                                                    n.$scrollElement.get(0)
                                                ) &&
                                                    n.$scrollElement.scrollTop()),
                                            o,
                                        ],
                                    ]) ||
                                null
                            );
                        })
                        .sort(function (e, t) {
                            return e[0] - t[0];
                        })
                        .each(function () {
                            n.offsets.push(this[0]), n.targets.push(this[1]);
                        }));
            },
            process: function () {
                var e,
                    t = this.$scrollElement.scrollTop() + this.options.offset,
                    n =
                        this.$scrollElement[0].scrollHeight ||
                        this.$body[0].scrollHeight,
                    o = n - this.$scrollElement.height(),
                    i = this.offsets,
                    a = this.targets,
                    r = this.activeTarget;
                if (t >= o) return r != (e = a.last()[0]) && this.activate(e);
                for (e = i.length; e--; )
                    r != a[e] &&
                        t >= i[e] &&
                        (!i[e + 1] || t <= i[e + 1]) &&
                        this.activate(a[e]);
            },
            activate: function (t) {
                var n, o;
                (this.activeTarget = t),
                    e(this.selector).parent(".active").removeClass("active"),
                    (o =
                        this.selector +
                        '[data-target="' +
                        t +
                        '"],' +
                        this.selector +
                        '[href="' +
                        t +
                        '"]'),
                    (n = e(o).parent("li").addClass("active")),
                    n.parent(".dropdown-menu").length &&
                        (n = n.closest("li.dropdown").addClass("active")),
                    n.trigger("activate");
            },
        };
        var n = e.fn.scrollspy;
        (e.fn.scrollspy = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("scrollspy"),
                    a = "object" == typeof n && n;
                i || o.data("scrollspy", (i = new t(this, a))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.scrollspy.Constructor = t),
            (e.fn.scrollspy.defaults = { offset: 10 }),
            (e.fn.scrollspy.noConflict = function () {
                return (e.fn.scrollspy = n), this;
            }),
            e(window).on("load", function () {
                e('[data-spy="scroll"]').each(function () {
                    var t = e(this);
                    t.scrollspy(t.data());
                });
            });
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (t) {
            this.element = e(t);
        };
        t.prototype = {
            constructor: t,
            show: function () {
                var t,
                    n,
                    o,
                    i = this.element,
                    a = i.closest("ul:not(.dropdown-menu)"),
                    r = i.attr("data-target");
                r ||
                    ((r = i.attr("href")),
                    (r = r && r.replace(/.*(?=#[^\s]*$)/, ""))),
                    i.parent("li").hasClass("active") ||
                        ((t = a.find(".active:last a")[0]),
                        (o = e.Event("show", { relatedTarget: t })),
                        i.trigger(o),
                        o.isDefaultPrevented() ||
                            ((n = e(r)),
                            this.activate(i.parent("li"), a),
                            this.activate(n, n.parent(), function () {
                                i.trigger({ type: "shown", relatedTarget: t });
                            })));
            },
            activate: function (t, n, o) {
                function i() {
                    a
                        .removeClass("active")
                        .find("> .dropdown-menu > .active")
                        .removeClass("active"),
                        t.addClass("active"),
                        r
                            ? (t[0].offsetWidth, t.addClass("in"))
                            : t.removeClass("fade"),
                        t.parent(".dropdown-menu") &&
                            t.closest("li.dropdown").addClass("active"),
                        o && o();
                }
                var a = n.find("> .active"),
                    r = o && e.support.transition && a.hasClass("fade");
                r ? a.one(e.support.transition.end, i) : i(),
                    a.removeClass("in");
            },
        };
        var n = e.fn.tab;
        (e.fn.tab = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("tab");
                i || o.data("tab", (i = new t(this))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.tab.Constructor = t),
            (e.fn.tab.noConflict = function () {
                return (e.fn.tab = n), this;
            }),
            e(document).on(
                "click.tab.data-api",
                '[data-toggle="tab"], [data-toggle="pill"]',
                function (t) {
                    t.preventDefault(), e(this).tab("show");
                }
            );
    })(window.jQuery),
    !(function (e) {
        "use strict";
        var t = function (t, n) {
            (this.$element = e(t)),
                (this.options = e.extend({}, e.fn.typeahead.defaults, n)),
                (this.matcher = this.options.matcher || this.matcher),
                (this.sorter = this.options.sorter || this.sorter),
                (this.highlighter =
                    this.options.highlighter || this.highlighter),
                (this.updater = this.options.updater || this.updater),
                (this.source = this.options.source),
                (this.$menu = e(this.options.menu)),
                (this.shown = !1),
                this.listen();
        };
        t.prototype = {
            constructor: t,
            select: function () {
                var e = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(e)).change(), this.hide();
            },
            updater: function (e) {
                return e;
            },
            show: function () {
                var t = e.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight,
                });
                return (
                    this.$menu
                        .insertAfter(this.$element)
                        .css({ top: t.top + t.height, left: t.left })
                        .show(),
                    (this.shown = !0),
                    this
                );
            },
            hide: function () {
                return this.$menu.hide(), (this.shown = !1), this;
            },
            lookup: function (t) {
                var n;
                return (
                    (this.query = this.$element.val()),
                    !this.query || this.query.length < this.options.minLength
                        ? this.shown
                            ? this.hide()
                            : this
                        : ((n = e.isFunction(this.source)
                              ? this.source(
                                    this.query,
                                    e.proxy(this.process, this)
                                )
                              : this.source),
                          n ? this.process(n) : this)
                );
            },
            process: function (t) {
                var n = this;
                return (
                    (t = e.grep(t, function (e) {
                        return n.matcher(e);
                    })),
                    (t = this.sorter(t)),
                    t.length
                        ? this.render(t.slice(0, this.options.items)).show()
                        : this.shown
                        ? this.hide()
                        : this
                );
            },
            matcher: function (e) {
                return ~e.toLowerCase().indexOf(this.query.toLowerCase());
            },
            sorter: function (e) {
                for (var t, n = [], o = [], i = []; (t = e.shift()); )
                    t.toLowerCase().indexOf(this.query.toLowerCase())
                        ? ~t.indexOf(this.query)
                            ? o.push(t)
                            : i.push(t)
                        : n.push(t);
                return n.concat(o, i);
            },
            highlighter: function (e) {
                var t = this.query.replace(
                    /[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                    "\\$&"
                );
                return e.replace(
                    new RegExp("(" + t + ")", "ig"),
                    function (e, t) {
                        return "<strong>" + t + "</strong>";
                    }
                );
            },
            render: function (t) {
                var n = this;
                return (
                    (t = e(t).map(function (t, o) {
                        return (
                            (t = e(n.options.item).attr("data-value", o)),
                            t.find("a").html(n.highlighter(o)),
                            t[0]
                        );
                    })),
                    t.first().addClass("active"),
                    this.$menu.html(t),
                    this
                );
            },
            next: function (t) {
                var n = this.$menu.find(".active").removeClass("active"),
                    o = n.next();
                o.length || (o = e(this.$menu.find("li")[0])),
                    o.addClass("active");
            },
            prev: function (e) {
                var t = this.$menu.find(".active").removeClass("active"),
                    n = t.prev();
                n.length || (n = this.$menu.find("li").last()),
                    n.addClass("active");
            },
            listen: function () {
                this.$element
                    .on("focus", e.proxy(this.focus, this))
                    .on("blur", e.proxy(this.blur, this))
                    .on("keypress", e.proxy(this.keypress, this))
                    .on("keyup", e.proxy(this.keyup, this)),
                    this.eventSupported("keydown") &&
                        this.$element.on(
                            "keydown",
                            e.proxy(this.keydown, this)
                        ),
                    this.$menu
                        .on("click", e.proxy(this.click, this))
                        .on("mouseenter", "li", e.proxy(this.mouseenter, this))
                        .on("mouseleave", "li", e.proxy(this.mouseleave, this));
            },
            eventSupported: function (e) {
                var t = e in this.$element;
                return (
                    t ||
                        (this.$element.setAttribute(e, "return;"),
                        (t = "function" == typeof this.$element[e])),
                    t
                );
            },
            move: function (e) {
                if (this.shown) {
                    switch (e.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            e.preventDefault();
                            break;
                        case 38:
                            e.preventDefault(), this.prev();
                            break;
                        case 40:
                            e.preventDefault(), this.next();
                    }
                    e.stopPropagation();
                }
            },
            keydown: function (t) {
                (this.suppressKeyPressRepeat = ~e.inArray(
                    t.keyCode,
                    [40, 38, 9, 13, 27]
                )),
                    this.move(t);
            },
            keypress: function (e) {
                this.suppressKeyPressRepeat || this.move(e);
            },
            keyup: function (e) {
                switch (e.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup();
                }
                e.stopPropagation(), e.preventDefault();
            },
            focus: function (e) {
                this.focused = !0;
            },
            blur: function (e) {
                (this.focused = !1),
                    !this.mousedover && this.shown && this.hide();
            },
            click: function (e) {
                e.stopPropagation(),
                    e.preventDefault(),
                    this.select(),
                    this.$element.focus();
            },
            mouseenter: function (t) {
                (this.mousedover = !0),
                    this.$menu.find(".active").removeClass("active"),
                    e(t.currentTarget).addClass("active");
            },
            mouseleave: function (e) {
                (this.mousedover = !1),
                    !this.focused && this.shown && this.hide();
            },
        };
        var n = e.fn.typeahead;
        (e.fn.typeahead = function (n) {
            return this.each(function () {
                var o = e(this),
                    i = o.data("typeahead"),
                    a = "object" == typeof n && n;
                i || o.data("typeahead", (i = new t(this, a))),
                    "string" == typeof n && i[n]();
            });
        }),
            (e.fn.typeahead.defaults = {
                source: [],
                items: 8,
                menu: '<ul class="typeahead dropdown-menu"></ul>',
                item: '<li><a href="#"></a></li>',
                minLength: 1,
            }),
            (e.fn.typeahead.Constructor = t),
            (e.fn.typeahead.noConflict = function () {
                return (e.fn.typeahead = n), this;
            }),
            e(document).on(
                "focus.typeahead.data-api",
                '[data-provide="typeahead"]',
                function (t) {
                    var n = e(this);
                    n.data("typeahead") || n.typeahead(n.data());
                }
            );
    })(window.jQuery),
    (function (e) {
        "use strict";
        function t(e, n) {
            if (!(this instanceof t)) {
                var o = new t(e, n);
                return o.open(), o;
            }
            (this.id = t.id++),
                this.setup(e, n),
                this.chainCallbacks(t._callbackChain);
        }
        function n(e, t) {
            var n = {};
            for (var o in e) o in t && ((n[o] = e[o]), delete e[o]);
            return n;
        }
        function o(e, t) {
            var n = {},
                o = new RegExp("^" + t + "([A-Z])(.*)");
            for (var i in e) {
                var a = i.match(o);
                if (a) {
                    var r = (
                        a[1] + a[2].replace(/([A-Z])/g, "-$1")
                    ).toLowerCase();
                    n[r] = e[i];
                }
            }
            return n;
        }
        if ("undefined" == typeof e)
            return void (
                "console" in window &&
                window.console.info(
                    "Too much lightness, Featherlight needs jQuery."
                )
            );
        if (e.fn.jquery.match(/-ajax/))
            return void (
                "console" in window &&
                window.console.info(
                    "Featherlight needs regular jQuery, not the slim version."
                )
            );
        var i = [],
            a = function (t) {
                return (i = e.grep(i, function (e) {
                    return e !== t && e.$instance.closest("body").length > 0;
                }));
            },
            r = {
                allow: 1,
                allowfullscreen: 1,
                frameborder: 1,
                height: 1,
                longdesc: 1,
                marginheight: 1,
                marginwidth: 1,
                mozallowfullscreen: 1,
                name: 1,
                referrerpolicy: 1,
                sandbox: 1,
                scrolling: 1,
                src: 1,
                srcdoc: 1,
                style: 1,
                webkitallowfullscreen: 1,
                width: 1,
            },
            s = { keyup: "onKeyUp", resize: "onResize" },
            c = function (n) {
                e.each(t.opened().reverse(), function () {
                    if (!n.isDefaultPrevented() && !1 === this[s[n.type]](n))
                        return n.preventDefault(), n.stopPropagation(), !1;
                });
            },
            l = function (n) {
                if (n !== t._globalHandlerInstalled) {
                    t._globalHandlerInstalled = n;
                    var o = e
                        .map(s, function (e, n) {
                            return n + "." + t.prototype.namespace;
                        })
                        .join(" ");
                    e(window)[n ? "on" : "off"](o, c);
                }
            };
        (t.prototype = {
            constructor: t,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !1,
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !1,
            otherClose: null,
            beforeOpen: e.noop,
            beforeContent: e.noop,
            beforeClose: e.noop,
            afterOpen: e.noop,
            afterContent: e.noop,
            afterClose: e.noop,
            onKeyUp: e.noop,
            onResize: e.noop,
            type: null,
            contentFilters: [
                "jquery",
                "image",
                "html",
                "ajax",
                "iframe",
                "text",
            ],
            setup: function (t, n) {
                "object" != typeof t ||
                    t instanceof e != !1 ||
                    n ||
                    ((n = t), (t = void 0));
                var o = e.extend(this, n, { target: t }),
                    i = o.resetCss ? o.namespace + "-reset" : o.namespace,
                    a = e(
                        o.background ||
                            [
                                '<div class="' + i + "-loading " + i + '">',
                                '<div class="' + i + '-content">',
                                '<button class="' +
                                    i +
                                    "-close-icon " +
                                    o.namespace +
                                    '-close" aria-label="Close">',
                                o.closeIcon,
                                "</button>",
                                '<div class="' +
                                    o.namespace +
                                    '-inner">' +
                                    o.loading +
                                    "</div>",
                                "</div>",
                                "</div>",
                            ].join("")
                    ),
                    r =
                        "." +
                        o.namespace +
                        "-close" +
                        (o.otherClose ? "," + o.otherClose : "");
                return (
                    (o.$instance = a.clone().addClass(o.variant)),
                    o.$instance.on(
                        o.closeTrigger + "." + o.namespace,
                        function (t) {
                            if (!t.isDefaultPrevented()) {
                                var n = e(t.target);
                                (("background" === o.closeOnClick &&
                                    n.is("." + o.namespace)) ||
                                    "anywhere" === o.closeOnClick ||
                                    n.closest(r).length) &&
                                    (o.close(t), t.preventDefault());
                            }
                        }
                    ),
                    this
                );
            },
            getContent: function () {
                if (this.persist !== !1 && this.$content) return this.$content;
                var t = this,
                    n = this.constructor.contentFilters,
                    o = function (e) {
                        return t.$currentTarget && t.$currentTarget.attr(e);
                    },
                    i = o(t.targetAttr),
                    a = t.target || i || "",
                    r = n[t.type];
                if (
                    (!r && a in n && ((r = n[a]), (a = t.target && i)),
                    (a = a || o("href") || ""),
                    !r)
                )
                    for (var s in n) t[s] && ((r = n[s]), (a = t[s]));
                if (!r) {
                    var c = a;
                    if (
                        ((a = null),
                        e.each(t.contentFilters, function () {
                            return (
                                (r = n[this]),
                                r.test && (a = r.test(c)),
                                !a &&
                                    r.regex &&
                                    c.match &&
                                    c.match(r.regex) &&
                                    (a = c),
                                !a
                            );
                        }),
                        !a)
                    )
                        return (
                            "console" in window &&
                                window.console.error(
                                    "Featherlight: no content filter found " +
                                        (c
                                            ? ' for "' + c + '"'
                                            : " (no target specified)")
                                ),
                            !1
                        );
                }
                return r.process.call(t, a);
            },
            setContent: function (t) {
                return (
                    this.$instance.removeClass(this.namespace + "-loading"),
                    this.$instance.toggleClass(
                        this.namespace + "-iframe",
                        t.is("iframe")
                    ),
                    this.$instance
                        .find("." + this.namespace + "-inner")
                        .not(t)
                        .slice(1)
                        .remove()
                        .end()
                        .replaceWith(
                            e.contains(this.$instance[0], t[0]) ? "" : t
                        ),
                    (this.$content = t.addClass(this.namespace + "-inner")),
                    this
                );
            },
            open: function (t) {
                var n = this;
                if (
                    (n.$instance.hide().appendTo(n.root),
                    !((t && t.isDefaultPrevented()) || n.beforeOpen(t) === !1))
                ) {
                    t && t.preventDefault();
                    var o = n.getContent();
                    if (o)
                        return (
                            i.push(n),
                            l(!0),
                            n.$instance.fadeIn(n.openSpeed),
                            n.beforeContent(t),
                            e
                                .when(o)
                                .always(function (e) {
                                    n.setContent(e), n.afterContent(t);
                                })
                                .then(n.$instance.promise())
                                .done(function () {
                                    n.afterOpen(t);
                                })
                        );
                }
                return n.$instance.detach(), e.Deferred().reject().promise();
            },
            close: function (t) {
                var n = this,
                    o = e.Deferred();
                return (
                    n.beforeClose(t) === !1
                        ? o.reject()
                        : (0 === a(n).length && l(!1),
                          n.$instance.fadeOut(n.closeSpeed, function () {
                              n.$instance.detach(),
                                  n.afterClose(t),
                                  o.resolve();
                          })),
                    o.promise()
                );
            },
            resize: function (e, t) {
                if (e && t) {
                    this.$content.css("width", "").css("height", "");
                    var n = Math.max(
                        e / (this.$content.parent().width() - 1),
                        t / (this.$content.parent().height() - 1)
                    );
                    n > 1 &&
                        ((n = t / Math.floor(t / n)),
                        this.$content
                            .css("width", "" + e / n + "px")
                            .css("height", "" + t / n + "px"));
                }
            },
            chainCallbacks: function (t) {
                for (var n in t)
                    this[n] = e.proxy(t[n], this, e.proxy(this[n], this));
            },
        }),
            e.extend(t, {
                id: 0,
                autoBind: "[data-featherlight]",
                defaults: t.prototype,
                contentFilters: {
                    jquery: {
                        regex: /^[#.]\w/,
                        test: function (t) {
                            return t instanceof e && t;
                        },
                        process: function (t) {
                            return this.persist !== !1 ? e(t) : e(t).clone(!0);
                        },
                    },
                    image: {
                        regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                        process: function (t) {
                            var n = this,
                                o = e.Deferred(),
                                i = new Image(),
                                a = e(
                                    '<img src="' +
                                        t +
                                        '" alt="" class="' +
                                        n.namespace +
                                        '-image" />'
                                );
                            return (
                                (i.onload = function () {
                                    (a.naturalWidth = i.width),
                                        (a.naturalHeight = i.height),
                                        o.resolve(a);
                                }),
                                (i.onerror = function () {
                                    o.reject(a);
                                }),
                                (i.src = t),
                                o.promise()
                            );
                        },
                    },
                    html: {
                        regex: /^\s*<[\w!][^<]*>/,
                        process: function (t) {
                            return e(t);
                        },
                    },
                    ajax: {
                        regex: /./,
                        process: function (t) {
                            var n = e.Deferred(),
                                o = e("<div></div>").load(t, function (e, t) {
                                    "error" !== t && n.resolve(o.contents()),
                                        n.fail();
                                });
                            return n.promise();
                        },
                    },
                    iframe: {
                        process: function (t) {
                            var i = new e.Deferred(),
                                a = e("<iframe/>"),
                                s = o(this, "iframe"),
                                c = n(s, r);
                            return (
                                a
                                    .hide()
                                    .attr("src", t)
                                    .attr(c)
                                    .css(s)
                                    .on("load", function () {
                                        i.resolve(a.show());
                                    })
                                    .appendTo(
                                        this.$instance.find(
                                            "." + this.namespace + "-content"
                                        )
                                    ),
                                i.promise()
                            );
                        },
                    },
                    text: {
                        process: function (t) {
                            return e("<div>", { text: t });
                        },
                    },
                },
                functionAttributes: [
                    "beforeOpen",
                    "afterOpen",
                    "beforeContent",
                    "afterContent",
                    "beforeClose",
                    "afterClose",
                ],
                readElementConfig: function (t, n) {
                    var o = this,
                        i = new RegExp("^data-" + n + "-(.*)"),
                        a = {};
                    return (
                        t &&
                            t.attributes &&
                            e.each(t.attributes, function () {
                                var t = this.name.match(i);
                                if (t) {
                                    var n = this.value,
                                        r = e.camelCase(t[1]);
                                    if (e.inArray(r, o.functionAttributes) >= 0)
                                        n = new Function(n);
                                    else
                                        try {
                                            n = JSON.parse(n);
                                        } catch (s) {}
                                    a[r] = n;
                                }
                            }),
                        a
                    );
                },
                extend: function (t, n) {
                    var o = function () {
                        this.constructor = t;
                    };
                    return (
                        (o.prototype = this.prototype),
                        (t.prototype = new o()),
                        (t.__super__ = this.prototype),
                        e.extend(t, this, n),
                        (t.defaults = t.prototype),
                        t
                    );
                },
                attach: function (t, n, o) {
                    var i = this;
                    "object" != typeof n ||
                        n instanceof e != !1 ||
                        o ||
                        ((o = n), (n = void 0)),
                        (o = e.extend({}, o));
                    var a,
                        r = o.namespace || i.defaults.namespace,
                        s = e.extend(
                            {},
                            i.defaults,
                            i.readElementConfig(t[0], r),
                            o
                        ),
                        c = function (r) {
                            var c = e(r.currentTarget),
                                l = e.extend(
                                    { $source: t, $currentTarget: c },
                                    i.readElementConfig(t[0], s.namespace),
                                    i.readElementConfig(
                                        r.currentTarget,
                                        s.namespace
                                    ),
                                    o
                                ),
                                u =
                                    a ||
                                    c.data("featherlight-persisted") ||
                                    new i(n, l);
                            "shared" === u.persist
                                ? (a = u)
                                : u.persist !== !1 &&
                                  c.data("featherlight-persisted", u),
                                l.$currentTarget.blur &&
                                    l.$currentTarget.blur(),
                                u.open(r);
                        };
                    return (
                        t.on(s.openTrigger + "." + s.namespace, s.filter, c),
                        { filter: s.filter, handler: c }
                    );
                },
                current: function () {
                    var e = this.opened();
                    return e[e.length - 1] || null;
                },
                opened: function () {
                    var t = this;
                    return (
                        a(),
                        e.grep(i, function (e) {
                            return e instanceof t;
                        })
                    );
                },
                close: function (e) {
                    var t = this.current();
                    if (t) return t.close(e);
                },
                _onReady: function () {
                    var t = this;
                    if (t.autoBind) {
                        var n = e(t.autoBind);
                        n.each(function () {
                            t.attach(e(this));
                        }),
                            e(document).on("click", t.autoBind, function (o) {
                                if (!o.isDefaultPrevented()) {
                                    var i = e(o.currentTarget),
                                        a = n.length;
                                    if (((n = n.add(i)), a !== n.length)) {
                                        var r = t.attach(i);
                                        (!r.filter ||
                                            e(o.target).parentsUntil(
                                                i,
                                                r.filter
                                            ).length > 0) &&
                                            r.handler(o);
                                    }
                                }
                            });
                    }
                },
                _callbackChain: {
                    onKeyUp: function (t, n) {
                        return 27 === n.keyCode
                            ? (this.closeOnEsc && e.featherlight.close(n), !1)
                            : t(n);
                    },
                    beforeOpen: function (t, n) {
                        return (
                            e(document.documentElement).addClass(
                                "with-featherlight"
                            ),
                            (this._previouslyActive = document.activeElement),
                            (this._$previouslyTabbable = e(
                                "a, input, select, textarea, iframe, button, iframe, [contentEditable=true]"
                            )
                                .not("[tabindex]")
                                .not(this.$instance.find("button"))),
                            (this._$previouslyWithTabIndex =
                                e("[tabindex]").not('[tabindex="-1"]')),
                            (this._previousWithTabIndices =
                                this._$previouslyWithTabIndex.map(function (
                                    t,
                                    n
                                ) {
                                    return e(n).attr("tabindex");
                                })),
                            this._$previouslyWithTabIndex
                                .add(this._$previouslyTabbable)
                                .attr("tabindex", -1),
                            document.activeElement.blur &&
                                document.activeElement.blur(),
                            t(n)
                        );
                    },
                    afterClose: function (n, o) {
                        var i = n(o),
                            a = this;
                        return (
                            this._$previouslyTabbable.removeAttr("tabindex"),
                            this._$previouslyWithTabIndex.each(function (t, n) {
                                e(n).attr(
                                    "tabindex",
                                    a._previousWithTabIndices[t]
                                );
                            }),
                            this._previouslyActive.focus(),
                            0 === t.opened().length &&
                                e(document.documentElement).removeClass(
                                    "with-featherlight"
                                ),
                            i
                        );
                    },
                    onResize: function (e, t) {
                        return (
                            this.resize(
                                this.$content.naturalWidth,
                                this.$content.naturalHeight
                            ),
                            e(t)
                        );
                    },
                    afterContent: function (e, t) {
                        var n = e(t);
                        return (
                            this.$instance
                                .find("[autofocus]:not([disabled])")
                                .focus(),
                            this.onResize(t),
                            n
                        );
                    },
                },
            }),
            (e.featherlight = t),
            (e.fn.featherlight = function (e, n) {
                return t.attach(this, e, n), this;
            }),
            e(document).ready(function () {
                t._onReady();
            });
    })(jQuery),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : e("object" == typeof exports ? require("jquery") : jQuery);
    })(function (e) {
        "use strict";
        function t(e) {
            for (var t, n = e.split(/\s+/), o = [], i = 0; (t = n[i]); i++)
                (t = t.charAt(0).toUpperCase()), o.push(t);
            return o;
        }
        function n(t) {
            return (t.id && e('label[for="' + t.id + '"]').val()) || t.name;
        }
        function o(t, i, a) {
            return (
                a || (a = 0),
                i.each(function () {
                    var i,
                        r,
                        s = e(this),
                        c = this,
                        l = this.nodeName.toLowerCase();
                    switch (
                        ("label" === l &&
                            s.find("input, textarea, select").length &&
                            ((i = s.text()),
                            (s = s.children().first()),
                            (c = s.get(0)),
                            (l = c.nodeName.toLowerCase())),
                        l)
                    ) {
                        case "menu":
                            (r = { name: s.attr("label"), items: {} }),
                                (a = o(r.items, s.children(), a));
                            break;
                        case "a":
                        case "button":
                            r = {
                                name: s.text(),
                                disabled: !!s.attr("disabled"),
                                callback: (function () {
                                    return function () {
                                        s.click();
                                    };
                                })(),
                            };
                            break;
                        case "menuitem":
                        case "command":
                            switch (s.attr("type")) {
                                case void 0:
                                case "command":
                                case "menuitem":
                                    r = {
                                        name: s.attr("label"),
                                        disabled: !!s.attr("disabled"),
                                        icon: s.attr("icon"),
                                        callback: (function () {
                                            return function () {
                                                s.click();
                                            };
                                        })(),
                                    };
                                    break;
                                case "checkbox":
                                    r = {
                                        type: "checkbox",
                                        disabled: !!s.attr("disabled"),
                                        name: s.attr("label"),
                                        selected: !!s.attr("checked"),
                                    };
                                    break;
                                case "radio":
                                    r = {
                                        type: "radio",
                                        disabled: !!s.attr("disabled"),
                                        name: s.attr("label"),
                                        radio: s.attr("radiogroup"),
                                        value: s.attr("id"),
                                        selected: !!s.attr("checked"),
                                    };
                                    break;
                                default:
                                    r = void 0;
                            }
                            break;
                        case "hr":
                            r = "-------";
                            break;
                        case "input":
                            switch (s.attr("type")) {
                                case "text":
                                    r = {
                                        type: "text",
                                        name: i || n(c),
                                        disabled: !!s.attr("disabled"),
                                        value: s.val(),
                                    };
                                    break;
                                case "checkbox":
                                    r = {
                                        type: "checkbox",
                                        name: i || n(c),
                                        disabled: !!s.attr("disabled"),
                                        selected: !!s.attr("checked"),
                                    };
                                    break;
                                case "radio":
                                    r = {
                                        type: "radio",
                                        name: i || n(c),
                                        disabled: !!s.attr("disabled"),
                                        radio: !!s.attr("name"),
                                        value: s.val(),
                                        selected: !!s.attr("checked"),
                                    };
                                    break;
                                default:
                                    r = void 0;
                            }
                            break;
                        case "select":
                            (r = {
                                type: "select",
                                name: i || n(c),
                                disabled: !!s.attr("disabled"),
                                selected: s.val(),
                                options: {},
                            }),
                                s.children().each(function () {
                                    r.options[this.value] = e(this).text();
                                });
                            break;
                        case "textarea":
                            r = {
                                type: "textarea",
                                name: i || n(c),
                                disabled: !!s.attr("disabled"),
                                value: s.val(),
                            };
                            break;
                        case "label":
                            break;
                        default:
                            r = { type: "html", html: s.clone(!0) };
                    }
                    r && (a++, (t["key" + a] = r));
                }),
                a
            );
        }
        (e.support.htmlMenuitem = "HTMLMenuItemElement" in window),
            (e.support.htmlCommand = "HTMLCommandElement" in window),
            (e.support.eventSelectstart =
                "onselectstart" in document.documentElement),
            (e.ui && e.widget) ||
                (e.cleanData = (function (t) {
                    return function (n) {
                        var o, i, a;
                        for (a = 0; null != (i = n[a]); a++)
                            try {
                                (o = e._data(i, "events")),
                                    o &&
                                        o.remove &&
                                        e(i).triggerHandler("remove");
                            } catch (r) {}
                        t(n);
                    };
                })(e.cleanData));
        var i = null,
            a = !1,
            r = e(window),
            s = 0,
            c = {},
            l = {},
            u = {},
            d = {
                selector: null,
                appendTo: null,
                trigger: "right",
                autoHide: !1,
                delay: 200,
                reposition: !0,
                classNames: {
                    hover: "hover",
                    disabled: "disabled",
                    visible: "visible",
                    notSelectable: "not-selectable",
                    icon: "icon",
                    iconEdit: "icon-edit",
                    iconCut: "icon-cut",
                    iconCopy: "icon-copy",
                    iconPaste: "icon-paste",
                    iconDelete: "icon-delete",
                    iconAdd: "icon-add",
                    iconQuit: "icon-quit",
                },
                determinePosition: function (t) {
                    if (e.ui && e.ui.position)
                        t.css("display", "block")
                            .position({
                                my: "center top",
                                at: "center bottom",
                                of: this,
                                offset: "0 5",
                                collision: "fit",
                            })
                            .css("display", "none");
                    else {
                        var n = this.offset();
                        (n.top += this.outerHeight()),
                            (n.left +=
                                this.outerWidth() / 2 - t.outerWidth() / 2),
                            t.css(n);
                    }
                },
                position: function (e, t, n) {
                    var o;
                    if (!t && !n)
                        return void e.determinePosition.call(this, e.$menu);
                    o =
                        "maintain" === t && "maintain" === n
                            ? e.$menu.position()
                            : { top: n, left: t };
                    var i = r.scrollTop() + r.height(),
                        a = r.scrollLeft() + r.width(),
                        s = e.$menu.outerHeight(),
                        c = e.$menu.outerWidth();
                    o.top + s > i && (o.top -= s),
                        o.top < 0 && (o.top = 0),
                        o.left + c > a && (o.left -= c),
                        o.left < 0 && (o.left = 0),
                        e.$menu.css(o);
                },
                positionSubmenu: function (t) {
                    if (e.ui && e.ui.position)
                        t.css("display", "block")
                            .position({
                                my: "left top",
                                at: "right top",
                                of: this,
                                collision: "flipfit fit",
                            })
                            .css("display", "");
                    else {
                        var n = { top: 0, left: this.outerWidth() };
                        t.css(n);
                    }
                },
                zIndex: 1,
                animation: { duration: 50, show: "slideDown", hide: "slideUp" },
                events: { show: e.noop, hide: e.noop },
                callback: null,
                items: {},
            },
            f = { timer: null, pageX: null, pageY: null },
            h = function (e) {
                for (var t = 0, n = e; ; )
                    if (
                        ((t = Math.max(t, parseInt(n.css("z-index"), 10) || 0)),
                        (n = n.parent()),
                        !n ||
                            !n.length ||
                            "html body".indexOf(
                                n.prop("nodeName").toLowerCase()
                            ) > -1)
                    )
                        break;
                return t;
            },
            p = {
                abortevent: function (e) {
                    e.preventDefault(), e.stopImmediatePropagation();
                },
                contextmenu: function (t) {
                    var n = e(this);
                    if (
                        ("right" === t.data.trigger &&
                            (t.preventDefault(), t.stopImmediatePropagation()),
                        !(
                            ("right" !== t.data.trigger &&
                                "demand" !== t.data.trigger &&
                                t.originalEvent) ||
                            !(
                                void 0 === t.mouseButton ||
                                !t.data ||
                                ("left" == t.data.trigger &&
                                    0 === t.mouseButton) ||
                                ("right" == t.data.trigger &&
                                    2 === t.mouseButton)
                            ) ||
                            n.hasClass("context-menu-active") ||
                            n.hasClass("context-menu-disabled")
                        ))
                    ) {
                        if (((i = n), t.data.build)) {
                            var o = t.data.build(i, t);
                            if (o === !1) return;
                            if (
                                ((t.data = e.extend(
                                    !0,
                                    {},
                                    d,
                                    t.data,
                                    o || {}
                                )),
                                !t.data.items || e.isEmptyObject(t.data.items))
                            )
                                throw (
                                    (window.console &&
                                        (console.error || console.log).call(
                                            console,
                                            "No items specified to show in contextMenu"
                                        ),
                                    new Error("No Items specified"))
                                );
                            (t.data.$trigger = i), m.create(t.data);
                        }
                        var a = !1;
                        for (var r in t.data.items)
                            if (t.data.items.hasOwnProperty(r)) {
                                var s;
                                (s = e.isFunction(t.data.items[r].visible)
                                    ? t.data.items[r].visible.call(
                                          e(t.currentTarget),
                                          r,
                                          t.data
                                      )
                                    : "undefined" == typeof r.visible ||
                                      t.data.items[r].visible === !0),
                                    s && (a = !0);
                            }
                        a && m.show.call(n, t.data, t.pageX, t.pageY);
                    }
                },
                click: function (t) {
                    t.preventDefault(),
                        t.stopImmediatePropagation(),
                        e(this).trigger(
                            e.Event("contextmenu", {
                                data: t.data,
                                pageX: t.pageX,
                                pageY: t.pageY,
                            })
                        );
                },
                mousedown: function (t) {
                    var n = e(this);
                    i &&
                        i.length &&
                        !i.is(n) &&
                        i.data("contextMenu").$menu.trigger("contextmenu:hide"),
                        2 === t.button && (i = n.data("contextMenuActive", !0));
                },
                mouseup: function (t) {
                    var n = e(this);
                    n.data("contextMenuActive") &&
                        i &&
                        i.length &&
                        i.is(n) &&
                        !n.hasClass("context-menu-disabled") &&
                        (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        (i = n),
                        n.trigger(
                            e.Event("contextmenu", {
                                data: t.data,
                                pageX: t.pageX,
                                pageY: t.pageY,
                            })
                        )),
                        n.removeData("contextMenuActive");
                },
                mouseenter: function (t) {
                    var n = e(this),
                        o = e(t.relatedTarget),
                        a = e(document);
                    o.is(".context-menu-list") ||
                        o.closest(".context-menu-list").length ||
                        (i && i.length) ||
                        ((f.pageX = t.pageX),
                        (f.pageY = t.pageY),
                        (f.data = t.data),
                        a.on("mousemove.contextMenuShow", p.mousemove),
                        (f.timer = setTimeout(function () {
                            (f.timer = null),
                                a.off("mousemove.contextMenuShow"),
                                (i = n),
                                n.trigger(
                                    e.Event("contextmenu", {
                                        data: f.data,
                                        pageX: f.pageX,
                                        pageY: f.pageY,
                                    })
                                );
                        }, t.data.delay)));
                },
                mousemove: function (e) {
                    (f.pageX = e.pageX), (f.pageY = e.pageY);
                },
                mouseleave: function (t) {
                    var n = e(t.relatedTarget);
                    if (
                        !n.is(".context-menu-list") &&
                        !n.closest(".context-menu-list").length
                    ) {
                        try {
                            clearTimeout(f.timer);
                        } catch (t) {}
                        f.timer = null;
                    }
                },
                layerClick: function (t) {
                    var n,
                        o,
                        i = e(this),
                        a = i.data("contextMenuRoot"),
                        s = t.button,
                        c = t.pageX,
                        l = t.pageY;
                    t.preventDefault(),
                        t.stopImmediatePropagation(),
                        setTimeout(function () {
                            var i,
                                u =
                                    ("left" === a.trigger && 0 === s) ||
                                    ("right" === a.trigger && 2 === s);
                            if (
                                (document.elementFromPoint &&
                                    a.$layer &&
                                    (a.$layer.hide(),
                                    (n = document.elementFromPoint(
                                        c - r.scrollLeft(),
                                        l - r.scrollTop()
                                    )),
                                    a.$layer.show()),
                                a.reposition && u)
                            )
                                if (document.elementFromPoint) {
                                    if (
                                        a.$trigger.is(n) ||
                                        a.$trigger.has(n).length
                                    )
                                        return void a.position.call(
                                            a.$trigger,
                                            a,
                                            c,
                                            l
                                        );
                                } else if (
                                    ((o = a.$trigger.offset()),
                                    (i = e(window)),
                                    (o.top += i.scrollTop()),
                                    o.top <= t.pageY &&
                                        ((o.left += i.scrollLeft()),
                                        o.left <= t.pageX &&
                                            ((o.bottom =
                                                o.top +
                                                a.$trigger.outerHeight()),
                                            o.bottom >= t.pageY &&
                                                ((o.right =
                                                    o.left +
                                                    a.$trigger.outerWidth()),
                                                o.right >= t.pageX))))
                                )
                                    return void a.position.call(
                                        a.$trigger,
                                        a,
                                        c,
                                        l
                                    );
                            n &&
                                u &&
                                a.$trigger.one(
                                    "contextmenu:hidden",
                                    function () {
                                        e(n).contextMenu({
                                            x: c,
                                            y: l,
                                            button: s,
                                        });
                                    }
                                ),
                                a.$menu.trigger("contextmenu:hide");
                        }, 50);
                },
                keyStop: function (e, t) {
                    t.isInput || e.preventDefault(), e.stopPropagation();
                },
                key: function (e) {
                    var t = {};
                    switch (
                        (i && (t = i.data("contextMenu") || {}), e.keyCode)
                    ) {
                        case 9:
                        case 38:
                            if ((p.keyStop(e, t), t.isInput)) {
                                if (9 === e.keyCode && e.shiftKey)
                                    return (
                                        e.preventDefault(),
                                        t.$selected &&
                                            t.$selected
                                                .find("input, textarea, select")
                                                .blur(),
                                        void t.$menu.trigger("prevcommand")
                                    );
                                if (
                                    38 === e.keyCode &&
                                    "checkbox" ===
                                        t.$selected
                                            .find("input, textarea, select")
                                            .prop("type")
                                )
                                    return void e.preventDefault();
                            } else if (9 !== e.keyCode || e.shiftKey)
                                return void t.$menu.trigger("prevcommand");
                        case 40:
                            if ((p.keyStop(e, t), !t.isInput))
                                return void t.$menu.trigger("nextcommand");
                            if (9 === e.keyCode)
                                return (
                                    e.preventDefault(),
                                    t.$selected &&
                                        t.$selected
                                            .find("input, textarea, select")
                                            .blur(),
                                    void t.$menu.trigger("nextcommand")
                                );
                            if (
                                40 === e.keyCode &&
                                "checkbox" ===
                                    t.$selected
                                        .find("input, textarea, select")
                                        .prop("type")
                            )
                                return void e.preventDefault();
                            break;
                        case 37:
                            if (
                                (p.keyStop(e, t),
                                t.isInput ||
                                    !t.$selected ||
                                    !t.$selected.length)
                            )
                                break;
                            if (
                                !t.$selected
                                    .parent()
                                    .hasClass("context-menu-root")
                            ) {
                                var n = t.$selected.parent().parent();
                                return (
                                    t.$selected.trigger("contextmenu:blur"),
                                    void (t.$selected = n)
                                );
                            }
                            break;
                        case 39:
                            if (
                                (p.keyStop(e, t),
                                t.isInput ||
                                    !t.$selected ||
                                    !t.$selected.length)
                            )
                                break;
                            var o = t.$selected.data("contextMenu") || {};
                            if (
                                o.$menu &&
                                t.$selected.hasClass("context-menu-submenu")
                            )
                                return (
                                    (t.$selected = null),
                                    (o.$selected = null),
                                    void o.$menu.trigger("nextcommand")
                                );
                            break;
                        case 35:
                        case 36:
                            return t.$selected &&
                                t.$selected.find("input, textarea, select")
                                    .length
                                ? void 0
                                : ((
                                      (t.$selected && t.$selected.parent()) ||
                                      t.$menu
                                  )
                                      .children(
                                          ":not(." +
                                              t.classNames.disabled +
                                              ", ." +
                                              t.classNames.notSelectable +
                                              ")"
                                      )
                                      [36 === e.keyCode ? "first" : "last"]()
                                      .trigger("contextmenu:focus"),
                                  void e.preventDefault());
                        case 13:
                            if ((p.keyStop(e, t), t.isInput)) {
                                if (
                                    t.$selected &&
                                    !t.$selected.is("textarea, select")
                                )
                                    return void e.preventDefault();
                                break;
                            }
                            return void (
                                "undefined" != typeof t.$selected &&
                                null !== t.$selected &&
                                t.$selected.trigger("mouseup")
                            );
                        case 32:
                        case 33:
                        case 34:
                            return void p.keyStop(e, t);
                        case 27:
                            return (
                                p.keyStop(e, t),
                                void t.$menu.trigger("contextmenu:hide")
                            );
                        default:
                            var a = String.fromCharCode(
                                e.keyCode
                            ).toUpperCase();
                            if (t.accesskeys && t.accesskeys[a])
                                return void t.accesskeys[a].$node.trigger(
                                    t.accesskeys[a].$menu
                                        ? "contextmenu:focus"
                                        : "mouseup"
                                );
                    }
                    e.stopPropagation(),
                        "undefined" != typeof t.$selected &&
                            null !== t.$selected &&
                            t.$selected.trigger(e);
                },
                prevItem: function (t) {
                    t.stopPropagation();
                    var n = e(this).data("contextMenu") || {},
                        o = e(this).data("contextMenuRoot") || {};
                    if (n.$selected) {
                        var i = n.$selected;
                        (n = n.$selected.parent().data("contextMenu") || {}),
                            (n.$selected = i);
                    }
                    for (
                        var a = n.$menu.children(),
                            r =
                                n.$selected && n.$selected.prev().length
                                    ? n.$selected.prev()
                                    : a.last(),
                            s = r;
                        r.hasClass(o.classNames.disabled) ||
                        r.hasClass(o.classNames.notSelectable);

                    )
                        if (
                            ((r = r.prev().length ? r.prev() : a.last()),
                            r.is(s))
                        )
                            return;
                    n.$selected && p.itemMouseleave.call(n.$selected.get(0), t),
                        p.itemMouseenter.call(r.get(0), t);
                    var c = r.find("input, textarea, select");
                    c.length && c.focus();
                },
                nextItem: function (t) {
                    t.stopPropagation();
                    var n = e(this).data("contextMenu") || {},
                        o = e(this).data("contextMenuRoot") || {};
                    if (n.$selected) {
                        var i = n.$selected;
                        (n = n.$selected.parent().data("contextMenu") || {}),
                            (n.$selected = i);
                    }
                    for (
                        var a = n.$menu.children(),
                            r =
                                n.$selected && n.$selected.next().length
                                    ? n.$selected.next()
                                    : a.first(),
                            s = r;
                        r.hasClass(o.classNames.disabled) ||
                        r.hasClass(o.classNames.notSelectable);

                    )
                        if (
                            ((r = r.next().length ? r.next() : a.first()),
                            r.is(s))
                        )
                            return;
                    n.$selected && p.itemMouseleave.call(n.$selected.get(0), t),
                        p.itemMouseenter.call(r.get(0), t);
                    var c = r.find("input, textarea, select");
                    c.length && c.focus();
                },
                focusInput: function () {
                    var t = e(this).closest(".context-menu-item"),
                        n = t.data(),
                        o = n.contextMenu,
                        i = n.contextMenuRoot;
                    (i.$selected = o.$selected = t),
                        (i.isInput = o.isInput = !0);
                },
                blurInput: function () {
                    var t = e(this).closest(".context-menu-item"),
                        n = t.data(),
                        o = n.contextMenu,
                        i = n.contextMenuRoot;
                    i.isInput = o.isInput = !1;
                },
                menuMouseenter: function () {
                    var t = e(this).data().contextMenuRoot;
                    t.hovering = !0;
                },
                menuMouseleave: function (t) {
                    var n = e(this).data().contextMenuRoot;
                    n.$layer &&
                        n.$layer.is(t.relatedTarget) &&
                        (n.hovering = !1);
                },
                itemMouseenter: function (t) {
                    var n = e(this),
                        o = n.data(),
                        i = o.contextMenu,
                        a = o.contextMenuRoot;
                    return (
                        (a.hovering = !0),
                        t &&
                            a.$layer &&
                            a.$layer.is(t.relatedTarget) &&
                            (t.preventDefault(), t.stopImmediatePropagation()),
                        (i.$menu ? i : a).$menu
                            .children(".hover")
                            .trigger("contextmenu:blur"),
                        n.hasClass(a.classNames.disabled) ||
                        n.hasClass(a.classNames.notSelectable)
                            ? void (i.$selected = null)
                            : void n.trigger("contextmenu:focus")
                    );
                },
                itemMouseleave: function (t) {
                    var n = e(this),
                        o = n.data(),
                        i = o.contextMenu,
                        a = o.contextMenuRoot;
                    return a !== i && a.$layer && a.$layer.is(t.relatedTarget)
                        ? ("undefined" != typeof a.$selected &&
                              null !== a.$selected &&
                              a.$selected.trigger("contextmenu:blur"),
                          t.preventDefault(),
                          t.stopImmediatePropagation(),
                          void (a.$selected = i.$selected = i.$node))
                        : void n.trigger("contextmenu:blur");
                },
                itemClick: function (t) {
                    var n,
                        o = e(this),
                        i = o.data(),
                        a = i.contextMenu,
                        r = i.contextMenuRoot,
                        s = i.contextMenuKey;
                    if (
                        a.items[s] &&
                        !o.is(
                            "." +
                                r.classNames.disabled +
                                ", .context-menu-submenu, .context-menu-separator, ." +
                                r.classNames.notSelectable
                        )
                    ) {
                        if (
                            (t.preventDefault(),
                            t.stopImmediatePropagation(),
                            e.isFunction(r.callbacks[s]) &&
                                Object.prototype.hasOwnProperty.call(
                                    r.callbacks,
                                    s
                                ))
                        )
                            n = r.callbacks[s];
                        else {
                            if (!e.isFunction(r.callback)) return;
                            n = r.callback;
                        }
                        n.call(r.$trigger, s, r) !== !1
                            ? r.$menu.trigger("contextmenu:hide")
                            : r.$menu.parent().length &&
                              m.update.call(r.$trigger, r);
                    }
                },
                inputClick: function (e) {
                    e.stopImmediatePropagation();
                },
                hideMenu: function (t, n) {
                    var o = e(this).data("contextMenuRoot");
                    m.hide.call(o.$trigger, o, n && n.force);
                },
                focusItem: function (t) {
                    t.stopPropagation();
                    var n = e(this),
                        o = n.data(),
                        i = o.contextMenu,
                        a = o.contextMenuRoot;
                    n
                        .addClass(
                            [a.classNames.hover, a.classNames.visible].join(" ")
                        )
                        .siblings()
                        .removeClass(a.classNames.visible)
                        .filter(a.classNames.hover)
                        .trigger("contextmenu:blur"),
                        (i.$selected = a.$selected = n),
                        i.$node && a.positionSubmenu.call(i.$node, i.$menu);
                },
                blurItem: function (t) {
                    t.stopPropagation();
                    var n = e(this),
                        o = n.data(),
                        i = o.contextMenu,
                        a = o.contextMenuRoot;
                    i.autoHide && n.removeClass(a.classNames.visible),
                        n.removeClass(a.classNames.hover),
                        (i.$selected = null);
                },
            },
            m = {
                show: function (t, n, o) {
                    var a = e(this),
                        r = {};
                    return (
                        e("#context-menu-layer").trigger("mousedown"),
                        (t.$trigger = a),
                        t.events.show.call(a, t) === !1
                            ? void (i = null)
                            : (m.update.call(a, t),
                              t.position.call(a, t, n, o),
                              t.zIndex && (r.zIndex = h(a) + t.zIndex),
                              m.layer.call(t.$menu, t, r.zIndex),
                              t.$menu.find("ul").css("zIndex", r.zIndex + 1),
                              t.$menu
                                  .css(r)
                                  [t.animation.show](
                                      t.animation.duration,
                                      function () {
                                          a.trigger("contextmenu:visible");
                                      }
                                  ),
                              a
                                  .data("contextMenu", t)
                                  .addClass("context-menu-active"),
                              e(document)
                                  .off("keydown.contextMenu")
                                  .on("keydown.contextMenu", p.key),
                              void (
                                  t.autoHide &&
                                  e(document).on(
                                      "mousemove.contextMenuAutoHide",
                                      function (e) {
                                          var n = a.offset();
                                          (n.right = n.left + a.outerWidth()),
                                              (n.bottom =
                                                  n.top + a.outerHeight()),
                                              !t.$layer ||
                                                  t.hovering ||
                                                  (e.pageX >= n.left &&
                                                      e.pageX <= n.right &&
                                                      e.pageY >= n.top &&
                                                      e.pageY <= n.bottom) ||
                                                  t.$menu.trigger(
                                                      "contextmenu:hide"
                                                  );
                                      }
                                  )
                              ))
                    );
                },
                hide: function (t, n) {
                    var o = e(this);
                    if (
                        (t || (t = o.data("contextMenu") || {}),
                        n || !t.events || t.events.hide.call(o, t) !== !1)
                    ) {
                        if (
                            (o
                                .removeData("contextMenu")
                                .removeClass("context-menu-active"),
                            t.$layer)
                        ) {
                            setTimeout(
                                (function (e) {
                                    return function () {
                                        e.remove();
                                    };
                                })(t.$layer),
                                10
                            );
                            try {
                                delete t.$layer;
                            } catch (a) {
                                t.$layer = null;
                            }
                        }
                        (i = null),
                            t.$menu
                                .find("." + t.classNames.hover)
                                .trigger("contextmenu:blur"),
                            (t.$selected = null),
                            e(document)
                                .off(".contextMenuAutoHide")
                                .off("keydown.contextMenu"),
                            t.$menu &&
                                t.$menu[t.animation.hide](
                                    t.animation.duration,
                                    function () {
                                        t.build &&
                                            (t.$menu.remove(),
                                            e.each(t, function (e) {
                                                switch (e) {
                                                    case "ns":
                                                    case "selector":
                                                    case "build":
                                                    case "trigger":
                                                        return !0;
                                                    default:
                                                        t[e] = void 0;
                                                        try {
                                                            delete t[e];
                                                        } catch (n) {}
                                                        return !0;
                                                }
                                            })),
                                            setTimeout(function () {
                                                o.trigger("contextmenu:hidden");
                                            }, 10);
                                    }
                                );
                    }
                },
                create: function (n, o) {
                    function i(t) {
                        var n = e("<span></span>");
                        return (
                            t._accesskey
                                ? (t._beforeAccesskey &&
                                      n.append(
                                          document.createTextNode(
                                              t._beforeAccesskey
                                          )
                                      ),
                                  e("<span></span>")
                                      .addClass("context-menu-accesskey")
                                      .text(t._accesskey)
                                      .appendTo(n),
                                  t._afterAccesskey &&
                                      n.append(
                                          document.createTextNode(
                                              t._afterAccesskey
                                          )
                                      ))
                                : n.text(t.name),
                            n
                        );
                    }
                    void 0 === o && (o = n),
                        (n.$menu = e('<ul class="context-menu-list"></ul>')
                            .addClass(n.className || "")
                            .data({ contextMenu: n, contextMenuRoot: o })),
                        e.each(
                            ["callbacks", "commands", "inputs"],
                            function (e, t) {
                                (n[t] = {}), o[t] || (o[t] = {});
                            }
                        ),
                        o.accesskeys || (o.accesskeys = {}),
                        e.each(n.items, function (a, r) {
                            var s = e(
                                    '<li class="context-menu-item"></li>'
                                ).addClass(r.className || ""),
                                c = null,
                                l = null;
                            if (
                                (s.on("click", e.noop),
                                "string" == typeof r &&
                                    (r = { type: "cm_seperator" }),
                                (r.$node = s.data({
                                    contextMenu: n,
                                    contextMenuRoot: o,
                                    contextMenuKey: a,
                                })),
                                "undefined" != typeof r.accesskey)
                            )
                                for (
                                    var d, f = t(r.accesskey), h = 0;
                                    (d = f[h]);
                                    h++
                                )
                                    if (!o.accesskeys[d]) {
                                        o.accesskeys[d] = r;
                                        var v = r.name.match(
                                            new RegExp(
                                                "^(.*?)(" + d + ")(.*)$",
                                                "i"
                                            )
                                        );
                                        v &&
                                            ((r._beforeAccesskey = v[1]),
                                            (r._accesskey = v[2]),
                                            (r._afterAccesskey = v[3]));
                                        break;
                                    }
                            if (r.type && u[r.type])
                                u[r.type].call(s, r, n, o),
                                    e.each([n, o], function (t, n) {
                                        (n.commands[a] = r),
                                            e.isFunction(r.callback) &&
                                                (n.callbacks[a] = r.callback);
                                    });
                            else {
                                switch (
                                    ("cm_seperator" === r.type
                                        ? s.addClass(
                                              "context-menu-separator " +
                                                  o.classNames.notSelectable
                                          )
                                        : "html" === r.type
                                        ? s.addClass(
                                              "context-menu-html " +
                                                  o.classNames.notSelectable
                                          )
                                        : r.type
                                        ? ((c =
                                              e("<label></label>").appendTo(s)),
                                          i(r).appendTo(c),
                                          s.addClass("context-menu-input"),
                                          (n.hasTypes = !0),
                                          e.each([n, o], function (e, t) {
                                              (t.commands[a] = r),
                                                  (t.inputs[a] = r);
                                          }))
                                        : r.items && (r.type = "sub"),
                                    r.type)
                                ) {
                                    case "seperator":
                                        break;
                                    case "text":
                                        l = e(
                                            '<input type="text" value="1" name="" value="">'
                                        )
                                            .attr(
                                                "name",
                                                "context-menu-input-" + a
                                            )
                                            .val(r.value || "")
                                            .appendTo(c);
                                        break;
                                    case "textarea":
                                        (l = e('<textarea name=""></textarea>')
                                            .attr(
                                                "name",
                                                "context-menu-input-" + a
                                            )
                                            .val(r.value || "")
                                            .appendTo(c)),
                                            r.height && l.height(r.height);
                                        break;
                                    case "checkbox":
                                        l = e(
                                            '<input type="checkbox" value="1" name="" value="">'
                                        )
                                            .attr(
                                                "name",
                                                "context-menu-input-" + a
                                            )
                                            .val(r.value || "")
                                            .prop("checked", !!r.selected)
                                            .prependTo(c);
                                        break;
                                    case "radio":
                                        l = e(
                                            '<input type="radio" value="1" name="" value="">'
                                        )
                                            .attr(
                                                "name",
                                                "context-menu-input-" + r.radio
                                            )
                                            .val(r.value || "")
                                            .prop("checked", !!r.selected)
                                            .prependTo(c);
                                        break;
                                    case "select":
                                        (l = e('<select name="">')
                                            .attr(
                                                "name",
                                                "context-menu-input-" + a
                                            )
                                            .appendTo(c)),
                                            r.options &&
                                                (e.each(
                                                    r.options,
                                                    function (t, n) {
                                                        e("<option></option>")
                                                            .val(t)
                                                            .text(n)
                                                            .appendTo(l);
                                                    }
                                                ),
                                                l.val(r.selected));
                                        break;
                                    case "sub":
                                        i(r).appendTo(s),
                                            (r.appendTo = r.$node),
                                            m.create(r, o),
                                            s
                                                .data("contextMenu", r)
                                                .addClass(
                                                    "context-menu-submenu"
                                                ),
                                            (r.callback = null);
                                        break;
                                    case "html":
                                        e(r.html).appendTo(s);
                                        break;
                                    default:
                                        e.each([n, o], function (t, n) {
                                            (n.commands[a] = r),
                                                e.isFunction(r.callback) &&
                                                    (n.callbacks[a] =
                                                        r.callback);
                                        }),
                                            i(r).appendTo(s);
                                }
                                r.type &&
                                    "sub" !== r.type &&
                                    "html" !== r.type &&
                                    "cm_seperator" !== r.type &&
                                    (l
                                        .on("focus", p.focusInput)
                                        .on("blur", p.blurInput),
                                    r.events && l.on(r.events, n)),
                                    r.icon &&
                                        (e.isFunction(r.icon)
                                            ? (r._icon = r.icon.call(
                                                  this,
                                                  this,
                                                  s,
                                                  a,
                                                  r
                                              ))
                                            : (r._icon =
                                                  o.classNames.icon +
                                                  " " +
                                                  o.classNames.icon +
                                                  "-" +
                                                  r.icon),
                                        s.addClass(r._icon));
                            }
                            (r.$input = l),
                                (r.$label = c),
                                s.appendTo(n.$menu),
                                !n.hasTypes &&
                                    e.support.eventSelectstart &&
                                    s.on(
                                        "selectstart.disableTextSelect",
                                        p.abortevent
                                    );
                        }),
                        n.$node ||
                            n.$menu
                                .css("display", "none")
                                .addClass("context-menu-root"),
                        n.$menu.appendTo(n.appendTo || document.body);
                },
                resize: function (t, n) {
                    t.css({ position: "absolute", display: "block" }),
                        t.data("width", Math.ceil(t.width())),
                        t.css({
                            position: "static",
                            minWidth: "0px",
                            maxWidth: "100000px",
                        }),
                        t.find("> li > ul").each(function () {
                            m.resize(e(this), !0);
                        }),
                        n ||
                            t
                                .find("ul")
                                .addBack()
                                .css({
                                    position: "",
                                    display: "",
                                    minWidth: "",
                                    maxWidth: "",
                                })
                                .width(function () {
                                    return e(this).data("width");
                                });
                },
                update: function (t, n) {
                    var o = this;
                    void 0 === n && ((n = t), m.resize(t.$menu)),
                        t.$menu.children().each(function () {
                            var i,
                                a = e(this),
                                r = a.data("contextMenuKey"),
                                s = t.items[r],
                                c =
                                    (e.isFunction(s.disabled) &&
                                        s.disabled.call(o, r, n)) ||
                                    s.disabled === !0;
                            if (
                                ((i = e.isFunction(s.visible)
                                    ? s.visible.call(o, r, n)
                                    : "undefined" == typeof s.visible ||
                                      s.visible === !0),
                                a[i ? "show" : "hide"](),
                                a[c ? "addClass" : "removeClass"](
                                    n.classNames.disabled
                                ),
                                e.isFunction(s.icon) &&
                                    (a.removeClass(s._icon),
                                    (s._icon = s.icon.call(this, o, a, r, s)),
                                    a.addClass(s._icon)),
                                s.type)
                            )
                                switch (
                                    (a
                                        .find("input, select, textarea")
                                        .prop("disabled", c),
                                    s.type)
                                ) {
                                    case "text":
                                    case "textarea":
                                        s.$input.val(s.value || "");
                                        break;
                                    case "checkbox":
                                    case "radio":
                                        s.$input
                                            .val(s.value || "")
                                            .prop("checked", !!s.selected);
                                        break;
                                    case "select":
                                        s.$input.val(s.selected || "");
                                }
                            s.$menu && m.update.call(o, s, n);
                        });
                },
                layer: function (t, n) {
                    var o = (t.$layer = e(
                        '<div id="context-menu-layer" style="position:fixed; z-index:' +
                            n +
                            '; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>'
                    )
                        .css({
                            height: r.height(),
                            width: r.width(),
                            display: "block",
                        })
                        .data("contextMenuRoot", t)
                        .insertBefore(this)
                        .on("contextmenu", p.abortevent)
                        .on("mousedown", p.layerClick));
                    return (
                        void 0 === document.body.style.maxWidth &&
                            o.css({
                                position: "absolute",
                                height: e(document).height(),
                            }),
                        o
                    );
                },
            };
        (e.fn.contextMenu = function (t) {
            var n = this,
                o = t;
            if (this.length > 0)
                if (void 0 === t) this.first().trigger("contextmenu");
                else if (void 0 !== t.x && void 0 !== t.y)
                    this.first().trigger(
                        e.Event("contextmenu", {
                            pageX: t.x,
                            pageY: t.y,
                            mouseButton: t.button,
                        })
                    );
                else if ("hide" === t) {
                    var i = this.first().data("contextMenu")
                        ? this.first().data("contextMenu").$menu
                        : null;
                    i && i.trigger("contextmenu:hide");
                } else
                    "destroy" === t
                        ? e.contextMenu("destroy", { context: this })
                        : e.isPlainObject(t)
                        ? ((t.context = this), e.contextMenu("create", t))
                        : t
                        ? this.removeClass("context-menu-disabled")
                        : t || this.addClass("context-menu-disabled");
            else
                e.each(l, function () {
                    this.selector === n.selector &&
                        ((o.data = this),
                        e.extend(o.data, { trigger: "demand" }));
                }),
                    p.contextmenu.call(o.target, o);
            return this;
        }),
            (e.contextMenu = function (t, n) {
                "string" != typeof t && ((n = t), (t = "create")),
                    "string" == typeof n
                        ? (n = { selector: n })
                        : void 0 === n && (n = {});
                var o = e.extend(!0, {}, d, n || {}),
                    i = e(document),
                    r = i,
                    u = !1;
                switch (
                    (o.context && o.context.length
                        ? ((r = e(o.context).first()),
                          (o.context = r.get(0)),
                          (u = o.context !== document))
                        : (o.context = document),
                    t)
                ) {
                    case "create":
                        if (!o.selector)
                            throw new Error("No selector specified");
                        if (
                            o.selector.match(
                                /.context-menu-(list|item|input)($|\s)/
                            )
                        )
                            throw new Error(
                                'Cannot bind to selector "' +
                                    o.selector +
                                    '" as it contains a reserved className'
                            );
                        if (!o.build && (!o.items || e.isEmptyObject(o.items)))
                            throw new Error("No Items specified");
                        switch (
                            (s++,
                            (o.ns = ".contextMenu" + s),
                            u || (c[o.selector] = o.ns),
                            (l[o.ns] = o),
                            o.trigger || (o.trigger = "right"),
                            a ||
                                (i
                                    .on(
                                        {
                                            "contextmenu:hide.contextMenu":
                                                p.hideMenu,
                                            "prevcommand.contextMenu":
                                                p.prevItem,
                                            "nextcommand.contextMenu":
                                                p.nextItem,
                                            "contextmenu.contextMenu":
                                                p.abortevent,
                                            "mouseenter.contextMenu":
                                                p.menuMouseenter,
                                            "mouseleave.contextMenu":
                                                p.menuMouseleave,
                                        },
                                        ".context-menu-list"
                                    )
                                    .on(
                                        "mouseup.contextMenu",
                                        ".context-menu-input",
                                        p.inputClick
                                    )
                                    .on(
                                        {
                                            "mouseup.contextMenu": p.itemClick,
                                            "contextmenu:focus.contextMenu":
                                                p.focusItem,
                                            "contextmenu:blur.contextMenu":
                                                p.blurItem,
                                            "contextmenu.contextMenu":
                                                p.abortevent,
                                            "mouseenter.contextMenu":
                                                p.itemMouseenter,
                                            "mouseleave.contextMenu":
                                                p.itemMouseleave,
                                        },
                                        ".context-menu-item"
                                    ),
                                (a = !0)),
                            r.on(
                                "contextmenu" + o.ns,
                                o.selector,
                                o,
                                p.contextmenu
                            ),
                            u &&
                                r.on("remove" + o.ns, function () {
                                    e(this).contextMenu("destroy");
                                }),
                            o.trigger)
                        ) {
                            case "hover":
                                r.on(
                                    "mouseenter" + o.ns,
                                    o.selector,
                                    o,
                                    p.mouseenter
                                ).on(
                                    "mouseleave" + o.ns,
                                    o.selector,
                                    o,
                                    p.mouseleave
                                );
                                break;
                            case "left":
                                r.on("click" + o.ns, o.selector, o, p.click);
                        }
                        o.build || m.create(o);
                        break;
                    case "destroy":
                        var f;
                        if (u) {
                            var h = o.context;
                            e.each(l, function (t, n) {
                                if (n.context !== h) return !0;
                                (f =
                                    e(".context-menu-list").filter(":visible")),
                                    f.length &&
                                        f
                                            .data()
                                            .contextMenuRoot.$trigger.is(
                                                e(n.context).find(n.selector)
                                            ) &&
                                        f.trigger("contextmenu:hide", {
                                            force: !0,
                                        });
                                try {
                                    l[n.ns].$menu && l[n.ns].$menu.remove(),
                                        delete l[n.ns];
                                } catch (o) {
                                    l[n.ns] = null;
                                }
                                return e(n.context).off(n.ns), !0;
                            });
                        } else if (o.selector) {
                            if (c[o.selector]) {
                                (f =
                                    e(".context-menu-list").filter(":visible")),
                                    f.length &&
                                        f
                                            .data()
                                            .contextMenuRoot.$trigger.is(
                                                o.selector
                                            ) &&
                                        f.trigger("contextmenu:hide", {
                                            force: !0,
                                        });
                                try {
                                    l[c[o.selector]].$menu &&
                                        l[c[o.selector]].$menu.remove(),
                                        delete l[c[o.selector]];
                                } catch (v) {
                                    l[c[o.selector]] = null;
                                }
                                i.off(c[o.selector]);
                            }
                        } else
                            i.off(".contextMenu .contextMenuAutoHide"),
                                e.each(l, function (t, n) {
                                    e(n.context).off(n.ns);
                                }),
                                (c = {}),
                                (l = {}),
                                (s = 0),
                                (a = !1),
                                e(
                                    "#context-menu-layer, .context-menu-list"
                                ).remove();
                        break;
                    case "html5":
                        ((!e.support.htmlCommand && !e.support.htmlMenuitem) ||
                            ("boolean" == typeof n && n)) &&
                            e('menu[type="context"]')
                                .each(function () {
                                    this.id &&
                                        e.contextMenu({
                                            selector:
                                                "[contextmenu=" + this.id + "]",
                                            items: e.contextMenu.fromMenu(this),
                                        });
                                })
                                .css("display", "none");
                        break;
                    default:
                        throw new Error('Unknown operation "' + t + '"');
                }
                return this;
            }),
            (e.contextMenu.setInputValues = function (t, n) {
                void 0 === n && (n = {}),
                    e.each(t.inputs, function (e, t) {
                        switch (t.type) {
                            case "text":
                            case "textarea":
                                t.value = n[e] || "";
                                break;
                            case "checkbox":
                                t.selected = !!n[e];
                                break;
                            case "radio":
                                t.selected = (n[t.radio] || "") === t.value;
                                break;
                            case "select":
                                t.selected = n[e] || "";
                        }
                    });
            }),
            (e.contextMenu.getInputValues = function (t, n) {
                return (
                    void 0 === n && (n = {}),
                    e.each(t.inputs, function (e, t) {
                        switch (t.type) {
                            case "text":
                            case "textarea":
                            case "select":
                                n[e] = t.$input.val();
                                break;
                            case "checkbox":
                                n[e] = t.$input.prop("checked");
                                break;
                            case "radio":
                                t.$input.prop("checked") &&
                                    (n[t.radio] = t.value);
                        }
                    }),
                    n
                );
            }),
            (e.contextMenu.fromMenu = function (t) {
                var n = e(t),
                    i = {};
                return o(i, n.children()), i;
            }),
            (e.contextMenu.defaults = d),
            (e.contextMenu.types = u),
            (e.contextMenu.handle = p),
            (e.contextMenu.op = m),
            (e.contextMenu.menus = l);
    });
var _extends =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        },
    _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              };
!(function (e, t) {
    "object" ===
        ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
    "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : (e.LazyLoad = t());
})(this, function () {
    "use strict";
    function e(e, t) {
        if (t)
            if (t.length) for (var n, o = 0; (n = t[o]); o += 1) v(e, n);
            else v(e, t);
    }
    function t(e, t, n) {
        var o = t._settings;
        (!n && d(e)) ||
            (j(o.callback_enter, e),
            q.indexOf(e.tagName) > -1 && (z(e, t), A(e, o.class_loading)),
            I(e, t),
            u(e),
            j(o.callback_set, e));
    }
    var n = {
            elements_selector: "img",
            container: document,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_enter: null,
            callback_finish: null,
            to_webp: !1,
        },
        o = function (e) {
            return _extends({}, n, e);
        },
        i = "data-",
        a = "was-processed",
        r = "ll-timeout",
        s = "true",
        c = function (e, t) {
            return e.getAttribute(i + t);
        },
        l = function (e, t, n) {
            var o = i + t;
            return null === n
                ? void e.removeAttribute(o)
                : void e.setAttribute(o, n);
        },
        u = function (e) {
            return l(e, a, s);
        },
        d = function (e) {
            return c(e, a) === s;
        },
        f = function (e, t) {
            return l(e, r, t);
        },
        h = function (e) {
            return c(e, r);
        },
        p = function (e) {
            return e.filter(function (e) {
                return !d(e);
            });
        },
        m = function (e, t) {
            return e.filter(function (e) {
                return e !== t;
            });
        },
        v = function (e, t) {
            var n,
                o = "LazyLoad::Initialized",
                i = new e(t);
            try {
                n = new CustomEvent(o, { detail: { instance: i } });
            } catch (a) {
                (n = document.createEvent("CustomEvent")),
                    n.initCustomEvent(o, !1, !1, { instance: i });
            }
            window.dispatchEvent(n);
        },
        g = function (e, t) {
            return t ? e.replace(/\.(jpe?g|png)/gi, ".webp") : e;
        },
        y = function () {
            var e = "image/webp",
                t = document.createElement("canvas");
            return (
                !(!t.getContext || !t.getContext("2d")) &&
                0 === t.toDataURL(e).indexOf("data:" + e)
            );
        },
        b = "undefined" != typeof window,
        x =
            (b && !("onscroll" in window)) ||
            /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        w = b && "IntersectionObserver" in window,
        k = b && "classList" in document.createElement("p"),
        $ = b && y(),
        C = function (e, t, n, o) {
            for (var i, a = 0; (i = e.children[a]); a += 1)
                if ("SOURCE" === i.tagName) {
                    var r = c(i, n);
                    T(i, t, r, o);
                }
        },
        T = function (e, t, n, o) {
            n && e.setAttribute(t, g(n, o));
        },
        E = function (e, t) {
            var n = $ && t.to_webp,
                o = t.data_srcset,
                i = e.parentNode;
            i && "PICTURE" === i.tagName && C(i, "srcset", o, n);
            var a = c(e, t.data_sizes);
            T(e, "sizes", a);
            var r = c(e, o);
            T(e, "srcset", r, n);
            var s = c(e, t.data_src);
            T(e, "src", s, n);
        },
        M = function (e, t) {
            var n = c(e, t.data_src);
            T(e, "src", n);
        },
        _ = function (e, t) {
            var n = t.data_src,
                o = c(e, n);
            C(e, "src", n), T(e, "src", o), e.load();
        },
        O = function (e, t) {
            var n = $ && t.to_webp,
                o = c(e, t.data_src),
                i = c(e, t.data_bg);
            if (o) {
                var a = g(o, n);
                e.style.backgroundImage = 'url("' + a + '")';
            }
            if (i) {
                var r = g(i, n);
                e.style.backgroundImage = r;
            }
        },
        S = { IMG: E, IFRAME: M, VIDEO: _ },
        I = function (e, t) {
            var n = t._settings,
                o = e.tagName,
                i = S[o];
            return i
                ? (i(e, n),
                  t._updateLoadingCount(1),
                  void (t._elements = m(t._elements, e)))
                : void O(e, n);
        },
        A = function (e, t) {
            return k
                ? void e.classList.add(t)
                : void (e.className += (e.className ? " " : "") + t);
        },
        N = function (e, t) {
            return k
                ? void e.classList.remove(t)
                : void (e.className = e.className
                      .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                      .replace(/^\s+/, "")
                      .replace(/\s+$/, ""));
        },
        j = function (e, t) {
            e && e(t);
        },
        D = "load",
        L = "loadeddata",
        P = "error",
        R = function (e, t, n) {
            e.addEventListener(t, n);
        },
        F = function (e, t, n) {
            e.removeEventListener(t, n);
        },
        H = function (e, t, n) {
            R(e, D, t), R(e, L, t), R(e, P, n);
        },
        K = function (e, t, n) {
            F(e, D, t), F(e, L, t), F(e, P, n);
        },
        W = function (e, t, n) {
            var o = n._settings,
                i = t ? o.class_loaded : o.class_error,
                a = t ? o.callback_load : o.callback_error,
                r = e.target;
            N(r, o.class_loading), A(r, i), j(a, r), n._updateLoadingCount(-1);
        },
        z = function (e, t) {
            var n = function i(n) {
                    W(n, !0, t), K(e, i, o);
                },
                o = function a(o) {
                    W(o, !1, t), K(e, n, a);
                };
            H(e, n, o);
        },
        q = ["IMG", "IFRAME", "VIDEO"],
        Y = function (e, n, o) {
            t(e, o), n.unobserve(e);
        },
        Q = function (e) {
            var t = h(e);
            t && (clearTimeout(t), f(e, null));
        },
        U = function (e, t, n) {
            var o = n._settings.load_delay,
                i = h(e);
            i ||
                ((i = setTimeout(function () {
                    Y(e, t, n), Q(e);
                }, o)),
                f(e, i));
        },
        X = function (e) {
            return e.isIntersecting || e.intersectionRatio > 0;
        },
        B = function (e) {
            return {
                root: e.container === document ? null : e.container,
                rootMargin: e.thresholds || e.threshold + "px",
            };
        },
        V = function (e, t) {
            (this._settings = o(e)),
                this._setObserver(),
                (this._loadingCount = 0),
                this.update(t);
        };
    return (
        (V.prototype = {
            _manageIntersection: function (e) {
                var t = this._observer,
                    n = this._settings.load_delay,
                    o = e.target;
                return n
                    ? void (X(e) ? U(o, t, this) : Q(o))
                    : void (X(e) && Y(o, t, this));
            },
            _onIntersection: function (e) {
                e.forEach(this._manageIntersection.bind(this));
            },
            _setObserver: function () {
                w &&
                    (this._observer = new IntersectionObserver(
                        this._onIntersection.bind(this),
                        B(this._settings)
                    ));
            },
            _updateLoadingCount: function (e) {
                (this._loadingCount += e),
                    0 === this._elements.length &&
                        0 === this._loadingCount &&
                        j(this._settings.callback_finish);
            },
            update: function (e) {
                var t = this,
                    n = this._settings,
                    o = e || n.container.querySelectorAll(n.elements_selector);
                return (
                    (this._elements = p(Array.prototype.slice.call(o))),
                    x || !this._observer
                        ? void this.loadAll()
                        : void this._elements.forEach(function (e) {
                              t._observer.observe(e);
                          })
                );
            },
            destroy: function () {
                var e = this;
                this._observer &&
                    (this._elements.forEach(function (t) {
                        e._observer.unobserve(t);
                    }),
                    (this._observer = null)),
                    (this._elements = null),
                    (this._settings = null);
            },
            load: function (e, n) {
                t(e, this, n);
            },
            loadAll: function () {
                var e = this,
                    t = this._elements;
                t.forEach(function (t) {
                    e.load(t);
                });
            },
        }),
        b && e(V, window.lazyLoadOptions),
        V
    );
}),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("jquery")))
            : e(jQuery);
    })(function (e) {
        var t = e.event.dispatch || e.event.handle,
            n = e.event.special,
            o = "D" + +new Date(),
            i = "D" + (+new Date() + 1);
        (n.scrollstart = {
            setup: function (i) {
                var a,
                    r = e.extend({ latency: n.scrollstop.latency }, i),
                    s = function (e) {
                        var n = this,
                            o = arguments;
                        a
                            ? clearTimeout(a)
                            : ((e.type = "scrollstart"), t.apply(n, o)),
                            (a = setTimeout(function () {
                                a = null;
                            }, r.latency));
                    };
                e(this).bind("scroll", s).data(o, s);
            },
            teardown: function () {
                e(this).unbind("scroll", e(this).data(o));
            },
        }),
            (n.scrollstop = {
                latency: 250,
                setup: function (o) {
                    var a,
                        r = e.extend({ latency: n.scrollstop.latency }, o),
                        s = function (e) {
                            var n = this,
                                o = arguments;
                            a && clearTimeout(a),
                                (a = setTimeout(function () {
                                    (a = null),
                                        (e.type = "scrollstop"),
                                        t.apply(n, o);
                                }, r.latency));
                        };
                    e(this).bind("scroll", s).data(i, s);
                },
                teardown: function () {
                    e(this).unbind("scroll", e(this).data(i));
                },
            });
    });
var bootbox =
    window.bootbox ||
    (function (e, t) {
        function n(e, t) {
            return (
                "undefined" == typeof t && (t = o),
                "string" == typeof f[t][e] ? f[t][e] : t != i ? n(e, i) : e
            );
        }
        var o = "en",
            i = "en",
            a = !0,
            r = "static",
            s = "javascript:;",
            c = "",
            l = {},
            u = {},
            d = {};
        (d.setLocale = function (e) {
            for (var t in f) if (t == e) return void (o = e);
            throw new Error("Invalid locale: " + e);
        }),
            (d.addLocale = function (e, t) {
                "undefined" == typeof f[e] && (f[e] = {});
                for (var n in t) f[e][n] = t[n];
            }),
            (d.setIcons = function (e) {
                (u = e), ("object" == typeof u && null !== u) || (u = {});
            }),
            (d.setBtnClasses = function (e) {
                (l = e), ("object" == typeof l && null !== l) || (l = {});
            }),
            (d.alert = function () {
                var e = "",
                    t = n("OK"),
                    o = null;
                switch (arguments.length) {
                    case 1:
                        e = arguments[0];
                        break;
                    case 2:
                        (e = arguments[0]),
                            "function" == typeof arguments[1]
                                ? (o = arguments[1])
                                : (t = arguments[1]);
                        break;
                    case 3:
                        (e = arguments[0]),
                            (t = arguments[1]),
                            (o = arguments[2]);
                        break;
                    default:
                        throw new Error(
                            "Incorrect number of arguments: expected 1-3"
                        );
                }
                return d.dialog(
                    e,
                    { label: t, icon: u.OK, class: l.OK, callback: o },
                    { onEscape: o || !0 }
                );
            }),
            (d.confirm = function () {
                var e = "",
                    t = n("CANCEL"),
                    o = n("CONFIRM"),
                    i = null;
                switch (arguments.length) {
                    case 1:
                        e = arguments[0];
                        break;
                    case 2:
                        (e = arguments[0]),
                            "function" == typeof arguments[1]
                                ? (i = arguments[1])
                                : (t = arguments[1]);
                        break;
                    case 3:
                        (e = arguments[0]),
                            (t = arguments[1]),
                            "function" == typeof arguments[2]
                                ? (i = arguments[2])
                                : (o = arguments[2]);
                        break;
                    case 4:
                        (e = arguments[0]),
                            (t = arguments[1]),
                            (o = arguments[2]),
                            (i = arguments[3]);
                        break;
                    default:
                        throw new Error(
                            "Incorrect number of arguments: expected 1-4"
                        );
                }
                var a = function () {
                        if ("function" == typeof i) return i(!1);
                    },
                    r = function () {
                        if ("function" == typeof i) return i(!0);
                    };
                return d.dialog(
                    e,
                    [
                        {
                            label: t,
                            icon: u.CANCEL,
                            class: l.CANCEL,
                            callback: a,
                        },
                        {
                            label: o,
                            icon: u.CONFIRM,
                            class: l.CONFIRM,
                            callback: r,
                        },
                    ],
                    { onEscape: a }
                );
            }),
            (d.prompt = function () {
                var e = "",
                    o = n("CANCEL"),
                    i = n("CONFIRM"),
                    a = null,
                    r = "";
                switch (arguments.length) {
                    case 1:
                        e = arguments[0];
                        break;
                    case 2:
                        (e = arguments[0]),
                            "function" == typeof arguments[1]
                                ? (a = arguments[1])
                                : (o = arguments[1]);
                        break;
                    case 3:
                        (e = arguments[0]),
                            (o = arguments[1]),
                            "function" == typeof arguments[2]
                                ? (a = arguments[2])
                                : (i = arguments[2]);
                        break;
                    case 4:
                        (e = arguments[0]),
                            (o = arguments[1]),
                            (i = arguments[2]),
                            (a = arguments[3]);
                        break;
                    case 5:
                        (e = arguments[0]),
                            (o = arguments[1]),
                            (i = arguments[2]),
                            (a = arguments[3]),
                            (r = arguments[4]);
                        break;
                    default:
                        throw new Error(
                            "Incorrect number of arguments: expected 1-5"
                        );
                }
                var s = e,
                    c = t("<form></form>");
                c.append(
                    "<input class='input-block-level' autocomplete=off type=text value='" +
                        r +
                        "' />"
                );
                var f = function () {
                        if ("function" == typeof a) return a(null);
                    },
                    h = function () {
                        if ("function" == typeof a)
                            return a(c.find("input[type=text]").val());
                    },
                    p = d.dialog(
                        c,
                        [
                            {
                                label: o,
                                icon: u.CANCEL,
                                class: l.CANCEL,
                                callback: f,
                            },
                            {
                                label: i,
                                icon: u.CONFIRM,
                                class: l.CONFIRM,
                                callback: h,
                            },
                        ],
                        { header: s, show: !1, onEscape: f }
                    );
                return (
                    p.on("shown", function () {
                        c.find("input[type=text]").focus(),
                            c.on("submit", function (e) {
                                e.preventDefault(),
                                    p.find(".btn-primary").click();
                            });
                    }),
                    p.modal("show"),
                    p
                );
            }),
            (d.dialog = function (n, o, i) {
                function l(e) {
                    var t = null;
                    "function" == typeof i.onEscape && (t = i.onEscape()),
                        t !== !1 && $.modal("hide");
                }
                var u = "",
                    d = [];
                i || (i = {}),
                    "undefined" == typeof o
                        ? (o = [])
                        : "undefined" == typeof o.length && (o = [o]);
                for (var f = o.length; f--; ) {
                    var h = null,
                        p = null,
                        m = null,
                        v = "",
                        g = null;
                    if (
                        "undefined" == typeof o[f].label &&
                        "undefined" == typeof o[f]["class"] &&
                        "undefined" == typeof o[f].callback
                    ) {
                        var y = 0,
                            b = null;
                        for (var x in o[f]) if (((b = x), ++y > 1)) break;
                        1 == y &&
                            "function" == typeof o[f][x] &&
                            ((o[f].label = b), (o[f].callback = o[f][x]));
                    }
                    "function" == typeof o[f].callback && (g = o[f].callback),
                        o[f]["class"]
                            ? (m = o[f]["class"])
                            : f == o.length - 1 &&
                              o.length <= 2 &&
                              (m = "btn-primary"),
                        o[f].link !== !0 && (m = "btn " + m),
                        (h = o[f].label ? o[f].label : "Option " + (f + 1)),
                        o[f].icon && (v = "<i class='" + o[f].icon + "'></i> "),
                        (p = o[f].href ? o[f].href : s),
                        (u =
                            "<a data-handler='" +
                            f +
                            "' class='" +
                            m +
                            "' href='" +
                            p +
                            "'>" +
                            v +
                            h +
                            "</a>" +
                            u),
                        (d[f] = g);
                }
                var w = [
                    "<div class='bootbox modal' tabindex='-1' style='overflow:hidden;'>",
                ];
                if (i.header) {
                    var k = "";
                    ("undefined" == typeof i.headerCloseButton ||
                        i.headerCloseButton) &&
                        (k = "<a href='" + s + "' class='close'>&times;</a>"),
                        w.push(
                            "<div class='modal-header'>" +
                                k +
                                "<h3>" +
                                i.header +
                                "</h3></div>"
                        );
                }
                w.push("<div class='modal-body'></div>"),
                    u && w.push("<div class='modal-footer'>" + u + "</div>"),
                    w.push("</div>");
                var $ = t(w.join("\n")),
                    C = "undefined" == typeof i.animate ? a : i.animate;
                C && $.addClass("fade");
                var T = "undefined" == typeof i.classes ? c : i.classes;
                return (
                    T && $.addClass(T),
                    $.find(".modal-body").html(n),
                    $.on("keyup.dismiss.modal", function (e) {
                        27 === e.which && i.onEscape && l("escape");
                    }),
                    $.on("click", "a.close", function (e) {
                        e.preventDefault(), l("close");
                    }),
                    $.on("shown", function () {
                        $.find("a.btn-primary:first").focus();
                    }),
                    $.on("hidden", function (e) {
                        e.target === this && $.remove();
                    }),
                    $.on("click", ".modal-footer a", function (e) {
                        var n = t(this).data("handler"),
                            i = d[n],
                            a = null;
                        ("undefined" != typeof n &&
                            "undefined" != typeof o[n].href) ||
                            (e.preventDefault(),
                            "function" == typeof i && (a = i(e)),
                            a !== !1 && $.modal("hide"));
                    }),
                    t("body").append($),
                    $.modal({
                        backdrop:
                            "undefined" == typeof i.backdrop ? r : i.backdrop,
                        keyboard: !1,
                        show: !1,
                    }),
                    $.on("show", function (n) {
                        t(e).off("focusin.modal");
                    }),
                    ("undefined" != typeof i.show && i.show !== !0) ||
                        $.modal("show"),
                    $
                );
            }),
            (d.modal = function () {
                var e,
                    n,
                    o,
                    i = { onEscape: null, keyboard: !0, backdrop: r };
                switch (arguments.length) {
                    case 1:
                        e = arguments[0];
                        break;
                    case 2:
                        (e = arguments[0]),
                            "object" == typeof arguments[1]
                                ? (o = arguments[1])
                                : (n = arguments[1]);
                        break;
                    case 3:
                        (e = arguments[0]),
                            (n = arguments[1]),
                            (o = arguments[2]);
                        break;
                    default:
                        throw new Error(
                            "Incorrect number of arguments: expected 1-3"
                        );
                }
                return (
                    (i.header = n),
                    (o = "object" == typeof o ? t.extend(i, o) : i),
                    d.dialog(e, [], o)
                );
            }),
            (d.hideAll = function () {
                t(".bootbox").modal("hide");
            }),
            (d.animate = function (e) {
                a = e;
            }),
            (d.backdrop = function (e) {
                r = e;
            }),
            (d.classes = function (e) {
                c = e;
            });
        var f = {
            br: { OK: "OK", CANCEL: "Cancelar", CONFIRM: "Sim" },
            da: { OK: "OK", CANCEL: "Annuller", CONFIRM: "Accepter" },
            de: { OK: "OK", CANCEL: "Abbrechen", CONFIRM: "Akzeptieren" },
            en: { OK: "OK", CANCEL: "Cancel", CONFIRM: "OK" },
            es: { OK: "OK", CANCEL: "Cancelar", CONFIRM: "Aceptar" },
            fr: { OK: "OK", CANCEL: "Annuler", CONFIRM: "D'accord" },
            it: { OK: "OK", CANCEL: "Annulla", CONFIRM: "Conferma" },
            nl: { OK: "OK", CANCEL: "Annuleren", CONFIRM: "Accepteren" },
            pl: { OK: "OK", CANCEL: "Anuluj", CONFIRM: "Potwierdź" },
            ru: { OK: "OK", CANCEL: "Отмена", CONFIRM: "Применить" },
            zh_CN: { OK: "OK", CANCEL: "取消", CONFIRM: "确认" },
            zh_TW: { OK: "OK", CANCEL: "取消", CONFIRM: "確認" },
        };
        return d;
    })(document, window.jQuery);
(window.bootbox = bootbox),
    (function (e) {
        "function" == typeof define && define.amd && define.amd.jQuery
            ? define(["jquery"], e)
            : e(
                  "undefined" != typeof module && module.exports
                      ? require("jquery")
                      : jQuery
              );
    })(function (e) {
        "use strict";
        function t(t) {
            return (
                !t ||
                    void 0 !== t.allowPageScroll ||
                    (void 0 === t.swipe && void 0 === t.swipeStatus) ||
                    (t.allowPageScroll = u),
                void 0 !== t.click && void 0 === t.tap && (t.tap = t.click),
                t || (t = {}),
                (t = e.extend({}, e.fn.swipe.defaults, t)),
                this.each(function () {
                    var o = e(this),
                        i = o.data(_);
                    i || ((i = new n(this, t)), o.data(_, i));
                })
            );
        }
        function n(t, n) {
            function o(t) {
                if (
                    !(
                        le() ||
                        e(t.target).closest(n.excludedElements, Ye).length > 0
                    )
                ) {
                    var o = t.originalEvent ? t.originalEvent : t;
                    if (
                        !o.pointerType ||
                        "mouse" != o.pointerType ||
                        0 != n.fallbackToMouseEvents
                    ) {
                        var i,
                            a = o.touches,
                            r = a ? a[0] : o;
                        return (
                            (Qe = w),
                            a
                                ? (Ue = a.length)
                                : n.preventDefaultEvents !== !1 &&
                                  t.preventDefault(),
                            (De = 0),
                            (Le = null),
                            (Pe = null),
                            (ze = null),
                            (Re = 0),
                            (Fe = 0),
                            (He = 0),
                            (Ke = 1),
                            (We = 0),
                            (qe = ve()),
                            se(),
                            de(0, r),
                            !a || Ue === n.fingers || n.fingers === b || z()
                                ? ((Be = Te()),
                                  2 == Ue &&
                                      (de(1, a[1]),
                                      (Fe = He = be(Xe[0].start, Xe[1].start))),
                                  (n.swipeStatus || n.pinchStatus) &&
                                      (i = D(o, Qe)))
                                : (i = !1),
                            i === !1
                                ? ((Qe = C), D(o, Qe), i)
                                : (n.hold &&
                                      (tt = setTimeout(
                                          e.proxy(function () {
                                              Ye.trigger("hold", [o.target]),
                                                  n.hold &&
                                                      (i = n.hold.call(
                                                          Ye,
                                                          o,
                                                          o.target
                                                      ));
                                          }, this),
                                          n.longTapThreshold
                                      )),
                                  ue(!0),
                                  null)
                        );
                    }
                }
            }
            function O(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                if (Qe !== $ && Qe !== C && !ce()) {
                    var o,
                        i = t.touches,
                        a = i ? i[0] : t,
                        r = fe(a);
                    if (
                        ((Ve = Te()),
                        i && (Ue = i.length),
                        n.hold && clearTimeout(tt),
                        (Qe = k),
                        2 == Ue &&
                            (0 == Fe
                                ? (de(1, i[1]),
                                  (Fe = He = be(Xe[0].start, Xe[1].start)))
                                : (fe(i[1]),
                                  (He = be(Xe[0].end, Xe[1].end)),
                                  (ze = we(Xe[0].end, Xe[1].end))),
                            (Ke = xe(Fe, He)),
                            (We = Math.abs(Fe - He))),
                        Ue === n.fingers || n.fingers === b || !i || z())
                    ) {
                        if (
                            ((Le = Ce(r.start, r.end)),
                            (Pe = Ce(r.last, r.end)),
                            K(e, Pe),
                            (De = ke(r.start, r.end)),
                            (Re = ye()),
                            pe(Le, De),
                            (o = D(t, Qe)),
                            !n.triggerOnTouchEnd || n.triggerOnTouchLeave)
                        ) {
                            var s = !0;
                            if (n.triggerOnTouchLeave) {
                                var c = Ee(this);
                                s = Me(r.end, c);
                            }
                            !n.triggerOnTouchEnd && s
                                ? (Qe = j(k))
                                : n.triggerOnTouchLeave && !s && (Qe = j($)),
                                (Qe != C && Qe != $) || D(t, Qe);
                        }
                    } else (Qe = C), D(t, Qe);
                    o === !1 && ((Qe = C), D(t, Qe));
                }
            }
            function S(e) {
                var t = e.originalEvent ? e.originalEvent : e,
                    o = t.touches;
                if (o) {
                    if (o.length && !ce()) return re(t), !0;
                    if (o.length && ce()) return !0;
                }
                return (
                    ce() && (Ue = Ze),
                    (Ve = Te()),
                    (Re = ye()),
                    R() || !P()
                        ? ((Qe = C), D(t, Qe))
                        : n.triggerOnTouchEnd ||
                          (n.triggerOnTouchEnd === !1 && Qe === k)
                        ? (n.preventDefaultEvents !== !1 &&
                              e.cancelable !== !1 &&
                              e.preventDefault(),
                          (Qe = $),
                          D(t, Qe))
                        : !n.triggerOnTouchEnd && V()
                        ? ((Qe = $), L(t, Qe, p))
                        : Qe === k && ((Qe = C), D(t, Qe)),
                    ue(!1),
                    null
                );
            }
            function I() {
                (Ue = 0),
                    (Ve = 0),
                    (Be = 0),
                    (Fe = 0),
                    (He = 0),
                    (Ke = 1),
                    se(),
                    ue(!1);
            }
            function A(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                n.triggerOnTouchLeave && ((Qe = j($)), D(t, Qe));
            }
            function N() {
                Ye.off(Se, o),
                    Ye.off(je, I),
                    Ye.off(Ie, O),
                    Ye.off(Ae, S),
                    Ne && Ye.off(Ne, A),
                    ue(!1);
            }
            function j(e) {
                var t = e,
                    o = H(),
                    i = P(),
                    a = R();
                return (
                    !o || a
                        ? (t = C)
                        : !i ||
                          e != k ||
                          (n.triggerOnTouchEnd && !n.triggerOnTouchLeave)
                        ? !i && e == $ && n.triggerOnTouchLeave && (t = C)
                        : (t = $),
                    t
                );
            }
            function D(e, t) {
                var n,
                    o = e.touches;
                return (
                    (U() || Q()) && (n = L(e, t, f)),
                    (q() || z()) && n !== !1 && (n = L(e, t, h)),
                    ie() && n !== !1
                        ? (n = L(e, t, m))
                        : ae() && n !== !1
                        ? (n = L(e, t, v))
                        : oe() && n !== !1 && (n = L(e, t, p)),
                    t === C && I(e),
                    t === $ && (o ? o.length || I(e) : I(e)),
                    n
                );
            }
            function L(t, o, u) {
                var d;
                if (u == f) {
                    if (
                        (Ye.trigger("swipeStatus", [
                            o,
                            Le || null,
                            De || 0,
                            Re || 0,
                            Ue,
                            Xe,
                            Pe,
                        ]),
                        n.swipeStatus &&
                            ((d = n.swipeStatus.call(
                                Ye,
                                t,
                                o,
                                Le || null,
                                De || 0,
                                Re || 0,
                                Ue,
                                Xe,
                                Pe
                            )),
                            d === !1))
                    )
                        return !1;
                    if (o == $ && Y()) {
                        if (
                            (clearTimeout(et),
                            clearTimeout(tt),
                            Ye.trigger("swipe", [Le, De, Re, Ue, Xe, Pe]),
                            n.swipe &&
                                ((d = n.swipe.call(
                                    Ye,
                                    t,
                                    Le,
                                    De,
                                    Re,
                                    Ue,
                                    Xe,
                                    Pe
                                )),
                                d === !1))
                        )
                            return !1;
                        switch (Le) {
                            case i:
                                Ye.trigger("swipeLeft", [
                                    Le,
                                    De,
                                    Re,
                                    Ue,
                                    Xe,
                                    Pe,
                                ]),
                                    n.swipeLeft &&
                                        (d = n.swipeLeft.call(
                                            Ye,
                                            t,
                                            Le,
                                            De,
                                            Re,
                                            Ue,
                                            Xe,
                                            Pe
                                        ));
                                break;
                            case a:
                                Ye.trigger("swipeRight", [
                                    Le,
                                    De,
                                    Re,
                                    Ue,
                                    Xe,
                                    Pe,
                                ]),
                                    n.swipeRight &&
                                        (d = n.swipeRight.call(
                                            Ye,
                                            t,
                                            Le,
                                            De,
                                            Re,
                                            Ue,
                                            Xe,
                                            Pe
                                        ));
                                break;
                            case r:
                                Ye.trigger("swipeUp", [Le, De, Re, Ue, Xe, Pe]),
                                    n.swipeUp &&
                                        (d = n.swipeUp.call(
                                            Ye,
                                            t,
                                            Le,
                                            De,
                                            Re,
                                            Ue,
                                            Xe,
                                            Pe
                                        ));
                                break;
                            case s:
                                Ye.trigger("swipeDown", [
                                    Le,
                                    De,
                                    Re,
                                    Ue,
                                    Xe,
                                    Pe,
                                ]),
                                    n.swipeDown &&
                                        (d = n.swipeDown.call(
                                            Ye,
                                            t,
                                            Le,
                                            De,
                                            Re,
                                            Ue,
                                            Xe,
                                            Pe
                                        ));
                        }
                    }
                }
                if (u == h) {
                    if (
                        (Ye.trigger("pinchStatus", [
                            o,
                            ze || null,
                            We || 0,
                            Re || 0,
                            Ue,
                            Ke,
                            Xe,
                        ]),
                        n.pinchStatus &&
                            ((d = n.pinchStatus.call(
                                Ye,
                                t,
                                o,
                                ze || null,
                                We || 0,
                                Re || 0,
                                Ue,
                                Ke,
                                Xe
                            )),
                            d === !1))
                    )
                        return !1;
                    if (o == $ && W())
                        switch (ze) {
                            case c:
                                Ye.trigger("pinchIn", [
                                    ze || null,
                                    We || 0,
                                    Re || 0,
                                    Ue,
                                    Ke,
                                    Xe,
                                ]),
                                    n.pinchIn &&
                                        (d = n.pinchIn.call(
                                            Ye,
                                            t,
                                            ze || null,
                                            We || 0,
                                            Re || 0,
                                            Ue,
                                            Ke,
                                            Xe
                                        ));
                                break;
                            case l:
                                Ye.trigger("pinchOut", [
                                    ze || null,
                                    We || 0,
                                    Re || 0,
                                    Ue,
                                    Ke,
                                    Xe,
                                ]),
                                    n.pinchOut &&
                                        (d = n.pinchOut.call(
                                            Ye,
                                            t,
                                            ze || null,
                                            We || 0,
                                            Re || 0,
                                            Ue,
                                            Ke,
                                            Xe
                                        ));
                        }
                }
                return (
                    u == p
                        ? (o !== C && o !== $) ||
                          (clearTimeout(et),
                          clearTimeout(tt),
                          G() && !ee()
                              ? ((Je = Te()),
                                (et = setTimeout(
                                    e.proxy(function () {
                                        (Je = null),
                                            Ye.trigger("tap", [t.target]),
                                            n.tap &&
                                                (d = n.tap.call(
                                                    Ye,
                                                    t,
                                                    t.target
                                                ));
                                    }, this),
                                    n.doubleTapThreshold
                                )))
                              : ((Je = null),
                                Ye.trigger("tap", [t.target]),
                                n.tap && (d = n.tap.call(Ye, t, t.target))))
                        : u == m
                        ? (o !== C && o !== $) ||
                          (clearTimeout(et),
                          clearTimeout(tt),
                          (Je = null),
                          Ye.trigger("doubletap", [t.target]),
                          n.doubleTap &&
                              (d = n.doubleTap.call(Ye, t, t.target)))
                        : u == v &&
                          ((o !== C && o !== $) ||
                              (clearTimeout(et),
                              (Je = null),
                              Ye.trigger("longtap", [t.target]),
                              n.longTap &&
                                  (d = n.longTap.call(Ye, t, t.target)))),
                    d
                );
            }
            function P() {
                var e = !0;
                return null !== n.threshold && (e = De >= n.threshold), e;
            }
            function R() {
                var e = !1;
                return (
                    null !== n.cancelThreshold &&
                        null !== Le &&
                        (e = me(Le) - De >= n.cancelThreshold),
                    e
                );
            }
            function F() {
                return null === n.pinchThreshold || We >= n.pinchThreshold;
            }
            function H() {
                var e;
                return (e = !n.maxTimeThreshold || !(Re >= n.maxTimeThreshold));
            }
            function K(e, t) {
                if (n.preventDefaultEvents !== !1)
                    if (n.allowPageScroll === u) e.preventDefault();
                    else {
                        var o = n.allowPageScroll === d;
                        switch (t) {
                            case i:
                                ((n.swipeLeft && o) ||
                                    (!o && n.allowPageScroll != g)) &&
                                    e.preventDefault();
                                break;
                            case a:
                                ((n.swipeRight && o) ||
                                    (!o && n.allowPageScroll != g)) &&
                                    e.preventDefault();
                                break;
                            case r:
                                ((n.swipeUp && o) ||
                                    (!o && n.allowPageScroll != y)) &&
                                    e.preventDefault();
                                break;
                            case s:
                                ((n.swipeDown && o) ||
                                    (!o && n.allowPageScroll != y)) &&
                                    e.preventDefault();
                                break;
                            case u:
                        }
                    }
            }
            function W() {
                var e = X(),
                    t = B(),
                    n = F();
                return e && t && n;
            }
            function z() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut);
            }
            function q() {
                return !(!W() || !z());
            }
            function Y() {
                var e = H(),
                    t = P(),
                    n = X(),
                    o = B(),
                    i = R(),
                    a = !i && o && n && t && e;
                return a;
            }
            function Q() {
                return !!(
                    n.swipe ||
                    n.swipeStatus ||
                    n.swipeLeft ||
                    n.swipeRight ||
                    n.swipeUp ||
                    n.swipeDown
                );
            }
            function U() {
                return !(!Y() || !Q());
            }
            function X() {
                return Ue === n.fingers || n.fingers === b || !T;
            }
            function B() {
                return 0 !== Xe[0].end.x;
            }
            function V() {
                return !!n.tap;
            }
            function G() {
                return !!n.doubleTap;
            }
            function Z() {
                return !!n.longTap;
            }
            function J() {
                if (null == Je) return !1;
                var e = Te();
                return G() && e - Je <= n.doubleTapThreshold;
            }
            function ee() {
                return J();
            }
            function te() {
                return (1 === Ue || !T) && (isNaN(De) || De < n.threshold);
            }
            function ne() {
                return Re > n.longTapThreshold && De < x;
            }
            function oe() {
                return !(!te() || !V());
            }
            function ie() {
                return !(!J() || !G());
            }
            function ae() {
                return !(!ne() || !Z());
            }
            function re(e) {
                (Ge = Te()), (Ze = e.touches.length + 1);
            }
            function se() {
                (Ge = 0), (Ze = 0);
            }
            function ce() {
                var e = !1;
                if (Ge) {
                    var t = Te() - Ge;
                    t <= n.fingerReleaseThreshold && (e = !0);
                }
                return e;
            }
            function le() {
                return !(Ye.data(_ + "_intouch") !== !0);
            }
            function ue(e) {
                Ye &&
                    (e === !0
                        ? (Ye.on(Ie, O), Ye.on(Ae, S), Ne && Ye.on(Ne, A))
                        : (Ye.off(Ie, O, !1),
                          Ye.off(Ae, S, !1),
                          Ne && Ye.off(Ne, A, !1)),
                    Ye.data(_ + "_intouch", e === !0));
            }
            function de(e, t) {
                var n = {
                    start: { x: 0, y: 0 },
                    last: { x: 0, y: 0 },
                    end: { x: 0, y: 0 },
                };
                return (
                    (n.start.x = n.last.x = n.end.x = t.pageX || t.clientX),
                    (n.start.y = n.last.y = n.end.y = t.pageY || t.clientY),
                    (Xe[e] = n),
                    n
                );
            }
            function fe(e) {
                var t = void 0 !== e.identifier ? e.identifier : 0,
                    n = he(t);
                return (
                    null === n && (n = de(t, e)),
                    (n.last.x = n.end.x),
                    (n.last.y = n.end.y),
                    (n.end.x = e.pageX || e.clientX),
                    (n.end.y = e.pageY || e.clientY),
                    n
                );
            }
            function he(e) {
                return Xe[e] || null;
            }
            function pe(e, t) {
                e != u && ((t = Math.max(t, me(e))), (qe[e].distance = t));
            }
            function me(e) {
                if (qe[e]) return qe[e].distance;
            }
            function ve() {
                var e = {};
                return (
                    (e[i] = ge(i)),
                    (e[a] = ge(a)),
                    (e[r] = ge(r)),
                    (e[s] = ge(s)),
                    e
                );
            }
            function ge(e) {
                return { direction: e, distance: 0 };
            }
            function ye() {
                return Ve - Be;
            }
            function be(e, t) {
                var n = Math.abs(e.x - t.x),
                    o = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(n * n + o * o));
            }
            function xe(e, t) {
                var n = (t / e) * 1;
                return n.toFixed(2);
            }
            function we() {
                return Ke < 1 ? l : c;
            }
            function ke(e, t) {
                return Math.round(
                    Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                );
            }
            function $e(e, t) {
                var n = e.x - t.x,
                    o = t.y - e.y,
                    i = Math.atan2(o, n),
                    a = Math.round((180 * i) / Math.PI);
                return a < 0 && (a = 360 - Math.abs(a)), a;
            }
            function Ce(e, t) {
                if (_e(e, t)) return u;
                var n = $e(e, t);
                return n <= 45 && n >= 0
                    ? i
                    : n <= 360 && n >= 315
                    ? i
                    : n >= 135 && n <= 225
                    ? a
                    : n > 45 && n < 135
                    ? s
                    : r;
            }
            function Te() {
                var e = new Date();
                return e.getTime();
            }
            function Ee(t) {
                t = e(t);
                var n = t.offset(),
                    o = {
                        left: n.left,
                        right: n.left + t.outerWidth(),
                        top: n.top,
                        bottom: n.top + t.outerHeight(),
                    };
                return o;
            }
            function Me(e, t) {
                return (
                    e.x > t.left &&
                    e.x < t.right &&
                    e.y > t.top &&
                    e.y < t.bottom
                );
            }
            function _e(e, t) {
                return e.x == t.x && e.y == t.y;
            }
            var n = e.extend({}, n),
                Oe = T || M || !n.fallbackToMouseEvents,
                Se = Oe
                    ? M
                        ? E
                            ? "MSPointerDown"
                            : "pointerdown"
                        : "touchstart"
                    : "mousedown",
                Ie = Oe
                    ? M
                        ? E
                            ? "MSPointerMove"
                            : "pointermove"
                        : "touchmove"
                    : "mousemove",
                Ae = Oe
                    ? M
                        ? E
                            ? "MSPointerUp"
                            : "pointerup"
                        : "touchend"
                    : "mouseup",
                Ne = Oe ? (M ? "mouseleave" : null) : "mouseleave",
                je = M
                    ? E
                        ? "MSPointerCancel"
                        : "pointercancel"
                    : "touchcancel",
                De = 0,
                Le = null,
                Pe = null,
                Re = 0,
                Fe = 0,
                He = 0,
                Ke = 1,
                We = 0,
                ze = 0,
                qe = null,
                Ye = e(t),
                Qe = "start",
                Ue = 0,
                Xe = {},
                Be = 0,
                Ve = 0,
                Ge = 0,
                Ze = 0,
                Je = 0,
                et = null,
                tt = null;
            try {
                Ye.on(Se, o), Ye.on(je, I);
            } catch (nt) {
                e.error(
                    "events not supported " + Se + "," + je + " on jQuery.swipe"
                );
            }
            (this.enable = function () {
                return this.disable(), Ye.on(Se, o), Ye.on(je, I), Ye;
            }),
                (this.disable = function () {
                    return N(), Ye;
                }),
                (this.destroy = function () {
                    N(), Ye.data(_, null), (Ye = null);
                }),
                (this.option = function (t, o) {
                    if ("object" == typeof t) n = e.extend(n, t);
                    else if (void 0 !== n[t]) {
                        if (void 0 === o) return n[t];
                        n[t] = o;
                    } else {
                        if (!t) return n;
                        e.error(
                            "Option " +
                                t +
                                " does not exist on jQuery.swipe.options"
                        );
                    }
                    return null;
                });
        }
        var o = "1.6.18",
            i = "left",
            a = "right",
            r = "up",
            s = "down",
            c = "in",
            l = "out",
            u = "none",
            d = "auto",
            f = "swipe",
            h = "pinch",
            p = "tap",
            m = "doubletap",
            v = "longtap",
            g = "horizontal",
            y = "vertical",
            b = "all",
            x = 10,
            w = "start",
            k = "move",
            $ = "end",
            C = "cancel",
            T = "ontouchstart" in window,
            E = window.navigator.msPointerEnabled && !window.PointerEvent && !T,
            M =
                (window.PointerEvent || window.navigator.msPointerEnabled) &&
                !T,
            _ = "TouchSwipe",
            O = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: ".noSwipe",
                preventDefaultEvents: !0,
            };
        (e.fn.swipe = function (n) {
            var o = e(this),
                i = o.data(_);
            if (i && "string" == typeof n) {
                if (i[n])
                    return i[n].apply(
                        i,
                        Array.prototype.slice.call(arguments, 1)
                    );
                e.error("Method " + n + " does not exist on jQuery.swipe");
            } else if (i && "object" == typeof n) i.option.apply(i, arguments);
            else if (!(i || ("object" != typeof n && n)))
                return t.apply(this, arguments);
            return o;
        }),
            (e.fn.swipe.version = o),
            (e.fn.swipe.defaults = O),
            (e.fn.swipe.phases = {
                PHASE_START: w,
                PHASE_MOVE: k,
                PHASE_END: $,
                PHASE_CANCEL: C,
            }),
            (e.fn.swipe.directions = {
                LEFT: i,
                RIGHT: a,
                UP: r,
                DOWN: s,
                IN: c,
                OUT: l,
            }),
            (e.fn.swipe.pageScroll = {
                NONE: u,
                HORIZONTAL: g,
                VERTICAL: y,
                AUTO: d,
            }),
            (e.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                FOUR: 4,
                FIVE: 5,
                ALL: b,
            });
    }),
    (function (e) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            (t =
                "undefined" != typeof window
                    ? window
                    : "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : this),
                (t.Clipboard = e());
        }
    })(function () {
        var e;
        return (function t(e, n, o) {
            function i(r, s) {
                if (!n[r]) {
                    if (!e[r]) {
                        var c = "function" == typeof require && require;
                        if (!s && c) return c(r, !0);
                        if (a) return a(r, !0);
                        var l = new Error("Cannot find module '" + r + "'");
                        throw ((l.code = "MODULE_NOT_FOUND"), l);
                    }
                    var u = (n[r] = { exports: {} });
                    e[r][0].call(
                        u.exports,
                        function (t) {
                            var n = e[r][1][t];
                            return i(n ? n : t);
                        },
                        u,
                        u.exports,
                        t,
                        e,
                        n,
                        o
                    );
                }
                return n[r].exports;
            }
            for (
                var a = "function" == typeof require && require, r = 0;
                r < o.length;
                r++
            )
                i(o[r]);
            return i;
        })(
            {
                1: [
                    function (e, t, n) {
                        function o(e, t) {
                            for (; e && e.nodeType !== i; ) {
                                if (
                                    "function" == typeof e.matches &&
                                    e.matches(t)
                                )
                                    return e;
                                e = e.parentNode;
                            }
                        }
                        var i = 9;
                        if (
                            "undefined" != typeof Element &&
                            !Element.prototype.matches
                        ) {
                            var a = Element.prototype;
                            a.matches =
                                a.matchesSelector ||
                                a.mozMatchesSelector ||
                                a.msMatchesSelector ||
                                a.oMatchesSelector ||
                                a.webkitMatchesSelector;
                        }
                        t.exports = o;
                    },
                    {},
                ],
                2: [
                    function (e, t, n) {
                        function o(e, t, n, o, a) {
                            var r = i.apply(this, arguments);
                            return (
                                e.addEventListener(n, r, a),
                                {
                                    destroy: function () {
                                        e.removeEventListener(n, r, a);
                                    },
                                }
                            );
                        }
                        function i(e, t, n, o) {
                            return function (n) {
                                (n.delegateTarget = a(n.target, t)),
                                    n.delegateTarget && o.call(e, n);
                            };
                        }
                        var a = e("./closest");
                        t.exports = o;
                    },
                    { "./closest": 1 },
                ],
                3: [
                    function (e, t, n) {
                        (n.node = function (e) {
                            return (
                                void 0 !== e &&
                                e instanceof HTMLElement &&
                                1 === e.nodeType
                            );
                        }),
                            (n.nodeList = function (e) {
                                var t = Object.prototype.toString.call(e);
                                return (
                                    void 0 !== e &&
                                    ("[object NodeList]" === t ||
                                        "[object HTMLCollection]" === t) &&
                                    "length" in e &&
                                    (0 === e.length || n.node(e[0]))
                                );
                            }),
                            (n.string = function (e) {
                                return (
                                    "string" == typeof e || e instanceof String
                                );
                            }),
                            (n.fn = function (e) {
                                var t = Object.prototype.toString.call(e);
                                return "[object Function]" === t;
                            });
                    },
                    {},
                ],
                4: [
                    function (e, t, n) {
                        function o(e, t, n) {
                            if (!e && !t && !n)
                                throw new Error("Missing required arguments");
                            if (!s.string(t))
                                throw new TypeError(
                                    "Second argument must be a String"
                                );
                            if (!s.fn(n))
                                throw new TypeError(
                                    "Third argument must be a Function"
                                );
                            if (s.node(e)) return i(e, t, n);
                            if (s.nodeList(e)) return a(e, t, n);
                            if (s.string(e)) return r(e, t, n);
                            throw new TypeError(
                                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                            );
                        }
                        function i(e, t, n) {
                            return (
                                e.addEventListener(t, n),
                                {
                                    destroy: function () {
                                        e.removeEventListener(t, n);
                                    },
                                }
                            );
                        }
                        function a(e, t, n) {
                            return (
                                Array.prototype.forEach.call(e, function (e) {
                                    e.addEventListener(t, n);
                                }),
                                {
                                    destroy: function () {
                                        Array.prototype.forEach.call(
                                            e,
                                            function (e) {
                                                e.removeEventListener(t, n);
                                            }
                                        );
                                    },
                                }
                            );
                        }
                        function r(e, t, n) {
                            return c(document.body, e, t, n);
                        }
                        var s = e("./is"),
                            c = e("delegate");
                        t.exports = o;
                    },
                    { "./is": 3, delegate: 2 },
                ],
                5: [
                    function (e, t, n) {
                        function o(e) {
                            var t;
                            if ("SELECT" === e.nodeName)
                                e.focus(), (t = e.value);
                            else if (
                                "INPUT" === e.nodeName ||
                                "TEXTAREA" === e.nodeName
                            ) {
                                var n = e.hasAttribute("readonly");
                                n || e.setAttribute("readonly", ""),
                                    e.select(),
                                    e.setSelectionRange(0, e.value.length),
                                    n || e.removeAttribute("readonly"),
                                    (t = e.value);
                            } else {
                                e.hasAttribute("contenteditable") && e.focus();
                                var o = window.getSelection(),
                                    i = document.createRange();
                                i.selectNodeContents(e),
                                    o.removeAllRanges(),
                                    o.addRange(i),
                                    (t = o.toString());
                            }
                            return t;
                        }
                        t.exports = o;
                    },
                    {},
                ],
                6: [
                    function (e, t, n) {
                        function o() {}
                        (o.prototype = {
                            on: function (e, t, n) {
                                var o = this.e || (this.e = {});
                                return (
                                    (o[e] || (o[e] = [])).push({
                                        fn: t,
                                        ctx: n,
                                    }),
                                    this
                                );
                            },
                            once: function (e, t, n) {
                                function o() {
                                    i.off(e, o), t.apply(n, arguments);
                                }
                                var i = this;
                                return (o._ = t), this.on(e, o, n);
                            },
                            emit: function (e) {
                                var t = [].slice.call(arguments, 1),
                                    n = (
                                        (this.e || (this.e = {}))[e] || []
                                    ).slice(),
                                    o = 0,
                                    i = n.length;
                                for (o; o < i; o++) n[o].fn.apply(n[o].ctx, t);
                                return this;
                            },
                            off: function (e, t) {
                                var n = this.e || (this.e = {}),
                                    o = n[e],
                                    i = [];
                                if (o && t)
                                    for (var a = 0, r = o.length; a < r; a++)
                                        o[a].fn !== t &&
                                            o[a].fn._ !== t &&
                                            i.push(o[a]);
                                return (
                                    i.length ? (n[e] = i) : delete n[e], this
                                );
                            },
                        }),
                            (t.exports = o);
                    },
                    {},
                ],
                7: [
                    function (t, n, o) {
                        !(function (i, a) {
                            if ("function" == typeof e && e.amd)
                                e(["module", "select"], a);
                            else if ("undefined" != typeof o) a(n, t("select"));
                            else {
                                var r = { exports: {} };
                                a(r, i.select), (i.clipboardAction = r.exports);
                            }
                        })(this, function (e, t) {
                            "use strict";
                            function n(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function o(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            }
                            var i = n(t),
                                a =
                                    "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e &&
                                                  "function" == typeof Symbol &&
                                                  e.constructor === Symbol &&
                                                  e !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof e;
                                          },
                                r = (function () {
                                    function e(e, t) {
                                        for (var n = 0; n < t.length; n++) {
                                            var o = t[n];
                                            (o.enumerable = o.enumerable || !1),
                                                (o.configurable = !0),
                                                "value" in o &&
                                                    (o.writable = !0),
                                                Object.defineProperty(
                                                    e,
                                                    o.key,
                                                    o
                                                );
                                        }
                                    }
                                    return function (t, n, o) {
                                        return (
                                            n && e(t.prototype, n),
                                            o && e(t, o),
                                            t
                                        );
                                    };
                                })(),
                                s = (function () {
                                    function e(t) {
                                        o(this, e),
                                            this.resolveOptions(t),
                                            this.initSelection();
                                    }
                                    return (
                                        r(e, [
                                            {
                                                key: "resolveOptions",
                                                value: function () {
                                                    var e =
                                                        arguments.length > 0 &&
                                                        void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : {};
                                                    (this.action = e.action),
                                                        (this.container =
                                                            e.container),
                                                        (this.emitter =
                                                            e.emitter),
                                                        (this.target =
                                                            e.target),
                                                        (this.text = e.text),
                                                        (this.trigger =
                                                            e.trigger),
                                                        (this.selectedText =
                                                            "");
                                                },
                                            },
                                            {
                                                key: "initSelection",
                                                value: function () {
                                                    this.text
                                                        ? this.selectFake()
                                                        : this.target &&
                                                          this.selectTarget();
                                                },
                                            },
                                            {
                                                key: "selectFake",
                                                value: function () {
                                                    var e = this,
                                                        t =
                                                            "rtl" ==
                                                            document.documentElement.getAttribute(
                                                                "dir"
                                                            );
                                                    this.removeFake(),
                                                        (this.fakeHandlerCallback =
                                                            function () {
                                                                return e.removeFake();
                                                            }),
                                                        (this.fakeHandler =
                                                            this.container.addEventListener(
                                                                "click",
                                                                this
                                                                    .fakeHandlerCallback
                                                            ) || !0),
                                                        (this.fakeElem =
                                                            document.createElement(
                                                                "textarea"
                                                            )),
                                                        (this.fakeElem.style.fontSize =
                                                            "12pt"),
                                                        (this.fakeElem.style.border =
                                                            "0"),
                                                        (this.fakeElem.style.padding =
                                                            "0"),
                                                        (this.fakeElem.style.margin =
                                                            "0"),
                                                        (this.fakeElem.style.position =
                                                            "absolute"),
                                                        (this.fakeElem.style[
                                                            t ? "right" : "left"
                                                        ] = "-9999px");
                                                    var n =
                                                        window.pageYOffset ||
                                                        document.documentElement
                                                            .scrollTop;
                                                    (this.fakeElem.style.top =
                                                        n + "px"),
                                                        this.fakeElem.setAttribute(
                                                            "readonly",
                                                            ""
                                                        ),
                                                        (this.fakeElem.value =
                                                            this.text),
                                                        this.container.appendChild(
                                                            this.fakeElem
                                                        ),
                                                        (this.selectedText = (0,
                                                        i["default"])(
                                                            this.fakeElem
                                                        )),
                                                        this.copyText();
                                                },
                                            },
                                            {
                                                key: "removeFake",
                                                value: function () {
                                                    this.fakeHandler &&
                                                        (this.container.removeEventListener(
                                                            "click",
                                                            this
                                                                .fakeHandlerCallback
                                                        ),
                                                        (this.fakeHandler =
                                                            null),
                                                        (this.fakeHandlerCallback =
                                                            null)),
                                                        this.fakeElem &&
                                                            (this.container.removeChild(
                                                                this.fakeElem
                                                            ),
                                                            (this.fakeElem =
                                                                null));
                                                },
                                            },
                                            {
                                                key: "selectTarget",
                                                value: function () {
                                                    (this.selectedText = (0,
                                                    i["default"])(this.target)),
                                                        this.copyText();
                                                },
                                            },
                                            {
                                                key: "copyText",
                                                value: function () {
                                                    var e = void 0;
                                                    try {
                                                        e =
                                                            document.execCommand(
                                                                this.action
                                                            );
                                                    } catch (t) {
                                                        e = !1;
                                                    }
                                                    this.handleResult(e);
                                                },
                                            },
                                            {
                                                key: "handleResult",
                                                value: function (e) {
                                                    this.emitter.emit(
                                                        e ? "success" : "error",
                                                        {
                                                            action: this.action,
                                                            text: this
                                                                .selectedText,
                                                            trigger:
                                                                this.trigger,
                                                            clearSelection:
                                                                this.clearSelection.bind(
                                                                    this
                                                                ),
                                                        }
                                                    );
                                                },
                                            },
                                            {
                                                key: "clearSelection",
                                                value: function () {
                                                    this.trigger &&
                                                        this.trigger.focus(),
                                                        window
                                                            .getSelection()
                                                            .removeAllRanges();
                                                },
                                            },
                                            {
                                                key: "destroy",
                                                value: function () {
                                                    this.removeFake();
                                                },
                                            },
                                            {
                                                key: "action",
                                                set: function () {
                                                    var e =
                                                        arguments.length > 0 &&
                                                        void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : "copy";
                                                    if (
                                                        ((this._action = e),
                                                        "copy" !==
                                                            this._action &&
                                                            "cut" !==
                                                                this._action)
                                                    )
                                                        throw new Error(
                                                            'Invalid "action" value, use either "copy" or "cut"'
                                                        );
                                                },
                                                get: function () {
                                                    return this._action;
                                                },
                                            },
                                            {
                                                key: "target",
                                                set: function (e) {
                                                    if (void 0 !== e) {
                                                        if (
                                                            !e ||
                                                            "object" !==
                                                                ("undefined" ==
                                                                typeof e
                                                                    ? "undefined"
                                                                    : a(e)) ||
                                                            1 !== e.nodeType
                                                        )
                                                            throw new Error(
                                                                'Invalid "target" value, use a valid Element'
                                                            );
                                                        if (
                                                            "copy" ===
                                                                this.action &&
                                                            e.hasAttribute(
                                                                "disabled"
                                                            )
                                                        )
                                                            throw new Error(
                                                                'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                                            );
                                                        if (
                                                            "cut" ===
                                                                this.action &&
                                                            (e.hasAttribute(
                                                                "readonly"
                                                            ) ||
                                                                e.hasAttribute(
                                                                    "disabled"
                                                                ))
                                                        )
                                                            throw new Error(
                                                                'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                                            );
                                                        this._target = e;
                                                    }
                                                },
                                                get: function () {
                                                    return this._target;
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })();
                            e.exports = s;
                        });
                    },
                    { select: 5 },
                ],
                8: [
                    function (t, n, o) {
                        !(function (i, a) {
                            if ("function" == typeof e && e.amd)
                                e(
                                    [
                                        "module",
                                        "./clipboard-action",
                                        "tiny-emitter",
                                        "good-listener",
                                    ],
                                    a
                                );
                            else if ("undefined" != typeof o)
                                a(
                                    n,
                                    t("./clipboard-action"),
                                    t("tiny-emitter"),
                                    t("good-listener")
                                );
                            else {
                                var r = { exports: {} };
                                a(
                                    r,
                                    i.clipboardAction,
                                    i.tinyEmitter,
                                    i.goodListener
                                ),
                                    (i.clipboard = r.exports);
                            }
                        })(this, function (e, t, n, o) {
                            "use strict";
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function a(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            }
                            function r(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            }
                            function s(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                            typeof t
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                    t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t));
                            }
                            function c(e, t) {
                                var n = "data-clipboard-" + e;
                                if (t.hasAttribute(n)) return t.getAttribute(n);
                            }
                            var l = i(t),
                                u = i(n),
                                d = i(o),
                                f =
                                    "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e &&
                                                  "function" == typeof Symbol &&
                                                  e.constructor === Symbol &&
                                                  e !== Symbol.prototype
                                                  ? "symbol"
                                                  : typeof e;
                                          },
                                h = (function () {
                                    function e(e, t) {
                                        for (var n = 0; n < t.length; n++) {
                                            var o = t[n];
                                            (o.enumerable = o.enumerable || !1),
                                                (o.configurable = !0),
                                                "value" in o &&
                                                    (o.writable = !0),
                                                Object.defineProperty(
                                                    e,
                                                    o.key,
                                                    o
                                                );
                                        }
                                    }
                                    return function (t, n, o) {
                                        return (
                                            n && e(t.prototype, n),
                                            o && e(t, o),
                                            t
                                        );
                                    };
                                })(),
                                p = (function (e) {
                                    function t(e, n) {
                                        a(this, t);
                                        var o = r(
                                            this,
                                            (
                                                t.__proto__ ||
                                                Object.getPrototypeOf(t)
                                            ).call(this)
                                        );
                                        return (
                                            o.resolveOptions(n),
                                            o.listenClick(e),
                                            o
                                        );
                                    }
                                    return (
                                        s(t, e),
                                        h(
                                            t,
                                            [
                                                {
                                                    key: "resolveOptions",
                                                    value: function () {
                                                        var e =
                                                            arguments.length >
                                                                0 &&
                                                            void 0 !==
                                                                arguments[0]
                                                                ? arguments[0]
                                                                : {};
                                                        (this.action =
                                                            "function" ==
                                                            typeof e.action
                                                                ? e.action
                                                                : this
                                                                      .defaultAction),
                                                            (this.target =
                                                                "function" ==
                                                                typeof e.target
                                                                    ? e.target
                                                                    : this
                                                                          .defaultTarget),
                                                            (this.text =
                                                                "function" ==
                                                                typeof e.text
                                                                    ? e.text
                                                                    : this
                                                                          .defaultText),
                                                            (this.container =
                                                                "object" ===
                                                                f(e.container)
                                                                    ? e.container
                                                                    : document.body);
                                                    },
                                                },
                                                {
                                                    key: "listenClick",
                                                    value: function (e) {
                                                        var t = this;
                                                        this.listener = (0,
                                                        d["default"])(
                                                            e,
                                                            "click",
                                                            function (e) {
                                                                return t.onClick(
                                                                    e
                                                                );
                                                            }
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "onClick",
                                                    value: function (e) {
                                                        var t =
                                                            e.delegateTarget ||
                                                            e.currentTarget;
                                                        this.clipboardAction &&
                                                            (this.clipboardAction =
                                                                null),
                                                            (this.clipboardAction =
                                                                new l[
                                                                    "default"
                                                                ]({
                                                                    action: this.action(
                                                                        t
                                                                    ),
                                                                    target: this.target(
                                                                        t
                                                                    ),
                                                                    text: this.text(
                                                                        t
                                                                    ),
                                                                    container:
                                                                        this
                                                                            .container,
                                                                    trigger: t,
                                                                    emitter:
                                                                        this,
                                                                }));
                                                    },
                                                },
                                                {
                                                    key: "defaultAction",
                                                    value: function (e) {
                                                        return c("action", e);
                                                    },
                                                },
                                                {
                                                    key: "defaultTarget",
                                                    value: function (e) {
                                                        var t = c("target", e);
                                                        if (t)
                                                            return document.querySelector(
                                                                t
                                                            );
                                                    },
                                                },
                                                {
                                                    key: "defaultText",
                                                    value: function (e) {
                                                        return c("text", e);
                                                    },
                                                },
                                                {
                                                    key: "destroy",
                                                    value: function () {
                                                        this.listener.destroy(),
                                                            this
                                                                .clipboardAction &&
                                                                (this.clipboardAction.destroy(),
                                                                (this.clipboardAction =
                                                                    null));
                                                    },
                                                },
                                            ],
                                            [
                                                {
                                                    key: "isSupported",
                                                    value: function () {
                                                        var e =
                                                                arguments.length >
                                                                    0 &&
                                                                void 0 !==
                                                                    arguments[0]
                                                                    ? arguments[0]
                                                                    : [
                                                                          "copy",
                                                                          "cut",
                                                                      ],
                                                            t =
                                                                "string" ==
                                                                typeof e
                                                                    ? [e]
                                                                    : e,
                                                            n =
                                                                !!document.queryCommandSupported;
                                                        return (
                                                            t.forEach(function (
                                                                e
                                                            ) {
                                                                n =
                                                                    n &&
                                                                    !!document.queryCommandSupported(
                                                                        e
                                                                    );
                                                            }),
                                                            n
                                                        );
                                                    },
                                                },
                                            ]
                                        ),
                                        t
                                    );
                                })(u["default"]);
                            e.exports = p;
                        });
                    },
                    {
                        "./clipboard-action": 7,
                        "good-listener": 4,
                        "tiny-emitter": 6,
                    },
                ],
            },
            {},
            [8]
        )(8);
    }),
    (function (e) {
        function t(e, t) {
            if (!(e.originalEvent.touches.length > 1)) {
                e.preventDefault();
                var n = e.originalEvent.changedTouches[0],
                    o = document.createEvent("MouseEvents");
                o.initMouseEvent(
                    t,
                    !0,
                    !0,
                    window,
                    1,
                    n.screenX,
                    n.screenY,
                    n.clientX,
                    n.clientY,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                ),
                    e.target.dispatchEvent(o);
            }
        }
        if (((e.support.touch = "ontouchend" in document), e.support.touch)) {
            var n,
                o = e.ui.mouse.prototype,
                i = o._mouseInit,
                a = o._mouseDestroy;
            (o._touchStart = function (e) {
                var o = this;
                !n &&
                    o._mouseCapture(e.originalEvent.changedTouches[0]) &&
                    ((n = !0),
                    (o._touchMoved = !1),
                    t(e, "mouseover"),
                    t(e, "mousemove"),
                    t(e, "mousedown"));
            }),
                (o._touchMove = function (e) {
                    n && ((this._touchMoved = !0), t(e, "mousemove"));
                }),
                (o._touchEnd = function (e) {
                    n &&
                        (t(e, "mouseup"),
                        t(e, "mouseout"),
                        this._touchMoved || t(e, "click"),
                        (n = !1));
                }),
                (o._mouseInit = function () {
                    var t = this;
                    t.element.bind({
                        touchstart: e.proxy(t, "_touchStart"),
                        touchmove: e.proxy(t, "_touchMove"),
                        touchend: e.proxy(t, "_touchEnd"),
                    }),
                        i.call(t);
                }),
                (o._mouseDestroy = function () {
                    var t = this;
                    t.element.unbind({
                        touchstart: e.proxy(t, "_touchStart"),
                        touchmove: e.proxy(t, "_touchMove"),
                        touchend: e.proxy(t, "_touchEnd"),
                    }),
                        a.call(t);
                });
        }
    })(jQuery);

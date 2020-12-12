require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4], {
    "1hHm": function(t, e, n) {
        "use strict";
        var s = n("Gu7T"),
            a = n.n(s),
            i = n("Dd8w"),
            c = n.n(i),
            o = n("NYxO");
        e.a = {
            onUnload: function() {
                this.$store.commit("resetCurrentConversation"), this.$store.commit("resetGroup")
            },
            computed: c()({}, Object(o.c)({
                currentMessageList: function(t) {
                    return [].concat(a()(t.conversation.currentMessageList)).reverse()
                }
            })),
            onShow: function() {
                var t = this,
                    e = setInterval(function() {
                        0 !== t.currentMessageList.length && (wx.pageScrollTo({
                            scrollTop: 99999
                        }), clearInterval(e))
                    }, 600)
            },
            methods: {
                handleClick: function(t) {
                    var e = this;
                    wx.showActionSheet({
                        itemList: ["同意", "拒绝"],
                        success: function(n) {
                            var s = {
                                handleAction: "Agree",
                                handleMessage: "欢迎进群",
                                message: t
                            };
                            1 === n.tapIndex && (s.handleAction = "Reject", s.handleMessage = "拒绝申请"), wx.$app.handleGroupApplication(s).then(function() {
                                wx.showToast({
                                    title: "Agree" === s.handleAction ? "已同意申请" : "已拒绝申请"
                                }), e.$store.commit("removeMessage", t)
                            }).catch(function(t) {
                                wx.showToast({
                                    title: t.message || "处理失败",
                                    icon: "none"
                                })
                            })
                        }
                    })
                }
            }
        }
    },
    mE9X: function(t, e, n) {
        "use strict";
        var s = n("1hHm"),
            a = n("rPKi");
        var i = function(t) {
                n("sq23")
            },
            c = n("ybqe")(s.a, a.a, i, "data-v-5e5810f9", null);
        e.a = c.exports
    },
    rPKi: function(t, e, n) {
        "use strict";
        var s = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "container"
                }, [0 === t.currentMessageList.length ? n("div", [n("div", {
                    staticClass: "card"
                }, [t._v("\n      暂无系统消息\n    ")])]) : t._e(), t._v(" "), t._l(t.currentMessageList, function(e, s) {
                    return n("div", {
                        key: e.ID
                    }, [1 === e.payload.operationType ? n("div", {
                        staticClass: "card handle"
                    }, [n("div", [n("div", {
                        staticClass: "time"
                    }, [t._v(t._s(e.newtime))]), t._v("\n        " + t._s(e.virtualDom[0].text) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "choose"
                    }, [n("button", {
                        staticClass: "button",
                        attrs: {
                            type: "button",
                            eventid: "0_" + s
                        },
                        on: {
                            click: function(n) {
                                t.handleClick(e)
                            }
                        }
                    }, [t._v("处理")])], 1)]) : n("div", {
                        staticClass: "card"
                    }, [n("div", {
                        staticClass: "time"
                    }, [t._v(t._s(e.newtime))]), t._v("\n      " + t._s(e.virtualDom[0].text) + "\n    ")])])
                })], 2)
            },
            staticRenderFns: []
        };
        e.a = s
    },
    sq23: function(t, e) {},
    "w+EO": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n("5nAL"),
            a = n.n(s),
            i = n("mE9X");
        new a.a(i.a).$mount()
    }
}, ["w+EO"]);
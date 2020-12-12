require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([17], {
    "4HNR": function(t, e) {},
    "7nvq": function(t, e, n) {
        "use strict";
        var a = n("Dd8w"),
            s = n.n(a),
            i = n("NYxO");
        e.a = {
            data: function() {
                return {
                    userList: []
                }
            },
            computed: s()({}, Object(i.c)({
                blacklist: function(t) {
                    return t.user.blacklist
                }
            })),
            onShow: function() {
                var t = this;
                if (this.blacklist.length > 0) {
                    var e = {
                        userIDList: this.blacklist
                    };
                    wx.$app.getUserProfile(e).then(function(e) {
                        t.userList = e.data
                    })
                }
            },
            methods: {
                toDetail: function(t) {
                    wx.navigateTo({
                        url: "../user-profile/main?userID=" + t
                    })
                }
            }
        }
    },
    BvzH: function(t, e, n) {
        "use strict";
        var a = n("7nvq"),
            s = n("EOdW");
        var i = function(t) {
                n("4HNR")
            },
            r = n("ybqe")(a.a, s.a, i, "data-v-67fa5f29", null);
        e.a = r.exports
    },
    EOdW: function(t, e, n) {
        "use strict";
        var a = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "blacklist"
                }, [0 === t.blacklist.length ? n("div", {
                    staticClass: "wrapper"
                }, [n("div", {
                    staticClass: "none"
                }, [t._v("\n      你还没有拉黑任何人哦\n    ")])]) : t._e(), t._v(" "), t._l(t.userList, function(e, a) {
                    return n("div", {
                        key: e.userID,
                        staticClass: "list",
                        attrs: {
                            eventid: "0_" + a
                        },
                        on: {
                            click: function(n) {
                                t.toDetail(e.userID)
                            }
                        }
                    }, [n("div", {
                        staticClass: "avatar"
                    }, [n("img", {
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        attrs: {
                            src: e.avatar || "/static/images/avatar.png"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "name"
                    }, [t._v("\n      " + t._s(e.nick || e.userID) + "\n    ")])])
                })], 2)
            },
            staticRenderFns: []
        };
        e.a = a
    },
    yZeT: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("5nAL"),
            s = n.n(a),
            i = n("BvzH");
        s.a.config.errorHandler = function(t) {
            console && console.error && console.error(t)
        }, new s.a(i.a).$mount()
    }
}, ["yZeT"]);
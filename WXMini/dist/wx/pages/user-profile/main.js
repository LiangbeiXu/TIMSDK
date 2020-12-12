require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2], {
    "6i0Y": function(t, s) {},
    BBly: function(t, s, i) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var e = i("5nAL"),
            a = i.n(e),
            o = i("MCpR");
        new a.a(o.a).$mount()
    },
    MCpR: function(t, s, i) {
        "use strict";
        var e = i("bld3"),
            a = i("c5J8");
        var o = function(t) {
                i("6i0Y")
            },
            n = i("ybqe")(e.a, a.a, o, null, null);
        s.a = n.exports
    },
    bld3: function(t, s, i) {
        "use strict";
        var e = i("mvHQ"),
            a = i.n(e),
            o = i("Dd8w"),
            n = i.n(o),
            c = i("NYxO");
        s.a = {
            data: function() {
                return {
                    userProfile: {},
                    isInBlacklist: !1
                }
            },
            computed: n()({}, Object(c.c)({
                blacklist: function(t) {
                    return t.user.blacklist
                }
            }), Object(c.b)(["isIphoneX"])),
            onLoad: function(t) {
                var s = this,
                    i = t.userID;
                t.groupID;
                i && (this.blacklist.indexOf(i) > -1 && (this.isInBlacklist = !0), wx.$app.getUserProfile({
                    userIDList: [i]
                }).then(function(t) {
                    s.userProfile = t.data[0]
                }))
            },
            onUnload: function() {
                this.userProfile = {}, this.isInBlacklist = !1
            },
            methods: {
                getRandomInt: function(t, s) {
                    return t = Math.ceil(t), s = Math.floor(s), Math.floor(Math.random() * (s - t)) + t
                },
                videoCall: function() {
                    var t = {
                            call_id: "",
                            version: 3,
                            room_id: this.getRandomInt(0, 42949),
                            action: 0,
                            duration: 0,
                            invited_list: []
                        },
                        s = a()(t),
                        i = wx.$app.createCustomMessage({
                            to: this.userProfile.userID,
                            conversationType: "C2C",
                            payload: {
                                data: s,
                                description: "",
                                extension: ""
                            }
                        });
                    this.$store.commit("sendMessage", i), wx.$app.sendMessage(i);
                    var e = "../call/main?args=" + s + "&&from=" + i.from + "&&to=" + i.to;
                    wx.navigateTo({
                        url: e
                    })
                },
                sendMessage: function() {
                    this.$store.dispatch("checkoutConversation", "C2C" + this.userProfile.userID)
                },
                handleSwitch: function(t) {
                    t.mp.detail.value ? this.addBlackList() : this.deleteBlackList()
                },
                addBlackList: function() {
                    var t = this;
                    wx.$app.addToBlacklist({
                        userIDList: [this.userProfile.userID]
                    }).then(function(s) {
                        t.$store.commit("showToast", {
                            title: "拉黑成功",
                            icon: "none",
                            duration: 1500
                        }), t.isInBlacklist = !0, t.$store.commit("setBlacklist", s.data)
                    }).catch(function() {
                        t.$store.commit("showToast", {
                            title: "拉黑失败",
                            icon: "none",
                            duration: 1500
                        })
                    })
                },
                deleteBlackList: function() {
                    var t = this;
                    wx.$app.removeFromBlacklist({
                        userIDList: [this.userProfile.userID]
                    }).then(function(s) {
                        t.$store.commit("showToast", {
                            title: "取消拉黑成功",
                            icon: "none",
                            duration: 1500
                        }), t.$store.commit("setBlacklist", s.data), t.isInBlacklist = !1
                    }).catch(function() {
                        t.$store.commit("showToast", {
                            title: "取消拉黑失败",
                            icon: "none",
                            duration: 1500
                        })
                    })
                }
            }
        }
    },
    c5J8: function(t, s, i) {
        "use strict";
        var e = {
            render: function() {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("div", {
                    staticClass: "container"
                }, [i("div", {
                    staticClass: "info-card"
                }, [i("i-avatar", {
                    attrs: {
                        "i-class": "avatar",
                        src: t.userProfile.avatar,
                        mpcomid: "0"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "basic"
                }, [i("div", {
                    staticClass: "username"
                }, [t._v(t._s(t.userProfile.nick || "未设置"))]), t._v(" "), i("div", {
                    staticClass: "user-id"
                }, [t._v("用户ID：" + t._s(t.userProfile.userID))])])], 1), t._v(" "), i("i-cell-group", {
                    attrs: {
                        "i-class": "cell-group",
                        mpcomid: "2"
                    }
                }, [i("i-cell", {
                    attrs: {
                        title: "个性签名",
                        mpcomid: "1"
                    }
                }, [i("div", {
                    staticClass: "signature",
                    slot: "footer"
                }, [t._v("\n        " + t._s(t.userProfile.selfSignature || "暂无") + "\n      ")])])], 1), t._v(" "), i("i-cell-group", {
                    attrs: {
                        "i-class": "cell-group",
                        mpcomid: "4"
                    }
                }, [i("i-cell", {
                    attrs: {
                        title: "加入黑名单",
                        mpcomid: "3"
                    }
                }, [i("switch", {
                    attrs: {
                        color: "#006fff",
                        checked: t.isInBlacklist,
                        eventid: "0"
                    },
                    on: {
                        change: t.handleSwitch
                    },
                    slot: "footer"
                })])], 1), t._v(" "), i("div", {
                    staticClass: "action-list",
                    style: {
                        "margin-bottom": t.isIphoneX ? "34px" : 0
                    }
                }, [i("button", {
                    staticClass: "video-call",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.videoCall
                    }
                }, [t._v("\n      音视频通话\n      "), i("div", {
                    staticClass: "new-badge"
                }, [t._v("NEW")])]), t._v(" "), i("button", {
                    staticClass: "send-messsage",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.sendMessage
                    }
                }, [t._v("发送消息")])], 1)], 1)
            },
            staticRenderFns: []
        };
        s.a = e
    }
}, ["BBly"]);
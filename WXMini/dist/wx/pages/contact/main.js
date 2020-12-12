require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14], {
    OK3r: function(t, i) {},
    P61V: function(t, i, e) {
        "use strict";
        var r = e("Gu7T"),
            n = e.n(r),
            s = e("ifoU"),
            a = e.n(s),
            o = e("0xDb");
        i.a = {
            data: function() {
                return {
                    search: "",
                    groupedFriends: [],
                    indexList: [],
                    addUserId: "",
                    result: {},
                    scrollTop: 0
                }
            },
            onPageScroll: function(t) {
                this.scrollTop = t.scrollTop
            },
            methods: {
                handleApply: function() {
                    var t = this;
                    wx.$app.joinGroup({
                        groupID: this.result.groupID,
                        type: this.result.type
                    }).then(function(i) {
                        "JoinedSuccess" === i.data.status ? (t.$store.commit("showToast", {
                            title: "加群成功"
                        }), t.search = "") : t.$store.commit("showToast", {
                            title: "申请成功，等待群管理员确认"
                        }), t.handleApplyModal()
                    }).catch(function() {
                        t.$store.commit("showToast", {
                            title: "加群失败"
                        })
                    })
                },
                initFriendsList: function() {
                    var t = this;
                    wx.$app.getFriendList({
                        fromAccount: this.$store.state.user.userProfile.to
                    }).then(function(i) {
                        var e = new a.a;
                        i.data.forEach(function(t) {
                            return e.set(t.userID, t)
                        });
                        var r = t.groupingFriendList([].concat(n()(e.values())));
                        t.groupedFriends = r, t.indexList = r.map(function(t) {
                            return t.key
                        })
                    })
                },
                groupingFriendList: function(t) {
                    var i = new a.a,
                        e = [];
                    return t.forEach(function(t) {
                        var e = t.profile.nick || t.userID,
                            r = Object(o.d)(e)[0].toUpperCase();
                        i.has(r) ? i.get(r).push(t) : i.set(r, [t])
                    }), i.forEach(function(t, i) {
                        e.push({
                            key: i,
                            friendList: t
                        })
                    }), e.sort(function(t, i) {
                        return t.key > i.key ? 1 : -1
                    })
                },
                toProfile: function(t) {
                    wx.navigateTo({
                        url: "../user-profile/main?userID=" + t
                    })
                }
            },
            mounted: function() {
                this.initFriendsList()
            }
        }
    },
    hYiP: function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = e("5nAL"),
            n = e.n(r),
            s = e("xLcW");
        new n.a(s.a).$mount()
    },
    v4xU: function(t, i, e) {
        "use strict";
        var r = {
            render: function() {
                var t = this,
                    i = t.$createElement,
                    e = t._self._c || i;
                return e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "methods"
                }, [e("i-cell-group", {
                    attrs: {
                        mpcomid: "5"
                    }
                }, [e("i-cell", {
                    attrs: {
                        title: "发起会话",
                        "is-link": "",
                        url: "/pages/search/main?type=user",
                        mpcomid: "0"
                    }
                }), t._v(" "), e("i-cell", {
                    attrs: {
                        title: "加入群聊",
                        "is-link": "",
                        url: "/pages/search/main?type=group",
                        mpcomid: "1"
                    }
                }), t._v(" "), e("i-cell", {
                    attrs: {
                        title: "新建群聊",
                        "is-link": "",
                        url: "/pages/create/main",
                        mpcomid: "2"
                    }
                }), t._v(" "), e("i-cell", {
                    attrs: {
                        title: "我的黑名单",
                        "is-link": "",
                        url: "/pages/blacklist/main",
                        mpcomid: "3"
                    }
                }), t._v(" "), e("i-cell", {
                    attrs: {
                        title: "我的群组",
                        "is-link": "",
                        url: "/pages/groups/main",
                        mpcomid: "4"
                    }
                })], 1)], 1), t._v(" "), e("div", {
                    staticClass: "friends"
                }, [e("van-index-bar", {
                    attrs: {
                        "scroll-top": t.scrollTop,
                        "index-list": t.indexList,
                        mpcomid: "8"
                    }
                }, t._l(t.groupedFriends, function(i, r) {
                    return e("div", {
                        key: i.key
                    }, [e("van-index-anchor", {
                        attrs: {
                            index: i.key,
                            mpcomid: "6_" + r
                        }
                    }), t._v(" "), t._l(i.friendList, function(i, n) {
                        return e("div", {
                            key: i.userID,
                            staticClass: "friend-item",
                            attrs: {
                                eventid: "0_" + r + "-" + n
                            },
                            on: {
                                click: function(e) {
                                    t.toProfile(i.userID)
                                }
                            }
                        }, [e("i-avatar", {
                            attrs: {
                                "i-class": "avatar",
                                src: i.profile.avatar,
                                mpcomid: "7_" + r + "-" + n
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "username"
                        }, [t._v(t._s(i.profile.nick || i.userID))])], 1)
                    })], 2)
                }))], 1)])
            },
            staticRenderFns: []
        };
        i.a = r
    },
    xLcW: function(t, i, e) {
        "use strict";
        var r = e("P61V"),
            n = e("v4xU");
        var s = function(t) {
                e("OK3r")
            },
            a = e("ybqe")(r.a, n.a, s, null, null);
        i.a = a.exports
    }
}, ["hYiP"]);
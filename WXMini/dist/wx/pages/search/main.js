require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5], {
    "1kNa": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"),
            a = n.n(i),
            o = n("ar59");
        new a.a(o.a).$mount()
    },
    HR0J: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "container"
                }, [n("div", {
                    staticClass: "search-bar"
                }, [n("img", {
                    attrs: {
                        src: "/static/images/search.png"
                    }
                }), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ID,
                        expression: "ID"
                    }],
                    attrs: {
                        focus: !0,
                        "confirm-type": "search",
                        placeholder: t.placeholder,
                        eventid: "0"
                    },
                    domProps: {
                        value: t.ID
                    },
                    on: {
                        confirm: t.search,
                        input: [function(e) {
                            e.target.composing || (t.ID = e.target.value)
                        }, t.handleInput]
                    }
                })]), t._v(" "), n("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.searched,
                        expression: "searched"
                    }],
                    attrs: {
                        loading: t.loading,
                        "hover-class": "clicked",
                        eventid: "1"
                    },
                    on: {
                        click: t.handleClick
                    }
                }, [t._v(t._s(t.buttonText))])], 1)
            },
            staticRenderFns: []
        };
        e.a = i
    },
    ar59: function(t, e, n) {
        "use strict";
        var i = n("r/9Q"),
            a = n("HR0J");
        var o = function(t) {
                n("hfOq")
            },
            s = n("ybqe")(i.a, a.a, o, "data-v-ba8a7d9c", null);
        e.a = s.exports
    },
    hfOq: function(t, e) {},
    "r/9Q": function(t, e, n) {
        "use strict";
        var i = n("Dd8w"),
            a = n.n(i),
            o = n("NYxO");
        e.a = {
            data: function() {
                return {
                    type: "",
                    ID: "",
                    searchedID: "",
                    searched: !1,
                    loading: !1,
                    buttonText: ""
                }
            },
            onLoad: function(t) {
                var e = t.type;
                this.type = e, "user" === e ? (this.buttonText = "发起会话", wx.setNavigationBarTitle({
                    title: "发起会话"
                })) : (this.buttonText = "申请加群", wx.setNavigationBarTitle({
                    title: "加入群聊"
                }))
            },
            onUnload: function() {
                this.ID = "", this.searched = !1, this.loading = !1, this.type = ""
            },
            computed: a()({}, Object(o.c)({
                groupList: function(t) {
                    return t.group.groupList
                }
            }), {
                placeholder: function() {
                    return "user" === this.type ? "请输入userID" : "请输入groupID"
                }
            }),
            methods: {
                handleInput: function() {
                    "" !== this.searchedID && this.ID === this.searchedID || (this.searched = !1)
                },
                search: function() {
                    "" !== this.ID && (wx.showLoading({
                        title: "正在搜索"
                    }), "user" === this.type ? this.searchUser() : this.searchGroup())
                },
                searchUser: function() {
                    var t = this;
                    wx.$app.getUserProfile({
                        userIDList: [this.ID]
                    }).then(function(e) {
                        var n = e.data;
                        wx.hideLoading(), 0 !== n.length ? (t.searched = !0, t.searchedID = t.ID) : wx.showToast({
                            title: "未找到该用户",
                            duration: 1e3,
                            icon: "none"
                        })
                    }).catch(function(t) {
                        wx.hideLoading(), wx.showToast({
                            title: t.message,
                            duration: 1e3,
                            icon: "none"
                        })
                    })
                },
                searchGroup: function() {
                    var t = this;
                    wx.$app.searchGroupByID(this.ID).then(function(e) {
                        var n = e.data;
                        wx.hideLoading(), t.groupList.findIndex(function(e) {
                            return e.groupID === t.ID
                        }) >= 0 || n.group.type === wx.TIM.TYPES.GRP_AVCHATROOM ? t.buttonText = "进入群聊" : t.buttonText = "申请加群", t.searched = !0, t.searchedID = t.ID
                    }).catch(function(t) {
                        wx.hideLoading(), 10007 === t.code ? wx.showToast({
                            title: "讨论组类型群组不允许申请加群",
                            duration: 1e3,
                            icon: "none"
                        }) : wx.showToast({
                            title: "未找到该群组",
                            duration: 1e3,
                            icon: "none"
                        })
                    })
                },
                handleClick: function() {
                    "user" === this.type ? this.createConversation() : this.joinGroup()
                },
                createConversation: function() {
                    var t = this;
                    this.loading = !0, this.$store.dispatch("checkoutConversation", "C2C" + this.ID).then(function() {
                        t.loading = !1
                    }).catch(function() {
                        t.loading = !1
                    })
                },
                joinGroup: function() {
                    var t = this;
                    this.loading = !0, wx.$app.joinGroup({
                        groupID: this.ID,
                        applyMessage: "我想申请加入贵群，望批准！"
                    }).then(function() {
                        t.loading = !1, t.$store.dispatch("checkoutConversation", "GROUP" + t.ID)
                    }).catch(function() {
                        t.loading = !1
                    })
                }
            }
        }
    }
}, ["1kNa"]);
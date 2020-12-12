require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13], {
    K4dr: function(e, t, n) {
        "use strict";
        var a = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "container"
                }, [n("div", {
                    staticClass: "form-item"
                }, [n("div", {
                    staticClass: "label"
                }, [e._v("群类型")]), e._v(" "), n("picker", {
                    attrs: {
                        range: e.range,
                        "range-key": "name",
                        value: e.selectedIndex,
                        eventid: "0"
                    },
                    on: {
                        change: e.choose
                    }
                }, [e._v("\n      " + e._s(e.range[e.selectedIndex].name) + "\n      "), n("i-icon", {
                    attrs: {
                        type: "enter",
                        mpcomid: "0"
                    }
                })], 1)], 1), e._v(" "), n("div", {
                    staticClass: "form-item",
                    class: {
                        required: e.isAVChatRoom
                    }
                }, [n("div", {
                    staticClass: "label"
                }, [e._v("\n      群ID\n      "), e.isAVChatRoom ? n("i-icon", {
                    attrs: {
                        type: "prompt",
                        eventid: "1",
                        mpcomid: "1"
                    },
                    on: {
                        click: e.showInfo
                    }
                }) : e._e()], 1), e._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.groupID,
                        expression: "groupID"
                    }],
                    attrs: {
                        placeholder: "请输入群ID",
                        eventid: "2"
                    },
                    domProps: {
                        value: e.groupID
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.groupID = t.target.value)
                        }
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "form-item name required"
                }, [n("div", {
                    staticClass: "label"
                }, [e._v("\n      群名称\n    ")]), e._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.groupName,
                        expression: "groupName"
                    }],
                    attrs: {
                        placeholder: "请输入群名称",
                        eventid: "3"
                    },
                    domProps: {
                        value: e.groupName
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.groupName = t.target.value)
                        }
                    }
                })]), e._v(" "), n("button", {
                    class: {
                        "button-disabled": e.disabled
                    },
                    attrs: {
                        "hover-class": "clicked",
                        loading: e.loading,
                        disabled: e.disabled,
                        eventid: "4"
                    },
                    on: {
                        click: e.handleClick
                    }
                }, [e._v("创建群组")])], 1)
            },
            staticRenderFns: []
        };
        t.a = a
    },
    TIXD: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("5nAL"),
            o = n.n(a),
            i = n("qy7V");
        new o.a(i.a).$mount()
    },
    UkFA: function(e, t) {},
    qy7V: function(e, t, n) {
        "use strict";
        var a = n("xNvV"),
            o = n("K4dr");
        var i = function(e) {
                n("UkFA")
            },
            s = n("ybqe")(a.a, o.a, i, null, null);
        t.a = s.exports
    },
    xNvV: function(e, t, n) {
        "use strict";
        var a = n("//Fk"),
            o = n.n(a),
            i = n("woOf"),
            s = n.n(i),
            r = n("Dd8w"),
            d = n.n(r),
            l = {
                selectedIndex: 0,
                range: [{
                    type: wx.TIM.TYPES.GRP_WORK,
                    name: "好友工作群"
                }, {
                    type: wx.TIM.TYPES.GRP_PUBLIC,
                    name: "陌生人社交群"
                }, {
                    type: wx.TIM.TYPES.GRP_MEETING,
                    name: "临时会议群"
                }, {
                    type: wx.TIM.TYPES.GRP_AVCHATROOM,
                    name: "直播群"
                }],
                groupName: "",
                groupID: "",
                loading: !1
            };
        t.a = {
            data: function() {
                return d()({}, l)
            },
            onUnload: function() {
                s()(this, l)
            },
            computed: {
                isAVChatRoom: function() {
                    return this.range[this.selectedIndex].type === wx.TIM.TYPES.GRP_AVCHATROOM
                },
                disabled: function() {
                    return "" === this.groupName || !(!this.isAVChatRoom || "" !== this.groupID)
                }
            },
            methods: {
                choose: function(e) {
                    this.selectedIndex = Number(e.mp.detail.value)
                },
                handleClick: function() {
                    var e = this;
                    this.loading = !0, wx.$app.createGroup({
                        type: this.range[this.selectedIndex].type,
                        groupID: this.groupID || void 0,
                        name: this.groupName
                    }).then(function(t) {
                        var n = t.data.group;
                        return e.isAVChatRoom ? wx.$app.joinGroup({
                            groupID: n.groupID
                        }) : o.a.resolve()
                    }).then(this.handleResolved).catch(this.handleRejected)
                },
                handleResolved: function() {
                    this.loading = !1, wx.showToast({
                        title: "创建成功",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.navigateBack()
                    }, 1e3)
                },
                handleRejected: function(e) {
                    this.loading = !1, wx.showToast({
                        title: e.message || "创建失败",
                        icon: "none"
                    })
                },
                showInfo: function() {
                    wx.showModal({
                        title: "提示",
                        content: "直播群常用于直播聊天场景，只有在主动加群（需要填写群ID）后才能收到消息，重新登录后需要重新加群。\n故在创建直播群时，必须填写群ID",
                        showCancel: !1,
                        confirmText: "了解"
                    })
                }
            }
        }
    }
}, ["TIXD"]);
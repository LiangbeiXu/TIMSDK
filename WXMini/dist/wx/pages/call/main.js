require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16], {
    "9S7B": function(t, s, e) {
        "use strict";
        var i = e("O2Sz"),
            o = e("LLTi");
        var a = function(t) {
                e("iAeH")
            },
            n = e("ybqe")(i.a, o.a, a, "data-v-601c8bb0", null);
        s.a = n.exports
    },
    Bc9Z: function(t, s, e) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = e("5nAL"),
            o = e.n(i),
            a = e("9S7B");
        o.a.config.errorHandler = function(t) {
            console && console.error && console.error(t)
        }, new o.a(a.a).$mount()
    },
    LLTi: function(t, s, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "bg-logo"
                }, [e("div", {
                    staticClass: "bg"
                }, [t.isCalling ? t._e() : e("div", {
                    staticClass: "choose"
                }, ["call" === t.type ? [e("div", {
                    staticClass: "title"
                }, [t._v("呼叫" + t._s(t.to) + "中")]), t._v(" "), e("div", {
                    staticClass: "btn"
                }, [e("div", {
                    staticClass: "close",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleCloseRoom
                    }
                }, [e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/close.png"
                    }
                })])])] : t._e(), t._v(" "), "onCall" === t.type ? [e("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.from) + "正在呼叫")]), t._v(" "), e("div", {
                    staticClass: "btn"
                }, [e("div", {
                    staticClass: "close answer",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.receive
                    }
                }, [e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/call.png"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "close",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleRefuse
                    }
                }, [e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/close.png"
                    }
                })])])] : t._e()], 2), t._v(" "), e("div", {
                    staticClass: "call",
                    style: t.isCalling ? {
                        display: "flex",
                        height: "100vh",
                        width: "100vw"
                    } : {
                        display: "none"
                    }
                }, [e("div", {
                    staticClass: "room"
                }, [e("webrtc-room", {
                    attrs: {
                        id: "webrtcroom",
                        autoplay: !0,
                        enableCamera: !0,
                        roomID: t.roomID,
                        userID: t.userID,
                        userSig: t.userSig,
                        sdkAppID: t.sdkAppID,
                        beauty: t.beauty,
                        muted: t.muted,
                        smallViewLeft: "calc(100vw - 30vw - 2vw)",
                        smallViewTop: "20vw",
                        smallViewWidth: "30vw",
                        smallViewHeight: "30vh",
                        eventid: "3",
                        mpcomid: "2"
                    },
                    on: {
                        RoomEvent: t.onRoomEvent
                    }
                }), t._v(" "), e("div", {
                    staticClass: "panel"
                }, [e("div", {
                    staticClass: "close-btn"
                }, [e("div", {
                    staticClass: "normal",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.microphone
                    }
                }, [t.muted ? e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/voice-muted.png"
                    }
                }) : e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/voice.png"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "close",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: t.handleCloseRoom
                    }
                }, [e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/close.png"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "normal",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.monitor
                    }
                }, [e("image", {
                    staticClass: "operation",
                    attrs: {
                        src: "/static/images/monitor.png"
                    }
                })])])])], 1)])])])
            },
            staticRenderFns: []
        };
        s.a = i
    },
    O2Sz: function(t, s, e) {
        "use strict";
        var i = e("mvHQ"),
            o = e.n(i),
            a = e("Dd8w"),
            n = e.n(a),
            r = e("Bbwh"),
            c = e("NYxO"),
            l = -4,
            m = -5,
            h = -6,
            g = -7,
            d = -8,
            u = -9,
            p = -10;
        s.a = {
            data: function() {
                return {
                    args: {},
                    closeFlag: !1,
                    refuseFlag: !1,
                    isPending: !0,
                    isCalling: !1,
                    frontCamera: !1,
                    beauty: 0,
                    muted: !1,
                    timeStamp: 0,
                    sdkAppID: 0,
                    userSig: "",
                    userID: "",
                    roomID: 0,
                    type: "",
                    from: "",
                    to: "",
                    timeoutId: "",
                    startTime: 0
                }
            },
            computed: n()({}, Object(c.c)({
                rtcConfig: function(t) {
                    return t.global.rtcConfig
                }
            })),
            onShow: function() {
                var t = this,
                    s = this.rtcConfig;
                this.userSig = s.userSig, this.sdkAppID = s.sdkAppID, this.userID = s.userID, this.isCalling = !1, this.isPending = !0, this.userID === this.from && (this.timeoutId = setTimeout(function() {
                    t.timeout()
                }, 6e4)), wx.setKeepScreenOn({
                    keepScreenOn: !0
                }), this.$store.commit("setCalling", !0)
            },
            onUnload: function() {
                this.refuseFlag || this.closeFlag || (this.isCalling ? this.closeRoom() : "call" === this.type ? this.closeRoom() : this.refuse()), this.refuseFlag = !1, this.closeFlag = !1, this.isCalling = !1, this.isPending = !1, clearTimeout(this.timeoutId), this.$store.commit("setCalling", !1)
            },
            onHide: function() {
                this.isCalling = !1, this.isPending = !1, clearTimeout(this.timeoutId), this.closeRoom(), this.$store.commit("setCalling", !1), this.$bus.$off("onCall"), this.$bus.$off("isCalling"), this.$bus.$off("onClose"), this.$bus.$off("onRefuse"), this.$bus.$off("onBusy")
            },
            onLoad: function(t) {
                var s = this;
                console.log(t), this.args = JSON.parse(t.args), this.userID = this.$store.getters.myInfo.userID, this.from = t.from, this.to = t.to, this.type = this.userID === this.from ? "call" : "onCall", this.roomID = this.args.room_id, this.$bus.$on("onCall", function() {
                    s.isCalling = !0, s.isPending = !1, s.startTime = (new Date).getTime(), clearTimeout(s.timeoutId), s.onCall()
                }), this.$bus.$on("isCalling", function(t) {
                    s.alreadyCalling(t)
                }), this.$bus.$on("onClose", function() {
                    s.closeFlag = !0, wx.navigateBack({
                        delta: 1
                    })
                }), this.$bus.$on("onRefuse", function() {
                    s.closeFlag = !0, wx.navigateBack({
                        delta: 1
                    })
                }), this.$bus.$on("onBusy", function() {
                    s.closeFlag = !0, wx.navigateBack({
                        delta: 1
                    })
                })
            },
            methods: {
                onRoomEvent: function(t) {
                    if ([l, m, h, g, d, u, p].includes(t.target.code)) {
                        this.webrtcroomComponent = this.$mp.page.selectComponent("#webrtcroom"), this.webrtcroomComponent.stop(), this.args.action = -2, this.args.code = t.target.code;
                        var s = o()(this.args),
                            e = this.to === this.$store.getters.myInfo.userID ? this.from : this.to,
                            i = wx.$app.createCustomMessage({
                                to: e,
                                conversationType: r.a.CONV_C2C,
                                payload: {
                                    data: s,
                                    description: "",
                                    extension: ""
                                }
                            });
                        this.$store.commit("sendMessage", i), wx.$app.sendMessage(i), clearTimeout(this.timeoutId)
                    }
                    "error" === t.target.tag && wx.showToast({
                        title: t.target.detail,
                        duration: 1e3
                    })
                },
                handleCloseRoom: function() {
                    this.closeFlag = !0, this.closeRoom(), wx.navigateBack({
                        delta: 1
                    })
                },
                handleRefuse: function() {
                    this.refuseFlag = !0, this.refuse(), wx.navigateBack({
                        delta: 1
                    })
                },
                closeRoom: function() {
                    if (this.webrtcroomComponent = this.$mp.page.selectComponent("#webrtcroom"), this.webrtcroomComponent.stop(), this.args.action = 5, 0 === this.startTime && (this.args.action = 1), 0 !== this.startTime) {
                        var t = (new Date).getTime();
                        this.args.duration = Math.round((t - this.startTime) / 1e3), this.startTime = 0
                    }
                    var s = o()(this.args),
                        e = this.to === this.$store.getters.myInfo.userID ? this.from : this.to,
                        i = wx.$app.createCustomMessage({
                            to: e,
                            conversationType: r.a.CONV_C2C,
                            payload: {
                                data: s,
                                description: "",
                                extension: ""
                            }
                        });
                    this.$store.commit("sendMessage", i), wx.$app.sendMessage(i), clearTimeout(this.timeoutId)
                },
                timeout: function() {
                    this.args.action = 3;
                    var t = o()(this.args),
                        s = wx.$app.createCustomMessage({
                            to: this.to,
                            conversationType: r.a.CONV_C2C,
                            payload: {
                                data: t,
                                description: "",
                                extension: ""
                            }
                        });
                    this.$store.commit("sendMessage", s), wx.$app.sendMessage(s), wx.navigateBack({
                        delta: 1
                    })
                },
                receive: function() {
                    this.args.action = 4;
                    var t = o()(this.args);
                    this.startTime = (new Date).getTime();
                    var s = wx.$app.createCustomMessage({
                        to: this.from,
                        conversationType: r.a.CONV_C2C,
                        payload: {
                            data: t,
                            description: "",
                            extension: ""
                        }
                    });
                    this.$store.commit("sendMessage", s), wx.$app.sendMessage(s), clearTimeout(this.timeoutId), this.isCalling = !0, this.isPending = !1, this.webrtcroomComponent = this.$mp.page.selectComponent("#webrtcroom"), this.webrtcroomComponent.start()
                },
                onCall: function() {
                    this.webrtcroomComponent = this.$mp.page.selectComponent("#webrtcroom"), this.webrtcroomComponent.start()
                },
                refuse: function() {
                    this.args.action = 2;
                    var t = o()(this.args),
                        s = wx.$app.createCustomMessage({
                            to: this.from,
                            conversationType: r.a.CONV_C2C,
                            payload: {
                                data: t,
                                description: "",
                                extension: ""
                            }
                        });
                    this.$store.commit("sendMessage", s), this.$store.commit("setCalling", !1), wx.$app.sendMessage(s), clearTimeout(this.timeoutId)
                },
                alreadyCalling: function(t) {
                    var s = JSON.parse(t.payload.data);
                    s.action = 6;
                    var e = wx.$app.createCustomMessage({
                        to: t.from,
                        conversationType: r.a.CONV_C2C,
                        payload: {
                            data: o()(s),
                            description: "",
                            extension: ""
                        }
                    });
                    this.$store.commit("sendMessage", e), wx.$app.sendMessage(e)
                },
                microphone: function() {
                    this.muted = !this.muted
                },
                monitor: function() {
                    this.webrtcroomComponent = this.$mp.page.selectComponent("#webrtcroom"), this.webrtcroomComponent.switchCamera()
                }
            },
            destory: function() {}
        }
    },
    iAeH: function(t, s) {}
}, ["Bc9Z"]);
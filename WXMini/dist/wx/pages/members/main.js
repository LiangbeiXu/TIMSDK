require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8], {
    "9VMl": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r("5nAL"),
            o = r.n(i),
            n = r("C+d8");
        o.a.config.errorHandler = function(e) {
            console && console.error && console.error(e)
        }, new o.a(n.a).$mount()
    },
    "C+d8": function(e, t, r) {
        "use strict";
        var i = r("mHre"),
            o = r("IRB7");
        var n = function(e) {
                r("oHj4")
            },
            s = r("ybqe")(i.a, o.a, n, "data-v-1f364c65", null);
        t.a = s.exports
    },
    IRB7: function(e, t, r) {
        "use strict";
        var i = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "chatting"
                }, [r("i-modal", {
                    attrs: {
                        title: "设置禁言时间",
                        visible: e.muteModal,
                        eventid: "1",
                        mpcomid: "0"
                    },
                    on: {
                        ok: e.muteMember,
                        cancel: e.cancelMuteModal
                    }
                }, [r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.muteModal,
                        expression: "muteModal"
                    }],
                    staticClass: "input-wrapper"
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.lazy:value",
                        value: e.muteTime,
                        expression: "muteTime",
                        modifiers: {
                            "lazy:value": !0
                        }
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "number",
                        placeholder: "单位：秒",
                        eventid: "0"
                    },
                    domProps: {
                        value: e.muteTime
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.muteTime = t.target.value)
                        }
                    }
                })])]), e._v(" "), e._l(e.currentGroupMemberList, function(t, i) {
                    return r("div", {
                        key: t.userID,
                        staticClass: "chat"
                    }, [r("i-row", {
                        attrs: {
                            mpcomid: "8_" + i
                        },
                        slot: "content"
                    }, [r("i-col", {
                        attrs: {
                            span: "1",
                            mpcomid: "1_" + i
                        }
                    }, ["Member" === t.role ? r("div", {
                        staticClass: "last"
                    }, [e._v("普")]) : "Admin" === t.role ? r("div", {
                        staticClass: "last"
                    }, [e._v("管")]) : "Owner" === t.role ? r("div", {
                        staticClass: "last"
                    }, [e._v("主")]) : e._e()]), e._v(" "), r("i-col", {
                        attrs: {
                            span: "3",
                            mpcomid: "3_" + i
                        }
                    }, [r("div", {
                        staticClass: "avatar"
                    }, [r("i-avatar", {
                        attrs: {
                            src: t.avatar || "/static/images/avatar.png",
                            mpcomid: "2_" + i
                        }
                    })], 1)]), e._v(" "), r("i-col", {
                        attrs: {
                            span: "7",
                            mpcomid: "4_" + i
                        }
                    }, [r("div", {
                        staticClass: "information"
                    }, [r("div", {
                        staticClass: "username"
                    }, [e._v(e._s(t.nick || t.userID))])])]), e._v(" "), "Public" === e.currentGroupProfile.type || "ChatRoom" === e.currentGroupProfile.type ? r("i-col", {
                        attrs: {
                            span: "6",
                            mpcomid: "5_" + i
                        }
                    }, [r("div", {
                        staticClass: "information"
                    }, [(e.isMyRoleOwner || e.isMyRoleAdmin) && "Member" === t.role ? r("a", {
                        staticClass: "set",
                        attrs: {
                            eventid: "2_" + i
                        },
                        on: {
                            click: function(r) {
                                e.setRole(t)
                            }
                        }
                    }, [e._v("设为管理员")]) : e._e(), e._v(" "), e.isMyRoleOwner && "Admin" === t.role ? r("a", {
                        staticClass: "set",
                        attrs: {
                            eventid: "3_" + i
                        },
                        on: {
                            click: function(r) {
                                e.setRole(t)
                            }
                        }
                    }, [e._v("取消管理员")]) : e._e()])]) : e._e(), e._v(" "), r("i-col", {
                        attrs: {
                            span: "3",
                            mpcomid: "6_" + i
                        }
                    }, [r("div", {
                        staticClass: "information"
                    }, [e.isMyRoleOwner && "Owner" !== t.role || e.isMyRoleAdmin && "Member" === t.role ? r("a", {
                        staticClass: "delete",
                        attrs: {
                            eventid: "4_" + i
                        },
                        on: {
                            click: function(r) {
                                e.kick(t)
                            }
                        }
                    }, [e._v("删除")]) : e._e()])]), e._v(" "), r("i-col", {
                        attrs: {
                            span: "4",
                            mpcomid: "7_" + i
                        }
                    }, ["Private" !== e.currentGroupProfile.type ? r("div", {
                        staticClass: "information"
                    }, [e.isMyRoleOwner && ("Member" === t.role || "Admin" === t.role) || e.isMyRoleAdmin && "Member" === t.role ? r("div", [1e3 * t.muteUntil > e.current ? r("span", [r("a", {
                        staticClass: "delete",
                        attrs: {
                            eventid: "5_" + i
                        },
                        on: {
                            click: function(r) {
                                e.cancelMute(t)
                            }
                        }
                    }, [e._v("取消禁言")])]) : r("span", [r("a", {
                        staticClass: "delete",
                        attrs: {
                            eventid: "6_" + i
                        },
                        on: {
                            click: function(r) {
                                e.mute(t)
                            }
                        }
                    }, [e._v("禁言")])])]) : e._e()]) : e._e()])], 1)], 1)
                })], 2)
            },
            staticRenderFns: []
        };
        t.a = i
    },
    mHre: function(e, t, r) {
        "use strict";
        var i = r("Dd8w"),
            o = r.n(i),
            n = r("NYxO");
        t.a = {
            data: function() {
                return {
                    muteModal: !1,
                    member: {},
                    muteTime: void 0,
                    current: Date.now(),
                    intervalID: ""
                }
            },
            computed: o()({}, Object(n.c)({
                currentGroupProfile: function(e) {
                    return e.conversation.currentConversation.groupProfile
                },
                currentGroupMemberList: function(e) {
                    return e.group.currentGroupMemberList
                }
            }), {
                isMyRoleOwner: function() {
                    return this.currentGroupProfile.selfInfo.role === this.$type.GRP_MBR_ROLE_OWNER
                },
                isMyRoleAdmin: function() {
                    return this.currentGroupProfile.selfInfo.role === this.$type.GRP_MBR_ROLE_ADMIN
                }
            }),
            onReachBottom: function() {
                this.currentGroupMemberList.length !== this.currentGroupProfile.memberCount && this.getGroupMemberList()
            },
            methods: {
                getGroupMemberList: function() {
                    this.$store.dispatch("getGroupMemberList")
                },
                muteMember: function() {
                    var e = this;
                    wx.$app.setGroupMemberMuteTime({
                        groupID: this.currentGroupProfile.groupID,
                        userID: this.member.userID,
                        muteTime: Number(this.muteTime)
                    }).then(function(t) {
                        e.$store.commit("showToast", {
                            title: "设置禁言成功"
                        }), e.muteTime = void 0, e.cancelMuteModal()
                    })
                },
                cancelMuteModal: function() {
                    this.muteModal = !1
                },
                cancelMute: function(e) {
                    var t = this;
                    wx.$app.setGroupMemberMuteTime({
                        groupID: this.currentGroupProfile.groupID,
                        userID: e.userID,
                        muteTime: Number(0)
                    }).then(function() {
                        t.$store.commit("showToast", {
                            title: "禁言成功"
                        })
                    })
                },
                kick: function(e) {
                    wx.$app.deleteGroupMember({
                        groupID: this.currentGroupProfile.groupID,
                        reason: "踢出群",
                        userIDList: [e.userID]
                    })
                },
                mute: function(e) {
                    this.muteModal = !0, this.member = e
                },
                setRole: function(e) {
                    var t = this,
                        r = "Admin";
                    "Admin" === e.role && (r = "Member"), wx.$app.setGroupMemberRole({
                        groupID: this.currentGroupProfile.groupID,
                        userID: e.userID,
                        role: r
                    }).then(function() {
                        t.$store.commit("showToast", {
                            title: "设置成功",
                            icon: "success",
                            duration: 1500
                        })
                    })
                }
            },
            mounted: function() {
                var e = this;
                this.intervalID = setInterval(function() {
                    e.current = Date.now()
                }, 1e3)
            },
            destory: function() {
                this.intervalID = ""
            }
        }
    },
    oHj4: function(e, t) {}
}, ["9VMl"]);
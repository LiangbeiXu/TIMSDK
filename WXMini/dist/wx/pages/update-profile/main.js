require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3], {
    "2Q2f": function(e, t) {},
    "569+": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("5nAL"),
            n = a.n(i),
            s = a("PwON");
        new n.a(s.a).$mount()
    },
    DUtE: function(e, t, a) {
        "use strict";
        var i = a("Dd8w"),
            n = a.n(i),
            s = a("NYxO");
        t.a = {
            data: function() {
                return {
                    type: "user",
                    key: "",
                    groupID: "",
                    value: "",
                    focus: !0
                }
            },
            computed: n()({}, Object(s.c)({
                myInfo: function(e) {
                    return e.user.myInfo
                },
                groupProfile: function(e) {
                    return e.conversation.currentConversation.groupProfile
                }
            }), {
                disabled: function() {
                    switch (this.key) {
                        case "nick":
                            if (this.value !== this.myInfo.nick) return !1;
                            break;
                        case "signature":
                            if (this.value !== this.myInfo.selfSignature) return !1;
                            break;
                        case "nameCard":
                            if (this.groupProfile && this.groupProfile.selfInfo && this.value !== this.groupProfile.selfInfo.nameCard) return !1;
                            break;
                        case "name":
                            if (this.groupProfile && this.value !== this.groupProfile.name) return !1;
                            break;
                        case "notification":
                            if (this.groupProfile && this.value !== this.groupProfile.notification) return !1
                    }
                    return !0
                },
                placeholder: function() {
                    switch (this.key) {
                        case "nick":
                            return "请输入昵称";
                        case "signature":
                            return "请输入个性签名";
                        case "nameCard":
                            return "请输入群名片"
                    }
                }
            }),
            onLoad: function(e) {
                var t = e.type,
                    a = e.key,
                    i = e.groupID;
                this.type = t, this.key = a, i && (this.groupID = i);
                var n = "";
                switch (a) {
                    case "nick":
                        n = "修改昵称", this.value = this.myInfo.nick;
                        break;
                    case "signature":
                        n = "修改个性签名", this.value = this.myInfo.selfSignature;
                        break;
                    case "nameCard":
                        n = "修改群名片", this.value = this.groupProfile.selfInfo.nameCard;
                        break;
                    case "name":
                        n = "修改群名称", this.value = this.groupProfile.name;
                        break;
                    case "notification":
                        n = "修改群公告", this.value = this.groupProfile.notification
                }
                wx.setNavigationBarTitle({
                    title: n
                })
            },
            methods: {
                handleClick: function() {
                    "user" === this.type ? this.updateMyProfile() : "group" === this.type && this.updateGroupProfile()
                },
                updateMyProfile: function() {
                    switch (this.key) {
                        case "nick":
                            wx.$app.updateMyProfile({
                                nick: this.value
                            }).then(this.handleResolve).catch(this.handleReject);
                            break;
                        case "signature":
                            wx.$app.updateMyProfile({
                                selfSignature: this.value
                            }).then(this.handleResolve).catch(this.handleReject)
                    }
                },
                updateGroupProfile: function() {
                    switch (this.key) {
                        case "nameCard":
                            wx.$app.setGroupMemberNameCard({
                                groupID: this.groupID,
                                nameCard: this.value
                            }).then(this.handleResolve).catch(this.handleReject);
                            break;
                        case "name":
                            wx.$app.updateGroupProfile({
                                groupID: this.groupID,
                                name: this.value
                            }).then(this.handleResolve).catch(this.handleReject);
                            break;
                        case "notification":
                            wx.$app.updateGroupProfile({
                                groupID: this.groupID,
                                notification: this.value
                            }).then(this.handleResolve).catch(this.handleReject)
                    }
                },
                handleResolve: function() {
                    wx.showToast({
                        title: "修改成功",
                        duration: 600
                    }), setTimeout(function() {
                        wx.navigateBack()
                    }, 600)
                },
                handleReject: function(e) {
                    wx.showToast({
                        title: e.message,
                        icon: "none"
                    })
                }
            }
        }
    },
    PwON: function(e, t, a) {
        "use strict";
        var i = a("DUtE"),
            n = a("wX8C");
        var s = function(e) {
                a("2Q2f")
            },
            r = a("ybqe")(i.a, n.a, s, "data-v-290a70ef", null);
        t.a = r.exports
    },
    wX8C: function(e, t, a) {
        "use strict";
        var i = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "update-profile-wrapper"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.value,
                        expression: "value"
                    }],
                    staticClass: "input",
                    class: e.focus ? "input-focus" : "",
                    attrs: {
                        type: "text",
                        placeholder: e.placeholder,
                        focus: e.focus,
                        eventid: "0"
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        blur: function(t) {
                            e.focus = !1
                        },
                        focus: function(t) {
                            e.focus = !0
                        },
                        input: function(t) {
                            t.target.composing || (e.value = t.target.value)
                        }
                    }
                }), e._v(" "), a("button", {
                    class: {
                        "button-disabled": e.disabled
                    },
                    attrs: {
                        disabled: e.disabled,
                        eventid: "1"
                    },
                    on: {
                        click: e.handleClick
                    }
                }, [e._v("确认修改")])], 1)
            },
            staticRenderFns: []
        };
        t.a = i
    }
}, ["569+"]);
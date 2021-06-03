
cc.Class({
    extends: cc.Component,

    properties: {
        m_Account:cc.EditBox,
        m_PassWord:cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.g_login = this
    },

    show:function(){
        this.node.active = true
    },
    hide:function(){
        this.node.active = false
    },
    onClickClose:function(){
        this.hide()
    },
    onClickRegister:function(){
        g_welcome.showRegisterView()
    },
    onClickLogin:function(){
        cc.log('发送账号:'+this.m_Account.string)
        cc.log('发送密码:'+this.m_PassWord.string)
        cc.log('模拟发送服务器')
        this.hide()
    },
    start () {

    },
    // update (dt) {},
});

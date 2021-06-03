// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        m_viewUI: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.m_viewUI = this.m_viewUI.getComponent(cc.Animation);
        this.m_viewUI.node.active = false;
        this.m_viewUI.scaleToHidePlayEnd = function(){
            this.m_viewUI.node.active = false;
        }.bind(this)
    },

    ctor:function(){

    },

    onClickScaleToShow:function () {
       
        this.m_viewUI.node.active = true;
        this.m_viewUI.play('NewAnimationClip');
    },

    onClickScaleToHide:function(){
        this.m_viewUI.play('NewAnimationClip1')
    },

    start () {

    },

    // update (dt) {},
});

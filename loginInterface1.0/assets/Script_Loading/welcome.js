
cc.Class({
    extends: cc.Component,

    properties: {
        m_LoadingPrefab: cc.prefab,
        
        m_BackGround: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.m_Loading = cc.instantiate(this.m_LoadingPrefab)
        this.m_BackGround.addChild(this.m_Loading)
        this.m_Loading.y = -250
        this.m_Loading = this.m_Loading.getComponent('Load')
        this.m_Loading.setProgress(0.1)
    },

    start () {

    },

    // update (dt) {},
});

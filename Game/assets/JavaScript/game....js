
cc.Class({
    extends: cc.Component,

    properties: {
        builderPrefab: {
            default: null,
            type: cc.Prefab
        },
    },


    createbuilder:function(a,b){
        
        // 使用给定的模板在场景中生成一个新节点
        var newbuilder1 = cc.instantiate(this.builderPrefab);
       
        this.node.addChild(newbuilder1);
        // 为子弹设置一个位置,相对于父节点的位置
        newbuilder1.setPosition(a,b);
        cc.log("创建了builder");
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.createbuilder(-131,-36);
        this.createbuilder(-189,126);
        this.createbuilder(161,-67);
    },

    // update (dt) {},
});

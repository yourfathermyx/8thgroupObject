
cc.Class({
    extends: cc.Component,

    properties: {
        TowerPrefab:{
            default:null,
            type:cc.Prefab
        },
    },

    createTower:function () {
        
        // 使用给定的模板在场景中生成一个新节点
        var newTower = cc.instantiate(this.TowerPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newTower);
        // 为防御塔设置一个位置,相对于父节点的位置
        //var TNode=this.node.getPosition();
        newTower.setPosition(0,16);
        cc.log("创建了防御塔");
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchend',this.on_touch_ended,this);
    },


    on_touch_ended(){
        var inf=cc.find('Canvas/root').getComponent('information');
        //点击事件
        if(inf.builderMoney()){
            inf.builderM();
            var BNode=this.node.getChildByName("bg");
            var BFNode=this.node.getChildByName("BFace");
            BFNode.destroy();
            BNode.destroy();
            this.createTower();
        }
        
    },

    on_touch(){
        //点击事件
        var BFNode=this.node.getChildByName("BFace");
        if( BFNode.active==true){
            BFNode.active=false;
        }else{
            BFNode.active=true;
        }
       
        
   },

  

    start () {
        var BFNode=this.node.getChildByName("BFace");
        BFNode.active=false;
    },

    // update (dt) {},
});

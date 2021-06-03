

cc.Class({
    extends: cc.Component,
   
    properties: {

        bullet1Prefab:{
            default:null,
            type:cc.Prefab
        },

        builderPrefab: {
            default: null,
            type: cc.Prefab
        },
     
        
        price:100,
        
    },

    // LIFE-CYCLE CALLBACKS:
    createbullet:function (ENode) {
        
        // 使用给定的模板在场景中生成一个新节点
        var newbullet1 = cc.instantiate(this.bullet1Prefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newbullet1);
        // 为子弹设置一个位置,相对于父节点的位置
        newbullet1.setPosition(ENode);
        //newbullet1.setPosition(0,48);
        newbullet1.getComponent('bullet').tower = this;
        cc.log("创建了子弹");
    },

    createbuilder:function(){
        
        // 使用给定的模板在场景中生成一个新节点
        var newbuilder = cc.instantiate(this.builderPrefab);
       
        this.node.addChild(newbuilder);
        // 为子弹设置一个位置,相对于父节点的位置
        newbuilder.setPosition(0,-16);
        cc.log("创建了builder");
    },

    onLoad () {
        //开启碰撞检测
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        cc.log("开启碰撞");
    },

    on_touch(){
         //点击事件
         var TFNode=this.node.getChildByName("TFace");
         if( TFNode.active==true){
             TFNode.active=false;
         }else{
             TFNode.active=true;
         }
        
         
    },
    touchSell(){
        //点击事件
        var inf=cc.find('Canvas/root').getComponent('information');
        var game=cc.find('Canvas/root').getComponent('game');
        inf.sellTower();
        //var BNode=this.node.getChildByName("tower_01");
        //BNode.destroy();
        var a=this.node.getPosition();
        var aWord=this.node.parent.convertToWorldSpaceAR(a);
        var newNode=cc.find('Canvas/root');
        var newA=newNode.convertToNodeSpaceAR(aWord);
        var m=newA.x;
        var n=newA.y-16;
       
        this.node.destroy();
        game.createbuilder(m,n);

    },



    onCollisionStay:function(other,self){   
        if(other.node.group == 'Enemy1'|other.node.group == 'Enemy2') //检测碰撞组
        {   
            //var world1 = self.world;
            //var world2 = other.world;
            cc.log("敌人进塔");
            var node=this.node.getChildByName("bullet1");

            if(this.now_time%50==0){
                var ENode=other.node.getPosition();
                var ENodeWord = other.node.parent.convertToWorldSpaceAR(ENode);
                var newNode =this.node.convertToNodeSpaceAR(ENodeWord);
                this.createbullet(newNode);
                this.now_time++;
            }else{
                this.now_time++;
            }
           
        }
    },

    
    start () {
        this.now_time=0;
        var TFNode=this.node.getChildByName("TFace");
        TFNode.active=false;
    },

    update (dt) {

    },
});

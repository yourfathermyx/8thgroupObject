var Tower1 = require("Tower1");



cc.Class({
    extends: cc.Component,

    properties: {

        /*Enemy1:{
            default:null,
            type:cc.Prefab
        },*/

        /*bar:{
            default:null,
            type:cc.node
        },*/

        harm:15, //对敌人造成伤害
        attack_speed:64, //子弹每秒移动距离

    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //开启碰撞检测
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        cc.log("开启碰撞");
    },

    onCollisionEnter:function(other,self){   
           
        if(other.node.group == 'Enemy1') //检测碰撞组
        {   
            
            //Enemy1.attack();
            this.scheduleOnce(function() {
                // 这里的 this 指向 component
                this.node.destroy();
            }, 0.2);
            
            cc.log("删除子弹");

        }
        if(other.node.group == 'Enemy2') //检测碰撞组
        {   
            
            //Enemy1.attack();
            this.scheduleOnce(function() {
                // 这里的 this 指向 component
                this.node.destroy();
            }, 0.2);
            
            cc.log("删除子弹");

        }
    },
 
    move:function (ToNode) {
        
        // 创建一个移动动作
        var action = cc.moveTo(1, ToNode);
        // 执行动作
        this.node.runAction(action);
    },

    start:function (ENode) {
        this.now_time=0;
    },
    //other：产生碰撞的另一碰撞组件
    /*onCollisionEnter:function(other,self){   
        
        cc.log("碰撞了");
        
        if (other.node.group != 'Enemy1'){
            
            return ;
        }
        if(other.node.group == 'Enemy1') //检测碰撞组
        {   
            cc.log("攻击了");
            //Enemy1.attack();
            //other.node.lifeprogress.progress=85/100;


        }
    },*/

   des:function () {
       cc.log("没打到");
       this.node.destroy();
   },

  

    update (dt) {
        if(this.now_time>=3){
            this.des();
        }
    },
});

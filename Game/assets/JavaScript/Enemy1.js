

cc.Class({
    extends: cc.Component,

    properties: {

        lifeprogress: {
            type: cc.ProgressBar,
            default: null,
        },


        //collider: cc.PolygonCollider,
        //
      
        //Enemy1的各项属性
        //最大生命值
        curHP: 100,
        // 最大移动速度
        speed: 32,

    },
  

    onLoad () {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        cc.log("开启碰撞");
    },

    onCollisionEnter:function(other,self){   
        cc.log("碰撞了");

        var inf=cc.find('Canvas/root').getComponent('information');
        if (other.node.group == 'destination'){
            
            inf.escape();
            this.node.destroy();
        }
        if(other.node.group == 'bullet1') //检测碰撞组
        {   
            cc.log("被攻击");
            //Enemy1.attack();
            this.lifeprogress.progress-=0.07;
            if(this.lifeprogress.progress<=0){
                
                //var anim = this.getComponent(cc.Animation);
                //anim.play('death');
                inf.gainMoney();
                this.node.destroy();
                cc.log("敌人死了");
            }


        }
    },

    start () {
        var S=cc.director.getScene();
        if(S.name=='level2'){
            var anim = this.getComponent(cc.Animation);
            anim.play('path2');
        }
        
    },

    update (dt) {
        
     },
});

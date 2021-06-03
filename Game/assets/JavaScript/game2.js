
cc.Class({
    extends: cc.Component,

    properties: {
        //怪物
        Enemy1Prefab: {
            default: null,
            type: cc.Prefab
        },

        //防御塔1
        builderPrefab: {
            default: null,
            type: cc.Prefab
        },

        life:{
            default:null,
            type:cc.Label,
        },
        money:{
            default:null,
            type:cc.Label,
        },
        enemy:{
            default:null,
            type:cc.Label,
        },

    },


    onLoad () {
        
    },
    

    createbuilder:function(a,b){
        
        // 使用给定的模板在场景中生成一个新节点
        var newbuilder = cc.instantiate(this.builderPrefab);
       
        this.node.addChild(newbuilder);
        // 为子弹设置一个位置,相对于父节点的位置
        newbuilder.setPosition(a,b);
        newbuilder.getComponent('builder').game = this;
        cc.log("创建了builder");
    },

    createEnemy1: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newEnemy1 = cc.instantiate(this.Enemy1Prefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newEnemy1);
        // 为敌人设置一个位置
        newEnemy1.setPosition(-24,322); 
        newEnemy1.getComponent('Enemy1').game = this;
    },

    start () {

        this.createbuilder(-131,-66);
        this.createbuilder(-189,94);
        this.createbuilder(161,-97);

        this.now_time=1;
        this.k=1;

        this.perlife=2;
        this.permoney=200;
        this.enemy=1;
        
        this.money.string=this.permoney;
        this.life.string=this.perlife;
        this.enemy.string=this.perenemy;

    },

    update (dt) {
        //this.now_time++;
         if (this.now_time>=50) {
             //k<=n,创建n个Enemy1
            if(this.k<=10){
                this.k++;
                this.now_time=0;
                this.createEnemy1();
                return;
            }
            else{
                this.time=0;
            }
            
        }else{
            this.now_time++;
        }

    },

    gainMoney:function () {
        this.permoney+=15;
        this.money.string=this.permoney;
    },

    builderMoney:function () {
        if(this.permoney>=50){
            return true;
        }else{
            return false;
        }
    },
    builderM:function () {
        this.permoney-=50;
        this.money.string=this.permoney;
    },
    escape:function () {
        this.perlife-=1;
        this.life.string=this.perlife;
        cc.log("损失一点生命");
    },
    sellTower:function () {
        this.permoney+=25;
        this.money.string=this.permoney;
    },
});

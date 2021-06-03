
cc.Class({
    extends: cc.Component,

    properties: {
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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.perlife=2;
        this.permoney=100;
        this.enemy=1;
        
        this.money.string=this.permoney;
        this.life.string=this.perlife;
        this.enemy.string=this.perenemy;
    },

    update (dt) {},

    
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



cc.Class({
    extends: cc.Component,

    properties: {
        /*enemy:{
            default:null,
            type:cc.Node,
            tooltip:"this is a tips"//属性检查器内的自定义提示信息
        }*/
    },

    // LIFE-CYCLE CALLBACKS:


    level1Move:function () {
        var m0=cc.moveTo(5,cc.v2(-46,79));
        var m1=cc.moveTo(4,cc.v2(-242,-7));
        var m2=cc.moveTo(1.5,cc.v2(-242,-90));
        var m3=cc.moveTo(2,cc.v2(-165,-142));
        var m4=cc.moveTo(3,cc.v2(35,-140));
        var m5=cc.moveTo(3,cc.v2(173,-162));
        var m6=cc.moveTo(3,cc.v2(315,-75));
        var m7=cc.moveTo(3,cc.v2(502,-80));

        var seq=cc.sequence([m0,m1,m2,m3,m4,m5,m6,m7]);
        this.node.runAction(seq);
    },


    level2Move:function () {
        

        var pos0=cc.v2(238,90);
        var pos1=cc.v2(187,205);
        var pos2=cc.v2(54,205);
        var pos3=cc.v2(5,94);
        var pos4=cc.v2(-230,60);
        var pos5=cc.v2(-219,-38);
        var pos6=cc.v2(138,-44);
        var pos7=cc.v2(117,-150);
        var pos8=cc.v2(-50,-183);
        var pos9=cc.v2(-50,-344);
        var m0=cc.moveTo(6,pos0);//6
        var m1=cc.moveTo(2,pos1);//8
        var m2=cc.moveTo(2.6,pos2);//10.6
        var m3=cc.moveTo(2,pos3);//12.6
        var m4=cc.moveTo(4.3,pos4);//16.9
        var m5=cc.moveTo(2,pos5);//18.9
        var m6=cc.moveTo(5.6,pos6);//24.5
        var m7=cc.moveTo(2,pos7);//26.5
        var m8=cc.moveTo(3.3,pos8);//29.8
        var m9=cc.moveTo(6.6,pos9);//36.4

        var seq=cc.sequence([m0,m1,m2,m3,m4,m5,m6,m7,m8,m9]);
        this.node.runAction(seq);
    },

    onLoad:function () {
        var S=cc.director.getScene();
       if(S.name=='level1'){
           this.level1Move();
       }
       if(S.name=='level2'){
        this.level2Move();
    }
        
    },

    
    /*path1(){
         //path1中的路径移动
         var m0=cc.moveTo(5,cc.v2(0,0));
         var m1=cc.moveTo(4,cc.v2(256,0));
         var m2=cc.moveTo(4,cc.v2(256,256));
         var m3=cc.moveTo(4,cc.v2(512,256));
         var m4=cc.moveTo(5,cc.v2(512,-64));
         var m5=cc.moveTo(5,cc.v2(832,-64));
         var m6=cc.moveTo(4,cc.v2(832,192));
         var m7=cc.moveTo(3,cc.v2(1024,192));
 
         var seq=cc.sequence([m0,m1,m2,m3,m4,m5,m6,m7]);
         
         
    },*/


    start () {

    },

    update (dt) {
      //path1中的路径移动
      /*var m1=cc.moveTo(4,cc.v2(256,0));
      var m2=cc.moveTo(4,cc.v2(256,256));
      var m3=cc.moveTo(4,cc.v2(512,256));
      var m4=cc.moveTo(5,cc.v2(512,-64));
      var m5=cc.moveTo(5,cc.v2(832,-64));
      var m6=cc.moveTo(4,cc.v2(832,192));
      var m7=cc.moveTo(3,cc.v2(1024,192));

      var seq=cc.sequence([m1,m2,m3,m4,m5,m6,m7]);
      //var seq=cc.sequence([seq1,seq2,seq3,seq4]);
      this.node.runAction(seq);*/

      /*this.schedule(function(){
          this.node.x+=64;
      },1,4,0);*/

    },
});

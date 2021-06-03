// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        TimeCount: 1,             //    倒计时的时间 为5秒
    },
    
    start () {
      
        this.TimeCount = 1;
        if (this.TimeCount >= 0) {
            this.schedule(function () {  
              
                this.DoSomething();
            }, 1);
        }
                           
    },

    onLoad () {
        cc.director.preloadScene("Main");

    },

    DoSomething() {                // 倒计时算法
        if (this.TimeCount >= 1) {
            this.TimeCount = this.TimeCount - 1; 
        }else{
            cc.director.loadScene("Main")
        }
    },
    
    // update (dt) {},
    
});

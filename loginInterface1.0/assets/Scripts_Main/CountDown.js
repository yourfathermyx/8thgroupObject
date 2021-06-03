// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        time: cc.Label,
        TimeCount: 60,             //    倒计时的时间 为5秒
    },
    
    start () {
        this.time.string = 60;           //  场景文本框为 显示5
        this.TimeCount = 60;
        if (this.TimeCount >= 0) {
            this.schedule(function () {    // 计时器将每隔 1s 执行一次。
              
                this.DoSomething();
            }, 1);
        }
                           
    },
    DoSomething() {                // 倒计时算法
        if (this.TimeCount >= 1) {
            this.TimeCount = this.TimeCount - 1;
            this.time.string = this.TimeCount;    //场景中文本框显示 
        }else{
            this.TimeCount = 60;
        }
    },
    
    // update (dt) {},
    
});

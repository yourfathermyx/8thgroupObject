// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        HP: cc.Label,
        count: 3,             //    倒计时的时间 为5秒
    },
    
    start () {
        this.HP.string = 3;           //  场景文本框为 显示5
        this.count = 3;
        if (this.count < 10) {
            this.schedule(function () {    // 计时器将每隔 1s 执行一次。
              
                this.DoSomething();
            }, 60);
        }
                           
    },
    DoSomething() {                // 倒计时算法
            this.count = this.count + 1;
            this.HP.string = this.count;    //场景中文本框显示 

        },
    
    // update (dt) {},
});

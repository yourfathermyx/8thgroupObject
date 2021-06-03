cc.Class({
    extends: cc.Component,
    properties: {
        text:cc.Label,
    },
    start () {
        this.text.string = '';
        var str = '加载中...';
        var j = 0;
        var interval = 0.5;// 以1秒为单位的时间间隔
        var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
        var delay = 1;// 我们在1秒后开始运行
        this.schedule(function() {
            this.text.string += str[j];
            j++;
        }, interval, repeat, delay);
    },
});

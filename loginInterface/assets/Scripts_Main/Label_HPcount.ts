// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property
    HPCount : number  = 0

    time = 60

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(function CountChange() {
            this.time--;
            if(this.time<=0){
                this.count++;
                this.node.label.String = this.HPCount;
                this.time = 60;
            }
        })
    }

    

    start () {

    }

    // update (dt) {}
}

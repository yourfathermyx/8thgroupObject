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

    @property(cc.AudioClip)
    private audio : cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('mousedown',this.play,this)
    }

    start () {

    }

    play(){
        cc.audioEngine.play(this.audio as any, false, 1);
    }

    // update (dt) {}

}

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
    click: cc.Label = null;
 
   inload(){
        if(this.click,node,on){
            this.goToGame();
        }
   }
   goToGame(){
        cc.director.preloadScene('conglinxiaojing',(err)=>{
            if(!err){
            cc.director.loadScene('conglinxiaojing',function(){
                });
            }
        });
   }
   update(dt){}
   }

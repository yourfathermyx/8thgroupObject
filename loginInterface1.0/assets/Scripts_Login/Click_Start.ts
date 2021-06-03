
/**
 * @ 按钮通用控制脚本
 * @ 使用方法：直接添加到按钮控件即可 缩放参数可以自己调整
 */
 
 const {ccclass, property} = cc._decorator;
 
 @ccclass
 export default class NewClass extends cc.Component {
  
     @property
     pressedScale: number = 0.8;
  
     @property
     transDuration: number = 0.1;
  
     @property
     audio:number = 0;
  
     initScale: number = 0;

     @property(cc.AudioClip)
     click_audio : cc.AudioClip = null;



  
     onLoad () {
         cc.director.preloadScene("welcome")
         var that = this;
         this.initScale = this.node.scale;
  
         function onTouchDown (event) {
             let scaleDownAction = cc.scaleTo(that.transDuration, that.pressedScale);
             let btnScale = event.target.getComponent('ButtonScaler');
             this.stopAllActions();
             //这里可以添加音效
             this.runAction(scaleDownAction);
             cc.director.loadScene("welcome")
         }
  
         function onTouchUp (event) {
             let scaleUpAction = cc.scaleTo(that.transDuration, that.initScale);
             this.stopAllActions();
             this.runAction(scaleUpAction);
         }
  
         this.node.on('touchstart', onTouchDown, this.node);
         this.node.on('touchend', onTouchUp, this.node);
         this.node.on('touchcancel', onTouchUp, this.node);
     }
 }

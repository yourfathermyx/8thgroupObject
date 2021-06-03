
cc.Class({
    extends: cc.Component,

    properties: {
        //怪物
        Enemy1Prefab: {
            default: null,
            type: cc.Prefab
        },
        Enemy2Prefab: {
            default: null,
            type: cc.Prefab
        },

        //防御塔1
        builderPrefab: {
            default: null,
            type: cc.Prefab
        },

        

    },


    onLoad () {
        
    },
    

    createbuilder:function(a,b){
        
        // 使用给定的模板在场景中生成一个新节点
        var newbuilder = cc.instantiate(this.builderPrefab);
       
        this.node.addChild(newbuilder);
        // 为子弹设置一个位置,相对于父节点的位置
        newbuilder.setPosition(a,b);
        newbuilder.getComponent('builder').game = this;
        cc.log("创建了builder");
    },

    createEnemy1: function(a,b) {
        // 使用给定的模板在场景中生成一个新节点
        var newEnemy1 = cc.instantiate(this.Enemy1Prefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newEnemy1);
        // 为敌人设置一个位置
        newEnemy1.setPosition(a,b); 
        newEnemy1.getComponent('Enemy1').game = this;
    },
    createEnemy2: function(a,b) {
        // 使用给定的模板在场景中生成一个新节点
        var newEnemy2 = cc.instantiate(this.Enemy2Prefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newEnemy2);
        // 为敌人设置一个位置
        newEnemy2.setPosition(a,b); 
        newEnemy2.getComponent('Enemy2').game = this;
    },

    level1Game:function () {
        this.createbuilder(-131,-66);
        this.createbuilder(-189,94);
        this.createbuilder(161,-97);
    },

    level2Game:function () {
        this.createbuilder(120,136);
        this.createbuilder(-71,134);
        this.createbuilder(-123,7);
        this.createbuilder(39,-98);
        this.createbuilder(245,-136);
        this.createbuilder(56,-230);
        cc.log("builder");
    },
    
    start () {
        var S=cc.director.getScene();
        if(S.name=='level1'){
            this.level1Game();
        }
        if(S.name=='level2'){
            this.level2Game();
        }
        

        this.now_time=1;
        this.k=1;

        

    },

    level1Enemy:function () {
        //this.now_time++;
         if (this.now_time>=50) {
             //k<=n,创建n个Enemy1
            if(this.k<=10){
                this.k++;
                this.now_time=0;
                this.createEnemy1(-24,322);
                return;
            }
            else{
                this.time=0;
            }
            
        }else{
            this.now_time++;
        }
    },
    level2Enemy:function () {
        //this.now_time++;
         if (this.now_time>=50) {
             //k<=n,创建n个Enemy1
            if(this.k<=10){
                this.k++;
                this.now_time=0;
                this.createEnemy1(531,81);
                return;
            }
            else if(this.k<=15){
                this.k++;
                this.now_time=0;
                this.createEnemy2(531,81);
                return;
                
            }else{
                this.time=0;
            }
            
        }else{
            this.now_time++;
        }
    },

    update (dt) {
        var S=cc.director.getScene();
        if(S.name=='level1'){
            this.level1Enemy();
        }
        if(S.name=='level2'){
            this.level2Enemy();
        }

    },

   
});

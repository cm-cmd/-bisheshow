class SceneBegin extends eui.Component implements  eui.UIComponent {
	public btn_begin:eui.Button;
	public btn_setting:eui.Button;
	public btn_game:eui.Button;



	private static shared:SceneBegin;
	public static getInstance(){
		if( !SceneBegin.shared){
			SceneBegin.shared =  new SceneBegin();
		}
		return SceneBegin.shared;
	}

	public constructor() {
		super();
	}	// 添加皮肤的时候自动调用该函数
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init(){
		SoundManager.getInstance();
		this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.begin_tap,this);
		this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setting_tap,this);
		this.btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP,this.game_tap,this);
	}
	private begin_tap(){
		SoundManager.getInstance().playClick();
		let parent:egret.DisplayObjectContainer = this.parent;
		parent.removeChild(this);
		parent.addChild( SceneLevel.getInstance() );
	}
	private setting_tap(){	
		SoundManager.getInstance().playClick();
		this.addChild(GameSetting.getInstance());
	}
	private game_tap(){
		console.log('进入扔手雷游戏界面');
		let btn: eui.Button = new eui.Button()
        btn.iconDisplay = new eui.Image()
        let bg: egret.Bitmap = new egret.Bitmap()
        bg.texture = RES.getRes('Piso-hd_png')
        let bz: egret.Bitmap = new egret.Bitmap()
        bz.texture = RES.getRes('LoadingScene-hd_json.LoadingScene_StudioPangeaSplash')
        bz.x = (this.stage.stageWidth - bz.width) / 2
        bz.y = (this.stage.stageHeight - bz.height) / 2
        bz.visible = false
        this.addChild(bg)
        this.addChild(bz)
        setTimeout(() => {
            bz.visible = true
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this)
        }, 500)
        BearSceneManager.instance.setStage(this)
        BearSceneManager.addScene(BearSceneManager.instance.door)
    }
    private start() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this)
        BearSceneManager.addScene(BearSceneManager.instance.door)
		 
        setTimeout(() => {
            BearSceneManager.addScene(BearSceneManager.instance.gamescene)
            BearSceneManager.instance._stage.setChildIndex(BearSceneManager.instance.gamescene, BearSceneManager.instance._stage.numChildren - 2)
        }, 500)
    }
}
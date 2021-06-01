class GameSetting extends eui.Component implements  eui.UIComponent {
	public btn_confirm:eui.Button;
	public btn_music:eui.Button;
	public btn_music_dis:eui.Image;
	public btn_effect:eui.Button;
	public btn_effect_dis:eui.Image;
	public gp_music:eui.Group;
	public gp_effect:eui.Group;




	private static shared:GameSetting;
	public static getInstance(){
		if(!GameSetting.shared){
			GameSetting.shared = new GameSetting();
		}
		return GameSetting.shared;
	}

	public constructor() {
		super();
	}

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
		this.btn_music_dis.visible = !SoundManager.getInstance().isMusic;
		this.btn_effect_dis.visible = !SoundManager.getInstance().isEffect;

		this.gp_music.addEventListener( egret.TouchEvent.TOUCH_TAP,this.setMusic,this);
		this.gp_effect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setEffect,this);
		this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.confirmCallBack,this);
	}
	private setMusic(){
		if( SoundManager.getInstance().isMusic){
			//true -- > false
			SoundManager.getInstance().isMusic = false;
			this.btn_music_dis.visible = true;
		}else{
			//false ---> true
			SoundManager.getInstance().isMusic = true;
			this.btn_music_dis.visible = false;
		}
	}

	private setEffect(){
		if( SoundManager.getInstance().isEffect ){
			SoundManager.getInstance().isEffect = false;
			this.btn_effect_dis.visible = true;
		}else{
			SoundManager.getInstance().isEffect = true;
			this.btn_effect_dis.visible = false;
		}

	}
	private confirmCallBack(){
		SoundManager.getInstance().playClick();
		
		this.parent.removeChild(this);
	}
	
}
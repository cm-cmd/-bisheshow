class MyBear extends egret.Bitmap {
	public hp: number //血量
	public constructor() {
		super()
		this.texture = RES.getRes('GameScene-hd_json.Enemies_Fast')
		this.hp = parseInt(egret.localStorage.getItem("guessword"))
		this.touchEnabled = true
		// this.addEventListener(egret.Event.ADDED_TO_STAGE, this.gameContinue, this)
	}
	private init() {
		// this.addEventListener(egret.TouchEvent.TOUCH_TAP)
	}
	// private gameContinue(){
	// 	hp!=0 ? 
	// }
}
// 这里使用了一个场景管理类来统一实现场景的切换，删除等操作。
class BearSceneManager {
	/**打死僵尸界面的根场景 */
	public _stage: egret.DisplayObjectContainer
	public door: Door
	public gamescene: GameScene

	constructor() {
		this.door = new Door()
		this.gamescene = new GameScene()
	}

	/**实例对象 */
	static BearSceneManager: BearSceneManager
	/**获取实例 */
	public static get instance() {
		if (!this.BearSceneManager) {
			this.BearSceneManager = new BearSceneManager()
		}
		return this.BearSceneManager
	}
    /**
     * 
     * @param main 根场景
     */
	public setStage(main: egret.DisplayObjectContainer) {
		this._stage = main
	}

    /**
     * 切换场景
     * @param scene 切换到的目标场景
     * @param parentScene 需要切换到的父场景, 会移除该场景下所有的其他场景.  为空的时候, 默认为根场景
     */
	static switchScene(scene: egret.DisplayObjectContainer, parentScene?: egret.DisplayObjectContainer) {
		if (parentScene) {
			parentScene.removeChildren()
			parentScene.addChild(scene)
		} else {
			this.BearSceneManager._stage.removeChildren()
			this.BearSceneManager._stage.addChild(scene)
		}
	}

    /**
     * 添加场景
     * @param scene 添加的场景
     * @param parentScene 需要添加到的场景.  为空的时候, 默认为根场景
     */
	static addScene(scene: egret.DisplayObjectContainer, parentScene?: egret.DisplayObjectContainer) {
		if (parentScene) {
			parentScene.addChild(scene)
		} else {
			this.BearSceneManager._stage.addChild(scene)
		}
	}


	/**
     * 移除场景
     * @param scene 移除的场景
     * @param parentScene 父级场景.  为空的时候, 默认为根场景
     */
	public static removeScene(scene: egret.DisplayObjectContainer, parentScene?: egret.DisplayObjectContainer) {
		if (parentScene) {
			parentScene.removeChild(scene)
		} else {
			this.BearSceneManager._stage.removeChild(scene)
		}
	}


	/**碰撞检测 */
	static hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
		var rect1: egret.Rectangle = obj1.getBounds();
		var rect2: egret.Rectangle = obj2.getBounds();
		rect1.x = obj1.x;
		rect1.y = obj1.y;
		rect2.x = obj2.x;
		rect2.y = obj2.y;
		return rect1.intersects(rect2);
	}
}
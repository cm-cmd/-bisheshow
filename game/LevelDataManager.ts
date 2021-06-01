class LevelDataItem{
	public answer:string;
	public img:string;
	public word:string;
	public tip:string;
	public content:string;
}
/**
 * 关卡数据管理类
 * 读取json文件中的数据
 * 获取某一关的数据
 * 
 */
class LevelDataManager {

	private static shared:LevelDataManager;
	public static getInstance(){
		if(!LevelDataManager.shared){
			LevelDataManager.shared = new LevelDataManager();
		}
		return LevelDataManager.shared;
	}

	// 创建一个数组，用来保存所有的关卡数据
	private items:LevelDataItem[] = [];
	//总关卡数
	public  totalLevels:number;

	public constructor() {
		this.items = RES.getRes("questions_json");
		this.totalLevels = this.items.length;
	}
	
	public getLevelData(level:number):LevelDataItem{
		return this.items[level];
	}

	//获取游戏进度
	public get Milestone(){
		console.log('这是游戏的关卡界面');
		let milestone = egret.localStorage.getItem("guessword");
		if(milestone == null || milestone == ""){
			return 1;
		}else{
			return parseInt(milestone);
		}

	}
	//设置游戏进度
	public set Milestone(level:number){
		console.log("恭喜你，已经到第"+level+"关啦！");
		egret.localStorage.setItem("游戏关数",level.toString());
	}
}
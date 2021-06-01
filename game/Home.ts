class Home extends eui.Component implements  eui.UIComponent{


    private static shared:Home;
	public static getInstance(){
		if( !Home.shared){
			Home.shared =  new Home();
		}
		return Home.shared;
	}

	public constructor() {
		super();
	}

	// 添加皮肤的时候自动调用该函数
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		
	}

	// 组件加载完毕之后调用该函数
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
    public init(){
        SoundManager.getInstance();
    }
}
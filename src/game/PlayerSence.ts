class PlayerSence extends eui.Component {

	public btnReturn: BtnDefault;
	public scroll: eui.Scroller;
	public list_playerData: eui.List;


	public constructor() {
		super();
		this.skinName = "PlayerSenceSkin";
	}

	protected createChildren(): void {
		super.createChildren();
		this.init();
	}

	private init() {
		this.btnReturn.init("btnReturn_png");
		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			SenceManager.getInstance().changeSence();
		}, this);

		let dataArr: any[] = [
			{ image: "skillIcon01_png", name: "旋龙幻杀" },
			{ image: "skillIcon02_png", name: "旋龙幻杀" },
			{ image: "skillIcon03_png", name: "旋龙幻杀" },
			{ image: "skillIcon04_png", name: "旋龙幻杀" },
			{ image: "skillIcon05_png", name: "旋龙幻杀" },
			{ image: "skillIcon06_png", name: "旋龙幻杀" },
			{ image: "skillIcon07_png", name: "旋龙幻杀" },
		]
		//将数组转换成eui数组
		let euiArr: eui.ArrayCollection = new eui.ArrayCollection(dataArr);
		//设置list 的数据源
		this.list_playerData.dataProvider = euiArr;
		//设置list 的子项的渲染
		this.list_playerData.itemRenderer = PlayerItem;

		//隐藏进度条-verticalScrollBar垂直滚动条
		// this.scroll.verticalScrollBar.autoVisibility = false;
		this.scroll.horizontalScrollBar.autoVisibility = false;

		//并将eui里scroller的scollpolicyH(水平滚动)on,scollpolicyV(垂直滚动)false
	}
}
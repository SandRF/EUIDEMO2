class GoodSence extends eui.Component {

	public btnReturn:BtnDefault;
	public goodsScroller: eui.Scroller;
	public goodsList: eui.List;


	public constructor() {
		super();
		this.skinName = "GoodSenceSkin"
	}

	protected createChildren() {
		super.createChildren();
		this.init();
	}

	private init() {

		this.btnReturn.init("btnReturn_png");

		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			SenceManager.getInstance().changeSence();
		}, this);

		let goodsArr: {}[] = [
			{ icon: "goods01_png", goodsName: "魔法石", comment: "法力加成 +3" },
			{ icon: "goods02_png", goodsName: "诅咒娃娃", comment: "咒术加成 +3" },
			{ icon: "goods03_png", goodsName: "万圣戒指", comment: "敏捷加成 +3" },
			{ icon: "goods04_png", goodsName: "斗篷", comment: "耐力加成 +3" },
			{ icon: "goods05_png", goodsName: "鹅毛笔", comment: "精神加成 +3" },
			{ icon: "goods06_png", goodsName: "血滴子", comment: "嗜血加成 +3" },
			{ icon: "goods07_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
		];
		//转换数据
		let euiarr: eui.ArrayCollection = new eui.ArrayCollection(goodsArr);
		//设置数据源
		this.goodsList.dataProvider = euiarr;
		//设置渲染
		this.goodsList.itemRenderer = GoodItem;

		//改变滚动条的图片 新建exml文件,场景大小自适应,一个图片组件,大小自适应,组件id:thumb
		this.goodsScroller.verticalScrollBar.skinName = "VscrollBar2Skin";
	}
}
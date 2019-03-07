class HeroSence extends eui.Component {

	public heroScroller: eui.Scroller;
	public heroList: eui.List;
	public btnReturn: BtnDefault;
	public btnOk: BtnDefault;
	private dataArr: any[];

	public constructor() {
		super();
		this.skinName = "HeroSenceSkin"
	}

	protected createChildren(): void {
		super.createChildren();
		this.init();
	}
	private init() {

		this.btnReturn.init("btnReturn_png");
		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			SenceManager.getInstance().changeSence();
			let euiArr: eui.ArrayCollection = new eui.ArrayCollection(this.dataArr);
			this.heroList.dataProvider = euiArr;
		}, this);

		this.btnOk.init("btnOK_png");
		this.dataArr = [
			{ img: "heros01_png", name: "伊文捷琳", commentary: "樱桃小丸子", choose: false },
			{ img: "heros02_png", name: "亚特伍德", commentary: "樱桃小丸子", choose: false },
			{ img: "heros03_png", name: "伊妮德", commentary: "樱桃小丸子", choose: false },
			{ img: "heros04_png", name: "鲁宾", commentary: "樱桃小丸子", choose: true },
			{ img: "heros05_png", name: "威弗列德", commentary: "樱桃小丸子", choose: false },
			{ img: "heros06_png", name: "史帝文", commentary: "樱桃小丸子", choose: false },
			{ img: "heros07_png", name: "哈瑞斯", commentary: "樱桃小丸子", choose: false },
		]
		//eui数组
		let euiArr: eui.ArrayCollection = new eui.ArrayCollection(this.dataArr);
		//设置数据源
		this.heroList.dataProvider = euiArr;
		//设置渲染
		this.heroList.itemRenderer = HeroItem;

		this.heroScroller.verticalScrollBar.skinName = "VScrollBar1Skin";
		// let v_img: any = this.heroScroller.verticalScrollBar.thumb;
		// v_img.source = "hScrollBar01_png";
		//
		this.btnOk.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			let arr: string[] = [];
			for (let i = 0; i < this.heroList.numChildren; i++) {
				let value = (this.heroList.getChildAt(i) as HeroItem).value;
				this.dataArr[i].choose = value.choose;
				if (value.choose as boolean) {
					arr.push(value.name);
				}
			}

			//返回主场景,显示选择的英雄名字			
			let text: egret.TextField = new egret.TextField();
			text.width = this.stage.width;
			text.textAlign = "center";
			if (arr.length) {
				text.text = '你选择了: ';
				for (let i = 0; i < arr.length - 1; i++) {
					text.text += `${arr[i]},`;
				}
				text.text += `${arr[arr.length - 1]}`;
			} else {
				text.text = '一个也没选';
			}
			text.textColor = 0xFFFFFF;
			text.y = this.stage.height / 3 * 2;
			SenceManager.getInstance().mainsence.addChild(text);
			setTimeout(() => {
				text.parent.removeChild(text);
			}, 1000);
			SenceManager.getInstance().changeSence();
		}, this);


	}

}
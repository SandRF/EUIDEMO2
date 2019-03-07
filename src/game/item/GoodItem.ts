class GoodItem extends eui.ItemRenderer {

	public icon: eui.Image;
	public nameGood: eui.Label;
	public info: eui.Label;

	private value: {};

	public constructor() {
		super();
		this.skinName = 'GoodItemSkin';
	}

	protected createChildren() {
		super.createChildren();
	}

	set data(data) {
		this.value = data;
		this.init(data);
	}

	private init(data) {
		this.icon.texture = RES.getRes(data.icon);
		this.nameGood.text = data.goodsName;
		this.info.text = data.comment;
	}
}

window['BtnSelect']=BtnSelect;
class BtnSelect extends eui.Component {
	public icon: eui.Image;

	public constructor() {
		super();
		this.skinName = "BtnSelectSkin";
	}
	init(url: string) {
		this.icon.texture = RES.getRes(url);
		this.touchEnabled = true;
		this.touchChildren = false;
	}

}

window['BtnSelect'] = BtnSelect;
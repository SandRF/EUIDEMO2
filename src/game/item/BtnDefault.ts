class BtnDefault extends eui.Component {

	private icon: eui.Image;

	public constructor() {
		super();
		this.skinName = "BtnDefaultSkin";
	}

	protected createChildren() {
		super.createChildren();
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
			this.currentState = "down";
		}, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, () => {
			this.currentState = "default";
		}, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, () => {
			this.currentState = "default";
		}, this);
	}

	public init(url: string) {
		this.icon.texture = RES.getRes(url);
		this.icon.anchorOffsetX = this.icon.width / 2;
		this.icon.anchorOffsetY = this.icon.height / 2;
		this.icon.x = this.icon.width / 2;
		this.icon.y = this.icon.height / 2;
	}

}

window['BtnDefault'] = BtnDefault;
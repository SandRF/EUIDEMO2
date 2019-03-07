class AboutSence extends eui.Component {

	public btnClose:BtnDefault;
	public info: eui.Image;

	public constructor() {
		super();
		this.skinName = "AboutSenceSkin";
	}

	protected createChildren(): void {
		super.createChildren();
		this.init();
	}

	private init() {

		this.btnClose.init("close_png")
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			console.log(`pastindex ${SenceManager.getInstance().pastIndex}`);
			SenceManager.getInstance().mainsence.changeSence(SenceManager.getInstance().pastIndex);
		}, this);
		this.addEventListener(egret.Event.ADDED, () => {
			let tw = egret.Tween.get(this.info);
			tw.to({ scaleX: 1.5, scaleY: 1.5 }, 100)
				.to({ scaleX: 1, scaleY: 1 }, 100)
		}, this);		
	}
}
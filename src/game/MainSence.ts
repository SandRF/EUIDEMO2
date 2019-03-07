class MainSence extends eui.Component implements eui.UIComponent {
	public btns: BtnsGroup;
	public senceGroup: eui.Group;
	public textLab: eui.Label;

	public index: number;

	public constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();
		this.init();
	}

	private init() {
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickChange, this);
	}

	private onClickChange(e: egret.TouchEvent) {
		if (e.target instanceof BtnSelect) {
			SenceManager.getInstance().pastIndex = this.index;
			console.log(`pastindex ${this.index}`);
			this.index = this.btns.btnGroup.getChildIndex(e.target);
			console.log(`index${this.index}`);

			if (SenceManager.getInstance().pastIndex != this.index) {
				this.changeSence(this.index);
			}
		}
	}

	public changeSence(index: number) {
		if (!(index == undefined)) {
			this.btns.selcet(index);
		}
		this.switchSence(index);
	}

	private switchSence(index: number) {
		switch (index) {
			case 0:
				SenceManager.getInstance().changeSence(SenceManager.getInstance().playerSence);
				break;
			case 1:
				SenceManager.getInstance().changeSence(SenceManager.getInstance().heroSence);
				break;
			case 2:
				SenceManager.getInstance().changeSence(SenceManager.getInstance().goodSence);
				break;
			case 3:
				SenceManager.getInstance().changeSence(SenceManager.getInstance().aboutSence);
				break;
			case undefined:
				SenceManager.getInstance().changeSence();
				break;
		}
	}
}
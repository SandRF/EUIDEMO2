class BtnsGroup extends eui.Component {

	public btnGroup: eui.Group;
	public mbtnPlayer: BtnSelect;
	public mbtnHero: BtnSelect;
	public mbtnGoods: BtnSelect;
	public mbtnAbout: BtnSelect;



	public constructor() {
		super();
		this.skinName = 'BtnsGroupSkin';
	}

	protected createChildren(): void {
		super.createChildren();
		this.init();
	}

	private init() {
		this.mbtnPlayer.init("mbtnPlayer_png");
		this.mbtnHero.init("mbtnHero_png");
		this.mbtnGoods.init("mbtnGoods_png");
		this.mbtnAbout.init("mbtnAbout_png");
	}

	public selcet(index: number) {
		if (!(index == undefined)) {
			this.resetState();
		}
		(this.btnGroup.getChildAt(index) as BtnsGroup).currentState = "down";

	}

	public resetState() {
		for (let i = 0; i < this.btnGroup.numChildren; i++) {
			(this.btnGroup.getChildAt(i) as BtnsGroup).currentState = "up";
		}
	}
}

window['BtnsGroup'] = BtnsGroup;
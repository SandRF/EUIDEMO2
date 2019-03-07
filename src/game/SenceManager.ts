class SenceManager {

	public mainsence: MainSence;
	public playerSence: PlayerSence;
	public heroSence: HeroSence;
	public goodSence: GoodSence;
	public aboutSence: AboutSence;

	public root: egret.DisplayObjectContainer;
	public pastIndex: number = -1;

	public constructor() {
		this.mainsence = new MainSence();
		this.playerSence = new PlayerSence();
		this.heroSence = new HeroSence();
		this.goodSence = new GoodSence();
		this.aboutSence = new AboutSence();

	}

	private static _instance;
	static getInstance(): SenceManager {
		if (!SenceManager._instance) {
			SenceManager._instance = new SenceManager();
		}
		return this._instance
	}

	public setStage(stage: egret.DisplayObjectContainer) {
		this.root = stage;
	}

	public addSence(child: egret.DisplayObjectContainer, parent?: egret.DisplayObjectContainer) {
		if (!parent) {
			parent = this.root;
		}
		parent.addChild(child);
	}

	public changeSence(newSence?: egret.DisplayObjectContainer) {
		this.root.removeChildren();
		if (newSence) {
			this.root.addChild(newSence);
		} else {
			this.mainsence.btns.resetState();
			this.mainsence.index = undefined;
		}
		if (newSence) {
			let PosX = newSence.x;
			if (this.pastIndex > this.mainsence.index) {
				newSence.x += newSence.width;
			} else {
				newSence.x -= newSence.width;
			}
			let tw = egret.Tween.get(newSence);
			tw.to({ x: PosX }, 150);
		}
	}
}
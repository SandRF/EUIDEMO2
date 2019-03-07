class PlayerItem extends eui.ItemRenderer {

	public nameLab: eui.Label;
	public icon: eui.Image;

	private value: any;

	public constructor() {
		super();
		this.skinName = "playerItemSkin";
	}

	//重写了set方法
	set data(data) {
		this.value = data;
		this.loadFromData(data);
	}

	private loadFromData(data) {
		this.icon.texture = RES.getRes(data.image);
		this.nameLab.text = data.name;
	}

}
class HeroItem extends eui.ItemRenderer {

	public icon: eui.Image;
	public nameHero: eui.Label;
	public commentary: eui.Label;
	public check: eui.CheckBox;

	public value;

	public constructor() {
		super();
		this.skinName = "HeroItemSkin"
	}

	protected createChildren(): void {
		super.createChildren();
		this.check.addEventListener(eui.UIEvent.CHANGE, this.change, this);	
	}

	set data(data) {
		this.value = data;
		this.loadFromData(data);
	}

	private loadFromData(data) {
		this.icon.texture = RES.getRes(data.img);
		this.nameHero.text = data.name;
		this.commentary.text = `评价: ${data.commentary}`;
		this.check.selected = data.choose;
	}

	private change(e: eui.UIEvent) {
		console.log(e.target.selected);
		this.value.choose = e.target.selected;			
	}
	
}

window['BtnSelect']=BtnSelect;
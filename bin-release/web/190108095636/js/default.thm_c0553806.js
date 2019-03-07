window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","MainSence":"resource/game/MainSence.exml","BtnSelect":"resource/game/item/BtnSelect.exml","BtnsGroup":"resource/game/item/BtnsGroup.exml","sss":"resource/eui_skins/sss.exml","testbtn":"resource/game/testbtn.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game/AboutSence.exml'] = window.AboutSenceSkin = (function (_super) {
	__extends(AboutSenceSkin, _super);
	function AboutSenceSkin() {
		_super.call(this);
		this.skinParts = ["btnClose","info"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.info_i()];
	}
	var _proto = AboutSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "commonBg_jpg";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 800;
		t.width = 480;
		return t;
	};
	_proto.info_i = function () {
		var t = new eui.Group();
		this.info = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "about_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new BtnDefault();
		this.btnClose = t;
		t.x = 396;
		t.y = 216;
		return t;
	};
	return AboutSenceSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/BtnDefault.exml'] = window.BtnDefaultSkin = (function (_super) {
	__extends(BtnDefaultSkin, _super);
	function BtnDefaultSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.currentState = "default";
		this.elementsContent = [this.icon_i()];
		this.states = [
			new eui.State ("default",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("icon","scaleX",1.2),
					new eui.SetProperty("icon","scaleY",1.2)
				])
		];
	}
	var _proto = BtnDefaultSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "";
		return t;
	};
	return BtnDefaultSkin;
})(eui.Skin);generateEUI.paths['resource/game/GoodSence.exml'] = window.GoodSenceSkin = (function (_super) {
	__extends(GoodSenceSkin, _super);
	function GoodSenceSkin() {
		_super.call(this);
		this.skinParts = ["btnReturn","goodsList","goodsScroller"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btnReturn_i(),this.goodsScroller_i()];
	}
	var _proto = GoodSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bgListPage_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "goodsTitle_png";
		t.x = 174.5;
		t.y = 132;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new BtnDefault();
		this.btnReturn = t;
		t.skinName = "BtnDefaultSkin";
		t.x = 25;
		t.y = 130;
		return t;
	};
	_proto.goodsScroller_i = function () {
		var t = new eui.Scroller();
		this.goodsScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 455;
		t.x = 12;
		t.y = 182;
		t.viewport = this.goodsList_i();
		return t;
	};
	_proto.goodsList_i = function () {
		var t = new eui.List();
		this.goodsList = t;
		return t;
	};
	return GoodSenceSkin;
})(eui.Skin);generateEUI.paths['resource/game/HeroSence.exml'] = window.HeroSenceSkin = (function (_super) {
	__extends(HeroSenceSkin, _super);
	function HeroSenceSkin() {
		_super.call(this);
		this.skinParts = ["btnReturn","btnOk","heroList","heroScroller"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btnReturn_i(),this.btnOk_i(),this.heroScroller_i()];
	}
	var _proto = HeroSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bgListPage_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "herosTitle_png";
		t.x = 174;
		t.y = 134;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new BtnDefault();
		this.btnReturn = t;
		t.skinName = "BtnDefaultSkin";
		t.x = 25;
		t.y = 130;
		return t;
	};
	_proto.btnOk_i = function () {
		var t = new BtnDefault();
		this.btnOk = t;
		t.skinName = "BtnDefaultSkin";
		t.x = 380;
		t.y = 130;
		return t;
	};
	_proto.heroScroller_i = function () {
		var t = new eui.Scroller();
		this.heroScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 450;
		t.y = 180;
		t.viewport = this.heroList_i();
		return t;
	};
	_proto.heroList_i = function () {
		var t = new eui.List();
		this.heroList = t;
		return t;
	};
	return HeroSenceSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/BtnSelect.exml'] = window.BtnSelectSkin = (function (_super) {
	__extends(BtnSelectSkin, _super);
	function BtnSelectSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.icon_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
		];
	}
	var _proto = BtnSelectSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "mbtn_Bg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "mbtn_BgFc_png";
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "mbtnAbout_png";
		return t;
	};
	return BtnSelectSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/BtnsGroup.exml'] = window.BtnsGroupSkin = (function (_super) {
	__extends(BtnsGroupSkin, _super);
	function BtnsGroupSkin() {
		_super.call(this);
		this.skinParts = ["mbtnPlayer","mbtnHero","mbtnGoods","mbtnAbout","btnGroup"];
		
		this.height = 80;
		this.width = 460;
		this.elementsContent = [this.btnGroup_i()];
	}
	var _proto = BtnsGroupSkin.prototype;

	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.mbtnPlayer_i(),this.mbtnHero_i(),this.mbtnGoods_i(),this.mbtnAbout_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto.mbtnPlayer_i = function () {
		var t = new BtnSelect();
		this.mbtnPlayer = t;
		return t;
	};
	_proto.mbtnHero_i = function () {
		var t = new BtnSelect();
		this.mbtnHero = t;
		return t;
	};
	_proto.mbtnGoods_i = function () {
		var t = new BtnSelect();
		this.mbtnGoods = t;
		return t;
	};
	_proto.mbtnAbout_i = function () {
		var t = new BtnSelect();
		this.mbtnAbout = t;
		return t;
	};
	return BtnsGroupSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/GoodItem.exml'] = window.GoodItemSkin = (function (_super) {
	__extends(GoodItemSkin, _super);
	function GoodItemSkin() {
		_super.call(this);
		this.skinParts = ["icon","nameGood","info"];
		
		this.elementsContent = [this._Image1_i(),this.icon_i(),this.nameGood_i(),this.info_i()];
	}
	var _proto = GoodItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.x = 32;
		t.y = 17;
		return t;
	};
	_proto.nameGood_i = function () {
		var t = new eui.Label();
		this.nameGood = t;
		t.size = 20;
		t.text = "";
		t.textColor = 0xE5C834;
		t.x = 154;
		t.y = 24;
		return t;
	};
	_proto.info_i = function () {
		var t = new eui.Label();
		this.info = t;
		t.size = 20;
		t.text = "";
		t.textColor = 0x4AC4D6;
		t.x = 122;
		t.y = 65;
		return t;
	};
	return GoodItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/HeroItem.exml'] = window.HeroItemSkin = (function (_super) {
	__extends(HeroItemSkin, _super);
	var HeroItemSkin$Skin1 = 	(function (_super) {
		__extends(HeroItemSkin$Skin1, _super);
		function HeroItemSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroItemSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "checkNo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroItemSkin$Skin1;
	})(eui.Skin);

	function HeroItemSkin() {
		_super.call(this);
		this.skinParts = ["icon","nameHero","commentary","check"];
		
		this.elementsContent = [this._Image1_i(),this.icon_i(),this.nameHero_i(),this.commentary_i(),this.check_i()];
	}
	var _proto = HeroItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.x = 33;
		t.y = 18;
		return t;
	};
	_proto.nameHero_i = function () {
		var t = new eui.Label();
		this.nameHero = t;
		t.size = 20;
		t.text = "";
		t.textColor = 0xe5c834;
		t.x = 154;
		t.y = 24;
		return t;
	};
	_proto.commentary_i = function () {
		var t = new eui.Label();
		this.commentary = t;
		t.size = 20;
		t.text = "";
		t.textColor = 0x4ac4d6;
		t.x = 122;
		t.y = 65;
		return t;
	};
	_proto.check_i = function () {
		var t = new eui.CheckBox();
		this.check = t;
		t.label = "";
		t.x = 369;
		t.y = 15;
		t.skinName = HeroItemSkin$Skin1;
		return t;
	};
	return HeroItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/myBtn.exml'] = window.myBtn = (function (_super) {
	__extends(myBtn, _super);
	function myBtn() {
		_super.call(this);
		this.skinParts = [];
		
	}
	var _proto = myBtn.prototype;

	return myBtn;
})(eui.Skin);generateEUI.paths['resource/game/item/playerItem.exml'] = window.playerItemSkin = (function (_super) {
	__extends(playerItemSkin, _super);
	function playerItemSkin() {
		_super.call(this);
		this.skinParts = ["nameLab","icon"];
		
		this.height = 130;
		this.width = 87;
		this.elementsContent = [this._Image1_i(),this.nameLab_i(),this.icon_i()];
	}
	var _proto = playerItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skillItemFrame_png";
		t.y = 0;
		return t;
	};
	_proto.nameLab_i = function () {
		var t = new eui.Label();
		this.nameLab = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.y = 91;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	return playerItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/item/VScrollBar1.exml'] = window.VScrollBar1Skin = (function (_super) {
	__extends(VScrollBar1Skin, _super);
	function VScrollBar1Skin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBar1Skin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "hScrollBar01_png";
		return t;
	};
	return VScrollBar1Skin;
})(eui.Skin);generateEUI.paths['resource/game/item/VscrollBar2.exml'] = window.VscrollBar2Skin = (function (_super) {
	__extends(VscrollBar2Skin, _super);
	function VscrollBar2Skin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VscrollBar2Skin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "hScrollBar02_png";
		return t;
	};
	return VscrollBar2Skin;
})(eui.Skin);generateEUI.paths['resource/game/MainSence.exml'] = window.MainSenceSkin = (function (_super) {
	__extends(MainSenceSkin, _super);
	function MainSenceSkin() {
		_super.call(this);
		this.skinParts = ["senceGroup","btns"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.senceGroup_i(),this.btns_i()];
	}
	var _proto = MainSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "homeBg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.senceGroup_i = function () {
		var t = new eui.Group();
		this.senceGroup = t;
		return t;
	};
	_proto.btns_i = function () {
		var t = new BtnsGroup();
		this.btns = t;
		t.bottom = 3;
		t.horizontalCenter = 0;
		return t;
	};
	return MainSenceSkin;
})(eui.Skin);generateEUI.paths['resource/game/PlayerSence.exml'] = window.PlayerSenceSkin = (function (_super) {
	__extends(PlayerSenceSkin, _super);
	function PlayerSenceSkin() {
		_super.call(this);
		this.skinParts = ["list_playerData","scroll","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.scroll_i(),this.btnReturn_i()];
	}
	var _proto = PlayerSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "commonBg_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "profileContent_png";
		t.x = 30.5;
		t.y = 198;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "profileTitle_png";
		t.x = 174.5;
		t.y = 132;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 413;
		t.y = 500;
		t.viewport = this.list_playerData_i();
		return t;
	};
	_proto.list_playerData_i = function () {
		var t = new eui.List();
		this.list_playerData = t;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new BtnDefault();
		this.btnReturn = t;
		t.skinName = "BtnDefaultSkin";
		t.x = 25;
		t.y = 130;
		return t;
	};
	return PlayerSenceSkin;
})(eui.Skin);
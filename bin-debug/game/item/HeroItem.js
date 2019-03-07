var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HeroItem = (function (_super) {
    __extends(HeroItem, _super);
    function HeroItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "HeroItemSkin";
        return _this;
    }
    HeroItem.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.check.addEventListener(eui.UIEvent.CHANGE, this.change, this);
    };
    Object.defineProperty(HeroItem.prototype, "data", {
        set: function (data) {
            this.value = data;
            this.loadFromData(data);
        },
        enumerable: true,
        configurable: true
    });
    HeroItem.prototype.loadFromData = function (data) {
        this.icon.texture = RES.getRes(data.img);
        this.nameHero.text = data.name;
        this.commentary.text = "\u8BC4\u4EF7: " + data.commentary;
        this.check.selected = data.choose;
    };
    HeroItem.prototype.change = function (e) {
        console.log(e.target.selected);
        this.value.choose = e.target.selected;
    };
    return HeroItem;
}(eui.ItemRenderer));
__reflect(HeroItem.prototype, "HeroItem");
window['BtnSelect'] = BtnSelect;

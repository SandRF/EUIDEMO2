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
var BtnSelect = (function (_super) {
    __extends(BtnSelect, _super);
    function BtnSelect() {
        var _this = _super.call(this) || this;
        _this.skinName = "BtnSelectSkin";
        return _this;
    }
    BtnSelect.prototype.init = function (url) {
        this.icon.texture = RES.getRes(url);
        this.touchEnabled = true;
        this.touchChildren = false;
    };
    return BtnSelect;
}(eui.Component));
__reflect(BtnSelect.prototype, "BtnSelect");
window['BtnSelect'] = BtnSelect;

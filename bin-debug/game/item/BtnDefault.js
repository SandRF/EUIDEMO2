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
var BtnDefault = (function (_super) {
    __extends(BtnDefault, _super);
    function BtnDefault() {
        var _this = _super.call(this) || this;
        _this.skinName = "BtnDefaultSkin";
        return _this;
    }
    BtnDefault.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.currentState = "down";
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            _this.currentState = "default";
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            _this.currentState = "default";
        }, this);
    };
    BtnDefault.prototype.init = function (url) {
        this.icon.texture = RES.getRes(url);
        this.icon.anchorOffsetX = this.icon.width / 2;
        this.icon.anchorOffsetY = this.icon.height / 2;
        this.icon.x = this.icon.width / 2;
        this.icon.y = this.icon.height / 2;
    };
    return BtnDefault;
}(eui.Component));
__reflect(BtnDefault.prototype, "BtnDefault");
window['BtnDefault'] = BtnDefault;

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
var AboutSence = (function (_super) {
    __extends(AboutSence, _super);
    function AboutSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "AboutSenceSkin";
        return _this;
    }
    AboutSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    AboutSence.prototype.init = function () {
        var _this = this;
        this.btnClose.init("close_png");
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("pastindex " + SenceManager.getInstance().pastIndex);
            SenceManager.getInstance().mainsence.changeSence(SenceManager.getInstance().pastIndex);
        }, this);
        this.addEventListener(egret.Event.ADDED, function () {
            var tw = egret.Tween.get(_this.info);
            tw.to({ scaleX: 1.5, scaleY: 1.5 }, 100)
                .to({ scaleX: 1, scaleY: 1 }, 100);
        }, this);
    };
    return AboutSence;
}(eui.Component));
__reflect(AboutSence.prototype, "AboutSence");

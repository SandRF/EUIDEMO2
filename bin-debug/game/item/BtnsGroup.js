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
var BtnsGroup = (function (_super) {
    __extends(BtnsGroup, _super);
    function BtnsGroup() {
        var _this = _super.call(this) || this;
        _this.skinName = 'BtnsGroupSkin';
        return _this;
    }
    BtnsGroup.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    BtnsGroup.prototype.init = function () {
        this.mbtnPlayer.init("mbtnPlayer_png");
        this.mbtnHero.init("mbtnHero_png");
        this.mbtnGoods.init("mbtnGoods_png");
        this.mbtnAbout.init("mbtnAbout_png");
    };
    BtnsGroup.prototype.selcet = function (index) {
        if (!(index == undefined)) {
            this.resetState();
        }
        this.btnGroup.getChildAt(index).currentState = "down";
    };
    BtnsGroup.prototype.resetState = function () {
        for (var i = 0; i < this.btnGroup.numChildren; i++) {
            this.btnGroup.getChildAt(i).currentState = "up";
        }
    };
    return BtnsGroup;
}(eui.Component));
__reflect(BtnsGroup.prototype, "BtnsGroup");
window['BtnsGroup'] = BtnsGroup;

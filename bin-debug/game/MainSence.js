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
var MainSence = (function (_super) {
    __extends(MainSence, _super);
    function MainSence() {
        return _super.call(this) || this;
    }
    MainSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    MainSence.prototype.init = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickChange, this);
    };
    MainSence.prototype.onClickChange = function (e) {
        if (e.target instanceof BtnSelect) {
            SenceManager.getInstance().pastIndex = this.index;
            console.log("pastindex " + this.index);
            this.index = this.btns.btnGroup.getChildIndex(e.target);
            console.log("index" + this.index);
            if (SenceManager.getInstance().pastIndex != this.index) {
                this.changeSence(this.index);
            }
        }
    };
    MainSence.prototype.changeSence = function (index) {
        if (!(index == undefined)) {
            this.btns.selcet(index);
        }
        this.switchSence(index);
    };
    MainSence.prototype.switchSence = function (index) {
        switch (index) {
            case 0:
                SenceManager.getInstance().changeSence(SenceManager.getInstance().playerSence);
                break;
            case 1:
                SenceManager.getInstance().changeSence(SenceManager.getInstance().heroSence);
                break;
            case 2:
                SenceManager.getInstance().changeSence(SenceManager.getInstance().goodSence);
                break;
            case 3:
                SenceManager.getInstance().changeSence(SenceManager.getInstance().aboutSence);
                break;
            case undefined:
                SenceManager.getInstance().changeSence();
                break;
        }
    };
    return MainSence;
}(eui.Component));
__reflect(MainSence.prototype, "MainSence", ["eui.UIComponent", "egret.DisplayObject"]);

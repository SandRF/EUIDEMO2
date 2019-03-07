var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SenceManager = (function () {
    function SenceManager() {
        this.pastIndex = -1;
        this.mainsence = new MainSence();
        this.playerSence = new PlayerSence();
        this.heroSence = new HeroSence();
        this.goodSence = new GoodSence();
        this.aboutSence = new AboutSence();
    }
    SenceManager.getInstance = function () {
        if (!SenceManager._instance) {
            SenceManager._instance = new SenceManager();
        }
        return this._instance;
    };
    SenceManager.prototype.setStage = function (stage) {
        this.root = stage;
    };
    SenceManager.prototype.addSence = function (child, parent) {
        if (!parent) {
            parent = this.root;
        }
        parent.addChild(child);
    };
    SenceManager.prototype.changeSence = function (newSence) {
        this.root.removeChildren();
        if (newSence) {
            this.root.addChild(newSence);
        }
        else {
            this.mainsence.btns.resetState();
            this.mainsence.index = undefined;
        }
        if (newSence) {
            var PosX = newSence.x;
            if (this.pastIndex > this.mainsence.index) {
                newSence.x += newSence.width;
            }
            else {
                newSence.x -= newSence.width;
            }
            var tw = egret.Tween.get(newSence);
            tw.to({ x: PosX }, 150);
        }
    };
    return SenceManager;
}());
__reflect(SenceManager.prototype, "SenceManager");

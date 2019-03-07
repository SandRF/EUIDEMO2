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
var PlayerSence = (function (_super) {
    __extends(PlayerSence, _super);
    function PlayerSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "PlayerSenceSkin";
        return _this;
    }
    PlayerSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    PlayerSence.prototype.init = function () {
        this.btnReturn.init("btnReturn_png");
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SenceManager.getInstance().changeSence();
        }, this);
        var dataArr = [
            { image: "skillIcon01_png", name: "旋龙幻杀" },
            { image: "skillIcon02_png", name: "旋龙幻杀" },
            { image: "skillIcon03_png", name: "旋龙幻杀" },
            { image: "skillIcon04_png", name: "旋龙幻杀" },
            { image: "skillIcon05_png", name: "旋龙幻杀" },
            { image: "skillIcon06_png", name: "旋龙幻杀" },
            { image: "skillIcon07_png", name: "旋龙幻杀" },
        ];
        //将数组转换成eui数组
        var euiArr = new eui.ArrayCollection(dataArr);
        //设置list 的数据源
        this.list_playerData.dataProvider = euiArr;
        //设置list 的子项的渲染
        this.list_playerData.itemRenderer = PlayerItem;
        //隐藏进度条-verticalScrollBar垂直滚动条
        // this.scroll.verticalScrollBar.autoVisibility = false;
        this.scroll.horizontalScrollBar.autoVisibility = false;
        //并将eui里scroller的scollpolicyH(水平滚动)on,scollpolicyV(垂直滚动)false
    };
    return PlayerSence;
}(eui.Component));
__reflect(PlayerSence.prototype, "PlayerSence");

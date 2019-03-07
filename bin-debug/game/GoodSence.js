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
var GoodSence = (function (_super) {
    __extends(GoodSence, _super);
    function GoodSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "GoodSenceSkin";
        return _this;
    }
    GoodSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    GoodSence.prototype.init = function () {
        this.btnReturn.init("btnReturn_png");
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SenceManager.getInstance().changeSence();
        }, this);
        var goodsArr = [
            { icon: "goods01_png", goodsName: "魔法石", comment: "法力加成 +3" },
            { icon: "goods02_png", goodsName: "诅咒娃娃", comment: "咒术加成 +3" },
            { icon: "goods03_png", goodsName: "万圣戒指", comment: "敏捷加成 +3" },
            { icon: "goods04_png", goodsName: "斗篷", comment: "耐力加成 +3" },
            { icon: "goods05_png", goodsName: "鹅毛笔", comment: "精神加成 +3" },
            { icon: "goods06_png", goodsName: "血滴子", comment: "嗜血加成 +3" },
            { icon: "goods07_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
        ];
        //转换数据
        var euiarr = new eui.ArrayCollection(goodsArr);
        //设置数据源
        this.goodsList.dataProvider = euiarr;
        //设置渲染
        this.goodsList.itemRenderer = GoodItem;
        //改变滚动条的图片 新建exml文件,场景大小自适应,一个图片组件,大小自适应,组件id:thumb
        this.goodsScroller.verticalScrollBar.skinName = "VscrollBar2Skin";
    };
    return GoodSence;
}(eui.Component));
__reflect(GoodSence.prototype, "GoodSence");

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
var HeroSence = (function (_super) {
    __extends(HeroSence, _super);
    function HeroSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "HeroSenceSkin";
        return _this;
    }
    HeroSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    HeroSence.prototype.init = function () {
        var _this = this;
        this.btnReturn.init("btnReturn_png");
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SenceManager.getInstance().changeSence();
            var euiArr = new eui.ArrayCollection(_this.dataArr);
            _this.heroList.dataProvider = euiArr;
        }, this);
        this.btnOk.init("btnOK_png");
        this.dataArr = [
            { img: "heros01_png", name: "伊文捷琳", commentary: "樱桃小丸子", choose: false },
            { img: "heros02_png", name: "亚特伍德", commentary: "樱桃小丸子", choose: false },
            { img: "heros03_png", name: "伊妮德", commentary: "樱桃小丸子", choose: false },
            { img: "heros04_png", name: "鲁宾", commentary: "樱桃小丸子", choose: true },
            { img: "heros05_png", name: "威弗列德", commentary: "樱桃小丸子", choose: false },
            { img: "heros06_png", name: "史帝文", commentary: "樱桃小丸子", choose: false },
            { img: "heros07_png", name: "哈瑞斯", commentary: "樱桃小丸子", choose: false },
        ];
        //eui数组
        var euiArr = new eui.ArrayCollection(this.dataArr);
        //设置数据源
        this.heroList.dataProvider = euiArr;
        //设置渲染
        this.heroList.itemRenderer = HeroItem;
        this.heroScroller.verticalScrollBar.skinName = "VScrollBar1Skin";
        // let v_img: any = this.heroScroller.verticalScrollBar.thumb;
        // v_img.source = "hScrollBar01_png";
        //
        this.btnOk.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var arr = [];
            for (var i = 0; i < _this.heroList.numChildren; i++) {
                var value = _this.heroList.getChildAt(i).value;
                _this.dataArr[i].choose = value.choose;
                if (value.choose) {
                    arr.push(value.name);
                }
            }
            //返回主场景,显示选择的英雄名字			
            var text = new egret.TextField();
            text.width = _this.stage.width;
            text.textAlign = "center";
            if (arr.length) {
                text.text = '你选择了: ';
                for (var i = 0; i < arr.length - 1; i++) {
                    text.text += arr[i] + ",";
                }
                text.text += "" + arr[arr.length - 1];
            }
            else {
                text.text = '一个也没选';
            }
            text.textColor = 0xFFFFFF;
            text.y = _this.stage.height / 3 * 2;
            SenceManager.getInstance().mainsence.addChild(text);
            setTimeout(function () {
                text.parent.removeChild(text);
            }, 1000);
            SenceManager.getInstance().changeSence();
        }, this);
    };
    return HeroSence;
}(eui.Component));
__reflect(HeroSence.prototype, "HeroSence");

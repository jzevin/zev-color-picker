(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.ZevColorPicker = factory());
}(this, function () { 'use strict';

    const html = `

<h1>FOO!</h1>

`;

    const ViewCtrl = (function (html) {
        function ViewCtrl() {
            this.el = document.querySelector('[data-zev-color-picker]');
            this.html = html;
            this.el.innerHTML = this.html;
        }
        return ViewCtrl;
    })(html);

    const ZevColorPicker = (function (view) {
        function ZevColorPicker() {
            this.view = view;
        }
        return ZevColorPicker;
    })(new ViewCtrl());

    return ZevColorPicker;

}));

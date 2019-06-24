import { html } from './zcp.view.html';

const ViewCtrl = (function (html) {
    function ViewCtrl() {
        this.el = document.querySelector('[data-zev-color-picker]');
        this.html = html;
        this.el.innerHTML = this.html;
    }
    return ViewCtrl;
})(html);

export { ViewCtrl };
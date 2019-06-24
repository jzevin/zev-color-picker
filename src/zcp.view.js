import { html } from './zcp.view.html';
import { css } from './zcp.view.css';

const ViewCtrl = (function (html) {
    function ViewCtrl() {
        this.el = document.querySelector('[data-zev-color-picker]');
        this.html = html;
        this.el.innerHTML = this.html;
        this.cssEl = document.createElement('style');
        this.cssEl.innerHTML = css;
        this.el.insertAdjacentElement('beforebegin', this.cssEl);
    }
    return ViewCtrl;
})(html);

export { ViewCtrl };
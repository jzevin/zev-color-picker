import { html } from './zcp.view.html';
import { css } from './zcp.view.css';
import { PickerMainCtrl } from './zcp.view.picker.main';
import { PickerRangeCtrl } from './zcp.view.picker.range';

const ViewCtrl = (function () {
    function mount() {
        this.dom = {
            el: document.querySelector('[data-zev-color-picker]')
        }
        const styleEl = document.createElement('style');
        styleEl.innerHTML = css;
        this.dom.el.insertAdjacentElement('afterbegin', styleEl);
        this.dom.el.insertAdjacentHTML('afterbegin', html);
    }
    function setDomRefs() {
        const $ = this.dom.el.querySelector.bind(this.dom.el);
        this.dom.pickers = {
            main: $('canvas.main'),
            range: $('canvas.range')
        };
        this.dom.chips = {
            current: $('.chip-current'),
            new: $('.chip-new')
        };
        this.dom.inputs = {
            hue: $('.input-hue'),
            saturation: $('.input-saturation'),
            lightness: $('.input-lightness')
        };
        this.dom.buttons = {
            ok: $('.btn-ok'),
            cancel: $('.btn-cancel')
        };
    }
    function ViewCtrl(state) {
        mount.apply(this);
        setDomRefs.apply(this);
        const pMain = new PickerMainCtrl(this.dom.pickers.main, state);
        const pRange = new PickerRangeCtrl(this.dom.pickers.range, state);
    }
    return ViewCtrl;
})();

export { ViewCtrl };
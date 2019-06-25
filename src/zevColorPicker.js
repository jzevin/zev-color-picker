import { ViewCtrl } from './zcp.view'
import { ZcpState } from './zcp.state';

const ZevColorPicker = (function () {
    function ZevColorPicker() {
        this.state = new ZcpState();
        this.view = new ViewCtrl(this.state);
        this.state.subscribe(data => {
            this.view.dom.chips.current.style.backgroundColor = data.currentColor;
            this.view.dom.chips.new.style.backgroundColor = `hsl(${data.hsl.h}, ${data.hsl.s}%, ${data.hsl.l}%)`;
            this.view.dom.inputs.hue.value = data.hsl.h;
            this.view.dom.inputs.saturation.value = Math.round(data.hsl.s);
            this.view.dom.inputs.lightness.value = Math.round(data.hsl.l);
        });
    }
    return ZevColorPicker;
})();


export default ZevColorPicker;


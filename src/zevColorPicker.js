import { ViewCtrl } from './zcp.view'
import { ZcpState } from './zcp.state';

const ZevColorPicker = (function () {
    function ZevColorPicker() {
        this.state = new ZcpState();
        this.view = new ViewCtrl(this.state);
        this.state.subscribe(data => {
            console.log(data);
            this.view.dom.chips.new.style.backgroundColor = data.newColor;
        });
    }
    return ZevColorPicker;
})();


export default ZevColorPicker;


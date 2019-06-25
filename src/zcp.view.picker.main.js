import { rgbToHsl } from "./zcp.utils";

const PickerMainCtrl = (function () {
    const colorLoc = {
        x: 0,
        y: 0
    }
    function renderPickerMarker(x, y) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = y > this.h / 2 ? 'white' : 'black';
        this.ctx.lineWidth = 1.25;
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.restore();
    }
    function PickerMainCtrl(canvas, state) {
        this.ctx = canvas.getContext('2d');
        this.state = state;
        this.w = canvas.width;
        this.h = canvas.height;
        colorLoc.x = this.w;
        colorLoc.y = 0;
        this.ctx.canvas.addEventListener('click', this.onClick.bind(this));
        this.state.subscribe(data => {
            this.render(`hsl(${data.hsl.h}, 100%, 50%)`);
        });
    }
    PickerMainCtrl.prototype.render = function (color) {
        const grad1 = this.ctx.createLinearGradient(0, 0, this.w, 0);
        grad1.addColorStop(0, 'white');
        grad1.addColorStop(1, color);
        const grad2 = this.ctx.createLinearGradient(0, 0, 0, this.h);
        grad2.addColorStop(0, 'white');
        grad2.addColorStop(1, 'black');
        this.ctx.save();
        this.ctx.fillStyle = grad1;
        this.ctx.fillRect(0, 0, this.w, this.h);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.fillStyle = grad2;
        this.ctx.globalCompositeOperation = 'multiply';
        this.ctx.fillRect(0, 0, this.w, this.h);
        this.ctx.restore();
        renderPickerMarker.apply(this, [colorLoc.x, colorLoc.y]);
    }
    PickerMainCtrl.prototype.onClick = function (e) {
        colorLoc.x = e.offsetX;
        colorLoc.y = e.offsetY;
        let [r, g, b] = [...this.ctx.getImageData(colorLoc.x, colorLoc.y, 1, 1).data];
        let [h, s, l] = rgbToHsl(r, g, b);
        this.state.set('hsl', { h, s, l });
    }
    return PickerMainCtrl;
})();

export {
    PickerMainCtrl
}
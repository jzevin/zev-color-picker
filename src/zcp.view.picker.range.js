import { rgbToHsl } from "./zcp.utils";

const PickerRangeCtrl = (function () {
    let canvas, appState, ctx, w, h, grad;
    const padding = 10;
    const colorLoc = {
        x: 0,
        y: 0
    }
    function render() {
        ctx.clearRect(0,0,w,h);
        ctx.save();
        ctx.fillStyle = grad;
        ctx.fillRect(padding, 0, w-padding*2, h);
        ctx.restore();
        renderMarker();
    }
    function renderMarker() {
        const size = 6;
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(padding, colorLoc.y);
        ctx.lineTo(0, colorLoc.y+size);
        ctx.lineTo(0, colorLoc.y-size);
        ctx.lineTo(padding, colorLoc.y);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(w-padding, colorLoc.y);
        ctx.lineTo(w, colorLoc.y+size);
        ctx.lineTo(w, colorLoc.y-size);
        ctx.lineTo(w-padding, colorLoc.y);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    function onClick(e) {
        if(e.offsetX < padding || e.offsetX > w - (padding+1)) return;
        colorLoc.x = e.offsetX;
        colorLoc.y = e.offsetY;
        let [r,g,b,a] = [...ctx.getImageData(colorLoc.x, colorLoc.y, 1, 1).data];
        let [h, s, l] = rgbToHsl(r,g,b);
        appState.setHSL('h', h);
    }
    function PickerRangeCtrl(canvas, state) {
        ctx = canvas.getContext('2d');
        w = canvas.width;
        h = canvas.height;
        appState = state;
        grad = ctx.createLinearGradient(0, 0, 0, h);
        for (let i = 0; i < 359; i++) {
            grad.addColorStop(1 - (i * 0.002777777777777778), `hsl(${i}, 100%, 50%)`);
        };
        canvas.addEventListener('click', onClick);
        appState.subscribe(data => render());
    }
    return PickerRangeCtrl;
})();

export {
    PickerRangeCtrl
}
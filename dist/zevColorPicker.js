(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ZevColorPicker = factory());
}(this, function () { 'use strict';

  const html = `
<div class="zev-color-picker">
  <header class="header">
    <div class="title">Zev Color Picker</div>  
  </header>
  <div class="pickers">
      <div class="left">
          <canvas class="main" width="256" height="256"></canvas>
      </div>
      <div class="right">
          <canvas class="range" width="40" height="256"></canvas>
      </div>
  </div>
  <div class="properties">
    <div class="chips">
      <div class="chip-title">current</div>
      <div class="chip chip-current"></div>
      <div class="chip chip-new"></div>
      <div class="chip-title">new</div>
    </div>
    <div class="inputs">
      <div class="group">
        <label for="hue">H:</label>
        <input class="input input-hue" type="number" name="hue" min="0" max="9999" step="1">
      </div>
      <div class="group">
        <label for="saturation">S:</label>
        <input class="input input-saturation" type="number" name="saturation" min="0" max="100" step="1">
      </div>
      <div class="group">
        <label for="lightness">L:</label>
        <input class="input input-lightness" type="number" name="lightness" min="0" max="100" step="1">
      </div>
    </div>
  </div>
  <div class="buttons">
    <button class="btn btn-ok">OK</button>
    <button class="btn btn-cancel">cancel</button>
  </div>
</div>
`;

  const css = `

.zev-color-picker {
    background-color: #333;
    display: flex;
    flex-wrap: wrap;
    color: white;
    font-family: sans-serif;
    max-width: 600px;
    min-width: 330px;
  }
  .zev-color-picker * {
    box-sizing: border-box;
    border: none;
  }
  .zev-color-picker .header {
    background-color: #222;
    height: 2em;
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zev-color-picker .header .title {
    flex: 0 0 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1em;
  }
  .zev-color-picker .pickers {
    display: flex;
    flex: 0 0 auto;
    padding: 1em;
  }
  .zev-color-picker .pickers .left, .zev-color-picker .pickers .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zev-color-picker .pickers .left canvas, .zev-color-picker .pickers .right canvas {
    background-color: #222;
  }
  .zev-color-picker .pickers .right {
    margin-left: 0.25em;
  }
  .zev-color-picker .properties {
    flex: 0 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }
  .zev-color-picker .properties .chips {
    display: flex;
    flex-direction: column;
  }
  .zev-color-picker .properties .chips .chip-title {
    text-align: center;
  }
  .zev-color-picker .properties .chips .chip {
    width: 60px;
    height: 45px;
    background-color: #222;
    border-radius: 4px;
    margin-bottom: 0.25em;
  }
  .zev-color-picker .properties .inputs {
    margin-top: 1em;
  }
  .zev-color-picker .properties .inputs .group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .zev-color-picker .properties .inputs .group input {
    width: 4.25em;
    text-align: center;
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5em 0.25em;
    margin-left: 1em;
    color: white;
  }
  .zev-color-picker .buttons {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }
  .zev-color-picker .buttons .btn {
    font-size: 100%;
    width: 100%;
    margin-bottom: 1em;
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5em 1em;
    color: white;
  }
   
`;

  const PickerMainCtrl = (function () {
      const colorLoc = {
          x: 0,
          y: 0
      };
      function renderPickerMarker(x, y) {
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.strokeStyle = y > this.h/2 ? 'white' : 'black';
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
              this.render(data.currentColor);
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
      };
      PickerMainCtrl.prototype.onClick = function (e) {
          colorLoc.x = e.offsetX;
          colorLoc.y = e.offsetY;
          let [r,g,b,a] = [...this.ctx.getImageData(colorLoc.x, colorLoc.y, 1, 1).data];
          this.state.set('newColor', `rgb(${r},${g},${b})`);
      };
      return PickerMainCtrl;
  })();

  const ViewCtrl = (function () {
      function mount() {
          this.dom = {
              el: document.querySelector('[data-zev-color-picker]')
          };
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
      }
      return ViewCtrl;
  })();

  const ZcpState = (function () {
      const observers = [];
      function State() {
          this.data = {
              currentColor: 'purple',
              newColor: 'purple'
          };
      }
      State.prototype.subscribe = function (cb) {
          observers.push(cb);
          cb(this.data);
      };
      State.prototype.set = function (key, val) {
          this.data[key] = val;
          this.next(this.data);
      };
      State.prototype.next = function (val) {
          observers.forEach( o => o(val) );
      };
      return State;
  })();

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

  return ZevColorPicker;

}));

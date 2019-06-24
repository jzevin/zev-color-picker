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
        <input type="text" name="hue">
      </div>
      <div class="group">
        <label for="saturation">S:</label>
        <input type="text" name="saturation">
      </div>
      <div class="group">
        <label for="brightness">B:</label>
        <input type="text" name="brightness">
      </div>
    </div>
  </div>
  <div class="buttons">
    <button class="btn">OK</button>
    <button class="btn">Cancel</button>
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
    background-color: #000;
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
    width: 3.25em;
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

  const ZevColorPicker = (function (view) {
      function ZevColorPicker() {
          this.view = view;
      }
      return ZevColorPicker;
  })(new ViewCtrl());

  return ZevColorPicker;

}));

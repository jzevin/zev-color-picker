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
        <label for="lightness">B:</label>
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

export {
    html
};
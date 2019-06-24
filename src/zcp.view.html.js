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

export {
    html
};
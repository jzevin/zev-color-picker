const css = `

.zev-color-picker {
    background-color: #333;
    display: flex;
    flex-wrap: wrap;
    color: white;
    user-select: none;
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
    background-color: transparent;
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
    width: 80px;
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

export {
    css
}
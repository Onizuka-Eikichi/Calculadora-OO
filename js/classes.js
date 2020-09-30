export class Button {
  button = (value) => {
    let a = `
       <div class="Btn "> <input id="Btn${value}"type="button" value="${value}"> </div>
      `;
    return a;
  };
}

export class Text {
  createText = () => {
    let input = `
    <div class="txtInput"></div>
    `;
    return input;
  };
}

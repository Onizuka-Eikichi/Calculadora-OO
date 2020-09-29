export class Button {
  button = (value) => {
    let a = `
       <div class="Btn Btn_${value}"> <input type="button" value="${value}"> </div>
      `;
    return a;
  };
}

export class Text {
  createText = () => {
    let input = `
    <div class="txtInput">  </div>
    `;
    return input;
  };
}

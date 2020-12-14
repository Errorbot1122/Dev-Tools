let JSFile = 'console.log("Hellow World")';
let HtmlFile =
`
  <!DOCTYPE html>
    <html>
      <head>
        <title></title>
        
        <meta charset="UTF-8" />  
      </head>
      <body>
      </body>
    </html>
`;
let CssCss = 
`
  body {
    font-family: sans-serif;
  }
`;

let WindowTypes = [];

class Window {
  /**
   *
   * @param {String || Number} Type Type Of the window
   * @param {Number} ParentWindow Parent Window Number
   */
  constructor(Type, ParentWindow) {
    this.type = typeof Type == String ? Type : WindowTypes[Type];
    this.parent = "Window" + ParentWindow;
  }
  /**
   *
   * @param {Number} [ParentWindow] Parent Window Number
   */
  show(ParentWindow) {
    if (ParentWindow) {
      this.parent = "Window" + ParentWindow;
    }

    let WindowDiv = document.getElementById(this.parent);

    switch (this.Type) {
      case "Code":
        CodeWindow();
        break;
      default:
        break;
    }

    //WindowDivs.innerHTML =

    //<textarea name="Code" id="CodeArea" cols="30" rows="10"></textarea>
  }
  hide() {}
}

function CodeWindow(CurentFile) {}

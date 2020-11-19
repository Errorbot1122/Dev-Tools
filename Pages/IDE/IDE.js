let JSFile = 'console.log("Hellow World")';
let HtmlFile =
  '<!DOCTYPE html><html>\n  <head>\n    <title></title>\n    \n<meta charset="UTF-8" />\n  </head>\n  <body>\n    \n  </body>\n</html>';
let CssCss = "body {\n  font-family: sans-serif;\n}";

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

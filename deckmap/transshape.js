const jsdom = require("jsdom");
const SVGPathCommander = require("svg-path-commander");

const { JSDOM } = jsdom;
const { document } = (new JSDOM(`...`)).window;
global.document = document




const myRectAttr = {
    type: 'rect',
    x: 25,
    y: 25,
    width: 50,
    height: 50,
    rx: 5
  };
  
  const myRectPath = new SVGPathCommander.shapeToPath(myRectAttr);

  console.log(myRectPath)

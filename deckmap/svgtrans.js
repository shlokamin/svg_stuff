const fs = require("fs");
const SVGPathCommander = require("svg-path-commander");
const svgson = require("svgson");

var deckmap = require("./deckmap.json");

function getPolyPath(attr) {
  /** @type {SVGPath.pathArray} */
  const pathArray = [];
  const points = (attr.points || "")
    .trim()
    .split(/[\s|,]/)
    .map(Number);

  let index = 0;
  while (index < points.length) {
    pathArray.push([index ? "L" : "M", points[index], points[index + 1]]);
    index += 2;
  }

  return attr.type === "polygon" ? [...pathArray, ["z"]] : pathArray;
}

/**
 * Returns a new `pathArray` from circle attributes.
 *
 * @param {SVGPath.circleAttr} attr shape configuration
 * @return {SVGPath.pathArray} a circle `pathArray`
 */
function getCirclePath(attr) {
  const { cx, cy, r } = attr;

  return [
    ["M", cx - r, cy],
    ["a", r, r, 0, 1, 0, 2 * r, 0],
    ["a", r, r, 0, 1, 0, -2 * r, 0],
  ];
}

/**
 * Returns a new `pathArray` from ellipse attributes.
 *
 * @param {SVGPath.ellipseAttr} attr shape configuration
 * @return {SVGPath.pathArray} an ellipse `pathArray`
 */
function getEllipsePath(attr) {
  const { cx, cy, rx, ry } = attr;

  return [
    ["M", cx - rx, cy],
    ["a", rx, ry, 0, 1, 0, 2 * rx, 0],
    ["a", rx, ry, 0, 1, 0, -2 * rx, 0],
  ];
}

const transform = {
  scale: 0.3505833333, // uniform scale on X, Y, Z axis
  origin: [0, 0],
};

// go through each element (including nested ones)
// scale each path d tag, and overwrite the value
// if its not a d tag, convert to one, then scale and overwrite the value

const transformNode = (node) => {
  // do transform of attributes d tag
  if (node.name === "path") {
    const transformedNode = {
      ...node,
      attributes: {
        ...node.attributes,
        d: new SVGPathCommander(node.attributes.d)
          .transform(transform)
          .toString(),
      },
    };
    return transformedNode;
  } else if (node.name === "polygon") {
    const polyToPath = SVGPathCommander.pathToString(
      getPolyPath({ points: node.attributes.points })
    );
    const pathElement = {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: polyToPath,
      },
      children: [],
    };

    const transformedNode = {
      ...pathElement,
      attributes: {
        ...pathElement.attributes,
        d: new SVGPathCommander(pathElement.attributes.d)
          .transform(transform)
          .toString(),
      },
    };

    return transformedNode;
  } else if (node.name === "circle") {
    const circleToPath = SVGPathCommander.pathToString(
      getCirclePath({
        cx: node.attributes.cx,
        cy: node.attributes.cy,
        r: node.attributes.r,
      })
    );

    const pathElement = {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: circleToPath,
      },
      children: [],
    };

    const transformedNode = {
      ...pathElement,
      attributes: {
        ...pathElement.attributes,
        d: new SVGPathCommander(pathElement.attributes.d)
          .transform(transform)
          .toString(),
      },
    };
    return transformedNode;
  } else {
    return node;
  }
};

const recurseNode = (node) => {
  // base case
  const transformedNode = transformNode(node);
  if (node.children.length === 0) {
    return transformedNode;
  }

  return {
    ...transformedNode,
    children: node.children.map((child) => recurseNode(child)),
  };
};

const transformedDeckmapChildren = deckmap.children.map((node) =>
  recurseNode(node)
);

const transformedDeckmap = {
  ...deckmap,
  attributes: { ...deckmap.attributes, viewBox: "-200 -200 2821.4 2821.5" },
  children: [
    {
      name: "rect",
      type: "element",
      value: "",
      attributes: {
        style:
          "fill:none;stroke:#000000;stroke-width:0.5;stroke-miterlimit:10;",
        width: "128.6",
        height: "86",
      },
      children: [],
    },
    ...transformedDeckmapChildren,
  ],
};

fs.writeFile(
  "deckmapTrasformed.svg",
  svgson.stringify(transformedDeckmap, {
    selfClose: false,
  }),
  (err) => {
    if (err) {
      console.log("oops");
      console.error(err);
    }
    console.log("success");
  }
);

// fs.writeFile(
//   "deckmapTrasformed.json",
//   JSON.stringify(transformedDeckmap, null, 2),
//   (err) => {
//     if (err) {
//       console.log("oops");
//       console.error(err);
//     }
//     console.log("success");
//   }
// );

var deckmap = require("./deckmap.json");

const countByLayerType = {};
let nodes = deckmap.children;
while (nodes.length > 0) {
  currNode = nodes.pop();
  if (currNode.name in countByLayerType) {
    countByLayerType[currNode.name] = countByLayerType[currNode.name] + 1;
  } else {
    countByLayerType[currNode.name] = 1;
  }

  if (currNode.children.length > 0) {
    nodes = nodes.concat(currNode.children);
  }
}

console.log(countByLayerType);

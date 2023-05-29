import k, { tileWidth, tileHeight } from "./constants";
import player from "./player";
let levels = {
  level1: {
    map: [
      "============",
      "=               =",
      "=               =",
      "=   @               $=",
      "=               =",
      "=               =",
      "==========",
    ],
    data: {
      tileWidth: tileWidth,
      tileHeight: tileHeight,
      pos: k.vec2(0, 0),
      tiles: {
        "=": () => [k.rect(tileWidth, tileHeight)],
        "@": () => player("robot"),
        "#": () => player("robot"),
      },
    },
  },
};

export default levels;

import k from "./constants";
import player from "./player";

let levels = {
  level1: {
    map: [
      "============",
      "=               =",
      "=               =",
      "=@               $=",
      "=               =",
      "=               =",
      "==========",
    ],
    data: {
      tileWidth: 32,
      tileHeight: 32,
      pos: k.vec2(0, 0),
      tiles: {
        "=": () => [k.rect(20, 10)],
        "@": () => [player("robot")],
        "#": () => [player("zombie")],
      },
    },
  },
};

export default levels;

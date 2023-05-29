import k, { tileWidth, tileHeight } from "./constants";
import player from "./player";
let levels = {
  level1: {
    map: [
      "===================================",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=   @         #                   =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "=                                 =",
      "===================================",
    ],
    data: {
      tileWidth: tileWidth,
      tileHeight: tileHeight,
      pos: k.vec2(tileWidth/2, tileHeight/2),
      tiles: {
        "=": () => [k.sprite("wall")],
        "@": () => player("robot1"),
        "#": () => player("robot2"),
        " ": () => [k.sprite("floor1"),k.anchor('center')],
      },
    },
  },
};

export default levels;

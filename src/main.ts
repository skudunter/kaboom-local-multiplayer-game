import k from "./constants";
import levels from "./levels";

// load the level
//@ts-ignore
let level = k.addLevel(levels.level1.map, levels.level1.data);

//main player1 object
let player = level.get("robot")[0];

//keyDown handlers for movement
k.onKeyDown("left", () => {
  player.move("left");
});

k.onKeyDown("right", () => {
  player.move("right");
});

k.onKeyDown("up", () => {
  player.move("up");
});

k.onKeyDown("down", () => {
  player.move("down");
});

import k from "./constants";
import levels from "./levels";

// load the level
//@ts-ignore
let level = k.addLevel(levels.level1.map, levels.level1.data);

//main player11 object
let player1 = level.get("robot1")[0];
let player2 = level.get("robot2")[0];

player2.onAnimEnd((anim: string) => {
  if (anim === "run") {
  player2.play("idle");
  }
});

player2.play("idle");
//keyDown handlers for movement
k.onKeyDown("a", () => {
  player2.move(-player2.speed, 0);
  if (player2.curAnim() !== "run") {
    player2.play("run");
  }
  player2.flipX = true;
});

k.onKeyDown("d", () => {
  player2.move(player2.speed, 0);
  if (player2.curAnim() !== "run") {
    player2.play("run");
  }
  player2.flipX = false;
});

k.onKeyDown("w", () => {
  player2.move(0, -player2.speed);
  if (player2.curAnim() !== "run") {
    player2.play("run");
  }
});

k.onKeyDown("s", () => {
  player2.move(0, player2.speed);
  if (player2.curAnim() !== "run") {
    player2.play("run");
  }
});

k.onKeyDown("left", () => {
  player1.move(-player1.speed, 0);
  if (player1.curAnim() !== "run") {
    player1.play("run");
  }
  player1.flipX = true;
});

k.onKeyDown("right", () => {
  player1.move(player1.speed, 0);
  if (player1.curAnim() !== "run") {
    player1.play("run");
  }
  player1.flipX = false;
});

k.onKeyDown("up", () => {
  player1.move(0, -player1.speed);
  if (player1.curAnim() !== "run") {
    player1.play("run");
  }
});

k.onKeyDown("down", () => {
  player1.move(0, player1.speed);
  if (player1.curAnim() !== "run") {
    player1.play("run");
  }
});

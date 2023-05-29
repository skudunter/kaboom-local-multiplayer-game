import k, { tileWidth, tileHeight } from "../constants";

// Function to handle player movement and animation
function handlePlayerMovement(player: any, direction: any, anim: any) {
  k.onKeyDown(direction, () => {
    player.move(anim.x * player.speed, anim.y * player.speed);
    if (player.curAnim() !== "run") {
      player.play("run");
    }
    player.flipX = anim.flipX;
  });
}

// Function to handle player idle animation
function handlePlayerIdleAnimation(player: any) {
  player.onAnimEnd((anim: any) => {
    if (anim === "run") {
      player.play("idle");
    }
  });
  player.play("idle");
}

const level1 = k.scene("level1", () => {
  const level = k.addLevel(
    [
      "==============================",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=#                          @ =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "=                            =",
      "===================================",
    ],
    {
      tileWidth: tileWidth,
      tileHeight: tileHeight,
      pos: k.vec2(tileWidth / 2, tileHeight / 2),
      tiles: {
        "=": () => [k.sprite("wall"), k.anchor("center"), k.body(), k.area()],
        "@": () => [
          k.sprite("robot1"),
          k.area(),
          k.body(),
          k.anchor("center"),
          "robot1",
          { speed: 300 },
          k.scale(4),
          k.z(100),
        ],
        "#": () => [
          k.sprite("robot2"),
          k.area(),
          k.body(),
          k.scale(4),
          k.anchor("center"),
          "robot2",
          { speed: 300 },
          k.z(100),
        ],
        " ": () => [k.sprite("floor1"), k.anchor("center")],
      },
    }
  );

  const player1 = level.get("robot1")[0];
  const player2 = level.get("robot2")[0];

  handlePlayerIdleAnimation(player1);
  handlePlayerIdleAnimation(player2);

  handlePlayerMovement(player1, "left", {
    x: -1,
    y: 0,
    flipX: true,
  });
  handlePlayerMovement(player1, "right", {
    x: 1,
    y: 0,
    flipX: false,
  });
  handlePlayerMovement(player1, "up", {
    x: 0,
    y: -1,
    flipX: false,
  });
  handlePlayerMovement(player1, "down", {
    x: 0,
    y: 1,
    flipX: false,
  });

  handlePlayerMovement(player2, "a", {
    x: -1,
    y: 0,
    flipX: true,
  });
  handlePlayerMovement(player2, "d", {
    x: 1,
    y: 0,
    flipX: false,
  });
  handlePlayerMovement(player2, "w", {
    x: 0,
    y: -1,
    flipX: false,
  });
  handlePlayerMovement(player2, "s", {
    x: 0,
    y: 1,
    flipX: false,
  });
});

export default level1;

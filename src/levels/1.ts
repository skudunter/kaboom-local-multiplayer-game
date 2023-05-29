import k, { tileWidth, tileHeight } from "../constants";

function handleHit(player: any) {
//   let t = 0;
  player.on("hurt", () => {
    player.color = { r: 255, g: 255, b: 255 };
    console.log("hurts");
  });
}

// Function to handle player movement and animation
function handlePlayerMovement(player: any, direction: any, anim: any) {
  k.onKeyDown(direction, () => {
    player.flipX = anim.flipX;
    player.move(anim.x * player.speed, anim.y * player.speed);
    if (player.curAnim() !== "run") {
      player.play("run");
    }
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
      "=========================",
      "=                       =",
      "=                       =",
      "=                       =",
      "=                       =",
      "=#         c           @=",
      "=                       =",
      "=                       =",
      "=                       =",
      "=                       =",
      "= bf                    =",
      "===================================",
    ],
    {
      tileWidth: tileWidth,
      tileHeight: tileHeight,
      pos: k.vec2(tileWidth / 2, tileHeight / 2),
      tiles: {
        "=": () => [k.sprite("wall"), k.anchor("center"), k.scale(5.1)],
        "@": () => [
          k.sprite("robot1"),
          k.area(),
          k.body(),
          k.anchor("center"),
          "robot1",
          { speed: 300 },
          k.scale(4),
          k.z(100),
          k.health(10),
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
          k.health(10),
        ],
        " ": () => [k.sprite("floor3"), k.anchor("center"), k.scale(5.1)],
        "b": () => [k.sprite("floor1"), k.anchor("center"), k.scale(5.1)],
        "f": () => [k.sprite("floor2"), k.anchor("center"), k.scale(5.1)],
        "c": () => [k.sprite("crate1"), k.anchor("center"), k.scale(5.1),k.body({mass:10}),k.area(),k.z(100)],
      },
    }
  );
  //walls for collision purposes
  k.add([k.rect(k.width(), tileWidth), k.pos(0, 0), k.color(0, 0, 0),k.body({isStatic:true}),k.area(),k.z(-1)]);
  k.add([k.rect(tileWidth,k.height()-tileHeight*2-20), k.pos(0, tileHeight+1), k.color(0, 0, 0),k.body({isStatic:true}),k.area(),k.z(-1)]);
  k.add([k.rect(k.width(), tileHeight), k.pos(0, k.height()-tileHeight-16), k.color(0, 0, 0),k.body({isStatic:true}),k.area(),k.z(-1)]);
  k.add([k.rect(tileWidth,k.height()-tileHeight*2-20), k.pos(k.width()-tileWidth, tileHeight+1), k.color(0, 0, 0),k.body({isStatic:true}),k.area(),k.z(-1)]);

  const player1 = level.get("robot1")[0];
  const player2 = level.get("robot2")[0];
 
  k.add([k.sprite('floor5'),k.pos(player1.pos.x,player1.pos.y),k.scale(5.1),k.z(-1)])
  k.add([k.sprite('floor5'),k.pos(player2.pos.x,player2.pos.y),k.scale(5.1),k.z(-1)])
  handlePlayerIdleAnimation(player1);
  handlePlayerIdleAnimation(player2);

  handleHit(player1);
  handleHit(player2);

  player2.hurt(3);

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

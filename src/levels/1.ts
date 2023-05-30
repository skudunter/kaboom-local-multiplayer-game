import k, { tileWidth, tileHeight } from "../constants";

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
      "=                p      =",
      "=          cc    p      =",
      "=                p      =",
      "=  p        P           =",
      "=# p                   @=",
      "=  p        P   p       =",
      "=               p       =",
      "=      pp       p       =",
      "=       p               =",
      "=       p               =",
      "==========================",
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
          "player1",
          { speed: 200 },
          k.scale(4),
          k.z(100),
          k.health(100),
        ],
        "#": () => [
          k.sprite("robot2"),
          k.area(),
          k.body(),
          k.scale(4),
          k.anchor("center"),
          "player2",
          { speed: 200 },
          k.z(100),
          k.health(100),
        ],
        " ": () => [k.sprite("floor3"), k.anchor("center"), k.scale(5.1)],
        b: () => [k.sprite("floor1"), k.anchor("center"), k.scale(5.1)],
        f: () => [k.sprite("floor2"), k.anchor("center"), k.scale(5.1)],
        c: () => [
          k.sprite("crate1"),
          k.anchor("center"),
          k.scale(5.1),
          k.area(),
          k.body({ isStatic: true }),
          "crate",
          "barrier",
          k.z(80),
        ],
        p: () => [
          k.sprite("pillar1"),
          k.anchor("center"),
          k.scale(4.9),
          k.area(),
          k.body({ isStatic: true }),
          "barrier",
        ],
        P: () => [
          k.sprite("crate2"),
          k.anchor("center"),
          k.scale(4.9),
          k.area(),
          k.body({ isStatic: true }),
          "barrier",
        ],
      },
    }
  );
  
  k.play("gametrack");
  let scores = { score1: 0, score2: 0 };
  let score1 = k.add([
    k.text(`player1: ${scores.score1}`),
    k.pos(k.width() / 2 - 150, 20),
  ]);
  let score2 = k.add([
    k.text(`player2: ${scores.score2}`),
    k.pos(k.width() / 2 + 150, 20),
  ]);

  //walls for collision purposes
  k.add([
    k.rect(k.width(), tileWidth),
    k.pos(0, 0),
    k.color(0, 0, 0),
    k.body({ isStatic: true }),
    k.area(),
    k.z(-1),
    "barrier",
  ]);
  k.add([
    k.rect(tileWidth, k.height() - tileHeight * 2 - 20),
    k.pos(0, tileHeight + 1),
    k.color(0, 0, 0),
    k.body({ isStatic: true }),
    k.area(),
    k.z(-1),
    "barrier",
  ]);
  k.add([
    k.rect(k.width(), tileHeight),
    k.pos(0, k.height() - tileHeight - 16),
    k.color(0, 0, 0),
    k.body({ isStatic: true }),
    k.area(),
    k.z(-1),
    "barrier",
  ]);
  k.add([
    k.rect(tileWidth, k.height() - tileHeight * 2 - 20),
    k.pos(k.width() - tileWidth, tileHeight + 1),
    k.color(0, 0, 0),
    k.body({ isStatic: true }),
    k.area(),
    k.z(-1),
    "barrier",
  ]);

  const player1 = level.get("player1")[0];
  const player2 = level.get("player2")[0];

  let player1Health = player1.add([
    k.rect(k.lerp(0, tileWidth / 3, player1.hp() / 100), 3),
    k.pos(0, -18),
    k.anchor("center"),
    k.color(119, 221, 119),
  ]);

  let player2Health = player2.add([
    k.rect(k.lerp(0, tileWidth / 3, player2.hp() / 100), 3),
    k.pos(0, -18),
    k.anchor("center"),
    k.color(119, 221, 119),
  ]);

  k.add([
    k.sprite("light"),
    k.pos(player1.pos.x, player1.pos.y),
    k.scale(5.1),
    k.z(-1),
  ]);

  k.add([
    k.sprite("light"),
    k.pos(player2.pos.x, player2.pos.y),
    k.scale(5.1),
    k.z(-1),
  ]);

  handlePlayerIdleAnimation(player1);
  handlePlayerIdleAnimation(player2);

  k.onKeyPress("7", () => {
    //player 1 shoot
    //
    let bullet: any = [
      k.move(player1.pos.angle(player2.pos), -700),
      k.pos(player1.pos),
      k.sprite("bullet1"),
      k.scale(2),
      k.anchor("center"),
      k.z(100),
      k.offscreen({ destroy: true }),
      k.area(),
      "1",
    ];
    bullet = k.add(bullet);
    bullet.angle = player1.pos.angle(player2.pos) + 180;

    bullet.onCollide("barrier", () => {
      k.destroy(bullet);
    });
    bullet.onCollide("player2", () => {
      player2.hurt(10);
      k.destroy(bullet);
    });
  });

  k.onKeyPress("e", () => {
    //player 1 shoot
    //
    let bullet: any = [
      k.move(player2.pos.angle(player1.pos), -700),
      k.pos(player2.pos),
      k.sprite("bullet1"),
      k.scale(2),
      k.anchor("center"),
      k.z(100),
      k.offscreen({ destroy: true }),
      k.area(),
      "2",
    ];

    bullet = k.add(bullet);
    bullet.angle = player2.pos.angle(player1.pos) + 180;

    bullet.onCollide("barrier", () => {
      k.destroy(bullet);
    });
    bullet.onCollide("player1", () => {
      player1.hurt(10);
      k.destroy(bullet);
    });
  });

  player2.on("hurt", () => {
    k.destroy(player2Health);
    player2Health = player2.add([
      k.rect(k.lerp(0, tileWidth / 3, player2.hp() / 100), 3),
      k.pos(0, -18),
      k.anchor("center"),
      k.color(119, 221, 119),
    ]);
  });

  player1.on("hurt", () => {
    k.destroy(player1Health);
    player1Health = player1.add([
      k.rect(k.lerp(0, tileWidth / 3, player1.hp() / 100), 3),
      k.pos(0, -18),
      k.anchor("center"),
      k.color(119, 221, 119),
    ]);
  });

  player1.on("death", () => {});

  player2.on("death", () => {});

  handlePlayerMovement(player1, "4", {
    x: -1,
    y: 0,
    flipX: true,
  });
  handlePlayerMovement(player1, "6", {
    x: 1,
    y: 0,
    flipX: false,
  });
  handlePlayerMovement(player1, "8", {
    x: 0,
    y: -1,
    flipX: false,
  });
  handlePlayerMovement(player1, "5", {
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

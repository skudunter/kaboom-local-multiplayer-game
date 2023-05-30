import kaboom from "kaboom";
//init kaboom
const k = kaboom();
const tileWidth = (k.width() / 25);
const tileHeight = tileWidth;

//load sprites
k.loadSprite("robot1", "./robot1.png", {
    sliceX: 12,
    anims: {
      idle: {
        from: 0,
        to: 4,
        speed: 10,
        loop: true,
      },
      run: {
        from: 5,
        to: 11,
        speed: 10,
        loop: false,
      },
  },
});
k.loadSprite("robot2", "./robot2.png", {
  sliceX: 12,
  anims: {
    idle: {
      from: 0,
      to: 4,
      speed: 10,
      loop: true,
    },
    run: {
      from: 5,
      to: 11,
      speed: 10,
      loop: false,
    },
  },
});

//floors
k.loadSprite("floor1", "./floor1.png");
k.loadSprite("floor2", "./floor2.png");
k.loadSprite("floor3", "./floor3.png");
k.loadSprite("floor4", "./floor4.png");
//crates
k.loadSprite("crate1", "./crate1.png");
k.loadSprite("crate2", "./crate2.png");
//wall
k.loadSprite("wall", "./wall.png");
//pillars
k.loadSprite("pillar1", "./pillar1.png");
k.loadSprite("pillar2", "./pillar2.png");
//light
k.loadSprite("light", "./light.png");
//bullets
k.loadSprite("bullet1", "./bullet.png");


export default k;
export { tileWidth, tileHeight };

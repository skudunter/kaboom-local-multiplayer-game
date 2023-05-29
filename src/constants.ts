import kaboom from "kaboom";
//init kaboom
const k = kaboom();
const tileWidth = k.width() / 34.8;
const tileHeight = tileWidth;

//load sprites
k.loadSprite("robot", "./robot-idle.gif");
k.loadSprite("floor1", "./floor1.png");
k.loadSprite("floor2", "./floor2.png");
k.loadSprite("floor3", "./floor3.png");
k.loadSprite("floor4", "./floor4.png");
k.loadSprite("wall", "./wall.png");

export default k;
export { tileWidth, tileHeight };

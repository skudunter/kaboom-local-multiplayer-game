import kaboom from 'kaboom';
//init kaboom
const k = kaboom();
const tileWidth = k.width()/20;
const tileHeight = k.height()/20;

//load sprites
k.loadSprite('robot', './robot-idle.gif');

export default k;
export {tileWidth,tileHeight}
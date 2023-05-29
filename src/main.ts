import k from "./constants";
import Player from "./player";

//main player object
const player = new Player(100,200);

// keyDown handlers for movement
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
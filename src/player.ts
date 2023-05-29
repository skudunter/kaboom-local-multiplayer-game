import k from "./constants";
function player(type: string) {
  if (type === "robot") {
    return [k.sprite("robot"),k.area(),k.body(),k.anchor('center'),'robot',{speed:300},k.scale(0.4),k.z(100) ];
  } else {
    return [k.sprite('zombie'),k.area(),k.body(),k.anchor('bot'),'zombie',{speed:300}]
  }
}
export default player;

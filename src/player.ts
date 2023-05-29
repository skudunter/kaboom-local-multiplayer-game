import k from "./constants";
function player(type: string) {
  if (type === "robot") {
    return [k.sprite("robot")];
  } else {
    return [k.sprite('zombie')]
  }
}
export default player;

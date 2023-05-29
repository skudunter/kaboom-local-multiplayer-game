import k from "./constants";
function player(type: string) {
  if (type === "robot") {
    return k.add([k.sprite("robot"), k.area(), "robot"]);
  } else {
    return k.add([k.sprite("robot"), k.area(), "zombie"]);
  }
}
export default player;

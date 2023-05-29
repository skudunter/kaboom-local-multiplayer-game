import k from "./constants";
function player(type: string) {
  if (type === "robot1") {
    return [
      k.sprite("robot1"),
      k.area(),
      k.body(),
      k.anchor("center"),
      "robot1",
      { speed: 300 },
      k.scale(4),
      k.z(100),
    ];
  } else if (type == "robot2") {
    return [
      k.sprite("robot2"),
      k.area(),
      k.body(),
      k.scale(4),
      k.anchor("center"),
      "robot2",
      { speed: 300 },
      k.z(100),
    ];
  }
}
export default player;

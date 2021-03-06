import { movePlayerTo } from "@decentraland/RestrictedActions";

export class Model extends Entity {
  constructor(
    model: GLTFShape,
    transform: Transform,
    parent: Entity,
    locX: number,
    locY: number,
    locZ: number,
    lbl: string
  ) {
    super();
    engine.addEntity(this);
    this.addComponent(transform);
    this.addComponent(model);
    this.setParent(parent);
    this.addComponent(
      new OnPointerDown(
        (e) => {
          log("Clicking on: " + lbl);
          void movePlayerTo({ x: locX, y: locY, z: locZ });
        },
        { hoverText: "Go through maze" }
      )
    );
  }
}

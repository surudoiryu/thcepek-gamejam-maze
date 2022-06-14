export class Model extends Entity {
  teleportLocation = new Transform({ position: new Vector3(0, 0, 0) });

  constructor(
    model: GLTFShape,
    transform: Transform,
    parent: Entity,
    location: Transform
  ) {
    super();
    engine.addEntity(this);
    this.addComponent(transform);
    this.addComponent(model);
    this.setParent(parent);
    this.teleportLocation = location;
  }

  /*playerTeleporte): void {
    this.position.set(
      Camera.instance.position.x,
      Camera.instance.position.y,
      Camera.instance.position.z
    );
  }*/

  toggleOnPointerDown(): void {
    this.addComponentOrReplace(
      new OnPointerDown(
        (e) => {
          //this.playerTeleport(e);
          log("teleport player!");
        },
        {
          hoverText: "Pick up Bowlingball",
          distance: 8,
          button: ActionButton.PRIMARY,
        }
      )
    );
  }
}

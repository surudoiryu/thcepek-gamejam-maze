import { Model } from "./model";

const _scene = new Entity('_scene')
_scene.addComponent(
  new CameraModeArea({
    area: {
      box: new Vector3(256, 256, 256),
    },
    cameraMode: CameraMode.FirstPerson,
  })
);

engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const floorHexagon = new Entity('floorHexagon')
engine.addEntity(floorHexagon)
floorHexagon.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(63.669193267822266, 0, 63.41838073730469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.719482421875, 1, 15.743553161621094)
})
floorHexagon.addComponentOrReplace(transform18)
const gltfShape2 = new GLTFShape("c2f3bda2-7ffc-4873-8d2b-026d2a4abeb6/HexagonFloor.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
floorHexagon.addComponentOrReplace(gltfShape2)

const floorHexagon2 = new Entity('floorHexagon2')
engine.addEntity(floorHexagon2)
floorHexagon2.setParent(_scene)
floorHexagon2.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(48.85049819946289, 0, 63.41838073730469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.489161729812622, 1, 15.743553161621094)
})
floorHexagon2.addComponentOrReplace(transform19)

const floorHexagon3 = new Entity('floorHexagon3')
engine.addEntity(floorHexagon3)
floorHexagon3.setParent(_scene)
floorHexagon3.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(34.950889587402344, 0, 63.41838073730469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.6469993591308594, 1, 15.743553161621094)
})
floorHexagon3.addComponentOrReplace(transform20)

const floorHexagon4 = new Entity('floorHexagon4')
engine.addEntity(floorHexagon4)
floorHexagon4.setParent(_scene)
floorHexagon4.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(20.39961051940918, 0, 63.41838073730469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.320034503936768, 1, 15.743553161621094)
})
floorHexagon4.addComponentOrReplace(transform21)

const maze = new Entity('maze')
engine.addEntity(maze)
maze.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
maze.addComponentOrReplace(transform22)
const gltfShape3 = new GLTFShape("8dd05b91-a68f-4419-8de7-1a10f23e1633/mazenowalls1.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
maze.addComponentOrReplace(gltfShape3)


const floorg4a4 = new Entity('floorg4a4')
engine.addEntity(floorg4a4)
floorg4a4.setParent(_scene)
const floorg4a4transform = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
maze.addComponentOrReplace(floorg4a4transform)
const gltffloorg4a4 = new GLTFShape("8dd05b91-a68f-4419-8de7-1a10f23e1633/FLOORG4A4.glb")
gltffloorg4a4.withCollisions = true
gltffloorg4a4.isPointerBlocker = true
gltffloorg4a4.visible = true
maze.addComponentOrReplace(gltffloorg4a4)


const climber = new Entity('climber')
engine.addEntity(climber)
climber.setParent(_scene)
const climbtransform = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
maze.addComponentOrReplace(climbtransform)
const gltfclimber = new GLTFShape("8dd05b91-a68f-4419-8de7-1a10f23e1633/climber.glb")
gltfclimber.withCollisions = true
gltfclimber.isPointerBlocker = true
gltfclimber.visible = true
maze.addComponentOrReplace(gltfclimber)


/* All Teleports */
new Model(
  new GLTFShape("teleports/b1d1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  2.09, 
  1.10, 
  25.85
);

new Model(
  new GLTFShape("teleports/b2a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  31.08, 
  5.10, 
  26.09
);

new Model(
  new GLTFShape("teleports/b2df.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  9.74, 
  5.10, 
  32.05
);

new Model(
  new GLTFShape("teleports/b3a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/b3a3-g2a3.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  15.74, 
  5.10, 
  29.89
);

new Model(
  new GLTFShape("teleports/b3a3.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/b3b4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  19.75, 
  9.10, 
  32.29
);

new Model(
  new GLTFShape("teleports/b3c4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/b3d3.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  10.49, 
  9.10, 
  29.89
);

new Model(
  new GLTFShape("teleports/b3d4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/b4a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/b4d1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/g1a2.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  7.90, 
  1.10, 
  28.32
);

new Model(
  new GLTFShape("teleports/g1d4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  1.79, 
  1.10, 
  31.77
);

new Model(
  new GLTFShape("teleports/g2af-b3a4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  16.01, 
  5.10, 
  30.64
);

new Model(
  new GLTFShape("teleports/g2d4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  18.09, 
  5.10, 
  31.90
);

new Model(
  new GLTFShape("teleports/g3a4-r2a4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  7.51, 
  5.10, 
  31.91
);

new Model(
  new GLTFShape("teleports/g3d3.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  18.75, 
  9.10, 
  30.02
);

new Model(
  new GLTFShape("teleports/g4a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/g4a3-r3a3.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  7.87, 
  9.10, 
  30.41
);

new Model(
  new GLTFShape("teleports/g4a4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/g4d1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  18.17, 
  13.10, 
  26.42
);

new Model(
  new GLTFShape("teleports/r1a2.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  16.09, 
  1.10, 
  28.55
);

new Model(
  new GLTFShape("teleports/r1d1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  17.84, 
  1.10, 
  26.13
);

new Model(
  new GLTFShape("teleports/r1d4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  10.19, 
  1.10, 
  31.52
);

new Model(
  new GLTFShape("teleports/r2a4-g3a4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  15.30, 
  9.10, 
  31.75
);

new Model(
  new GLTFShape("teleports/r3a3-g4a3.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  15.83, 
  13.10, 
  29.62
);

new Model(
  new GLTFShape("teleports/r3d4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  17.75, 
  9.10, 
  31.90
);

new Model(
  new GLTFShape("teleports/r4a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  14.95, 
  13.10, 
  26.54
);

new Model(
  new GLTFShape("teleports/y2a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/y3a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/y3b4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/y3c4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/y4a1.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  24.20, 
  5.10, 
  25.94
);

new Model(
  new GLTFShape("teleports/y4a4.glb"),
  new Transform({ position: new Vector3(32, 0, 32) }),
  _scene,
  15.36, 
  13.10, 
  32.08
);

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface GameObject {
  id: string;
  name: string;
  position: Vector3;
  visible: boolean;
}

export class Scene {
  name: string;
  objects: GameObject[] = [];

  constructor(name = "Untitled Scene") {
    this.name = name;
  }

  addObject(object: GameObject): void {
    this.objects.push(object);
  }

  removeObject(id: string): void {
    this.objects = this.objects.filter(o => o.id !== id);
  }

  serialize(): string {
    return JSON.stringify(this, null, 2);
  }

  static deserialize(data: string): Scene {
    const parsed = JSON.parse(data);
    const scene = new Scene(parsed.name);
    scene.objects = parsed.objects ?? [];
    return scene;
  }
}

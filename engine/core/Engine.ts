
import { Renderer2D } from "../renderers/Renderer2D";
import { Renderer3D } from "../renderers/Renderer3D";
import { Scene } from "../scene/Scene";

export type RenderMode = "2D" | "3D";

export class Engine {
  renderer2D: Renderer2D;
  renderer3D: Renderer3D;
  scene = new Scene("Main Scene");
  activeMode: RenderMode = "2D";

  constructor(container: HTMLElement) {
    this.renderer2D = new Renderer2D(container);
    this.renderer3D = new Renderer3D(container);
    this.setMode("2D");
    this.renderer2D.start();
  }

  setMode(mode: RenderMode): void {
    this.activeMode = mode;
    this.renderer2D.show(mode === "2D");
    this.renderer3D.show(mode === "3D");
  }

  getScene(): Scene {
    return this.scene;
  }
}


import * as THREE from "three";

export class Renderer3D {
  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement("canvas");
    this.canvas.className = "engine-canvas";
    container.appendChild(this.canvas);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#101914");

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    this.camera.position.set(3, 3, 5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });

    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({
        color: "#18a875",
        roughness: 0.4
      })
    );

    this.scene.add(cube);

    const light = new THREE.DirectionalLight("#ffffff", 3);
    light.position.set(4, 5, 3);
    this.scene.add(light);

    this.scene.add(new THREE.AmbientLight("#ffffff", 1));
    this.scene.add(new THREE.GridHelper(20, 20));

    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.renderer.setAnimationLoop(() => {
      cube.rotation.y += 0.005;
      cube.rotation.x += 0.002;
      this.renderer.render(this.scene, this.camera);
    });
  }

  resize(): void {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    if (!width || !height) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  show(visible: boolean): void {
    this.canvas.style.display = visible ? "block" : "none";
    if (visible) this.resize();
  }
}

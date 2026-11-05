
export class Renderer2D {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement("canvas");
    this.canvas.className = "engine-canvas";
    container.appendChild(this.canvas);

    const ctx = this.canvas.getContext("2d");

    if (!ctx) throw new Error("Canvas 2D unavailable");

    this.ctx = ctx;
    this.resize();

    window.addEventListener("resize", () => this.resize());
  }

  resize(): void {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.max(1, rect.width);
    this.canvas.height = Math.max(1, rect.height);
  }

  render(): void {
    const { ctx, canvas } = this;

    ctx.fillStyle = "#101914";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(120,180,140,0.12)";

    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    ctx.fillStyle = "#18a875";
    ctx.fillRect(
      canvas.width / 2 - 35,
      canvas.height / 2 - 35,
      70,
      70
    );
  }

  start(): void {
    const loop = () => {
      this.render();
      requestAnimationFrame(loop);
    };
    loop();
  }

  show(visible: boolean): void {
    this.canvas.style.display = visible ? "block" : "none";
    if (visible) this.resize();
  }
}

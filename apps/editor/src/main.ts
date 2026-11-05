
import { Engine } from "../../../engine/core/Engine";
import "./styles.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header class="topbar">
  <div class="brand">
    <div class="logo">U</div>
    <div>
      <strong>UVADER</strong>
      <small>GAME ENGINE 0.1.0</small>
    </div>
  </div>
  <button id="play">Run Scene</button>
</header>

<div class="workspace">
  <aside class="sidebar">
    <h3>PROJECT</h3>
    <div class="tree-item">▾ Scenes</div>
    <div class="tree-child">Main Scene</div>
    <div class="tree-item">▸ Assets</div>
    <div class="tree-item">▸ Scripts</div>
    <div class="tree-item">▸ Materials</div>
  </aside>

  <main class="viewport-area">
    <div class="toolbar">
      <span>VIEWPORT</span>
      <div>
        <button id="mode2d" class="active">2D</button>
        <button id="mode3d">3D</button>
      </div>
    </div>
    <div id="viewport"></div>
    <footer id="mode-label">2D EDITOR</footer>
  </main>

  <aside class="inspector">
    <h3>INSPECTOR</h3>
    <p>Scene View</p>
    <small>Select an object to inspect it.</small>
  </aside>
</div>

<div class="bottom-bar">
  <span>UVADER TECHNOLOGIES</span>
  <span>2D + 3D RENDERING</span>
</div>
`;

const viewport = document.querySelector<HTMLElement>("#viewport")!;
const engine = new Engine(viewport);

const button2D = document.querySelector<HTMLButtonElement>("#mode2d")!;
const button3D = document.querySelector<HTMLButtonElement>("#mode3d")!;
const label = document.querySelector<HTMLElement>("#mode-label")!;

function switchMode(mode: "2D" | "3D") {
  engine.setMode(mode);
  button2D.classList.toggle("active", mode === "2D");
  button3D.classList.toggle("active", mode === "3D");
  label.textContent = `${mode} EDITOR`;
}

button2D.addEventListener("click", () => switchMode("2D"));
button3D.addEventListener("click", () => switchMode("3D"));

document.querySelector("#play")!.addEventListener("click", () => {
  console.log("Uvader Engine runtime is under development.");
});

console.log("Uvader Engine initialized.");

import "./style.css";
import { createInitialBoard } from "./chess/core/createInitialBoard";
import { renderBoard } from "./chess/ui/renderBoard";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="app">
    <h1 class="title">Browser Chess TS</h1>
    <div id="board" class="board"></div>
  </main>
`;

const boardElement = document.querySelector<HTMLElement>("#board");

if (!boardElement) {
  throw new Error("Board container not found");
}

const board = createInitialBoard();

renderBoard(boardElement, board);
import "./style.css";
import { createInitialBoard } from "./chess/core/createInitialBoard";
import { renderBoard } from "./chess/ui/renderBoard";
import { renderCoordinates } from "./chess/ui/renderCoordinates";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="app">
    <h1 class="title">Browser Chess TS</h1>

    <div class="board-layout">
      <div id="ranks" class="ranks"></div>

      <div class="board-area">
        <div id="board" class="board"></div>
        <div id="files" class="files"></div>
      </div>
    </div>
  </main>
`;

const boardElement = document.querySelector<HTMLElement>("#board");
const filesElement = document.querySelector<HTMLElement>("#files");
const ranksElement = document.querySelector<HTMLElement>("#ranks");

if (!boardElement || !filesElement || !ranksElement) {
  throw new Error("Board coordinate containers not found");
}

const board = createInitialBoard();

renderBoard(boardElement, board);
renderCoordinates(filesElement, ranksElement);
import type { Board } from "../types/board";
import { renderPiece } from "./renderPiece";

export function renderBoard(container: HTMLElement, board: Board): void {
  container.innerHTML = "";

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const square = document.createElement("div");
      const isLightSquare = (row + col) % 2 === 0;
      const piece = board[row][col];

      square.className = `square ${isLightSquare ? "light" : "dark"}`;

      if (piece) {
        square.textContent = renderPiece(piece);
      }

      container.appendChild(square);
    }
  }
}
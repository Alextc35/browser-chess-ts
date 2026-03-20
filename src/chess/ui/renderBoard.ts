export function renderBoard(container: HTMLElement): void {
  container.innerHTML = "";

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const square = document.createElement("div");
      const isLightSquare = (row + col) % 2 === 0;

      square.className = `square ${isLightSquare ? "light" : "dark"}`;
      container.appendChild(square);
    }
  }
}
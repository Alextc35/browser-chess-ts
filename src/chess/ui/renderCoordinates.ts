const files = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"] as const;

export function renderCoordinates(
  filesContainer: HTMLElement,
  ranksContainer: HTMLElement,
): void {
  filesContainer.innerHTML = "";
  ranksContainer.innerHTML = "";

  for (const file of files) {
    const fileLabel = document.createElement("span");
    fileLabel.className = "coordinate file-coordinate";
    fileLabel.textContent = file;
    filesContainer.appendChild(fileLabel);
  }

  for (const rank of ranks) {
    const rankLabel = document.createElement("span");
    rankLabel.className = "coordinate rank-coordinate";
    rankLabel.textContent = rank;
    ranksContainer.appendChild(rankLabel);
  }
}
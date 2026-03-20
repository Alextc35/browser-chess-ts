import type { Piece } from "../types/piece";

const pieceSymbols: Record<string, string> = {
  "white-pawn": "♙",
  "white-rook": "♖",
  "white-knight": "♘",
  "white-bishop": "♗",
  "white-queen": "♕",
  "white-king": "♔",
  "black-pawn": "♟",
  "black-rook": "♜",
  "black-knight": "♞",
  "black-bishop": "♝",
  "black-queen": "♛",
  "black-king": "♚",
};

export function renderPiece(piece: Piece): string {
  return pieceSymbols[`${piece.color}-${piece.type}`];
}
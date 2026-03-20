import { createBoard } from "./createBoard";
import type { Board } from "../types/board";
import type { Piece, PieceColor, PieceType } from "../types/piece";

function createPiece(type: PieceType, color: PieceColor): Piece {
  return { type, color };
}

export function createInitialBoard(): Board {
  const board = createBoard();

  const backRank: PieceType[] = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
  ];

  for (let col = 0; col < 8; col += 1) {
    board[0][col] = createPiece(backRank[col], "black");
    board[1][col] = createPiece("pawn", "black");

    board[6][col] = createPiece("pawn", "white");
    board[7][col] = createPiece(backRank[col], "white");
  }

  return board;
}
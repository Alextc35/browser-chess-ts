import type { Board } from "./board";
import type { PieceColor } from "./piece";
import type { Position } from "./position";

export type GameStatus =
  | "idle"
  | "playing"
  | "check"
  | "checkmate"
  | "stalemate";

export type GameState = {
  board: Board;
  currentTurn: PieceColor;
  selectedPosition: Position | null;
  status: GameStatus;
};
import type { Board } from "../types/board";

const BOARD_SIZE = 8;

export function createBoard(): Board {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => null),
  );
}
import type { Piece } from "./piece";

export type Square = Piece | null;

export type Board = Square[][];
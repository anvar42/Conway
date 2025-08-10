import { Cell } from "./cell.type";

export interface Environment {
    addCell: (cell: Cell) => void;

    start: () => void;
}

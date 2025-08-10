import { Cell } from "./cell.type";
import { Environment } from "./environment.type";

export class SimpleEnvironment implements Environment {
    addCell: (cell: Cell) => void;
    start: () => void;
}

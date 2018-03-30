import { Board } from '../models/board';
import { Point } from '../models/point';

const BOARD: Board = new Board();
for (var y = 1; y <= 10; y++) {
    for (var x = 1; x <= 10; x++) {
        BOARD.points.push(new Point(x, y));
    }
}

export { BOARD };
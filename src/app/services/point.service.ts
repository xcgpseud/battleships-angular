import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Point } from '../models/point';
import { Board } from '../models/board';
import { BOARD } from '../data/board';

import { of } from 'rxjs/observable/of';

@Injectable()
export class PointService {

  constructor() { }

  getPoint(x: number, y: number): Observable<Point> {
    return of(BOARD.points.find(p => p.x === x && p.y ===y ));
  }

}

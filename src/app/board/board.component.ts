import { Component, OnInit, Input } from '@angular/core';
import { Point } from '../models/point';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() point: Point;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getPoint(): void {
    
  }

  ngOnInit() {
  }

}

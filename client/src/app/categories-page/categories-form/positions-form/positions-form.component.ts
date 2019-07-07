import { Component, OnInit, Input } from '@angular/core';
import { PositionService } from 'src/app/shared/services/position.service';
import {Position} from '../../../shared/interface';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css']
})
export class PositionsFormComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
  @Input('categoryId') categoryId: string;
  positions: Position[] = [];
  constructor(private positionService: PositionService) { }

  ngOnInit() {

    this.positionService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions;
    }

    );

  }

}

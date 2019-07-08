import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { PositionService } from 'src/app/shared/services/position.service';
import {Position} from '../../../shared/interface';
import { MaterialService, MaterialInstance } from 'src/app/shared/classes/material.service';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css']
})
export class PositionsFormComponent implements OnInit , AfterViewInit, OnDestroy {

// tslint:disable-next-line: no-input-rename
  @Input('categoryId') categoryId: string;
  @ViewChild('modal') modalRef: ElementRef;
  positions: Position[] = [];
  loading = false;
  modal: MaterialInstance;
  constructor(private positionService: PositionService) { }

  ngOnInit() {

    this.loading = true;
    this.positionService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions;
      this.loading = false;
    });

  }
  ngOnDestroy() {
    this.modal.destroy();
  }
  ngAfterViewInit() {

    this.modal = MaterialService.initModal(this.modalRef);
  }
  onSelectPosition(position: Position) {
    this.modal.open();
  }
  onAddPosition(){
    this.modal.open();
  }

}

import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { PositionService } from 'src/app/shared/services/position.service';
import {Position} from '../../../shared/interface';
import { MaterialService, MaterialInstance } from 'src/app/shared/classes/material.service';
import { FormGroup , FormControl , Validators } from '@angular/forms';

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
  form: FormGroup;


  constructor(private positionService: PositionService) { }

  ngOnInit() {
          this.form = new FormGroup({
          name: new FormControl(null , Validators.required),
          cost: new FormControl(null , [Validators.required , Validators.min(1)])
      });
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
  onAddPosition() {

    this.modal.open();
  }
  onCancel() {
    this.modal.close();
  }
  onSubmit() {

  }
  onDeletePosition() {

  }


}

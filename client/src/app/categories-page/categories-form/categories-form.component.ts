import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { of } from 'rxjs';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { Category } from 'src/app/shared/interface';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  @ViewChild('input') inputRef : ElementRef
  form: FormGroup;
  image: File;
  imagePreview = '';
  isNew = true;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    });

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {

            if (params['id']) {
              this.isNew = false;
              return this.categoriesService.getById(params['id'])
            }

            return of(null)

          }
        )
      )

      .subscribe(
        (category : Category) => {
          if (category) {
            this.form.patchValue({ name: category.name });
            this.imagePreview = category.imageScr
            MaterialService.updateTextInputs();
          }
          this.form.enable();
        },
        error => MaterialService.toast(error.error.message))
  }


  triggerClick(){
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event : any){
    const file = event.target.files[0]


    const reader = new FileReader()

    reader.onload =() =>{
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)
  }
  onSubmit() {

  }

}

import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NewService } from '../../services/new.service';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';
import { NewsComponent } from '../news/news.component';
import { Response } from 'src/app/models/response';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
@Injectable()

export class EditionComponent implements OnInit {

  id: string;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  model = this.parent.crudNews;

  constructor(public modalRef: BsModalRef, private parent: AppComponent) { }

  ngOnInit() {
    this.id = this.model.selectedNew.id;
    this.form.get('title').setValue(this.model.selectedNew.title);
    this.form.get('description').setValue(this.model.selectedNew.description);
    this.form.get('image').setValue(this.model.selectedNew.image);
    this.form.get('author').setValue(this.model.selectedNew.author);
    this.form.get('place').setValue(this.model.selectedNew.place);
    this.form.get('date').setValue(this.model.selectedNew.date);
  }

  updateData() {
  }

  editNew() {
    this.model.putNew(this.id, this.form.value)
      .subscribe((res: Response) => {
        console.log(res);
        alert(res.message);
        this.modalRef.hide();
      }, err => {
        console.error(err);
        alert(err);
      });
  }

}

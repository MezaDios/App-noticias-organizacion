import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NewService } from '../../services/new.service';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
@Injectable()

export class EditionComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() author: string;
  @Input() date: string;
  @Input() description: string;
  @Input() image: string;
  @Input() place: string;

  model = this.parent.crudNews;

  constructor(public modalRef: BsModalRef, private parent: AppComponent) { }

  ngOnInit() {

  }

  editNew(form: NgForm) {
    console.log(form.value);
    /*this.model.putNew(form.value)
      .subscribe(res => {
        console.log(res);
        alert(res.status);
        this.parent.getNews();
        this.modalRef.hide();
      }, err => {
        console.error(err);
        alert(err);
      });*/
  }

}

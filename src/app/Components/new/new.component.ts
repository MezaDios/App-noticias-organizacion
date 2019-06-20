import { Component, OnInit, Input, Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/';
import { EditionComponent } from '../edition/edition.component';
import { Response } from 'src/app/models/response';
import { NewsComponent } from '../news/news.component';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
@Injectable()

export class NewComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() author: string;
  @Input() date: string;
  @Input() description: string;
  @Input() image: string;
  @Input() place: string;

  modalRef: BsModalRef;

  model = this.parent.crudNews;

  constructor(private parent: AppComponent,
    private modalService: BsModalService,
    public news: NewsComponent) {
  }

  removeNew() {
    if (window.confirm('Estás seguro de eliminar la noticia?')) {
      this.model.deleteNew(this.id)
        .subscribe((res: Response) => {
          console.log(res);
          alert(res.message);
          this.news.getNews();
        }, err => {
          console.error(err);
          alert(err);
        });
    }
  }

  openModal() {
    this.model.selectedNew.id = this.id;
    this.model.selectedNew.title = this.title;
    this.model.selectedNew.description = this.description;
    this.model.selectedNew.author = this.author;
    this.model.selectedNew.place = this.place;
    this.model.selectedNew.date = this.changeDateFormat(this.date);
    this.model.selectedNew.image = '';
    this.modalRef = this.modalService.show(EditionComponent);
  }
  ngOnInit() {
  }

  changeDateFormat(date: string) {
    const dateSplit = date.split('-');
    const day = dateSplit[2];
    const month = dateSplit[1];
    const year = dateSplit[0];
    console.log(`year ${year}`);
    console.log(`month ${month}`);
    console.log(`day ${day}`);
    return `${year}-${month}-${day}`;
  }

}

import { Component, OnInit } from '@angular/core';
import { NewService } from '../../services/new.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { New } from 'src/app/models/New.model';
import { AppComponent } from 'src/app/app.component';
import { Response } from 'src/app/models/response';
import { NewsComponent } from '../news/news.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [NewService]
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  model = this.parent.crudNews;

  constructor(private parent: AppComponent, private news: NewsComponent) { }

  ngOnInit() {
  }

  addNew() {
    const values = {
      id: '',
      title: this.form.get('title').value,
      author: this.form.get('author').value,
      place: this.form.get('place').value,
      date: this.form.get('date').value,
      description: this.form.get('description').value,
      image: this.changeImageFormat(this.form.get('image').value)
    };
    this.model.postNew(values).subscribe((res: Response) => {
      console.log(res);
      alert(res.message);
    }, (err: Error) => {
      console.error(err);
      alert(err);
    }, () => {
      this.form.reset();
      this.news.getNews();
      this.model.selectedNew = new New();
    });
  }

  changeImageFormat(image: string) {
    const path = `./IMGs/${image.substring(image.lastIndexOf('\\') + 1)}`;
    return path;
  }

}

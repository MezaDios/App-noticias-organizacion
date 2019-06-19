import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/New.model';
import { NewService } from 'src/app/services/new.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: New[];

  model = this.parent.crudNews;

  login = this.parent.login;

  constructor(private parent: AppComponent) {
    this.news = [];
  }

  getNews() {
    this.model.getNews()
      .subscribe(res => {
        console.log(this.news);

        this.news = res as New[];

        console.log(this.news);
      });
  }

  ngOnInit() {
    this.getNews();
  }

}

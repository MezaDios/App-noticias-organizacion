import { Component, OnInit } from '@angular/core';
import { NewService } from './services/new.service';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(public crudNews: NewService, public login: LoginService) {
    this.login.currentUser = {
      logged: true
    };
  }

  ngOnInit() {
  }
}

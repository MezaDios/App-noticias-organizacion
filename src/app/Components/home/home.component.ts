import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login = this.parent.login;

  constructor(private parent: AppComponent, private router: Router) { }

  ngOnInit() {
    if (this.login.currentUser.logged == false) {
      this.router.navigateByUrl('/home');
    }
  }

}

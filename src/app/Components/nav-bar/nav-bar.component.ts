import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  service = this.parent.login;

  constructor(private parent: AppComponent, private router: Router) {
  }

  ngOnInit() {
    if (this.service.currentUser.logged === false) {
      this.router.navigateByUrl('/login');
    }
  }

  logOff() {
    if (window.confirm('¿Estás seguro de querer cerrar sesión?')) {
      this.service.currentUser = {
        logged: false
      };
      this.router.navigateByUrl('/login');
    }
  }

}

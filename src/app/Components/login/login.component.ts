import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/currentUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loginService = this.parent.login;

  constructor(
    private router: Router,
    private parent: AppComponent) { }

  ngOnInit() {

  }

  login() {
    const data = {
      user: this.form.get('user').value,
      password: this.form.get('password').value
    }
    this.loginService.getLogin(data).subscribe(
      (res: CurrentUser) => {
        this.loginService.currentUser = res;
        console.log(this.loginService.currentUser);
        if (this.loginService.currentUser.logged === false) {
          alert('Usuario o contraseña incorrectos!!!');
        } else {
          this.form.reset();
          this.router.navigateByUrl('/home');
        }
      },
      (err: Error) => console.log(err)
    );
  }

}

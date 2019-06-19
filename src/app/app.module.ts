import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NewComponent } from './Components/new/new.component';
import { FormComponent } from './Components/form/form.component';
import { EditionComponent } from './Components/edition/edition.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsComponent } from './Components/news/news.component';
import { SponsorsComponent } from './Components/sponsors/sponsors.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewComponent,
    FormComponent,
    EditionComponent,
    LoginComponent,
    HomeComponent,
    NewsComponent,
    SponsorsComponent,
    ActivitiesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditionComponent]
})
export class AppModule { }

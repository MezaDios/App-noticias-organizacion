import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { SponsorsComponent } from './Components/sponsors/sponsors.component';
import { NewsComponent } from './Components/news/news.component';
import { ActivitiesComponent } from './Components/activities/activities.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/news',
    component: NewsComponent
  },
  {
    path: 'home/sponsors',
    component: SponsorsComponent
  },
  {
    path: 'home/activities',
    component: ActivitiesComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

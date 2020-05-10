import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginathenticationComponent } from './loginathentication/loginathentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:LoginathenticationComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'dashboard/:usermame',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router'

import { AdminRoutingModule } from './admin-routing.module';
import { LoginathenticationComponent } from './loginathentication/loginathentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [LoginathenticationComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminModule { }

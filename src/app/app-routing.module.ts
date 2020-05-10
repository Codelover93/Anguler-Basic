import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NtfComponent } from './ntf/ntf.component';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./user/user.module').then(module=>module.UserModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path:'**',
    component: NtfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

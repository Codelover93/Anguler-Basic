import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }

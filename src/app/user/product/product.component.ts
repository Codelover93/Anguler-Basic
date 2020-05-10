import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any[] = [
    {
      "id": 1,
      "name": "Awesome product 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "120.00",
      "quantity": 56840,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg",
      "addqty": 0,
      "qtyerr": ''
    }, {
      "id": 2,
      "name": "Awesome product 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "99.00",
      "quantity": 9358,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485077/shoes-3_rk25rt.jpg",
      "addqty": 0,
      "qtyerr": ''
    }, {
      "id": 3,
      "name": "Awesome product 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "140.00",
      "quantity": 90316,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-2_g4qame.jpg",
      "addqty": 0,
      "qtyerr": ''
    }, {
      "id": 4,
      "name": "Awesome product 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "220.00",
      "quantity": 5899,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-4_vgfjy9.jpg",
      "addqty": 0,
      "qtyerr": ''
    }
];

data;
  constructor(private router:Router, private sd:SenddataService) { }

  ngOnInit(): void {
  }

  onclick(productid,qty){
    this.data={productid:productid,qty:qty};
    this.sd.setdata(this.data);
    if(qty==0){
      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].id==productid){
          this.products[i].qtyerr="Please select atlist one quantity";
        }
      }
    }else{
      this.router.navigate(['/cart']);
    }
  }

  addqty(addqty,amount,productid){
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id==productid){
        this.products[i].addqty=parseInt(addqty+amount);
        this.products[i].qtyerr="";
      }
    }
  }

}
